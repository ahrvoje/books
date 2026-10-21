import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const dir = path.dirname(fileURLToPath(import.meta.url));
const inventory = JSON.parse(fs.readFileSync(path.join(dir, '../math/inventory.json'), 'utf8'));
const books = inventory.sources.find(s => s.source === 136).books;
fs.mkdirSync(path.join(dir, 'raw'), { recursive: true });
const results = [];
for (let offset = 0; offset < books.length; offset += 12) {
  const group = books.slice(offset, offset + 12);
  const keys = [...new Set(group.flatMap(b => b.sourceUrls.flatMap(u => [...u.matchAll(/\/dp\/(\d{9}[\dX])/g)].map(m => 'ISBN:' + m[1]))))];
  if (!keys.length) continue;
  const url = 'https://openlibrary.org/api/books?bibkeys=' + keys.join(',') + '&jscmd=details&format=json';
  const response = await fetch(url, { signal: AbortSignal.timeout(30000) });
  const body = await response.text();
  fs.writeFileSync(path.join(dir, `raw/ol-isbn-${offset}.json`), body);
  results.push({ offset, url, retrieved: new Date().toISOString(), status: response.status, titles: group.map(b => b.title), data: response.ok ? JSON.parse(body) : null });
  console.log(JSON.stringify({ offset, status: response.status, found: response.ok ? Object.keys(JSON.parse(body)).length : 0 }));
  if (!response.ok) break;
}
fs.writeFileSync(path.join(dir, 'library-editions.json'), JSON.stringify(results, null, 2));
