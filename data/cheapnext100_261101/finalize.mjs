import fs from 'node:fs';
import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import {bonusValues,format,REGISTRY} from '../../site/model.mjs';
const research='data/cheapnext100_261101',dir=research;
const read=p=>JSON.parse(fs.readFileSync(p,'utf8')),write=(p,v)=>fs.writeFileSync(p,typeof v==='string'?v:JSON.stringify(v,null,2)+'\n');
fs.mkdirSync(dir,{recursive:true});
const inputs=['data/catalog.json','RECOMMENDED_BOOKS.md','VETOED_BOOKS.md','EXCLUDED_BOOKS.md','SOURCES.md','site/editions.json','site/reference-pages.json','site/enrichment.json'];
if(!fs.existsSync(dir+'/baseline.json')){
 write(dir+'/baseline.json',read('data/catalog.json'));
 write(dir+'/input-hashes.json',Object.fromEntries(inputs.map(p=>[p,crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex')])));
}
for(const [p,h]of Object.entries(read(dir+'/input-hashes.json')))assert.equal(crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex'),h,'Input changed: '+p);
const baseline=read(dir+'/baseline.json').compiled,c=read(baseline),editions=read('site/editions.json'),enrichment=read('site/enrichment.json'),refs=read('site/reference-pages.json'),approved=read(research+'/approved.json');
assert.equal(approved.length,100);
assert.equal(new Set(approved.map(x=>x.id+':'+x.kind)).size,100);
const audit=fs.readdirSync(research+'/raw').filter(f=>/^audit-\d+\.parsed\.json$/.test(f)).flatMap(f=>read(research+'/raw/'+f).results);
assert.equal(audit.length,100,'Independent evidence check incomplete');
const resolutions=read(research+'/audit-resolutions.json');
assert(audit.every(a=>a.status==='supported'||resolutions[a.key]),'Resolve independent audit flags first');
const parts=Object.fromEntries(new Intl.DateTimeFormat('en-GB',{timeZone:'Europe/Warsaw',year:'2-digit',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',hourCycle:'h23'}).formatToParts(new Date()).map(p=>[p.type,p.value]));
const date=`20${parts.year}-${parts.month}-${parts.day}`,report=`analysis/analysis_fast100_${parts.year}${parts.month}${parts.day}_${parts.hour}${parts.minute}.md`;
const changes=new Map(),byId=new Map(c.currentBooks.map(b=>[b.id,b]));
function change(id){if(!changes.has(id)){const b=byId.get(id);changes.set(id,{id,title:b.title,author:b.author,before:b.total,priorReview:b.scoreReview,fields:[],sources:b.sources});}return changes.get(id);}
const cleanURL=u=>{const a=u.match(/^(https:\/\/[^/]*amazon\.[^/]+).*\/(?:dp|product)\/([A-Z0-9]{10})/);return a?`${a[1]}/dp/${a[2]}`:u;};
const evidenceId=x=>{
 const u=x.source.url,m=u.match(/\/(?:dp|product)\/([A-Z0-9]{10})(?=[/?#]|$)/)||u.match(/\b(97[89]\d{10})\b/);
 return m?(/^[0-9]{9}[0-9X]$|^97[89]\d{10}$/.test(m[1])?'ISBN:':'ASIN:')+m[1]:'Source:'+u;
};
for(const x of approved){
 const b=byId.get(x.id);assert(b?.status==='recommended');const item=x.item,source=x.source,raw=read(x.file),rec=change(b.id),url=cleanURL(source.url);
 assert(Number.isInteger(item.count)&&item.count>0);
 const provenance={file:x.file,url:source.url,retrieved:raw.retrieved,evidence:x.observed,method:'Source annotation reviewed by primary assistant; checked by a separate OpenRouter model.'};
 if(x.kind==='pages'){
  assert(!editions[b.id]&&!enrichment.books[b.id]?.edition,'Count already known');
  const y=Number(item.editionYear),year=Number.isInteger(y)&&y>0&&source.content.includes(String(y))?y:null;
  let binding=/paperback|softback|softcover/i.test(source.content)?'Paperback':/hardback|hardcover/i.test(source.content)?'Hardcover':'Print (binding unspecified)';
  // A selected source may list several bindings. Retain a proposed binding only when the source confirms it.
  if(/hardcover|hardback/i.test(item.format||'')&&/hardcover|hardback/i.test(source.content))binding='Hardcover';
  let notes='Documented count for the cited print edition. Indexed source; live stock and physical pagination were not inspected. Edition year is unknown when not supported by the cited text.';
  const e={id:evidenceId(x),title:b.title,author:b.author,pages:item.count,year,format:binding,language:'English',url,retrieved:raw.retrieved.slice(0,10),confidence:'moderate',notes,source:provenance};
  editions[b.id]=e;rec.fields.push({kind:'pages',value:item.count,evidence:e,selection:x.key});
 }else if(x.kind==='amazon'){
  assert(b.amazon?.count==null,'Count already known');
  const asin=url.match(/\/dp\/([A-Z0-9]{10})/)?.[1];assert(asin&&/ratings/i.test(x.observed));
  b.amazon={count:item.count,url,asin,marketplace:new URL(url).hostname.replace(/^www\./,''),retrievedAt:raw.retrieved,verifiedAt:raw.retrieved,verified:true,confidence:'moderate',productTitle:source.title==='Follow the author'||source.title==='Amazon Prime includes:'?b.title:source.title,byline:b.author,evidence:[x.observed,'Primary assistant matched the source product title and author, not a related-product recommendation.'],sourceSnapshot:x.file,status:'Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved '+raw.retrieved.slice(0,10)+'. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.'};
  const o=item.count<10?-20:item.count<100?-10:item.count<1000?-5:0;
  b.ratingReview={date,analysis:report+'#'+b.id,previousCount:null,previousDeduction:b.deductions?.O15??b.O15,previousTotal:b.total};
  if(b.deductions)b.deductions.O15=o;if(Object.hasOwn(b,'O15'))b.O15=o;b.obscurityFallback=false;
  rec.fields.push({kind:'amazon',value:item.count,evidence:b.amazon,selection:x.key});
 }else{
  assert.equal(refs[b.id].pages,null,'Reference count already known');
  const pages=new Set();for(const r of item.ranges){assert(Number.isInteger(r.start)&&Number.isInteger(r.end)&&r.end>=r.start);for(let p=r.start;p<=r.end;p++)pages.add(p);}assert.equal(pages.size,item.count);
  refs[b.id]={pages:item.count,confidence:'moderate',method:'catalogued-reference-ranges',ranges:item.ranges.map(r=>({start:r.start,end:r.end,label:r.label,evidence:r.evidence,method:'catalogued-range'})),edition:{id:evidenceId(x),title:b.title,author:b.author,year:Number(item.editionYear)>0&&source.content.includes(String(item.editionYear))?Number(item.editionYear):null,language:'English'},url,source:provenance,sameEditionAsPG:false,limitation:'Counts the expressly catalogued reference section only; may omit separate notes. Does not count the index. This is metadata evidence, not full-text inspection. No reference-page count is inferred from total length.'};
  rec.fields.push({kind:'reference',value:item.count,evidence:refs[b.id],selection:x.key});
 }
}
for(const [id,x]of changes){
 const b=byId.get(id),e=enrichment.books[id]?.edition||editions[id],r=refs[id],v=bonusValues(new Set(b.sources).size,e?.pages??null,r.pages);
 if(x.fields.some(f=>f.kind==='pages'||f.kind==='reference'))r.sameEditionAsPG=!!(e&&r.pages!==null&&e.url===r.url);
 const ratio=e?.pages&&r.pages!==null?r.pages/e.pages:null;
 b.bonuses={REL:v.REL??0,RD:v.RD??0};
 b.bonusAssessment={sources:new Set(b.sources).size,pages:e?.pages??null,referencePages:r.pages,pageEdition:e?.id??null,referenceEdition:r.edition?.id??null,ratio,sameEdition:!!r.sameEditionAsPG,confidence:ratio===null?'unknown':r.sameEditionAsPG?'moderate':'low',fallback:v.RD===null,reason:v.RD===null?'Missing total-page or reference-page count: explicit zero R&D fallback.':`${r.pages} / ${e.pages} = ${format(100*ratio)}%; R&D ${format(v.RD)}. ${r.sameEditionAsPG?'Both counts come from the same catalog record.':'Estimate: editions differ or matching is unconfirmed.'}${ratio>1?' Inconsistent ratio exceeds one; flagged, not capped.':''}`};
 x.raw=b.raw;x.contributions=b.points||b.contributions||b.criteria.map(q=>q.contribution??q.points);x.deductions=Object.fromEntries(['T11','T12','H13','P14','O15'].map(k=>[k,b.deductions?.[k]??b[k]]));
 b.total=x.contributions.reduce((a,v)=>a+v,0)+Object.values(x.deductions).reduce((a,v)=>a+v,0)+b.bonuses.REL+b.bonuses.RD;
 b.displayScore=format(b.total);if(Object.hasOwn(b,'unroundedTotal'))b.unroundedTotal=b.total;
 b.verdict=b.total>=85?'Recommend':b.total>=75?'Consider':b.total>=65?'Selective':b.total>=50?'Low priority':'Poor fit';b.scoreReview=report+'#'+id;
 x.after=b.total;x.bonuses=b.bonuses;x.bonusAssessment=b.bonusAssessment;x.verdict=b.verdict;x.contentConfidence=b.evidenceConfidence||b.confidence||b.scoreConfidence||'unknown';
}
const original=fs.readFileSync('RECOMMENDED_BOOKS.md','utf8').split(/\r?\n/),rows=new Map(original.filter(l=>/^\| \d{4}-/.test(l)).map(l=>{const r=l.split('|').slice(1,-1).map(s=>s.trim());return [r[2]+'|'+r[3].match(/^\[([^\]]+)\]/)[1],r];}));
const ledger=original.slice(0,2).join('\n')+'\n'+c.currentBooks.filter(b=>b.status==='recommended').sort((a,b)=>b.total-a.total||a.title.localeCompare(b.title)).map(b=>{const row=rows.get(b.author+'|'+b.title);assert(row);if(changes.has(b.id)){const e=enrichment.books[b.id]?.edition||editions[b.id],r=refs[b.id];row[4]=format(b.total);row[5]=format(b.bonuses.REL);row[6]=format(b.bonuses.RD);row[7]=b.amazon?.count==null?'Unknown':`[${b.amazon.count}](${b.amazon.url})`;row[8]=e?`[${e.pages}](${e.url})`:'Unknown';row[9]=r.pages===null?'Unknown':`[${r.pages}](${r.url})`;}return '| '+row.join(' | ')+' |';}).join('\n')+'\n';
const list=[...changes.values()],responses=fs.readdirSync(research+'/raw').filter(f=>f.endsWith('.json')&&!/\.(parsed|request|error)\.json$/.test(f)).map(f=>read(research+'/raw/'+f)).filter(r=>r.choices);
const summary={status:'complete',target:100,netMissingValuesFilled:approved.length,counts:Object.fromEntries(['pages','amazon','reference'].map(k=>[k,approved.filter(x=>x.kind===k).length])),booksChanged:list.length,scoresChanged:list.filter(x=>Math.abs(x.before-x.after)>1e-9).length,successfulResearchCalls:responses.filter(r=>r.bookId).length,successfulAuditCalls:responses.filter(r=>!r.bookId).length,reportedCostUSD:responses.reduce((s,r)=>s+(r.usage?.cost||0),0),report};
let text='# Further metadata with cheaper search — '+date+'\n\nCompleted **100 additional previously missing numeric values**: '+summary.counts.pages+' total-page counts, '+summary.counts.amazon+' Amazon rating aggregates, and '+summary.counts.reference+' reference-page counts. '+summary.booksChanged+' books updated; '+summary.scoresChanged+' score totals changed.\n\n## Evidence and confidence\n\nThe primary assistant checked source identity, explicit numeric evidence, scope, and arithmetic. OpenRouter workers used Mistral Nemo for research and Mistral Small 24B for a separate evidence audit. Source text, not worker-generated numbers, determines acceptance. Metadata confidence is moderate. Amazon counts describe one matched product snapshot; the original indexed snapshot date is unknown. Counts are not guaranteed live and are not sums across products or written-review totals. Print counts identify a print edition. Reference counts use explicit inclusive bibliographical ranges, including catalogued pagination for digital editions where stated. Ratios across different or unconfirmed editions are low-confidence estimates. Unknown inputs retain their prescribed zero-bonus fallback.\n\nContent assessments, eligibility, source memberships, and purchase links are retained. Only missing metadata and its resulting O15/RD scores change. [External audit resolutions](../'+dir+'/audit-resolutions.json) explain the primary assistant’s decisions on model flags.\n\n## Cost and reusable findings\n\nSaved successful OpenRouter responses report **$'+summary.reportedCostUSD.toFixed(6)+'** in usage, including experiments and audit calls. This is recorded API usage, not an invoice. [Machine-readable cost and yield results](../'+dir+'/cost-learning.json) record the comparison.\n\nThe main saving came from setting Parallel search mode to **fast**: the observed search charge was $0.001 per call, compared with $0.005 for the prior default mode. Ten results fit in the base search fee. The one-result Exa experiment still cost $0.007 per call, so reducing its result count did not save the search fee. A four-call server-tool experiment with a larger requested excerpt budget did not produce a clear useful gain. These are small observational tests, not a controlled quality benchmark. [OpenRouter’s mode pricing and configuration](https://github.com/OpenRouterTeam/docs/blob/main/guides/features/plugins/web-search.mdx) support the configuration choices.\n\nFor the next batch: reuse saved evidence first; use parallel/fast with ten results; search exact title/author or an already known product identifier; use short title plus bibliographical references for library searches; review batches before spending more. Match useful secondary results to their actual catalog books. Never accept a number only because a worker returned it, or infer zero from missing evidence. Related-product matches, single-volume substitutions, child or abridged editions, and unresolved same-edition conflicts remain unaccepted.\n\n## Accepted values\n\n| Book | Field | Count | Source | Confidence |\n|---|---|---:|---|---|\n';
const cell=s=>String(s).replaceAll('|',' / ').replaceAll('\n',' ');
for(const x of approved)text+=`| ${cell(x.title+' — '+x.author)} | ${x.kind} | ${x.item.count} | [evidence](${cleanURL(x.source.url)}) | ${'moderate'} |\n`;
for(const x of list){text+=`<a id="${x.id}"></a>\n\n## ${x.title} — ${x.author}\n\nSources: ${x.sources.join(', ')}. Prior review: ${x.priorReview||'See baseline catalog'}. ${x.correction||''}\n\n`;
 for(const f of x.fields){const e=f.evidence;text+=`Added ${f.kind}: **${f.value}**. [Source](${e.url}); [saved evidence](../${e.source?.file||e.sourceSnapshot}). ${e.notes||e.status||e.limitation||''}\n\n`;if(f.kind==='reference')text+='Ranges: '+e.ranges.map(r=>`${r.label}: ${r.start}–${r.end}`).join('; ')+'.\n\n';}
 text+='| Criterion | Linear attainment | Contribution |\n|---|---:|---:|\n'+REGISTRY.slice(0,10).map((r,i)=>`| ${r.name} | ${format(x.raw[i])} | ${format(x.contributions[i])} |`).join('\n')+'\n\n'+Object.entries(x.deductions).map(([k,v])=>k+' '+format(v)).join('; ')+`; REL ${format(x.bonuses.REL)}; RD ${format(x.bonuses.RD)}.\n\n`;
 text+=`R&D inputs: reference pages ${x.bonusAssessment.referencePages??'unknown'} (${x.bonusAssessment.referenceEdition||'edition unknown'}); total pages ${x.bonusAssessment.pages??'unknown'} (${x.bonusAssessment.pageEdition||'edition unknown'}). ${x.bonusAssessment.reason} Ratio confidence: ${x.bonusAssessment.confidence}.\n\nScore **${format(x.before)} → ${format(x.after)}**; ${x.verdict}. Content confidence retained: ${x.contentConfidence}. Content assessments were not rerated in this metadata update.\n\n`;
}
for(const old of read(baseline).currentBooks)if(!changes.has(old.id))assert.deepEqual(byId.get(old.id),old,'Unrelated book changed');
c.audit={...c.audit,previous:baseline,openRouterMetadataFinalReview:report};
write(dir+'/compiled.json',c);write(dir+'/review.json',list);write(dir+'/summary.json',summary);write(dir+'/candidate-editions.json',editions);write(dir+'/candidate-reference-pages.json',refs);write(dir+'/candidate-recommended.md',ledger);write(dir+'/analysis.md',text);
if(process.argv.includes('--write')){assert(!fs.existsSync(report));write(report,text);write('RECOMMENDED_BOOKS.md',ledger);write('site/editions.json',editions);write('site/reference-pages.json',refs);write('data/catalog.json',{compiled:dir+'/compiled.json'});}
console.log(summary);
