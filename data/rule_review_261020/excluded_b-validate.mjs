import fs from 'node:fs';
import assert from 'node:assert/strict';
const dir='data/rule_review_261020/';
const read=f=>JSON.parse(fs.readFileSync(f,'utf8'));
const input=read(dir+'excluded_b-input.json'),ds=read(dir+'excluded_b-decisions.json');
assert.equal(ds.length,617);assert.equal(new Set(ds.map(x=>x.reviewId)).size,617);
assert.deepEqual(ds.map(x=>x.reviewId),input.map(x=>x.reviewId));
const maxima=[20,17,15,12,10,9,7,5,3,2];
const missingRefs=[];
for(const d of ds){
 assert(['excluded','recommended','vetoed'].includes(d.status),d.reviewId);
 assert(d.sources.length&&d.sources.every(x=>Number.isInteger(x)&&x>0),d.reviewId+' sources');
 assert(d.reason&&d.confidence&&Array.isArray(d.priorReviews)&&d.evidence.length,d.reviewId+' basis');
 for(const r of [...d.evidence,...d.priorReviews]){
  assert.equal(typeof r,'string');
  if(/^(data|analysis)\//.test(r)&&!fs.existsSync(r.split('#')[0]))missingRefs.push([d.reviewId,r]);
 }
 if(d.mergeInto){assert(ds.some(x=>x.reviewId===d.mergeInto));continue;}
 if(d.status==='excluded'){assert(['H1','H2'].includes(d.exclusion));assert(!d.raw);continue;}
 assert(!d.exclusion);assert(d.raw.length===10&&d.notes.length===10);
 d.raw.forEach((x,i)=>assert(Number.isFinite(x)&&x>=0&&x<=maxima[i],d.reviewId+' raw '+i));
 assert(d.notes.every(x=>typeof x==='string'&&x.length>15));
 assert(Number.isInteger(d.year)&&d.year<=2026&&d.yearNote&&d.periodNote&&d.themeNote);
 assert(d.periodEnd===null||Number.isInteger(d.periodEnd));
 assert([0,-10].includes(d.T11)&&[0,-10].includes(d.T12));
 assert(d.amazon.status&&d.amazon.attempts.length,d.reviewId+' amazon');
 if(d.amazon.count!==null)assert(Number.isInteger(d.amazon.count)&&d.amazon.globalCount===d.amazon.count&&d.amazon.evidence.some(t=>/global ratings/i.test(t)),d.reviewId+' ratings');
 if(d.status==='vetoed')assert(d.veto&&d.vetoReason&&d.vetoConfidence,d.reviewId+' veto');
 assert(d.purchaseUrl.startsWith('https://www.amazon.'),d.reviewId+' purchase');
}
console.log(JSON.stringify({checked:ds.length,scored:ds.filter(d=>d.raw).length,explicitRatings:ds.filter(d=>d.raw&&d.amazon.count!==null).length,unknownRatings:ds.filter(d=>d.raw&&d.amazon.count===null).length,missingRefs},null,2));
assert.equal(missingRefs.length,0);
