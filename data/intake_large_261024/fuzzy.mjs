import fs from 'node:fs';
const read=p=>JSON.parse(fs.readFileSync(p,'utf8')),dir='data/intake_large_261024',c=read(read('data/catalog.json').compiled),all=[...c.currentBooks,...c.exclusions];
const n=s=>s.normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,' ').trim();
const words=s=>n(s).split(' ').filter(w=>w.length>2&&!['the','and','for','with','from','into','edition','book'].includes(w));
const idx=all.map(b=>({b,t:words(b.title),a:words(b.author)})),out=[];
for(const x of read(dir+'/unmatched.json')){const t=words(x.title),a=words(x.author);const hits=idx.filter(y=>y.a.some(w=>a.includes(w))).map(y=>{const common=t.filter(w=>y.t.includes(w)).length;return {b:y.b,score:common/Math.max(1,new Set([...t,...y.t]).size)};}).filter(y=>y.score>=0.4).sort((a,b)=>b.score-a.score).slice(0,2);if(hits.length)out.push({index:x.index,source:x.source,title:x.title,author:x.author,candidates:hits.map(y=>({id:y.b.id,title:y.b.title,author:y.b.author,status:y.b.status,score:y.score}))});}
fs.writeFileSync(dir+'/fuzzy.json',JSON.stringify(out,null,2));console.log(out.map(x=>x.index+' | '+x.source+' | '+x.title+' ['+x.author+'] => '+x.candidates.map(y=>y.id+' '+y.title+' ['+y.author+']').join(' OR ')).join('\n'));
