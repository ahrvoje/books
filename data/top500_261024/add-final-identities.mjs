import fs from 'node:fs';
import {referenceRanges} from '../reference_pages_261022/collect.mjs';
const dir='data/top500_261024/',read=p=>JSON.parse(fs.readFileSync(p));
const state=read(dir+'archive-isbn.json'),s=state.books['progress-0595'],batch=state.batches.find(x=>x.key===s.batch),d=read(batch.file).response.docs.find(d=>d.identifier==='earlyhistoryofme0000lawt');
const notes=d.description.join('\n'),r=referenceRanges({notes});
const referenceRecord={pages:r.pages,ranges:r.spans,confidence:'moderate',method:'catalogued-reference-ranges',edition:{id:'ISBN:9789004136090',title:d.title,author:d.creator,year:2004,language:'English'},url:'https://archive.org/details/'+d.identifier,source:{file:batch.file,url:batch.url,retrieved:batch.retrieved,evidence:notes},sameEditionAsPG:false,limitation:'The catalog explicitly records the two-volume set and references on pages 1275–1288. Only that documented section is counted; any other reference sections remain uncounted. Alternate title and set ISBN confirmed by the publisher copyright page: https://brill.com/display/book/9789004531680/front-1.pdf and Library of Congress guide https://guides.loc.gov/engineering-in-history/mechanical-engineering. Total-page edition match is unconfirmed.'};
fs.writeFileSync(dir+'manual-38.json',JSON.stringify({'progress-0595':{referenceRecord}},null,2)+'\n');
const targets=read(dir+'targets.json'),out={};
for(const [id,file]of [['n1dd01d3afa','manual-24.json'],['progress-0655','manual-30.json'],['intake-0062','manual-30.json']]){
 const p=read(dir+file)[id].productCandidate,b=targets.find(x=>x.id===id);let asin=p.id;
 if(asin.length===13){const t=asin.slice(3,12),n=(11-[...t].reduce((s,c,i)=>s+(10-i)*+c,0)%11)%11;asin=t+(n===10?'X':n);}
 out[id]={product:{id:asin,url:p.url,title:b.title,author:b.author,format:p.format,language:'English',limitation:'Paperback ISBN verified from the linked bibliographic source. The Amazon.de URL is constructed from its ISBN-10 equivalent; the new Amazon listing and regional availability could not be checked after an access challenge. '+p.reason}};
}
fs.writeFileSync(dir+'manual-39.json',JSON.stringify(out,null,2)+'\n');
