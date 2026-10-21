import fs from 'node:fs/promises';
const urls=[
 ['128-main','https://auxiliarymemory.com/2017/01/06/rereading-the-soul-of-a-new-machine-by-tracy-kidder/'],
 ['129-main','https://groups.csail.mit.edu/medg/people/psz/Licklider.html'],
 ['130-info-ops','https://leanpub.com/info-ops'],
 ['130-intentional','https://www.theintentionalengineer.com/'],
 ['134-cybersecurity','https://medium.com/@oandreasc/cybersecurity-101-fundamentals-for-junior-engineers-and-job-seekers-b3efbc0a98bd'],
 ['135-asimov','https://sursumcorda.salemsattic.com/archives/2018/06/19/isaac-asimov-s-american-history-series'],
 ['135-steinmetz','https://www.simonandschuster.com/books/Charles-Proteus-Steinmetz/Robert-W-Bly/9781610353267']
];
const outcomes=[];
for(const [name,url] of urls){
 try {
  const r=await fetch(url,{signal:AbortSignal.timeout(20000)}),text=await r.text();
  await fs.writeFile(`data/sources_261020/hn/raw/${name}.html`,text);
  outcomes.push({name,url,status:r.status,retrieved:new Date().toISOString(),bytes:text.length});
 }catch(e){outcomes.push({name,url,error:String(e),retrieved:new Date().toISOString()});}
 await fs.writeFile('data/sources_261020/hn/auxiliary-retrieval.json',JSON.stringify(outcomes,null,2)+'\n');
 console.log(outcomes.at(-1));
}
