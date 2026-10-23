import fs from 'node:fs';
import zlib from 'node:zlib';
import crypto from 'node:crypto';
import {referenceRanges} from '../reference_pages_261022/collect.mjs';
import {titleMatches,authorMatches,clean,products} from '../pages_density_261021/collect.mjs';
const dir='data/top250_261023',read=p=>JSON.parse(fs.readFileSync(p)),write=(p,v)=>fs.writeFileSync(p,JSON.stringify(v,null,2));
const books=read(dir+'/targets.json'),state=fs.existsSync(dir+'/google.json')?read(dir+'/google.json'):{books:{}};
const save=()=>write(dir+'/google.json',state),sleep=ms=>new Promise(r=>setTimeout(r,ms));
let last=0;
async function get(url){
 const rawFile=dir+'/raw/google-'+crypto.createHash('sha256').update(url).digest('hex').slice(0,16)+'.html.gz';
 if(fs.existsSync(rawFile))return {...read(rawFile+'.json'),html:zlib.gunzipSync(fs.readFileSync(rawFile)).toString()};
 await sleep(Math.max(0,last+2500-Date.now()));last=Date.now();
 const r={url,rawFile,retrieved:new Date().toISOString()};
 try{const response=await fetch(url,{signal:AbortSignal.timeout(20000)});r.status=response.status;r.html=await response.text();fs.writeFileSync(rawFile,zlib.gzipSync(r.html));if([403,429].includes(r.status))state.blocked=(state.blocked||0)+1;}catch(e){r.error=e.message;r.html='';}
 write(rawFile+'.json',{...r,html:undefined});return r;
}
function parse(b,r){
 const heading=clean(r.html.match(/<title>([\s\S]*?)<\/title>/)?.[1]),title=heading.split(' - ')[0],author=heading.split(' - ').slice(1,-1).join(' ');
 if(!titleMatches(b.title,title)||!authorMatches(b.author,author))return null;
 const toc=[...r.html.matchAll(/<td class="toc_entry"[^>]*>([\s\S]*?)<td class="toc_number"[^>]*>(\d+)<\/td>/g)].map(m=>({title:clean(m[1]),pagenum:m[2]}));
 const sorted=[...new Map(toc.map(x=>[x.title+'|'+x.pagenum,x])).values()].sort((a,b)=>+a.pagenum-+b.pagenum),ranges=referenceRanges({table_of_contents:sorted});
 const id=r.html.match(/"volume_id":"([^"]+)"/)?.[1]||new URL(r.url).searchParams.get('id');
 if(!ranges.pages||!id)return null;
 return {pages:ranges.pages,confidence:'moderate',method:'google-contents-boundaries',ranges:ranges.spans,edition:{id:'GoogleBooks:'+id,title,author,language:'English numbered contents'},url:'https://books.google.com/books?id='+id+'&hl=en',source:{url:r.url,file:r.rawFile,retrieved:r.retrieved},sameEditionAsPG:false,limitation:'Only displayed, bounded reference sections are counted. Google Books may omit other sections from its contents list; a boundary may include a final blank page. Edition can differ from the length edition.'};
}
for(const [i,b]of books.entries()){
 if(state.blocked>=2)break;
 if(state.books[b.id])continue;
 const lib=read(dir+'/progress.json').books[b.id],manual=Object.assign({},...fs.readdirSync(dir).filter(f=>/^manual(?:-\d+)?\.json$/.test(f)).map(f=>read(dir+'/'+f)));
 const s=state.books[b.id]={attempts:[]};
 if(b.reference.pages!==null||lib?.reference||manual[b.id]?.reference){s.reason='Reference range already established.';save();continue;}
 const isbn=[...products(b),...(lib?.identities||[]).flatMap(x=>x.isbn)].find(x=>/^\d{9}[\dX]$/.test(x));
 if(!isbn){s.reason='No verified edition ISBN available.';save();continue;}
 const r=await get('https://books.google.com/books?vid=ISBN'+isbn+'&hl=en');s.attempts.push({...r,html:undefined});s.reference=parse(b,r);
 if(!s.reference){
  let alternatives=[];try{alternatives=JSON.parse(r.html.match(/fn\('book_other_versions',\s*(\[[\s\S]*?\])\);/)?.[1]||'[]');}catch{}
  const alternate=alternatives.find(x=>['partial','full'].includes(x.preview)&&titleMatches(b.title,x.title)&&authorMatches(b.author,x.authors));
  if(alternate?.info_url){const url=new URL(alternate.info_url);url.hostname='books.google.com';url.searchParams.set('hl','en');const r=await get(url.href);s.attempts.push({...r,html:undefined});s.reference=parse(b,r);}
 }
 s.reason=s.reference?'Matched numbered reference section.':'No matched reference section with both numeric boundaries.';save();
 console.log(JSON.stringify({i:i+1,title:b.title,refs:s.reference?.pages,blocked:state.blocked||0}));
}
save();
