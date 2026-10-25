import fs from 'node:fs';
const dir='data/intake_complete_261025/',read=p=>JSON.parse(fs.readFileSync(p,'utf8')),write=(p,v)=>fs.writeFileSync(p,JSON.stringify(v,null,2)+'\n');
const c=read(dir+'compiled.json'),books=read(dir+'new-books.json');
for(const b of books){
 b.densityAssessment={confidence:'low',refs:[b.reviewAnchor,b.metadata,...b.extraEvidence],evidence:b.note,attainment:b.raw[4],reviewed:'2026-10-25'};
 c.currentBooks.find(x=>x.id===b.id).densityAssessment=b.densityAssessment;
}
write(dir+'compiled.json',c);write(dir+'new-books.json',books);
const categories=read('site/exclusion-categories.json');
for(const b of read(dir+'new-excluded.json')){
 if(/Sommeliers|Guide to Wine|Mount Etna|Spy the Lie/.test(b.title))categories[b.id]='Misc. Non-fiction';
 if(b.title.startsWith('The Liar Paradox'))categories[b.id]='Mathematics, Physics, Science';
}
write('site/exclusion-categories.json',categories);
const report='analysis/analysis_continuation_261025_1223.md';
const status=`Queue review, 25 October 2026: [decision report](${report}). All 408 starting entries were reviewed; 397 were resolved. Added 295 recommended works, 79 vetoed works and 19 hard exclusions; merged two existing-work matches and one within-batch duplicate; removed one non-book program. No new source IDs. Current totals: **5,799 recommended, 755 vetoed, 2,898 excluded**. The active catalog is \`${dir}compiled.json\`. [Eleven unresolved identities or formats](${dir}unresolved.json) remain explicitly held without scores or source credit. New score estimates have low confidence; unknown auxiliary inputs use the prescribed fallbacks.`;
for(const [file,heading] of [['README.md','## Use'],['IMPLEMENTATION_REVIEW.md','## Delivered']]){
 let text=fs.readFileSync(file,'utf8');
 text=text.replace('Current totals: **5,504 recommended, 676 vetoed, 2,879 excluded**. The active catalog is `data/intake_resume_261025/compiled.json`; [408 pending entries](data/intake_resume_261025/pending.json) remain.','Totals at that stage: **5,504 recommended, 676 vetoed, 2,879 excluded**. Its snapshot is `data/intake_resume_261025/compiled.json`; the 408 entries then pending are reviewed in the later report above.');
 if(!text.includes(report))text=text.replace(heading,heading+'\n\n'+status);
 fs.writeFileSync(file,text);
}
fs.writeFileSync(dir+'README.md','# Queue review\n\n'+status+'\n\nRun `node data/intake_complete_261025/verify.mjs` to check preservation, disjoint membership, unique source counts, score arithmetic and queue accounting. The integrator is guarded against replay after catalog advancement. `specs-*.json` hold individual decisions; `evidence-*.txt` retain retrieved evidence. `unresolved.json` records the precise remaining blockers. Prior snapshots and analyses remain history.\n');
let text=fs.readFileSync(report,'utf8').replace('# Batch continuation','# Queue review completion').replace('Partial continuation of the supplied source batch.','All 408 entries in the starting queue were reviewed; 397 were resolved.');
if(!text.includes('## Unresolved identities'))text+='\n## Unresolved identities and formats\n\nThese entries remain unscored and receive no inferred source credit. Confidence in their exact book identity or eligibility is unknown.\n\n| Source | Title | Author | Remaining evidence gap |\n|---|---|---|---|\n'+read(dir+'unresolved.json').map(b=>`| ${b.source} | ${b.title} | ${b.author} | ${b.reason} |`).join('\n')+'\n\nNew score estimates have low confidence. Description and sample evidence do not establish full-text density. Missing Amazon counts use O15 = 0; missing reference-page ratios use RD = 0. Existing assessments are preserved; the two new distinct-source links change Relevance only.\n';
fs.writeFileSync(report,text);
console.log('Finalized density records, categories and current maintenance status.');
