import fs from 'node:fs';
import crypto from 'node:crypto';
const dir='data/source_batch_261021/';
fs.mkdirSync(dir+'raw',{recursive:true});
const short=['information-technology','inventors','mathematician-biography','most-influential','pulitzer-prize','intellectual','insightful','international-business','business-strategy','modern-history','history-of-science','tech'].map(s=>'https://www.shortform.com/best-books/genre/best-'+s+'-books-of-all-time');
const urls=[short[0],'https://accelerateinvestorsny.com/2025books','https://gloryolusola.com/reading','https://christian-ulbrich.de/book-club/','https://uk.bookshop.org/lists/geopolitics-strategicreads','https://charlesazam.com/books/',...short.slice(1),'https://www.richardhughesjones.com/books/','https://brain.maxxyung.com/lists/books','https://www.goodreads.com/shelf/show/backbone','https://www.goodreads.com/shelf/show/backbone?page=2','https://www.goodreads.com/shelf/show/world-economy','https://www.goodreads.com/shelf/show/world-economy?page=2','https://www.goodreads.com/book/similar/97803-skunk-works?ref=rae_seeall',...[1,2,3,4].map(p=>'https://www.goodreads.com/list/show/108393.Best_Popular_History_Books_on_Goodreads?page='+p),'https://www.goodreads.com/list/show/143259',...[2,3,4].map(p=>'https://www.goodreads.com/list/show/143259.Best_Popular_Science_Books_on_Goodreads?page='+p)];
fs.writeFileSync(dir+'urls.json',JSON.stringify(urls,null,2));
let cursor=0;const results=[];
await Promise.all(Array.from({length:4},async()=>{while(cursor<urls.length){const index=cursor++,url=urls[index],file=dir+'raw/'+(index+175),retrieved=new Date().toISOString();let meta;
try{const r=await fetch(url,{signal:AbortSignal.timeout(45000)}),html=await r.text();fs.writeFileSync(file+'.html',html);meta={index:index+175,url,retrieved,status:r.status,finalURL:r.url,bytes:Buffer.byteLength(html),sha256:crypto.createHash('sha256').update(html).digest('hex')};}
catch(e){meta={index:index+175,url,retrieved,error:String(e)};}
fs.writeFileSync(file+'.json',JSON.stringify(meta,null,2));results.push(meta);console.log(JSON.stringify(meta));}}));
fs.writeFileSync(dir+'capture.json',JSON.stringify(results.sort((a,b)=>a.index-b.index),null,2));
