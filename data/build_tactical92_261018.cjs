const fs=require('fs'),assert=require('assert/strict'),crypto=require('crypto');
const read=p=>fs.readFileSync(p,'utf8'),json=p=>JSON.parse(read(p)),sha=s=>crypto.createHash('sha256').update(s).digest('hex');
const input=json('data/tactical_assessments_261018.json'),amazon=json('data/tactical_amazon_evidence_261018.json');
const snapshots=['data/single_scores_261018.json','data/discovery90_261018.json','data/research92_261018.json'];
const prior=snapshots.flatMap(p=>json(p).books),key=b=>b.title+' — '+b.author;
const main=['RECOMMENDED_BOOKS.md','VETOED_BOOKS.md','EXCLUDED_BOOKS.md','SOURCES.md'];
const bp='data/tactical92_baseline_261018.json',dp='data/tactical92_261018.json';
let base;
if(fs.existsSync(bp)){
 base=json(bp);for(const p of main)assert.equal(sha(read(p)),base.generatedHashes?.[p]??sha(base.text[p]),'Concurrent change: '+p);
}else{
 const t=Object.fromEntries(new Intl.DateTimeFormat('en-CA',{timeZone:'Europe/Warsaw',year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',hourCycle:'h23'}).formatToParts(new Date()).map(p=>[p.type,p.value]));
 base={date:`${t.year}-${t.month}-${t.day}`,localTime:`${t.year}-${t.month}-${t.day} ${t.hour}:${t.minute}`,report:`analysis_tactical92_${t.year.slice(2)}${t.month}${t.day}_${t.hour}${t.minute}.md`,text:Object.fromEntries(main.map(p=>[p,read(p)])),historyHashes:Object.fromEntries(fs.readdirSync('.').filter(p=>/^analysis_.*\.md$/.test(p)).map(p=>[p,sha(read(p))])),protectedHashes:Object.fromEntries(['AGENTS.md',...snapshots,'data/discovery_amazon_261018.json'].map(p=>[p,sha(read(p))]))};
 fs.writeFileSync(bp,JSON.stringify(base,null,2)+'\n');
}
const {date,localTime,report}=base;
const names=['Evidence and inferential integrity','Systems integration','Transferable strategic utility','Mechanistic and causal depth','Information density and length justification','Durability and resistance to hype','Direct domain fit','Expert authority and intellectual standing','Narrative architecture and clarity','Authorial precision and finesse'];
const codes=['E','S','U','M','D','R','F','A','N','P'],max=[20,17,15,12,10,9,7,5,3,2];
const fmt=x=>(Math.round(Math.round(x*6800)/68)/100).toFixed(2),link=(n,u)=>`[${n}](${u})`,row=(...c)=>'| '+c.join(' | ')+' |';
const verdict=x=>x>=85?'Recommend':x>=75?'Consider':x>=65?'Selective':x>=50?'Low priority':'Poor fit';
const table=text=>text.trimEnd().split(/\r?\n/).slice(2).map(line=>({line,c:line.split('|').slice(1,-1).map(x=>x.trim())}));
const oldRows=table(base.text[main[0]]),oldRowByKey=new Map(oldRows.map(r=>[r.c[3].match(/^\[([^\]]+)\]/)[1]+' — '+r.c[2],r]));
const books=input.books.map(b=>{
 const a=amazon.find(a=>a.id===b.id);assert(a&&a.count!==null,b.id);assert.equal(b.raw.length,10);assert.equal(b.notes.length,10);
 const title=a.title,author=a.author,old=prior.find(p=>key(p)===title+' — '+author),oldRow=oldRowByKey.get(title+' — '+author);
 assert.equal(!!old,!!b.priorAssessment,'Unexpected existing identity: '+title);
 const criteria=b.raw.map((x,i)=>{assert(x>=0&&x<=max[i]);return {code:codes[i],name:names[i],max:max[i],power:[0,1,4].includes(i)?2:1,linearPoints:x,contribution:[0,1,4].includes(i)?x*x/max[i]:x,assessment:b.notes[i]};});
 const deductions={T11:b.T11,T12:b.T12,H13:b.periodEnd===null?0:-Math.min(12,Math.max(0,2026-b.periodEnd)/25),P14:-Math.min(10,Math.max(0,2026-a.year)/10),O15:a.count<10?-20:a.count<100?-10:a.count<1000?-5:0};
 const positiveUnits=criteria.reduce((s,c)=>s+Math.round(c.contribution*6800),0),totalUnits=positiveUnits+Object.values(deductions).reduce((s,x)=>s+Math.round(x*6800),0);
 const positive=positiveUnits/6800,total=totalUnits/6800;
 assert(a.attempts.some(x=>x.verified&&new URL(x.requestedUrl).pathname===`/dp/${b.purchaseAsin}`),'Unverified edition: '+b.id);
 const german=a.attempts.some(x=>x.verified&&x.requestedUrl===`https://www.amazon.de/dp/${b.purchaseAsin}`);
 const purchaseUrl=`https://www.amazon.${german?'de':'com'}/dp/${b.purchaseAsin}`;
 const sources=[...new Set([...(oldRow?oldRow.c[5].split(',').map(Number):[]),b.source])].sort((x,y)=>x-y);
 return {...b,title,author,originalYear:a.year,listYear:b.id==='energy'?2017:a.year,entryDate:oldRow?.c[0]??date,sources,kind:old?'reassessment':'new',priorScore:old?.total,criteria,positive,deductions,total,totalUnits,displayScore:fmt(total),meetsTarget:b.status==='recommended'&&totalUnits>92*6800,verdict:verdict(total),amazon:a,purchaseUrl,purchasePageVerified:a.attempts.some(x=>x.verified&&x.requestedUrl===purchaseUrl)};
});
assert.equal(books.length,15);assert(books.every(b=>b.status==='recommended'));assert.equal(books.filter(b=>b.kind==='new').length,12);
const sorted=[...books].sort((a,b)=>b.total-a.total||a.title.localeCompare(b.title,'en'));
assert.equal(sorted.filter(b=>b.meetsTarget).length,0,'Update result narrative if any nomination exceeds92');
const lookup=new Map(prior.map(b=>[key(b),b]));for(const b of books)lookup.set(key(b),b);
const all=[...lookup.values()],allSorted=all.filter(b=>b.status==='recommended').sort((a,b)=>b.total-a.total||a.title.localeCompare(b.title,'en'));
const reader=b=>link(`A ${b.amazon.stars??'—'}/5 · ${b.amazon.count.toLocaleString('en-US')}`,b.amazon.url);
const constraints=json('data/tactical_constraints_261018.json'),social=json('data/tactical_social_261018.json');
const md=[
 '# Tactical discovery for scores above 92','',
 `**${localTime}, Europe/Warsaw. Sources99–113.** This search found **no book above92** under the current rules. It fully assessed12 new nominations and reassessed3 existing books. All15 remain eligible and non-vetoed, and all15 have a verified Amazon aggregate. The strongest new result is **${sorted.find(b=>b.kind==='new').title} — ${sorted.find(b=>b.kind==='new').displayScore}**. The highest reassessed result is **Material World —91.29**. The current overall leader remains **How the World Really Works —91.40**. This is a result of this search, not proof that a qualifying book cannot exist.`,
 '',
 `**Confidence:** high in arithmetic, checked edition identities and recorded count observations; moderate in the book-level assessments. Each work has one final score. Two-decimal display does not remove judgment from criterion attainment. [Calculation data](${dp}) · [Amazon evidence](data/tactical_amazon_evidence_261018.json) · [Rules](AGENTS.md).`,
 '',
 '## Exact constraints before search','',
 'Let L be the loss from the100-point positive maximum, and d the magnitude of all five deductions. Then **score>92 exactly when L+d<8**. A ceiling of92 does not qualify. These constraints can reject a search direction early; they are not extra exclusion rules for nominated books.',
 '',
 '| Observed condition | Necessary condition for >92 | Practical implication |',
 '|---|---|---|',
 '| Either T11 or T12 applies | Impossible: ceiling at most90 | Check the central subject before deep research |',
 '| Amazon count below100 | Impossible: obscurity loss at least10 | Verify identity and count, then stop target pursuit |',
 '| Amazon100–999 | L + publication-age loss + historical-age loss <3 | Needs exceptional positive attainment and a recent original |',
 '| Amazon at least1,000 | L + publication-age loss + historical-age loss <8 | Main search pool |',
 '| No central historic period; Amazon100–999 | Original year later than1996, even if L=0 | Necessary, far from sufficient |',
 '| No central historic period; Amazon at least1,000 | Original year later than1946, even if L=0 | Older works cannot reach the strict target |',
 '',
 'For a2020 original with H13=0, the quality-loss budget is less than7.40 points at1,000+ ratings and less than2.40 points at100–999. E=18 alone loses3.80 points after the quadratic transform. E=18, S=16 and D=8 together lose9.341176470588 points, so that combination cannot exceed92 even before any deduction. E=19 plus a five-point obscurity penalty leaves only1.05 points for every other quality loss and both age penalties.',
 '',
 'More generally, with B=8−d, each quadratic raw criterion must satisfy x>sqrt(m×(m−B)) when0<B<m, and each linear criterion must satisfy x>m−B. These are individual necessary bounds; their combined losses must still fit B. This gives an early upper-bound test without guessing the final score.',
 '',
 '## Realistic search filters and stop rules','',
 '1. Prioritize general-reader explanatory books about production, engineering, computing, materials, energy, logistics, reliability and scaling. Use original publication since2006 as a broad working window; favor2010 onward where the evidence is comparable. These dates are search priorities, not hard cutoffs.',
 '2. Resolve title, author, original year, contents and audience first. Remove fiction and works whose main purpose is specialist training, procedure or technical reference. Do not exclude a coherent explanation merely because it is useful, difficult or divided into concepts.',
 '3. Establish the central topic, historical endpoint and verified Amazon band. Compute the maximum remaining score before reading more reviews. Prefer1,000+ ratings, but do not use a missing count as a way around obscurity.',
 '4. Read a substantial excerpt and a signed specialist review. Seek a specific adverse review independently. Look for linked mechanisms, constraints, bottlenecks, complements, incentives, failure modes and limits on inference. Generic enthusiasm and repeated mentions do not verify E, S or M.',
 '5. Assess E/S/D first because their quadratic losses often decide feasibility. Keep their meanings distinct: evidence is not a demand for randomized historical experiments; density is earned length, not ease of reading; authority includes access, practice and synthesis.',
 '6. Stop pursuing the >92 hypothesis when established losses already exhaust the budget. Still finish and record the score of each formally nominated eligible book. Do not turn the search threshold into a new list exclusion.',
 '',
 'The current scored corpus showed no raw E20 or D10. That compression warranted checking the reasons behind the marks, not awarding maximum scores to force a result. The reassessments below correct identified criterion mistakes and also retain or add supported reservations.',
 '',
 '## Sources beyond Amazon: roles and order','',
 '| Source | Best use | What to verify separately |',
 '|---|---|---|',
 row(link('Focused Hacker News threads','https://news.ycombinator.com/item?id=42268774'),'Find technical cases, engineer objections and follow-up discussion','Votes are discovery signals; inspect every reply in a selected short thread. The '+link('official API','https://github.com/HackerNews/API')+' exposes child IDs for complete traversal.'),
 row(link('Engineering Reddit discussions','https://www.reddit.com/r/MechanicalEngineering/comments/18ucxsq/what_books_not_textbooks_would_you_recommend/'),'Ask for narrative engineering books with useful mechanisms','A no-textbooks question still attracts manuals. Anonymous profession claims are not verified expertise.'),
 row(link('Roots of Progress bibliography','https://blog.rootsofprogress.org/bibliography')+'; '+link('Construction Physics','https://www.construction-physics.com/p/construction-physics-table-of-contents'),'High topical concentration in industrial change, production and technology','These are curated perspectives, not independent factual audits; many old works fail the age/count ceiling.'),
 row(link('Five Books expert interviews','https://fivebooks.com/category/technology/'),'Follow the expert’s reason for choosing a work, then trace the book','Subject lists mix narrative, fiction and textbooks; expert selection alone does not pass the gates.'),
 row(link('LibraryThing','https://www.librarything.com/topic/347682'),'Use tags, date ranges and similar books to expand from good seeds','Dates can describe later editions; verify original production at the publisher or library.'),
 row(link('The StoryGraph','https://www.thestorygraph.com/')+'; '+link('Goodreads editions','https://www.goodreads.com/work/editions/45489188-algorithms-to-live-by-the-computer-science-of-human-decisions'),'Find detailed reader objections and distinguish editions; use nonfiction/topic filters','Reader enjoyment is not technical integrity. Do not substitute these counts for Amazon counts.'),
 row(link('Book Marks','https://bookmarks.reviews/bookmarks-how-it-works/'),'Locate mixed/negative professional reviews and open the originals','Its early-review window can miss later corrections; review counts are not independent replications.'),
 row(link('The Space Review','https://www.thespacereview.com/archive/4130-1.html')+'; '+link('Society of Professional Economists','https://www.spe.org.uk/reading-room/book-reviews/material-world/')+'; '+link('MAA Reviews','https://old.maa.org/press/maa-reviews/the-theory-that-would-not-die'),'Use named reviewers to test causal depth, novelty, coverage and errors','A review is evidence about reception, not a complete audit. Read its concrete reservations.'),
 row(link('British Academy shortlists','https://www.thebritishacademy.ac.uk/news/british-academy-book-prize-2024-shortlist-announced/')+'; '+link('Royal Society science prize','https://royalsociety.org/medals-and-prizes/science-book-prize/'),'Discover researched general nonfiction with serious attention','Many prize books have unwanted central topics or introductory physics; prestige cannot override fit.'),
 '',
 'The efficient sequence is **specialist discovery → primary contents/excerpt → age/topic/count ceiling → adverse specialist check → complete scoring**. Amazon is essential to the prescribed obscurity calculation, but weak as the sole source of candidate selection or technical judgment.',
 '',
 'Useful targeted queries include `site:news.ycombinator.com "books" "manufacturing"`, `site:reddit.com/r/MechanicalEngineering "books" "not textbooks"`, `"TITLE" review bottlenecks`, `"TITLE" review errors`, and `"TITLE" contents excerpt`. Search dates concern the discussion, not the original book year. Search terms such as logistics or scaling are clues to investigate, not reliable classification rules.',
 '',
 '## Tactical allocation and observed search yield','',
 'Use expected verified qualifiers per research hour as the objective. The relevant chain is P(eligible) × P(topic/age/count ceiling survives | eligible) × P(positive quality clears remaining budget | surviving). These probabilities are not measured here; attaching precise numbers would invent precision. Start with small batches from distinct source families, record unique new titles and ceiling survivors, then give more effort to sources with demonstrated yield. Maintain some coverage of a different subject family to avoid repeatedly finding the same books.',
 '',
 `The social-search packet records${social.sources_screened.length} inspected sources and8 distinct candidate leads. Five leads entered this15-book assessment: The Origins of Efficiency, Liftoff, Reentry, The Things We Make and Mitchell’s Artificial Intelligence. The remaining leads—Why Machines Learn, How to Build a Car and Faster, Better, Cheaper in the History of Manufacturing—were deprioritized pending fit, genre or evidence checks; they are not declared excluded or given invented scores. Broad best-book threads mainly repeated existing classics, fiction, self-help and manuals. Narrow engineering discussions gave more useful new leads. This purposive sample is not a measured population success rate.`,
 '',
 '| Scouted source | Actual inspection scope | Useful result |',
 '|---|---|---|',
 ...social.sources_screened.map((s,i)=>row(link('Scout '+(i+1),s.url),s.scope,s.yield)),
 '',
 'The short HN comment subtree about Liftoff/Reentry was read through its three replies. Large threads and comment sections were only partly inspected where stated above; full coverage is not claimed. The formally nominated sources99–113 are the specific main book records below, following the repository’s discovery workflow. Scouting pages are not represented as exhaustive source analyses. Incidental titles, related products and bibliographies in supporting pages do not expand this nomination set.',
 '',
 'Assessments use publisher records, inspected excerpts and named reviews; they are not claims of full-book reading. Detailed access limits and the research trail are preserved in the [social packet](data/tactical_social_261018.json), [platform packet](data/tactical_platform_261018.json), [energy and efficiency packet](data/tactical_energy_261018.json) and [reassessment packet](data/tactical_reassessments_constraints_261018.json). Preliminary proposals in those packets are superseded by the final decisions in this report.',
 '',
 '## Complete ranked set','',
 'A means Amazon stars out of5 and total ratings, not written reviews. A dash means no separately verified star average. No cross-platform average is invented. Verdict bands retain the previous convention: Recommend≥85; Consider≥75; Selective≥65; Low priority≥50; Poor fit<50. Every eligible book is retained regardless of band. All score confidence levels below are moderate.',
 '',
 '| Quality · verdict · confidence | Readers | Author | Original year | Title |',
 '|---|---|---|---:|---|',
 ...sorted.map(b=>row(`**${b.displayScore}** · ${b.verdict} · ${b.confidence}`,reader(b),b.author,b.originalYear,link(b.title,b.purchaseUrl))),
 '',
 'Original year means the production origin used for rule14. Energy and Civilization is the2017 named title of a major revision whose origin is1994; the main recommendation list retains the title’s2017 bibliographic year, while the calculation explicitly uses1994. Translations, new prefaces and paperbacks do not reset age. Purchase editions are paperback except The Origins of Efficiency and Reentry, for which only hardcovers were verified. Amazon.de is used where its matching page was verified; otherwise Amazon.com is the access fallback. Failed German retrieval is not proof of no German availability. Verified edition identity does not establish current stock at every linked marketplace.',
 '',
 '## What changed in existing recommendations','',
 '| Book | Prior current score | New score | Evidence-led change |',
 '|---|---:|---:|---|',
 ...books.filter(b=>b.kind==='reassessment').map(b=>row(link(b.title,b.priorAssessment),fmt(b.priorScore),b.displayScore,b.changes.map(c=>`${c.criterion}: ${c.old} → ${c.new}. ${c.reason}`).join(' '))),
 '',
 'These three books were checked again against both hard exclusions and all vetoes. Their production mechanisms remain transferable; no serious central factual failure or ideological dependence was established. Local errors and interpretive limits reduce positive attainment rather than automatically triggering V1. Original source numbers and entry dates are preserved, with the new source appended. Earlier analyses remain historical records.',
 '',
 '## Amazon retrieval: reproducible evidence','',
 'Begin with the publisher’s identified English print ISBN, derive or verify its ASIN, and inspect matching public product records across .com, .it, .de and .com.au. Require matching title and author, reject a conflicting language, and extract the product’s total-rating aggregate. Where both top and global counters appear, require agreement. Reject blank challenge pages and unavailable products. Record URL, ASIN, market, timestamp, title/byline, count snippet and response hash. Do not infer a count from written-review totals or search snippets about an unrelated product.',
 '',
 'Selection follows the existing repository method: the largest actually observed verified aggregate for one matching English product on this review date. Counts are never summed. The fresh retrieval file is preserved separately from the combined evidence packet. For Fabric, the earlier same-day US product showed1,061; Italy showed998 both then and now. The later US response was blank, so it did not supersede the verified1,061 with a lower US observation. The preserved US timestamp, product and associated4.7 stars are used together. This market difference warrants clear provenance; it does not authorize adding counts.',
 '',
 '| Work | Selected verified aggregate | ASIN | Observed counts | O15 |',
 '|---|---|---|---|---:|',
 ...sorted.map(b=>row(b.title,link(`${b.amazon.count.toLocaleString('en-US')} · ${b.amazon.marketplace}`,b.amazon.url),b.amazon.asin,[...new Set(b.amazon.attempts.filter(a=>a.verified).map(a=>a.globalCount??a.topCount))].sort((a,b)=>a-b).join(', '),fmt(b.deductions.O15))),
 '',
 'The Origins of Efficiency and The Alignment Problem lose five points at186 and716 ratings. Neither has a missing-count fallback. Both are useful future count-band checks: excluding O15, their other assessed losses total less than eight points. Their present verified counts therefore decide the current target failure. A future assessment must verify the new count and update age and evidence; no unobserved increase is assumed.',
 '',
 '## Formula and complete criterion assessments','',
 '`total = E²/20 + S²/17 + U + M + D²/10 + R + F + A + N + P + T11 + T12 + H13 + P14 + O15`.',
 '',
 'Only E, S and D are quadratic. H13 uses the central period’s end at1 point per25 years, capped at12. P14 uses original production at1 point per10 years, capped at10. Both use fractional years measured against2026. T11 and T12 apply separately. Liftoff uses2008 and Reentry2020 as historical endpoints, high confidence. All other nominations explain broad cross-period or ongoing systems without one central historic interval. Sorting and the strict >92 test use unrounded values; criterion contributions and totals display two decimals. Migrated M=192/17 remains exact in Material World and Energy and Civilization.',
 ''
];
for(const b of sorted){
 md.push(`<a id="${b.id}"></a>`,`## Source ${b.source} — ${b.title}`,'',`**${b.author}; production origin${b.originalYear}. ${b.displayScore} — ${b.verdict}; ${b.confidence} confidence. ${b.kind==='new'?'New nomination.':'Reassessment; contributing sources '+b.sources.join(', ')+'.'}**`,'',`Evidence: ${link('nominated record',b.sourceUrl)}; ${b.reviews.map(([n,u])=>link(n,u)).join('; ')}.`,'',b.case,'',`**Strongest objection:** ${b.objection}`,'',`**Hard exclusions and vetoes:** ${b.eligibility}`,'');
 if(b.priorAssessment)md.push(`Prior evidence: ${link('original detailed assessment',b.priorAssessment)}; ${link('current rules11–15 baseline','analysis_pubcap_261018_2125.md')}. ${b.changes.map(c=>`${c.criterion}: ${c.reason}`).join(' ')} Unchanged criterion attainments are reassessed and justified below; repetition of recommendations is not independent validation.`, '');
 md.push('| Criterion | Maximum | Raw x | Contribution | Assessment |','|---|---:|---:|---:|---|',...b.criteria.map(c=>row(`${c.code} · ${c.name}`,fmt(c.max),fmt(c.linearPoints),fmt(c.contribution),c.assessment)),'',b.theme,'','| Positive subtotal | T11 | T12 | H13 | P14 | O15 | Final total |','|---:|---:|---:|---:|---:|---:|---:|',row(fmt(b.positive),...Object.values(b.deductions).map(fmt),`**${b.displayScore}**`),'',`Amazon: ${link(`${b.amazon.count.toLocaleString('en-US')} total ratings`,b.amazon.url)}, ASIN${b.amazon.asin}; observed${b.amazon.verifiedAt}. Purchase edition: ${link(b.purchaseAsin,b.purchaseUrl)}, ${b.format}. ${b.purchasePageVerified?'Linked product page verified.':'Edition identity verified on another market; linked-market stock not verified.'} No missing-count fallback.`, '');
}
md.push('## Eligibility boundary and verification','','Algorithms to Live By passes rule2 with moderate confidence. Its main explanatory structure concerns computation, bounded resources and human decision-making. Explicit practical advice creates a real boundary question, but method-labelled chapters and useful applications do not alone establish specialist training. The authorized introduction and detailed review show a conceptual argument that remains useful even where the advice is weak. This differs from a work whose main structure teaches a procedure or operating method. It receives a complete score rather than disappearing from the assessment.','','No new hard exclusion or veto is established in this nomination set. The lowest scored nomination is retained in the ranked table. Search leads not nominated are recorded as unresolved/deprioritized, not entered into the exclusion list.','','Verification recalculates every score independently in integer units of1/6800, including the preserved migrated M fractions; checks all maxima, deductions, strict thresholds, identities and list ordering; and verifies every selected count against its saved page evidence. All28 previous analyses and the scoring rules are preserved. The result is1,022 recommendations,177 vetoed works,307 hard exclusions and113 source records. Twelve recommendations are new; three are reassessed. VETOED_BOOKS.md and EXCLUDED_BOOKS.md remain unchanged.','');
// Leave links, code and anchors intact when adding missing spaces in research notes.
const prose=md.map(line=>line.split(/(\[[^\]]*\]\([^)]*\)|`[^`]*`|<[^>]*>)/g).map((s,i)=>i%2?s:s.replace(/\b([A-Za-z]{3,}|a|at|of|to|be|in)(\d)/g,'$1 $2').replace(/(\d)([A-Za-z]{3,}|Ma|mi|in)\b/g,'$1 $2').replace(/—(?=\d)/g,'— ').replace(/’s(?=\d)/g,'’s ').replaceAll('millionyears','million years').replaceAll('underE','under E').replaceAll('by root','in the linked evidence packet')).join(''));
fs.writeFileSync(report,prose.join('\n'));
fs.writeFileSync(dp,JSON.stringify({review:report,reviewedAt:localTime,timeZone:'Europe/Warsaw',reviewYear:2026,threshold:{operator:'>',value:92},priorSnapshots:snapshots,books,excluded:[]},null,2)+'\n');
const rows=oldRows.map(r=>{
 const identity=r.c[3].match(/^\[([^\]]+)\]/)[1]+' — '+r.c[2],b=lookup.get(identity);assert(b);
 if(books.includes(b))return {title:b.title,total:b.total,line:row(b.entryDate,b.listYear,b.author,link(b.title,b.purchaseUrl),b.displayScore,b.sources.join(', '))};
 return {title:b.title,total:b.total,line:r.line};
});
for(const b of books.filter(b=>b.kind==='new'))rows.push({title:b.title,total:b.total,line:row(b.entryDate,b.listYear,b.author,link(b.title,b.purchaseUrl),b.displayScore,b.source)});
rows.sort((a,b)=>b.total-a.total||a.title.localeCompare(b.title,'en'));
fs.writeFileSync(main[0],[...base.text[main[0]].split(/\r?\n/).slice(0,2),...rows.map(r=>r.line),''].join('\r\n'));
const sourceRows=books.map(b=>row(b.source,date,link(`${b.title} — nominated main record`,b.sourceUrl),link(`${b.displayScore}/100: full assessment`,`${report}#${b.id}`)));
fs.writeFileSync(main[3],base.text[main[3]].trimEnd()+'\r\n'+sourceRows.join('\r\n')+'\r\n');
base.generatedHashes=Object.fromEntries(main.map(p=>[p,sha(read(p))]));fs.writeFileSync(bp,JSON.stringify(base,null,2)+'\n');
console.log(JSON.stringify({report,above92:books.filter(b=>b.meetsTarget).length,assessed:sorted.map(b=>[b.title,b.displayScore,b.kind]),overallTop:allSorted.slice(0,5).map(b=>[b.title,b.total.toFixed(2)])},null,2));
