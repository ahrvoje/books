import fs from 'node:fs';
import zlib from 'node:zlib';
import assert from 'node:assert/strict';
import {amazonFields,titleMatches,authorMatches,clean} from '../pages_density_261021/collect.mjs';
const dir='data/top250_261023',read=p=>JSON.parse(fs.readFileSync(p)),state=read(dir+'/amazon.json'),books=read(dir+'/targets.json');
let added=0;
const overrides=read(dir+'/identity-overrides.json');
for(const b of books){const s=state.books[b.id];if(!s)continue;
 for(const a of s.attempts){if(a.status!==200)continue;
  const h=zlib.gunzipSync(fs.readFileSync(a.rawFile)).toString(),f=amazonFields(h),id=a.url.split('/').pop();
  const override=overrides[b.id];
  const identity=override?.asin===id&&override.observedTitle===f.title&&override.observedByline===f.byline?override:null;
  if((!titleMatches(b.title,f.title)||!authorMatches(b.author,f.byline))&&!identity||f.productId&&f.productId!==id)continue;
  if(/Paperback|Hardcover/i.test(f.format||'')&&f.language==='English'&&(!s.product||!/Paperback/i.test(s.product.format)&&/Paperback/i.test(f.format)))s.product={id,url:a.url,title:f.title,author:f.byline,format:f.format,language:f.language,sourceSnapshot:a.rawFile};
  const text=clean(h.match(/<span[^>]*data-hook="total-review-count"[^>]*>[\s\S]*?<\/span>/)?.[0]||''),m=text.match(/([\d,]+)\s+global ratings?\b/i);
  if(m&&!s.amazon&&b.amazon?.count==null){s.amazon={count:+m[1].replaceAll(',',''),url:a.url,asin:id,marketplace:'amazon.com.au',retrievedAt:a.retrieved,verifiedAt:a.retrieved,verified:true,confidence:'high',productTitle:f.title,byline:f.byline,evidence:[m[0]],sourceSnapshot:a.rawFile,stars:Number(h.match(/id="acrPopover"[^>]*title="([\d.]+) out of 5 stars/)?.[1])||null,status:'One matching Amazon Australia product total-rating aggregate; saved snapshot, not a live count. No counts combined across editions or marketplaces.'};added++;s.done=true;}
  if(s.amazon?.sourceSnapshot===a.rawFile){assert(m);assert.equal(+m[1].replaceAll(',',''),s.amazon.count);if(identity){s.amazon.identityVerification=identity;s.amazon.confidence=identity.confidence||'high';}}
 }
}
fs.writeFileSync(dir+'/amazon.json',JSON.stringify(state,null,2)+'\n');console.log({added,verified:Object.values(state.books).filter(b=>b.amazon).length});
