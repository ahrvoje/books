import fs from 'node:fs';
const root='data/sources_261020/',read=f=>JSON.parse(fs.readFileSync(f,'utf8')),prior=read('data/glasp_261019/compiled.json'),current=new Map(prior.currentBooks.map(b=>[b.id,b])),all=[];
for(const folder of ['primary','hn','math','reddit'])for(const file of fs.readdirSync(root+folder).filter(f=>f.endsWith('assessments.json')))all.push(...read(root+folder+'/'+file).map(b=>({...b,file:folder+'/'+file})));
for(const b of all){
 if(b.mergeInto)continue;
 const old=b.priorId===false?null:current.get(b.priorId||b.id);
 if(['recommended','vetoed','excluded'].includes(b.status)&&old&&!b.retainPrior)current.delete(old.id);
 if(['recommended','vetoed'].includes(b.status))current.set(b.canonicalId||old?.id||b.id,b);
}
const norm=s=>String(s||'').normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]/g,'');
const title=s=>norm(String(s).replace(/^(the|a|an) /i,'').split(/[:—]/)[0]);
const groups=new Map();
for(const b of current.values()){const k=title(b.title);if(!groups.has(k))groups.set(k,[]);groups.get(k).push({id:b.id,title:b.title,author:b.author,file:b.file||'prior'});}
const collisions=[...groups.values()].filter(g=>g.length>1);
fs.writeFileSync(root+'identity-audit.json',JSON.stringify({current:current.size,collisions},null,2)+'\n');
console.log(JSON.stringify({current:current.size,collisions:collisions.length,groups:collisions}));
