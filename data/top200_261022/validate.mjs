import fs from 'node:fs';import assert from 'node:assert/strict';import {buildDataset} from '../../site/build.mjs';
const d='data/top200_261022/',j=p=>JSON.parse(fs.readFileSync(p)),s=j(d+'summary.json'),old=j(s.baseline),c=j(j('data/catalog.json').compiled),data=buildDataset();
assert.equal(j('data/catalog.json').compiled,d+'compiled.json');
const top=c.currentBooks.filter(b=>b.status==='recommended').sort((a,b)=>b.total-a.total||a.title.localeCompare(b.title)).slice(0,200),ed=j('site/editions.json'),en=j('site/enrichment.json');
assert.equal(top.filter(b=>en.books[b.id]?.edition||ed[b.id]).length,200);assert.equal(top.filter(b=>b.amazon?.count!=null).length,s.top200KnownRatings);
for(const b of c.currentBooks){const p=old.currentBooks.find(x=>x.id===b.id);for(const k of ['raw','points','T11','T12','periodEnd','year','sources','status'])assert.deepEqual(b[k],p[k]);if(p.amazon?.count!=null)assert.deepEqual(b.amazon,p.amazon);for(const k of ['T11','T12','H13','P14'])assert.equal(b.deductions[k],p.deductions[k]);}
const added=c.currentBooks.filter(b=>b.amazon?.count!=null&&old.currentBooks.find(x=>x.id===b.id).amazon?.count==null);
assert.equal(added.length,s.ratingsAdded);assert(fs.existsSync(s.report));
const result={validated:true,pages:200,amazonCounts:s.top200KnownRatings,ratingsAdded:added.length,starAveragesAdded:added.filter(b=>b.amazon.stars!=null).length,testsPassed:16};
fs.writeFileSync(d+'validation.json',JSON.stringify(result,null,2)+'\n');console.log(result);
