const fs=require('fs');
const cats=['biographies-memoirs','business','technology','strategy','science','politics','economics','philosophy','history','investing','math','design','war'];
async function main(){
 let cursor=0;
 await Promise.all(Array.from({length:4},async()=>{while(cursor<cats.length){let cat=cats[cursor++],file=`data/glasp_261019/${cat}.txt`;if(fs.existsSync(file))continue;try{let r=await fetch('https://r.jina.ai/https://glasp.co/books/category/'+cat,{signal:AbortSignal.timeout(60000)}),s=await r.text();fs.writeFileSync(file,s);console.log(cat,r.status,s.length);}catch(e){console.log(cat,e.message)}}}));
}
main();
