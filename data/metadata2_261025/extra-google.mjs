import fs from 'node:fs';
import zlib from 'node:zlib';
import {referenceRanges} from './ranges.mjs';
import {titleMatches,authorMatches,clean} from '../pages_density_261021/collect.mjs';
const dir='data/metadata2_261025',read=p=>JSON.parse(fs.readFileSync(p)),books=read(dir+'/targets.json'),state=read(dir+'/extra.json'),sources=['data/metadata1000_261025',dir].map(p=>read(p+'/google-html.json').books);
let added=0;
for(const b of books){if(b.reference.pages!==null||state.books[b.id]?.reference)continue;
 for(const attempt of sources.flatMap(s=>s[b.id]?.attempts||[])){const file=attempt.rawFile;if(!file||!fs.existsSync(file))continue;
  const html=zlib.gunzipSync(fs.readFileSync(file)).toString(),heading=clean(html.match(/<title>([\s\S]*?)<\/title>/)?.[1]),title=heading.split(' - ')[0],author=heading.split(' - ').slice(1,-1).join(' ');
  if(!titleMatches(b.title,title)||!authorMatches(b.author,author))continue;
  const pages=+(html.match(/Length<\/span><\/td><td[^>]*><span[^>]*>(\d+) pages/)?.[1]||0),toc=[...html.matchAll(/<td class="toc_entry"[^>]*>([\s\S]*?)<td class="toc_number"[^>]*>(\d+)<\/td>/g)].map(m=>({title:clean(m[1]),pagenum:m[2]})),sorted=[...new Map(toc.map(x=>[x.title+'|'+x.pagenum,x])).values()].sort((a,b)=>+a.pagenum-+b.pagenum),r=referenceRanges({table_of_contents:sorted,number_of_pages:pages});
  const id=html.match(/"volume_id":"([^"]+)"/)?.[1]||new URL(attempt.url).searchParams.get('id');if(!r.pages||!id)continue;
  (state.books[b.id]||={}).reference={pages:r.pages,ranges:r.spans,confidence:'moderate',method:'google-numbered-contents',edition:{id:'GoogleBooks:'+id,title,author,language:'English numbered contents',pages:pages||null},url:'https://books.google.com/books?id='+id+'&hl=en',source:{file,url:attempt.url,retrieved:attempt.retrieved},sameEditionAsPG:false,limitation:'Explicit bounded reference sections only. Contents boundaries may include a final blank page; unlisted sections are not inferred.'};added++;break;
 }
}
fs.writeFileSync(dir+'/extra.json',JSON.stringify(state,null,2)+'\n');console.log({added});
