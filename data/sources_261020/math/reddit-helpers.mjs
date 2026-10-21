import fs from 'node:fs';
export const dir='data/sources_261020/math/';
export const packet=JSON.parse(fs.readFileSync(dir+'reddit-packet.json'));
const archived=JSON.parse(fs.readFileSync(dir+'reddit-archived-amazon.json'));
export const edition=(pages,id,url,year,format,confidence='high')=>({pages,id,url,retrieved:'2026-10-20',language:'English',format,year,confidence});
export const domain=(value,rationale,ref,confidence='moderate')=>({value,confidence,rationale,refs:[ref]});
export const mechanism=(id,domains,roles,statement,scope,strength,ref)=>({id,domains,roles,statement,scope,strength,confidence:'moderate',refs:[ref]});
export function base(index){
 const q=packet[index],old=q.prior,a=old?.amazon;
 const saved=archived.find(x=>x.id===q.id&&x.id!=='q0452');
 const unambiguous=a&&JSON.stringify(a.evidence||[]).includes('global ratings');
 return {index,status:'recommended',confidence:'moderate',yearConfidence:'high',periodConfidence:'moderate',T11:0,T12:0,
 amazon:saved?{count:saved.count,status:'Verified matching archived product response; explicit global ratings label. Title and author checked.',marketplace:new URL(saved.url).hostname,asin:saved.url.split('/').pop(),url:saved.url,retrievedAt:saved.retrieved,evidence:[saved.evidence],attempts:[{url:saved.url,retrievedAt:saved.retrieved,rawFile:saved.rawFile,result:'Matching title, author and explicit global-rating label.'}]}:unambiguous?a:{count:null,status:a?.count?'The prior snapshot exposes only a review-label count. Total ratings are unverified; O15=0 unknown-count fallback.':'No verified total-rating aggregate; O15=0 unknown-count fallback.',attemptedAt:'2026-10-20',attempts:a?.attempts||[],accessNote:'Native Amazon requests stopped after a Continue shopping / validateCaptcha challenge on 2026-10-20. No claim that every later product was fetched.'},
 purchaseUrl:old?.purchaseUrl||'https://www.amazon.de/s?k='+encodeURIComponent(q.title+' '+q.author+' paperback'),
 purchaseFormat:old?.purchaseFormat||'Search locator only; Amazon product format unverified.',
 reader:saved?'Amazon archived product: '+saved.count+' global ratings; '+saved.retrieved+'.':unambiguous?'Retained Amazon snapshot: '+a.count+' total ratings; '+(a.retrievedAt||a.attemptedAt)+'.':'Unavailable verified reader aggregate.',
 enrichment:{edition:q.priorEnrichment?.edition||null,domains:{},connections:{status:'partial',mechanisms:[],joins:[],limitations:'Listed descriptions, contents, excerpts and prior book-specific reviews inspected. Full text and all potential interactions were not audited.'},research:{reviewed:'2026-10-20',unknownReason:'Uncoded domain depth remains unknown; limited source coverage does not establish absence.'}}};
}
export function saveBatch(number,records){fs.writeFileSync(dir+'reddit-batch-'+number+'.json',JSON.stringify(records,null,2)+'\n');}
