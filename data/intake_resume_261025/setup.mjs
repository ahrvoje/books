import fs from 'node:fs';
import {specs, exclusions} from './specs.mjs';
const dir='data/intake_resume_261025/';
const q=JSON.parse(fs.readFileSync('data/intake_finish_261025/pending.json','utf8'));
const put=(p,v)=>fs.writeFileSync(dir+p,JSON.stringify(v,null,2)+'\n');
put('pending-input.json',q);
put('specs-reviewed.json',[...specs,...exclusions.map(x=>({...x,status:'excluded'}))]);
let b=fs.readFileSync('data/intake_finish_261025/build-inputs.mjs','utf8')
 .replaceAll('data/intake_finish_261025/','data/intake_resume_261025/')
 .replaceAll('data/intake_rest_261025/compiled.json','data/h7_revision_261025/compiled.json')
 .replace("id:'finish-'","id:'resume-'")
 .replace("format:'Unknown; metadata deferred'","format:s.format||'Unknown; metadata deferred'")
 .replace('for(const [index,ids] of [])','for(const [index,ids] of [[168,[\'shelf-ad011ca7273f\']]])')
 .replace('Reviewed alternate title or explicit two-work nomination; prior decision retained.','Mars is Red Mars: the source product link ends in ISBN 9780593358825, confirmed as Red Mars by Penguin Random House. Existing H2 exclusion retained; no second work created. Evidence: https://www.ezrasbookshelf.com/books/mars/ and https://www.penguinrandomhouse.com/books/156201/red-mars-by-kim-stanley-robinson/9780593358825/');
fs.writeFileSync(dir+'build-inputs.mjs',b);
put('nonbooks.json',[]);
const stamp=new Intl.DateTimeFormat('sv-SE',{timeZone:'Europe/Warsaw',year:'2-digit',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',hour12:false}).format(new Date()).replaceAll('-','').replace(' ','_').replace(':','');
let p=fs.readFileSync('data/intake_finish_261025/process.mjs','utf8')
 .replaceAll('data/intake_finish_261025','data/intake_resume_261025')
 .replaceAll('data/intake_rest_261025/compiled.json','data/h7_revision_261025/compiled.json')
 .replaceAll('261025_0122',stamp)
 .replaceAll("'finish-ex-'","'resume-ex-'")
 .replace("categories[id]=rule==='H2'?'Fiction':'Technology, Engineering, Innovation'","categories[id]=rule==='H2'?'Fiction':'Business, Economy, Geostrategy'")
 .replace("if(aliases.length)out+='Source wording: '","if(aliases.length)out+=resolved.filter(x=>x.source===source&&x.id===b.id).map(x=>x.reason).join(' ')+'\\n\\nSource wording: '");
fs.writeFileSync(dir+'process.mjs',p);
let v=fs.readFileSync('data/intake_finish_261025/verify.mjs','utf8')
 .replaceAll('data/intake_finish_261025/','data/intake_resume_261025/')
 .replaceAll('data/intake_rest_261025/','data/h7_revision_261025/')
 .replace('closedCandidates,479','closedCandidates,447')
 .replace(',testsPassed:21','');
fs.writeFileSync(dir+'verify.mjs',v);
put('run.json',{stamp,startingCandidates:q.length,sourceLedgerBefore:fs.readFileSync('SOURCES.md','utf8').split(/\r?\n/).filter(l=>/^\| \d+ \|/.test(l)).map(l=>l.split('|').slice(1,4))});
console.log({stamp,specs:specs.length,exclusions:exclusions.length});
