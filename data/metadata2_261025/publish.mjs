import fs from 'node:fs';
import crypto from 'node:crypto';
import zlib from 'node:zlib';
import assert from 'node:assert/strict';
import {bonusValues,format,REGISTRY} from '../../site/model.mjs';
const dir='data/metadata2_261025',read=p=>JSON.parse(fs.readFileSync(p)),write=(p,v)=>fs.writeFileSync(p,typeof v==='string'?v:JSON.stringify(v,null,2)+'\n');
const baseline=read(dir+'/baseline.json').compiled,compiled=read(baseline),targets=read(dir+'/targets.json');
const editions=read('site/editions.json'),enrichment=read('site/enrichment.json'),references=read('site/reference-pages.json');
const states=Object.fromEntries(['manual','extra','library','archive','cinii','harvard','hathi','google','search-pages','google-html','cached-amazon','amazon'].map(k=>[k,fs.existsSync(dir+'/'+k+'.json')?read(dir+'/'+k+'.json'):{}]));
const hashes=read(dir+'/input-hashes.json');for(const [p,h]of Object.entries(hashes))assert.equal(crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex'),h,'Input changed: '+p);
const parts=Object.fromEntries(new Intl.DateTimeFormat('en-GB',{timeZone:'Europe/Warsaw',year:'2-digit',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',hourCycle:'h23'}).formatToParts(new Date()).map(x=>[x.type,x.value]));
const report=`analysis/analysis_metadata2_${parts.year}${parts.month}${parts.day}_${parts.hour}${parts.minute}.md`,date=`20${parts.year}-${parts.month}-${parts.day}`;
const oldRows=fs.readFileSync('RECOMMENDED_BOOKS.md','utf8').split(/\r?\n/).filter(l=>/^\| \d{4}-/.test(l)).map(l=>l.split('|').slice(1,-1).map(x=>x.trim()));
const rows=new Map(oldRows.map(r=>[r[2]+'|'+r[3].match(/^\[([^\]]+)\]/)[1],r]));
const byId=new Map(compiled.currentBooks.map(b=>[b.id,b])),changes=[];
const isbn10=v=>{let s=String(v||'').replace(/^ISBN(?:\/ASIN)?:/,'');if(/^978\d{10}$/.test(s)){if([...s].reduce((a,c,i)=>a+(i%2?3:1)*+c,0)%10)return null;const p=s.slice(3,12),n=(11-[...p].reduce((a,c,i)=>a+(10-i)*+c,0)%11)%11;s=p+(n===10?'X':n);}return /^\d{9}[\dX]$/.test(s)&&[...s].reduce((a,c,i)=>a+(10-i)*(c==='X'?10:+c),0)%11===0?s:null;};
const skip=b=>/\b(series|trilogy|volumes)\b/i.test(b.title)||['q0220','q0484','intake-0190','intake-0203','progress-0677','progress-0817','intake-0172','n88837eb597','complete-307-208','shelf-963f1a9bc7e6','nb2806edfbc','shelf-e4aad7c54f0d','shelf-b0c105f57bfb'].includes(b.id);
const cleanSource=s=>s?{file:s.file||s.rawFile,url:s.url,retrieved:s.retrieved,evidence:s.evidence}:s;
const finalizedEdition=e=>({...e,retrieved:e.retrieved||e.source?.retrieved,source:cleanSource(e.source)});
const scopeMatches=(b,title)=>{const words=s=>String(s||'').normalize('NFKD').toLowerCase().replace(/[^a-z0-9]+/g,' ').split(' ').filter(w=>w&&!['a','an','the','and','of','in','to'].includes(w)),sub=words(b.title.split(':').slice(1).join(':'));return sub.length!==1||words(title).includes(sub[0]);};
const rangeFits=r=>{if(!r)return false;let pages=r.edition?.pages;if(r.source?.file?.endsWith('.html.gz')){const html=zlib.gunzipSync(fs.readFileSync(r.source.file)).toString();pages=+(html.match(/Length<\/span><\/td><td[^>]*><span[^>]*>(\d+) pages/)?.[1]||0);if(pages)r.edition.pages=pages;}if(/GoogleBooks:/.test(r.edition?.id)&&r.ranges.some(s=>s.method==='contents-boundary'&&!/^(index|bibliograph|biblical references|reference|sources|source notes|notes|endnotes|works cited|glossary|acknowledg|about|copyright|series list|credits|art credits|image credits|illustration credits|publishers|further reading|select|name index|list of|appendix|appendices)/i.test(s.evidence.split(';').at(-1).trim())))return false;return !pages||r.ranges.every(s=>s.end<=pages);};
const choose=(b,kind,...items)=>items.find(x=>x&&scopeMatches(b,kind==='edition'?x.title:x.edition?.title)&&(kind!=='reference'||rangeFits(x))&&!/1586633988|9781586633981/.test(JSON.stringify(kind==='edition'?x.id:x.edition)));
for(const t of targets){
 if(skip(t)||['complete-659-350','shelf-22ce3507a296','complete-242-195','shelf-94a031c18488','intake-0480','shelf-e25277d5057a','intake-0401'].includes(t.id))continue;
 const sp=states['search-pages'].books?.[t.id]||{};const b=byId.get(t.id),m=states.manual[b.id]||{},l=states.library.books?.[b.id]||{},a=states.archive.books?.[b.id]||{},g=states.google.books?.[b.id]||{},h=states['google-html'].books?.[b.id]||{},ca=states['cached-amazon'].books?.[b.id]||{},am=states.amazon.books?.[b.id]||{};
 const x={id:b.id,title:b.title,author:b.author,initialRank:t.rank,before:b.total,priorScoreReview:b.scoreReview,priorContentReview:b.reviewAnchor||b.currentReview||b.priorReport,sources:b.sources};
 const ex=states.extra.books?.[b.id]||{};
 const ci=states.cinii.books?.[b.id]||{},hv=states.harvard.books?.[b.id]||{},ht=states.hathi.books?.[b.id]||{};
 if(m.correctEdition){editions[b.id]=finalizedEdition(m.correctEdition);if(enrichment.books[b.id]?.edition)enrichment.books[b.id].edition=editions[b.id];x.edition=editions[b.id];x.editionCorrection=true;x.priorEdition=t.edition;}
 if(!t.edition){const e=choose(b,'edition',m.edition,ci.edition,hv.edition,ht.edition,l.edition,a.edition,g.edition,sp.edition,am.edition,ex.edition);if(e){editions[b.id]=finalizedEdition(e);x.edition=editions[b.id];}}
 if(t.reference.pages===null){const r=choose(b,'reference',m.referenceRecord,ci.reference,hv.reference,ht.reference,l.reference,a.reference,h.reference,sp.reference,ex.reference);if(r){references[b.id]={...r,source:cleanSource(r.source)};x.reference=references[b.id];}}
 if(x.edition&&/large[ -]print/i.test(x.edition.source?.evidence||''))x.edition.format='Large-print edition (binding unspecified)';
 if(x.reference&&/large[ -]print/i.test(x.reference.source?.evidence||'')){x.reference.edition={...x.reference.edition,format:'Large print'};x.reference.limitation+=' This reference count comes from a large-print edition.';}
 if(t.amazon?.count==null){const r=m.amazon||am.amazon||ca.amazon;if(r){assert(Number.isInteger(r.count)&&r.count>0&&r.evidence?.length&&r.sourceSnapshot);b.amazon=r;x.amazon=r;const o=r.count<10?-20:r.count<100?-10:r.count<1000?-5:0;if(b.deductions)b.deductions.O15=o;if(Object.hasOwn(b,'O15'))b.O15=o;b.obscurityFallback=false;}}
 const row=rows.get(b.author+'|'+b.title);assert(row,'Missing ledger row '+b.id);const oldLink=row[3].match(/\]\(([^)]+)\)/)[1];
 if(m.product?.replaceExisting||!/\/(?:dp|product)\/[A-Z0-9]{10}/.test(oldLink)){
  const e=x.edition||t.edition;
  const candidates=[m.product||am.product,...[e].filter(e=>e&&/paperback|softcover|softback/i.test(e.format)&&/English|eng|^en$|Croatian|hrv|^hr$/i.test(e.language)).map(e=>({id:[e.id,...e.isbn10||[],...e.isbn13||[]].map(isbn10).find(Boolean),format:e.format,url:e.url,source:e.source})),...(l.identities||[]).filter(v=>/paperback|softcover|softback/i.test(v.format)&&scopeMatches(b,v.title)).map(v=>({id:v.isbn.map(isbn10).find(Boolean),format:v.format,url:v.url,source:v.source}))].filter(v=>v&&isbn10(v.id));
  const p=candidates[0];if(p){const url='https://www.amazon.de/dp/'+isbn10(p.id);x.purchaseUrl=url;x.oldLink=oldLink;x.linkEvidence={...p,confidence:'moderate',endpointVerified:false,limitation:'English/Croatian print identity verified from cited metadata; purchase target updated to an ISBN-specific Amazon.de URL. Live product endpoint, stock and regional availability are unverified because Amazon challenged access.'};b.purchaseUrl=url;b.titleCell=`[${b.title}](${url})`;b.format=p.format;}
 }
 if(!x.edition&&!x.reference&&!x.amazon&&!x.purchaseUrl)continue;
 const e=enrichment.books[b.id]?.edition||editions[b.id],r=references[b.id];
 if(x.reference||x.edition){const pids=[...new Set([e?.id,...e?.isbn10||[],...e?.isbn13||[],...e?.isbn||[]].map(isbn10).filter(Boolean))],rids=[...new Set([r.edition?.id,...r.edition?.isbn||[]].map(isbn10).filter(Boolean))];r.sameEditionAsPG=!!(e?.url&&e.url===r.url||e?.id===r.edition?.id&&/^(?:OL|\/books\/OL|GoogleBooks:|CiNii:|Harvard:|HathiTrust:)/.test(e?.id||'')||pids.length===1&&rids.length===1&&pids[0]===rids[0]);}
 const v=bonusValues(new Set(b.sources).size,e?.pages??null,r.pages),ratio=v.RD===null?null:r.pages/e.pages;
 x.contributions=(b.points||b.contributions||b.criteria?.map(c=>c.contribution??c.points));x.raw=b.raw;x.deductions=Object.fromEntries(['T11','T12','H13','P14','O15'].map(k=>[k,b.deductions?.[k]??b[k]]));x.bonuses={REL:v.REL??0,RD:v.RD??0};
 assert(Math.abs(x.bonuses.REL-b.bonuses.REL)<1e-10,'Source bonus changed');
 x.assessment={sources:new Set(b.sources).size,pages:e?.pages??null,referencePages:r.pages,pageEdition:e?.id??null,referenceEdition:r.edition?.id??null,ratio,sameEdition:!!r.sameEditionAsPG,confidence:ratio===null?'unknown':r.sameEditionAsPG?'moderate':'low',fallback:v.RD===null,reason:v.RD===null?'Missing page or reference count: explicit zero R&D fallback.':`${r.pages} / ${e.pages} = ${format(100*ratio)}%; R&D ${format(v.RD)}. ${r.sameEditionAsPG?'Matching edition identifiers.':'Estimate: editions differ or matching is unconfirmed.'}${ratio>1?' Inconsistent ratio exceeds one; flagged, not capped.':''}`};
 x.after=x.contributions.reduce((a,v)=>a+v,0)+Object.values(x.deductions).reduce((a,v)=>a+v,0)+x.bonuses.REL+x.bonuses.RD;
 if(x.edition||x.reference||x.amazon){b.total=x.after;b.bonuses=x.bonuses;b.bonusAssessment=x.assessment;b.displayScore=format(b.total);if(Object.hasOwn(b,'unroundedTotal'))b.unroundedTotal=b.total;b.verdict=b.total>=85?'Recommend':b.total>=75?'Consider':b.total>=65?'Selective':b.total>=50?'Low priority':'Poor fit';b.scoreReview=report+'#'+b.id;}else assert(Math.abs(x.after-b.total)<1e-8,'Unchanged score mismatch');
 x.verdict=b.verdict;x.contentConfidence=b.evidenceConfidence||b.confidence||b.scoreConfidence||'unknown';changes.push(x);
}
const ranked=compiled.currentBooks.filter(b=>b.status==='recommended').sort((a,b)=>b.total-a.total||a.title.localeCompare(b.title));
const changeMap=new Map(changes.map(x=>[x.id,x]));
const ledger=fs.readFileSync('RECOMMENDED_BOOKS.md','utf8').split(/\r?\n/).slice(0,2).join('\n')+'\n'+ranked.map(b=>{const row=rows.get(b.author+'|'+b.title),e=enrichment.books[b.id]?.edition||editions[b.id],r=references[b.id],x=changeMap.get(b.id);return '| '+[...row.slice(0,3),x?.purchaseUrl?`[${b.title}](${x.purchaseUrl})`:row[3],format(b.total),format(b.bonuses.REL),format(b.bonuses.RD),b.amazon?.count==null?'Unknown':`[${b.amazon.count}](${b.amazon.url})`,e?`[${e.pages}](${e.url})`:'Unknown',r.pages===null?'Unknown':`[${r.pages}](${r.url})`,row[10]].join(' | ')+' |';}).join('\n')+'\n';
const summary={booksEnriched:changes.length,pagesAdded:changes.filter(x=>x.edition&&!x.editionCorrection).length,pageCountsCorrected:changes.filter(x=>x.editionCorrection).length,referenceCountsAdded:changes.filter(x=>x.reference).length,ratingsAdded:changes.filter(x=>x.amazon).length,searchLinksReplaced:changes.filter(x=>x.purchaseUrl&&x.oldLink.includes('/s?')).length,editionLinksUpdated:changes.filter(x=>x.purchaseUrl&&!x.oldLink.includes('/s?')).length,liveAmazonEndpointsVerified:0,scoresChanged:changes.filter(x=>Math.abs(x.after-x.before)>1e-9).length,report};summary.numericDataPoints=summary.pagesAdded+summary.referenceCountsAdded+summary.ratingsAdded;summary.totalChanges=summary.numericDataPoints+summary.searchLinksReplaced+summary.editionLinksUpdated+summary.pageCountsCorrected;
summary.remaining={pages:ranked.filter(b=>!(enrichment.books[b.id]?.edition||editions[b.id])).length,references:ranked.filter(b=>references[b.id].pages===null).length,ratings:ranked.filter(b=>b.amazon?.count==null).length};
let text=`# Second recommended-book metadata collection

${date}, Europe/Warsaw. This round starts from the completed first-round catalog, ${baseline}. Books are queued by their initial unrounded repository scores. Each newly known numeric field counts once per book. Earlier additions, repeated evidence, score recalculations, link replacements and corrections to already-known values do not count toward the requested 1,000 missing fields.

| Change | Count |
|---|---:|
| New page counts | ${summary.pagesAdded} |
| New reference-page counts | ${summary.referenceCountsAdded} |
| New Amazon rating aggregates | ${summary.ratingsAdded} |
| **New numeric fields** | **${summary.numericDataPoints}** |
| Existing page counts corrected, additional | ${summary.pageCountsCorrected} |
| Generic Amazon searches replaced with ISBN URLs, additional | ${summary.searchLinksReplaced} |
| Existing product links changed to a documented paperback, additional | ${summary.editionLinksUpdated} |
| All changed fields | ${summary.totalChanges} |

${summary.booksEnriched} recommended books changed; ${summary.scoresChanged} scores changed. Eligibility, raw criterion judgments, density assessments, thematic deductions, publication ages and distinct source membership are retained. R&D is recalculated from documented reference and total-page counts; unknown inputs retain the explicit zero fallback. O15 changes only for a newly established Amazon aggregate. Totals use unrounded inputs. No new source IDs or books were added.

## Collection and evidence

Open Library requests are at least 3.5 seconds apart; CiNii and Harvard requests at least four seconds; Google Books previews at least six seconds; Internet Archive and small HathiTrust batches at least ten seconds. Independent services run concurrently. Earlier completed searches and saved responses are reused where available. Collectors stop on access-limit responses. Public indexed Google Books records provide further edition lengths and numbered contents. No login, CAPTCHA bypass or proxy rotation is used.

The preceding round's direct Amazon access challenge was not retried. Public web-cache product lookups were paced, with at least 15 seconds between the later book checks. Accessible product-level rating summaries were matched to the title and author; individual product identifiers, snapshot dates and limitations appear below. Counts are not live measurements or an exhaustive comparison of every edition. Most cache lookups were unavailable. Missing or blocked counts stay unknown, and no verified zero-rating book was established. Link replacements identify a documented print edition; **Amazon product endpoints and stock remain unverified**. A valid ISBN is not proof that an Amazon listing is live.

Metadata sources include [Open Library](https://openlibrary.org), [Internet Archive](https://archive.org), [Google Books](https://books.google.com), [CiNii Books](https://ci.nii.ac.jp/books/), [HathiTrust](https://www.hathitrust.org/member-libraries/resources-for-librarians/data-resources/bibliographic-api/) and [Harvard Library](https://library.harvard.edu/services-tools/harvard-library-datasets). Harvard bibliographic metadata is supplied by Harvard Library, OCLC and the Library of Congress under Harvard's open-metadata terms; no additional restrictions are claimed over that metadata.

Reference counts use only explicitly bounded sections or explicitly catalogued single-page extents and exclude indexes. Saved catalog records were reprocessed for quoted labels, omitted punctuation and single-page notation. A partial catalog listing can omit other reference sections; unlisted pages are not inferred. Catalogued numbered extents exclude Roman preliminaries and separately numbered plates. Every accepted value retains a source, retrieval record and edition identity. Metadata confidence is generally moderate. Reference-to-total ratios from different or unconfirmed editions are labelled estimates with low confidence. This is not a full-text audit of every book.

## Verification and held candidates

The inherited series and identity holds remain. Single-volume or abridgment candidates for The History of the Standard Oil Company, On What Matters, Hitler: A Biography, A Study of History and The Story of Civilization are not accepted as counts for an unspecified whole work. Ambiguous expanded titles, shorter adaptations and future-dated editions are held. Matching title and author alone does not establish matching scope. Additional held candidates include individual volumes of The Civil War: A Narrative, An Austrian Perspective on the History of Economic Thought, Italy and Her Invaders, and Abraham Lincoln: A Life. A SparkNotes guide catalogued under Night was rejected after checking ISBN 1586633988. The Eastern Front Google contents used positions beyond its stated 704-page length; these are rejected as print-page evidence. Reference ranges are checked against the source edition extent when available. Google preview boundaries must lead to a recognizable reference or back-matter section; skipped body chapters are not counted as references. Conflicting single-word subtitles also fail scope matching. Explicitly reviewed title aliases are documented in identity-aliases.json. Tim Wu also needs an exact-name exception because the inherited matcher rejects two-letter surnames. Other identity matching is not weakened.

The Nature of Rationality had a prior 40-page chapter extent (p.1–40) recorded as a full-book length. The matching library record documents xvi, 226 pages; this correction is separate from the missing-field target. The original record remains in the prior catalog snapshot. The title-specific entry below records the revised score and evidence.

For 100 Plus, a catalog range of 99–235 overlaps body chapters. The retailer contents explicitly place Notes at 199 with an extent of 38 pages and Index at 237. The accepted 38-page count uses that explicit contents evidence, not a guessed repair of the catalog number.

Same-edition status requires a matching source record, matching edition identifier, or a single unambiguous ISBN on both sides. A catalog record with several format ISBNs does not establish a same-edition ratio merely because one identifier overlaps.

Automated verification checks positive page counts, bounded reference ranges, identity matches, distinct changed fields, retained source membership and raw judgments, and recomputed scores. All old analyses remain history.

Machine-readable records: [changes](../${dir}/review.json), [summary](../${dir}/summary.json), [library](../${dir}/library.json), [archive](../${dir}/archive.json), [CiNii](../${dir}/cinii.json), [Harvard](../${dir}/harvard.json), [HathiTrust](../${dir}/hathi.json), [Google previews](../${dir}/google-html.json), [indexed Google records](../${dir}/search-pages.json).

`;

for(const x of changes){text+=`<a id="${x.id}"></a>\n## ${x.title} — ${x.author}\n\nInitial rank ${x.initialRank}; sources ${x.sources.join(', ')}. Prior score review: ${x.priorScoreReview||'Retained in baseline catalog'}.\n\n`;
 if(x.editionCorrection)text+=`Page-count correction: ${x.priorEdition.pages} → ${x.edition.pages}. This correction is additional to the missing-data target. ${x.edition.notes}\n\n`;
 if(x.edition)text+=`Pages: **${x.edition.pages}**; ${x.edition.id}, ${x.edition.year??'year unknown'}, ${x.edition.format}, ${x.edition.language}. [Evidence](${x.edition.url}). Confidence: ${x.edition.confidence}. ${x.edition.notes||''}\n\n`;
 if(x.edition&&states.manual[x.id]?.edition)text+=`Observed edition title: ${x.edition.title}. [Saved identity evidence](../${x.edition.source.file}).\n\n`;
 if(x.reference)text+=`Reference pages: **${x.reference.pages}**; ${x.reference.edition.id}; ${x.reference.ranges.map(r=>r.label+' '+r.start+'–'+r.end).join('; ')}. [Evidence](${x.reference.url}). Confidence: ${x.reference.confidence}. ${x.reference.limitation}\n\n`;
 if(x.amazon)text+=`Amazon aggregate: **${x.amazon.count}**; ${x.amazon.marketplace}, ${x.amazon.asin}. [Product](${x.amazon.url}). Snapshot: ${x.amazon.retrievedAt}; checked ${x.amazon.verifiedAt}. Confidence: ${x.amazon.confidence}. ${x.amazon.status}\n\n`;
 if(x.purchaseUrl)text+=`[ISBN-specific purchase URL](${x.purchaseUrl}) replaces [previous purchase link](${x.oldLink}). [Edition evidence](${x.linkEvidence.url}); ${x.linkEvidence.format}. ${x.linkEvidence.limitation}\n\n`;
 text+=`R&D: ${x.assessment.reason} Page edition ${x.assessment.pageEdition||'unknown'}; reference edition ${x.assessment.referenceEdition||'unknown'}. Ratio confidence: ${x.assessment.confidence}.\n\n`;
 if(x.edition||x.reference||x.amazon)text+='| Criterion | Raw attainment | Contribution |\n|---|---:|---:|\n'+REGISTRY.slice(0,10).map((q,i)=>`| ${q.name} | ${format(x.raw[i])} | ${format(x.contributions[i])} |`).join('\n')+'\n\n'+Object.entries(x.deductions).map(([k,v])=>`${k} ${format(v)}`).join('; ')+`; REL ${format(x.bonuses.REL)}; RD ${format(x.bonuses.RD)}.\n\n`;
 text+=`Score **${format(x.before)} → ${format(x.after)}**; ${x.verdict}. Content confidence retained: ${x.contentConfidence}.\n\n`;
}
const changed=new Set(changes.map(x=>x.id));for(const b of read(baseline).currentBooks)if(!changed.has(b.id))assert.deepEqual(byId.get(b.id),b,'Unrelated book modified');
compiled.audit={...compiled.audit,previous:baseline,metadata1000Review:report};
write(dir+'/compiled.json',compiled);write(dir+'/review.json',changes);write(dir+'/summary.json',summary);write(dir+'/candidate-editions.json',editions);write(dir+'/candidate-reference-pages.json',references);write(dir+'/candidate-recommended.md',ledger);write(dir+'/analysis.md',text);
if(process.argv.includes('--write')){assert(summary.numericDataPoints>=1000,'The requested 1,000 numeric data points have not been reached');assert(!fs.existsSync(report));write(report,text);write('RECOMMENDED_BOOKS.md',ledger);write('site/editions.json',editions);write('site/reference-pages.json',references);if(changes.some(x=>x.editionCorrection&&enrichment.books[x.id]?.edition))write('site/enrichment.json',enrichment);write('data/catalog.json',{compiled:dir+'/compiled.json'});}
console.log(summary);
