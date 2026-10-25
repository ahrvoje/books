import fs from 'node:fs';
import assert from 'node:assert/strict';
import {groups} from '../rules_audit_261025/decisions.mjs';
const dir='data/h7_revision_261025',read=p=>JSON.parse(fs.readFileSync(p,'utf8')),write=(p,x)=>fs.writeFileSync(p,JSON.stringify(x,null,2)+'\n');
const c=read(dir+'/compiled.json'),decisions=read(dir+'/decisions.json'),v=read(dir+'/verification.json');
const art=new Set([...groups[1][2],'progress-0478','rest-116-96','rest-124-104']);
let report=fs.readFileSync(v.report,'utf8');
for(const d of decisions.filter(x=>x.status==='excluded'&&x.id!=='g1278')){
 const reason=art.has(d.id)?'Main purpose remains art appreciation, artistic/literary criticism, narrow art history or poetry. No central qualifying design or creative-production explanation is established in the retained evidence.':'Main purpose remains routine interpersonal or commercial advice, techniques or practice. Incidental explanations and examples do not establish a central qualifying contribution.';
 const start=report.indexOf('<a id="'+d.id+'"></a>'),next=report.indexOf('<a id=',start+1),end=next<0?report.length:next;
 assert(start>=0);report=report.slice(0,start)+report.slice(start,end).replace(d.reason,reason).replace('confidence high','confidence moderate')+report.slice(end);
 d.reason=reason;d.confidence='moderate';const b=c.exclusions.find(x=>x.id===d.id);b.reason=reason;b.confidence='moderate';
}
write(dir+'/compiled.json',c);write(dir+'/decisions.json',decisions);fs.writeFileSync(v.report,report);
