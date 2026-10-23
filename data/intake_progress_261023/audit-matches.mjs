import fs from 'node:fs';
const d='data/intake_progress_261023',read=f=>JSON.parse(fs.readFileSync(f));
fs.mkdirSync(d+'/match-metadata',{recursive:true});const rows=read(d+'/matched.json').filter(r=>r.id);let next=0;
const norm=s=>String(s||'').normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z]/g,'');
async function worker(){while(next<rows.length){const r=rows[next++],isbn=r.url?.match(/\/dp\/([0-9X]{10})/)?.[1];if(!r.author&&isbn){let file=d+'/match-metadata/'+isbn+'.json';if(!fs.existsSync(file)){try{let url='https://openlibrary.org/search.json?isbn='+isbn+'&limit=1&fields=title,author_name,key';let z=await fetch(url,{signal:AbortSignal.timeout(15000)});fs.writeFileSync(file,JSON.stringify({url,...await z.json()}));}catch{}}let z;try{z=read(file).docs?.[0]}catch{}if(z)r.metadata=z;}}
}
await Promise.all([worker(),worker(),worker()]);
const flags=rows.filter(r=>{let a=r.author||r.metadata?.author_name?.join(';');if(!a)return true;return !a.split(/[;&]| and /).some(s=>{let parts=s.includes(',')?s.split(',')[0].split(' '):s.trim().split(' ');return parts.some(w=>norm(w).length>3&&norm(r.matchedAuthor).includes(norm(w)));});});
fs.writeFileSync(d+'/match-audit.json',JSON.stringify({rows,flags},null,2));console.log(flags.map(r=>({source:r.source,title:r.title,author:r.author,metadata:r.metadata,id:r.id,matched:r.matchedTitle,matchedAuthor:r.matchedAuthor})));
