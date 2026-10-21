import fs from 'node:fs';
import assert from 'node:assert/strict';
const dir='data/remaining_261021/',j=p=>JSON.parse(fs.readFileSync(p)),write=(p,v)=>fs.writeFileSync(p,typeof v==='string'?v:JSON.stringify(v,null,2)+'\n');
const c=j(dir+'compiled.json'),r=j(dir+'review.json'),prep=j(dir+'prepared.json'),ed=j('site/editions.json');
let report=fs.readFileSync(r.report,'utf8'),rec=fs.readFileSync('RECOMMENDED_BOOKS.md','utf8');
const decisions=[['u0235','g0342','The punctuation and subtitle differ, but this is the same Hoffman/Casnocha work. Restore coauthor Ben Casnocha. Retain the prior ten attainments, thematic decisions and no-veto finding: career optionality and network learning have modest transferable value; selective founder examples limit evidence, and density remains an unrecalibrated prior estimate.'],['u0739','q0282','The expanded subtitle identifies the same Randall Munroe work. Retain the prior ten attainments, thematic decisions and no-veto finding: estimation and physical constraints offer reusable reasoning, but much science is familiar to this reader. No new full-text density evidence warrants changing the prior estimate.'],['u0753','h0818','Timothy and Tim Ferriss identify the same author and work. Retain H3: the named implementation program prescribes outsourcing, business automation and work procedures; narrative examples do not change that primary purpose. No new score is retained.']];
for(const [batchId,target,note] of decisions){const id='rem-'+batchId,b=c.currentBooks.find(b=>b.id===id),old=[...c.currentBooks,...c.exclusions].find(b=>b.id===target);assert(b&&old);old.sources=[...new Set([...old.sources,...b.sources])].sort((a,b)=>a-b);old.priorReviews=[...new Set([...(old.priorReviews||[]),old.reviewAnchor||old.analysis].filter(Boolean))];old.reassessment=note;
 const prior=old.reviewAnchor||old.analysis;old.currentReview=old.reviewAnchor=r.report+'#'+target;if(old.status==='excluded')old.analysis=old.reviewAnchor;
 if(target==='g0342')old.author='Reid Hoffman; Ben Casnocha';
 c.currentBooks=c.currentBooks.filter(x=>x.id!==id);delete ed[id];
 const record=r.resolved.find(x=>x.batchId===batchId);record.catalogId=target;record.disposition='existing';const pr=prep.records.find(x=>x.batchId===batchId);pr.disposition='existing';pr.catalogId=target;
 report=report.replace(new RegExp('\\n<a id="'+id+'"></a>[\\s\\S]*?(?=\\n<a id=|\\n## |$)'), '\n');
 report=report.split('\n').filter(l=>!(l.startsWith('| ')&&l.includes('['+b.title+']'))).join('\n');
 const priorLink=prior?.startsWith('analysis/')?'../'+prior:'../analysis/'+prior;
 report+=`\n<a id="${target}"></a>\n### Duplicate reconciled: ${old.title} — ${old.author}\n\n${note} Confidence moderate for identity and status; prior score confidence retained. Sources ${old.sources.join(', ')}. [Prior full assessment](${priorLink}).\n`;
 if(old.raw)report+='\nRaw E/S/U/M/D/R/F/A/N/P: '+old.raw.map(v=>v.toFixed(2)).join(' / ')+'. Contributions: '+old.points.map(v=>v.toFixed(2)).join(' / ')+'. '+Object.entries(old.deductions).map(([k,v])=>k+' '+v.toFixed(2)).join('; ')+'. Total '+old.total.toFixed(2)+'.\n';
 rec=rec.split('\n').filter(l=>!(l.startsWith('| ')&&l.includes('['+b.title+']'))).map(l=>{if(!l.startsWith('| ')||!l.includes('['+old.title+']'))return l;const cells=l.split('|');cells[3]=' '+old.author+' ';cells[6]=' '+old.sources.join(', ')+' ';return cells.join('|');}).join('\n');
}
r.newRecommended-=3;r.existingMatches+=3;prep.publicationReady=true;
report=report.replace('719 newly scored works','716 newly scored works').replace('49 existing-work matches','52 existing-work matches');
write(dir+'compiled.json',c);write(dir+'review.json',r);write(dir+'prepared.json',prep);write('site/editions.json',ed);write(dir+'candidate-editions.json',ed);write('RECOMMENDED_BOOKS.md',rec);write(dir+'candidate-recommended.md',rec);write(r.report,report);write(dir+'candidate-analysis.md',report);
for(const p of ['README.md',dir+'REPORT.md']){let t=fs.readFileSync(p,'utf8');t=t.replace('686 new eligible','683 new eligible').replace('49 existing-work matches','52 existing-work matches').replace('3,633 recommended','3,630 recommended').replace('3.12 MB','3.72 MB');write(p,t);}
console.log('Merged three subtitle variants; retained the Schrödinger combined volume as a distinct nominated collection.');
