import {read,dir} from './capture.mjs';
const base=read('data/top500_261024/compiled.json'),old=[...base.currentBooks,...base.exclusions],q=read(dir+'/research-queue.json');
const norm=s=>s.toLowerCase().normalize('NFKD').replace(/[^a-z0-9]/g,'').replace(/^the/,'');
for(const b of q){const n=norm(b.title.split(':')[0]);if(n.length<7)continue;const hits=old.filter(o=>norm(o.title.split(':')[0])===n);if(hits.length)console.log(JSON.stringify({id:b.id,t:b.title,a:b.author,ma:b.metadata?.author,h:hits.map(o=>({id:o.id,t:o.title,a:o.author}))}));}
