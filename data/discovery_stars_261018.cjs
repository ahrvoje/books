const fs=require('fs'),crypto=require('crypto');
const {clean,count}=require('./collect_amazon.cjs');
const path='data/discovery_amazon_261018.json',books=JSON.parse(fs.readFileSync(path,'utf8'));
async function main(){
 let i=0;await Promise.all(Array.from({length:3},async()=>{while(i<books.length){
  const b=books[i++];
  if(b.stars!==undefined)continue;
  try{
   const r=await fetch(b.url,{signal:AbortSignal.timeout(20000)}),h=await r.text();
   const title=clean(h.match(/id="productTitle"[^>]*>([\s\S]*?)<\/span>/)?.[1]);
   const countHtml=h.match(/<span[^>]*data-hook="total-review-count"[^>]*>[\s\S]*?<\/span>/)?.[0]??h.match(/<span[^>]*id="acrCustomerReviewText"[^>]*>[\s\S]*?<\/span>/)?.[0];
   const starHtml=h.match(/<span[^>]*id="acrPopover"[^>]*>/)?.[0];
   const stars=starHtml?.match(/title="([\d.,]+) (?:out of|su|von) 5/);
   if(r.status===200&&title===b.productTitle&&count(countHtml)===b.count&&stars){
    b.stars=Number(stars[1].replace(',','.'));
    b.starsEvidence={url:r.url,retrievedAt:new Date().toISOString(),title,count:b.count,html:starHtml,sha256:crypto.createHash('sha256').update(h).digest('hex')};
    delete b.starsUnavailable;
   }
  }catch(e){b.starsError=e.message;}
  console.log(JSON.stringify({id:b.id,stars:b.stars??null}));
 }}));fs.writeFileSync(path,JSON.stringify(books,null,2)+'\n');
}
main();
