const fs=require('fs'),path=require('path');
const root=__dirname,inv=require('./inventory.json'),prior=require('./prior.json');
const norm=s=>String(s||'').normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]/g,'');
const all=fs.readdirSync(root).filter(f=>/^assess_.*\.cjs$/.test(f)).flatMap(f=>require(path.join(root,f)).map(a=>({...a,assessmentFile:f})));
const by=new Map(all.map(a=>[a.id,a]));
const review=[];
for(const b of inv.books){const a=by.get(b.id);if(!a)continue;
 const direct=a.priorId?prior.find(p=>p.id===a.priorId):null;
 const candidates=b.priorCandidates.filter(c=>c.id);
 const exact=prior.filter(p=>norm(p.title)===norm(a.title||b.title));
 if(!direct&&(!candidates.length&&exact.length||candidates.length>1))review.push({id:b.id,title:b.title,author:b.author,corrected:a.title,explicit:a.priorId,candidates,exact:exact.map(p=>({id:p.id,title:p.title,author:p.author,status:p.status}))});
}
fs.writeFileSync(path.join(root,'identity_review.json'),JSON.stringify(review,null,2));
console.log(JSON.stringify({assessed:all.length,identityReview:review},null,2));
