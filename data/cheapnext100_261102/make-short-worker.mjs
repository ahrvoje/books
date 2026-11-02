import fs from 'node:fs';
const d='data/cheapnext100_261102/';
let s=fs.readFileSync(d+'worker.mjs','utf8').replace('max_tokens:500','max_tokens:1');
s=s.replace("+'-'+(process.argv[8]||'fast'),bookId", "+'-'+(process.argv[8]||'fast')+'-short',bookId");
fs.writeFileSync(d+'short-worker.mjs',s);
