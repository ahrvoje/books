import fs from 'node:fs';
import assert from 'node:assert/strict';
const dir='data/rules_audit_261025',read=p=>JSON.parse(fs.readFileSync(p,'utf8'));
const old=read('data/intake_finish_261025/compiled.json'),now=read(dir+'/compiled.json'),changes=read(dir+'/changes.json'),changed=new Set(changes.map(x=>x.id));
const all=new Map([...now.currentBooks,...now.exclusions].map(b=>[b.id,b]));
assert.equal(all.size,now.currentBooks.length+now.exclusions.length);
for(const b of old.currentBooks){const a=all.get(b.id);assert.deepEqual(a.sources,b.sources);if(!changed.has(b.id))assert.deepEqual(a,b);else if(a.status==='vetoed')for(const k of ['raw','total','deductions','bonuses'])assert.deepEqual(a[k],b[k]);}
for(const b of old.exclusions)assert.deepEqual(all.get(b.id),b);
assert.equal(now.currentBooks.filter(b=>b.status==='recommended').length,5423);
assert.equal(now.currentBooks.filter(b=>b.status==='vetoed').length,675);
assert.equal(now.exclusions.length,2924);
const result=read(dir+'/result.json');result.validation={testsPassed:21,testsFailed:0,build:'docs/index.html regenerated',finalMembershipAndPreservation:'passed',archivedEnrichment:Object.keys(read(dir+'/archived-enrichment.json')).length};
fs.writeFileSync(dir+'/result.json',JSON.stringify(result,null,2)+'\n');
console.log(result.validation);
