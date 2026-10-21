import fs from 'node:fs';
import queue from './queue.mjs';
const dir='data/remaining_261021/';
const rows=fs.readdirSync(dir).filter(f=>/^assessments-.*\.txt$/.test(f)).flatMap(f=>fs.readFileSync(dir+f,'utf8').trim().split('\n').filter(l=>l&&!l.startsWith('#')).map(l=>({file:f,fields:l.split('|')})));
for(const r of rows.filter(r=>/hold|pending|verify|provisional/i.test(r.fields.slice(7).join(' ')))) console.log(r.fields[0]+' '+queue.find(b=>b.batchId===r.fields[0])?.title+' '+r.fields.slice(7).join(' | '));
