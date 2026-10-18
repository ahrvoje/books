const fs = require('fs');
const assert = require('assert/strict');
const crypto = require('crypto');
const input = 'data/fourbooks_assessments.json';
const validationFile = 'data/fourbooks_validation.json';
const d = JSON.parse(fs.readFileSync(input, 'utf8'));
const read = file => fs.readFileSync(file, 'utf8');
const hash = file => crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex');
const total = b => b.scores.reduce((a, v) => a + v, 0) + b.thematic;
const verdict = b => total(b) >= 85 ? 'Recommend' : total(b) >= 80 ? 'Consider' : 'Below target';
const isbn10 = isbn => { const stem = isbn.slice(3, 12); const n = (11 - [...stem].reduce((s, v, i) => s + Number(v) * (10 - i), 0) % 11) % 11; return stem + (n === 10 ? 'X' : n); };
const amazon = b => `https://www.amazon.de/dp/${isbn10(b.isbn)}`;
const rating = b => `[GR ${b.reader[0].toFixed(2)} · ${b.reader[1].toLocaleString('en-US')}](${b.reader[2]})`;
const ranked = [...d.books].sort((a, b) => total(b) - total(a));
const currentRow = b => `| ${d.date} | ${b.year} | ${b.author} | [${b.title}](${amazon(b)})${b.format === 'Hardcover' ? ' — hardcover' : ''} — ${verdict(b).toLowerCase()}${b.confidence === 'low' ? '; low confidence' : ''} | ${total(b)} | ${d.source} |`;
assert.equal(d.books.length, 4);
assert.equal(new Set(d.books.map(b => b.id)).size, 4);
assert.equal(d.criteria.reduce((s, c) => s + c[2], 0), 100);
for (const b of d.books) {
  assert.equal(b.scores.length, 10); assert.equal(b.reasons.length, 10); assert.equal(b.status, 'ranked');
  b.scores.forEach((s, i) => assert(Number.isInteger(s) && s >= 0 && s <= d.criteria[i][2]));
  assert([0, -10].includes(b.thematic));
  assert.equal([...b.isbn].reduce((s, v, i) => s + Number(v) * (i % 2 ? 3 : 1), 0) % 10, 0);
  assert.equal([...isbn10(b.isbn)].reduce((s, v, i) => s + (v === 'X' ? 10 : Number(v)) * (10 - i), 0) % 11, 0);
}
const sourceRow = () => `| ${d.source} | ${d.date} | [User-supplied Newton, civilization, ASML and Enigma titles](${d.sourceFile}) — complete four-title paste | [${d.analysis}](${d.analysis}) — four new books ranked; no vetoes or hard exclusions. |`;
function report() {
  let out = `# Four books: Newton, civilization, ASML and Enigma\n\n**Source ${d.source}. Completed ${d.reviewCompleted}, Europe/Warsaw.** Four supplied titles; four new ranked entries; no vetoes or hard exclusions. [Source transcript](${d.sourceFile}) · [Assessment data](${input}) · [Rules](AGENTS.md).\n\n## Scope and method\n\nThe four lines supplied by the user are the complete candidate list. No link or comment thread was supplied. External sources were used to resolve identity, check intended audience and structure, examine criticism, and verify editions and reader ratings. They did not expand the title list. Full books were not read cover to cover during this assessment; the report uses the available contents, excerpts, reviews and catalogue evidence.\n\nAll four titles and author variants were searched across the three cumulative status files, prior Markdown analyses and structured assessment files. None had a prior assessment or status entry. Never at Rest appeared only as a profile example in AGENTS.md; it is now an actual source nomination. There are no previous scores or source numbers to merge. Historical analyses are preserved. The distinction between technological case studies and single-nation history follows the stated scope test in [source 10](analysis_pastedlists_261018_0118.md).\n\nThe sequence was identity → hard exclusions → vetoes → scoring → list update. Score confidence is moderate for three books and low for Morris. Eligibility confidence is high for all four. Confidence in the absence of an established veto is moderate for three and low for Morris. Scores are reading-priority judgments for the specified reader, not measurements; small differences should not decide reading order.\n\n## Complete ranked table\n\nM = moderate and L = low score confidence. Recommend = 85–100; Consider = 80–84; Below target = under 80. These verdicts do not create an exclusion rule. GR is Goodreads, /5 with the rating count. Values are indexed snapshots retrieved on ${d.date}; crawl dates and edition groupings differ. They are not pooled across platforms and do not enter the quality score. No numerical values from Book Marks, LibraryThing, StoryGraph or Amazon were inferred. ASML's 28 ratings are a small sample.\n\n| Score · verdict · confidence | Readers | Author | First year | Title → Amazon.de |\n|---|---|---|---:|---|\n`;
  out += ranked.map(b => `| **${total(b)} · ${verdict(b)} · ${b.confidence === 'low' ? 'L' : 'M'}** | ${rating(b)} | ${b.author} | ${b.year} | [${b.title}](${amazon(b)})${b.format === 'Hardcover' ? ' · HB' : ''} |`).join('\n');
  out += `\n\nHB = verified hardcover; the other ISBNs identify paperbacks. Direct access to all four Amazon.de product routes failed, so these are edition locators, with stock and live product resolution unverified. Access failure is not evidence of unavailability. No English paperback was established for ASML's Architects. Its first year is the 2017 Dutch original; the author announced the English version in 2018, while some records use 2019. Never at Rest has a recorded 1980/1981 date conflict, detailed below.\n\n## Full criterion ledger\n\n${d.criteria.map(c => `${c[0]} = ${c[1].toLowerCase()} (${c[2]})`).join('; ')}. T is the single thematic deduction, 0 or −10. Total is the sum of all ten positive allocations plus T.\n\n| Book | E | M | U | S | D | R | F | A | N | P | T | Total |\n|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|\n`;
  out += ranked.map(b => `| [${b.title}](#${b.id}) | ${b.scores.join(' | ')} | ${b.thematic} | **${total(b)}** |`).join('\n');
  for (const b of ranked) {
    out += `\n\n<a id="${b.id}"></a>\n\n## ${b.fullTitle}\n\n**${b.author} · ${b.year} · ${total(b)}/100 · ${verdict(b)}.** Score confidence: **${b.confidence}**. New assessment, source ${d.source}.\n\n${b.case}\n\n**Hard exclusions:** ${b.gate} Confidence: **${b.gateConfidence}**.\n\n**Evidence:** ${b.refs.map(([name, url]) => `[${name}](${url})`).join(' · ')}. The allocations below are this assessment's judgments from that evidence.\n\n| Criterion | Points | Assessment |\n|---|---:|---|\n`;
    out += d.criteria.map((c, i) => `| ${c[0]} — ${c[1]} | ${b.scores[i]}/${c[2]} | ${b.reasons[i]} |`).join('\n');
    out += `\n| Thematic deduction | ${b.thematic} | ${b.theme} |\n| **Total** | **${total(b)}/100** | **${verdict(b)}; ${b.confidence} confidence.** |\n\n**Veto review:** ${b.veto} Decision confidence: **${b.vetoConfidence}**.\n\n**Edition and identity:** ${b.edition}\n\n**Reader snapshot:** ${rating(b)}, out of five. **Purchase edition:** [Amazon.de ${b.format.toLowerCase()} locator](${amazon(b)}).\n`;
  }
  out += `\n## Reading order and limits\n\nStart with **ASML's Architects** for industrial capability, then **Never at Rest** for scientific practice. **X, Y & Z** is shorter and makes a useful study of cooperation under secrecy. **Why the West Rules—for Now** is the lowest-priority work here because the breadth and direct fit exceed the strength of its causal validation. It remains included as an eligible, non-vetoed source book.\n\nFor Morris, the methodological appendix is evidence of transparency, not a cure for invalid causation. Sensitivity to score changes also does not by itself validate the selected variables. The V1 decision therefore remains open to revision if stronger evidence establishes that a central conclusion requires an invalid inference. No score was calculated by pretending the disputed claims were correct.\n\nThematic deductions are zero for all four because none is predominantly about a penalized subject. This does not confer an exemption on biographies or technology books. The purpose and balance of each book, stated above, decide the result. No counterfactual veto table is needed, and EXCLUDED_BOOKS.md and VETOED_BOOKS.md remain unchanged.\n\n## Verification\n\nThe [build and verification script](data/build_fourbooks.cjs) derives the ranked table, criterion ledger, per-book totals and cumulative rows from the same assessment data. It checks score bounds and sums, ISBN checksums, source sequence, inclusion exactly once, absence from the two other status lists, local links and anchors, and preservation of earlier rows and historical analyses. Run from the repository root with node data/build_fourbooks.cjs. Results: [validation record](${validationFile}).\n`;
  return out;
}
if (process.argv.includes('--write')) {
  assert(!d.analysis, 'Do not overwrite an earlier analysis.');
  d.reviewCompleted = new Intl.DateTimeFormat('sv-SE', { timeZone: d.timezone, dateStyle: 'short', timeStyle: 'short' }).format(new Date());
  assert(d.reviewCompleted.startsWith(d.date));
  const stamp = d.reviewCompleted.replace(/\D/g, '');
  d.analysis = `analysis_fourbooks_${stamp.slice(2, 8)}_${stamp.slice(8, 12)}.md`;
  assert(!fs.existsSync(d.analysis));
  const oldFiles = fs.readdirSync('.').filter(f => f.endsWith('.md'));
  d.baselineHashes = Object.fromEntries(oldFiles.map(f => [f, hash(f)]));
  const oldRec = read('RECOMMENDED_BOOKS.md'), oldSources = read('SOURCES.md');
  const eol = oldRec.includes('\r\n') ? '\r\n' : '\n';
  const rows = oldRec.trimEnd().split(/\r?\n/);
  d.baselineRecommendedCount = rows.length - 2;
  for (const b of ranked) {
    assert(!oldRec.includes(`[${b.title}]`));
    let at = rows.findIndex((r, i) => i >= 2 && Number(r.split('|').at(-3).trim()) < total(b));
    rows.splice(at < 0 ? rows.length : at, 0, currentRow(b));
  }
  assert.deepEqual(rows.filter(r => !ranked.some(b => r === currentRow(b))), oldRec.trimEnd().split(/\r?\n/));
  assert.equal(Number([...oldSources.matchAll(/^\| (\d+) \|/gm)].at(-1)[1]) + 1, d.source);
  fs.writeFileSync(d.analysis, report());
  fs.writeFileSync('RECOMMENDED_BOOKS.md', rows.join(eol) + eol);
  fs.writeFileSync('SOURCES.md', oldSources + (oldSources.endsWith('\n') ? '' : eol) + sourceRow() + eol);
  fs.writeFileSync(input, JSON.stringify(d, null, 2) + '\n');
}
assert(d.analysis && read(d.analysis) === report(), 'Report must match assessment data.');
const rec = read('RECOMMENDED_BOOKS.md'), sources = read('SOURCES.md');
for (const b of ranked) {
  assert.equal(rec.split(/\r?\n/).filter(r => r === currentRow(b)).length, 1);
  assert.equal(rec.split(`[${b.title}]`).length - 1, 1);
  for (const file of ['VETOED_BOOKS.md', 'EXCLUDED_BOOKS.md']) assert(!read(file).includes(b.title));
}
const oldRows = rec.split(/\r?\n/).filter(r => r && !ranked.some(b => r === currentRow(b)));
const eol = rec.includes('\r\n') ? '\r\n' : '\n';
assert.equal(crypto.createHash('sha256').update(oldRows.join(eol) + eol).digest('hex'), d.baselineHashes['RECOMMENDED_BOOKS.md']);
assert.equal(crypto.createHash('sha256').update(sources.replace(sourceRow() + eol, '')).digest('hex'), d.baselineHashes['SOURCES.md']);
for (const [file, expected] of Object.entries(d.baselineHashes)) if (!['SOURCES.md', 'RECOMMENDED_BOOKS.md'].includes(file)) assert.equal(hash(file), expected);
assert.equal(sources.split(sourceRow()).length - 1, 1);
for (const [, url] of report().matchAll(/\]\(([^)]+)\)/g)) {
  if (/^https?:/.test(url)) continue;
  if (url.startsWith('#')) assert(report().includes(`id="${url.slice(1)}"`));
  else if (url !== validationFile) assert(fs.existsSync(url), url);
}
const rows = rec.trimEnd().split(/\r?\n/).slice(2);
const values = rows.map(r => Number(r.split('|').at(-3).trim()));
for (let i = 1; i < values.length; i++) if (Number.isFinite(values[i]) && Number.isFinite(values[i - 1])) assert(values[i - 1] >= values[i]);
const result = { allChecksPassed: true, analysis: d.analysis, source: d.source, ranked: ranked.map(b => ({ title: b.title, total: total(b), verdict: verdict(b) })), added: 4, hardExcluded: 0, vetoed: 0, recommendedCount: rows.length, priorRecommendedCount: d.baselineRecommendedCount, previousRowsPreserved: true, previousAnalysesPreserved: true, statusListsMutuallyExclusiveForAssessedWorks: true, scoreAndIsbnChecksPassed: true, localLinksPassed: true };
assert.equal(result.recommendedCount - result.priorRecommendedCount, 4);
fs.writeFileSync(validationFile, JSON.stringify(result, null, 2) + '\n');
console.log(JSON.stringify(result, null, 2));
