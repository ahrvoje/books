const fs=require('fs');
const {retrieve,clean}=require('./collect_amazon.cjs');
const rows=[
 ['ridley','How Innovation Works','Matt Ridley',2020,['9780008334840','9780062916594']],
 ['ideas','Where Good Ideas Come From','Steven Johnson',2010,['9781594485381']],
 ['buildings','How Buildings Learn','Stewart Brand',1994,['9780140139969']],
 ['nuts','Nuts and Bolts','Roma Agrawal',2023,['9781324086383','9781324021520']],
 ['built','Built','Roma Agrawal',2018,['9781635570236','9781408870372']],
 ['quest','The Quest','Daniel Yergin',2011,['9780143121947']],
 ['innovators','The Innovators','Walter Isaacson',2014,['9781476708706']],
 ['internet','How the Internet Happened','Brian McCullough',2018,['9781631493072']],
 ['tubes','Tubes','Andrew Blum',2012,['9780141049090']],
 ['growth','Growth','Vaclav Smil',2019,['9780262539685']],
 ['size','Size','Vaclav Smil',2023,['9780241992142','9780063324091']],
 ['city','A City on Mars','Kelly Weinersmith; Zach Weinersmith',2023,['9781984881748','9781984881724']],
 ['soonish','Soonish','Kelly Weinersmith; Zach Weinersmith',2017,['9780399563843']],
 ['second','The Second Machine Age','Erik Brynjolfsson; Andrew McAfee',2014,['9780393350647']],
 ['delusion','The Innovation Delusion','Lee Vinsel; Andrew L. Russell',2020,['9780525575689']],
 ['infrastructure','How Infrastructure Works','Deb Chachra',2023,['9781804995952','9780593086599']],
 ['wonderland','Wonderland','Steven Johnson',2016,['9780399184499']],
 ['switch','The Big Switch','Nicholas Carr',2008,['9780393345223']],
 ['ignition','Ignition!','John Drury Clark',1972,['9780813595832']],
 ['evolution','The Evolution of Useful Things','Henry Petroski',1992,['9780679740391']],
 ['loonshots','Loonshots','Safi Bahcall',2019,['9781250623096']]
];
const isbn10=s=>{const n=s.slice(3,12),v=(11-[...n].reduce((a,c,i)=>a+(10-i)*+c,0)%11)%11;return n+(v===10?'X':v);};
const path='data/research92_amazon_261018.json';
const books=fs.existsSync(path)?JSON.parse(fs.readFileSync(path,'utf8')):rows.map(([id,title,author,year,isbns])=>({id,title,author,year,asins:isbns.map(isbn10),count:null,attempts:[]}));
const save=()=>fs.writeFileSync(path,JSON.stringify(books,null,2)+'\n');
async function main(){
 let i=0;
 await Promise.all(Array.from({length:3},async()=>{while(i<books.length){
  const b=books[i++];
  for(const asin of b.asins)for(const host of ['www.amazon.com','www.amazon.it','www.amazon.de','www.amazon.com.au']){
   const url=`https://${host}/dp/${asin}`;
   if(b.attempts.some(a=>(a.requestedUrl||a.url)===url))continue;
   const previous={...b};
   const ok=await retrieve(b,url);
   if(ok&&previous.count!==null&&previous.count>b.count)Object.assign(b,{...previous,attempts:b.attempts});
   save();
  }
  if(b.count!==null&&!b.starsEvidence){
   try{
    const h=await(await fetch(b.url,{signal:AbortSignal.timeout(20000)})).text();
    const title=clean(h.match(/id="productTitle"[^>]*>([\s\S]*?)<\/span>/)?.[1]);
    const snippet=h.match(/<span[^>]*id="acrPopover"[^>]*>/)?.[0]||'';
    const m=snippet.match(/title="([0-9.,]+) (?:out of|su|von)/);
    const c=h.match(/id="acrCustomerReviewText"[^>]*>([^<]*)/);
    if(m&&title===b.productTitle&&c&&Number(c[1].replace(/[^0-9]/g,''))===b.count){b.stars=Number(m[1].replace(',','.'));b.starsEvidence={url:b.url,retrievedAt:new Date().toISOString(),snippet};}
   }catch(e){b.starsError=e.message;}
  }
  save();console.log(JSON.stringify({id:b.id,count:b.count,stars:b.stars,asin:b.asin,title:b.productTitle}));
 }}));
 save();
}
main().catch(e=>{console.error(e);process.exitCode=1;});
