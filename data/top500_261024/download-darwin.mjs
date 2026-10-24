import fs from 'node:fs';
const url='https://assets.cambridge.org/97805218/67092/frontmatter/9780521867092_frontmatter.pdf',file='data/top500_261024/raw/darwin-front.pdf';
const r=await fetch(url,{signal:AbortSignal.timeout(20000)});if(!r.ok)throw Error(r.status);
fs.writeFileSync(file,Buffer.from(await r.arrayBuffer()));fs.writeFileSync(file+'.json',JSON.stringify({url,retrieved:new Date().toISOString(),status:r.status}));
