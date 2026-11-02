import fs from 'node:fs';
const d='data/cheap100_261102/',s=JSON.parse(fs.readFileSync(d+'summary.json','utf8'));
let text=fs.readFileSync('README.md','utf8');
text=text.replace('The active catalog is data/cheapnext100_261101/compiled.json.','That round’s historical snapshot is data/cheapnext100_261101/compiled.json.');
const paragraph=`Further metadata round, 2 November 2026: [evidence and score report](${s.report}). Added **100 missing numeric values** across 100 books: **95 Amazon rating counts and 5 reference-page counts**; no total-page count was accepted. Recalculated 53 changed scores. Recorded OpenRouter usage was **$0.273962**, about **49% below** the previous round, including a nine-book query pilot and separate evidence checks. Thirteen values came from saved sources. ISBN-only queries returned no usable book evidence; keep title and author in queries. The field mix was more Amazon-heavy than the prior round, so this is not a controlled efficiency comparison. [Cost results and reusable settings](data/cheap100_261102/cost-learning.json). Metadata confidence is moderate; Amazon counts are indexed snapshots and unconfirmed edition ratios have low confidence. The active catalog is \`data/cheap100_261102/compiled.json\`.

`;
text=text.replace('## Use\n\n','## Use\n\n'+paragraph);
fs.writeFileSync('README.md',text);
