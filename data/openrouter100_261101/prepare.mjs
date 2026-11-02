import fs from 'node:fs';
import crypto from 'node:crypto';
const dir='data/openrouter100_261101';
const read=p=>JSON.parse(fs.readFileSync(p,'utf8'));
fs.mkdirSync(dir+'/raw',{recursive:true});
const baseline=read('data/catalog.json'),c=read(baseline.compiled),e=read('site/editions.json'),n=read('site/enrichment.json').books,r=read('site/reference-pages.json');
const targets=c.currentBooks.filter(b=>b.status==='recommended').sort((a,b)=>b.total-a.total||a.title.localeCompare(b.title)).map((b,i)=>({id:b.id,title:b.title,author:b.author,rank:i+1,amazon:b.amazon?.count??null,purchaseUrl:b.purchaseUrl||b.titleCell?.match(/\]\(([^)]+)\)/)?.[1],edition:n[b.id]?.edition||e[b.id]||null,reference:r[b.id]}));
for(const [name,v]of Object.entries({'baseline.json':baseline,'targets.json':targets,'input-hashes.json':Object.fromEntries(['RECOMMENDED_BOOKS.md','VETOED_BOOKS.md','EXCLUDED_BOOKS.md','site/editions.json','site/reference-pages.json','site/enrichment.json','data/catalog.json',baseline.compiled].map(p=>[p,crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex')]))})){
 if(fs.existsSync(dir+'/'+name))throw Error('Baseline already exists');
 fs.writeFileSync(dir+'/'+name,JSON.stringify(v,null,2)+'\n');
}
console.log({books:targets.length,pages:targets.filter(b=>!b.edition).length,references:targets.filter(b=>b.reference.pages==null).length,ratings:targets.filter(b=>b.amazon==null).length});
console.log(targets.filter(b=>b.amazon==null).slice(0,10).map(b=>({id:b.id,title:b.title,author:b.author})));
