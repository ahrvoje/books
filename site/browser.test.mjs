// Requires Playwright only for development checks. The generated site has no dependencies.
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { ROOT, HTML_FILE, build, buildDataset } from './build.mjs';
import { defaultModel, evaluateCatalog, frontierLayers } from './model.mjs';
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
  const legacy=defaultModel();delete legacy.terms.REL;delete legacy.terms.RD;delete legacy.columnsMode;legacy.columns=['year','raw:SRC','raw:PG'];legacy.selected=['removed-book'];legacy.selectedOnly=true;
  await page.evaluate(model=>localStorage.setItem('books.model.v3',JSON.stringify({datasetHash:'older-catalog',model})),legacy);
  await page.reload();
  assert.equal(await page.locator('.masthead>.eyebrow,#matching-title').count(),0);
  assert.match(await page.locator('[data-panel="pareto"]').textContent(),/Pareto/);
  const iconSizes=await page.locator('.panel-tabs button:visible svg').evaluateAll(nodes=>nodes.map(n=>({width:n.getBoundingClientRect().width,height:n.getBoundingClientRect().height})));
  assert.deepEqual(iconSizes,Array.from({length:3},()=>({width:16,height:16})));
  let desktopDividerY;
  for(const width of [390,752,768,1074,1075,1076,1099,1100,1101,1440,1600]){
    await page.setViewportSize({width,height:1000});
    const header=await page.evaluate(()=>{
      const bounds=selector=>document.querySelector(selector).getBoundingClientRect();
      const button=bounds('[data-panel="pareto"]');
      return {right:button.right,edges:['.title-row','.library-nav','.search-row'].map(selector=>bounds(selector).right),
        dividerY:bounds('.result-summary').top,gap:bounds('.result-summary').top-bounds('.search-row').bottom,
        overflow:document.documentElement.scrollWidth>innerWidth};
    });
    assert(header.edges.every(right=>Math.abs(right-header.right)<1),`Header must end at the Pareto button at ${width}px`);
    assert.equal(header.overflow,false,`No page overflow at ${width}px`);
    if(width>=768){
      desktopDividerY ??= header.dividerY;
      assert.equal(header.gap,16,`Divider must stay 16px below the toolbar at ${width}px`);
      assert.equal(header.dividerY,desktopDividerY,`Divider must not shift vertically at ${width}px`);
    }
  }
  await page.setViewportSize({width:1440,height:1000});
  await page.waitForFunction(count=>Number(document.querySelector('#matching-count').textContent.replace(/\D/g,''))===count,bookCount);
  assert.equal(await page.locator('#notice').isVisible(),false,'Catalog updates must be silent');
  assert.match(await page.title(),/Book Explorer/);
  assert.match(await page.locator('h1').textContent(),/Book Explorer/);
  assert.equal(await page.locator('[data-select],#selection,#clear-selection').count(),0);
  assert.equal(await page.locator('.table-scroll[tabindex="0"],.column-scrollbar[tabindex="0"]').count(),0,'Passive table containers must not be Tab stops');
  await page.locator('[data-page="vetoed"]').click();
  await page.locator('[data-page="books"]').click();
  assert.notEqual(await page.evaluate(()=>document.activeElement.id),'results','Navigation must not focus the whole books container');
  assert.deepEqual((await page.locator('#matching-list th[data-column]').evaluateAll(nodes=>nodes.map(n=>n.dataset.column))).slice(0,5),['year','raw:O15','raw:PG','raw:RP','raw:SRC']);
  assert.equal(await page.locator('#matching-list th[data-column]').count(),5);
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
  assert.equal(await page.locator('#matching-list .column-scrollbar').count(),0);
  assert(await page.locator('.control-shell').evaluate(el=>el.getBoundingClientRect().bottom<=document.querySelector('#results').getBoundingClientRect().top));
  assert(await page.locator('.book-title').first().evaluate(el=>getComputedStyle(el).textDecorationLine.includes('underline')));
  assert.equal(await page.locator('#matching-list tr[data-book]').count(),bookCount);
  assert.equal(await page.locator('[data-more]').count(),0);
  await page.screenshot({ path: path.join(out, 'desktop.png') });
  await page.setViewportSize({width:390,height:844});
  await page.screenshot({path:path.join(out,'phone-default.png')});
  await page.setViewportSize({width:1440,height:1000});
  await page.locator('[data-page="vetoed"]').click();
  assert.equal(await page.locator('#vetoed-list tr[data-veto-book]').count(),expected.vetoed.length);
  assert.equal(await page.locator('#vetoed-list .score').first().textContent(),expected.vetoed[0].score);
  assert.deepEqual(await page.locator('#vetoed-list tr[data-veto-book]').evaluateAll(rows=>rows.map(r=>[6,7,5,8].map(i=>r.children[i].textContent))),expected.vetoed.map(b=>[b.edition?.pages ?? '—',b.referencePages.pages ?? '—',b.amazon.count ?? '—',b.sourceCount].map(String)));
  assert.deepEqual(await page.locator('#vetoed-list a.book-title').evaluateAll(links=>links.map(a=>({title:a.textContent,href:a.href,target:a.target}))),expected.vetoed.map(b=>({title:b.title,href:new URL(b.purchaseUrl).href,target:'_blank'})));
  const vetoPopup=page.waitForEvent('popup');
  await page.locator('#vetoed-list a.book-title').first().click();
  const openedVeto=await vetoPopup;
  await openedVeto.close();
  assert(await page.locator('#vetoed-list .veto-meta').evaluateAll(cells=>cells.every(c=>c.textContent!=='Unknown')));
  assert.equal(await page.locator('.control-shell').isVisible(),false);
  assert.equal(await page.locator('#book-toolbar').isVisible(),false);
  await page.locator('[data-veto-details]').first().click();
  assert((await page.locator('#details-body').textContent()).includes('counterfactual'));
  assert((await page.locator('#details-body').textContent()).includes('Pages:'));
  assert((await page.locator('#details-body a[href*="github.com/ahrvoje/books"]').count())>0);
  await page.locator('#close-details').click();
  await page.screenshot({path:path.join(out,'vetoed-desktop.png')});
  await page.setViewportSize({width:390,height:844});
  await page.screenshot({path:path.join(out,'vetoed-phone.png')});
  await page.locator('[data-page="excluded"]').click();
  assert.equal(await page.locator('#excluded-list li').count(),expected.excluded.length);
  assert.deepEqual(await page.locator('#excluded-list section').evaluateAll(groups=>groups.map(g=>({heading:g.querySelector('h3').textContent,books:[...g.querySelectorAll('li')].map(li=>li.textContent)}))),expected.excludedGroups.map(g=>({heading:`${g.name} (${g.books.length})`,books:g.books})));
  assert.equal(await page.locator('#excluded-view .score,#excluded-view input').count(),0);
  await page.screenshot({path:path.join(out,'excluded-phone.png')});
  await page.locator('[data-page="sources"]').click();
  await page.reload();
  await page.locator('#sources-view').waitFor();
  assert.equal(await page.title(),'Sources — a working library');
  assert.equal(await page.locator('#book-toolbar').isVisible(),false);
  assert.equal(await page.locator('.control-shell').isVisible(),false);
  assert.deepEqual(await page.locator('#sources-list tr').evaluateAll(rows=>rows.map(row=>({
    id:+row.dataset.source,date:row.querySelector('time').dateTime,label:row.querySelector('.source-title').textContent,
    url:row.querySelector('.source-title a').dataset.evidence||row.querySelector('.source-title a').getAttribute('href'),
    analysis:row.querySelector('.source-analysis a').getAttribute('href')
  }))),Object.values(expected.sources).sort((a,b)=>a.id-b.id).map(({id,date,label,url,analysis})=>({id,date,label,url:url.startsWith('data/')?'https://github.com/ahrvoje/books/blob/main/'+url:url,analysis:'https://github.com/ahrvoje/books/blob/main/'+analysis})));
  for(const source of Object.values(expected.sources).filter(s=>s.url.startsWith('data/'))){
    assert.equal(await page.locator(`[data-source="${source.id}"] .source-title a`).getAttribute('href'),'https://github.com/ahrvoje/books/blob/main/'+source.url);
  }
  assert.equal(await page.locator('#sources-list .source-analysis a').last().getAttribute('target'),'_blank');
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
  assert((await page.locator('#methodology-view').textContent()).includes('Information density means useful learning'));
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
  assert((await page.locator('#details-body a[href*="github.com/ahrvoje/books"]').count())>0);
  await page.locator('#close-details').click();
  await page.locator('#columns').click();
  await page.locator('[data-columns-preset="default"]').click();
  await page.waitForFunction(()=>!document.querySelector('#apply').disabled);
  await page.locator('#apply').click();
  await page.locator('[data-panel="scoring"]').click();
  await page.locator('[data-variable="REL"] summary').click();
  assert.equal(await page.locator('[data-path="terms.REL.weight"]').inputValue(),'1');
  await page.locator('[data-path="terms.REL.weight"]').fill('2');
  await page.waitForFunction(()=>!document.querySelector('#apply').disabled);
  await page.locator('#apply').click();
  const bonusBook=expected.books[0];
  assert(Math.abs(Number(await page.locator(`tr[data-book="${bonusBook.id}"] .score`).textContent())-(bonusBook.base+bonusBook.values.REL))<.01);
  await page.locator('[data-panel="scoring"]').click();
  await page.locator('#reset-section').click();
  await page.waitForFunction(()=>!document.querySelector('#apply').disabled);
  await page.locator('#apply').click();
  await page.locator('[data-panel="filters"]').click();
  assert.match(await page.locator('[data-variable="E"] .raw-guidance').textContent(),/0–20 attainment points/);
  assert.match(await page.locator('[data-variable="O15"] .raw-guidance').textContent(),/no fixed upper limit/);
  await page.locator('[data-variable="SRC"] summary').click();
  await page.locator('[data-path="filters.SRC.enabled"]').check();
  await page.locator('[data-path="filters.SRC.min"]').fill('3');
  await page.waitForFunction(()=>document.querySelector('#draft-preview').textContent.includes('not applied'));
  await page.locator('#apply').click();
  assert.notEqual(await page.locator('#filtered-count').textContent(), '0');
  assert.equal(await page.locator('tr[data-book]').count(),bookCount);
  await page.locator('[data-panel="scoring"]').click();
  assert.match(await page.locator('[data-variable="S"] .raw-guidance').textContent(),/0–17 attainment points/);
  assert.match(await page.locator('[data-variable="PG"] .raw-guidance').textContent(),/no fixed upper limit/);
  await page.locator('[data-variable="PG"] summary').click();
  await page.locator('[data-path="terms.PG.enabled"]').check();
  await page.locator('[data-path="terms.PG.mode"]').selectOption('rate');
  await page.locator('[data-path="terms.PG.rate"]').fill('-0.01');
  await page.locator('[data-path="terms.PG.reference"]').fill('0');
  await page.waitForFunction(()=>document.querySelector('[data-formula="terms.PG"]').textContent.includes('-5.00 points'));
  await page.locator('#apply').click();
  assert.equal(await page.locator('#model-name').textContent(),'Custom evaluation');
  assert.equal(await page.locator('#matching-list th[data-column="points:PG"]').count(),0);
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
  const xOptions=await page.locator('[data-path="axes.0.id"] option').evaluateAll(nodes=>nodes.map(n=>n.value));
  assert.deepEqual(await page.locator('[data-path="axes.1.id"] option').evaluateAll(nodes=>nodes.map(n=>n.value)),xOptions);
  assert(xOptions.includes('BASE')&&xOptions.includes('TOTAL')&&xOptions.includes('O15')&&xOptions.includes('H13')&&xOptions.includes('REL')&&xOptions.includes('RD'));
  await page.locator('[data-path="axes.1.id"]').selectOption('TOTAL');
  assert.equal(await page.locator('[data-path="axes.1.kind"]').inputValue(),'aggregate');
  await page.locator('[data-path="axes.0.id"]').selectOption('O15');
  assert.equal(await page.locator('[data-path="axes.0.kind"]').inputValue(),'raw');
  assert.equal(await page.locator('[data-axis-preset],[data-path="plot"]').count(),0);
  await page.locator('[data-path="axes.0.id"]').selectOption('BASE');
  await page.locator('[data-path="axes.1.id"]').selectOption('PG');
  await page.locator('[data-path="axes.1.direction"]').selectOption('min');
  await page.waitForFunction(()=>!document.querySelector('#apply').disabled);
  await page.locator('#apply').click();
  assert(await page.locator('.plot-point').count()>0,'Verified lengths must support score/pages comparison');
  assert.equal(await page.locator('[data-frontier-layer]').count(),3);
  assert.deepEqual(await page.locator('[data-frontier-layer]').evaluateAll(nodes=>nodes.sort((a,b)=>a.dataset.frontierLayer-b.dataset.frontierLayer).map(n=>getComputedStyle(n).stroke)),['rgb(181, 43, 43)','rgb(35, 90, 178)','rgb(155, 118, 0)']);
  for(const layer of [1,2,3])assert(await page.locator(`[data-pareto-layer="${layer}"]`).count()>0);
  await page.locator('[data-panel="pareto"]').click();
  await page.locator('[data-path="axes.1.id"]').selectOption('BASE');
  await page.locator('[data-path="axes.1.direction"]').selectOption('max');
  await page.waitForFunction(()=>!document.querySelector('#apply').disabled);
  await page.locator('#apply').click();
  assert.equal(await page.locator('.plot-point[data-pareto-layer="1"]').count(),1,'Same score on both axes has one best coordinate');
  assert.equal(await page.locator('[data-frontier-layer="1"]').count(),0,'A single frontier coordinate must not draw a line');
  assert.equal(await page.locator('.plot-point .plot-ring').count(),0);
  await page.mouse.move(0,0);
  assert.equal(await page.locator('#plot-hover-ring').isVisible(),false);
  await page.locator('#search').fill('no-matching-book-zzzz');
  await page.waitForFunction(()=>document.querySelector('#matching-count').textContent==='0');
  assert.match(await page.locator('#plot-caption').textContent(),/boundaries use visible filtered books/);
  assert.equal(await page.locator('.plot-point[data-pareto-layer="1"]').count(),1);
  await page.locator('#search').fill('');
  await page.waitForFunction(()=>document.querySelector('#matching-count').textContent!=='0');
  await page.locator('[data-panel="pareto"]').click();
  await page.locator('[data-path="axes.1.id"]').selectOption('SRC');
  await page.locator('[data-path="axes.1.direction"]').selectOption('min');
  await page.waitForFunction(()=>!document.querySelector('#apply').disabled);
  await page.locator('#apply').click();
  assert(await page.locator('.plot-point').count()>0);
  await page.locator('.plot-point').last().focus();
  await page.locator('#plot-tooltip').waitFor({state:'visible'});
  const layersBefore=await page.locator('.plot-point').evaluateAll(nodes=>nodes.map(n=>n.dataset.paretoLayer));
  const positionsBefore=await page.locator('.plot-point>circle:first-child').evaluateAll(nodes=>nodes.map(n=>n.getAttribute('cy')));
  await page.locator('#plot-y-scale').selectOption('log');
  assert.deepEqual(await page.locator('.plot-point').evaluateAll(nodes=>nodes.map(n=>n.dataset.paretoLayer)),layersBefore);
  assert.notDeepEqual(await page.locator('.plot-point>circle:first-child').evaluateAll(nodes=>nodes.map(n=>n.getAttribute('cy'))),positionsBefore);
  assert(await page.locator('[data-frontier-layer]').evaluateAll(paths=>paths.length===3&&paths.every(path=>{
    if (!/^M[^A-Za-z]+(?:V[^A-Za-z]+H[^A-Za-z]+)+$/.test(path.getAttribute('d'))) return false;
    const dots=[...document.querySelectorAll(`.plot-point[data-pareto-layer="${path.dataset.frontierLayer}"]>circle:first-child`)];
    for(let i=0;i<=100;i++) {
      const p=path.getPointAtLength(path.getTotalLength()*i/100);
      if(!dots.some(dot=>+dot.getAttribute('cx')>=p.x-.01&&+dot.getAttribute('cy')>=p.y-.01)) return false;
    }
    return true;
  })),'Score-max/source-min log boundaries must contain only trade-offs supported by actual books');
  await page.screenshot({path:path.join(out,'pareto-source-min.png')});
  assert(await page.locator('#plot svg [cx],#plot svg [d]').evaluateAll(nodes=>nodes.every(n=>!['cx','cy','d'].some(a=>/NaN|Infinity/.test(n.getAttribute(a)||'')))));
  await page.reload();
  await page.locator('#plot-y-scale').waitFor();
  assert.equal(await page.locator('#plot-y-scale').inputValue(),'log');
  const xPositions = await page.locator('.plot-point>circle:first-child').evaluateAll(nodes=>nodes.map(n=>n.getAttribute('cx')));
  await page.locator('#plot-x-scale').selectOption('log');
  assert.notDeepEqual(await page.locator('.plot-point>circle:first-child').evaluateAll(nodes=>nodes.map(n=>n.getAttribute('cx'))),xPositions);
  assert.match(await page.locator('#plot-caption').textContent(),/Logarithmic X \/ Y/);
  assert(await page.locator('#plot svg [cx],#plot svg [d]').evaluateAll(nodes=>nodes.every(n=>!['cx','cy','d'].some(a=>/NaN|Infinity/.test(n.getAttribute(a)||'')))));
  await page.reload();
  await page.locator('#plot-x-scale').waitFor();
  assert.equal(await page.locator('#plot-x-scale').inputValue(),'log');
  assert.equal(await page.locator('#plot-y-scale').inputValue(),'log');
  await page.locator('[data-panel="pareto"]').click();
  assert.equal(await page.locator('[data-path="xScale"]').inputValue(),'log');
  await page.locator('[data-path="xScale"]').selectOption('linear');
  await page.waitForFunction(()=>!document.querySelector('#apply').disabled);
  await page.locator('#apply').click();
  assert.equal(await page.locator('#plot-x-scale').inputValue(),'linear');
  await page.locator('[data-panel="pareto"]').click();
  await page.locator('[data-path="axes.1.id"]').selectOption('H13');
  await page.locator('[data-path="axes.1.direction"]').selectOption('min');
  await page.waitForFunction(()=>!document.querySelector('#apply').disabled);
  await page.locator('#apply').click();
  assert.match(await page.locator('#plot-caption').textContent(),/zero or negative/);
  assert(await page.locator('.plot-point[data-pareto-layer="1"]').count()>0,'Log mode must mark a visible boundary after excluding zero ages');
  assert(await page.locator('#plot svg [cx],#plot svg [d]').evaluateAll(nodes=>nodes.every(n=>!['cx','cy','d'].some(a=>/NaN|Infinity/.test(n.getAttribute(a)||'')))));
  await page.locator('[data-panel="pareto"]').click();
  await page.locator('[data-path="axes.1.id"]').selectOption('O15');
  await page.locator('[data-path="axes.1.direction"]').selectOption('max');
  await page.waitForFunction(()=>!document.querySelector('#apply').disabled);
  await page.locator('#apply').click();
  assert(await page.locator('.plot-point').count()>0);
  assert(await page.locator('#plot svg [cx],#plot svg [d]').evaluateAll(nodes=>nodes.every(n=>!['cx','cy','d'].some(a=>/NaN|Infinity/.test(n.getAttribute(a)||'')))));
  await page.screenshot({path:path.join(out,'pareto-desktop.png')});
  // Every finite book is represented, including filtered books and tied coordinates.
  const plotModel=await page.evaluate(()=>JSON.parse(localStorage.getItem('books.model.v3')).model);
  const plottable=evaluateCatalog(expected.books,plotModel).rows.filter(r=>r.axes.every((v,i)=>typeof v==='number'&&Number.isFinite(v)&&Number.isFinite((i?plotModel.yScale:plotModel.xScale)==='log'?Math.log10(v):v)));
  assert.equal(await page.locator('.plot-point').evaluateAll(nodes=>nodes.reduce((n,p)=>n+Number(p.dataset.bookCount),0)),plottable.length);
  assert(plottable.some(r=>r.reasons.length),'Coverage check includes filtered books');
  assert.equal(await page.locator('#point-selector,.plot-clusters').count(),0);
  assert.equal(await page.locator('[data-boundary-list]').count(),3);
  const matchingPlottable=plottable.filter(r=>!r.reasons.length);
  const expectedLayers=frontierLayers(matchingPlottable.length?matchingPlottable:plottable,plotModel.axes);
  for(const [i,layer] of expectedLayers.entries()){
    const ids=await page.locator(`[data-boundary-list="${i+1}"] [data-details]`).evaluateAll(nodes=>nodes.map(n=>n.dataset.details));
    assert.deepEqual(ids.sort(),[...layer].sort(),'Boundary lists contain every member exactly once');
  }
  const boundaryTitle=await page.locator('[data-boundary-list="1"] .boundary-title').first().textContent();
  await page.locator('[data-boundary-list="1"] .boundary-title').first().hover();
  assert.equal(await page.locator('.plot-legend').count(),0);
  assert.equal(await page.locator('#plot-tooltip').isVisible(),true);
  assert((await page.locator('#plot-tooltip').textContent()).includes(boundaryTitle));
  assert(await page.locator('#plot-tooltip').evaluate(el=>{const r=el.getBoundingClientRect(),plot=document.querySelector('#plot svg').getBoundingClientRect(),list=document.querySelector('.boundary-books').getBoundingClientRect();return getComputedStyle(el).position==='static'&&r.top>=plot.bottom&&r.bottom<=list.top&&r.height===48;}),'Book information is a fixed-height line between the plot and title lists');
  assert.equal(await page.locator('#plot-hover-ring').isVisible(),true);
  assert(await page.locator('#plot-hover-ring').evaluate((ring,title)=>{
    const point=[...document.querySelectorAll('.plot-point')].find(p=>p.getAttribute('aria-label').startsWith(title));
    const dot=point?.querySelector('circle');
    return dot&&dot.getAttribute('cx')===ring.getAttribute('cx')&&dot.getAttribute('cy')===ring.getAttribute('cy');
  },boundaryTitle));
  await page.locator('#plot-title').hover();
  assert.equal(await page.locator('#plot-hover-ring').isVisible(),false);
  await page.locator('.plot-point[data-pareto-layer="0"]').first().dispatchEvent('pointerover');
  assert.equal(await page.locator('#plot-hover-ring').isVisible(),true);
  assert.match(await page.locator('#plot-hover-ring').getAttribute('class'),/pareto-layer-0/);
  await page.locator('.plot-point[data-pareto-layer="0"]').first().dispatchEvent('pointerout');
  assert.equal(await page.locator('#plot-hover-ring').isVisible(),false);
  await page.locator('[data-boundary-list="1"] [data-details]').first().click();
  assert.equal(await page.locator('#details-title').textContent(),boundaryTitle);
  await page.locator('#close-details').click();
  assert(await page.locator('[data-frontier-layer]').evaluateAll(paths=>paths.every(path=>{
    const dots=[...document.querySelectorAll(`.plot-point[data-pareto-layer="${path.dataset.frontierLayer}"]>circle:first-child`)];
    const endpoints=[path.getPointAtLength(0),path.getPointAtLength(path.getTotalLength())];
    return endpoints.every(p=>dots.some(dot=>Math.hypot(p.x-Number(dot.getAttribute('cx')),p.y-Number(dot.getAttribute('cy')))<0.1));
  })),'Boundary lines must start and end on plotted books');
  await page.locator('#matching-list [data-details]').first().click();
  assert(await page.locator('#details .breakdown tbody tr').count()>=43);
  await page.locator('#close-details').click();
  // Settings round trip, validated through the actual import control.
  assert.equal(await page.locator('#export').isVisible(),false);
  assert.equal(await page.locator('.file-label').isVisible(),false);
  const downloaded = page.waitForEvent('download'); await page.locator('#export').evaluate(button=>button.click());
  const download=await downloaded; const exported=path.join(out,'settings.json');await download.saveAs(exported);
  await page.locator('#import').setInputFiles(exported);
  const oldCatalog=JSON.parse(fs.readFileSync(exported,'utf8'));oldCatalog.datasetHash='old-import';
  await page.locator('#import').setInputFiles({name:'compatible-old.json',mimeType:'application/json',buffer:Buffer.from(JSON.stringify(oldCatalog))});
  await page.waitForFunction(()=>document.querySelector('#notice').textContent.includes('Settings imported.'));
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
  // The entry point is temporarily hidden; keep testing the retained editor.
  assert.equal(await page.locator('[data-panel="ideal"]').isVisible(), false);
  await page.locator('[data-panel="ideal"]').evaluate(button => button.click());
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
  assert.deepEqual(errors,[]);assert.deepEqual(requests,[]);
  fs.writeFileSync(path.join(out,'results.json'),JSON.stringify({errors,networkRequests:requests,viewports:observations,checks:`Isolated compressed file; ${bookCount} books, ${expected.vetoed.length} vetoed works and ${expected.excluded.length} exclusions; ${Object.keys(expected.sources).length} sources with online input and analysis links; offline book evidence and methodology; silent catalog migration; four default columns; controls above results; underlined titles; filters, signed rate, Pareto, settings, mobile drafts and persistence passed.`},null,2));
  console.log(JSON.stringify({browser:'Chromium',offline:true,errors,networkRequests:requests.length,viewports:observations,screenshots:out},null,2));
} finally { await browser.close(); }
