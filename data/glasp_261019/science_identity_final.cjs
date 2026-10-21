const fs=require('fs'),p=__dirname,prior=require('./prior.json'),inv=require('./inventory.json').books;
const a=fs.readdirSync(p).filter(f=>/^assess_(science|politics|economics)_/.test(f)&&!f.includes('_tail_')).flatMap(f=>require(p+'/'+f));
const norm=s=>(s||'').normalize('NFKD').replace(/\p{Diacritic}/gu,'').toLowerCase().replace(/[^a-z0-9]/g,'');
const stem=s=>norm((s||'').split(':')[0].replace(/^(the|an|a)\s+/i,''));
for(const x of a){
 if(x.priorId)continue;
 const b=inv.find(b=>b.id===x.id),title=x.title||b.title,author=x.author||b.author;
 for(const y of prior){
  const t=stem(title),v=stem(y.title),aa=norm(author),ab=norm(y.author);
  if((t===v)||(t.length>8&&v.length>8&&(t.startsWith(v)||v.startsWith(t))&&(aa.includes(ab)||ab.includes(aa))))
   console.log(JSON.stringify({id:x.id,title,author,status:x.status,priorId:y.id,priorTitle:y.title,priorAuthor:y.author,priorStatus:y.status}));
 }
}
