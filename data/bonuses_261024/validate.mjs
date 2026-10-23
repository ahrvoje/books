import fs from 'node:fs';
import crypto from 'node:crypto';
import assert from 'node:assert/strict';
const d='data/bonuses_261024/',read=p=>JSON.parse(fs.readFileSync(p));
const before=read(read(d+'baseline.json').compiled),after=read(d+'compiled.json'),records=read(d+'scores.json');
assert.equal(before.currentBooks.length,after.currentBooks.length);assert.equal(records.length,after.currentBooks.length);
assert.deepEqual(before.exclusions,after.exclusions);assert.deepEqual(before.sourceBooks,after.sourceBooks);
const byId=new Map(after.currentBooks.map(b=>[b.id,b]));
for(const old of before.currentBooks){
 const b=byId.get(old.id),r=records.find(r=>r.id===old.id);assert(b&&r);
 const changed=['total','displayScore','unroundedTotal','verdict','bonuses','bonusAssessment','scoreReview'];
 for(const k of Object.keys(old).filter(k=>!changed.includes(k)))assert.deepEqual(b[k],old[k],b.id+' '+k);
 const s=new Set(old.sources).size,expectedREL=2*Math.sqrt(s-1),a=r.assessment;
 const expectedRD=a.pages>0&&a.referencePages!==null?20*a.referencePages/a.pages:0;
 assert.equal(b.bonuses.REL,expectedREL);assert.equal(b.bonuses.RD,expectedRD);
 assert(Math.abs(b.total-old.total-expectedREL-expectedRD)<1e-10,b.id+' total');
 assert.equal(r.after,b.total);assert.deepEqual(r.bonuses,b.bonuses);
 assert.equal(r.assessment.fallback,a.pages===null||a.pages<=0||a.referencePages===null);
 if(!a.fallback&&!a.sameEdition)assert.equal(a.confidence,'low');
}
const published=process.argv.includes('--published');
for(const[p,hash]of Object.entries(read(d+'inputs.json'))){
 if(published&&['RECOMMENDED_BOOKS.md','VETOED_BOOKS.md','data/catalog.json'].includes(p))continue;
 assert.equal(crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex'),hash,'Changed preserved input '+p);
}
for(const[status,file]of [['recommended','recommended.md'],['vetoed','vetoed.md']]){
 const text=fs.readFileSync(d+file,'utf8'),lines=text.split('\n').filter(l=>/^\| \d{4}-/.test(l));
 const sorted=after.currentBooks.filter(b=>b.status===status).sort((a,b)=>b.total-a.total||a.title.localeCompare(b.title));
 assert.equal(lines.length,sorted.length);
 lines.forEach((line,i)=>{assert(line.includes('['+sorted[i].title+']('));assert(!line.includes('NaN'));});
 if(published)assert.equal(fs.readFileSync(status==='recommended'?'RECOMMENDED_BOOKS.md':'VETOED_BOOKS.md','utf8'),text);
}
assert.equal((fs.readFileSync(d+'analysis.md','utf8').match(/<a id=/g)||[]).length,after.currentBooks.length);
if(published){assert.equal(read('data/catalog.json').compiled,d+'compiled.json');assert.equal(fs.readFileSync(read(d+'summary.json').report,'utf8'),fs.readFileSync(d+'analysis.md','utf8'));}
if(process.argv.includes('--browser')){
 const browser=read('site/qa-output/results.json');assert.deepEqual(browser.errors,[]);assert.deepEqual(browser.networkRequests,[]);assert.equal(browser.viewports.length,6);
 const html=fs.readFileSync('docs/index.html');assert.deepEqual(html,fs.readFileSync('site/qa-output/isolated/index.html'));
 fs.writeFileSync(d+'validation.json',JSON.stringify({checked:records.length,published,calculationTests:21,browser,htmlSha256:crypto.createHash('sha256').update(html).digest('hex')},null,2)+'\n');
}
console.log({checked:records.length,checks:'independent bonus arithmetic, totals, preserved assessments and inputs, membership, sorted ledgers, complete audit',published});
