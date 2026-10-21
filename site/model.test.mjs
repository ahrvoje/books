import test from 'node:test';
import assert from 'node:assert/strict';
import { performance } from 'node:perf_hooks';
import { REGISTRY, DOMAIN_IDS, defaultModel, defaultTerm, clone, normalize, shape, coefficients, changeMode, termValue, validateTerm,
  validateModel, connectionValues, evaluateBook, evaluateCatalog, filterReasons, frontier, clearTarget, format, columnValue, DEFAULT_COLUMNS, displayedColumns, restoreColumns, COLUMN_BY_ID } from './model.mjs';
import fs from 'node:fs';
import path from 'node:path';
import { ROOT, HTML_FILE, build, buildDataset, validateConnections } from './build.mjs';
const close = (a, b) => assert(Math.abs(a - b) < 1e-9, `${a} != ${b}`);
const data = buildDataset();
const model = defaultModel();
function fixture() {
  return { id: 'fixture', title: 'Fixture', sortKey: 'fixture', search: 'fixture', year: 2026, periodEnd: null, base: 100,
    values: Object.fromEntries(REGISTRY.map(r => [r.id, DOMAIN_IDS.includes(r.id) ? 3 : r.max])),
    connections: { status: 'complete', mechanisms: [], joins: [] } };
}
const target = { domains: DOMAIN_IDS.slice(0, 8).map(id => ({ id, depth: 3, importance: 1 })), strength: 2, confidence: 'moderate' };
function mechanism(id, domains, strength = 4) {
  return { id, domains, strength, confidence: 'high', statement: 'Synthetic joint constraint', scope: 'Test system',
    roles: Object.fromEntries(domains.map(d => [d, 'constraint'])), refs: ['synthetic test fixture'] };
}
test('dataset identity, 43 variables, exact current baseline, and display reconciliation', () => {
  const catalog = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/catalog.json'), 'utf8'));
  const compiled = JSON.parse(fs.readFileSync(path.join(ROOT, catalog.compiled), 'utf8'));
  assert.equal(data.books.length, compiled.currentBooks.filter(b => b.status === 'recommended').length);
  assert.equal(REGISTRY.length, 43); assert.equal(new Set(REGISTRY.map(r => r.id)).size, 43);
  assert.deepEqual(validateModel(model), []);
  assert.equal(data.issues.length, 0);
  for (const b of data.books) { close(evaluateBook(b, model).total, b.base); assert.equal(evaluateBook(b, model).missing.length, 0); }
  assert.equal(format(88.175), '88.18'); assert.equal(format(-1.005), '-1.01');
});
test('canonical full, half, flag, age, and count contributions', () => {
  const full = REGISTRY.slice(0, 10).reduce((sum, r) => sum + termValue(r.max, defaultTerm(r.id), r.id).c, 0);
  const half = REGISTRY.slice(0, 10).reduce((sum, r) => sum + termValue(r.max / 2, defaultTerm(r.id), r.id).c, 0);
  close(full, 100); close(half, 38.25);
  for (const [id, raw, expected] of [['E',10,5],['S',8.5,4.25],['M',6,6],['D',5,2.5],['T11',1,-10],['T12',1,-10],['H13',75,-3],['H13',326,-12],['P14',75,-7.5],['P14',226,-10]]) close(termValue(raw, defaultTerm(id), id).c, expected);
  [0,9,10,99,100,999,1000,null].forEach((n,i)=>close(termValue(n,defaultTerm('O15'),'O15').c,[-20,-20,-10,-10,-5,-5,0,0][i]));
  assert.equal(termValue(null, defaultTerm('O15'), 'O15').missing, false);
});

test('default columns follow active scoring, with readable facts and preserved custom choices', () => {
  const m=clone(model),facts=['year','raw:PG','raw:O15','raw:SRC'];
  assert.deepEqual(displayedColumns(m).slice(0,4),facts);
  assert.equal(COLUMN_BY_ID['raw:O15'].short,'Amazon ratings');
  assert.equal(displayedColumns(m).length,19);
  m.terms.PG.enabled=true;m.terms.E.enabled=false;
  assert(displayedColumns(m).includes('points:PG'));assert(!displayedColumns(m).includes('points:E'));
  m.columnsMode='custom';m.columns=['year','periodEnd'];
  assert.deepEqual(displayedColumns(m),['year','periodEnd']);
  delete m.columnsMode;m.columns=['year','raw:SRC','raw:PG'];restoreColumns(m);
  assert.equal(m.columnsMode,'active');assert(displayedColumns(m).includes('points:PG'));
  delete m.columnsMode;m.columns=['year','points:M'];restoreColumns(m);
  assert.equal(m.columnsMode,'custom');assert.deepEqual(m.columns,['year','points:M']);
  m.columnsMode='invalid';assert(validateModel(m).length);
});

test('read-only collections retain saved membership and veto scores', () => {
  const vetoLines=fs.readFileSync(path.join(ROOT,'VETOED_BOOKS.md'),'utf8').split(/\r?\n/).filter(l=>/^\| \d{4}-/.test(l));
  assert.equal(data.vetoed.length,vetoLines.length);
  data.vetoed.forEach((b,i)=>{
    const cells=vetoLines[i].split('|').slice(1,-1).map(x=>x.trim());
    assert.equal(b.score,cells[4].replace(/\*/g,''));assert.equal(b.veto,cells[5]);
    assert(data.documents[b.analysis.split('#')[0]],'Veto assessment must work in the isolated file');
    assert(!data.books.some(r=>r.id===b.id));
  });
  assert.deepEqual(data.excluded,fs.readFileSync(path.join(ROOT,'EXCLUDED_BOOKS.md'),'utf8').split(/\r?\n/).filter(l=>l.startsWith('- ')).map(l=>l.slice(2).normalize('NFKC').replace(/\s+/g,' ').trim()));
});

test('edition facts, domain provenance, and partial reviews retain their meaning', () => {
  for (const b of data.books) {
    if (b.edition) {
      assert(!/audio|disc|cassette/i.test(b.edition.format), `${b.id}: audio length is not pages`);
      assert.equal(columnValue(evaluateBook(b,model),'raw:PG'),b.edition.pages);
      const custom=clone(model); Object.assign(custom.terms.PG,{enabled:true,mode:'rate',rate:-.01,reference:0,high:10000});
      close(evaluateBook(b,custom).total,b.base-.01*b.edition.pages);
      assert(b.evidence.PG.refs.includes(b.edition.url));
    }
    for (const id of DOMAIN_IDS) {
      const e=b.evidence[id]; if (!e) continue;
      assert.equal(e.value,b.values[id]);
      for (const ref of e.refs) {
        if (!ref.startsWith('analysis/')) continue;
        const [file,anchor]=ref.split('#');
        assert(data.documents[file],`${b.id}: missing embedded domain evidence`);
        if (anchor) assert(data.documents[file].includes(`id="${anchor}"`),`${b.id}: missing evidence anchor ${ref}`);
      }
    }
    if (b.research) assert.deepEqual(b.research.unknownDomains,DOMAIN_IDS.filter(id=>b.values[id]===null));
    const observation=b.research?.newAmazonObservation;
    if (observation) {
      assert.equal(b.values.O15,null,'New observations must not silently overwrite baseline inputs');
      assert(Number.isInteger(observation.count)&&observation.count>=0);
      assert(observation.product&&observation.url&&observation.marketplace&&observation.retrieved);
      close(evaluateBook(b,model).total,b.base);
    }
  }
});
test('signed normalization, quadratic polarity, and conversion between rates and weights', () => {
  const t = { ...defaultTerm('PG'), enabled: true, signed: true, pivot: 500, weight: 20, curve: 'quadratic' };
  for (const [v, n, c] of [[0,-1,-20],[250,-.5,-5],[500,0,0],[750,.5,5],[1500,1,20]]) {
    close(normalize(v,t),n); close(termValue(v,t,'PG').c,c);
  }
  let checked = 0;
  for (const rate of [-.04,-.01,0,.01,1]) for (const [low,high,reference] of [[0,1000,0],[300,700,300],[1,5,1],[-20,80,10]]) for (const signed of [false,true]) for (const reverse of [false,true]) {
    const term = { ...defaultTerm('PG'), enabled:true, mode:'rate', rate, reference, low, high, pivot:(low+high)/2, signed, reverse };
    assert.deepEqual(validateTerm(term), []);
    for (const raw of [low-100,low,(low+high)/2,high,high+100]) {
      close(termValue(raw,term,'PG').c,rate*(Math.min(high,Math.max(low,raw))-reference));checked++;
    }
  }
  assert.equal(checked, 400);
  const w = { ...defaultTerm('PG'), enabled:true, weight:-10, signed:true, pivot:500 };
  const before = [0,250,500,1000].map(v=>termValue(v,w,'PG').c); changeMode(w,'rate');
  before.forEach((v,i)=>close(v,termValue([0,250,500,1000][i],w,'PG').c));
});
test('page and date examples, bounded curves, and validation', () => {
  const t = { ...defaultTerm('PG'), enabled:true, mode:'rate',rate:-.01 };
  close(termValue(500,t,'PG').c,-5); close(termValue(1500,t,'PG').c,-10); t.high=2000; close(termValue(1500,t,'PG').c,-15);
  t.signed=true;t.pivot=1000;close(coefficients(t).b,-10);
  const p={...defaultTerm('PG'),enabled:true,high:800,curve:'piecewise',knots:[[0,0],[.25,1],[.5,1],[1,0]],weight:5};
  close(termValue(600,p,'PG').c,2.5);
  for(let i=0;i<2000;i++){const n=(i%201-100)/100;const v=shape(n,{...p,signed:true,curve:'quadratic'});assert(v>=-1&&v<=1);}
  assert(validateTerm({...t,pivot:12}).length);assert(validateTerm({...p,knots:[[0,0],[0,1]]}).length);
  assert(validateTerm({...p,weight:Infinity}).length);assert(validateTerm({...p,high:0}).length);
  const scaled={...p,curve:'scaled',slope:2,intercept:-.2};close(shape(1,scaled),1);close(shape(0,scaled),0);
});
test('unknown input does not receive an offset; custom count normalization loses fallback', () => {
  const t={...defaultTerm('PG'),enabled:true,signed:true,pivot:500,mode:'rate',rate:-.01};
  const v=termValue(null,t,'PG');assert.equal(v.c,0);assert.equal(v.n,null);assert.equal(v.missing,true);
  t.enabled=false;assert.equal(termValue(null,t,'PG').missing,false);
  const count={...defaultTerm('O15'),kind:'affine'};assert.equal(termValue(null,count,'O15').missing,true);
});
test('six connection fixtures distinguish coverage, disconnected pairs, joined chains, and joint mechanisms', () => {
  const ids=target.domains.map(d=>d.id), b=fixture();
  const check=expected=>{const result=connectionValues(b,target).values;['COV','FLOOR','LINK','SPAN','ORDER','FIT'].forEach((id,i)=>close(result[id],expected[i]));};
  check([100,100,0,0,0,0]);
  b.connections.mechanisms=[0,2,4,6].map(i=>mechanism('p'+i,ids.slice(i,i+2)));
  check([100,100,25,2,2,25]);
  b.connections.mechanisms=ids.slice(1).map((d,i)=>mechanism('m'+i,[ids[i],d]));
  // Shared domain labels alone cannot create joins.
  check([100,100,25,2,2,25]);
  b.connections.joins=b.connections.mechanisms.slice(1).map((m,i)=>({from:'m'+i,to:m.id,strength:3,confidence:'high',statement:'handoff',scope:'test',handoff:'same output',refs:['fixture']}));
  check([100,100,75,8,2,75]);validateConnections(b);
  b.connections={status:'complete',mechanisms:[mechanism('joint',ids)],joins:[]};
  check([100,100,100,8,8,100]);
  ids.slice(6).forEach(id=>b.values[id]=0);b.connections.mechanisms=[mechanism('six',ids.slice(0,6))];check([75,0,75,6,6,37.5]);
  ids.forEach(id=>b.values[id]=2);b.connections.mechanisms=[mechanism('joint',ids)];check([200/3,200/3,200/3,0,0,500/9]);
});
test('connection unknowns, cycles, threshold changes and target reset are explicit', () => {
  const b=fixture(), ids=target.domains.map(d=>d.id);
  assert.equal(connectionValues(b,null).reason,'Not configured');
  b.values[ids[0]]=null;assert.equal(connectionValues(b,target).values.COV,null);
  b.values[ids[0]]=3;b.connections.status='partial';const p=connectionValues(b,target);assert.equal(p.values.COV,100);assert.equal(p.values.FIT,null);
  b.connections.status='complete';b.connections.mechanisms=[mechanism('a',ids.slice(0,4)),mechanism('b',ids.slice(4))];
  b.connections.joins=[{from:'a',to:'b',strength:2,confidence:'moderate'},{from:'b',to:'a',strength:2,confidence:'moderate'}];
  close(connectionValues(b,target).values.LINK,50);
  assert.equal(connectionValues(b,{...target,confidence:'high'}).values.SPAN,4);
  const m=defaultModel();m.target=clone(target);m.terms.FIT.enabled=true;m.filters.FIT={enabled:true,basis:'raw',min:0,max:null,unknown:'exclude'};m.axes[1]={kind:'raw',id:'FIT',direction:'max',label:'Fit',terms:[]};m.selected=['fixture'];clearTarget(m);
  assert.equal(m.target,null);assert.equal(m.axes[1],null);assert.equal(m.filters.FIT,undefined);assert.deepEqual(m.selected,['fixture']);assert.deepEqual(validateModel(m),[]);
});
test('filters remain independent of scoring, use correct bases, and partition all books', () => {
  const m=clone(model), b=clone(data.books[0]); b.values.PG=null;
  m.filters.PG={enabled:true,basis:'raw',min:100,max:500,unknown:'exclude'};
  assert.equal(filterReasons(evaluateBook(b,m),m)[0],'PG unknown');
  m.filters.PG.unknown='include';assert.equal(filterReasons(evaluateBook(b,m),m).length,0);
  m.filters.E={enabled:true,basis:'normalized',min:95,max:null,unknown:'exclude'};
  const all=evaluateCatalog(data.books,m);assert.equal(all.matching.length+all.filtered.length,data.books.length);
  for(const list of [all.matching,all.filtered])for(let i=1;i<list.length;i++)assert(list[i-1].total>=list[i].total);
  assert.equal(m.terms.PG.enabled,false);
  m.terms.PG.enabled=true;m.terms.PG.weight=-10;m.plot=true;const r=evaluateBook(b,m);assert(r.missing.includes('PG'));assert.equal(r.axes[1],null);close(r.total,b.base);
});
test('Pareto ties, minimization, non-convex frontier and missing points', () => {
  const axes=[{direction:'max'},{direction:'max'}];
  const rows=points=>points.map(([id,x,y])=>({book:{id},axes:[x,y]}));
  const r=rows([['A',10,5],['B',8,4],['C',10,5],['D',9,6]]);
  assert.deepEqual([...frontier(r,axes)].sort(),['A','C','D']);
  assert.deepEqual([...frontier(r,[axes[0],{direction:'min'}])].sort(),['A','B','C']);
  assert.equal(frontier(rows([['E',0,10],['F',4,4],['G',10,0]]),axes).size,3);
  assert.equal(frontier(rows([['A',1,null],['B',null,4]]),axes).size,0);
  // Independent quadratic oracle catches equal-X/Y and direction mistakes.
  for(let trial=0;trial<40;trial++){
    const ps=rows(Array.from({length:30},(_,i)=>['p'+i,(i*17+trial)%13,(i*7+trial*3)%11]));
    const signs=[trial%2?-1:1,trial%3?-1:1], config=signs.map(s=>({direction:s===1?'max':'min'}));
    const expected=ps.filter(b=>!ps.some(a=>a.axes.every((v,i)=>v*signs[i]>=b.axes[i]*signs[i])&&a.axes.some((v,i)=>v*signs[i]>b.axes[i]*signs[i]))).map(r=>r.book.id).sort();
    assert.deepEqual([...frontier(ps,config)].sort(),expected);
  }
});
test('model export is reproducible and rejects incompatible or invalid models', () => {
  assert.deepEqual(validateModel(JSON.parse(JSON.stringify(model))),[]);
  assert(validateModel({...model,version:2}).length);
  const bad=clone(model);bad.terms.PG.high=0;assert(validateModel(bad).length);
  const targetMissing=clone(model);targetMissing.terms.FIT.enabled=true;assert(validateModel(targetMissing).length);
  const duplicate=clone(model);duplicate.axes[0]={kind:'sum',label:'sum',direction:'max',terms:[{id:'E',linked:true},{id:'E',linked:true}]};assert(validateModel(duplicate).length);
  const inherited=clone(model);inherited.filters.constructor={enabled:true,min:null,max:null,basis:'raw',unknown:'exclude'};assert(validateModel(inherited).length);
  const columns=clone(model);columns.columns=['year','periodEnd','raw:PG','points:E'];assert.deepEqual(validateModel(columns),[]);
  columns.columns.push('raw:invalid');assert(validateModel(columns).length);
  const row=evaluateBook(data.books[0],model);close(columnValue(row,'points:E'),16.2);
  assert.equal(columnValue(row,'year'),2022);assert.equal(columnValue(row,'periodEnd'),null);
  assert.deepEqual(model.columns,DEFAULT_COLUMNS);
});
test('generated standalone script parses without replacement-string corruption', () => {
  build();
  const html=fs.readFileSync(HTML_FILE,'utf8');
  const script=html.match(/<script type="module">([\s\S]*?)<\/script>/)[1];
  assert.doesNotThrow(()=>new Function(script));
  assert(script.includes('const $$ ='));
  const embedded=JSON.parse(html.match(/<script id="catalog-data" type="application\/json">([\s\S]*?)<\/script>/)[1]);
  assert.equal(embedded.books.length,data.books.length);
  assert(Object.keys(embedded.documents).length>=33);
  assert(!html.includes('src="http'));
  const rules=fs.readFileSync(path.join(ROOT,'AGENTS.md'),'utf8');
  for(const [heading,prefix] of [['## Hard exclusion rules','Works which do not represent a book'],['## Hard exclusion rules','Exclude fiction books'],['## Hard exclusion rules','Exclude textbooks'],['## Veto rules','Hype or ephemerality dependence'],['## Veto rules','Religious doctrine or ideological extremism']]){
    const text=rules.split(heading)[1].split(/\r?\n/).map(line=>line.replace(/^\d+\. /,'')).find(line=>line.startsWith(prefix));
    const escaped=text.replace(/[&<>]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;'}[c]));
    const methodology=html.split('id="methodology-view"')[1].split('<section aria-labelledby="method-rules">')[0];
    assert(methodology.includes(escaped),'Visible methodology must include the exact current rule');
  }
  for(const marker of ['BOOK_FORM','FICTION','REFERENCE','V4','V5'])assert(!html.includes('/* '+marker+' */'));
});
test('catalog calculation performance: 30 updates over 2000 works', () => {
  const books=Array.from({length:2000},(_,i)=>({...data.books[i%data.books.length],id:'perf'+i}));
  const times=[];for(let i=0;i<32;i++){const start=performance.now();evaluateCatalog(books,model);if(i>1)times.push(performance.now()-start);}
  times.sort((a,b)=>a-b);console.log(`Calculation p95 (2000 works): ${times[28].toFixed(1)} ms`);
  // A broad regression guard; the 150 ms product target includes rendering and is recorded separately.
  assert(times[28]<2000);
});
