import fs from 'node:fs';
const dir='data/metadata3000_261025';
let s=fs.readFileSync('data/metadata2_261025/search-pages.mjs','utf8').replaceAll('metadata2_261025','metadata3000_261025').replace("from '../reference_pages_261022/collect.mjs'","from './ranges.mjs'");
fs.writeFileSync(dir+'/search-pages.mjs',s);
