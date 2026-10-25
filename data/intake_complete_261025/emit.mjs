import fs from 'node:fs';
export const d='data/intake_complete_261025/';
export function emit(file,rows,choices={},patches={}){
 const specs=rows.map(([i,year,raw,T11,T12,periodEnd,note])=>{
  const files=fs.readdirSync(d).filter(f=>f==='evidence-'+i+'.txt'||f.startsWith('evidence-'+i+'-')||f.startsWith('evidence-'+i+'.followup'));
  files.sort((a,b)=>(a==='evidence-'+i+'.txt'?-1:b==='evidence-'+i+'.txt'?1:a.localeCompare(b)));
  const evidence=files.map(f=>fs.readFileSync(d+f,'utf8')).join('\n');
  const urls=[...evidence.matchAll(/\((https?:\/\/[^\s)]+)\)/g)].map(x=>x[1]);
  const url=urls.find(u=>u.includes(choices[i]||''));if(!url)throw Error('Evidence URL missing: '+i);
  return {indices:[i],year,raw,T11,T12,periodEnd,url,note:'Evidence inspected: cited description, contents, review or author excerpt; density confidence low, no full-text audit. '+note,...patches[i]};
 });
 fs.writeFileSync(d+file,JSON.stringify(specs,null,2)+'\n');return specs;
}
