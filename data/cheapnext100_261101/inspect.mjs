import fs from 'node:fs';
const file=process.argv[2]||'candidates',lo=+(process.argv[3]||0),hi=+(process.argv[4]||20),items=JSON.parse(fs.readFileSync('data/cheapnext100_261101/'+file+'.json'));
for(let i=lo;i<Math.min(hi,items.length);i++){const x=items[i];console.log(JSON.stringify({i,key:x.key,id:x.id,title:x.title,author:x.author,kind:x.kind,count:x.count,evidence:x.evidence,ranges:x.ranges,sourceTitle:x.sourceTitle,url:x.url,lead:x.sourceText.slice(0,300)}));}
