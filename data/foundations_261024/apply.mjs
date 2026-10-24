import fs from 'node:fs';
import crypto from 'node:crypto';
import assert from 'node:assert/strict';
import decisions from './decisions.mjs';
const dir='data/foundations_261024/',report='analysis/analysis_foundations_261024_2050.md';
const read=p=>fs.readFileSync(p,'utf8'),json=p=>JSON.parse(read(p));
const write=(p,v)=>fs.writeFileSync(p,typeof v==='string'?v:JSON.stringify(v,null,2)+'\n');
const hash=p=>crypto.createHash('sha256').update(read(p)).digest('hex');
const previous=json('data/catalog.json').compiled;
assert.equal(previous,'data/veto9_261024/compiled.json');
const data=json(previous),before=structuredClone(data),byId=new Map(data.currentBooks.map(b=>[b.id,b]));
const baseline={previous,files:Object.fromEntries([previous,'RECOMMENDED_BOOKS.md','VETOED_BOOKS.md','EXCLUDED_BOOKS.md','SOURCES.md','site/enrichment.json','site/editions.json','site/reference-pages.json'].map(p=>[p,hash(p)]))};
write(dir+'baseline.json',baseline);
const ids=new Set(decisions.map(d=>d.id));assert.equal(ids.size,9);
const enrichment=json('site/enrichment.json'),editions=json('site/editions.json'),archived={};
const rowMap=p=>new Map(read(p).split(/\r?\n/).filter(l=>/^\| \d{4}-/.test(l)).map(line=>{const c=line.split('|').slice(1,-1).map(s=>s.trim());return[c[2]+'|'+(c[3].match(/^\[([^\]]+)\]/)?.[1]||c[3]),{line,cells:c}];}));
const recRows=rowMap('RECOMMENDED_BOOKS.md'),vetoRows=rowMap('VETOED_BOOKS.md');
for(const d of decisions){
 const b=byId.get(d.id);assert.equal(b.status,'recommended');
 d.title=b.title;d.author=b.author;d.confidence='high';d.sources=b.sources;
 d.priorReviews=[...new Set([b.foundationReview?.analysis,b.reviewAnchor,b.scoreReview].filter(Boolean))];
 const review={date:'2026-10-24',rule:'V9',version:'disputed-foundations-and-recurring-narrative',previousStatus:b.status,status:'vetoed',applies:true,confidence:'high',reason:d.reason,defense:d.defense,evidence:d.refs,limitation:d.limitation||null,priorReviews:d.priorReviews,analysis:report+'#'+b.id};
 b.status='vetoed';b.veto='V9';b.vetoConfidence='high';b.vetoReason=d.reason;b.verdict='Vetoed; counterfactual score';
 b.foundationReview=review;b.categoryReview=review;b.gateReview={...b.gateReview,V9:'Apply revised V9: '+d.reason};
 b.priorReviews=[...new Set([...(b.priorReviews||[]),...d.priorReviews])];
 b.reviewAnchor=review.analysis;b.currentReview=report;b.currentVetoAnchor=review.analysis;b.scoreReview=review.analysis;
 if(enrichment.books[b.id]){archived[b.id]=enrichment.books[b.id];if(enrichment.books[b.id].edition)editions[b.id]=enrichment.books[b.id].edition;delete enrichment.books[b.id];}
}
const counts={recommended:data.currentBooks.filter(b=>b.status==='recommended').length,vetoed:data.currentBooks.filter(b=>b.status==='vetoed').length,excluded:data.exclusions.length};
assert.deepEqual(counts,{recommended:5398,vetoed:611,excluded:2653});
data.audit={...data.audit,rulesSha256:hash('AGENTS.md'),...counts,latestFoundationReview:{date:'2026-10-24',report,previous,decisions:dir+'decisions.json',newlyVetoed:9,counts,scope:'Apply revised V9 to Sapiens and the eight previously identified high-confidence candidates. No broader catalog adjudication or score recalibration.'}};
for(let i=0;i<data.currentBooks.length;i++){
 const b=data.currentBooks[i],old=before.currentBooks[i];
 for(const k of ['id','sources','raw','criteria','deductions','bonuses','bonusAssessment','total','amazon'])assert.deepEqual(b[k],old[k],k+' changed: '+b.id);
 if(!ids.has(b.id))assert.deepEqual(b,old);
}
assert.deepEqual(data.exclusions,before.exclusions);
const currentIds=new Set(data.currentBooks.map(b=>b.id));assert.equal(currentIds.size,data.currentBooks.length);assert(data.exclusions.every(b=>!currentIds.has(b.id)));
const removedLines=new Set(decisions.map(d=>{const r=recRows.get(d.author+'|'+d.title);assert(r,'Missing recommendation row '+d.title);return r.line;}));
write('RECOMMENDED_BOOKS.md',read('RECOMMENDED_BOOKS.md').split(/\r?\n/).filter(l=>!removedLines.has(l)).join('\n'));
const f=x=>Number(x).toFixed(2),esc=s=>String(s).replaceAll('|','/').replace(/[\r\n]+/g,' ');
const vetoes=data.currentBooks.filter(b=>b.status==='vetoed').sort((a,b)=>b.total-a.total||a.title.localeCompare(b.title));
const lines=vetoes.map(b=>{
 if(!ids.has(b.id)){const r=vetoRows.get(b.author+'|'+b.title);assert(r);return r.line;}
 const e=editions[b.id],r=recRows.get(b.author+'|'+b.title).cells;
 return `| ${b.entryDate||r[0]} | ${b.firstYear??b.year} | ${esc(b.author)} | [${esc(b.title)}](${report}#${b.id}) | ${f(b.total)} | V9 | high | ${b.sources.join(', ')} | ${e?`[${e.pages}](${e.url})`:'Unknown'} | ${b.amazon?.count==null?'Unknown':`[${b.amazon.count}](${b.amazon.url})`} | ${f(b.bonuses.REL)} | ${f(b.bonuses.RD)} |`;
});
write('VETOED_BOOKS.md',`# Vetoed books\n\nUpdated **2026-10-24, Europe/Warsaw**. ${counts.vetoed} unique works. [Revised V9 decisions and full counterfactual breakdowns](${report}) add nine vetoes. [Earlier current breakdowns](analysis/analysis_newrules_261024_2005.md) and [Dingle’s V1/V9 review](analysis/analysis_veto9_261024_2037.md#q1130) remain applicable to unchanged entries. Scores suspend only the veto gate. Earlier analyses remain history.\n\n| Entry date | First year | Author | Title | Counterfactual score | Veto | Veto confidence | Sources | Pages (edition) | Amazon ratings | Relevance | R&D |\n|---|---|---|---|---:|---|---|---|---:|---:|---:|---:|\n${lines.join('\n')}\n`);
const rule=read('AGENTS.md').split('## Veto rules')[1].split(/\r?\n/).find(l=>l.startsWith('9. Highly disputed foundations.'));
const parts=[`# Revised V9 application — 24 October 2026, 20:50 Europe/Warsaw\n\n${rule}\n\n## Outcome and interpretation\n\nNine recommendations receive V9 with high confidence: *Sapiens* plus the eight titles marked high confidence in the preceding candidate list. The change to Sapiens is a change in the rule’s coverage, supported by the central narrative criticism; it is not new proof that the entire book is false. The earlier V9 required a demonstrated defect forcing abandonment or reconstruction. The revised V9 instead excludes substantially disputed foundations and explicitly covers recurring explanatory narratives. High confidence refers to matching this selection rule, not a claim of scholarly consensus, conclusive refutation, or falsity of every supporting fact.\n\nThe criticism, central dependence and substantive defense are recorded separately below. Sound exposition and admitted uncertainty no longer exempt the central argument. This explains the changes from [the initial V9 review](analysis_veto9_261024_2037.md), which remains historical. Earlier decisions releasing other gates, including V4 for The Fourth Turning, are not retrospectively reversed. V9 supplies the new independent ground.\n\n| Status | Before | After |\n|---|---:|---:|\n| Recommended | 5407 | 5398 |\n| Vetoed | 602 | 611 |\n| Hard-excluded | 2653 | 2653 |\n\nModerate-confidence candidates, including Blink, Built to Last and Bullshit Jobs, retain their status. Boundary cases including Why Nations Fail also retain their status; this is a scoped application to the high-confidence set, not an exemption or a completed adjudication of every disputed book. Science at the Crossroads retains V1/V9. Hard exclusions remain prior to vetoes and no excluded work is scored.\n\nAll prior raw attainments, criterion contributions, deductions, bonuses, source IDs and totals are retained. This is a gate-only rule change; the identified weaknesses were already represented in the numerical assessments. The displayed scores below are counterfactual, suspending V9 only, and do not make the books recommended. Density assessments retain their earlier evidence basis and confidence. No new reader ratings, editions or reference-page counts were collected.\n\n## Decisions and full counterfactual scores\n`];
const max=[20,17,15,12,10,9,7,5,3,2],names=['Evidence and inferential integrity','Systems integration','Transferable strategic utility','Mechanistic and causal depth','Information density','Durability','Direct domain fit','Expert authority','Narrative clarity','Authorial precision'];
const link=r=>r.startsWith('analysis/')?'../'+r:r.startsWith('analysis_')?r:r;
for(const d of decisions){
 const b=byId.get(d.id),points=b.raw.map((x,i)=>[0,1,4].includes(i)?x*x/max[i]:x);
 const deductions=b.deductions||Object.fromEntries(['T11','T12','H13','P14','O15'].map(k=>[k,b[k]||0]));
 assert(Math.abs(points.reduce((a,b)=>a+b,0)+Object.values(deductions).reduce((a,b)=>a+b,0)+b.bonuses.REL+b.bonuses.RD-b.total)<1e-7);
 parts.push(`<a id="${b.id}"></a>\n\n### ${b.title} — ${b.author}\n\n**Recommended → vetoed, V9. Rule-match confidence: high. Counterfactual score: ${f(b.total)}.** Source IDs: ${b.sources.join(', ')}.\n\n${d.reason}\n\n**Defense considered:** ${d.defense}\n\n${d.limitation?'Evidence limitation: '+d.limitation+'\n\n':''}External evidence: ${d.refs.map((r,i)=>`[${i+1}](${r})`).join(', ')}. Prior assessments: ${d.priorReviews.map((r,i)=>`[${i+1}](${link(r)})`).join(', ')}.\n\n| Criterion | Retained linear attainment | Contribution |\n|---|---:|---:|\n${names.map((n,i)=>`| ${n} | ${f(b.raw[i])} / ${max[i]} | ${f(points[i])} |`).join('\n')}\n\n${Object.entries(deductions).map(([k,v])=>k+': '+f(v)).join('; ')}. REL: ${f(b.bonuses.REL)}; RD: ${f(b.bonuses.RD)}. **Total: ${f(b.total)}.** Score confidence retained: ${b.scoreConfidence||b.confidence||'unknown'}.\n\nOriginal year: ${b.firstYear??b.year}. Central historical endpoint: ${b.periodEnd??'none recorded; retained H13 as above'}. Amazon ratings: ${b.amazon?.count??'unknown; retained O15 fallback'}${b.amazon?.url?' ([recorded product]('+b.amazon.url+'))':''}.\n\nR&D metadata retained: ${JSON.stringify(b.bonusAssessment)}. Missing inputs retain the recorded zero fallback.\n`);
}
parts.push('## Verification\n\nThe application script verifies all scores, ten criterion inputs, deductions, bonuses, source IDs and rating records against the previous snapshot. All unrelated scored records and all hard exclusions are unchanged. Recommendation-only enrichment is archived and removed for the nine vetoed books; edition metadata is preserved. Historical analyses and snapshots remain untouched. The normal build validates the ledger and catalog membership and the exact saved methodology text.\n');
write(report,parts.join('\n'));write(dir+'compiled.json',data);write(dir+'decisions.json',decisions);write(dir+'archived-enrichment.json',archived);
write('data/catalog.json',{compiled:dir+'compiled.json'});write('site/enrichment.json',enrichment);write('site/editions.json',editions);
write('README.md',read('README.md').replaceAll('The active catalog is `data/veto9_261024/compiled.json`','The active catalog is `data/foundations_261024/compiled.json`').replace('The [V9 foundations review]','The initial [V9 foundations review]').replace('applies the high-confidence central-defect rule','applied the high-confidence central-defect rule').replace('No recommendation changes status;','In that initial review, no recommendation changed status;')+'\nThe [revised V9 application]('+report+') covers disputed central theses and recurring explanatory narratives. Nine high-confidence matches, including Sapiens, move to the veto list. The collection now has 5,398 recommended, 611 vetoed and 2,653 hard-excluded works. Scores and source IDs are retained.\n');
for(const p of [previous,'EXCLUDED_BOOKS.md','SOURCES.md','site/reference-pages.json'])assert.equal(hash(p),baseline.files[p]);
write(dir+'result.json',{counts,newVetoes:decisions.map(d=>({id:d.id,title:d.title,confidence:d.confidence})),scoreChanges:0,report});
console.log(JSON.stringify({counts,report,newVetoes:decisions.length}));
