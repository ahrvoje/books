import fs from 'node:fs';
import {products} from '../pages_density_261021/collect.mjs';
const d='data/top500_261024/',read=p=>JSON.parse(fs.readFileSync(p)),b=read(d+'targets.json'),s=read(d+'amazon.json'),l=read(d+'progress.json'),m={};
for(const f of fs.readdirSync(d).filter(f=>/^manual(?:-\d+)?\.json$/.test(f)))for(const [id,x]of Object.entries(read(d+f)))m[id]={...m[id],...x};
const out=[];
for(const x of b)if(x.amazon?.count==null&&!s.books[x.id]?.done){
 const ids=[m[x.id]?.productCandidate?.id,m[x.id]?.product?.id,m[x.id]?.edition?.id,x.edition?.id,...x.edition?.isbn10||[],...x.edition?.isbn13||[],...products(x),...(l.books[x.id]?.identities||[]).flatMap(x=>x.isbn)].filter(Boolean);
 if(!ids.some(i=>/\b(?:978\d{10}|\d{9}[\dX])\b/.test(i)))out.push({id:x.id,title:x.title,author:x.author,ids});
}
console.log(JSON.stringify(out,null,2));
