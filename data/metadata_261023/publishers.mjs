import fs from 'node:fs';
import zlib from 'node:zlib';
const dir='data/metadata_261023/',read=p=>JSON.parse(fs.readFileSync(p));
const manual=read(dir+'manual.json'),state=fs.existsSync(dir+'publishers.json')?read(dir+'publishers.json'):{};
for(const file of ['manual-more.json','manual-final.json','manual-last.json'])for(const [id,,,,,url] of read(dir+file))if(/penguin|hachette|macmillan|bloomsbury|wwnorton|springer|shelterharbor|press\.jhu/.test(url))manual[id]={url};
Object.assign(manual,{
 'g0358':{url:'https://www.harpercollins.com/products/winning-jack-welchsuzy-welch'},
 'intake-0407':{url:'https://www.hachettebookgroup.com/titles/harold-evans/they-made-america/9780316013857/'},
 'intake-0548':{url:'https://www.hachette.co.uk/titles/paul-carter/dont-tell-mum-i-work-on-the-rigs/9781857883770/'},
 'intake-0365':{url:'https://www.martinlindstrom.com/our-books/buyology/'},
 'intake-0093':{url:'https://www.penguinrandomhouse.com/books/187633/the-secret-history-of-the-mongol-queens-by-jack-weatherford/'}
});
for(const [id,e] of Object.entries(manual)){
 if(state[id]||/\.pdf$|openlibrary|obnb|foyles/.test(e.url))continue;
 const source={url:e.url,retrieved:new Date().toISOString(),file:dir+'raw/publisher-'+id+'.html.gz'};
 try{const r=await fetch(e.url,{signal:AbortSignal.timeout(25000)});source.status=r.status;const html=await r.text();fs.writeFileSync(source.file,zlib.gzipSync(html));state[id]={source,links:[...html.matchAll(/href=["']([^"']+)["']/g)].map(m=>m[1].replaceAll('&amp;','&')).filter(u=>/amazon|\.pdf|excerpt|contents|sample/i.test(u))};}catch(e){state[id]={source,error:e.message};}
 fs.writeFileSync(dir+'publishers.json',JSON.stringify(state,null,2)+'\n');console.log(id,state[id].links);await new Promise(r=>setTimeout(r,5000));
}
