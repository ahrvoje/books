import fs from 'node:fs';
import {existing} from './identity.mjs';
import queue from './queue.mjs';
const c=JSON.parse(fs.readFileSync('data/source_review_261021/compiled.json'));
for(const [batchId,id] of Object.entries(existing)){
 const b=[...c.currentBooks,...c.exclusions].find(x=>x.id===id); const q=queue.find(x=>x.batchId===batchId);
 console.log(JSON.stringify({batchId,id,title:b?.title,author:b?.author,status:b?.status,raw:b?.raw,year:b?.year,T11:b?.deductions?.T11,T12:b?.deductions?.T12,periodEnd:b?.periodEnd,reason:b?.reason,analysis:b?.currentReview||b?.reviewAnchor||b?.analysis,notes:b?.notes,density:b?.densityAssessment,context:q?.mentions.map(m=>m.context).join('\n').slice(0,350)}));
}
