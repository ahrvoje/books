const fs=require('fs'),assert=require('assert/strict'),crypto=require('crypto');
const read=p=>fs.readFileSync(p,'utf8'),sha=s=>crypto.createHash('sha256').update(s).digest('hex');
const d=require('./tactical92_261018.json'),base=require('./tactical92_baseline_261018.json');
const prior=d.priorSnapshots.flatMap(p=>JSON.parse(read(p)).books),key=b=>b.title+' — '+b.author;
const lookup=new Map(prior.map(b=>[key(b),b]));for(const b of d.books)lookup.set(key(b),b);
const codes=['E','S','U','M','D','R','F','A','N','P'],max=[20,17,15,12,10,9,7,5,3,2],scale=6800;
const display=units=>(Math.floor((units+34)/68)/100).toFixed(2);
assert.equal(d.books.length,15);assert.equal(d.books.filter(b=>b.kind==='new').length,12);assert.equal(d.excluded.length,0);
assert.deepEqual(d.threshold,{operator:'>',value:92});assert.equal(lookup.size,1199);
for(const b of d.books){
 assert.equal(b.raw.length,10);assert.deepEqual(b.raw,b.criteria.map(c=>c.linearPoints));assert.equal(b.status,'recommended');
 let positive=0;
 for(let i=0;i<10;i++){
  const x=b.raw[i],c=b.criteria[i];assert(x>=0&&x<=max[i]);assert.equal(c.code,codes[i]);assert.equal(c.max,max[i]);assert(c.assessment.length>15);
  let units;
  if(i===3&&['material','energy'].includes(b.id)){
   assert.equal(x,192/17);units=192*400;
  }else{
   const half=x*2;assert(Number.isInteger(half));
   units=i===0?half*half*85:i===1?half*half*100:i===4?half*half*170:half*3400;
  }
  assert(Math.abs(c.contribution-units/scale)<1e-12);positive+=units;
 }
 assert(Math.abs(b.positive-positive/scale)<1e-12);
 assert([0,-10].includes(b.T11));assert([0,-10].includes(b.T12));
 const deductions={T11:b.T11*scale,T12:b.T12*scale,H13:b.periodEnd===null?0:-Math.min(12*scale,(2026-b.periodEnd)*272),P14:-Math.min(10*scale,(2026-b.originalYear)*680),O15:(b.amazon.count<10?-20:b.amazon.count<100?-10:b.amazon.count<1000?-5:0)*scale};
 for(const [k,v] of Object.entries(deductions))assert(Math.abs(b.deductions[k]-v/scale)<1e-12);
 const units=positive+Object.values(deductions).reduce((s,v)=>s+v,0);
 assert.equal(b.totalUnits,units);assert.equal(b.total,units/scale);assert.equal(b.displayScore,display(units));assert.equal(b.meetsTarget,units>92*scale);
 const a=b.amazon,selected=a.attempts.find(t=>t.verified&&t.url===a.url&&(t.globalCount??t.topCount)===a.count&&t.retrievedAt===a.verifiedAt);
 assert(selected&&selected.titleMatch&&selected.authorMatch&&!selected.languageMismatch);assert.equal(a.confidence,'high');assert.equal(a.year,b.originalYear);
 assert.equal(a.count,Math.max(...a.attempts.filter(t=>t.verified).map(t=>t.globalCount??t.topCount)));
 for(const t of a.attempts.filter(t=>t.verified)){
  assert(t.titleMatch&&t.authorMatch&&!t.languageMismatch);assert.equal(t.httpStatus,200);assert.equal(t.sha256.length,64);assert(t.evidence.length);
  if(t.topCount!==null&&t.globalCount!==null)assert.equal(t.topCount,t.globalCount);
 }
 assert(a.attempts.some(t=>t.verified&&new URL(t.requestedUrl).pathname===`/dp/${b.purchaseAsin}`));
 assert.equal(b.purchasePageVerified,a.attempts.some(t=>t.verified&&t.requestedUrl===b.purchaseUrl));
 assert(['www.amazon.de','www.amazon.com'].includes(new URL(b.purchaseUrl).hostname));
 for(const url of [b.sourceUrl,b.purchaseUrl,a.url,...b.reviews.map(r=>r[1])])assert.equal(new URL(url).protocol,'https:');
 assert.equal(b.notes.length,10);assert(b.eligibility&&b.objection&&b.theme&&b.case);
}
assert.equal(d.books.find(b=>b.id==='efficiency').displayScore,'88.18');
const fabric=d.books.find(b=>b.id==='fabric').amazon;
assert.equal(fabric.count,1061);assert.equal(fabric.marketplace,'www.amazon.com');assert.equal(fabric.stars,4.7);
assert.deepEqual(fabric.starsEvidence,require('./discovery_amazon_261018.json').find(b=>b.id==='postrel').starsEvidence);
const table=(text,header)=>{
 const lines=text.trimEnd().split(/\r?\n/),start=lines.findIndex(l=>l.startsWith(header))+2;assert(start>1);
 let end=start;while(lines[end]?.startsWith('|'))end++;
 return lines.slice(start,end).map(line=>({line,c:line.split('|').slice(1,-1).map(s=>s.trim())}));
};
const rec=table(read('RECOMMENDED_BOOKS.md'),'| Entry date |'),oldRec=table(base.text['RECOMMENDED_BOOKS.md'],'| Entry date |');
const veto=table(read('VETOED_BOOKS.md'),'| Entry date |'),ex=read('EXCLUDED_BOOKS.md').split(/\r?\n/).filter(s=>s.startsWith('- '));
assert.equal(rec.length,1022);assert.equal(veto.length,177);assert.equal(ex.length,307);
assert.equal(read('VETOED_BOOKS.md'),base.text['VETOED_BOOKS.md']);assert.equal(read('EXCLUDED_BOOKS.md'),base.text['EXCLUDED_BOOKS.md']);
const changed=new Set(d.books.filter(b=>b.kind==='reassessment').map(key));
for(const r of oldRec){const identity=r.c[3].match(/^\[([^\]]+)\]/)[1]+' — '+r.c[2];if(!changed.has(identity))assert(rec.some(n=>n.line===r.line),'Unexpected old-row change: '+identity);}
const identities=new Set();
for(const [list,status] of [[rec,'recommended'],[veto,'vetoed']]){
 let last=Infinity;
 for(const r of list){
  assert.equal(r.c.length,status==='recommended'?6:8);assert(/^\[[^\]]+\]\([^)]+\)$/.test(r.c[3]));
  const identity=r.c[3].match(/^\[([^\]]+)\]/)[1]+' — '+r.c[2],b=lookup.get(identity);assert(b&&b.status===status);
  assert(!identities.has(identity));identities.add(identity);assert(!ex.includes('- '+identity));
  assert(b.total<=last+1e-12,'Unrounded sort: '+identity);last=b.total;
  assert.equal(r.c[4].replaceAll('*',''),d.books.includes(b)?b.displayScore:b.total.toFixed(2));
  if(d.books.includes(b)){
   assert.equal(r.c[0],b.entryDate);assert.equal(r.c[1],String(b.listYear));assert.deepEqual(r.c[5].split(',').map(Number),b.sources);
   if(b.kind==='reassessment'){
    const old=oldRec.find(r=>r.c[3].startsWith(`[${b.title}]`));assert(old);assert.equal(b.entryDate,old.c[0]);
    for(const n of old.c[5].split(',').map(Number))assert(b.sources.includes(n));
   }
  }
 }
}
assert.equal(identities.size,1199);assert.equal(rec[0].c[4],'91.40');
const sources=read('SOURCES.md').split(/\r?\n/).filter(s=>/^\| \d+ \|/.test(s));assert.equal(sources.length,113);
assert.deepEqual(sources.map(s=>Number(s.split('|')[1])),Array.from({length:113},(_,i)=>i+1));assert(read('SOURCES.md').startsWith(base.text['SOURCES.md'].trimEnd()));
const report=read(d.review),ranked=table(report,'| Quality · verdict · confidence |');assert.equal(ranked.length,15);
const sorted=[...d.books].sort((a,b)=>b.total-a.total||a.title.localeCompare(b.title,'en'));
assert.deepEqual(ranked.map(r=>r.c[4]),sorted.map(b=>`[${b.title}](${b.purchaseUrl})`));assert(ranked.every(r=>r.c.length===5));
for(const b of d.books){
 assert(report.includes(`<a id="${b.id}"></a>`));assert(sources.some(s=>s.startsWith(`| ${b.source} |`)&&s.includes(`${d.review}#${b.id}`)));
 assert.equal(rec.filter(r=>r.c[3].startsWith(`[${b.title}]`)&&r.c[2]===b.author).length,1);
}
for(const m of report.matchAll(/\]\(([^)]+)\)/g))if(!m[1].startsWith('http'))assert(fs.existsSync(m[1].split('#')[0]),'Broken local link: '+m[1]);
for(const [p,h] of Object.entries(base.historyHashes))assert.equal(sha(read(p)),h,'Historical analysis changed: '+p);
for(const [p,h] of Object.entries(base.protectedHashes))assert.equal(sha(read(p)),h,'Protected file changed: '+p);
for(const [p,h] of Object.entries(base.generatedHashes))assert.equal(sha(read(p)),h,'Concurrent main-file change: '+p);
assert.equal(Object.keys(base.historyHashes).length,28);
assert(!/to be verified by root|Parent to supply|undefined|NaN|edition to verify|would still leave Origins below/.test(report));
const result={result:'PASS',report:d.review,scored:15,newRecommendations:12,reassessed:3,above92:d.books.filter(b=>b.meetsTarget).map(b=>b.title),verifiedAmazonCounts:15,missingCountFallbacks:0,recommended:rec.length,vetoed:veto.length,excluded:ex.length,sources:sources.length,unchangedHistoricalAnalyses:28,unchangedOldRecommendationRows:1007,rounding:'exact 1/6800 units; nearest hundredth with half rounded up',rulesUnchanged:true};
fs.writeFileSync('data/tactical92_validation_261018.json',JSON.stringify(result,null,2)+'\n');console.log(JSON.stringify(result,null,2));
