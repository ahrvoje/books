const fs=require('fs');
const {retrieve}=require('./collect_amazon.cjs');
const path='data/discovery_amazon_261018.json';
const books=JSON.parse(fs.readFileSync(path,'utf8'));
async function main(){
 let i=0;
 await Promise.all(Array.from({length:3},async()=>{while(i<books.length){
  const b=books[i++];let best={...b};
  for(const asin of b.asins){
   for(const host of ['www.amazon.com','www.amazon.it','www.amazon.de']){
    const url=`https://${host}/dp/${asin}`;
    if(b.attempts.some(a=>(a.requestedUrl||a.url)===url))continue;
    if(await retrieve(b,url)){
     if(b.count>=(best.count??-1))best={...b};
    }
   }
  }
  Object.assign(b,best);
  b.selection='Largest observed verified English-edition aggregate; never summed. All supplied editions checked on .com, .it and .de where accessible.';
  fs.writeFileSync(path,JSON.stringify(books,null,2)+'\n');
  console.log(JSON.stringify({id:b.id,count:b.count,url:b.url,verified:b.attempts.filter(a=>a.verified).map(a=>[a.url,a.globalCount??a.topCount])}));
 }}));
}
main().catch(e=>{console.error(e);process.exitCode=1;});
