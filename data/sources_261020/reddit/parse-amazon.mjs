import fs from 'node:fs';
import crypto from 'node:crypto';
const dir='data/sources_261020/reddit';
const captures=[
  {id:'n55e2b51df8',file:'amazon-newmap.html',title:'The New Map',author:'Daniel Yergin',product:'0143111159'},
  {id:'n1d652d9db1',file:'amazon-n1d652d9db1.html',title:"Lockheed's Skunk Works",author:'Jay Miller',product:'0942548566'}
];
const clean=s=>(s||'').replace(/<[^>]*>/g,' ').replace(/&#(\d+);/g,(_,n)=>String.fromCharCode(+n)).replace(/&amp;/g,'&').replace(/&(?:lrm|rlm|nbsp);/g,' ').replace(/\s+/g,' ').trim();
const norm=s=>clean(s).toLowerCase().replace(/[^a-z0-9]/g,'');
const out={};
for(const c of captures){
  const file=`${dir}/raw/${c.file}`,html=fs.readFileSync(file,'utf8');
  const title=clean(html.match(/id="productTitle"[^>]*>([\s\S]*?)<\/span>/)?.[1]);
  const byline=clean(html.match(/id="bylineInfo"[^>]*>([\s\S]*?)<\/div>/)?.[1]);
  const global=clean(html.match(/data-hook="total-review-count"[^>]*>([\s\S]*?)<\/span>/)?.[1]);
  const top=clean(html.match(/id="acrCustomerReviewText"[^>]*>([\s\S]*?)<\/span>/)?.[1]);
  const canonical=html.match(/rel="canonical"[^>]*href="([^"]+)"/)?.[1];
  const count=Number(global.match(/^([\d,]+) global ratings$/)?.[1]?.replace(/,/g,''));
  if(!norm(title).includes(norm(c.title))||!norm(byline).includes(norm(c.author))||!canonical?.includes(`/dp/${c.product}`)||!Number.isInteger(count)||Number(top.replace(/[(),]/g,''))!==count)throw new Error(`Invalid identity or aggregate ${c.id}`);
  out[c.id]={
    count,product:c.product,marketplace:'www.amazon.com',url:canonical,
    retrieved:new Date(fs.statSync(file).mtimeMs).toISOString(),confidence:'high',
    status:'Verified total-rating aggregate from one matching public product page.',
    limitations:'One product aggregate only; Amazon may pool linked formats. Counts are not added across products or marketplaces.',
    source:{rawFile:file,sha256:crypto.createHash('sha256').update(html).digest('hex'),title,byline,globalText:global,topText:top},
    attempts:[{url:canonical,rawFile:file,result:'Title, author, canonical ASIN and two rating controls agree.'}]
  };
}
fs.writeFileSync(`${dir}/new-amazon-observations.json`,JSON.stringify(out,null,2)+'\n');
console.log(Object.fromEntries(Object.entries(out).map(([id,v])=>[id,v.count])));
