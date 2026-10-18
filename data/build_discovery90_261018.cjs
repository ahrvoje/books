const fs=require('fs'),crypto=require('crypto'),assert=require('assert/strict');
const input=require('./discovery90_assessments_261018.json');
const amazon=require('./discovery_amazon_261018.json');
const prior=require('./single_scores_261018.json');
const baselinePath='data/discovery90_baseline_261018.json';
const dataPath='data/discovery90_261018.json';
const hash=s=>crypto.createHash('sha256').update(s).digest('hex');
const read=p=>fs.readFileSync(p,'utf8');
const main=['RECOMMENDED_BOOKS.md','VETOED_BOOKS.md','EXCLUDED_BOOKS.md','SOURCES.md'];
let baseline;
if(fs.existsSync(baselinePath)){
 baseline=JSON.parse(read(baselinePath));
 for(const p of main)assert.equal(hash(read(p)),baseline.generatedHashes?.[p]??hash(baseline.text[p]),`Unreviewed concurrent change: ${p}`);
}else{
 const parts=new Intl.DateTimeFormat('en-CA',{timeZone:'Europe/Warsaw',year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',hourCycle:'h23'}).formatToParts(new Date());
 const t=Object.fromEntries(parts.map(p=>[p.type,p.value]));
 baseline={date:`${t.year}-${t.month}-${t.day}`,localTime:`${t.year}-${t.month}-${t.day} ${t.hour}:${t.minute}`,report:`analysis_widerd_${t.year.slice(2)}${t.month}${t.day}_${t.hour}${t.minute}.md`,text:Object.fromEntries(main.map(p=>[p,read(p)])),historyHashes:Object.fromEntries(fs.readdirSync('.').filter(p=>/^analysis_.*\.md$/.test(p)).map(p=>[p,hash(read(p))])),rulesHash:hash(read('AGENTS.md')),scoreSnapshotHash:hash(read('data/single_scores_261018.json'))};
 fs.writeFileSync(baselinePath,JSON.stringify(baseline,null,2)+'\n');
}
const {date,localTime,report}=baseline;
const names=['Evidence and inferential integrity','Systems integration','Transferable strategic utility','Mechanistic and causal depth','Information density and length justification','Durability and resistance to hype','Direct domain fit','Expert authority and intellectual standing','Narrative architecture and clarity','Authorial precision and finesse'];
const codes=['E','S','U','M','D','R','F','A','N','P'],max=[20,17,15,12,10,9,7,5,3,2];
const fmt=x=>(Object.is(x,-0)?0:x).toFixed(2);
const verdict=x=>x>=85?'Recommend':x>=75?'Consider':x>=65?'Selective':x>=50?'Low priority':'Poor fit';
const books=input.books.map(b=>{
 const a=amazon.find(a=>a.id===b.id);assert(a&&a.count!==null);
 assert.equal(b.raw.length,10);assert.equal(b.notes.length,10);
 const criteria=b.raw.map((x,i)=>{assert(x>=0&&x<=max[i]);return {code:codes[i],name:names[i],max:max[i],power:[0,1,4].includes(i)?2:1,linearPoints:x,contribution:[0,1,4].includes(i)?x*x/max[i]:x,assessment:b.notes[i]};});
 const deductions={T11:b.T11,T12:b.T12,H13:b.periodEnd===null?0:-Math.min(12,Math.max(0,2026-b.periodEnd)/25),P14:-Math.min(10,Math.max(0,2026-a.year)/10),O15:a.count<10?-20:a.count<100?-10:a.count<1000?-5:0};
 const positive=criteria.reduce((s,c)=>s+c.contribution,0),total=positive+Object.values(deductions).reduce((s,x)=>s+x,0);
 const purchaseAttempt=a.attempts.find(x=>x.requestedUrl===`https://www.amazon.com/dp/${b.purchaseAsin}`&&x.verified);
 assert(purchaseAttempt,`Unverified purchase edition: ${b.id}`);
 assert(!a.attempts.some(x=>x.verified&&x.requestedUrl===`https://www.amazon.de/dp/${b.purchaseAsin}`),'Use available German product page');
 return {...b,title:a.title,author:a.author,originalYear:a.year,entryDate:date,criteria,positive,deductions,total,displayScore:fmt(total),meetsTarget:b.status==='recommended'&&total>90,verdict:b.status==='vetoed'?`Veto ${b.veto}`:verdict(total),amazon:a,purchaseUrl:`https://www.amazon.com/dp/${b.purchaseAsin}`};
});
const sorted=[...books].sort((a,b)=>b.total-a.total||a.title.localeCompare(b.title,'en'));
const rec=sorted.filter(b=>b.status==='recommended'),veto=sorted.filter(b=>b.status==='vetoed'),winners=rec.filter(b=>b.meetsTarget);
const row=(...c)=>'| '+c.join(' | ')+' |';
const link=(label,url)=>`[${label}](${url})`;
const reader=b=>link(`A ${b.amazon.stars??'—'}/5 · ${b.amazon.count.toLocaleString('en-US')}`,b.amazon.starsEvidence?.url??b.amazon.url);
const rankRows=rec.map(b=>row(`**${b.displayScore}** · ${b.verdict} · ${b.confidence}`,reader(b),b.author,b.originalYear,link(b.title,b.purchaseUrl)));
const md=[
 '# Wide discovery research under rules 1–15',
 '',
 `**${localTime}, Europe/Warsaw. Sources 54–74.** Two new books exceed 90: **How the World Really Works — 91.40** and **The Fabric of Civilization — 90.70**. The research assessed 21 distinct nominated works: 18 eligible recommendations, one veto and two hard exclusions. All 19 scored works have a verified Amazon count; no missing-count fallback is used.`,
 '',
 `**Confidence:** moderate in the two leading book assessments; high in the calculation and observed product identities; low in their remaining above the exact 90 threshold under a reasonable reassessment. Scores are single judgments under the [current rules](AGENTS.md), not measurements with hundredth-point accuracy. The full raw assessments and contributions are in [the calculation data](${dataPath}); [Amazon evidence](data/discovery_amazon_261018.json) records the product pages, count snippets, timestamps, title/author checks and page hashes.`,
 '',
 '## Scope, method and evidence limits',
 '',
 'The user supplied no source thread. Following the repository’s earlier discovery method, this report nominates the main book records explicitly listed as sources 54–74. Related-product widgets, bibliographies and incidental titles inside reviews are research context, not additional nominated sources. These main book records have no discussion thread requiring comment expansion. No claim is made to have read all 21 books in full: evidence consists of publisher descriptions and contents, available excerpts, direct reviews, bibliographic records and public Amazon pages. Inaccessible full reviews receive no credit beyond the text actually available.',
 '',
 'The search covered six overlapping areas: energy and material systems; manufacturing and logistics; precision and industrial history; innovation and economic development; computing and software maintenance; and scaling. It included current books and older established candidates, checked existing recommendation/veto/exclusion lists, sought adverse assessments, and checked US/UK title aliases. None of the 21 nominated works already had a list entry. Existing works used for calibration were not silently rescored.',
 '',
 'The deductions set a useful search bound: positive contributions cannot exceed 100. Any −10 thematic or obscurity deduction leaves a ceiling of 90 before age, so such a book cannot satisfy a strict >90 target. This directed discovery toward technology and production as central subjects. It did not create an additional exclusion: every nominated eligible title below 90 is retained and ranked.',
 '',
 '## Complete ranked recommendation table',
 '',
 'A = Amazon stars out of five, followed by total ratings, not written reviews. A dash means the star average was not separately verified. The stars and count are a product-page snapshot, not an average across platforms. Book Marks, LibraryThing, StoryGraph and Goodreads are not substituted for missing Amazon counts or blended into the score. Verdict bands: Recommend ≥85; Consider ≥75; Selective ≥65; Low priority ≥50; Poor fit <50. All eligible works remain in the recommendation list regardless of verdict.',
 '',
 '| Quality · verdict · confidence | Readers | Author | Original year | Title |',
 '|---|---|---|---:|---|',
 ...rankRows,
 '',
 'The linked editions are paperback except The Nvidia Way, How Progress Ends and Working in Public, for which the verified hardcover is used. The identified English paperback of How Progress Ends is scheduled for 2027. Amazon.de requests did not provide a verified usable product page; the links use verified matching Amazon.com products. This access limitation does not prove that German stock is absent. Delivery to a particular address was not checked.',
 '',
 '## Why the two leaders clear 90',
 '',
 'How the World Really Works combines a 91.80 positive subtotal with a −0.40 publication-age deduction. The main reservation is its treatment of transition speed and risk, which lowers E to 18/20, M to 11/12 and P to 1.5/2. It still earns strong density, integration and domain-fit marks for its compact account of industrial dependencies. It is recommended for that account, not as an unquestioned forecast.',
 '',
 'The Fabric of Civilization combines a 91.30 positive subtotal with a −0.60 publication-age deduction. Its advantage is the connected production chain: materials, labour, machinery, mathematics, chemistry, trade and institutions. E=18 and M=11 retain the risk of overstating the causal reach of a single industry. The verified US count removes the obscurity deduction.',
 '',
 'Calibration against the unchanged Material World score of 89.5941176471: both new leaders receive the same E=18, S=17, U=14, R=9, F=7 and N=3. Their compact structures support D=9 rather than 8; their M=11 is slightly below its 11.2941176471. Postrel retains A=4 and P=2. Smil receives A=5 for direct specialist standing and P=1.5 for rhetorical overreach. Publication ages differ. These explicit differences, rather than a revised formula, produce the higher totals.',
 '',
 '## Amazon retrieval and threshold checks',
 '',
 'Each lookup starts from an identified English-edition ISBN/ASIN. Public .com.au, .com, .it and .de product pages were attempted as recorded. Verification requires matching title and author, a rating aggregate, and agreement between the top count and the global-rating count when both are present. Challenge/error pages, unverified identities and mismatched translations are not counts. A US/UK title alias is resolved as one work. The selected count is the largest observed verified aggregate for that same English work; counts are never added. The same selection rule was used for every candidate, including the below-target books.',
 '',
 'The Fabric of Civilization illustrates why one marketplace can mislead: the Italian pages show 998, while both inspected US print editions show 1,061. The latter is an observed count, not an estimate or sum. The selected single score uses it. Because the Italian snapshot would fall in a different band, confidence in this book’s >90 classification is low. For Minshall, the UK aggregate is 111 and the US title aggregate is 38; 111 is used once. These differences may reflect marketplace aggregation or update timing; the cause was not established.',
 '',
 '| Work | Selected Amazon aggregate | ASIN | Observed counts across checked products | O15 |',
 '|---|---|---|---|---:|',
 ...sorted.map(b=>row(b.title,link(`${b.amazon.count.toLocaleString('en-US')} · ${b.amazon.marketplace}`,b.amazon.url),b.amazon.asin,[...new Set(b.amazon.attempts.filter(a=>a.verified).map(a=>a.globalCount??a.topCount))].sort((a,b)=>a-b).join(', '),fmt(b.deductions.O15))),
 '',
 '## Calculation and complete assessments',
 '',
 '`total = E²/20 + S²/17 + U + M + D²/10 + R + F + A + N + P + T11 + T12 + H13 + P14 + O15`. E/S/D alone are quadratic; raw attainment is stored separately. H13 uses the historical endpoint when applicable, at −1/25 year capped at −12. P14 uses the original year at −1/10 year capped at −10. The review year is 2026. All sorting and threshold tests use unrounded totals; displayed values use two decimals. The original years are supported by the source and edition records linked in each assessment; confidence is high. Historical endpoint confidence is moderate where an endpoint is assigned; otherwise no single period is identified.',
 ''
];
for(const b of sorted){
 md.push(`<a id="${b.id}"></a>`,`## Source ${b.source} — ${b.title}`,'',`**${b.author}; original ${b.originalYear}. ${b.displayScore} — ${b.verdict}; ${b.confidence} score confidence.**`,'',`Evidence: ${link('nominated record',b.sourceUrl)}; ${b.reviews.map(([n,u])=>link(n,u)).join('; ')}.`,'',b.case,'',`**Strongest objection:** ${b.objection}`,'',`**Exclusions and vetoes:** ${b.eligibility}`,'','| Criterion | Maximum | Raw x | Contribution | Assessment |','|---|---:|---:|---:|---|',...b.criteria.map(c=>row(`${c.code} · ${c.name}`,fmt(c.max),fmt(c.linearPoints),fmt(c.contribution),c.assessment)),'',b.theme,'','| Positive subtotal | T11 | T12 | H13 | P14 | O15 | Final total |','|---:|---:|---:|---:|---:|---:|---:|',row(fmt(b.positive),...Object.values(b.deductions).map(fmt),`**${b.displayScore}**`),'',`Amazon: ${link(`${b.amazon.count.toLocaleString('en-US')} total ratings`,b.amazon.url)}, ${b.amazon.marketplace}, ASIN ${b.amazon.asin}; retrieved ${b.amazon.verifiedAt}. Selected edition: ${link(b.purchaseAsin,b.purchaseUrl)} — ${b.format}. No missing-count fallback.`, '');
}
md.push('## Hard exclusions','');
for(const b of input.excluded)md.push(`<a id="${b.id}"></a>`,`### Source ${b.source} — ${b.title} — ${b.author}`,'',`**Hard exclusion ${b.rule}; ${b.confidence} confidence. No score or counterfactual score.** ${b.reason}`,'',`Evidence: ${link('nominated source',b.sourceUrl)}${b.evidence!==b.sourceUrl?`; ${link('supporting assessment',b.evidence)}`:''}.`,'');
md.push('## Verification and repository result','','The calculation and list checks verify all raw maxima, the three quadratic transformations, all five independent deductions, strict >90 comparison, unrounded sorting, title/author identity, one-list membership and the source-number mapping. Every pre-existing recommendation row and veto decision is preserved; historical analyses and the scoring rules are unchanged. Main titles contain no appended verdict or confidence comments. The result is 993 recommended, 174 vetoed and 303 hard-excluded works, with 74 source records.','');
fs.writeFileSync(report,md.join('\n'));
const output={review:report,reviewedAt:localTime,timeZone:'Europe/Warsaw',reviewYear:2026,formula:prior.formula,baseline:'data/single_scores_261018.json',baselineHashes:baseline.historyHashes,books,excluded:input.excluded};
fs.writeFileSync(dataPath,JSON.stringify(output,null,2)+'\n');

// Preserve every existing row exactly; only the sorted positions change.
const oldRec=baseline.text[main[0]].trimEnd().split(/\r?\n/);
const allRec=oldRec.slice(2).map(line=>{const c=line.split('|').slice(1,-1).map(x=>x.trim()),title=c[3].match(/^\[([^\]]+)\]/)[1];const b=prior.books.find(b=>b.status==='recommended'&&b.title===title&&b.author===c[2]);assert(b);return {line,total:b.total,title};});
for(const b of rec)allRec.push({title:b.title,total:b.total,line:row(date,b.originalYear,b.author,link(b.title,b.purchaseUrl),b.displayScore,b.source)});
allRec.sort((a,b)=>b.total-a.total||a.title.localeCompare(b.title,'en'));
fs.writeFileSync(main[0],[...oldRec.slice(0,2),...allRec.map(b=>b.line),''].join('\r\n'));

let v=baseline.text[main[1]].replace(/\r\n/g,'\n');
v=v.replace(/Updated \*\*[^\n]+/,'Updated **'+localTime+', Europe/Warsaw**. **174 unique source books or nominated series** remain vetoed. [Rules 11–15 baseline](analysis_pubcap_261018_2125.md) · [New discovery assessment]('+report+') · [Prior veto decisions](analysis_veto5_261018_1428.md) · [Hard exclusions](EXCLUDED_BOOKS.md).');
const insertSorted=(text,header,items,getScore)=>{
 const lines=text.split('\n'),start=lines.findIndex(l=>l.startsWith(header))+2;assert(start>1);
 let end=start;while(lines[end]?.startsWith('|'))end++;
 const merged=[...lines.slice(start,end),...items].sort((a,b)=>getScore(b)-getScore(a));
 lines.splice(start,end-start,...merged);return lines.join('\n');
};
v=insertSorted(v,'| Entry date |',veto.map(b=>row(date,b.originalYear,b.author,link(b.title,`${report}#${b.id}`),`**${b.displayScore}**`,b.veto,b.vetoConfidence,b.source)),l=>Number(l.split('|')[5].replaceAll('*','').trim()));
v=v.replace('Full inputs, confidence and explanations are in the [review](analysis_pubcap_261018_2125.md).',`Full inputs, confidence and explanations are in the [baseline review](analysis_pubcap_261018_2125.md) and [new discovery review](${report}).`);
v=insertSorted(v,'| Work · prior assessment |',veto.map(b=>row(`<a id="d-discovery-${b.id}"></a>${link(`${b.title} — ${b.author}`,`${report}#${b.id}`)}`,...b.criteria.map(c=>fmt(c.contribution)),...Object.values(b.deductions).map(fmt),`**${b.displayScore}**`,`${b.verdict} · ${b.confidence}`,link(b.source,`${report}#${b.id}`))),l=>Number(l.split('|')[17].replaceAll('*','').trim()));
for(const b of veto)v+=`\n## ${b.title} — ${b.author}\n\n**${b.veto}; ${b.vetoConfidence} veto confidence. Counterfactual ${b.displayScore}; ${b.confidence} score confidence. Source ${b.source}.** ${b.eligibility}\n\n${b.objection}\n\n${link('Full evidence and criterion breakdown',`${report}#${b.id}`)}.\n`;
fs.writeFileSync(main[1],v.replace(/\n/g,'\r\n'));
const excluded=baseline.text[main[2]].trimEnd().split(/\r?\n/),first=excluded.findIndex(l=>l.startsWith('- '));
const bullets=[...excluded.slice(first),...input.excluded.map(b=>`- ${b.title} — ${b.author}`)].filter(Boolean).sort((a,b)=>a.slice(2).localeCompare(b.slice(2),'en',{sensitivity:'base'}));
fs.writeFileSync(main[2],[...excluded.slice(0,first),...bullets,''].join('\r\n'));
const sources=[...books,...input.excluded].sort((a,b)=>a.source-b.source).map(b=>row(b.source,date,link(`${b.title} — nominated main record`,b.sourceUrl),link(`${b.status==='vetoed'?'Veto '+b.veto:b.status?b.displayScore+'/100':'Hard exclusion '+b.rule}: full assessment`,`${report}#${b.id}`)));
fs.writeFileSync(main[3],baseline.text[main[3]].trimEnd()+'\r\n'+sources.join('\r\n')+'\r\n');
baseline.generatedHashes=Object.fromEntries(main.map(p=>[p,hash(read(p))]));
fs.writeFileSync(baselinePath,JSON.stringify(baseline,null,2)+'\n');
console.log(JSON.stringify({report,recommendedAdded:rec.length,vetoedAdded:veto.length,excludedAdded:input.excluded.length,winners:winners.map(b=>[b.title,b.displayScore])}));
