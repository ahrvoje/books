import fs from 'node:fs';
import crypto from 'node:crypto';
import assert from 'node:assert/strict';
import { REGISTRY, DOMAIN_IDS, format } from '../../site/model.mjs';
import { HTML_FILE, buildDataset, validateConnections } from '../../site/build.mjs';
const dir='data/books_guru_261021/',read=p=>fs.readFileSync(p,'utf8'),json=p=>JSON.parse(read(p));
const staged=process.argv.includes('--staged');
const current=p=>staged?dir+'staged/'+p.replaceAll('/','__'):p;
const sha=s=>crypto.createHash('sha256').update(s).digest('hex');
const base=json(dir+'baseline.json'),old=json(base.compiled),now=json(current(dir+'compiled.json'));
const collection=json(dir+'collection-validation.json'),inventory=json(dir+'inventory.json').books;
const sources=json(dir+'sources.json'),manifest=json(dir+'manifest.json');
assert.equal(now.audit.rulesSha256,sha(read('AGENTS.md')));
for(const [p,h]of Object.entries(collection.hashes))assert.equal(sha(read(dir+p)),h,p+' frozen collection changed');
assert.equal(sha(read(base.compiled)),base.files[base.compiled].sha256,'Earlier compiled catalog changed');
for(const [p,h]of Object.entries(base.history))assert.equal(sha(read(p)),h,p+' historical analysis changed');
for(const [p,h]of Object.entries(now.audit.decisionHashes))assert.equal(sha(read(p)),h,p+' assessment changed after output generation');
assert.equal(sources.length,26);assert(sources.every(s=>s.complete&&s.capturedCount===s.advertisedCount));
assert.equal(sources.reduce((n,s)=>n+s.capturedCount,0),collection.cards);
assert.equal(inventory.length,collection.catalogUnits);
const oldAll=[...old.currentBooks,...old.exclusions],newAll=[...now.currentBooks,...now.exclusions];
const byId=new Map(newAll.map(b=>[b.id,b]));assert.equal(byId.size,newAll.length,'Duplicate stable IDs');
const skipped=json(current(dir+'published-skips.json'));
const expectedSources=new Map();
for(const b of skipped)if(b.priorId){const values=expectedSources.get(b.priorId)||new Set();b.sources.forEach(s=>values.add(s));expectedSources.set(b.priorId,values);}
for(const b of oldAll){
 const updated=byId.get(b.id);assert(updated,'Old work removed: '+b.id);
 const before=structuredClone(b),after=structuredClone(updated);delete before.sources;delete after.sources;
 assert.deepEqual(after,before,b.id+' previous assessment changed');
 const expected=[...new Set([...(b.sources||[]),...(expectedSources.get(b.id)||[])])].sort((a,b)=>a-b);
 assert.deepEqual(updated.sources||[],expected,b.id+' provenance mismatch');
}
assert.equal(sha(read(dir+'baseline-enrichment.json')),base.files['site/enrichment.json'].sha256,'Baseline metadata changed');
const oldExtras=json(dir+'baseline-enrichment.json'),extras=json(current('site/enrichment.json'));
for(const [id,e]of Object.entries(oldExtras.books))assert.deepEqual(extras.books[id],e,id+' old metadata changed');
assert.equal(skipped.length+now.sourceBooks.length,inventory.length,'Unaccounted source work');
const handled=new Set([...skipped,...now.sourceBooks].map(b=>b.id));assert.equal(handled.size,inventory.length);
for(const b of inventory)assert(handled.has(b.id),b.id+' unhandled');
const oldIds=new Set(oldAll.map(b=>b.id)),sum=a=>a.reduce((x,y)=>x+y,0);
const membership=new Set(['recommended','vetoed','excluded']);
for(const b of now.sourceBooks){
 assert(!oldIds.has(b.id),b.id+' old work reassessed');
 assert.equal(byId.has(b.id),membership.has(b.status),b.id+' wrong ledger membership');
 assert.deepEqual(b.sources,[...new Set(inventory.find(x=>x.id===b.id).sources)].sort((a,b)=>a-b));
 for(const g of ['BOOK_FORM','FICTION','REFERENCE','V1','V2','V3','V4','V5'])assert(b.gateReview[g]?.trim());
 if(['recommended','vetoed'].includes(b.status)){
  const points=b.raw.map((x,i)=>REGISTRY[i].quadratic?x*x/REGISTRY[i].max:x);
  assert.deepEqual(b.points,points);assert.equal(b.total,sum(points)+sum(Object.values(b.deductions)));
  assert.equal(b.deductions.H13,b.periodEnd===null?0:-Math.min(12,Math.max(0,2026-b.periodEnd)/25));
  assert.equal(b.deductions.P14,-Math.min(10,Math.max(0,2026-b.year)/10));
  const count=b.amazon.count;assert.equal(b.deductions.O15,count===null?0:count<10?-20:count<100?-10:count<1000?-5:0);
  assert(b.notes.length===10&&b.notes.every(Boolean));
  if(b.status==='recommended'&&b.enrichment){
   assert(extras.books[b.id]);const e=extras.books[b.id];
   assert.deepEqual(e.research.unknownDomains,DOMAIN_IDS.filter(id=>!Object.hasOwn(e.domains||{},id)));
   validateConnections({connections:e.connections,values:Object.fromEntries(Object.entries(e.domains||{}).map(([id,v])=>[id,v.value]))});
  }
 }else assert(!b.raw&&!Object.hasOwn(b,'total'),'Ineligible work scored');
 const report=read(current(b.currentReview));assert(report.includes('id="'+b.id+'"'),b.id+' missing report anchor');
 for(const id of b.sources){const s=manifest.sources.find(s=>s.id===id);assert(read(current(s.analysis)).includes('id="'+b.id+'"'),b.id+' absent from contributing source report');}
}
const ledgerRows=text=>text.split(/\r?\n/).filter(l=>/^\| \d{4}-/.test(l)).map(l=>l.split('|').slice(1,-1).map(x=>x.trim()));
const recRows=ledgerRows(read(current('RECOMMENDED_BOOKS.md'))),vetoRows=ledgerRows(read(current('VETOED_BOOKS.md')));
for(const match of read(current('VETOED_BOOKS.md')).matchAll(/\[Complete assessment and evidence\]\([^#\n]+#([^)]+)\)\. Sources: ([^.\n]*)\./g))assert.equal(match[2],byId.get(match[1]).sources.join(', '),'Stale veto provenance');
const norm=s=>String(s).normalize('NFKD').toLowerCase().replace(/[\u0300-\u036f]/g,'').replace(/&/g,'and').replace(/[^a-z0-9]/g,'');
const title=s=>s.match(/^\[([^\]]+)\]/)?.[1]||s,key=(author,t)=>norm(author)+'|'+norm(t);
for(const [status,rows]of [['recommended',recRows],['vetoed',vetoRows]]){
 const expected=now.currentBooks.filter(b=>b.status===status),byKey=new Map(expected.map(b=>[key(b.author,b.title),b]));
 assert.equal(rows.length,expected.length);let previous=Infinity;
 for(const r of rows){const b=byKey.get(key(r[2],title(r[3])));assert(b,'Unknown ledger row '+r[3]);assert.equal(r[4].replaceAll('*',''),format(b.total));assert(b.total<=previous,'Unsorted '+status+' ledger');previous=b.total;assert.equal(r[status==='recommended'?5:7],b.sources.join(', '));}
}
assert.deepEqual(read(current('EXCLUDED_BOOKS.md')).split(/\r?\n/).filter(l=>l.startsWith('- ')),now.exclusions.map(b=>b.line));
const sourceText=read(current('SOURCES.md'));assert(sourceText.startsWith(base.files['SOURCES.md'].text.trimEnd()),'Previous source index changed');
for(const s of manifest.sources){assert(sourceText.includes(s.url)&&sourceText.includes(s.analysis));const report=read(current(s.analysis));assert(report.includes('Previously covered')&&report.includes('without deeper reassessment'));}
const identities=new Set();for(const b of newAll){const k=key(b.author,b.title);assert(!identities.has(k),'Duplicate identity '+b.title);identities.add(k);}
let dataset;const missingHistoricalAnalyses=new Set();
if(!staged){
 assert.equal(json('data/catalog.json').compiled,dir+'compiled.json');dataset=buildDataset();assert.equal(dataset.books.length,recRows.length);assert.equal(dataset.vetoed.length,vetoRows.length);assert.equal(dataset.excluded.length,now.exclusions.length);
 for(const text of Object.values(dataset.documents))for(const match of text.matchAll(/\]\((?:\.\.\/)?(?:analysis\/)?(analysis_[^/#\s)]+\.md)(?:#[^\s)]*)?\)/g)){
  const cited='analysis/'+match[1];if(fs.existsSync(cited))assert(dataset.documents[cited],'Linked historical analysis not embedded: '+cited);else missingHistoricalAnalyses.add(cited);
 }
}
const result={valid:true,mode:staged?'staged':'published',oldAssessmentsPreserved:oldAll.length,oldMetadataPreserved:Object.keys(oldExtras.books).length,historicalAnalysesPreserved:Object.keys(base.history).length,completeSources:sources.length,capturedCards:collection.cards,auxiliaryMentions:collection.auxiliaryMentions,skipped:skipped.length,newDecisions:now.sourceBooks.length,recommended:recRows.length,vetoed:vetoRows.length,excluded:now.exclusions.length,...(dataset?{datasetHash:dataset.datasetHash,coverage:dataset.coverage}:{})};
if(dataset){result.embeddedAnalyses=Object.keys(dataset.documents).filter(file=>file.startsWith('analysis/')).length;result.embeddedSourceDocuments=Object.keys(dataset.documents).filter(file=>file.startsWith('data/')).length;result.missingHistoricalAnalyses=[...missingHistoricalAnalyses];}
if(process.argv.includes('--browser')){
 assert(!staged,'Browser verification requires the published catalog');
 const browser=json('site/qa-output/results.json');
 assert(browser.checks.includes(`${recRows.length} books, ${vetoRows.length} vetoed works and ${now.exclusions.length} exclusions`),'Browser run used another catalog');
 assert.deepEqual(browser.errors,[]);assert.deepEqual(browser.networkRequests,[]);
 assert.deepEqual(browser.viewports.map(v=>v.width),[320,390,768,1099,1100,1440]);
 assert(browser.viewports.every(v=>v.scroll<=v.width+1));
 assert.equal(sha(read(HTML_FILE)),sha(read('site/qa-output/isolated/index.html')),'HTML changed after the isolated browser test');
 result.browser={...browser,htmlSha256:sha(read(HTML_FILE))};
}
if(!staged)fs.writeFileSync(dir+'validation.json',JSON.stringify(result,null,2)+'\n');
console.log(JSON.stringify(result,null,2));
