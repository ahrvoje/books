import fs from 'node:fs';
const dir='data/metadata2_261025',p=dir+'/publish.mjs';let s=fs.readFileSync(p,'utf8');
const start=s.indexOf('let text=`'),end=s.indexOf('for(const x of changes){text+=',start);
if(start<0||end<0)throw Error('Report boundaries missing');
s=s.slice(0,start)+fs.readFileSync(dir+'/report-intro.txt','utf8')+'\n'+s.slice(end);
s=s.replace("if(summary.pageCountsCorrected)write('site/enrichment.json',enrichment);", "if(changes.some(x=>x.editionCorrection&&enrichment.books[x.id]?.edition))write('site/enrichment.json',enrichment);");
fs.writeFileSync(p,s);
