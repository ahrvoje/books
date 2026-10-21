import fs from 'node:fs';
const dir='data/rule_review_261020/';
const decisions=JSON.parse(fs.readFileSync(dir+'excluded_b-decisions.json','utf8'));
const target=decisions.filter(d=>d.raw&&!d.amazon.attempts?.length);
const saved=[];
let cursor=0;
async function worker(){
 while(cursor<target.length){
  const d=target[cursor++],attempts=[];
  for(const marketplace of ['www.amazon.de','www.amazon.com']){
   const url='https://'+marketplace+'/s?k='+encodeURIComponent(d.title+' '+d.author);
   const retrievedAt=new Date().toISOString();
   try{
    const r=await fetch(url,{signal:AbortSignal.timeout(12000)});
    const body=await r.text();
    // A search page is not a verified matching product; preserve availability without guessing counts.
    attempts.push({url,marketplace,retrievedAt,httpStatus:r.status,bodyLength:body.length,count:null,verified:false,status:'Retrieved search response; no matching product total-ratings aggregate established'});
   }catch(e){attempts.push({url,marketplace,retrievedAt,count:null,verified:false,status:'Retrieval failed',error:String(e.message),cause:e.cause?.code||e.cause?.message||null});}
  }
  saved.push({reviewId:d.reviewId,title:d.title,author:d.author,attempts,count:null,status:'unknown after actual retrieval attempts; no obscurity deduction'});
  fs.writeFileSync(dir+'excluded_b-amazon-attempts.json',JSON.stringify(saved.sort((a,b)=>a.reviewId.localeCompare(b.reviewId)),null,2)+'\n');
 }
}
await Promise.all(Array.from({length:8},worker));
console.log(JSON.stringify({books:saved.length,attempts:saved.flatMap(x=>x.attempts).length,failures:saved.flatMap(x=>x.attempts).filter(x=>x.error).length}));
