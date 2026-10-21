import fs from 'node:fs';
import assert from 'node:assert/strict';
const dir='data/source_batch_261021/',j=p=>JSON.parse(fs.readFileSync(p)),write=(p,v)=>fs.writeFileSync(p,typeof v==='string'?v:JSON.stringify(v,null,2)+'\n');
const previous=j('data/catalog.json').compiled,c=j(previous),changes=j(dir+'maintenance-changes.json');
assert.equal(changes.changes.length,59);
const a=j(dir+'amazon-reranked3-reviewed.json').find(b=>b.id==='g0854').accepted;
const b=c.currentBooks.find(b=>b.id==='g0854');
b.amazon.identityNote=a.manualIdentity;b.amazon.identityEvidence=a.identityEvidence;
const report=b.ratingReview.analysis.split('#')[0];
let text=fs.readFileSync(report,'utf8');
text=text.replace('## '+b.title+' — '+b.author,'## '+b.title+' — '+b.author+'\n\nIdentity check: '+a.manualIdentity+' '+(a.identityEvidence||[]).map((u,i)=>`[Publisher evidence ${i+1}](${u})`).join('; '));
write(report,text);
// Correct relative links in this batch's newly created reports only.
const intake=j(dir+'intake-audit.json');
for(const path of [...Object.values(intake.reports),changes.finalRatingReport]){
  text=fs.readFileSync(path,'utf8').replace(/\]\(analysis\//g,'](../analysis/');write(path,text);
}
const top=c.currentBooks.filter(b=>b.status==='recommended').sort((a,b)=>b.total-a.total||a.title.localeCompare(b.title)).slice(0,100);
assert(top.every(b=>b.amazon?.count!=null));
write(dir+'completed-maintenance-compiled.json',c);write('data/catalog.json',{compiled:dir+'completed-maintenance-compiled.json'});
text=fs.readFileSync('README.md','utf8').replace('recovers 33 missing Amazon counts from the starting top 100','recovers 59 missing Amazon counts, completing both the starting and reranked top 100').replace('The active catalog is `data/source_batch_261021/compiled.json`.','The active catalog is `data/source_batch_261021/completed-maintenance-compiled.json`.');write('README.md',text);
text=fs.readFileSync(dir+'REPORT.md','utf8').replace(/- Recovered 33[^\n]+/,'- Recovered 59 missing Amazon aggregates: all 36 gaps in the starting top 100 and 23 books brought into the top 100 by reranking. Both sets now have complete counts. Existing known counts were retained. Only O15 and resulting totals changed. Each new count has a matching product, marketplace, retrieval time and saved snapshot.').replace('Active snapshot: data/source_batch_261021/compiled.json.','Active snapshot: data/source_batch_261021/completed-maintenance-compiled.json.').replace('the 33 rating corrections','the 59 rating corrections');
text+='\nRating evidence: [initial pass](../../analysis/analysis_top100lang_261021_2230.md), [manual ISBN identities](../../'+changes.finalRatingReport+'), '+changes.rerankedReports.map((p,i)=>`[reranking pass ${i+1}](../../${p})`).join(', ')+'. Count confidence: high; underlying book-assessment confidence is unchanged.\n';
write(dir+'REPORT.md',text);
console.log({ratingGapsFilled:59,top100Complete:true,sourceAnalysisComplete:false,pending:intake.pending});
