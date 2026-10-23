import fs from 'node:fs';
import zlib from 'node:zlib';
import crypto from 'node:crypto';
import assert from 'node:assert/strict';
import {titleMatches,clean} from '../pages_density_261021/collect.mjs';
import {fields,authorMatches} from './amazon-fields.mjs';
const dir='data/metadata_261023/',read=p=>JSON.parse(fs.readFileSync(p));
const a=read(dir+'amazon.json'),targets=read(dir+'targets.json'),books=read(dir+'links.json');
assert(!a.stopped&&targets.ratings.every(id=>a.books[id]),'Finish the primary Amazon pass before the two extra link checks.');
const out=fs.existsSync(dir+'extra-products.json')?read(dir+'extra-products.json'):{books:{},stopped:null};
let last=Math.max(Date.parse(a.lastRequestAt),...Object.values(out.books).map(b=>Date.parse(b.retrieved)));
if(!out.stopped)for(const [id,asin]of [['g0358','0061240176'],['intake-0548','1857883772']]){
 if(out.books[id])continue;
 await new Promise(resolve=>setTimeout(resolve,Math.max(0,last+60000-Date.now())));last=Date.now();
 const b=books.find(b=>b.id===id),url='https://www.amazon.com.au/dp/'+asin,r={url,retrieved:new Date().toISOString(),rawFile:dir+'raw/extra-'+id+'-'+asin+'.html.gz'};let html='';
 try{const response=await fetch(url,{signal:AbortSignal.timeout(25000)});r.status=response.status;r.finalUrl=response.url;html=await response.text();r.sha256=crypto.createHash('sha256').update(html).digest('hex');fs.writeFileSync(r.rawFile,zlib.gzipSync(html));}catch(e){r.error=e.message;}
 Object.assign(r,fields(html));
 if([403,429,503].includes(r.status)||/validateCaptcha|Robot Check|Server Busy/i.test(html))out.stopped={id,...r};
 r.matched=r.status===200&&titleMatches(b.title,r.title)&&authorMatches(b.author,r.byline)&&r.language==='English'&&/paperback|hardcover/i.test(r.format);
 const label=clean(html.match(/<span[^>]*data-hook="total-review-count"[^>]*>[\s\S]*?<\/span>/)?.[0]||'');r.ratingEvidence=label;
 const m=label.match(/([\d,]+)\s+global ratings?\b/i);if(m)r.totalRatings=+m[1].replaceAll(',','');
 out.books[id]=r;fs.writeFileSync(dir+'extra-products.json',JSON.stringify(out,null,2)+'\n');console.log(id,r.matched,r.title,r.totalRatings??'unknown');
 if(out.stopped)break;
}
console.log('Extra link checks',Object.keys(out.books).length,'stopped',!!out.stopped);
