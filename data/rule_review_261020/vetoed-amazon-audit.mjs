import fs from 'node:fs';
import zlib from 'node:zlib';
import assert from 'node:assert/strict';

const dir='data/rule_review_261020';
const books=JSON.parse(fs.readFileSync(`${dir}/vetoed-input.json`,'utf8'));
const clean=s=>String(s||'').replace(/&#x([a-f\d]+);/gi,(_,n)=>String.fromCodePoint(parseInt(n,16))).replace(/&#(\d+);/g,(_,n)=>String.fromCodePoint(+n)).replace(/&amp;/g,'&').replace(/&quot;/g,'"').replace(/&#39;|&apos;/g,"'").replace(/<[^>]+>/g,' ').replace(/\s+/g,' ').trim();
const asin=s=>String(s||'').match(/\/(?:dp|product)\/([A-Z0-9]{10})/i)?.[1];
const ratingCount=s=>{const m=clean(s).match(/([\d,]+)\s+(?:global\s+)?ratings?\b/i);return m?+m[1].replace(/,/g,''):null;};
const evidenceText=x=>[...(Array.isArray(x.evidence)?x.evidence:[]),x.ratingEvidence||''].join(' ');
const candidates=[];
function inspect(x,file){
  if(!x||typeof x!=='object')return;
  if(Array.isArray(x)){for(const v of x)inspect(v,file);return;}
  const explicit=ratingCount(evidenceText(x));
  if(x.url&&explicit!==null) candidates.push({url:x.url,product:asin(x.url),count:explicit,title:x.productTitle||x.title||'',byline:x.byline||'',pageTitle:x.pageTitle||'',file,rawFile:x.rawFile||null,retrievedAt:x.retrievedAt||x.attemptedAt||null,evidence:evidenceText(x)});
  for(const v of Object.values(x))if(typeof v==='object')inspect(v,file);
}
const files=fs.readdirSync('data').filter(f=>f.endsWith('.json')&&/amazon/.test(f)).map(f=>`data/${f}`);
for(const b of books) for(const f of b.amazon?.attemptFiles||[]) if(fs.existsSync(f))files.push(f);
for(const file of new Set(files)){try{inspect(JSON.parse(fs.readFileSync(file,'utf8')),file);}catch{ /* A legacy .json file contains a script, not a capture. */ }}
for(const b of books)inspect(b.amazon,`${dir}/vetoed-input.json#${b.reviewId}`);
// Inspect actual saved HTML whenever a selected capture exposes it.
function rawEvidence(file){
  if(!file||!fs.existsSync(file))return null;
  const bytes=fs.readFileSync(file),html=file.endsWith('.gz')?zlib.gunzipSync(bytes).toString():bytes.toString();
  const globalText=clean(html.match(/<span\b[^>]*data-hook="total-review-count"[^>]*>([\s\S]*?)<\/span>/)?.[1]);
  const topText=clean(html.match(/<span\b[^>]*id="acrCustomerReviewText"[^>]*>([\s\S]*?)<\/span>/)?.[1]);
  return {title:clean(html.match(/id="productTitle"[^>]*>([\s\S]*?)<\/span>/)?.[1]),byline:clean(html.match(/id="bylineInfo"[^>]*>([\s\S]*?)<\/div>/)?.[1]),pageTitle:clean(html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1]),globalText,topText,count:ratingCount(globalText)??ratingCount(topText)};
}
const wrong={v0052:'Selected ASIN 0860913023 is Comments on the Society of the Spectacle, a separate book, rather than the nominated The Society of the Spectacle.',v0171:'Selected ASIN 1591431018 is The Earth Chronicles Handbook, a separate companion/reference work, rather than the nominated Earth Chronicles series.'};
const rows=[];
for(const b of books){
  const a=b.amazon||{},product=a.asin||a.productId||asin(a.url);
  const matching=[a,...a.attempts||[]].filter(x=>x.url===a.url);
  const selected=matching.find(x=>x.productTitle||x.byline||x.pageTitle)||a;
  const explicit=matching.map(x=>({record:x,count:ratingCount(evidenceText(x))})).find(x=>x.count===a.count&&x.count!==null);
  const rawRecord=matching.find(x=>x.rawFile&&x.count===a.count),raw=rawEvidence(rawRecord?.rawFile);
  if(raw&&a.count!==null)assert.equal(raw.count,a.count,`Raw count disagreement ${b.reviewId}`);
  const alternatives=candidates.filter(x=>product&&x.product===product&&x.count!==null&&x.url!==a.url);
  rows.push({reviewId:b.reviewId,id:b.id,title:b.title,author:b.author,oldCount:a.count??null,selectedUrl:a.url||null,product:product||null,productTitle:raw?.title||a.productTitle||selected.title||null,byline:raw?.byline||selected.byline||null,pageTitle:raw?.pageTitle||selected.pageTitle||null,rawFile:rawRecord?.rawFile||null,explicitEvidence:raw?.globalText||raw?.topText||explicit?.record.ratingEvidence||explicit?.record.evidence||null,explicitCount:raw?.count??explicit?.count??null,identityFinding:wrong[b.reviewId]||null,alternatives:alternatives.map(x=>({url:x.url,count:x.count,title:x.title,byline:x.byline,file:x.file})),action:a.count==null?'retain-unknown':wrong[b.reviewId]?'reject-wrong-product':explicit?'retain-verified':'reject-reviews-only'});
}
for(const r of rows){
  r.identityAudit=r.action==='retain-unknown'?'No rating aggregate is accepted. Earlier attempts remain historical evidence, including rejected or unidentified products.':r.identityFinding||'Actual captured product title and author/byline or page-title attribution reviewed against the nominated work; identity matches. Prior matching flags alone were not used.';
  if(r.reviewId==='v0106')r.identityAudit='ASIN 0743269195 matches David Talbot. This confirms the attached product, not the source nomination: its bare Brothers (JFK and RFK) reference remains only a probable Talbot identification. Wright Brothers and Founding Brothers links were unrelated extraction contamination and have been removed.';
  if(r.reviewId==='v0154')r.identityAudit='Count remains unknown. The source identity still assumes 1 Enoch; 2 and 3 Enoch are distinct. Warrior Pose evidence was unrelated extraction contamination and has been removed.';
  if(r.reviewId==='v0210'){r.identityAudit='The captured title and ISBN 1590207149 identify The Fry Chronicles. Its byline omits the author; the same ISBN in Google Books supplies Stephen Fry, independently corroborating the product identity. The captured 1,493 global ratings remain valid.';r.identitySource='https://books.google.com/books/about/The_Fry_Chronicles.html?id=eBlKYAAACAAJ';}
  if(r.reviewId==='v0205')r.identityAudit='The byline omits the author, but the captured product title explicitly identifies Sarah Mower; title and author match. The captured four global ratings remain valid.';
  if(r.reviewId==='v0445')r.identityAudit='Selected ASIN 0984115528 and raw product-273.html match Georges Perec and show 71 global ratings. Earlier ASIN 1939663830 is Philippe Soupault and remains explicitly rejected historical evidence, not the selected product.';
}
const summary={total:rows.length,counts:Object.fromEntries([...new Set(rows.map(x=>x.action))].map(k=>[k,rows.filter(x=>x.action===k).length])),unsupportedWithAlternates:rows.filter(x=>x.action==='reject-reviews-only'&&x.alternatives.length).map(x=>x.reviewId),wrongProducts:rows.filter(x=>x.identityFinding).map(x=>x.reviewId)};
fs.writeFileSync(`${dir}/vetoed-amazon-audit.json`,JSON.stringify({summary,rows},null,2)+'\n');
console.log(JSON.stringify(summary,null,2));
