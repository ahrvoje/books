import fs from 'node:fs';
import assert from 'node:assert/strict';
import crypto from 'node:crypto';
const dir='data/openrouter100_261101',read=p=>JSON.parse(fs.readFileSync(p,'utf8'));
const changes=read(dir+'/review.json'),baseline=read(read(dir+'/baseline.json').compiled),current=read(read('data/catalog.json').compiled),targets=read(dir+'/targets.json'),editions=read('site/editions.json'),enrichment=read('site/enrichment.json'),refs=read('site/reference-pages.json');
assert.equal(changes.length,5);assert.deepEqual(current.currentBooks.map(b=>b.id),baseline.currentBooks.map(b=>b.id));
let added=0;
for(const t of targets){const e=enrichment.books[t.id]?.edition||editions[t.id];if(!t.edition&&e){added++;assert(changes.some(x=>x.id===t.id));}assert.equal(refs[t.id].pages,t.reference.pages);assert.equal(current.currentBooks.find(b=>b.id===t.id).amazon?.count??null,t.amazon);}
assert.equal(added,5);
for(const old of baseline.currentBooks){const b=current.currentBooks.find(b=>b.id===old.id);assert(Math.abs(b.total-old.total)<1e-10);assert.deepEqual(b.raw,old.raw);assert.deepEqual(b.sources,old.sources);if(!changes.some(x=>x.id===old.id))assert.deepEqual(b,old);}
const hashes=read(dir+'/input-hashes.json');for(const p of ['VETOED_BOOKS.md','EXCLUDED_BOOKS.md','site/enrichment.json'])assert.equal(crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex'),hashes[p]);
const key=fs.readFileSync('api-key','utf8').match(/sk-or-[A-Za-z0-9_-]+/)[0];
const walk=p=>fs.readdirSync(p,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(p+'/'+e.name):[p+'/'+e.name]);
for(const p of [...walk(dir),'README.md','.gitignore',read(dir+'/summary.json').report])assert(!fs.readFileSync(p,'utf8').includes(key),'Credential found in artifact; filename omitted');
const result={passed:true,newNumericValues:added,newAmazonCounts:0,newReferenceCounts:0,contentAssessmentsUnchanged:true,scoresUnchanged:true,membershipUnchanged:true,credentialAbsentFromArtifacts:true,targetComplete:false};
fs.writeFileSync(dir+'/validation.json',JSON.stringify(result,null,2)+'\n');console.log(result);
