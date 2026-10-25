import fs from 'node:fs';
const d='data/shelves_261025',read=p=>JSON.parse(fs.readFileSync(p,'utf8'));
const c=read(read('data/catalog.json').compiled),scope=read(d+'/scope.json');
const norm=s=>String(s||'').normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/&/g,' and ').replace(/[^a-z0-9]+/g,' ').trim().replace(/^(the|a|an) /,'');
const base=s=>norm(s.split(/:| — | – | \(/)[0]);
const all=[...c.currentBooks,...c.exclusions].map(b=>({b,t:norm(b.title),base:base(b.title),a:norm(b.author)}));
const q=read(d+'/candidates.json').filter(b=>!scope.withdrawnSources.includes(b.source));
const old=new Map(read(d+'/matches.json').map(b=>[b.index,b.id]));
const reviewed={...read(d+'/manual-aliases.json'),...(fs.existsSync(d+'/reviewed-aliases2.json')?read(d+'/reviewed-aliases2.json'):{})};
const proposals=[],matches=[];
for(const x of q){
 let target=reviewed[x.index]||old.get(x.index);
 if(target&&all.some(z=>z.b.id===target)){matches.push({...x,id:target,basis:'Prior or individually reviewed match'});continue;}
 const t=norm(x.title),a=norm(x.author),bt=base(x.title);
 const same=all.filter(z=>z.t===t&&z.a===a);
 if(same.length===1){matches.push({...x,id:same[0].b.id,basis:'Exact normalized title and author'});continue;}
 const opts=all.filter(z=>z.t===t||z.base===bt||(t.length>12&&(z.t.startsWith(t+' ')||t.startsWith(z.t+' '))));
 if(opts.length)proposals.push({...x,options:opts.map(z=>({id:z.b.id,title:z.b.title,author:z.b.author,status:z.b.status}))});
}
fs.writeFileSync(d+'/current-matches.json',JSON.stringify(matches,null,2)+'\n');
fs.writeFileSync(d+'/current-alias-review.json',JSON.stringify(proposals,null,2)+'\n');
fs.writeFileSync(d+'/current-alias-review.tsv',proposals.map(x=>`${x.index}\t${x.source}\t${x.title} — ${x.author}\t${x.options.map(b=>b.id+': '+b.title+' — '+b.author).join(' // ')}`).join('\n'));
console.log({candidates:q.length,matches:matches.length,proposals:proposals.length});
