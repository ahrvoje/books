import fs from 'node:fs';
import assert from 'node:assert/strict';
import {REGISTRY} from '../../site/model.mjs';
const dir='data/remaining_261021/',j=p=>JSON.parse(fs.readFileSync(p)),c=j(dir+'compiled.json'),review=j(dir+'review.json'),prep=j(dir+'prepared.json');
const all=[...c.currentBooks,...c.exclusions];assert.equal(new Set(all.map(b=>b.id)).size,all.length);
assert.equal(review.resolved.length+review.pendingAfter,review.expandedRecords);
for(const b of c.currentBooks){assert.equal(b.raw.length,10);const points=b.raw.map((v,i)=>{assert(Number.isFinite(v)&&v>=0&&v<=REGISTRY[i].max,b.id);return [0,1,4].includes(i)?v*v/REGISTRY[i].max:v;});
 const o=b.amazon?.count==null?0:b.amazon.count<10?-20:b.amazon.count<100?-10:b.amazon.count<1000?-5:0;
 const total=points.reduce((a,v)=>a+v,0)+b.T11+b.T12-(b.periodEnd===null?0:Math.min(12,Math.max(0,2026-b.periodEnd)/25))-Math.min(10,Math.max(0,2026-b.year)/10)+o;
 assert(Math.abs(total-b.total)<1e-8,b.id+' score mismatch');}
for(const b of c.exclusions.filter(b=>b.id.startsWith('rem-')))for(const k of ['raw','points','total'])assert(!(k in b),'Excluded work scored '+b.id);
for(const r of prep.records.filter(r=>r.disposition==='unresolved'))assert(!all.some(b=>b.id==='rem-'+r.batchId),'Unresolved record published');
for(const r of review.resolved.filter(r=>r.catalogId)){const b=all.find(b=>b.id===r.catalogId);assert(b);for(const s of r.sources)assert(b.sources.includes(s),r.batchId+' missing source '+s);}
assert.equal(c.currentBooks.filter(b=>b.id.startsWith('rem-')).length,review.newRecommended+review.newVetoed);
const markdown=fs.readFileSync(dir+'candidate-analysis.md','utf8');
for(const b of c.currentBooks.filter(b=>b.id.startsWith('rem-')))assert(markdown.includes('id="'+b.id+'"'));
console.log({validated:true,scored:c.currentBooks.length,excluded:c.exclusions.length,remaining:review.pendingAfter});
