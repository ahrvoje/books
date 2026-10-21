import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import assert from 'node:assert/strict';
import { REGISTRY, DOMAIN_IDS, format as f } from '../../site/model.mjs';
import { validateConnections } from '../../site/build.mjs';
const dir='data/books_guru_261021/',read=p=>fs.readFileSync(p,'utf8'),json=p=>JSON.parse(read(p));
const sha=s=>crypto.createHash('sha256').update(s).digest('hex'),sum=a=>a.reduce((x,y)=>x+y,0),unique=a=>[...new Set(a)];
const baseline=json(dir+'baseline.json'),previous=json(baseline.compiled),inventory=json(dir+'inventory.json');
const sources=json(dir+'sources.json'),books=inventory.books,byId=new Map(books.map(b=>[b.id,b]));
const assessmentFiles=fs.readdirSync(dir).filter(f=>f.endsWith('-assessments.json')).sort();
const assessmentTexts=new Map(assessmentFiles.map(file=>[file,read(dir+file)]));
const aliases=json(dir+'id-aliases.json'),collection=json(dir+'collection-validation.json');
for(const [file,hash]of Object.entries(collection.hashes))assert.equal(sha(read(dir+file)),hash,'Frozen collection changed: '+file);
const submitted=assessmentFiles.flatMap(file=>JSON.parse(assessmentTexts.get(file)).map(a=>({...a,assessmentFile:dir+file})));
const assessments=submitted.filter(a=>{
 const b=byId.get(aliases[a.id]||a.id);
 assert(b,'Decision absent from frozen inventory: '+a.id);
 if(a.mergeInto&&b.priorId){assert.equal(a.mergeInto,b.priorId,a.id+' inconsistent old-work match');return false;}
 assert(!aliases[a.id],a.id+' duplicate scope must be documented in the frozen inventory');return true;
});
const decisions=new Map(assessments.map(a=>[a.id,a]));
const oldById=new Map([...previous.currentBooks,...previous.exclusions].map(b=>[b.id,b]));
const cell=s=>String(s??'').replace(/\r?\n/g,' ').replace(/\|/g,'&#124;'),link=(label,url)=>`[${cell(label)}](${url})`;
const local=u=>u.startsWith('analysis/')?path.basename(u):u.startsWith('data/')?'../'+u:u;
const confidence=c=>['high','moderate','low'].includes(c),gates=['BOOK_FORM','FICTION','REFERENCE','V1','V2','V3','V4','V5'];
const rank=(a,b)=>b.total-a.total||a.title.localeCompare(b.title,'en'),verdict=t=>t>=85?'Recommend':t>=75?'Consider':t>=65?'Selective':t>=50?'Low priority':'Poor fit';
const norm=s=>String(s??'').normalize('NFKD').toLowerCase().replace(/[\u0300-\u036f]/g,'').replace(/&/g,'and').replace(/[^a-z0-9]/g,''),key=b=>norm(b.title)+'|'+norm(b.author);
assert.equal(byId.size,books.length);assert.equal(decisions.size,assessments.length,'Duplicate decisions');
assert.equal(sources.length,26);assert.deepEqual(sources.map(s=>s.id),Array.from({length:26},(_,i)=>148+i));
assert.equal(sha(read('AGENTS.md')),baseline.files['AGENTS.md'].sha256,'Rules changed during this batch');
for(const a of assessments){
 assert(byId.has(a.id),'Decision absent from source inventory: '+a.id);
 if(a.mergeInto){assert(oldById.has(a.mergeInto),a.id+' invalid previous identity');continue;}
 assert(!byId.get(a.id).priorId&&!byId.get(a.id).previouslyCovered,a.id+' previously covered work must be skipped');
 assert(['recommended','vetoed','excluded','nonbook','unresolved'].includes(a.status)&&a.title&&a.reason&&a.eligibility,a.id+' missing decision');
 assert(confidence(a.confidence)&&confidence(a.eligibilityConfidence),a.id+' missing confidence');
 assert(gates.every(g=>a.gateReview?.[g]?.trim()),a.id+' missing gate review');
 assert(a.evidence?.length,a.id+' missing evidence');
 for(const u of a.evidence){assert(/^(https?:\/\/|analysis\/|data\/)/.test(u),a.id+' invalid evidence');if(!/^https?:/.test(u))assert(fs.existsSync(u.split('#')[0]),a.id+' absent evidence file');}
 if(!['recommended','vetoed'].includes(a.status)){
  assert(!a.raw&&!Object.hasOwn(a,'total'),a.id+' ineligible item has score');
  if(a.status==='excluded')assert(['FICTION','REFERENCE'].includes(a.exclusion),a.id+' wrong hard exclusion');
  continue;
 }
 assert(a.author&&a.raw?.length===10&&a.raw.every((x,i)=>Number.isFinite(x)&&x>=0&&x<=REGISTRY[i].max),a.id+' invalid raw vector');
 assert(a.notes?.length===10&&a.notes.every(n=>typeof n==='string'&&n.trim()),a.id+' missing criterion reason');
 assert([0,-10].includes(a.T11)&&[0,-10].includes(a.T12)&&Number.isInteger(a.year)&&a.year<=2026,a.id+' invalid deductions');
 assert(a.periodEnd===null||Number.isInteger(a.periodEnd),a.id+' invalid period');
 assert(a.themeNote&&a.yearNote&&a.periodNote&&confidence(a.yearConfidence)&&confidence(a.periodConfidence),a.id+' missing deduction evidence');
 assert(a.amazon&&(a.amazon.count===null||Number.isInteger(a.amazon.count)&&a.amazon.count>=0),a.id+' invalid Amazon count');
 if(a.amazon.count===null)assert(a.amazon.status&&a.amazon.attempts?.length,a.id+' no recorded rating attempt');
 else assert(a.amazon.url&&a.amazon.marketplace&&(a.amazon.asin||a.amazon.productIdentifier)&&a.amazon.retrievedAt,a.id+' incomplete verified Amazon provenance');
 assert(Array.isArray(a.veto)&&a.veto.every(v=>/^V[1-5]$/.test(v)),a.id+' invalid veto');
 assert(a.status==='vetoed'?a.veto.length&&confidence(a.vetoConfidence):a.veto.length===0,a.id+' gate/status mismatch');
 const e=a.enrichment;if(e){
  for(const [id,d]of Object.entries(e.domains||{}))assert(DOMAIN_IDS.includes(id)&&Number.isInteger(d.value)&&d.value>=0&&d.value<=4&&confidence(d.confidence)&&d.rationale&&d.refs?.length,a.id+' unsupported domain');
  if(e.edition)assert(Number.isInteger(e.edition.pages)&&e.edition.pages>0&&e.edition.id&&/^https?:\/\//.test(e.edition.url)&&e.edition.retrieved&&e.edition.language&&e.edition.format&&Number.isInteger(e.edition.year),a.id+' incomplete edition');
  if(e.connections)validateConnections({connections:e.connections,values:Object.fromEntries(Object.entries(e.domains||{}).map(([id,d])=>[id,d.value]))});
 }
}
const missing=books.filter(b=>!b.priorId&&!b.previouslyCovered&&!decisions.has(b.id));
if(missing.length){console.log(JSON.stringify({assessed:assessments.length,missing:missing.length,next:missing.slice(0,10).map(b=>({id:b.id,title:b.title}))},null,2));throw new Error('New-title assessments remain incomplete');}
if(!fs.existsSync(dir+'manifest.json')){
 const p=Object.fromEntries(new Intl.DateTimeFormat('en-GB',{timeZone:'Europe/Warsaw',year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',hour12:false}).formatToParts(new Date()).map(p=>[p.type,p.value]));
 const stamp=p.year.slice(2)+p.month+p.day+'_'+p.hour+p.minute;
 fs.writeFileSync(dir+'manifest.json',JSON.stringify({date:`${p.year}-${p.month}-${p.day}`,reviewYear:2026,stamp,rulesSha256:baseline.files['AGENTS.md'].sha256,
  sources:sources.map(s=>({...s,analysis:`analysis/analysis_bg${s.slug.replaceAll('-','').slice(0,10)}_${stamp}.md`}))},null,2)+'\n');
}
const manifest=json(dir+'manifest.json'),sourceMap=new Map(manifest.sources.map(s=>[s.id,s]));
const skips=books.filter(b=>b.priorId||b.previouslyCovered||decisions.get(b.id)?.mergeInto).map(b=>({...b,priorId:b.priorId||decisions.get(b.id)?.mergeInto||null}));
const additions=new Map();for(const b of skips)if(b.priorId){assert(oldById.has(b.priorId),b.id+' prior record missing');additions.set(b.priorId,unique([...(additions.get(b.priorId)||[]),...b.sources]).sort((a,b)=>a-b));}
const addSources=b=>additions.has(b.id)?{...b,sources:unique([...(b.sources||[]),...additions.get(b.id)]).sort((a,b)=>a-b)}:b;
const fresh=assessments.filter(a=>!a.mergeInto).map(a=>{
 const input=byId.get(a.id),sourceIds=[...input.sources].sort((a,b)=>a-b),report=sourceMap.get(sourceIds[0]).analysis;
 const b={...a,sources:sourceIds,sourceIds,entryDate:manifest.date,reviewedAt:manifest.date,currentReview:report,reviewAnchor:report+'#'+a.id,rulesSha256:manifest.rulesSha256};
 if(!['recommended','vetoed'].includes(b.status))return {...b,analysis:b.reviewAnchor,...(b.status==='excluded'?{line:`- ${b.title} — ${b.author}`}:{})};
 b.points=b.raw.map((x,i)=>REGISTRY[i].quadratic?x*x/REGISTRY[i].max:x);const n=b.amazon.count;
 b.deductions={T11:b.T11,T12:b.T12,H13:b.periodEnd===null?0:-Math.min(12,Math.max(0,2026-b.periodEnd)/25),P14:-Math.min(10,Math.max(0,2026-b.year)/10),O15:n===null?0:n<10?-20:n<100?-10:n<1000?-5:0};
 b.positive=sum(b.points);b.total=b.positive+sum(Object.values(b.deductions));b.displayScore=f(b.total);b.verdict=verdict(b.total);
 b.criteria=REGISTRY.slice(0,10).map((r,i)=>({code:r.id,name:r.name,max:r.max,raw:b.raw[i],points:b.points[i],assessment:b.notes[i]}));
 b.veto=b.veto.join('; ')||null;b.vetoReason=b.status==='vetoed'?b.reason:null;
 if(!/^https:\/\/(www\.)?amazon\.(de|com)\//.test(b.purchaseUrl||'')){b.purchaseUrl='https://www.amazon.de/s?k='+encodeURIComponent(b.title+' '+b.author+' paperback');b.purchaseFormat='Paperback search locator; matching edition and stock not verified.';}
 b.titleCell=link(b.title,b.purchaseUrl);b.listYear=b.year;return b;
});
const currentBooks=[...previous.currentBooks.map(addSources),...fresh.filter(b=>['recommended','vetoed'].includes(b.status))];
const exclusions=[...previous.exclusions.map(addSources),...fresh.filter(b=>b.status==='excluded')].sort((a,b)=>a.title.localeCompare(b.title,'en'));
const seen=new Set(),ids=new Set();for(const b of [...currentBooks,...exclusions]){assert(!seen.has(key(b))&&!ids.has(b.id),'Duplicate work '+b.title);seen.add(key(b));ids.add(b.id);}
const recs=currentBooks.filter(b=>b.status==='recommended').sort(rank),vetoes=currentBooks.filter(b=>b.status==='vetoed').sort(rank);
const counts={sources:sources.length,uniqueSourceWorks:books.length,skippedPreviouslyCovered:skips.length,newlyAssessed:fresh.length,
 newRecommended:fresh.filter(b=>b.status==='recommended').length,newVetoed:fresh.filter(b=>b.status==='vetoed').length,newExcluded:fresh.filter(b=>b.status==='excluded').length,
 nonbook:fresh.filter(b=>b.status==='nonbook').length,unresolved:fresh.filter(b=>b.status==='unresolved').length,recommended:recs.length,vetoed:vetoes.length,excluded:exclusions.length};
const decisionHashes=Object.fromEntries(assessmentFiles.map(f=>[dir+f,sha(assessmentTexts.get(f))]));
const compiled={audit:{...manifest,previous:baseline.compiled,decisionHashes,...counts,exception:'User requested documentation-only treatment of previously covered works. Existing assessments, scores and status are unchanged; new source IDs are retained.'},sourceBooks:fresh,currentBooks,exclusions};
function details(b,relative=true){
 let s=`<a id="${b.id}"></a>\n### ${b.title} — ${b.author}\n\n**${b.status}; ${b.eligibilityConfidence} eligibility confidence.** ${b.eligibility} ${b.reason}\n\nSources: ${b.sources.join(', ')}.\n\n| Gate | Finding |\n|---|---|\n`+gates.map(g=>`| ${g} | ${cell(b.gateReview[g])} |`).join('\n')+'\n\n';
 s+=b.evidence.map((u,i)=>link('Evidence '+(i+1),relative?local(u):u)).join('; ')+'.\n\n';
 if(!['recommended','vetoed'].includes(b.status))return s+'No score assigned.\n\n';
 s+='| Criterion | Linear attainment | Contribution | Basis |\n|---|---:|---:|---|\n'+REGISTRY.slice(0,10).map((r,i)=>`| ${r.name} | ${f(b.raw[i])}/${r.max} | ${f(b.points[i])} | ${cell(b.notes[i])} |`).join('\n')+'\n\n';
 s+=`| Deduction | Points | Basis |\n|---|---:|---|\n| T11 | ${f(b.T11)} | ${cell(b.themeNote)} |\n| T12 | ${f(b.T12)} | Applied independently; ${cell(b.themeNote)} |\n| H13 | ${f(b.deductions.H13)} | Period end ${b.periodEnd??'none'}; ${b.periodConfidence}. ${cell(b.periodNote)} |\n| P14 | ${f(b.deductions.P14)} | Original year ${b.year}; ${b.yearConfidence}. ${cell(b.yearNote)} |\n| O15 | ${f(b.deductions.O15)} | ${b.amazon.count===null?'Unknown; zero-deduction fallback':b.amazon.count+' ratings'}. ${cell(b.amazon.status)} |\n\n`;
 s+=`**${f(b.total)} — ${b.status==='vetoed'?'counterfactual; '+b.veto+' ('+b.vetoConfidence+')':b.verdict}.** Score confidence ${b.confidence}. Positive subtotal ${f(b.positive)}.\n\nReader snapshot: ${b.reader||'Unavailable'}. ${link('Purchase locator',b.purchaseUrl)}. ${b.purchaseFormat||'Format not verified.'}\n\n`;
 if(b.amazon.url)s+=`Amazon: ${link(b.amazon.marketplace||'product',b.amazon.url)}; ${b.amazon.asin||b.amazon.productIdentifier||'see URL'}; retrieved ${b.amazon.retrievedAt||b.amazon.attemptedAt}. ${cell(b.amazon.status)}\n\n`;
 if(b.amazon.count===null)s+=`Amazon attempts (${b.amazon.attemptedAt||manifest.date}): ${b.amazon.attempts.map(a=>typeof a==='string'?link('Attempt',relative?local(a):a):cell(JSON.stringify(a))).join('; ')}.\n\n`;
 return s;
}
const outputs=new Map();
for(const source of manifest.sources){
 const mentioned=fresh.filter(b=>b.sources.includes(source.id)),scored=mentioned.filter(b=>b.status==='recommended').sort(rank),skipped=skips.filter(b=>b.sources.includes(source.id));
 let s=`# ${source.label||source.slug} — Books Guru source review\n\n${manifest.date}, Europe/Warsaw. Source ${source.id}: ${link('submitted page',source.url)}.\n\n`;
 s+=`The user requested that previously covered titles and duplicates be documented without deeper reassessment. Only unique new titles receive the full current gate and score assessment. Existing scores and status are retained; this source is appended as provenance, not independent evidence of quality.\n\nCapture: ${source.capturedCount??'see capture audit'} cards; advertised ${source.advertisedCount??'not stated'}. ${source.completenessBasis||'See the saved source inventory and capture audit for pagination and auxiliary mentions.'} Source descriptions and rating figures are third-party claims; mismatched descriptions were observed. New-book evidence is checked separately.\n\n`;
 s+='## New eligible works, ranked\n\n| Score · verdict | Reader snapshot | Author | Original year | Title |\n|---:|---|---|---:|---|\n'+scored.map(b=>`| ${f(b.total)} · ${b.verdict} | ${cell(b.reader||'Unavailable')} | ${cell(b.author)} | ${b.year} | ${link(b.title,b.purchaseUrl)} · ${link('assessment','#'+b.id)} |`).join('\n')+'\n\n';
 if(!scored.length)s+='No new eligible work in this source.\n\n';
 s+='## Previously covered — documented, not reassessed\n\n| Source title | Author | Current or prior status | Prior record |\n|---|---|---|---|\n'+skipped.map(b=>{
  const old=oldById.get(b.priorId),ref=old?.reviewAnchor||old?.analysis||b.priorRefs?.[0];
  const titles=unique(b.occurrences.filter(o=>o.sourceId===source.id).map(o=>o.title));
  return `| ${cell(titles.join('; ')||b.title)} | ${cell(b.author)} | ${cell(old?.status||b.priorStatus||'Previously covered')} | ${ref?link('Prior assessment',local(ref)):'See identity match audit'} |`;
 }).join('\n')+'\n\n';
 s+='## New-title decisions and evidence\n\n'+mentioned.sort((a,b)=>a.title.localeCompare(b.title,'en')).map(b=>details(b)).join('\n');
 outputs.set(source.analysis,s);
}
const oldRows=new Map(baseline.files['RECOMMENDED_BOOKS.md'].text.split(/\r?\n/).filter(l=>/^\| \d{4}-/.test(l)).map(l=>{const c=l.split('|').slice(1,-1).map(x=>x.trim());return [key({title:c[3].match(/^\[([^\]]+)\]/)?.[1]||c[3],author:c[2]}),l];}));
const recommended='| Entry date | First publication year | Author | Title | Score / 100 | Source |\n|---|---|---|---|---:|---:|\n'+recs.map(b=>{
 const old=oldRows.get(key(b));if(old){const cells=old.split('|');cells[6]=' '+b.sources.join(', ')+' ';return cells.join('|');}
 return `| ${b.entryDate} | ${b.year} | ${cell(b.author)} | ${b.titleCell} | ${f(b.total)} | ${b.sources.join(', ')} |`;
}).join('\n')+'\n';
let vetoText=baseline.files['VETOED_BOOKS.md'].text;
// Preserve old explanations and score cells; update the current provenance and sorted index.
const oldVetoRows=new Map(vetoText.split(/\r?\n/).filter(l=>/^\| \d{4}-/.test(l)).map(l=>[l.split('|')[4].match(/#([^)]*)\)/)?.[1],l]));
const vetoRows=vetoes.map(b=>{
 const old=oldVetoRows.get(b.id);if(old){const c=old.split('|');c[8]=' '+b.sources.join(', ')+' ';return c.join('|');}
 return `| ${b.entryDate} | ${b.year} | ${cell(b.author)} | ${link(b.title,b.reviewAnchor)} | **${f(b.total)}** | ${b.veto} | ${b.vetoConfidence} | ${b.sources.join(', ')} |`;
});
vetoText=vetoText.replace(/(?:^\| \d{4}-[^\n]*\r?\n)+/m,vetoRows.join('\n')+'\n');
const vetoById=new Map(vetoes.map(b=>[b.id,b]));
vetoText=vetoText.replace(/(\[Complete assessment and evidence\]\([^#\n]+#([^)]+)\)\. Sources: )[^.\n]*\./g,(match,prefix,id)=>vetoById.has(id)?prefix+vetoById.get(id).sources.join(', ')+'.':match);
vetoText=vetoText.replace('## Counterfactual breakdowns and reasons','## Counterfactual breakdowns and reasons\n\nThe following retained assessments are unchanged. Full assessments for new works appear under Books Guru additions below. Source lists include the new provenance.');
vetoText=vetoText.replace(/\*\*\d+ unique source works\*\*/,'**'+vetoes.length+' unique source works**');
const newVetoes=fresh.filter(b=>b.status==='vetoed').sort(rank);
if(newVetoes.length)vetoText+='\n## Books Guru additions\n\n'+newVetoes.map(b=>details(b,false)).join('\n');
vetoText=vetoText.replace(/^Updated .*$/m,`Updated **${manifest.date}, Europe/Warsaw**. **${vetoes.length} unique source works**. The prior ${link('V4/V5 review','analysis/analysis_vetogates_261021_0047.md')} remains the gate assessment for existing entries. ${link('Books Guru batch',dir+'REPORT.md')} adds new-title decisions and source provenance. Counterfactual scores suspend only the veto gate and retain identified flaws.`);
const excludedText='# Excluded books\n\nHard-excluded source books. '+link('Latest source batch',dir+'REPORT.md')+'. One alphabetized entry per work; no scores.\n\n'+exclusions.map(b=>b.line).join('\n')+'\n';
const sourcesText=baseline.files['SOURCES.md'].text.trimEnd()+'\n'+manifest.sources.map(s=>`| ${s.id} | ${manifest.date} | ${link(s.label||'Books Guru: '+s.slug,s.url)} | ${link('Source analysis',s.analysis)} |`).join('\n')+'\n';
const enrichment=json('site/enrichment.json');for(const b of fresh.filter(b=>b.status==='recommended'&&b.enrichment)){const e=structuredClone(b.enrichment);if(e.research)e.research.unknownDomains=DOMAIN_IDS.filter(id=>!Object.hasOwn(e.domains||{},id));enrichment.books[b.id]=e;}
const extras=recs.map(b=>enrichment.books[b.id]||{}),editions=extras.flatMap(e=>e.edition?[e.edition]:[]);
enrichment.summary={updated:manifest.date,scope:'Retained prior evidence plus assessed unique new Books Guru titles.',books:recs.length,pageCounts:editions.length,missingPages:recs.length-editions.length,
 booksWithDomainEvidence:extras.filter(e=>Object.keys(e.domains||{}).length).length,knownDomainValues:sum(extras.map(e=>Object.keys(e.domains||{}).length)),possibleDomainValues:recs.length*DOMAIN_IDS.length,
 completeDomainProfiles:extras.filter(e=>DOMAIN_IDS.every(id=>Object.hasOwn(e.domains||{},id))).length,mechanisms:sum(extras.map(e=>e.connections?.mechanisms?.length||0)),joins:sum(extras.map(e=>e.connections?.joins?.length||0)),completeConnectionReviews:extras.filter(e=>e.connections?.status==='complete').length,
 newAmazonObservations:fresh.filter(b=>b.amazon?.count!==null&&b.amazon?.count!==undefined).length,amazonCountsStillUnavailable:recs.filter(b=>b.amazon?.count===null).length};
let report=`# Books Guru source batch\n\n${manifest.date}, Europe/Warsaw.\n\n${sources.length} submitted lists; ${books.length} unique source works. **${skips.length} previously covered works documented without reassessment; ${fresh.length} unique new works assessed.** ${counts.newRecommended} new recommendations, ${counts.newVetoed} new vetoes, ${counts.newExcluded} hard exclusions, ${counts.nonbook} non-book references, ${counts.unresolved} unresolved identities. Current catalog: **${recs.length} recommended, ${vetoes.length} vetoed, ${exclusions.length} excluded**.\n\n`;
report+='The explicit user instruction overrides the normal repeat-source reassessment policy for this batch. Old quality vectors, deductions, evidence and eligibility are unchanged. Distinct new source IDs are attached to matching existing works. Repeated expert-list appearances are not independent endorsements. The source aggregator has observed mismatched descriptions; displayed ratings are not promoted to verified Amazon observations. Capture and identity artifacts retain provenance and uncertainty.\n\n';
report+='The [collection audit](collection-report.md), [frozen source inventory](inventory.json) and [previously covered works](published-skips.json) document capture and identity decisions. Each source review below lists its skipped titles and gives complete assessments for its new works.\n\n';
report+='## Source coverage\n\n| Source | List | Cards captured / advertised | Analysis |\n|---:|---|---:|---|\n'+manifest.sources.map(s=>`| ${s.id} | ${link(s.label||s.slug,s.url)} | ${s.capturedCount??'?'} / ${s.advertisedCount??'?'} | ${link('Review','../../'+s.analysis)} |`).join('\n')+'\n\n';
report+='## New recommendations\n\n| Score | Author | Title | Confidence |\n|---:|---|---|---|\n'+fresh.filter(b=>b.status==='recommended').sort(rank).map(b=>`| ${f(b.total)} | ${cell(b.author)} | ${link(b.title,'../../'+b.reviewAnchor)} | ${b.confidence} |`).join('\n')+'\n\n';
report+=`## Verification and limits\n\nEvery source work is either linked to an existing assessment or has a new decision. All ${Object.keys(baseline.history).length} earlier analyses and the prior compiled catalog are preserved. Existing membership and every old score remain unchanged. Missing metadata stays unknown. Book confidence is recorded separately from software validation. Rules SHA-256: \`${manifest.rulesSha256}\`.\n\nThe table now uses compact widths, right-aligned numeric headings and values, and a separate points label. Default width is 1954 pixels rather than 2628 pixels; horizontal scrolling retains every selected column. Phone rows keep their labelled values.\n`;
const newScored=fresh.filter(b=>['recommended','vetoed'].includes(b.status)),newRecs=fresh.filter(b=>b.status==='recommended');
report+=`\nOf the ${newScored.length} newly scored works, ${newScored.filter(b=>b.amazon.count===null).length} use the recorded unknown-Amazon-count fallback. Edition page counts are recorded for ${newRecs.filter(b=>b.enrichment?.edition).length} of ${newRecs.length} new eligible works. Domain and mechanism records are partial unless explicitly marked complete. These assessments use the cited descriptions, contents, samples, primary texts and reviews; they do not claim a new cover-to-cover reading of every book. See the [validation record](validation.json) for preservation checks and current data coverage.\n`;
for(const [file,value]of [[dir+'compiled.json',compiled],[dir+'audit.json',{...counts,decisionHashes}],[dir+'published-skips.json',skips],['site/enrichment.json',enrichment],['data/catalog.json',{compiled:dir+'compiled.json'}]])outputs.set(file,JSON.stringify(value,null,2)+'\n');
outputs.set(dir+'REPORT.md',report);outputs.set('RECOMMENDED_BOOKS.md',recommended);outputs.set('VETOED_BOOKS.md',vetoText);outputs.set('EXCLUDED_BOOKS.md',excludedText);outputs.set('SOURCES.md',sourcesText);
console.log(JSON.stringify(counts,null,2));
if(process.argv.includes('--write')){
 for(const [file,hash]of Object.entries(decisionHashes))assert.equal(sha(read(file)),hash,file+' changed while preparing publication');
 for(const [file,data]of Object.entries(baseline.files))assert.equal(sha(read(file)),data.sha256,file+' changed since baseline');
 for(const [file,hash]of Object.entries(baseline.history))assert.equal(sha(read(file)),hash,'Historical file changed: '+file);
 for(const [file,text]of outputs)if(file!=='data/catalog.json')fs.writeFileSync(file,text);
 fs.writeFileSync('data/catalog.json',outputs.get('data/catalog.json'));console.log('Published source batch.');
}else{fs.mkdirSync(dir+'staged',{recursive:true});for(const [file,text]of outputs)fs.writeFileSync(dir+'staged/'+file.replaceAll('/','__'),text);console.log('Staged outputs; canonical files unchanged.');}
