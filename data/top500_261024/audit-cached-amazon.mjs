import fs from 'node:fs';
import zlib from 'node:zlib';
import {amazonFields,titleMatches,authorMatches} from '../pages_density_261021/collect.mjs';
const d='data/top500_261024/',books=JSON.parse(fs.readFileSync(d+'targets.json')).filter(b=>b.amazon?.count==null),out=[];
for(const p of fs.readFileSync(d+'cached-html-paths.txt','utf8').trim().split(/\r?\n/)){
 if(p.includes('top500_261024'))continue;
 const candidates=process.argv.includes('--all')?books:books.filter(b=>p.includes(b.id)||b.id.startsWith('rem-')&&p.includes(b.id.slice(4)));
 if(!candidates.length)continue;
 let h;try{h=zlib.gunzipSync(fs.readFileSync(p)).toString();}catch{continue;}
 const m=h.match(/data-hook="total-review-count"[^>]*>([\s\S]*?)<\/span>/)?.[1]?.match(/([\d,]+)\s+global ratings?/i);if(!m)continue;
 const f=amazonFields(h);
 for(const b of candidates)if(!process.argv.includes('--all')||titleMatches(b.title,f.title)&&authorMatches(b.author,f.byline))out.push({id:b.id,title:b.title,author:b.author,path:p,count:+m[1].replaceAll(',',''),...f,titleMatch:titleMatches(b.title,f.title),authorMatch:authorMatches(b.author,f.byline)});
}
fs.writeFileSync(d+(process.argv.includes('--all')?'cached-amazon-all.json':'cached-amazon-candidates.json'),JSON.stringify(out,null,2));
console.log(out.map(x=>({id:x.id,title:x.title,byline:x.byline,count:x.count,titleMatch:x.titleMatch,authorMatch:x.authorMatch,path:x.path})));
