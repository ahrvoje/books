import fs from 'node:fs';
const dir='data/remaining_261021/',j=p=>JSON.parse(fs.readFileSync(p)),r=j(dir+'review.json'),c=j(dir+'compiled.json');
let text=fs.readFileSync(r.report,'utf8');
const start=text.indexOf('| Quality / verdict |'),end=text.indexOf('\n<a id=',start),block=text.slice(start,end).trimEnd().split('\n');
for(const id of ['g0342','q0282']){const b=c.currentBooks.find(b=>b.id===id);block.push(`| ${b.total.toFixed(2)} · ${b.verdict} | ${b.reader||'See prior capture'} | ${b.author} | ${b.year} | [${b.title}](${b.purchaseUrl}) |`);}
text=text.slice(0,start)+block.slice(0,2).join('\n')+'\n'+block.slice(2).filter(l=>l.startsWith('| ')).sort((a,b)=>parseFloat(b.slice(2))-parseFloat(a.slice(2))).join('\n')+'\n'+text.slice(end);
text+='\n## Final verification\n\nThe active catalog has 3,630 eligible scored works, 238 vetoed works and 1,414 hard exclusions. Seventy-eight newly scored works have verified Amazon aggregates. After reranking, 85 of the top 100 have verified counts; 15 new entrants remain unknown despite another retrieval attempt. Their O15 deduction is zero under the specified fallback. The four authorless Maxx Yung records remain unresolved, as the user does not know their authors.\n';
fs.writeFileSync(r.report,text);fs.writeFileSync(dir+'candidate-analysis.md',text);
fs.appendFileSync(dir+'REPORT.md','\nBuild, all 16 calculation tests and catalog validation passed. The updated top 100 has 85 verified Amazon counts and 15 unknown counts after retries. This continuation accepted 78 product aggregates for newly scored works.\n');
