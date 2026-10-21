import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import assert from 'node:assert/strict';
import { fileURLToPath } from 'node:url';

const dir = path.dirname(fileURLToPath(import.meta.url)), root = path.resolve(dir, '../..');
const read = f => JSON.parse(fs.readFileSync(path.join(root, f), 'utf8'));
const write = (f, d) => fs.writeFileSync(path.join(dir, f), JSON.stringify(d, null, 2) + '\n');
const norm = s => String(s || '').normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/&/g, ' and ').replace(/[^a-z0-9]+/g, ' ').trim().replace(/^(the|a|an) /, '');
const base = s => norm(String(s).split(':')[0]);
const surname = s => norm(String(s || '').split(';')[0].replace(/\([^)]*\)/g, '')).split(' ').filter(t => !['jr','sr','editor','editors'].includes(t)).at(-1) || '';
const manifest = read('data/sources_261020/manifest.json');
const previous = read(manifest.previousCompiled), prior = previous.currentBooks;
const enrichment = JSON.parse(read('data/sources_261020/baseline.json')['site/enrichment.json'].text).books;
const aliases = fs.existsSync(path.join(dir, 'identity-overrides.json')) ? read('data/sources_261020/identity-overrides.json') : {};
const sources = [], books = new Map(), uncertain = [];
for (const part of ['hn', 'math', 'reddit']) {
  const file = `data/sources_261020/${part}/inventory.json`;
  if (!fs.existsSync(path.join(root, file))) continue;
  for (const s of read(file).sources) {
    assert(manifest.sources.some(x => x.number === s.source), `Unknown source ${s.source}`);
    sources.push({ ...s, books: undefined, part, inventory: file });
    for (let i = 0; i < s.books.length; i++) {
      const b = s.books[i], occurrence = `${s.source}:${i}`;
      const override = aliases[occurrence] || aliases[`${norm(b.title)}|${norm(b.author)}`] || {};
      const title = override.title || b.title, author = override.author || b.author || '';
      let matches = prior.filter(p => base(p.title) === base(title) && surname(p.author) === surname(author));
      if (override.priorId) matches = prior.filter(p => p.id === override.priorId);
      if (override.distinct) matches = [];
      const p = matches.length === 1 ? matches[0] : null;
      const identity = override.identity || (p ? p.id : `${base(title)}|${surname(author)}`);
      const id = p?.id || 'n' + crypto.createHash('sha1').update(identity).digest('hex').slice(0, 10);
      if (!books.has(identity)) {
        const candidates = !p ? prior.filter(p => {
          const a = base(p.title), z = base(title);
          return (a === z || (surname(p.author) === surname(author) && (a.includes(z) || z.includes(a)))) && Math.min(a.length, z.length) >= 4;
        }).map(p => ({ id: p.id, title: p.title, author: p.author, status: p.status })) : [];
        const excluded = previous.exclusions.filter(p => base(p.title) === base(title) && (!p.author || surname(p.author) === surname(author)));
        books.set(identity, { id, identity, title: p?.title || title, author: p?.author || author, prior: p || null,
          priorEnrichment: p ? enrichment[p.id] || null : null, priorExcluded: excluded, priorCandidates: candidates, appearances: [] });
        if (matches.length > 1 || candidates.length || !author) uncertain.push({ id, occurrence, title, author, candidates, exactMatches: matches.map(p => p.id) });
      }
      books.get(identity).appearances.push({ ...b, source: s.source, occurrence, part, sourcePage: s.url });
    }
  }
}
const all = [...books.values()];
for (const b of all) {
  b.sources = [...new Set(b.appearances.map(a => a.source))].sort((a,b)=>a-b);
  b.owner = b.sources.includes(136) ? 'primary' : b.appearances.some(a => a.part === 'hn') ? 'hn' : b.appearances.some(a => a.part === 'math') ? 'math' : 'reddit';
}
assert.equal(new Set(all.map(b => b.id)).size, all.length, 'ID collision');
write('inventory.json', { sources: sources.sort((a,b)=>a.source-b.source), books: all });
write('identity-review.json', uncertain);
for (const part of ['primary','hn','math','reddit']) write(`${part}/packet.json`, all.filter(b => b.owner === part));
console.log(JSON.stringify({ sources: sources.length, books: all.length, prior: all.filter(b=>b.prior).length,
  excluded: all.filter(b=>b.priorExcluded.length).length, identityReview: uncertain.length,
  assignments: Object.fromEntries(['primary','hn','math','reddit'].map(part=>[part,all.filter(b=>b.owner===part).length])) }));
