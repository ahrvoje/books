import fs from 'node:fs';import {chromium} from 'playwright';
const d='data/shelves_261025',read=p=>JSON.parse(fs.readFileSync(p,'utf8'));const q=read(d+'/candidates.json');
const b=await chromium.launch({headless:true}),p=await b.newPage();await p.route('**/*',r=>r.abort());
const out={};
for(const n of [290,291,293,298,300,301]){await p.setContent(fs.readFileSync(`${d}/${n}.html`,'utf8'));out[n]=await p.evaluate(()=>{document.querySelectorAll('style,script').forEach(x=>x.remove());let heading='';return [...document.querySelectorAll('h1,h2,h3,li,p')].flatMap(x=>{if(/^H/.test(x.tagName)){heading=x.innerText;return [];}if(x.querySelector('li'))return [];return [{text:x.innerText,heading,tag:x.tagName}];});});}
fs.writeFileSync(d+'/sections.json',JSON.stringify(out,null,2));
for(const n of [290,291,293,300]){const missing=out[n].filter(x=>x.tag==='LI'&&x.text.length>6&&!q.some(b=>b.source===n&&x.text.includes(b.title)));console.log(n,'unparsed list items',missing.length,missing.slice(0,20));}
console.log('301 unmatched dates',out[301].flatMap(x=>x.text.split('\n')).filter(l=>/^\d{4}-\d\d-\d\d:/.test(l)&&!q.some(b=>b.source===301&&l.includes(b.title))).slice(0,35));
await b.close();
