import fs from 'node:fs';
import zlib from 'node:zlib';
import {amazonFields,titleMatches,authorMatches,clean} from '../pages_density_261021/collect.mjs';
const dir='data/metadata2_261025',books=JSON.parse(fs.readFileSync(dir+'/targets.json')).filter(b=>b.amazon?.count==null),out={books:{},files:0};
const token=s=>String(s||'').toLowerCase().replace(/^(the|a|an) /,'').match(/[a-z0-9]+/)?.[0],map=new Map();
for(const b of books){const t=token(b.title);if(!map.has(t))map.set(t,[]);map.get(t).push(b);}
function walk(path){for(const e of fs.readdirSync(path,{withFileTypes:true})){const p=path+'/'+e.name;if(e.isDirectory()){if(e.name!=='metadata2_261025')walk(p);}else if(/\.html\.gz$/.test(e.name)&&/amazon/i.test(p)){
 let h;try{h=zlib.gunzipSync(fs.readFileSync(p)).toString();}catch{continue;}out.files++;
 const text=clean(h.match(/<span[^>]*data-hook="total-review-count"[^>]*>[\s\S]*?<\/span>/)?.[0]||''),m=text.match(/([\d,]+)\s+global ratings?\b/i)||clean(h.match(/<span[^>]*id="acrCustomerReviewText"[^>]*>[\s\S]*?<\/span>/)?.[0]||'').match(/([\d,]+)/);if(!m)continue;
 const f=amazonFields(h),id=f.productId||e.name.match(/-([A-Z0-9]{10})(?:-|\.)/)?.[1];if(!id)continue;
 const canonical=h.match(/<link[^>]*rel="canonical"[^>]*href="([^"]+)"/)?.[1]||h.match(/<link[^>]*href="([^"]+)"[^>]*rel="canonical"/)?.[1];
 const host=canonical?.match(/https?:\/\/([^/]*amazon\.[^/]+)/)?.[1]||p.match(/(www\.amazon\.(?:com\.au|co\.uk|com|de|it|ca))/)?.[1];if(!host)continue;
 const url='https://'+host+'/dp/'+id;
 for(const b of map.get(token(f.title))||[])if(titleMatches(b.title,f.title)&&authorMatches(b.author,f.byline)){
  const count=+m[1].replaceAll(',','');if(count<=0)continue;
  const prior=out.books[b.id];if(prior?.amazon?.count>=count)continue;
  out.books[b.id]={amazon:{count,url,asin:id,marketplace:host,retrievedAt:'Archived before 2026-10-25; exact retrieval time not established',verifiedAt:'2026-10-25',verified:true,confidence:'moderate',productTitle:f.title,byline:f.byline,evidence:[text||'Amazon product-level average-customer-review aggregate: '+m[0]],sourceSnapshot:p,status:'Previously saved Amazon product HTML, identity and total aggregate rechecked. This is an older snapshot, not a fresh rating count.'}};
 }
}}}
walk('data');fs.writeFileSync(dir+'/cached-amazon.json',JSON.stringify(out,null,2)+'\n');console.log({files:out.files,added:Object.keys(out.books).length});
