import fs from 'node:fs';
const html=fs.readFileSync('data/top500_261024/raw/spacesuit-publisher.html','utf8');
for(const m of html.matchAll(/href="([^"]+)"[^>]*>([^<]*(?:Contents|Index)[^<]*)</g)){
 const url=m[1],file='data/top500_261024/raw/spacesuit-'+(m[2]==='Index'?'index':'contents')+'.pdf';
 try{const r=await fetch(url,{signal:AbortSignal.timeout(15000)});if(!r.ok)throw Error(r.status);fs.writeFileSync(file,Buffer.from(await r.arrayBuffer()));fs.writeFileSync(file+'.json',JSON.stringify({url,retrieved:new Date().toISOString(),status:r.status}));console.log({file,bytes:fs.statSync(file).size});}catch(e){console.log({url,error:e.message});}
}
