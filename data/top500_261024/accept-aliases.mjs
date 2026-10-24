import fs from 'node:fs';
import zlib from 'node:zlib';
import assert from 'node:assert/strict';
const dir='data/top500_261024/',number=process.argv[2];assert(/^\d+$/.test(number));
const state=JSON.parse(fs.readFileSync(dir+'amazon.json')),out={};
for(const x of JSON.parse(fs.readFileSync(dir+'alias-'+number+'.json'))){
 const a=state.books[x.book].attempts.find(a=>a.url.endsWith('/'+x.id));assert.equal(a.status,200);
 const h=zlib.gunzipSync(fs.readFileSync(a.rawFile)).toString(),m=h.match(/data-hook="total-review-count"[^>]*>([\s\S]*?)<\/span>/)?.[1].match(/([\d,]+) global ratings?/);assert(m);
 const count=+m[1].replaceAll(',','');assert(count>0);
 out[x.book]={amazon:{count,url:a.url,asin:x.id,marketplace:'amazon.com.au',retrievedAt:a.retrieved,verifiedAt:new Date().toISOString(),verified:true,confidence:'high',productTitle:a.title,byline:a.byline,evidence:[m[0]],sourceSnapshot:a.rawFile,stars:Number(h.match(/id="acrPopover"[^>]*title="([\d.]+) out of 5 stars/)?.[1])||null,status:'One matching product aggregate; identity manually reconciled by ISBN. Counts are not summed.',identityVerification:{url:x.url,reason:x.reason}}};
}
fs.writeFileSync(dir+'manual-'+number+'.json',JSON.stringify(out,null,2)+'\n');
