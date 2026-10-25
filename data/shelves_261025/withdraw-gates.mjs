import fs from 'node:fs';
import assert from 'node:assert/strict';
import {format} from '../../site/model.mjs';

const dir = 'data/shelves_261025';
const read = path => JSON.parse(fs.readFileSync(path, 'utf8'));
const write = (path, value) => fs.writeFileSync(path, JSON.stringify(value, null, 2) + '\n');
const path = read('data/catalog.json').compiled;
const catalog = read(path);
const changes = [];
for (const book of [...catalog.currentBooks, ...catalog.exclusions]) {
  if (!book.sources.includes(296)) continue;
  const previous = {sources: [...book.sources], total: book.total, REL: book.bonuses?.REL};
  book.sources = book.sources.filter(id => id !== 296);
  book.sourceIds = [...book.sources];
  assert(book.sources.length > 0, 'Withdrawal must not orphan a book');
  if (book.status !== 'excluded') {
    book.bonuses.REL = 2 * Math.sqrt(book.sources.length - 1);
    book.total += book.bonuses.REL - previous.REL;
    book.unroundedTotal = book.total;
    book.displayScore = format(book.total);
    book.bonusAssessment.sources = book.sources.length;
    book.verdict = book.status === 'vetoed' ? 'Vetoed; counterfactual score' : book.total >= 85 ? 'Recommend' : book.total >= 75 ? 'Consider' : book.total >= 65 ? 'Selective' : book.total >= 50 ? 'Low priority' : 'Poor fit';
  }
  changes.push({id: book.id, title: book.title, previous, sources: book.sources, total: book.total, REL: book.bonuses?.REL});
}
for (const [file, status] of [['RECOMMENDED_BOOKS.md', 'recommended'], ['VETOED_BOOKS.md', 'vetoed']]) {
  const lines = fs.readFileSync(file, 'utf8').split(/\r?\n/);
  const byKey = new Map(catalog.currentBooks.filter(b => b.status === status).map(b => [b.author + '|' + b.title, b]));
  const rows = lines.filter(l => /^\| \d{4}-/.test(l)).map(line => {
    const row = line.split('|').slice(1, -1).map(s => s.trim());
    const title = row[3].match(/^\[([^\]]+)\]/)?.[1] || row[3];
    const book = byKey.get(row[2] + '|' + title);
    assert(book);
    row[4] = format(book.total);
    row[status === 'recommended' ? 5 : 10] = format(book.bonuses.REL);
    row[status === 'recommended' ? 10 : 7] = book.sources.join(', ');
    return '| ' + row.join(' | ') + ' |';
  }).sort((a, b) => Number(b.split('|')[5]) - Number(a.split('|')[5]));
  fs.writeFileSync(file, lines.filter(l => !/^\| \d{4}-/.test(l)).join('\n').trimEnd() + '\n' + rows.join('\n') + '\n');
}
const scope = read(dir + '/scope.json');
scope.withdrawnSources = [...new Set([...(scope.withdrawnSources || []), 296])];
scope.withdrawalInstruction = 'Gates Notes is excluded from this conversation batch, including existing-book source contributions. Earlier Books Guru source 148 remains active. IDs are not renumbered or reused.';
write(dir + '/scope.json', scope);
const pending = read(dir + '/pending.json');
write(dir + '/pending.json', pending.filter(b => b.source !== 296));
if (changes.length) write(dir + '/withdrawn-gates.json', {date: '2026-10-25', source: 296, changes, removedPending: pending.filter(b => b.source === 296)});
write(path, catalog);
const sources = fs.readFileSync('SOURCES.md', 'utf8').replace(/^\| 296 \|.*$/m, '| 296 | 2026-10-25 | [Gates Notes — withdrawn by user; inactive ID](https://www.gatesnotes.com/books) | [Historical intake and withdrawal](analysis/analysis_gatesbooks_261025_2011.md); excluded from source counts and pending intake. |');
fs.writeFileSync('SOURCES.md', sources);
const report = 'analysis/analysis_gatesbooks_261025_2011.md';
const text = fs.readFileSync(report, 'utf8');
if (!text.startsWith('> WITHDRAWN')) fs.writeFileSync(report, '> WITHDRAWN on 2026-10-25 at the user’s request. Source 296 is inactive. Its seven source-count contributions were removed and REL scores recalculated; its four pending entries were removed from intake. Earlier Books Guru source 148 is unchanged. The content below is historical, not current membership or scores. [Withdrawal audit](../data/shelves_261025/withdrawn-gates.json).\n\n' + text);
assert(![...catalog.currentBooks, ...catalog.exclusions].some(b => b.sources.includes(296)));
console.log({removedContributions: changes.length, removedPending: pending.filter(b => b.source === 296).length, pending: pending.filter(b => b.source !== 296).length});
