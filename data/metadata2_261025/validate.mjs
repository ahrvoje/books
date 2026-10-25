import fs from 'node:fs';
import assert from 'node:assert/strict';
import {titleMatches,authorMatches} from '../pages_density_261021/collect.mjs';
const dir='data/metadata2_261025',read=p=>JSON.parse(fs.readFileSync(p));
const before=read(read(dir+'/baseline.json').compiled),after=read(dir+'/compiled.json'),changes=read(dir+'/review.json'),summary=read(dir+'/summary.json');
const old=new Map(before.currentBooks.map(b=>[b.id,b])),now=new Map(after.currentBooks.map(b=>[b.id,b])),refs=read(dir+'/candidate-reference-pages.json');
const targets=new Map(read(dir+'/targets.json').map(b=>[b.id,b]));assert.equal(new Set(changes.map(x=>x.id)).size,changes.length);
const aliases=read(dir+'/identity-aliases.json');
const titleVerified=(b,title)=>titleMatches(b.title,title)||(aliases[b.id]?.expected===b.title&&aliases[b.id]?.observed===title&&fs.existsSync(aliases[b.id].source));
const authorVerified=(b,author)=>authorMatches(b.author.replace(/ with /g,'; '),author)||(b.id==='resume-189-21'&&b.author==='Tim Wu'&&author==='Tim Wu'&&fs.existsSync('data/metadata2_261025/raw/manual-pages-005.json'));
assert.equal(old.size,now.size);assert.equal(summary.totalChanges,changes.reduce((n,c)=>n+['edition','reference','amazon','purchaseUrl'].filter(k=>c[k]).length,0));
for(const x of changes){
 const a=old.get(x.id),b=now.get(x.id);assert.equal(b.status,'recommended');assert.deepEqual(b.raw,a.raw);assert.deepEqual(b.sources,a.sources);
 const t=targets.get(x.id);if(x.edition&&!x.editionCorrection)assert.equal(t.edition,null);if(x.reference)assert.equal(t.reference.pages,null);if(x.amazon)assert(t.amazon?.count==null);
 for(const k of ['T11','T12','H13','P14'])assert.equal(b.deductions?.[k]??b[k],a.deductions?.[k]??a[k]);
 assert(Number.isFinite(x.after));assert(Math.abs(x.after-b.total)<1e-9);assert.equal(b.bonuses.REL,a.bonuses.REL);
 for(const field of ['edition','reference'])if(x[field])assert(x[field].source?.file&&fs.existsSync(x[field].source.file),'Missing saved evidence: '+x.id+' '+field);
 if(x.reference?.edition?.pages)assert(x.reference.ranges.every(q=>q.end<=x.reference.edition.pages),'Range exceeds edition: '+x.id);
 if(x.edition){assert(Number.isInteger(x.edition.pages)&&x.edition.pages>0);assert(x.edition.url);assert(titleVerified(b,x.edition.title));assert(authorVerified(b,x.edition.authors));}
 if(x.reference){const r=x.reference,seen=new Set();assert(r.ranges.length);for(const q of r.ranges){assert(Number.isInteger(q.start)&&Number.isInteger(q.end)&&q.start>0&&q.end>=q.start);for(let p=q.start;p<=q.end;p++)seen.add((q.volume||'')+':'+p);}assert.equal(r.pages,seen.size);assert.equal(refs[x.id].pages,r.pages);assert(titleVerified(b,r.edition.title));assert(authorMatches(b.author.replace(/ with /g,'; '),r.edition.author));if(r.sameEditionAsPG)assert(r.pages<=x.assessment.pages);}
 if(x.amazon){assert(x.amazon.count>0);assert(x.amazon.evidence?.length&&fs.existsSync(x.amazon.sourceSnapshot));assert(titleMatches(b.title,x.amazon.productTitle));assert(authorMatches(b.author.replace(/ with /g,'; '),x.amazon.byline));}
 if(x.purchaseUrl){assert(x.oldLink.includes('/s?')||x.linkEvidence.replaceExisting===true);assert(/^https:\/\/www.amazon.de\/dp\/[0-9]{9}[0-9X]$/.test(x.purchaseUrl));assert.equal(x.linkEvidence.endpointVerified,false);}
}
console.log({valid:true,books:changes.length,changes:summary.totalChanges,numeric:summary.numericDataPoints,links:summary.searchLinksReplaced});
console.log('Highest new R&D ratios:',changes.filter(x=>x.reference||x.edition).filter(x=>x.assessment.ratio!==null).sort((a,b)=>b.assessment.ratio-a.assessment.ratio).slice(0,12).map(x=>({id:x.id,title:x.title,ratio:x.assessment.ratio,reference:x.reference?.ranges,pageEdition:x.assessment.pageEdition,referenceEdition:x.assessment.referenceEdition})));

