const fs=require('fs'),assert=require('assert/strict'),crypto=require('crypto');
const read=p=>fs.readFileSync(p,'utf8'),sha=s=>crypto.createHash('sha256').update(s).digest('hex');
const d=require('./research92_261018.json'),base=require('./research92_baseline_261018.json');
const prior=[...require('./single_scores_261018.json').books,...require('./discovery90_261018.json').books];
const all=[...prior,...d.books],max=[20,17,15,12,10,9,7,5,3,2],scale=6800;
const key=b=>b.title+' — '+b.author,lookup=new Map(all.map(b=>[key(b),b]));assert.equal(lookup.size,all.length);
assert.equal(d.books.length,20);assert.equal(d.excluded.length,4);assert.deepEqual(d.threshold,{operator:'>',value:92});
for(const b of d.books){
 const x=b.criteria.map(c=>c.linearPoints);assert.deepEqual(x,b.raw);assert.equal(x.length,10);
 let exact=0;
 for(let i=0;i<10;i++){
  assert(x[i]>=0&&x[i]<=max[i]);assert.equal(b.criteria[i].max,max[i]);
  const twice=2*x[i];assert(Number.isInteger(twice));
  const units=i===0?twice*twice*85:i===1?twice*twice*100:i===4?twice*twice*170:twice*3400;
  assert(Math.abs(b.criteria[i].contribution-units/scale)<1e-12);exact+=units;
 }
 assert(Math.abs(b.positive-exact/scale)<1e-10);
 assert([0,-10].includes(b.T11));assert([0,-10].includes(b.T12));
 const expected={T11:b.T11,T12:b.T12,H13:b.periodEnd===null?0:-Math.min(12*scale,Math.max(0,2026-b.periodEnd)*272)/scale,P14:-Math.min(10*scale,Math.max(0,2026-b.originalYear)*680)/scale,O15:b.amazon.count<10?-20:b.amazon.count<100?-10:b.amazon.count<1000?-5:0};
 for(const [k,v] of Object.entries(expected))assert(Math.abs(b.deductions[k]-v)<1e-12);
 exact+=Object.values(expected).reduce((s,x)=>s+Math.round(x*scale),0);
 assert(Math.abs(b.total-exact/scale)<1e-10);assert.equal(b.displayScore,(exact/scale).toFixed(2));
 assert.equal(b.meetsTarget,b.status==='recommended'&&exact>92*scale);
 const selected=b.amazon.attempts.find(a=>a.verified&&a.url===b.amazon.url&&(a.globalCount??a.topCount)===b.amazon.count);
 assert(selected&&selected.titleMatch&&selected.authorMatch&&!selected.languageMismatch);
 assert.equal(b.amazon.count,Math.max(...b.amazon.attempts.filter(a=>a.verified).map(a=>a.globalCount??a.topCount)));
 assert.equal(b.amazon.confidence,'high');assert.equal(b.amazon.year,b.originalYear);
 for(const a of b.amazon.attempts.filter(a=>a.verified)){
  assert(a.titleMatch&&a.authorMatch&&!a.languageMismatch);assert.equal(a.httpStatus,200);
  if(a.topCount!==null&&a.globalCount!==null)assert.equal(a.topCount,a.globalCount);
  assert(a.evidence.length>0&&a.sha256.length===64);
 }
 assert(b.amazon.attempts.some(a=>a.verified&&new URL(a.requestedUrl).pathname===`/dp/${b.purchaseAsin}`));
 assert.equal(b.purchasePageVerified,b.amazon.attempts.some(a=>a.verified&&a.requestedUrl===b.purchaseUrl));
 assert(['www.amazon.de','www.amazon.com'].includes(new URL(b.purchaseUrl).hostname));
 for(const u of [b.sourceUrl,...b.reviews.map(x=>x[1]),b.purchaseUrl,b.amazon.url])assert.equal(new URL(u).protocol,'https:');
}
const table=(text,header)=>{
 const lines=text.trimEnd().split(/\r?\n/),start=lines.findIndex(l=>l.startsWith(header))+2;assert(start>1);
 let end=start;while(lines[end]?.startsWith('|'))end++;
 return lines.slice(start,end).map(line=>({line,c:line.split('|').slice(1,-1).map(x=>x.trim())}));
};
const rec=table(read('RECOMMENDED_BOOKS.md'),'| Entry date |'),veto=table(read('VETOED_BOOKS.md'),'| Entry date |'),ledger=table(read('VETOED_BOOKS.md'),'| Work · prior assessment |');
assert.equal(rec.length,1010);assert.equal(veto.length,177);assert.equal(ledger.length,177);
const ex=read('EXCLUDED_BOOKS.md').split(/\r?\n/).filter(x=>x.startsWith('- '));assert.equal(ex.length,307);assert.equal(new Set(ex).size,307);
assert.deepEqual(ex,[...ex].sort((a,b)=>a.slice(2).localeCompare(b.slice(2),'en',{sensitivity:'base'})));
const sources=read('SOURCES.md').split(/\r?\n/).filter(x=>/^\| \d+ \|/.test(x));assert.equal(sources.length,98);
assert.deepEqual(sources.map(l=>+l.split('|')[1]),Array.from({length:98},(_,i)=>i+1));
for(const old of table(base.text['RECOMMENDED_BOOKS.md'],'| Entry date |'))assert(rec.some(r=>r.line===old.line));
for(const old of table(base.text['VETOED_BOOKS.md'],'| Entry date |'))assert(veto.some(r=>r.line===old.line));
for(const old of table(base.text['VETOED_BOOKS.md'],'| Work · prior assessment |'))assert(ledger.some(r=>r.line===old.line));
for(const old of base.text['VETOED_BOOKS.md'].split(/\r?\n/).filter(x=>x&&!x.startsWith('|')&&!x.startsWith('Updated **')&&!x.startsWith('E/S/D are already')))assert(read('VETOED_BOOKS.md').includes(old));
for(const old of base.text['EXCLUDED_BOOKS.md'].split(/\r?\n/).filter(x=>x.startsWith('- ')))assert(ex.includes(old));
assert(read('SOURCES.md').startsWith(base.text['SOURCES.md'].trimEnd()));
const identities=new Set();
for(const [list,status] of [[rec,'recommended'],[veto,'vetoed']]){
 let prev=Infinity;
 for(const r of list){
  assert.equal(r.c.length,status==='recommended'?6:8);assert(/^\[[^\]]+\]\([^)]+\)$/.test(r.c[3]),`Title annotation: ${r.c[3]}`);
  const title=r.c[3].match(/^\[([^\]]+)\]/)[1],identity=title+' — '+r.c[2];assert(!identities.has(identity));identities.add(identity);
  assert(!ex.includes('- '+identity),`Scored/excluded overlap: ${identity}`);
  const b=lookup.get(identity);assert(b&&b.status===status);assert.equal(Number(r.c[4].replaceAll('*','')),Number(b.total.toFixed(2)));
  assert(b.total<=prev+1e-12);prev=b.total;
 }
}
let prev=Infinity;
for(const r of ledger){
 assert.equal(r.c.length,19);const identity=r.c[0].match(/\[([^\]]+)\]/)[1],b=lookup.get(identity);assert(b&&b.status==='vetoed');
 assert(b.total<=prev+1e-12);prev=b.total;assert.equal(Number(r.c[16].replaceAll('*','')),Number(b.total.toFixed(2)));
 if(d.books.includes(b)){
  for(let i=0;i<10;i++)assert.equal(Number(r.c[i+1]),Number(b.criteria[i].contribution.toFixed(2)));
  for(let i=0;i<5;i++)assert.equal(Number(r.c[i+11]),Number(Object.values(b.deductions)[i].toFixed(2)));
 }
}
const report=read(d.review),ranked=table(report,'| Quality · verdict · confidence |');assert.equal(ranked.length,17);
for(const b of d.books){
 const list=b.status==='recommended'?rec:veto;assert.equal(list.filter(r=>r.c[3].startsWith(`[${b.title}]`)).length,1);
 assert(sources.some(x=>x.startsWith(`| ${b.source} |`)&&x.includes(`${d.review}#${b.id}`)));
 assert(report.includes(`<a id="${b.id}"></a>`));
 if(b.status==='recommended')assert(ranked.some(r=>r.c[4]===`[${b.title}](${b.purchaseUrl})`));
}
assert.deepEqual(ranked.map(r=>r.c.length),Array(17).fill(5));
assert.deepEqual(ranked.map(r=>r.c[4].match(/^\[([^\]]+)\]/)[1]),d.books.filter(b=>b.status==='recommended').sort((a,b)=>b.total-a.total||a.title.localeCompare(b.title,'en')).map(b=>b.title));
for(const b of d.excluded){
 assert(ex.includes('- '+key(b)));assert(!identities.has(key(b)));assert(!('total' in b)&&!('raw' in b));
 assert(report.includes(`<a id="${b.id}"></a>`));assert(sources.some(x=>x.startsWith(`| ${b.source} |`)&&x.includes(`${d.review}#${b.id}`)));
}
for(const m of report.matchAll(/\]\(([^)]+)\)/g))if(!m[1].startsWith('http'))assert(fs.existsSync(m[1].split('#')[0]),`Broken local link: ${m[1]}`);
for(const [p,h] of Object.entries(base.historyHashes))assert.equal(sha(read(p)),h,`History changed: ${p}`);
for(const [p,h] of Object.entries(base.protectedHashes))assert.equal(sha(read(p)),h,`Protected file changed: ${p}`);
for(const [p,h] of Object.entries(base.generatedHashes))assert.equal(sha(read(p)),h,`Generated file changed outside builder: ${p}`);
assert.equal(Object.keys(base.historyHashes).length,27);assert.equal(rec[0].c[4],'91.40');
const checks={result:'PASS',nominatedWorks:24,scoredNominations:20,recommendedAdded:17,vetoedAdded:3,hardExclusionsAdded:4,verifiedAmazonCounts:20,missingCountFallbacks:0,above92:d.books.filter(b=>b.meetsTarget).map(b=>({title:b.title,score:b.displayScore})),recommended:rec.length,vetoed:veto.length,excluded:ex.length,sources:sources.length,unchangedHistoricalAnalyses:Object.keys(base.historyHashes).length,report:d.review};
fs.writeFileSync('data/research92_validation_261018.json',JSON.stringify(checks,null,2)+'\n');console.log(JSON.stringify(checks,null,2));
