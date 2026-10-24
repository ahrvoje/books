import fs from 'node:fs';
import zlib from 'node:zlib';
const d='data/top500_261024/',s=JSON.parse(fs.readFileSync(d+'amazon.json')),out={};
for(const [book,id,url,reason] of [
 ['q0967','0520385683','https://www.ucpress.edu/book/9780520385689/the-united-states-of-war','Publisher confirms David Vine’s book and the paperback ISBN; Amazon includes the series volume number in its title.'],
 ['progress-0417','0521867096','https://assets.cambridge.org/97805218/67092/frontmatter/9780521867092_frontmatter.pdf','Publisher front matter confirms Darwin’s On the Origin of Species, Jim Endersby editor, 2009 hardcover ISBN. Amazon prepends Cambridge and appends format/date. Of the two inspected editions, this aggregate is the larger; counts are not summed.']
]){
 const a=s.books[book].attempts.find(a=>a.url.endsWith('/'+id)),h=zlib.gunzipSync(fs.readFileSync(a.rawFile)).toString(),m=h.match(/data-hook="total-review-count"[^>]*>([\s\S]*?)<\/span>/)[1].match(/([\d,]+) global ratings?/);
 out[book]={amazon:{count:+m[1].replaceAll(',',''),url:a.url,asin:id,marketplace:'amazon.com.au',retrievedAt:a.retrieved,verifiedAt:new Date().toISOString(),verified:true,confidence:'high',productTitle:a.title,byline:a.byline,evidence:[m[0]],sourceSnapshot:a.rawFile,stars:Number(h.match(/id="acrPopover"[^>]*title="([\d.]+) out of 5 stars/)?.[1])||null,status:'One matching product aggregate; identity manually reconciled by ISBN. Counts are not summed.',identityVerification:{url,reason}}};
}
fs.writeFileSync(d+'manual-25.json',JSON.stringify(out,null,2)+'\n');
