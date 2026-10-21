import fs from 'node:fs';
const dir='data/source_batch_261021/';
const clean=s=>s.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi,'').replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi,'').replace(/<\/(?:p|div|h[1-6]|li|tr)>/gi,'\n').replace(/<[^>]*>/g,' ').replace(/&amp;/g,'&').replace(/&quot;/g,'"').replace(/&#39;|&#x27;/g,"'").replace(/&nbsp;/g,' ').replace(/[ \t]+/g,' ').replace(/\n\s*\n/g,'\n').trim();
for(const m of JSON.parse(fs.readFileSync(dir+'capture.json'))){if(!m.status)continue;const html=fs.readFileSync(dir+'raw/'+m.index+'.html','utf8');fs.writeFileSync(dir+'raw/'+m.index+'.txt',clean(html));console.log(m.index,m.status,clean(html).slice(0,180));}
const p='site/app.js';let s=fs.readFileSync(p,'utf8');s=s.replaceAll('class="table-scroll" tabindex="0"','class="table-scroll" tabindex="-1"').replaceAll('class="column-scrollbar" tabindex="0"','class="column-scrollbar" tabindex="-1"');fs.writeFileSync(p,s);
const c=JSON.parse(fs.readFileSync(JSON.parse(fs.readFileSync('data/catalog.json')).compiled));
fs.writeFileSync(dir+'top100.json',JSON.stringify(c.currentBooks.filter(b=>b.status==='recommended').sort((a,b)=>b.total-a.total||a.title.localeCompare(b.title)).slice(0,100),null,2));
console.log('Top 100 unknown',JSON.parse(fs.readFileSync(dir+'top100.json')).filter(b=>b.amazon?.count==null).map(b=>({id:b.id,title:b.title,amazon:b.amazon})));
console.log('Catalog keys',Object.keys(c));console.log('book',c.currentBooks[0]);
