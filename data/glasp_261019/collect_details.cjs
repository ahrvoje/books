const fs=require('fs'),crypto=require('crypto');
const dir='data/glasp_261019/',books=require('./inventory.json').books;
fs.mkdirSync(dir+'details',{recursive:true});fs.mkdirSync(dir+'amazon',{recursive:true});
const clean=s=>(s||'').replace(/<script[\s\S]*?<\/script>/gi,' ').replace(/<style[\s\S]*?<\/style>/gi,' ').replace(/<[^>]+>/g,' ').replace(/&#(\d+);/g,(_,n)=>String.fromCodePoint(+n)).replace(/&amp;/g,'&').replace(/&quot;/g,'"').replace(/&#39;|&apos;/g,"'").replace(/&nbsp;/g,' ').replace(/\s+/g,' ').trim();
const norm=s=>clean(s).normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,' ').trim();
async function amazon(b){
 const out={id:b.id,title:b.title,author:b.author,attempts:[]},asin=b.appearances[0].asin;
 if(!asin){out.error='No source product identifier';return out;}
 for(const host of ['www.amazon.de','www.amazon.com','www.amazon.com.au']){
  const url='https://'+host+'/dp/'+asin,at=new Date().toISOString();
  try{const r=await fetch(url,{signal:AbortSignal.timeout(18000)}),html=await r.text();
   const title=clean(html.match(/id="productTitle"[^>]*>([\s\S]*?)<\/span>/)?.[1]);
   const byline=clean(html.match(/id="bylineInfo"[^>]*>([\s\S]*?)<\/div>/)?.[1]);
   const pageTitle=clean(html.match(/<title>([\s\S]*?)<\/title>/i)?.[1]);
   const top=html.match(/<span[^>]*id="acrCustomerReviewText"[^>]*>[\s\S]*?<\/span>/)?.[0];
   const global=html.match(/<span[^>]*data-hook="total-review-count"[^>]*>[\s\S]*?<\/span>/)?.[0];
   const cnt=s=>{let m=clean(s).match(/\d[\d,.\s]*/);return m?+m[0].replace(/\D/g,''):null};
   const topCount=cnt(top),globalCount=cnt(global),count=globalCount??topCount;
   const desc=clean(html.match(/id="bookDescription_feature_div"[\s\S]*?(?=<div id="[^"]+_feature_div")/)?.[0]).slice(0,14000);
   const allText=clean(html);
   const detail=[...allText.matchAll(/(?:Publication date|Publisher|Print length|Language|ISBN-13|ISBN-10)[\s\S]{0,150}/g)].slice(0,25).map(m=>m[0]).join('\n');
   const formats=[...html.matchAll(/href="([^\"]*\/dp\/[A-Z0-9]{10}[^\"]*)"[^>]*>[\s\S]{0,300}?(Paperback|Hardcover|Kindle)/gi)].slice(0,15).map(m=>({url:m[1],format:m[2]}));
   const star=html.match(/id="acrPopover"[^>]*title="([^"]+)"/)?.[1]||html.match(/([0-5][.,]\d) out of 5 stars/)?.[0]||null;
   const tw=norm(b.title).split(' ').filter(x=>x.length>2),aw=norm(b.author).split(' ').filter(x=>x.length>2);
   const titleMatch=tw.length?tw.filter(w=>norm(title).includes(w)).length/tw.length>=0.8:false;
   const authorMatch=aw.some(w=>norm(byline+' '+pageTitle).split(' ').includes(w));
   const verified=r.status===200&&titleMatch&&authorMatch&&count!==null&&(topCount===null||globalCount===null||topCount===globalCount);
   const a={url:r.url,requestedUrl:url,retrievedAt:at,httpStatus:r.status,asin,title,byline,pageTitle,topCount,globalCount,count,star,titleMatch,authorMatch,verified,evidence:[top,global].filter(Boolean),description:desc,details:detail,formats,sha256:crypto.createHash('sha256').update(html).digest('hex')};out.attempts.push(a);
   if(verified){out.selected=a;break;}
  }catch(e){out.attempts.push({url,retrievedAt:at,error:e.message,verified:false});}
 }
 return out;
}
async function main(){let mode=process.argv[2]||'amazon',category=process.argv[3],candidates=books.filter(b=>!category||b.appearances.some(p=>p.category===category)),cursor=0,done=0;
 await Promise.all(Array.from({length:mode==='amazon'?6:3},async()=>{while(cursor<candidates.length){const b=candidates[cursor++],file=dir+(mode==='amazon'?'amazon/':'details/')+b.id+(mode==='amazon'?'.json':'.txt');if(fs.existsSync(file)){const refresh=mode==='amazon'&&process.argv.includes('--refresh-empty')&&!JSON.parse(fs.readFileSync(file)).attempts?.length;if(!refresh)continue;}
 try{if(mode==='amazon')fs.writeFileSync(file,JSON.stringify(await amazon(b),null,2));else{const r=await fetch('https://r.jina.ai/'+b.appearances[0].url,{signal:AbortSignal.timeout(55000)}),s=await r.text();if(r.ok)fs.writeFileSync(file,s);else console.log(b.id,'reader',r.status);}}catch(e){console.log(b.id,e.message)}done++;if(done%25===0)console.log(mode,category||'all',done,'/',candidates.length);
 }}));console.log('finished',mode,category||'all',done);}
main();
