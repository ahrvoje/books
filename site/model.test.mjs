import test from 'node:test';
import assert from 'node:assert/strict';
import { performance } from 'node:perf_hooks';
import { REGISTRY, DOMAIN_IDS, rawGuidance, defaultModel, defaultTerm, clone, normalize, shape, coefficients, changeMode, termValue, validateTerm,
  validateModel, connectionValues, evaluateBook, evaluateCatalog, filterReasons, frontier, frontierLayers, frontierPath, clearTarget, format, columnValue, DEFAULT_COLUMNS, displayedColumns, restoreColumns, restoreOptionalTerms, COLUMN_BY_ID } from './model.mjs';
import fs from 'node:fs';
import { gunzipSync } from 'node:zlib';
import path from 'node:path';
import { ROOT, HTML_FILE, build, buildDataset, validateConnections, referenceRangeCount } from './build.mjs';
const close = (a, b) => assert(Math.abs(a - b) < 1e-9, `${a} != ${b}`);
const data = buildDataset();
const model = defaultModel();
function fixture() {
  return { id: 'fixture', title: 'Fixture', sortKey: 'fixture', search: 'fixture', year: 2026, periodEnd: null, base: 100,
    values: Object.fromEntries(REGISTRY.map(r => [r.id, DOMAIN_IDS.includes(r.id) ? 3 : r.max])),
    connections: { status: 'complete', mechanisms: [], joins: [] } };
}
const target = { domains: DOMAIN_IDS.slice(0, 8).map(id => ({ id, depth: 3, importance: 1 })), strength: 2, confidence: 'moderate' };
test('reference ranges distinguish volumes and deduplicate within each volume', () => {
  assert.equal(referenceRangeCount([{start:10,end:12},{start:12,end:14}]),5);
  assert.equal(referenceRangeCount([{volume:'I',start:10,end:12},{volume:'II',start:10,end:12}]),6);
  assert.equal(referenceRangeCount([{volume:'I',start:10,end:12},{volume:'I',start:12,end:14}]),5);
  assert.throws(()=>referenceRangeCount([{volume:'I',start:10,end:12},{start:10,end:12}]));
});

test('reference pages support rates, missing-data filters, columns, and existing saved settings', () => {
  const previous = defaultModel(); delete previous.terms.RP;
  assert.deepEqual(validateModel(restoreOptionalTerms(previous)), []);
  assert.equal(previous.terms.RP.enabled, false);
  const book = fixture(), custom = defaultModel(); book.values.RP = 40;
  const baseline = evaluateBook(book, custom).total;
  Object.assign(custom.terms.RP, { enabled: true, mode: 'rate', rate: 0.1 });
  const scored = evaluateBook(book, custom);
  close(scored.total, baseline + 4);
  assert.equal(columnValue(scored, 'raw:RP'), 40);
  close(columnValue(scored, 'points:RP'), 4);
  book.values.RP = null;
  const unknown = evaluateBook(book, custom);
  assert(unknown.missing.includes('RP'));
  custom.requireKnown = true;
  assert(filterReasons(unknown, custom).length > 0);
  assert(data.vetoed.every(b => Object.hasOwn(b.referencePages, 'pages')));
});
function mechanism(id, domains, strength = 4) {
  return { id, domains, strength, confidence: 'high', statement: 'Synthetic joint constraint', scope: 'Test system',
    roles: Object.fromEntries(domains.map(d => [d, 'constraint'])), refs: ['synthetic test fixture'] };
}
test('dataset identity, 46 variables, exact current baseline, and display reconciliation', () => {
  const catalog = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/catalog.json'), 'utf8'));
  const compiled = JSON.parse(fs.readFileSync(path.join(ROOT, catalog.compiled), 'utf8'));
  assert.equal(data.books.length, compiled.currentBooks.filter(b => b.status === 'recommended').length);
  assert.equal(REGISTRY.length, 46); assert.equal(new Set(REGISTRY.map(r => r.id)).size, 46);
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

test('Relevance and R&D formulas are fractional, uncapped, and restored into saved settings', () => {
  const b=fixture(),m=defaultModel();b.values.SRC=5;b.values.PG=400;b.values.RP=30;
  const row=evaluateBook(b,m);close(row.terms.REL.c,4);close(row.terms.RD.c,1.5);
  b.values.SRC=10001;b.values.PG=100;b.values.RP=200;
  const large=evaluateBook(b,m);close(large.terms.REL.c,200);close(large.terms.RD.c,40);
  m.terms.REL.weight=2;m.terms.RD.enabled=false;
  close(evaluateBook(b,m).terms.REL.c,400);close(evaluateBook(b,m).terms.RD.c,0);
  m.terms.RD.enabled=true;b.values.RP=null;
  const missing=evaluateBook(b,m);assert(missing.fallback.includes('RD'));assert.equal(missing.values.RD,null);close(missing.terms.RD.c,0);
  b.values.RP=0;assert.equal(evaluateBook(b,m).values.RD,0);assert(!evaluateBook(b,m).fallback.includes('RD'));
  b.values.PG=0;assert.equal(evaluateBook(b,m).values.RD,null);
  b.values.SRC=1;close(evaluateBook(b,m).terms.REL.c,0);
  const old=defaultModel();delete old.terms.REL;delete old.terms.RD;old.terms.E.weight=7;
  restoreOptionalTerms(old);assert.deepEqual(validateModel(old),[]);assert.equal(old.terms.E.weight,7);assert.equal(old.terms.REL.weight,1);assert(old.terms.RD.enabled);
  old.terms.RD.mode='weight';assert(validateModel(old).some(x=>x.includes('uncapped')));
});

test('default columns stay compact when scoring changes, preserving custom choices', () => {
  const m=clone(model),facts=['year','raw:O15','raw:PG','raw:RP','raw:SRC'];
  assert.deepEqual(displayedColumns(m),facts);
  assert.equal(COLUMN_BY_ID['raw:O15'].short,'Amazon ratings');
  assert.equal(displayedColumns(m).length,5);
  m.terms.PG.enabled=true;m.terms.E.enabled=false;
  assert.deepEqual(displayedColumns(m),facts);
  m.columnsMode='custom';m.columns=['year','periodEnd'];
  assert.deepEqual(displayedColumns(m),['year','periodEnd']);
  delete m.columnsMode;m.columns=['year','raw:SRC','raw:PG'];restoreColumns(m);
  assert.equal(m.columnsMode,'active');assert.deepEqual(displayedColumns(m),facts);
  delete m.columnsMode;m.columns=['year','points:M'];restoreColumns(m);
  assert.equal(m.columnsMode,'custom');assert.deepEqual(m.columns,['year','points:M']);
  m.columnsMode='invalid';assert(validateModel(m).length);
});

test('read-only collections retain saved membership and veto scores', () => {
  const vetoLines=fs.readFileSync(path.join(ROOT,'VETOED_BOOKS.md'),'utf8').split(/\r?\n/).filter(l=>/^\| \d{4}-/.test(l));
  assert.equal(data.vetoed.length,vetoLines.length);
  data.vetoed.forEach((b,i)=>{
    const cells=vetoLines.map(l=>l.split('|').slice(1,-1).map(x=>x.trim())).find(c=>c[2]===b.author && (c[3].match(/^\[([^\]]+)\]/)?.[1]||c[3])===b.title);
    assert.equal(b.score,cells[4].replace(/\*/g,''));assert.equal(b.veto,cells[5]);
    assert.equal(b.sourceCount,new Set(cells[7].match(/\d+/g)).size);
    if(i)assert(+data.vetoed[i-1].score>=+b.score,'Vetoed table must stay in descending score order');
    assert.equal(cells[8],b.edition?`[${b.edition.pages}](${b.edition.url})`:'Unknown');
    if(b.edition)assert(!/audio|disc|cassette/i.test(b.edition.format));
    assert(data.documents[b.analysis.split('#')[0]],'Veto assessment must work in the isolated file');
    assert(!data.books.some(r=>r.id===b.id));
  });
  assert.deepEqual(data.excluded,fs.readFileSync(path.join(ROOT,'EXCLUDED_BOOKS.md'),'utf8').split(/\r?\n/).filter(l=>l.startsWith('- ')).map(l=>l.slice(2).normalize('NFKC').replace(/\s+/g,' ').trim()));
  assert.deepEqual(data.excludedGroups.map(g=>g.name),['Mathematics, Physics, Science','Technology, Engineering, Innovation','Computing, IT','Business, Economy, Geostrategy','Misc. Non-fiction','Fiction']);
  assert.deepEqual(data.excludedGroups.flatMap(g=>g.books).sort(),[...data.excluded].sort());
  for(const g of data.excludedGroups)assert.deepEqual(g.books,[...g.books].sort((a,b)=>a.localeCompare(b,'en',{sensitivity:'base'})));
  for(const [title,category] of [['Harry Potter','Fiction'],['Security Analysis','Business, Economy, Geostrategy'],['Designing Data-Intensive Applications','Computing, IT'],['Introduction to Electrodynamics','Mathematics, Physics, Science'],['Rocket Propulsion Elements','Technology, Engineering, Innovation'],['The Elder Scrolls: The Official Cookbook','Misc. Non-fiction']])assert(data.excludedGroups.find(g=>g.name===category).books.some(b=>b===title||b.startsWith(title+' —')));
});

test('parameter guidance distinguishes raw scales from scoring anchors', () => {
  for(const r of REGISTRY)assert(rawGuidance(r.id).length>20);
  for(const r of REGISTRY.slice(0,10))assert(rawGuidance(r.id).includes(`0–${r.max} attainment points`));
  for(const id of ['H13','P14','O15','SRC','PG','RP'])assert(rawGuidance(id).includes('no fixed upper limit'));
  assert(rawGuidance('O15').includes('1,000+ → 0'));
  assert(rawGuidance('T11').includes('1 = applies'));
  assert(rawGuidance('SCI').includes('Unknown is separate from 0'));
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
      if(!b.ratingReview)assert.equal(b.values.O15,null,'New observations must not silently overwrite baseline inputs');
      else assert(b.evidence.O15.refs.includes(b.ratingReview),'A baseline rating update requires a recorded review');
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
  m.terms.PG.enabled=true;m.terms.PG.weight=-10;m.plot=true;const r=evaluateBook(b,m);assert(r.missing.includes('PG'));assert.equal(r.axes[1],null);close(r.total,b.base-data.books[0].values.RD);
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
test('three Pareto layers remove all ties and honor both axis directions', () => {
  const rows=[['a',5,5],['tie',5,5],['b',4,4],['c',3,3],['d',2,2],['missing',null,9]].map(([id,x,y])=>({book:{id},axes:[x,y]}));
  assert.deepEqual(frontierLayers(rows,[{direction:'max'},{direction:'max'}]).map(s=>[...s]),[['a','tie'],['b'],['c']]);
  for(const sx of [-1,1])for(const sy of [-1,1]){
    let remaining=rows.filter(r=>r.axes.every(v=>v!==null));
    const actual=frontierLayers(rows,[{direction:sx===1?'max':'min'},{direction:sy===1?'max':'min'}]);
    actual.forEach(layer=>{
      const expected=remaining.filter(b=>!remaining.some(a=>sx*a.axes[0]>=sx*b.axes[0]&&sy*a.axes[1]>=sy*b.axes[1]&&(sx*a.axes[0]>sx*b.axes[0]||sy*a.axes[1]>sy*b.axes[1]))).map(r=>r.book.id).sort();
      assert.deepEqual([...layer].sort(),expected);remaining=remaining.filter(r=>!expected.includes(r.book.id));
    });
  }
  assert.deepEqual(frontierLayers([], [null,null]).map(s=>s.size),[0,0,0]);
});
test('Pareto boundaries follow supported dominance without crossing between sparse points', () => {
  assert.equal(frontierPath([], 'max'), '');
  assert.equal(frontierPath([[1,2]], 'min'), '');
  assert.equal(frontierPath([[1,2],[3,4]], 'max'), 'M1,2V4H3');
  assert.equal(frontierPath([[1,2],[3,4]], 'min'), 'M1,2H3V4');
  // Straight or smooth connectors cross here even though membership is correct.
  const fixture = [[5,1],[6,8],[10,10],[4,1],[9,10],[3,1],[8,11]];
  for (const sx of [-1,1]) for (const sy of [-1,1]) for (const log of [false,true]) {
    const axes = [sx,sy].map(s=>({direction:s===1?'max':'min'}));
    const rows = fixture.map(([x,y],i)=>({book:{id:String(i)},axes:[sx*x+20,-sy*y+20]}));
    const layers = frontierLayers(rows,axes);
    const transform = v=>log?Math.log10(v):v;
    const points = rows.map(r=>({...r,axes:r.axes.map(transform)}));
    const paths = layers.map(layer=>frontierPath(points.filter(r=>layer.has(r.book.id)).map(r=>r.axes).sort((a,b)=>a[0]-b[0]),axes[0].direction));
    const segments = paths.map(path=>{
      const commands = [...path.matchAll(/([MHV])([^MHV]+)/g)];
      let position = commands.shift()[2].split(',').map(Number);
      return commands.map(([,command,value])=>{
        const next = command==='H'?[+value,position[1]]:[position[0],+value];
        const segment=[position,next]; position=next; return segment;
      });
    });
    segments.forEach((layer,i)=>layer.forEach(([a,b])=>{
      const middle=a.map((v,j)=>(v+b[j])/2);
      assert(points.some(p=>layers[i].has(p.book.id)&&p.axes.every((v,j)=>[sx,sy][j]*(v-middle[j])>=-1e-12)), 'Every segment is supported by an actual frontier book');
    }));
    // On every shared open X interval, successive boundaries stay ordered.
    const xs=[...new Set(points.map(p=>p.axes[0]))].sort((a,b)=>a-b);
    for(let j=1;j<xs.length;j++) {
      const x=(xs[j-1]+xs[j])/2;
      const ys=segments.map(layer=>layer.find(([a,b])=>a[0]<x&&x<b[0])?.[0][1]);
      for(let i=1;i<ys.length;i++) if(ys[i-1]!==undefined&&ys[i]!==undefined) assert(sy*(ys[i-1]-ys[i])>=-1e-12);
    }
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
  assert.doesNotThrow(()=>new (Object.getPrototypeOf(async function(){}).constructor)(script));
  assert(script.includes('const $$ ='));
  const payload=html.match(/<script id="catalog-data" type="application\/gzip\+base64">([\s\S]*?)<\/script>/)[1];
  const embedded=JSON.parse(gunzipSync(Buffer.from(payload,'base64')));
  assert.equal(embedded.books.length,data.books.length);
  for (const collection of ['books','vetoed']) embedded[collection].forEach((b,i)=>{
    const expected=JSON.parse(JSON.stringify(data[collection][i]));
    if(expected.edition){
      for(const k of ['pages','id','url','retrieved','language','format','year','confidence','notes','note'])assert.deepEqual(b.edition[k],expected.edition[k]);
      expected.edition=b.edition;
    }
    assert.deepEqual(b,expected,'Portable records preserve all displayed facts and assessments');
  });
  assert.deepEqual(embedded.documents,{});
  assert(Buffer.byteLength(html)<=1500*(data.books.length+data.vetoed.length));
  assert(!html.includes('src="http'));
  const rules=fs.readFileSync(path.join(ROOT,'AGENTS.md'),'utf8');
  for(const [heading,prefix] of [['## Hard exclusion rules','Works which do not represent a book'],['## Hard exclusion rules','Exclude fiction books'],['## Hard exclusion rules','Technical training and reference exclusion'],['## Veto rules','Hype or ephemerality dependence'],['## Veto rules','Religious doctrine or ideological extremism'],['## Veto rules','Partisan mobilization']]){
    const text=rules.split(heading)[1].split(/\r?\n/).map(line=>line.replace(/^\d+\. /,'')).find(line=>line.startsWith(prefix));
    const escaped=text.replace(/[&<>]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;'}[c]));
    const methodology=html.split('id="methodology-view"')[1].split('<section aria-labelledby="method-rules">')[0];
    assert(methodology.includes(escaped),'Visible methodology must include the exact current rule');
  }
  for(const marker of ['BOOK_FORM','FICTION','REFERENCE','V4','V5','V6'])assert(!html.includes('/* '+marker+' */'));
});
test('catalog calculation performance: 30 updates over 2000 works', () => {
  const books=Array.from({length:2000},(_,i)=>({...data.books[i%data.books.length],id:'perf'+i}));
  const times=[];for(let i=0;i<32;i++){const start=performance.now();evaluateCatalog(books,model);if(i>1)times.push(performance.now()-start);}
  times.sort((a,b)=>a-b);console.log(`Calculation p95 (2000 works): ${times[28].toFixed(1)} ms`);
  // A broad regression guard; the 150 ms product target includes rendering and is recorded separately.
  assert(times[28]<2000);
});
