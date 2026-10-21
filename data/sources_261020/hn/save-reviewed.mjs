import fs from 'node:fs';
export const dir='data/sources_261020/hn';
export const packet=JSON.parse(fs.readFileSync(`${dir}/packet.json`));
export function save(records){
 const file=`${dir}/assessments.json`,current=JSON.parse(fs.readFileSync(file));
 for(const r of records){const at=current.findIndex(x=>x.id===r.id);if(at>=0)current[at]=r;else current.push(r);}
 for(const r of current)if(r.evidence)r.evidence=r.evidence.map(ref=>ref.replace(/#d-(arthur|winchester|hammack|algorithms)$/,'#$1'));
 const max=[20,17,15,12,10,9,7,5,3,2];
 for(const r of current)if(['recommended','vetoed'].includes(r.status)){
  if(r.raw?.length!==10||r.notes?.length!==10||r.raw.some((x,i)=>!Number.isFinite(x)||x<0||x>max[i]))throw Error(`Invalid scoring ${r.id}`);
 }
 fs.writeFileSync(file,JSON.stringify(current,null,2)+'\n');
 const done=new Set(current.map(x=>x.id));
 const transferredFiles=['data/sources_261020/primary/hn-packet.json',`${dir}/transfer-reddit.json`,`${dir}/transfer-root-tail.json`,`${dir}/transfer-root-memoirs.json`];
 const transferred=new Set(transferredFiles.flatMap(file=>fs.existsSync(file)?JSON.parse(fs.readFileSync(file)).map(x=>x.id):[]));
 const unreviewed=packet.filter(x=>!done.has(x.id)&&!transferred.has(x.id));
 fs.writeFileSync(`${dir}/unreviewed.json`,JSON.stringify(unreviewed.map(x=>({id:x.id,title:x.title,author:x.author,priorStatus:x.prior?.status||null})),null,2)+'\n');
 console.log({done:current.length,transferred:transferred.size,remaining:unreviewed.length,statuses:current.reduce((a,x)=>(a[x.status]=(a[x.status]||0)+1,a),{})});
}
export function prior(index,review){
 const b=packet[index],p=b.prior,ref=`analysis/${p.reviewAnchor||p.currentReview}`;
 if(!p)throw Error(`No prior ${index}`);
 return {
  id:b.id,title:b.title,author:b.author,status:p.status,confidence:'moderate',
  eligibility:review.eligibility,reason:review.reason,
  evidence:[ref,...(p.currentReview&&p.currentReview!==p.reviewAnchor?.split('#')[0]?[`analysis/${p.currentReview}#d-${b.id}`]:[]),...b.appearances.flatMap(a=>(a.commentIds||[]).map(id=>/^\d+$/.test(id)?`https://news.ycombinator.com/item?id=${id}`:a.sourcePage)),...(review.evidence||[])],
  reassessment:review.reassessment,raw:review.raw||p.raw,notes:review.notes,
  year:p.year,yearConfidence:p.yearConfidence||'moderate',yearNote:review.yearNote||`Original ${p.year} publication retained after reading the prior book assessment and its bibliographic decision; the known print edition does not reset this date.`,
  T11:p.T11,T12:p.T12,themeNote:review.themeNote,
  periodEnd:p.periodEnd,periodConfidence:p.periodConfidence||'low',periodNote:review.periodNote,
  amazon:p.amazon,purchaseUrl:p.purchaseUrl,purchaseFormat:p.purchaseFormat||p.format||'Format not established.',
  reader:p.amazon?.count!==null&&p.amazon?.count!==undefined?`Amazon ${p.amazon.count.toLocaleString('en-US')} ratings; retained observation ${p.amazon.retrievedAt||p.amazon.attemptedAt}; ${p.amazon.url}`:'Unavailable; retain explicit unknown-count fallback.',
  enrichment:structuredClone(b.priorEnrichment||{edition:null,domains:{},connections:{status:'partial',mechanisms:[],joins:[],limitations:'Only the stated materials were reviewed.'},research:{reviewed:'2026-10-20',unknownReason:'No complete domain or mechanism inventory established.'}}),
  ...review.overrides
 };
}
export function fresh(index,review){
 const b=packet[index];
 const products=JSON.parse(fs.readFileSync(`${dir}/product-results.json`));
 const attempt=products[index];
 return {
  id:b.id,title:b.title,author:b.author,status:'recommended',confidence:'moderate',
  reassessment:'New cumulative work. Source mentions establish nomination; they are not independent quality votes.',
  evidence:[...b.appearances.flatMap(a=>(a.commentIds||[]).map(id=>/^\d+$/.test(id)?`https://news.ycombinator.com/item?id=${id}`:a.sourcePage)),...review.evidence],
  amazon:{count:null,status:'Unavailable: the public product fetch returned an access challenge, which was not followed. O15=0 unknown-count fallback.',attemptedAt:attempt?.attemptedAt||'2026-10-20',attempts:attempt?[attempt]:[{scope:'domain-level',url:'https://www.amazon.com/dp/0262539764/',result:'Public Amazon fetch returned validateCaptcha; no claim of a separate product fetch for this title.'}]},
  reader:'Unavailable; no verified total-rating count.',
  purchaseUrl:`https://www.amazon.de/s?k=${encodeURIComponent(b.title+' '+b.author+' paperback')}`,
  purchaseFormat:'Search locator only; exact purchasable format not established.',
  ...review,
  evidence:[...b.appearances.flatMap(a=>(a.commentIds||[]).map(id=>/^\d+$/.test(id)?`https://news.ycombinator.com/item?id=${id}`:a.sourcePage)),...review.evidence],
  enrichment:{
   edition:review.edition||null,domains:review.domains||{},
   connections:{status:'partial',mechanisms:review.mechanisms||[],joins:[],limitations:'Only the cited source comments, bibliographic records and descriptions/samples were inspected. This is not an exhaustive full-text mechanism inventory.'},
   research:{reviewed:'2026-10-20',unknownReason:review.unknownReason||'Unlisted domains have not been established by the inspected material; they are unknown, not absent.'}
  }
 };
}
export const domain=(value,rationale,refs,confidence='moderate')=>({value,confidence,rationale,refs});
export const edition=(pages,id,url,format,year)=>({pages,id,url,retrieved:'2026-10-20',language:'English',format,year,confidence:'moderate'});
export function observed(index,format='Paperback'){
 const a=JSON.parse(fs.readFileSync(`${dir}/product-results.json`))[index];
 if(!Number.isInteger(a?.count)||a.count<0)throw Error(`No observed aggregate ${index}`);
 return {amazon:{count:a.count,status:'Verified matching title and author on one Amazon.com product; total global ratings, not written reviews. Snapshot can change.',marketplace:'amazon.com',productId:a.url.split('/').filter(Boolean).at(-1),url:a.url,retrievedAt:a.attemptedAt,attemptedAt:a.attemptedAt,attempts:[a]},purchaseUrl:a.url,purchaseFormat:format,reader:`Amazon ${a.count.toLocaleString('en-US')} ratings (${a.attemptedAt.slice(0,10)}); ${a.url}`};
}
