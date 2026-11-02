import fs from 'node:fs';
const d='data/cheapnext100_261102/',s=JSON.parse(fs.readFileSync(d+'summary.json','utf8'));
let t=fs.readFileSync('README.md','utf8');
t=t.replace('The active catalog is `data/cheap100_261102/compiled.json`.','That round’s historical snapshot is `data/cheap100_261102/compiled.json`.');
const paragraph=`Further metadata round with minimal worker replies, 2 November 2026: [evidence and score report](${s.report}). Added **100 missing numeric values** across 100 books: **99 Amazon rating counts and 1 reference-page count**; no total-page count was accepted. Recalculated 59 changed scores. Recorded OpenRouter usage was **$0.293262**, about **7% more** than the prior round, including the ten-book pilot and separate evidence audit. One-token replies preserved source-annotation counts in all ten paired calls but saved only **0.40%** of total pilot cost. The best tested base setup remains Mistral Nemo with Parallel fast search, ten results, and reuse of source evidence; Mistral Small 24B supplies audit flags. [Cost results and reusable settings](data/cheapnext100_261102/cost-learning.json). Confidence is moderate; Amazon counts are indexed snapshots and unconfirmed edition ratios have low confidence. The active catalog is \`data/cheapnext100_261102/compiled.json\`.

`;
t=t.replace('## Use\n\n','## Use\n\n'+paragraph);fs.writeFileSync('README.md',t);
