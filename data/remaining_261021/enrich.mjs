import fs from 'node:fs';
const dir='data/remaining_261021/',read=p=>JSON.parse(fs.readFileSync(p)),write=(p,v)=>fs.writeFileSync(p,JSON.stringify(v,null,2)+'\n');
const pending=read(dir+'pending-start.json'),state=fs.existsSync(dir+'enriched.json')?read(dir+'enriched.json'):{};
const norm=s=>String(s||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]/g,' ').replace(/\s+/g,' ').trim();
const core=s=>norm(s.split(/:|\(|\s[—–]\s/)[0]),words=s=>new Set(norm(s).split(' ').filter(x=>x.length>2));
function rank(b,d){if(!d.author_name||/summary|analysis of|workbook for/i.test(d.title))return 0;const a=words(b.author),aok=!b.author||d.author_name.some(n=>norm(n).split(' ').some(x=>x.length>3&&a.has(x)));if(!aok)return 0;const x=core(b.title),y=core(d.title);if(x===y)return 1;const xx=words(x),yy=words(y),n=[...xx].filter(w=>yy.has(w)).length;return 2*n/(xx.size+yy.size);}
let last=0;async function get(url){await new Promise(r=>setTimeout(r,Math.max(0,1400-(Date.now()-last))));last=Date.now();const r=await fetch(url,{headers:{'User-Agent':'PersonalBookCatalogResearch/1.0'},signal:AbortSignal.timeout(15000)});if(r.status===429)throw Error('RATE_LIMIT');const text=await r.text();return {url,status:r.status,retrieved:new Date().toISOString(),text};}
for(const b of pending){if(state[b.batchId])continue;const meta=fs.existsSync(dir+'metadata.json')?read(dir+'metadata.json'):{};let docs=meta[b.batchId]?.docs||[],captures=[];let ranked=docs.map(d=>({d,rank:rank(b,d)})).sort((a,b)=>b.rank-a.rank);
 try{if(b.author&&(!ranked.length||ranked[0].rank<.8)){const author=b.author.split(/,|;|\s&\s|\sand\s|\//)[0].trim(),title=b.title.split(/:|\(|\s[—–]\s/)[0];const capture=await get('https://openlibrary.org/search.json?'+new URLSearchParams({title,author,limit:5,fields:'key,title,subtitle,author_name,first_publish_year,isbn,language,subject,edition_key'}));captures.push({...capture,text:undefined});fs.writeFileSync(dir+'raw/'+b.batchId+'-author-search.json',capture.text);docs=JSON.parse(capture.text).docs||[];ranked=docs.map(d=>({d,rank:rank(b,d)})).sort((a,b)=>b.rank-a.rank);}
 const best=ranked[0];let work=null;
 if(b.author&&best?.rank>=.8){const capture=await get('https://openlibrary.org'+best.d.key+'.json');captures.push({...capture,text:undefined});fs.writeFileSync(dir+'raw/'+b.batchId+'-work.json',capture.text);if(capture.status===200)work=JSON.parse(capture.text);}
 state[b.batchId]={candidate:best?.d||null,matchScore:best?.rank||0,authorless:!b.author,identityAccepted:false,description:typeof work?.description==='string'?work.description:work?.description?.value||null,subjects:work?.subjects||best?.d?.subject||[],work,captures};
 }catch(e){if(String(e).includes('RATE_LIMIT')){console.log('Rate limit; paused.');break;}state[b.batchId]={error:String(e),identityAccepted:false,captures};}
 write(dir+'enriched.json',state);if(Object.keys(state).length%25===0)console.log('Enriched',Object.keys(state).length,b.title);
}
console.log('Saved',Object.keys(state).length);
