import fs from 'node:fs';
const q='title:("The Physicists") AND creator:(Kevles) AND mediatype:texts';
const url='https://archive.org/advancedsearch.php?'+new URLSearchParams({q,output:'json',rows:'5','fl[]':'identifier,title,creator,description,language,isbn,date'});
const r=await fetch(url,{signal:AbortSignal.timeout(20000)});const text=await r.text();
fs.writeFileSync('data/top500_261024/ia-probe.json',JSON.stringify({url,status:r.status,retrieved:new Date().toISOString(),text}));
console.log(r.status,text.slice(0,8000));
