import fs from 'node:fs';
import assert from 'node:assert/strict';
const j=p=>JSON.parse(fs.readFileSync(p)),c=j(j('data/catalog.json').compiled),e=j('site/enrichment.json'),ed=j('site/editions.json');
const key=(a,t)=>(a+'|'+t).normalize('NFKC').replace(/\s+/g,' ').trim();
const books=new Map(c.currentBooks.filter(b=>b.status==='recommended').map(b=>[key(b.author,b.title),b]));
const p='RECOMMENDED_BOOKS.md';
const out=fs.readFileSync(p,'utf8').split('\n').map(l=>{if(!/^\| \d{4}-/.test(l))return l;const cells=l.split('|'),b=books.get(key(cells[3].trim(),cells[4].trim().match(/^\[([^\]]+)\]/)[1]));assert(b);const edition=e.books[b.id]?.edition||ed[b.id];cells[7]=edition?` [${edition.pages}](${edition.url}) `:' Unknown ';return cells.join('|');}).join('\n');
fs.writeFileSync(p,out);fs.writeFileSync('data/remaining_261021/candidate-recommended.md',out);
