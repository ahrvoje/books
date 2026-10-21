const fs=require('fs');
const root='data/glasp_261019/';
const seen=new Set();
const works=[];
for(const file of fs.readdirSync(root+'catalog')){
 for(const d of JSON.parse(fs.readFileSync(root+'catalog/'+file)).data?.docs||[]){
  if(!d.key||seen.has(d.key))continue;
  seen.add(d.key);works.push(d.key);
 }
}
fs.mkdirSync(root+'works',{recursive:true});
async function main(){
 let n=0;
 for(const key of works){
  const file=root+'works/'+key.split('/').pop()+'.json';
  if(fs.existsSync(file))continue;
  const url='https://openlibrary.org'+key+'.json';
  try{
   const r=await fetch(url,{signal:AbortSignal.timeout(25000),headers:{'User-Agent':'BookSourceResearch/1.0'}});
   const body=await r.text();let data;
   try{data=JSON.parse(body)}catch{data={error:body.slice(0,200)}}
   fs.writeFileSync(file,JSON.stringify({url,retrievedAt:new Date().toISOString(),status:r.status,data},null,2));
   if(++n%30===0)console.log(n+'/'+works.length);
  }catch(e){console.log(key,e.message)}
  await new Promise(r=>setTimeout(r,1100));
 }
}
main();
