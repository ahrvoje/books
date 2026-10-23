import fs from 'node:fs';import path from 'node:path';
const d='data/intake_progress_261023/',a=JSON.parse(fs.readFileSync(d+'audit.json')),files=[a.report,...a.sourceCoverage.map(s=>s.analysis)],missing=[];
for(const f of files){const text=fs.readFileSync(f,'utf8');for(const m of text.matchAll(/\]\(([^)]+)\)/g)){let u=m[1].replace(/^<|>$/g,'');if(/^(https?:|#)/.test(u))continue;let p=path.resolve(path.dirname(f),u.split('#')[0]);if(!fs.existsSync(p))missing.push({file:f,target:u});}}
console.log('Broken local links:',JSON.stringify(missing));
if(missing.length)process.exitCode=1;
