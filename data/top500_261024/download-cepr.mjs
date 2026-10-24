import fs from 'node:fs';
const url='https://kclpure.kcl.ac.uk/ws/portalfiles/portal/128186764/The_Economics_of_the_Second_World_War_Seventy_Five_Years_On_.pdf';
const r=await fetch(url,{signal:AbortSignal.timeout(30000)}),b=Buffer.from(await r.arrayBuffer()),file='data/top500_261024/raw/ww2economics.pdf';
if(r.ok&&b.subarray(0,4).toString()==='%PDF')fs.writeFileSync(file,b);
fs.writeFileSync(file+'.json',JSON.stringify({url,status:r.status,bytes:b.length,retrieved:new Date().toISOString()},null,2));
console.log(r.status,b.length);
