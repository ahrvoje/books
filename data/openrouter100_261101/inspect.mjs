import fs from 'node:fs';
const dir='data/openrouter100_261101/raw',kind=process.argv[2]||'amazon',lo=+(process.argv[3]||0),hi=+(process.argv[4]||9999);
for(const file of fs.readdirSync(dir).filter(f=>f.startsWith(kind+'-')&&f.endsWith('.parsed.json'))){
 const index=+file.split('-')[1];if(index<lo||index>=hi)continue;
 const p=JSON.parse(fs.readFileSync(dir+'/'+file)),raw=JSON.parse(fs.readFileSync(dir+'/'+file.replace('.parsed',''))),item=p[kind];
 const anns=raw.choices[0].message.annotations?.map(a=>a.url_citation)||[];
 const a=anns.find(a=>a.url===item?.url);
 if(item?.count==null)continue;
 console.log(JSON.stringify({file,id:p.id,title:p.title,author:p.author,item,limitation:p.limitations,source:a?{url:a.url,title:a.title,excerpts:a.content?.split('\n').filter(s=>/\d|bibliograph|references|language|author|english|isbn|pages/i.test(s)).map(s=>s.slice(0,600)).slice(0,30).join('\n')}:null}));
}
