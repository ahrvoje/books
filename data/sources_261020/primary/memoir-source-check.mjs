import fs from 'node:fs';
const nodes=JSON.parse(fs.readFileSync('data/sources_261020/hn/132-nodes.json','utf8'));
for(const id of [38558286,38560202])console.log(JSON.stringify(nodes.find(n=>n.id===id)));
