import fs from 'node:fs';
const dir='data/top250_261023',read=p=>JSON.parse(fs.readFileSync(p)),state=read(dir+'/amazon.json'),books=read(dir+'/targets.json');
if(!books.every(b=>state.books[b.id]?.done)||state.blocked)throw Error('Initial Amazon pass must finish without an access block before any follow-up.');
const manual={};for(const f of fs.readdirSync(dir).filter(f=>/^manual(?:-\d+)?\.json$/.test(f)))for(const[id,v]of Object.entries(read(dir+'/'+f)))manual[id]={...manual[id],...v};
const library=read(dir+'/progress.json').books;
const isbn10=value=>{const s=String(value||'').replace(/^ISBN(?:\/ASIN)?:/,'');if(/^\d{9}[\dX]$/.test(s))return s;if(!/^978\d{10}$/.test(s))return null;const t=s.slice(3,12),n=(11-[...t].reduce((sum,c,i)=>sum+(10-i)*+c,0)%11)%11;return t+(n===10?'X':n);};
const retry=[];
const seriesWithoutAggregate=new Set(['intake-0190','intake-0203','progress-0677','progress-0817']);
for(const b of books){const s=state.books[b.id],m=manual[b.id]||{};if(s.amazon||b.amazon?.count!=null||seriesWithoutAggregate.has(b.id))continue;const ids=[...new Set([m.product?.id,m.edition?.id,m.reference?.id,...(library[b.id]?.identities||[]).flatMap(x=>x.isbn)].map(isbn10).filter(Boolean))].filter(id=>!s.attempts.some(a=>a.url.endsWith('/'+id)));if(ids.length){retry.push({id:b.id,title:b.title,ids});if(process.argv.includes('--write')){s.done=false;s.followUpReason='New independently verified edition identity; prior URLs will not be requested again.';}}}
if(process.argv.includes('--write'))fs.writeFileSync(dir+'/amazon.json',JSON.stringify(state,null,2)+'\n');
fs.writeFileSync(dir+'/amazon-retry-plan.json',JSON.stringify(retry,null,2)+'\n');console.log(retry);
