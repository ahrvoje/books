import fs from 'node:fs';
import assert from 'node:assert/strict';
import {titleMatches,authorMatches} from '../pages_density_261021/collect.mjs';
const dir='data/metadata1000_261025',read=p=>JSON.parse(fs.readFileSync(p));
const before=read(read(dir+'/baseline.json').compiled),after=read(dir+'/compiled.json'),changes=read(dir+'/review.json'),summary=read(dir+'/summary.json');
const old=new Map(before.currentBooks.map(b=>[b.id,b])),now=new Map(after.currentBooks.map(b=>[b.id,b])),refs=read(dir+'/candidate-reference-pages.json');
assert.equal(old.size,now.size);assert.equal(summary.totalChanges,changes.reduce((n,c)=>n+['edition','reference','amazon','purchaseUrl'].filter(k=>c[k]).length,0));
for(const x of changes){
 const a=old.get(x.id),b=now.get(x.id);assert.equal(b.status,'recommended');assert.deepEqual(b.raw,a.raw);assert.deepEqual(b.sources,a.sources);
 for(const k of ['T11','T12','H13','P14'])assert.equal(b.deductions?.[k]??b[k],a.deductions?.[k]??a[k]);
 assert(Number.isFinite(x.after));assert(Math.abs(x.after-b.total)<1e-9);assert.equal(b.bonuses.REL,a.bonuses.REL);
 if(x.edition){assert(Number.isInteger(x.edition.pages)&&x.edition.pages>0);assert(x.edition.url);assert(titleMatches(b.title,x.edition.title));assert(authorMatches(b.author.replace(/ with /g,'; '),x.edition.authors));}
 if(x.reference){const r=x.reference,seen=new Set();assert(r.ranges.length);for(const q of r.ranges){assert(Number.isInteger(q.start)&&Number.isInteger(q.end)&&q.start>0&&q.end>=q.start);for(let p=q.start;p<=q.end;p++)seen.add((q.volume||'')+':'+p);}assert.equal(r.pages,seen.size);assert.equal(refs[x.id].pages,r.pages);assert(titleMatches(b.title,r.edition.title));assert(authorMatches(b.author.replace(/ with /g,'; '),r.edition.author));if(r.sameEditionAsPG)assert(r.pages<=x.assessment.pages);}
 if(x.amazon){assert(x.amazon.count>0);assert(x.amazon.evidence?.length&&fs.existsSync(x.amazon.sourceSnapshot));assert(titleMatches(b.title,x.amazon.productTitle));assert(authorMatches(b.author.replace(/ with /g,'; '),x.amazon.byline));}
 if(x.purchaseUrl){assert(x.oldLink.includes('/s?'));assert(/^https:\/\/www.amazon.de\/dp\/[0-9]{9}[0-9X]$/.test(x.purchaseUrl));assert.equal(x.linkEvidence.endpointVerified,false);}
}
console.log({valid:true,books:changes.length,changes:summary.totalChanges,numeric:summary.numericDataPoints,links:summary.searchLinksReplaced});
console.log('Highest new R&D ratios:',changes.filter(x=>x.reference||x.edition).filter(x=>x.assessment.ratio!==null).sort((a,b)=>b.assessment.ratio-a.assessment.ratio).slice(0,12).map(x=>({id:x.id,title:x.title,ratio:x.assessment.ratio,reference:x.reference?.ranges,pageEdition:x.assessment.pageEdition,referenceEdition:x.assessment.referenceEdition})));
