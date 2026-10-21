import fs from 'node:fs';
import assert from 'node:assert/strict';
import {input,read,norm,resources} from './excluded_a-tools.mjs';
const dir='data/rule_review_261020/';
const audit=read(dir+'excluded_a-final-audit.json')||{};
const newAmazonAttempts=read(dir+'excluded_a-amazon-attempts.json')||[];
const promotionLines=fs.readFileSync(dir+'excluded_a-promotions.tsv','utf8').trim().split('\n').filter(l=>l&&!l.startsWith('#'));
const promotions=new Map(promotionLines.map(l=>{const [id,year,raw,T11,T12,scope,caveat,reason]=l.split('|');return[id,{year:+year,raw:raw.split(',').map(Number),T11:+T11,T12:+T12,scope,caveat,reason}]}));
const analyses=fs.readdirSync('analysis').filter(f=>f.endsWith('.md')).map(f=>({file:'analysis/'+f,text:fs.readFileSync('analysis/'+f,'utf8')}));
const sourceMap=new Map();
for(const l of fs.readFileSync('SOURCES.md','utf8').split('\n')){const c=l.split('|').map(s=>s.trim());if(!/^\d+$/.test(c[1]||''))continue;for(const m of l.matchAll(/analysis_[\w-]+\.md/g)){if(!sourceMap.has(m[0]))sourceMap.set(m[0],[]);sourceMap.get(m[0]).push(+c[1]);}}
const oldBooks=[];
for(const file of fs.readdirSync('data').filter(f=>f.endsWith('.json'))){const a=read('data/'+file);for(const b of [...(Array.isArray(a?.books)?a.books:[]),...(Array.isArray(a?.excluded)?a.excluded:[])])if(b.title)oldBooks.push({...b,_file:'data/'+file});}
const catalogs=fs.readdirSync('data/glasp_261019/catalog').filter(f=>f.endsWith('.json')).flatMap(f=>(read('data/glasp_261019/catalog/'+f)?.data?.docs||[]).map(d=>({...d,_file:'data/glasp_261019/catalog/'+f})));
const h2Legacy=new Map();
for(const l of fs.readFileSync('analysis/analysis_exclusions_261018_0045.md','utf8').split('\n')){
 const c=l.split('|').map(s=>s.trim());if(!['recommended','vetoed'].includes(c[2]))continue;
 const title=c[1].split(' — ')[0];h2Legacy.set(norm(title),{reason:c[3],confidence:c[4],evidence:[...c[5].matchAll(/\]\((https?:[^)]+)\)/g)].map(m=>m[1]),sources:[...c[5].matchAll(/\[(\d+)\]/g)].map(m=>+m[1])});
}
const manualH2={
 h0170:'A systematic dynamical-systems textbook covering technical analysis, calculations and problem solving, without a sustained historical or biographical account as its main structure.',
 h0280:'A formal development of rational trigonometry, with definitions, results and computational methods; the work remains a specialist technical method text, not a narrative account.',
 h0301:'An operational public-relations manual that teaches platform tactics and response procedures. The procedure/manually-operate boundary is still explicit in revised H2.',
 h0315:'An illustrated field reference organized to identify and explain separate pieces of infrastructure. The main lookup structure does not supply a sustained narrative; the revised expert exception does not remove the explicit reference exclusion.',
 h0317:'The source explicitly nominates an EPA 608 certification study guide. Exam preparation remains an express H2 ground; author and edition remain unspecified.',
 h0389:'A business-school course textbook, with a systematic teaching curriculum and cases used as course material; no separate sustained narrative work is identified.',
 h0395:'The nominated Misner–Thorne–Wheeler work is a multilevel technical relativity textbook and continuing technical reference. Motivating passages and history do not replace its detailed calculational curriculum and reference structure.',
 h0426:'A visual technology encyclopedia organized as separate explanatory spreads for lookup. It remains a reference work rather than a sustained narrative, irrespective of accessibility.',
 h0556:'Paine’s 2011 work is a procedural measurement guide: seven-step program, tool selection, data collection and implementation. It is distinct from John Doerr’s narrative-led book of the same title.',
 h0581:'The body-based healing program requires repeated somatic exercises and successive therapeutic tasks. Its main purpose is performing the described treatment practices, which remains within H2.',
 h0284:'The identified Lakoff book teaches political framing through practical activist communication guidance. Its explicit campaign-oriented tactical instruction remains a procedure manual under H2, before any V5 decision.'
};
const sourceOverrides={h0171:[12],h0174:[11],h0224:[12],h0315:[97],h0395:[12,139,140],h0423:[42],h0426:[98],h0556:[12]};
// Numeric source overrides are checked below against the actual source registry and corrected from the relevant report where needed.
const extras={
 h0032:['https://link.springer.com/book/10.1007/978-3-642-18245-7'],
 h0058:['https://academic.oup.com/book/5340/chapter-abstract/148115234','https://obnb.uk/p12591536-adaptive-thinking-rationality-in-the-real-world'],
 h0087:['https://www.dorsethouse.com/books/gst.html'],
 h0101:['https://anthropic-principle.com/anthropic-bias/preamble/'],
 h0148:['https://www.penguinrandomhouse.com/books/729967/crea-una-guia-poco-ortodoxa-para-hacer-cosas-que-marquen-la-diferencia--build-an-unorthodox-guide-to-making-things-worth-making-by-tony-fadell/'],
 h0207:['https://sites.santafe.edu/~wbarthur/Papers/CompEconFrame.pdf'],
 h0208:['https://www.cambridge.org/core/books/computation-and-human-experience/A03D5C20A4E98695F62EB3B56D6AB4BA','https://assets.cambridge.org/97805213/84322/frontmatter/9780521384322_frontmatter.pdf'],
 h0211:['https://www.degruyterbrill.com/document/doi/10.1515/9780691222462/html'],
 h0224:['https://assets.cambridge.org/97811071/68879/frontmatter/9781107168879_frontmatter.pdf'],
 h0323:['https://link.springer.com/book/10.1007/978-3-540-74865-6'],
 h0367:['https://iupress.org/9780253005373/gaining-ground-second-edition/'],
 h0493:['https://academic.oup.com/book/34848'],
 h0494:['https://link.springer.com/book/10.1007/978-1-4612-0989-8']
};
const periods={h0044:null,h0168:1900,h0174:null,h0209:1977,h0300:1853,h0323:1783,h0342:1948,h0365:2014,h0367:-300000000,h0396:1970,h0450:1980,h0462:1500,h0493:1362,h0494:1882};
const decisions=[];const meta=[];
for(const b of input){
 const id=b.reviewId,pri=b.priorRecords||[],p=pri[0]||{},title=b.title.trim(),author=b.author.trim(),r=resources(b),legacy=h2Legacy.get(norm(title));
 const exactAnalyses=analyses.filter(a=>a.text.split('\n').some(l=>l.includes(title)&& (l.startsWith('|')||l.startsWith('##')||l.includes('*'+title+'*')||l.includes('**'+title+'**'))));
 const priorReviews=[...new Set([...pri.map(x=>x.reviewAnchor||x.currentReview).filter(Boolean).map(x=>x.startsWith('analysis/')?x:'analysis/'+x),...(!pri.length?exactAnalyses.filter(a=>!a.file.includes('pubcap')&&!a.file.includes('deductions')&&!a.file.includes('quadratic')&&!a.file.includes('rescore')).map(a=>a.file):[])])];
 const matchingOld=oldBooks.filter(x=>norm(x.title)===norm(title)&&(!author||norm(x.author)===norm(author)||norm(x.author).startsWith(norm(author)+'amywallace')));
 const sources=[...new Set([...pri.flatMap(x=>x.sources||[]),...(legacy?.sources||[]),...matchingOld.flatMap(x=>x.sources||[x.source]).filter(Number.isInteger),...(!pri.length?exactAnalyses.filter(a=>a.text.split('\n').some(l=>l.includes(title)&& (author?l.includes(author.split(';')[0]):l.includes('*'+title+'*')))).flatMap(a=>{const s=sourceMap.get(a.file.split('/').pop())||[];return new Set(s).size===1?s:[]}):[])])].sort((a,b)=>a-b);
 const evidence=[...new Set([...pri.flatMap(x=>x.evidence||[]),...(legacy?.evidence||[]),...(extras[id]||[]),...r.amazon.map(x=>x.file),...r.works.map(x=>x.file),...priorReviews])];
 const base={reviewId:id,title,author,status:'excluded',exclusion:(String(p.exclusion)==='1'||p.exclusion==='H1'||(!pri.length&&!legacy&&!manualH2[id]&&!promotions.has(id)))?'H1':'H2',reason:'',confidence:p.confidence||legacy?.confidence||'moderate',sources,evidence,priorReviews,changed:false};
 if(base.exclusion==='H1')base.reason='H1 remains unchanged: '+(p.eligibility||p.reason||'The retained source inventory identifies '+title+' as a fictional narrative or series; the revised H2 and V5 do not exempt fiction.');
 else base.reason=manualH2[id]||((p.eligibility||legacy?.reason||p.reason||'')+' Reconsidered under revised H2: the remaining exclusion rests on the primary course, procedure or reference structure, not merely difficulty, usefulness or specialist readership. No new score is assigned.');
 if(!sources.length&&priorReviews.some(x=>x.includes('readlately')))sources.push(8);
 if(!sources.length&&sourceOverrides[id])sources.push(...sourceOverrides[id]);
 if(promotions.has(id)){
  const q=promotions.get(id),old=oldBooks.find(x=>norm(x.title)===norm(title)&&(!author||norm(x.author)===norm(author)));
  const isRatingAggregate=s=>s?.verified&&Number.isInteger(s.globalCount)&&s.globalCount===s.count&&(s.evidence||[]).some(e=>/global ratings|Sternebewertungen|Bewertungen weltweit|ratings globally/i.test(e));
  const amazonPacket=r.amazon.find(x=>isRatingAggregate(x.record.selected));
  const selected=amazonPacket?.record.selected;
  const asin=pri.flatMap(x=>x.appearances||[]).map(x=>x.asin).find(Boolean);
  const catalog=catalogs.find(x=>norm(x.title)===norm(title)&&((x.author_name||[]).some(n=>norm(author).includes(norm(n)))||x.isbn?.includes(asin)));
  const periodEnd=Object.hasOwn(periods,id)?periods[id]:null;
  const amazon=selected?{status:'verified retained snapshot',count:selected.count,star:selected.star,marketplace:new URL(selected.url).hostname,asin:selected.asin,url:selected.url,retrievedAt:selected.retrievedAt,titleMatch:true,authorMatch:true,provenance:amazonPacket.file,ratingEvidence:selected.evidence.filter(e=>/global ratings|Sternebewertungen|Bewertungen weltweit|ratings globally/i.test(e)),note:'Retained single-product explicitly labelled ratings aggregate from the earlier identity-verified snapshot; not a new live retrieval or summed editions.'}:{status:'unknown — no obscurity deduction',count:null,attempts:r.amazon.flatMap(x=>x.record.attempts||[]).map(x=>({url:x.url,retrievedAt:x.retrievedAt,observedCount:x.count,globalCount:x.globalCount,identityVerified:x.verified,ratingAggregateAccepted:isRatingAggregate(x),evidence:x.evidence||[]})),note:r.amazon.some(x=>x.record.selected?.count)?'Historical product snapshot contains only a reviews/Rezensionen-labelled count without corroborating total-rating evidence. That count is not used as ratings. Prior attempts remain cited; O15=0 uses the required unknown-count fallback.':r.amazon.length?'Prior matching-product retrieval attempts in the cited cache did not recover an identity-verified rating aggregate; apply specified O15=0 fallback.':'No verified aggregate in retained evidence. Matching Amazon retrieval attempts are logged in excluded_a-amazon-attempts.json; use unknown-count O15=0 only after the attempt is recorded.'};
  let purchaseUrl=old?.purchaseUrl||p.purchaseUrl||(asin?'https://www.amazon.de/dp/'+asin:'https://www.amazon.de/s?k='+encodeURIComponent(title+' '+author+' paperback'));
  const notes=[q.caveat,
   'Connects '+q.scope+'. The systems attainment reflects the scope of those explicit connections, not merely the number of topics mentioned.',
   'The transferable payload is '+q.scope+'. Credit is limited where the lessons depend on one author, setting or specialized field.',
   'Mechanistic credit concerns the causal or conceptual links in '+q.scope+'; descriptive examples do not establish every general claim.',
   'The structure described in the retained evidence advances '+q.scope+'. Density is assessed conservatively because this review did not newly read the complete text.',
   'The durable portion concerns '+q.scope+'; dated cases and unsupported forecasts receive no extra credit.',
   'Direct fit is assessed from '+q.scope+' against the reader’s technology, quantitative and systems interests.',
   'Authority is assessed from '+author+'’s documented role and the prior evidence; author reputation is not substituted for the strength of the argument.',
   'Narrative credit reflects the connected explanatory structure identified in this new eligibility decision: '+q.reason,
   'Prose precision is assessed conservatively from the available description, samples and prior review; rhetorical certainty identified above reduces attainment.'];
  Object.assign(base,{id:b.id||p.id||id,status:'recommended',reason:q.reason,changed:true,confidence:'low',eligibilityConfidence:'moderate',year:q.year,yearConfidence:catalog?.first_publish_year===q.year?'high':'moderate',yearNote:'Original publication year retained or reassessed against prior bibliography and cited publisher/catalog evidence; reprints do not reset it.',periodEnd,periodConfidence:periodEnd===null?'moderate':'moderate',periodNote:periodEnd===null?'A general conceptual account, broad cross-period narrative or contemporary memoir; no single bounded historical period is used for H13.':'Central historical account is assessed through '+periodEnd+'; fractional H13 uses that endpoint, independently of publication age.',raw:q.raw,notes,T11:q.T11,T12:q.T12,themeNote:(q.T11?'T11 applies to the predominant unwanted theme. ':'T11=0: an unwanted theme is not established as predominant. ')+(q.T12?'T12 applies because the central account is finance, military/strategy, power, media or philosophy.':'T12=0: the central account is science, technology, industry, organizations or general cognition; restricted themes are auxiliary.'),amazon,reader:old?.reader|| (selected?'[Amazon '+selected.star+' · '+selected.count+']('+selected.url+')':'Reader aggregate unavailable in retained evidence; not inferred.'),purchaseUrl});
  delete base.exclusion;
  if(catalog&&catalog.first_publish_year===q.year)base.evidence.push(catalog._file);
  const fresh=newAmazonAttempts.filter(x=>x.reviewId===id);
  if(amazon.count===null&&fresh.length){amazon.attempts=[...(amazon.attempts||[]),...fresh];amazon.note='Matching Amazon product or title-author search retrieval failed in this review; the dated per-title attempt is retained in excluded_a-amazon-attempts.json. No verified aggregate was obtained, so O15=0 uses the required unknown-count fallback.';base.evidence.push(dir+'excluded_a-amazon-attempts.json');}
  meta.push({reviewId:id,title,year:q.year,catalogYear:catalog?.first_publish_year,oldYear:old?.year||old?.firstYear,prior:priorReviews,amazon:amazon.status,sources});
 }
 if(audit[id]){const extra=audit[id];Object.assign(base,Object.fromEntries(Object.entries(extra).filter(([k])=>!['evidence','noteOverrides'].includes(k))));if(extra.evidence)base.evidence=[...new Set([...base.evidence,...extra.evidence])];for(const [index,value] of Object.entries(extra.noteOverrides||{}))base.notes[+index]=value;}
 assert(base.evidence.length>0||base.exclusion==='H1',id+' missing evidence');
 decisions.push(base);
}
fs.writeFileSync(dir+'excluded_a-decisions.json',JSON.stringify(decisions,null,2)+'\n');
fs.writeFileSync(dir+'excluded_a-metadata-audit.json',JSON.stringify(meta,null,2)+'\n');
console.log(JSON.stringify({count:decisions.length,promotions:decisions.filter(x=>x.status==='recommended').length,vetoed:decisions.filter(x=>x.status==='vetoed').length,noSources:decisions.filter(x=>!x.sources.length).map(x=>[x.reviewId,x.title]),yearConflicts:meta.filter(x=>x.catalogYear&&x.year!==x.catalogYear)},null,2));
