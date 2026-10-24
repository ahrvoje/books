import fs from 'node:fs';
const d='data/top500_261024/',read=f=>JSON.parse(fs.readFileSync(d+f)),s=read('amazon.json'),manual={};
for(const f of fs.readdirSync(d).filter(f=>/^manual(?:-\d+)?\.json$/.test(f)).sort((a,b)=>+(a.match(/-(\d+)/)?.[1]||0)-+(b.match(/-(\d+)/)?.[1]||0)))for(const [id,m]of Object.entries(read(f)))manual[id]={...manual[id],...m};
function isbn10(v){const t=String(v||'').replace(/^ISBN:/,'');if(/^\d{9}[\dX]$/.test(t))return t;if(!/^978\d{10}$/.test(t))return t;const a=t.slice(3,12),n=(11-[...a].reduce((s,c,i)=>s+(10-i)*+c,0)%11)%11;return a+(n===10?'X':n);}
let reopened=0;
for(const [id,m]of Object.entries(manual)){
 const a=s.books[id],product=isbn10(m.productCandidate?.id);
 if(!a?.done||a.amazon||m.amazon||!product||a.attempts.length>=3||a.attempts.some(x=>x.url.endsWith('/'+product)))continue;
 a.done=false;a.reopenedReason='New publisher/library-verified product identifier after an unavailable earlier lookup.';reopened++;console.log({id,product});
}
fs.writeFileSync(d+'amazon.json.tmp',JSON.stringify(s,null,2)+'\n');fs.renameSync(d+'amazon.json.tmp',d+'amazon.json');console.log({reopened});
