import fs from 'node:fs';
import zlib from 'node:zlib';
import {amazonFields} from '../pages_density_261021/collect.mjs';
const d='data/top500_261024/',s=JSON.parse(fs.readFileSync(d+'amazon.json')),out={};
for(const [book,id,url,reason] of [
 ['progress-0017','0887308627','https://books.google.com/books?id=8BxiGwAACAAJ','Google Books confirms full title and author for this ISBN; Amazon shortens the title to Plastic. Both inspected print editions report 5 ratings.'],
 ['progress-0095','0521299551','https://www.cca.qc.ca/en/search/details/library/publication/16584351','Library record confirms author, title, paperback ISBN and that this edition contains both volumes. Amazon abbreviates the title.'],
 ['progress-0025','0062279343','https://www.alibris.co.uk/Sextant-A-Young-Mans-Daring-Sea-Voyage-and-the-Men-Who-Mapped-the-Worlds-Oceans-David-Barrie/book/28129406','Exact ISBN and full title identify David Barrie’s hardcover. Amazon omits the byline.'],
 ['progress-0775','0830642838','https://www.ebay.com/itm/336354857207','Exact ISBN identifies Aftermath by Flying Magazine Editors, not the unrelated work by Harald Jähner. Amazon omits the byline.']
]){
 const a=s.books[book].attempts.find(a=>a.url.endsWith('/'+id)),h=zlib.gunzipSync(fs.readFileSync(a.rawFile)).toString(),f=amazonFields(h),m=h.match(/data-hook="total-review-count"[^>]*>([\s\S]*?)<\/span>/)[1].match(/([\d,]+) global ratings?/);
 out[book]={amazon:{count:+m[1].replaceAll(',',''),url:a.url,asin:id,marketplace:'amazon.com.au',retrievedAt:a.retrieved,verifiedAt:a.retrieved,verified:true,confidence:'high',productTitle:a.title,byline:a.byline,evidence:[m[0]],sourceSnapshot:a.rawFile,stars:Number(h.match(/id="acrPopover"[^>]*title="([\d.]+) out of 5 stars/)?.[1])||null,status:'One matching product aggregate; identity manually reconciled by ISBN. Counts are not summed.',identityVerification:{url,reason}},product:{id,url:a.url,title:a.title,format:f.format,language:f.language,sourceSnapshot:a.rawFile,identityVerification:{url,reason}}};
}
for(const [book,id,url] of [
 ['progress-0148','9780262513135','https://mitpress.mit.edu/9780262258470/the-simple-science-of-flight/'],
 ['progress-0812','9789264307445','https://www.oecd.org/content/dam/oecd/en/publications/reports/2019/02/global-material-resources-outlook-to-2060_g1g98d7d/9789264307452-en.pdf'],
 ['progress-0499','9780300181111','https://yalebooks.yale.edu/book/9780300181111/the-computer-and-the-brain/']
])out[book]={productCandidate:{id,url,format:'Paperback',reason:'Publisher-confirmed print ISBN for a second lookup after an unavailable or misidentified earlier product.'}};
fs.writeFileSync(d+'manual-15.json',JSON.stringify(out,null,2)+'\n');
