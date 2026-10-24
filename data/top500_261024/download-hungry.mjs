import fs from 'node:fs';
const url='https://api.pageplace.de/preview/DT0400.9780801466083_A29962791/preview-9780801466083_A29962791.pdf',file='data/top500_261024/raw/hungry-preview.pdf';
const r=await fetch(url,{signal:AbortSignal.timeout(25000)});
if(!r.ok)throw Error(String(r.status));
fs.writeFileSync(file,Buffer.from(await r.arrayBuffer()));
fs.writeFileSync(file+'.json',JSON.stringify({url,retrieved:new Date().toISOString(),status:r.status}));
console.log({file,bytes:fs.statSync(file).size});
