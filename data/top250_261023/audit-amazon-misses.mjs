import fs from 'node:fs';
import zlib from 'node:zlib';
import {clean,amazonFields} from '../pages_density_261021/collect.mjs';
const d='data/top250_261023/',state=JSON.parse(fs.readFileSync(d+'amazon.json')),overrides=JSON.parse(fs.readFileSync(d+'identity-overrides.json'));
for(const[id,b]of Object.entries(state.books)){
 if(!b.done||b.amazon||b.reason||overrides[id])continue;
 for(const a of b.attempts){if(a.status!==200)continue;const h=zlib.gunzipSync(fs.readFileSync(a.rawFile)).toString(),f=amazonFields(h),label=clean(h.match(/<span[^>]*data-hook="total-review-count"[^>]*>[\s\S]*?<\/span>/)?.[0]||'');if(label)console.log(JSON.stringify({id,asin:a.url.split('/').pop(),label,title:f.title,byline:f.byline,language:f.language,format:f.format}));}
}
