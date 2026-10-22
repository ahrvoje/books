import {books,state,save,retrieve,accept,norm} from './collect.mjs';
const pending=books.filter(b=>state.books[b.id].pages===null&&!state.books[b.id].attempts.some(a=>a.kind==='library-title-search'));
for(let i=0;i<pending.length;i+=10){
  const batch=pending.slice(i,i+10);
  const clauses=batch.map(b=>`(title:"${b.title.split(/:| — | \/ /)[0].replace(/["()]/g,' ')}" AND author:"${norm(b.author.split(/;| and | & /)[0]).split(' ').at(-1)}")`);
  const r=await retrieve(`https://openlibrary.org/search.json?q=${encodeURIComponent(clauses.join(' OR '))}&fields=key,title,author_name,edition_key,language&limit=100&lang=en`,'search');
  const map=new Map();
  for(const b of batch){
    const title=norm(b.title.split(/:| — | \/ /)[0]).replace(/^the |^a |^an /,'');
    const surname=norm(b.author.split(/;| and | & /)[0]).split(' ').at(-1);
    const docs=(r.data?.docs||[]).filter(d=>norm(d.title.split(':')[0]).replace(/^the |^a |^an /,'')===title&&norm((d.author_name||[]).join(' ')).split(' ').includes(surname));
    const ids=[...new Set(docs.flatMap(d=>d.edition_key||[]))];
    // Older catalog records are more likely to contain MARC bibliography ranges.
    const sorted=ids.sort((a,b)=>parseInt(a.slice(2))-parseInt(b.slice(2)));
    const keys=[...new Set([...sorted.slice(0,8),...ids.slice(0,4)])];
    state.books[b.id].attempts.push({kind:'library-title-search',...r.source,candidates:keys});
    for(const k of keys){if(!map.has(k))map.set(k,[]);map.get(k).push(b);}
  }
  const keys=[...map.keys()];
  for(let j=0;j<keys.length;j+=35){
    await new Promise(r=>setTimeout(r,1100));
    const selected=keys.slice(j,j+35),r=await retrieve(`https://openlibrary.org/api/books?bibkeys=${selected.map(k=>'OLID:'+k).join(',')}&jscmd=details&format=json`,'alternates');
    for(const k of selected)for(const b of map.get(k)){const d=r.data?.['OLID:'+k]?.details;if(d)accept(b,d,r.source);state.books[b.id].attempts.push({kind:'alternate-edition',key:k,...r.source});}
  }
  console.log(`Search progress ${Math.min(i+10,pending.length)}/${pending.length}`);save();
  await new Promise(r=>setTimeout(r,1100));
}
