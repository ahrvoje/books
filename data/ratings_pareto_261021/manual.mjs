import fs from 'node:fs';
import zlib from 'node:zlib';
import assert from 'node:assert/strict';
import {clean} from '../pages_density_261021/collect.mjs';
const file='data/ratings_pareto_261021/ratings.json',state=JSON.parse(fs.readFileSync(file)),pages=JSON.parse(fs.readFileSync('data/pages_density_261021/progress.json'));
// Inspected product titles, retained matching edition IDs and authors. No generic weakening of identity checks.
const ids=['q0111','q0692','q0702','q0756','q0846','q0858','g0043','g0045','g0076','g0104','g0131','g0209','g0238','g0332','g0335','g0346','g0349','g0361','g1281','g0818','g0727','g0372','g0405','g1275','bg8007edf6c2','bgcfc85738ab'];
const canonical=s=>{s=String(s).replace(/^(ISBN|ASIN):/,'');if(!/^\d{9}[\dX]$/.test(s))return s;const t='978'+s.slice(0,9),sum=[...t].reduce((a,v,i)=>a+Number(v)*(i%2?3:1),0);return t+(10-sum%10)%10;};
for(const id of ids){const b=state.books[id];if(b.count!==null)continue;const e=pages.books[id].edition;
 const a=b.attempts.find(a=>a.count!==null&&[e.id,...(e.isbn10||[]),...(e.isbn13||[])].map(canonical).includes(canonical(a.productId)));
 assert(a,'No exact edition identifier for '+id);
 const note='Manually checked title and author against retained edition evidence with the same ISBN/ASIN. Product metadata abbreviates the author, omits the byline, varies punctuation/volume numbering, or uses the catalogued translation title. No identity inferred from rating count.';
 b.count=a.count;b.verified={...a,accepted:true,manualIdentity:note,identityEvidence:e.url,confidence:'moderate'};
}
// Re-read every accepted raw response and require the product rating-summary element.
for(const b of Object.values(state.books).filter(b=>b.count!==null)){
 const a=b.verified;
 if(a.rawFile.endsWith('.gz')){
  const html=zlib.gunzipSync(fs.readFileSync(a.rawFile)).toString();
  const text=clean(html.match(/<span[^>]*data-hook="total-review-count"[^>]*>[\s\S]*?<\/span>/)?.[0]||'');
  const m=text.match(/([\d,]+)\s+global ratings\b/i);assert(m,'No explicit product total for '+b.id);assert.equal(Number(m[1].replaceAll(',','')),b.count,b.id);
 }
}
fs.writeFileSync(file,JSON.stringify(state,null,2)+'\n');console.log({recovered:Object.values(state.books).filter(b=>b.count!==null).length});
