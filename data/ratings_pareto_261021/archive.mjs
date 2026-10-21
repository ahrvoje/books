import fs from 'node:fs';
import path from 'node:path';
import {titleMatches,authorMatches,clean} from '../pages_density_261021/collect.mjs';
const file='data/ratings_pareto_261021/ratings.json',state=JSON.parse(fs.readFileSync(file));
let inspected=0,recovered=0;
function inspect(v,inherited,file){
 if(!v||typeof v!=='object')return;
 if(Array.isArray(v)){for(const x of v)inspect(x,inherited,file);return;}
 const id=state.books[v.id]?v.id:inherited,b=state.books[id];
 if(b&&b.count===null&&Array.isArray(v.evidence)&&/amazon\./.test(v.url||'')){
  const evidence=v.evidence.filter(x=>typeof x==='string').map(clean).find(x=>/\bglobal ratings\b/i.test(x));
  const m=evidence?.match(/([\d,]+)\s+global ratings\b/i),title=v.productTitle||v.title,byline=v.byline;
  if(m&&titleMatches(b.title,title||'')&&authorMatches(b.author,byline||'')){
   const retrieved=v.retrievedAt||v.verifiedAt||v.attemptedAt,productId=v.asin||v.url.match(/\/dp\/([A-Z0-9]{10})/)?.[1];
   if(retrieved&&productId){const count=Number(m[1].replaceAll(',','')),a={url:v.url,retrieved,productId,count,evidence:m[0],title,byline,titleMatch:true,authorMatch:true,accepted:true,status:200,rawFile:file,origin:'Archived explicit aggregate',sha256:v.sha256};b.count=count;b.verified=a;b.attempts.push(a);recovered++;}
  }
 }
 for(const x of Object.values(v))if(x&&typeof x==='object')inspect(x,id,file);
}
function walk(dir){for(const e of fs.readdirSync(dir,{withFileTypes:true})){const p=path.join(dir,e.name);if(e.isDirectory())walk(p);else if(/amazon/i.test(p)&&p.endsWith('.json')&&!p.includes('ratings_pareto_261021')){try{inspect(JSON.parse(fs.readFileSync(p)),path.basename(p,'.json'),p.replaceAll('\\','/'));inspected++;}catch{}}}}
walk('data');state.archiveScan={inspected,recovered};fs.writeFileSync(file,JSON.stringify(state,null,2)+'\n');console.log(state.archiveScan);
