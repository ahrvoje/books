const fs=require('fs'),path=require('path'),inv=require('./inventory.json'),prior=require('./prior.json');
const norm=s=>String(s||'').normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/&/g,' and ').replace(/[^a-z0-9]+/g,' ').trim();
const words=s=>norm(s).split(' ').filter(w=>w.length>2&&!['the','and','with','from','for'].includes(w));
const a=fs.readdirSync(__dirname).filter(f=>/^assess_.*\.cjs$/.test(f)).flatMap(f=>require(path.join(__dirname,f)));
const by=new Map(a.map(x=>[x.id,x]));
const refs=prior.map(p=>({...p,tokens:words(p.title),authors:words(p.author)}));
const out=[];
for(const b of inv.books){const s=by.get(b.id)||{};if(s.priorId||b.priorCandidates.some(c=>c.id))continue;
 const tw=words(s.title||b.title),aw=words(s.author||b.author);if(!tw.length)continue;
 for(const p of refs){if(!p.authors.some(w=>aw.includes(w)))continue;const overlap=tw.filter(w=>p.tokens.includes(w)).length,match=overlap/Math.min(tw.length,p.tokens.length);
  if(match>=0.8&&overlap>=Math.min(3,tw.length,p.tokens.length))out.push({id:b.id,title:s.title||b.title,author:s.author||b.author,status:s.status,prior:{id:p.id,title:p.title,author:p.author,status:p.status},overlap,match});
 }
}
fs.writeFileSync(path.join(__dirname,'identity_candidates.json'),JSON.stringify(out,null,2));console.log(JSON.stringify(out,null,2));
