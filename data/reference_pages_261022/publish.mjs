import fs from 'node:fs';
import {books,state,read,write,DIR,matches} from './collect.mjs';
const manual=read(`${DIR}/manual.json`),output={};
const google=fs.existsSync(`${DIR}/google-progress.json`)?read(`${DIR}/google-progress.json`):{};
const editions=read('site/editions.json'),enrichment=read('site/enrichment.json').books;
const rejected=[];
function usable(b,r){
 if(!r||r.pages===null)return false;
 const year=+(String(r.edition?.year||'').match(/\b(1[0-9]{3}|20[0-2][0-9])\b/)||[])[0];
 const reason=year&&year<b.year-2?'Edition predates the nominated book; possible earlier work or working paper.':!r.sameEditionAsPG&&!matches(b,{title:r.edition?.title,by_statement:r.edition?.author})?'Alternate-edition title or author identity fails the stricter surname check.':null;
 if(reason){rejected.push({id:b.id,title:b.title,edition:r.edition,reason,url:r.url});return false;}return true;
}
for(const b of books){
  const library=state.books[b.id],g=google[b.id];
  const l=usable(b,library)?library:null,gg=usable(b,g)?g:null;
  const s=gg&&(!l||gg.pages>l.pages&&l.method==='catalogued-ranges')?gg:l||{pages:null,confidence:'unknown'},m=manual[b.id];
  const r=m?{pages:new Set(m.ranges.flatMap(r=>Array.from({length:r.end-r.start+1},(_,i)=>r.start+i))).size,confidence:'moderate',method:'reviewed-contents-or-catalog',ranges:m.ranges,edition:{id:m.editionId,year:m.year,title:b.title,author:b.author,language:'English'},url:m.url,source:{retrieved:'2026-10-22',file:`${DIR}/manual.json`,evidence:m.evidence},sameEditionAsPG:(editions[b.id]||enrichment[b.id]?.edition)?.id===m.editionId,limitation:'Count covers the named reference sections. Contents boundaries can include a final blank page. Inline citations and online supplements are not counted. Reference pages are not a measure of evidence quality.'}:s;
  output[b.id]=Object.fromEntries(['pages','confidence','method','ranges','edition','url','source','sameEditionAsPG','limitation','reason'].filter(k=>k in r).map(k=>[k,r[k]]));
  if(r.pages===null)output[b.id].reason=`Unknown after ${library.attempts.length+(g?.attempts?.length||0)} recorded lookup steps. No usable numeric reference-section extent was found; absence of a count is not evidence of zero references.`;
}
write('site/reference-pages.json',output);
write(`${DIR}/rejected-identities.json`,rejected);
const group=bs=>({total:bs.length,known:bs.filter(b=>output[b.id].pages!==null).length,unknown:bs.filter(b=>output[b.id].pages===null).length});
const summary={date:'2026-10-22',definition:'RP counts distinct printed pages in explicitly documented references, bibliography, source notes, and endnote sections. It excludes indexes, acknowledgments, glossaries, inline citations and online supplements. Catalog-only ranges can omit separately unlisted notes; section scope is retained.',recommended:group(books.filter(b=>b.status==='recommended')),vetoed:group(books.filter(b=>b.status==='vetoed')),top100:group(books.slice(0,100)),top250:group(books.slice(0,250)),total:group(books),confidence:'Moderate for catalogued ranges and contents boundaries; unknown for missing counts.',scoring:'RP is optional, disabled and weighted zero by default. Existing scores and gates are unchanged.'};
write(`${DIR}/summary.json`,summary);
write(`${DIR}/unresolved.json`,books.filter(b=>output[b.id].pages===null).map(b=>({id:b.id,title:b.title,author:b.author,status:b.status,priority:state.books[b.id].priority,attempts:state.books[b.id].attempts.length})));
const esc=x=>String(x??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
fs.writeFileSync(`${DIR}/report.html`,`<!doctype html><meta charset="utf-8"><title>Reference-page collection — 22 October 2026</title><style>body{font:15px system-ui;max-width:1400px;margin:40px auto;padding:16px}table{border-collapse:collapse;width:100%}td,th{padding:8px;border-bottom:1px solid #ddd;text-align:left}th{position:sticky;top:0;background:#fff}.num{text-align:right}</style><h1>Reference-page collection — 22 October 2026</h1><p>${esc(summary.definition)}</p><p>${summary.total.known} counts recorded for ${summary.total.total} books; ${summary.total.unknown} remain unknown. Recommended: ${summary.recommended.known}/${summary.recommended.total}; vetoed: ${summary.vetoed.known}/${summary.vetoed.total}. Top 100: ${summary.top100.known}/100. Confidence: moderate. Counts are edition-specific; do not divide RP by the existing page count unless the editions match.</p><p>${esc(summary.scoring)} Every target has a field and a recorded cache search; individual attempts and unresolved titles are retained alongside this report. Rows follow recommended score order, then vetoed score order.</p><table><thead><tr><th>Priority</th><th>Status</th><th>Book</th><th>Reference pages</th><th>Edition and scope</th></tr></thead><tbody>${books.map((b,i)=>{const r=output[b.id];return `<tr><td>${i+1}</td><td>${esc(b.status)}</td><td>${esc(b.title)} — ${esc(b.author)}</td><td class="num">${r.pages??'Unknown'}</td><td>${r.pages===null?esc(r.reason):`<a href="${esc(r.url)}">${esc(r.edition.id)}</a>; ${esc(r.ranges.map(s=>`${s.label} ${s.start}–${s.end}`).join('; '))}`}</td></tr>`;}).join('')}</tbody></table>`);
console.log(summary);
