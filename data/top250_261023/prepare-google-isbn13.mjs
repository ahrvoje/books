import fs from 'node:fs';
let s=fs.readFileSync('data/top250_261023/google-final.mjs','utf8');
s=s.replaceAll("dir+'/google-final.json'","dir+'/google-isbn13.json'");
s=s.replace("['google.json','google-more.json']","['google.json','google-more.json','google-final.json']");
s=s.replace("let last=0;","let last=0;\nconst isbn10=value=>{const s=String(value||'');if(/^\\d{9}[\\dX]$/.test(s))return s;if(!/^978\\d{10}$/.test(s))return null;const t=s.slice(3,12),n=(11-[...t].reduce((sum,c,i)=>sum+(10-i)*+c,0)%11)%11;return t+(n===10?'X':n);};");
s=s.replace("].filter(x=>/^\\d{9}[\\dX]$/.test(x)).find", "].map(isbn10).filter(Boolean).find");
fs.writeFileSync('data/top250_261023/google-isbn13.mjs',s);
