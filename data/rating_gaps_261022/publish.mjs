import fs from 'node:fs';
import assert from 'node:assert/strict';
import zlib from 'node:zlib';
import {format,REGISTRY} from '../../site/model.mjs';
const dir='data/rating_gaps_261022/',read=p=>JSON.parse(fs.readFileSync(p));
const c=read(dir+'before.json'),before=read(dir+'before.json'),s=read(dir+'captures.json'),targets=read(dir+'targets.json');
const report='analysis/analysis_rating250_261022_1015.md',changes=[];
assert.equal(targets.length,250);
const ranked=before.currentBooks.filter(b=>b.status==='recommended').sort((a,b)=>b.total-a.total||a.title.localeCompare(b.title));
assert.deepEqual(targets.map(b=>b.id),ranked.filter(b=>b.amazon?.count==null).slice(0,250).map(b=>b.id));
for(const b of c.currentBooks){const a=s.books[b.id]?.amazon;if(!a)continue;
 assert(b.amazon?.count==null);assert(a.titleMatch&&a.authorMatch&&Number.isSafeInteger(a.count)&&a.count>=0&&a.evidence&&a.productId&&a.rawFile);
 const html=zlib.gunzipSync(fs.readFileSync(a.rawFile)).toString();assert(html.includes(a.evidence));
 const previousTotal=b.total,previousDeduction=b.deductions.O15;
 b.amazon={count:a.count,url:a.url,asin:a.productId,marketplace:new URL(a.url).hostname,retrievedAt:a.retrieved,verifiedAt:a.retrieved,verified:true,confidence:'high',productTitle:a.title,byline:a.byline,evidence:[a.evidence],sourceSnapshot:a.rawFile,status:'One matching Amazon product total-rating aggregate; retrieved snapshot. No counts combined across editions or marketplaces.'};
 if(a.identityNote)b.amazon.identityNote=a.identityNote;
 b.deductions.O15=a.count<10?-20:a.count<100?-10:a.count<1000?-5:0;
 b.total=b.points.reduce((sum,v)=>sum+v,0)+Object.values(b.deductions).reduce((sum,v)=>sum+v,0);
 b.displayScore=format(b.total);b.obscurityFallback=false;
 b.verdict=b.total>=85?'Recommend':b.total>=75?'Consider':b.total>=65?'Selective':b.total>=50?'Low priority':'Poor fit';
 b.ratingReview={date:'2026-10-22',analysis:report+'#'+b.id,previousCount:null,previousTotal};
 const stars=Number(html.match(/id="acrPopover"[^>]*title="([\d.]+) out of 5 stars/)?.[1]);
 if(stars){b.amazon.stars=stars;b.reader=`[Amazon ${stars.toFixed(1)}/5 · ${a.count} ratings](${a.url})`;}
 changes.push({id:b.id,title:b.title,rank:s.books[b.id].rank,count:a.count,previousTotal,total:b.total,previousDeduction,deduction:b.deductions.O15});
}
const changed=new Set(changes.map(b=>b.id));
assert.deepEqual(c.exclusions,before.exclusions);assert.deepEqual(c.sourceBooks,before.sourceBooks);
for(const b of c.currentBooks){const p=before.currentBooks.find(x=>x.id===b.id);if(!changed.has(b.id)){assert.deepEqual(b,p);continue;}
 for(const k of ['raw','points','positive','status','year','periodEnd','T11','T12','sources','confidence'])assert.deepEqual(b[k],p[k]);
 for(const k of ['T11','T12','H13','P14'])assert.equal(b.deductions[k],p.deductions[k]);
 assert(Math.abs(b.total-p.total-b.deductions.O15+p.deductions.O15)<1e-9);
}
const lines=fs.readFileSync(dir+'before-ledger.txt','utf8').split(/\r?\n/),key=(a,t)=>a+'|'+t;
const oldRows=new Map(lines.filter(l=>l.startsWith('| 20')).map(l=>{const cells=l.split('|').slice(1,-1).map(x=>x.trim());return[key(cells[2],cells[3].match(/^\[(.*)\]\(/)[1]),cells];}));
const rows=c.currentBooks.filter(b=>b.status==='recommended').sort((a,b)=>b.total-a.total||a.title.localeCompare(b.title)).map(b=>{
 const r=[...oldRows.get(key(b.author,b.title))];assert(r.length===8);
 if(changed.has(b.id)){assert.equal(r[7],'Unknown');r[4]=format(b.total);r[7]=`[${b.amazon.count}](${b.amazon.url})`;}
 return '| '+r.join(' | ')+' |';
});
const unresolved=targets.filter(b=>!changed.has(b.id));
const summary={date:'2026-10-22',selected:250,filled:changes.length,unknown:unresolved.length,originalRankRange:[targets[0].rank,targets.at(-1).rank],scoreChanges:changes.filter(x=>Math.abs(x.total-x.previousTotal)>1e-9).length,report};
c.audit.rating250Review={...summary,targets:dir+'targets.json',evidence:dir+'captures.json'};
let text='# Amazon rating gaps: 250 highest-ranked missing entries\n\n22 October 2026, Europe/Warsaw. Targets were frozen before any rating-driven reranking. '+JSON.stringify(summary)+'\n\nCounts are total ratings from one matching Amazon product, not written reviews. Confidence: high for accepted title-and-author-matched aggregates. Each record preserves the marketplace, product identifier, retrieval time and compressed source snapshot. No counts are added across editions or marketplaces. Unavailable values stay unknown, with O15=0. Only rating metadata, O15 and its resulting total/verdict change. Page counts, other assessments, eligibility and historical analyses are preserved.\n\n';
for(const x of changes){const b=c.currentBooks.find(b=>b.id===x.id);text+=`<a id="${b.id}"></a>\n## ${b.title} — ${b.author}\n\nOriginal rank ${x.rank}. [${x.count} total ratings](${b.amazon.url}); ${b.amazon.marketplace}; product ${b.amazon.asin}; retrieved ${b.amazon.retrievedAt}; confidence high. Snapshot: ${b.amazon.sourceSnapshot}.\n\n| Criterion | Raw | Contribution |\n|---|---:|---:|\n`+REGISTRY.slice(0,10).map((r,i)=>`| ${r.name} | ${format(b.raw[i])} | ${format(b.points[i])} |`).join('\n')+'\n\n'+Object.entries(b.deductions).map(([k,v])=>k+' '+format(v)).join('; ')+`. Total ${format(x.previousTotal)} → **${format(b.total)}**; ${b.verdict}.\n\n`;}
text+='## Unresolved\n\n'+unresolved.map(b=>`- ${b.title} — ${b.author}; original rank ${b.rank}; ${s.books[b.id].attempts.length} retrieval attempts. No matching explicit aggregate accepted.`).join('\n')+'\n';
fs.writeFileSync(dir+'changes.json',JSON.stringify(changes,null,2)+'\n');fs.writeFileSync(dir+'summary.json',JSON.stringify(summary,null,2)+'\n');fs.writeFileSync(report,text);
fs.writeFileSync(s.baseline,JSON.stringify(c,null,2)+'\n');fs.writeFileSync('RECOMMENDED_BOOKS.md',lines.slice(0,2).join('\n')+'\n'+rows.join('\n')+'\n');
const esc=x=>String(x??'').replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('"','&quot;');
fs.writeFileSync(dir+'report.html',`<!doctype html><html lang="en"><meta charset="utf-8"><title>250 Amazon rating gaps</title><style>body{font:16px system-ui;margin:30px}table{border-collapse:collapse}td,th{border:1px solid #ccc;padding:8px;text-align:left}th{background:#eee}small{color:#555}</style><h1>250 highest-ranked missing Amazon counts</h1><p>22 October 2026. Original ranks ${targets[0].rank}–${targets.at(-1).rank}. Filled ${changes.length}; unknown ${unresolved.length}; ${summary.scoreChanges} scores changed through O15. Accepted counts: high confidence. Each is a snapshot from one matched product; counts are not summed.</p><p><a href="../../${report}">Full evidence and score breakdowns</a> · <a href="captures.json">Retrieval records</a></p><table><tr><th>Original rank</th><th>Title / author</th><th>Ratings</th><th>Score before → after</th><th>Product / retrieved</th></tr>${targets.map(b=>{const a=s.books[b.id].amazon,x=changes.find(x=>x.id===b.id);return `<tr><td>${b.rank}</td><td>${esc(b.title)}<br><small>${esc(b.author)}</small></td><td>${a?`<a href="${esc(a.url)}">${a.count}</a>`:'Unknown'}</td><td>${format(b.total)} → ${format(x?.total??b.total)}</td><td>${a?esc(a.productId+' / '+a.retrieved):'No verified aggregate'}</td></tr>`;}).join('')}</table></html>`);
console.log(summary);
