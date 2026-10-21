import fs from 'node:fs';
const path='data/veto_review_261021/a-build.mjs';
let s=fs.readFileSync(path,'utf8');
s=s.replace(/^q\('([^']+)','(.*)'\);$/gm,(_,id,body)=>`q('${id}',\`${body}\`);`);
fs.writeFileSync(path,s);
