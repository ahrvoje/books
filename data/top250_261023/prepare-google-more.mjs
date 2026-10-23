import fs from 'node:fs';
const p='data/top250_261023/google.mjs';let s=fs.readFileSync(p,'utf8');
s=s.replaceAll("dir+'/google.json'","dir+'/google-more.json'");
s=s.replace("const books=read(dir+'/targets.json')", "const known=read(dir+'/candidate-reference-pages.json');\nconst books=read(dir+'/targets.json').filter(b=>known[b.id].pages===null)");
s=s.replace("const isbn=[...products(b),...(lib?.identities||[]).flatMap(x=>x.isbn)].find(x=>/^\\d{9}[\\dX]$/.test(x));", "const existing=read(dir+'/google.json').books[b.id]?.attempts.map(a=>a.url)||[];\n const isbn=[...new Set([...(lib?.identities||[]).flatMap(x=>x.isbn),...products(b)])].filter(x=>/^\\d{9}[\\dX]$/.test(x)).find(x=>!existing.some(u=>u.includes('ISBN'+x)));");
fs.writeFileSync('data/top250_261023/google-more.mjs',s);
