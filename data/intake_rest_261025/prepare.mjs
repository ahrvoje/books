import fs from 'node:fs';
const read=p=>JSON.parse(fs.readFileSync(p,'utf8')),d='data/intake_rest_261025/',c=read(read('data/catalog.json').compiled),all=[...c.currentBooks,...c.exclusions],q=read(d+'pending-input.json');
const n=s=>s.normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,' ').trim();
const words=s=>n(s).split(' ').filter(w=>w.length>2&&!['the','and','for','with','from','into','edition','book','unknown'].includes(w));
const idx=all.map(b=>({b,t:words(b.title),a:words(b.author)})),out=[];
for(const x of q){const t=words(x.title),a=words(x.author);const hits=idx.filter(y=>y.a.some(w=>a.includes(w))).map(y=>({b:y.b,score:t.filter(w=>y.t.includes(w)).length/Math.max(1,new Set([...t,...y.t]).size)})).filter(y=>y.score>=0.25).sort((a,b)=>b.score-a.score).slice(0,3);if(hits.length)out.push({...x,candidates:hits.map(y=>({id:y.b.id,title:y.b.title,author:y.b.author,status:y.b.status,score:y.score}))});}
fs.writeFileSync(d+'fuzzy.json',JSON.stringify(out,null,2));console.log(out.map(x=>x.index+' | '+x.title+' ['+x.author+'] => '+x.candidates.map(y=>y.id+' '+y.title+' ['+y.author+']').join(' OR ')).join('\n'));
