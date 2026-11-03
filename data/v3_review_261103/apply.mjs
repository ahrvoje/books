import fs from 'node:fs';
import crypto from 'node:crypto';
import assert from 'node:assert/strict';
import {decisions} from './decisions.mjs';
import {format as fmt} from '../../site/model.mjs';
const dir='data/v3_review_261103', report='analysis/analysis_v3review_261103_2142.md';
const read=p=>JSON.parse(fs.readFileSync(p,'utf8')), hash=p=>crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');
const write=(p,v)=>fs.writeFileSync(p,typeof v==='string'?v:JSON.stringify(v,null,2)+'\n');
const baseline=read(dir+'/baseline.json');
assert.equal(read('data/catalog.json').compiled,baseline.previous,'One-time migration; do not overwrite a later catalog.');
for(const [p,h] of Object.entries(baseline.files)) if(p!=='AGENTS.md') assert.equal(hash(p),h,p+' changed during review');
for(const [p,h] of Object.entries(baseline.analyses)) assert.equal(hash(p),h,'Historical analysis changed: '+p);
const c=read(baseline.previous), before=structuredClone(c), inputs=read(dir+'/inputs.json'), byId=new Map(c.currentBooks.map(b=>[b.id,b]));
const codes=['E','S','U','M','D','R','F','A','N','P'], maxima=[20,17,15,12,10,9,7,5,3,2];
const points=b=>b.raw.map((x,i)=>[0,1,4].includes(i)?x*x/maxima[i]:x);
const deductions=b=>Object.fromEntries(['T11','T12','H13','P14','O15'].map(k=>[k,b.deductions?.[k]??b[k]]));
const sum=b=>points(b).reduce((a,v)=>a+v,0)+Object.values(deductions(b)).reduce((a,v)=>a+v,0)+b.bonuses.REL+b.bonuses.RD;
const esc=s=>String(s??'').replace(/\|/g,'&#124;'), link=(t,u)=>`[${esc(t)}](${u})`;
const local=u=>typeof u==='string'&&u.startsWith('analysis/')?u.slice(9):u;
const editions=read('site/editions.json'), refs=read('site/reference-pages.json'), enrichment=read('site/enrichment.json'), categories=read('site/exclusion-categories.json'), archived={};
assert.equal(new Set(decisions.map(d=>d.id)).size,decisions.length,'Duplicate explicit decision');
for(const b of c.currentBooks) assert(Math.abs(sum(b)-b.total)<1e-8,'Pre-existing score mismatch '+b.id);
const changes=[];
for(const d of decisions){
 const b=byId.get(d.id); assert(b,'Unknown decision '+d.id);
 const prior=b.scoreReview||b.reviewAnchor||b.currentReview;
 const x={...d,title:b.title,author:b.author,previousStatus:b.status,previousScore:b.total,previousRaw:[...b.raw],sources:[...b.sources],prior,
  priorEvidence:inputs.find(i=>i.id===b.id).evidence, evidence:[...new Set([...(b.evidence||[]).filter(e=>typeof e==='string'),...d.urls])],analysis:report+'#'+b.id};
 changes.push(x);
 if(d.decision.startsWith('H')){
  assert.equal(Object.keys(d.changes).length,0,'Never rescore a hard exclusion');
  archived[b.id]={book:b,edition:editions[b.id]||null,referencePages:refs[b.id],enrichment:enrichment.books[b.id]||null};
  c.currentBooks=c.currentBooks.filter(v=>v.id!==b.id);
  c.exclusions.push({id:b.id,title:b.title,author:b.author,status:'excluded',sources:b.sources,exclusion:d.decision,confidence:d.confidence,reason:d.reason,analysis:x.analysis,evidence:x.evidence,line:'- '+b.title+' — '+b.author});
  delete editions[b.id];delete refs[b.id];delete enrichment.books[b.id];categories[b.id]=d.id==='rem-u0424'||d.id==='progress-0593'?'Technology, Engineering, Innovation':'Misc. Non-fiction';
  x.status='excluded';x.score=null;continue;
 }
 b.priorReviews=[...new Set([...(b.priorReviews||[]),b.reviewAnchor,b.currentReview,b.scoreReview].filter(Boolean))];
 b.intellectualReview={date:'2026-11-03',decision:d.decision,character:d.character,reason:d.reason,confidence:d.confidence,analysis:x.analysis,method:d.urls.length?'Saved assessment plus cited external descriptions, reading notes or reviews; no full-text claim.':'Reassessment of saved book-specific content evidence; no new full-text inspection.'};
 b.note=d.character+' '+d.reason;
 if('reason' in b)b.reason=b.note;
 if('eligibility' in b)b.eligibility=b.note;
 b.currentReview=report;b.reviewAnchor=x.analysis;
 const revised=Object.entries(d.changes);
 for(const [code,[value,reason]] of revised){
  const i=codes.indexOf(code);assert(i>=0&&value>=0&&value<=maxima[i]);b.raw[i]=value;
  b.notes ||= codes.map((code,i)=>b.criteria?.find(k=>k.code===code)?.assessment||'Retained prior assessment.');
  b.notes[i]=reason;
  const criterion=b.criteria?.find(k=>k.code===code);if(criterion)criterion.assessment=reason;
 }
 if(revised.length){
  const p=points(b);b.points=p;if('contributions' in b)b.contributions=p;b.positive=p.reduce((a,v)=>a+v,0);
  for(const [i,code] of codes.entries()){
   const k=b.criteria?.find(k=>k.code===code);if(!k)continue;
   for(const field of ['raw','linearPoints'])if(field in k)k[field]=b.raw[i];
   for(const field of ['points','contribution'])if(field in k)k[field]=p[i];
  }
  b.total=sum(b);b.displayScore=fmt(b.total);if('unroundedTotal' in b)b.unroundedTotal=b.total;
  b.verdict=b.total>=85?'Recommend':b.total>=75?'Consider':b.total>=65?'Selective':b.total>=50?'Low priority':'Poor fit';
  b.scoreReview=x.analysis;
  if(d.changes.D)b.densityAssessment={confidence:'moderate',evidence:'Saved content assessment and cited reading notes or chapter-specific review; no broad direct-text coverage.',learning:d.character,lowYield:d.changes.D[1],refs:[x.analysis,...d.urls]};
 }
 if(d.decision.startsWith('V')){
  assert.equal(b.status,'recommended');b.status='vetoed';b.veto=d.decision;b.vetoReason=d.reason;b.vetoConfidence=d.confidence;b.vetoAssessmentConfidence=d.confidence;b.verdict='Vetoed; counterfactual score';b.scoreReview=x.analysis;
  if(enrichment.books[b.id])archived[b.id]={enrichment:enrichment.books[b.id]};delete enrichment.books[b.id];
 }
 x.status=b.status;x.score=b.total;x.raw=b.raw;x.contributions=points(b);x.deductions=deductions(b);x.bonuses=b.bonuses;x.bonusAssessment=b.bonusAssessment;
}
c.exclusions.sort((a,b)=>a.title.localeCompare(b.title,'en',{sensitivity:'base'})||a.author.localeCompare(b.author));
const current=new Map(c.currentBooks.map(b=>[b.id,b])), explicit=new Map(changes.map(x=>[x.id,x]));
// This ledger exposes what the stored evidence does and does not support. It does
// not convert a numerical score, keyword, or absent description into a new veto.
const screen=inputs.map(i=>{
 const b=byId.get(i.id), d=explicit.get(i.id), mechanism=b.criteria?.find(k=>k.code==='M')?.assessment||b.notes?.[3]||'', transfer=b.criteria?.find(k=>k.code==='U')?.assessment||b.notes?.[2]||'';
 const missing=!i.character||/^(The prior evidence does not establish a clear central historical period|.*(?:endpoint|composition date).*)$/.test(i.character)&&!i.evidence.some(e=>/mechanism|constraint|explain|argument|learning/i.test(e));
 const thin=i.raw[2]<=5||i.raw[3]<=4||/total absence|no payload at all|definite absence|some transferable.*prevent|small payload.*sufficient/i.test(i.evidence.join(' '));
 return {id:i.id,title:i.title,author:i.author,previousStatus:i.status,status:d?.status||i.status,reviewLevel:d?'focused decision':i.status==='vetoed'&&String(i.veto).includes('V3')?'existing V3 evidence recheck':'structured prior-evidence screen',
  mainCharacteristic:d?.character||(!missing?i.character:null),transferEvidence:transfer,causalEvidence:mechanism,
  finding:d?d.reason:missing?'Main-characteristic evidence is missing or too indirect. Retain status and scores; no new V3 conclusion is supported.':i.status==='vetoed'?'Retain the recorded veto on its cited evidence; this screen does not establish a different gate or erase existing flaws.':thin?'The saved evidence needs a whole-contribution judgment. A few insights do not automatically defeat V3; limited inspection does not prove failure. Retain the existing result with its uncertainty.':'The saved account identifies explanatory, conceptual or historical content and nontrivial transfer/causal attainment. No new V3 failure is established in this record-level review; retain its evidence limits and score.',
  confidence:d?.confidence||i.confidence,needsDirectReview:!d&&(missing||thin),refs:d?[d.analysis,...d.urls]:i.refs,
  raw:d?.status==='excluded'?null:current.get(i.id)?.raw||i.raw,score:d?.status==='excluded'?null:current.get(i.id)?.total||i.total};
});
const counts={screened:screen.length,focused:changes.length,existingV3Rechecked:inputs.filter(i=>i.status==='vetoed'&&String(i.veto).includes('V3')).length,hardExcluded:changes.filter(x=>x.status==='excluded').length,newVetoes:changes.filter(x=>x.previousStatus==='recommended'&&x.status==='vetoed').length,changedScores:changes.filter(x=>x.score!==null&&Math.abs(x.score-x.previousScore)>1e-8).length,recommended:c.currentBooks.filter(b=>b.status==='recommended').length,vetoed:c.currentBooks.filter(b=>b.status==='vetoed').length,excluded:c.exclusions.length,needsDirectReview:screen.filter(x=>x.needsDirectReview).length};
c.audit.rulesSha256=hash('AGENTS.md');
c.audit.latestV3Review={date:'2026-11-03',previous:baseline.previous,report,...counts,sourceCountChanges:0,scope:'All structured records screened against the revised V3; existing V3 evidence and low-payload records rechecked, with explicit focused decisions. Prior evidence is reused, not represented as fresh full-text coverage. Unknown purpose and limited inspection remain explicit. Numerical flags do not decide vetoes.'};
const parseLedger=p=>{const lines=fs.readFileSync(p,'utf8').split(/\r?\n/);return {header:lines.filter(l=>!/^\| \d{4}-/.test(l)).join('\n').trimEnd(),rows:new Map(lines.filter(l=>/^\| \d{4}-/.test(l)).map(l=>{const a=l.split('|').slice(1,-1).map(s=>s.trim());return [a[2]+'|'+(a[3].match(/^\[([^\]]+)\]/)?.[1]||a[3]),a];}))};};
const rec=parseLedger('RECOMMENDED_BOOKS.md'), veto=parseLedger('VETOED_BOOKS.md');
const sorted=status=>c.currentBooks.filter(b=>b.status===status).sort((a,b)=>b.total-a.total||a.title.localeCompare(b.title));
const recRows=sorted('recommended').map(b=>{const r=rec.rows.get(b.author+'|'+b.title);assert(r,'No recommendation row '+b.id);r[4]=fmt(b.total);return '| '+r.join(' | ')+' |';});
const vetoRows=sorted('vetoed').map(b=>{let r=veto.rows.get(b.author+'|'+b.title);if(!r){const e=editions[b.id];r=[b.entryDate,b.year,b.author,link(b.title,b.reviewAnchor),fmt(b.total),b.veto,b.vetoConfidence,b.sources.join(', '),e?link(e.pages,e.url):'Unknown',b.amazon?.count==null?'Unknown':link(b.amazon.count,b.amazon.url),fmt(b.bonuses.REL),fmt(b.bonuses.RD)];}return '| '+r.join(' | ')+' |';});
const vetoHeader=veto.header.replace(/Updated \*\*.*?\*\*\. \d+ unique works\./,`Updated **2026-11-03, Europe/Warsaw**. ${counts.vetoed} unique works. [Strengthened V3 and current decisions](${report}) supersede the affected earlier entries.`);
let text=`# Strengthened V3: intellectual-content review\n\n3 November 2026, Europe/Warsaw. **${counts.screened} structured records screened; ${counts.focused} explicit focused decisions; ${counts.existingV3Rechecked} existing V3 records rechecked.** ${counts.hardExcluded} hard exclusions, ${counts.newVetoes} new vetoes and ${counts.changedScores} changed numerical scores. Current membership: ${counts.recommended} recommended, ${counts.vetoed} vetoed, ${counts.excluded} excluded.\n\n## Rule and review scope\n\nV3 now requires substantial explanatory or transferable content. A few isolated observations do not automatically pass it. Detailed history, comparative cases, meaningful distinctions and scientific biographies retain their value. A single subject, one framework, low personal topic fit or lack of inspection does not establish failure. Hard exclusions come first.\n\nThe catalog-wide pass reassesses **saved evidence**, not thousands of newly read books. It checks purpose, claimed transfer, causal content, prior gate reasoning and confidence. Numerical and wording flags select cases; they never assign a veto. Focused decisions below use the prior assessments plus the identified external evidence. No book is claimed to have received a new full-text reading. ${counts.needsDirectReview} records remain marked for direct review because evidence is thin or purpose is not established. Their existing status is retained rather than inventing certainty.\n\n[Complete screening ledger](../${dir}/screening-ledger.json), [explicit decisions and prior evidence](../${dir}/changes.json), [verification](../${dir}/verification.json). Source memberships and all REL/RD inputs are unchanged. Hard-excluded records receive no new score; removed metadata is archived. Existing analyses and the prior compiled catalog remain unchanged.\n\n## Criteria and evidence\n\nE assesses reliability and inference; S assesses connected layers; U assesses reuse; M assesses explanation of causal steps and constraints; D assesses distinct learning per reading effort. A weak causal claim is not automatically a second density deduction. D changes below use recorded repetition or chapter-specific development, never book length alone. Gate confidence is separate from the confidence of an unchanged score. Unreviewed density estimates retain their earlier limits.\n\n## Focused decisions\n\n`;
for(const x of changes){
 text+=`<a id="${x.id}"></a>\n\n### ${x.title} — ${x.author}\n\n**${x.decision}; ${x.confidence} gate confidence.** Main characteristic: ${x.character}\n\n${x.reason}\n\n${link('Prior score/review',local(x.prior))}. Sources: ${x.sources.join(', ')}. ${x.urls.map((u,i)=>link('Inspected evidence '+(i+1),u)).join('; ')}\n\n`;
 if(x.status==='excluded'){text+='Hard excluded before scoring. No new score or counterfactual score. Identity and purpose evidence from the prior record is retained in the decision data.\n\n';continue;}
 const b=current.get(x.id);text+=`Score **${fmt(x.previousScore)} → ${fmt(b.total)}**${b.status==='vetoed'?' (counterfactual; veto remains in force)':''}. Unchanged attainments retain their prior evidence and confidence.\n\n| Criterion | Linear attainment | Contribution | Review finding |\n|---|---:|---:|---|\n`;
 codes.forEach((code,i)=>text+=`| ${code} | ${fmt(b.raw[i])} / ${maxima[i]} | ${fmt(points(b)[i])} | ${esc(x.changes[code]?.[1]||b.criteria?.find(k=>k.code===code)?.assessment||b.notes?.[i]||'Retained prior assessment.')} |\n`);
 text+='\nDeductions: '+Object.entries(deductions(b)).map(([k,v])=>k+' '+fmt(v)).join('; ')+`. REL ${fmt(b.bonuses.REL)}; RD ${fmt(b.bonuses.RD)}. R&D metadata: ${JSON.stringify(b.bonusAssessment)}.\n\n`;
}
text+='## Existing V3 decisions\n\nThe following retained decisions use the saved content findings, not a new assertion that all narrative particulars lack value. Poetry and art-purpose errors are corrected above. Limited-description judgments remain limited-confidence.\n\n| ID | Work | Retained basis | Prior evidence |\n|---|---|---|---|\n';
for(const i of inputs.filter(i=>i.status==='vetoed'&&String(i.veto).includes('V3')&&!explicit.has(i.id)))text+=`| ${i.id} | ${esc(i.title)} | ${esc(i.evidence.find(s=>/V3|payload|transferable/i.test(s))||i.character||'See prior assessment; no new direct-text confidence.')} | ${link('Prior',local(byId.get(i.id).reviewAnchor||byId.get(i.id).scoreReview))} |\n`;
// Validate all membership, source and score contracts before writing active files.
const all=[...c.currentBooks,...c.exclusions];assert.equal(new Set(all.map(b=>b.id)).size,all.length);
for(const old of before.currentBooks){const b=all.find(b=>b.id===old.id);assert(b);assert.deepEqual(b.sources,old.sources);if(current.has(old.id)){assert(Math.abs(sum(b)-b.total)<1e-8);assert.deepEqual(b.bonuses,old.bonuses);assert.deepEqual(b.bonusAssessment,old.bonusAssessment);if(!explicit.has(old.id))assert.deepEqual(b,old);}}
for(const old of before.exclusions)assert.deepEqual(c.exclusions.find(b=>b.id===old.id),old);
write(dir+'/changes.json',changes);write(dir+'/screening-ledger.json',screen);write(dir+'/archived-metadata.json',archived);write(report,text);write(dir+'/compiled.json',c);
write('RECOMMENDED_BOOKS.md',rec.header+'\n'+recRows.join('\n')+'\n');write('VETOED_BOOKS.md',vetoHeader+'\n'+vetoRows.join('\n')+'\n');write('EXCLUDED_BOOKS.md','# Excluded books\n\n'+c.exclusions.map(b=>b.line).join('\n')+'\n');
write('site/editions.json',editions);write('site/reference-pages.json',refs);write('site/enrichment.json',enrichment);write('site/exclusion-categories.json',categories);write('data/catalog.json',{compiled:dir+'/compiled.json'});
write(dir+'/verification.json',{...counts,report,rulesHash:c.audit.rulesSha256,sourceMembership:'unchanged for every work',sourceRegistry:'unchanged',historicalAnalyses:'all baseline hashes preserved',priorCompiled:'unchanged',scores:'all independently recalculated from raw inputs; changes limited to explicit decisions',membership:'unique and disjoint',tests:'pending'});
console.log({report,...counts});
