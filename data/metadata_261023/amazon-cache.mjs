import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';
import {titleMatches,authorMatches,clean,amazonFields,norm} from '../pages_density_261021/collect.mjs';
const dir='data/metadata_261023/',read=p=>JSON.parse(fs.readFileSync(p));
const books=read(dir+'links.json'),targets=read(dir+'targets.json'),out={books:{},files:0,records:0};
const byToken=new Map();
for(const b of books){const token=norm(b.title).split(' ').filter(t=>t.length>3).sort((a,b)=>b.length-a.length)[0];if(!token)continue;if(!byToken.has(token))byToken.set(token,[]);byToken.get(token).push(b);}
const seen=new Set();
function visit(o,file){
 if(!o||typeof o!=='object')return;
 const url=o.url||o.requestedUrl,title=o.productTitle||o.title,byline=o.byline||o.authors;
 if(typeof url==='string'&&/amazon\.[^/]+\/(?:[^/]+\/)?(?:dp|gp\/product)\/[A-Z0-9]{10}/i.test(url)&&typeof title==='string'&&typeof byline==='string'&&title&&byline&&!/\b(Spanish|German|French|Italian|Portuguese|Dutch|Polish|Russian|Japanese|Chinese) edition\b/i.test(byline)&&(!o.language||/English|Croatian/i.test(o.language))){
  const key=url+'|'+title+'|'+byline+'|'+(o.count??o.globalCount??'');
  if(!seen.has(key)){
   seen.add(key);out.records++;
   const candidates=[...new Set(norm(title).split(' ').flatMap(t=>byToken.get(t)||[]))];
   for(const b of candidates){if(!titleMatches(b.title,title)||!authorMatches(b.author,byline)||o.titleMatch===false||o.authorMatch===false)continue;
    if(o.status!==undefined&&typeof o.status==='number'&&o.status!==200)continue;
    if(o.httpStatus!==undefined&&o.httpStatus!==200)continue;
    let evidence=clean(Array.isArray(o.evidence)?o.evidence.join(' '):o.evidence||''),rawFile=o.rawFile||o.sourceSnapshot;
    if(rawFile&&!fs.existsSync(rawFile)){const local=path.join(path.dirname(file),rawFile);if(fs.existsSync(local))rawFile=local;}
    if(!evidence&&rawFile&&fs.existsSync(rawFile)&&rawFile.endsWith('.gz')){
     try{const html=zlib.gunzipSync(fs.readFileSync(rawFile)).toString(),f=amazonFields(html);if(titleMatches(b.title,f.title)&&authorMatches(b.author,f.byline))evidence=clean(html.match(/<span[^>]*data-hook="total-review-count"[^>]*>[\s\S]*?<\/span>/)?.[0]||'');}catch{}
    }
    const m=evidence.match(/([\d,]+)\s+global ratings?\b/i),count=m?+m[1].replaceAll(',',''):null;
    const record={url,title,byline,format:o.format||null,productId:o.productId||url.match(/(?:dp|product)\/([A-Z0-9]{10})/i)?.[1],count,evidence:m?.[0]||null,retrieved:o.retrieved||o.retrievedAt||o.verifiedAt||o.attemptedAt||'Archived before 2026-10-23',source:file.replaceAll('\\','/'),rawFile:rawFile&&fs.existsSync(rawFile)?rawFile.replaceAll('\\','/'):null};
    (out.books[b.id]||=[]).push(record);
   }
  }
 }
 for(const value of Object.values(o))if(value&&typeof value==='object')visit(value,file);
}
function walk(folder,depth=0){for(const e of fs.readdirSync(folder,{withFileTypes:true})){
 if(e.isDirectory()){if(!['raw','metadata_261023','metadata','editions','web','.git'].includes(e.name)&&depth<3)walk(path.join(folder,e.name),depth+1);continue;}
 if(!e.name.endsWith('.json')||/compiled|before|prepublication|targets|catalog-index|new-books/.test(e.name))continue;
 const file=path.join(folder,e.name);if(fs.statSync(file).size>45000000)continue;
 try{visit(read(file),file);out.files++;}catch{}
}}walk('data');
fs.writeFileSync(dir+'amazon-cache.json',JSON.stringify(out,null,2)+'\n');
console.log({files:out.files,records:out.records,matchedBooks:Object.keys(out.books).length,ratings:targets.ratings.filter(id=>out.books[id]?.some(r=>r.count!==null)).length,searchLinks:books.filter(b=>!b.purchaseUrl.includes('/dp/')&&out.books[b.id]?.length).length});
