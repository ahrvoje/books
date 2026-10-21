import fs from 'node:fs';
const dir='data/source_batch_261021/',a=JSON.parse(fs.readFileSync(dir+'amazon-reranked3.json'));
const b=a.find(b=>b.id==='g0854');b.accepted={...b.attempts[0],accepted:true,authorMatch:true,manualIdentity:'Primary author Gordon Conway matches. The parser rejected the additional contributor Katy Wilson in the catalog author string; Cornell University Press identifies the book as by Gordon Conway.',identityEvidence:['https://cornellpress.cornell.edu/new-releases-87/']};
fs.writeFileSync(dir+'amazon-reranked3-reviewed.json',JSON.stringify(a,null,2));
