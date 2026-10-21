import fs from 'node:fs';
import path from 'node:path';
import { books, state, save, log, retrieve, acceptOL, titleMatches, authorMatches, norm, DIR } from './collect.mjs';

// Work search only selects candidates. Page counts always come from an
// identified edition record and must pass title/author checks again.
const pending = books.filter(b => !state.books[b.id].edition);
const candidates = new Map();
for (let i = 0; i < pending.length; i += 1) {
  const group = pending.slice(i, i + 1);
  const clauses = group.map(b => {
    const title = b.title.split(/:| — | \/ /)[0].replace(/\([^)]*\)/g, '').replace(/"/g, '').trim();
    const author = norm(b.author.split(/;| and | & /)[0].replace(/\([^)]*\)/g, '')).split(' ').filter(x => !['jr', 'sr'].includes(x)).at(-1);
    return `(title:"${title}" AND author:"${author}")`;
  });
  const source = await retrieve(`https://openlibrary.org/search.json?q=${encodeURIComponent(clauses.join(' OR '))}&fields=key,title,author_name,editions,edition_key,language&limit=20&lang=en`, `ol-single-${i}`);
  for (const b of group) {
    const s = state.books[b.id];
    const matched = (source.data?.docs || []).filter(d => titleMatches(b.title, d.title) && authorMatches(b.author, (d.author_name || []).join('; ')));
    const keys = [...new Set(matched.flatMap(d => [
      ...(d.editions?.docs || []).filter(e => e.language?.includes('eng')).map(e => e.key.split('/').pop()),
      ...(d.editions?.docs || []).map(e => e.key.split('/').pop()),
      ...(d.edition_key || []).slice(0, 12)
    ]))].slice(0, 12);
    for (const key of keys) {
      if (!candidates.has(key)) candidates.set(key, []);
      candidates.get(key).push(b);
    }
    if (!s.attempts.some(a => a.kind === 'ol-work-search' && a.rawFile === source.rawFile))
      s.attempts.push({ kind: 'ol-work-search', url: source.url, rawFile: source.rawFile, retrieved: source.retrieved, status: source.status, workKeys: matched.map(x => x.key), editionKeys: keys, accepted: false, reason: 'Candidate selection only; no page count inferred from work search.' });
    if (!keys.length) s.reason = source.status === 200 ? 'No title-and-author-matching Open Library work from batch search.' : source.error || `Search HTTP ${source.status}`;
  }
  if (i % 50 === 0 || i + 1 >= pending.length) log(`Open Library work search ${Math.min(i + 1, pending.length)}/${pending.length}`);
}
const keys = [...candidates.keys()];
fs.writeFileSync(path.join(DIR, 'search-candidates.json'), JSON.stringify(Object.fromEntries([...candidates].map(([k, b]) => [k, b.map(x => x.id)])), null, 2));
for (let i = 0; i < keys.length; i += 35) {
  const group = keys.slice(i, i + 35);
  const source = await retrieve(`https://openlibrary.org/api/books?bibkeys=${group.map(x => 'OLID:' + x).join(',')}&jscmd=details&format=json`, `ol-editions-${i}`);
  for (const key of group) for (const b of candidates.get(key)) {
    const s = state.books[b.id];
    if (s.edition) continue;
    const check = source.status === 200 ? acceptOL(b, source.data?.['OLID:' + key], source) : { accepted: false, reason: source.error || `HTTP ${source.status}` };
    s.attempts.push({ kind: 'ol-candidate-edition', editionKey: key, rawFile: source.rawFile, retrieved: source.retrieved, ...check });
    if (!s.edition) s.reason = check.reason;
  }
  log(`Open Library candidate editions ${Math.min(i + 35, keys.length)}/${keys.length}`);
}
save();
