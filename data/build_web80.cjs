const fs = require('fs');
const crypto = require('crypto');
const assert = require('assert/strict');
const path = require('path');
const input = 'data/web80_assessments.json';
const baselineFile = 'data/web80_baseline.json';
const data = JSON.parse(fs.readFileSync(input, 'utf8'));
const baseline = JSON.parse(fs.readFileSync(baselineFile, 'utf8'));
const hash = value => crypto.createHash('sha256').update(value).digest('hex');
const lines = name => fs.readFileSync(name, 'utf8').split(/\r?\n/).filter(Boolean);
const normalized = value => value.normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]/g, '');
const books = data.books;
const ranked = books.filter(b => b.status === 'ranked').sort((a,b) => b.total-a.total || a.title.localeCompare(b.title));
const excluded = books.filter(b => b.status === 'excluded');
const link = ([label,url]) => `[${label}](${url})`;
const refs = b => b.refs.map(link).join(' · ');
const isbn10 = isbn => { const stem = isbn.slice(3,12); const digit = (11-[...stem].reduce((sum,n,i) => sum+Number(n)*(10-i),0)%11)%11; return stem+(digit===10?'X':digit); };
const amazon = b => `https://www.amazon.de/dp/${isbn10(b.isbn)}`;
const rating = b => b.reader[0] ? `[GR ${b.reader[0]} · ${b.reader[1].toLocaleString('en-US')}](${b.reader[2]})` : 'NR';
const scoreText = b => `${b.total} · ${b.verdict} · ${b.confidence==='low'?'L':'M'}`;
const row = b => `| **${scoreText(b)}** | ${rating(b)} | ${b.author} | ${b.year} | [${b.title}](${amazon(b)}) |`;
const targets = ranked.filter(b=>b.total>=80);
assert.equal(books.length,30);
assert.equal(new Set(books.map(b=>normalized(b.title))).size,30);
assert.deepEqual(books.map(b=>b.source),Array.from({length:30},(_,i)=>i+13));
for (const b of ranked) {
  assert.equal(b.scores.length,10);
  b.scores.forEach((n,i)=>assert(Number.isInteger(n)&&n>=0&&n<=data.weights[i],b.title));
  assert([0,-10].includes(b.thematic));
  assert.equal(b.total,b.scores.reduce((a,c)=>a+c,0)+b.thematic,b.title);
  assert.equal(b.isbn.length,13);
  assert.equal([...b.isbn].reduce((sum,n,i)=>sum+Number(n)*(i%2?3:1),0)%10,0,b.title);
  assert.equal(b.reasons.length,4);
}
for(const b of excluded) assert(!('total' in b)&&!('scores' in b)&&!('isbn' in b));
const checkOnly = process.argv.includes('--check');
if (!checkOnly) {
  for(const [name,expected] of Object.entries(baseline.hashes)) assert.equal(hash(fs.readFileSync(name)),expected,`Pre-existing change: ${name}`);
  const existing = ['RECOMMENDED_BOOKS.md','VETOED_BOOKS.md','EXCLUDED_BOOKS.md'].map(f=>fs.readFileSync(f,'utf8')).join('\n');
  for(const b of books) assert(!normalized(existing).includes(normalized(b.title)),`Already present: ${b.title}`);
  const local = new Intl.DateTimeFormat('sv-SE',{timeZone:'Europe/Warsaw',year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',hourCycle:'h23'}).format(new Date());
  const stamp = local.replace(/[^0-9]/g,'');
  data.analysis = `analysis_web80_${stamp.slice(2,8)}_${stamp.slice(8,12)}.md`;
  data.reviewCompleted = local+' Europe/Warsaw';
  assert(!fs.existsSync(data.analysis));
  const evidence = [...new Set(books.flatMap(b=>b.refs.map(r=>r[1])))];
  const domains = [...new Set(evidence.map(u=>new URL(u).hostname))].sort();
  data.coverage = {candidates:30,ranked:28,atLeast80:targets.length,below80:ranked.length-targets.length,hardExcluded:2,vetoed:0,previouslyListed:0,referencePages:evidence.length,referenceDomains:domains};
  let report = `# Broad web research: new candidates scoring 80 or more\n\nCompleted **${data.reviewCompleted}**. Sources **13–42**. Rules: [AGENTS.md](AGENTS.md). Structured assessment: [web80_assessments.json](data/web80_assessments.json).\n\n**Result: ${targets.length} new books score at least 80; five eligible books score below 80; two are hard-excluded.** All 28 eligible works enter the cumulative ranked list. No new veto is established. Scores are editorial judgments from the evidence reviewed, not measurements. Confidence is moderate for 25 scores and low for three.\n\n## Scope and method\n\nThe user requested discovery across the web rather than analysis of a supplied thread. The search covered industrial and economic history, engineering and risk, computing institutions, finance, strategic interaction, and scientific organization. Broad discovery used [Five Books technology](https://fivebooks.com/category/technology/) and [economic-history selections](https://fivebooks.com/category/economics/economic-history/), together with open web searches for relevant histories and critical reviews. Title-specific searches then checked purpose, structure, editions, reader response and serious objections.\n\nThe assessed corpus is the **30 named works**, each attached to a book-specific source in SOURCES.md. Unrelated titles in navigation, recommendation widgets, bibliographies, search results or advertisements were discovery leads, not an instruction to ingest those entire catalogues. This is a broad, bounded research pass; it does not claim to exhaust the web or all possible 80-plus books. No discussion thread was used as a corpus, so no claim of complete comment expansion is made.\n\nThe report cites **${evidence.length} distinct evidence pages from ${domains.length} domains**, plus reader-rating pages. Publisher descriptions and available contents establish intended audience and structure; reviews and research papers test claims and expose objections. A publisher's endorsement is not independent validation. Only accessible text or identified search-index extracts was used. Full books were not read cover to cover during this project, and inaccessible review bodies are not presented as inspected.\n\nAll 30 titles were checked against the three status files and searched across prior Markdown and assessment files. None was already recorded. There are therefore no old scores to copy, average or change. Historical analyses remain unchanged. [Source 10's thematic policy](analysis_pastedlists_261018_0118.md) and the [source 11 assessments](analysis_pastefollow_261018_0130.md) were read to keep the distinction between a technological case study and general national history consistent.\n\nHard exclusions were applied before scoring. Every retained work is nonfiction and has an explanatory or argumentative structure beyond specialist training. Two otherwise relevant books fail rule 2. Veto review considers central factual or causal failure, allegiance in place of evidence, lack of transferable content, and dependence on hype. Disagreement alone is not a veto. Each book's limits remain in its score.\n\n## Best starting choices\n\nRead **Networks of Power (92)** for the joint development of engineering, firms, finance and institutions; **Arms and Influence (92)** for commitment, credibility and bargaining; and **The Gifts of Athena (91)** for the relation between useful knowledge and sustained industrial growth. These cover different mechanisms and have less overlap than reading several histories of computing in succession. The individual assessments below give the supporting sources and objections.\n\nNext choose **Micromotives and Macrobehavior (91)** for aggregate effects, **The Economic Weapon (90)** for economic coercion, or **Money Changes Everything (89)** for financial institutions. **Dealers of Lightning (88)** is the strongest new trade narrative of research organization in this set.\n\n## Ranked table: all eligible works\n\nM = moderate score confidence; L = low. Recommend = 85 or above; Consider = 80–84; Below target = under 80. The verdict bands organize this search and do not add an exclusion rule. GR means Goodreads, on a five-point scale; it is not a cross-platform average and contributes no score points. Counts and averages are search-index snapshots retrieved on 2026-10-18, not synchronized live totals. NR means that a reliable numerical snapshot was not retrieved. No Book Marks, LibraryThing, StoryGraph or Amazon aggregate was silently inferred.\n\nTitle links use the ISBN of a verified paperback edition on Amazon.de. Direct Amazon access failed on the four checked routes; edition identity is supported by publisher or catalogue evidence, but Amazon stock and live product resolution are unverified. The absence of accessible Amazon text is not evidence that an edition is unavailable. No prices or availability claims are made.\n\n| Score · verdict · confidence | Readers | Author | First year | Title · paperback |\n|---|---|---|---:|---|\n${ranked.map(row).join('\n')}\n\nThe first year refers to the original book, not the linked reprint. *The Medieval Machine* first appeared in French in 1975 and in English in 1976. *The Knowledge Machine* has different US and UK subtitles. *Computer Wars* has several edition subtitles.\n\n## Complete criterion ledger\n\nE = evidence (20); M = mechanism (17); U = strategic utility (15); S = integration (12); D = density (10); R = durability (9); F = domain fit (7); A = authority (5); N = narrative (3); P = precision (2). T is the single thematic deduction, either 0 or −10. Total = E+M+U+S+D+R+F+A+N+P+T.\n\n| Source | Work | E | M | U | S | D | R | F | A | N | P | T | Total |\n|---:|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|\n${ranked.map(b=>`| ${b.source} | [${b.title}](#w${b.source}) | ${b.scores.join(' | ')} | ${b.thematic} | **${b.total}** |`).join('\n')}\n\nNo retained work was judged to have a predominant penalized theme. This follows the repo's purpose-based boundary, not a blanket exemption for technical subjects. Each thematic decision is explained below. The two closest national-history boundaries are Rosen and Alder; applying −10 would move them to 73 and 77 respectively, leaving 21 books at or above 80.\n\n## Individual assessments\n`;
  for(const b of books) {
    report += `\n<a id="w${b.source}"></a>\n\n### Source ${b.source} — ${b.title}\n\n**${b.author} · ${b.year}.** `;
    if(b.status==='excluded') { report += `**Hard exclusion 2; confidence ${b.confidence}.**\n\n${b.gate}\n\nEvidence: ${refs(b)}.\n`; continue; }
    report += `**${b.total}/100 · ${b.verdict}; score confidence ${b.confidence}.** New work; no prior assessment or source number was replaced.\n\n**Hard-exclusion check:** ${b.gate}\n\n**Evidence used:** ${refs(b)}. The following allocations are this review's judgments based on those sources.\n\n**Breakdown:** E/M/U/S/D/R/F/A/N/P/T = **${b.scores.join('/')} / ${b.thematic} = ${b.total}**.\n\n${b.reasons.join('\n\n')}\n\n**Thematic deduction: ${b.thematic}.** ${b.theme}\n\n**Counterargument and veto decision:** ${b.concern}\n\n**Edition:** paperback ISBN ${b.isbn}; [Amazon.de](${amazon(b)}). **Reader snapshot:** ${b.reader[0]?`${rating(b)} / 5.`:`NR; the [Goodreads record](${b.reader[2]}) was found, but no reliable aggregate was retrieved.`}\n`;
  }
  report += `\n## Sensitivity, lower priorities and research limits\n\nThe two 80–84 entries, *Cathedral, Forge and Waterwheel* (84) and *The Most Powerful Idea in the World* (83), sit close to the cutoff. A small change in evidence or density judgments could move them below it. Higher-scoring works also carry uncertainty: moderate confidence is not a guarantee of an exact numerical rank. No probabilistic confidence interval is implied.\n\nThe five lower-priority eligible works are *Normal Accidents* (79: contested causal framework), *Computer Wars* (79: dated forecasts and advocacy), *The Friendly Orange Glow* (78: length and inflated importance), *The Knowledge Machine* (78: a broad thesis with limited added value for this reader), and *The Medieval Machine* (73: speculative decline framing). Their complete scores remain visible above and in RECOMMENDED_BOOKS.md, as required.\n\n*Trading and Exchanges* and *How Big Things Get Done* receive no scores. Their instructional purposes trigger the hard exclusion before quality, reader ratings or practical usefulness can be considered.\n\nSome primary publisher pages and direct Amazon pages were blocked or returned little text. Indexed descriptions, catalogue records and accessible reviews were used with those limits stated. In particular, the IMF and LSE review claims are limited to the retrieved indexed text; the Durlauf abstract and Varian record are not full-review reads. Reader ratings are a reception signal only. The first-person or access-based histories cannot eliminate selection and hindsight bias.\n\n## Repository verification\n\nThe structured JSON drives the ranking, full score ledger, individual totals, 30 source records and current-list updates. The verification checks criterion bounds and sums, ISBN-13 checksums and derived ISBN-10 checksums, all new local links and anchors, source continuity, new-title uniqueness, mutually exclusive status, and preservation of all pre-existing records and historical Markdown files.\n\nValidation result is recorded in [web80_validation.json](data/web80_validation.json).\n`;
  fs.writeFileSync(data.analysis,report);
  let rec = lines('RECOMMENDED_BOOKS.md');
  for(const b of ranked) {
    const entry = `| ${data.date} | ${b.year} | ${b.author} | [${b.title}](${amazon(b)}) — ${b.verdict.toLowerCase()} | ${b.total} | ${b.source} |`;
    let index = rec.findIndex((r,i)=>i>1&&Number(r.split('|')[5].trim())<b.total);
    if(index<0) index=rec.length;
    rec.splice(index,0,entry);
  }
  fs.writeFileSync('RECOMMENDED_BOOKS.md',rec.join('\n')+'\n');
  const sources=[];
  for(const b of books) sources.push(`| ${b.source} | ${data.date} | [${b.title} — ${b.refs[0][0]}](${b.refs[0][1]}) | [${data.analysis}#w${b.source}](${data.analysis}#w${b.source}) — ${b.status==='ranked'?`${b.total}/100; ${b.verdict.toLowerCase()}; ${b.confidence} confidence`:'hard exclusion 2; high confidence'}. |`);
  fs.appendFileSync('SOURCES.md',sources.join('\n')+'\n');
  const exclusions=fs.readFileSync('EXCLUDED_BOOKS.md','utf8').split(/\r?\n/);
  for(const b of excluded) {
    const entry=`- ${b.title} — ${b.author}`;
    const index=exclusions.findIndex(l=>l.startsWith('- ')&&l.localeCompare(entry,'en',{sensitivity:'base'})>0);
    assert(index>=0);
    exclusions.splice(index,0,entry);
  }
  fs.writeFileSync('EXCLUDED_BOOKS.md',exclusions.join('\n'));
  fs.writeFileSync(input,JSON.stringify(data,null,2)+'\n');
  delete baseline.lines;
  fs.writeFileSync(baselineFile,JSON.stringify(baseline,null,2)+'\n');
}
const sourceIds = new Set(books.map(b=>String(b.source)));
const recNow=lines('RECOMMENDED_BOOKS.md');
const added=recNow.slice(2).filter(r=>sourceIds.has(r.split('|')[6].trim()));
assert.equal(added.length,28);
const oldRec=recNow.filter((r,i)=>i<2||!sourceIds.has(r.split('|')[6].trim())).join('\n')+'\n';
assert.equal(hash(oldRec),baseline.hashes['RECOMMENDED_BOOKS.md'],'Original ranked rows changed');
const sourceNow=lines('SOURCES.md');
const newSources=sourceNow.slice(2).filter(r=>sourceIds.has(r.split('|')[1].trim()));
assert.equal(newSources.length,30);
for(const b of books) assert(newSources.some(r=>r.startsWith(`| ${b.source} |`)&&r.includes(`](${data.analysis}#w${b.source})`)),b.title);
const oldSources=fs.readFileSync('SOURCES.md','utf8').split(/(?<=\n)/).filter(r=>!sourceIds.has((r.match(/^\| (\d+) \|/)||[])[1])).join('');
assert.equal(hash(oldSources),baseline.hashes['SOURCES.md'],'Original sources changed');
const excludedLines=new Set(excluded.map(b=>`- ${b.title} — ${b.author}`));
const originalExcluded=fs.readFileSync('EXCLUDED_BOOKS.md','utf8').split(/\r?\n/).filter(r=>!excludedLines.has(r)).join('\n');
assert.equal(hash(originalExcluded),baseline.hashes['EXCLUDED_BOOKS.md'],'Original exclusions changed');
for(const [name,expected] of Object.entries(baseline.hashes)) if(!['RECOMMENDED_BOOKS.md','SOURCES.md','EXCLUDED_BOOKS.md'].includes(name)) assert.equal(hash(fs.readFileSync(name)),expected,name);
const recTitles=recNow.slice(2).map(r=>normalized(r.split('|')[4].match(/\[([^\]]+)\]/)[1]));
const vetoTitles=lines('VETOED_BOOKS.md').filter(r=>/^\| \d{4}-/.test(r)).map(r=>normalized(r.split('|')[4].match(/\[([^\]]+)\]/)[1]));
const exclusionTitles=lines('EXCLUDED_BOOKS.md').filter(r=>r.startsWith('- ')).map(r=>normalized(r.slice(2).split(' — ')[0]));
for(const b of books) {
  const key=normalized(b.title);
  assert.equal(recTitles.filter(t=>t===key).length,b.status==='ranked'?1:0,b.title);
  assert.equal(exclusionTitles.filter(t=>t===key).length,b.status==='excluded'?1:0,b.title);
  assert(!vetoTitles.includes(key),b.title);
}
let checkedLinks=0;
const report=fs.readFileSync(data.analysis,'utf8');
for(const b of books) assert.equal(report.split(`id="w${b.source}"`).length-1,1,b.title);
for(const match of report.matchAll(/\]\(([^)]+)\)/g)) {
  const target=match[1];
  if(/^https?:/.test(target)) continue;
  const [file,anchor]=target.split('#');
  if(file==='data/web80_validation.json') continue;
  const destination=file||data.analysis;
  assert(fs.existsSync(destination),destination);
  if(anchor) assert(fs.readFileSync(destination,'utf8').includes(`id="${anchor}"`),anchor);
  checkedLinks++;
}
for(const b of ranked) {
  const ten=isbn10(b.isbn);
  assert.equal([...ten].reduce((sum,n,i)=>sum+(n==='X'?10:Number(n))*(10-i),0)%11,0,b.title);
  assert(report.includes(row(b)),b.title);
  assert(added.some(r=>r.includes(`[${b.title}](${amazon(b)})`)&&r.includes(`| ${b.total} | ${b.source} |`)),b.title);
}
const result={status:'passed',analysis:data.analysis,candidates:30,newRanked:28,atLeast80:targets.length,below80:ranked.length-targets.length,hardExcluded:2,newVetoes:0,oldRankedRowsUnchanged:recNow.length-2-28,oldSourceRowsUnchanged:12,otherMarkdownFilesUnchanged:Object.keys(baseline.hashes).length-3,localLinksChecked:checkedLinks,checks:['score bounds and totals','ISBN-13 and ISBN-10 checksums','unique source IDs','all new titles absent from old lists','new status mutual exclusion','exact preservation of previous ranked, source and exclusion records','unchanged historical analyses and veto list','ranked table matches structured data','new local links and anchors']};
fs.writeFileSync('data/web80_validation.json',JSON.stringify(result,null,2)+'\n');
console.log(JSON.stringify(result,null,2));
