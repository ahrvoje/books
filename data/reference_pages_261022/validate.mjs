import fs from 'node:fs';
import crypto from 'node:crypto';
import assert from 'node:assert/strict';
import {read,write,DIR,books} from './collect.mjs';
import {buildDataset} from '../../site/build.mjs';
import {defaultModel,evaluateBook} from '../../site/model.mjs';
const records=read('site/reference-pages.json'),library=read(`${DIR}/progress.json`).books,google=read(`${DIR}/google-progress.json`),manual=read(`${DIR}/manual.json`),data=buildDataset();
assert.equal(Object.keys(records).length,books.length);
const model=defaultModel();assert.equal(model.terms.RP.enabled,false);assert.equal(model.terms.RP.weight,0);
for(const b of books){
 const r=records[b.id];assert(r&&library[b.id].attempts.length,'Missing target or collection attempt');
 if(r.pages!==null){
  assert(Number.isInteger(r.pages)&&r.pages>0);assert(r.source&&r.source.retrieved&&r.edition.id&&r.url&&r.confidence==='moderate');
  assert(r.source.file&&fs.existsSync(r.source.file),`Missing source snapshot: ${b.id}`);
  const pages=new Set();for(const span of r.ranges)for(let p=span.start;p<=span.end;p++)pages.add(p);
  assert.equal(r.pages,pages.size,`Range sum: ${b.id}`);
 }else {assert.equal(r.confidence,'unknown');assert(google[b.id],`Final unknown has not had the Google Books pass: ${b.id}`);}
}
for(const b of data.books){assert.equal(b.values.RP,records[b.id].pages);assert(Math.abs(evaluateBook(b,model).total-b.base)<1e-10);}
for(const b of data.vetoed)assert.equal(b.referencePages.pages,records[b.id].pages);
const report={date:'2026-10-22',passed:true,targetCount:books.length,recommended:data.books.length,vetoed:data.vetoed.length,known:books.filter(b=>records[b.id].pages!==null).length,unknown:books.filter(b=>records[b.id].pages===null).length,allTargetsAttempted:true,allFinalUnknownsReceivedGooglePass:true,manualRecords:Object.keys(manual).length,methodCounts:{},baselineScoresUnchanged:true,referenceVariable:'RP',defaultWeight:0,tests:{calculation:'npm test',parser:'node --test data/reference_pages_261022/collect.test.mjs',focusedBrowser:'node data/reference_pages_261022/browser.test.mjs',fullBrowserLimitation:'Existing site/browser.test.mjs stops at line 25: the unchanged branded header has a title-row paragraph but the test expects none. Focused reference-page browser tests cover the new behavior.'},htmlSha256:crypto.createHash('sha256').update(fs.readFileSync('docs/index.html')).digest('hex')};
for(const r of Object.values(records))report.methodCounts[r.method||'unknown']=(report.methodCounts[r.method||'unknown']||0)+1;
write(`${DIR}/validation.json`,report);console.log(report);
