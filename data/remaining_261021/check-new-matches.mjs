import fs from 'node:fs';
import q from './queue.mjs';
const c=JSON.parse(fs.readFileSync('data/source_review_261021/compiled.json'));
for(const [id,old] of [['u0417','q0162'],['u1121','q0689'],['u1211','h1188'],['u1723','h0239'],['u1884','q0191']]){
console.log(JSON.stringify({source:q.find(b=>b.batchId===id),existing:[...c.currentBooks,...c.exclusions].find(b=>b.id===old)},null,0));
}
