import fs from 'node:fs';
const dir='data/sources_261020/primary/',read=f=>JSON.parse(fs.readFileSync(f,'utf8'));
const jobs=[
 ['math-assessments.json',dir+'math-packet.json',114,['https://scottaaronson.blog/?m=202305']],
 ['math-assessments.json',dir+'math-packet.json',218,['https://www.thespacereview.com/archive/1852-1.html']],
 ['hn-tail-assessments.json','data/sources_261020/hn/transfer-root-tail.json',768,['https://www.newyorker.com/books/page-turner/ray-kurzweils-dubious-new-theory-of-mind']],
 ['hn-tail-assessments.json','data/sources_261020/hn/transfer-root-tail.json',764,['https://www.newyorker.com/magazine/1996/01/29/hackwork']],
 ['hn-tail-assessments.json','data/sources_261020/hn/transfer-root-tail.json',594,['https://www.nature.com/articles/s41559-023-01986-1','https://www.frontiersin.org/journals/forests-and-global-change/articles/10.3389/ffgc.2024.1512518/full']]
];
const loaded=new Map();
for(const [file,packet,index,refs] of jobs){
 if(!loaded.has(file))loaded.set(file,read(dir+file));
 const id=read(packet).find(b=>b.packetIndex===index).id,a=loaded.get(file).find(b=>b.id===id);
 a.evidence=[...new Set([...a.evidence,...refs])];
}
function clean(value){
 if(typeof value==='string'&&/^data\/.*\.json#/.test(value))return value.split('#')[0];
 if(Array.isArray(value))return value.map(clean);
 if(value&&typeof value==='object')return Object.fromEntries(Object.entries(value).map(([k,v])=>[k,clean(v)]));
 return value;
}
for(const file of fs.readdirSync(dir).filter(f=>f.endsWith('assessments.json'))){
 const data=loaded.get(file)||read(dir+file);
 fs.writeFileSync(dir+file,JSON.stringify(clean(data),null,2)+'\n');
}
console.log('Root critical-review links and local JSON references audited.');
