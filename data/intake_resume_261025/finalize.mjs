import fs from 'node:fs';
import assert from 'node:assert/strict';
const dir='data/intake_resume_261025/',read=p=>JSON.parse(fs.readFileSync(p,'utf8'));
const c=read(dir+'compiled.json'),run=read(dir+'run.json');
const newBooks=read(dir+'new-books.json');
for(const b of newBooks){
 b.densityAssessment={confidence:'low',refs:[b.reviewAnchor,b.metadata,...b.extraEvidence],evidence:b.note,attainment:b.raw[4],reviewed:'2026-10-25'};
 c.currentBooks.find(x=>x.id===b.id).densityAssessment=b.densityAssessment;
}
fs.writeFileSync(dir+'compiled.json',JSON.stringify(c,null,2)+'\n');
fs.writeFileSync(dir+'new-books.json',JSON.stringify(newBooks,null,2)+'\n');
let ledger=fs.readFileSync('RECOMMENDED_BOOKS.md','utf8');
for(const b of newBooks.filter(b=>b.status==='recommended'&&b.referencePages!=null)){
 const old='['+b.referencePages+']('+b.metadata+')',updated='['+b.referencePages+']('+(b.referenceUrl||b.metadata)+')';
 ledger=ledger.split('\n').map(line=>line.includes('['+b.title+']')?line.replace(old,updated):line).join('\n');
}
fs.writeFileSync('RECOMMENDED_BOOKS.md',ledger);
const categories=read('site/exclusion-categories.json');
for(const b of read(dir+'new-excluded.json'))categories[b.id]=b.title==='Supercommunicators'?'Misc. Non-fiction':'Business, Economy, Geostrategy';
fs.writeFileSync('site/exclusion-categories.json',JSON.stringify(categories,null,2)+'\n');
for(const f of ['setup.mjs','process.mjs']){const path=dir+f;fs.writeFileSync(path,fs.readFileSync(path,'utf8').replaceAll('Business, Management, Organizations','Business, Economy, Geostrategy'));}
const sourceRows=fs.readFileSync('SOURCES.md','utf8').split(/\r?\n/).filter(l=>/^\| \d+ \|/.test(l)).map(l=>l.split('|').slice(1,4));
assert.deepEqual(sourceRows,run.sourceLedgerBefore,'Source IDs, dates and URLs changed');
const n=c.currentBooks.filter(b=>b.status==='recommended').length,v=c.currentBooks.length-n,e=c.exclusions.length;
const report='analysis/analysis_continuation_'+run.stamp+'.md';
const text=`Queue continuation, 25 October 2026: [decision report](${report}). Resolved 39 of 447 pending source/title entries: 33 new recommended works, one new veto, three hard exclusions, one existing excluded-work match, and one repeated nomination merged into the new Burn Book entry. No new source IDs; prior decisions and scores are preserved. Current totals: **${n.toLocaleString('en-US')} recommended, ${v.toLocaleString('en-US')} vetoed, ${e.toLocaleString('en-US')} excluded**. The active catalog is \`${dir}compiled.json\`; [408 pending entries](${dir}pending.json) remain. New scores have low confidence; evidence coverage is recorded per title. Unknown auxiliary data use explicit zero-bonus or zero-deduction fallbacks.\n\n`;
for(const [file,heading] of [['README.md','## Use'],['IMPLEMENTATION_REVIEW.md','## Delivered']]){
 let s=fs.readFileSync(file,'utf8');if(!s.includes(report))s=s.replace(heading,heading+'\n\n'+text.trimEnd());
 s=s.replace('The current catalog contains **5,471 recommended, 675 vetoed and 2,876 excluded works**.','That update produced **5,471 recommended, 675 vetoed and 2,876 excluded works**.')
 .replace('Current totals: 5,471 recommended, 675 vetoed, 2,876 excluded.','Totals at that update: 5,471 recommended, 675 vetoed, 2,876 excluded.')
 .replace('The active catalog is `data/h7_revision_261025/compiled.json`, selected by `data/catalog.json`; older counts and paths below describe historical updates.','The H7 snapshot is `data/h7_revision_261025/compiled.json`; `data/catalog.json` selects the current catalog. Older counts and paths below describe historical updates.')
 .replace('The active catalog and maintenance records are under `data/h7_revision_261025/`.','The H7 snapshot and maintenance records remain under `data/h7_revision_261025/`.');
 fs.writeFileSync(file,s);
}
fs.writeFileSync(dir+'README.md','# Queue continuation\n\n'+text+'Reused saved source captures; no whole-source rescan. Run `node data/intake_resume_261025/verify.mjs` to verify preservation, membership, score arithmetic and queue accounting. The integrator is guarded against replay after catalog advancement. Evidence snapshots are `evidence-1.json` through `evidence-17.json`; individual analyses link the inspected sources.\n\nThe shortened Mars nomination was resolved from its source product link, ISBN 9780593358825: [source](https://www.ezrasbookshelf.com/books/mars/) and [publisher](https://www.penguinrandomhouse.com/books/156201/red-mars-by-kim-stanley-robinson/9780593358825/). It is the already excluded Red Mars, not a new series entry.\n');
console.log({recommended:n,vetoed:v,excluded:e,pending:408,sourceIdentityPreserved:true});
