import fs from 'node:fs';
import crypto from 'node:crypto';
import assert from 'node:assert/strict';
import { excluded, vetoed, retained } from './decisions.mjs';
import { REGISTRY, format as f } from '../../site/model.mjs';
const dir='data/category_review_261021/', previousPath='data/books_guru_261021/compiled.json';
const read=p=>fs.readFileSync(p,'utf8'), json=p=>JSON.parse(read(p)), sha=s=>crypto.createHash('sha256').update(s).digest('hex');
assert.equal(json('data/catalog.json').compiled,previousPath,'This one-time migration has already run or the catalog changed.');
const previous=json(previousPath), rulesHash=sha(read('AGENTS.md'));
const parts=Object.fromEntries(new Intl.DateTimeFormat('en-GB',{timeZone:'Europe/Warsaw',year:'2-digit',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',hourCycle:'h23'}).formatToParts(new Date()).map(p=>[p.type,p.value]));
const stamp=`${parts.year}${parts.month}${parts.day}_${parts.hour}${parts.minute}`, date='2026-10-21', report=`analysis/analysis_categories_${stamp}.md`;
const baselineFiles=['AGENTS.md','RECOMMENDED_BOOKS.md','VETOED_BOOKS.md','EXCLUDED_BOOKS.md','SOURCES.md','site/enrichment.json','data/catalog.json'];
const baseline=Object.fromEntries(baselineFiles.map(p=>[p,sha(read(p))]));
const all=[...previous.currentBooks,...previous.exclusions], byId=new Map(all.map(b=>[b.id,b]));
assert.equal(byId.size,all.length);
for(const id of Object.keys({...excluded,...vetoed,...retained}))assert(byId.has(id),id);
const promotionInputs={
 h0122:{year:1922,periodEnd:1821,raw:[13,10,6,7,5,7,6,3,2,1.5],
  reason:'The full text contains substantial accounts of discoveries, experiments, navigation and scientific transmission. Under revised H3, this annotated historical chronology offers explanatory value beyond locating references. Older origin claims and uneven causal integration limit quality, not format eligibility.',
  evidence:'https://www.gutenberg.org/files/74764/74764-h/74764-h.htm',purchaseUrl:'https://www.amazon.de/s?k=Bibliographical+History+Electricity+Magnetism+Mottelay',
  notes:['Extensive citations, but dated origin claims and historical standards limit reliability.','Connects experiments, navigation and scientific transmission; institutions and production receive uneven treatment.','Discovery and transmission examples offer some reusable lessons.','Describes experiments and instruments, with uneven causal interpretation.','Length includes substantial bibliographic and local detail.','Historical documentary value persists.','Electricity, instrumentation and scientific development fit the reader.','A substantial historical compilation; not modern specialist consensus.','Chronology is clear but fragmented.','Older scholarly prose is detailed and sometimes overconfident.']},
 h0315:{year:2022,periodEnd:null,raw:[17,12,10,10,8,8,7,4,3,1.5],
  reason:'The publisher identifies a non-engineer audience and explanatory sections on infrastructure. Identification aids support understanding of how systems work; the book does not train readers to design or operate the systems. A field-guide format alone does not establish a technical-reference purpose under revised H3.',
  evidence:'https://nostarch.com/engineering-plain-sight',purchaseUrl:'https://www.amazon.de/dp/171850232X',
  notes:['Practicing civil engineer; concrete explanations and published errata, without an exhaustive accuracy audit.','Spans power, communications, transport and water; cross-system integration is moderate.','Infrastructure constraints provide reusable engineering intuition.','Explains physical functions and design choices without specialist training.','Illustrations and compact sections support useful density.','Core infrastructure mechanisms endure.','Direct infrastructure and engineering fit.','Author has civil-engineering practice and science-communication experience.','Accessible illustrated organization; not a continuous historical narrative.','Clear explanations necessarily simplify technical details.']}
};
const changes=[], reviewed=[], archivedEnrichment={};
const category=(b,status,reason,confidence='high')=>{
 const before=byId.get(b.id), prior=before.reviewAnchor||before.currentReview||before.analysis||before.priorReport;
 const review={date,rule:status==='excluded'?'H3':status==='vetoed'?'V6':'H3/V6',previousStatus:before.status,status,reason,confidence,prior,analysis:report+'#'+b.id};
 reviewed.push({id:b.id,title:b.title,...review});
 b.categoryReview=review;b.priorReviews=[...new Set([...(b.priorReviews||[]),prior].filter(Boolean))];
 if(status!==before.status || Object.hasOwn(vetoed,b.id))changes.push({id:b.id,title:b.title,...review});
 b.status=status;
 if(status!==before.status || Object.hasOwn(vetoed,b.id)){
  b.reason=reason;b.eligibility=reason;b.eligibilityConfidence=confidence;
  b.reviewAnchor=report+'#'+b.id;b.currentReview=report;
 }
 return b;
};
const current=[], exclusions=[];
for(const original of all){
 let b=structuredClone(original);
 if(excluded[b.id]){
  category(b,'excluded',excluded[b.id]);
  b.exclusion='H3'; b.analysis=report+'#'+b.id;b.line=`- ${b.title} — ${b.author}`;
  // Historical scores stay in the immutable previous compiled snapshot, never in current excluded records.
  for(const key of ['raw','points','criteria','notes','total','displayScore','positive','deductions','T11','T12','verdict','previousTotal','scoreConfidence','veto','vetoReason','vetoConfidence'])delete b[key];
 }else if(vetoed[b.id]){
  category(b,'vetoed',vetoed[b.id],['g0731','g0771','g0726','g0790','g0785','g0792','g0791','g0793','g0705','g0703','n28d920ca6a','n63b96e5c2a','q1005','q1138'].includes(b.id)?'high':'moderate');
  b.veto=[...new Set([...(String(original.veto||'').match(/V\d+/g)||[]),'V6'])].join('; ');
  b.vetoReason=[original.status==='vetoed'?original.vetoReason||original.reason:'',vetoed[b.id]].filter(Boolean).join(' ');
  b.vetoConfidence=b.categoryReview.confidence;
 }else if(promotionInputs[b.id]){
  const p=promotionInputs[b.id];category(b,'recommended',p.reason,'moderate');
  Object.assign(b,p,{entryDate:date,yearConfidence:'high',periodConfidence:p.periodEnd===null?'high':'moderate',confidence:'moderate',scoreConfidence:'moderate',T11:0,T12:0,veto:null,vetoReason:null,vetoConfidence:null});
  b.evidence=[...new Set([...(original.evidence||[]),p.evidence])];delete b.exclusion;delete b.line;
  b.yearNote='Original publication year from the inspected primary text or publisher; reprints do not reset age.';
  b.periodNote=p.periodEnd===null?'Cross-system explanation with no central historical period.':'Main chronology ends in 1821; later bibliographic references do not reset the subject endpoint.';
  b.amazon={count:null,url:p.purchaseUrl,marketplace:'amazon.de',attemptedAt:date,status:'Matching rating aggregate unavailable after retrieval attempt; zero obscurity-deduction fallback, not zero ratings.'};
  b.reader='Unavailable';b.titleCell=`[${b.title}](${p.purchaseUrl})`;b.listYear=b.year;
  b.points=b.raw.map((x,i)=>REGISTRY[i].quadratic?x*x/REGISTRY[i].max:x);
  b.positive=b.points.reduce((a,v)=>a+v,0);b.deductions={T11:0,T12:0,H13:p.periodEnd===null?0:-Math.min(12,(2026-p.periodEnd)/25),P14:-Math.min(10,(2026-p.year)/10),O15:0};
  b.total=b.positive+Object.values(b.deductions).reduce((a,v)=>a+v,0);b.displayScore=f(b.total);b.verdict=b.total>=70?'Consider':b.total>=50?'Selective':'Low priority';
  b.criteria=REGISTRY.slice(0,10).map((r,i)=>({code:r.id,name:r.name,max:r.max,raw:b.raw[i],points:b.points[i],assessment:b.notes[i]}));
 }else{
  category(b,b.status,retained[b.id]||'Screened under revised H3 and V6 using the retained identity, purpose and eligibility record. No supported category change identified; retain the prior category and other gates.',retained[b.id]?'moderate':(b.eligibilityConfidence||b.confidence||'moderate'));
 }
 (b.status==='excluded'?exclusions:current).push(b);
}
const rank=(a,b)=>b.total-a.total||a.title.localeCompare(b.title,'en');
const recs=current.filter(b=>b.status==='recommended').sort(rank),vetos=current.filter(b=>b.status==='vetoed').sort(rank);
exclusions.sort((a,b)=>a.title.localeCompare(b.title,'en'));
const fields=['raw','points','criteria','total','deductions','T11','T12','periodEnd','year','amazon','confidence','scoreConfidence','notes','verdict','sources'];
for(const b of current)if(!promotionInputs[b.id])for(const field of fields)assert.deepEqual(b[field],byId.get(b.id)[field],`${b.id}: changed ${field}`);
const cell=x=>String(x??'').replace(/\|/g,'&#124;').replace(/\r?\n/g,' ');
const link=(text,url)=>`[${cell(text)}](${url})`;
const priorRows=new Map(read('RECOMMENDED_BOOKS.md').split(/\r?\n/).filter(l=>/^\| \d{4}-/.test(l)).map(l=>{const a=l.split('|');return [a[3].trim()+'|'+a[4].match(/\[([^\]]+)\]/)?.[1],l];}));
const recText='| Entry date | First publication year | Author | Title | Score / 100 | Source |\n|---|---|---|---|---:|---:|\n'+recs.map(b=>priorRows.get(b.author+'|'+b.title)||`| ${b.entryDate} | ${b.year} | ${cell(b.author)} | ${b.titleCell||link(b.title,b.purchaseUrl)} | ${f(b.total)} | ${b.sources.join(', ')} |`).join('\n')+'\n';
let vetoText=`# Vetoed books\n\nUpdated **${date}, Europe/Warsaw**. **${vetos.length} unique source works**. [Latest category review](${report}). Existing scores and parameters are unchanged; scores are counterfactual and do not override vetoes.\n\n| Entry date | First year | Author | Title | Counterfactual /100 | Veto | Veto confidence | Sources |\n|---|---|---|---|---:|---|---|---|\n`;
vetoText+=vetos.map(b=>`| ${b.entryDate} | ${b.year} | ${cell(b.author)} | ${link(b.title,b.reviewAnchor||b.currentReview)} | **${f(b.total)}** | ${b.veto} | ${b.vetoConfidence||b.eligibilityConfidence||'moderate'} | ${b.sources.join(', ')} |`).join('\n');
vetoText+='\n\n## Counterfactual breakdowns and reasons\n\nExisting numerical assessments are retained, not rescored. E/S/D are quadratic; cells show linear attainment → contribution.\n\n| Work | '+REGISTRY.slice(0,10).map(r=>r.id).join(' | ')+' | T11 | T12 | H13 | P14 | O15 | Total |\n|---|'+Array(16).fill('---:').join('|')+'|\n';
vetoText+=vetos.map(b=>'| '+link(b.title,b.reviewAnchor||b.currentReview)+' | '+b.raw.map((x,i)=>f(x)+' → '+f(b.points[i])).join(' | ')+' | '+['T11','T12','H13','P14','O15'].map(k=>f(b.deductions[k])).join(' | ')+' | '+f(b.total)+' |').join('\n');
vetoText+='\n\n'+vetos.map(b=>`### ${cell(b.title)} — ${cell(b.author)}\n\n**${b.veto}; ${b.vetoConfidence||b.eligibilityConfidence||'moderate'} confidence.** ${b.vetoReason||b.reason}\n\n[Complete assessment and evidence](${b.reviewAnchor||b.currentReview}). Sources: ${b.sources.join(', ')}.\n`).join('\n');
const excludedText=`# Excluded books\n\nHard-excluded source books. [Latest category review](${report}). One alphabetized entry per work; no scores.\n\n`+exclusions.map(b=>b.line||`- ${b.title} — ${b.author}`).join('\n')+'\n';
const enrichment=json('site/enrichment.json'), active=new Set(recs.map(b=>b.id));
for(const id of Object.keys(enrichment.books))if(!active.has(id)){archivedEnrichment[id]=enrichment.books[id];delete enrichment.books[id];}
enrichment.summary={...enrichment.summary,updated:date,scope:'Category-only H3/V6 review; surviving enrichment records unchanged.',books:recs.length};
const counts={screened:all.length,recommended:recs.length,vetoed:vetos.length,excluded:exclusions.length,newExclusions:Object.keys(excluded).length,newVetoes:changes.filter(c=>c.previousStatus==='recommended'&&c.status==='vetoed').length,addedV6:changes.filter(c=>c.previousStatus==='vetoed').length,readmitted:Object.keys(promotionInputs).length};
const priorExcerpts=[];
for(const decision of reviewed.filter(d=>excluded[d.id]||vetoed[d.id]||retained[d.id]||promotionInputs[d.id])){
 const b=byId.get(decision.id),ref=decision.prior;
 let excerpt='';if(ref){const [file,anchor]=ref.split('#');if(fs.existsSync(file)){const text=read(file);const start=anchor?text.indexOf(`<a id="${anchor}">`):text.indexOf(b.title);if(start>=0){const end=text.indexOf('\n<a id=',start+1);excerpt=text.slice(start,end<0?start+8000:end).slice(0,8000);}}}
 priorExcerpts.push({id:b.id,title:b.title,prior:ref,reason:b.reason||b.eligibility,gateReview:b.gateReview,evidence:b.evidence,excerpt});
}
let analysis=`# H3 and V6 category review\n\n${date}, Europe/Warsaw. Current rules: [AGENTS.md](../AGENTS.md).\n\nThe user requested category changes only. Screened all ${all.length} catalog works by retained identity, purpose and eligibility metadata; applied targeted review to technical training, historical-reference boundaries and partisan mobilization. This is not a fresh full-text audit of every book. Existing quality vectors, deductions, dates, Amazon observations and source numbers are unchanged. Only the two newly admitted, previously unscored works receive first baseline assessments required by the ranked catalog. Earlier analyses and compiled snapshots remain history.\n\n${JSON.stringify(counts)}\n\nH3 takes precedence over all vetoes. V6 is applied equally across political positions; criticism, a policy proposal, an author’s party, or a manifesto label alone is insufficient. Retained uncertain boundary cases are marked in the review records.\n\n## Category changes\n\n| Work | Before | After | Rule | Confidence | Basis |\n|---|---|---|---|---|---|\n`;
analysis+=changes.map(d=>`| ${link(d.title,'#'+d.id)} | ${d.previousStatus} | ${d.status} | ${d.rule} | ${d.confidence} | ${cell(d.reason)} |`).join('\n');
for(const d of reviewed.filter(d=>excluded[d.id]||vetoed[d.id]||retained[d.id]||promotionInputs[d.id])){
 const b=[...current,...exclusions].find(b=>b.id===d.id),old=byId.get(d.id);
 analysis+=`\n\n<a id="${d.id}"></a>\n### ${b.title} — ${b.author}\n\n**${b.status}; ${d.confidence} category confidence.** ${d.reason}\n\nSources: ${b.sources.join(', ')}. Prior: ${d.prior?link('assessment','../'+d.prior):'retained catalog record'}. `;
 const refs=[...new Set([...(Array.isArray(b.evidence)?b.evidence:[]),...(old.priorReviews||[])].filter(x=>typeof x==='string'))];
 analysis+=refs.slice(0,12).map((u,i)=>link('Evidence '+(i+1),u.startsWith('http')?u:'../'+u)).join('; ')+'.\n';
 if(b.status==='excluded')analysis+='\nNo current score. Previous numerical assessments remain only in historical records.\n';
 else if(promotionInputs[b.id]||vetoed[b.id]){
  analysis+='\n'+(promotionInputs[b.id]?'First baseline assessment; moderate confidence.':'Existing assessment retained exactly; now counterfactual where vetoed.')+'\n\n| Criterion | Linear attainment | Contribution | Basis |\n|---|---:|---:|---|\n';
  analysis+=REGISTRY.slice(0,10).map((r,i)=>`| ${r.name} | ${f(b.raw[i])}/${r.max} | ${f(b.points[i])} | ${cell(b.criteria?.find(c=>c.code===r.id)?.assessment||b.notes?.[i]||'Retained prior assessment.')} |`).join('\n');
  analysis+='\n\n'+['T11','T12','H13','P14','O15'].map(k=>`${k}: ${f(b.deductions[k])}`).join('; ')+`. **Total ${f(b.total)}.** Original year ${b.year}; period end ${b.periodEnd??'none'}.\n`;
  if(promotionInputs[b.id])analysis+=`\n${b.yearNote} ${b.periodNote} ${b.amazon.status} Attempt: ${b.amazon.url}, ${date}. Reader ratings unavailable.\n`;
 }
}
analysis+='\n## Coverage and preservation\n\n[All category decisions](../'+dir+'review.json) record the retained status for every work. [Targeted prior excerpts](../'+dir+'prior-excerpts.json) retain the inspected prior basis. The migration asserts exact preservation of existing scored parameters, unique identities, and total work count. Archived enrichment is retained outside the active site data.\n';
const compiled={...previous,audit:{...previous.audit,date,stamp,previous:previousPath,rulesSha256:rulesHash,categoryReview:report,categoryCounts:counts,exception:'User requested H3/V6 categorization only; existing scores and parameters preserved.'},currentBooks:current,exclusions};
assert.equal(current.length+exclusions.length,all.length);
assert.equal(new Set([...current,...exclusions].map(b=>b.id)).size,all.length);
for(const b of exclusions)assert(!('total' in b),'Excluded score '+b.id);
const outputs=new Map([[dir+'compiled.json',JSON.stringify(compiled,null,2)+'\n'],['data/catalog.json',JSON.stringify({compiled:dir+'compiled.json'},null,2)+'\n'],['RECOMMENDED_BOOKS.md',recText],['VETOED_BOOKS.md',vetoText],['EXCLUDED_BOOKS.md',excludedText],['site/enrichment.json',JSON.stringify(enrichment,null,2)+'\n'],[report,analysis],[dir+'review.json',JSON.stringify({date,rulesSha256:rulesHash,counts,decisions:reviewed},null,2)+'\n'],[dir+'prior-excerpts.json',JSON.stringify(priorExcerpts,null,2)+'\n'],[dir+'archived-enrichment.json',JSON.stringify(archivedEnrichment,null,2)+'\n'],[dir+'baseline.json',JSON.stringify({previous:previousPath,hashes:baseline},null,2)+'\n']]);
const sources=read('SOURCES.md'),next=Math.max(...[...sources.matchAll(/^\| (\d+) \|/gm)].map(m=>+m[1]))+1;
outputs.set('SOURCES.md',sources.trimEnd()+`\n| ${next} | ${date} | [H3/V6 category review: current repository rules](https://github.com/ahrvoje/books/blob/main/AGENTS.md) | [Category review](${report}) |\n`);
outputs.set(dir+'validation.json',JSON.stringify({date,counts,existingParametersUnchanged:true,uniqueMembership:true,historicalSnapshot:previousPath,report},null,2)+'\n');
for(const [file,hash] of Object.entries(baseline))assert.equal(sha(read(file)),hash,'Concurrent change: '+file);
for(const [file,text] of outputs)fs.writeFileSync(file,text);
console.log(JSON.stringify({counts,report},null,2));
