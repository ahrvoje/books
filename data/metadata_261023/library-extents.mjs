import fs from 'node:fs';
import assert from 'node:assert/strict';
const dir='data/metadata_261023/',read=p=>JSON.parse(fs.readFileSync(p)),rows=[];
assert(!fs.existsSync(dir+'manual-library-extents.json'),'The reviewed extent file already exists; do not replace its evidence.');
const values={i:1,v:5,x:10,l:50,c:100,d:500,m:1000};
const roman=s=>[...s].reduce((sum,c,i)=>sum+(values[c]<values[s[i+1]]?-values[c]:values[c]),0);
for(const x of read(dir+'changes.json').pages){
 const e=x.after;if(!e.id.startsWith('/books/')||!e.source?.file?.endsWith('.json'))continue;
 const r=read(e.source.file),d=(r.data||r)['OLID:'+e.id.split('/').at(-1)]?.details;
 const m=d?.pagination?.match(/^([ivxlcdm]+),\s*(\d+)\s+p(?:\.|ages)/i);if(!m||+m[2]!==e.pages)continue;
 const preliminary=roman(m[1].toLowerCase());assert(preliminary>0&&preliminary<100);
 rows.push([x.id,preliminary+e.pages,e.id,e.format,e.year,e.url,'moderate',`Catalogued extent ${d.pagination}; ${m[1]}=${preliminary} preliminary pages plus ${e.pages} Arabic-numbered pages = ${preliminary+e.pages}. Plates are excluded. Matching title, author and language checked in ${e.source.file}.`]);
}
fs.writeFileSync(dir+'manual-library-extents.json',JSON.stringify(rows,null,2)+'\n');console.log('Explicit preliminary extents added',rows.length);
