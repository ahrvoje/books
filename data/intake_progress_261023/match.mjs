import fs from 'node:fs';
import {clean} from './extract.mjs';
const d='data/intake_progress_261023',read=f=>JSON.parse(fs.readFileSync(f));
const c=read(read('data/catalog.json').compiled);
export const norm=s=>s.normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/&/g,'and').replace(/[^a-z0-9]/g,'').replace(/^the/,'');
const books=[...c.currentBooks,...c.exclusions];
let rows=read(d+'/extracted.json').map(r=>({...r,title:r.source>=238&&r.source<=243?r.title.replace(/^\d+\s+/,''):r.title}));
let html=fs.readFileSync(d+'/raw/231.html','utf8');html=html.slice(html.indexOf('Abraham,',10000),html.indexOf('>Papers<'));
for(const m of html.matchAll(/(?:^|<p>)([^<]+)<em>([\s\S]*?)<\/em>([\s\S]*?)<\/p>/g))rows.push({source:231,author:clean(m[1]).replace(/,\s*$/,''),title:clean(m[2]),context:clean(m[0]),year:+m[3].match(/\d{4}/)?.[0]||null});
if(fs.existsSync(d+'/manual.json'))rows.push(...read(d+'/manual.json'));
const seen=new Set();rows=rows.filter(r=>{let k=r.source+'|'+norm(r.title);if(seen.has(k))return false;seen.add(k);return true;});
for(const r of rows){const n=norm(r.title),short=norm(r.title.split(':')[0]);let hits=books.filter(b=>norm(b.title)===n||norm(b.title+': '+(b.subtitle||''))===n);if(!hits.length&&short.length>2)hits=books.filter(b=>norm(b.title.split(':')[0])===short);if(!hits.length&&n.length>14)hits=books.filter(b=>norm(b.title).startsWith(n)||n.startsWith(norm(b.title))&&norm(b.title).length>14);if(hits.length===1){r.id=hits[0].id;r.status=hits[0].status||'excluded';r.matchedTitle=hits[0].title;r.matchedAuthor=hits[0].author;}else if(hits.length)r.candidates=hits.map(b=>({id:b.id,title:b.title,author:b.author}));}
fs.writeFileSync(d+'/matched.json',JSON.stringify(rows,null,2));
fs.writeFileSync(d+'/pending.tsv',rows.filter(r=>!r.id).map((r,i)=>`${i}\t${r.source}\t${r.title}\t${r.author}\t${r.url||''}\t${JSON.stringify(r.candidates||[])}`).join('\n'));
console.log('total',rows.length,'matched',rows.filter(r=>r.id).length,'pending',rows.filter(r=>!r.id).length);
