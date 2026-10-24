import fs from 'node:fs';
const dir='data/top500_261024',read=p=>JSON.parse(fs.readFileSync(p)),books=read(dir+'/targets.json'),out={};
function add(id,file,year,ranges,notes){
 const b=books.find(b=>b.id===id),meta=read(dir+'/raw/'+file+'.pdf.json');
 out[id]={referenceRecord:{pages:ranges.reduce((n,[start,end])=>n+end-start+1,0),confidence:'high',ranges:ranges.map(([start,end])=>({start,end,label:'References',method:'direct-PDF-inspection',evidence:'Printed pages '+start+'–'+end+'; text and section boundaries inspected.'})),method:'direct-PDF-inspection',edition:{id:'PublisherPDF:'+file+':'+year,title:b.title,author:b.author,year,language:'English',physicalPages:read(dir+'/raw/'+file+'.pages.json').length},url:meta.url,source:{file:dir+'/raw/'+file+'.pdf',retrieved:meta.retrieved},sameEditionAsPG:false,limitation:notes}};
}
add('progress-0813','petrochemicals',2018,[[26,26],[48,48],[66,67],[91,91],[118,118],[128,128]],'Six chapter reference sections; seven actual pages. This public IEA file has 132 physical PDF pages and skips printed page 92. Do not infer references on the absent page. The existing OECD total-page edition is listed as 152 pages, so the R&D ratio is an estimate.');
add('progress-0814','netzero',2021,[[217,222]],'Annex D spans printed pages 217–222 (physical PDF pages 218–223); the final colophon is excluded. Total physical PDF extent is 224, corroborating the publisher page count. Edition match to publisher metadata remains unconfirmed.');
for(const id of ['g1153','intake-0192']){const r=read(dir+'/google.json').books[id].reference;out[id]={referenceRecord:{...r,limitation:r.limitation+' Chosen over a bibliography-only catalog count because this contents record also gives a bounded notes section.'}};}
fs.writeFileSync(dir+'/manual-08.json',JSON.stringify(out,null,2)+'\n');
