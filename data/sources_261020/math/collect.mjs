import fs from 'node:fs';
const dir='data/sources_261020/math/';
fs.mkdirSync(dir+'raw',{recursive:true});
const targets=[
 [136,'page','https://www.physics.purdue.edu/nlo/ReadingList.html'],
 [137,'page','https://www.reddit.com/r/math/comments/ovw4f7/what_book_made_gave_you_the_aha_moment/'],
 [137,'comments','https://www.reddit.com/comments/ovw4f7.json?limit=500&depth=20&raw_json=1'],
 [138,'page','https://www.reddit.com/r/math/comments/18uy6dv/wellwritten_textbooks_with_a_midlevel_of_rigor/'],
 [138,'comments','https://www.reddit.com/comments/18uy6dv.json?limit=500&depth=20&raw_json=1'],
 [139,'page','https://people.uncw.edu/hermanr/booklist.htm'],
 [140,'page','https://mathoverflow.net/questions/322987/good-casual-advanced-math-books'],
 [140,'question-api','https://api.stackexchange.com/2.3/questions/322987?site=mathoverflow&filter=withbody'],
 [140,'answers-api','https://api.stackexchange.com/2.3/questions/322987/answers?site=mathoverflow&pagesize=100&filter=withbody'],
 [140,'comments-api','https://api.stackexchange.com/2.3/questions/322987/comments?site=mathoverflow&pagesize=100&filter=withbody']
];
const log=await Promise.all(targets.map(async([source,kind,url])=>{
 const path=dir+`raw/${source}-${kind}.${kind==='page'?'html':'json'}`;
 try{
  const response=await fetch(url,{headers:{'User-Agent':'BookResearch/1.0 (public reading list bibliography audit)'},signal:AbortSignal.timeout(25000)});
  const body=await response.text();
  fs.writeFileSync(path,body);
  return {source,kind,url,status:response.status,bytes:Buffer.byteLength(body),path,retrieved:new Date().toISOString()};
 }catch(error){return {source,kind,url,error:error.message,retrieved:new Date().toISOString()};}
}));
fs.writeFileSync(dir+'retrieval-log.json',JSON.stringify(log,null,2)+'\n');
console.log(JSON.stringify(log,null,2));
