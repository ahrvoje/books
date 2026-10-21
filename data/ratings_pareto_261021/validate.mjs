import fs from 'node:fs';
import assert from 'node:assert/strict';
import crypto from 'node:crypto';
const read=p=>fs.readFileSync(p,'utf8'),j=p=>JSON.parse(read(p));
const change=j('data/ratings_pareto_261021/changes.json'),prior=j(change.previous),rated=j('data/ratings_pareto_261021/compiled.json'),changed=new Set(change.changes.map(b=>b.id));
const old=new Map(prior.currentBooks.map(b=>[b.id,b]));
assert.deepEqual(rated.exclusions,prior.exclusions);
assert.equal(rated.currentBooks.length,prior.currentBooks.length);
for(const b of rated.currentBooks){const a=old.get(b.id);assert(a);if(!changed.has(b.id)){assert.deepEqual(b,a);continue;}
 for(const k of ['raw','points','positive','status','year','periodEnd','T11','T12','sources','confidence','notes'])assert.deepEqual(b[k],a[k],b.id+' '+k);
 for(const k of ['T11','T12','H13','P14'])assert.equal(b.deductions[k],a.deductions[k]);
 const n=b.amazon.count;assert(Number.isInteger(n)&&n>=0);assert.equal(b.deductions.O15,n<10?-20:n<100?-10:n<1000?-5:0);
 assert(Math.abs(b.total-a.total-b.deductions.O15+a.deductions.O15)<1e-10);
 assert(b.amazon.url&&b.amazon.asin&&b.amazon.retrievedAt&&b.amazon.evidence.length);
}
const review=j('data/top_review_261021/review.json'),current=j(j('data/catalog.json').compiled),base=new Map(rated.currentBooks.map(b=>[b.id,b]));
assert.deepEqual(current.exclusions,rated.exclusions);assert.equal(current.currentBooks.length,rated.currentBooks.length);
for(const b of current.currentBooks){const a=base.get(b.id),d=review.decisions[b.id];if(!d){assert.deepEqual(b,a);continue;}
 for(const k of ['amazon','deductions','status','sources','year','periodEnd','confidence'])assert.deepEqual(b[k],a[k]);
 for(let i=0;i<10;i++)assert.equal(b.raw[i],d.changes[i]??a.raw[i]);
 assert(Math.abs(b.total-b.points.reduce((s,v)=>s+v,0)-Object.values(b.deductions).reduce((s,v)=>s+v,0))<1e-10);
}
const html=read('docs/index.html'),bytes=Buffer.byteLength(html),budget=1500*current.currentBooks.length;assert(bytes<=budget);
const result={ratingUpdates:changed.size,topScoreCorrections:Object.keys(review.decisions).length,htmlBytes:bytes,budget,bytesPerBook:bytes/current.currentBooks.length,htmlSha256:crypto.createHash('sha256').update(html).digest('hex')};
if(process.argv.includes('--browser')){const b=j('site/qa-output/results.json');assert.deepEqual(b.errors,[]);assert.deepEqual(b.networkRequests,[]);assert.equal(read('site/qa-output/isolated/index.html'),html);result.browser='passed';}
fs.writeFileSync('data/ratings_pareto_261021/validation.json',JSON.stringify(result,null,2)+'\n');console.log(result);
