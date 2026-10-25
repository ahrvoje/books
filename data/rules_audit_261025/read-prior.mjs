import fs from 'node:fs';
import {groups,vetoes} from './decisions.mjs';
const read=p=>JSON.parse(fs.readFileSync(p,'utf8')),c=read(read('data/catalog.json').compiled),ids=[...groups.flatMap(g=>g[2]),...vetoes.map(x=>x.id)];
const out=[];
for(const id of ids){const b=c.currentBooks.find(x=>x.id===id);if(!b||b.status!=='recommended')throw Error('Invalid decision '+id);
 let p=b.categoryReview?.prior||b.currentReview||b.reviewAnchor||b.priorReport||b.scoreReview;
 p=p.split('#')[0];if(!p.startsWith('analysis/'))p='analysis/'+p;
 let excerpt='';if(fs.existsSync(p)){const t=fs.readFileSync(p,'utf8');let pos=t.indexOf('id="'+id+'"');if(pos<0)pos=t.indexOf(b.title);if(pos>=0)excerpt=t.slice(Math.max(0,pos-50),pos+2200);}
 out.push({id,title:b.title,author:b.author,prior:p,excerpt,retainedPurpose:b.eligibility||b.note||b.assessment?.note||'',evidence:b.evidence||[]});
}
fs.writeFileSync('data/rules_audit_261025/prior-evidence.json',JSON.stringify(out,null,2));
console.log(out.map(x=>x.id+' | '+x.title+' | '+(x.retainedPurpose||x.excerpt).replace(/\n/g,' ').slice(0,240)).join('\n'));
