import fs from 'node:fs';
import crypto from 'node:crypto';
import assert from 'node:assert/strict';
import {buildDataset, portableDataset} from '../../site/build.mjs';
import {format} from '../../site/model.mjs';
const dir='data/v3_review_261103';
const read=p=>JSON.parse(fs.readFileSync(p,'utf8'));
const hash=p=>crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');
const baseline=read(dir+'/baseline.json'), before=read(baseline.previous), c=read(dir+'/compiled.json');
const changes=read(dir+'/changes.json'), screen=read(dir+'/screening-ledger.json'), archived=read(dir+'/archived-metadata.json');
const all=[...c.currentBooks,...c.exclusions], old=[...before.currentBooks,...before.exclusions];
const byId=new Map(all.map(b=>[b.id,b])), oldById=new Map(old.map(b=>[b.id,b])), changed=new Map(changes.map(b=>[b.id,b]));
assert.equal(all.length,old.length);assert.equal(byId.size,all.length);
assert.deepEqual([...byId.keys()].sort(),[...oldById.keys()].sort());
assert.equal(read('data/catalog.json').compiled,dir+'/compiled.json');
assert.deepEqual(c.sourceBooks,before.sourceBooks);
for(const b of all) assert.deepEqual(b.sources,oldById.get(b.id).sources,'Source membership '+b.id);
assert.equal(hash('SOURCES.md'),baseline.files['SOURCES.md']);
assert.equal(hash(baseline.previous),baseline.files[baseline.previous]);
for(const [p,h] of Object.entries(baseline.analyses)) assert.equal(hash(p),h,'Historical analysis '+p);
for(const b of before.exclusions) assert.deepEqual(byId.get(b.id),b,'Existing exclusion '+b.id);
assert.equal(c.audit.rulesSha256,hash('AGENTS.md'));
const codes=['E','S','U','M','D','R','F','A','N','P'],max=[20,17,15,12,10,9,7,5,3,2];
let numericChanges=0;
for(const b of c.currentBooks){
 const prior=oldById.get(b.id),change=changed.get(b.id);
 assert.equal(b.raw.length,10);
 const points=b.raw.map((v,i)=>{assert(Number.isFinite(v)&&v>=0&&v<=max[i],b.id);return [0,1,4].includes(i)?v*v/max[i]:v;});
 const deductions=['T11','T12','H13','P14','O15'].reduce((s,k)=>s+(b.deductions?.[k]??b[k]),0);
 const total=points.reduce((s,v)=>s+v,0)+deductions+b.bonuses.REL+b.bonuses.RD;
 assert(Math.abs(total-b.total)<1e-8,'Total '+b.id);
 assert.deepEqual(b.bonuses,prior.bonuses);assert.deepEqual(b.bonusAssessment,prior.bonusAssessment);
 assert.deepEqual(b.deductions,prior.deductions);
 if(Math.abs(b.total-prior.total)>1e-8)numericChanges++;
 for(let i=0;i<10;i++)assert.equal(b.raw[i],change?.changes?.[codes[i]]?.[0]??prior.raw[i],'Authorized attainment '+b.id+' '+codes[i]);
 if(!change){const copy={...b};delete copy.priorPurposeEvidence;assert.deepEqual(copy,prior,'Unreviewed record '+b.id);}
}
assert.equal(numericChanges,7);
for(const x of changes){
 const b=byId.get(x.id);assert.equal(x.status,b.status);assert.equal(x.score,b.status==='excluded'?null:b.total);
 assert(fs.readFileSync(x.analysis.split('#')[0],'utf8').includes('<a id="'+x.id+'"></a>'),'Missing review anchor '+x.id);
 const section=fs.readFileSync(x.analysis.split('#')[0],'utf8').split('<a id="'+x.id+'"></a>')[1].split('<a id=')[0];
 for(const url of x.urls||[])assert(section.includes(url),'Missing cited evidence '+x.id);
 if(x.score!==null){
  assert(section.includes(JSON.stringify(x.bonusAssessment)),'Report metadata mismatch '+x.id);
  for(let i=0;i<10;i++)assert(section.includes(`| ${codes[i]} | ${format(b.raw[i])} / ${max[i]} | ${format([0,1,4].includes(i)?b.raw[i]*b.raw[i]/max[i]:b.raw[i])} |`),'Report criterion mismatch '+x.id);
 }
 if(b.status==='excluded'){
  for(const k of ['total','raw','score','bonuses','deductions'])assert(!(k in b),'Excluded numeric field '+k);
  assert.deepEqual(archived[b.id].book,oldById.get(b.id),'Archived excluded record');
 }
}
assert.equal(screen.length,before.currentBooks.length);assert.equal(new Set(screen.map(b=>b.id)).size,screen.length);
for(const s of screen)assert.equal(s.status,byId.get(s.id).status);
for(const [file,status] of [['RECOMMENDED_BOOKS.md','recommended'],['VETOED_BOOKS.md','vetoed']]){
 const entries=new Map(c.currentBooks.filter(b=>b.status===status).map(b=>[b.author+'|'+b.title,b]));
 const rows=fs.readFileSync(file,'utf8').split(/\r?\n/).filter(l=>/^\| \d{4}-/.test(l));
 assert.equal(rows.length,entries.size);let previous=Infinity;const seen=new Set();
 for(const row of rows){const v=row.split('|').slice(1,-1).map(s=>s.trim());const b=entries.get(v[2]+'|'+v[3].match(/^\[([^\]]+)\]/)[1]);assert(b);assert(!seen.has(b.id));seen.add(b.id);assert.equal(v[4],format(b.total));assert(b.total<=previous+1e-8);previous=b.total;}
}
const exclusions=fs.readFileSync('EXCLUDED_BOOKS.md','utf8').split(/\r?\n/).filter(l=>l.startsWith('- '));
assert.deepEqual(exclusions,c.exclusions.map(b=>b.line));
const editions=read('site/editions.json'),refs=read('site/reference-pages.json'),enrichment=read('site/enrichment.json').books;
for(const b of c.exclusions)for(const m of [editions,refs,enrichment])assert(!(b.id in m),'Excluded live metadata '+b.id);
for(const b of c.currentBooks)assert(b.id in refs,'Missing reference record '+b.id);
const dataset=buildDataset(),portable=portableDataset(dataset);
assert.equal(dataset.books.length,5854);assert.equal(dataset.vetoed.length,758);
assert(dataset.books.every(b=>!b.ledgerMismatch));
for(const x of changes.filter(x=>x.status==='vetoed')){
 const b=portable.vetoed.find(b=>b.id===x.id);assert(b);assert.equal(b.score,format(x.score));
 assert(b.scoreReview.endsWith('#'+x.id));
}
const earlierVerification=read(dir+'/verification.json'),sameArtifact=earlierVerification.html?.sha256===hash('docs/index.html');
const v={...c.audit.latestV3Review,rulesHash:hash('AGENTS.md'),sourceMembership:'unchanged for every work',sourceRegistry:'unchanged',historicalAnalyses:`${Object.keys(baseline.analyses).length} baseline hashes preserved`,priorCompiled:'unchanged',scores:'All independently recalculated; exactly seven changes, restricted to recorded criterion decisions',membership:'Unique and disjoint; all 9740 work identities preserved',ledgerScores:'All current rows agree with unrounded catalog sorting and shared display rounding',metadata:'Removed metadata archived; no hard-excluded record retains live scoring metadata',tests:sameArtifact?earlierVerification.tests:'pending',...(sameArtifact?{html:earlierVerification.html,completed:earlierVerification.completed}:{})};
fs.writeFileSync(dir+'/verification.json',JSON.stringify(v,null,2)+'\n');console.log(v);
