import fs from 'node:fs';
const d='data/cheap100_261102/';
let s=fs.readFileSync(d+'worker.mjs','utf8');
s=s.replace(".slice(start,start+limit);",".slice(start,start+limit).filter(b=>/^(?:ISBN:)?(?:97[89]\\d{10}|\\d{9}[\\dX])$/.test(b.edition?.id||''));");
s=s.replace("+'-'+(process.argv[8]||'fast'),bookId", "+'-'+(process.argv[8]||'fast')+'-isbn',bookId");
s=s.replace('`site:amazon.com "${b.title.split(\':\')[0]}" ${b.author} "global ratings"`','`site:amazon.com "${b.edition.id.replace(/^ISBN:/,\'\')}" "ratings"`');
fs.writeFileSync(d+'isbn-worker.mjs',s);
