import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import assert from 'node:assert/strict';
import { REGISTRY, DOMAIN_IDS, format as f } from '../../site/model.mjs';
const dir='data/veto_review_261021/',read=p=>fs.readFileSync(p,'utf8'),json=p=>JSON.parse(read(p));
const sha=s=>crypto.createHash('sha256').update(s).digest('hex'),sum=a=>a.reduce((x,y)=>x+y,0);
const baseline=json(dir+'baseline.json'),previous=json(baseline.compiled),groups=['a','b','c'];
const amendment=json(dir+'rules-amendment.json');
assert.equal(amendment.previousSha256,baseline.files['AGENTS.md'].sha256);
const inputs=groups.flatMap(g=>json(dir+g+'-input.json')),decisions=groups.flatMap(g=>json(dir+g+'-decisions.json'));
for(const g of groups)assert(fs.existsSync(dir+g+'-report.md'),'Missing completed research report: '+g);
const byInput=new Map(inputs.map(b=>[b.id,b])),byDecision=new Map(decisions.map(d=>[d.id,d]));
const previousById=new Map(previous.currentBooks.map(b=>[b.id,b]));
for(const b of inputs)assert.deepEqual(b,previousById.get(b.id),'Review input differs from preserved catalog: '+b.id);
const unique=a=>[...new Set(a.filter(Boolean))],cell=s=>String(s??'').replace(/\r?\n/g,' ').replace(/\|/g,'&#124;');
const link=(label,url)=>`[${cell(label)}](${url})`,local=u=>u.startsWith('analysis/')?path.basename(u):u.startsWith('data/')?'../'+u:u;
const key=b=>[b.title,b.author].map(s=>s.normalize('NFKD').toLowerCase().replace(/[\u0300-\u036f]/g,'').replace(/&/g,'and').replace(/[^a-z0-9]/g,'')).join('|');
const rank=(a,b)=>b.total-a.total||a.title.localeCompare(b.title,'en'),verdict=t=>t>=85?'Recommend':t>=75?'Consider':t>=65?'Selective':t>=50?'Low priority':'Poor fit';
const confidence=x=>['high','moderate','low'].includes(x),gates=['BOOK_FORM','FICTION','REFERENCE','V1','V2','V3','V4','V5'];
assert.equal(inputs.length,355);assert.equal(decisions.length,inputs.length);assert.equal(byDecision.size,inputs.length);
assert.equal(sha(read('AGENTS.md')),amendment.reviewedSha256,'Rules changed after the recorded amendment');
for(const d of decisions){
 assert(byInput.has(d.id)&&['recommended','vetoed','excluded'].includes(d.status),d.id+' invalid identity/status');
 assert(d.reason?.trim()&&confidence(d.eligibilityConfidence),d.id+' missing gate finding/confidence');
 assert(gates.every(g=>typeof d.gateReview?.[g]==='string'&&d.gateReview[g].trim()),d.id+' missing individual gate review');
 assert(d.evidence?.length,d.id+' missing evidence');
 for(const u of d.evidence){assert(typeof u==='string'&&/^(https?:\/\/|analysis\/|data\/)/.test(u),d.id+' invalid reference '+u);if(!/^https?:/.test(u))assert(fs.existsSync(u.split('#')[0]),d.id+' missing reference '+u);}
 assert(Array.isArray(d.veto)&&d.veto.every(v=>/^V[1-5]$/.test(v)),d.id+' invalid veto list');
 if(d.status==='vetoed')assert(d.veto.length&&confidence(d.vetoConfidence),d.id+' missing remaining veto');else assert.equal(d.veto.length,0,d.id+' inactive veto retained');
 if(d.status==='excluded'){assert(['FICTION','REFERENCE'].includes(d.exclusion));continue;}
 assert(d.reassessment?.trim()&&confidence(d.scoreConfidence)&&d.notes?.length===10&&d.notes.every(n=>typeof n==='string'&&n.trim()),d.id+' missing score reassessment/ten criterion reasons');
 const b={...byInput.get(d.id),...d.changes};
 assert(b.raw?.length===10&&b.raw.every((x,i)=>Number.isFinite(x)&&x>=0&&x<=REGISTRY[i].max),d.id+' invalid attainment');
 assert([0,-10].includes(b.T11)&&[0,-10].includes(b.T12)&&Number.isInteger(b.year)&&b.year<=2026,d.id+' invalid deductions');
 assert(b.periodEnd===null||Number.isInteger(b.periodEnd),d.id+' invalid period');
 assert(b.yearNote&&b.periodNote&&b.themeNote,d.id+' missing deduction basis');
 const n=b.amazon?.count;assert(n===null||(Number.isInteger(n)&&n>=0),d.id+' invalid Amazon count');
 if(n===null)assert(b.amazon.status||b.amazon.attempts?.length,d.id+' missing fallback basis');
 else assert(b.amazon.url&&(b.amazon.verifiedAt||b.amazon.retrievedAt||b.amazon.retrieved||b.amazon.attemptedAt),d.id+' missing observation provenance');
}
if(!fs.existsSync(dir+'manifest.json')){
 const p=Object.fromEntries(new Intl.DateTimeFormat('en-GB',{timeZone:'Europe/Warsaw',year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',hour12:false}).formatToParts(new Date()).map(p=>[p.type,p.value]));
 fs.writeFileSync(dir+'manifest.json',JSON.stringify({date:`${p.year}-${p.month}-${p.day}`,reviewYear:2026,rulesSha256:amendment.reviewedSha256,report:`analysis/analysis_vetogates_${p.year.slice(2)}${p.month}${p.day}_${p.hour}${p.minute}.md`},null,2)+'\n');
}
const manifest=json(dir+'manifest.json'),report=manifest.report;
assert.equal(manifest.rulesSha256,amendment.reviewedSha256,'Manifest uses an earlier rule version');
const reviewed=inputs.map(old=>{
 const d=byDecision.get(old.id),priorReviews=unique([old.reviewAnchor,...old.priorReviews||[]]);
 let b={...old,...d.changes,...d,reviewId:old.id,reviewIds:[old.id],previousStatus:'vetoed',previousStatuses:['vetoed'],previousTotal:old.total,
  priorVeto:old.veto,priorReason:old.reason,priorReviews,reviewAnchor:report+'#'+old.id,currentReview:report,reviewedAt:manifest.date,rulesSha256:manifest.rulesSha256,
  eligibility:d.reason,confidence:d.scoreConfidence||d.eligibilityConfidence,evidenceConfidence:d.scoreConfidence||d.eligibilityConfidence,rationale:d.reassessment,scoreReassessment:d.reassessment,
  reviewBasis:'Individual book-form, fiction, reference and V1–V5 review under the revised V4/V5; all ten positive criteria and five deductions reconsidered against cited evidence.',
  veto:d.veto.join('; ')||null,vetoReason:d.status==='vetoed'?d.reason:null,vetoConfidence:d.status==='vetoed'?d.vetoConfidence:null,
  gateChanged:d.status!==old.status||[...d.veto].sort().join('; ')!==unique(String(old.veto).match(/V[1-5]/g)||[]).sort().join('; ')};
 delete b.changes;
 if(d.status==='excluded')return {id:b.id,reviewId:b.id,reviewIds:[b.id],title:b.title,author:b.author,status:b.status,exclusion:d.exclusion,
  reason:d.reason,confidence:d.eligibilityConfidence,eligibilityConfidence:d.eligibilityConfidence,gateReview:d.gateReview,evidence:d.evidence,priorReviews,
  sources:old.sources,sourceIds:old.sourceIds,analysis:b.reviewAnchor,line:`- ${b.title} — ${b.author}`};
 b.points=b.raw.map((x,i)=>REGISTRY[i].quadratic?x*x/REGISTRY[i].max:x);
 const n=b.amazon.count;
 b.deductions={T11:b.T11,T12:b.T12,H13:b.periodEnd===null?0:-Math.min(12,Math.max(0,2026-b.periodEnd)/25),P14:-Math.min(10,Math.max(0,2026-b.year)/10),O15:n===null?0:n<10?-20:n<100?-10:n<1000?-5:0};
 b.positive=sum(b.points);b.total=b.positive+sum(Object.values(b.deductions));b.displayScore=f(b.total);b.verdict=verdict(b.total);
 b.criteria=REGISTRY.slice(0,10).map((r,i)=>({code:r.id,name:r.name,max:r.max,raw:b.raw[i],points:b.points[i],assessment:b.notes[i]}));
 if(!/^https:\/\/(www\.)?amazon\.(de|com)\//.test(b.purchaseUrl||'')){
  b.purchaseUrl='https://www.amazon.de/s?k='+encodeURIComponent(b.title+' '+b.author+' paperback');
  b.purchaseFormat='Amazon.de paperback search locator; matching product, format and stock are not verified by this gate review.';
 }
 b.titleCell=link(b.title,b.purchaseUrl);b.listYear=b.year;
 return b;
});
const currentBooks=[...previous.currentBooks.filter(b=>b.status==='recommended'),...reviewed.filter(b=>b.status!=='excluded')];
const newExclusions=reviewed.filter(b=>b.status==='excluded'),exclusions=newExclusions.length?[...previous.exclusions,...newExclusions].sort((a,b)=>a.title.localeCompare(b.title,'en')):previous.exclusions;
const identities=new Set(),ids=new Set();for(const b of [...currentBooks,...exclusions]){assert(!identities.has(key(b))&&!ids.has(b.id),'Duplicate '+b.title);identities.add(key(b));ids.add(b.id);}
const recs=currentBooks.filter(b=>b.status==='recommended').sort(rank),vetoes=currentBooks.filter(b=>b.status==='vetoed').sort(rank);
const restored=reviewed.filter(b=>b.status==='recommended').sort(rank);
const counts={reviewed:inputs.length,restored:restored.length,newlyExcluded:newExclusions.length,recommended:recs.length,vetoed:vetoes.length,excluded:exclusions.length};
const decisionHashes=Object.fromEntries(groups.map(g=>[dir+g+'-decisions.json',sha(read(dir+g+'-decisions.json'))]));
const compiled={audit:{...manifest,previous:baseline.compiled,decisionHashes,...counts},sourceBooks:reviewed,currentBooks,exclusions};
function details(b){
 const old=byInput.get(b.id),refs=unique([...b.evidence,...b.priorReviews]);
 let s=`<a id="${b.id}"></a>\n### ${b.title} — ${b.author}\n\n**${b.status}; ${b.eligibilityConfidence} eligibility confidence.** ${b.reason}\n\nPrevious veto: ${old.veto}. Sources: ${b.sources.join(', ')}.\n\n`;
 s+='| Gate | Current finding |\n|---|---|\n'+gates.map(g=>`| ${g} | ${cell(b.gateReview[g])} |`).join('\n')+'\n\n';
 s+=refs.map((u,i)=>link('Evidence '+(i+1),local(u))).join('; ')+'.\n\n';
 if(b.status==='excluded')return s+`**${b.exclusion}; no score assigned.**\n\n`;
 s+=`Reassessment: ${b.reassessment}\n\n| Criterion | Linear attainment | Contribution | Basis |\n|---|---:|---:|---|\n`;
 s+=REGISTRY.slice(0,10).map((r,i)=>`| ${r.name} | ${f(b.raw[i])}/${r.max} | ${f(b.points[i])} | ${cell(b.notes[i])} |`).join('\n')+'\n\n';
 s+=`| Deduction | Points | Basis |\n|---|---:|---|\n| T11 | ${f(b.T11)} | ${cell(b.themeNote)} |\n| T12 | ${f(b.T12)} | Applied independently; ${cell(b.themeNote)} |\n| H13 | ${f(b.deductions.H13)} | Period end ${b.periodEnd??'none'}; ${b.periodConfidence||'moderate'} confidence. ${cell(b.periodNote)} |\n| P14 | ${f(b.deductions.P14)} | Original year ${b.year}; ${b.yearConfidence||'moderate'} confidence. ${cell(b.yearNote)} |\n| O15 | ${f(b.deductions.O15)} | ${b.amazon.count===null?'Unknown count; specified zero-deduction fallback':b.amazon.count+' total ratings'}. ${cell(b.amazon.status||'See retained observation.')} |\n\n`;
 s+=`**${f(b.total)} — ${b.status==='vetoed'?'counterfactual; '+b.veto+' remains ('+b.vetoConfidence+' confidence)':b.verdict}.** Positive subtotal ${f(b.positive)}; score confidence ${b.scoreConfidence}. Previous total ${f(old.total)}; change ${f(b.total-old.total)}. Full precision determines order.\n\nReader snapshot: ${b.reader||'Unavailable'}. ${link('Purchase locator',b.purchaseUrl)}. ${b.purchaseFormat||'Format and availability not newly checked.'}\n\n`;
 if(b.amazon.url)s+=`Amazon observation: ${link(b.amazon.marketplace||'product',b.amazon.url)}; identifier ${b.amazon.asin||b.amazon.productIdentifier||b.amazon.product||'see URL'}; retrieved ${b.amazon.verifiedAt||b.amazon.retrievedAt||b.amazon.retrieved||b.amazon.attemptedAt||'see retained record'}.\n\n`;
 return s;
}
let analysis=`# Review of revised vetoes 4 and 5\n\n${manifest.date}, Europe/Warsaw. All ${inputs.length} previously vetoed books were reviewed individually. No titles were added from outside the existing source collection. Earlier analyses remain historical records.\n\nV4 allows substantiated, balanced expert speculation with explicit safeguards. V5 requires religious doctrine or specifically evidenced advocacy of ideological extremism. Manifesto labels, activism, criticism and proposed reforms are insufficient. Each review also checks book form, fiction, instruction/reference purpose and V1–V3 independently; removing a veto does not establish a new one.\n\n**${restored.length} works restored; ${vetoes.length} remain vetoed; ${newExclusions.length} become hard-excluded.** Current ledgers: ${recs.length} recommended, ${vetoes.length} vetoed, ${exclusions.length} excluded. Uncertain findings carry explicit confidence. Poor fit remains scored and is not an exclusion.\n\n`;
 analysis+='## Ranked restored books\n\n| Score · verdict | Reader snapshot | Author | Original year | Title |\n|---:|---|---|---:|---|\n';
 analysis+=restored.map(b=>`| ${f(b.total)} · ${b.verdict} | ${cell(b.reader||'Unavailable')} | ${cell(b.author)} | ${b.year} | ${link(b.title,b.purchaseUrl)} · ${link('assessment','#'+b.id)} |`).join('\n')+'\n\n## Source index\n\n';
 const affected=new Set(reviewed.flatMap(b=>b.sources));
 for(const n of [...affected].sort((a,b)=>a-b))analysis+=`<a id="source-${n}"></a>\n### Source ${n}\n\n${reviewed.filter(b=>b.sources.includes(n)).map(b=>link(b.title,'#'+b.id)+' ('+b.status+')').join('; ')}.\n\n`;
 analysis+='## Individual gate and score reviews\n\n'+[...reviewed].sort((a,b)=>a.title.localeCompare(b.title,'en')).map(details).join('\n');
const oldRows=new Map(baseline.files['RECOMMENDED_BOOKS.md'].text.split(/\r?\n/).filter(l=>/^\| \d{4}-/.test(l)).map(l=>{const c=l.split('|').slice(1,-1).map(x=>x.trim());return [key({title:c[3].match(/^\[([^\]]+)\]/)?.[1]||c[3],author:c[2]}),l];}));
const recommended='| Entry date | First publication year | Author | Title | Score / 100 | Source |\n|---|---|---|---|---:|---:|\n'+recs.map(b=>oldRows.get(key(b))||`| ${b.entryDate} | ${b.year} | ${cell(b.author)} | ${b.titleCell} | ${f(b.total)} | ${b.sources.join(', ')} |`).join('\n')+'\n';
let vetoText=`# Vetoed books\n\nUpdated **${manifest.date}, Europe/Warsaw**. **${vetoes.length} unique source works** remain vetoed after the ${link('V4/V5 review',report)}. Counterfactual scores suspend only the veto gate and retain identified flaws.\n\n| Entry date | First year | Author | Title | Counterfactual /100 | Veto | Veto confidence | Sources |\n|---|---|---|---|---:|---|---|---|\n`;
vetoText+=vetoes.map(b=>`| ${b.entryDate} | ${b.year} | ${cell(b.author)} | ${link(b.title,b.reviewAnchor)} | **${f(b.total)}** | ${b.veto} | ${b.vetoConfidence} | ${b.sources.join(', ')} |`).join('\n')+'\n\n## Counterfactual breakdowns and reasons\n\n';
vetoText+='E/S/D are quadratic; the other positive criteria are linear. Cells show linear attainment → contribution.\n\n| Work | '+REGISTRY.slice(0,10).map(r=>r.id).join(' | ')+' | T11 | T12 | H13 | P14 | O15 | Total |\n|---|'+Array(16).fill('---:').join('|')+'|\n';
vetoText+=vetoes.map(b=>'| '+link(b.title,b.reviewAnchor)+' | '+b.raw.map((x,i)=>f(x)+' → '+f(b.points[i])).join(' | ')+' | '+Object.values(b.deductions).map(f).join(' | ')+' | '+f(b.total)+' |').join('\n')+'\n\n';
vetoText+=vetoes.map(b=>`### ${b.title}\n\n**${b.veto}; ${b.vetoConfidence} confidence.** ${b.vetoReason}\n\n${link('Complete assessment and evidence',b.reviewAnchor)}. Sources: ${b.sources.join(', ')}.\n`).join('\n');
const excludedText=newExclusions.length?'# Excluded books\n\nHard-excluded source books. '+link('Latest gate review',report)+'. One alphabetized entry per work; no scores.\n\n'+exclusions.map(b=>b.line).join('\n')+'\n':baseline.files['EXCLUDED_BOOKS.md'].text;
const sourcesText=baseline.files['SOURCES.md'].text.split(/\r?\n/).map(l=>{if(!/^\| \d+ \|/.test(l))return l;const c=l.split('|'),n=+c[1].trim();if(affected.has(n))c[4]=' '+link('Current V4/V5 review',report+'#source-'+n)+'; '+c[4].trim().replace(/\bCurrent\b/g,'Earlier')+' ';return c.join('|');}).join('\n');
const enrichment=json('site/enrichment.json'),normalized=[];
for(const b of restored)if(b.enrichment){const e=structuredClone(b.enrichment);if(e.research){const domains=DOMAIN_IDS.filter(id=>!Object.hasOwn(e.domains||{},id));if(JSON.stringify(domains)!==JSON.stringify(e.research.unknownDomains))normalized.push(b.id);e.research.unknownDomains=domains;}enrichment.books[b.id]=e;}
const extras=recs.map(b=>enrichment.books[b.id]||{}),editions=extras.flatMap(e=>e.edition?[e.edition]:[]);
enrichment.summary={updated:manifest.date,scope:'Current recommended membership; retained evidence only, no new edition or domain research in this gate review.',books:recs.length,pageCounts:editions.length,missingPages:recs.length-editions.length,
 booksWithDomainEvidence:extras.filter(e=>Object.keys(e.domains||{}).length).length,knownDomainValues:sum(extras.map(e=>Object.keys(e.domains||{}).length)),possibleDomainValues:recs.length*DOMAIN_IDS.length,
 completeDomainProfiles:extras.filter(e=>DOMAIN_IDS.every(id=>e.domains?.[id])).length,mechanisms:sum(extras.map(e=>e.connections?.mechanisms?.length||0)),joins:sum(extras.map(e=>e.connections?.joins?.length||0)),completeConnectionReviews:extras.filter(e=>e.connections?.status==='complete').length,
 newAmazonObservations:0,amazonCountsStillUnavailable:recs.filter(b=>b.amazon?.count===null).length,editionConfidence:Object.fromEntries(['high','moderate','low','unknown'].map(c=>[c,editions.filter(e=>(e.confidence||'unknown')===c).length]))};
let auditReport=`# V4/V5 review\n\n${manifest.date}, Europe/Warsaw. ${link('Complete individual findings','../../'+report)}. Research batches: ${groups.map(g=>link(g.toUpperCase(),g+'-report.md')).join(', ')}.\n\nReviewed all **${inputs.length}** current vetoed books. **${restored.length} restored**, **${vetoes.length} still vetoed**, **${newExclusions.length} hard-excluded**. Current totals: **${recs.length} recommended, ${vetoes.length} vetoed, ${exclusions.length} excluded**. All ${previous.currentBooks.filter(b=>b.status==='recommended').length} prior recommendations and ${previous.exclusions.length} prior exclusions retain their records.\n\n`;
auditReport+='## Method and limits\n\nEach book has eight gate findings, evidence, confidence and a complete score review. V4 is not a ban on forecasting; V5 is not a ban on advocacy or criticism. Another veto requires its own serious, evidenced defect. The prior analyses are read as evidence and history, not automatic authority. The non-book exclusion inserted during this review is recorded in rules-amendment.json without changing the baseline; all three hard exclusions are applied. Stable gate names avoid the resulting numbering shift. The old references to both and either in AGENTS remain a wording concern for later review. Scores are retained when the gate interpretation changes without new evidence about quality. All fifteen inputs are reviewed; a restored book can still be a poor fit.\n\nPrimary pages, samples and retained analysis are used where available. This is not a claim to have reread every complete book or recaptured all source comments. Unknown Amazon counts retain their recorded fallback; no new ratings observation is claimed. Restored page/domain records are existing evidence, not new research. '+normalized.length+' missing-domain indexes are derived from their existing supported domain keys.\n\n';
auditReport+='## Restored books\n\n| Score | Author | Title | Gate confidence | Score confidence |\n|---:|---|---|---|---|\n'+restored.map(b=>`| ${f(b.total)} | ${cell(b.author)} | ${link(b.title,'../../'+b.reviewAnchor)} | ${b.eligibilityConfidence} | ${b.scoreConfidence} |`).join('\n')+'\n\n';
auditReport+=`## Reproducibility\n\nRules SHA-256: \`${manifest.rulesSha256}\`. Decisions and prior-ledger hashes are retained in this directory. \`build.mjs\` validates and stages all outputs; \`--write\` checks the original canonical hashes and publishes once. \`validate.mjs\` verifies membership, arithmetic, review coverage and unchanged history. Do not regenerate the baseline or rerun publication after later changes.\n\nCurrent evidence coverage: ${editions.length} edition page counts, ${recs.length-editions.length} unknown; ${enrichment.summary.knownDomainValues} domain values in ${enrichment.summary.booksWithDomainEvidence} books. Confidence in each book judgment remains explicit; software checks cannot establish the truth of a book assessment.\n`;
const outputs=new Map([[dir+'compiled.json',JSON.stringify(compiled,null,2)+'\n'],[dir+'REPORT.md',auditReport],[dir+'normalization.json',JSON.stringify({ids:normalized,basis:'Derive unknownDomains from retained supported values; no new grade.'},null,2)+'\n'],[report,analysis],['RECOMMENDED_BOOKS.md',recommended],['VETOED_BOOKS.md',vetoText],['EXCLUDED_BOOKS.md',excludedText],['SOURCES.md',sourcesText],['site/enrichment.json',JSON.stringify(enrichment,null,2)+'\n'],['data/catalog.json',JSON.stringify({compiled:dir+'compiled.json'},null,2)+'\n']]);
console.log(JSON.stringify(counts,null,2));
if(process.argv.includes('--write')){
 for(const [file,data]of Object.entries(baseline.files))assert.equal(sha(read(file)),file==='AGENTS.md'?amendment.reviewedSha256:data.sha256,file+' changed since baseline');
 for(const [file,hash]of Object.entries(baseline.history))assert.equal(sha(read(file)),hash,'Historical analysis changed: '+file);
 for(const [file,text]of outputs)fs.writeFileSync(file,text);
 console.log('Published reviewed ledgers and catalog; preserved historical records.');
}else{fs.mkdirSync(dir+'staged',{recursive:true});for(const [file,text]of outputs)fs.writeFileSync(dir+'staged/'+file.replaceAll('/','__'),text);console.log('Validated and staged outputs; canonical files unchanged.');}
