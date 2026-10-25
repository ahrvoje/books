import fs from 'node:fs';
const d='data/shelves_261025',read=p=>JSON.parse(fs.readFileSync(p,'utf8')),write=(p,x)=>fs.writeFileSync(d+'/'+p,JSON.stringify(x,null,2)+'\n');
export const norm=s=>String(s||'').normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/&/g,' and ').replace(/[^a-z0-9]+/g,' ').trim();
const clean=s=>norm(s).replace(/^(the|a|an) /,'');
const primary=s=>clean(s.split(/:| — | – | \(/)[0]);
const c=read(read('data/catalog.json').compiled),all=[...c.currentBooks,...c.exclusions];
const exact=new Map(),main=new Map();for(const z of all){for(const [map,key] of [[exact,clean(z.title)],[main,primary(z.title)]]){if(!map.has(key))map.set(key,[]);map.get(key).push(z);}}
const normalized=all.map(z=>({z,t:clean(z.title),a:clean(z.author)}));
const surnames=s=>s.split(/\(| - | – /)[0].split(/;|,|\s+(?:and|with|&)\s+/).map(a=>norm(a).split(' ').filter(w=>!['jr','sr','phd','md','editor','editors','al','et'].includes(w)).at(-1)).filter(w=>w&&w.length>1);
const rejectedPrefixes=new Set(['Foundation and Empire','Last and First Men and Star Maker','Paradise Lost and Paradise Regained','Quantum Mechanics and Experience','The Snows of Kilimanjaro and Other Stories',"Slaughterhouse-Five, or the Children's Crusade",'The Undercover Economist Strikes Back','The Ringworld Throne','The Ringworld Engineers'].map(clean));
let q=read(d+'/extracted.json');
// Supplement visible unlinked list entries, without interpreting navigation as books.
for(const n of [290,293]){const x=read(d+'/'+n+'-clean.json');for(const l of x.lists){const m=l.replace(/^[^\p{L}\p{N}]+/u,'').match(/^(.+?) by (.+?)(?: - | – |\n|$)/);if(m&&!q.some(b=>b.source===n&&clean(b.title)===clean(m[1])))q.push({source:n,title:m[1],author:m[2].replace(/\*+$/,'').trim()});}}
const matches=[],pending=[];
const manual=fs.existsSync(d+'/manual-aliases.json')?read(d+'/manual-aliases.json'):{};
for(const [i,b] of q.entries()){
 b.index=i;
 const au=clean(b.author),aTokens=au.split(' ').filter(w=>w.length>2);
 const agrees=z=>!au||clean(z.author)===au||surnames(b.author).some(w=>surnames(z.author).includes(w));
 let found=(exact.get(clean(b.title))||[]).filter(agrees);
 let kind='exact title with compatible author';
 if(manual[i]){found=all.filter(z=>z.id===manual[i]);if(found.length!==1)throw Error('Missing reviewed alias '+i);kind='individually reviewed alias: spelling, alternate title, editor, pseudonym or prior missing author';}
 if(!found.length&&primary(b.title).length>=3&&au){found=(main.get(primary(b.title))||[]).filter(agrees);kind='same main title with compatible author';}
 if(!found.length&&au&&!rejectedPrefixes.has(clean(b.title))&&!/\b(series|volumes?|vol\.?|book [0-9])\b/i.test(b.title)){const t=clean(b.title);found=normalized.filter(z=>Math.min(t.length,z.t.length)>=9&&(t.startsWith(z.t+' ')||z.t.startsWith(t+' '))&&agrees(z.z)&&!/\b(series|volumes?|vol\.?|book [0-9])\b/i.test(z.z.title)).map(z=>z.z);kind='reviewed title prefix/subtitle variant with compatible author';}
 if(found.length===1)matches.push({...b,id:found[0].id,status:found[0].status,canonicalTitle:found[0].title,canonicalAuthor:found[0].author,match:kind});
 else pending.push({...b,suggestions:found.map(z=>({id:z.id,title:z.title,author:z.author}))});
}
write('candidates.json',q);write('matches.json',matches);write('unmatched-all.json',pending);
const ignored=fs.existsSync(d+'/scope.json')?read(d+'/scope.json').ignoredNewTitleSources:[];
write('ignored-new-titles.json',pending.filter(b=>ignored.includes(b.source)));write('pending.json',pending.filter(b=>!ignored.includes(b.source)));
console.log({candidates:q.length,matches:matches.length,pending:pending.length,uniquePending:new Set(pending.map(b=>clean(b.title))).size});
console.log(Object.fromEntries([...new Set(q.map(b=>b.source))].map(s=>[s,{total:q.filter(b=>b.source===s).length,matched:matches.filter(b=>b.source===s).length,pending:pending.filter(b=>b.source===s).length}])));
fs.writeFileSync(d+'/pending.tsv',pending.map(b=>`${b.index}\t${b.source}\t${b.title}\t${b.author}`).join('\n'));
