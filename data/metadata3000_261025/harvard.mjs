import fs from 'node:fs';
import {titleMatches,authorMatches} from '../pages_density_261021/collect.mjs';
import {referenceRanges} from './ranges.mjs';
const dir='data/metadata3000_261025',read=p=>JSON.parse(fs.readFileSync(p)),books=read(dir+'/targets.json');
const state=fs.existsSync(dir+'/harvard.json')?read(dir+'/harvard.json'):{books:{},requests:[]};
const save=()=>fs.writeFileSync(dir+'/harvard.json',JSON.stringify(state,null,2)+'\n'),list=x=>Array.isArray(x)?x:x?[x]:[],str=x=>list(x).map(x=>typeof x==='object'?x?.['#text']||'':String(x)).join('; ');
let last=0;
for(const b of books){
 if(state.blocked)break;if(state.books[b.id]?.done||/\b(series|trilogy|volumes)\b/i.test(b.title))continue;
 const others=['library','archive','google-html','search-pages','cinii','hathi'].map(n=>fs.existsSync(dir+'/'+n+'.json')?read(dir+'/'+n+'.json').books[b.id]:null);
 if((b.edition||others.some(x=>x?.edition))&&(b.reference.pages!==null||others.some(x=>x?.reference)))continue;
 const s=state.books[b.id]||={attempts:[]},url='https://api.lib.harvard.edu/v2/items.json?'+new URLSearchParams({title:b.title.split(':')[0],name:b.author.split(';')[0].replace(/\([^)]*\)/g,'').trim().split(/\s+/).at(-1),limit:'10'}),file=dir+'/raw/harvard-'+b.id+'.json',request={url,file,retrieved:new Date().toISOString()};
 await new Promise(r=>setTimeout(r,Math.max(0,last+4000-Date.now())));last=Date.now();
 try{
  const response=await fetch(url,{signal:AbortSignal.timeout(25000)});request.status=response.status;const text=await response.text();fs.writeFileSync(file,text);if([403,429,503].includes(response.status)){state.blocked=request;save();break;}
  if(response.ok){const data=JSON.parse(text);request.found=data.pagination?.numFound;
   for(const d of list(data.items?.mods)){
    const ti=list(d.titleInfo).find(x=>!x['@type'])||list(d.titleInfo)[0],title=[str(ti?.title),str(ti?.subTitle)].filter(Boolean).join(': '),author=list(d.name).map(n=>str(n.namePart)).join('; '),notes=str(d.note),extent=list(d.physicalDescription).map(x=>str(x.extent)).filter(Boolean).join('; '),language=list(d.language).flatMap(x=>list(x.languageTerm)).map(x=>str(x)).join('; '),origin=list(d.originInfo),year=+(origin.map(x=>str(x.dateIssued)).join(' ').match(/\b(?:1\d{3}|20\d{2})\b/)||[])[0];
    if(!titleMatches(b.title,title)||!authorMatches(b.author.replace(/ with /g,'; '),author)||!/\beng\b|\bhrv\b|\bscr\b/.test(language)||year<b.year-2||year>2026||/abridg|young readers edition|adapted for young/i.test(title+' '+notes+' '+origin.map(x=>str(x.edition)).join(' '))||/\bvolumes\b|\bv\./i.test(extent))continue;
    const pages=+(extent.match(/(?:^|\()(?:[ivxlcdm]+,?\s*)?(\d+)\s*(?:p\.|pages)/i)||[])[1],r=referenceRanges({notes}),record=str(d.recordInfo?.recordIdentifier),id='Harvard:'+record,isbn=list(d.identifier).filter(x=>x['@type']==='isbn').map(x=>str(x)),url='https://id.lib.harvard.edu/alma/'+record+'/catalog',source={file,url:request.url,retrieved:request.retrieved,evidence:extent+'; '+notes};
    if(!record)continue;
    if(!b.edition&&!s.edition&&pages&&year)s.edition={id,title,authors:author,pages,year,format:/online resource/i.test(extent)?'Digital edition with catalogued pagination':'Print edition (binding unspecified)',language,isbn,url,source,confidence:'moderate',notes:'Numbered extent in Harvard MODS record; Roman preliminaries and separate plates excluded.'};
    if(b.reference.pages===null&&!s.reference&&r.pages)s.reference={pages:r.pages,ranges:r.spans,edition:{id,title,author,year,language,isbn,pages:pages||null},url,source,confidence:'moderate',sameEditionAsPG:false,method:'Harvard-catalogued-reference-ranges',limitation:'Explicit bounded catalog reference sections only; unlisted sections not inferred. Metadata supplied by Harvard Library, OCLC and the Library of Congress under Harvard open-metadata terms.'};
    if((b.edition||s.edition)&&(b.reference.pages!==null||s.reference))break;
   }
  }
 }catch(e){request.error=e.message;}
 s.attempts.push(request);s.done=true;state.requests.push(request);save();console.log(JSON.stringify({rank:b.rank,title:b.title,pages:Object.values(state.books).filter(x=>x.edition).length,refs:Object.values(state.books).filter(x=>x.reference).length,blocked:!!state.blocked}));
}
save();
