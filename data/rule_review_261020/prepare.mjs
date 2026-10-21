import fs from 'node:fs';
import crypto from 'node:crypto';
import assert from 'node:assert/strict';
const dir='data/rule_review_261020/';
const json=f=>JSON.parse(fs.readFileSync(f,'utf8'));
const norm=s=>String(s||'').normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/&/g,'and').replace(/[^a-z0-9]/g,'');
const key=b=>norm(b.title)+'|'+norm(b.author);
assert(!fs.existsSync(dir+'baseline.json'),'Review baseline already exists; do not reset it.');
const pointer=json('data/catalog.json'),current=json(pointer.compiled),older=json('data/glasp_261019/compiled.json');
const files=['AGENTS.md','RECOMMENDED_BOOKS.md','VETOED_BOOKS.md','EXCLUDED_BOOKS.md','SOURCES.md','site/enrichment.json','data/catalog.json',pointer.compiled];
const baseline={created:new Date().toISOString(),compiled:pointer.compiled,files:{}};
for(const file of files){const text=fs.readFileSync(file,'utf8');baseline.files[file]={sha256:crypto.createHash('sha256').update(text).digest('hex')};if(file.endsWith('.md')||file==='data/catalog.json')baseline.files[file].text=text;}
fs.writeFileSync(dir+'baseline.json',JSON.stringify(baseline,null,2)+'\n');
const records=[...current.sourceBooks,...older.sourceBooks];
const analyses=fs.readdirSync('analysis').filter(f=>f.endsWith('.md')).map(f=>({file:'analysis/'+f,text:fs.readFileSync('analysis/'+f,'utf8')}));
const excluded=current.exclusions.map((b,i)=>{
 const matches=records.filter(r=>key(r)===key(b)||b.sourceIds?.some(id=>r.id===id||r.sourceIds?.includes(id)));
 const unique=[...new Map(matches.map(r=>[r.id+'|'+r.reviewAnchor,r])).values()];
 const refs=analyses.filter(a=>a.text.toLowerCase().includes(b.title.toLowerCase())).map(a=>a.file);
 return {...b,reviewId:'h'+String(i+1).padStart(4,'0'),previousStatus:'excluded',priorRecords:unique,analysisFiles:refs};
});
const vetoed=current.currentBooks.filter(b=>b.status==='vetoed').map((b,i)=>({...b,reviewId:'v'+String(i+1).padStart(4,'0'),previousStatus:'vetoed',analysisFiles:analyses.filter(a=>a.text.toLowerCase().includes(b.title.toLowerCase())).map(a=>a.file)}));
for(const [name,books] of [['excluded_a',excluded.slice(0,617)],['excluded_b',excluded.slice(617)],['vetoed',vetoed]])fs.writeFileSync(dir+name+'-input.json',JSON.stringify(books,null,2)+'\n');
console.log(JSON.stringify({excluded:excluded.length,vetoed:vetoed.length,excludedWithoutStructuredPrior:excluded.filter(b=>!b.priorRecords.length).length,excludedWithoutAnalysis:excluded.filter(b=>!b.analysisFiles.length).length}));
