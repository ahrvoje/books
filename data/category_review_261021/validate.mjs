import fs from 'node:fs';
import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import { excluded, vetoed } from './decisions.mjs';
const read=p=>fs.readFileSync(p,'utf8'), json=p=>JSON.parse(read(p));
const dir='data/category_review_261021/', old=json(dir+'baseline.json'), previous=json(old.previous), current=json(json('data/catalog.json').compiled);
const before=new Map([...previous.currentBooks,...previous.exclusions].map(b=>[b.id,b]));
const all=[...current.currentBooks,...current.exclusions], byId=new Map(all.map(b=>[b.id,b]));
assert.equal(all.length,4219);assert.equal(byId.size,before.size);
assert.equal(current.audit.rulesSha256,crypto.createHash('sha256').update(read('AGENTS.md')).digest('hex'));
const fields=['raw','points','criteria','total','deductions','T11','T12','periodEnd','year','amazon','confidence','scoreConfidence','notes','verdict','sources'];
for(const b of all){
 const prior=before.get(b.id);assert(prior,b.id);
 const expected=excluded[b.id]?'excluded':vetoed[b.id]?'vetoed':['h0122','h0315'].includes(b.id)?'recommended':prior.status;
 assert.equal(b.status,expected,b.id);
 assert.deepEqual(b.sources,prior.sources,b.id+' provenance');
 if(b.status==='excluded')for(const k of ['total','raw','points','criteria','deductions'])assert(!(k in b),b.id+' excluded '+k);
 else if(prior.status!=='excluded')for(const k of fields)assert.deepEqual(b[k],prior[k],b.id+' '+k);
}
const counts=Object.fromEntries(['recommended','vetoed','excluded'].map(s=>[s,all.filter(b=>b.status===s).length]));
assert.deepEqual(counts,{recommended:2938,vetoed:205,excluded:1076});
assert.equal(read('RECOMMENDED_BOOKS.md').split('\n').filter(l=>/^\| \d{4}-/.test(l)).length,counts.recommended);
assert.equal(read('VETOED_BOOKS.md').split('\n').filter(l=>/^\| \d{4}-/.test(l)).length,counts.vetoed);
assert.equal(read('EXCLUDED_BOOKS.md').split('\n').filter(l=>l.startsWith('- ')).length,counts.excluded);
const e=json('site/enrichment.json');
for(const id of Object.keys(e.books))assert.equal(byId.get(id).status,'recommended');
for(const id of Object.keys(json(dir+'archived-enrichment.json')))assert.notEqual(byId.get(id).status,'recommended');
assert.equal(e.summary.pageCounts+e.summary.missingPages,counts.recommended);
for(const file of [current.audit.categoryReview,'VETOED_BOOKS.md']){
 for(const m of read(file).matchAll(/\]\(((?:\.\.\/)?analysis\/[^)#]+\.md)(?:#[^)]*)?\)/g)){
  const target=m[1].replace(/^\.\.\//,'');assert(fs.existsSync(target),file+': '+target);
 }
}
const html=read('docs/index.html');assert(Buffer.byteLength(html)<=4_000_000);
assert(html.includes('Partisan mobilization'));assert(html.includes('Technical training and reference exclusion'));
console.log(JSON.stringify({counts,identitiesPreserved:true,existingScoredParametersPreserved:true,ledgerCountsAgree:true,rulesMatch:true,htmlBytes:Buffer.byteLength(html)},null,2));
if(process.argv.includes('--browser')){
 const browser=json('site/qa-output/results.json');
 assert.deepEqual(browser.errors,[]);assert.deepEqual(browser.networkRequests,[]);
 assert(browser.checks.includes('2938 books, 205 vetoed works and 1076 exclusions'));
 assert.equal(fs.readFileSync('site/qa-output/isolated/index.html','utf8'),html);
 const result=json(dir+'validation.json');
 Object.assign(result,{htmlBytes:Buffer.byteLength(html),htmlSha256:crypto.createHash('sha256').update(html).digest('hex'),calculationTests:15,browser});
 fs.writeFileSync(dir+'validation.json',JSON.stringify(result,null,2)+'\n');
}
