import fs from 'node:fs';
import {titleMatches,authorMatches} from '../pages_density_261021/collect.mjs';
const dir='data/metadata3000_261025',out={books:{},candidates:[]};
for(const file of fs.readdirSync(dir+'/raw').filter(f=>/^retail-pages-\d+\.json$/.test(f))){
 const j=JSON.parse(fs.readFileSync(dir+'/raw/'+file));
 for(const block of String(j.result).split(/-{20,}/)){
  const url=block.match(/\((https:\/\/www\.abebooks\.(?:com|co\.uk)\/[^)]+\/plp)\)/)?.[1];if(!url)continue;
  const title=block.match(/^# (.+?)(?: - (?:Softcover|Hardcover))?$/m)?.[1],author=block.match(/^## ([^\n]+)$/m)?.[1],pages=+block.match(/Number of pages\s+(\d+)\b/)?.[1],year=+block.match(/Publication date\s+(\d{4})/)?.[1],language=block.match(/Language\s+([^\n]+)/)?.[1],format=block.match(/Binding\s+([^\n]+)/)?.[1],isbn=block.match(/ISBN\s*13\s*:?\s*(\d{13})/)?.[1];
  if(!title||!author||!pages||!year||year>2026||!isbn||!/^English|Croatian$/i.test(language))continue;
  if([...isbn].reduce((n,c,i)=>n+(i%2?3:1)*+c,0)%10)continue;
  for(const b of j.books){
   if(!titleMatches(b.title,title)||!authorMatches(b.author.replace(/ with /g,'; '),author)||year<b.year-2||/series|trilogy|volumes|abridg/i.test(title+' '+b.title))continue;
   const edition={id:'ISBN:'+isbn,title,authors:author,pages,year,language,format:format||'Binding unspecified',isbn13:[isbn],url,retrieved:j.retrieved,confidence:'moderate',source:{file:dir+'/raw/'+file,url,retrieved:j.retrieved,evidence:'AbeBooks edition metadata: '+title+'; '+author+'; pages '+pages+'; ISBN '+isbn+'; '+year+'; '+language+'; '+format},notes:'Exact ISBN product metadata. Seller-specific condition reports and related products are excluded from extraction.'};
   out.candidates.push({id:b.id,title:b.title,edition});out.books[b.id]||={edition};
  }
 }
}
fs.writeFileSync(dir+'/bookseller-pages.json',JSON.stringify(out,null,2)+'\n');console.log(out.candidates.map(x=>({id:x.id,title:x.title,pages:x.edition.pages,author:x.edition.authors,year:x.edition.year})));
