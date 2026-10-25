import fs from 'node:fs';
import assert from 'node:assert/strict';
import {titleMatches,authorMatches} from '../pages_density_261021/collect.mjs';
const dir='data/metadata3000_261025',read=p=>JSON.parse(fs.readFileSync(p));
const targets=new Map(read(dir+'/targets.json').map(b=>[b.id,b])),editions=read(dir+'/candidate-editions.json'),enrichment=read(dir+'/candidate-enrichment.json');
const changes=read(dir+'/edition-details-applied.json'),summary=read(dir+'/summary.json');
const loaded=new Map(),valid=s=>/^\d{9}[\dX]$/.test(s)?[...s].reduce((n,c,i)=>n+(10-i)*(c==='X'?10:+c),0)%11===0:/^\d{13}$/.test(s)&&[...s].reduce((n,c,i)=>n+(i%2?3:1)*+c,0)%10===0;
let count=0,rank=0;const seen=new Set();
for(const x of changes){
 assert(!seen.has(x.id));seen.add(x.id);assert(x.rank>=rank);rank=x.rank;
 const b=targets.get(x.id),before=b.edition,after=enrichment.books[x.id]?.edition||editions[x.id];
 assert.equal(before.id,after.id);assert.equal(before.pages,after.pages);assert.equal(before.url,after.url);
 assert(titleMatches(b.title,x.matchedTitle));assert(authorMatches(b.author,x.matchedAuthor));
 assert(fs.existsSync(x.source.file));
 if(!loaded.has(x.source.file))loaded.set(x.source.file,read(x.source.file));
 const json=loaded.get(x.source.file),raw=json.data||json,records=[raw,...Object.values(raw).map(v=>v?.details)],d=records.find(d=>d?.key===x.matchedRecord);
 assert(d,'Source record missing: '+x.id);
 for(const [key,value]of Object.entries(x.fields))assert.deepEqual(after[key],value);
 for(const [field,value]of Object.entries(x.evidence)){
  if(field==='publisher'){assert(!before.publisher);assert.deepEqual(value,d.publishers);}
  if(field==='pagination'){assert(!before.pagination);assert.equal(value,d.pagination);assert(/\d+\s*\]?\s*(?:p\b|pages\b|leaves\b)/i.test(value));assert(/\b[ivxlcdm]+\s*[,;]/i.test(value)||/plates|unnumbered|\[\d+\]/i.test(value));assert(!d.number_of_pages||d.number_of_pages===before.pages);}
  if(field==='format'){assert(!before.format||/unspecified|not stated|not exposed|unknown|print edition$/i.test(before.format));assert.equal(value,d.physical_format);}
  if(field==='year'){assert(!before.year);assert.equal(value,d.publish_date);}
  if(field==='isbn'){assert.equal([...before.isbn10||[],...before.isbn13||[],...before.isbn||[]].length,0);assert(!valid(String(before.id).replace(/^(?:ISBN|ASIN):/,'')));assert(!valid((b.purchaseUrl||'').match(/\/dp\/([0-9]{9}[0-9X]|[0-9]{13})(?:[/?#]|$)/)?.[1]||''));assert(value.length);for(const isbn of value){assert(valid(isbn));assert([...d.isbn_10||[],...d.isbn_13||[]].includes(isbn));}}
 }
 assert.equal(x.pointCount,Object.keys(x.evidence).length);count+=x.pointCount;
}
assert.equal(count,summary.editionDetailFields);assert.equal(count+summary.numericDataPoints,summary.allNewFields);
fs.writeFileSync(dir+'/details-validation.json',JSON.stringify({valid:true,books:changes.length,fields:count,sourceRecordsVerified:true,selectedPageCountsUnchanged:true,highestInitialRank:changes[0]?.rank,lowestInitialRank:rank},null,2));
console.log({valid:true,books:changes.length,fields:count});

