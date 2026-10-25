import {referenceRanges as oldRanges} from '../reference_pages_261022/collect.mjs';
export function referenceRanges(d){
 const old=oldRanges(d),notes=typeof d.notes==='string'?d.notes:d.notes?.value||'',spans=[...old.spans];
 const re=/(bibliograph(?:ical references|ic references|y|ies)|references|source notes|endnotes|notes)["”']?\s*[:,.]?\s*\(?\s*(?:(?:pages?|pp?\.?)\s*)?\[?(\d+)\]?\s*[-–—]\s*\[?(\d+)\]?/gi;
 for(const m of notes.matchAll(re)){const start=+m[2];let end=+m[3];if(end<start&&m[3].length<m[2].length){const k=10**m[3].length;end=Math.floor(start/k)*k+end;if(end<start)end+=k;}if(end>=start&&end-start<2000&&(!d.number_of_pages||end<=d.number_of_pages))spans.push({start,end,label:m[1],evidence:m[0],method:'catalogued-range'});}
 const single=/(bibliograph(?:ical references|ic references|y|ies)|references|source notes|endnotes|notes)["”']?\s*[:,.]?\s*\(?\s*(?:page|p\.)\s*\[?(\d+)\]?(?=\s*(?:\)|\.(?:\s|$)|;|$))/gi;
 for(const m of notes.matchAll(single)){const start=+m[2];if(start>0&&(!d.number_of_pages||start<=d.number_of_pages))spans.push({start,end:start,label:m[1],evidence:m[0],method:'catalogued-single-page'});}
 const toc=d.table_of_contents||[];for(let i=0;i<toc.length-1;i++){const a=toc[i],b=toc[i+1];if(!/^(?:works cited|cited works|bibliographical notes|bibliographic(?:al)? essay|references and further reading|notes and bibliographical references|bibliography and notes)$/i.test(a.title))continue;const start=+a.pagenum,end=+b.pagenum-1;if(Number.isInteger(start)&&start>0&&end>=start&&(!d.number_of_pages||end<=d.number_of_pages))spans.push({start,end,label:a.title,evidence:a.title+' '+start+'; '+b.title+' '+(end+1),method:'contents-boundary'});}
 const unique=[...new Map(spans.map(s=>[s.start+'-'+s.end,s])).values()],pages=new Set();for(const s of unique)for(let n=s.start;n<=s.end;n++)pages.add(n);
 return {pages:pages.size||null,spans:unique,notes};
}
