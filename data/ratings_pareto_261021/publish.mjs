import fs from 'node:fs';
import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import {format as f, REGISTRY} from '../../site/model.mjs';
const dir='data/ratings_pareto_261021/',previous='data/pages_density_261021/compiled.json';
const read=p=>fs.readFileSync(p,'utf8'),j=p=>JSON.parse(read(p)),write=(p,v)=>fs.writeFileSync(p,typeof v==='string'?v:JSON.stringify(v,null,2)+'\n');
assert.equal(j('data/catalog.json').compiled,previous,'One-time rating migration already applied');
const c=j(previous),state=j(dir+'ratings.json'),date='2026-10-21';
const stamp=new Intl.DateTimeFormat('en-GB',{timeZone:'Europe/Warsaw',hour:'2-digit',minute:'2-digit',hourCycle:'h23'}).format(new Date()).replace(':','');
const report=`analysis/analysis_ratinggaps_261021_${stamp}.md`,changes=[];
const deduction=n=>n<10?-20:n<100?-10:n<1000?-5:0;
const verdict=t=>t>=85?'Recommend':t>=75?'Consider':t>=65?'Selective':t>=50?'Low priority':'Poor fit';
for(const b of c.currentBooks){
 const s=state.books[b.id];if(s?.count==null)continue;assert.equal(b.amazon?.count??null,null,'Existing rating must be preserved');
 const a=s.verified;assert(a.accepted&&a.productId&&a.url&&a.retrieved&&a.evidence);
 const before={total:b.total,deduction:b.deductions.O15,amazon:b.amazon};
 b.amazon={count:s.count,url:a.url,asin:a.productId,marketplace:new URL(a.url).hostname,retrievedAt:a.retrieved,verifiedAt:a.retrieved,verified:true,confidence:a.confidence||'high',productTitle:a.title,byline:a.byline,evidence:[a.evidence],sourceSnapshot:a.rawFile,status:'Verified explicit total ratings for one matching Amazon product. Snapshot may predate this review; no editions or marketplaces are summed.'+(a.manualIdentity?' '+a.manualIdentity:''),identityEvidence:a.identityEvidence||null};
 b.deductions.O15=deduction(s.count);b.total=before.total+b.deductions.O15-before.deduction;b.displayScore=f(b.total);b.verdict=verdict(b.total);
 if('totalUnits' in b)delete b.totalUnits;
 b.ratingReview={date,analysis:report+'#'+b.id,previousCount:null,previousDeduction:before.deduction,previousTotal:before.total};
 changes.push({id:b.id,title:b.title,author:b.author,status:b.status,count:s.count,url:a.url,retrieved:a.retrieved,before,after:{total:b.total,deduction:b.deductions.O15}});
}
const key=(author,title)=>author+'|'+title,parse=line=>line.split('|').slice(1,-1).map(s=>s.trim()),title=s=>s.match(/^\[([^\]]+)\]/)?.[1]||s;
const ratingCell=b=>b.amazon?.count==null?'Unknown':`[${b.amazon.count}](${b.amazon.url})`;
const recRows=new Map(read('RECOMMENDED_BOOKS.md').split('\n').filter(l=>/^\| \d{4}-/.test(l)).map(l=>{const a=parse(l);return [key(a[2],title(a[3])),a];}));
const recs=c.currentBooks.filter(b=>b.status==='recommended').sort((a,b)=>b.total-a.total||a.title.localeCompare(b.title,'en'));
write('RECOMMENDED_BOOKS.md','| Entry date | First publication year | Author | Title | Score / 100 | Source | Pages (edition) | Amazon ratings |\n|---|---|---|---|---:|---:|---:|---:|\n'+recs.map(b=>{const a=recRows.get(key(b.author,b.title));assert(a);a[4]=f(b.total);return '| '+[...a.slice(0,7),ratingCell(b)].join(' | ')+' |';}).join('\n')+'\n');
const oldVeto=read('VETOED_BOOKS.md'),vetoRows=new Map(oldVeto.split('\n').filter(l=>/^\| \d{4}-/.test(l)).map(l=>{const a=parse(l);return [key(a[2],title(a[3])),a];}));
const vetos=c.currentBooks.filter(b=>b.status==='vetoed').sort((a,b)=>b.total-a.total||a.title.localeCompare(b.title,'en'));
const links=new Map(vetos.map(b=>[b.id,vetoRows.get(key(b.author,b.title))[3]]));
const breakdown='## Counterfactual breakdowns and reasons\n\nPositive criteria and non-rating deductions are unchanged. O15 uses verified new counts where available. E/S/D are quadratic; cells show linear attainment → contribution.\n\n| Work | '+REGISTRY.slice(0,10).map(r=>r.id).join(' | ')+' | T11 | T12 | H13 | P14 | O15 | Total |\n|---|'+Array(16).fill('---:|').join('')+'\n'+vetos.map(b=>'| '+[links.get(b.id),...b.raw.map((v,i)=>`${f(v)} → ${f(b.points[i])}`),...['T11','T12','H13','P14','O15'].map(k=>f(b.deductions[k])),f(b.total)].join(' | ')+' |').join('\n');
// Retain the existing per-work reasons after the historical breakdown table.
const oldLines=oldVeto.split('\n'),start=oldLines.findIndex(l=>l.startsWith('| Work | E |'));
let end=start+2;while(oldLines[end]?.startsWith('|'))end++;
write('VETOED_BOOKS.md',`# Vetoed books\n\nUpdated **${date}, Europe/Warsaw**. **${vetos.length} unique source works**. [Rating-count update](${report}); [category review](analysis/analysis_categories_261021_1600.md). Scores remain counterfactual and do not override vetoes.\n\n| Entry date | First year | Author | Title | Counterfactual /100 | Veto | Veto confidence | Sources | Pages (edition) | Amazon ratings |\n|---|---|---|---|---:|---|---|---|---:|---:|\n`+vetos.map(b=>{const a=vetoRows.get(key(b.author,b.title));a[4]='**'+f(b.total)+'**';return '| '+[...a.slice(0,9),ratingCell(b)].join(' | ')+' |';}).join('\n')+'\n\n'+breakdown+'\n'+oldLines.slice(end).join('\n'));
const counts=Object.fromEntries(['recommended','vetoed'].map(status=>{const bs=c.currentBooks.filter(b=>b.status===status);return [status,{total:bs.length,known:bs.filter(b=>b.amazon?.count!=null).length,unknown:bs.filter(b=>b.amazon?.count==null).length,added:changes.filter(b=>b.status===status).length}];}));
let text=`# Amazon rating gaps and Pareto update\n\n${date}, Europe/Warsaw.\n\nRecovered ${changes.length} previously unknown Amazon rating aggregates. These are total ratings, not written reviews, and identify one product and marketplace. Existing known counts are unchanged. Some recovered evidence is an earlier saved snapshot; each retrieval date is retained. Direct collection stopped after Amazon returned an access challenge. The [collection log](../${dir}ratings.json) distinguishes attempted products from those not reached. Public search attempts did not supply additional explicit product aggregates. Unknowns retain the prescribed O15=0 fallback.\n\nOnly O15, its resulting total/verdict and rating metadata change. Categories, positive criteria, other deductions, page counts and domain data remain unchanged. Earlier analyses and the prior compiled snapshot remain history.\n\n| List | Known | Unknown | Added |\n|---|---:|---:|---:|\n`+Object.entries(counts).map(([k,v])=>`| ${k} | ${v.known} | ${v.unknown} | ${v.added} |`).join('\n');
text+='\n\n## Updated counts\n\n| Work | Ratings | Snapshot date | O15 before → now | Total before → now |\n|---|---:|---|---:|---:|\n'+changes.map(b=>`| [${b.title}](#${b.id}) | [${b.count}](${b.url}) | ${b.retrieved} | ${f(b.before.deduction)} → ${f(b.after.deduction)} | ${f(b.before.total)} → ${f(b.after.total)} |`).join('\n');
for(const d of changes){const b=c.currentBooks.find(b=>b.id===d.id);text+=`\n\n<a id="${b.id}"></a>\n### ${b.title} — ${b.author}\n\n${b.status}; ${b.amazon.confidence} confidence in the rating record. [${b.amazon.count} ratings](${b.amazon.url}), ${b.amazon.marketplace}, ${b.amazon.asin}, retrieved ${b.amazon.retrievedAt}. ${b.amazon.status}\n\n| Criterion | Raw | Contribution |\n|---|---:|---:|\n`+REGISTRY.slice(0,10).map((r,i)=>`| ${r.name} | ${f(b.raw[i])} | ${f(b.points[i])} |`).join('\n')+'\n\n'+Object.entries(b.deductions).map(([k,v])=>`${k}: ${f(v)}`).join('; ')+`. Total **${f(b.total)}**${b.status==='vetoed'?' (counterfactual)':''}.\n`;}
text+='\n## Interface\n\nRemoved the decorative masthead labels, tagline and redundant matching-list heading. All four control icons are 16×16 SVGs. Pareto tradeoffs shows three successive nondominated sets: red, blue, dark yellow. Every book in a layer, including coordinate ties, is removed before the next layer is computed. Only matching books with both coordinates qualify; curves are visual guides, not dominance tests. The HTML budget is 1,500 bytes times the number of recommended plus vetoed books.\n';
write(report,text);write(dir+'changes.json',{date,previous,report,counts,changes});
write(dir+'unresolved.json',c.currentBooks.filter(b=>b.amazon?.count==null).map(b=>({id:b.id,title:b.title,author:b.author,status:b.status,attempted:!!state.books[b.id]?.attempts.length,reason:state.books[b.id]?.reason||(state.books[b.id]?.attempts.length?'No accepted explicit matching aggregate.':'Not reached before Amazon access challenge.')})));
c.audit={...c.audit,previous,ratingReview:report,ratingCounts:counts,rulesSha256:crypto.createHash('sha256').update(read('AGENTS.md')).digest('hex')};
write(dir+'compiled.json',c);write('data/catalog.json',{compiled:dir+'compiled.json'});console.log({report,counts});
