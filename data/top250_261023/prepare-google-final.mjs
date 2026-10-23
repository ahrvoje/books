import fs from 'node:fs';
let s=fs.readFileSync('data/top250_261023/google-more.mjs','utf8');
s=s.replaceAll("dir+'/google-more.json'","dir+'/google-final.json'");
s=s.replace("const existing=read(dir+'/google.json').books[b.id]?.attempts.map(a=>a.url)||[];", "const existing=['google.json','google-more.json'].flatMap(f=>read(dir+'/'+f).books[b.id]?.attempts.map(a=>a.url)||[]);\n const m=Object.assign({},...fs.readdirSync(dir).filter(f=>/^manual(?:-\\d+)?\\.json$/.test(f)).map(f=>read(dir+'/'+f)[b.id]).filter(Boolean));");
s=s.replace("[...(lib?.identities||[]).flatMap(x=>x.isbn),...products(b)]", "[m.product?.id,m.edition?.id?.replace(/^ISBN:/,''),b.edition?.id?.replace(/^ISBN:/,''),...(b.edition?.isbn10||[]),...(lib?.identities||[]).flatMap(x=>x.isbn),...products(b)]");
fs.writeFileSync('data/top250_261023/google-final.mjs',s);
