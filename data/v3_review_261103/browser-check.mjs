import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {pathToFileURL} from 'node:url';
import {chromium} from 'playwright';
import {build,buildDataset,HTML_FILE} from '../../site/build.mjs';
build();
const dir='data/v3_review_261103',changes=JSON.parse(fs.readFileSync(dir+'/changes.json','utf8')),data=buildDataset();
const browser=await chromium.launch({headless:true}),errors=[],requests=[];
try{
 const page=await browser.newPage();page.on('pageerror',e=>errors.push(e.message));
 await page.route('http**/*',r=>{requests.push(r.request().url());return r.abort();});
 await page.goto(pathToFileURL(HTML_FILE).href);
 await page.locator('[data-page="vetoed"]').click();
 for(const x of changes.filter(x=>x.status==='vetoed')){
  await page.locator(`[data-veto-details="${x.id}"]`).click();
  assert.equal(await page.locator('#details-title').textContent(),x.title);
  const body=await page.locator('#details-body').textContent();assert(body.includes(x.reason));
  const b=data.vetoed.find(b=>b.id===x.id);if(b.edition)assert(body.includes(String(b.edition.pages)));
  assert((await page.locator(`#details-body a[href$="#${x.id}"]`).count())>0);
  await page.locator('#close-details').click();
 }
 await page.locator('[data-page="books"]').click();
 for(const id of ['rem-u1727','shelf-7acb8b8e583f','q0414','nb2806edfbc','shelf-2597656a480c','rem-u0853']){
  await page.locator(`[data-details="${id}"]`).click();
  assert((await page.locator('#details-body').textContent()).includes('Intellectual contribution'));
  assert((await page.locator(`#details-body a[href$="#${id}"]`).count())>0);
  await page.locator('#close-details').click();
 }
 assert.deepEqual(errors,[]);assert.deepEqual(requests,[]);
 const result={newVetoDetailsChecked:10,revisedRecommendationDetailsChecked:6,errors,networkRequests:requests,htmlBytes:fs.statSync(HTML_FILE).size,datasetHash:data.datasetHash};
 fs.writeFileSync(path.join(dir,'browser-check.json'),JSON.stringify(result,null,2)+'\n');console.log(result);
}finally{await browser.close();}
