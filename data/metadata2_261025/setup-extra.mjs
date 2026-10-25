import fs from 'node:fs';
const dir='data/metadata2_261025';let s=fs.readFileSync(dir+'/library.mjs','utf8');
s=s.replace("from '../reference_pages_261022/collect.mjs'","from './ranges.mjs'");
s=s.slice(0,s.indexOf('let next=0;'))+s.slice(s.indexOf("if(process.argv[2]==='reuse'){"),s.indexOf("if(process.argv[2]==='batch'){"));
s=s.replaceAll("dir+'/library.json'","dir+'/extra.json'").replace("if(!['metadata2_261025'].includes(e.name))walk(p)",'walk(p)').replace('...stats()','books:Object.keys(state.books).length');
fs.writeFileSync(dir+'/extra.mjs',s);
