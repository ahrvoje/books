import fs from 'node:fs';
import crypto from 'node:crypto';
import assert from 'node:assert/strict';
import decisions from './decisions.mjs';

const dir='data/v9_apply11_261024/', report='analysis/analysis_v9apply11_261024_2117.md';
const read=p=>fs.readFileSync(p,'utf8'), json=p=>JSON.parse(read(p));
const write=(p,v)=>fs.writeFileSync(p,typeof v==='string'?v:JSON.stringify(v,null,2)+'\n');
const hash=p=>crypto.createHash('sha256').update(read(p)).digest('hex');
const previous=json('data/catalog.json').compiled;
assert.equal(previous,'data/foundations_261024/compiled.json');
const data=json(previous), before=structuredClone(data), byId=new Map(data.currentBooks.map(b=>[b.id,b]));
const protectedFiles=[previous,'AGENTS.md','EXCLUDED_BOOKS.md','SOURCES.md','site/reference-pages.json'];
const baseline={previous,files:Object.fromEntries([...protectedFiles,'RECOMMENDED_BOOKS.md','VETOED_BOOKS.md','site/enrichment.json','site/editions.json'].map(p=>[p,hash(p)]))};
const ids=new Set(decisions.map(d=>d.id)); assert.equal(ids.size,11);
const enrichment=json('site/enrichment.json'), editions=json('site/editions.json'), archived={};
const rowMap=p=>new Map(read(p).split(/\r?\n/).filter(l=>/^\| \d{4}-/.test(l)).map(line=>{const c=line.split('|').slice(1,-1).map(s=>s.trim());return [c[2]+'|'+(c[3].match(/^\[([^\]]+)\]/)?.[1]||c[3]),{line,cells:c}];}));
const recRows=rowMap('RECOMMENDED_BOOKS.md'), vetoRows=rowMap('VETOED_BOOKS.md');
const normalizeReview=p=>p.startsWith('analysis_')?'analysis/'+p:p;
for(const d of decisions){
  const b=byId.get(d.id); assert(b,'Unknown ID '+d.id); assert.equal(b.status,'recommended');
  Object.assign(d,{title:b.title,author:b.author,confidence:'high',sources:b.sources,priorReviews:[...new Set([b.foundationReview?.analysis,b.reviewAnchor,b.scoreReview].filter(Boolean).map(normalizeReview))]});
  const review={date:'2026-10-24',rule:'V9',version:'disputed-foundations-and-recurring-narrative',previousStatus:b.status,status:'vetoed',applies:true,confidence:'high',reason:d.reason,defense:d.defense,evidence:d.refs,priorReviews:d.priorReviews,analysis:report+'#'+b.id};
  Object.assign(b,{status:'vetoed',veto:'V9',vetoConfidence:'high',vetoReason:d.reason,verdict:'Vetoed; counterfactual score',foundationReview:review,categoryReview:review,gateReview:{...b.gateReview,V9:d.reason},priorReviews:[...new Set([...(b.priorReviews||[]),...d.priorReviews])],reviewAnchor:review.analysis,currentReview:report,currentVetoAnchor:review.analysis,scoreReview:review.analysis});
  if(enrichment.books[b.id]){archived[b.id]=enrichment.books[b.id];if(enrichment.books[b.id].edition)editions[b.id]=enrichment.books[b.id].edition;delete enrichment.books[b.id];}
}
const counts={recommended:data.currentBooks.filter(b=>b.status==='recommended').length,vetoed:data.currentBooks.filter(b=>b.status==='vetoed').length,excluded:data.exclusions.length};
assert.deepEqual(counts,{recommended:5387,vetoed:622,excluded:2653});
data.audit={...data.audit,rulesSha256:hash('AGENTS.md'),...counts,latestFoundationReview:{date:'2026-10-24',report,previous,decisions:dir+'decisions.json',newlyVetoed:11,counts,scope:'User-authorized application to the eleven high-confidence titles in the preceding read-only catalog review. No other status or score changes.'}};
for(let i=0;i<data.currentBooks.length;i++){
  const b=data.currentBooks[i], old=before.currentBooks[i];
  for(const k of ['id','sources','raw','criteria','deductions','bonuses','bonusAssessment','total','amazon']) assert.deepEqual(b[k],old[k],k+' changed: '+b.id);
  if(!ids.has(b.id))assert.deepEqual(b,old,'Unrelated record changed: '+b.id);
}
assert.deepEqual(data.exclusions,before.exclusions); assert.deepEqual(data.sourceBooks,before.sourceBooks);
const currentIds=new Set(data.currentBooks.map(b=>b.id)); assert.equal(currentIds.size,data.currentBooks.length); assert(data.exclusions.every(b=>!currentIds.has(b.id)));
const removedLines=new Set(decisions.map(d=>{const r=recRows.get(d.author+'|'+d.title);assert(r,'Missing recommendation '+d.title);assert(!vetoRows.has(d.author+'|'+d.title));return r.line;}));
assert.equal(removedLines.size,11);
const recommended=read('RECOMMENDED_BOOKS.md').split(/\r?\n/).filter(l=>!removedLines.has(l)).join('\n');
const f=x=>Number(x).toFixed(2), esc=s=>String(s).replaceAll('|','/').replace(/[\r\n]+/g,' ');
const vetoes=data.currentBooks.filter(b=>b.status==='vetoed').sort((a,b)=>b.total-a.total||a.title.localeCompare(b.title));
const lines=vetoes.map(b=>{
  if(!ids.has(b.id)){const r=vetoRows.get(b.author+'|'+b.title);assert(r);return r.line;}
  const e=editions[b.id], r=recRows.get(b.author+'|'+b.title).cells;
  return `| ${b.entryDate||r[0]} | ${b.firstYear??b.year} | ${esc(b.author)} | [${esc(b.title)}](${report}#${b.id}) | ${f(b.total)} | V9 | high | ${b.sources.join(', ')} | ${e?`[${e.pages}](${e.url})`:'Unknown'} | ${b.amazon?.count==null?'Unknown':`[${b.amazon.count}](${b.amazon.url})`} | ${f(b.bonuses.REL)} | ${f(b.bonuses.RD)} |`;
});
const oldVeto=read('VETOED_BOOKS.md');
const header=oldVeto.slice(0,oldVeto.indexOf('| Entry date'));
const vetoed=header.replace('611 unique works.','622 unique works.').replace('[Revised V9 decisions',`[Eleven additional V9 decisions and full counterfactual breakdowns](${report}) apply the approved catalog-review findings. [Revised V9 decisions`)+oldVeto.slice(oldVeto.indexOf('| Entry date')).split(/\r?\n/).slice(0,2).join('\n')+'\n'+lines.join('\n')+'\n';
const rule=read('AGENTS.md').split('## Veto rules')[1].split(/\r?\n/).find(l=>l.startsWith('9. Highly disputed foundations.'));
const parts=[`# V9 application to eleven approved titles — 24 October 2026, 21:17 Europe/Warsaw\n\n${rule}\n\n## Scope and outcome\n\nThe user approved applying V9 to the eleven high-confidence titles identified in the preceding read-only catalog review. Each moves from recommended to vetoed. The existing ten V9 decisions and all other books retain their status. The moderate-confidence candidate set is not included.\n\n| Status | Before | After |\n|---|---:|---:|\n| Recommended | 5398 | 5387 |\n| Vetoed | 611 | 622 |\n| Hard-excluded | 2653 | 2653 |\n\nHigh confidence means that the criticism concerns the book’s central thesis or recurring explanatory narrative under the saved V9. It does not mean conclusive refutation, scholarly unanimity, or falsity of all supporting material. The older strict rule required a demonstrated central failure; these decisions use the revised rule already saved in AGENTS.md. Earlier decisions and analyses remain historical.\n\nThis is a gate-only application of the approved review. Existing assessments already record the relevant speculative or causal limitations. All ten raw attainments and contributions, deductions, bonuses, score confidence, source IDs, rating records and unrounded totals are retained. Scores below are counterfactual: only the veto gate is suspended. No new full-text density audit, rating retrieval or page-count reassessment is claimed. Prior eligibility findings are retained: these are explanatory nonfiction works, not technical training or routine reports. Phi uses imagined dialogues to explain a theory; its recorded nonfiction purpose is retained. The Case Against Sugar remains classified as an investigative causal argument, not a dietary manual.\n\n## Decisions and full counterfactual scores\n`];
const maxima=[20,17,15,12,10,9,7,5,3,2], names=['Evidence and inferential integrity','Systems integration','Transferable strategic utility','Mechanistic and causal depth','Information density and length justification','Durability and resistance to hype','Direct domain fit','Expert authority and intellectual standing','Narrative architecture and clarity','Authorial precision and finesse'];
for(const d of decisions){
  const b=byId.get(d.id), points=b.raw.map((x,i)=>[0,1,4].includes(i)?x*x/maxima[i]:x);
  const deductions=b.deductions||Object.fromEntries(['T11','T12','H13','P14','O15'].map(k=>[k,b[k]||0]));
  assert(Math.abs(points.reduce((a,b)=>a+b,0)+Object.values(deductions).reduce((a,b)=>a+b,0)+b.bonuses.REL+b.bonuses.RD-b.total)<1e-7,'Score mismatch '+b.id);
  for(const p of d.priorReviews)assert(fs.existsSync(p.split('#')[0]),'Missing prior review '+p);
  parts.push(`<a id="${b.id}"></a>\n\n### ${b.title} — ${b.author}\n\n**Recommended → vetoed, V9. Rule-match confidence: high. Counterfactual score: ${f(b.total)}.** Source IDs: ${b.sources.join(', ')}.\n\n${d.reason}\n\n**Defense considered:** ${d.defense}\n\nExternal evidence from the preceding review: ${d.refs.map((r,i)=>`[${i+1}](${r})`).join(', ')}. Prior assessments: ${d.priorReviews.map((r,i)=>`[${i+1}](../${r})`).join(', ')}.\n\n**Why the decision changes:** V9 covers the identified disputed foundation without requiring proof of whole-book invalidity. Preserve the prior numerical assessments and any release of other veto gates; V9 is an independent ground.\n\n| Criterion | Retained linear attainment | Contribution |\n|---|---:|---:|\n${names.map((n,i)=>`| ${n} | ${f(b.raw[i])} / ${maxima[i]} | ${f(points[i])} |`).join('\n')}\n\n${Object.entries(deductions).map(([k,v])=>k+': '+f(v)).join('; ')}. REL: ${f(b.bonuses.REL)}; RD: ${f(b.bonuses.RD)}. **Total: ${f(b.total)}.** Score confidence retained: ${b.scoreConfidence||b.confidence||'unknown'}.\n\nOriginal year: ${b.firstYear??b.year}. Central historical endpoint: ${b.periodEnd??'none recorded; retained H13 as above'}. Amazon ratings: ${b.amazon?.count??'unknown; retained O15 fallback'}${b.amazon?.url?' ([recorded product]('+b.amazon.url+'))':''}.\n\nR&D metadata retained: ${JSON.stringify(b.bonusAssessment)}. Missing inputs retain the recorded zero fallback.\n`);
}
parts.push('## Verification\n\nThe application script checks the eleven exact work IDs, current recommendation membership, score arithmetic, unchanged raw attainments and metadata, and unchanged unrelated records. All hard exclusions and historical source records remain unchanged. Recommendation-only enrichment is archived for the eleven works and edition metadata is preserved. The site build checks ledger membership, scores, source counts, page counts and rating consistency.\n');
for(const p of protectedFiles)assert.equal(hash(p),baseline.files[p]);
write(dir+'baseline.json',baseline); write(dir+'compiled.json',data); write(dir+'decisions.json',decisions); write(dir+'archived-enrichment.json',archived); write(report,parts.join('\n'));
write('RECOMMENDED_BOOKS.md',recommended); write('VETOED_BOOKS.md',vetoed); write('site/enrichment.json',enrichment); write('site/editions.json',editions); write('data/catalog.json',{compiled:dir+'compiled.json'});
write('README.md',read('README.md').replace('The active catalog is `data/foundations_261024/compiled.json`','The active catalog is `data/v9_apply11_261024/compiled.json`')+`\nThe [approved eleven-title V9 application](${report}) moves the eleven high-confidence catalog-review candidates to the veto list. Current totals: **5,387 recommended, 622 vetoed, 2,653 hard-excluded**. Scores and source IDs are retained; moderate-confidence candidates keep their status.\n`);
for(const p of protectedFiles)assert.equal(hash(p),baseline.files[p]);
write(dir+'result.json',{counts,newVetoes:decisions.map(d=>({id:d.id,title:d.title,confidence:d.confidence})),scoreChanges:0,report});
console.log(JSON.stringify({counts,newVetoes:decisions.length,scoreChanges:0,report}));
