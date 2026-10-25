import fs from 'node:fs';
const dir='data/metadata2_261025',read=p=>JSON.parse(fs.readFileSync(p)),suspicious=[];
const pattern=/\babridg(?:ed|ment|ement)|\bcondensed\b|young(?:er)? (?:readers|audience)|\badapted\b|large[ -]print|\bvol(?:ume)?\.?\s*(?:[1-9]|[ivx]+\b|one\b|two\b|three\b)|vol000[1-9]/i;
const cache=new Map();
for(const provider of ['library','archive','search-pages','cinii','hathi','harvard','extra']){const state=read(dir+'/'+provider+'.json');for(const [id,s]of Object.entries(state.books))for(const field of ['edition','reference']){
 const v=s[field];if(!v)continue;let text=v.source?.evidence||'',editionId=field==='edition'?v.id:v.edition?.id;
 if(['library','extra'].includes(provider)&&v.source?.file){try{let data=cache.get(v.source.file);if(!data){let j=read(v.source.file);data=j.data||j;cache.set(v.source.file,data);}const ds=[data,...Object.values(data).map(v=>v?.details).filter(Boolean)];const d=ds.find(d=>d.key?.endsWith('/'+editionId));if(d)text=[d.title,d.subtitle,d.edition_name,d.physical_format,typeof d.notes==='string'?d.notes:d.notes?.value].filter(Boolean).join(' | ');}catch{}}
 const m=text.match(pattern);if(m)suspicious.push({id,provider,field,editionId,match:m[0],evidence:text.slice(Math.max(0,m.index-90),m.index+240),source:v.source?.file});
}}
fs.writeFileSync(dir+'/edition-flags.json',JSON.stringify(suspicious,null,2)+'\n');const changes=new Map(read(dir+'/review.json').map(x=>[x.id,x]));console.log(suspicious.filter(x=>changes.get(x.id)?.[x.field]?.source?.file===x.source));
