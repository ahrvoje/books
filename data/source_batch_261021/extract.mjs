import fs from 'node:fs';
import crypto from 'node:crypto';
const dir='data/source_batch_261021/';
export const clean=s=>String(s||'').replace(/<[^>]*>/g,' ').replace(/&#(\d+);/g,(_,n)=>String.fromCodePoint(+n)).replace(/&#x([a-f\d]+);/gi,(_,n)=>String.fromCodePoint(parseInt(n,16))).replace(/&amp;/g,'&').replace(/&quot;/g,'"').replace(/&apos;/g,"'").replace(/&nbsp;/g,' ').replace(/&mdash;/g,'—').replace(/&rsquo;/g,'’').replace(/&ldquo;|&rdquo;/g,'"').replace(/\s+/g,' ').trim();
export const norm=s=>clean(s).normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,' ').trim();
const all=[];
for(const m of JSON.parse(fs.readFileSync(dir+'capture.json'))){if(m.status!==200)continue;const html=fs.readFileSync(dir+'raw/'+m.index+'.html','utf8'),text=fs.readFileSync(dir+'raw/'+m.index+'.txt','utf8');let entries=[];
if(m.url.includes('shortform.com')){const cards=html.split(/<[a-z]+ class="best-books-book-card">/).slice(1);entries=cards.map(h=>({title:clean(h.match(/<h2[^>]*>([\s\S]*?)<\/h2>/)?.[1]),author:clean(h.match(/class="best-books-book-card__author"[^>]*>([\s\S]*?)<\/p>/)?.[1]),context:clean(h.split('<script')[0]),rank:Number(h.match(/class="best-books-book-card__rank">(\d+)/)?.[1])}));}
else if(m.index===198){for(const x of html.matchAll(/data-react-props="([\s\S]*?)"/g)){try{const p=JSON.parse(clean(x[1]));const walk=v=>{if(!v||typeof v!=='object')return;if(v.bookTitleBare&&v.author?.name)entries.push({title:v.bookTitleBare,author:v.author.name,context:clean(v.description?.html||''),reader:`GR ${v.avgRating} · ${v.ratingsCount}`,url:'https://www.goodreads.com'+v.bookUrl});for(const q of Object.values(v))if(typeof q==='object')walk(q);};walk(p);}catch{}}}
else if(m.url.includes('goodreads.com')){const chunks=html.split(/<a class="bookTitle"/).slice(1);entries=chunks.map(h=>({title:clean(h.match(/^[^>]*>([\s\S]*?)<\/a>/)?.[1]).replace(/ \((?:Hardcover|Paperback|Kindle Edition|ebook|Audiobook)\)$/,''),author:clean(h.match(/class="authorName"[^>]*>([\s\S]*?)<\/a>/)?.[1]),url:'https://www.goodreads.com'+h.match(/href="([^"]+)/)?.[1],context:clean(h).slice(0,2500)}));}
else if(m.index===176){const lines=text.split('\n').map(clean);entries=lines.map((s,i)=>{const x=s.match(/^(.{2,180}) by ([A-Z].{2,100})$/);return x?{title:x[1],author:x[2],context:lines[i+1]}:null;}).filter(Boolean);}
else if(m.index===178){entries=[...clean(text).matchAll(/(?:^|\s)\d+\.\s+(.+?)\s+\(([^()]+)\)(?=\s+\d+\.|\s+Disclaimer)/g)].map(x=>({title:x[1],author:x[2],context:x[0]}));}
else if(m.index===180){entries=text.split('\n').map(clean).filter(s=>s.includes(' — ')).map(s=>{const [title,author]=s.split(' — ');return {title,author,context:s};});}
else if(m.index===177){entries=[...html.matchAll(/<h3[^>]*>([\s\S]*?)<\/h3>\s*<\/div>\s*<p[^>]*>([\s\S]*?)<\/p>(?:\s*<p[^>]*>([\s\S]*?)<\/p>)?/g)].map(x=>({title:clean(x[1]),author:clean(x[2]),context:clean(x[3])}));}
else if(m.index===192){const body=html.slice(html.indexOf('Virtual Bookshelf',html.indexOf('<body')));for(const block of body.split(/<br\s*\/?\s*>/)){const s=clean(block),x=s.match(/([^<>]{2,90}?)\s*\((?:first published |originally published )?(\d{4})\)\s*(.{2,220})$/);if(x)entries.push({title:x[3],author:x[1].split('. ').slice(-2).join('. '),context:s,sourceEditionYear:+x[2]});}}
entries=entries.filter(b=>b.title);const seen=new Set();entries=entries.filter(b=>{const k=norm(b.title)+'|'+norm(b.author);if(seen.has(k))return false;seen.add(k);return true;});
for(const b of entries)all.push({...b,source:m.index,sourceURL:m.url});console.log(m.index,entries.length);
}
fs.writeFileSync(dir+'extracted.json',JSON.stringify(all,null,2));
const c=JSON.parse(fs.readFileSync(JSON.parse(fs.readFileSync('data/catalog.json')).compiled));
const existing=[...c.currentBooks,...c.exclusions];
fs.writeFileSync(dir+'existing-shape.json',JSON.stringify(c.exclusions.slice(0,3),null,2));
const candidates=[];
for(const b of all){const t=norm(b.title),short=norm(b.title.split(':')[0]);const matches=existing.filter(e=>{const et=norm(e.title),es=norm(e.title?.split(':')[0]);return et===t||es===short;});const a=norm(b.author);const good=matches.filter(e=>!a||norm(e.author)===a||norm(e.author).split(' ').some(s=>s.length>3&&a.split(' ').includes(s)));b.matches=good.map(e=>e.id||e.title);if(good.length===1)b.match=good[0].id||good[0].title;else candidates.push({title:b.title,author:b.author,source:b.source,matches:matches.map(e=>({id:e.id,title:e.title,author:e.author}))});}
fs.writeFileSync(dir+'matched.json',JSON.stringify(all,null,2));
fs.writeFileSync(dir+'unmatched.json',JSON.stringify(candidates,null,2));
console.log('Extracted',all.length,'matched',all.filter(b=>b.match).length,'unmatched',candidates.length);
