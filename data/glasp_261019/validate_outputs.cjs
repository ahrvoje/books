const fs=require('fs'),path=require('path'),assert=require('assert/strict'),crypto=require('crypto');
const root=__dirname,repo=path.resolve(root,'../..'),c=require('./compiled.json'),inv=require('./inventory.json'),prior=require('./prior.json'),baseline=require('./baseline.json');
const published=process.argv.includes('--published'),dir=published?repo:path.join(root,'draft');
const current=new Map(c.currentBooks.map(x=>[x.id,x])),mapped=new Map(c.sourceBooks.flatMap(x=>x.sourceIds.map(id=>[id,x])));
if(process.argv.includes('--complete')||published)assert.equal(c.audit.pending.length,0,'pending assessments');
const appearanceKey=a=>JSON.stringify([a.source,a.sourceLabel,a.url,a.imageUrl]);
const observed=c.sourceBooks.flatMap(x=>x.appearances).map(appearanceKey).sort();
const expected=inv.books.filter(b=>mapped.has(b.id)).flatMap(b=>b.appearances).map(appearanceKey).sort();
assert.deepEqual(observed,expected,'every captured appearance must occur exactly once');
assert.equal(new Set(inv.books.map(b=>b.id)).size,inv.books.length);
assert.equal(inv.books.flatMap(b=>b.appearances).length,inv.records.length);
for(const s of inv.sources){
 assert.equal(inv.books.flatMap(b=>b.appearances).filter(a=>a.source===s.number).length,s.count,'source count '+s.number);
 assert.equal(crypto.createHash('sha256').update(fs.readFileSync(path.join(root,s.category+'.txt'))).digest('hex'),s.sha256,'source snapshot changed');
 const report=fs.readFileSync(path.join(dir,c.audit.reports[s.number]),'utf8');
 assert(!report.includes('undefined'),'undefined in report '+s.number);
 assert(!report.includes('NaN'),'NaN in report '+s.number);
 const records=[...new Set(inv.books.filter(b=>b.appearances.some(a=>a.source===s.number)).map(b=>mapped.get(b.id)).filter(Boolean))];
 const eligible=records.filter(b=>b.status==='recommended').sort((a,b)=>b.total-a.total||a.title.localeCompare(b.title,'en'));
 const table=report.split('## Ranked eligible books')[1].split('## Hard exclusions')[0];
 assert.equal(table.split('\n').filter(l=>/^\| \*\*/.test(l)).length,eligible.length,'ranked completeness '+s.number);
 let offset=0;for(const b of eligible){const token='['+b.title.replace(/\|/g,'\\|')+']('+b.purchaseUrl+')',at=table.indexOf(token,offset);assert(at>=offset,'ranked order '+b.title);offset=at+token.length;}
 for(const b of records.filter(b=>b.raw)){
  assert(report.includes('<a id="'+b.sourceIds[0]+'"></a>'),'assessment anchor '+b.title);
  for(const a of b.appearances.filter(a=>a.source===s.number))assert(report.includes(']('+a.url+')'),'source-entry trace '+b.title);
 }
}
for(const b of c.sourceBooks){
 if(b.status==='excluded'||b.status==='nonbook'){assert(!b.raw,'hard gate scored '+b.title);assert(!current.has(b.id),'hard gate in scored ledger '+b.title);continue;}
 assert(current.has(b.id),'missing current scored book '+b.title);
 const x=b.raw;
 const positive=x[0]**2/20+x[1]**2/17+x[2]+x[3]+x[4]**2/10+x.slice(5).reduce((s,v)=>s+v,0);
 const historical=b.periodEnd===null?0:-Math.min(12,Math.max(0,2026-b.periodEnd)/25);
 const publication=-Math.min(10,Math.max(0,2026-b.year)/10);
 const count=b.amazon.count,obscurity=typeof count!=='number'?0:count>=1000?0:count>=100?-5:count>=10?-10:-20;
 assert(Math.abs(b.total-(positive+b.T11+b.T12+historical+publication+obscurity))<1e-9,'independent score '+b.title);
 if(b.priorId){const p=prior.find(p=>p.id===b.priorId);for(const s of p.sources||[])assert(b.sources.includes(s),'lost contributing source '+b.title);}
 const [file,anchor]=b.reviewAnchor.split('#');assert(fs.readFileSync(path.join(dir,file),'utf8').includes('<a id="'+anchor+'"></a>'),'ledger assessment anchor '+b.title);
}
const rec=fs.readFileSync(path.join(dir,'RECOMMENDED_BOOKS.md'),'utf8'),veto=fs.readFileSync(path.join(dir,'VETOED_BOOKS.md'),'utf8'),exc=fs.readFileSync(path.join(dir,'EXCLUDED_BOOKS.md'),'utf8'),sources=fs.readFileSync(path.join(dir,'SOURCES.md'),'utf8');
assert.equal(rec.split('\n').filter(l=>/^\| 20\d\d-/.test(l)).length,c.audit.currentRecommended);
assert.equal(veto.split('\n').filter(l=>/^\| 20\d\d-/.test(l)).length,c.audit.currentVetoed);
assert.equal(exc.split('\n').filter(l=>l.startsWith('- ')).length,c.audit.currentExcluded);
for(const s of inv.sources)assert(sources.includes('('+c.audit.reports[s.number]+')'),'source report link');
const unchanged=prior.filter(p=>current.has(p.id)&&!current.get(p.id).sourceIds.length);
for(const p of unchanged)assert(Math.abs(p.total-current.get(p.id).total)<1e-9,'unrelated score drift '+p.title);
for(const [file,b] of Object.entries(baseline).filter(([f])=>f.startsWith('analysis_')))assert.equal(crypto.createHash('sha256').update(fs.readFileSync(path.join(repo,file))).digest('hex'),b.sha256,'historical report modified '+file);
console.log(JSON.stringify({mode:published?'published':'draft',assessed:c.audit.assessed,pending:c.audit.pending.length,sourceAppearances:observed.length,scoreChecks:c.sourceBooks.filter(b=>b.raw).length,unchangedScoresChecked:unchanged.length,reportCount:inv.sources.length,historyPreserved:true},null,2));
