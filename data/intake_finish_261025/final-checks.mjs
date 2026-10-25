import fs from 'node:fs';
import assert from 'node:assert/strict';
const read=p=>JSON.parse(fs.readFileSync(p,'utf8')), write=(p,x)=>fs.writeFileSync(p,JSON.stringify(x,null,2)+'\n');
const app='site/app.js';
fs.writeFileSync(app,fs.readFileSync(app,'utf8').replaceAll('b.edition.year}',"b.edition.year ?? 'unknown'}").replaceAll('esc(b.edition.year)',"esc(b.edition.year ?? 'unknown')"));
const refs=read('site/reference-pages.json'), r=refs['finish-114-20'];
r.documentedCounts=[{pages:88,label:'Notes and references',evidence:'PSCF March 2025 book review explicitly reports 88 pages of notes and references. Edition match to the 448-page publisher listing is unconfirmed.'}];r.confidence='low';r.limitation='Documented count, not inferred page spans; edition match unconfirmed.';
write('site/reference-pages.json',refs);
let ledger=fs.readFileSync('RECOMMENDED_BOOKS.md','utf8').split(/\r?\n/);
ledger=ledger.map(l=>{if(!l.includes('[The Singularity Is Nearer]'))return l;const a=l.split('|');a[10]=' [88]('+r.url+') ';return a.join('|');});
fs.writeFileSync('RECOMMENDED_BOOKS.md',ledger.join('\n'));
const before=read('data/intake_large_261024/compiled.json'), after=read(read('data/catalog.json').compiled), ids=new Map([...after.currentBooks,...after.exclusions].map(b=>[b.id,b]));
for(const old of before.currentBooks){const b=ids.get(old.id);for(const k of ['status','raw','deductions','year','periodEnd','T11','T12','confidence','veto','vetoConfidence'])assert.deepEqual(b[k],old[k]);assert.equal(b.bonuses.RD,old.bonuses.RD);assert(Math.abs(b.total-(old.total-old.bonuses.REL+2*Math.sqrt(b.sources.length-1)))<1e-9);}
for(const b of before.exclusions)assert.deepEqual(ids.get(b.id),b);
const newBooks=after.currentBooks.filter(b=>!before.currentBooks.some(x=>x.id===b.id));
const oldEx=new Set(before.exclusions.map(x=>x.id)),newExcluded=after.exclusions.filter(b=>!oldEx.has(b.id));
const categories=read('site/exclusion-categories.json');
for(const b of newExcluded){if(b.exclusion==='H2')categories[b.id]='Fiction';else if(/Quantum|Particles|Fractal|Universe/.test(b.title))categories[b.id]='Mathematics, Physics, Science';else if(/Marketing|Success|Coup/.test(b.title))categories[b.id]='Business, Economy, Geostrategy';else if(/Writing|Storytelling|Novel|Bird/.test(b.title))categories[b.id]='Misc. Non-fiction';}
write('site/exclusion-categories.json',categories);
const norm=s=>s.normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,' ').trim();
for(const b of newBooks){assert.equal(b.sources.length,new Set(b.sources).size);assert(!after.exclusions.some(e=>norm(e.title)===norm(b.title)));assert(fs.existsSync(b.currentReview));const maxima=[20,17,15,12,10,9,7,5,3,2],base=b.raw.reduce((sum,x,i)=>sum+([0,1,4].includes(i)?x*x/maxima[i]:x),0);assert(Math.abs(b.total-base-Object.values(b.deductions).reduce((s,x)=>s+x,0)-b.bonuses.REL-b.bonuses.RD)<1e-9);}
assert.equal(read('data/intake_finish_261025/pending.json').length,447);
const summary={date:'2026-10-25',scope:'Finalize assessed titles; remaining intake deferred at user request',initialPending:629,resolvedCandidates:182,pendingCandidates:447,newRecommended:newBooks.filter(b=>b.status==='recommended').length,newVetoed:newBooks.filter(b=>b.status==='vetoed').length,newExcluded:newExcluded.length,nonBookReferences:6,existingWorksUpdated:3,newSourceIds:0,distinctSourceLocations:287,priorScoredDecisionsPreserved:before.currentBooks.length,priorExclusionsPreserved:before.exclusions.length,scoreCalculationsVerified:newBooks.length,confidence:'High for identity/source-count and calculation checks; new quality/density judgments low confidence'};
write('data/intake_finish_261025/turn-summary.json',summary);console.log(summary);
