import fs from 'node:fs';
import crypto from 'node:crypto';
import assert from 'node:assert/strict';
import {REGISTRY,bonusValues,format} from '../../site/model.mjs';
const dir='data/top500_261024',read=p=>JSON.parse(fs.readFileSync(p)),write=(p,v)=>fs.writeFileSync(p,typeof v==='string'?v:JSON.stringify(v,null,2)+'\n');
const baseline=read(dir+'/baseline.json').compiled,compiled=read(baseline),targets=read(dir+'/targets.json');
const library=read(dir+'/progress.json'),amazon=read(dir+'/amazon.json'),google=read(dir+'/google.json');
const extra=fs.existsSync(dir+'/google-isbn13.json')?read(dir+'/google-isbn13.json'):{books:{}};
const archive=fs.existsSync(dir+'/archive.json')?read(dir+'/archive.json'):{books:{}};
const archiveIsbn=fs.existsSync(dir+'/archive-isbn.json')?read(dir+'/archive-isbn.json'):{books:{},batches:[]};
const editions=read('site/editions.json'),enrichment=read('site/enrichment.json'),references=read('site/reference-pages.json');
const manual={},manualFiles=fs.readdirSync(dir).filter(f=>/^manual(?:-\d+)?\.json$/.test(f)).sort((a,b)=>(+(a.match(/-(\d+)/)?.[1]||0))-(+(b.match(/-(\d+)/)?.[1]||0)));
for(const f of manualFiles)for(const [id,v]of Object.entries(read(dir+'/'+f)))manual[id]={...manual[id],...v,sourceFile:dir+'/'+f};
assert.equal(targets.length,500);
assert(targets.every(b=>library.books[b.id]?.libraryDone));
if(process.argv.includes('--write'))assert(amazon.blocked||targets.every(b=>amazon.books[b.id]?.done),'Paced Amazon review incomplete.');
for(const [p,hash]of Object.entries(read(dir+'/input-hashes.json')))assert.equal(crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex'),hash,'Input changed: '+p);
const now=new Date(),parts=Object.fromEntries(new Intl.DateTimeFormat('en-GB',{timeZone:'Europe/Warsaw',year:'2-digit',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',hourCycle:'h23'}).formatToParts(now).map(x=>[x.type,x.value]));
const report=`analysis/analysis_top500data_${parts.year}${parts.month}${parts.day}_${parts.hour}${parts.minute}.md`,date='20'+parts.year+'-'+parts.month+'-'+parts.day;
const oldRows=fs.readFileSync('RECOMMENDED_BOOKS.md','utf8').split(/\r?\n/).filter(l=>/^\| \d{4}-/.test(l)).map(l=>l.split('|').slice(1,-1).map(x=>x.trim()));
const identity=(a,t)=>a+'|'+t,rows=new Map(oldRows.map(r=>[identity(r[2],r[3].match(/^\[([^\]]+)\]/)[1]),r]));
const series=new Set(['intake-0190','intake-0203','progress-0677','progress-0817','intake-0172','n88837eb597']);
const isbn=value=>{const v=String(value||'').replace(/^ISBN(?:\/ASIN)?:/,'');return /^978\d{10}$/.test(v)?v.slice(3,12):/^\d{9}[\dX]$/.test(v)?v.slice(0,9):null;};
const searches=fs.readdirSync(dir).filter(f=>/^search-(?:ref|toc|ratings)-.*\.json$/.test(f)).map(f=>({file:dir+'/'+f,...read(dir+'/'+f)}));
const changes=[];
for(const target of targets){
 const b=compiled.currentBooks.find(x=>x.id===target.id),l=library.books[b.id],a=amazon.books[b.id]||{},m=manual[b.id]||{},r=rows.get(identity(b.author,b.title));
 const oldLink=r[3].match(/\]\(([^)]+)\)/)[1];
 const x={id:b.id,title:b.title,author:b.author,initialRank:target.rank,before:b.total,oldLink,priorAnalysis:b.reviewAnchor||b.currentReview||b.priorReport,priorScoreReview:b.scoreReview,libraryAttempts:l.attempts,amazonAttempts:a.attempts||[],googleAttempts:[...google.books[b.id]?.attempts||[],...extra.books[b.id]?.attempts||[]],webSearches:searches.filter(s=>s.books?.some(x=>x.id===b.id)).map(s=>s.file)};
 const edition=m.edition||l.edition||a.edition;
 if(!target.edition&&edition&&!series.has(b.id)){
  editions[b.id]={...edition,retrieved:edition.retrieved||date};x.edition=editions[b.id];
 }
 if(m.editionCorrection){
  assert(target.edition);
  if(enrichment.books[b.id]?.edition)enrichment.books[b.id].edition=m.editionCorrection;
  else editions[b.id]=m.editionCorrection;
  x.editionCorrection={before:target.edition,after:m.editionCorrection};
 }
 if((target.reference.pages===null||m.referenceCorrection)&&!series.has(b.id)){
  if(m.referenceCorrection){references[b.id]=m.referenceCorrection;x.referenceCorrection={before:target.reference.pages,after:m.referenceCorrection.pages};}
  else if(m.referenceRecord)references[b.id]=m.referenceRecord;
  else if(m.reference){const q=m.reference;references[b.id]={pages:q.end-q.start+1,confidence:'moderate',ranges:[{start:q.start,end:q.end,label:q.label,evidence:q.evidence,method:'reviewed-catalog-or-contents'}],method:'reviewed-catalog-or-contents',edition:{id:q.id,title:b.title,author:b.author,year:q.year,language:'English'},url:q.url,source:{retrieved:q.retrieved||date,file:m.sourceFile,evidence:q.evidence},sameEditionAsPG:false,limitation:'Documented reference sections only; excludes index. Page and reference editions can differ; ratio is an estimate.'};}
  else if(l.reference)references[b.id]=l.reference;
  else if(google.books[b.id]?.reference)references[b.id]=google.books[b.id].reference;
  else if(extra.books[b.id]?.reference)references[b.id]=extra.books[b.id].reference;
  else if(archive.books[b.id]?.reference)references[b.id]=archive.books[b.id].reference;
  else if(archiveIsbn.books[b.id]?.reference)references[b.id]=archiveIsbn.books[b.id].reference;
  if(references[b.id].pages!==null)x.reference=references[b.id];
 }
 const rating=[m.amazon,a.amazon].filter(Boolean).sort((a,b)=>b.count-a.count||String(b.retrievedAt).localeCompare(String(a.retrievedAt)))[0];
 if(rating&&b.amazon?.count==null&&!series.has(b.id)){
  assert(Number.isInteger(rating.count)&&rating.count>0&&rating.evidence.length&&rating.asin&&rating.sourceSnapshot,'Zero needs separate best-edition verification.');
  b.amazon=rating;
  const deduction=rating.count<10?-20:rating.count<100?-10:rating.count<1000?-5:0;
  if(b.deductions)b.deductions.O15=deduction;if(Object.hasOwn(b,'O15'))b.O15=deduction;
  b.obscurityFallback=false;b.ratingReview={date,analysis:report+'#'+b.id,previousCount:null,previousTotal:x.before};
  if(rating.stars)b.reader=`[Amazon ${rating.stars.toFixed(1)}/5 · ${rating.count} ratings](${rating.url})`;
  x.amazon=rating;
 }
 const product=m.product||a.product,oldId=oldLink.match(/\/(?:dp|product)\/([A-Z0-9]{10})/)?.[1];
 const oldFailed=(a.attempts||[]).some(v=>v.url.endsWith('/'+oldId)&&v.status===404);
 const justified=m.product||!oldId||/^B0/.test(oldId)||oldFailed||/Paperback/i.test(product?.format||'')&&!/Paperback/i.test(b.format||'');
 if(!series.has(b.id)&&product&&product.id!==oldId&&justified){
  b.purchaseUrl='https://www.amazon.de/dp/'+product.id;b.titleCell=`[${b.title}](${b.purchaseUrl})`;b.format=product.format;x.purchaseUrl=b.purchaseUrl;
  x.linkEvidence={...product,oldProduct404InAustralia:oldFailed,limitation:product.limitation||'English print product identity verified. Amazon.de link uses that product identifier; German stock and live endpoint remain unverified after an access challenge. A regional 404 does not prove the old German link was broken.'};
 }
 const e=enrichment.books[b.id]?.edition||editions[b.id],rp=references[b.id];
 if(x.reference)rp.ranges=[...new Map(rp.ranges.map(q=>[q.start+'-'+q.end+'-'+q.label.toLowerCase(),q])).values()];
 if(x.reference&&isbn(e?.id)&&isbn(e.id)===isbn(rp.edition?.id)){
  rp.sameEditionAsPG=true;
  rp.editionMatchEvidence='The total-page and reference records explicitly identify the same ISBN (ISBN-10 and ISBN-13 equivalents normalized).';
  rp.limitation=rp.limitation.replace(/Edition match unconfirmed\./g,'ISBN match confirmed.').replace(/Reference and total-page editions may differ\./g,'ISBN matches the total-page edition.');
 }
 const s=new Set(b.sources).size,v=bonusValues(s,e?.pages??null,rp.pages),ratio=v.RD===null?null:rp.pages/e.pages,matching=!!rp.sameEditionAsPG;
 const assessment={sources:s,pages:e?.pages??null,referencePages:rp.pages,pageEdition:e?.id??null,referenceEdition:rp.edition?.id??null,ratio,sameEdition:matching,confidence:ratio===null?'unknown':matching?'moderate':'low',fallback:v.RD===null,reason:v.RD===null?'R&D input unavailable; explicit zero-point fallback. Counts remain unknown.':`${rp.pages} reference pages / ${e.pages} total pages = ${format(100*ratio)}%; R&D = ${format(v.RD)} points. ${matching?'Edition recorded as matching.':'Estimate: editions differ or matching is unconfirmed.'}${ratio>1?' Inconsistent ratio exceeds one; flagged, not capped.':''}`};
 x.contributions=Object.fromEntries(REGISTRY.slice(0,10).map((q,i)=>[q.id,(b.points||b.contributions)[i]]));
 x.deductions=Object.fromEntries(['T11','T12','H13','P14','O15'].map(k=>[k,b.deductions?.[k]??b[k]]));
 x.bonuses={REL:v.REL??0,RD:v.RD??0};x.assessment=assessment;
 assert.equal(x.bonuses.REL,b.bonuses.REL,'Source coverage changed.');
 x.after=Object.values(x.contributions).reduce((s,v)=>s+v,0)+Object.values(x.deductions).reduce((s,v)=>s+v,0)+x.bonuses.REL+x.bonuses.RD;
 if(x.edition||x.editionCorrection||x.reference||x.amazon){
  b.bonuses=x.bonuses;b.bonusAssessment=assessment;b.total=x.after;b.displayScore=format(b.total);if(Object.hasOwn(b,'unroundedTotal'))b.unroundedTotal=b.total;
  b.verdict=b.total>=85?'Recommend':b.total>=75?'Consider':b.total>=65?'Selective':b.total>=50?'Low priority':'Poor fit';b.scoreReview=report+'#'+b.id;
 }else{assert(Math.abs(x.after-b.total)<1e-9);x.after=b.total;}
 x.remaining={pages:!e,ratings:b.amazon?.count==null,references:rp.pages===null};x.contentConfidence=b.evidenceConfidence||b.confidence||b.scoreConfidence||'unknown';x.verdict=b.verdict;changes.push(x);
 x.archiveLookup=archive.books[b.id]||null;
 x.archiveIsbnLookup=archiveIsbn.books[b.id]||null;
 x.metadataNote=m.reviewNote||null;
}
const current=new Map(compiled.currentBooks.map(b=>[b.id,b])),changedIds=new Set(changes.filter(x=>x.edition||x.editionCorrection||x.reference||x.amazon||x.purchaseUrl).map(x=>x.id));
for(const old of read(baseline).currentBooks)if(!changedIds.has(old.id))assert.deepEqual(current.get(old.id),old,'Unrelated book changed: '+old.id);
const ranked=compiled.currentBooks.filter(b=>b.status==='recommended').sort((a,b)=>b.total-a.total||a.title.localeCompare(b.title));
const ledger='| Entry date | First publication year | Author | Title | Score | Relevance | R&D | Amazon ratings | Pages (edition) | Reference pages | Sources |\n|---|---|---|---|---:|---:|---:|---:|---:|---:|---:|\n'+ranked.map(b=>{
 const r=rows.get(identity(b.author,b.title)),e=enrichment.books[b.id]?.edition||editions[b.id],rp=references[b.id],x=changes.find(x=>x.id===b.id);
 return '| '+[...r.slice(0,3),x?.purchaseUrl?`[${b.title}](${x.purchaseUrl})`:r[3],format(b.total),format(b.bonuses.REL),format(b.bonuses.RD),b.amazon?.count==null?'Unknown':`[${b.amazon.count}](${b.amazon.url})`,e?`[${e.pages}](${e.url})`:'Unknown',rp.pages===null?'Unknown':`[${rp.pages}](${rp.url})`,r[10]].join(' | ')+' |';
}).join('\n')+'\n';
const summary={selected:500,initialRankRange:[targets[0].rank,targets.at(-1).rank],booksEnriched:changedIds.size,pagesAdded:changes.filter(x=>x.edition).length,ratingsAdded:changes.filter(x=>x.amazon).length,referenceCountsAdded:changes.filter(x=>x.reference&&!x.referenceCorrection).length,referenceCountsExpanded:changes.filter(x=>x.referenceCorrection).length,linksCorrected:changes.filter(x=>x.purchaseUrl).length,scoresChanged:changes.filter(x=>Math.abs(x.after-x.before)>1e-9).length,remaining:Object.fromEntries(['pages','ratings','references'].map(k=>[k,changes.filter(x=>x.remaining[k]).length])),report,amazonRequests:changes.reduce((s,x)=>s+x.amazonAttempts.length,0),amazonStop:amazon.blocked||null,libraryStops:library.blocked||{},googleSteps:changes.reduce((s,x)=>s+x.googleAttempts.length,0)};
summary.archiveLookups=Object.keys(archive.books).length;summary.archiveStop=archive.blocked||null;
summary.archiveIsbnBatches=archiveIsbn.batches.length;summary.archiveIsbnStop=archiveIsbn.blocked||null;
summary.amazonBooksAttempted=changes.filter(x=>x.amazonAttempts.length).length;
summary.amazonMissingWithoutDirectAttempt=targets.filter(b=>b.amazon?.count==null&&!amazon.books[b.id]?.attempts?.length).length;
let text='# Metadata review of 500 highest-scoring recommendations with missing data\n\n'+date+', Europe/Warsaw. The cohort was fixed before collection: the first 500 recommended books with at least one missing field, sorted by unrounded repository score and then title. Initial ranks '+summary.initialRankRange.join('–')+'. This is repository quality rank, not Amazon star rank.\n\n';
text+=`| Field | Newly established | Still unknown in cohort |\n|---|---:|---:|\n| Total pages | ${summary.pagesAdded} | ${summary.remaining.pages} |\n| Amazon total ratings | ${summary.ratingsAdded} | ${summary.remaining.ratings} |\n| Reference pages | ${summary.referenceCountsAdded} | ${summary.remaining.references} |\n| Purchase links corrected or moved to verified print identities | ${summary.linksCorrected} | — |\n\n`;
text+=`${summary.booksEnriched} books gained metadata or a corrected product link; ${summary.scoresChanged} scores changed. Each of the 500 has an audit entry below. Library records, publisher pages, numbered contents, public PDFs and Google Books supplied the bibliographic data. Amazon requests were spaced at least 45 seconds apart, with at most three known edition products per initial review. A second pass, if recorded, uses newly verified identifiers. The highest explicit aggregate among identity-verified inspected editions is retained; counts are never added across editions or marketplaces. This is not a claim that every possible edition was found. No zero-rating claim was established. Missing counts, unavailable pages, and zero written-review messages remain unknown.\n\n`;
text+=`${summary.referenceCountsExpanded} existing reference-page count was expanded after additional sections were inspected. Edition metadata corrections are described under the affected books. The early Amazon pass stopped further edition requests at 1,000 ratings. After 256 cohort positions, it stopped at any verified positive aggregate to avoid redundant requests. Unavailable or ambiguous products still received alternative-edition checks, within the three-product limit. No claim is made to have inspected every edition or found the largest aggregate anywhere.\n\n`;
text+=`Access limits: German and US Amazon probes returned challenges and were paused. Amazon Australia supplied the recorded aggregates. Open Library returned a 503 and was paused: later entries can record skipped lookups, not successful live checks. Cached records remain usable. There were ${summary.amazonRequests} recorded Amazon product attempts and ${summary.googleSteps} Google Books steps. Exact requests, dates, snapshots, failures and skipped reasons are retained in [review.json](../${dir}/review.json), [library progress](../${dir}/progress.json), [Amazon progress](../${dir}/amazon.json) and Google review files.\n\n`;
if(amazon.blocked)text+=`Amazon Australia subsequently returned an access challenge at ${amazon.blocked.retrieved}, and collection stopped. Direct Amazon attempts covered ${summary.amazonBooksAttempted} works. Of the original missing-rating cohort, ${summary.amazonMissingWithoutDirectAttempt} works received no new direct Amazon request because of the stop, ambiguous series scope, or lack of a usable product identifier. These are not successful rating checks. Alternative catalog and search evidence was retained. Newly identified paperback links can remain untested; each such case is labelled below.\n\n`;
text+='Scoring: content criteria, density estimates, thematic and age deductions, source membership and eligibility decisions are preserved. O15 is recalculated from one verified Amazon aggregate. R&D is recalculated as `20 × reference_pages / total_pages`, using documented counts with no edition-match requirement. Unknown inputs contribute zero. Relevance is unchanged. Totals are rebuilt from the ten original contributions, all five deductions and both bonuses, so neither bonus is added twice. Full revised breakdowns appear for books with new scored metadata. Unmatched or cross-edition R&D ratios have low confidence; underlying catalog/contents counts usually have moderate confidence and inspected PDF ranges high confidence. Reference counts are counts of documented pages, not citations; unlisted sections can remain uncounted.\n\n';
text+='Unresolved identity cases: a single volume cannot supply a full-series page or rating count. History of Programming Languages and What’s Happening in the Mathematical Sciences retain unknown lengths because the nominated scope is not specific enough. What Are Numbers? retains unknown length: the source identity needs reconciliation with the technical-course work associated with Kirillov. This metadata pass does not silently change its eligibility. A Singular Mathematical Promenade has distributed marginal references in the inspected draft; no defensible bounded reference-page total was established.\n\n';
text+=`An additional Internet Archive public-catalog pass made ${summary.archiveLookups} paced title-and-author lookups, at least ten seconds apart. Its documented reference ranges, exact query responses and any access limit are saved in [archive.json](../${dir}/archive.json). No reference total is inferred merely from a statement that a book includes references.\n\n`;
text+=`A further ${summary.archiveIsbnBatches} paced ISBN query batches checked unresolved works using known edition identifiers. Responses and matched records are saved in [archive-isbn.json](../${dir}/archive-isbn.json). Each batch contains at most ten works; product and author identities are checked before accepting a reference range.\n\n`;
for(const x of changes){
 const b=current.get(x.id),e=enrichment.books[b.id]?.edition||editions[b.id],rp=references[b.id];
 const prior=x.priorAnalysis||'',priorPath=prior.startsWith('analysis/')?prior:'analysis/'+prior;
 text+=`\n<a id="${b.id}"></a>\n## ${b.title} — ${b.author}\n\nInitial rank ${x.initialRank}. Sources: ${b.sources.join(', ')}. [Prior content assessment](../${priorPath}). ${x.priorScoreReview?'[Prior score calculation](../'+x.priorScoreReview+').':''}\n\n`;
 text+=e?`Total pages: [${e.pages}](${e.url}); ${e.id}; ${e.format}; ${e.language}; ${e.year}. Confidence: ${e.confidence||'moderate'}. ${x.edition?'New count. '+(e.notes||''):'Existing count retained.'}\n\n`:'Total pages: unknown; no unambiguous supported edition extent established.\n\n';
 text+=rp.pages===null?'Reference pages: unknown; no sufficiently identified and bounded section established.\n\n':`Reference pages: [${rp.pages}](${rp.url}); edition ${rp.edition.id}; ${rp.ranges.map(q=>q.label+' '+q.start+'–'+q.end).join('; ')}. Confidence: ${rp.confidence}. ${x.reference?'New count.':'Existing count retained.'} ${rp.limitation||''}\n\n`;
 text+=b.amazon?.count==null?'Amazon ratings: unknown; O15=0 fallback. '+(series.has(b.id)?'Individual-volume aggregates are not used for the nominated series.':'No explicit identity-verified total-rating aggregate was established in the available evidence.')+'\n\n':`Amazon ratings: [${b.amazon.count}](${b.amazon.url}); ${b.amazon.marketplace}; product ${b.amazon.asin||b.amazon.productIdentifier||'unspecified'}; retrieved ${b.amazon.retrievedAt||b.amazon.verifiedAt||b.amazon.retrieved||'previous snapshot'}. ${x.amazon?'Newly established count from a saved snapshot; confidence '+b.amazon.confidence+'.':'Existing verified snapshot retained.'}\n\n`;
 if(x.referenceCorrection)text+=`Reference coverage expanded: ${x.referenceCorrection.before} → ${x.referenceCorrection.after} pages after direct inspection of additional note sections.\n\n`;
 if(x.editionCorrection)text+=`Edition correction: ${x.editionCorrection.after.notes} [Evidence](${x.editionCorrection.after.url}). Original production year used for P14 is unchanged.\n\n`;
 if(x.amazon?.identityVerification)text+=`Identity evidence: [bibliographic record](${x.amazon.identityVerification.url}). ${x.amazon.identityVerification.reason}\n\n`;
 if(x.metadataNote)text+=`Metadata qualification: ${x.metadataNote}\n\n`;
 if(x.purchaseUrl)text+=`Purchase link: [updated product](${x.purchaseUrl}); previously ${x.oldLink}. [Product evidence](${x.linkEvidence.url}). ${x.linkEvidence.limitation}\n\n`;
 text+=`R&D: ${x.assessment.reason} Page edition: ${x.assessment.pageEdition||'unknown'}; reference edition: ${x.assessment.referenceEdition||'unknown'}. Ratio confidence: ${x.assessment.confidence}.\n\n`;
 if(x.edition||x.editionCorrection||x.reference||x.amazon){
  text+='| Criterion | Raw attainment | Contribution |\n|---|---:|---:|\n'+REGISTRY.slice(0,10).map((q,i)=>`| ${q.name} | ${format(b.raw[i])} | ${format((b.points||b.contributions)[i])} |`).join('\n')+'\n\n';
  text+=Object.entries(x.deductions).map(([k,v])=>k+' '+format(v)).join('; ')+`; REL ${format(x.bonuses.REL)}; RD ${format(x.bonuses.RD)}. Score **${format(x.before)} → ${format(x.after)}**. Verdict: ${b.verdict}. Content confidence retained: ${x.contentConfidence}. Change is due only to documented metadata and its prescribed formula effects.\n\n`;
 }else text+=`Score retained: **${format(b.total)}**. Verdict: ${b.verdict}. Content confidence: ${x.contentConfidence}.\n\n`;
 text+=`Audit: ${x.libraryAttempts.length} library steps (including cached/skipped steps); ${x.googleAttempts.length} Google Books steps; ${x.webSearches.length} saved search batches; ${x.amazonAttempts.length} new Amazon attempts. ${x.archiveLookup?'Internet Archive catalog lookup recorded; HTTP '+(x.archiveLookup.status||'unavailable')+'.':''}\n`;
}
compiled.audit={...compiled.audit,previous:baseline,top500MetadataReview:report};
write(dir+'/candidate-editions.json',editions);write(dir+'/candidate-enrichment.json',enrichment);write(dir+'/candidate-reference-pages.json',references);write(dir+'/compiled.json',compiled);write(dir+'/review.json',changes);write(dir+'/summary.json',summary);write(dir+'/analysis.md',text);write(dir+'/candidate-recommended.md',ledger);
if(process.argv.includes('--write')){assert(!fs.existsSync(report));write(report,text);write('RECOMMENDED_BOOKS.md',ledger);write('site/editions.json',editions);write('site/enrichment.json',enrichment);write('site/reference-pages.json',references);write('data/catalog.json',{compiled:dir+'/compiled.json'});}
console.log(summary);
