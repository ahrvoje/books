const fs = require('fs');
const assert = require('assert/strict');
const crypto = require('crypto');
const read = p => fs.readFileSync(p, 'utf8');
const json = p => JSON.parse(read(p));
const cells = l => l.trim().slice(1,-1).split('|').map(s=>s.trim());
const key = s => s.normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]/g,'');
const identity = b => key(b.title)+':'+key(b.author);
const q = json('data/quadratic_scores.json');
const qb = json('data/quadratic_baseline.json');
const map = new Map(q.books.map(b=>[identity(b), {...b, reader:qb.books.find(x=>x.id===b.id)?.meta?.reader || 'NR'}]));
for (const file of ['discovery90_261018.json','discovery91_261018.json','discovery92_261018.json']) {
  const d=json('data/'+file);
  for (const b of d.entries || [d]) {
    const reader=b.reader || b.readers;
    map.set(identity(b), {...b,id:'s'+b.source,sources:[b.source],priorAssessment:d.report+(b.reportAnchor||b.key?'#'+(b.reportAnchor||b.key):''),linearPoints:Object.fromEntries(b.criteria.map(c=>[c.code,c.linearPoints])),contributions:Object.fromEntries(b.criteria.map(c=>[c.code,c.contribution])),thematic:b.thematicDeduction??b.thematic,total:b.unroundedTotal??b.total,reader:reader?'[GR '+reader.rating+' · '+reader.count+']('+reader.url+')':'NR'});
  }
}
const books=[];
for (const [file,status] of [['RECOMMENDED_BOOKS.md','recommended'],['VETOED_BOOKS.md','vetoed']]) {
  for (const l of read(file).split(/\r?\n/).filter(l=>/^\| \d{4}-/.test(l))) {
    const c=cells(l),title=c[3].match(/^\[([^\]]+)\]/)[1],author=c[2];
    const b=map.get(identity({title,author}));
    assert(b,title);
    assert.equal(b.status,status,title);
    assert.equal(b.total.toFixed(2),c[4].replace(/\*/g,''),title);
    assert.equal(Object.values(b.contributions).reduce((a,x)=>a+x,0).toFixed(2),(b.total-b.thematic).toFixed(2),title);
    books.push({...b,title,author,status,entryDate:c[0],firstYear:c[1],titleCell:c[3],row:l,sources:c.at(-1).split(',').map(x=>+x.trim()),veto:status==='vetoed'?c[5]:null,vetoConfidence:status==='vetoed'?c[6]:null,scoreConfidence:b.scoreConfidence||'moderate'});
  }
}
assert.equal(books.length,1148);
assert.equal(new Set(books.map(identity)).size,1148);
const historyFiles=fs.readdirSync('.').filter(f=>/^analysis_.*\.md$/.test(f));
const historicalHashes=Object.fromEntries([...historyFiles,'EXCLUDED_BOOKS.md'].map(f=>[f,crypto.createHash('sha256').update(read(f)).digest('hex')]));
const sourceFiles=Object.fromEntries(read('SOURCES.md').split(/\r?\n/).filter(l=>/^\| \d+ \|/.test(l)).map(l=>{const c=cells(l);return[c[0],c[3].match(/analysis_\w+_\d{6}_\d{4}\.md/)[0]];}));
const output='data/deductions_baseline_261018.json';
assert(!fs.existsSync(output),'Preserve baseline');
fs.writeFileSync(output,JSON.stringify({reviewDate:'2026-10-18',timeZone:'Europe/Warsaw',books,sourceFiles,historicalHashes,recommendedBefore:read('RECOMMENDED_BOOKS.md'),vetoedBefore:read('VETOED_BOOKS.md'),sourcesBefore:read('SOURCES.md')},null,2)+'\n');
console.log(JSON.stringify({recommended:books.filter(b=>b.status==='recommended').length,vetoed:books.filter(b=>b.status==='vetoed').length}));
