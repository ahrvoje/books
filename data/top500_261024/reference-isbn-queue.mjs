import fs from 'node:fs';
import {products} from '../pages_density_261021/collect.mjs';
const d='data/top500_261024/',read=p=>JSON.parse(fs.readFileSync(p)),bs=read(d+'targets.json'),review=read(d+'review.json'),lib=read(d+'progress.json'),m={};
for(const f of fs.readdirSync(d).filter(f=>/^manual(?:-\d+)?\.json$/.test(f)))for(const [id,x]of Object.entries(read(d+f)))m[id]={...m[id],...x};
const out=review.filter(x=>x.remaining.references).map(x=>{
 const b=bs.find(b=>b.id===x.id),ids=[m[b.id]?.productCandidate?.id,m[b.id]?.edition?.id,b.edition?.id,...b.edition?.isbn13||[],...products(b),...(lib.books[b.id]?.identities||[]).flatMap(x=>x.isbn)].map(x=>String(x||'').replace(/^ISBN(?:\/ASIN)?:/,'')).filter(x=>/^(?:97[89]\d{10}|\d{9}[\dX])$/.test(x));
 return {id:b.id,title:b.title,author:b.author,isbn:ids[0]};
}).filter(x=>x.isbn);
console.log(JSON.stringify(out));
