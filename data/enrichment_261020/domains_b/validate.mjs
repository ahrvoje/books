import fs from 'node:fs';
import assert from 'node:assert/strict';
import { validateConnections } from '../../../site/build.mjs';
import { DOMAIN_IDS } from '../../../site/model.mjs';
const dir = 'data/enrichment_261020/domains_b/';
const books = JSON.parse(fs.readFileSync(dir + 'assessments.json', 'utf8'));
const expected = JSON.parse(fs.readFileSync('data/glasp_261019/compiled.json', 'utf8')).currentBooks
  .filter(b => b.status === 'recommended').sort((a, b) => a.id < b.id ? -1 : a.id > b.id ? 1 : 0).slice(818).map(b => b.id);
assert.deepEqual(Object.keys(books), expected);
const refs = new Set();
for (const book of Object.values(books)) {
  assert.equal(book.researchAudit.knownDomains.length + book.researchAudit.unknownDomains.length, 20);
  assert.deepEqual(book.researchAudit.knownDomains, Object.keys(book.domains));
  assert.deepEqual(book.researchAudit.unknownDomains, DOMAIN_IDS.filter(id => !(id in book.domains)));
  for (const [id, entry] of Object.entries(book.domains)) {
    assert(DOMAIN_IDS.includes(id));
    assert(Number.isInteger(entry.value) && entry.value >= 0 && entry.value <= 4);
    assert(entry.rationale && entry.refs?.length && ['high', 'moderate', 'low'].includes(entry.confidence));
    entry.refs.forEach(ref => refs.add(ref));
  }
  validateConnections({ values: Object.fromEntries(Object.entries(book.domains).map(([id, entry]) => [id, entry.value])), connections: book.connections });
  for (const entry of [...book.connections.mechanisms, ...book.connections.joins]) entry.refs.forEach(ref => refs.add(ref));
  book.researchAudit.inspectedMaterial.forEach(ref => refs.add(ref));
}
for (const ref of refs) {
  assert(/^(https:\/\/|analysis\/)/.test(ref), ref);
  if (!ref.startsWith('analysis/')) continue;
  const [file, anchor] = ref.split('#');
  assert(fs.existsSync(file), ref);
  if (anchor) {
    const body = fs.readFileSync(file, 'utf8');
    assert(body.includes(`id="${anchor}"`) || body.includes(`id='${anchor}'`) || body.includes(`name="${anchor}"`), ref);
  }
}
const judgments = fs.readFileSync(dir + 'judgments.txt', 'utf8').trim().split(/\r?\n/);
assert.equal(new Set(judgments.map(line => line.split('|')[0])).size, judgments.length);
const result = { status: 'passed', books: expected.length, references: refs.size, checks: ['assigned stable-ID membership', 'domain schema and unknown accounting', 'connection contract', 'local reference files and explicit anchors', 'unique manual judgment indices'], limitation: 'Structural validation does not establish factual accuracy or full book coverage.' };
fs.writeFileSync(dir + 'validation.json', JSON.stringify(result, null, 2) + '\n');
console.log(JSON.stringify(result));
