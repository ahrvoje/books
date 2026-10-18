const fs=require('fs'),crypto=require('crypto'),assert=require('assert/strict');
const input=require('./research92_assessments_261018.json'),amazon=require('./research92_amazon_261018.json');
const prior=[...require('./single_scores_261018.json').books,...require('./discovery90_261018.json').books];
const main=['RECOMMENDED_BOOKS.md','VETOED_BOOKS.md','EXCLUDED_BOOKS.md','SOURCES.md'];
const baselinePath='data/research92_baseline_261018.json',dataPath='data/research92_261018.json';
const read=p=>fs.readFileSync(p,'utf8'),hash=s=>crypto.createHash('sha256').update(s).digest('hex');
let baseline;
if(fs.existsSync(baselinePath)){
 baseline=JSON.parse(read(baselinePath));
 for(const p of main)assert.equal(hash(read(p)),baseline.generatedHashes?.[p]??hash(baseline.text[p]),`Concurrent change: ${p}`);
}else{
 const t=Object.fromEntries(new Intl.DateTimeFormat('en-CA',{timeZone:'Europe/Warsaw',year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',hourCycle:'h23'}).formatToParts(new Date()).map(p=>[p.type,p.value]));
 baseline={date:`${t.year}-${t.month}-${t.day}`,localTime:`${t.year}-${t.month}-${t.day} ${t.hour}:${t.minute}`,report:`analysis_research92_${t.year.slice(2)}${t.month}${t.day}_${t.hour}${t.minute}.md`,text:Object.fromEntries(main.map(p=>[p,read(p)])),historyHashes:Object.fromEntries(fs.readdirSync('.').filter(p=>/^analysis_.*\.md$/.test(p)).map(p=>[p,hash(read(p))])),protectedHashes:Object.fromEntries(['AGENTS.md','data/single_scores_261018.json','data/discovery90_261018.json'].map(p=>[p,hash(read(p))]))};
 fs.writeFileSync(baselinePath,JSON.stringify(baseline,null,2)+'\n');
}
const {date,localTime,report}=baseline;
const names=['Evidence and inferential integrity','Systems integration','Transferable strategic utility','Mechanistic and causal depth','Information density and length justification','Durability and resistance to hype','Direct domain fit','Expert authority and intellectual standing','Narrative architecture and clarity','Authorial precision and finesse'];
const codes=['E','S','U','M','D','R','F','A','N','P'],max=[20,17,15,12,10,9,7,5,3,2];
const fmt=x=>(Object.is(x,-0)?0:x).toFixed(2),row=(...c)=>'| '+c.join(' | ')+' |',link=(n,u)=>`[${n}](${u})`;
const verdict=x=>x>=85?'Recommend':x>=75?'Consider':x>=65?'Selective':x>=50?'Low priority':'Poor fit';
const books=input.books.map(b=>{
 const a=amazon.find(a=>a.id===b.id);assert(a&&a.count!==null);assert.equal(b.raw.length,10);assert.equal(b.notes.length,10);
 const criteria=b.raw.map((x,i)=>{assert(x>=0&&x<=max[i]);return {code:codes[i],name:names[i],max:max[i],power:[0,1,4].includes(i)?2:1,linearPoints:x,contribution:[0,1,4].includes(i)?x*x/max[i]:x,assessment:b.notes[i]};});
 const deductions={T11:b.T11,T12:b.T12,H13:b.periodEnd===null?0:-Math.min(12,Math.max(0,2026-b.periodEnd)/25),P14:-Math.min(10,Math.max(0,2026-a.year)/10),O15:a.count<10?-20:a.count<100?-10:a.count<1000?-5:0};
 const positive=criteria.reduce((s,c)=>s+c.contribution,0),total=positive+Object.values(deductions).reduce((s,x)=>s+x,0);
 assert(a.attempts.some(x=>x.verified&&new URL(x.requestedUrl).pathname===`/dp/${b.purchaseAsin}`),`Unverified edition identity: ${b.id}`);
 const german=a.attempts.some(x=>x.verified&&x.requestedUrl===`https://www.amazon.de/dp/${b.purchaseAsin}`);
 const purchaseUrl=`https://www.amazon.${german?'de':'com'}/dp/${b.purchaseAsin}`;
 const purchasePageVerified=a.attempts.some(x=>x.verified&&x.requestedUrl===purchaseUrl);
 return {...b,title:a.title,author:a.author,originalYear:a.year,entryDate:date,criteria,positive,deductions,total,displayScore:fmt(total),meetsTarget:b.status==='recommended'&&total>92,verdict:b.status==='vetoed'?`Veto ${b.veto}`:verdict(total),amazon:a,purchaseUrl,purchasePageVerified};
});
const sorted=[...books].sort((a,b)=>b.total-a.total||a.title.localeCompare(b.title,'en'));
const rec=sorted.filter(b=>b.status==='recommended'),veto=sorted.filter(b=>b.status==='vetoed');
assert.equal(rec.filter(b=>b.meetsTarget).length,0,'Rewrite result narrative if a book clears the target');
const reader=b=>link(`A ${b.amazon.stars??'—'}/5 · ${b.amazon.count.toLocaleString('en-US')}`,b.amazon.starsEvidence?.url??b.amazon.url);
const md=[
 '# Discovery research: the strict >92 target',
 '',
 `**${localTime}, Europe/Warsaw. Sources 75–98.** None of the 24 new nominated books clears 92 under the unchanged rules. Seventeen pass the exclusion and veto gates, three are vetoed, and four are hard-excluded. The strongest new recommendation is **A City on Mars — 88.80**. All 20 scored books have a verified Amazon rating count; no missing-count fallback is used.`,
 '',
 `The current list leader remains **How the World Really Works — 91.40**, followed by **The Fabric of Civilization — 90.70**. Their prior assessments are preserved in the [earlier discovery review](analysis_widerd_261018_2208.md). This result means that this search found no qualifying >92 book; it does not prove that none exists.`,
 '',
 `**Confidence:** moderate in the book-level assessments and classifications unless specified otherwise; high in the arithmetic and observed Amazon product identities. Each book has one numerical score. Two-decimal display does not make the underlying judgment precise to one hundredth of a point. [Calculation data](${dataPath}) · [Amazon evidence](data/research92_amazon_261018.json) · [Current rules](AGENTS.md).`,
 '',
 '## Scope and search method',
 '',
 'The search covered eight overlapping areas: invention and research organisation; construction and maintenance; physical and digital infrastructure; computing history; energy provision; growth and scaling; space technology and propulsion; and the evolution of engineered objects. It considered older established works and newer titles, checked title aliases and all three existing book lists, and sought critical assessments as well as favourable reviews. The 24 nominated works are new entries, not duplicates of existing recommendations.',
 '',
 'There was no supplied discussion thread. The nominated main book records in sources 75–98 define this research set, following the repository’s earlier discovery method. Related-product widgets, incidental examples and bibliographies in supporting reviews are not additional nominated sources. The main records have no discussion thread requiring comment expansion. Evidence consists of publisher descriptions, contents and available excerpts; direct reviews, including specialist criticism; bibliographic records; and public Amazon product pages. This is not a claim to have read all 24 books in full. When only a review extract was accessible, only that extract informed the assessment.',
 '',
 'Candidates were checked against the hard exclusions before receiving a final score. The search target did not become an extra exclusion: every eligible non-vetoed nomination is retained below. Existing books served as calibration and were not silently rescored. No scoring rule was changed to obtain a winner.',
 '',
 '## Complete ranked recommendation table',
 '',
 'A = Amazon star average out of five and total rating count, not written reviews. A dash means the star average was not separately verified. No averages from different platforms are blended. Verdict bands retain the earlier convention: Recommend ≥85; Consider ≥75; Selective ≥65; Low priority ≥50; Poor fit <50. Every book in this table remains in RECOMMENDED_BOOKS.md, irrespective of its verdict band.',
 '',
 '| Quality · verdict · confidence | Readers | Author | Original year | Title |',
 '|---|---|---|---:|---|',
 ...rec.map(b=>row(`**${b.displayScore}** · ${b.verdict} · ${b.confidence}`,reader(b),b.author,b.originalYear,link(b.title,b.purchaseUrl))),
 '',
 'Purchase links identify English paperback editions, except How the Internet Happened and The Innovation Delusion, for which no English paperback was verified and a hardcover is identified. Matching Amazon.de paperback pages did not return usable verified product records. The table therefore uses Amazon.com edition links. Several US pages also failed to return usable content: those edition identities were verified on another Amazon marketplace and against the publisher record; US stock is not claimed to be verified. The evidence links separately identify the actual marketplace where each count was observed. This access limitation does not establish that German editions are unavailable. A verified German hardcover of A City on Mars is available as a product record through its rating-count link.',
 '',
 '## Why the strongest candidates do not clear 92',
 '',
 'A City on Mars has an 89.10 positive subtotal and a −0.30 original-publication deduction. Its 1,124 observed Amazon ratings remove the obscurity penalty. The engineering, life-support and resource constraints integrate well, but Jeff Foust identifies weaknesses in the legal and policy discussion. The assessment therefore gives E=18/20, M=11/12, D=8/10 and P=1.5/2 rather than near-perfect marks. The calculation does not depend on agreeing with every conclusion about whether settlement should proceed.',
 '',
 'Relative to the unchanged How the World Really Works assessment, A City on Mars receives the same E=18, S=17, U=14, M=11, R=9, F=7, N=3 and P=1.5. D=8 rather than 9 lowers its curved contribution by 1.70; A=4 rather than 5 lowers it by 1.00. Its newer original date recovers 0.10. The net difference is −2.60, giving 88.80. These are explicit book judgments, not a recalibration of the scale.',
 '',
 'The Innovators and Where Good Ideas Come From have sufficient observed Amazon counts to avoid O15. Their limits are selective historical evidence, causal depth and narrative overhead. How Buildings Learn supplies unusually reusable ideas about change and maintenance, but its 250 ratings impose −5 and its 1994 origin imposes −3.20. Even perfect positive criteria would then give only 91.80. The Evolution of Useful Things similarly cannot clear 92 with its current count and original year.',
 '',
 'For the strict >92 target, a 2023 book with 100–999 ratings needs a positive subtotal greater than 97.30. Any −10 thematic deduction makes the target impossible even before the other deductions. These arithmetic bounds focus the search; they do not justify raising raw assessments or suppressing below-target books.',
 '',
 '## Amazon retrieval and evidence',
 '',
 'The retrieval technique begins with a publisher-identified English ISBN and its ISBN-10/ASIN. It requests the public product page across .com, .it, .de and .com.au. A usable result must match title and author, identify the English work, and expose an aggregate rating count. Where both the top rating count and the global-rating total are present, they must agree. Error pages, blank challenge pages and mismatched products are rejected. Translations and unrelated same-title books are not combined.',
 '',
 'The selected value is the largest actually observed verified aggregate for one matching product of the same English work, consistent with the prior discovery review. Counts are never summed across editions or marketplaces. All attempted URLs, response status, title/byline checks, count snippets, retrieval times and page hashes are retained in the evidence JSON. Star averages are accepted only from a matching title and count. This gives an auditable snapshot, not a guarantee that every marketplace exposes identical or exhaustive totals.',
 '',
 'A City on Mars has observed aggregates of 1,120 and 1,124: both are above the threshold. Soonish has 974 in the inspected products, so it receives −5; no unobserved higher count is assumed. The Loonshots count was collected during initial screening, but the final hard exclusion precedes scoring, so it is not assigned a score or included in the scored count table.',
 '',
 '| Work | Selected Amazon aggregate | ASIN | Observed verified counts | O15 |',
 '|---|---|---|---|---:|',
 ...sorted.map(b=>row(b.title,link(`${b.amazon.count.toLocaleString('en-US')} · ${b.amazon.marketplace}`,b.amazon.url),b.amazon.asin,[...new Set(b.amazon.attempts.filter(a=>a.verified).map(a=>a.globalCount??a.topCount))].sort((a,b)=>a-b).join(', '),fmt(b.deductions.O15))),
 '',
 '## Calculation and full assessments',
 '',
 '`total = E²/20 + S²/17 + U + M + D²/10 + R + F + A + N + P + T11 + T12 + H13 + P14 + O15`. Only E, S and D are quadratic. The raw attainment and curved contribution are kept separately. H13 uses the assessed historical endpoint at −1/25 year, capped at −12. P14 uses original publication age at −1/10 year, capped at −10. The review year is 2026. All five deductions apply independently. Sorting and the strict >92 test use unrounded totals; displays use two decimals.',
 '',
 'Original publication years come from the linked publisher and original-edition records; confidence is high. A later paperback or reissue does not reset age. H13 is zero for broad cross-period arguments without a single central historic interval. The two assigned endpoints are 2007 for How the Internet Happened (high confidence) and approximately 1970 for Ignition! (moderate confidence); the latter approximation is recorded while retaining a single score.',
 ''
];
for(const b of sorted){
 md.push(`<a id="${b.id}"></a>`,`## Source ${b.source} — ${b.title}`,'',`**${b.author}; original ${b.originalYear}. ${b.displayScore} — ${b.verdict}; ${b.confidence} score confidence.${b.status==='vetoed'?' Counterfactual only; '+b.vetoConfidence+' veto confidence.':''}**`,'',`Evidence: ${link('nominated record',b.sourceUrl)}; ${b.reviews.map(([n,u])=>link(n,u)).join('; ')}.`,'',b.case,'',`**Strongest objection:** ${b.objection}`,'',`**Exclusions and vetoes:** ${b.eligibility}`,'','| Criterion | Maximum | Raw x | Contribution | Assessment |','|---|---:|---:|---:|---|',...b.criteria.map(c=>row(`${c.code} · ${c.name}`,fmt(c.max),fmt(c.linearPoints),fmt(c.contribution),c.assessment)),'',b.theme,'','| Positive subtotal | T11 | T12 | H13 | P14 | O15 | Final total |','|---:|---:|---:|---:|---:|---:|---:|',row(fmt(b.positive),...Object.values(b.deductions).map(fmt),`**${b.displayScore}**`),'',`Amazon: ${link(`${b.amazon.count.toLocaleString('en-US')} total ratings`,b.amazon.url)}, ${b.amazon.marketplace}, ASIN ${b.amazon.asin}; retrieved ${b.amazon.verifiedAt}. Purchase edition: ${link(b.purchaseAsin,b.purchaseUrl)} — ${b.format}. ${b.purchasePageVerified?'Linked product page verified.':'Edition identity verified on another marketplace; linked-market stock not verified.'} No missing-count fallback.`, '');
}
md.push('## Hard exclusions','');
for(const b of input.excluded)md.push(`<a id="${b.id}"></a>`,`### Source ${b.source} — ${b.title} — ${b.author}`,'',`**Hard exclusion ${b.rule}; ${b.confidence} confidence. No score or counterfactual score.** ${b.reason}`,'',`Evidence: ${link('nominated source',b.sourceUrl)}; ${link('supporting contents or assessment',b.evidence)}.`,'');
md.push('## Verification and repository result','','The independent check recalculates the scores with integer arithmetic, verifies the ten raw maxima and all deductions, checks the strict >92 comparison and unrounded sort order, matches Amazon identities and observed counts, and checks source mapping and list membership. Every old recommendation row, veto table row and exclusion entry is retained. All 27 earlier analysis files, both prior score snapshots and AGENTS.md are unchanged. Main-list titles have no appended verdict or confidence comments. The final counts are 1,010 recommended, 177 vetoed, 307 hard-excluded works and 98 source records.','');
fs.writeFileSync(report,md.join('\n'));
const output={review:report,reviewedAt:localTime,timeZone:'Europe/Warsaw',reviewYear:2026,threshold:{operator:'>',value:92},formula:'sum(E^2/20,S^2/17,U,M,D^2/10,R,F,A,N,P)+T11+T12+H13+P14+O15',priorSnapshots:['data/single_scores_261018.json','data/discovery90_261018.json'],books,excluded:input.excluded};
fs.writeFileSync(dataPath,JSON.stringify(output,null,2)+'\n');

const all=[...prior,...books],key=b=>b.title+' — '+b.author;
const lookup=new Map(all.map(b=>[key(b),b]));assert.equal(lookup.size,all.length);
const oldRec=baseline.text[main[0]].trimEnd().split(/\r?\n/);
const allRec=oldRec.slice(2).map(line=>{const c=line.split('|').slice(1,-1).map(x=>x.trim()),title=c[3].match(/^\[([^\]]+)\]/)[1],b=lookup.get(title+' — '+c[2]);assert(b&&b.status==='recommended');return {line,total:b.total,title};});
for(const b of rec)allRec.push({title:b.title,total:b.total,line:row(date,b.originalYear,b.author,link(b.title,b.purchaseUrl),b.displayScore,b.source)});
allRec.sort((a,b)=>b.total-a.total||a.title.localeCompare(b.title,'en'));
fs.writeFileSync(main[0],[...oldRec.slice(0,2),...allRec.map(b=>b.line),''].join('\r\n'));

let v=baseline.text[main[1]].replace(/\r\n/g,'\n');
v=v.replace(/Updated \*\*[^\n]+/,`Updated **${localTime}, Europe/Warsaw**. **177 unique source books or nominated series** remain vetoed. [Rules 11–15 baseline](analysis_pubcap_261018_2125.md) · [New discovery assessment](${report}) · [Earlier discovery assessment](analysis_widerd_261018_2208.md) · [Prior veto decisions](analysis_veto5_261018_1428.md) · [Hard exclusions](EXCLUDED_BOOKS.md).`);
const insertSorted=(text,header,items,getKey)=>{
 const lines=text.split('\n'),start=lines.findIndex(l=>l.startsWith(header))+2;assert(start>1);
 let end=start;while(lines[end]?.startsWith('|'))end++;
 const merged=[...lines.slice(start,end),...items].map(line=>{const b=lookup.get(getKey(line));assert(b&&b.status==='vetoed',line);return {line,b};}).sort((a,b)=>b.b.total-a.b.total||a.b.title.localeCompare(b.b.title,'en'));
 lines.splice(start,end-start,...merged.map(x=>x.line));return lines.join('\n');
};
v=insertSorted(v,'| Entry date |',veto.map(b=>row(date,b.originalYear,b.author,link(b.title,`${report}#${b.id}`),`**${b.displayScore}**`,b.veto,b.vetoConfidence,b.source)),l=>{const c=l.split('|').slice(1,-1).map(x=>x.trim());return c[3].match(/^\[([^\]]+)\]/)[1]+' — '+c[2];});
v=v.replace('and [new discovery review](analysis_widerd_261018_2208.md).',`and discovery reviews [54–74](analysis_widerd_261018_2208.md) and [75–98](${report}).`);
v=insertSorted(v,'| Work · prior assessment |',veto.map(b=>row(`<a id="d-research92-${b.id}"></a>${link(key(b),`${report}#${b.id}`)}`,...b.criteria.map(c=>fmt(c.contribution)),...Object.values(b.deductions).map(fmt),`**${b.displayScore}**`,`${b.verdict} · ${b.confidence}`,link(b.source,`${report}#${b.id}`))),l=>l.split('|')[1].match(/\[([^\]]+)\]/)[1]);
for(const b of veto)v+=`\n## ${key(b)}\n\n**${b.veto}; ${b.vetoConfidence} veto confidence. Counterfactual ${b.displayScore}; ${b.confidence} score confidence. Source ${b.source}.** ${b.eligibility}\n\n${b.objection}\n\n${link('Full evidence and criterion breakdown',`${report}#${b.id}`)}.\n`;
fs.writeFileSync(main[1],v.replace(/\n/g,'\r\n'));
const excluded=baseline.text[main[2]].trimEnd().split(/\r?\n/),first=excluded.findIndex(l=>l.startsWith('- '));
const bullets=[...excluded.slice(first),...input.excluded.map(b=>`- ${key(b)}`)].filter(Boolean).sort((a,b)=>a.slice(2).localeCompare(b.slice(2),'en',{sensitivity:'base'}));
fs.writeFileSync(main[2],[...excluded.slice(0,first),...bullets,''].join('\r\n'));
const sources=[...books,...input.excluded].sort((a,b)=>a.source-b.source).map(b=>row(b.source,date,link(`${b.title} — nominated main record`,b.sourceUrl),link(`${b.status==='vetoed'?'Veto '+b.veto:b.status?b.displayScore+'/100':'Hard exclusion '+b.rule}: full assessment`,`${report}#${b.id}`)));
fs.writeFileSync(main[3],baseline.text[main[3]].trimEnd()+'\r\n'+sources.join('\r\n')+'\r\n');
baseline.generatedHashes=Object.fromEntries(main.map(p=>[p,hash(read(p))]));
fs.writeFileSync(baselinePath,JSON.stringify(baseline,null,2)+'\n');
console.log(JSON.stringify({report,added:{recommended:rec.length,vetoed:veto.length,excluded:input.excluded.length},above92:rec.filter(b=>b.meetsTarget).length,top:rec.slice(0,5).map(b=>[b.title,b.displayScore])},null,2));
