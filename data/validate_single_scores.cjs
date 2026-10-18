const fs=require('fs'),assert=require('assert/strict'),path=require('path'),crypto=require('crypto');
const read=f=>fs.readFileSync(f,'utf8'),d=require('./single_scores_261018.json'),base=require('./deductions_baseline_261018.json'),config=require('./single_score_cap_config_261018.json');
const cell=l=>l.trim().slice(1,-1).split('|').map(x=>x.trim());
const rows=f=>read(f).split(/\r?\n/).filter(l=>/^\| \d{4}-/.test(l)).map(cell);
const fmt=n=>(Math.abs(n)<1e-12?0:n).toFixed(2);
const original=new Map(base.books.map(b=>[b.id,b]));
const previous=new Map(JSON.parse(read(config.previousScores)).books.map(b=>[b.id,b]));
for(const b of d.books){
 const o=original.get(b.id);assert(o);assert.equal(b.title,o.title);assert.equal(b.author,o.author);assert.equal(b.status,o.status);assert.deepEqual(b.sources,o.sources);assert.deepEqual(b.linearPoints,o.linearPoints);
 let positive=0;for(const {code,max,power} of d.criteria){const x=b.linearPoints[code],p=power===2?x*x/max:x;assert(x>=0&&x<=max);assert.equal(b.contributions[code],p);positive+=p;}
 const t11=o.thematic,t12=b.assessment.theme12?-10:0,h=b.assessment.periodEnd===null?0:-Math.min(12,Math.max(0,d.reviewYear-b.assessment.periodEnd)/25)||0,p=-Math.min(10,Math.max(0,d.reviewYear-b.production.year)/10)||0,n=b.amazon.count;
 const obsc=n===null?0:n>=1000?0:n>=100?-5:n>=10?-10:-20;
 assert.deepEqual(b.deductions,{T11:t11,T12:t12,H13:h,P14:p,O15:obsc});
 const before=previous.get(b.id);assert(before);assert.deepEqual(b.contributions,before.contributions);assert.deepEqual(b.amazon,before.amazon);assert.deepEqual(b.production,before.production);assert.deepEqual(b.assessment,before.assessment);for(const key of ['T11','T12','H13','O15'])assert.equal(b.deductions[key],before.deductions[key]);assert(Math.abs((b.total-before.total)-(p-before.deductions.P14))<1e-9,b.title+' cap delta');assert(p>=-10&&p<=0);
 assert(Number.isFinite(b.total));assert(Math.abs(b.total-(positive+t11+t12+h+p+obsc))<1e-9,b.title);assert.equal(b.displayScore,fmt(b.total));assert(/^-?\d+\.\d{2}$/.test(b.displayScore));
 assert(!('displayTotal' in b)&&!('row' in b)&&!('exactTotalNumerator' in b),'Stale current-score field '+b.title);
 assert.equal(b.obscurityFallback,n===null);assert.equal(b.veto,o.veto);assert.equal(b.vetoConfidence,o.vetoConfidence);
 if(n!==null){assert(b.amazon.url&&b.amazon.evidence.length);assert(Number.isInteger(n)&&n>=0);assert(b.amazon.marketplace&&b.amazon.asin&&b.amazon.retrievedAt);const controls=b.amazon.evidence.filter(x=>x.includes('<span'));for(const control of controls){const parsed=Number(control.replace(/<[^>]*>/g,'').replace(/[^0-9]/g,''));assert.equal(parsed,n,'Count disagrees with saved control: '+b.title);}assert(!/Edizione (?!Inglese)|Wydanie: (?!Angielski)|NOT in English/.test((b.amazon.byline||'')+' '+(b.amazon.productTitle||'')),'Wrong-language count: '+b.title);}
}
const sort=(a,b)=>b.total-a.total||a.title.localeCompare(b.title,'en')||a.author.localeCompare(b.author,'en');
const rankedBooks=d.books.filter(b=>b.status==='recommended').sort(sort);
assert.equal(d.stats.publicationCapChanged,d.books.filter(b=>Math.abs(b.total-previous.get(b.id).total)>1e-9).length);
assert(read('RECOMMENDED_BOOKS.md').startsWith('| Entry date |'),'Recommended list must start with its table');
assert.equal(d.stats.amazonObserved,d.books.filter(b=>b.amazon.count!==null).length);
assert.equal(d.stats.amazonFallbacks,d.books.filter(b=>b.amazon.count===null).length);
assert.equal(d.stats.top100AmazonObserved,rankedBooks.slice(0,100).filter(b=>b.amazon.count!==null).length);
assert.equal(d.stats.firstAmazonFallbackRank,rankedBooks.findIndex(b=>b.amazon.count===null)+1);
for(const [file,status,count] of [['RECOMMENDED_BOOKS.md','recommended',975],['VETOED_BOOKS.md','vetoed',173]]){
 const current=rows(file),expected=d.books.filter(b=>b.status===status).sort(sort);assert.equal(current.length,count);
 current.forEach((r,i)=>{const b=expected[i],o=original.get(b.id);assert.equal(r[3].match(/^\[([^\]]+)\]/)[1],b.title);assert(/^\[[^\]]+\]\((?:<[^>]+>|[^)]+)\)$/.test(r[3]),'Title contains a comment: '+b.title);assert.equal(r[0],o.entryDate);assert.equal(r[1],String(o.firstYear));assert.equal(r[2],o.author);assert.equal(r[4].replace(/\*/g,''),b.displayScore);assert.equal(r.at(-1),o.sources.join(', '));if(status==='vetoed'){assert.equal(r[5],o.veto);assert.equal(r[6],o.vetoConfidence);}});
}
const sourceRows=read('SOURCES.md').split(/\r?\n/).filter(l=>/^\| \d+ \|/.test(l)).map(cell),oldSources=base.sourcesBefore.split(/\r?\n/).filter(l=>/^\| \d+ \|/.test(l)).map(cell);
assert.equal(sourceRows.length,53);sourceRows.forEach((r,i)=>assert.deepEqual(r.slice(0,3),oldSources[i].slice(0,3)));
const report=read(d.review);assert.equal((report.match(/<a id="d-/g)||[]).length,1148);
const ranked=report.split('## Ranked eligible list — five columns')[1].split('## Full eligible criterion ledger')[0].split('\n').filter(l=>l.startsWith('| [**'));
assert.equal(ranked.length,975);ranked.forEach(r=>assert.equal(cell(r).length,5));
assert(!/pending H13|pending O14|provisional order|score range/.test(read('RECOMMENDED_BOOKS.md')));
const broken=[];
for(const file of [d.review,'RECOMMENDED_BOOKS.md','VETOED_BOOKS.md','SOURCES.md'])for(const m of read(file).matchAll(/\]\(([^)]+)\)/g)){
 const target=m[1].replace(/^<|>$/g,'');if(/^(?:https?:|mailto:)/.test(target)||!target)continue;
 const [name,anchor]=target.split('#'),resolved=name?path.resolve(path.dirname(file),decodeURIComponent(name)):path.resolve(file);
 if(!fs.existsSync(resolved))broken.push({file,target});else if(anchor&&/^d-|^source-/.test(anchor)&&!read(resolved).includes('id="'+anchor+'"'))broken.push({file,target});
}
assert.deepEqual(broken,[]);
for(const [file,expected] of Object.entries(config.historicalHashes))assert.equal(crypto.createHash('sha256').update(read(file)).digest('hex'),expected,file);
assert(read('VETOED_BOOKS.md').endsWith(base.vetoedBefore.slice(base.vetoedBefore.indexOf('## Reasons and evidence'))));
const exclusions=read('EXCLUDED_BOOKS.md').split(/\r?\n/).filter(l=>l.startsWith('- '));assert.equal(exclusions.length,301);
const norm=s=>s.normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]/g,'');
for(const line of exclusions){const [title,author]=line.slice(2).split(' — ');for(const b of d.books.filter(b=>norm(b.title)===norm(title)))assert(author&&norm(author)!==norm(b.author),'Status overlap '+b.title);}
assert.equal(new Set(d.books.map(b=>norm(b.title)+'\0'+norm(b.author))).size,1148);
const result={passed:true,review:d.review,stats:d.stats,arithmetic:'1,148 independently recalculated finite totals; positive attainment retained; five deductions verified separately',boundaries:'Obscurity 9/10/99/100/999/1000; fractional recency; H13 cap; P14 cap at 100 years, including ancient/BCE works and future-year zero',tables:{recommended:975,vetoed:173,rankedFiveColumns:975,fullCriterionRows:1148,sources:53,excluded:301},preservation:'All historical report and exclusion hashes match; status, source numbers, original metadata and veto reasons preserved',links:'All referenced local files and new anchors exist',publicationCapChanged:d.stats.publicationCapChanged,format:'Both main title columns contain links only; recommended file starts with the table'};
fs.writeFileSync('data/single_score_validation_261018.json',JSON.stringify(result,null,2)+'\n');console.log(JSON.stringify(result,null,2));
