import fs from 'node:fs';
import {format} from '../../site/model.mjs';
const old='https://www.theguardian.com/culture/2011/aug/17/ian-kershaw-life-writing-interview',url='https://www.thebritishacademy.ac.uk/documents/831/BAR26-09-Kershaw_0.pdf';
for(const p of ['data/v3_review_261103/boundary-checks.mjs','data/v3_review_261103/changes.json','data/v3_review_261103/screening-ledger.json','analysis/analysis_v3review_261103_2142.md'])fs.writeFileSync(p,fs.readFileSync(p,'utf8').replaceAll(old,url));
const p='README.md';fs.writeFileSync(p,fs.readFileSync(p,'utf8').replace('The active catalog is `data/refs100_261102/compiled.json`.','That round’s historical snapshot is `data/refs100_261102/compiled.json`.'));
const dir='data/v3_review_261103',read=p=>JSON.parse(fs.readFileSync(p,'utf8')),write=(p,v)=>fs.writeFileSync(p,JSON.stringify(v,null,2)+'\n');
const c=read(dir+'/compiled.json'),changes=read(dir+'/changes.json'),screen=read(dir+'/screening-ledger.json');
c.currentBooks.find(b=>b.id==='rem-u0853').limitations='Participant memories and the selected production cases limit generalization. The newly inspected excerpt supports eligibility, but no broad direct-text density audit was completed. Chris Smith is the author; Jon Stewart supplies the foreword.';
for(const x of changes){const b=c.currentBooks.find(b=>b.id===x.id);if(!b)continue;const s=screen.find(s=>s.id===b.id);s.transferEvidence=b.criteria?.find(k=>k.code==='U')?.assessment||b.notes?.[2]||'';s.causalEvidence=b.criteria?.find(k=>k.code==='M')?.assessment||b.notes?.[3]||'';}
const report='analysis/analysis_v3review_261103_2142.md';let text=fs.readFileSync(report,'utf8');
const codes=['E','S','U','M','D','R','F','A','N','P'],max=[20,17,15,12,10,9,7,5,3,2];
for(const x of changes.filter(x=>x.score!==null)){
 const start=text.indexOf('<a id="'+x.id+'"></a>'),next=text.indexOf('<a id=',start+10),end=next<0?text.length:next;
 let section=text.slice(start,end).replace(/R&D metadata: \{[^\n]*\}\./,'R&D metadata: '+JSON.stringify(x.bonusAssessment)+'.');
 for(let i=0;i<10;i++)section=section.replace(new RegExp('^\\| '+codes[i]+' \\| [^|]+\\| [^|]+\\|','m'),`| ${codes[i]} | ${format(x.raw[i])} / ${max[i]} | ${format(x.contributions[i])} |`);
 text=text.slice(0,start)+section+text.slice(end);
}
fs.writeFileSync(report,text);write(dir+'/compiled.json',c);write(dir+'/screening-ledger.json',screen);
