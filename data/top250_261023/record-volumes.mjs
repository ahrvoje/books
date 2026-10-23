import fs from 'node:fs';
const dir='data/top250_261023/';
const definitions={'intake-0190':['I','II','III'],'progress-0669':['I','II']};
for(const file of [dir+'manual-26.json',dir+'manual-10.json']){
 const data=JSON.parse(fs.readFileSync(file));
 for(const[id,volumes]of Object.entries(definitions))if(data[id])data[id].referenceRecord.ranges.forEach((r,i)=>r.volume=volumes[i]);
 fs.writeFileSync(file,JSON.stringify(data,null,2)+'\n');
}
for(const file of ['site/reference-pages.json',dir+'candidate-reference-pages.json']){
 const data=JSON.parse(fs.readFileSync(file));
 for(const[id,volumes]of Object.entries(definitions))data[id].ranges.forEach((r,i)=>r.volume=volumes[i]);
 fs.writeFileSync(file,JSON.stringify(data,null,2)+'\n');
}
const review=JSON.parse(fs.readFileSync(dir+'review.json'));
for(const b of review)if(definitions[b.id])b.reference.ranges.forEach((r,i)=>r.volume=definitions[b.id][i]);
fs.writeFileSync(dir+'review.json',JSON.stringify(review,null,2)+'\n');
