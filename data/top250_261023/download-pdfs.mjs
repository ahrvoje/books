import fs from 'node:fs';
const dir='data/top250_261023/raw';
for(const [name,url] of [
 ['aramco-vol1','https://www.aramcolife.com/-/media/aramco-life/publications/history-books/history-book-english-v-1.pdf'],
 ['aramco-vol2','https://www.aramcolife.com/-/media/aramco-life/publications/history-books/history-book-english-v-2.pdf']
]) {
 if(fs.existsSync(dir+'/'+name+'.pdf'))continue;
 try{const r=await fetch(url,{signal:AbortSignal.timeout(60000)});console.log(name,r.status);if(r.ok){fs.writeFileSync(dir+'/'+name+'.pdf',Buffer.from(await r.arrayBuffer()));fs.writeFileSync(dir+'/'+name+'.json',JSON.stringify({url,retrieved:new Date().toISOString()}));}}catch(e){console.log(e.message)}
}
