import fs from 'node:fs';
import crypto from 'node:crypto';
import assert from 'node:assert/strict';
import {REGISTRY,format} from '../../site/model.mjs';
const dir='data/top250_261023',read=p=>JSON.parse(fs.readFileSync(p)),write=(p,v)=>fs.writeFileSync(p,typeof v==='string'?v:JSON.stringify(v,null,2)+'\n');
const baseline=read(dir+'/baseline.json').compiled,compiled=read(baseline),targets=read(dir+'/targets.json'),library=read(dir+'/progress.json'),amazon=read(dir+'/amazon.json');
const editions=read('site/editions.json'),enrichment=read('site/enrichment.json'),references=read('site/reference-pages.json');
const google=read(dir+'/google.json');
const googleMore=fs.existsSync(dir+'/google-more.json')?read(dir+'/google-more.json'):{books:{}};
const googleFinal=fs.existsSync(dir+'/google-final.json')?read(dir+'/google-final.json'):{books:{}};
const googleISBN13=fs.existsSync(dir+'/google-isbn13.json')?read(dir+'/google-isbn13.json'):{books:{}};
const unresolved=read(dir+'/unresolved.json');
assert.equal(targets.length,250);
assert(targets.every(b=>library.books[b.id]?.libraryDone),'Finish the 250 library reviews first.');
assert(!process.argv.includes('--write')&&process.argv.includes('--partial')||amazon.blocked||targets.every(b=>amazon.books[b.id]?.done),'Finish the paced Amazon review first.');
assert(google.blocked>=2||targets.every(b=>google.books[b.id]),'Finish the Google Books review first.');
for(const [p,hash]of Object.entries(read(dir+'/input-hashes.json')))assert.equal(crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex'),hash,'Input changed: '+p);
const manualFiles=fs.readdirSync(dir).filter(f=>/^manual(?:-\d+)?\.json$/.test(f));
const searches=fs.readdirSync(dir).filter(f=>/^search-(?:ref|toc)-/.test(f)).map(f=>({file:dir+'/'+f,...read(dir+'/'+f)}));
const manual={};
for(const f of manualFiles)for(const [id,v]of Object.entries(read(dir+'/'+f)))manual[id]={...manual[id],...v,sourceFile:dir+'/'+f};
const now=new Date(),parts=Object.fromEntries(new Intl.DateTimeFormat('en-GB',{timeZone:'Europe/Warsaw',year:'2-digit',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',hourCycle:'h23'}).formatToParts(now).map(x=>[x.type,x.value]));
const stamp=parts.year+parts.month+parts.day+'_'+parts.hour+parts.minute,report='analysis/analysis_top250data_'+stamp+'.md';
const oldRows=fs.readFileSync('RECOMMENDED_BOOKS.md','utf8').split(/\r?\n/).filter(l=>/^\| \d{4}-/.test(l)).map(l=>l.split('|').slice(1,-1).map(x=>x.trim()));
const identity=(a,t)=>a+'|'+t,rows=new Map(oldRows.map(r=>[identity(r[2],r[3].match(/^\[([^\]]+)\]/)[1]),r]));
const changes=[];
const seriesWithoutAggregate=new Set(['intake-0190','intake-0203','progress-0677','progress-0817']);
for(const target of targets){
 const b=compiled.currentBooks.find(x=>x.id===target.id),l=library.books[b.id],a=amazon.books[b.id]||{},m=manual[b.id]||{};
 const before=b.total,oldLink=rows.get(identity(b.author,b.title))[3].match(/\]\(([^)]+)\)/)[1];
 const change={id:b.id,title:b.title,author:b.author,before,oldLink,libraryAttempts:l.attempts,amazonAttempts:a.attempts||[],webSearches:searches.filter(s=>s.books.some(x=>x.id===b.id)).map(s=>s.file)};
 change.unresolved=unresolved[b.id]||null;
 const edition=m.edition||l.edition||a.edition;
 if(!target.edition&&edition){editions[b.id]=edition;change.edition=edition;}
 if(m.editionCorrection){assert(target.edition);assert(!enrichment.books[b.id]?.edition,'Explicit enrichment correction needed.');editions[b.id]=m.editionCorrection;change.editionCorrection={before:target.edition,after:m.editionCorrection};}
 if(target.reference.pages===null){
  if(m.reference){const r=m.reference;references[b.id]={pages:r.end-r.start+1,confidence:'moderate',ranges:[{start:r.start,end:r.end,label:r.label,evidence:r.evidence,method:'reviewed-catalog-or-contents'}],method:'reviewed-catalog-or-contents',edition:{id:r.id,title:b.title,author:b.author,year:r.year,language:'English'},url:r.url,source:{retrieved:r.retrieved||new Intl.DateTimeFormat('en-CA',{timeZone:'Europe/Warsaw'}).format(fs.statSync(m.sourceFile).birthtime),file:m.sourceFile,evidence:r.evidence},sameEditionAsPG:false,limitation:'Count covers the named reference sections only; excludes the index. Contents boundaries can include a final blank page. Edition may differ from the page-count edition.'};}
  else if(m.referenceRecord)references[b.id]=m.referenceRecord;
  else if(l.reference)references[b.id]=l.reference;
  else if(google.books[b.id]?.reference)references[b.id]=google.books[b.id].reference;
  else if(googleMore.books[b.id]?.reference)references[b.id]=googleMore.books[b.id].reference;
  else if(googleFinal.books[b.id]?.reference)references[b.id]=googleFinal.books[b.id].reference;
  else if(googleISBN13.books[b.id]?.reference)references[b.id]=googleISBN13.books[b.id].reference;
  if(references[b.id].pages!==null)change.reference=references[b.id];
 }
 if(a.amazon&&b.amazon?.count==null&&!seriesWithoutAggregate.has(b.id)){
  const v=a.amazon;assert(Number.isInteger(v.count)&&v.count>=0&&v.evidence.length&&v.asin&&v.sourceSnapshot);
  b.amazon=v;const deduction=v.count<10?-20:v.count<100?-10:v.count<1000?-5:0;
  const priorDeduction=b.deductions?.O15 ?? b.O15; assert(Number.isFinite(priorDeduction)); if(b.deductions)b.deductions.O15=deduction;if(Object.hasOwn(b,'O15'))b.O15=deduction;
  b.total=before-priorDeduction+deduction;b.displayScore=format(b.total);b.obscurityFallback=false;
  b.verdict=b.total>=85?'Recommend':b.total>=75?'Consider':b.total>=65?'Selective':b.total>=50?'Low priority':'Poor fit';
  b.ratingReview={date:new Intl.DateTimeFormat('en-CA',{timeZone:'Europe/Warsaw'}).format(now),analysis:report+'#'+b.id,previousCount:null,previousTotal:before};
  if(v.stars)b.reader=`[Amazon ${v.stars.toFixed(1)}/5 · ${v.count} ratings](${v.url})`;
  change.amazon=v;
 }
 const oldId=oldLink.match(/\/(?:dp|product)\/([A-Z0-9]{10})/)?.[1];
 const product=m.product||a.product;
 const justifiedLinkChange=m.product||!oldId||/^B0/.test(oldId)||/Paperback/i.test(product?.format||'')&&!/Paperback/i.test(b.format||'');
 if(product&&product.id!==oldId&&justifiedLinkChange){
  const url='https://www.amazon.de/dp/'+product.id;
  b.purchaseUrl=url;b.titleCell=`[${b.title}](${url})`;b.format=product.format;change.purchaseUrl=url;
  change.linkEvidence={...product,limitation:product.limitation||'English print product identity verified on Amazon Australia. German and US endpoints returned access checks; regional stock and availability are unverified.'};
 }
 change.after=b.total;change.remaining={pages:!(enrichment.books[b.id]?.edition||editions[b.id]),ratings:b.amazon?.count==null,references:references[b.id].pages===null};
 changes.push(change);
}
const current=new Map(compiled.currentBooks.map(b=>[b.id,b]));
const recommended=compiled.currentBooks.filter(b=>b.status==='recommended').sort((a,b)=>b.total-a.total||a.title.localeCompare(b.title));
const ledger='| Entry date | First publication year | Author | Title | Score / 100 | Amazon ratings | Pages (edition) | Reference pages | Sources |\n|---|---|---|---|---:|---:|---:|---:|---:|\n'+recommended.map(b=>{
 const r=rows.get(identity(b.author,b.title)),e=enrichment.books[b.id]?.edition||editions[b.id],rp=references[b.id],change=changes.find(x=>x.id===b.id);
 return '| '+[r[0],r[1],r[2],change?.purchaseUrl?`[${b.title}](${change.purchaseUrl})`:r[3],format(b.total),b.amazon?.count==null?'Unknown':`[${b.amazon.count}](${b.amazon.url})`,e?`[${e.pages}](${e.url})`:'Unknown',rp.pages===null?'Unknown':`[${rp.pages}](${rp.url})`,r[5]].join(' | ')+' |';
}).join('\n')+'\n';
const summary={selected:250,pagesAdded:changes.filter(x=>x.edition).length,pagesCorrected:changes.filter(x=>x.editionCorrection).length,ratingsAdded:changes.filter(x=>x.amazon).length,referenceCountsAdded:changes.filter(x=>x.reference).length,linksCorrected:changes.filter(x=>x.purchaseUrl).length,remaining:Object.fromEntries(['pages','ratings','references'].map(k=>[k,changes.filter(x=>x.remaining[k]).length])),report,amazonStop:amazon.blocked||null};
let text='# Metadata review of 250 highest-scoring recommendations with gaps\n\nSelected before this review by unrounded repository score, then title. A gap means an unknown edition length, Amazon aggregate, or reference-page extent. This is a fixed 250-book cohort; new O15 deductions can change its ranks.\n\n'+`| Field | Added or corrected | Still unknown in cohort |\n|---|---:|---:|\n| Pages | ${summary.pagesAdded} added; ${summary.pagesCorrected} corrected | ${summary.remaining.pages} |\n| Amazon ratings | ${summary.ratingsAdded} | ${summary.remaining.ratings} |\n| Reference pages | ${summary.referenceCountsAdded} | ${summary.remaining.references} |\n| Purchase links | ${summary.linksCorrected} | — |`+'\n\nLibrary requests were cached and spaced at least 1.5 seconds apart. Amazon Australia requests were spaced at least 20 seconds apart. German and US product probes returned access challenges and were not retried. Amazon counts identify one product and one marketplace; they are dated snapshots. Unknown counts retain O15=0. Content assessments, eligibility decisions, original years and other deductions are preserved. Reference counts cover documented notes or bibliography ranges, exclude the index, and can use a different edition from total pages. Confidence: high for directly verified Amazon aggregates, with any identity conflict stated per book; moderate for catalog and contents-derived counts. Three pre-existing wrong-work page records are corrected: Famine, The Wheel, and Science and Civilisation in China Volume 4, Part 2. The edition audit is saved in data/top250_261023/edition-audit-reviewed.json.\n\n';
for(const x of changes){const b=current.get(x.id),e=enrichment.books[b.id]?.edition||editions[b.id],rp=references[b.id];
 const prior=b.reviewAnchor||b.currentReview||b.priorReport;
 const priorPath=fs.existsSync(prior.split('#')[0])?prior:'analysis/'+prior;
 text+=`\n<a id="${b.id}"></a>\n## ${b.title} — ${b.author}\n\nSources: ${b.sources.join(', ')}. [Prior assessment](../${priorPath}).\n\n`;
 text+=e?`Pages: [${e.pages}](${e.url}); ${e.id}; ${e.format}; ${e.language}; ${e.year}; confidence ${e.confidence||'moderate'}. ${x.editionCorrection?'Corrected wrong-work record. '+(e.notes||''):x.edition?'New count. '+(e.notes||''):'Existing count retained.'}\n\n`:'Pages: unknown after edition and title searches. '+(x.unresolved?.pages||'')+'\n\n';
 text+=rp.pages===null?'Reference pages: unknown. No bounded notes or bibliography range established; an unpaginated statement that references exist is insufficient.\n\n':`Reference pages: [${rp.pages}](${rp.url}); ${rp.edition.id}; ${rp.ranges.map(r=>r.label+' '+r.start+'–'+r.end).join('; ')}; confidence ${rp.confidence}. ${x.reference?'New count.':'Existing count retained.'} ${rp.limitation||''}\n\n`;
 text+=b.amazon?.count==null?(seriesWithoutAggregate.has(b.id)?'Amazon total ratings: unknown; O15=0 fallback. No verified aggregate for the full nominated series was established. Individual-volume counts are not used for the full series.\n\n':'Amazon total ratings: unknown; O15=0 fallback. No identity-verified, explicitly labelled total-rating aggregate established in the saved attempts.\n\n'):`Amazon total ratings: [${b.amazon.count}](${b.amazon.url}); ${b.amazon.marketplace}; product ${b.amazon.asin||b.amazon.productIdentifier||''}; retrieved ${b.amazon.verifiedAt||b.amazon.retrievedAt||b.amazon.retrieved||''}. ${x.amazon?'New verified snapshot; confidence '+b.amazon.confidence+'.':'Existing snapshot retained.'}\n\n`;
 if(x.amazon?.identityVerification)text+=`Identity check: [edition evidence](${x.amazon.identityVerification.url}). ${x.amazon.identityVerification.reason}\n\n`;
 if(x.purchaseUrl)text+=`Purchase link: [corrected print product](${x.purchaseUrl}), previously ${x.oldLink}. [Product evidence](${x.linkEvidence.url}). ${x.linkEvidence.limitation}\n\n`;
 if(x.amazon)text+='| Criterion | Raw attainment | Contribution |\n|---|---:|---:|\n'+REGISTRY.slice(0,10).map((r,i)=>`| ${r.name} | ${format(b.raw[i])} | ${format((b.points||b.contributions)[i])} |`).join('\n')+'\n\n'+Object.entries(b.deductions||Object.fromEntries(['T11','T12','H13','P14','O15'].map(k=>[k,b[k]]))).map(([k,v])=>k+' '+format(v)).join('; ')+`. Total ${format(x.before)} → **${format(x.after)}**. Verdict: ${b.verdict}. Content confidence retained: ${b.evidenceConfidence||b.confidence||'unknown'}.\n\n`;
 text+=`Audit: ${x.libraryAttempts.length} library steps; Google Books review; ${x.webSearches.length} saved reference/contents search batches; ${x.amazonAttempts.length} new Amazon product attempts. Full requests, snapshots, and per-field outcomes: [review.json](../data/top250_261023/review.json).\n`;
}
compiled.audit={...compiled.audit,previous:baseline,top250MetadataReview:report};
write(dir+'/candidate-editions.json',editions);write(dir+'/candidate-reference-pages.json',references);write(dir+'/compiled.json',compiled);write(dir+'/review.json',changes);write(dir+'/summary.json',summary);write(dir+'/analysis.md',text);write(dir+'/candidate-recommended.md',ledger);
if(process.argv.includes('--write')){assert(!fs.existsSync(report));write(report,text);write('RECOMMENDED_BOOKS.md',ledger);write('site/editions.json',editions);write('site/reference-pages.json',references);write('data/catalog.json',{compiled:dir+'/compiled.json'});}
console.log(summary);
