import fs from 'node:fs';
const dir='data/sources_261020/primary/',file=dir+'hn-memoir-assessments.json',a=JSON.parse(fs.readFileSync(file,'utf8'));
const b=a.find(b=>b.title==='Operators and Things');
if(!b)throw Error('Missing Operators and Things');
b.periodEnd=1955;b.periodConfidence='low';
b.periodNote='Circa 1955 is a declared midpoint estimate within the 1950s, the decade stated by the reissue publisher for the six-month episode. The exact year is unknown. This is an approximate historical assessment, not the 1958 publication date or a non-period fallback.';
b.evidence=[...new Set([...b.evidence.filter(x=>x!=='data/sources_261020/reddit/hn-period-research3-1000.json'),'https://www.silverbirchpress.com/operators_and_things.html','data/sources_261020/reddit/raw/hn-period-research3-1000.json'])];
fs.writeFileSync(file,JSON.stringify(a,null,2)+'\n');
const unknown=[];
for(const folder of ['primary','hn','math','reddit'])for(const f of fs.readdirSync('data/sources_261020/'+folder).filter(f=>f.endsWith('assessments.json'))){
 for(const r of JSON.parse(fs.readFileSync('data/sources_261020/'+folder+'/'+f,'utf8')))if(r.raw&&r.periodEnd===null&&/unknown|unresolved|not verified|not established/i.test(r.periodNote||''))unknown.push({file:folder+'/'+f,id:r.id,title:r.title,note:r.periodNote});
}
console.log(JSON.stringify({unknown}));
