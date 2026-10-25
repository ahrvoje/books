import fs from 'node:fs';
import assert from 'node:assert/strict';
const dir='data/metadata3000_261025',read=p=>JSON.parse(fs.readFileSync(p)),changes=read(dir+'/review.json'),manual=read(dir+'/manual.json');
const valid=s=>/^\d{9}[\dX]$/.test(s)?[...s].reduce((n,c,i)=>n+(10-i)*(c==='X'?10:+c),0)%11===0:/^\d{13}$/.test(s)&&[...s].reduce((n,c,i)=>n+(i%2?3:1)*+c,0)%10===0;
for(const x of changes){
 if(x.edition)for(const isbn of [...x.edition.isbn10||[],...x.edition.isbn13||[]])assert(valid(isbn),'Invalid ISBN: '+x.id+' '+isbn);
 if(x.purchaseUrl&&!x.linkEvidence.searchCorrection)assert(valid(x.purchaseUrl.split('/').at(-1)),'Invalid purchase ISBN: '+x.id);
 if(x.reference&&x.assessment.pages&&x.reference.ranges.some(r=>r.end>x.assessment.pages))assert(x.assessment.reason.includes('Extent conflict'));
}
for(const [id,m]of Object.entries(manual))if(m.product?.replaceExisting||m.searchCorrection)assert(changes.some(x=>x.id===id&&x.purchaseUrl),'Manual link correction not applied: '+id);
const baseline=read(read(dir+'/baseline.json').compiled),after=read(dir+'/compiled.json'),old=new Map(baseline.currentBooks.map(b=>[b.id,b]));
assert.equal(old.size,after.currentBooks.length);
for(const b of after.currentBooks){const a=old.get(b.id);assert(a);assert.equal(a.status,b.status);assert.deepEqual(a.sources,b.sources);assert.deepEqual(a.raw,b.raw);}
const files=fs.readdirSync(dir+'/raw'),audit={validated:true,books:changes.length,collectionFiles:files.length,amazonSnapshots:files.filter(f=>/^amazon-cache-\d+\.json$/.test(f)).length,googleSearchBatches:files.filter(f=>/^page-search-\d+\.json$/.test(f)).length,retailSearchBatches:files.filter(f=>/^retail-pages-\d+\.json$/.test(f)).length,unchangedMembership:true,unchangedSourceIds:true,unchangedRawScores:true,extentConflicts:changes.filter(x=>x.assessment?.reason.includes('Extent conflict')).map(x=>({id:x.id,title:x.title,pages:x.assessment.pages,referenceEditionPages:x.reference?.edition.pages,note:x.assessment.reason}))};
fs.writeFileSync(dir+'/audit.json',JSON.stringify(audit,null,2)+'\n');console.log(audit);
