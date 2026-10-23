import fs from 'node:fs';
const d='data/intake_261023';let a=JSON.parse(fs.readFileSync(d+'/raw/207-hn.json')),known=new Set();function walk(x){known.add(x.id);for(const c of x.children||[])walk(c)}walk(a);
const root=JSON.parse(fs.readFileSync(d+'/raw/207-firebase.json')),queue=[...root.kids],nodes=[];let i=0;async function worker(){while(i<queue.length){const id=queue[i++];const r=await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);const x=await r.json();nodes.push(x);if(x?.kids)queue.push(...x.kids)}}
// Each wave drains a known frontier; child IDs are retained, including deleted parents.
while(i<queue.length)await Promise.all(Array.from({length:8},worker));
fs.writeFileSync(d+'/raw/207-firebase-tree.json',JSON.stringify(nodes,null,2));
const missing=nodes.filter(x=>x&&!known.has(x.id));fs.writeFileSync(d+'/hn-missing.json',JSON.stringify(missing,null,2));console.log(missing);
const r=await fetch('https://archive.org/metadata/year-in-dev');fs.writeFileSync(d+'/raw/year-in-dev.json',await r.text());
