import fs from 'node:fs';
const d='data/intake_261023',books=JSON.parse(fs.readFileSync(d+'/catalog-index.json'));
const norm=s=>s.normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/&/g,'and').replace(/\+/g,'plus').replace(/#/g,'sharp').replace(/[^a-z0-9]/g,'').replace(/^the/,'');
const prepared=books.map(b=>({b,n:norm(b.title),p:norm(b.title.split(':')[0]),tokens:new Set(b.title.toLowerCase().match(/[a-z]{3,}/g)||[])}));
const inv=Object.assign({},...['titles.json','titles-more.json','titles-rest.json','titles219.json'].map(f=>JSON.parse(fs.readFileSync(d+'/'+f))));
const overrides=fs.existsSync(d+'/overrides.json')?JSON.parse(fs.readFileSync(d+'/overrides.json')):{};
const out=[];
for(const [source,titles] of Object.entries(inv)) for(const mention of titles){const [t,a]=mention.split(' — '),n=norm(t);let exact=prepared.filter(b=>b.n===n).map(x=>x.b),prefix=prepared.filter(b=>b.p===n||b.n===norm(t.split(':')[0])).map(x=>x.b);let candidates=exact.length?exact:prefix;
if(a&&!a.includes('series'))candidates=candidates.filter(b=>a.split(/\s+/).some(w=>w.length>3&&norm(b.author).includes(norm(w))));
let match=candidates.length===1?candidates[0]:null;
if(Object.hasOwn(overrides,mention)) match=books.find(b=>b.id===overrides[mention])||null;
const tokens=new Set(t.toLowerCase().match(/[a-z]{3,}/g)||[]);let similar=prepared.map(p=>({b:p.b,v:[...tokens].filter(w=>p.tokens.has(w)).length/Math.max(tokens.size,p.tokens.size)})).filter(x=>x.v>=0.40).sort((a,b)=>b.v-a.v).slice(0,4).map(x=>x.b);
out.push({source:+source,mention,id:match?.id,status:match?.status,candidates:match?undefined:(candidates.length?candidates:similar)});
}
fs.writeFileSync(d+'/resolved.json',JSON.stringify(out,null,2));
let unknown=[...new Map(out.filter(x=>!x.id).map(x=>[x.mention,x])).values()];
fs.writeFileSync(d+'/unresolved.txt',unknown.map((x,i)=>`${i}. ${x.mention}\n${x.candidates.map(b=>`  ${b.id}: ${b.title} — ${b.author} [${b.status}]`).join('\n')}`).join('\n'));
console.log({mentions:out.length,matched:out.filter(x=>x.id).length,unknown:unknown.length});
