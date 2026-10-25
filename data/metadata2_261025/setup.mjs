import fs from 'node:fs';
const old='data/metadata1000_261025',dir='data/metadata2_261025';
fs.mkdirSync(dir+'/raw',{recursive:true});
for(const name of ['prepare','library','archive','google-html','search-pages','publish','validate','audit-editions','cached-amazon']){
 let s=fs.readFileSync(old+'/'+name+'.mjs','utf8').replaceAll('metadata1000_261025','metadata2_261025').replaceAll('analysis_metadata1000_','analysis_metadata2_');
 if(name==='library'){
  s=s.replace("if(fs.existsSync(file))return read(file);","if(fs.existsSync(file))return read(file); const prior=file.replace('metadata2_261025','metadata1000_261025');if(fs.existsSync(prior))return read(prior);");
  s=s.replace("const year=+", "if(/abridg|young readers edition|adapted for young/i.test(typeof d.notes==='string'?d.notes:d.notes?.value||''))return;\n const year=+");
 }
 if(name==='archive'){
  s=s.replace("const queue=books.filter", "const priorIds=new Set(read('"+old+"/archive.json').batches.flatMap(b=>b.ids));\nconst queue=books.filter");
  s=s.replace("b=>(!b.edition", "b=>!priorIds.has(b.id)&&(!b.edition");
  s=s.replace("if(year&&year<b.year-2)continue;", "if(year&&year<b.year-2)continue; if(/abridg|young readers edition|adapted for young/i.test(notes))continue;");
 }
 if(name==='google-html'){
  s=s.replace(".filter(b=>b.rank<=2000)", "");
  s=s.replace("if(state.books[b.id])continue;", "if(state.books[b.id]||priorBooks[b.id]?.attempts?.length)continue;");
  s=s.replace("let last=0;", "const priorBooks=read('"+old+"/google-html.json').books;\nlet last=0;");
 }
 fs.writeFileSync(dir+'/'+name+'.mjs',s);
}
