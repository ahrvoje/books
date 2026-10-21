import fs from 'node:fs';
const dir='data/sources_261020/math/';
const answers=JSON.parse(fs.readFileSync(dir+'raw/140-answers-api.json','utf8')).items;
const url='https://api.stackexchange.com/2.3/answers/'+answers.map(a=>a.answer_id).join(';')+'/comments?site=mathoverflow&pagesize=100&filter=withbody';
const response=await fetch(url,{signal:AbortSignal.timeout(25000)});
const text=await response.text();
fs.writeFileSync(dir+'raw/140-answer-comments-api.json',text);
console.log(JSON.stringify({status:response.status,url,...JSON.parse(text)},null,2));
