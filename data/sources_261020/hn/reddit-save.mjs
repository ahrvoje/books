import fs from 'node:fs';
import {domain,edition,observed} from './save-reviewed.mjs';
export {domain,edition};
export const packet=JSON.parse(fs.readFileSync('data/sources_261020/hn/reddit-transfer.json'));
const file='data/sources_261020/hn/reddit-assessments.json';
export function save(rows){
 const data=fs.existsSync(file)?JSON.parse(fs.readFileSync(file)):[];
 for(const r of rows){const i=data.findIndex(x=>x.id===r.id);if(i<0)data.push(r);else data[i]=r;}
 const max=[20,17,15,12,10,9,7,5,3,2];
 for(const r of data)if(['recommended','vetoed'].includes(r.status)){
  if(r.raw?.length!==10||r.notes?.length!==10||r.raw.some((n,i)=>!Number.isFinite(n)||n<0||n>max[i]))throw Error(r.id);
 }
 fs.writeFileSync(file,JSON.stringify(data,null,2)+'\n');
 console.log({saved:data.length,remaining:packet.filter(x=>!data.some(d=>d.id===x.id)).map(x=>x.title)});
}
export function base(i,review){
 const b=packet[i];
 return {id:b.id,title:b.title,author:b.author,confidence:'moderate',reassessment:'New work in this source packet; nomination is not an independent quality vote.',...review,
 evidence:[...new Set([...b.appearances.flatMap(a=>a.sourceUrls||[a.sourcePage]),...(review.evidence||[])])]};
}
export function scored(i,review){
 const b=packet[i],attempt=JSON.parse(fs.readFileSync('data/sources_261020/hn/product-results.json'))[1000+i];
 const rating=Number.isInteger(attempt?.count)?observed(1000+i,review.edition?.format||'Print edition'): {
 amazon:{count:null,status:'No verified global-rating aggregate after the recorded public retrieval. O15=0 unknown-count fallback.',attemptedAt:attempt?.attemptedAt,attempts:attempt?[attempt]:[]},
 purchaseUrl:attempt?.url||`https://www.amazon.de/s?k=${encodeURIComponent(b.title+' '+b.author)}`,purchaseFormat:review.edition?.format||'Unverified search locator',reader:'Unavailable'};
 const out=base(i,{status:'recommended',yearConfidence:'moderate',periodConfidence:'moderate',...review,...rating,
 enrichment:{edition:review.edition||null,domains:review.domains||{},connections:{status:'partial',mechanisms:review.mechanisms||[],joins:[],limitations:'Only cited descriptions, excerpts and prior assessments were inspected; this is not a complete full-text inventory.'},research:{reviewed:'2026-10-20',unknownReason:'Uncoded domains and connections remain unknown; inspected materials do not support exhaustive absence claims.'}}});
 delete out.edition;delete out.domains;delete out.mechanisms;
 return out;
}
