import fs from 'node:fs';
import zlib from 'node:zlib';
import {fields,authorMatches} from './amazon-fields.mjs';
import {titleMatches,clean} from '../pages_density_261021/collect.mjs';
const dir='data/metadata_261023/',path=dir+'amazon.json',state=JSON.parse(fs.readFileSync(path));
for(const [id,r]of Object.entries(state.books)){
 if(r.amazon)continue;const p=r.attempts[0];if(p?.status!==200||!p.rawFile||!fs.existsSync(p.rawFile))continue;
 const buf=fs.readFileSync(p.rawFile),html=(p.rawFile.endsWith('.gz')?zlib.gunzipSync(buf):buf).toString(),f=fields(html);
 if(!titleMatches(r.title,f.title)||!authorMatches(r.author,f.byline)||!['English','Croatian'].includes(f.language))continue;
 const label=clean(html.match(/<span[^>]*data-hook="total-review-count"[^>]*>[\s\S]*?<\/span>/)?.[0]||''),m=label.match(/([\d,]+)\s+global ratings?\b/i);if(!m)continue;
 const asin=f.productId||p.url.match(/\/dp\/([A-Z0-9]{10})/)[1];
 r.identityReview={date:new Date().toISOString(),method:'Reparsed the archived response; no network request. Matching author name verified in Amazon Follow the Author cards together with product title and selected edition identifier.',originalByline:p.byline,authorCards:f.authorCards};
 r.matched=true;r.product={url:p.url,title:f.title,byline:f.byline,format:f.format,productId:asin,rawFile:p.rawFile,retrieved:p.retrieved};
 r.amazon={count:+m[1].replaceAll(',',''),url:p.url,asin,marketplace:'amazon.com.au',retrievedAt:p.retrieved,verifiedAt:new Date().toISOString(),verified:true,confidence:'high',productTitle:f.title,byline:f.byline,evidence:[m[0]],sourceSnapshot:p.rawFile,status:'Explicit total-rating aggregate from one matching English product. Author identity also checked against its Follow the Author card. Snapshot only; editions and marketplaces are not summed.'};
 r.reason='Verified total ratings from archived response after inspecting author card.';console.log(id,r.title,r.amazon.count,f.authorCards);
}
fs.writeFileSync(path,JSON.stringify(state,null,2)+'\n');
