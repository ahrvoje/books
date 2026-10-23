import fs from 'node:fs';import assert from 'node:assert/strict';import crypto from 'node:crypto';
const d='data/intake_progress_261023/',read=f=>JSON.parse(fs.readFileSync(f)),a=read(d+'audit.json'),c=read(read('data/catalog.json').compiled),fresh=read(d+'new-books.json'),rows=read(d+'decisions.json');
const hash=b=>crypto.createHash('sha256').update(JSON.stringify(Object.fromEntries(Object.entries(b).filter(([k])=>k!=='sources')))).digest('hex');
const byId=new Map([...c.currentBooks,...c.exclusions].map(b=>[b.id,b]));assert.equal(byId.size,c.currentBooks.length+c.exclusions.length);
const norm=s=>s.normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]/g,'');
for(const b of a.baseline){assert.equal(hash(byId.get(b.id)),b.hash,'Existing judgment changed: '+b.id);const add=a.sourceAdditions.find(v=>v.id===b.id)?.added||[];if(add.length)assert.deepEqual(byId.get(b.id).sources,[...new Set([...b.sources,...add])].sort((x,y)=>x-y));}
for(const b of a.exclusionBaseline)assert.equal(hash(byId.get(b.id)),b.hash,'Existing exclusion changed');
const max=[20,17,15,12,10,9,7,5,3,2];
for(const b of fresh){assert(b.sources.length>0,b.title);assert.equal(new Set(b.sources).size,b.sources.length);for(const s of b.sources)assert(rows.some(r=>r.id===b.id&&r.source===s));
 if(['recommended','vetoed'].includes(b.status)){
  const expected=b.raw.reduce((t,v,i)=>t+([0,1,4].includes(i)?v*v/max[i]:v),0)+b.T11+b.T12-(b.periodEnd===null?0:Math.min(12,Math.max(0,2026-b.periodEnd)/25))-Math.min(10,Math.max(0,2026-b.year)/10)+b.O15;
  assert(Math.abs(b.total-expected)<1e-10,b.title);assert.equal(b.criteria.length,10);assert.equal(b.amazon.count,null);assert.equal(b.O15,0);assert(fs.existsSync(d+'editions/'+b.index+'.json'));
 }else assert(!Object.hasOwn(b,'total'));
 if(!['unresolved','nonbook'].includes(b.status))assert(byId.has(b.id));else assert(!byId.has(b.id));
 assert(fs.existsSync(b.analysis.split('#')[0]));assert(fs.existsSync(d+'metadata/'+b.index+'.json'));
 const duplicates=[...byId.values()].filter(v=>v.id!==b.id&&norm(v.title)===norm(b.title)&&norm(v.author||'')===norm(b.author||''));assert.equal(duplicates.length,0,'Duplicate new identity '+b.title);
}
const sourceRows=fs.readFileSync('SOURCES.md','utf8').split('\n').filter(l=>/^\| \d+ \|/.test(l));assert.equal(sourceRows.length,250);const urls=new Set(),ids=new Set();
for(const l of sourceRows){let cells=l.split('|').slice(1,-1).map(s=>s.trim());assert(!ids.has(cells[0]));ids.add(cells[0]);let u=cells[2].match(/\]\(([^)]+)\)/)[1];if(/^https?:/.test(u)){let x=new URL(u);x.hash='';for(const k of [...x.searchParams.keys()])if(k.startsWith('utm_'))x.searchParams.delete(k);u=x.toString().replace(/\/$/,'');}if(+cells[0]>=229)assert(!urls.has(u),'Source already present '+u);urls.add(u);assert(fs.existsSync(cells[3].match(/\]\(([^)]+)\)/)[1].split('#')[0]));}
for(const [status,file,col] of [['recommended','RECOMMENDED_BOOKS.md',5],['vetoed','VETOED_BOOKS.md',7]]){
 const lines=fs.readFileSync(file,'utf8').split('\n').filter(l=>/^\| \d{4}-/.test(l));assert.equal(lines.length,c.currentBooks.filter(b=>b.status===status).length);
 for(const l of lines){let s=l.split('|').slice(1,-1).map(s=>s.trim()),title=s[3].match(/^\[([^\]]+)\]/)?.[1]||s[3],b=c.currentBooks.find(b=>b.status===status&&b.author===s[2]&&(b.titleCell?.match(/^\[([^\]]+)\]/)?.[1]||b.title)===title);assert(b);const sources=s[col].match(/\d+/g).map(Number);assert.equal(new Set(sources).size,sources.length);if(b.id.startsWith('progress-'))assert.equal(+s[4],+b.total.toFixed(2));}
}
const result={passed:true,existingScoredJudgmentsPreserved:a.baseline.length,existingExclusionsPreserved:a.exclusionBaseline.length,existingSourceListsUpdated:a.sourceAdditions.length,newRecommended:a.newRecommended,newVetoed:a.newVetoed,newExcluded:a.newExcluded,registeredSources:250,newSourceReports:22};fs.writeFileSync(d+'verification.json',JSON.stringify(result,null,2)+'\n');console.log(result);
