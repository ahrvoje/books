import fs from 'node:fs';
import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import {bonusValues,format} from '../../site/model.mjs';
const dir='data/refs100_261102',research=dir,read=p=>JSON.parse(fs.readFileSync(p,'utf8'));
const published=process.argv.includes('--published'),c=read(published?read('data/catalog.json').compiled:dir+'/compiled.json'),e=read(published?'site/editions.json':dir+'/candidate-editions.json'),r=read(published?'site/reference-pages.json':dir+'/candidate-reference-pages.json'),n=read('site/enrichment.json').books;
const initial=read(read(research+'/baseline.json').compiled),prior=read(read(dir+'/baseline.json').compiled),targets=read(research+'/targets.json'),changes=read(dir+'/review.json'),approved=read(research+'/approved.json');
assert.deepEqual(c.currentBooks.map(b=>b.id),initial.currentBooks.map(b=>b.id));assert.deepEqual(c.exclusions,initial.exclusions);
const counts={pages:0,amazon:0,reference:0},filled=[];
for(const t of targets){const b=c.currentBooks.find(b=>b.id===t.id),edition=n[t.id]?.edition||e[t.id];
 const values={pages:edition?.pages??null,amazon:b.amazon?.count??null,reference:r[t.id].pages},old={pages:t.edition?.pages??null,amazon:t.amazon,reference:t.reference.pages};
 for(const k of Object.keys(counts)){if(old[k]===null&&values[k]!==null){counts[k]++;filled.push(t.id+':'+k);}else assert.equal(values[k],old[k],'Existing metadata changed: '+t.id+':'+k);}
 if(edition?.id.startsWith('ISBN:')){const isbn=edition.id.slice(5);if(/^\d{13}$/.test(isbn))assert.equal([...isbn].reduce((s,c,i)=>s+(i%2?3:1)*+c,0)%10,0,'ISBN-13 checksum '+t.id);if(/^\d{9}[\dX]$/.test(isbn))assert.equal([...isbn].reduce((s,c,i)=>s+(10-i)*(c==='X'?10:+c),0)%11,0,'ISBN-10 checksum '+t.id);}
 if(approved.some(x=>x.id===t.id&&x.kind==='reference')){const rp=r[t.id],union=new Set();for(const range of rp.ranges){assert(Number.isInteger(range.start)&&Number.isInteger(range.end)&&range.end>=range.start);for(let p=range.start;p<=range.end;p++)union.add(p);}assert.equal(rp.pages,union.size);assert(rp.edition.id&&rp.url&&rp.source.file);}
 const bonus=bonusValues(new Set(b.sources).size,values.pages,values.reference);assert.equal(b.bonuses.REL,bonus.REL??0);assert.equal(b.bonuses.RD,bonus.RD??0);
 const points=b.points||b.contributions||b.criteria.map(q=>q.contribution??q.points),deductions=['T11','T12','H13','P14','O15'].map(k=>b.deductions?.[k]??b[k]),computed=points.reduce((s,v)=>s+v,0)+deductions.reduce((s,v)=>s+v,0)+(bonus.REL??0)+(bonus.RD??0);assert(Math.abs(computed-b.total)<1e-8,'Score calculation '+t.id);
 const original=initial.currentBooks.find(x=>x.id===t.id);assert.deepEqual(b.raw,original.raw);assert.deepEqual(b.sources,original.sources);assert.equal(b.status,original.status);
 for(const k of ['T11','T12','H13','P14'])assert.equal(b.deductions?.[k]??b[k],original.deductions?.[k]??original[k]);
 if(approved.some(x=>x.id===t.id&&x.kind==='amazon')){const x=approved.find(x=>x.id===t.id&&x.kind==='amazon');assert(x.source.content.includes(x.observed));assert(/ratings/i.test(x.observed));assert.equal(b.amazon.count,x.item.count);assert(b.amazon.asin&&b.amazon.marketplace&&b.amazon.retrievedAt&&b.amazon.sourceSnapshot);assert.equal(b.deductions?.O15??b.O15,b.amazon.count<10?-20:b.amazon.count<100?-10:b.amazon.count<1000?-5:0);}
}
assert.deepEqual(counts,read(dir+'/summary.json').counts);assert.equal(filled.length,100);assert.equal(new Set(filled).size,100);assert(!e['intake-0172']);
assert.deepEqual(counts,{pages:0,amazon:0,reference:100});
const costs=read(dir+'/cost-learning.json'),summary=read(dir+'/summary.json');assert.equal(costs.denominator,filled.length);assert.equal(costs.reportedCostUSD,summary.reportedCostUSD);assert.equal(summary.costPerAcceptedCatalogedEntryUSD,summary.reportedCostUSD/filled.length);assert.equal(Object.values(costs.groups).reduce((s,g)=>s+g.acceptedCatalogedEntries,0),filled.length);
for(const b of prior.currentBooks)if(!changes.some(x=>x.id===b.id))assert.deepEqual(c.currentBooks.find(x=>x.id===b.id),b);
for(const [p,h]of Object.entries(read(dir+'/input-hashes.json')))if(['VETOED_BOOKS.md','EXCLUDED_BOOKS.md','SOURCES.md','site/enrichment.json'].includes(p))assert.equal(crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex'),h);
const audit=fs.readdirSync(research+'/raw').filter(f=>/^audit-\d+\.parsed.json$/.test(f)).flatMap(f=>read(research+'/raw/'+f).results),resolutions=read(research+'/audit-resolutions.json');assert.deepEqual(audit.map(x=>x.key).sort(),approved.map(x=>x.key).sort());assert(audit.every(x=>x.status==='supported'||resolutions[x.key]));
const credential=fs.readFileSync('api-key','utf8').match(/sk-or-[A-Za-z0-9_-]+/)[0],walk=p=>fs.readdirSync(p,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(p+'/'+e.name):[p+'/'+e.name]);
for(const p of [...walk(dir),...walk(research),'README.md','.gitignore',...(published?[read(dir+'/summary.json').report]:[])])assert(!fs.readFileSync(p,'utf8').includes(credential),'Credential found in artifact');
const result={passed:true,published,netNewNumericFields:100,counts,sourceAndCriterionAssessmentsUnchanged:true,unrelatedRecordsUnchanged:true,referenceArithmeticVerified:true,scoreArithmeticVerified:true,credentialAbsentFromArtifacts:true,externalAuditCandidates:100,externalAuditQuestionsResolved:Object.keys(resolutions).length};
fs.writeFileSync(dir+'/validation'+(published?'-published':'')+'.json',JSON.stringify(result,null,2)+'\n');console.log(result);
