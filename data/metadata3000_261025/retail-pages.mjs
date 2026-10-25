import fs from 'node:fs';
import {titleMatches,authorMatches} from '../pages_density_261021/collect.mjs';
const dir='data/metadata3000_261025',out={books:{},candidates:[]};
for(const file of fs.readdirSync(dir+'/raw').filter(f=>/^retail-pages-\d+\.json$/.test(f))){
 const j=JSON.parse(fs.readFileSync(dir+'/raw/'+file));
 for(const block of String(j.result).split(/-{20,}/)){
  const url=block.match(/\((https:\/\/www\.readinglength\.com\/book\/[^)]+)\)/)?.[1];if(!url)continue;
  const title=block.match(/^# (.+)$/m)?.[1],author=block.split('### Author')[1]?.split('###')[0].replace(/\s*\*\s*/g,'; ').trim(),publication=block.split('### Publication')[1]?.split('###')[0].trim(),language=block.split('### Language')[1]?.split('###')[0].trim(),pages=+block.match(/### Page Count\s+(\d+) pages/)?.[1],year=+publication?.match(/^\d{4}/)?.[0],isbn13=block.match(/ISBN-13\s+(\d{13})/)?.[1],isbn10=block.match(/ISBN-10\s+([0-9X]{10})/)?.[1],format=block.split('### Physical Format')[1]?.split('###')[0].trim();
  if(!title||!author||!pages||!year||year>2026||!isbn13||!/^English|Croatian$/i.test(language))continue;
  if([...isbn13].reduce((n,c,i)=>n+(i%2?3:1)*+c,0)%10)continue;
  for(const b of j.books){
   if(!titleMatches(b.title,title)||!authorMatches(b.author.replace(/ with /g,'; '),author)||year<b.year-2||/series|trilogy|volumes|abridg/i.test(title+' '+b.title))continue;
   const edition={id:'ISBN:'+isbn13,title,authors:author,pages,year,language,format:format||'Binding unspecified',isbn13:[isbn13],isbn10:isbn10?[isbn10]:[],url,retrieved:j.retrieved,confidence:'moderate',source:{file:dir+'/raw/'+file,url,retrieved:j.retrieved,evidence:'Explicit Page Count '+pages+'; '+title+'; '+author+'; '+publication+'; ISBN '+isbn13},notes:'Reading Length catalogued page count, not its estimated word count or reading time. Exact edition ISBN retained.'};
   if(b.id==='progress-0769')edition.notes+=' Google Books gives 201 pages for the same ISBN; 208 is retained as the reported total extent, corroborated by the review in page-conflicts-followup2.json. Pagination conventions are unconfirmed.'; out.candidates.push({id:b.id,rank:b.rank,title:b.title,edition});out.books[b.id]||={edition};
  }
 }
}
fs.writeFileSync(dir+'/retail-pages.json',JSON.stringify(out,null,2)+'\n');
console.log(out.candidates.map(x=>({id:x.id,title:x.title,pages:x.edition.pages,url:x.edition.url})));

