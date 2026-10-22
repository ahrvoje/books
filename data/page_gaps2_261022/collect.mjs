import fs from 'node:fs';
const dir='data/page_gaps2_261022/', read=p=>JSON.parse(fs.readFileSync(p));
const targets=read(dir+'targets.json'), prior=read('data/remaining_261021/enriched.json');
const results=fs.existsSync(dir+'candidates.json')?read(dir+'candidates.json'):{};
fs.mkdirSync(dir+'raw',{recursive:true});
const norm=s=>String(s||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,' ').trim();
const core=s=>norm(s.split(/:|\(/)[0]);
function match(b,d){
 const a=norm(b.author).split(' ').filter(w=>w.length>3), authors=norm((d.author_name||[]).join(' '));
 if(!a.some(w=>authors.split(' ').includes(w)))return false;
 const x=core(b.title),y=core(d.title);return x===y || (x.length>14&&(y.startsWith(x+' ')||x.startsWith(y+' ')));
}
let next=0;
async function get(url,file){
 const wait=Math.max(0,next-Date.now());next=Math.max(next,Date.now())+1100;await new Promise(r=>setTimeout(r,wait));
 const response=await fetch(url,{headers:{'User-Agent':'BookCatalogEditionResearch/1.0'},signal:AbortSignal.timeout(25000)});
 const text=await response.text();fs.writeFileSync(dir+'raw/'+file,text);
 if(!response.ok)throw Error('HTTP '+response.status);
 return JSON.parse(text);
}
let index=0;
await Promise.all(Array.from({length:2},async()=>{while(index<targets.length){
 const b=targets[index++];if(results[b.id])continue;
 try{
  let d=prior[b.id.replace(/^rem-/,'')]?.candidate;
  if(!d||!match(b,d)){
   const url='https://openlibrary.org/search.json?'+new URLSearchParams({title:b.title.split(/:|\(/)[0],author:b.author.split(/;|,|\/| & /)[0],limit:5,fields:'key,title,author_name'});
   const data=await get(url,b.id+'-search.json');d=data.docs?.find(d=>match(b,d));
  }
  if(!d){results[b.id]={reason:'No matching title and author found.'};continue;}
  const url='https://openlibrary.org'+d.key+'/editions.json?limit=100',data=await get(url,b.id+'-editions.json');
  const options=(data.entries||[]).filter(e=>e.languages?.some(l=>l.key==='/languages/eng')&&Number.isInteger(e.number_of_pages)&&e.number_of_pages>0&&!/audio|abridg|large print|summary|workbook/i.test([e.physical_format,e.title,e.edition_name].join(' '))&&/\b(1[5-9]\d{2}|20\d{2})\b/.test(e.publish_date||'')).map(e=>({pages:e.number_of_pages,id:e.key,url:'https://openlibrary.org'+e.key,retrieved:'2026-10-22',language:'English',format:e.physical_format||'Print book (binding unspecified)',year:Number(e.publish_date.match(/\b(1[5-9]\d{2}|20\d{2})\b/)[0]),confidence:'moderate',title:e.title,authors:d.author_name.join('; '),isbn13:e.isbn_13||[],isbn10:e.isbn_10||[],pagination:e.pagination||null,publishers:e.publishers||[],editionName:e.edition_name||null,source:{provider:'Open Library edition record',url,rawFile:dir+'raw/'+b.id+'-editions.json'},notes:'Catalog edition page count; numbered extent may exclude front matter. Work identity checked against title and author.'}));
  options.sort((a,c)=>(/paperback|softcover/i.test(c.format)?1:0)-(/paperback|softcover/i.test(a.format)?1:0));
  results[b.id]={work:d,edition:options[0]||null,options,reason:options.length?null:'No English edition with numeric extent and publication year in first 100 editions.'};
 }catch(e){results[b.id]={reason:String(e)};}
 finally{fs.writeFileSync(dir+'candidates.json',JSON.stringify(results,null,2)+'\n');console.log(Object.keys(results).length,b.id,results[b.id]?.edition?.pages||'unknown',b.title);}
}}));
