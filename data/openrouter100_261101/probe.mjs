import fs from 'node:fs';
const endpoint='https://openrouter.ai/api/v1';
try {
 const response=await fetch(endpoint+'/models',{signal:AbortSignal.timeout(30000)});
 if(!response.ok)throw Error('Models HTTP '+response.status);
 const data=await response.json();
 const models=data.data.filter(m=>/sonar|gemini.*flash|gpt-.*search/.test(m.id));
 fs.writeFileSync('data/openrouter100_261101/models.json',JSON.stringify(models,null,2));
 console.log(models.map(m=>({id:m.id,pricing:m.pricing})));
}catch(e){console.log({error:e.name,message:e.message});process.exitCode=1;}
