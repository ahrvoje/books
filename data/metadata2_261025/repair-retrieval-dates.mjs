import fs from 'node:fs';
import assert from 'node:assert/strict';
const dir='data/metadata2_261025',read=p=>JSON.parse(fs.readFileSync(p)),review=read(dir+'/review.json'),editions=read(dir+'/candidate-editions.json');
let repaired=0;for(const x of review){if(!x.edition||x.edition.retrieved)continue;assert(x.edition.source?.retrieved);x.edition.retrieved=x.edition.source.retrieved;editions[x.id].retrieved=x.edition.retrieved;repaired++;}
for(const [p,j]of [[dir+'/review.json',review],[dir+'/candidate-editions.json',editions],['site/editions.json',editions]])fs.writeFileSync(p,JSON.stringify(j,null,2)+'\n');
console.log({retrievalDatesPromotedFromSavedSources:repaired});
