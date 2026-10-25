import fs from 'node:fs';import {chromium} from 'playwright';
const d='data/shelves_261025',browser=await chromium.launch({headless:true}),p=await browser.newPage();await p.route('**/*',r=>r.abort());
for(const n of ['289','298','302-browse']){await p.setContent(fs.readFileSync(`${d}/${n}.html`,'utf8'));console.log(n,await p.evaluate(()=>nonsense).catch(()=>''));if(n==='302-browse')console.log(await p.locator('nav').innerText().catch(()=>''),await p.locator('a').evaluateAll(as=>as.filter(a=>/page=/.test(a.href)).map(a=>a.outerHTML)));if(n==='298')console.log(await p.locator('article h1,article h2,article h3').allTextContents());if(n==='289')console.log(await p.locator('main').innerHTML().then(s=>s.slice(0,1000)).catch(()=>''));}
await browser.close();
