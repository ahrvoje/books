import fs from 'node:fs';
import crypto from 'node:crypto';
import assert from 'node:assert/strict';
import { buildDataset } from '../../site/build.mjs';
const dir='data/veto_review_261021/',read=f=>fs.readFileSync(f,'utf8'),json=f=>JSON.parse(read(f));
const sha=s=>crypto.createHash('sha256').update(s).digest('hex');
const baseline=json(dir+'baseline.json'),before=json(baseline.compiled),catalog=json('data/catalog.json');
assert.equal(catalog.compiled,dir+'compiled.json');
const after=json(catalog.compiled),current=new Map(after.currentBooks.map(b=>[b.id,b])),excluded=new Map(after.exclusions.map(b=>[b.id,b]));
for(const [file,hash]of Object.entries(after.audit.decisionHashes))assert.equal(sha(read(file)),hash,'Published decision changed: '+file);
assert.deepEqual(after.sourceBooks.map(b=>b.id).sort(),before.currentBooks.filter(b=>b.status==='vetoed').map(b=>b.id).sort());
assert.equal(new Set(after.sourceBooks.map(b=>b.id)).size,355);
for(const b of before.currentBooks.filter(b=>b.status==='recommended'))assert.deepEqual(current.get(b.id),b,'Unreviewed recommendation changed: '+b.id);
for(const b of before.exclusions)assert.deepEqual(excluded.get(b.id),b,'Unreviewed exclusion changed: '+b.id);
for(const b of after.exclusions)assert(!Object.hasOwn(b,'raw')&&!Object.hasOwn(b,'total'),'Hard exclusion has score: '+b.id);
for(const [file,hash]of Object.entries(baseline.history))assert.equal(sha(read(file)),hash,'Historical analysis changed: '+file);
assert.equal(sha(read(baseline.compiled)),baseline.files[baseline.compiled].sha256,'Prior compiled data changed');
const report=read(after.audit.report);
for(const b of after.sourceBooks){assert(report.includes(`id="${b.id}"`),'Missing assessment anchor');assert(b.sources.length,'Missing source');for(const u of b.evidence)if(!/^https?:/.test(u))assert(fs.existsSync(u.split('#')[0]),'Missing reference '+u);}
const data=buildDataset();
assert.deepEqual({recommended:data.books.length,vetoed:data.vetoed.length,excluded:data.excluded.length},{recommended:after.audit.recommended,vetoed:after.audit.vetoed,excluded:after.audit.excluded});
const html=read('index.html'),embedded=JSON.parse(html.match(/<script id="catalog-data" type="application\/json">([\s\S]*?)<\/script>/)[1]);
assert.equal(embedded.datasetHash,data.datasetHash,'HTML uses an earlier catalog');
assert.deepEqual(embedded.vetoed,data.vetoed);assert.deepEqual(embedded.excluded,data.excluded);
assert.equal(embedded.documents[after.audit.report],report,'HTML review differs from the canonical analysis');
const result={validatedAt:new Date().toISOString(),rulesSha256:after.audit.rulesSha256,report:after.audit.report,reviewed:355,restored:after.audit.restored,
 before:{recommended:before.currentBooks.filter(b=>b.status==='recommended').length,vetoed:355,excluded:before.exclusions.length},after:{recommended:data.books.length,vetoed:data.vetoed.length,excluded:data.excluded.length},
 historicalAnalysesPreserved:Object.keys(baseline.history).length,unreviewedRecommendationsPreserved:before.currentBooks.filter(b=>b.status==='recommended').length,unreviewedExclusionsPreserved:before.exclusions.length,
 coverage:data.coverage,datasetHash:data.datasetHash,html:{bytes:Buffer.byteLength(html),sha256:sha(html)},checks:'Review coverage, canonical membership and scores, rule version, evidence references, historical analyses, unaffected records and delivered HTML agreement passed.'};
fs.writeFileSync(dir+'validation.json',JSON.stringify(result,null,2)+'\n');console.log(JSON.stringify(result,null,2));
