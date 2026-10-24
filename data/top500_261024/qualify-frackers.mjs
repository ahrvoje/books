import fs from 'node:fs';
const dir='data/top500_261024/',r=JSON.parse(fs.readFileSync(dir+'archive.json')).books['progress-0066'].reference;
r.confidence='low';
r.limitation+=' The catalog item identifier refers to a different title, although its current title, author and ISBN all identify The Frackers. A second matching record confirms the work and 404-page edition but gives no reference range. The eight-page extent is retained as a low-confidence documented catalog count, not scan verification.';
fs.writeFileSync(dir+'manual-40.json',JSON.stringify({'progress-0066':{referenceRecord:r,reviewNote:'Catalog identifier anomaly checked against https://archive.org/metadata/constitutionalmy0000raph and https://archive.org/metadata/frackersoutrageo0000zuck. Both current records identify The Frackers; only the first documents pages 397–404. Confidence in that range is low.'}},null,2)+'\n');
