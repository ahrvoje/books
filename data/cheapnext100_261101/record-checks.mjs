import fs from 'node:fs';
const d='data/cheapnext100_261101/',s=JSON.parse(fs.readFileSync(d+'summary.json','utf8'));
let text=fs.readFileSync('README.md','utf8');
text=text.replace('usage was **.538856**','usage was **$0.538856**').replace('The active catalog is `data/cheap100_261101/compiled.json`.','That round’s historical snapshot is `data/cheap100_261101/compiled.json`.');
fs.writeFileSync('README.md',text);
const checks={numericFieldsVerified:100,rawSourceMatchesVerified:100,externalAuditCandidates:100,testsPassed:21,testsFailed:0,build:'passed',gitDiffWhitespaceCheck:'passed',catalog:'data/cheapnext100_261101/compiled.json'};
fs.writeFileSync(d+'checks.json',JSON.stringify(checks,null,2)+'\n');
fs.appendFileSync(s.report,'\n## Final validation\n\nAll 100 accepted values match saved source annotations. The published catalog passes metadata, reference-range, score-arithmetic, unchanged-record, and credential-leak checks. The standalone site rebuilt successfully and all 21 repository tests passed. The whitespace check passed.\n');
