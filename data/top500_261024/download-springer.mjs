import fs from 'node:fs';
for(const [id,url]of [['curiosity-front','https://link.springer.com/content/pdf/bfm%3A978-3-319-68146-7/1'],['curiosity-back','https://link.springer.com/content/pdf/bbm%3A978-3-319-68146-7/1']]){
 const file='data/top500_261024/raw/'+id+'.pdf';
 const r=await fetch(url,{signal:AbortSignal.timeout(30000)}),b=Buffer.from(await r.arrayBuffer());
 fs.writeFileSync(file+'.json',JSON.stringify({url,status:r.status,bytes:b.length,retrieved:new Date().toISOString()}));
 console.log(id,r.status,b.length);if([403,429,503].includes(r.status))break;
 if(r.ok&&b.subarray(0,4).toString()==='%PDF')fs.writeFileSync(file,b);
 await new Promise(r=>setTimeout(r,5000));
}
