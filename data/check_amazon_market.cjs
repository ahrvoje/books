const fs=require('fs');
const {retrieve}=require('./collect_amazon.cjs');
const file='data/amazon_market_checks_261018.json';
const output=fs.existsSync(file)?JSON.parse(fs.readFileSync(file,'utf8')):[];
const books=require('./amazon_verified_261018.json').books.filter(b=>b.count===null&&!output.some(x=>x.id===b.id));
async function main(){
 let cursor=0,done=0;
 await Promise.all(Array.from({length:2},async()=>{
  while(cursor<books.length){
   const old=books[cursor++],b={id:old.id,title:old.title,author:old.author,count:null,attempts:[]};
   const searches=JSON.parse(fs.readFileSync('data/amazon_edition_search_261018.json','utf8'));
   const searched=searches.find(x=>x.id===b.id)?.candidates||[];
   const asins=[...new Set([old.url?.match(/\/dp\/([A-Z0-9]{10})/)?.[1],...searched].filter(Boolean))];
   for(const asin of asins.slice(0,4))if(await retrieve(b,'https://www.amazon.pl/dp/'+asin))break;
   output.push(b);fs.writeFileSync(file,JSON.stringify(output,null,2)+'\n');
   done++;if(done%25===0||done===books.length)console.log(JSON.stringify({done,of:books.length,recovered:output.filter(x=>x.count!==null).length,last:b.title}));
  }
 }));
}
main().catch(e=>{console.error(e);process.exitCode=1;});
