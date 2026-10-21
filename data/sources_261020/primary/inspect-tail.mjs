import fs from 'node:fs';
const p=JSON.parse(fs.readFileSync('data/sources_261020/hn/transfer-root-tail.json','utf8'));
const indices=process.argv.slice(2).map(Number);
for(const b of p.filter(b=>!indices.length||indices.includes(b.packetIndex))){
 console.log(JSON.stringify({i:b.packetIndex,id:b.id,title:b.title,author:b.author,
 prior:b.prior?{id:b.prior.id,status:b.prior.status,raw:b.prior.raw,year:b.prior.year,periodEnd:b.prior.periodEnd,T11:b.prior.T11,T12:b.prior.T12,review:b.prior.reviewAnchor}:null,
 excluded:b.priorExcluded,mentions:b.appearances.flatMap(a=>a.sourceQuotes||[])}));
}
