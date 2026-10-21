import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import assert from 'node:assert/strict';
import { REGISTRY, format, DOMAIN_IDS } from '../../site/model.mjs';
const dir='data/rule_review_261020/', write=process.argv.includes('--write');
const read=f=>fs.readFileSync(f,'utf8'), json=f=>JSON.parse(read(f));
const sha=s=>crypto.createHash('sha256').update(s).digest('hex');
const baseline=json(dir+'baseline.json'), previous=json(baseline.compiled);
const groups=['excluded_a','excluded_b','vetoed'];
const inputs=groups.flatMap(g=>json(dir+g+'-input.json'));
const decisions=groups.flatMap(g=>json(dir+g+'-decisions.json'));
const byInput=new Map(inputs.map(b=>[b.reviewId,b])), byDecision=new Map(decisions.map(b=>[b.reviewId,b]));
const unique=a=>[...new Set(a.filter(x=>x!==null&&x!==undefined&&x!==''))];
const norm=s=>String(s||'').normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/&/g,'and').replace(/[^a-z0-9]/g,'');
const key=b=>norm(b.title)+'|'+norm(b.author);
const cell=s=>String(s??'').replace(/\r?\n/g,' ').replace(/\|/g,'&#124;');
const link=(text,url)=>`[${cell(text)}](${url})`;
const sum=a=>a.reduce((x,y)=>x+y,0), f=format;
const local=s=>s.startsWith('analysis/')?path.basename(s):s.startsWith('data/')?'../'+s:s;
const ref=s=>s.startsWith('analysis/')?s:/^analysis_[^/]+\.md/.test(s)?'analysis/'+s:s;
const verdict=t=>t>=85?'Recommend':t>=75?'Consider':t>=65?'Selective':t>=50?'Low priority':'Poor fit';
const sourceRows=baseline.files['SOURCES.md'].text.split(/\r?\n/).filter(l=>/^\| \d+ \|/.test(l));
const sourceNumbers=new Set(sourceRows.map(l=>+l.split('|')[1].trim()));
assert.equal(decisions.length,inputs.length,'Every previously excluded or vetoed entry needs a decision');
assert.equal(byDecision.size,inputs.length,'Duplicate review decisions');
for(const d of decisions){
 assert(byInput.has(d.reviewId),`Unexpected decision ${d.reviewId}`);
 assert(['excluded','recommended','vetoed'].includes(d.status),d.reviewId+' invalid status');
 assert(d.reason?.trim()&&['high','moderate','low','unknown'].includes(d.confidence),d.reviewId+' missing judgment');
 assert(d.evidence?.length||d.priorReviews?.length,d.reviewId+' missing evidence');
 for(const value of [...(d.evidence||[]),...(d.priorReviews||[])]){
  assert(typeof value==='string'&&/^(https?:\/\/|analysis\/|data\/|analysis_)/.test(value),d.reviewId+' invalid evidence reference '+value);
  if(!/^https?:\/\//.test(value))assert(fs.existsSync(ref(value).split('#')[0]),d.reviewId+' missing local evidence '+value);
 }
 if(d.mergeInto){assert(byDecision.has(d.mergeInto)&&d.mergeInto!==d.reviewId,d.reviewId+' invalid alias');continue;}
 if(d.status==='excluded')assert(['H1','H2'].includes(d.exclusion),d.reviewId+' invalid exclusion');
 else{
  assert(d.raw?.length===10&&d.raw.every((x,i)=>Number.isFinite(x)&&x>=0&&x<=REGISTRY[i].max),d.reviewId+' invalid raw scores');
  assert(d.notes?.length===10&&d.notes.every(n=>typeof n==='string'&&n.trim()),d.reviewId+' missing criterion reasons');
  assert(Number.isInteger(d.year)&&d.year<=2026,d.reviewId+' invalid original year');
  assert(d.periodEnd===null||Number.isInteger(d.periodEnd),d.reviewId+' invalid period endpoint');
  assert(d.yearNote&&d.periodNote&&d.themeNote,d.reviewId+' missing deduction basis');
  assert([0,-10].includes(d.T11)&&[0,-10].includes(d.T12),d.reviewId+' invalid thematic deduction');
  assert(d.amazon&&Object.hasOwn(d.amazon,'count'),d.reviewId+' missing Amazon assessment');
  const n=d.amazon.count;assert(n===null||(Number.isInteger(n)&&n>=0),d.reviewId+' invalid ratings');
  if(n===null)assert(d.amazon.status||d.amazon.attempts?.length||d.amazon.attemptFiles?.length,d.reviewId+' missing unknown-count fallback basis');
  else assert(d.amazon.url&&(d.amazon.verifiedAt||d.amazon.retrievedAt||d.amazon.retrieved||d.amazon.attemptedAt),d.reviewId+' missing rating provenance');
  if(d.status==='vetoed')assert(d.veto&&d.vetoReason&&d.vetoConfidence,d.reviewId+' missing veto basis');
 }
}
function resolve(id,seen=new Set()){
 assert(!seen.has(id),'Alias cycle');seen.add(id);const d=byDecision.get(id);
 return d.mergeInto?resolve(d.mergeInto,seen):d.reviewId;
}
const aliases=new Map();
for(const d of decisions){const id=resolve(d.reviewId);assert.equal(d.status,byDecision.get(id).status,d.reviewId+' alias status differs from its work');if(!aliases.has(id))aliases.set(id,[]);aliases.get(id).push(d.reviewId);}
const stampFile=dir+'manifest.json';
if(!fs.existsSync(stampFile)){
 const parts=Object.fromEntries(new Intl.DateTimeFormat('en-GB',{timeZone:'Europe/Warsaw',year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',hour12:false}).formatToParts(new Date()).map(p=>[p.type,p.value]));
 const date=`${parts.year}-${parts.month}-${parts.day}`,stamp=`${parts.year.slice(2)}${parts.month}${parts.day}_${parts.hour}${parts.minute}`;
 fs.writeFileSync(stampFile,JSON.stringify({date,reviewYear:2026,rulesSha256:baseline.files['AGENTS.md'].sha256,report:`analysis/analysis_ruleaudit_${stamp}.md`},null,2)+'\n');
}
const manifest=json(stampFile), report=manifest.report;
assert.equal(sha(read('AGENTS.md')),manifest.rulesSha256,'Rules changed during review');
const current=new Map(previous.currentBooks.filter(b=>b.status==='recommended').map(b=>[b.id,{...b}]));
const reviewed=[],exclusions=[];
for(const [reviewId,ids] of aliases){
 const d=byDecision.get(reviewId), originals=ids.map(id=>byInput.get(id));
 const old=originals.find(b=>b.previousStatus==='vetoed');
 const sources=unique([...ids.flatMap(id=>byDecision.get(id).sources||[]),...originals.flatMap(b=>[...(b.sources||[]),...(b.priorRecords||[]).flatMap(r=>r.sources||[])])].map(Number)).sort((a,b)=>a-b);
 sources.forEach(s=>assert(sourceNumbers.has(s),reviewId+' invalid source '+s));
 const priorReviews=unique([...ids.flatMap(id=>byDecision.get(id).priorReviews||[]),...originals.flatMap(b=>[b.reviewAnchor,b.analysis,...(b.priorRecords||[]).map(r=>r.reviewAnchor)])].map(s=>s?ref(s):s));
 const sourceIds=unique(originals.flatMap(b=>[...(b.sourceIds||[]),...(b.priorRecords||[]).flatMap(r=>r.sourceIds||[])]));
 let b={...d,id:d.id||old?.id||reviewId,reviewId,reviewIds:ids,sources,sourceIds,priorReviews,
  evidence:unique(ids.flatMap(id=>byDecision.get(id).evidence||[])),identityNotes:ids.length>1?ids.map(id=>id+': '+byDecision.get(id).reason):[],
  entryDate:old?.entryDate||d.entryDate||manifest.date,reviewAnchor:report+'#'+reviewId,currentReview:report,
  previousStatuses:unique(originals.map(b=>b.previousStatus)),previousTotal:old?.total,
  eligibility:d.reason,rulesSha256:manifest.rulesSha256};
 if(d.status==='excluded'){
  b={id:b.id,reviewId,reviewIds:ids,title:d.title,author:d.author,status:'excluded',exclusion:d.exclusion,reason:d.reason,confidence:d.confidence,
   sources,sourceIds,evidence:b.evidence,identityNotes:b.identityNotes,priorReviews,previousStatuses:b.previousStatuses,analysis:b.reviewAnchor,line:`- ${d.title}${d.author?' — '+d.author:''}`};
  exclusions.push(b);
 }else{
  assert(sources.length,b.id+' needs at least one originating source');
  b.eligibilityConfidence=d.eligibilityConfidence||d.confidence;
  b.confidence=d.scoreConfidence||d.evidenceConfidence||d.confidence;b.scoreConfidence=b.confidence;
  b.points=b.raw.map((x,i)=>REGISTRY[i].quadratic?x*x/REGISTRY[i].max:x);
  const n=b.amazon.count;
  b.deductions={T11:b.T11,T12:b.T12,H13:b.periodEnd===null?0:-Math.min(12,Math.max(0,2026-b.periodEnd)/25),P14:-Math.min(10,Math.max(0,2026-b.year)/10),O15:n===null?0:n<10?-20:n<100?-10:n<1000?-5:0};
  b.positive=sum(b.points);b.total=b.positive+sum(Object.values(b.deductions));b.displayScore=f(b.total);b.verdict=verdict(b.total);
  b.criteria=REGISTRY.slice(0,10).map((r,i)=>({code:r.id,name:r.name,max:r.max,raw:b.raw[i],points:b.points[i],assessment:b.notes[i]}));
  b.purchaseUrl=b.purchaseUrl||old?.purchaseUrl||'https://www.amazon.de/s?k='+encodeURIComponent(b.title+' '+b.author);
  if(b.status==='recommended'&&!/^https:\/\/(www\.)?amazon\.(de|com)\//.test(b.purchaseUrl)){
   b.purchaseUrl='https://www.amazon.de/s?k='+encodeURIComponent(b.title+' '+b.author+' paperback');
   b.purchaseFormat='Amazon.de paperback search locator; format and stock availability were not established. The rating observation retains its separate original marketplace.';
  }
  b.titleCell=link(b.title,b.purchaseUrl);b.listYear=b.year;
  if(b.status==='recommended'){b.veto=null;b.vetoConfidence=null;b.vetoReason=null;}
  assert(!current.has(b.id),b.id+' collides with an existing recommended work');current.set(b.id,b);
 }
 reviewed.push(b);
}
const currentBooks=[...current.values()],allWorks=[...currentBooks,...exclusions];
const identity=new Map();for(const b of allWorks){assert(!identity.has(key(b)),`Duplicate identity: ${b.title} (${b.id}, ${identity.get(key(b))})`);identity.set(key(b),b.id);}
const ranked=(a,b)=>b.total-a.total||a.title.localeCompare(b.title,'en');
const recs=currentBooks.filter(b=>b.status==='recommended').sort(ranked),vetoes=currentBooks.filter(b=>b.status==='vetoed').sort(ranked);
exclusions.sort((a,b)=>a.title.localeCompare(b.title,'en'));
const counts={reviewedEntries:inputs.length,uniqueReviewedWorks:reviewed.length,aliases:inputs.length-reviewed.length,
 restored:reviewed.filter(b=>b.status==='recommended').length,remainingExcluded:exclusions.length,remainingVetoed:vetoes.length,totalRecommended:recs.length,
 transitions:Object.fromEntries(['excluded','vetoed'].map(s=>[s,Object.fromEntries(['excluded','vetoed','recommended'].map(t=>[t,decisions.filter(d=>byInput.get(d.reviewId).previousStatus===s&&d.status===t).length]))]))};
const decisionHashes=Object.fromEntries(groups.map(g=>[dir+g+'-decisions.json',sha(read(dir+g+'-decisions.json'))]));
const compiled={audit:{date:manifest.date,reviewYear:2026,previous:baseline.compiled,rulesSha256:manifest.rulesSha256,decisionHashes,reviewReport:report,...counts},sourceBooks:reviewed,currentBooks,exclusions};
function references(b){return unique([...(b.evidence||[]),...(b.priorReviews||[])]).map((u,i)=>link('Evidence '+(i+1),local(ref(u)))).join('; ');}
function details(b){
 let text=`<a id="${b.reviewId}"></a>\n### ${b.title} — ${b.author||'Author not established'}\n\n**${b.status}; ${b.eligibilityConfidence||b.confidence} eligibility confidence.** ${b.reason}\n\n`;
 text+=`Previous status: ${b.previousStatuses.join(', ')}. Sources: ${b.sources.length?b.sources.join(', '):'See the cited source analysis; no source number was established in this audit'}. ${references(b)}.\n\n`;
 if(b.reviewIds.length>1)text+=`Identity consolidation: ${b.reviewIds.join(', ')} refer to this one work. ${b.identityNotes.join(' ')}\n\n`;
 if(b.status==='excluded')return text+`**${b.exclusion}; no score assigned.**\n\n`;
 if(b.reassessment||b.rationale)text+=`Reassessment: ${b.reassessment||b.rationale}\n\n`;
 if(b.status==='vetoed')text+=`**${b.veto}; ${b.vetoConfidence} confidence.** ${b.vetoReason}\n\n`;
 text+='| Criterion | Linear attainment | Contribution | Basis |\n|---|---:|---:|---|\n';
 text+=REGISTRY.slice(0,10).map((r,i)=>`| ${r.name} | ${f(b.raw[i])}/${r.max} | ${f(b.points[i])} | ${cell(b.notes[i])} |`).join('\n')+'\n\n';
 text+=`| Deduction | Points | Basis |\n|---|---:|---|\n| T11 | ${f(b.T11)} | ${cell(b.themeNote)} |\n| T12 | ${f(b.T12)} | Applied independently; ${cell(b.themeNote)} |\n| H13 | ${f(b.deductions.H13)} | Period end ${b.periodEnd??'none'}; ${b.periodConfidence||'moderate'} confidence. ${cell(b.periodNote)} |\n| P14 | ${f(b.deductions.P14)} | Original year ${b.year}; ${b.yearConfidence||'moderate'} confidence. ${cell(b.yearNote)} |\n| O15 | ${f(b.deductions.O15)} | ${b.amazon.count===null?'Unknown rating count; specified zero-deduction fallback':b.amazon.count+' total ratings on one matching product'}. ${cell(b.amazon.status||b.amazon.snapshot||'See retained rating evidence.')} |\n\n`;
 text+=`**${f(b.total)} — ${b.status==='vetoed'?'counterfactual only; veto remains':b.verdict}.** Positive subtotal ${f(b.positive)}. Score confidence: ${b.scoreConfidence}. Full precision determines order.\n\n`;
 if(b.previousTotal!==undefined)text+=`Previous counterfactual total ${f(b.previousTotal)}; change ${f(b.total-b.previousTotal)}. A released veto alone does not change criterion attainment or deductions.\n\n`;
 text+=`Reader snapshot: ${b.reader||'No reliable aggregate recorded.'}\n\n${link('Purchase locator',b.purchaseUrl)}. ${b.purchaseFormat||'Format and stock availability not independently established by this rule review.'}\n\n`;
 if(b.amazon.url)text+=`Amazon: ${link(b.amazon.marketplace||'product',b.amazon.url)}; identifier ${b.amazon.asin||b.amazon.productIdentifier||b.amazon.product||'see URL'}; observation ${b.amazon.verifiedAt||b.amazon.retrievedAt||b.amazon.retrieved||b.amazon.attemptedAt||'see retained evidence'}.\n\n`;
 return text;
}
let analysis=`# Review of revised exclusion 2 and veto 5\n\n${manifest.date}, Europe/Warsaw. This audit reevaluates every entry in the prior excluded and vetoed ledgers: ${inputs.length} entries, consolidated into ${reviewed.length} distinct works. It adds no titles absent from those ledgers. Original source analyses remain historical records.\n\n`;
analysis+=`The revised H2 permits expert-to-expert works with some narrative structure unless explicitly intended for exams, instructions or reference. Course use or broad skill development alone no longer establishes exclusion. Actual procedure/operating manuals, references and books that do not meet the narrative/explanatory requirement remain subject to H2. V5 requires the explicit religious, ideological, manifesto or activist purpose in the current rule; mild bias, civilizational inclinations and proposals or visions are allowed. V1–V4 and all fifteen scoring rules remain unchanged.\n\n`;
analysis+=`Current result: **${recs.length} recommended-list works, ${vetoes.length} vetoed works and ${exclusions.length} hard-excluded works**. ${counts.restored} reviewed works now enter the recommended list. Low-scoring eligible books remain included. Confidence is recorded per work; missing metadata is not invented.\n\n`;
analysis+='## Ranked restored books\n\n| Score · verdict | Reader snapshot | Author | Original year | Title |\n|---:|---|---|---:|---|\n';
analysis+=reviewed.filter(b=>b.status==='recommended').sort(ranked).map(b=>`| ${f(b.total)} · ${b.verdict} | ${cell(b.reader||'Unavailable')} | ${cell(b.author)} | ${b.year} | ${link(b.title,b.purchaseUrl)} · ${link('assessment','#'+b.reviewId)} |`).join('\n')+'\n\n';
analysis+='## Source index\n\n';
for(const source of [...sourceNumbers].sort((a,b)=>a-b)){
 const books=reviewed.filter(b=>b.sources.includes(source));if(!books.length)continue;
 analysis+=`<a id="source-${source}"></a>\n### Source ${source}\n\n${books.map(b=>link(b.title,'#'+b.reviewId)+' ('+b.status+')').join('; ')}.\n\n`;
}
analysis+='## Individual reassessments\n\n'+reviewed.sort((a,b)=>a.title.localeCompare(b.title,'en')).map(details).join('\n');
const oldRows=new Map(baseline.files['RECOMMENDED_BOOKS.md'].text.split(/\r?\n/).filter(l=>/^\| \d{4}-/.test(l)).map(l=>{const c=l.split('|').slice(1,-1).map(s=>s.trim());return [key({title:c[3].match(/^\[([^\]]+)\]/)?.[1]||c[3],author:c[2]}),l];}));
let recommended='| Entry date | First publication year | Author | Title | Score / 100 | Source |\n|---|---|---|---|---:|---:|\n';
recommended+=recs.map(b=>oldRows.get(key(b))||`| ${b.entryDate} | ${b.year} | ${cell(b.author)} | ${link(b.title,b.purchaseUrl)} | ${f(b.total)} | ${b.sources.join(', ')} |`).join('\n')+'\n';
let vetoText=`# Vetoed books\n\nUpdated **${manifest.date}, Europe/Warsaw**. **${vetoes.length} unique source works** remain vetoed after the ${link('revised-rule review',report)}. Counterfactual scores suspend only the veto gate and retain identified flaws.\n\n| Entry date | First year | Author | Title | Counterfactual /100 | Veto | Veto confidence | Sources |\n|---|---|---|---|---:|---|---|---|\n`;
vetoText+=vetoes.map(b=>`| ${b.entryDate} | ${b.year} | ${cell(b.author)} | ${link(b.title,b.reviewAnchor)} | **${f(b.total)}** | ${b.veto} | ${b.vetoConfidence} | ${b.sources.join(', ')} |`).join('\n')+'\n\n## Counterfactual breakdowns and reasons\n\n';
vetoText+='E/S/D are quadratic; all other positive criteria are linear. Cells show linear attainment → contribution.\n\n| Work | '+REGISTRY.slice(0,10).map(r=>r.id).join(' | ')+' | T11 | T12 | H13 | P14 | O15 | Total |\n|---|'+Array(16).fill('---:').join('|')+'|\n';
vetoText+=vetoes.map(b=>'| '+link(b.title,b.reviewAnchor)+' | '+b.raw.map((x,i)=>f(x)+' → '+f(b.points[i])).join(' | ')+' | '+Object.values(b.deductions).map(f).join(' | ')+' | '+f(b.total)+' |').join('\n')+'\n\n';
vetoText+=vetoes.map(b=>`### ${b.title}\n\n**${b.veto}; ${b.vetoConfidence} confidence.** ${b.vetoReason}\n\n${link('Complete assessment and evidence',b.reviewAnchor)}. Sources: ${b.sources.join(', ')}.\n`).join('\n');
const excludedText=`# Excluded books\n\nHard-excluded source books under the current ${link('AGENTS.md','AGENTS.md')}. ${link('Complete revised-rule review',report)}. One alphabetized entry per work; no scores. Prior analyses remain history.\n\n`+exclusions.map(b=>b.line).join('\n')+'\n';
const affected=new Set(reviewed.flatMap(b=>b.sources));
const sourcesText=baseline.files['SOURCES.md'].text.split(/\r?\n/).map(line=>{
 if(!/^\| \d+ \|/.test(line))return line;const cells=line.split('|');const n=+cells[1].trim();
 if(affected.has(n))cells[4]=' '+link('Current H2/V5 review',report+'#source-'+n)+'; historical source analyses: '+cells[4].trim().replace(/\bcurrent\b/gi,'earlier')+' ';
 return cells.join('|');
}).join('\n');
const enrichment=json('site/enrichment.json');
for(const b of reviewed)if(b.status==='recommended'&&b.enrichment){
 const extra=structuredClone(b.enrichment);
 if(extra.research)extra.research.unknownDomains=DOMAIN_IDS.filter(id=>!Object.hasOwn(extra.domains||{},id));
 enrichment.books[b.id]=extra;
}
for(const id of Object.keys(enrichment.books))assert(recs.some(b=>b.id===id),'Enrichment attached to non-recommended work '+id);
const extras=recs.map(b=>enrichment.books[b.id]||{}),editions=extras.flatMap(b=>b.edition?[b.edition]:[]);
enrichment.summary={updated:manifest.date,scope:'Current recommended membership; this rule review does not imply new domain or edition research.',books:recs.length,
 pageCounts:editions.length,missingPages:recs.length-editions.length,booksWithDomainEvidence:extras.filter(b=>Object.keys(b.domains||{}).length).length,
 knownDomainValues:sum(extras.map(b=>Object.keys(b.domains||{}).length)),possibleDomainValues:recs.length*DOMAIN_IDS.length,
 completeDomainProfiles:extras.filter(b=>DOMAIN_IDS.every(id=>b.domains?.[id])).length,
 mechanisms:sum(extras.map(b=>b.connections?.mechanisms?.length||0)),joins:sum(extras.map(b=>b.connections?.joins?.length||0)),
 completeConnectionReviews:extras.filter(b=>b.connections?.status==='complete').length,
 newAmazonObservations:extras.filter(b=>b.research?.newAmazonObservation).length,amazonCountsStillUnavailable:recs.filter(b=>b.amazon?.count===null).length,
 editionConfidence:Object.fromEntries(['high','moderate','low','unknown'].map(c=>[c,editions.filter(e=>(e.confidence||'unknown')===c).length]))};
let auditReport=`# Revised exclusion 2 and veto 5 — complete review\n\nDate: ${manifest.date}, Europe/Warsaw. ${link('Full individual assessments','../../'+report)}. ${link('Boundary evidence','root-boundaries.md')}.\n\n`;
auditReport+='Batch findings: [excluded books A](excluded_a-report.md), [excluded books B](excluded_b-report.md), [vetoed books and rating audit](vetoed-research.md), and [independent boundary check](vetoed-crossaudit.md).\n\n';
auditReport+=`All **${inputs.length} prior ledger entries** were reviewed (${inputs.filter(b=>b.previousStatus==='excluded').length} excluded and ${inputs.filter(b=>b.previousStatus==='vetoed').length} vetoed). Identity consolidation leaves ${reviewed.length} works; ${counts.aliases} redundant entries are documented as aliases. There are no unreviewed entries in this batch.\n\n`;
auditReport+='| Previous status | Now recommended | Now vetoed | Now excluded |\n|---|---:|---:|---:|\n';
for(const status of ['excluded','vetoed'])auditReport+=`| ${status} | ${counts.transitions[status].recommended} | ${counts.transitions[status].vetoed} | ${counts.transitions[status].excluded} |\n`;
auditReport+=`\nTransition counts above count input entries, including aliases. Current ledgers contain **${recs.length} recommended, ${vetoes.length} vetoed and ${exclusions.length} excluded works**. ${counts.restored} distinct reviewed works are now recommended-list members. Existing recommended works outside this review retain their prior assessments.\n\n`;
auditReport+='## Method\n\nRead each retained identity and assessment, apply both hard exclusions, then reassess V1–V5 under the revised text. Check primary descriptions, prefaces and contents for disputed purpose/structure cases. Bias, policy conclusions and an expert audience do not establish the old broad gates. Actual instructional procedure, explicit ideology or activism, and separately evidenced V1–V4 can still exclude or veto. Fiction remains H1. Poor fit is scored, not used as another exclusion.\n\n';
auditReport+='Preserve justified criterion attainments when only the gate changes. Newly scored works receive all ten positive assessments and five separate deductions. Reuse identified historical rating snapshots with their dates; unknown counts use the specified zero deduction after recorded retrieval attempts. Scores remain single numbers and confidence remains explicit. The source index points to the current review while earlier analyses remain unchanged.\n\n';
auditReport+='## Restored works, highest scores first\n\n| Score | Author | Title | Confidence |\n|---:|---|---|---|\n';
auditReport+=reviewed.filter(b=>b.status==='recommended').sort(ranked).slice(0,25).map(b=>`| ${f(b.total)} | ${cell(b.author)} | ${link(b.title,'../../'+b.reviewAnchor)} | ${b.confidence} |`).join('\n')+'\n\n';
auditReport+=`## Evidence limits for later review\n\n- Gate decisions do not establish complete domain, connection or edition data. Current recommended membership has ${editions.length} supported edition page counts; ${recs.length-editions.length} remain unknown. Existing evidence is retained and missing fields stay unknown.\n- Mixed narrative/reference and manifesto/proposal boundaries retain the confidence and reasons stated per book. A publisher label alone does not override the revised purpose test.\n- Historical source captures retain their original access limits. This task reopens gate decisions; it does not claim to have recovered previously inaccessible comments.\n- ${reviewed.filter(b=>!b.sources.length).length} retained excluded works have no newly established numbered source attribution; their available historical references remain attached. No such work is admitted without an originating source number.\n\n`;
auditReport+=`## Reproducibility\n\nRules SHA-256: \`${manifest.rulesSha256}\`. The build checks this value against \`AGENTS.md\`. Input packets, per-entry decisions, retrieval evidence and the previous-ledger hashes are retained here. The publisher validates all ${inputs.length} input decisions before changing canonical files. Use \`node data/rule_review_261020/validate.mjs\` after publication for coverage, identity, arithmetic, ledger and history checks. Browser checks use an isolated copy of the single HTML file with HTTP blocked.\n`;
const outputs=new Map([[dir+'compiled.json',JSON.stringify(compiled,null,2)+'\n'],[dir+'REPORT.md',auditReport],[report,analysis],['RECOMMENDED_BOOKS.md',recommended],['VETOED_BOOKS.md',vetoText],['EXCLUDED_BOOKS.md',excludedText],['SOURCES.md',sourcesText],['site/enrichment.json',JSON.stringify(enrichment,null,2)+'\n'],['data/catalog.json',JSON.stringify({compiled:dir+'compiled.json'},null,2)+'\n']]);
fs.writeFileSync(dir+'progress.json',JSON.stringify(counts,null,2)+'\n');
console.log(JSON.stringify(counts,null,2));
if(write){
 for(const [file,data] of Object.entries(baseline.files))assert.equal(sha(read(file)),file==='AGENTS.md'?manifest.rulesSha256:data.sha256,file+' changed since review baseline');
 for(const [file,text] of outputs)fs.writeFileSync(file,text);
 console.log('Published revised ledgers and catalog. Historical analyses and compiled inputs preserved.');
}else{
 fs.mkdirSync(dir+'staged',{recursive:true});
 for(const [file,text] of outputs)fs.writeFileSync(dir+'staged/'+file.replaceAll('/','__'),text);
 console.log('Validation complete; reviewable outputs staged. Canonical files unchanged.');
}
