import fs from 'node:fs';import crypto from 'node:crypto';import {dir,read,write} from './capture.mjs';
fs.mkdirSync(dir+'/metadata',{recursive:true});let next=0;
const only=process.argv[2]?.split(',').map(Number);
const rows=read(dir+'/pending.json').filter(b=>(!only||b.sources.some(s=>only.includes(s)))&&(!b.sources.every(s=>[259,264,265].includes(s))||(/^[A-Z0-9À-Ž]/.test(b.title)&&b.title.length>7&&b.title.length<210)));
const hash=b=>crypto.createHash('sha256').update(b.title+'|'+b.author).digest('hex').slice(0,16);
write(dir+'/metadata-inputs'+(only?'-selected':'')+'.json',rows.map(b=>({...b,file:hash(b)+'.json'})));
async function worker(){while(next<rows.length){let b=rows[next++],file=dir+'/metadata/'+hash(b)+'.json';if(fs.existsSync(file))continue;
let url='https://openlibrary.org/search.json?title='+encodeURIComponent(b.title.replace(/\s*\([^)]*(?:#|Edition|Series|Classics|Books)[^)]*\)/gi,'').split(':')[0])+(b.author?'&author='+encodeURIComponent(b.author.replace(/,?\s*eds?\.$/,'').split(' and ')[0]):'')+'&limit=3&fields=key,title,author_name,first_publish_year,isbn,language,subject';
let out={title:b.title,author:b.author,url,retrievedAt:new Date().toISOString()};try{let r=await fetch(url,{signal:AbortSignal.timeout(20000)});out.status=r.status;out.search=await r.json();if(out.search.docs?.[0]?.key){let wr=await fetch('https://openlibrary.org'+out.search.docs[0].key+'.json',{signal:AbortSignal.timeout(20000)});if(wr.ok)out.work=await wr.json();}}catch(e){out.error=String(e)}write(file,out);if(next%25===0)console.log(next+'/'+rows.length,b.title);}}
await Promise.all(Array.from({length:8},worker));
