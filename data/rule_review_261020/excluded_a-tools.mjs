import fs from 'node:fs';
export const input=JSON.parse(fs.readFileSync('data/rule_review_261020/excluded_a-input.json','utf8'));
export const read=f=>fs.existsSync(f)?JSON.parse(fs.readFileSync(f,'utf8')):null;
export const norm=s=>String(s||'').normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]/g,'');
export function resources(b){
 const pri=b.priorRecords||[],ids=[b.id,...(b.sourceIds||[]),...pri.map(x=>x.id)].filter(Boolean);
 const amazon=ids.map(id=>({file:'data/glasp_261019/amazon/'+id+'.json',record:read('data/glasp_261019/amazon/'+id+'.json')})).filter(x=>x.record);
 const workIds=[...new Set(pri.flatMap(p=>p.evidence||[]).map(x=>String(x).match(/OL\d+W/)?.[0]).filter(Boolean))];
 const works=workIds.map(id=>({file:'data/glasp_261019/works/'+id+'.json',record:read('data/glasp_261019/works/'+id+'.json')})).filter(x=>x.record);
 return {amazon,works};
}
if(process.argv.includes('--show'))for(const b of input){if(b.priorRecords.some(x=>String(x.exclusion)==='1'||x.exclusion==='H1'))continue;const r=resources(b); console.log(b.reviewId+' '+b.title+' '+JSON.stringify({works:r.works.map(x=>x.record),amazon:r.amazon.map(x=>({file:x.file,description:x.record.selected?.description,selected:x.record.selected?.count}))}).slice(0,2500));}
