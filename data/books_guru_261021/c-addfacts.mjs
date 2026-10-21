import fs from 'node:fs';
const dir='data/books_guru_261021/';
const facts=JSON.parse(fs.readFileSync(dir+'c-facts.json','utf8'));
const rows=JSON.parse(fs.readFileSync(process.argv[2],'utf8'));
for(const r of rows){
 const [id,year,kind,structure,payload,caveat,raw,notes,T11,T12,periodEnd,evidence,domains,extra={}]=r;
 if(facts.some(x=>x.id===id))throw Error('Duplicate '+id);
 facts.push({id,year,kind,structure,payload,caveat,raw,notes,T11,T12,periodEnd,evidence,domains,
 yearNote:`The cited publication record identifies ${year} as the original publication year; later editions do not reset it.`,
 themeNote:`T11=${T11}: ${T11?'the main subject falls in the specified unwanted themes':'the main subject is not predominantly one of the specified unwanted themes'}. T12=${T12}: ${T12?'the central subject is politics, military affairs, finance, media, power or philosophy':'the central explanatory subject lies outside the listed deduction domains'}.`,
 periodNote:periodEnd===null?`This ${kind} develops a general or cross-period argument; no single central historical endpoint is imposed.`:`The central historical account is assessed through ${periodEnd}; later publication does not reset topic age.`,...extra});
}
fs.writeFileSync(dir+'c-facts.json',JSON.stringify(facts,null,2)+'\n');
console.log({facts:facts.length});
