import fs from 'node:fs';
const p=JSON.parse(fs.readFileSync('data/remaining_261021/prepared.json'));
for(const b of p.records.filter(b=>b.disposition==='assessed')){
 const m=b.metadataCandidate,g=b.goodreads;
 if(!m&&!g&&!b.verification)console.log('NO MATCHED METADATA',b.batchId,b.title,b.author,b.year);
 else if(m&&m.year!==b.year&&!b.verification)console.log('YEAR CONFLICT',b.batchId,b.year,m.year,b.title);
}
