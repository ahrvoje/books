import fs from 'node:fs';
import zlib from 'node:zlib';
import {fields} from './amazon-fields.mjs';
import {clean} from '../pages_density_261021/collect.mjs';
const dir='data/metadata_261023/',a=JSON.parse(fs.readFileSync(dir+'amazon.json')),out={};
const verified={
 'intake-0549':'The title uses a hyphen instead of a colon: Salvage - A Personal Odyssey. The matching English paperback names Ian Tew in the byline and author cards, ISBN9781574092561; edition identity corroborated in manual-product-ids.json.',
 'rem-u0301':'The US subtitle The Real Business of Finance and UK subtitle Masters of the Universe or Servants of the People identify the same John Kay book. The City Library record explicitly identifies the original UK title and the matching US hardcover ISBN9781610396035: https://catalog.slcpl.org/search/title.aspx?cn=547079&pos=1. English title, author and ISBN match the saved product.',
 'rem-u1345':'The UK subtitle The Making of the Western Mind and US subtitle How the Christian Revolution Remade the World identify the same 2019 Tom Holland work. English hardcover ISBN9781408706954 and both subtitle variants are listed together at https://www.goodreads.com/work/editions/68279026-dominion-how-the-christian-revolution-remade-the-world?expanded=true; also explicitly identified as UK/US titles at https://en.wikipedia.org/wiki/Dominion_(Holland_book).',
 'rem-u1016':'Amazon omits the long Galileo subtitle. Exact main title and author James Burke match; English hardcover ISBN0316116955 is independently identified by https://vufind.juniv.edu/Record/10068/Details and https://www.abebooks.com/9780316116954/Day-Universe-Changed-Companion-PBS-0316116955/plp.',
 'ndf07684b47':'Amazon misspells Quantum as Quantam and Krauss as Kruass. Exact Feynman subtitle, author card Lawrence M. Krauss, English hardcover ISBN0393064719 identify the correct book; corroborated by https://wellcomecollection.org/works/b52q9sc6.',
 'intake-0184':'Amazon prefixes the correct title with author surname Bashe. Byline names Bashe and the author card names coauthor Emerson W. Pugh. Matching print ISBN0262022257; English hardcover.',
 'n90b9134cc6':'Title and subtitle match. Amazon names both Oaksford and Chater and its author card gives M. Oaksford, consistent with Mike Oaksford. Matching hardcover ISBN0198524501; English.'
};
for(const [id,identityEvidence]of Object.entries(verified)){
 const p=a.books[id].attempts[id==='intake-0549'?1:0],html=zlib.gunzipSync(fs.readFileSync(p.rawFile)).toString(),f=fields(html),e=clean(html.match(/<span[^>]*data-hook="total-review-count"[^>]*>[\s\S]*?<\/span>/)?.[0]||''),m=e.match(/([\d,]+)\s+global ratings?\b/i);if(!m)continue;
 const asin=f.productId||p.url.match(/\/dp\/([A-Z0-9]{10})/)[1];
 out[id]={count:+m[1].replaceAll(',',''),url:p.url,asin,marketplace:'amazon.com.au',retrievedAt:p.retrieved,verifiedAt:new Date().toISOString(),verified:true,confidence:'high',productTitle:f.title,byline:f.byline,evidence:[m[0]],identityEvidence,sourceSnapshot:p.rawFile,status:'Explicit total-rating aggregate on a manually identity-checked English book product. Snapshot only; editions and marketplaces are not summed.'};
 console.log(id,out[id].count);
}
fs.writeFileSync(dir+'manual-amazon.json',JSON.stringify(out,null,2)+'\n');
