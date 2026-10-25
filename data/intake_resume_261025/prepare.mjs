import fs from 'node:fs';
const read=p=>JSON.parse(fs.readFileSync(p,'utf8')),dir='data/intake_resume_261025';
const q=read('data/intake_finish_261025/pending.json'),c=read(read('data/catalog.json').compiled),all=[...c.currentBooks,...c.exclusions];
const norm=s=>String(s||'').normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/&/g,' and ').replace(/[^a-z0-9]+/g,' ').trim();
const title=s=>norm(s).replace(/^the /,'').split(' a very short introduction')[0];
const matches=[],rest=[];
for(const x of q){let t=title(x.title),a=norm(x.author);const candidates=all.filter(b=>{let bt=title(b.title),ba=norm(b.author);return t.length>9&&(t===bt||t.startsWith(bt+' ')||bt.startsWith(t+' '))&&(ba.includes(a)||a.includes(ba)||a.split(' ').filter(w=>w.length>3).some(w=>ba.split(' ').includes(w)));});if(candidates.length)matches.push({...x,candidates:candidates.map(b=>({id:b.id,title:b.title,author:b.author,status:b.status,sources:b.sources}))});else rest.push(x);}
fs.writeFileSync(dir+'/matches.json',JSON.stringify(matches,null,2)+'\n');fs.writeFileSync(dir+'/unmatched.json',JSON.stringify(rest,null,2)+'\n');
console.log({queue:q.length,matches:matches.length,unmatched:rest.length});
for(const x of matches)console.log(x.index+' '+x.title+' => '+x.candidates.map(b=>b.id+' '+b.title+' ['+b.status+']').join(' ; '));
