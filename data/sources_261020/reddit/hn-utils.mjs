import fs from 'node:fs';
export const dir='data/sources_261020/reddit';
export const packet=JSON.parse(fs.readFileSync('data/sources_261020/hn/transfer-reddit.json'));
export const book=i=>{const b=packet.find(b=>b.packetIndex===i);if(!b)throw Error(`Unassigned ${i}`);return b;};
export const ed=(pages,id,url,format,year,notes='Identified English edition; original year recorded separately.')=>({pages,id,url,format,year,notes,language:'English',retrieved:'2026-10-20',confidence:'moderate'});
export function fresh({i,ref,extra=[],ed:edition=null,domains=[],notes,mechanism,roles,scope,...r}){
 const b=book(i);
 const refs=[ref,...extra];
 const d=Object.fromEntries(domains.map(([id,value,rationale])=>[id,{value,rationale,confidence:'low',refs:[ref]}]));
 return {
  id:b.id,title:b.title,author:b.author,status:'recommended',confidence:'low',
  reassessment:'New cumulative work. The source establishes nomination; evaluation uses the cited purpose, contents and bibliographic evidence.',
  yearConfidence:'moderate',yearNote:`Original year ${r.year} follows the cited bibliography; later editions do not reset age.`,
  periodEnd:null,periodConfidence:'moderate',periodNote:'A cross-period explanatory argument has no single central historical endpoint.',
  ...r,notes:notes.split('|'),evidence:[...refs,...b.appearances.flatMap(a=>a.sourceUrls)],
  amazon:{count:null,status:'Unavailable after the recorded title-author Amazon-domain index search. O15=0 fallback.',attemptedAt:'2026-10-20',
   attempts:[{type:'public search index',target:`${b.title} — ${r.author||b.author}`,file:`${dir}/raw/hn-amazon-${i}.json`,result:'No usable matching total-rating aggregate established; see saved exact query and results.'},{type:'shared product retrieval limit',file:`${dir}/amazon-fetch.json`,result:'Earlier public product collection stopped at a challenge; no further direct requests made. This is not a claim that this product was individually fetched.'}]},
  purchaseUrl:`https://www.amazon.de/s?k=${encodeURIComponent(`${r.title||b.title} ${r.author||b.author} paperback`)}`,purchaseFormat:'Search locator only; matching product and binding not verified.',
  reader:'Unavailable; no verified matching reader aggregate.',
  enrichment:{edition,domains:d,connections:{status:'partial',mechanisms:mechanism?[{id:`hn-${i}-connection`,domains:Object.keys(roles),roles,statement:mechanism,scope,strength:2,confidence:'low',refs:[ref]}]:[],joins:[],limitations:'Bounded description and contents review; not all chapters or possible connections inspected.'},research:{reviewed:'2026-10-20',unknownReason:edition?'Edition identified; unassessed domain values remain unknown.':'No verified full-scope edition page count established; unassessed domains remain unknown.'}}
 };
}
export function gate(i,status,eligibility,reason,evidence,extra={}){
 const b=book(i);
 return {id:b.id,title:b.title,author:b.author,status,confidence:'moderate',eligibility,reason,evidence:[...evidence,...b.appearances.flatMap(a=>a.sourceUrls)],reassessment:'New work-level eligibility or identity assessment from captured source and cited evidence.',...extra};
}
export function save(rows){
 const file=`${dir}/hn-assessments.json`,all=fs.existsSync(file)?JSON.parse(fs.readFileSync(file)):[];
 const max=[20,17,15,12,10,9,7,5,3,2];
 for(const r of rows){
  if(!packet.some(b=>b.id===r.id))throw Error(`Unassigned ${r.id}`);
  if(['recommended','vetoed'].includes(r.status)){
   if(r.raw?.length!==10||r.notes?.length!==10)throw Error(`Criteria ${r.id}`);
   if(r.raw.some((v,j)=>!Number.isFinite(v)||v<0||v>max[j]))throw Error(`Range ${r.id}`);
  }
  const ix=all.findIndex(b=>b.id===r.id);if(ix>=0)all[ix]=r;else all.push(r);
 }
 all.sort((a,b)=>packet.findIndex(p=>p.id===a.id)-packet.findIndex(p=>p.id===b.id));
 fs.writeFileSync(file,JSON.stringify(all,null,2)+'\n');console.log(JSON.stringify({saved:rows.length,total:all.length}));
}
