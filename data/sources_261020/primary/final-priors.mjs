import fs from 'node:fs';
const p=JSON.parse(fs.readFileSync('data/sources_261020/math/transfer-root-final.json','utf8'));
for(const b of p.filter(b=>b.prior)){
 const a=b.prior,ref=a.reviewAnchor||a.currentReview,[file,anchor]=ref.split('#'),filePath=file.startsWith('analysis/')?file:'analysis/'+file;
 const text=fs.readFileSync(filePath,'utf8'),start=text.indexOf(`id="${anchor}"`),end=text.indexOf('<a id=',start+10);
 console.log(JSON.stringify({id:b.id,title:b.title,prior:{year:a.year,raw:a.raw,T11:a.T11,T12:a.T12,periodEnd:a.periodEnd,amazon:a.amazon,reason:a.reason,notes:a.notes},section:text.slice(Math.max(0,start),end>=0?end:undefined).slice(0,11000),enrichment:b.enrichment||b.priorEnrichment||null}));
}
