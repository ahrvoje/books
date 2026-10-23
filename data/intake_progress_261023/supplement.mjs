import fs from 'node:fs';
const d='data/intake_progress_261023';fs.mkdirSync(d+'/supplement',{recursive:true});
const rows=JSON.parse(fs.readFileSync(d+'/matched.json')).filter(b=>b.source===229&&!b.id);let next=0;
async function worker(){while(next<rows.length){const b=rows[next++],slug=b.url.split('/').at(-1);try{let r=await fetch(b.url,{signal:AbortSignal.timeout(15000)});fs.writeFileSync(d+'/supplement/'+slug+'.html',await r.text());}catch(e){console.log(slug,String(e))}}}
await Promise.all([worker(),worker(),worker()]);
