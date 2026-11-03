import fs from 'node:fs';
import assert from 'node:assert/strict';
const dir='data/v3_review_261103',read=p=>JSON.parse(fs.readFileSync(p,'utf8')),write=(p,v)=>fs.writeFileSync(p,JSON.stringify(v,null,2)+'\n');
const c=read(dir+'/compiled.json'),screen=read(dir+'/screening-ledger.json'),recovered=read(dir+'/recovered-purpose.json'),changes=read(dir+'/changes.json');
for(const r of recovered){
 const h=[...r.section.matchAll(/^(#{1,6}) .+$/gm)];
 assert(h.length<2||!h.slice(1).some(x=>x[1].length<=h[0][1].length),'Recovery crosses book section '+r.id);
}
for(const b of c.currentBooks)delete b.priorPurposeEvidence;
for(const s of screen){delete s.recoveredPurposeRef;delete s.recoveredPurposeEvidence;s.finding=s.finding.replace(' Historical purpose/criterion evidence was recovered; the confidence is not raised merely by recovery.','');}
const usable=recovered.filter(r=>r.paragraphs.some(p=>!/^E \/ M|^Criterion order|^Added reference|Pasted occurrences:|^Status:|^Initial rank/.test(p)&&/explain|mechanism|constraint|argument|institution|concept|production|evidence|incentive|biograph|observ|model/i.test(p)));
for(const r of usable){const b=c.currentBooks.find(b=>b.id===r.id);if(!b||b.intellectualReview)continue;
 b.priorPurposeEvidence={ref:r.ref,paragraphs:r.paragraphs,recovered:'2026-11-03',confidence:r.confidence,limitation:'Recovered historical content evidence. Old rule wording and scores in this excerpt are history, not current gate decisions or numerical inputs.'};
 const s=screen.find(s=>s.id===r.id);s.recoveredPurposeRef=r.ref;s.recoveredPurposeEvidence=r.paragraphs;s.finding+=' Historical purpose/criterion evidence was recovered; the confidence is not raised merely by recovery.';
}
for(const x of changes.filter(x=>['q0940','q0959','q0766','g1204','bgc708ddec69'].includes(x.id))){const r=recovered.find(r=>r.id===x.id);x.priorEvidence=r?.paragraphs||[];}
const count=c.currentBooks.filter(b=>b.priorPurposeEvidence).length,old=c.audit.latestV3Review.recoveredPurpose;c.audit.latestV3Review.recoveredPurpose=count;
for(const file of ['README.md','IMPLEMENTATION_REVIEW.md','analysis/analysis_v3review_261103_2142.md']){
 const text=fs.readFileSync(file,'utf8').replaceAll(String(old),String(count));fs.writeFileSync(file,text);
}
write(dir+'/compiled.json',c);write(dir+'/screening-ledger.json',screen);write(dir+'/changes.json',changes);
console.log({recoveredPurpose:count,largestSection:Math.max(...recovered.map(r=>r.section.length))});
