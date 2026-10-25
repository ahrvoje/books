import fs from 'node:fs';
import crypto from 'node:crypto';
import {titleMatches,authorMatches} from '../pages_density_261021/collect.mjs';
import {referenceRanges} from './ranges.mjs';
const dir='data/metadata3000_261025',read=p=>JSON.parse(fs.readFileSync(p)),books=read(dir+'/targets.json');
const state=fs.existsSync(dir+'/cinii.json')?read(dir+'/cinii.json'):{books:{},requests:[]};
const save=()=>fs.writeFileSync(dir+'/cinii.json',JSON.stringify(state,null,2)+'\n');
const list=x=>Array.isArray(x)?x:x?[x]:[],str=x=>list(x).map(x=>typeof x==='string'?x:x?.['@value']||'').join('; ');
let last=0;
async function get(url){
 const file=dir+'/raw/cinii-'+crypto.createHash('sha256').update(url).digest('hex').slice(0,16)+'.json';
 if(fs.existsSync(file))return read(file);
 await new Promise(r=>setTimeout(r,Math.max(0,last+4000-Date.now())));last=Date.now();const r={url,file,retrieved:new Date().toISOString()};
 try{const response=await fetch(url,{signal:AbortSignal.timeout(25000)});r.status=response.status;if([403,429,503].includes(response.status))state.blocked=r;const t=await response.text();try{r.data=JSON.parse(t)}catch{r.error='Non-JSON response';}}catch(e){r.error=e.message}
 fs.writeFileSync(file,JSON.stringify(r));state.requests.push({url,file,status:r.status});return r;
}
for(const b of books){
 if(state.blocked)break;if(state.books[b.id]?.done||/\b(series|trilogy|volumes)\b/i.test(b.title))continue;
 const others=['library','archive','google-html','search-pages'].map(n=>fs.existsSync(dir+'/'+n+'.json')?read(dir+'/'+n+'.json').books[b.id]:null);
 if((b.edition||others.some(x=>x?.edition))&&(b.reference.pages!==null||others.some(x=>x?.reference)))continue;
 const s=state.books[b.id]||={attempts:[]};
 const url='https://ci.nii.ac.jp/books/opensearch/search?'+new URLSearchParams({title:b.title.split(':')[0],author:b.author.split(';')[0].replace(/\([^)]*\)/g,'').trim().split(/\s+/).at(-1),format:'json',count:'30'});
 const response=await get(url);s.attempts.push(response.file);
 for(const item of (response.data?.['@graph']?.[0]?.items||[]).filter(d=>titleMatches(b.title,d.title)&&authorMatches(b.author,str(d['dc:creator']))).slice(0,3)){
  if(state.blocked)break;const detail=await get(item['rdfs:seeAlso']['@id']);s.attempts.push(detail.file);
  const d=detail.data?.['@graph']?.[0];if(!d)continue;
  const title=str(d['dc:title']),author=str(d['dc:creator']),language=str(d['dc:language']),notes=str(d['cinii:note']),extent=str(d['dcterms:extent']),year=+(str(d['dc:date']).match(/\b(?:1\d{3}|20\d{2})\b/)||[])[0];
  if(!titleMatches(b.title,title)||!authorMatches(b.author,author)||!['eng','hrv','scr'].includes(language)||year>2026||year<b.year-2||/abridg|young readers edition|adapted for young/i.test(title+' '+notes)||/\bvolumes?\b|\bv\./i.test(extent))continue;
  const id='CiNii:'+d['cinii:ncid'],url=item['@id'],isbn=list(d['dcterms:hasPart']).map(x=>x['@id']?.replace('urn:isbn:','')).filter(x=>/^\d{9}[\dX]$|^\d{13}$/.test(x)),source={file:detail.file,url:detail.url,retrieved:detail.retrieved,evidence:extent+'; '+notes};
  const r=referenceRanges({notes}),pages=+(extent.match(/^(?:[ivxlcdm]+,?\s*)?(\d+)\s*(?:p\.|pages)/i)||[])[1];
  if(!b.edition&&!s.edition&&pages&&year)s.edition={id,title,authors:author,pages,year,format:'Print edition (binding unspecified)',language,isbn,url,source,confidence:'moderate',notes:'Catalogued numbered extent; preliminary Roman-numbered pages excluded.'};
  if(b.reference.pages===null&&!s.reference&&r.pages)s.reference={pages:r.pages,ranges:r.spans,edition:{id,title,author,language,year,isbn,pages:pages||null},url,source,confidence:'moderate',sameEditionAsPG:false,method:'CiNii-catalogued-reference-ranges',limitation:'Explicit catalogued reference ranges only; unlisted sections are not inferred.'};
  if((b.edition||s.edition)&&(b.reference.pages!==null||s.reference))break;
 }
 s.done=true;save();console.log(JSON.stringify({rank:b.rank,title:b.title,pages:Object.values(state.books).filter(x=>x.edition).length,refs:Object.values(state.books).filter(x=>x.reference).length,blocked:!!state.blocked}));
}
save();
