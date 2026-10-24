import fs from 'node:fs';
import crypto from 'node:crypto';
import assert from 'node:assert/strict';
import { assessments, sources } from './assessments.mjs';
const dir='data/veto9_261024/', report='analysis/analysis_veto9_261024_2037.md';
const read=p=>fs.readFileSync(p,'utf8'), json=p=>JSON.parse(read(p));
const write=(p,v)=>fs.writeFileSync(p,typeof v==='string'?v:JSON.stringify(v,null,2)+'\n');
const hash=p=>crypto.createHash('sha256').update(read(p)).digest('hex');
const baseline=json(dir+'baseline.json');
for(const [p,h] of Object.entries(baseline.files))assert.equal(hash(p),h,'Baseline changed: '+p);
const data=json(baseline.previous), before=structuredClone(data), inputs=json(dir+'review-input.json'), flags=json(dir+'screening-flags.json');
const byId=new Map(data.currentBooks.map(b=>[b.id,b]));
assert.equal(assessments.length,52);assert.equal(new Set(assessments.map(a=>a[0])).size,52);
assert.deepEqual(assessments.map(a=>a[0]).sort(),inputs.map(b=>b.id).sort());
const decisions=assessments.map(([id,reason,confidence])=>{
 const b=byId.get(id), input=inputs.find(x=>x.id===id);
 assert.equal(b.status,'recommended');
 return {id,title:b.title,author:b.author,previousStatus:b.status,status:b.status,v9:false,confidence,reason,evidence:sources[id]||[],priorReviews:input.prior,sourceIds:b.sources,scope:'Focused V9 review of prior assessments and cited criticism; not a new full-text or score audit.'};
});
const dingle=byId.get('q1130');
const dingleReason='V9 at high confidence, in addition to V1: the central claim that reciprocal time dilation is logically contradictory identifies ratios involving different events as the same clock-rate comparison. Correcting that identification removes the alleged contradiction, so the book’s case against special relativity must be abandoned or rebuilt. Dingle’s appeal to direct clock coincidences does not make the two event pairs identical. This is a specific inferential defect, not rejection by authority.';
decisions.push({id:dingle.id,title:dingle.title,author:dingle.author,previousStatus:dingle.status,status:dingle.status,v9:true,confidence:'high',reason:dingleReason,evidence:['https://www.naturalphilosophy.org/pdf/ebooks/Dingle_SCIENCE_at_the_Crossroads_Full.pdf','https://mathshistory.st-andrews.ac.uk/Obituaries/Dingle_RAS/','https://www.sciencedirect.com/science/article/pii/S1355219810000663'],priorReviews:[dingle.reviewAnchor,dingle.scoreReview],sourceIds:dingle.sources,scope:'Central clock argument, author defense, specialist rebuttal and retained prior assessment.'});
for(const d of decisions){
 const b=byId.get(d.id);
 b.foundationReview={date:'2026-10-24',rule:'V9',applies:d.v9,confidence:d.confidence,reason:d.reason,evidence:d.evidence,priorReviews:d.priorReviews,analysis:report+'#'+b.id};
 b.gateReview={...b.gateReview,V9:(d.v9?'Apply: ':'Not established: ')+d.reason};
}
dingle.veto='V1; V9';dingle.vetoConfidence='high';dingle.vetoReason=dingleReason;
dingle.verdict='Vetoed; counterfactual score';
dingle.priorReviews=[...new Set([...(dingle.priorReviews||[]),dingle.reviewAnchor,dingle.scoreReview].filter(Boolean))];
dingle.reviewAnchor=report+'#'+dingle.id;dingle.currentReview=report;dingle.scoreReview=dingle.reviewAnchor;
const counts={recommended:data.currentBooks.filter(b=>b.status==='recommended').length,vetoed:data.currentBooks.filter(b=>b.status==='vetoed').length,excluded:data.exclusions.length};
assert.deepEqual(counts,baseline.counts);
data.audit={...data.audit,rulesSha256:hash('AGENTS.md'),latestFoundationReview:{date:'2026-10-24',report,previous:baseline.previous,decisions:dir+'decisions.json',metadataScreen:dir+'screening-flags.json',focusedRecommendations:52,additionalConfirmedVetoReasons:1,newlyVetoed:0,counts,scope:'Metadata screening across current scored records; focused review of the 52 disputed recommendations and Dingle. No claim of a full-text catalog audit.'}};
for(let i=0;i<data.currentBooks.length;i++){
 const b=data.currentBooks[i],old=before.currentBooks[i];
 for(const key of ['id','status','sources','raw','deductions','bonuses','bonusAssessment','total','criteria'])assert.deepEqual(b[key],old[key],key+' changed: '+b.id);
}
assert.deepEqual(data.exclusions,before.exclusions);
const f=x=>Number(x).toFixed(2), link=r=>r.startsWith('analysis/')?'../'+r:r;
const rule=read('AGENTS.md').split('## Veto rules')[1].split(/\r?\n/).find(l=>l.startsWith('9. Highly disputed foundations.'));
const sections=[`# V9 foundations review — 24 October 2026\n\nReview started at 20:37 Europe/Warsaw.\n\n${rule}\n\n## Result and scope\n\n**No newly vetoed recommendations.** Add V9 at high confidence to Herbert Dingle’s *Science at the Crossroads*, already vetoed under V1. Counts remain 5,407 recommended, 602 vetoed and 2,653 hard-excluded works. Scores, source IDs, rating and page metadata are unchanged. Earlier analyses remain history.\n\nThe earlier conversational classification was a list of disputes, not evidence that each book meets V9. In particular, *A New Kind of Science*, *Built to Last* and *David and Goliath* were candidates, not established vetoes. Applying the exact high-confidence rule does not warrant moving them on the reviewed evidence. This is not a claim that their central theories are true or well established.\n\nThe current snapshot contains 6,009 scored records. Their recorded reasons and criterion notes were screened for explicit failure/fabrication leads. The [screening manifest](../${dir}screening-flags.json) contains ${flags.length} additional matches beyond the 52 disputed recommendations. Matches include books discussing failure or debunking, not necessarily suffering from it. Existing exclusions were kept outside scoring and V9 adjudication. The focused review below covers the 52 disputed recommendations plus Dingle; it is not a full-text audit of all 6,009 books.\n\nA retained book’s confidence refers to this bounded decision, not confidence that its thesis is correct. Missing proof of a veto is not proof of sound foundations. Low-confidence unresolved cases stay scored under the saved rules. Existing V1–V8 vetoes remain in force. Other matching records receive no new V9 finding from a keyword match alone. The inherited scores and density estimates have not been recalibrated.\n\n## Decisions\n`];
for(const d of decisions){
 const b=byId.get(d.id);
 sections.push(`<a id="${d.id}"></a>\n\n### ${d.title} — ${d.author}\n\n**${d.v9?'Apply V9; retain existing veto':'V9 not established; retain recommendation-list status'}. Confidence: ${d.confidence}.** Source IDs: ${d.sourceIds.join(', ')}. ${d.v9?'Counterfactual s':'S'}core retained: ${f(b.total)}.\n\n${d.reason}\n\nEvidence basis: ${d.scope}\n\n${d.evidence.length?'External material considered: '+d.evidence.map((r,i)=>`[${i+1}](${r})`).join(', ')+'.\n\n':''}Prior assessments: ${d.priorReviews.map((r,i)=>`[${i+1}](${link(r)})`).join(', ')||'[previous catalog](../'+baseline.previous+')'}.\n`);
}
const max=[20,17,15,12,10,9,7,5,3,2], names=['Evidence','Systems integration','Strategic utility','Causal depth','Information density','Durability','Domain fit','Authority','Narrative clarity','Precision'];
const points=dingle.raw.map((x,i)=>[0,1,4].includes(i)?x*x/max[i]:x);
assert(Math.abs(points.reduce((a,b)=>a+b,0)+Object.values(dingle.deductions).reduce((a,b)=>a+b,0)+dingle.bonuses.REL+dingle.bonuses.RD-dingle.total)<1e-8);
sections.push(`## Dingle: retained full counterfactual breakdown\n\nThe score suspends only V1/V9 and retains the identified defects. The new gate does not independently alter criterion attainment.\n\n| Criterion | Linear attainment | Contribution |\n|---|---:|---:|\n${names.map((n,i)=>`| ${n} | ${f(dingle.raw[i])} / ${max[i]} | ${f(points[i])} |`).join('\n')}\n\n${Object.entries(dingle.deductions).map(([k,v])=>k+': '+f(v)).join('; ')}. REL: ${f(dingle.bonuses.REL)}; RD: ${f(dingle.bonuses.RD)}. **Total: ${f(dingle.total)}.** Score confidence: ${dingle.scoreConfidence}. Source IDs: ${dingle.sources.join(', ')}.\n\nR&D metadata retained: ${JSON.stringify(dingle.bonusAssessment)}. Unknown reference-page input gives the existing zero fallback. Original year: ${dingle.firstYear}; no single historical-period deduction. Amazon rating count is unknown; O15 retains the no-deduction fallback.\n\n## Other screened matches\n\nThis is a record-level screen, not a new specialist adjudication. The existing gates remain unchanged except for Dingle above. A flag is not evidence of a fatal defect.\n\n| Work | Existing status | Screen result |\n|---|---|---|\n${flags.map(b=>`| ${b.title.replaceAll('|','/')} — ${b.author} | ${b.status}${b.veto?' ('+b.veto+')':''} | ${b.id==='q1130'?'V9 confirmed above':'No additional V9 finding from this metadata screen; retain prior decision'} |`).join('\n')}\n\n## Verification\n\nThe application script checks unchanged membership, source IDs, scores, criterion assessments, deductions, bonuses and exclusion records against the previous snapshot. Unchanged ledgers and metadata are verified by SHA-256. The explorer build checks ledger/snapshot consistency; its methodology uses the exact saved V9 text.\n`);
write(report,sections.join('\n'));
write(dir+'compiled.json',data);write(dir+'decisions.json',decisions);write('data/catalog.json',{compiled:dir+'compiled.json'});
let veto=read('VETOED_BOOKS.md');
const rows=veto.split(/\r?\n/);let changed=0;
for(let i=0;i<rows.length;i++)if(rows[i].includes('[Science at the Crossroads](')&&rows[i].includes('Herbert Dingle')){rows[i]=rows[i].replace(/\[Science at the Crossroads\]\([^)]*\)/,'[Science at the Crossroads]('+report+'#q1130)').replace('| V1 |','| V1; V9 |');changed++;}
assert.equal(changed,1);
veto=rows.join('\n').replace('Scores suspend only the veto gate.','[V9 foundations review]('+report+') adds V9 to one existing veto; no membership changes. Scores suspend only the veto gate.');write('VETOED_BOOKS.md',veto);
let readme=read('README.md').replace('The active catalog is `data/new_rules_261024/compiled.json`.','The active catalog is `data/veto9_261024/compiled.json`.').replace('The active snapshot is data/top_review_261021/compiled.json.','That review’s snapshot is data/top_review_261021/compiled.json.');
write('README.md',readme+'\nThe [V9 foundations review]('+report+') applies the high-confidence central-defect rule to the disputed-book set and recorded catalog leads. No recommendation changes status; *Science at the Crossroads* gains V9 alongside V1. The active catalog is `data/veto9_261024/compiled.json`; counts and scores are unchanged.\n');
for(const p of ['RECOMMENDED_BOOKS.md','EXCLUDED_BOOKS.md','SOURCES.md','site/enrichment.json','site/editions.json','site/reference-pages.json',baseline.previous])assert.equal(hash(p),baseline.files[p]);
write(dir+'result.json',{counts,newlyVetoed:0,additionalVetoReason:['q1130'],focusedRecommendations:52,otherMetadataMatches:flags.length,report,scoreChanges:0});
console.log(JSON.stringify({counts,newlyVetoed:0,v9:['q1130'],report}));
