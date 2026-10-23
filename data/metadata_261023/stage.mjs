import fs from 'node:fs';
import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import {buildDataset} from '../../site/build.mjs';
const dir='data/metadata_261023/',read=p=>JSON.parse(fs.readFileSync(p)),write=(p,v)=>fs.writeFileSync(p,JSON.stringify(v,null,2)+'\n');
assert(!fs.existsSync(dir+'applied.json'),'This metadata batch has already been applied; do not replace its baseline.');
const t=read(dir+'targets.json'),library=read(dir+'library.json'),google=read(dir+'google.json'),amazon=read(dir+'amazon.json'),cache=read(dir+'amazon-cache.json').books,publishers=read(dir+'publishers.json');
const publisherProducts=read(dir+'publisher-products.json');
const manualLinks=read(dir+'manual-links.json');
const manualAmazon=read(dir+'manual-amazon.json');
const catalogPath=read('data/catalog.json').compiled,c=read(catalogPath),ed=read('site/editions.json'),en=read('site/enrichment.json'),refs=read('site/reference-pages.json');
const baseline=buildDataset(),byId=new Map(baseline.books.map(b=>[b.id,b])),books=new Map(c.currentBooks.map(b=>[b.id,b]));
const manual=read(dir+'manual.json');
for(const file of ['manual-more.json','manual-final.json','manual-last.json','manual-series.json','manual-corrections.json','manual-library-extents.json'])for(const [id,pages,isbn,format,year,url,confidence,notes] of read(dir+file))manual[id]={pages,id:isbn.includes(':')||isbn.startsWith('/books/')?isbn:'ISBN:'+isbn,format,year,url,confidence,notes,language:'English',retrieved:'2026-10-23',source:{file:dir+file}};
const excludedEditions=new Set(['n88837eb597','intake-0203','intake-0837','intake-0172','n62ef81f195','intake-0153','q0760','n42dad48542','n86606a9cda','intake-0190','intake-0291','intake-0843']);
const seriesProducts=new Set(['n88837eb597','intake-0203','intake-0837','intake-0172','n62ef81f195','intake-0153','q0760','intake-0190','intake-0291','intake-0843','q0484']);
const completeProducts={'intake-0837':['0415862027']};
const corrections=new Set(['intake-0009',...read(dir+'manual-corrections.json').map(r=>r[0])]);
const wrongLinkBooks=new Set(['intake-0552','n9bf0b7ae1d',...read(dir+'link-identity-audit.json').flagged.map(b=>b.id),...read(dir+'library-link-audit.json').confirmedWrongBooks]);
const changes={pages:[],references:[],ratings:[],links:[],unresolved:{}};
const canonical=url=>{const m=url?.match(/https?:\/\/([^/]*amazon\.[^/]+)\/(?:[^/]+\/)?(?:dp|gp\/product)\/([A-Z0-9]{10})/i);return m?'https://'+m[1]+'/dp/'+m[2]:null;};
const editionKeys=e=>new Set([e?.id,...e?.isbn||[]].filter(Boolean).map(s=>String(s).replace(/^(?:ISBN|ASIN):/,'')).flatMap(s=>{if(/^978\d{10}$/.test(s)){const n=s.slice(3,12),v=(11-[...n].reduce((a,c,i)=>a+(10-i)*+c,0)%11)%11;return[s,n+(v===10?'X':v)];}return[s];}));
const sameEdition=(a,b)=>{const keys=editionKeys(a);return [...editionKeys(b)].some(k=>keys.has(k));};
for(const id of new Set([...t.pages,...Object.keys(manual)])){
 const b=books.get(id),old=byId.get(id)?.edition;if(!b||excludedEditions.has(id)&&!manual[id]||old&&!corrections.has(id))continue;
 const choices=library[id]?.editions.filter(e=>['English','Croatian'].includes(e.language)&&!/(?:electronic|ebook|digital|audio|microform)/i.test(e.format)&&e.year>=b.year-2)||[];
 const p=publisherProducts[id]?.find(p=>/paperback/i.test(p.format))||publisherProducts[id]?.[0];
 const publisherEdition=p&&p.pages>0?{pages:p.pages,id:'ISBN:'+p.isbn,url:p.source.url,format:p.format,year:p.year,language:'English',confidence:'high',retrieved:p.source.retrieved,source:p.source,notes:'Publisher structured print-edition record; title, author, ISBN, format, year, page count and Amazon vendor identifier read together.'}:null;
 const e=structuredClone(manual[id]||publisherEdition||amazon.books[id]?.edition||choices.find(e=>/paper|soft/i.test(e.format))||choices[0]);if(!e)continue;
 if(e.format==='Print (library record; binding not stated)')e.format='Not stated by catalog';
 assert(e.pages>0&&e.id&&e.url&&e.year&&e.language&&e.format);
 if(old&&old.pages===e.pages&&old.id===e.id)continue;
 ed[id]=e;if(en.books[id]?.edition)en.books[id].edition=e;
 if(b.edition)b.edition=e;
 changes.pages.push({id,title:b.title,before:old||null,after:e,target:t.pages.includes(id)});
}
// The existing series extent was copied from volume five; preserve it only in the audit.
for(const id of ['n88837eb597']){
 const b=books.get(id),old=byId.get(id).edition;if(!old)continue;
 delete ed[id];if(en.books[id])delete en.books[id].edition;delete b.edition;
 changes.pages.push({id,title:b.title,before:old,after:null,target:false,reason:'The nominated series has unspecified volume scope. The previous 95-page value describes volume five (ISBN0821829041), not the series. Confirmed by the archived Amazon product and existing Open Library edition record.'});
}
const manualRefs={};
for(const file of ['manual-references.json','manual-web-references.json','manual-web-references-2.json','manual-web-references-3.json','manual-web-references-4.json','manual-web-references-5.json'])for(const [id,editionId,url,ranges,evidence] of read(dir+file)){
 const b=books.get(id),spans=ranges.map(([start,end,label])=>({start,end,label,evidence,method:'catalogued-range'}));
 const pages=new Set(spans.flatMap(s=>Array.from({length:s.end-s.start+1},(_,i)=>s.start+i))).size;
 manualRefs[id]={pages,confidence:'moderate',method:'reviewed-library-range',ranges:spans,edition:{id:editionId,title:b.title,author:b.author,language:'English'},url,source:{retrieved:'2026-10-23',file:dir+file,evidence},limitation:'Only the documented sections are counted. Inline citations and online supplements are excluded. Reference pages are not a measure of evidence quality.'};
}
for(const id of new Set([...t.references,...Object.keys(manualRefs)])){
 if(refs[id]?.pages!==null||excludedEditions.has(id))continue;
 const r=structuredClone(manualRefs[id]||library[id]?.reference||google[id]?.reference);if(!r)continue;
 r.sameEditionAsPG=sameEdition(r.edition,en.books[id]?.edition||ed[id]);refs[id]=r;
 changes.references.push({id,title:books.get(id).title,after:r,target:t.references.includes(id)});
}
const report='analysis/analysis_metadata_261023_1040.md';
for(const id of t.ratings){
 const b=books.get(id),a=manualAmazon[id]||amazon.books[id]?.amazon;if(!a||b.amazon?.count!=null)continue;
 if(seriesProducts.has(id)&&!completeProducts[id]?.includes(a.asin)&&!/(?:complete|boxed|box set|[2-9][ -]volume set)/i.test(a.productTitle))continue;
 assert(Number.isSafeInteger(a.count)&&a.count>=0&&a.verified&&a.evidence.length);
 const before={amazon:b.amazon,total:b.total,deductions:b.deductions,verdict:b.verdict};b.amazon=a;
 const o=a.count<10?-20:a.count<100?-10:a.count<1000?-5:0;
 if(b.deductions)b.deductions={...b.deductions,O15:o};if('O15'in b)b.O15=o;
 const points=b.points||b.criteria.map(r=>r.contribution),deductions=b.deductions||{T11:b.T11,T12:b.T12,H13:b.H13,P14:b.P14,O15:o};
 b.total=points.reduce((a,x)=>a+x,0)+Object.values(deductions).reduce((a,x)=>a+x,0);b.displayScore=b.total.toFixed(2);b.obscurityFallback=false;
 b.verdict=b.id.startsWith('intake-')?(b.total>=80?'High priority':b.total>=65?'Recommend':b.total>=50?'Selective':'Low priority'):(b.total>=85?'Recommend':b.total>=75?'Consider':b.total>=65?'Selective':b.total>=50?'Low priority':'Poor fit');
 b.ratingReview={date:'2026-10-23',analysis:report+'#'+id,previousCount:null,previousTotal:before.total};
 changes.ratings.push({id,title:b.title,before,after:{amazon:a,total:b.total,deductions,verdict:b.verdict}});
}
for(const old of baseline.books){
 const b=books.get(old.id),url=old.purchaseUrl,observed=cache[b.id]||[];
 const knownEditionKeys=new Set([manual[b.id],old.edition,...library[b.id]?.editions||[]].flatMap(e=>[...editionKeys(e)]));
 const pub=(publishers[b.id]?.links||[]).map(canonical).filter(u=>u&&knownEditionKeys.has(u.split('/').at(-1)));
 const direct=canonical(url),badSyntax=direct&&/[<>]/.test(url),search=!direct;
 const ebook=['intake-0133','intake-0190','intake-0365','intake-0405','intake-0407','intake-0548','intake-0093','intake-0195'].includes(b.id);
 const wrongBook=wrongLinkBooks.has(b.id);
 const failedIdentifier=direct&&old.amazon?.count==null&&amazon.books[b.id]?.attempts.some(p=>p.status===404&&p.url?.split('/').at(-1)===direct.split('/').at(-1));
 let chosen=null,reason=null,evidence=null;
 if(badSyntax){chosen=direct;reason='Removed stray angle bracket from product URL.';evidence={oldUrl:url};}
 if((search||ebook||wrongBook||failedIdentifier)&&(!seriesProducts.has(b.id)||completeProducts[b.id]?.includes(amazon.books[b.id]?.product?.productId))){
  const candidates=observed.filter(r=>(!ebook||/paper|hard|soft/i.test(r.format||r.byline))&&!/(?:Edizione (?!Inglese|Croato)\w+|Wydanie:\s*(?!Angielski|Chorwacki)\w+|Deutsch|Tedesco|Allemand)/i.test(r.byline||'')).sort((a,b)=>{const rank=r=>(/paper|soft|flessibile|Miękka/i.test(r.format||r.byline)?0:10)+(/amazon\.de\//.test(r.url)?0:/amazon\.com\//.test(r.url)?1:2);return rank(a)-rank(b);});
  const product=amazon.books[b.id]?.product;
  if(manualLinks[b.id]){chosen=manualLinks[b.id].url;evidence=manualLinks[b.id];}
  else if(publisherProducts[b.id]?.length){const p=publisherProducts[b.id].find(p=>/paperback/i.test(p.format))||publisherProducts[b.id][0];chosen=p.url;evidence=p;}
  else if(pub.length){chosen=pub.find(u=>/amazon\.com\//.test(u))||pub[0];evidence=publishers[b.id].source;}
  else if(product){chosen=canonical(product.url);evidence=product;}
  else if(candidates.length){chosen=canonical(candidates[0].url);evidence=candidates[0];}
  else if(b.amazon?.count!=null){chosen=canonical(b.amazon.url);evidence=b.amazon;}
  if(chosen)reason=wrongBook?'Replaced the identifier of a different book with an observed matching product.':ebook?'Replaced ebook-ISBN product guess with an observed print product.':failedIdentifier?'Replaced an unverified product identifier after a failed lookup with an observed matching product.':'Replaced search URL with an observed matching book product.';
 }
 if(chosen&&chosen!==url){b.purchaseUrl=chosen;b.titleCell=(b.titleCell||'['+b.title+']('+url+')').replace(/\]\(.*\)$/,']('+chosen+')');changes.links.push({id:b.id,title:b.title,before:url,after:chosen,reason,evidence});}
}
for(const field of ['pages','ratings','references'])changes.unresolved[field]=t[field].filter(id=>!changes[field].some(x=>x.id===id)).map(id=>({id,title:books.get(id).title,reason:excludedEditions.has(id)?'Whole-work or edition identity unresolved; a partial volume, excerpt or unverified translation cannot supply this value.':field==='ratings'?(amazon.books[id]?.reason||'Amazon pass paused after access check; no verified aggregate.'):field==='references'?'No complete reference range established in cached records, library editions, Google contents or targeted catalog search.':'No matching print edition with a verified page count established.'}));
const counts={pages:changes.pages.filter(x=>x.target).length,pageCorrections:changes.pages.filter(x=>!x.target).length,ratings:changes.ratings.length,references:changes.references.filter(x=>x.target).length,extraReferences:changes.references.filter(x=>!x.target).length,links:changes.links.length};
changes.counts=counts;changes.report=report;changes.catalog=catalogPath;changes.baselineHashes=Object.fromEntries([catalogPath,'site/editions.json','site/enrichment.json','site/reference-pages.json','RECOMMENDED_BOOKS.md','VETOED_BOOKS.md','SOURCES.md','EXCLUDED_BOOKS.md'].map(p=>[p,crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex')]));
write(dir+'changes.json',changes);write(dir+'staged-editions.json',ed);write(dir+'staged-references.json',refs);
// The full catalog is written only when applying; this staging pass has no active-data impact.
if(process.argv.includes('--apply')){
 assert(!fs.existsSync(dir+'applied.json'),'This metadata batch has already been applied.');
 const byIdentity=new Map(c.currentBooks.map(b=>[b.author+'|'+(b.titleCell?.match(/^\[([^\]]+)\]/)?.[1]||b.title),b]));
 const changed=new Set([...changes.pages,...changes.ratings,...changes.links].map(x=>x.id));
 for(const file of ['RECOMMENDED_BOOKS.md','VETOED_BOOKS.md']){
  let lines=fs.readFileSync(file,'utf8').split(/\r?\n/);const rec=file.startsWith('RECOMMENDED');
  lines=lines.map(line=>{if(!/^\| \d{4}-/.test(line))return line;const cells=line.split('|').slice(1,-1).map(s=>s.trim()),title=cells[3].match(/^\[([^\]]+)\]/)?.[1]||cells[3],b=byIdentity.get(cells[2]+'|'+title);assert(b,'Unknown ledger identity '+title);if(!changed.has(b.id))return line;
   if(changes.links.some(x=>x.id===b.id)&&rec)cells[3]=cells[3].replace(/\]\(.*\)$/,']('+b.purchaseUrl+')');
   cells[4]=b.total.toFixed(2);const e=(rec?en.books[b.id]?.edition:null)||ed[b.id];cells[rec?6:8]=e?'['+e.pages+']('+e.url+')':'Unknown';cells[rec?7:9]=b.amazon?.count==null?'Unknown':'['+b.amazon.count+']('+b.amazon.url+')';return'| '+cells.join(' | ')+' |';});
  if(rec){const rows=lines.filter(l=>/^\| \d{4}-/.test(l)).map(line=>{const cells=line.split('|').slice(1,-1).map(s=>s.trim()),title=cells[3].match(/^\[([^\]]+)\]/)?.[1]||cells[3];return{line,total:byIdentity.get(cells[2]+'|'+title).total};}).sort((a,b)=>b.total-a.total);let i=0;lines=lines.map(l=>/^\| \d{4}-/.test(l)?rows[i++].line:l);}
  fs.writeFileSync(file,lines.join('\n'));
 }
 write(catalogPath,c);write('site/editions.json',ed);write('site/enrichment.json',en);write('site/reference-pages.json',refs);write(dir+'applied.json',{applied:new Date().toISOString(),counts,baselineHashes:changes.baselineHashes});
}
console.log(counts);console.log('Unresolved pages:',changes.unresolved.pages.map(x=>x.title));
