import fs from 'node:fs';
const dir='data/metadata2_261025';let s=fs.readFileSync(dir+'/harvard.mjs','utf8');
s=s.replace("from '../reference_pages_261022/collect.mjs'","from './ranges.mjs'").replaceAll("dir+'/harvard.json'","dir+'/extra.json'").replace('if(state.blocked)break;if(state.books[b.id]?.done||','if(');
s=s.replace('state.requests.push(request);','');
const a=s.indexOf(' await new Promise'),b=s.indexOf('if(response.ok){');
s=s.slice(0,a)+" if(!fs.existsSync(file))continue;\n try{\n const text=fs.readFileSync(file,'utf8');const response={ok:true};\n  "+s.slice(b);
s=s.replace(/console\.log\(JSON\.stringify\(\{rank:b\.rank[^\n]+/,'');
s=s.replace('s.attempts.push(request);','(s.attempts||=[]).push(request);');
fs.writeFileSync(dir+'/harvard-reuse.mjs',s);
