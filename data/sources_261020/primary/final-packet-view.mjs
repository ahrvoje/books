import fs from 'node:fs';
const p=JSON.parse(fs.readFileSync('data/sources_261020/math/transfer-root-final.json','utf8'));
for(const [j,b] of p.entries())console.log(JSON.stringify({j,i:b.packetIndex,id:b.id,title:b.title,author:b.author,
 prior:b.prior?{id:b.prior.id,raw:b.prior.raw,status:b.prior.status,year:b.prior.year,periodEnd:b.prior.periodEnd,review:b.prior.reviewAnchor||b.prior.currentReview,reason:b.prior.reason}:null,
 mentions:b.appearances.flatMap(a=>a.sourceQuotes||[])}));
fs.writeFileSync('data/sources_261020/primary/final-queries.json',JSON.stringify(p.map((b,j)=>({index:j,id:b.id,q:b.title+' '+b.author+' book publisher contents original publication'})),null,2));
