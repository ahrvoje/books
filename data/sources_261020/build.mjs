import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import assert from 'node:assert/strict';
import { validateConnections } from '../../site/build.mjs';
import { DOMAIN_IDS, format } from '../../site/model.mjs';
const dir='data/sources_261020/',write=process.argv.includes('--write'),check=process.argv.includes('--check');
const read=f=>JSON.parse(fs.readFileSync(f,'utf8').replace(/^\uFEFF/,''));
const manifest=read(dir+'manifest.json'),baseline=read(dir+'baseline.json'),inventory=read(dir+'inventory.json');
const previous=read(manifest.previousCompiled),sourceById=new Map(inventory.books.map(b=>[b.id,b]));
const codes=['E','S','U','M','D','R','F','A','N','P'],maxima=[20,17,15,12,10,9,7,5,3,2];
const names=['Evidence and inferential integrity','Systems integration','Transferable strategic utility','Mechanistic and causal depth','Information density and length justification','Durability and resistance to hype','Direct domain fit','Expert authority and intellectual standing','Narrative architecture and clarity','Authorial precision and finesse'];
const clean=s=>String(s??'').replace(/\r?\n/g,' ').replace(/\|/g,'&#124;');
const norm=s=>String(s||'').normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/&/g,'and').replace(/[^a-z0-9]/g,'');
const titleOf=s=>s?.match(/^\[([^\]]+)\]/)?.[1]||s;
const key=b=>norm(b.title)+'|'+norm(b.author);
const f=format;
const unique=a=>[...new Set(a)],sum=a=>a.reduce((x,y)=>x+y,0);
const verdict=t=>t>=85?'Recommend':t>=75?'Consider':t>=65?'Selective':t>=50?'Low priority':'Poor fit';
const ranked=(a,b)=>b.total-a.total||a.title.localeCompare(b.title,'en');
const analysisPath=s=>s?(s.startsWith('analysis/')?s:'analysis/'+s):'';
const localRef=value=>{
 const s=value.replace(/(\.json)#.*$/,'$1');
 return s.startsWith('analysis/')?path.basename(s):s.startsWith('data/')?'../'+s:s;
};
const urlLink=(label,url)=>`[${clean(label)}](${url})`;
const assessmentFiles=['primary/assessments.json','primary/hn-assessments.json','primary/hn-tail-assessments.json','primary/hn-memoir-assessments.json','primary/math-assessments.json','primary/reddit-final-assessments.json','hn/assessments.json','hn/reddit-assessments.json','math/assessments.json','math/reddit-assessments.json','reddit/assessments.json','reddit/hn-assessments.json'];
const all=assessmentFiles.flatMap(file=>fs.existsSync(dir+file)?read(dir+file).map(a=>({...a,assessmentFile:dir+file})):[]);
assert.equal(new Set(all.map(a=>a.id)).size,all.length,'Duplicate assessment IDs across reviewers');
const byId=new Map(all.map(a=>[a.id,a])),oldById=new Map(previous.currentBooks.map(b=>[b.id,b]));
const missing=inventory.books.filter(b=>!byId.has(b.id));
function validate(a){
 assert(sourceById.has(a.id),`Unknown packet ID ${a.id}`);
 if(a.mergeInto){assert(a.mergeInto!==a.id);return;}
 assert(['recommended','vetoed','excluded','unresolved','nonbook'].includes(a.status),a.id+' status');
 assert(a.title&&a.reason&&a.eligibility&&a.evidence?.length,a.id+' missing decision evidence');
 assert(['high','moderate','low','unknown'].includes(a.confidence),a.id+' confidence');
 if(['recommended','vetoed'].includes(a.status)){
  assert(a.author,a.id+' author');
  assert(a.raw?.length===10&&a.raw.every((x,i)=>Number.isFinite(x)&&x>=0&&x<=maxima[i]),a.id+' raw');
  assert(a.notes?.length===10&&a.notes.every(n=>typeof n==='string'&&n.trim()),a.id+' ten reasons');
  assert(Number.isInteger(a.year),a.id+' original year');
  assert(a.periodEnd===null||Number.isFinite(a.periodEnd),a.id+' period endpoint');
  assert([0,-10].includes(a.T11)&&[0,-10].includes(a.T12),a.id+' themes');
  assert(a.themeNote&&a.periodNote&&a.yearNote,a.id+' deduction reasons');
  assert(a.amazon&&Object.hasOwn(a.amazon,'count'),a.id+' Amazon observation');
  assert(a.amazon.count===null||(Number.isInteger(a.amazon.count)&&a.amazon.count>=0),a.id+' Amazon count');
  if(a.amazon.count!==null)assert(a.amazon.url&&(a.amazon.verifiedAt||a.amazon.retrievedAt||a.amazon.retrieved||a.amazon.attemptedAt),a.id+' rating provenance');
  else assert(a.amazon.attempts?.length||a.amazon.attemptFiles?.length||a.amazon.status,a.id+' unknown count fallback');
  if(sourceById.get(a.id).prior&&a.priorId!==false)assert(a.reassessment,a.id+' prior comparison');
  if(a.status==='vetoed')assert(a.veto&&a.vetoConfidence,a.id+' veto finding');
  const e=a.enrichment;
  if(e){
   for(const [code,d] of Object.entries(e.domains||{})){
    assert(DOMAIN_IDS.includes(code)&&Number.isInteger(d.value)&&d.value>=0&&d.value<=4&&d.rationale&&d.refs?.length,a.id+' domain '+code);
    assert(['high','moderate','low'].includes(d.confidence),a.id+' domain confidence '+code);
   }
   if(e.edition)assert(Number.isInteger(e.edition.pages)&&e.edition.pages>0&&e.edition.id&&/^https?:\/\//.test(e.edition.url)&&e.edition.retrieved&&e.edition.language&&e.edition.format&&Number.isInteger(e.edition.year),a.id+' edition');
   if(e.connections)validateConnections({connections:e.connections,values:Object.fromEntries(Object.entries(e.domains||{}).map(([k,d])=>[k,d.value]))});
  }
 }else{
  assert(!a.raw&&!a.total,a.id+' hard-excluded/unresolved/nonbook must not be scored');
  if(a.status==='excluded')assert(['H1','H2'].includes(a.exclusion),a.id+' exclusion rule');
 }
}
const invalid=[];
for(const a of all)try{validate(a);}catch(e){invalid.push({id:a.id,error:e.message});}
const progress={date:manifest.date,candidates:inventory.books.length,assessed:all.length,missing:missing.map(b=>({id:b.id,title:b.title,owner:b.owner})),invalid,
 statuses:Object.fromEntries(['recommended','vetoed','excluded','unresolved','nonbook'].map(s=>[s,all.filter(a=>a.status===s&&!a.mergeInto).length]))};
fs.writeFileSync(dir+'progress.json',JSON.stringify(progress,null,2)+'\n');
console.log(JSON.stringify({...progress,missing:missing.length,invalid}));
if(!write&&!check)process.exit(0);
assert.equal(missing.length,0,'All captured candidate works require decisions before publication');
assert.deepEqual(invalid,[],'Invalid decisions');
for(const file of ['RECOMMENDED_BOOKS.md','VETOED_BOOKS.md','EXCLUDED_BOOKS.md','SOURCES.md','site/enrichment.json'])
 assert.equal(crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex'),baseline[file].sha256,file+' changed since the batch baseline; reconcile before writing');
function resolve(id,seen=new Set()){
 assert(!seen.has(id),'Identity alias cycle');seen.add(id);
 const a=byId.get(id);assert(a,'Alias target has no fresh assessment: '+id);
 return a.mergeInto?resolve(a.mergeInto,seen):a.id;
}
const groups=new Map();
for(const a of all){const id=resolve(a.id);if(!groups.has(id))groups.set(id,[]);groups.get(id).push(sourceById.get(a.id));}
function score(a){
 const points=a.raw.map((x,i)=>[0,1,4].includes(i)?x*x/maxima[i]:x),n=a.amazon.count;
 const deductions={T11:a.T11,T12:a.T12,H13:a.periodEnd===null?0:-Math.min(12,Math.max(0,manifest.reviewYear-a.periodEnd)/25),
  P14:-Math.min(10,Math.max(0,manifest.reviewYear-a.year)/10),O15:n===null?0:n<10?-20:n<100?-10:n<1000?-5:0};
 const positive=sum(points),total=positive+sum(Object.values(deductions));
 return {...a,points,deductions,positive,total,displayScore:f(total),verdict:verdict(total),
  criteria:codes.map((code,i)=>({code,name:names[i],max:maxima[i],raw:a.raw[i],points:points[i],assessment:a.notes[i]}))};
}
const current=new Map(previous.currentBooks.map(b=>[b.id,b])),records=[],touched=new Set(),consumedPrior=new Set();
// Repairs to inherited presentation metadata; the underlying assessments stay intact.
const lionVolume=current.get('g0990');
if(lionVolume){
 lionVolume.purchaseUrl='https://www.amazon.de/dp/0345548639';
 lionVolume.purchaseFormat='2013 paperback, ISBN 9780345548634, verified in the retained publisher edition record. Amazon availability and binding are unverified.';
 lionVolume.titleCell=urlLink(lionVolume.title,lionVolume.purchaseUrl);
 lionVolume.metadataCorrection='The former ASIN 0316227781 identifies a three-volume box set. Use the independently verified final-volume ISBN; do not merge this work with a complete-series nomination.';
 touched.add(lionVolume.id);
}
const almostPerfect=current.get('q0266');
if(almostPerfect){almostPerfect.listYear=almostPerfect.year;touched.add(almostPerfect.id);}
if(current.has('efficiency'))touched.add('efficiency');
for(const [id,items] of groups){
 const a=byId.get(id),p=a.priorId===false?null:oldById.get(a.priorId||id);
 if(p){assert(!consumedPrior.has(p.id),'Two assessments target prior '+p.id);consumedPrior.add(p.id);}
 const appearances=items.flatMap(b=>b.appearances),sources=unique([...(p?.sources||[]),...appearances.map(a=>a.source)]).sort((a,b)=>a-b);
 const firstSource=Math.min(...appearances.map(a=>a.source)),report=manifest.sources.find(s=>s.number===firstSource).report;
 let b={...a,id:a.canonicalId||p?.id||id,sourceIds:items.map(b=>b.id),appearances,sources,entryDate:p?.entryDate||manifest.date,
  previousTotal:p?.total,previousStatus:p?.status,previousId:p?.id,priorReview:p?.reviewAnchor||p?.currentReview,
  reviewAnchor:report+'#'+(a.canonicalId||p?.id||id),currentReview:report};
 if(['recommended','vetoed'].includes(a.status)){
  b=score(b);
  b.amazon={...b.amazon,verifiedAt:b.amazon.verifiedAt||b.amazon.retrievedAt||b.amazon.retrieved,asin:b.amazon.asin||b.amazon.product};
  b.purchaseUrl=a.purchaseUrl||p?.purchaseUrl||p?.titleCell?.match(/\]\(([^)]+)\)/)?.[1]||'https://www.amazon.de/s?k='+encodeURIComponent(a.title+' '+a.author);
  b.titleCell=urlLink(b.title,b.purchaseUrl);b.listYear=b.year;
  current.set(b.id,b);touched.add(b.id);
  if(p&&p.id!==b.id&&!a.retainPrior)current.delete(p.id);
 }else if(a.status==='excluded'){
  if(p)current.delete(p.id);
 }else if(p){
  // Unresolved new wording does not overturn an established work identity.
  b.retainedPriorPendingIdentity=true;
 }
 records.push(b);
}
const currentBooks=[...current.values()];
assert.equal(new Set(currentBooks.map(key)).size,currentBooks.length,'Duplicate current title/author identities; resolve before publishing');
const exclusions=new Map(previous.exclusions.map(b=>[key(b),{...b}]));
for(const b of records){
 const items=b.sourceIds.map(id=>sourceById.get(id));
 const oldMatches=items.flatMap(b=>b.priorExcluded||[]);
 if(['recommended','vetoed','excluded'].includes(b.status)){
  for(const old of oldMatches)exclusions.delete(key(old));
  exclusions.delete(key(b));
 }
 if(b.status==='excluded')exclusions.set(key(b),{id:b.id,title:b.title,author:b.author,line:`- ${b.title}${b.author?' — '+b.author:''}`,sourceIds:b.sourceIds,analysis:b.reviewAnchor});
}
for(const b of currentBooks)assert(!exclusions.has(key(b)),b.id+' appears in scored and excluded lists');
const compiled={audit:{date:manifest.date,reviewYear:manifest.reviewYear,previous:manifest.previousCompiled,sourceNumbers:manifest.sources.map(s=>s.number),
 capturedCandidates:inventory.books.length,uniqueReviewedWorks:records.length,duplicateInput:manifest.duplicateInput,
 coverage:inventory.sources.map(s=>({source:s.source,coverage:s.coverage})),unresolved:records.filter(b=>b.status==='unresolved').map(b=>b.id)},
 sourceBooks:records,currentBooks,exclusions:[...exclusions.values()].sort((a,b)=>a.title.localeCompare(b.title,'en'))};
const outputs=new Map();
const recs=currentBooks.filter(b=>b.status==='recommended').sort(ranked),vetoes=currentBooks.filter(b=>b.status==='vetoed').sort(ranked);
const oldRows=new Map();
for(const line of baseline['RECOMMENDED_BOOKS.md'].text.split(/\r?\n/).filter(l=>/^\| 20\d\d-/.test(l))){
 const c=line.split('|').slice(1,-1).map(s=>s.trim());oldRows.set(norm(titleOf(c[3]))+'|'+norm(c[2]),line);
}
outputs.set('RECOMMENDED_BOOKS.md','| Entry date | First publication year | Author | Title | Score / 100 | Source |\n|---|---|---|---|---:|---:|\n'+recs.map(b=>
 !touched.has(b.id)&&oldRows.has(key(b))?oldRows.get(key(b)):`| ${b.entryDate} | ${b.year} | ${clean(b.author)} | ${urlLink(b.title,b.purchaseUrl)} | ${f(b.total)} | ${b.sources.join(', ')} |`).join('\n')+'\n');
const reasonBlocks=new Map([...baseline['VETOED_BOOKS.md'].text.matchAll(/^### (.+)\r?\n([\s\S]*?)(?=^### |$(?![\s\S]))/gm)].map(m=>[norm(m[1]),m[2].trim()]));
let vetoText=`# Vetoed books\n\nUpdated **${manifest.date}, Europe/Warsaw**. **${vetoes.length} unique source works** remain vetoed. Counterfactual scores suspend only the veto gate and retain identified flaws. Full-precision totals determine order.\n\n| Entry date | First year | Author | Title | Counterfactual /100 | Veto | Veto confidence | Sources |\n|---|---|---|---|---:|---|---|---|\n`;
vetoText+=vetoes.map(b=>`| ${b.entryDate} | ${b.year} | ${clean(b.author)} | ${urlLink(b.title,analysisPath(b.reviewAnchor||b.currentReview))} | **${f(b.total)}** | ${b.veto||'See assessment'} | ${b.vetoConfidence||b.confidence||'moderate'} | ${b.sources.join(', ')} |`).join('\n');
vetoText+='\n\n## Full counterfactual score table\n\nE/S/D are quadratic; all other positive criteria are linear. Cells show raw → contribution.\n\n| Work | '+codes.join(' | ')+' | T11 | T12 | H13 | P14 | O15 | Total |\n|---|'+Array(16).fill('---:').join('|')+'|\n';
vetoText+=vetoes.map(b=>`| ${urlLink(b.title,analysisPath(b.reviewAnchor||b.currentReview))} | ${b.raw.map((x,i)=>`${f(x)} → ${f(b.points[i])}`).join(' | ')} | ${Object.values(b.deductions).map(f).join(' | ')} | **${f(b.total)}** |`).join('\n');
vetoText+='\n\n## Reasons and evidence\n\n'+vetoes.map(b=>`### ${b.title}\n\n`+(!touched.has(b.id)&&reasonBlocks.has(norm(b.title))?reasonBlocks.get(norm(b.title)):`${b.veto} (${b.vetoConfidence} confidence). ${b.reason}\n\nFull assessment: ${urlLink('criterion breakdown and evidence',analysisPath(b.reviewAnchor))}.`)).join('\n\n')+'\n';
outputs.set('VETOED_BOOKS.md',vetoText);
outputs.set('EXCLUDED_BOOKS.md','# Excluded books\n\nHard-excluded source books under [AGENTS.md](AGENTS.md). One alphabetized entry per work; no scores. Reasons and identity qualifications are retained in the historical and current analyses linked from [SOURCES.md](SOURCES.md).\n\n'+compiled.exclusions.map(b=>b.line||`- ${b.title}${b.author?' — '+b.author:''}`).join('\n')+'\n');
outputs.set('SOURCES.md',baseline['SOURCES.md'].text.trimEnd()+'\n'+manifest.sources.map(s=>`| ${s.number} | ${manifest.date} | ${urlLink(s.label,s.url)} | ${urlLink('Full analysis',s.report)} |`).join('\n')+'\n');
function evidenceList(b){return unique(b.evidence||[]).map((u,i)=>urlLink('Evidence '+(i+1),localRef(u))).join('; ');}
function breakdown(b){
 let s=`<a id="${b.id}"></a>\n### ${b.title} — ${b.author}\n\n**${b.status}; ${b.confidence} confidence.** ${b.eligibility}\n\n${b.reason}\n\n`;
 if(b.reassessment)s+=`Reassessment: ${b.reassessment}\n\n`;
 s+=`Contributing sources: ${b.sources.join(', ')}. ${b.priorReview?`Prior assessment: ${urlLink('previous review',localRef(analysisPath(b.priorReview)))}. `:''}${evidenceList(b)}.\n\n`;
 if(!['recommended','vetoed'].includes(b.status))return s;
 s+='| Criterion | Linear attainment | Contribution | Assessment |\n|---|---:|---:|---|\n';
 s+=codes.map((c,i)=>`| ${c} — ${names[i]} | ${f(b.raw[i])}/${maxima[i]} | ${f(b.points[i])} | ${clean(b.notes[i])} |`).join('\n')+'\n\n';
 s+=`| Rule | Points | Basis |\n|---|---:|---|\n| T11 | ${f(b.deductions.T11)} | ${clean(b.themeNote)} |\n| T12 | ${f(b.deductions.T12)} | Applied separately from T11. |\n| H13 | ${f(b.deductions.H13)} | Endpoint ${b.periodEnd===null?'none':b.periodEnd}; ${b.periodConfidence||'moderate'} confidence. ${clean(b.periodNote)} |\n| P14 | ${f(b.deductions.P14)} | Original year ${b.year}; ${b.yearConfidence||'moderate'} confidence. ${clean(b.yearNote)} |\n| O15 | ${f(b.deductions.O15)} | ${b.amazon.count===null?'Unknown count; specified zero-deduction fallback':b.amazon.count+' total ratings on one product'}. ${clean(b.amazon.status||b.amazon.snapshot||'')} |\n\n`;
 s+=`**Total ${f(b.total)}/100 — ${b.status==='vetoed'?'counterfactual only; veto remains':b.verdict}.** Positive subtotal ${f(b.positive)}. Unrounded values determine sorting and verdicts.\n\n`;
 s+=`Reader snapshot: ${b.reader||'Unavailable.'}\n\nEdition locator: ${urlLink(b.title,b.purchaseUrl)}. ${b.purchaseFormat||'Format availability unverified.'}\n\n`;
 if(b.amazon.url)s+=`Amazon provenance: ${urlLink(b.amazon.marketplace||'matching product',b.amazon.url)}; product ${b.amazon.asin||b.amazon.product||'in URL'}; retrieved ${b.amazon.verifiedAt||b.amazon.retrievedAt||b.amazon.attemptedAt||'see retained snapshot'}. ${b.amazon.evidenceFile?urlLink('Saved snapshot',localRef(b.amazon.evidenceFile)):''}\n\n`;
 if(b.amazon.attempts?.length||b.amazon.attemptFiles?.length)s+=`Retrieval audit: ${unique(b.amazon.attempts||b.amazon.attemptFiles).map(x=>typeof x==='string'?urlLink('attempt',localRef(x)):clean(JSON.stringify(x))).join('; ')}.\n\n`;
 if(b.enrichment?.edition){const e=b.enrichment.edition;s+=`Page count: **${e.pages}**, ${e.id}, ${e.format}, ${e.year}; ${urlLink('edition evidence',e.url)}. ${e.notes||''}\n\n`;}
 if(Object.keys(b.enrichment?.domains||{}).length)s+='Domain evidence: '+Object.entries(b.enrichment.domains).map(([k,v])=>`${k}=${v.value}/4 (${v.confidence}): ${v.rationale}`).join(' ')+'\n\n';
 for(const m of b.enrichment?.connections?.mechanisms||[])s+=`Connection (${m.domains.join(' + ')}, strength ${m.strength}/4, ${m.confidence}): ${m.statement} Scope: ${m.scope}\n\n`;
 return s;
}
for(const src of manifest.sources){
 const capture=inventory.sources.find(s=>s.source===src.number),works=records.filter(b=>b.appearances.some(a=>a.source===src.number));
 const eligible=works.filter(b=>b.status==='recommended').sort(ranked),vetoed=works.filter(b=>b.status==='vetoed').sort(ranked),excluded=works.filter(b=>b.status==='excluded');
 let report=`# Source ${src.number}: ${src.label}\n\nInput: ${urlLink('source page',src.url)}. Reviewed ${manifest.date}, Europe/Warsaw. ${src.number===134?manifest.duplicateInput:''}\n\n## Coverage and method\n\n`;
 report+=`Captured source audit: ${urlLink('inventory',localRef(capture.inventory))}. Coverage: **${capture.coverage?.status||'see capture audit'}**.\n\n\`\`\`json\n${JSON.stringify(capture.coverage||{},null,2)}\n\`\`\`\n\n`;
 report+='Only works named or directly linked as books in the captured source material are candidates. External publisher, author and library evidence resolves identity, audience, purpose, dates and assessment; it does not add unrelated titles. Fiction and instructional/specialist works are removed before vetoes or scores. Every resolved eligible non-vetoed work remains ranked, including poor fits. Existing works receive a new assessment using prior and current evidence; repeated mentions do not increase quality.\n\n';
 report+=`${works.length} resolved or unresolved work records: ${eligible.length} recommended-list entries, ${vetoed.length} vetoes, ${excluded.length} hard exclusions, ${works.filter(b=>['unresolved','nonbook'].includes(b.status)).length} unresolved/non-book decisions. Source count counts distinct numbered sources, not mentions. Scores use the 2026 review year.\n\n## Ranked eligible books\n\n| Score / verdict / confidence | Reader snapshot | Author | Original year | Title |\n|---|---|---|---:|---|\n`;
 report+=eligible.map(b=>`| **${f(b.total)}** · ${b.verdict} · ${b.confidence} | ${clean(b.reader||'Unavailable')} | ${clean(b.author)} | ${b.year} | ${urlLink(b.title,b.purchaseUrl)} |`).join('\n')+'\n\n';
 if(!eligible.length)report+='No verified eligible titles were available from the captured material; this is not a claim that inaccessible material contains none.\n\n';
 report+='## Detailed decisions\n\n'+[...eligible,...vetoed,...excluded,...works.filter(b=>['unresolved','nonbook'].includes(b.status))].map(breakdown).join('\n');
 report+='## Unresolved source references and non-book material\n\nThe following source-level references remain separate from the three book ledgers. No missing title or identity is invented.\n\n```json\n'+JSON.stringify({unresolvedMentions:capture.unresolvedMentions||[],nonBooks:capture.nonBooks||capture.nonbooks||[],auxiliaryNonCandidates:capture.noncandidateAuxiliaryAudit||[]},null,2)+'\n```\n';
 outputs.set(src.report,report);
}
const enrichment=JSON.parse(baseline['site/enrichment.json'].text);
for(const id of Object.keys(enrichment.books))if(!recs.some(b=>b.id===id))delete enrichment.books[id];
for(const b of recs.filter(b=>touched.has(b.id))){
 enrichment.books[b.id]=b.enrichment||enrichment.books[b.id]||{edition:null,domains:{},connections:{status:'unreviewed',mechanisms:[],joins:[],limitations:'No supported domain/connection enrichment supplied.'},research:{reviewed:manifest.date,unknownReason:'Missing enrichment remains unknown.'}};
}
for(const b of recs){
 const e=enrichment.books[b.id];if(!e)continue;
 e.research??={reviewed:manifest.date,unknownReason:'Only the documented fields are established.'};
 e.research.unknownDomains=DOMAIN_IDS.filter(d=>!e.domains?.[d]);
 if(e.research.newAmazonObservation&&b.amazon?.count!==null&&b.amazon?.count!==undefined){
  e.research.supersededAmazonObservation=e.research.newAmazonObservation;
  delete e.research.newAmazonObservation;
  e.research.amazonReviewReason='The canonical reassessment now supplies a verified count. The older supplemental observation is retained as superseded evidence.';
 }
}
const extras=recs.map(b=>({b,e:enrichment.books[b.id]||{}}));
const coverage={
 recommended:recs.length,vetoed:vetoes.length,excluded:compiled.exclusions.length,
 sourceCandidates:inventory.books.length,reviewedWorks:records.length,
 reviewedStatuses:Object.fromEntries(['recommended','vetoed','excluded','unresolved','nonbook'].map(s=>[s,records.filter(b=>b.status===s).length])),
 pages:extras.filter(x=>x.e.edition).length,
 booksWithDomains:extras.filter(x=>Object.keys(x.e.domains||{}).length).length,
 domainValues:sum(extras.map(x=>Object.keys(x.e.domains||{}).length)),
 completeDomainProfiles:extras.filter(x=>Object.keys(x.e.domains||{}).length===20).length,
 mechanisms:sum(extras.map(x=>x.e.connections?.mechanisms?.length||0)),
 joins:sum(extras.map(x=>x.e.connections?.joins?.length||0)),
 completeConnectionReviews:extras.filter(x=>x.e.connections?.status==='complete').length,
 knownAmazonCounts:recs.filter(b=>b.amazon?.count!==null&&b.amazon?.count!==undefined).length
};
const reviewQueue={
 missingPages:extras.filter(x=>!x.e.edition).map(x=>({id:x.b.id,title:x.b.title,reason:x.e.research?.unknownReason||'Edition not established.'})),
 unresolvedWorks:records.filter(b=>b.status==='unresolved').map(b=>({id:b.id,title:b.title,reason:b.reason,sources:b.sources})),
 lowConfidenceDates:records.filter(b=>b.raw&&(b.yearConfidence==='low'||b.periodConfidence==='low')).map(b=>({id:b.id,title:b.title,year:b.year,yearNote:b.yearNote,periodEnd:b.periodEnd,periodNote:b.periodNote})),
 sourceCoverage:inventory.sources.map(s=>({source:s.source,coverage:s.coverage}))
};
outputs.set(dir+'coverage.json',JSON.stringify(coverage,null,2)+'\n');
outputs.set(dir+'review-queue.json',JSON.stringify(reviewQueue,null,2)+'\n');
outputs.set(dir+'REPORT.md',`# Source integration audit

Reviewed ${manifest.date}, Europe/Warsaw. The 22 submitted URLs identify 21 distinct sources, numbered 127–147. The repeated Hacker News 36581241 URL counts once.

All **${inventory.books.length} captured candidate records** received decisions, consolidated into **${records.length} work records**. This is complete coverage of captured candidates, not a claim that blocked comments or images were read.

| Decision in this batch | Works |
|---|---:|
${Object.entries(coverage.reviewedStatuses).map(([s,n])=>`| ${s} | ${n} |`).join('\n')}

The cumulative catalog contains **${recs.length} recommended-list works**, **${vetoes.length} vetoed works**, and **${compiled.exclusions.length} hard exclusions**. “Recommended-list” includes low scores and poor fits: these are eligible works, not an endorsement of every title.

| Current recommended catalog field | Known | Unknown or incomplete |
|---|---:|---:|
| Identified-edition page count | ${coverage.pages} | ${recs.length-coverage.pages} |
| Individual domain grades | ${coverage.domainValues} | ${20*recs.length-coverage.domainValues} |
| Complete 20-domain profile | ${coverage.completeDomainProfiles} | ${recs.length-coverage.completeDomainProfiles} |
| Complete connection inventory | ${coverage.completeConnectionReviews} | ${recs.length-coverage.completeConnectionReviews} |
| Verified Amazon rating count | ${coverage.knownAmazonCounts} | ${recs.length-coverage.knownAmazonCounts} |

${coverage.booksWithDomains} works have at least one graded domain. There are ${coverage.mechanisms} documented mechanisms and ${coverage.joins} explicit joins. These numbers measure recorded evidence, not full-text reading. Missing domain grades stay unknown; co-occurring topics alone do not create a connection. A partial inventory cannot establish the exact best connection across an entire book.

## Evidence and access limits

Publisher, author, library and specialist-review records establish identity, main purpose, original years, edition scope and assessment support. Statements of praise do not establish evidence quality. Each scored work has ten linear attainments, ten criterion reasons, five separate deductions and a confidence level. E, S and D are curved once. Repeated mentions add distinct source numbers, not quality points.

The seven Hacker News trees were captured. Purdue, UNCW and MathOverflow reading-list material was captured. Reddit access remained partial: some reply expansions failed, one source was unavailable, and a cover image was blocked. Named books in readable comments count as comment nominations; they are not presented as verified transcriptions of blocked images. Full per-source coverage is recorded in each analysis and in [the review queue](review-queue.json).

Amazon counts use one matching product and the original retrieval date. Written-review counts, wrong titles, incomplete series and multi-book bundles are rejected. A failed lookup leaves the count unknown and applies the specified O15=0 fallback. Product availability is not inferred from an ISBN-based purchase locator. No access challenge was bypassed.

Edition page counts refer to the stated print or ebook product. A series needs the whole nominated scope. Original production, selected edition year and historical topic endpoint are separate fields. Approximate or uncertain dates are stated with confidence.

## Corrections and remaining review

Prior source assessments remain historical records. Fresh decisions replace current scores and gates, retain all contributing source numbers, and cite prior evidence. The publication check rejects duplicate identities, alias cycles, overlapping ledgers, malformed criteria and unsupported connection participants before writing.

The inherited *Almost Perfect* ledger year is repaired from NaN to the already supported 1994. *The Origins of Efficiency* displays 88.18 using the same decimal rounding as the site; its underlying score is unchanged. The old *Last Lion: Defender of the Realm* purchase link pointed to a trilogy box set; it now uses the separately verified final-volume ISBN. The newly nominated complete trilogy remains a separate scope.

The [review queue](review-queue.json) lists unresolved identities, missing edition extents, low-confidence date judgments and source access gaps. Some memoir, instruction, specialist-history and activism boundaries retain moderate confidence. The review does not invent missing titles, Amazon aggregates, exact historical dates or complete domain profiles.

The generated site remains one offline HTML file. [The specification](../../spec_01.md) defines the model; [the implementation review](../../IMPLEMENTATION_REVIEW.md) records browser validation and remaining product concerns.
`);
outputs.set(dir+'compiled.json',JSON.stringify(compiled,null,2)+'\n');
outputs.set('site/enrichment.json',JSON.stringify(enrichment,null,2)+'\n');
outputs.set('data/catalog.json',JSON.stringify({compiled:dir+'compiled.json'},null,2)+'\n');
// All validation above completes before canonical files are touched.
if(write)for(const [file,text] of outputs){fs.mkdirSync(path.dirname(file),{recursive:true});fs.writeFileSync(file,text);}
console.log(JSON.stringify({written:write?outputs.size:0,validatedOutputs:outputs.size,recommended:recs.length,vetoed:vetoes.length,excluded:compiled.exclusions.length,reviewed:records.length}));
