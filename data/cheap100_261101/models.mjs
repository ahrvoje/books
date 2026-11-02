import fs from 'node:fs';
const r=await fetch('https://openrouter.ai/api/v1/models',{redirect:'error',signal:AbortSignal.timeout(30000)});if(!r.ok)throw Error('HTTP '+r.status);const {data}=await r.json();
const models=data.filter(m=>m.id.endsWith(':free')||m.id==='google/gemini-2.5-flash-lite'||(+m.pricing.prompt>0&&+m.pricing.prompt<=0.00000005&&+m.pricing.completion<=0.0000002&&!m.id.includes(':batch'))).map(m=>({id:m.id,context_length:m.context_length,pricing:m.pricing}));
fs.writeFileSync('data/cheap100_261101/models.json',JSON.stringify(models,null,2));console.log(models);
