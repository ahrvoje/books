import fs from 'node:fs';
const url='https://worrydream.com/refs/NRC_1999_-_Funding_a_Revolution%2C_Government_Support_for_Computing_Research.pdf',file='data/top500_261024/raw/funding.pdf';
const r=await fetch(url,{signal:AbortSignal.timeout(60000)});
if(!r.ok)throw Error(String(r.status));
fs.writeFileSync(file,Buffer.from(await r.arrayBuffer()));
fs.writeFileSync(file+'.json',JSON.stringify({url,retrieved:new Date().toISOString(),status:r.status}));
console.log({file,bytes:fs.statSync(file).size});
