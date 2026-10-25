import fs from 'node:fs';import {chromium} from 'playwright';
const d='data/shelves_261025',read=p=>JSON.parse(fs.readFileSync(p,'utf8')),write=(p,v)=>fs.writeFileSync(d+'/'+p,JSON.stringify(v,null,2)+'\n');
const browser=await chromium.launch({headless:true}),page=await browser.newPage();await page.route('**/*',r=>r.abort());
const entries=[];const add=(source,title,author='',extra={})=>{title=title.trim().replace(/^[†*]+/,'').trim();if(title)entries.push({source,title,author:author.trim(),...extra});};
for(const s of read(d+'/inputs.json')){
 let html=fs.readFileSync(`${d}/${s.source===302?'302-browse':s.source}.html`,'utf8');if(s.source===302)html+=fs.readFileSync(d+'/302-page2.html','utf8');
 await page.setContent(html,{waitUntil:'domcontentloaded'});
 if(s.source===294)await page.evaluate(()=>{for(const t of document.querySelectorAll('template'))t.replaceWith(t.content.cloneNode(true));});
 await page.evaluate(()=>document.querySelectorAll('style,script,nav,header,footer').forEach(n=>n.remove()));
 const x=await page.evaluate(()=>({text:document.body.innerText,links:[...document.querySelectorAll('a')].map(a=>({text:a.innerText.trim(),href:a.getAttribute('href'),parent:a.parentElement.innerText.trim()})),rows:[...document.querySelectorAll('tr')].map(r=>[...r.children].map(c=>c.innerText.trim())),lists:[...document.querySelectorAll('li')].filter(l=>!l.querySelector('li')).map(l=>l.innerText.trim()),paragraphs:[...document.querySelectorAll('p')].map(p=>p.innerText.trim())}));
 write(s.source+'-clean.json',x);fs.writeFileSync(`${d}/${s.source}-clean.txt`,x.text);
 const n=s.source;
 if(n===289){for(const l of x.text.split('1453:')[1].split('\n').map((l,i)=>i===0?'1453:'+l:l)){const m=l.match(/^(.+), (?:edited )?by (.+)$/)||l.match(/^(.+) by (.+)$/);if(m)add(n,m[1],m[2]);else if(l.trim())add(n,l,'',{unparsed:true});}add(n,'The Metaphysical Club','Louis Menand');}
 if(n===290||n===291||n===293){for(const a of x.links){if(n===290&&!/goodreads.com\/book/.test(a.href))continue;if(n===291&&!/openlibrary.org\/works/.test(a.href))continue;if(n===293&&!/ by /.test(a.text))continue;const m=(n===291?a.parent:a.text).match(/^(.+?) by (.+)$/s);if(m)add(n,m[1],m[2].replace(/ \(published by.*$/s,''),{url:a.href});}}
 if(n===292){for(const r of x.rows)if(r.length>=3)add(n,r[2],r[1]);add(n,'A Brief History of Time','Stephen Hawking');add(n,'A Beautiful Mind','Sylvia Nasar');}
 if(n===294){for(const a of x.links.filter(a=>a.href?.startsWith('/books/'))){const m=a.parent.match(/\bby (.+)/);add(n,a.text,m?.[1]||'',{url:new URL(a.href,s.url).href});}}
 if(n===295){const block=x.text.split("reading list: 14 recommended books")[1]?.split('Quotes & Sources')[0]||'';for(const m of block.matchAll(/([^\n]+)\nBuy now\n[^\n]+\n([^\n]+)/g))add(n,m[1],m[2]);}
 if(n===297){const lines=x.text.split('\n');for(let i=0;i<lines.length;i++)if(lines[i].startsWith('by '))add(n,lines[i-1],lines[i].slice(3),{url:x.links.find(a=>a.text===lines[i-1])?.href});}
 if(n===298){const start=x.text.indexOf('In the Beginning was the Command Line');const end=x.text.indexOf('3D Printed Materials',start);const block=x.text.slice(start,end);for(const l of block.split('\n')){const m=l.match(/^(.+), ([^\n]+?)\s+(https?:\/\/\S+)$/);if(m)add(n,m[1],m[2],{url:m[3]});}}
 if(n===299){for(const r of x.rows)if(r.length===7&&r[0]!=='Title')add(n,r[0],r[1],{year:r[3],tags:r[5]});}
 if(n===300){for(const l of x.lists){const m=l.match(/^([^,]+),\s*(.+)$/s);if(m)add(n,m[2],m[1]);}for(const p of x.paragraphs){if(p.length<350&&p.includes(',')&&!x.lists.includes(p)){const i=p.lastIndexOf(',');add(n,p.slice(0,i),p.slice(i+1),{paragraph:true});}}}
 if(n===301){for(const m of x.text.matchAll(/^\d{4}-\d{2}-\d{2}: (.+?) by (.+?) \([*]+\)\. (\d+) pages\. Published in (\d{4})\./gm))add(n,m[1],m[2],{pages:+m[3],year:+m[4]});}
 if(n===302){for(const a of x.links.filter(a=>/^\/books\//.test(a.href)&&a.text&&!/Open the book/.test(a.text))){const m=x.links.find(z=>z.href===a.href&&z.parent.includes('by '))?.parent.match(/by (.+?) · (\d{4})/);add(n,a.text,m?.[1]||'',{url:new URL(a.href,s.url).href});}}
 if(n===303){for(const l of x.lists){const m=l.match(/^(.+) · (.+)$/);if(m)add(n,m[1],m[2]);}}
 console.log(n,entries.filter(b=>b.source===n).length,x.text.slice(-160));
}
await browser.close();
const norm=s=>s.normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/&/g,' and ').replace(/[^a-z0-9]/g,'');
const unique=[...new Map(entries.map(b=>[b.source+'|'+norm(b.title)+'|'+norm(b.author),b])).values()];unique.forEach((b,i)=>b.index=i);write('extracted.json',unique);
