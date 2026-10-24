import fs from 'node:fs';
import zlib from 'node:zlib';
import {amazonFields} from '../pages_density_261021/collect.mjs';
const d='data/top500_261024/',s=JSON.parse(fs.readFileSync(d+'amazon.json')),out={};
for(const [book,id,url,reason] of [
 ['g1223','0805075992','https://books.google.com/books?id=1g60MM3ogpAC','Google Books confirms title, Charles R. Morris and this ISBN; Amazon omits the author byline.'],
 ['progress-0358','076790768X','https://books.google.com.br/books?id=XPQJAQAAMAAJ','Google Books confirms Slack, Tom DeMarco and this ISBN; Amazon omits the author byline.'],
 ['rem-u1828','0713999284','https://obnb.uk/a00141518-john-lewis-gaddis','Open British National Bibliography identifies The Cold War by John Lewis Gaddis, Allen Lane 2006, with this ISBN. Amazon shortens the subtitle.'],
 ['progress-0045','0465047319','https://catalog.freelibrary.org/Record/608433','Library record confirms More Work for Mother by Ruth Schwartz Cowan with this ISBN. Amazon shortens the subtitle.']
]){
 const a=s.books[book].attempts.find(a=>a.url.endsWith('/'+id)),h=zlib.gunzipSync(fs.readFileSync(a.rawFile)).toString(),f=amazonFields(h),m=h.match(/data-hook="total-review-count"[^>]*>([\s\S]*?)<\/span>/)[1].match(/([\d,]+) global ratings?/);
 out[book]={amazon:{count:+m[1].replaceAll(',',''),url:a.url,asin:id,marketplace:'amazon.com.au',retrievedAt:a.retrieved,verifiedAt:new Date().toISOString(),verified:true,confidence:'high',productTitle:a.title,byline:a.byline,evidence:[m[0]],sourceSnapshot:a.rawFile,stars:Number(h.match(/id="acrPopover"[^>]*title="([\d.]+) out of 5 stars/)?.[1])||null,status:'One matching product aggregate; identity manually reconciled by ISBN. Counts are not summed.',identityVerification:{url,reason}}};
}
fs.writeFileSync(d+'manual-22.json',JSON.stringify(out,null,2)+'\n');
