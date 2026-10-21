import fs from 'node:fs';
import crypto from 'node:crypto';
const dir = 'data/books_guru_261021/';
const slugs = ['bill-gates','jeff-bezos','warren-buffett','elon-musk','larry-ellison','steve-jobs','nassim-nicholas-taleb','ray-dalio','steven-pinker','andy-frisella','justin-kan','mukesh-ambani','vitalik-buterin','carl-icahn','marc-andreessen','steven-bartlett','charlie-munger','julie-zhuo','kevin-simler','balaji-srinivasan','bill-gurley','alex-hormozi','andrej-karpathy','ken-griffin','david-friedberg','blas-moros'];
fs.mkdirSync(dir+'raw',{recursive:true});
let sources=[];
if(process.argv.includes('--next')){
  const slug='bill-gates-page1',url='https://books-guru.com/experts/bill-gates?page=1',retrievedAt=new Date().toISOString();
  const response=await fetch(url,{signal:AbortSignal.timeout(45000)}),html=await response.text();
  const rawFile=dir+'raw/'+slug+'.html';fs.writeFileSync(rawFile,html);
  const meta={sourceId:148,slug,url,retrievedAt,status:response.status,finalURL:response.url,bytes:Buffer.byteLength(html),sha256:crypto.createHash('sha256').update(html).digest('hex'),rawFile};
  fs.writeFileSync(dir+'raw/'+slug+'.meta.json',JSON.stringify(meta,null,2)+'\n');console.log(meta);process.exit();
}
for(let i=0;i<slugs.length;i++){
  const slug=slugs[i],url='https://books-guru.com/experts/'+slug;
  const existing=dir+'raw/'+slug+'.html';
  if(fs.existsSync(existing)){console.log('cached',slug);continue;}
  const retrievedAt=new Date().toISOString();
  try {
    const response=await fetch(url,{signal:AbortSignal.timeout(45000)});
    const html=await response.text();fs.writeFileSync(existing,html);
    const meta={sourceId:148+i,slug,url,retrievedAt,status:response.status,finalURL:response.url,bytes:Buffer.byteLength(html),sha256:crypto.createHash('sha256').update(html).digest('hex'),rawFile:existing};
    fs.writeFileSync(dir+'raw/'+slug+'.meta.json',JSON.stringify(meta,null,2)+'\n');
    console.log(meta.sourceId,slug,meta.status,meta.bytes);
  }catch(e){fs.writeFileSync(dir+'raw/'+slug+'.error.json',JSON.stringify({sourceId:148+i,url,retrievedAt,error:String(e)},null,2)+'\n');console.log(slug,String(e));}
}
