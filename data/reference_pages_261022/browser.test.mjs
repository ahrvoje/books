import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {pathToFileURL} from 'node:url';
import {chromium} from 'playwright';
import {buildDataset,HTML_FILE} from '../../site/build.mjs';
import {defaultModel} from '../../site/model.mjs';
const data=buildDataset(),browser=await chromium.launch({headless:true}),errors=[];
const dir='site/qa-output/reference-pages';fs.mkdirSync(dir,{recursive:true});
try{
 const page=await browser.newPage({viewport:{width:1440,height:1000}});
 page.on('pageerror',e=>errors.push(e.message));await page.route('http**/*',r=>r.abort());
 await page.goto(pathToFileURL(HTML_FILE).href);
 const legacy=defaultModel();delete legacy.terms.RP;
 await page.evaluate(m=>localStorage.setItem('books.model.v3',JSON.stringify({model:m})),legacy);await page.reload();
 await page.waitForFunction(n=>+document.querySelector('#matching-count').textContent.replace(/\D/g,'')===n,data.books.length);
 assert.equal(await page.locator('#notice').isVisible(),false);
 await page.locator('#columns').click();await page.locator('[data-column-toggle="raw:RP"]').check();await page.locator('[data-column-toggle="points:RP"]').check();
 await page.waitForFunction(()=>!document.querySelector('#apply').disabled);await page.locator('#apply').click();
 assert.equal(await page.locator('[data-book="smil"] [data-column="raw:RP"]').textContent(),'72');
 await page.locator('[data-panel="scoring"]').click();await page.locator('[data-variable="RP"] summary').click();
 await page.locator('[data-path="terms.RP.enabled"]').check();await page.locator('[data-path="terms.RP.mode"]').selectOption('rate');await page.locator('[data-path="terms.RP.rate"]').fill('0.1');
 await page.waitForFunction(()=>!document.querySelector('#apply').disabled);await page.locator('#apply').click();
 assert.equal(await page.locator('[data-book="smil"] [data-column="points:RP"]').textContent(),'7.20');
 await page.locator('[data-book="smil"] [data-details]').click();assert((await page.locator('#details-body').textContent()).includes('235–306'));await page.locator('#close-details').click();
 await page.screenshot({path:path.join(dir,'recommended.png')});
 await page.locator('[data-panel="filters"]').click();await page.locator('[data-variable="RP"] summary').click();await page.locator('[data-path="filters.RP.enabled"]').check();await page.locator('[data-path="filters.RP.min"]').fill('30');
 await page.waitForFunction(()=>!document.querySelector('#apply').disabled);await page.locator('#apply').click();
 assert(+((await page.locator('#matching-count').textContent()).replace(/\D/g,''))<data.books.length);
 await page.locator('[data-page="vetoed"]').click();
 assert.deepEqual(await page.locator('#vetoed-list tr[data-veto-book]').evaluateAll(rows=>rows.map(r=>r.children[4].textContent)),data.vetoed.map(b=>String(b.referencePages.pages??'Unknown')));
 const known=data.vetoed.find(b=>b.referencePages.pages!==null);await page.locator(`[data-veto-details="${known.id}"]`).click();assert((await page.locator('#details-body').textContent()).includes('Reference pages:'));await page.locator('#close-details').click();
 for(const width of [390,1440]){await page.setViewportSize({width,height:900});assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1));await page.screenshot({path:path.join(dir,`vetoed-${width}.png`)});}
 assert.deepEqual(errors,[]);fs.writeFileSync(`${dir}/results.json`,JSON.stringify({passed:true,checks:['legacy settings','raw column','rate scoring','scope evidence','filter','all veto rows','veto details','390/1440 viewport'],errors},null,2));
 console.log('Reference-page browser checks passed.');
}finally{await browser.close();}
