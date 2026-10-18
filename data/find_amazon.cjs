const fs=require('fs');
const {retrieve,clean,norm}=require('./collect_amazon.cjs');
const file='data/amazon_verified_261018.json';
const state=JSON.parse(fs.readFileSync(file,'utf8'));
const save=()=>fs.writeFileSync(file,JSON.stringify(state,null,2)+'\n');
const searchFile='data/amazon_edition_search_261018.json';
const searches=fs.existsSync(searchFile)?JSON.parse(fs.readFileSync(searchFile,'utf8')):[];
const candidates=state.books.filter(b=>b.count===null&&!searches.some(x=>x.id===b.id));
async function main(){
 let done=0;
 for(const b of candidates){
  const title=b.title.replace(/ — .*$| \(.*?\)/g,''),author=b.author.split(';')[0].replace(/ \(.*?\)/g,'');
  const query=title+' '+author;
  const record={id:b.id,title:b.title,author:b.author,at:new Date().toISOString(),amazonSearch:null,librarySearch:null,candidates:[]};
  const asins=[];
  const add=asin=>{if(!asins.includes(asin)&&!b.attempts.some(a=>a.requestedUrl==='https://www.amazon.com.au/dp/'+asin))asins.push(asin);};
  try{
   const url='https://www.amazon.com.au/s?k='+encodeURIComponent(query);
   const r=await fetch(url,{signal:AbortSignal.timeout(15000)}),s=await r.text();
   record.amazonSearch={url,status:r.status};
   for(const m of s.matchAll(/href="[^"<>]*\/dp\/([A-Z0-9]{10})[^"<>]*"/g))add(m[1]);
   record.amazonSearch.productIds=asins.slice(0,8);
  }catch(e){record.amazonSearch={error:e.message};}
  for(const asin of asins.slice(0,4))if(await retrieve(b,'https://www.amazon.com.au/dp/'+asin))break;
  if(b.count===null){
   try{
    const url='https://openlibrary.org/search.json?'+new URLSearchParams({title,author,fields:'key,title,author_name,isbn,first_publish_year',limit:'3'});
    const r=await fetch(url,{signal:AbortSignal.timeout(15000)}),j=await r.json();
    record.librarySearch={url,status:r.status,docs:j.docs||[]};
    for(const d of j.docs||[]){
     const queryWords=norm(title).split(' ').filter(w=>w.length>2),found=norm(d.title);
     const titleMatch=queryWords.filter(w=>found.includes(w)).length/queryWords.length>=0.75;
     const authorWords=norm(author).split(' ').filter(w=>w.length>2),foundAuthor=norm((d.author_name||[]).join(' '));
     if(titleMatch&&authorWords.some(w=>foundAuthor.includes(w)))for(const isbn of d.isbn||[])if(/^[0-9]{9}[0-9X]$/.test(isbn))add(isbn);
    }
   }catch(e){record.librarySearch={error:e.message};}
   for(const asin of asins.filter(x=>!b.attempts.some(a=>a.requestedUrl==='https://www.amazon.com.au/dp/'+x)).slice(0,5))if(await retrieve(b,'https://www.amazon.com.au/dp/'+asin))break;
  }
  record.candidates=asins;record.resolved=b.count!==null;searches.push(record);save();fs.writeFileSync(searchFile,JSON.stringify(searches,null,2)+'\n');
  done++;if(done%10===0||done===candidates.length)console.log(JSON.stringify({done,of:candidates.length,observed:state.books.filter(x=>x.count!==null).length,last:b.title}));
 }
}
main().catch(e=>{console.error(e);process.exitCode=1;});
