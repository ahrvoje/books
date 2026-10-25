import fs from 'node:fs';
import {titleMatches,authorMatches} from '../pages_density_261021/collect.mjs';
import {referenceRanges} from '../reference_pages_261022/collect.mjs';
const dir='data/metadata1000_261025',read=p=>JSON.parse(fs.readFileSync(p)),targets=read(dir+'/targets.json'),out={books:{}};
for(const file of fs.readdirSync(dir+'/raw').filter(x=>/^page-search-\d+\.json$/.test(x)).sort()){
 const j=read(dir+'/raw/'+file);if(typeof j.result!=='string')continue;
 for(const block of j.result.split(/-{20,}/)){
  const url=block.match(/\((https:\/\/books\.google\.com\/[^\s)]+)\)/)?.[1],metadata=block.split('### Bibliographic information')[1];if(!url||!metadata)continue;
  const title=metadata.match(/^Title\s*\|\s*(.+)$/m)?.[1],author=metadata.match(/^(?:Authors?|Editors?)\s*\|\s*(.+)$/m)?.[1],pages=+metadata.match(/^Length\s*\|\s*(\d+) pages/m)?.[1],year=+metadata.match(/^Publisher\s*\|[^\n]*\b(1\d{3}|20\d{2})\b/m)?.[1],isbn=(metadata.match(/^ISBN\s*\|\s*(.+)$/m)?.[1]||'').split(/,\s*/);
  if(!title||!author||!pages||!year||year>2026)continue;
  for(const b of j.books){
   if(['n86606a9cda','intake-0172','n88837eb597','shelf-893c89219488','rest-177-133','shelf-bceb44f5b4f2','progress-0187','complete-307-208','shelf-963f1a9bc7e6'].includes(b.id)||/series|trilogy|volumes/i.test(b.title))continue;
   if(/\bvolume (one|two|three|four|five)\b/i.test(title)&&!/\bvolume (one|two|three|four|five)\b/i.test(b.title))continue;
   if(!titleMatches(b.title,title)||!authorMatches(b.author.replace(/ with /g,'; '),author)||year<b.year-2)continue;
   const id='GoogleBooks:'+new URL(url).searchParams.get('id'),source={file:dir+'/raw/'+file,url,retrieved:'2026-10-25',evidence:`Title ${title}; author ${author}; publisher year ${year}; length ${pages}; ISBN ${isbn.join(', ')}`},s=out.books[b.id]||={};
   s.edition||={id,pages,title,authors:author,year,publisher:metadata.match(/^Publisher\s*\|\s*(.+)$/m)?.[1],translatedBy:metadata.match(/^Translated by\s*\|\s*(.+)$/m)?.[1],format:'Google Books edition (binding unspecified)',language:'English title; language field not exposed',url,retrieved:'2026-10-25',confidence:'moderate',isbn10:isbn.filter(x=>/^\d{9}[\dX]$/.test(x)),isbn13:isbn.filter(x=>/^\d{13}$/.test(x)),source,notes:'Explicit length in the indexed Google Books bibliographic table. Title and author matched; binding and language metadata are not exposed in this snapshot.'};
   const toc=(block.split('### Contents')[1]||'').split(/### (?:Other editions|Common terms|About|Bibliographic)/)[0];
   const table_of_contents=[...toc.matchAll(/^([^|\n]+)\s*\|\s*(\d+)\s*$/gm)].map(m=>({title:m[1].trim(),pagenum:m[2]})),r=referenceRanges({table_of_contents,number_of_pages:pages});
   const t=targets.find(t=>t.id===b.id);if(t.reference.pages===null&&r.pages&&!s.reference)s.reference={pages:r.pages,ranges:r.spans,confidence:'moderate',method:'indexed-google-contents-boundaries',edition:{id,title,author,year,language:'English numbered contents',isbn,pages},url,source,sameEditionAsPG:true,limitation:'Only numbered contents sections with a following numeric boundary are counted. Index excluded; unlisted reference sections may remain uncounted.'};
  }
 }
}
fs.writeFileSync(dir+'/search-pages.json',JSON.stringify(out,null,2)+'\n');
console.log({pages:Object.keys(out.books).length,references:Object.values(out.books).filter(x=>x.reference).length});
