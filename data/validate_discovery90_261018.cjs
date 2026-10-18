const fs=require('fs'),assert=require('assert/strict'),crypto=require('crypto');
const read=p=>fs.readFileSync(p,'utf8'),sha=s=>crypto.createHash('sha256').update(s).digest('hex');
const d=require('./discovery90_261018.json'),base=require('./discovery90_baseline_261018.json'),prior=require('./single_scores_261018.json');
const max=[20,17,15,12,10,9,7,5,3,2],scale=6800;
assert.equal(d.books.length,19);assert.equal(d.excluded.length,2);
for(const b of d.books){
 const x=b.criteria.map(c=>c.linearPoints);assert.deepEqual(x,b.raw);
 let exact=0;
 for(let i=0;i<10;i++){
  assert(x[i]>=0&&x[i]<=max[i]);assert.equal(b.criteria[i].max,max[i]);
  const twice=2*x[i];assert(Number.isInteger(twice));
  const units=i===0?twice*twice*85:i===1?twice*twice*100:i===4?twice*twice*170:twice*3400;
  assert(Math.abs(b.criteria[i].contribution-units/scale)<1e-12);exact+=units;
 }
 assert(Math.abs(b.positive-exact/scale)<1e-10);
 const expected={T11:b.T11,T12:b.T12,H13:b.periodEnd===null?0:-Math.min(12*scale,Math.max(0,2026-b.periodEnd)*272)/scale,P14:-Math.min(10*scale,Math.max(0,2026-b.originalYear)*680)/scale,O15:b.amazon.count<10?-20:b.amazon.count<100?-10:b.amazon.count<1000?-5:0};
 for(const [k,v] of Object.entries(expected))assert(Math.abs(b.deductions[k]-v)<1e-12);
 exact+=Object.values(expected).reduce((s,x)=>s+Math.round(x*scale),0);
 assert(Math.abs(b.total-exact/scale)<1e-10);assert.equal(b.displayScore,(exact/scale).toFixed(2));
 assert.equal(b.meetsTarget,b.status==='recommended'&&exact>90*scale);
 const selected=b.amazon.attempts.find(a=>a.verified&&a.url===b.amazon.url&&(a.globalCount??a.topCount)===b.amazon.count);
 assert(selected&&selected.titleMatch&&selected.authorMatch&&!selected.languageMismatch);
 assert.equal(b.amazon.count,Math.max(...b.amazon.attempts.filter(a=>a.verified).map(a=>a.globalCount??a.topCount)));
 assert.equal(b.amazon.confidence,'high');
}
const booksIn=(text,header)=>{
 const lines=text.trimEnd().split(/\r?\n/),start=lines.findIndex(l=>l.startsWith(header))+2;assert(start>1);
 let end=start;while(lines[end]?.startsWith('|'))end++;
 return lines.slice(start,end).map(line=>({line,c:line.split('|').slice(1,-1).map(x=>x.trim())}));
};
const rec=booksIn(read('RECOMMENDED_BOOKS.md'),'| Entry date |'),veto=booksIn(read('VETOED_BOOKS.md'),'| Entry date |');
assert.equal(rec.length,993);assert.equal(veto.length,174);
const ex=read('EXCLUDED_BOOKS.md').split(/\r?\n/).filter(x=>x.startsWith('- '));assert.equal(ex.length,303);
const sources=read('SOURCES.md').split(/\r?\n/).filter(x=>/^\| \d+ \|/.test(x));assert.equal(sources.length,74);
assert.deepEqual(sources.map(l=>+l.split('|')[1]),Array.from({length:74},(_,i)=>i+1));
for(const old of booksIn(base.text['RECOMMENDED_BOOKS.md'],'| Entry date |'))assert(rec.some(r=>r.line===old.line));
for(const old of booksIn(base.text['VETOED_BOOKS.md'],'| Entry date |'))assert(veto.some(r=>r.line===old.line));
for(const old of booksIn(base.text['VETOED_BOOKS.md'],'| Work · prior assessment |'))assert(read('VETOED_BOOKS.md').includes(old.line));
for(const old of base.text['EXCLUDED_BOOKS.md'].split(/\r?\n/).filter(x=>x.startsWith('- ')))assert(ex.includes(old));
assert(read('SOURCES.md').startsWith(base.text['SOURCES.md'].trimEnd()));
const titles=new Set();let prev=Infinity;
for(const r of rec){
 assert.equal(r.c.length,6);assert(/^\[[^\]]+\]\([^)]+\)$/.test(r.c[3]),`Title annotation: ${r.c[3]}`);
 const title=r.c[3].match(/^\[([^\]]+)\]/)[1],key=title+'|'+r.c[2];assert(!titles.has(key));titles.add(key);
 const b=d.books.find(b=>b.title===title&&b.author===r.c[2])??prior.books.find(b=>b.title===title&&b.author===r.c[2]);
 assert(b&&b.status==='recommended');assert.equal(Number(r.c[4]),Number(b.total.toFixed(2)));
 assert(b.total<=prev+1e-12);prev=b.total;
}
prev=Infinity;
for(const r of veto){
 const title=r.c[3].match(/^\[([^\]]+)\]/)[1],key=title+'|'+r.c[2];assert(!titles.has(key));titles.add(key);
 const b=d.books.find(b=>b.title===title&&b.author===r.c[2])??prior.books.find(b=>b.title===title&&b.author===r.c[2]);
 assert(b&&b.status==='vetoed');assert(b.total<=prev+1e-12);prev=b.total;
}
for(const b of d.books){
 const list=b.status==='recommended'?rec:veto;
 assert.equal(list.filter(r=>r.c[3].startsWith(`[${b.title}]`)).length,1);
 assert(!ex.some(x=>x===`- ${b.title}`||x.startsWith(`- ${b.title} —`)));
 assert(sources.some(x=>x.startsWith(`| ${b.source} |`)&&x.includes(`${d.review}#${b.id}`)));
 assert(read(d.review).includes(`<a id="${b.id}"></a>`));
}
for(const b of d.excluded){assert(ex.includes(`- ${b.title} — ${b.author}`));assert(!('total' in b));}
for(const [p,h] of Object.entries(base.historyHashes))assert.equal(sha(read(p)),h,`History changed: ${p}`);
assert.equal(sha(read('AGENTS.md')),base.rulesHash);assert.equal(sha(read('data/single_scores_261018.json')),base.scoreSnapshotHash);
const checks={result:'PASS',scoredNominations:19,hardExclusions:2,verifiedAmazonCounts:19,missingCountFallbacks:0,above90:d.books.filter(b=>b.meetsTarget).map(b=>({title:b.title,score:b.displayScore})),recommended:rec.length,vetoed:veto.length,excluded:ex.length,sources:sources.length,unchangedHistoricalAnalyses:Object.keys(base.historyHashes).length,report:d.review};
fs.writeFileSync('data/discovery90_validation_261018.json',JSON.stringify(checks,null,2)+'\n');console.log(JSON.stringify(checks,null,2));
