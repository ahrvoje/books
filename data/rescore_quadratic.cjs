const fs = require('fs');
const assert = require('assert/strict');
const crypto = require('crypto');
const read = name => fs.readFileSync(name, 'utf8');
const hash = name => crypto.createHash('sha256').update(fs.readFileSync(name)).digest('hex');
const cells = line => line.trim().slice(1, -1).split('|').map(s => s.trim());
const plain = s => s.replace(/<[^>]*>/g, '').replace(/\[([^\]]+)\]\([^)]*\)/g, '$1').replace(/\*|`/g, '').trim();
const titleText = s => plain(s).replace(/^[A-Z]\d+\s*(?:·\s*)?/, '');
const key = s => titleText(s).normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]/g, '');
const codes = ['E','M','U','S','D','R','F','A','N','P','T'];
const oldMax = [20,17,15,12,10,9,7,5,3,2];
function snapshot() {
const historyFiles = fs.readdirSync('.').filter(n => /^analysis_.*_\d{6}_\d{4}\.md$/.test(n) && !n.startsWith('analysis_quadratic_')).sort((a,b) => a.match(/\d{6}_\d{4}/)[0].localeCompare(b.match(/\d{6}_\d{4}/)[0]) || a.localeCompare(b));
const sourceFiles = new Map(read('SOURCES.md').split(/\r?\n/).filter(l => /^\| \d+ \|/.test(l)).map(l => { const c=cells(l); return [c[0],c[3].match(/analysis_\w+_\d{6}_\d{4}\.md/)?.[0]]; }));
const history = new Map();
const metadata = new Map();
for (const file of historyFiles) {
  let header = [];
  for (const line of read(file).split(/\r?\n/)) {
    if (!line.startsWith('|')) { header = []; continue; }
    const c = cells(line);
    if (c.every(s => /^[-:]+$/.test(s))) continue;
    if (!header.length) { header = c; continue; }
    const indexes = codes.map(code => header.findIndex(h => new RegExp('^' + code + '(?:\\s*/|$)').test(h)));
    if (indexes.every(i => i >= 0)) {
      const first = indexes[0];
      const title = titleText(c[first - 1]);
      const vector = indexes.map(i => Number(plain(c[i]).replace('−','-')));
      if (!title || vector.some(n => !Number.isFinite(n))) continue;
      const item = {file, title, vector, row: line};
      const k = key(title);
      if (!history.has(k)) history.set(k, []);
      history.get(k).push(item);
    }
    if (c.length === 5 && /amazon\.(?:de|com)/.test(c[4])) {
      const title = c[4].match(/^\[([^\]]+)\]/)?.[1];
      if (!title) continue;
      const scoreCell = plain(c[0]);
      let confidence = /\bL\b|\blow\b/.test(scoreCell) ? 'low' : /\bM\b|\bmoderate\b/.test(scoreCell) ? 'moderate' : null;
      if (file === 'analysis_pastefollow_261018_0130.md' || file === 'analysis_pastedlists_261018_0118.md') confidence = scoreCell.includes('†') ? 'low' : 'moderate';
      if (file === 'analysis_changedmind_261017_2105.md') confidence = /\bL\b/.test(scoreCell) ? 'low' : 'moderate';
      if (file === 'analysis_definitive_261017_1900.md') confidence = scoreCell.includes('‡') ? 'low' : 'moderate';
      metadata.set(file + ':' + key(title), {reader: c[1], confidence, edition: c[4], scoreCell, author:c[2]});
    }
  }
}
const recRows = read('RECOMMENDED_BOOKS.md').split(/\r?\n/).filter(l => /^\| \d{4}-/.test(l));
const vetoRows = read('VETOED_BOOKS.md').split(/\r?\n/).filter(l => /^\| \d{4}-/.test(l));
const vetoText = read('VETOED_BOOKS.md');
const vetoVectors = new Map();
for (const line of vetoText.split(/\r?\n/)) {
  if (!line.startsWith('|')) continue;
  const c = cells(line);
  if (c.length === 13 && /^\d+$/.test(c[1])) vetoVectors.set(key(c[0]), c.slice(1,12).map(s => Number(plain(s))));
}
const missing = [], mismatches = [], missingMetadata = [];
const books = [...recRows.map(row => ({row, status: 'recommended'})), ...vetoRows.map(row => ({row, status: 'vetoed'}))].map((b, i) => {
  const c = cells(b.row);
  const title = c[3].match(/^\[([^\]]+)\]/)?.[1];
  assert(title, b.row);
  const sourceSet = new Set(c.at(-1).split(',').map(s => sourceFiles.get(s.trim())));
  const matches = (history.get(key(title)) || []).filter(m => sourceSet.has(m.file));
  const prior = matches.at(-1);
  const vector = b.status === 'vetoed' ? vetoVectors.get(key(title)) : prior?.vector;
  const oldTotal = Number(plain(c[4]));
  if (!vector) missing.push(title);
  else if (vector.reduce((a,n) => a+n, 0) !== oldTotal) mismatches.push({title, oldTotal, vector, prior});
  const meta = prior && metadata.get(prior.file + ':' + key(title));
  if (b.status === 'recommended' && (!meta || !meta.confidence)) missingMetadata.push({title, file:prior?.file, meta});
  return {...b, id: 'q' + String(i+1).padStart(4,'0'), title, author:c[2], entryDate:c[0], year:c[1], titleCell:c[3], oldTotal, vector, sources:c.at(-1), veto:b.status === 'vetoed' ? c[5] : null, vetoConfidence:b.status === 'vetoed' ? c[6] : null, prior, history:matches.map(m => ({file:m.file, vector:m.vector})), meta};
});
  console.log(JSON.stringify({counts:{recommended:recRows.length,vetoed:vetoRows.length,history:history.size}, missing, mismatches, missingMetadata},null,2));
  assert.equal(missing.length,0);
  assert.equal(mismatches.length,0);
  assert.equal(missingMetadata.length,0);
  assert(!fs.existsSync('data/quadratic_baseline.json'),'Do not overwrite the original linear baseline');
  const local = new Intl.DateTimeFormat('sv-SE',{timeZone:'Europe/Warsaw',year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',hourCycle:'h23'}).format(new Date());
  const stamp = local.replace(/[^0-9]/g,'');
  const report = 'analysis_quadratic_' + stamp.slice(2,8) + '_' + stamp.slice(8,12) + '.md';
  fs.writeFileSync('data/quadratic_baseline.json',JSON.stringify({report, reviewedAt:local, books, sourceFiles:Object.fromEntries(sourceFiles), historicalHashes:Object.fromEntries([...historyFiles,'EXCLUDED_BOOKS.md',...fs.readdirSync('data').filter(n=>n.endsWith('.json')&&!n.startsWith('quadratic_')).map(n=>'data/'+n)].map(n=>[n,hash(n)])), sourcesBefore:read('SOURCES.md'), vetoReasonsBefore:vetoText.slice(vetoText.indexOf('## Reasons and evidence')), recommendedHeader:read('RECOMMENDED_BOOKS.md').split(/\r?\n/).slice(0,2)},null,2)+'\n');
}
if (process.argv.includes('--snapshot')) snapshot();

// Read the immutable linear baseline on every run; never rescore curved output.
const baseline = JSON.parse(read('data/quadratic_baseline.json'));
const reportFile = baseline.report;
const denominator = 12240;
const criteria = [
  {code:'E',name:'Evidence and inferential integrity',max:20,oldMax:20,power:2},
  {code:'S',name:'Systems integration',max:17,oldMax:12,power:2},
  {code:'U',name:'Transferable strategic utility',max:15,oldMax:15,power:1},
  {code:'M',name:'Mechanistic and causal depth',max:12,oldMax:17,power:1},
  {code:'D',name:'Information density and length justification',max:10,oldMax:10,power:2},
  {code:'R',name:'Durability and resistance to hype',max:9,oldMax:9,power:1},
  {code:'F',name:'Direct domain fit',max:7,oldMax:7,power:1},
  {code:'A',name:'Expert authority and intellectual standing',max:5,oldMax:5,power:1},
  {code:'N',name:'Narrative architecture and clarity',max:3,oldMax:3,power:1},
  {code:'P',name:'Authorial precision and finesse',max:2,oldMax:2,power:1}
];
const fmt = n => n.toFixed(2);
const band = n => n>=85?'Recommend':n>=75?'Consider':n>=65?'Selective':n>=50?'Low priority':'Poor fit';
const shortConfidence = c => c === 'moderate' ? 'M' : 'L';
const sum = a => a.reduce((s,n)=>s+n,0);
const score = vector => {
  const old = Object.fromEntries(codes.map((c,i)=>[c,vector[i]]));
  const contributions = criteria.map(c => {
    const factor = denominator*c.max/c.oldMax**c.power;
    assert(Number.isInteger(factor));
    const numerator = factor*old[c.code]**c.power;
    return {...c,oldPoints:old[c.code],linearPoints:c.max*old[c.code]/c.oldMax,numerator,points:numerator/denominator};
  });
  const numerator = sum(contributions.map(c=>c.numerator))+old.T*denominator;
  return {contributions,thematic:old.T,numerator,total:numerator/denominator};
};
assert.equal(sum(criteria.map(c=>c.max)),100);
assert.deepEqual(criteria.filter(c=>c.power===2).map(c=>c.code),['E','S','D']);
assert.equal(score([...oldMax,0]).total,100);
assert.equal(score(Array(11).fill(0)).total,0);
assert.equal(score([...Array(10).fill(0),-10]).total,-10);
for (const c of criteria) {
  const vector = Array(11).fill(0);
  vector[codes.indexOf(c.code)] = c.oldMax/2;
  assert.equal(score(vector).total,c.max/(c.power===2?4:2));
}
const books = baseline.books.map(b => {
  assert.equal(b.vector.length,11,b.title);
  b.vector.slice(0,10).forEach((n,i)=>assert(Number.isInteger(n)&&n>=0&&n<=oldMax[i],b.title));
  assert([0,-10].includes(b.vector[10]));
  assert.equal(sum(b.vector),b.oldTotal,b.title);
  assert(b.prior,b.title);
  assert.deepEqual(b.vector,b.prior.vector,'Latest source vector disagrees: '+b.title);
  const s = score(b.vector);
  // Independent formula checks the criterion-name mapping and all three curves.
  const [E,M,U,S,D,R,F,A,N,P,T] = b.vector;
  const direct = E*E/20 + 17*(S/12)**2 + U + 12*M/17 + D*D/10 + R+F+A+N+P+T;
  assert(Math.abs(direct-s.total)<1e-10,b.title);
  const priorAnchor = b.prior.row.match(/\]\(<?(#[^)>]+)>?\)/)?.[1] || '';
  const confidence = b.status==='vetoed'?'low':b.meta.confidence;
  return {...b,...s,confidence,priorLink:b.prior.file+priorAnchor,verdict:b.status==='vetoed'?'Veto '+b.veto:band(s.total),delta:s.total-b.oldTotal};
});
const sorted = list => list.sort((a,b)=>b.numerator-a.numerator || a.title.localeCompare(b.title,'en') || a.author.localeCompare(b.author,'en'));
const recommended = sorted(books.filter(b=>b.status==='recommended'));
const vetoed = sorted(books.filter(b=>b.status==='vetoed'));
assert.equal(recommended.length,966);
assert.equal(vetoed.length,172);
const identity = b => key(b.title)+':'+key(b.author);
assert.equal(new Set(books.map(identity)).size,books.length);
const sourceIds = new Set(Object.keys(baseline.sourceFiles));
for(const b of books) for(const id of b.sources.split(',').map(s=>s.trim())) assert(sourceIds.has(id),b.title);
for(const [name,expected] of Object.entries(baseline.historicalHashes)) assert.equal(hash(name),expected,'Historical file changed: '+name);
const excludedLines = read('EXCLUDED_BOOKS.md').split(/\r?\n/).filter(l=>l.startsWith('- '));
assert.equal(excludedLines.length,301);
const excluded = excludedLines.map(l=>{const [title,author]=l.slice(2).split(' — ');return {title,author};});
for(const b of books) for(const e of excluded.filter(e=>key(e.title)===key(b.title))) {
  assert(e.author && key(e.author)!==key(b.author),'Hard-excluded overlap or ambiguous identity: '+b.title);
}

const stats = {
  recommended:recommended.length,vetoed:vetoed.length,hardExcluded:excludedLines.length,
  rescored:books.length,allSourceEntries:books.length+excludedLines.length,
  lower:books.filter(b=>b.delta<0).length,higher:books.filter(b=>b.delta>0).length,unchanged:books.filter(b=>b.delta===0).length,
  bandsBefore:Object.fromEntries(['Recommend','Consider','Selective','Low priority','Poor fit'].map(v=>[v,recommended.filter(b=>band(b.oldTotal)===v).length])),
  bandsAfter:Object.fromEntries(['Recommend','Consider','Selective','Low priority','Poor fit'].map(v=>[v,recommended.filter(b=>b.verdict===v).length])),
  bandChanges:recommended.filter(b=>band(b.oldTotal)!==b.verdict).length
};
const sourceLinks = b => b.sources.split(',').map(s=>'['+s.trim()+']('+baseline.sourceFiles[s.trim()]+')').join(', ');
const bookLabel = b => b.title+' — '+b.author;
const edition = b => {
  const match = b.titleCell.match(/^\[[^\]]+\]\((?:<[^>]+>|https?:\/\/\S+)\)/);
  assert(match,'Missing edition link: '+b.title);
  return match[0];
};
const ledgerHead = '| Work · evidence | E² /20 | S² /17 | U /15 | M /12 | D² /10 | R /9 | F /7 | A /5 | N /3 | P /2 | T | Old → new total | Δ | Verdict · score confidence | Sources |\n|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|---|\n';
const ledgerRow = b => '| <a id="'+b.id+'"></a>['+bookLabel(b)+']('+b.priorLink+') | '+b.contributions.map(c=>fmt(c.points)).join(' | ')+' | '+b.thematic+' | '+b.oldTotal+' → **'+fmt(b.total)+'** | '+fmt(b.delta)+' | '+b.verdict+' · '+shortConfidence(b.confidence)+' | '+sourceLinks(b)+' |';
const rankedRow = b => {
  const rating = b.meta.reader.replace(/—²/g,'NR');
  const suffix = b.meta.edition.replace(/^\[[^\]]+\]\((?:<[^>]+>|[^)]+)\)/,'');
  return '| [**'+fmt(b.total)+' · '+b.verdict+' · '+shortConfidence(b.confidence)+'**](#'+b.id+') | '+rating+' | '+b.author+' | '+b.year+' | '+edition(b)+suffix+' |';
};
const generalMethod = 'Only E, S and D are quadratic. M and the other six positive criteria are linear. Thematic T is 0 or −10 once. The letters retain their original meanings; the columns now follow the order in AGENTS.md. Totals, rank and verdict thresholds use unrounded values. Displayed values have two decimal places; these are calculation outputs, not claims of measured precision.';
const bandText = 'Recommend ≥85; Consider ≥75 and <85; Selective ≥65 and <75; Low priority ≥50 and <65; Poor fit <50. These are the established general bands; the earlier web search and four-book reports used a separate 80-point search target. This review uses the general bands consistently. A low score never removes an eligible entry. Vetoes override every band.';

let report = '# Quadratic scoring review\n\nCompleted **'+baseline.reviewedAt+', Europe/Warsaw**. Recalculated **1,138 current entries: 966 recommended-list entries and 172 vetoed entries**. The **301 hard exclusions** receive no scores. [Current rules](AGENTS.md#scoring-calculation) · [Recommended list](RECOMMENDED_BOOKS.md) · [Vetoed list](VETOED_BOOKS.md) · [Structured calculations](data/quadratic_scores.json) · [Validation](data/quadratic_validation.json).\n\n';
report += '## Scope and decision basis\n\nThis is a scoring-rule revision of the existing corpus. The latest source-specific criterion allocations were matched against every current total. All 1,138 matches reconcile. Source numbers and author identity distinguish different books with the same title, including War and Careless People. No source titles or external recommendations were added.\n\nThe stored evidence assessment supplies each criterion\'s attainment level. The new weights and curves change the points earned by that level. There is no new book-level evidence in this request, so the underlying attainment, thematic classification, hard-exclusion decisions and veto grounds are retained. Their prior reasons are linked per entry. This is not a fresh search of 1,138 books or a new collection of source comments. Earlier evidence gaps, conditional identities and incomplete thread coverage remain.\n\nEvery revised entry has all ten contributions, T, old and new totals, change, verdict, score confidence and source history below. All vetoed scores remain counterfactual: only the veto gate is suspended for calculation, while the identified defects remain. Score confidence is inherited for eligible entries and remains low for every counterfactual. Confidence in the arithmetic and coverage of the current lists is high.\n\n';
report += '## Calculation\n\nFor a criterion with maximum m and linear assessment x, quadratic points are **m × (x / m)² = x² / m**. This applies only to evidence /20, systems integration /17 and density /10. At 50% attainment they earn 25% of the maximum; at 75%, 56.25%; at 100%, 100%.\n\nThe old ledgers used E/M/U/S/D/R/F/A/N/P/T, with M out of 17 and S out of 12. For old linear points, the new total is:\n\n```text\nE_old²/20 + 17×(S_old/12)² + U_old + 12×(M_old/17)\n+ D_old²/10 + R_old + F_old + A_old + N_old + P_old + T\n```\n\n'+generalMethod+'\n\n';
report += '| Criterion | Old maximum | New maximum | Current profile | Conversion from old linear points x |\n|---|---:|---:|---|---|\n'+criteria.map(c=>'| '+c.code+' — '+c.name+' | '+c.oldMax+' | '+c.max+' | '+(c.power===2?'Quadratic':'Linear')+' | '+c.max+' × (x / '+c.oldMax+')'+(c.power===2?'²':'')+' |').join('\n')+'\n\n'+bandText+'\n\n';
report += '## Result\n\nAll '+stats.lower+' scores decrease under the combined change; '+stats.higher+' increase and '+stats.unchanged+' remain equal. '+stats.bandChanges+' eligible entries move to a lower general verdict band. Membership is unchanged: 966 eligible, 172 vetoed and 301 hard-excluded, totaling 1,439 source reading units. Named series remain single units.\n\n| General verdict | Before | After |\n|---|---:|---:|\n'+Object.keys(stats.bandsBefore).map(v=>'| '+v+' | '+stats.bandsBefore[v]+' | '+stats.bandsAfter[v]+' |').join('\n')+'\n\n';
report += '## Ranked eligible list — five columns\n\nM = moderate and L = low score confidence. Reader ratings and edition links are preserved snapshots from the linked earlier analyses, not refreshed listings. GR = Goodreads /5; counts remain attached to the original snapshot. NR means no matching aggregate was established. The original p marker denotes a previously preserved rating. Reader ratings contribute no points. † or “search” marks an unverified product search; HB/HC marks hardcover. Original conditional identities and edition limits still apply.\n\n| Quality · verdict · confidence | Readers | Author | First year | Title · edition |\n|---|---|---|---|---|\n'+recommended.map(rankedRow).join('\n')+'\n\n';
report += '## Complete eligible criterion ledger\n\nAll criterion cells are **final contributions under the new rules**, not raw assessments to square again. The old raw allocations and exact rational results are retained in [the structured ledger](data/quadratic_scores.json). Each title links to its latest prior vector and reasoning; source links preserve all contributing source analyses. For each entry, E/S/M/D change by the four conversions above; U/R/F/A/N/P and T are unchanged. The delta is caused solely by this scoring revision.\n\n'+ledgerHead+recommended.map(ledgerRow).join('\n')+'\n\n';
report += '## Vetoed entries — revised counterfactual ledger\n\nVeto status and reason confidence are retained in [VETOED_BOOKS.md](VETOED_BOOKS.md). These scores suspend only the veto gate and do not make any entry recommended. The [V5 review](analysis_veto5_261018_1428.md) remains the current status decision; each title below links to the original scoring evidence. All counterfactual score confidence is low.\n\n'+ledgerHead+vetoed.map(ledgerRow).join('\n')+'\n\n';
report += '## Source and prior-analysis index\n\nThis rule review has no new source number. Historical scores and counts in the earlier reports are preserved. Current scores are those in this report.\n\n| Source | Prior analysis | Current scored entries |\n|---:|---|---:|\n'+Object.entries(baseline.sourceFiles).map(([id,file])=>'| <a id="source-'+id+'"></a>'+id+' | ['+file+']('+file+') | '+books.filter(b=>b.sources.split(',').map(s=>s.trim()).includes(id)).length+' |').join('\n')+'\n\n## Verification\n\nThe script validates all old sums and bounds before conversion; exactly three quadratic criteria; zero, midpoint and full-score behavior; the independent closed-form total for every entry; all source references; unique work identities; disjoint current status lists; complete ranking and ledgers; preserved entry dates, authors, titles, edition links and source numbers; and unchanged historical analyses, source assessment data and EXCLUDED_BOOKS.md. It uses an immutable linear baseline to prevent double squaring. Run `node data/rescore_quadratic.cjs --check` to repeat the checks without changing the reports.\n';

const recTitle = b => {
  const qualifiers = b.titleCell.slice(edition(b).length).split(/\s*—\s*|;\s*/).map(s=>s.trim()).filter(Boolean).filter(s=>!/^(?:recommend|consider|selective|low priority|poor fit|low fit|below target|not recommended|(?:low|moderate|high) confidence)$/.test(s));
  return edition(b)+' — '+b.verdict.toLowerCase()+'; '+b.confidence+' confidence'+(qualifiers.length?'; '+qualifiers.join('; '):'');
};
const recommendationOutput = baseline.recommendedHeader.join('\n')+'\n'+recommended.map(b=>'| '+b.entryDate+' | '+b.year+' | '+b.author+' | '+recTitle(b)+' | '+fmt(b.total)+' | '+b.sources+' |').join('\n')+'\n';
const vetoHeader = '# Vetoed books\n\nUpdated **'+baseline.reviewedAt+', Europe/Warsaw**. **172 unique source books or nominated series** currently meet a veto. [Current quadratic scoring review]('+reportFile+') · [Veto-rule decisions](analysis_veto5_261018_1428.md) · [Hard exclusions](EXCLUDED_BOOKS.md).\n\nCounterfactual scores apply the current scoring rules while suspending only the veto gate. The identified flaws remain; no vetoed book becomes recommended because of its score. All counterfactual score confidence is **low**. Veto confidence is separate and preserved below.\n\n| Entry date | First year | Author | Title | Counterfactual /100 | Veto | Veto confidence | Sources |\n|---|---|---|---|---:|---|---|---|\n';
const vetoSummary = vetoed.map(b=>'| '+b.entryDate+' | '+b.year+' | '+b.author+' | '+b.titleCell+' | **'+fmt(b.total)+'** | '+b.veto+' | '+b.vetoConfidence+' | '+b.sources+' |').join('\n');
const vetoLedger = '| Title | E² /20 | S² /17 | U /15 | M /12 | D² /10 | R /9 | F /7 | A /5 | N /3 | P /2 | T | Counterfactual total |\n|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|\n'+vetoed.map(b=>'| ['+b.title+']('+reportFile+'#'+b.id+') | '+b.contributions.map(c=>fmt(c.points)).join(' | ')+' | '+b.thematic+' | **'+fmt(b.total)+'** |').join('\n');
const vetoOutput = vetoHeader+vetoSummary+'\n\n## Full counterfactual score table\n\n'+generalMethod+' All cells are final contributions; do not square them again. E = evidence; S = systems integration; U = transferable utility; M = mechanism and causal depth; D = density; R = durability; F = domain fit; A = authority; N = narrative; P = precision.\n\n'+vetoLedger+'\n\nThe following reason sections retain their dated evidence and earlier linear scores. **All earlier numerical scores and “unchanged score” statements below are historical and are superseded by the current tables above.** Veto grounds, their confidence and supporting evidence remain in force.\n\n'+baseline.vetoReasonsBefore;
const sourceOutput = baseline.sourcesBefore.split(/\r?\n/).map(line=>{
  if(!/^\| \d+ \|/.test(line)) return line;
  const c=cells(line);
  c[3]+=' Historical results; [current quadratic scores]('+reportFile+'#source-'+c[0]+').';
  return '| '+c.join(' | ')+' |';
}).join('\n');
const structured = {
  review:reportFile,reviewedAt:baseline.reviewedAt,timeZone:'Europe/Warsaw',scope:'Scoring-rule migration from recorded evidence; no new book research or source nominations',
  formula:'sum(max * (oldLinearPoints / oldMax)^power) + T',denominator,criteria,stats,
  books:books.map(b=>({id:b.id,title:b.title,author:b.author,entryDate:b.entryDate,firstYear:b.year,status:b.status,sources:b.sources.split(',').map(s=>Number(s.trim())),oldLinearPoints:Object.fromEntries(codes.map((c,i)=>[c,b.vector[i]])),oldTotal:b.oldTotal,linearPoints:Object.fromEntries(b.contributions.map(c=>[c.code,c.linearPoints])),contributions:Object.fromEntries(b.contributions.map(c=>[c.code,c.points])),thematic:b.thematic,exactTotalNumerator:b.numerator,total:b.total,displayTotal:fmt(b.total),delta:b.delta,verdict:b.verdict,scoreConfidence:b.confidence,veto:b.veto,vetoConfidence:b.vetoConfidence,priorAssessment:b.priorLink,scoreBasis:'Recorded attainment retained; E, S and D curved once; M reweighted linearly; remaining criteria and T unchanged.'}))
};
const outputs = new Map([[reportFile,report],['RECOMMENDED_BOOKS.md',recommendationOutput],['VETOED_BOOKS.md',vetoOutput],['SOURCES.md',sourceOutput],['data/quadratic_scores.json',JSON.stringify(structured,null,2)+'\n']]);
const checkOnly = process.argv.includes('--check');
if (process.argv.includes('--write') || checkOnly) {
  for(const [file,content] of outputs) {
    if(checkOnly) assert.equal(read(file),content,'Generated output differs: '+file);
    else fs.writeFileSync(file,content);
  }
  // Verify every new local file link and explicit anchor, including preserved veto links.
  for(const [file,content] of outputs) {
    if(!file.endsWith('.md')) continue;
    for(const m of content.matchAll(/\]\(<?([^\s)>]+)>?\)/g)) {
      const ref=m[1];
      if(/^(?:https?:|mailto:)/.test(ref)) continue;
      const [target,anchor]=ref.split('#');
      const targetFile=target||file;
      assert(fs.existsSync(targetFile)||(!checkOnly&&targetFile==='data/quadratic_validation.json'),'Missing link: '+ref+' in '+file);
      if(anchor && (targetFile===reportFile || /^q\d+$|^source-\d+$/.test(anchor))) assert(read(targetFile).includes('id="'+anchor+'"'),'Missing anchor: '+ref);
    }
  }
  const validation={passed:true,counts:stats,onlyQuadraticCriteria:['E','S','D'],linearCausalMaximum:12,quadraticIntegrationMaximum:17,allOldTotalsReconciled:true,allNewTotalsIndependentlyVerified:true,allNewLocalLinksValid:true,allCurrentStatusesPreserved:true,allHistoricalFilesUnchanged:true,hardExclusionsUnscored:true,baselineSha256:hash('data/quadratic_baseline.json'),outputSha256:Object.fromEntries([...outputs.keys()].map(n=>[n,hash(n)]))};
  const validationText=JSON.stringify(validation,null,2)+'\n';
  if(checkOnly) assert.equal(read('data/quadratic_validation.json'),validationText);
  else fs.writeFileSync('data/quadratic_validation.json',validationText);
}
console.log(JSON.stringify({report:reportFile,stats,top:recommended.slice(0,12).map(b=>({title:b.title,old:b.oldTotal,new:fmt(b.total)})),vetoTop:vetoed.slice(0,3).map(b=>({title:b.title,old:b.oldTotal,new:fmt(b.total)})),mode:checkOnly?'check':process.argv.includes('--write')?'write':'preview'},null,2));
