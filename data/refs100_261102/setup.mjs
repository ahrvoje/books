import fs from 'node:fs';
const old='data/batch250_261102',d='data/refs100_261102';fs.mkdirSync(d+'/raw',{recursive:true});
for(const n of ['prepare','select','audit','finalize','validate']){let s=fs.readFileSync(old+'/'+n+'.mjs','utf8').replaceAll(old,d).replaceAll('analysis_batch250_','analysis_refs100_');if(['finalize','validate'].includes(n))s=s.replace(/\b250\b/g,'100');fs.writeFileSync(d+'/'+n+'.mjs',s);}
fs.writeFileSync(d+'/selected.json','[]');fs.writeFileSync(d+'/screened-keys.json','[]');
