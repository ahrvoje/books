import fs from 'node:fs';
const dir='data/top500_261024',read=p=>JSON.parse(fs.readFileSync(dir+'/'+p)),out={};
const t=read('targets.json');
function ref(id,pages,ranges,edition,url,file,confidence='moderate',limitation='Only documented reference sections are counted; excludes index. Edition matching is unconfirmed; R&D ratio is an estimate.') {out[id]={referenceRecord:{pages,ranges,edition:{title:t.find(b=>b.id===id).title,language:'English',...edition},url,source:{file,retrieved:'2026-10-24'},confidence,sameEditionAsPG:false,method:'reviewed-primary-or-library-evidence',limitation}};}
ref('progress-0815',26,[{start:254,end:279,label:'References',evidence:'Physical PDF pages 256–281; next page begins acknowledgements.',method:'direct-PDF-inspection'}],{id:'PublisherPDF:minerals:2021',year:2021,physicalPages:287},read('raw/minerals.pdf.json').url,dir+'/raw/minerals.pdf','high');
ref('g0272',8,[{start:219,end:226,label:'Notes',evidence:'Publisher contents: Notes 219; Index 227.',method:'contents-boundary'}],{id:'ISBN:9781119240884',year:2016},'https://www.wiley.com/en-gb/monetizing-innovation-how-smart-companies-design-the-product-around-the-price-p-9781119240884',dir+'/search-toc-100.json');
const p=read('reference-candidates.json')[31];
ref(p.id,p.pages,p.ranges,{id:'ISBN:0521220440',year:1979},p.url,p.file,'moderate','Catalog explicitly identifies bibliographical references on pages 709–767. The section is named Bibliographical Index in the contents; it is distinct from the general index. Two-volume work with continuous pagination.');
const b=read('google.json').books['intake-0189'].reference;
out['intake-0189']={referenceRecord:{...b,pages:48,ranges:[...b.ranges,{start:331,end:336,label:'Bibliographic Review',evidence:'Bibliographic Review 331; Index 337',method:'contents-boundary'}],limitation:b.limitation+' The six-page bibliographic review is included with the notes.'}};
fs.writeFileSync(dir+'/manual-09.json',JSON.stringify(out,null,2)+'\n');
