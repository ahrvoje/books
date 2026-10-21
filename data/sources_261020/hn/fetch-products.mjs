import fs from 'node:fs/promises';
const dir='data/sources_261020/hn';
const jobs=JSON.parse(await fs.readFile(`${dir}/product-jobs.json`));
const path=`${dir}/product-results.json`;
let results={};try{results=JSON.parse(await fs.readFile(path));}catch{}
for(const [index,url]of jobs){
 if(results[index]?.url===url&&results[index]?.status)continue;
 const result={url,attemptedAt:new Date().toISOString(),count:null,earlierAttempts:results[index]?[results[index]]:[]};
 try{
  const r=await fetch(url,{signal:AbortSignal.timeout(20000)}),html=await r.text();
  result.status=r.status;result.finalUrl=r.url;result.rawFile=`${dir}/raw/product-${index}.html`;
  await fs.writeFile(result.rawFile,html);
  const text=s=>(s||'').replace(/<[^>]*>/g,' ').replace(/\s+/g,' ').trim();
  result.title=text(html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1]);
  result.byline=text(html.match(/id="bylineInfo"[^>]*>([\s\S]*?)<\/div>/i)?.[1]);
  result.ratingEvidence=html.match(/<span[^>]*data-hook="total-review-count"[^>]*>[\s\S]*?<\/span>/i)?.[0]||null;
  const count=text(result.ratingEvidence).match(/([\d,]+)\s+global ratings/i);
  if(count)result.count=Number(count[1].replaceAll(',',''));
  result.outcome=/robot check|automated access|validateCaptcha/i.test(html)?'Access challenge; stopped.':result.count===null?'No global-rating count extracted; inspect raw metadata.':'Global-rating label extracted; identity must be checked manually before use.';
 }catch(e){result.outcome=String(e);}
 results[index]=result;await fs.writeFile(path,JSON.stringify(results,null,2)+'\n');console.log(result);
}
