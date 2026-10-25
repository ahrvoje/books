import fs from 'node:fs';
const dir='data/metadata3000_261025';
for(const file of fs.readdirSync(dir+'/raw').filter(f=>/^retail-pages-\d+\.json$/.test(f))){
 const j=JSON.parse(fs.readFileSync(dir+'/raw/'+file));
 for(const block of String(j.result).split(/-{20,}/)){
  if(!/(?:page count|number of pages|length|pages\s*[|:]|\d+\s+pages)/i.test(block)||/wikipedia.org|\.pdf\)/i.test(block.split('\n')[0]))continue;
  const snippets=block.split('\n').filter((x,i,a)=>/(?:page count|number of pages|^pages|^length|^isbn|^publication|^publish date|^language|^binding|^format|^author|^title)/i.test(x.trim())||i>0&&/(?:page count|number of pages|^pages|^length|^isbn|^publication|^publish date|^language|^binding|^format|^author|^title)/i.test(a[i-1].trim())).slice(0,35);
  console.log(JSON.stringify({file,heading:block.trim().split('\n')[0],metadata:snippets}));
 }
}
