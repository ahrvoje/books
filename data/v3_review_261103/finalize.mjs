import fs from 'node:fs';
import assert from 'node:assert/strict';
import {format as fmt} from '../../site/model.mjs';
import {decisions} from './followup-decisions.mjs';
const dir='data/v3_review_261103',report='analysis/analysis_v3review_261103_2142.md';
const read=p=>JSON.parse(fs.readFileSync(p,'utf8')),write=(p,v)=>fs.writeFileSync(p,typeof v==='string'?v:JSON.stringify(v,null,2)+'\n');
const c=read(dir+'/compiled.json'),before=read(read(dir+'/baseline.json').previous),changes=read(dir+'/changes.json'),screen=read(dir+'/screening-ledger.json'),archived=read(dir+'/archived-metadata.json');
assert(!c.audit.latestV3Review.finalized,'Already finalized');
const editions=read('site/editions.json'),refs=read('site/reference-pages.json'),extra=read('site/enrichment.json'),categories=read('site/exclusion-categories.json');
const codes=['E','S','U','M','D','R','F','A','N','P'],max=[20,17,15,12,10,9,7,5,3,2],esc=s=>String(s??'').replace(/\|/g,'&#124;'),link=(t,u)=>`[${esc(t)}](${u})`;
const local=u=>u?.startsWith('analysis/')?u.slice(9):u;
let text=fs.readFileSync(report,'utf8')+'\n## Follow-up decisions from recovered content evidence\n\n';
for(const d of decisions){
 const b=c.currentBooks.find(b=>b.id===d.id);assert(b?.status==='recommended');assert(!changes.some(x=>x.id===d.id));
 const prior=b.scoreReview||b.reviewAnchor||b.currentReview,anchor=report+'#'+b.id;
 const recovered=read(dir+'/recovered-purpose.json').find(r=>r.id===b.id);
 const x={...d,title:b.title,author:b.author,previousStatus:b.status,previousScore:b.total,previousRaw:[...b.raw],sources:[...b.sources],prior,analysis:anchor,changes:{},priorEvidence:recovered?.paragraphs||[],evidence:[...(b.evidence||[]),...d.urls]};
 if(d.decision==='H7'){
  archived[b.id]={book:b,edition:editions[b.id]||null,referencePages:refs[b.id],enrichment:extra.books[b.id]||null};
  c.currentBooks=c.currentBooks.filter(v=>v.id!==b.id);delete editions[b.id];delete refs[b.id];delete extra.books[b.id];categories[b.id]='Business, Economy, Geostrategy';
  c.exclusions.push({id:b.id,title:b.title,author:b.author,status:'excluded',sources:b.sources,exclusion:'H7',confidence:d.confidence,reason:d.reason,analysis:anchor,evidence:x.evidence,line:'- '+b.title+' — '+b.author});x.status='excluded';x.score=null;
 }else{
  b.priorReviews=[...new Set([...(b.priorReviews||[]),b.reviewAnchor,b.currentReview,b.scoreReview].filter(Boolean))];
  b.intellectualReview={date:'2026-11-03',decision:d.decision,character:d.character,reason:d.reason,confidence:d.confidence,analysis:anchor,method:'Recovered prior content assessment and cited external review or publisher description; no full-text claim.'};
  b.note=d.character+' '+d.reason;if('reason'in b)b.reason=b.note;if('eligibility'in b)b.eligibility=b.note;b.reviewAnchor=anchor;b.currentReview=report;
  if(d.decision==='V3'){b.status='vetoed';b.veto='V3';b.vetoReason=d.reason;b.vetoConfidence=d.confidence;b.vetoAssessmentConfidence=d.confidence;b.verdict='Vetoed; counterfactual score';b.scoreReview=anchor;if(extra.books[b.id])archived[b.id]={enrichment:extra.books[b.id]};delete extra.books[b.id];}
  x.status=b.status;x.score=b.total;x.raw=b.raw;x.contributions=b.raw.map((v,i)=>[0,1,4].includes(i)?v*v/max[i]:v);x.deductions=b.deductions;x.bonuses=b.bonuses;x.bonusAssessment=b.bonusAssessment;
 }
 changes.push(x);const s=screen.find(s=>s.id===b.id);Object.assign(s,{status:x.status,reviewLevel:'focused decision',mainCharacteristic:d.character,finding:d.reason,confidence:d.confidence,needsDirectReview:false,refs:[anchor,...d.urls],score:x.score,raw:x.status==='excluded'?null:b.raw});
 text+=`<a id="${b.id}"></a>\n\n### ${b.title} — ${b.author}\n\n**${d.decision}; ${d.confidence} confidence.** ${d.character}\n\n${d.reason}\n\n${link('Prior score',local(prior))}${recovered?'; '+link('Recovered content assessment',local(recovered.ref)):''}. Sources ${b.sources.join(', ')}. ${d.urls.map((u,i)=>link('Evidence '+(i+1),u)).join('; ')}.\n\n`;
 if(x.status==='excluded'){text+='Hard excluded; no new score assigned.\n\n';continue;}
 text+=`**${b.status==='vetoed'?'Counterfactual score':'Score'} ${fmt(b.total)}**, unchanged. All ten attainments and deductions retain their earlier evidence; the gate change is not an extra numerical penalty.\n\n| Criterion | Linear attainment | Contribution |\n|---|---:|---:|\n`;
 codes.forEach((code,i)=>text+=`| ${code} | ${fmt(b.raw[i])} / ${max[i]} | ${fmt(x.contributions[i])} |\n`);
 text+='\nDeductions: '+JSON.stringify(b.deductions)+'. Bonuses: '+JSON.stringify(b.bonuses)+'. R&D metadata: '+JSON.stringify(b.bonusAssessment)+'.\n\n';
}
// Replace copied, now-contradictory gate prose in the quotation compilation's
// current criterion notes. Its earlier record remains intact in the baseline.
const tao=c.currentBooks.find(b=>b.id==='shelf-1d5f5f0f91f1');
const notes={E:'Quotation identity and attribution rely on the compiler and saved bibliographic record; no new broad factual audit. Retain E11.',S:'Separate sayings connect few explanatory layers. Retain S3.4.',R:'Some language and social observations remain durable despite limited explanatory development. Retain R5.85.',F:'Little direct scientific, technical or industrial content. Retain F0.7.',A:'Comedic experience supports observation but not general causal authority. Retain A2.75.',N:'A collection of quotations has little cumulative argumentative structure. Retain N1.35.',P:'Compression and wit are distinct from exact explanatory reasoning. Retain P1.4.'};
for(const [code,note]of Object.entries(notes)){const i=codes.indexOf(code),k=tao.criteria.find(k=>k.code===code),old=k.assessment;k.assessment=note;tao.notes[i]=note;text=text.replace(`| ${code} | ${fmt(tao.raw[i])} / ${max[i]} | ${fmt(tao.raw[i]**([0,1,4].includes(i)?2:1)/([0,1,4].includes(i)?max[i]:1))} | ${esc(old)} |`,`| ${code} | ${fmt(tao.raw[i])} / ${max[i]} | ${fmt(tao.raw[i]**([0,1,4].includes(i)?2:1)/([0,1,4].includes(i)?max[i]:1))} | ${esc(note)} |`);}
// Recovery is provenance repair, not automatic certification or a new score.
const recovered=read(dir+'/recovered-purpose.json');
const usable=recovered.filter(r=>r.paragraphs.some(p=>!/^E \/ M|^Criterion order|^Added reference|Pasted occurrences:|^Status:|^Initial rank/.test(p)&&/explain|mechanism|constraint|argument|institution|concept|production|evidence|incentive|biograph|observ|model/i.test(p)));
for(const r of usable){const b=c.currentBooks.find(b=>b.id===r.id);if(!b||b.intellectualReview)continue;b.priorPurposeEvidence={ref:r.ref,paragraphs:r.paragraphs,recovered:'2026-11-03',confidence:r.confidence,limitation:'Recovered historical content evidence. Old rule wording and scores in this excerpt are history, not current gate decisions or numerical inputs.'};const s=screen.find(s=>s.id===r.id);s.recoveredPurposeRef=r.ref;s.recoveredPurposeEvidence=r.paragraphs;s.finding+=' Historical purpose/criterion evidence was recovered; the confidence is not raised merely by recovery.';}
c.exclusions.sort((a,b)=>a.title.localeCompare(b.title,'en',{sensitivity:'base'})||a.author.localeCompare(b.author));
const a=c.audit.latestV3Review;Object.assign(a,{focused:changes.length,hardExcluded:changes.filter(x=>x.status==='excluded').length,newVetoes:changes.filter(x=>x.previousStatus==='recommended'&&x.status==='vetoed').length,recommended:c.currentBooks.filter(b=>b.status==='recommended').length,vetoed:c.currentBooks.filter(b=>b.status==='vetoed').length,excluded:c.exclusions.length,recoveredPurpose:usable.filter(r=>c.currentBooks.some(b=>b.id===r.id&&b.priorPurposeEvidence)).length,needsDirectReview:screen.filter(s=>s.needsDirectReview).length,finalized:true});
text=text.replace(/\*\*6635 structured records screened; \d+ explicit focused decisions; 112 existing V3 records rechecked\.\*\* \d+ hard exclusions, \d+ new vetoes and 6 changed numerical scores\. Current membership: \d+ recommended, \d+ vetoed, \d+ excluded\./,`**6635 structured records screened; ${a.focused} explicit focused decisions; 112 existing V3 records rechecked.** ${a.hardExcluded} hard exclusions, ${a.newVetoes} new vetoes and 6 changed numerical scores. Current membership: ${a.recommended} recommended, ${a.vetoed} vetoed, ${a.excluded} excluded.`).replace(/1770 records remain marked/,`${a.needsDirectReview} records remain marked`);
text+=`## Purpose-evidence recovery\n\n${a.recoveredPurpose} current records now retain a direct pointer and extract from their older content assessments. These were missing from the structured purpose fields. This improves provenance, not the underlying inspection level. Historical score numbers and old gate wording remain explicitly historical; current numeric fields and the revised rule take precedence. [Recovered sections](../${dir}/recovered-purpose.json). No confidence upgrade or score change is inferred from successful text extraction.\n`;
const remove=new Set(decisions.filter(d=>d.decision!=='retain').map(d=>{const b=before.currentBooks.find(b=>b.id===d.id);return b.author+'|'+b.title;}));
let rec=fs.readFileSync('RECOMMENDED_BOOKS.md','utf8').split(/\r?\n/).filter(l=>{if(!/^\| \d{4}-/.test(l))return true;const r=l.split('|').slice(1,-1).map(s=>s.trim());return !remove.has(r[2]+'|'+r[3].match(/^\[([^\]]+)\]/)[1]);}).join('\n');
const veto=fs.readFileSync('VETOED_BOOKS.md','utf8').split(/\r?\n/),rows=veto.filter(l=>/^\| \d{4}-/.test(l));
for(const d of decisions.filter(d=>d.decision==='V3')){const b=c.currentBooks.find(b=>b.id===d.id),e=editions[b.id];rows.push('| '+[b.entryDate,b.year,b.author,link(b.title,b.reviewAnchor),fmt(b.total),b.veto,b.vetoConfidence,b.sources.join(', '),e?link(e.pages,e.url):'Unknown',b.amazon?.count==null?'Unknown':link(b.amazon.count,b.amazon.url),fmt(b.bonuses.REL),fmt(b.bonuses.RD)].join(' | ')+' |');}
const scoreMap=new Map(c.currentBooks.map(b=>[b.author+'|'+b.title,b.total]));const key=l=>{const r=l.split('|').slice(1,-1).map(s=>s.trim());return r[2]+'|'+r[3].match(/^\[([^\]]+)\]/)[1];};rows.sort((x,y)=>scoreMap.get(key(y))-scoreMap.get(key(x)));
const header=veto.filter(l=>!/^\| \d{4}-/.test(l)).join('\n').trimEnd().replace(/\d+ unique works\./,`${a.vetoed} unique works.`);
write(dir+'/compiled.json',c);write(dir+'/changes.json',changes);write(dir+'/screening-ledger.json',screen);write(dir+'/archived-metadata.json',archived);write(report,text);write('RECOMMENDED_BOOKS.md',rec);write('VETOED_BOOKS.md',header+'\n'+rows.join('\n')+'\n');write('EXCLUDED_BOOKS.md','# Excluded books\n\n'+c.exclusions.map(b=>b.line).join('\n')+'\n');write('site/editions.json',editions);write('site/reference-pages.json',refs);write('site/enrichment.json',extra);write('site/exclusion-categories.json',categories);
console.log(a);
