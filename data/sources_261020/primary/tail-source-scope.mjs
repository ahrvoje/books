import fs from 'node:fs';
const nodes=JSON.parse(fs.readFileSync('data/sources_261020/hn/135-nodes.json','utf8'));
for(const id of [29499868,29463414,29463715,29463372,29463491,29463582,29468073,29593530,29603133]){
 console.log(JSON.stringify(nodes.find(n=>n.id===id)));
}
