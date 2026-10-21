import fs from 'node:fs';
import crypto from 'node:crypto';
import assert from 'node:assert/strict';
import { density } from './density.mjs';
import { format as f } from '../../site/model.mjs';
const dir='data/pages_density_261021/', previousPath='data/category_review_261021/compiled.json';
const read=p=>fs.readFileSync(p,'utf8'),json=p=>JSON.parse(read(p)),write=(p,v)=>fs.writeFileSync(p,typeof v==='string'?v:JSON.stringify(v,null,2)+'\n');
assert.equal(json('data/catalog.json').compiled,previousPath,'One-time migration already applied.');
const c=json(previousPath),state=json(dir+'progress.json'),e=json('site/enrichment.json');
const date='2026-10-21', stamp=new Intl.DateTimeFormat('en-GB',{timeZone:'Europe/Warsaw',hour:'2-digit',minute:'2-digit',hourCycle:'h23'}).format(new Date()).replace(':','');
const report=`analysis/analysis_densitypages_261021_${stamp}.md`,verdict=t=>t>=85?'Recommend':t>=75?'Consider':t>=65?'Selective':t>=50?'Low priority':'Poor fit';
const allEditions=Object.fromEntries(Object.values(state.books).filter(b=>b.edition).map(b=>[b.id,b.edition]));
const editions={};for(const b of c.currentBooks)if(allEditions[b.id] && !e.books[b.id]?.edition)editions[b.id]=allEditions[b.id];
const count=status=>{const bs=c.currentBooks.filter(b=>b.status===status);return {total:bs.length,known:bs.filter(b=>allEditions[b.id]).length,unknown:bs.filter(b=>!allEditions[b.id]).length};};
const changes=[];
for(const b of c.currentBooks){
 const d=density[b.id];if(!d)continue;
 const prior={total:b.total,raw:b.raw[4],points:b.points[4],analysis:b.reviewAnchor};
 b.raw[4]=d.attainment;b.points[4]=d.attainment*d.attainment/10;b.notes[4]=d.reason;
 const criterion=b.criteria.find(x=>x.code==='D');Object.assign(criterion,{raw:b.raw[4],points:b.points[4],assessment:d.reason,confidence:d.confidence});
 b.positive=b.points.reduce((a,v)=>a+v,0);b.total=b.positive+Object.values(b.deductions).reduce((a,v)=>a+v,0);b.displayScore=f(b.total);b.verdict=verdict(b.total);
 b.densityAssessment={...d,date,prior,refs:[report+'#'+b.id,...d.refs]};
 // Keep the primary assessment link for unchanged criteria; D links to its focused review.
 changes.push({id:b.id,title:b.title,before:prior,after:{raw:b.raw[4],points:b.points[4],total:b.total},...d});
}
const rulesHash=crypto.createHash('sha256').update(read('AGENTS.md')).digest('hex');
c.audit={...c.audit,previous:previousPath,rulesSha256:rulesHash,densityPageReview:report,densityProtocol:'Clarifies existing D learning/length criterion; weights, gates and other book inputs unchanged. Only three D estimates recalibrated.'};
const pageCell=b=>allEditions[b.id]?`[${allEditions[b.id].pages}](${allEditions[b.id].url})`:'Unknown';
const rows=new Map(read('RECOMMENDED_BOOKS.md').split(/\r?\n/).filter(l=>/^\| \d{4}-/.test(l)).map(l=>{const a=l.split('|').slice(1,-1).map(x=>x.trim());return [a[2]+'|'+a[3].match(/^\[([^\]]+)\]/)[1],a];}));
const rec=c.currentBooks.filter(b=>b.status==='recommended').sort((a,b)=>b.total-a.total||a.title.localeCompare(b.title,'en'));
write('RECOMMENDED_BOOKS.md','| Entry date | First publication year | Author | Title | Score / 100 | Source | Pages (edition) |\n|---|---|---|---|---:|---:|---:|\n'+rec.map(b=>{const a=rows.get(b.author+'|'+b.title);assert(a,b.id);a[4]=f(b.total);return '| '+[...a.slice(0,6),pageCell(b)].join(' | ')+' |';}).join('\n')+'\n');
const vetos=new Map(c.currentBooks.filter(b=>b.status==='vetoed').map(b=>[b.author+'|'+b.title,b]));
write('VETOED_BOOKS.md',read('VETOED_BOOKS.md').split('\n').map(l=>{
 if(l.startsWith('| Entry date |'))return l+' Pages (edition) |';
 if(l.startsWith('|---|---|---|---|---:|---|---|---|'))return l+'---:|';
 if(!/^\| \d{4}-/.test(l))return l;
 const a=l.split('|').slice(1,-1).map(x=>x.trim()),b=vetos.get(a[2]+'|'+a[3].match(/^\[([^\]]+)\]/)[1]);assert(b);return '| '+[...a.slice(0,8),pageCell(b)].join(' | ')+' |';
}).join('\n'));
const counts={recommended:count('recommended'),vetoed:count('vetoed')};
const unresolved=c.currentBooks.filter(b=>!allEditions[b.id]).map(b=>({id:b.id,title:b.title,author:b.author,status:b.status,reason:state.books[b.id]?.reason||'No verified matching edition.',attempts:state.books[b.id]?.attempts||[]}));
let reportText=`# Page counts and focused information-density review\n\n${date}, Europe/Warsaw.\n\n## Page counts\n\nRecommended: ${counts.recommended.known}/${counts.recommended.total}. Vetoed: ${counts.vetoed.known}/${counts.vetoed.total}. Counts describe a cited edition, not every edition of the work. Existing verified counts are preserved. Additional records use title/author matching and edition-level pages; work-level medians, audio durations and estimates are not substituted. Unresolved identities, series scope and absent edition metadata remain explicit unknowns. [Collection records](../${dir}progress.json); [unresolved records](../${dir}unresolved.json).\n\n## Density calibration\n\nD measures useful learning for reading effort. Repeated frameworks can support new learning; compactness alone does not establish density. Scores remain judgments on an anchored attainment scale, not measured ratios. The user’s first-hand Why Nations Fail report is recorded as reader evidence. The reported tenfold comparison is not treated as a measurement. The protocol is in [AGENTS.md](../AGENTS.md). Only the following three estimates change; other D estimates remain unrecalibrated and are labelled in the HTML. No other criterion, deduction, source provenance or category changes.\n\n| Book | D before | D now | Contribution before | Contribution now | Total before | Total now |\n|---|---:|---:|---:|---:|---:|---:|\n`;
reportText+=changes.map(d=>`| [${d.title}](#${d.id}) | ${f(d.before.raw)} | ${f(d.after.raw)} | ${f(d.before.points)} | ${f(d.after.points)} | ${f(d.before.total)} | ${f(d.after.total)} |`).join('\n');
for(const d of changes){const b=c.currentBooks.find(b=>b.id===d.id);reportText+=`\n\n<a id="${b.id}"></a>\n### ${b.title}\n\n**${d.confidence} confidence.** ${d.reason}\n\nEvidence coverage: ${d.basis}\n\n[Prior assessment](../${d.before.analysis}). `+d.refs.map((u,i)=>`[Evidence ${i+1}](${u})`).join(' · ')+`\n\nFull current breakdown (other inputs unchanged):\n\n| Criterion | Raw | Contribution |\n|---|---:|---:|\n`+b.criteria.map(x=>`| ${x.name} | ${f(x.raw)} | ${f(x.points)} |`).join('\n')+'\n\n'+Object.entries(b.deductions).map(([k,v])=>`${k}: ${f(v)}`).join('; ')+`. Total **${f(b.total)}**, ${b.verdict}.\n`;}
write(report,reportText);write(dir+'changes.json',{date,previous:previousPath,report,counts,density:changes});write(dir+'unresolved.json',unresolved);
write('site/editions.json',editions);write(dir+'compiled.json',c);write('data/catalog.json',{compiled:dir+'compiled.json'});
e.summary.pageCounts=counts.recommended.known;e.summary.missingPages=counts.recommended.unknown;e.summary.updated=date;e.summary.scope='Page-count enrichment and focused density calibration; domain and connection records unchanged.';write('site/enrichment.json',e);
console.log(JSON.stringify({report,counts,changes:changes.map(d=>({title:d.title,D:d.after.raw,total:f(d.after.total)}))},null,2));
