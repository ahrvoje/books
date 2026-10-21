import fs from 'node:fs';
const original=JSON.parse(fs.readFileSync(new URL('./pending-start.json',import.meta.url)));
const queue=structuredClone(original);
for(const [id,pattern] of [['u0093',/Encyclopedia/],['u1294',/Book Two/],['u1246',/Evolution of the Global/]]){
 const b=queue.find(b=>b.batchId===id),mentions=b.mentions.filter(m=>pattern.test(m.title));
 if(!mentions.length)throw new Error('Missing split evidence: '+id);
 b.mentions=b.mentions.filter(m=>!pattern.test(m.title));
 queue.push({...b,batchId:id+'-b',title:mentions[0].title,author:mentions[0].author,mentions,splitFrom:id});
}
const b=queue.find(b=>b.batchId==='u1136');
queue.push({...b,batchId:'u1136-b',title:'Complexity: The Emerging Science at the Edge of Order and Chaos',author:'M. Mitchell Waldrop',splitFrom:'u1136',mentions:b.mentions.map(m=>({...m,title:'Complexity: The Emerging Science at the Edge of Order and Chaos',author:'M. Mitchell Waldrop'}))});
export default queue;
