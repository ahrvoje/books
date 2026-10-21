import fs from 'node:fs';
const p=JSON.parse(fs.readFileSync('data/sources_261020/hn/transfer-root-memoirs.json','utf8'));
for(const b of p)console.log(JSON.stringify({i:b.packetIndex,id:b.id,title:b.title,author:b.author,
 prior:b.prior?{id:b.prior.id,raw:b.prior.raw,status:b.prior.status,year:b.prior.year,periodEnd:b.prior.periodEnd,review:b.prior.reviewAnchor||b.prior.currentReview,reason:b.prior.reason}:null,
 mentions:b.appearances.flatMap(a=>a.sourceQuotes||[])}));
fs.writeFileSync('data/sources_261020/primary/memoir-queries.json',JSON.stringify(p.map(b=>({index:b.packetIndex,q:b.title+' '+b.author+' book publisher contents original publication'})),null,2));
