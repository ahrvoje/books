const fs=require('fs');
const crypto=require('crypto');
const prior=require('./amazon_counts_261018.json');
const baseline=require('./deductions_baseline_261018.json');
const file='data/amazon_verified_261018.json';
const state=fs.existsSync(file)?JSON.parse(fs.readFileSync(file,'utf8')):{method:'Use one matching product aggregate. Retrieve public Amazon pages; require title and author match, and agreement between the top rating count and global-rating summary when both exist. Never sum editions or marketplaces. Preserve prior observed counts when a new count cannot be verified.',books:prior.books.map(b=>({...b,attempts:[]}))};
const unescape=s=>s.replace(/&#(\d+);/g,(_,n)=>String.fromCodePoint(+n)).replace(/&#x([a-f\d]+);/gi,(_,n)=>String.fromCodePoint(parseInt(n,16))).replace(/&amp;/g,'&').replace(/&quot;/g,'"').replace(/&#39;|&apos;/g,"'").replace(/&nbsp;/g,' ');
const clean=s=>unescape(s||'').replace(/<[^>]+>/g,' ').replace(/\s+/g,' ').trim();
const norm=s=>clean(s).normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,' ').trim();
const words=s=>norm(s).split(' ').filter(x=>x.length>2&&!['the','and','for','with','from','author','edited','edition'].includes(x));
const count=s=>{const m=clean(s).match(/\d[\d,.\s]*/);return m?Number(m[0].replace(/[^\d]/g,'')):null;};
const save=()=>fs.writeFileSync(file,JSON.stringify(state,null,2)+'\n');
async function retrieve(b,url){
  const at=new Date().toISOString();
  try{
    const response=await fetch(url,{signal:AbortSignal.timeout(20000)}),html=await response.text();
    const title=clean(html.match(/id="productTitle"[^>]*>([\s\S]*?)<\/span>/)?.[1]);
    const byline=clean(html.match(/id="bylineInfo"[^>]*>([\s\S]*?)<\/div>/)?.[1]);
    const pageTitle=clean(html.match(/<title>([\s\S]*?)<\/title>/i)?.[1]);
    const top=html.match(/<span[^>]*id="acrCustomerReviewText"[^>]*>[\s\S]*?<\/span>/)?.[0];
    const global=html.match(/<span[^>]*data-hook="total-review-count"[^>]*>[\s\S]*?<\/span>/)?.[0];
    const shortTitle=b.title.split(/ — |\(|:/)[0],titleWords=words(shortTitle);
    const titleMatch=titleWords.length>0?titleWords.filter(w=>norm(title).includes(w)).length/titleWords.length>=0.8:norm(title).replace(/ /g,'').startsWith(norm(shortTitle).replace(/ /g,''));
    const authorMatch=words(b.author).some(w=>w.length>2&&words(byline+' '+pageTitle).includes(w));
    const topCount=count(top),globalCount=count(global);
    const n=globalCount??topCount;
    const languageMismatch=/Edizione (?!Inglese)|Wydanie: (?!Angielski)|NOT in English/.test(byline+' '+title);
    const verified=response.status===200&&titleMatch&&authorMatch&&!languageMismatch&&n!==null&&(topCount===null||globalCount===null||topCount===globalCount);
    const record={url:response.url,requestedUrl:url,retrievedAt:at,httpStatus:response.status,title,byline,pageTitle,topCount,globalCount,titleMatch,authorMatch,languageMismatch,verified,evidence:[top,global].filter(Boolean),sha256:crypto.createHash('sha256').update(html).digest('hex')};
    b.attempts.push(record);
    if(verified){Object.assign(b,{url:response.url,count:n,attemptedAt:at,sourceSnapshot:'Direct public product page',evidence:record.evidence,status:'verified matching Amazon product aggregate',productTitle:title,byline,asin:url.match(/\/dp\/([A-Z0-9]{10})/i)?.[1],marketplace:new URL(response.url).hostname,confidence:'high',verifiedAt:at});}
    return verified;
  }catch(e){b.attempts.push({url,retrievedAt:at,error:e.message,verified:false});return false;}
}
async function main(){
  const mode=process.argv[2]||'missing';
  const limit=Number(process.argv[3]||Infinity);
  const ids=new Set((process.argv[4]||'').split(',').filter(Boolean));
  let candidates=state.books.filter(b=>(ids.size?ids.has(b.id):mode==='all'?true:b.count===null)).slice(0,limit),cursor=0,done=0;
  const byId=new Map(baseline.books.map(b=>[b.id,b]));
  await Promise.all(Array.from({length:3},async()=>{
    while(cursor<candidates.length){
      const b=candidates[cursor++],source=byId.get(b.id);
      const asin=(b.url||source.titleCell).match(/\/dp\/([A-Z0-9]{10})/i)?.[1];
      if(!asin){b.attempts.push({retrievedAt:new Date().toISOString(),error:'No exact product identifier; title search required',verified:false});}
      else for(const host of ['www.amazon.com.au','www.amazon.com','www.amazon.de','www.amazon.co.uk','www.amazon.it']){
        const url='https://'+host+'/dp/'+asin;
        if(b.attempts.some(a=>a.requestedUrl===url||a.url===url))continue;
        if(await retrieve(b,url))break;
      }
      done++;save();
      if(done%25===0||done===candidates.length)console.log(JSON.stringify({done,of:candidates.length,observed:state.books.filter(b=>b.count!==null).length,verified:state.books.filter(b=>b.verifiedAt).length,last:b.title}));
    }
  }));
  save();
}
if(require.main===module)main().catch(e=>{console.error(e);process.exitCode=1;});
module.exports={retrieve,clean,norm,count};
