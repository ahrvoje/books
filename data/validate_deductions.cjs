const fs=require('fs'),assert=require('assert/strict'),path=require('path'),crypto=require('crypto');
const read=f=>fs.readFileSync(f,'utf8');
const d=require('./deductions_scores_261018.json'),before=require('./deductions_baseline_261018.json');
const cell=l=>l.trim().slice(1,-1).split('|').map(x=>x.trim());
const rows=f=>read(f).split(/\r?\n/).filter(l=>/^\| \d{4}-/.test(l)).map(cell);
const key=b=>b.title+'\u0000'+b.author;
const bmap=new Map(before.books.map(b=>[key(b),b]));
const outputs=[['RECOMMENDED_BOOKS.md','recommended',975],['VETOED_BOOKS.md','vetoed',173]];
for(const [file,status,count] of outputs){
  const current=rows(file),expected=d.books.filter(b=>b.status===status).sort((a,b)=>b.upper-a.upper||b.lower-a.lower||a.title.localeCompare(b.title,'en')||a.author.localeCompare(b.author,'en'));
  assert.equal(current.length,count,file);
  for(let i=0;i<count;i++){
    const c=current[i],e=expected[i],b=bmap.get(key(e));
    assert.equal(c[3].match(/^\[([^\]]+)\]/)[1],e.title,file+' order');
    assert.equal(c[0],b.entryDate);assert.equal(c[1],String(b.firstYear));assert.equal(c[2],b.author);
    assert.equal(c.at(-1),b.sources.join(', '));assert.equal(c[4].replace(/\*/g,''),e.displayScore);
    if(status==='vetoed'){assert.equal(c[5],b.veto);assert.equal(c[6],b.vetoConfidence);}
  }
}
const sourceRows=read('SOURCES.md').split(/\r?\n/).filter(l=>/^\| \d+ \|/.test(l)).map(cell);
const oldSources=before.sourcesBefore.split(/\r?\n/).filter(l=>/^\| \d+ \|/.test(l)).map(cell);
assert.equal(sourceRows.length,53);
sourceRows.forEach((r,i)=>assert.deepEqual(r.slice(0,3),oldSources[i].slice(0,3)));
const report=read(d.review);
assert.equal((report.match(/<a id="d-/g)||[]).length,1148);
const rankSection=report.split('## Ranked eligible list — five columns')[1].split('## Full eligible criterion ledger')[0];
assert.equal(rankSection.split('\n').filter(l=>l.startsWith('| [**')).length,975);
for(const line of rankSection.split('\n').filter(l=>l.startsWith('|')))assert.equal(cell(line).length,5,'Five-column ranking');
const files=[d.review,'RECOMMENDED_BOOKS.md','VETOED_BOOKS.md','SOURCES.md'];
const broken=[];
for(const file of files)for(const m of read(file).matchAll(/\]\(([^)]+)\)/g)){
  const target=m[1].replace(/^<|>$/g,'');if(/^(?:https?:|mailto:)/.test(target)||!target)continue;
  const [name,anchor]=target.split('#'),resolved=name?path.resolve(path.dirname(file),decodeURIComponent(name)):path.resolve(file);
  if(!fs.existsSync(resolved)){broken.push({file,target,reason:'missing file'});continue;}
  if(anchor&&/^d-|^source-/.test(anchor)&&!read(resolved).includes('id="'+anchor+'"'))broken.push({file,target,reason:'missing review anchor'});
}
assert.deepEqual(broken,[]);
for(const [file,expected] of Object.entries(before.historicalHashes))assert.equal(crypto.createHash('sha256').update(read(file)).digest('hex'),expected,file);
assert(read('VETOED_BOOKS.md').endsWith(before.vetoedBefore.slice(before.vetoedBefore.indexOf('## Reasons and evidence'))),'Veto reasons changed');
const validation=require('./deductions_validation_261018.json');
Object.assign(validation,{independentFileAudit:{passed:true,recommendedRows:975,vetoRows:173,sourceRows:53,rankedFiveColumnRows:975,criterionAnchors:1148,localLinks:'all referenced files and new review anchors exist',metadata:'entry dates, publication years, authors, sources, vetoes and confidence preserved',historicalReports:'all baseline hashes match'}});
fs.writeFileSync('data/deductions_validation_261018.json',JSON.stringify(validation,null,2)+'\n');
console.log(JSON.stringify(validation.independentFileAudit,null,2));
