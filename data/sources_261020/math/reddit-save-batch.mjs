import fs from 'node:fs';
const dir='data/sources_261020/math/';
const packet=JSON.parse(fs.readFileSync(dir+'reddit-packet.json','utf8'));
const out=fs.existsSync(dir+'reddit-assessments.json')?JSON.parse(fs.readFileSync(dir+'reddit-assessments.json','utf8')):[];
const batch=JSON.parse(fs.readFileSync(process.argv[2],'utf8'));
for(const item of batch){
 const p=packet[item.index];
 if(!p)throw Error('Missing packet index '+item.index);
 const {index,...decision}=item;
 const record={id:p.id,title:p.title,author:p.author,...decision};
 const i=out.findIndex(x=>x.id===p.id);
 if(i<0)out.push(record);else out[i]=record;
}
out.sort((a,b)=>packet.findIndex(x=>x.id===a.id)-packet.findIndex(x=>x.id===b.id));
fs.writeFileSync(dir+'reddit-assessments.json',JSON.stringify(out,null,2)+'\n');
console.log({saved:out.length,total:packet.length,statuses:out.reduce((a,x)=>(a[x.status]=(a[x.status]||0)+1,a),{})});
