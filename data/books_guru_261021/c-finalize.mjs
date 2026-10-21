import fs from 'node:fs';
const dir='data/books_guru_261021/';
const facts=JSON.parse(fs.readFileSync(dir+'c-facts.json','utf8'));
const attempts=JSON.parse(fs.readFileSync(dir+'c-amazon.json','utf8'));
const audit={};
const webIds=new Set(['bg35aa63a232','bg54bbe35a65','bg5ca24349c5','bga6834f601a','bga3b46c14f3','bgbcbef3ba46','bg72d3a6676e','bgcf1adb2f17']);
const reviewsOnly=new Set(['bg35aa63a232','bg5ca24349c5','bga6834f601a','bgbcbef3ba46']);
for(const f of facts){
 const a=attempts.find(x=>x.id===f.id);if(!a)throw Error('No attempt '+f.id);
 audit[f.id]={count:null,status:'Unknown: the direct product request encountered a shared transport EACCES failure; no product content was returned. Source-reported counts are unverified. O15=0 fallback.',attemptedAt:'2026-10-21',marketplace:'amazon.com',asin:a.url.split('/').pop(),url:a.url,attempts:[{url:a.url,attemptedAt:a.attemptedAt,status:a.error,method:'direct public HTTP fetch; shared environment transport failure',evidence:'data/books_guru_261021/c-amazon.json'}]};
 if(webIds.has(f.id)){
  const status=reviewsOnly.has(f.id)?'Public web product text matched the title but showed an aria-label written-review count; no explicit global-rating aggregate was found. The reviews count is rejected.':'Public web product retrieval returned an internal fetch error; no usable aggregate.';
  audit[f.id].status='Unknown after direct HTTP and public web attempts. '+status+' O15=0 fallback.';
  audit[f.id].attempts.push({url:a.url,attemptedAt:'2026-10-21',method:'public web product retrieval and targeted text search',status,evidence:'data/books_guru_261021/c-amazon-web-01.md'});
 }
 for(const k of ['yearNote','periodNote','themeNote','reason'])if(f[k])f[k]=f[k].replace(/([A-Za-z])(\d{4})/g,'$1 $2').replace(/(\d{4})([A-Za-z])/g,'$1 $2');
 if(f.yearNote)f.yearNote=f.yearNote.replace('asPrayers:ACommunionwithOurCreator;TheCircleofFireis','as Prayers: A Communion with Our Creator; The Circle of Fire is');
}
fs.writeFileSync(dir+'c-facts.json',JSON.stringify(facts,null,2)+'\n');
fs.writeFileSync(dir+'c-amazon-audit.json',JSON.stringify(audit,null,2)+'\n');
console.log({scored:facts.length,recordedAttempts:Object.values(audit).reduce((a,b)=>a+b.attempts.length,0)});
