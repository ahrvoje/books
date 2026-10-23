import fs from 'node:fs';
const d='data/intake_progress_261023',read=f=>JSON.parse(fs.readFileSync(f)),p=read(d+'/pending.json');
const dec=fs.readdirSync(d).filter(f=>/^decisions-\d+\.tsv$/.test(f)).flatMap(f=>fs.readFileSync(d+'/'+f,'utf8').trim().split(/\r?\n/).map(l=>l.split('|'))),done=new Set(dec.map(r=>+r[0]));
console.log('MISSING',p.filter(b=>!done.has(b.index)).map(b=>({i:b.index,title:b.title,url:b.url})));
const issues=[];for(const b of p){let m=read(d+'/metadata/'+b.index+'.json'),z=m.search?.docs?.[0],r=dec.find(r=>+r[0]===b.index);if(r?.[1]==='R'&&z?.first_publish_year&&+r[2]!==z.first_publish_year)issues.push([b.index,b.title,r[2],z.first_publish_year]);}console.log('YEAR DIFFERENCES',issues);
const matches=read(d+'/matched.json');console.log('MATCHES WITH SOURCE AUTHORS',matches.filter(r=>r.id&&r.author).map(r=>[r.source,r.title,r.author,r.id,r.matchedTitle,r.matchedAuthor]));
