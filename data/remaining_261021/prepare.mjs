import fs from 'node:fs';
import assert from 'node:assert/strict';
import queue from './queue.mjs';
import exclusions from './exclusion-decisions.mjs';
import unresolved from './unresolved.mjs';
import nonbooks from './nonbooks.mjs';
import {existing,aliases,corrections} from './identity.mjs';
import late from './late-identities.mjs';
import firstChecks from './final-checks.mjs';
const dir='data/remaining_261021/';
const read=p=>JSON.parse(fs.readFileSync(dir+p));
const checks={...firstChecks,...read('final-checks-extra.json'),...read('final-checks-more.json'),...read('final-checks-last.json'),...read('final-checks-top.json')};
const holds=read('publication-holds.json');
const enriched=read('enriched.json'), gr=read('goodreads.json'), ratings=read('ratings.json');
const rows=fs.readdirSync(dir).filter(f=>/^assessments-.*\.txt$/.test(f)).flatMap(f=>fs.readFileSync(dir+f,'utf8').trim().split('\n').filter(l=>l&&!l.startsWith('#')).map(l=>{const a=l.split('|');assert.equal(a.length,9);return {batchId:a[0],year:+a[1],T11:+a[2],T12:+a[3],periodEnd:a[4]==='none'?null:+a[4],raw:a[5].split(',').map(Number),status:a[6],basis:a[7],limitations:a[8]};}));
const byId=new Map(rows.map(r=>[r.batchId,r]));assert.equal(byId.size,rows.length);
const maxima=[20,17,15,12,10,9,7,5,3,2];
const output=queue.map(q=>{
 const id=q.batchId,a=byId.get(id),x=exclusions.find(x=>x.batchId===id),u=unresolved.find(x=>x.batchId===id),n=nonbooks.find(x=>x.batchId===id),check=checks[id];
 const b={...q,...corrections[id],...late[id],...a,...check,sourceRecord:q,sources:[...new Set(q.mentions.map(m=>m.source))].sort((a,b)=>a-b),verification:check||null};
 b.disposition=u?'unresolved':n?'nonbook':existing[id]?'existing':aliases[id]?'alias':check?.status?.startsWith('H')||x?'excluded':a?'assessed':'missing';
 if(u||n||x)b.decision=u||n||x;
 if(check?.status?.startsWith('H'))b.decision={rule:check.status,reason:check.note,confidence:check.confidence,refs:check.refs};
 if(existing[id])b.catalogId=existing[id];if(aliases[id])b.aliasOf=aliases[id];
 if(holds[id]){b.disposition='unresolved';b.decision={reason:holds[id],confidence:'unknown'};delete b.raw;delete b.year;}
 if(b.disposition==='assessed'){
  assert(b.raw.length===10&&b.raw.every((v,i)=>Number.isFinite(v)&&v>=0&&v<=maxima[i]),id);
  const capture=ratings[id]?.accepted;const g=gr[id];
  b.amazon=capture?.accepted&&capture.titleMatch&&capture.authorMatch?capture:null;
  b.goodreads=g?.titleMatch&&g.authorMatch?{url:g.url,title:g.title,author:g.author,stats:g.stats,details:g.details,retrieved:g.retrieved}:null;
  b.points=b.raw.map((v,i)=>[0,1,4].includes(i)?v*v/maxima[i]:v);
  b.deductions={T11:b.T11,T12:b.T12,H13:b.periodEnd===null?0:-Math.min(12,Math.max(0,2026-b.periodEnd)/25),P14:-Math.min(10,Math.max(0,2026-b.year)/10),O15:!b.amazon?0:b.amazon.count<10?-20:b.amazon.count<100?-10:b.amazon.count<1000?-5:0};
  b.total=b.points.reduce((a,v)=>a+v,0)+Object.values(b.deductions).reduce((a,v)=>a+v,0);
  b.verdict=b.status.startsWith('V')?'Vetoed':b.total>=85?'Recommend':b.total>=75?'Consider':b.total>=65?'Selective':b.total>=50?'Low priority':'Poor fit';
  b.openChecks=check?[]:[...( /hold|pending|verify|provisional|before release|before final|needs confirmation|resolve.*conflict|need a final|inspect.*before/i.test(b.limitations)?['Draft explicitly requires a further check.']:[])];
  b.metadataCandidate=enriched[id]?.candidate?{title:enriched[id].candidate.title,author:enriched[id].candidate.author_name,year:enriched[id].candidate.first_publish_year,url:'https://openlibrary.org'+enriched[id].candidate.key,language:enriched[id].candidate.language}:null;
 }
 return b;
});
assert(output.every(b=>b.disposition!=='missing'));
fs.writeFileSync(dir+'prepared.json',JSON.stringify({baseline:'data/source_review_261021/compiled.json',publicationReady:false,records:output},null,2)+'\n');
const counts=Object.fromEntries([...new Set(output.map(b=>b.disposition))].map(s=>[s,output.filter(b=>b.disposition===s).length]));
console.log(counts);console.log('OPEN CHECKS',output.filter(b=>b.openChecks?.length).map(b=>b.batchId+' '+b.title));
