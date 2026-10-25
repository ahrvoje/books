import fs from 'node:fs';
const dir='data/metadata3000_261025',read=p=>JSON.parse(fs.readFileSync(p));
for(const name of ['harvard','cinii']){
 const current=fs.existsSync(dir+'/'+name+'.json')?read(dir+'/'+name+'.json'):{books:{},requests:[]};
 const prior=read('data/metadata2_261025/'+name+'.json');
 for(const [id,v] of Object.entries(prior.books))if(!current.books[id])current.books[id]=v;
 fs.writeFileSync(dir+'/'+name+'.json',JSON.stringify(current,null,2));
}
let s=fs.readFileSync(dir+'/library.mjs','utf8');
s=s.replace("const prior=file.replace('metadata3000_261025','metadata1000_261025');if(fs.existsSync(prior))return read(prior);", "for(const previous of ['metadata2_261025','metadata1000_261025']){const prior=file.replace('metadata3000_261025',previous);if(fs.existsSync(prior))return read(prior);}");
s=s.replace('.slice(0,30)', '.slice(0,100)');
fs.writeFileSync(dir+'/library.mjs',s);
s=fs.readFileSync(dir+'/google-html.mjs','utf8').replace("const priorBooks=read('data/metadata1000_261025/google-html.json').books;", "const priorBooks={...read('data/metadata1000_261025/google-html.json').books,...read('data/metadata2_261025/google-html.json').books};");
fs.writeFileSync(dir+'/google-html.mjs',s);
