import fs from 'node:fs';
const dir='data/metadata3000_261025';
let s=fs.readFileSync('data/metadata2_261025/parse-amazon-cache.mjs','utf8').replaceAll('metadata2_261025','metadata3000_261025');
s=s.replace("h=String(j.details||'')", "h=String(j.result||'')+' '+String(j.details||'')");
s=s.replace('Maximum among accessible matching inspected editions; no exhaustive edition claim.', 'One accessible matched edition; other editions may have higher aggregates.');
s=s.replace("retrievedAt:'Public web cache: '+cached,verifiedAt:'2026-10-25'", "retrievedAt:'Public web cache: '+cached+'; retrieved '+j.retrieved,verifiedAt:j.retrieved");
fs.writeFileSync(dir+'/parse-amazon-cache.mjs',s);
