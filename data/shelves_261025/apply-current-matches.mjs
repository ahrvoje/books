import fs from 'node:fs';
import assert from 'node:assert/strict';
import {format} from '../../site/model.mjs';
const d='data/shelves_261025',read=p=>JSON.parse(fs.readFileSync(p,'utf8')),write=(p,x)=>fs.writeFileSync(p,JSON.stringify(x,null,2)+'\n');
const pointer=read('data/catalog.json').compiled,c=read(pointer),scope=read(d+'/scope.json'),byId=new Map([...c.currentBooks,...c.exclusions].map(b=>[b.id,b]));
const prior=read(read(d+'/stamp.json').previous),originalIds=new Set([...prior.currentBooks,...prior.exclusions].map(b=>b.id));
const inputs=read(d+'/inputs.json'),stamp=read(d+'/stamp.json').stamp,changes=[];
for(const x of read(d+'/current-matches.json')){
 assert(!scope.withdrawnSources.includes(x.source));
 const b=byId.get(x.id);assert(b);
 if(scope.ignoredNewTitleSources.includes(x.source)&&!originalIds.has(b.id))continue;
 if(b.sources.includes(x.source))continue;
 const before={sources:[...b.sources],REL:b.bonuses?.REL,total:b.total};
 b.sources=[...new Set([...b.sources,x.source])].sort((a,b)=>a-b);b.sourceIds=[...b.sources];
 if(b.status!=='excluded'){
  b.bonuses.REL=2*Math.sqrt(b.sources.length-1);b.total+=b.bonuses.REL-before.REL;b.unroundedTotal=b.total;b.displayScore=format(b.total);b.bonusAssessment.sources=b.sources.length;
  b.verdict=b.status==='vetoed'?'Vetoed; counterfactual score':b.total>=85?'Recommend':b.total>=75?'Consider':b.total>=65?'Selective':b.total>=50?'Low priority':'Poor fit';
 }
 changes.push({index:x.index,id:b.id,title:b.title,source:x.source,before,after:{sources:b.sources,REL:b.bonuses?.REL,total:b.total}});
 const report='analysis/analysis_'+inputs.find(z=>z.source===x.source).short+'_'+stamp+'.md';
 fs.appendFileSync(report,`\n### Current-catalog identity audit: ${x.title}\n\nMatched to ${b.title} — ${b.author} (${b.id}); ${b.status}. Source ${x.source} added once. Existing judgment retained. ${b.status==='excluded'?'No score.':`REL ${format(before.REL)} → ${format(b.bonuses.REL)}; score ${format(before.total)} → ${format(b.total)}.`}\n`);
}
for(const [file,status] of [['RECOMMENDED_BOOKS.md','recommended'],['VETOED_BOOKS.md','vetoed']]){
 const lines=fs.readFileSync(file,'utf8').split(/\r?\n/),byKey=new Map(c.currentBooks.filter(b=>b.status===status).map(b=>[b.author+'|'+b.title,b]));
 const rows=lines.filter(l=>/^\| \d{4}-/.test(l)).map(l=>{const r=l.split('|').slice(1,-1).map(s=>s.trim()),t=r[3].match(/^\[([^\]]+)\]/)?.[1]||r[3],b=byKey.get(r[2]+'|'+t);assert(b);r[4]=format(b.total);r[status==='recommended'?5:10]=format(b.bonuses.REL);r[status==='recommended'?10:7]=b.sources.join(', ');return '| '+r.join(' | ')+' |';}).sort((a,b)=>Number(b.split('|')[5])-Number(a.split('|')[5]));
 fs.writeFileSync(file,lines.filter(l=>!/^\| \d{4}-/.test(l)).join('\n').trimEnd()+'\n'+rows.join('\n')+'\n');
}
const matched=new Set(read(d+'/current-matches.json').map(b=>b.index));
write(d+'/pending.json',read(d+'/pending.json').filter(b=>!matched.has(b.index)));
const previous=fs.existsSync(d+'/current-match-updates.json')?read(d+'/current-match-updates.json'):[];
write(d+'/current-match-updates.json',[...previous,...changes]);write(pointer,c);
console.log({newSourceLinks:changes.length,pending:read(d+'/pending.json').length});
