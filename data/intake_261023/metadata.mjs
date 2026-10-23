import fs from 'node:fs';
const d='data/intake_261023';fs.mkdirSync(d+'/metadata',{recursive:true});
const all=JSON.parse(fs.readFileSync(d+'/resolved.json'));const pending=[...new Map(all.filter(x=>!x.id).map(x=>[x.mention,x])).values()];
fs.writeFileSync(d+'/pending.json',JSON.stringify(pending,null,2));
let next=0;async function worker(){while(next<pending.length){const i=next++,b=pending[i],file=d+'/metadata/'+i+'.json';if(fs.existsSync(file))continue;
const [title,author]=b.mention.split(' — ');const url='https://openlibrary.org/search.json?title='+encodeURIComponent(title)+(author&&!author.includes('series')?'&author='+encodeURIComponent(author):'')+'&limit=3&fields=key,title,author_name,first_publish_year,isbn,language,edition_count,ratings_average,ratings_count';
try{const r=await fetch(url,{signal:AbortSignal.timeout(20000)}),j=await r.json();let work=null;if(j.docs?.[0]?.key){const wr=await fetch('https://openlibrary.org'+j.docs[0].key+'.json',{signal:AbortSignal.timeout(20000)});if(wr.ok)work=await wr.json();}
fs.writeFileSync(file,JSON.stringify({mention:b.mention,url,retrieved:new Date().toISOString(),status:r.status,search:j,work},null,2));}catch(e){fs.writeFileSync(file,JSON.stringify({mention:b.mention,url,error:String(e)}));}if(i%25===0)console.log(i,b.mention);}}
await Promise.all([worker(),worker(),worker()]);
