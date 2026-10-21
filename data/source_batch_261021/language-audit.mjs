import fs from 'node:fs';
const read=p=>JSON.parse(fs.readFileSync(p)),c=read(read('data/catalog.json').compiled),e={...Object.fromEntries(Object.entries(read('site/enrichment.json').books).map(([id,b])=>[id,b.edition])),...read('site/editions.json')};
const counts={},review=[];
for(const b of c.currentBooks){const lang=e[b.id]?.language||'unknown';counts[lang]=(counts[lang]||0)+1;if(!/^(en|eng|English|hr|hrv|Croatian)$/i.test(lang))review.push({id:b.id,title:b.title,author:b.author,language:lang,edition:e[b.id]});}
fs.writeFileSync('data/source_batch_261021/language-audit.json',JSON.stringify({counts,review},null,2));console.log(JSON.stringify({counts,review:review.map(b=>({id:b.id,title:b.title,language:b.language}))}));
console.log('Top unknown products',read('data/source_batch_261021/top100.json').filter(b=>b.amazon?.count==null).map(b=>({id:b.id,title:b.title,edition:e[b.id],purchaseUrl:b.purchaseUrl})));
