import fs from 'node:fs';import {dir,read,write} from './capture.mjs';
const v=read(dir+'/veto-overrides.json');for(const[t,rule,why]of[
['Jesus: A Biography from a Believer','V5','Believing exposition establishes Jesus and his teachings as authoritative, rather than treating religion only as a historical object.'],
['Arnold and Me: In the Shadow of the Austrian Oak','V3','Intimate relationship memoir offers little identified transferable intellectual payload beyond personalities and private detail.']
])v[t]={veto:rule,vetoConfidence:'moderate',vetoReason:why};write(dir+'/veto-overrides.json',v);
const m=read(dir+'/metadata-overrides.json');m['Driven From Within']={readerRating:{platform:'Goodreads',value:4.33,count:2636,url:'https://www.goodreads.com/work/editions/47404-driven-from-within',retrieved:'2026-10-24',limitation:'One paperback edition aggregate, not Amazon ratings and not summed across editions.'},purchaseUrl:'https://www.amazon.de/dp/0743284518',edition:{id:'ISBN:9780743284516',url:'https://www.goodreads.com/work/editions/47404-driven-from-within',pages:208,year:2006,language:'English',format:'paperback',retrieved:'2026-10-24',confidence:'moderate'}};
write(dir+'/metadata-overrides.json',m);
// Adopt catalog identities only for this manually inspected set, without copying catalog publication-year errors.
const a=read(dir+'/triaged.json'),norm=s=>s.toLowerCase().replace(/[^a-z0-9]/g,'');
const reviewed=fs.readFileSync(dir+'/founders-media-decisions.tsv','utf8').trim().split(/\r?\n/).map(l=>l.split('|')[0]);
for(const b of a){if(!reviewed.some(t=>norm(t)===norm(b.title)))continue;const p=dir+'/founders-research/'+b.id+'.json';if(!fs.existsSync(p))continue;const d=read(p).search?.docs?.[0];if(!d)continue;const s=norm(b.title.split(':')[0]),t=norm(d.title);if(s===t||s.startsWith(t)&&t.length>5)b.metadata={key:d.key,title:d.title,author:d.author_name?.join('; '),isbn:d.isbn,language:d.language,file:p};}write(dir+'/triaged.json',a);
