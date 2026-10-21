import fs from 'node:fs';
import crypto from 'node:crypto';
import assert from 'node:assert/strict';
import { buildDataset } from '../../site/build.mjs';
const dir='data/rule_review_261020/',json=f=>JSON.parse(fs.readFileSync(f,'utf8'));
const baseline=json(dir+'baseline.json'),manifest=json(dir+'manifest.json'),catalog=json('data/catalog.json');
assert.equal(catalog.compiled,dir+'compiled.json');
const before=json(baseline.compiled),after=json(catalog.compiled),inputs=['excluded_a','excluded_b','vetoed'].flatMap(g=>json(dir+g+'-input.json'));
for(const [file,hash] of Object.entries(after.audit.decisionHashes))assert.equal(crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex'),hash,'Decision changed after publication: '+file);
const current=new Map(after.currentBooks.map(b=>[b.id,b]));
assert.equal(current.size,after.currentBooks.length,'Duplicate current IDs');
for(const b of before.currentBooks.filter(b=>b.status==='recommended'))assert.deepEqual(current.get(b.id),b,'Unreviewed recommended work changed: '+b.id);
const covered=after.sourceBooks.flatMap(b=>b.reviewIds);
assert.equal(covered.length,inputs.length);assert.equal(new Set(covered).size,inputs.length);
assert.deepEqual([...covered].sort(),inputs.map(b=>b.reviewId).sort(),'Every former ledger entry is represented once');
for(const b of after.exclusions)assert(!Object.hasOwn(b,'raw')&&!Object.hasOwn(b,'total'),'Excluded work received a score');
const historical=json(dir+'historical-analyses.json');
for(const [file,hash] of Object.entries(historical))assert.equal(crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex'),hash,'Historical analysis changed: '+file);
assert.equal(crypto.createHash('sha256').update(fs.readFileSync(baseline.compiled)).digest('hex'),baseline.files[baseline.compiled].sha256,'Prior compiled data changed');
const report=fs.readFileSync(manifest.report,'utf8');
for(const b of after.sourceBooks)assert(report.includes(`id="${b.reviewId}"`),'Missing current assessment anchor '+b.reviewId);
const data=buildDataset();
assert.equal(data.books.length,after.audit.totalRecommended);
assert.equal(data.vetoed.length,after.audit.remainingVetoed);
assert.equal(data.excluded.length,after.audit.remainingExcluded);
const result={validatedAt:new Date().toISOString(),rulesSha256:manifest.rulesSha256,report:manifest.report,
 before:{recommended:before.currentBooks.filter(b=>b.status==='recommended').length,vetoed:before.currentBooks.filter(b=>b.status==='vetoed').length,excluded:before.exclusions.length},
 after:{recommended:data.books.length,vetoed:data.vetoed.length,excluded:data.excluded.length},
 reviewEntries:inputs.length,uniqueReviewedWorks:after.sourceBooks.length,aliases:inputs.length-after.sourceBooks.length,
 reviewedWithoutNumberedSource:after.sourceBooks.filter(b=>!b.sources.length).map(b=>({id:b.id,title:b.title,status:b.status,refs:b.priorReviews})),
 historicalAnalysesPreserved:Object.keys(historical).length,unreviewedRecommendationsPreserved:before.currentBooks.filter(b=>b.status==='recommended').length,
 restored:after.sourceBooks.filter(b=>b.status==='recommended').map(b=>({id:b.id,title:b.title,total:b.total,confidence:b.confidence})),
 coverage:data.coverage,datasetHash:data.datasetHash,checks:'All coverage, identity, arithmetic, ledger, policy-version and history checks passed.'};
fs.writeFileSync(dir+'validation.json',JSON.stringify(result,null,2)+'\n');
console.log(JSON.stringify({...result,restored:result.restored.length,reviewedWithoutNumberedSource:result.reviewedWithoutNumberedSource.length},null,2));
