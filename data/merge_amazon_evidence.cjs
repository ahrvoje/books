const fs=require('fs'),assert=require('assert/strict');
const file='data/amazon_verified_261018.json',state=require('./amazon_verified_261018.json');
const byId=new Map(state.books.map(b=>[b.id,b]));
let added=0;
function adopt(id,r,note){
 const b=byId.get(id);assert(b);if(b.count!==null)return;
 assert(Number.isInteger(r.count)&&r.count>=0);assert(r.evidence?.length);
 const {id:unused,title:unusedTitle,author:unusedAuthor,attempts:unusedAttempts,...fields}=r;
 Object.assign(b,fields,{status:'verified matching Amazon product aggregate',confidence:'high',verifiedAt:r.verifiedAt||r.retrievedAt||new Date().toISOString(),marketplace:new URL(r.url).hostname,asin:r.url.match(/\/dp\/([A-Z0-9]{10})/i)?.[1],identityNote:note});added++;
}
for(const r of require('./amazon_final_checks_261018.json'))adopt(r.id,r,r.identityNote);
for(const r of require('./amazon_market_checks_261018.json')){
 const b=byId.get(r.id);for(const a of r.attempts||[])if(!b.attempts.some(x=>x.sha256===a.sha256&&x.url===a.url))b.attempts.push(a);
 if(r.count!==null)adopt(r.id,r,'Direct product title and author match; top/global counts agree when both present.');
}
const exceptions={q0132:'Punctuation-only title variation: X,Y&Z; matching Dermot Turing byline.',q0391:'A. Zee and Anthony Zee are the same author. Exact title; excludes the different textbook In a Nutshell.',q0390:'A. Zee and Anthony Zee are the same author. Exact main title.',q0501:'GlobalismRevised is a spacing error in Amazon title; matching Ambrose byline.',q0496:'Amazon omits the subtitle; matching David I. Harvie byline.',q0772:'Amazon abbreviates America to AMER; matching David Hawke byline.',q0757:'Exact title includes George Orwell; byline field instead names publisher Penguin Classics.',q0934:'Amazon misspells Interrupted as Interupted; matching Etty Hillesum byline.',q0976:'Exact title and ISBN 1847923844 match Peter Singer in Google Books: https://books.google.com/books?id=UYLAsgEACAAJ',q1000:'Exact title and ISBN 1529108292 match David Attenborough in Google Books: https://books.google.com/books?id=EOHJzQEACAAJ'};
for(const [id,note] of Object.entries(exceptions)){
 const b=byId.get(id),a=b.attempts.find(x=>x.topCount!==null&&x.topCount!==undefined);
 assert(a&&a.evidence.length);assert(a.globalCount===null||a.globalCount===a.topCount);
 adopt(id,{...a,count:a.globalCount??a.topCount,productTitle:a.title,sourceSnapshot:'Direct public product page; identity manually checked'},note);
}
for(const r of require('./amazon_alternate_cache_261018.json')){
 if(r.count===null||r.count===undefined||['q0391','q0668','q1044'].includes(r.id))continue;
 adopt(r.id,{...r,evidence:[r.evidence],sourceSnapshot:r.snapshot},r.pageTitle?'Product title and author verified in Amazon page title.':'Product title verified; author and exact edition ISBN corroborated by the saved Open Library edition search.');
}
for(const r of require('./amazon_manual_checks_261018.json'))if(r.id==='q0121')adopt(r.id,{...r,count:85,evidence:[r.countElement],sourceSnapshot:r.snapshot},'Exact title and ISBN 0674295390; Harvard University Press identifies Ruixue Jia, Hongbin Li and Claire Cousineau.');
const audit=require('./amazon_identity_audit_261018.json');
for(const r of audit){const b=byId.get(r.id);b.identityAudit={url:r.url,pageTitle:r.pageTitle,productTitle:r.productTitle,retrievedAt:r.retrievedAt,snapshot:r.snapshot};}
state.method='Use one verified English-edition Amazon product aggregate. Match title and author; corroborate a missing byline with exact edition ISBN metadata. Require top/global count agreement when both are present. Prefer the standard English edition over a translation or a fragmented special-edition aggregate. Never add counts across editions or marketplaces. Unknown is not zero; preserve the explicit rule-15 fallback.';
state.mergedAt=new Date().toISOString();
assert.equal(state.books.length,1148);fs.writeFileSync(file,JSON.stringify(state,null,2)+'\n');
console.log(JSON.stringify({added,observed:state.books.filter(b=>b.count!==null).length,missing:state.books.filter(b=>b.count===null).length}));
