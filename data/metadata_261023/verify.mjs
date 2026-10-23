import fs from 'node:fs';
import crypto from 'node:crypto';
import zlib from 'node:zlib';
import assert from 'node:assert/strict';
import {buildDataset} from '../../site/build.mjs';
const dir='data/metadata_261023/',read=p=>JSON.parse(p.endsWith('.gz')?zlib.gunzipSync(fs.readFileSync(p)):fs.readFileSync(p));
const hash=v=>crypto.createHash('sha256').update(JSON.stringify(v)).digest('hex');
const catalog=()=>read(read('data/catalog.json').compiled);
const allowed=new Set(['edition','amazon','deductions','O15','total','displayScore','obscurityFallback','verdict','ratingReview','purchaseUrl','titleCell']);
const unchanged=b=>Object.fromEntries(Object.entries(b).filter(([k])=>!allowed.has(k)));
const fixedFiles=['SOURCES.md','EXCLUDED_BOOKS.md'];
if(process.argv.includes('--capture')){
 assert(!fs.existsSync(dir+'invariants.json.gz'),'Baseline already captured.');
 const c=catalog(),d=buildDataset();
 const snapshot={books:Object.fromEntries(c.currentBooks.map(b=>[b.id,{fixed:hash(unchanged(b)),mutable:Object.fromEntries([...allowed].filter(k=>k in b).map(k=>[k,b[k]]))}])),
  catalog:Object.fromEntries(Object.entries(c).filter(([k])=>k!=='currentBooks').map(([k,v])=>[k,hash(v)])),files:Object.fromEntries(fixedFiles.map(p=>[p,hash(fs.readFileSync(p,'utf8'))])),
  editions:read('site/editions.json'),enrichment:read('site/enrichment.json'),references:read('site/reference-pages.json'),coverage:{books:d.books.length,pages:d.books.filter(b=>b.edition).length,ratings:d.books.filter(b=>b.amazon?.count!=null).length,references:d.books.filter(b=>b.referencePages?.pages!=null).length}};
 fs.writeFileSync(dir+'invariants.json.gz',zlib.gzipSync(JSON.stringify(snapshot)));console.log('Captured baseline',snapshot.coverage);
}else{
 const old=read(dir+'invariants.json.gz'),changes=read(dir+'changes.json'),c=catalog(),d=buildDataset();
 assert.equal(c.currentBooks.length,Object.keys(old.books).length);assert.equal(new Set(c.currentBooks.map(b=>b.id)).size,c.currentBooks.length);
 for(const [k,h]of Object.entries(old.catalog))assert.equal(hash(c[k]),h,'Historical catalog field changed: '+k);
 for(const [p,h]of Object.entries(old.files))assert.equal(hash(fs.readFileSync(p,'utf8')),h,p+' changed');
 const ids=kind=>new Set(changes[kind].map(x=>x.id)),pg=ids('pages'),rp=ids('references'),ar=ids('ratings'),ln=ids('links');
 for(const b of c.currentBooks){
  const before=old.books[b.id];assert(before);assert.equal(hash(unchanged(b)),before.fixed,'Unexpected book mutation '+b.id);
  const permitted=new Set([...(pg.has(b.id)?['edition']:[]),...(ln.has(b.id)?['purchaseUrl','titleCell']:[]),...(ar.has(b.id)?['amazon','deductions','O15','total','displayScore','obscurityFallback','verdict','ratingReview']:[])]);
  for(const k of allowed)if(!permitted.has(k))assert.deepEqual(b[k],before.mutable[k],b.id+' unexpected '+k);
  if(ar.has(b.id)){const n=b.amazon.count,o=n<10?-20:n<100?-10:n<1000?-5:0;assert.equal(b.deductions?.O15??b.O15,o);assert(Math.abs(b.total-(before.mutable.total+o-(before.mutable.deductions?.O15??before.mutable.O15??0)))<1e-10,b.id+' score delta');if(b.deductions)for(const k of ['T11','T12','H13','P14'])assert.equal(b.deductions[k],before.mutable.deductions[k],b.id+' changed '+k);assert(b.amazon.verified&&b.amazon.sourceSnapshot&&fs.existsSync(b.amazon.sourceSnapshot));}
 }
 for(const [path,key,changed]of [['site/editions.json','editions',pg],['site/reference-pages.json','references',rp]]){
  const now=read(path);for(const [id,before]of Object.entries(old[key]))if(!changed.has(id))assert.deepEqual(now[id],before,path+' unexpected change '+id);
 }
 const en=read('site/enrichment.json');for(const [id,before]of Object.entries(old.enrichment.books)){const after=structuredClone(en.books[id]),prior=structuredClone(before);if(pg.has(id)){delete after.edition;delete prior.edition;}assert.deepEqual(after,prior,'Enrichment mutation '+id);}
 for(const x of changes.references){const r=x.after,pages=new Set(r.ranges.flatMap(({start,end})=>{assert(start>0&&end>=start);return Array.from({length:end-start+1},(_,i)=>start+i);}));assert.equal(r.pages,pages.size);assert(r.edition.id&&r.url&&r.source);const b=d.books.find(b=>b.id===x.id);if(r.sameEditionAsPG)assert(Math.max(...r.ranges.map(s=>s.end))<=b.edition.pages,x.id+' references exceed matching edition');}
 for(const x of changes.links)assert(/^https:\/\/[^/]*amazon\.[^/]+\/dp\/[A-Z0-9]{10}$/.test(x.after),x.id+' malformed product URL');
 const byIdentity=new Map(c.currentBooks.map(b=>[b.author+'|'+(b.titleCell?.match(/^\[([^\]]+)\]/)?.[1]||b.title),b.total]));
 const ordered=fs.readFileSync('RECOMMENDED_BOOKS.md','utf8').split(/\r?\n/).filter(l=>/^\| \d{4}-/.test(l)).map(line=>{const cells=line.split('|').slice(1,-1).map(s=>s.trim());return byIdentity.get(cells[2]+'|'+(cells[3].match(/^\[([^\]]+)\]/)?.[1]||cells[3]));});
 assert(ordered.every((n,i)=>Number.isFinite(n)&&(!i||ordered[i-1]>=n)),'Ledger must be sorted by unrounded totals.');
 const coverage={books:d.books.length,pages:d.books.filter(b=>b.edition).length,ratings:d.books.filter(b=>b.amazon?.count!=null).length,references:d.books.filter(b=>b.referencePages?.pages!=null).length};
 assert.equal(coverage.books,old.coverage.books);assert.equal(coverage.pages,old.coverage.pages+changes.pages.filter(x=>!x.before).length-changes.pages.filter(x=>!x.after).length);assert.equal(coverage.ratings,old.coverage.ratings+ar.size);assert.equal(coverage.references,old.coverage.references+rp.size);
 console.log('Verified metadata, scores, identities, membership, source counts, history and untouched fields.',coverage);
 fs.writeFileSync(dir+'verification.json',JSON.stringify({verified:new Date().toISOString(),coverage,counts:changes.counts},null,2)+'\n');
}
