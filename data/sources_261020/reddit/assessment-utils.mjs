import fs from 'node:fs';
export const dir='data/sources_261020/reddit';
export const packet=JSON.parse(fs.readFileSync(`${dir}/packet.json`));
const maxima=[20,17,15,12,10,9,7,5,3,2];
export function prior(i,details){
  const b=packet[i],p=b.prior;
  if(!p)throw new Error(`No prior record: ${i}`);
  return {
    id:b.id,title:b.title,author:b.author,status:p.status,confidence:p.confidence||'low',
    raw:p.raw,year:p.year,yearConfidence:p.yearConfidence||'moderate',
    yearNote:`Original year ${p.year} retained after rereading the cited prior book assessment and current deduction record; the edition year remains separate.`,
    T11:p.T11,T12:p.T12,periodEnd:p.periodEnd,periodConfidence:p.periodConfidence||'low',
    amazon:p.amazon,purchaseUrl:p.purchaseUrl,purchaseFormat:p.purchaseFormat,
    reader:p.amazon?.count!=null?`Amazon ${p.amazon.count.toLocaleString('en-US')} total ratings; retained historical observation, not a new count. ${p.amazon.url||''}`:'Unavailable; no new verified reader aggregate.',
    evidence:[`analysis/${p.reviewAnchor}`,`analysis/${p.currentReview}`,...b.appearances.flatMap(a=>a.sourceUrls)],
    enrichment:b.priorEnrichment||{edition:null,domains:{},connections:{status:'partial',mechanisms:[],joins:[],limitations:'No complete domain or connection review.'},research:{reviewed:'2026-10-20',unknownReason:'No supporting metadata found in the supplied prior record.'}},
    ...details
  };
}
export function fresh(i,details){
  const b=packet[i];
  const observations=fs.existsSync(`${dir}/new-amazon-observations.json`)?JSON.parse(fs.readFileSync(`${dir}/new-amazon-observations.json`)):{};
  const observed=observations[b.id];
  return {
    id:b.id,title:b.title,author:b.author,status:'recommended',confidence:'low',
    reassessment:'New cumulative work. Source mentions establish nomination, not independent evidence of quality.',
    yearConfidence:'moderate',periodConfidence:'low',
    purchaseUrl:observed?.url||`https://www.amazon.de/s?k=${encodeURIComponent(`${b.title} ${b.author} paperback`)}`,
    purchaseFormat:observed?'Paperback identified on the matching public product page; stock not inferred.':'Search locator only; Amazon product and stock not verified.',
    reader:observed?`Amazon ${observed.count.toLocaleString('en-US')} total ratings. ${observed.url} Retrieved ${observed.retrieved}.`:'Unavailable; no verified matching reader aggregate.',
    ...details
  };
}
export function unknownAmazon(i,file){
  const b=packet[i];
  const observations=fs.existsSync(`${dir}/new-amazon-observations.json`)?JSON.parse(fs.readFileSync(`${dir}/new-amazon-observations.json`)):{};
  if(observations[b.id])return observations[b.id];
  return {count:null,status:'Unavailable after public Amazon-domain index search; no matching product rating aggregate was exposed. O15=0 fallback.',attemptedAt:'2026-10-20',attempts:[{type:'public search index',target:`${b.title} — ${b.author}`,result:'The recorded batch searched this work using title and author terms. No usable matching total-rating aggregate; podcast and unrelated results were rejected. The source file preserves the results and, for later batches, exact query strings.',file:`${dir}/raw/${file}`},{type:'shared product retrieval limitation',result:'The public product collector stopped on a challenge at Sierra Hotel after two successful matching products. Further direct product requests were not made; this is not a claim that every product was individually retrieved.',file:`${dir}/amazon-fetch.json`}]};
}
export function enrichment(ref,domainRows,edition=null,mechanisms=[],unknownReason='Only the cited description and bibliographic record were inspected; other domain depths and connections remain unknown.'){
  return {
    edition,
    domains:Object.fromEntries(domainRows.map(([id,value,rationale])=>[id,{value,confidence:'low',rationale,refs:[ref]}])),
    connections:{status:'partial',mechanisms,joins:[],limitations:'Bounded review of the cited description or sample; no claim to have inspected every chapter or possible connection.'},
    research:{reviewed:'2026-10-20',unknownReason}
  };
}
export function edition(pages,id,url,format,year,notes='Publisher or library identifies this edition; original publication year is recorded separately.'){
  return {pages,id,url,retrieved:'2026-10-20',language:'English',format,year,confidence:'moderate',notes};
}
export function save(records){
  const path=`${dir}/assessments.json`;
  const out=fs.existsSync(path)?JSON.parse(fs.readFileSync(path)): [];
  for(const r of records){
    if(!packet.some(b=>b.id===r.id))throw new Error(`Outside packet: ${r.id}`);
    if(['recommended','vetoed'].includes(r.status)){
      if(r.raw?.length!==10||r.notes?.length!==10)throw new Error(`Missing ten criteria: ${r.id}`);
      r.raw.forEach((v,i)=>{if(!Number.isFinite(v)||v<0||v>maxima[i])throw new Error(`Invalid attainment: ${r.id}/${i}`)});
      if(!Number.isInteger(r.year)||![0,-10].includes(r.T11)||![0,-10].includes(r.T12))throw new Error(`Invalid deduction input: ${r.id}`);
    }
    const at=out.findIndex(b=>b.id===r.id);
    if(at>=0)out[at]=r;else out.push(r);
  }
  out.sort((a,b)=>packet.findIndex(x=>x.id===a.id)-packet.findIndex(x=>x.id===b.id));
  fs.writeFileSync(path,JSON.stringify(out,null,2)+'\n');
  console.log(JSON.stringify({saved:records.length,total:out.length}));
}
