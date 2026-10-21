import fs from 'node:fs';
const p=JSON.parse(fs.readFileSync('data/remaining_261021/prepared.json'));
for(const b of p.records.filter(b=>b.disposition==='assessed'&&b.status==='recommended').sort((a,b)=>b.total-a.total).slice(0,18))console.log(JSON.stringify({id:b.batchId,title:b.title,author:b.author,year:b.year,periodEnd:b.periodEnd,raw:b.raw,T11:b.T11,T12:b.T12,basis:b.basis,limits:b.limitations}));
