const fs=require('fs');
const assert=require('assert/strict');
const crypto=require('crypto');
const read=f=>fs.readFileSync(f,'utf8');
const hash=f=>crypto.createHash('sha256').update(read(f)).digest('hex');
const baseline=require('./deductions_baseline_261018.json');
const assessments=require('./deductions_assessments_261018.json').books;
const amazon=require('./amazon_counts_261018.json');
const fmt=n=>(Math.abs(n)<1e-12?0:n).toFixed(2);
const band=n=>n>=85?'Recommend':n>=75?'Consider':n>=65?'Selective':n>=50?'Low priority':'Poor fit';
const obscurity=n=>n===null?null:n<10?-20:n<100?-10:n<1000?-5:0;
const recency=end=>end===null?0:end==='?'?null:(-Math.min(12,Math.max(0,2026-end)/25)||0);
const criteria=[['E',20,2],['S',17,2],['U',15,1],['M',12,1],['D',10,2],['R',9,1],['F',7,1],['A',5,1],['N',3,1],['P',2,1]];
const sum=a=>a.reduce((s,n)=>s+n,0);
const md=s=>String(s??'').replace(/\|/g,'&#124;').replace(/\r?\n/g,' ');
const identity=b=>(b.title+'\u0000'+b.author).normalize('NFKD').toLowerCase();
const range=(low,high)=>Math.abs(high-low)<1e-9?fmt(high):fmt(low)+'–'+fmt(high);
assert.equal(sum(criteria.map(c=>c[1])),100);
assert.deepEqual([0,9,10,99,100,999,1000].map(obscurity),[-20,-20,-10,-10,-5,-5,0]);
assert.equal(obscurity(null),null);
assert.equal(recency(null),0);assert.equal(recency('?'),null);
assert.equal(recency(2026),0);assert.equal(recency(2001),-1);assert.equal(recency(2014),-0.48);assert.equal(recency(1600),-12);
for(const [code,max,power] of criteria){assert.equal((max/2)**power/(power===2?max:1),power===2?max/4:max/2,code);}
assert.equal(new Set(assessments.map(b=>b.id)).size,1148);
assert.equal(new Set(amazon.books.map(b=>b.id)).size,1148);
const amap=new Map(assessments.map(b=>[b.id,b])),ratings=new Map(amazon.books.map(b=>[b.id,b]));
const books=baseline.books.map(b=>{
  const a=amap.get(b.id),r=ratings.get(b.id);assert(a&&r,b.title);
  assert.equal(a.title,b.title);assert.equal(r.title,b.title);assert.equal(a.author,b.author);assert.equal(r.author,b.author);
  const contributions=Object.fromEntries(criteria.map(([code,max,power])=>{
    const x=b.linearPoints[code];assert(x>=0&&x<=max,b.title+' '+code);
    const p=power===2?x*x/max:x;assert(Math.abs(p-b.contributions[code])<1e-9,b.title+' '+code);return[code,p];
  }));
  const positive=sum(Object.values(contributions));assert(Math.abs(positive+b.thematic-b.total)<1e-9,b.title);
  assert([0,-10].includes(b.thematic));
  assert(r.count===null||Number.isInteger(r.count)&&r.count>=0,b.title);
  const T11=b.thematic,T12=a.theme12?-10:0,H13=recency(a.periodEnd),O14=obscurity(r.count);
  const upper=positive+T11+T12+(H13??0)+(O14??0),lower=upper+(H13===null?-12:0)+(O14===null?-20:0);
  const pending=[H13===null?'H13':null,O14===null?'O14':null].filter(Boolean);
  const verdict=band(lower)===band(upper)?band(upper):band(lower)+' to '+band(upper);
  const scoreConfidence=pending.length?'unknown':a.periodConfidence==='low'&&H13<0?'low':b.scoreConfidence;
  return {...b,oldTotal:undefined,originalLinearTotal:b.oldTotal,previousTotal:b.total,evidenceConfidence:b.scoreConfidence,contributions,positive,assessment:a,amazon:r,deductions:{T11,T12,H13,O14},lower,upper,total:pending.length?null:upper,displayScore:range(lower,upper),pending,verdict:b.status==='vetoed'?'Veto '+b.veto:verdict,scoreConfidence,deltaLow:lower-b.total,deltaHigh:upper-b.total};
});
const sort=list=>list.sort((a,b)=>b.upper-a.upper||b.lower-a.lower||a.title.localeCompare(b.title,'en')||a.author.localeCompare(b.author,'en'));
const recommended=sort(books.filter(b=>b.status==='recommended')),vetoed=sort(books.filter(b=>b.status==='vetoed'));
assert.equal(recommended.length,975);assert.equal(vetoed.length,173);
assert.equal(new Set(books.map(identity)).size,1148);
for(const [file,value] of Object.entries(baseline.historicalHashes))assert.equal(hash(file),value,'Historical file changed: '+file);
const exclusionRows=read('EXCLUDED_BOOKS.md').split(/\r?\n/).filter(l=>l.startsWith('- '));
assert.equal(exclusionRows.length,301);
const normalize=s=>s.normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]/g,'');
for(const line of exclusionRows){const [title,author]=line.slice(2).split(' — ');for(const b of books.filter(b=>normalize(b.title)===normalize(title)))assert(author&&normalize(author)!==normalize(b.author),'Excluded overlap: '+b.title);}
for(const b of books)for(const n of b.sources)assert(baseline.sourceFiles[n],b.title);
const configFile='data/deductions_report_261018.json';
let config;
if(fs.existsSync(configFile))config=JSON.parse(read(configFile));
else{
  const local=new Intl.DateTimeFormat('sv-SE',{timeZone:'Europe/Warsaw',year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',hourCycle:'h23'}).format(new Date());
  assert(local.startsWith('2026-10-18'),'Use client review date');
  const stamp=local.replace(/\D/g,'');config={reviewedAt:local,report:'analysis_deductions_'+stamp.slice(2,8)+'_'+stamp.slice(8,12)+'.md'};
  fs.writeFileSync(configFile,JSON.stringify(config,null,2)+'\n');
}
const report=config.report;
const stats={reviewed:books.length,recommended:recommended.length,vetoed:vetoed.length,excluded:301,theme12:books.filter(b=>b.deductions.T12).length,bothThemes:books.filter(b=>b.deductions.T11&&b.deductions.T12).length,datedPeriods:books.filter(b=>b.deductions.H13<0).length,unknownPeriods:books.filter(b=>b.deductions.H13===null).length,amazonObserved:books.filter(b=>b.amazon.count!==null).length,amazonUnknown:books.filter(b=>b.amazon.count===null).length,determinateTotals:books.filter(b=>b.total!==null).length,provisionalTotals:books.filter(b=>b.total===null).length,obscurityBands:Object.fromEntries([-20,-10,-5,0].map(n=>[n,books.filter(b=>b.deductions.O14===n).length])),certainlyLower:books.filter(b=>b.upper<b.total-1e-9).length};
// b.total now means revised total; compare changes against the immutable baseline instead.
stats.certainlyLower=books.filter(b=>b.deltaHigh<-1e-9).length;
stats.unchangedDeterminate=books.filter(b=>b.total!==null&&Math.abs(b.deltaHigh)<1e-9).length;
const sourceLinks=b=>b.sources.map(n=>'['+n+']('+baseline.sourceFiles[n]+')').join(', ');
const deduction=n=>n===null?'?':fmt(n);
const link=b=>b.titleCell.match(/^\[[^\]]+\]\((?:<[^>]+>|[^)]+)\)/)[0];
const oldScore=b=>baseline.books.find(x=>x.id===b.id).total;
const explanation=b=>{
  const a=b.assessment;
  const theme=a.theme12?'Rule 12: central '+a.theme12+'.':'Rule 12: no listed central theme established; application domains alone do not trigger it.';
  const period=a.periodEnd===null?'Rule 13: no single central historical period.':a.periodEnd==='?'?'Rule 13: historical endpoint unresolved; deduction range −12 to 0.':'Rule 13: assessed endpoint '+a.periodEnd+'; '+a.periodConfidence+' confidence.';
  return [theme,period,a.note,a.scopeEvidence?'[Scope check]('+a.scopeEvidence+').':null].filter(Boolean).join(' ');
};
const ledgerHeader='| Work · prior evidence | E² /20 | S² /17 | U /15 | M /12 | D² /10 | R /9 | F /7 | A /5 | N /3 | P /2 | T11 | T12 | H13 | O14 | Old → new | Δ range | Verdict · confidence | Sources |\n|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|---|\n';
const ledgerRow=b=>'| <a id="d-'+b.id+'"></a>['+md(b.title+' — '+b.author)+']('+b.priorAssessment+') | '+criteria.map(([c])=>fmt(b.contributions[c])).join(' | ')+' | '+['T11','T12','H13','O14'].map(c=>deduction(b.deductions[c])).join(' | ')+' | '+fmt(oldScore(b))+' → **'+b.displayScore+'** | '+range(b.deltaLow,b.deltaHigh)+' | '+md(b.verdict)+' · '+b.scoreConfidence+' | '+sourceLinks(b)+' |';
const rated=b=>(b.reader||'NR')+'; '+(b.amazon.count!==null?'[Amazon '+b.amazon.count.toLocaleString('en-US')+']('+b.amazon.url+')':'Amazon ?');
const rankedRow=b=>'| [**'+b.displayScore+' · '+b.verdict+'**](#d-'+b.id+') · '+b.scoreConfidence+(b.pending.length?' · pending '+b.pending.join('/'):'')+' | '+md(rated(b))+' | '+md(b.author)+' | '+md(b.firstYear)+' | '+link(b)+' |';
let text='# Rules 12–14: complete current-list reassessment\n\nReviewed **'+config.reviewedAt+', Europe/Warsaw**. All **975 eligible entries and 173 vetoed entries** are covered. The 301 hard exclusions remain unscored. [Recommended list](RECOMMENDED_BOOKS.md) · [Vetoed list](VETOED_BOOKS.md) · [Calculations](data/deductions_scores_261018.json) · [Amazon evidence](data/amazon_counts_261018.json) · [Validation](data/deductions_validation_261018.json).\n\n';
text+='## Result and limits\n\n'+stats.determinateTotals+' totals are determinate under the recorded assessments; '+stats.provisionalTotals+' remain provisional. Amazon counts were recovered for '+stats.amazonObserved+' works; '+stats.amazonUnknown+' counts remain unknown. '+stats.unknownPeriods+' historical endpoints remain unresolved. A range is the set of possible totals from those missing inputs, not a statistical confidence interval. Endpoint estimates marked low confidence are judgments about central scope, not verified exact chronology.\n\nRule 12 applies to '+stats.theme12+' works, including the philosophy addition found in the user’s updated AGENTS.md. '+stats.bothThemes+' works receive both thematic deductions. '+stats.certainlyLower+' totals are certainly lower than before; '+stats.unchangedDeterminate+' determinate totals are unchanged. No new book was nominated, no low-score book was removed, and all prior vetoes remain.\n\n';
text+='## Rules applied\n\nThe user confirmed that rules 11 and 12 add separately and that age runs from the period’s **end**, with fractional years/25. The ten positive criteria retain their latest recorded attainment. This is a preference-rule reassessment, not a new full-text review of 1,148 works. Prior positive-score reasons, eligibility decisions and veto evidence are linked for each work. No new evidence warranted a change to those ten assessments in this review. Rule 11 is retained from the prior profile; rule 12 is newly assessed.\n\n```text\npositive = E²/20 + S²/17 + U + M + D²/10 + R + F + A + N + P\ntotal = positive + T11 + T12 + H13 + O14\nT11, T12 each belong to {0, −10}\nH13 = −min(12, max(0, 2026 − assessed_period_end)/25)\nO14 = −20 if n < 10; −10 if 10 ≤ n < 100; −5 if 100 ≤ n < 1000; 0 otherwise\n```\n\nE/S/D in the formula are raw linear assessments, not contributions already squared. The current maxima are 20/17/15/12/10/9/7/5/3/2. An old date of publication or composition does not create an age deduction for a general argument. Broad cross-period syntheses receive H13=0 when no single period is central. A biography or event narrative is assessed from its central coverage, not automatically from the person’s death or a later epilogue. Estimated endpoints remain explicitly low confidence.\n\nRule 12 concerns the book’s center: finance, war, politics/political intelligence, media, power or philosophy. Technology, engineering, production, logistics, resource management and scientific improvement can use those subjects as applications without receiving the deduction. A category overlap receives rule 12 only once. These are interpretive judgments with moderate confidence unless a note states otherwise.\n\nUnknown O14 is bounded by [−20, 0]; unknown H13 by [−12, 0]. Unknown does not mean no penalty, zero ratings, or an assumed average count. Totals may be negative; no unrequested zero floor is imposed. All calculations and thresholds use unrounded values. General bands remain Recommend ≥85, Consider ≥75, Selective ≥65, Low priority ≥50, Poor fit <50. Vetoes override every band.\n\n';
text+='## Evidence coverage\n\nMatching direct Amazon product locators were checked for 1,030 works. Another 118 received title-and-author searches. Amazon.de fallback was checked for 160 inaccessible entries and recovered no counts; further repeated blocked-page probes were not treated as evidence. Available Amazon.com aggregates are used consistently, without adding editions, formats or marketplaces. These are cached page snapshots retrieved on 2026-10-18, with crawl-age notes in the evidence file, not guaranteed live counts. One plain-text page supplied a global-rating count; the other recovered counts use the product’s rating aggregate element. Missing pages, missing rating controls and a failed search never establish zero ratings. Related-product ratings and Goodreads totals are not substituted.\n\nPrior Goodreads/other-reader snapshots and edition locators are retained when no Amazon count was observed; they are not newly verified stock or availability claims. All previously conditional identities and edition limits still apply. In particular, named series remain one source reading unit; no invented series-wide Amazon total is assigned.\n\n';
text+='## Ranked eligible list — five columns\n\nSorted by unrounded upper bound, then lower bound, then title/author. This is a **provisional order**, not a claimed exact rank where ranges overlap. A single score is conditional on its stated scope assessments and snapshot. “Amazon n” is a count, not an average star rating; prior reader ratings retain their existing labels.\n\n| Quality · verdict · confidence | Readers / Amazon count | Author | First year | Title · edition |\n|---|---|---|---|---|\n'+recommended.map(rankedRow).join('\n')+'\n\n';
text+='## Full eligible criterion ledger\n\nCells E through P are final contributions. The ten raw assessments are preserved separately in the JSON. Each old→new change is caused solely by the displayed new deductions; a zero change means none of the new rules yields a known penalty. “?” marks an unresolved deduction, whose bounds are included in the total range.\n\n'+ledgerHeader+recommended.map(ledgerRow).join('\n')+'\n\n';
text+='## Full vetoed counterfactual ledger\n\nOnly the veto gate is suspended for these calculations; the previously identified flaws remain in the positive assessment. None becomes recommended. Veto reason and veto confidence are preserved in [VETOED_BOOKS.md](VETOED_BOOKS.md).\n\n'+ledgerHeader+vetoed.map(ledgerRow).join('\n')+'\n\n';
text+='## Per-book deduction decisions and evidence\n\nThe endpoint column is an assessed central-period end. A dash means the account was judged not to have one central historical period; a question mark means that question is unresolved. Generic statements below describe the applied classification, while prior dossiers supply the underlying subject evidence.\n\n| Work | Central-period end | Amazon evidence | Rule-12/13 decision and qualification |\n|---|---|---|---|\n'+books.map(b=>'| ['+md(b.title+' — '+b.author)+']('+b.priorAssessment+') | '+(b.assessment.periodEnd===null?'—':b.assessment.periodEnd)+' | '+(b.amazon.count===null?'Unknown; attempted': '['+b.amazon.count+']('+b.amazon.url+')')+' | '+md(explanation(b))+' |').join('\n')+'\n\n';
text+='## Source and prior-analysis index\n\nThis review adds no source number. All earlier analyses remain historical evidence and retain their old scores.\n\n| Source | Prior analysis | Current scored works |\n|---:|---|---:|\n'+Object.entries(baseline.sourceFiles).map(([n,file])=>'| <a id="source-'+n+'"></a>'+n+' | ['+file+']('+file+') | '+books.filter(b=>b.sources.includes(+n)).length+' |').join('\n')+'\n\n## Verification\n\nValidated all 1,148 title/author identities, ten raw criterion bounds and contribution calculations, old-total reconciliation, independent new-score bounds, deduction thresholds at 9/10/99/100/999/1000, fractional age arithmetic and the −12 cap, source-number preservation, status-list separation, all 301 exclusions, ranking order, and historical-file hashes. Counts and hashes are stored in the validation file. Missing external inputs remain visible rather than being declared verified.\n';
fs.writeFileSync(report,text);
const recHeader='[Rules 12–14 review]('+report+'). Score ranges have unresolved Amazon counts or historical endpoints; order is by upper bound, then lower bound. Confidence in arithmetic is high; assessment confidence is shown per entry.\n\n| Entry date | First publication year | Author | Title | Score / 100 | Source |\n|---|---|---|---|---:|---:|\n';
const recRows=recommended.map(b=>{
 const suffix=b.titleCell.replace(/^\[[^\]]+\]\((?:<[^>]+>|[^)]+)\)\s*—\s*[^;]+;\s*(?:moderate|low|high) confidence/,'');
 const qualifiers=suffix.startsWith(';')?suffix:'';
 return '| '+b.entryDate+' | '+md(b.firstYear)+' | '+md(b.author)+' | '+link(b)+' — '+b.verdict.toLowerCase()+'; '+b.scoreConfidence+' confidence'+(b.pending.length?'; pending '+b.pending.join('/'):'')+qualifiers+' | '+b.displayScore+' | '+b.sources.join(', ')+' |';
});
fs.writeFileSync('RECOMMENDED_BOOKS.md',recHeader+recRows.join('\n')+'\n');
let veto='# Vetoed books\n\nUpdated **'+config.reviewedAt+', Europe/Warsaw**. **173 unique source books or nominated series** remain vetoed. [Current rules 12–14 review]('+report+') · [Prior veto decisions](analysis_veto5_261018_1428.md) · [Hard exclusions](EXCLUDED_BOOKS.md).\n\nCounterfactual scores suspend only the veto gate and retain the identified flaws. Unknown deductions produce explicit ranges. Order is by upper bound, then lower bound. Counterfactual assessment confidence remains low; incomplete totals have unknown confidence. Veto confidence is separate and preserved.\n\n| Entry date | First year | Author | Title | Counterfactual /100 | Veto | Veto confidence | Sources |\n|---|---|---|---|---:|---|---|---|\n';
veto+=vetoed.map(b=>'| '+b.entryDate+' | '+md(b.firstYear)+' | '+md(b.author)+' | '+b.titleCell+' | **'+b.displayScore+'** | '+b.veto+' | '+b.vetoConfidence+' | '+b.sources.join(', ')+' |').join('\n');
veto+='\n\n## Full counterfactual score table\n\nE/S/D are already curved contributions. H13/O14 “?” are unresolved and included in the score range. Full raw assessments, confidence and per-book explanations are in the [review]('+report+').\n\n'+ledgerHeader+vetoed.map(ledgerRow).join('\n')+'\n\n';
veto+='The following reasons and disposition notes are preserved from prior reviews. Any scores mentioned in those historical notes are superseded by the current tables above.\n\n'+baseline.vetoedBefore.slice(baseline.vetoedBefore.indexOf('## Reasons and evidence'));
fs.writeFileSync('VETOED_BOOKS.md',veto);
const sources=baseline.sourcesBefore.split(/\r?\n/).map(l=>{
 if(!/^\| \d+ \|/.test(l))return l;
 return l.replace('current quadratic scores','earlier quadratic scores').replace('under current quadratic rules','under earlier quadratic rules').replace(/\s*\|$/,' [Current rules 12–14]('+report+'#source-'+l.split('|')[1].trim()+'). |');
}).join('\n');
fs.writeFileSync('SOURCES.md',sources);
const output={review:report,reviewedAt:config.reviewedAt,timeZone:'Europe/Warsaw',reviewYear:2026,formula:'sum(E^2/20,S^2/17,U,M,D^2/10,R,F,A,N,P)+T11+T12+H13+O14',stats,criteria:criteria.map(([code,max,power])=>({code,max,power})),books};
fs.writeFileSync('data/deductions_scores_261018.json',JSON.stringify(output,null,2)+'\n');
for(const list of [recommended,vetoed])for(let i=1;i<list.length;i++)assert(list[i-1].upper>=list[i].upper,'Order');
for(const b of books){const independent=oldScore(b)+b.deductions.T12+(b.deductions.H13??0)+(b.deductions.O14??0);assert(Math.abs(independent-b.upper)<1e-9,b.title);assert(b.lower<=b.upper);}
for(const [file,value] of Object.entries(baseline.historicalHashes))assert.equal(hash(file),value,file);
const validation={passed:true,report,stats,checks:['All current entries covered once','Ten raw assessments retained; curves applied once','Independent score-bound verification','Deduction boundaries and recency cap','975 eligible and 173 vetoed; 301 exclusions unscored','Author/title identities and source references preserved','Current status lists disjoint','Historical reports and excluded list unchanged','Upper-bound ordering verified'],historicalHashes:baseline.historicalHashes,outputHashes:Object.fromEntries([report,'RECOMMENDED_BOOKS.md','VETOED_BOOKS.md','SOURCES.md','data/deductions_scores_261018.json'].map(f=>[f,hash(f)]))};
fs.writeFileSync('data/deductions_validation_261018.json',JSON.stringify(validation,null,2)+'\n');
console.log(JSON.stringify({report,stats,topDeterminate:recommended.filter(b=>b.total!==null).slice(0,12).map(b=>({title:b.title,score:b.total,confidence:b.scoreConfidence}))},null,2));
