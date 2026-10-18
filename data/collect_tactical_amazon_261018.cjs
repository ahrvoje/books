const fs=require('fs'),{retrieve,clean}=require('./collect_amazon.cjs');
const file='data/tactical_amazon_261018.json',candidates=require('./tactical_candidates_261018.json');
const books=fs.existsSync(file)?JSON.parse(fs.readFileSync(file,'utf8')):[];
for(const b of candidates){const old=books.find(x=>x.id===b.id);if(old)old.asins=[...new Set([...old.asins,...b.asins])];else books.push({...b,count:null,attempts:[]});}
const save=()=>fs.writeFileSync(file,JSON.stringify(books,null,2)+'\n');
async function main(){
 let i=0;
 await Promise.all(Array.from({length:3},async()=>{while(i<books.length){
  const b=books[i++];
  for(const asin of b.asins)for(const host of ['www.amazon.com','www.amazon.it','www.amazon.de','www.amazon.com.au']){
   const url=`https://${host}/dp/${asin}`;if(b.attempts.some(a=>(a.requestedUrl||a.url)===url))continue;
   const previous={...b};const ok=await retrieve(b,url);
   if(ok&&previous.count!==null&&previous.count>b.count)Object.assign(b,{...previous,attempts:b.attempts});save();
  }
  if(b.count!==null&&!b.starsEvidence){
   try{
    const h=await(await fetch(b.url,{signal:AbortSignal.timeout(20000)})).text();
    const title=clean(h.match(/id="productTitle"[^>]*>([\s\S]*?)<\/span>/)?.[1]);
    const snippet=h.match(/<span[^>]*id="acrPopover"[^>]*>/)?.[0]||'',m=snippet.match(/title="([0-9.,]+) (?:out of|su|von)/),c=h.match(/id="acrCustomerReviewText"[^>]*>([^<]*)/);
    if(m&&title===b.productTitle&&c&&Number(c[1].replace(/[^0-9]/g,''))===b.count){b.stars=Number(m[1].replace(',','.'));b.starsEvidence={url:b.url,retrievedAt:new Date().toISOString(),snippet};}
   }catch(e){b.starsError=e.message;}
  }
  save();console.log(JSON.stringify({id:b.id,count:b.count,stars:b.stars,asin:b.asin,title:b.productTitle}));
 }}));save();
}
main().catch(e=>{console.error(e);process.exitCode=1;});
