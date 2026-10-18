const fs=require('fs');
const {retrieve}=require('./collect_amazon.cjs');
const rows=[
 ['smil','How the World Really Works','Vaclav Smil',2022,['9780593297087','9780241989678']],
 ['postrel','The Fabric of Civilization','Virginia Postrel',2020,['9781541617605','9781541617612']],
 ['minshall','Your Life Is Manufactured','Tim Minshall',2025,['9780571381036','9780571381012']],
 ['minshall_us','How Things Are Made','Tim Minshall',2025,['9780063434653','9780063434660']],
 ['winchester','The Perfectionists','Simon Winchester',2018,['9780062652553','9780062652560']],
 ['johnson','How We Got to Now','Steven Johnson',2014,['9781594633935']],
 ['west','Scale','Geoffrey West',2017,['9780143110903']],
 ['arthur','The Nature of Technology','W. Brian Arthur',2009,['9781416544067']],
 ['ramirez','The Alchemy of Us','Ainissa Ramirez',2020,['9780262542265','9780262043809']],
 ['innovation','Invention and Innovation','Vaclav Smil',2023,['9780262551014','9780262048057']],
 ['origins','Origins','Lewis Dartnell',2019,['9781541617902']],
 ['nvidia','The Nvidia Way','Tae Kim',2024,['9781324086710']],
 ['frey','How Progress Ends','Carl Benedikt Frey',2025,['9780691233079']],
 ['eghbal','Working in Public','Nadia Eghbal',2020,['9780578675862']],
 ['goodman','How the World Ran Out of Everything','Peter S. Goodman',2024,['9780063257924']],
 ['transitions','Grand Transitions','Vaclav Smil',2021,['9780190060664']],
];
const isbn10=s=>{const n=s.slice(3,12);const v=(11-[...n].reduce((a,c,i)=>a+(10-i)*+c,0)%11)%11;return n+(v===10?'X':v);};
const path='data/discovery_amazon_261018.json';
const books=fs.existsSync(path)?JSON.parse(fs.readFileSync(path,'utf8')):rows.map(([id,title,author,year,isbns])=>({id,title,author,year,asins:isbns.map(isbn10),count:null,attempts:[]}));
async function main(){
 let i=0;
 await Promise.all(Array.from({length:3},async()=>{while(i<books.length){
  const b=books[i++];
  if(b.count!==null)continue;
  for(const asin of b.asins){
   for(const host of ['www.amazon.com.au','www.amazon.it','www.amazon.com']){
    const url=`https://${host}/dp/${asin}`;
    if(b.attempts.some(a=>(a.requestedUrl||a.url)===url))continue;
    if(await retrieve(b,url))break;
   }
   if(b.count!==null)break;
  }
  fs.writeFileSync(path,JSON.stringify(books,null,2)+'\n');
  console.log(JSON.stringify({id:b.id,count:b.count,asin:b.asin,title:b.productTitle}));
 }}));
}
main().catch(e=>{console.error(e);process.exitCode=1;});
