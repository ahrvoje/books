import fs from 'node:fs';
const d='data/top250_261023/',read=p=>JSON.parse(fs.readFileSync(p)),state=read(d+'progress.json');
let records=0,added=0;
for(const b of Object.values(state.books))for(const identity of b.identities||[]){const r=read(identity.source);const record=Object.values(r.data||{}).map(v=>v.details).find(v=>v?.key?.endsWith('/'+identity.id));if(!record)continue;const ids=[...new Set([...identity.isbn,...record.isbn_13||[]])];if(ids.length>identity.isbn.length){records++;added+=ids.length-identity.isbn.length;identity.isbn=ids;}}
fs.writeFileSync(d+'progress.json',JSON.stringify(state,null,2)+'\n');console.log({records,added});
