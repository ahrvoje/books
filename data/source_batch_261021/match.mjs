import fs from 'node:fs';
const dir='data/source_batch_261021/',read=p=>JSON.parse(fs.readFileSync(p));
const norm=s=>String(s||'').normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/&/g,' and ').replace(/[^a-z0-9]+/g,' ').trim().replace(/^(a|an|the) /,'');
const short=s=>norm(s.split(/:|\s[—–]\s|\(/)[0]);
const c=read(read('data/catalog.json').compiled),books=[...c.currentBooks,...c.exclusions],input=[...read(dir+'matched.json'),...read(dir+'fallback-extracted.json')];
const rows=new Map();
for(const b of input){
if(!b.match){const a=norm(b.author).split(' ').filter(s=>s.length>3),t=short(b.title),candidates=books.filter(e=>{const et=short(e.title);const same=t===et||(Math.min(t.length,et.length)>15&&(t.startsWith(et+' ')||et.startsWith(t+' ')));return same&&(!a.length||norm(e.author).split(' ').some(s=>a.includes(s)));});if(candidates.length===1){b.match=candidates[0].id;b.matchMethod='Title core and shared author token; needs identity review';}}
const key=b.match||short(b.title)+'|'+norm(b.author);if(!rows.has(key))rows.set(key,{key,title:b.title,author:b.author,match:b.match||null,mentions:[]});rows.get(key).mentions.push(b);
}
const all=[...rows.values()];all.forEach((b,i)=>b.batchId='u'+String(i+1).padStart(4,'0'));
fs.writeFileSync(dir+'works.json',JSON.stringify(all,null,2));
fs.writeFileSync(dir+'new-list.txt',all.filter(b=>!b.match).map(b=>`${b.batchId}\t${b.title}\t${b.author}\t${[...new Set(b.mentions.map(m=>m.source))]}`).join('\n'));
console.log({mentions:input.length,unique:all.length,existing:all.filter(b=>b.match).length,new:all.filter(b=>!b.match).length});
