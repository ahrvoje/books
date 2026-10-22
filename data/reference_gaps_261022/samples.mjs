import fs from 'node:fs';
import {execFileSync} from 'node:child_process';
import {read,write} from '../reference_pages_261022/collect.mjs';
const dir='data/reference_gaps_261022',targets=read(`${dir}/targets.json`),ed=read('site/editions.json'),en=read('site/enrichment.json').books,out=[];
for(let i=0;i<targets.length;i+=4){await Promise.all(targets.slice(i,i+4).map(async b=>{
 const e=ed[b.id]||en[b.id]?.edition;let isbn=[...(e?.isbn13||[]),e?.id?.replace(/^(?:ISBN|ASIN|ISBN\/ASIN):/,''),...(e?.isbn10||[])].find(x=>/^(?:\d{13}|\d{9}[\dX])$/.test(x));
 if(!isbn)return;if(isbn.length===10){isbn='978'+isbn.slice(0,9);isbn+=(10-[...isbn].reduce((s,c,i)=>s+(+c)*(i%2?3:1),0)%10)%10;}
 const url=`https://cdn.penguin.co.uk/dam-assets/books/${isbn}/${isbn}-sample.pdf`,file=`${dir}/raw/sample-${b.id}.pdf`,r={id:b.id,isbn,url,file};out.push(r);
 try{if(!fs.existsSync(file)){const res=await fetch(url,{signal:AbortSignal.timeout(15000)});r.status=res.status;if(!res.ok)return;const data=Buffer.from(await res.arrayBuffer());if(data.subarray(0,4).toString()!=='%PDF')return;fs.writeFileSync(file,data);}
 execFileSync('pdftotext',['-layout',file,file+'.txt'],{timeout:20000});const text=fs.readFileSync(file+'.txt','utf8');r.hints=text.split('\n').filter(l=>/notes|bibliograph|references|index|acknowledg/i.test(l)).map(l=>l.trim());r.available=true;
 }catch(err){r.error=err.message;}
}));write(`${dir}/samples.json`,out);console.log(`${Math.min(i+4,100)}/100; ${out.filter(r=>r.available).length} samples`);}
