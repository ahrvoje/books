import fs from 'node:fs';import {chromium} from 'playwright';
const d='data/shelves_261025',browser=await chromium.launch({headless:true});
const page=await browser.newPage();
page.on('response',async r=>{if(r.url().includes('gatesnotes')&&/json/i.test(r.headers()['content-type']||'')){try{const t=await r.text();fs.appendFileSync(d+'/gates-responses.jsonl',JSON.stringify({url:r.url(),body:t})+'\n');}catch{}}});
await page.goto('https://www.gatesnotes.com/books',{waitUntil:'domcontentloaded',timeout:60000});
await page.waitForTimeout(10000);
fs.writeFileSync(d+'/296-live.html',await page.content());fs.writeFileSync(d+'/296-live.txt',await page.locator('body').innerText());
console.log((await page.locator('body').innerText()).slice(-12000));
await browser.close();
