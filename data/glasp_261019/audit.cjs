const fs=require('fs'),assert=require('assert/strict');
const inv=require('./inventory.json');
const files=fs.readdirSync(__dirname).filter(f=>/^assess_.*\.cjs$/.test(f));
const all=files.flatMap(f=>require('./'+f).map(b=>({...b,assessmentFile:f})));
const max=[20,17,15,12,10,9,7,5,3,2],seen=new Set();
for(const b of all){
 assert(!seen.has(b.id),'duplicate '+b.id);seen.add(b.id);
 assert(inv.books.some(x=>x.id===b.id),'unknown '+b.id);
 assert(['recommended','vetoed','excluded','nonbook'].includes(b.status),'status '+b.id);
 assert(b.reason&&b.evidence?.length,'evidence '+b.id);
 if(['excluded','nonbook'].includes(b.status)){assert(!b.raw,'excluded score '+b.id);continue;}
 assert.equal(b.raw.length,10,b.id);b.raw.forEach((x,i)=>assert(Number.isFinite(x)&&x>=0&&x<=max[i],b.id+' '+i));
 assert(Number.isFinite(b.year),'year '+b.id);
 assert([0,-10].includes(b.T11)&&[0,-10].includes(b.T12),'theme '+b.id);
 assert(b.periodEnd===null||Number.isFinite(b.periodEnd),'endpoint '+b.id);
 assert(b.rationale||b.notes?.length===10,'criterion rationale '+b.id);
 if(b.status==='vetoed')assert(b.veto&&b.vetoConfidence,'veto '+b.id);
}
console.log(JSON.stringify({assessed:all.length,total:inv.books.length,status:Object.fromEntries(['recommended','vetoed','excluded','nonbook'].map(s=>[s,all.filter(b=>b.status===s).length])),categories:inv.sources.map(s=>({category:s.category,total:inv.books.filter(b=>b.appearances[0].category===s.category).length,assessed:inv.books.filter(b=>b.appearances[0].category===s.category&&seen.has(b.id)).length})),unmatchedSourceLinks:all.flatMap(b=>b.evidence.filter(u=>u.startsWith('https://glasp.co/books/p/')&&!inv.books.find(x=>x.id===b.id).appearances.some(a=>a.url===u)).map(url=>({id:b.id,url,actual:inv.books.find(x=>x.id===b.id).appearances.map(a=>a.url)})))},null,2));
