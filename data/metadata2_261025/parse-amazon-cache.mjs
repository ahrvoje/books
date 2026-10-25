import fs from 'node:fs';
import {clean,titleMatches,authorMatches} from '../pages_density_261021/collect.mjs';
const dir='data/metadata2_261025',out={books:{},attempts:[]};
for(const f of fs.readdirSync(dir+'/raw').filter(f=>/^amazon-cache-\d+\.json$/.test(f))){
 const file=dir+'/raw/'+f,j=JSON.parse(fs.readFileSync(file)),h=String(j.details||''),b=j.book;
 const title=clean(h.match(/<span[^>]*id="productTitle"[^>]*>([\s\S]*?)<\/span>/)?.[1]);
 const byline=[...h.matchAll(/<a[^>]*href="\/[^"\n]*\/e\/[^"\n]*"[^>]*>([^<]+)<\/a>/g)].map(m=>clean(m[1])).join('; ');
 const widget=h.match(/<span[^>]*id="acrCustomerReviewText"[^>]*>([\s\S]*?)<\/span>/)?.[1]||'',count=+(clean(widget).match(/[\d,]+/)?.[0]||'').replaceAll(',','');
 out.attempts.push({id:b.id,asin:b.asin,file,title,byline,countCandidate:count||null,available:!!j.details});
 if(!titleMatches(b.title,title)||!authorMatches(b.author.replace(/ with /g,'; '),byline)||!Number.isInteger(count)||count<=0)continue;
 const sub=b.title.split(':').slice(1).join(':').toLowerCase().split(/[^a-z0-9]+/).filter(x=>x&&!['a','an','the','and','of','in','to'].includes(x));if(sub.length===1&&!title.toLowerCase().includes(sub[0]))continue;
 const previous=out.books[b.id]?.amazon;if(previous?.count>=count)continue;
 const cached=String(j.result).match(/Crawled:\s*([^;\n]+)/)?.[1]||'date unavailable';
 out.books[b.id]={amazon:{count,url:b.url,asin:b.asin,marketplace:new URL(b.url).hostname.replace(/^www\./,''),retrievedAt:'Public web cache: '+cached,verifiedAt:'2026-10-25',verified:true,confidence:'moderate',productTitle:title,byline,evidence:['Matched title and author; product-level acrCustomerReviewText aggregate '+count+'.'],sourceSnapshot:file,status:'Cached product-level rating aggregate, not a fresh count or a written-review list. Maximum among accessible matching inspected editions; no exhaustive edition claim.'}};
 if(/Format:[\s\S]{0,150}Paperback/.test(h))out.books[b.id].product={id:b.asin,format:'Paperback',url:b.url,source:file,title,author:byline};
}
fs.writeFileSync(dir+'/amazon.json',JSON.stringify(out,null,2)+'\n');console.log({attempts:out.attempts.length,added:Object.keys(out.books).length});
