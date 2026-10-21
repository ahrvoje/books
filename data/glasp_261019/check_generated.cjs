const fs=require('fs'),c=require('./compiled.json'),p=require('./prior.json'),b=require('./baseline.json');
const current=new Map(c.currentBooks.map(x=>[x.id,x]));
const diffs=p.filter(x=>current.has(x.id)&&!current.get(x.id).sourceIds.length&&Math.abs(current.get(x.id).total-x.total)>1e-8).map(x=>({title:x.title,was:x.total,now:current.get(x.id).total}));
const oldVeto=c.currentBooks.filter(x=>x.status==='vetoed'&&!x.sourceIds.length);
console.log(JSON.stringify({unchangedScoreErrors:diffs,oldVetoMissingReasons:oldVeto.filter(x=>!x.reason&&!x.eligibility&&!x.case&&!x.priorReasonBlock).map(x=>x.title),counts:{...c.audit,pending:c.audit.pending.length}},null,2));
