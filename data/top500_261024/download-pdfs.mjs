import fs from 'node:fs';
const dir='data/top500_261024/raw';
const urls={minerals:'https://iea.blob.core.windows.net/assets/278ae0c8-28b8-402b-b9ab-6e45463c273f/TheRoleofCriticalMineralsinCleanEnergyTransitions.pdf',materials:'https://www.oecd.org/content/dam/oecd/en/publications/reports/2015/02/material-resources-productivity-and-the-environment_g1g27386/9789264190504-en.pdf',outlook2060:'https://www.oecd.org/content/dam/oecd/en/publications/reports/2019/02/global-material-resources-outlook-to-2060_g1g98d7d/9789264307452-en.pdf',promenade:'https://arxiv.org/pdf/1612.06373'};
for(const [id,url]of Object.entries(urls)){
 if(fs.existsSync(dir+'/'+id+'.pdf'))continue;
 try{const r=await fetch(url,{signal:AbortSignal.timeout(30000)}),b=Buffer.from(await r.arrayBuffer());
 if(r.ok&&b.subarray(0,4).toString()==='%PDF')fs.writeFileSync(dir+'/'+id+'.pdf',b);
 fs.writeFileSync(dir+'/'+id+'.pdf.json',JSON.stringify({url,status:r.status,bytes:b.length,retrieved:new Date().toISOString()},null,2));
 console.log(id,r.status,b.length);}catch(e){fs.writeFileSync(dir+'/'+id+'.pdf.json',JSON.stringify({url,error:e.message,retrieved:new Date().toISOString()}));console.log(id,e.message);}await new Promise(r=>setTimeout(r,3000));
}
