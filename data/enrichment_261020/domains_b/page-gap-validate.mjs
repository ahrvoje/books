import fs from 'node:fs';
const dir='data/enrichment_261020/domains_b/';
const ids=JSON.parse(fs.readFileSync(dir+'page-gap-ids.json','utf8'));
const results=JSON.parse(fs.readFileSync(dir+'page-gap-results.json','utf8'));
const errors=[];
const isbnValid=s=>s.length===13?[...s].reduce((a,c,i)=>a+Number(c)*(i%2?3:1),0)%10===0:[...s].reduce((a,c,i)=>a+(c==='X'?10:Number(c))*(10-i),0)%11===0;
for(const id of ids){
 const r=results[id];
 if(!r){errors.push(`${id}: missing result`);continue;}
 if(!r.edition){if(!r.reason||!r.refs?.length)errors.push(`${id}: unresolved without audit`);continue;}
 const e=r.edition;
 for(const key of ['id','url','retrieved','language','format','title','authors','publisher','notes'])if(typeof e[key]!=='string'||!e[key])errors.push(`${id}: ${key} missing`);
 if(!Number.isInteger(e.pages)||e.pages<=0)errors.push(`${id}: pages invalid`);
 if(!Number.isInteger(e.year)||e.year>2026)errors.push(`${id}: year invalid`);
 if(!['high','moderate','low'].includes(e.confidence))errors.push(`${id}: confidence invalid`);
 if(!/^https:\/\//.test(e.url))errors.push(`${id}: URL invalid`);
 for(const isbn of [...e.isbn10,...e.isbn13])if(!isbnValid(isbn))errors.push(`${id}: ISBN checksum ${isbn}`);
}
for(const id of Object.keys(results))if(!ids.includes(id))errors.push(`${id}: unassigned result`);
const audit={
 retrieved:'2026-10-20',
 assigned:ids.length,
 reviewed:Object.keys(results).length,
 resolved:Object.values(results).filter(r=>r.edition).length,
 unresolved:ids.filter(id=>!results[id]?.edition),
 confidence:Object.values(results).reduce((a,r)=>{if(r.edition)a[r.edition.confidence]=(a[r.edition.confidence]||0)+1;return a;},{}),
 limitations:[
  'Page counts identify particular editions; they are not timeless work-level lengths.',
  'Library main numbered extents and publisher marketed product extents are recorded as explicitly stated, with notes where they differ. Front matter and plate counts are not silently added.',
  'Print binding remains explicitly unspecified where the source does not establish it.',
  'g0030 uses 364 pages from two matching retail edition records at moderate confidence. Publisher verifies work identity but does not state pagination.',
  'g0742 is an audio original; listening duration is not converted into pages.',
  'g0194 uses an independent CiNii 298-page numbered extent and publisher-confirmed ISBN; the corrupted Open Library description was rejected.',
  'No original-publication-year or evaluation-ledger fields were changed.'
 ],
 errors
};
fs.writeFileSync(dir+'page-gap-audit.json',JSON.stringify(audit,null,2)+'\n');
console.log(JSON.stringify(audit,null,2));
if(errors.length)process.exitCode=1;
