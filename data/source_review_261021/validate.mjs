import fs from 'node:fs';
import assert from 'node:assert/strict';
import {buildDataset} from '../../site/build.mjs';
import {REGISTRY} from '../../site/model.mjs';
const dir='data/source_review_261021/',j=p=>JSON.parse(fs.readFileSync(p)),review=j(dir+'review.json'),old=j(review.previous),c=j(j('data/catalog.json').compiled),oldMap=new Map(old.currentBooks.map(b=>[b.id,b])),added=c.currentBooks.filter(b=>!oldMap.has(b.id));
assert.equal(added.length,review.newRecommended.length);
for(const b of old.currentBooks)assert.deepEqual(c.currentBooks.find(n=>n.id===b.id),b,'Changed an earlier scored assessment: '+b.id);
for(const b of added){assert.equal(b.status,'recommended');assert.equal(b.notes.length,10);assert.equal(b.densityAssessment.confidence,'low');assert.equal(b.amazon.confidence,'high');assert(Number.isSafeInteger(b.amazon.count));let sum=0;b.raw.forEach((v,i)=>{const m=REGISTRY[i].max,p=['E','S','D'].includes(REGISTRY[i].id)?v*v/m:v;assert.equal(p,b.points[i]);sum+=p;});assert.equal(b.deductions.P14,-Math.min(10,(2026-b.year)/10));assert.equal(b.deductions.O15,b.amazon.count<10?-20:b.amazon.count<100?-10:b.amazon.count<1000?-5:0);assert(Math.abs(sum+Object.values(b.deductions).reduce((s,v)=>s+v,0)-b.total)<1e-10);assert.equal(b.T11,b.deductions.T11);assert.equal(b.T12,b.deductions.T12);}
const ids=new Set(),keys=new Set();for(const b of [...c.currentBooks,...c.exclusions]){assert(!ids.has(b.id));ids.add(b.id);const key=b.title.normalize('NFKC').toLowerCase()+'|'+b.author?.normalize('NFKC').toLowerCase();assert(!keys.has(key),'Duplicate identity: '+key);keys.add(key);}
for(const id of review.newExcluded){const b=c.exclusions.find(b=>b.id===id);assert(b&&!('total' in b)&&!('raw' in b));assert(['H2','H3'].includes(b.exclusion));assert(b.evidence.length&&b.sources.length);}
for(const b of old.exclusions){const n=c.exclusions.find(e=>e.id===b.id);assert(n);for(const source of b.sources)assert(n.sources.includes(source));}
const before=j(dir+'pending-before.json'),pending=j('data/source_batch_261021/pending.json'),done=new Set(review.resolved.map(r=>r.batchId));assert.equal(done.size,review.resolved.length);assert.deepEqual(pending,before.filter(w=>!done.has(w.batchId)));assert.equal(pending.length,review.pendingAfter);assert.equal(j('data/source_batch_261021/intake-audit.json').pending,pending.length);
const data=buildDataset();assert.equal(data.books.length,old.currentBooks.filter(b=>b.status==='recommended').length+added.length);assert.equal(data.excluded.length,old.exclusions.length+review.newExcluded.length);
assert(fs.readFileSync(review.report,'utf8').includes('full source analysis is incomplete'));
for(const s of review.affectedSources)assert.equal(data.sources[s].analysis,review.report);
const out={recommended:data.books.length,vetoed:data.vetoed.length,excluded:data.excluded.length,resolvedRecords:done.size,newScored:added.length,newExcluded:review.newExcluded.length,pendingRecords:pending.length,priorScoresUnchanged:true,provenancePreserved:true,formulaChecksPassed:true,complete:false};fs.writeFileSync(dir+'validation.json',JSON.stringify(out,null,2)+'\n');console.log(out);
