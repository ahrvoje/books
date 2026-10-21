import fs from 'node:fs';
import crypto from 'node:crypto';
import assert from 'node:assert/strict';
import {buildDataset} from '../../site/build.mjs';
import {density} from './density.mjs';
const read=p=>fs.readFileSync(p,'utf8'),j=p=>JSON.parse(read(p)),dir='data/pages_density_261021/';
const c=j(j('data/catalog.json').compiled),prior=j('data/category_review_261021/compiled.json'),old=new Map(prior.currentBooks.map(b=>[b.id,b]));
assert.deepEqual(c.exclusions,prior.exclusions);
assert.equal(c.currentBooks.length,prior.currentBooks.length);
for(const b of c.currentBooks){const a=old.get(b.id);assert(a);
 for(const k of ['status','year','periodEnd','T11','T12','deductions','amazon','sources','confidence','veto','vetoReason'])assert.deepEqual(b[k],a[k],b.id+' '+k);
 for(let i=0;i<10;i++)if(i!==4||!density[b.id]){assert.equal(b.raw[i],a.raw[i]);assert.equal(b.points[i],a.points[i]);}
 if(!density[b.id])assert.deepEqual(b,a,b.id+' unchanged assessment');
 else{assert.equal(b.raw[4],density[b.id].attainment);assert.equal(b.points[4],b.raw[4]**2/10);assert(Math.abs((b.total-a.total)-(b.points[4]-a.points[4]))<1e-10);}
}
const e=j('site/enrichment.json'),baseline=j(dir+'baseline-enrichment.json');assert.deepEqual(e.books,baseline.books,'Existing enrichment records preserved');
const dataset=buildDataset(),counts=j(dir+'changes.json').counts;
assert.equal(dataset.coverage.pages,counts.recommended.known);
assert.equal(dataset.vetoed.filter(b=>b.edition).length,counts.vetoed.known);
for(const b of [...dataset.books,...dataset.vetoed])if(b.edition){const e=b.edition;assert(Number.isInteger(e.pages)&&e.pages>0);assert(e.id&&e.url&&e.retrieved&&e.format&&e.language);assert(Number.isInteger(e.year));}
for(const [file,books,index] of [['RECOMMENDED_BOOKS.md',dataset.books,6],['VETOED_BOOKS.md',dataset.vetoed,8]]){
 const rows=read(file).split('\n').filter(l=>/^\| \d{4}-/.test(l)).map(l=>l.split('|').slice(1,-1).map(v=>v.trim()));
 assert.equal(rows.length,books.length);rows.forEach((r,i)=>assert.equal(r[index],books[i].edition?`[${books[i].edition.pages}](${books[i].edition.url})`:'Unknown'));
}
const html=read('docs/index.html');assert(Buffer.byteLength(html)<=4_000_000);
const result={counts,onlyThreeDensityScoresChanged:true,allOtherInputsPreserved:true,existingEnrichmentPreserved:true,htmlBytes:Buffer.byteLength(html),htmlSha256:crypto.createHash('sha256').update(html).digest('hex')};
if(process.argv.includes('--browser')){const b=j('site/qa-output/results.json');assert.deepEqual(b.errors,[]);assert.deepEqual(b.networkRequests,[]);assert.equal(read('site/qa-output/isolated/index.html'),html);result.browser=b;}
fs.writeFileSync(dir+'validation.json',JSON.stringify(result,null,2)+'\n');console.log(JSON.stringify(result,null,2));
