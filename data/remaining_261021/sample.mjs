import fs from 'node:fs';
import q from './queue.mjs';
for(const id of ['u0159','u0352','u0389','u0411','u0424','u1084','u1085']) console.log(JSON.stringify(q.find(b=>b.batchId===id)));
for(const file of ['metadata.json','enriched.json','goodreads.json','ratings.json']){const d=JSON.parse(fs.readFileSync('data/remaining_261021/'+file)); console.log(file,JSON.stringify(Array.isArray(d)?d[0]:Object.values(d)[0]).slice(0,6500));}
