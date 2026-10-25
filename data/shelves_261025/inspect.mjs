import fs from 'node:fs';
import {chromium} from 'playwright';
const d='data/shelves_261025';
const browser=await chromium.launch({headless:true});
const page=await browser.newPage();await page.route('**/*',r=>r.abort());
for(const s of JSON.parse(fs.readFileSync(d+'/inputs.json'))){
 await page.setContent(fs.readFileSync(`${d}/${s.source}.html`,'utf8'),{waitUntil:'domcontentloaded'});
 const x=await page.evaluate(()=>({text:document.body.innerText,links:[...document.querySelectorAll('a')].map(a=>({text:a.textContent.trim(),href:a.getAttribute('href'),parent:a.parentElement.textContent.trim().slice(0,1200)})),tables:[...document.querySelectorAll('tr')].map(r=>[...r.children].map(c=>c.textContent.trim())),lists:[...document.querySelectorAll('li')].map(l=>l.textContent.trim()),scripts:[...document.querySelectorAll('script')].map(s=>({src:s.src,text:s.textContent}))}));
 fs.writeFileSync(`${d}/${s.source}.json`,JSON.stringify(x,null,2));fs.writeFileSync(`${d}/${s.source}.txt`,x.text);
 console.log(s.source,x.text.length,x.links.length,x.tables.length,x.lists.length, x.text.slice(-550));
}
await browser.close();
