import fs from 'node:fs/promises';
const dir='data/sources_261020/hn';
const assigned=[[33792217,128],[40864249,129],[39057219,130],[38556188,132],[42157034,133],[36581241,134],[29462663,135]];
await fs.mkdir(dir+'/raw',{recursive:true});
const decode=s=>(s||'').replace(/<p>/g,'\n\n').replace(/<br\s*\/?>/g,'\n').replace(/<a [^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/g,'$2 [$1]').replace(/<[^>]+>/g,'').replace(/&#x([a-f0-9]+);/gi,(_,v)=>String.fromCodePoint(parseInt(v,16))).replace(/&#(\d+);/g,(_,v)=>String.fromCodePoint(+v)).replace(/&quot;/g,'"').replace(/&apos;/g,"'").replace(/&gt;/g,'>').replace(/&lt;/g,'<').replace(/&amp;/g,'&').replace(/&nbsp;/g,' ');
const index=[];
for(const [id,source] of assigned) {
  const url=`https://hn.algolia.com/api/v1/items/${id}`;
  const r=await fetch(url); if(!r.ok)throw Error(r.status+' '+url);
  const raw=await r.text(); await fs.writeFile(`${dir}/raw/${id}-algolia.json`,raw);
  const root=JSON.parse(raw);
  const f=await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
  const firebase=await f.json(); await fs.writeFile(`${dir}/raw/${id}-firebase-root.json`,JSON.stringify(firebase,null,2));
  const nodes=[];function walk(n,depth){nodes.push({...n,children:undefined,depth});for(const c of n.children||[])walk(c,depth+1);}walk(root,0);
  const title=root.title||firebase.title;
  const text=`# Source ${source}: ${title}\n\nURL: https://news.ycombinator.com/item?id=${id}\nRetrieved: ${new Date().toISOString()}\nAPI: ${url}\n\n`+nodes.map(n=>`## ${n.id} | parent ${n.parent_id||'root'} | depth ${n.depth} | ${n.author||'[unavailable]'}\n\n${decode(n.text)||'[No body text]'}\n${n.url?'\nLinked URL: '+n.url+'\n':''}`).join('\n');
  await fs.writeFile(`${dir}/${source}-${id}.md`,text);
  await fs.writeFile(`${dir}/${source}-nodes.json`,JSON.stringify(nodes,null,2));
  index.push({source,id,title,url:`https://news.ycombinator.com/item?id=${id}`,retrieved:new Date().toISOString(),algoliaComments:nodes.length-1,readableComments:nodes.filter(n=>n.type==='comment'&&n.text).length,firebaseDescendants:firebase.descendants,mainUrl:firebase.url||null});
  await fs.writeFile(`${dir}/coverage.json`,JSON.stringify(index,null,2));
  console.log(index.at(-1));
}
