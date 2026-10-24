import fs from 'node:fs';
const d='data/top500_261024/',r=JSON.parse(fs.readFileSync(d+'manual-05.json'))['progress-0417'].referenceRecord;
r.pages=20;r.ranges.unshift({start:415,end:421,label:'Explanatory notes',evidence:'Publisher contents: Explanatory notes 415; Bibliography 422. Visually checked physical PDF page 5.',method:'contents-boundary'});
r.url='https://assets.cambridge.org/97805218/67092/frontmatter/9780521867092_frontmatter.pdf';
r.source={file:d+'raw/darwin-front.pdf',retrieved:'2026-10-24',evidence:'Publisher contents visually verified in raw/darwin-contents.png. Seven pages of notes plus 13 bibliography pages; the latter also documented by NLM https://www.ncbi.nlm.nih.gov/nlmcatalog/101527081.'};
r.method='publisher-contents-and-library-range';r.limitation='Reference apparatus in the 2009 Endersby scholarly edition, not the 1859 original. Notes span inferred from the next contents boundary; possible trailing blank pages cannot be checked in this preview. Front-matter footnotes are not counted. Total-page edition may differ.';
fs.writeFileSync(d+'manual-26.json',JSON.stringify({'progress-0417':{referenceRecord:r}},null,2)+'\n');
