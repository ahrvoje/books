// Requires Playwright only for development checks. The generated site has no dependencies.
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { ROOT, HTML_FILE, build, buildDataset } from './build.mjs';
import { defaultModel } from './model.mjs';
const { chromium } = await import(process.env.BOOKS_PLAYWRIGHT_MODULE ? pathToFileURL(process.env.BOOKS_PLAYWRIGHT_MODULE).href : 'playwright');
build();
const expected = buildDataset();
const bookCount = expected.books.length;
const out = path.join(ROOT, 'site/qa-output'); fs.mkdirSync(out, { recursive: true });
const isolated=path.join(out,'isolated');fs.mkdirSync(isolated,{recursive:true});
fs.copyFileSync(HTML_FILE,path.join(isolated,'index.html'));
const browser = await chromium.launch({ headless: true });
const errors = [], requests = [], observations = [];
try {
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 }, locale: 'en-GB' });
  page.on('pageerror', e => errors.push(e.message));
  await page.route('http**/*', route => { requests.push(route.request().url()); return route.abort(); });
  await page.goto(pathToFileURL(path.join(isolated, 'index.html')).href);
  const legacy=defaultModel();delete legacy.columnsMode;legacy.columns=['year','raw:SRC','raw:PG'];legacy.selected=['removed-book'];
  await page.evaluate(model=>localStorage.setItem('books.model.v3',JSON.stringify({datasetHash:'older-catalog',model})),legacy);
  await page.reload();
  await page.waitForFunction(count=>Number(document.querySelector('#matching-count').textContent.replace(/\D/g,''))===count,bookCount);
  assert.equal(await page.locator('#notice').isVisible(),false,'Catalog updates must be silent');
  assert.equal(await page.locator('#selection strong').textContent(),'0');
  assert.deepEqual((await page.locator('#matching-list th[data-column]').evaluateAll(nodes=>nodes.map(n=>n.dataset.column))).slice(0,4),['year','raw:PG','raw:O15','raw:SRC']);
  assert.equal(await page.locator('#matching-list th[data-column]').count(),19);
  assert.equal(await page.locator('#matching-list th[data-column="raw:O15"]').textContent(),'Amazon ratings');
  const columnLayout = await page.locator('#matching-list .book-table').evaluate(table => {
    const row=table.tBodies[0].rows[0];
    return {width:table.getBoundingClientRect().width, columns:[...table.querySelectorAll('th[data-column]')].map(th=>{
      const td=row.querySelector(`[data-column="${th.dataset.column}"]`);
      return {width:th.getBoundingClientRect().width,alignment:getComputedStyle(th).textAlign,
        valueAlignment:getComputedStyle(td).textAlign,rightDifference:Math.abs(th.getBoundingClientRect().right-td.getBoundingClientRect().right)};
    })};
  });
  assert(columnLayout.width<2000,'Default columns must use compact widths');
  assert(columnLayout.columns.every(c=>c.width<=80.1&&c.alignment==='right'&&c.valueAlignment==='right'&&c.rightDifference<1),
    'Numeric headings and values must align in the same compact column');
  await page.locator('#matching-list .column-scrollbar').evaluate(el=>{el.scrollLeft=500;});
  await page.waitForFunction(()=>document.querySelector('#matching-list .table-scroll').scrollLeft===500);
  await page.locator('#matching-list .column-scrollbar').evaluate(el=>{el.scrollLeft=0;});
  await page.waitForFunction(()=>document.querySelector('#matching-list .table-scroll').scrollLeft===0);
  assert.equal(await page.locator('#matching-list tr[data-book]').count(),bookCount);
  assert.equal(await page.locator('[data-more]').count(),0);
  await page.screenshot({ path: path.join(out, 'desktop.png') });
  await page.setViewportSize({width:390,height:844});
  await page.screenshot({path:path.join(out,'phone-default.png')});
  await page.setViewportSize({width:1440,height:1000});
  await page.locator('[data-page="vetoed"]').click();
  assert.equal(await page.locator('#vetoed-list tr[data-veto-book]').count(),expected.vetoed.length);
  assert.equal(await page.locator('#vetoed-list .score').first().textContent(),expected.vetoed[0].score);
  assert.equal(await page.locator('.control-shell').isVisible(),false);
  assert.equal(await page.locator('#book-toolbar').isVisible(),false);
  assert.equal(await page.locator('#selection').isVisible(),false);
  await page.locator('[data-veto-details]').first().click();
  assert((await page.locator('#details-body').textContent()).includes('counterfactual'));
  await page.locator('#details-body [data-evidence]').click();
  await page.locator('.embedded-analysis').waitFor();await page.locator('#close-details').click();
  await page.screenshot({path:path.join(out,'vetoed-desktop.png')});
  await page.setViewportSize({width:390,height:844});
  await page.screenshot({path:path.join(out,'vetoed-phone.png')});
  await page.locator('[data-page="excluded"]').click();
  assert.equal(await page.locator('#excluded-list li').count(),expected.excluded.length);
  assert.equal(await page.locator('#excluded-view .score,#excluded-view input').count(),0);
  await page.screenshot({path:path.join(out,'excluded-phone.png')});
  await page.locator('[data-page="sources"]').click();
  await page.reload();
  await page.locator('#sources-view').waitFor();
  assert.equal(await page.title(),'Sources — a working library');
  assert.equal(await page.locator('#book-toolbar').isVisible(),false);
  assert.equal(await page.locator('.control-shell').isVisible(),false);
  assert.equal(await page.locator('#selection').isVisible(),false);
  assert.deepEqual(await page.locator('#sources-list tr').evaluateAll(rows=>rows.map(row=>({
    id:+row.dataset.source,date:row.querySelector('time').dateTime,label:row.querySelector('.source-title').textContent,
    url:row.querySelector('.source-title a').dataset.evidence||row.querySelector('.source-title a').getAttribute('href'),
    analysis:row.querySelector('.source-analysis a').dataset.evidence
  }))),Object.values(expected.sources).sort((a,b)=>a.id-b.id).map(({id,date,label,url,analysis})=>({id,date,label,url,analysis})));
  for(const source of Object.values(expected.sources).filter(s=>s.url.startsWith('data/'))){
    await page.locator(`[data-source="${source.id}"] .source-title a`).click();
    assert.equal(await page.locator('.embedded-analysis').textContent(),expected.documents[source.url]);
    assert.equal(await page.locator('[data-back-book]').count(),0);
    await page.locator('#close-details').click();
  }
  await page.locator('#sources-list .source-analysis a').last().click();
  await page.locator('.embedded-analysis').waitFor();await page.locator('#close-details').click();
  for(const width of [320,390,1440]){
    await page.setViewportSize({width,height:900});await page.evaluate(()=>scrollTo(0,0));
    assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),'Sources must fit viewport');
    assert(await page.locator('#sources-list tr').evaluateAll(rows=>rows.every(row=>
      row.querySelector('.source-number').getBoundingClientRect().right<=row.querySelector('.source-title').getBoundingClientRect().left)),
      'Source numbers must not overlap source titles');
    if(width!==320)await page.screenshot({path:path.join(out,width===390?'sources-phone.png':'sources-desktop.png')});
  }
  await page.locator('[data-page="methodology"]').click();
  assert((await page.locator('#methodology-view').textContent()).includes('V5'));
  await page.locator('.exact-rules summary').click();
  assert((await page.locator('.exact-rules pre').textContent()).includes('THE ANALYSIS PROMPT'));
  await page.locator('.exact-rules summary').click();
  await page.locator('.method-toc a[href="#method-scoring"]').click();
  assert.equal(await page.locator('#methodology-view').isVisible(),true);
  for(const view of ['vetoed','excluded','methodology'])for(const width of [390,1440]){
    await page.locator(`[data-page="${view}"]`).click();await page.setViewportSize({width,height:900});
    assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),view+' must fit viewport');
    if(view==='methodology'){
      await page.locator('#method-vetoes').scrollIntoViewIfNeeded();
      await page.screenshot({path:path.join(out,width===390?'methodology-phone.png':'methodology-desktop.png')});
    }
  }
  await page.locator('[data-page="books"]').click();
  await page.setViewportSize({width:1440,height:1000});
  assert.equal(await page.locator('#matching-list .book-title').first().textContent(), 'How the World Really Works');
  await page.locator('#columns').click();
  await page.locator('[data-column-toggle="periodEnd"]').check();
  await page.locator('[data-column-toggle="points:E"]').check();
  await page.waitForFunction(()=>!document.querySelector('#apply').disabled);
  await page.locator('#apply').click();
  assert.equal(await page.locator('#matching-list td[data-column="points:E"]').first().textContent(),'16.20');
  assert.equal(await page.locator('#matching-list td[data-column="periodEnd"]').first().textContent(),'n/a');
  await page.locator('#matching-list [data-details]').first().click();
  await page.locator('#details-body [data-evidence]').first().click();
  await page.locator('.embedded-analysis').waitFor();
  assert((await page.locator('.embedded-analysis').textContent()).length>100);
  await page.locator('#close-details').click();
  await page.locator('#columns').click();
  await page.locator('[data-columns-preset="default"]').click();
  await page.waitForFunction(()=>!document.querySelector('#apply').disabled);
  await page.locator('#apply').click();
  await page.locator('[data-panel="filters"]').click();
  await page.locator('[data-variable="SRC"] summary').click();
  await page.locator('[data-path="filters.SRC.enabled"]').check();
  await page.locator('[data-path="filters.SRC.min"]').fill('3');
  await page.waitForFunction(()=>document.querySelector('#draft-preview').textContent.includes('not applied'));
  await page.locator('#apply').click();
  assert.notEqual(await page.locator('#filtered-count').textContent(), '0');
  assert.equal(await page.locator('tr[data-book]').count(),bookCount);
  await page.locator('#filtered-list [data-select]').first().check();
  assert.equal(await page.locator('#selection strong').textContent(),'1');
  await page.locator('[data-panel="scoring"]').click();
  await page.locator('[data-variable="PG"] summary').click();
  await page.locator('[data-path="terms.PG.enabled"]').check();
  await page.locator('[data-path="terms.PG.mode"]').selectOption('rate');
  await page.locator('[data-path="terms.PG.rate"]').fill('-0.01');
  await page.locator('[data-path="terms.PG.reference"]').fill('0');
  await page.waitForFunction(()=>document.querySelector('[data-formula="terms.PG"]').textContent.includes('-5.00 points'));
  await page.locator('#apply').click();
  assert.equal(await page.locator('#model-name').textContent(),'Custom evaluation');
  assert.equal(await page.locator('#matching-list th[data-column="points:PG"]').count(),1);
  await page.locator('[data-page="vetoed"]').click();
  assert.equal(await page.locator('#vetoed-list .score').first().textContent(),expected.vetoed[0].score);
  assert.equal(await page.locator('.control-shell').isVisible(),false);
  await page.locator('[data-page="books"]').click();
  assert.equal(await page.locator('#model-name').textContent(),'Custom evaluation');
  await page.locator('[data-panel="scoring"]').click();
  await page.locator('#reset-section').click();
  await page.waitForFunction(()=>!document.querySelector('#apply').disabled);
  await page.locator('#apply').click();
  assert.equal(await page.locator('#matching-list th[data-column="points:PG"]').count(),0);
  await page.locator('[data-panel="pareto"]').click();
  await page.locator('[data-axis-preset="pages"]').click();
  await page.waitForFunction(()=>!document.querySelector('#apply').disabled);
  await page.locator('#apply').click();
  assert(await page.locator('.plot-point').count()>0,'Verified lengths must support score/pages comparison');
  await page.locator('[data-panel="pareto"]').click();
  await page.locator('[data-axis-preset="sources"]').click();
  await page.waitForFunction(()=>!document.querySelector('#apply').disabled);
  await page.locator('#apply').click();
  assert(await page.locator('.plot-point').count()>0);
  await page.locator('.plot-point').last().focus();
  await page.locator('#plot-tooltip').waitFor({state:'visible'});
  await page.screenshot({path:path.join(out,'pareto-desktop.png')});
  await page.locator('#matching-list [data-details]').first().click();
  assert(await page.locator('#details .breakdown tbody tr').count()>=43);
  await page.locator('#close-details').click();
  // Settings round trip, validated through the actual import control.
  const downloaded = page.waitForEvent('download'); await page.locator('#export').click();
  const download=await downloaded; const exported=path.join(out,'settings.json');await download.saveAs(exported);
  await page.locator('#clear-selection').click();
  await page.locator('#import').setInputFiles(exported);
  await page.waitForFunction(()=>document.querySelector('#selection strong').textContent==='1');
  const oldCatalog=JSON.parse(fs.readFileSync(exported,'utf8'));oldCatalog.datasetHash='old-import';
  await page.locator('#import').setInputFiles({name:'compatible-old.json',mimeType:'application/json',buffer:Buffer.from(JSON.stringify(oldCatalog))});
  await page.waitForFunction(()=>document.querySelector('#notice').textContent.includes('Settings and selection imported.'));
  assert(!(await page.locator('#notice').textContent()).includes('catalog'));
  await page.locator('#import').setInputFiles({name:'old.json',mimeType:'application/json',buffer:Buffer.from(JSON.stringify({model:{version:2}}))});
  await page.waitForFunction(()=>document.querySelector('#notice').textContent.includes('not imported'));
  await page.locator('[data-dismiss-notice]').click();
  // Search is independent and does not overwrite retained scores.
  await page.locator('#search').fill('Material World');
  await page.waitForFunction(()=>document.querySelector('#matching-count').textContent==='1');
  await page.locator('#search').fill('');
  await page.waitForFunction(()=>document.querySelector('#matching-count').textContent!=='1');
  // Phone layout, scroll containment, cancel/apply, and draft persistence on resize.
  await page.setViewportSize({width:390,height:844});
  await page.locator('[data-panel="scoring"]').click();
  await page.locator('[data-variable="E"] summary').click();
  await page.locator('[data-path="terms.E.weight"]').fill('7');
  await page.setViewportSize({width:1440,height:1000});
  assert.equal(await page.locator('[data-path="terms.E.weight"]').inputValue(),'7');
  await page.setViewportSize({width:390,height:844});
  await page.screenshot({path:path.join(out,'phone-controls.png')});
  await page.locator('#cancel').click();
  await page.locator('[data-panel="scoring"]').click();
  await page.locator('[data-variable="E"] summary').click();
  assert.equal(await page.locator('[data-path="terms.E.weight"]').inputValue(),'20');
  await page.locator('#cancel').click();
  for(const width of [320,390,768,1099,1100,1440]){
    await page.setViewportSize({width,height:900});
    const layout=await page.evaluate(()=>({width:innerWidth,scroll:document.documentElement.scrollWidth,renderMs:window.bookSiteLastRenderMs}));
    assert(layout.scroll<=width+1,`Horizontal overflow at ${width}: ${layout.scroll}`);observations.push(layout);
  }
  await page.setViewportSize({width:390,height:844});
  await page.evaluate(()=>scrollTo(0,0));
  await page.screenshot({path:path.join(out,'phone.png')});
  // Make a target through UI; inherited scores must remain unchanged.
  await page.locator('[data-panel="ideal"]').click();
  await page.locator('[data-editor-action="create-target"]').click();
  await page.locator('[data-domain="ENG"]').check();
  await page.locator('[data-domain="ENE"]').check();
  await page.locator('[data-bulk="depth"]').selectOption('3');
  await page.locator('[data-bulk="importance"]').selectOption('1');
  await page.locator('[data-path="target.strength"]').selectOption('2');
  await page.locator('[data-path="target.confidence"]').selectOption('moderate');
  await page.waitForFunction(()=>!document.querySelector('#apply').disabled);
  await page.locator('#apply').click();
  assert.equal(await page.locator('#model-name').textContent(),'Repository evaluation');
  // Exercise independent weighted axes, including a full term editor.
  await page.locator('[data-panel="pareto"]').click();
  await page.locator('[data-path="axes.0.kind"]').selectOption('sum');
  await page.locator('[data-axis-add="0"]').selectOption('E');
  await page.locator('[data-axis-term="0-0"] summary').click();
  await page.locator('[data-path="axes.0.terms.0.config.weight"]').fill('10');
  await page.waitForFunction(()=>!document.querySelector('#apply').disabled);
  await page.locator('#apply').click();
  assert(await page.locator('.plot-point').count()>0);
  await page.reload();
  await page.locator('#matching-count').waitFor();
  assert.equal(await page.locator('#selection strong').textContent(),'1');
  assert.deepEqual(errors,[]);assert.deepEqual(requests,[]);
  fs.writeFileSync(path.join(out,'results.json'),JSON.stringify({errors,networkRequests:requests,viewports:observations,checks:`Isolated single file; ${bookCount} books, ${expected.vetoed.length} vetoed works and ${expected.excluded.length} exclusions; ${Object.keys(expected.sources).length} sources with dates, links and embedded inputs; embedded methodology and evidence; silent catalog migration; readable automatic columns; filters, signed rate, Pareto, settings, mobile drafts and persistence passed.`},null,2));
  console.log(JSON.stringify({browser:'Chromium',offline:true,errors,networkRequests:requests.length,viewports:observations,screenshots:out},null,2));
} finally { await browser.close(); }
