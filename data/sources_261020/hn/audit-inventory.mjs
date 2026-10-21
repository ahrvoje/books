import fs from 'node:fs';
const dir='data/sources_261020/hn';
const decode=s=>String(s||'').replace(/<p>/g,'\n').replace(/<[^>]+>/g,'').replace(/&#x([0-9a-f]+);/gi,(_,x)=>String.fromCodePoint(parseInt(x,16))).replace(/&#([0-9]+);/g,(_,x)=>String.fromCodePoint(+x)).replace(/&quot;/g,'"').replace(/&amp;/g,'&').replace(/&lt;/g,'<').replace(/&gt;/g,'>');
const phrase=s=>' '+s.normalize('NFKD').replace(/\p{M}/gu,'').toLowerCase().replace(/[^a-z0-9]+/g,' ').trim()+' ';
const rows=fs.readFileSync(`${dir}/mentions.tsv`,'utf8').trimEnd().split(/\r?\n/).map(x=>x.split('\t'));
let added=0;
const cache={};
for(const r of rows.slice(1)){
 const nodes=cache[r[0]]??=JSON.parse(fs.readFileSync(`${dir}/${r[0]}-nodes.json`));
 const title=phrase(r[1]);
 if(title.length<13||r[1].includes('Unnamed')||r[1].includes('Collected works'))continue;
 const ids=new Set(r[3].split(','));
 for(const n of nodes){
  if(phrase(decode(n.text||'')).includes(title)&&!ids.has(String(n.id))){ids.add(String(n.id));added++;}
 }
 r[3]=[...ids].join(',');
}
fs.writeFileSync(`${dir}/mentions.tsv`,rows.map(x=>x.join('\t')).join('\n')+'\n');
console.log({additionalExactRepeatedMentions:added});
