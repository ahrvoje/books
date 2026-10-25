import fs from 'node:fs';
import assert from 'node:assert/strict';
const dir='data/intake_large_261024',read=p=>JSON.parse(fs.readFileSync(p,'utf8')),write=(p,x)=>fs.writeFileSync(p,JSON.stringify(x,null,2)+'\n');
const previous='data/intake_next_261024/compiled.json',c=read(previous),all=[...c.currentBooks,...c.exclusions],pending=read('data/intake_next_261024/pending.json');
const n=s=>String(s||'').normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/&/g,' and ').replace(/\([^)]*\)/g,'').replace(/[^a-z0-9]+/g,' ').trim().replace(/^the /,'');
const indexed=all.map(b=>({b,t:n(b.title),short:n(b.title.split(':')[0]),author:n(b.author).split(' ').filter(w=>w.length>=3&&!['unknown','with','edition','editors','and','the'].includes(w))}));
const clean=pending.map((x,index)=>{
 if(x.source!==283)return {...x,index};
 const joined=x.title+' by '+x.author,m=joined.match(/^【\d+†(.*?)】 by 【\d+†(.*?)】$/);
 assert(m,joined);return {...x,index,originalTitle:x.title,title:m[1].trim(),author:m[2].trim()};
});
const resolved=[],ambiguous=[],unmatched=[];
for(const x of clean){
 const t=n(x.title),short=n(x.title.split(':')[0]),a=' '+n(x.author)+' ';
 const hits=indexed.filter(y=>(t===y.t||t===y.short||short===y.t||short===y.short||t.startsWith(y.t+' ')&&y.t.length>12||y.t.startsWith(t+' ')&&t.length>12)&&y.author.some(w=>a.includes(' '+w+' ')));
 const exact=hits.filter(y=>y.t===t),chosen=exact.length===1?exact:hits;
 if(chosen.length===1){const b=chosen[0].b;resolved.push({...x,id:b.id,status:b.status,canonicalTitle:b.title,canonicalAuthor:b.author,matchType:chosen[0].t===t?'normalized exact title and author':'title/subtitle prefix and author'});}
 else if(chosen.length>1)ambiguous.push({...x,candidates:chosen.map(y=>({id:y.b.id,title:y.b.title,author:y.b.author,status:y.b.status}))});
 else unmatched.push(x);
}
write(dir+'/cleaned.json',clean);write(dir+'/resolved.json',resolved);write(dir+'/ambiguous.json',ambiguous);write(dir+'/unmatched.json',unmatched);
console.log(JSON.stringify({total:clean.length,resolved:resolved.length,ambiguous:ambiguous.length,unmatched:unmatched.length,exact:resolved.filter(x=>x.matchType.startsWith('normalized')).length}));
console.log('PREFIX MATCHES\n'+resolved.filter(x=>!x.matchType.startsWith('normalized')).map(x=>x.source+' | '+x.title+' => '+x.canonicalTitle+' | '+x.author+' => '+x.canonicalAuthor).join('\n'));
console.log('AMBIGUOUS\n'+JSON.stringify(ambiguous));
