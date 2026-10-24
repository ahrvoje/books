import fs from 'node:fs';
for(const id of ['frackersoutrageo0000zuck','constitutionalmy0000raph']){
 const url='https://archive.org/metadata/'+id,response=await fetch(url,{signal:AbortSignal.timeout(20000)}),text=await response.text();
 fs.writeFileSync('data/top500_261024/raw/check-'+id+'.json',text);
 if(!response.ok){console.log({id,status:response.status});break;}
 const d=JSON.parse(text).metadata;console.log(JSON.stringify({id,title:d.title,creator:d.creator,isbn:d.isbn,description:d.description}));
 if(id==='frackersoutrageo0000zuck')await new Promise(r=>setTimeout(r,10000));
}
