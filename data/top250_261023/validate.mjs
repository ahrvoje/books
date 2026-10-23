import fs from 'node:fs';
import assert from 'node:assert/strict';
import zlib from 'node:zlib';
import {amazonFields,titleMatches,authorMatches,clean} from '../pages_density_261021/collect.mjs';
const dir='data/top250_261023',read=p=>JSON.parse(fs.readFileSync(p));
const before=read(read(dir+'/baseline.json').compiled),after=read(dir+'/compiled.json'),changes=read(dir+'/review.json');
const editions=read(dir+'/candidate-editions.json'),refs=read(dir+'/candidate-reference-pages.json');
const oldEditions=read('site/editions.json'),oldRefs=read('site/reference-pages.json'),targets=read(dir+'/targets.json');
if(process.argv.includes('--published')){
 for(const c of changes){if(c.edition)delete oldEditions[c.id];if(c.editionCorrection)oldEditions[c.id]=c.editionCorrection.before;}
 for(const b of targets)oldRefs[b.id]=b.reference;
}
const targetIds=new Set(targets.map(b=>b.id)),byId=new Map(after.currentBooks.map(b=>[b.id,b]));
assert.equal(targetIds.size,250);assert.equal(changes.length,250);assert.equal(before.currentBooks.length,after.currentBooks.length);
const reviewedEditions=read(dir+'/edition-audit-reviewed.json');
for(const item of read(dir+'/existing-edition-audit.json'))assert(reviewedEditions[item.id],item.id+' unresolved edition mismatch');
const changed=new Map(changes.map(c=>[c.id,c]));
let snapshots=0;
for(const old of before.currentBooks){
 const b=byId.get(old.id),c=changed.get(old.id);assert(b);
 for(const key of ['id','title','author','status','sources','raw','points','contributions','year','periodEnd','veto','confidence','evidenceConfidence','densityAssessment'])assert.deepEqual(b[key],old[key],old.id+' '+key);
 for(const key of ['T11','T12','H13','P14'])assert.equal(b.deductions?.[key]??b[key],old.deductions?.[key]??old[key],old.id+' '+key);
 if(!targetIds.has(old.id)){assert.deepEqual(b,old);continue;}
 if(c.amazon){
  assert(!['intake-0190','intake-0203','progress-0677','progress-0817'].includes(b.id),'Do not use an individual-volume count for a complete series.');
  assert.equal(old.amazon?.count==null,true);const n=b.amazon.count,expected=n<10?-20:n<100?-10:n<1000?-5:0;
  assert.equal(b.deductions?.O15??b.O15,expected);assert(Math.abs(b.total-(old.total-(old.deductions?.O15??old.O15)+expected))<1e-10);
  const h=zlib.gunzipSync(fs.readFileSync(b.amazon.sourceSnapshot)).toString(),f=amazonFields(h);
  const identity=read(dir+'/identity-overrides.json')[b.id];
  if(b.amazon.identityVerification){assert.deepEqual(b.amazon.identityVerification,identity);assert.equal(identity.asin,b.amazon.asin);assert(identity.url&&identity.reason);}else{assert(titleMatches(b.title,f.title),b.id+' Amazon title');assert(authorMatches(b.author,f.byline),b.id+' Amazon author');}
  assert(!f.productId||f.productId===b.amazon.asin,b.id+' Amazon landing product');
  if(b.amazon.identityVerification){assert.equal(f.title,identity.observedTitle);assert.equal(f.byline,identity.observedByline);}
  const label=clean(h.match(/<span[^>]*data-hook="total-review-count"[^>]*>[\s\S]*?<\/span>/)?.[0]||'');
  const m=label.match(/([\d,]+)\s+global ratings?\b/i);assert(m,b.id+' total-rating label');assert.equal(+m[1].replaceAll(',',''),n);snapshots++;
 }else{assert.equal(b.total,old.total);assert.deepEqual(b.amazon,old.amazon);}
 if(c.edition){assert.equal(targets.find(t=>t.id===b.id).edition==null,true);assert(Number.isInteger(c.edition.pages)&&c.edition.pages>0);assert(c.edition.id&&c.edition.url&&c.edition.year&&c.edition.language);}
 if(c.reference){assert.equal(oldRefs[b.id].pages,null);const r=c.reference;assert(r.url&&r.edition.id&&r.ranges.length);assert.equal(r.pages,r.ranges.reduce((n,r)=>n+r.end-r.start+1,0),b.id+' reference arithmetic');for(const span of r.ranges)assert(Number.isInteger(span.start)&&span.end>=span.start);}
 if(c.purchaseUrl){assert.equal(b.purchaseUrl,c.purchaseUrl);assert.equal(c.linkEvidence.language,'English');assert(/Paperback|Hardcover/i.test(c.linkEvidence.format));assert(c.linkEvidence.id&&c.linkEvidence.url);}
}
for(const [id,e]of Object.entries(oldEditions)){const correction=changed.get(id)?.editionCorrection;if(correction){assert.deepEqual(correction.before,e);assert.deepEqual(editions[id],correction.after);assert(correction.after.notes.includes('Corrects'));}else assert.deepEqual(editions[id],e,'Preserve known edition '+id);}
for(const [id,r]of Object.entries(oldRefs))if(r.pages!==null||!targetIds.has(id))assert.deepEqual(refs[id],r,'Preserve reference record '+id);
const ledger=fs.readFileSync(dir+'/candidate-recommended.md','utf8');assert.equal(ledger.split('\n')[0],'| Entry date | First publication year | Author | Title | Score / 100 | Amazon ratings | Pages (edition) | Reference pages | Sources |');
assert.equal(ledger.split('\n').filter(l=>/^\| \d{4}-/.test(l)).length,after.currentBooks.filter(b=>b.status==='recommended').length);
const report=fs.readFileSync(dir+'/analysis.md','utf8');assert(!/NaN|undefined/.test(report));assert.equal((report.match(/<a id=/g)||[]).length,250);
for(const match of report.matchAll(/\[Prior assessment\]\(\.\.\/([^#)]+)/g))assert(fs.existsSync(match[1]),'Missing prior analysis '+match[1]);
const sorted=after.currentBooks.filter(b=>b.status==='recommended').sort((a,b)=>b.total-a.total||a.title.localeCompare(b.title));
const ledgerRows=ledger.split('\n').filter(l=>/^\| \d{4}-/.test(l));
for(const [i,line]of ledgerRows.entries())assert(line.includes('['+sorted[i].title+']('),'Ledger ranking '+i);
console.log({cohort:250,catalog:byId.size,verifiedNewSnapshots:snapshots,checks:'membership, original assessments, scoring, existing metadata, new field provenance, reference arithmetic, ledger order, report completeness'});
