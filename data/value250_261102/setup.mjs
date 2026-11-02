import fs from 'node:fs';
const old='data/reuse100b_261102',d='data/value250_261102';
fs.mkdirSync(d+'/raw',{recursive:true});
for(const n of ['prepare','short-worker','fresh-worker','focused-worker','scan','harvest-cross','review-candidates','select','audit','finalize','validate']){
 let s=fs.readFileSync(old+'/'+n+'.mjs','utf8').replaceAll(old,d);
 if(['finalize','validate'].includes(n))s=s.replace(/\b100\b/g,'250').replace('analysis_fresh100_','analysis_values250_');
 if(n==='audit')s=s.replace('A named lead author suffices','Ratings need not include the word global. Catalog parenthetical aliases and marketing subtitles do not change the work. Check author names in sourceTitle as well as sourceText. A named lead author suffices');
 fs.writeFileSync(d+'/'+n+'.mjs',s);
}
fs.writeFileSync(d+'/selected.json','[]');fs.writeFileSync(d+'/screened-keys.json','[]');
