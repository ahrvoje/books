import fs from 'node:fs';
const d='data/intake_complete_261025/',r=p=>JSON.parse(fs.readFileSync(p));
const c=r('data/intake_resume_261025/compiled.json'),all=[...c.currentBooks,...c.exclusions],fresh=[...r(d+'decisions.json'),...r(d+'exclusions.json')];
const words=s=>String(s).toLowerCase().normalize('NFKD').replace(/[^a-z0-9 ]/g,' ').split(/\s+/).filter(w=>w.length>2&&!['the','and','for','with','from','this','that','how','who','what','its'].includes(w));
for(const b of fresh){const bt=words(b.title),ba=words(b.author);let matches=all.map(a=>{const at=words(a.title),aa=words(a.author),over=bt.filter(w=>at.includes(w)).length;return{a,score:over/Math.min(bt.length,at.length),over,author:ba.some(w=>aa.includes(w))};}).filter(x=>x.author&&x.over>=2&&x.score>=0.65);if(matches.length)console.log(b.indices,b.title,b.author,JSON.stringify(matches.map(x=>({id:x.a.id,title:x.a.title,author:x.a.author,status:x.a.status}))));}
