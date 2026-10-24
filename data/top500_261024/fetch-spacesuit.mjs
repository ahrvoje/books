import fs from 'node:fs';
const url='https://mitpress.mit.edu/9780262015202/spacesuit/';
const r=await fetch(url,{signal:AbortSignal.timeout(25000)});if(!r.ok)throw Error(r.status);
const html=await r.text();fs.writeFileSync('data/top500_261024/raw/spacesuit-publisher.html',html);
console.log([...html.matchAll(/href="([^"]+)"[^>]*>([^<]*(?:Contents|Index)[^<]*)</g)].map(m=>({url:m[1],text:m[2]})));
