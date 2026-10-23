import fs from 'node:fs';
import {clean} from './extract.mjs';
const d='data/intake_progress_261023';
const h=fs.readFileSync(d+'/raw/229.html','utf8');console.log('ROOT HEADINGS',[...h.matchAll(/<h3[^>]*>([\s\S]*?)<\/h3>/g)].map(m=>clean(m[1])));
for(const [s,n] of [[230,1],[235,4]]){let h=fs.readFileSync(d+'/raw/'+s+'-comments-'+n+'.txt','utf8');let t=h.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi,'').split(/<\/(?:div|p)>/).map(clean).filter(Boolean).join('\n');fs.writeFileSync(d+'/'+s+'-comments.txt',t);console.log(s,t);}
