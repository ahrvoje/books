import fs from 'node:fs';
const dir='data/metadata1000_261025',read=p=>JSON.parse(fs.readFileSync(p)),m=read(dir+'/manual.json'),a=read(dir+'/archive.json');
const d=read(dir+'/raw/archive-1848.json').response.docs.find(d=>d.identifier==='godhumanhistory0000asla_p6t1');
const r=structuredClone(a.books.q1006.reference);
r.pages=105;r.ranges=[{start:175,end:279,label:'bibliographical references',evidence:'Includes bibliographical references (pages 175-279) and index',method:'catalogued-range'}];
r.edition={id:'ISBN:9780553394726',title:d.title,author:d.creator,year:2017,language:'eng',isbn:d.isbn};r.url='https://archive.org/details/'+d.identifier;r.source.evidence=d.description.join('\n');
r.limitation+=' Standard-print record selected instead of the available large-print edition.';
m.q1006={...m.q1006,referenceRecord:r};
fs.writeFileSync(dir+'/manual.json',JSON.stringify(m,null,2)+'\n');
