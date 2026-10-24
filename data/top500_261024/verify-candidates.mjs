import fs from 'node:fs';
import assert from 'node:assert/strict';
import zlib from 'node:zlib';
import {amazonFields} from '../pages_density_261021/collect.mjs';
import {referenceRangeCount} from '../../site/build.mjs';
const d='data/top500_261024/',read=p=>JSON.parse(fs.readFileSync(p)),c=read(d+'compiled.json'),e=read(d+'candidate-editions.json'),r=read(d+'candidate-reference-pages.json'),n=read(d+'candidate-enrichment.json').books,changes=read(d+'review.json');
const ids=new Set(c.currentBooks.map(b=>b.id));
assert.deepEqual(Object.keys(r).sort(),[...ids].sort());
for(const [id,x] of Object.entries(e))assert(ids.has(id)&&Number.isInteger(x.pages)&&x.pages>0&&x.id&&/^https?:/.test(x.url)&&x.retrieved&&x.language&&x.format&&Number.isInteger(x.year),'Invalid edition '+id);
for(const [id,x] of Object.entries(r))if(x.pages!==null){assert(x.edition?.id&&/^https?:/.test(x.url)&&x.ranges?.length,id);assert.equal(x.pages,referenceRangeCount(x.ranges),id);}
for(const x of changes){
 const b=c.currentBooks.find(b=>b.id===x.id),p=n[b.id]?.edition||e[b.id];
 assert(Math.abs(b.bonuses.RD-(r[b.id].pages===null||!p?0:20*r[b.id].pages/p.pages))<1e-10,'RD mismatch '+b.id);
 if(x.amazon){
  assert(x.amazon.count>0&&fs.existsSync(x.amazon.sourceSnapshot),'Unsupported Amazon aggregate '+b.id);
  const html=zlib.gunzipSync(fs.readFileSync(x.amazon.sourceSnapshot)).toString(),fields=amazonFields(html);
  const aggregate=html.match(/data-hook="total-review-count"[^>]*>([\s\S]*?)<\/span>/)?.[1].match(/([\d,]+) global ratings?/);
  assert.equal(Number(aggregate?.[1].replaceAll(',','')),x.amazon.count,'Snapshot aggregate mismatch '+b.id);
  if(fields.productId)assert.equal(fields.productId,x.amazon.asin,'Snapshot product mismatch '+b.id);
 }
 if(x.reference)assert(x.reference.pages<=(p?.pages??Infinity),'Inconsistent ratio requiring review '+b.id);
}
console.log({editions:Object.keys(e).length,referenceRecords:Object.keys(r).length,reviewed:changes.length,result:'Candidate validation passed'});
