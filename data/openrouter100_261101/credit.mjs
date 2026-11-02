import fs from 'node:fs';
const key=fs.readFileSync('api-key','utf8').match(/sk-or-[A-Za-z0-9_-]+/)[0];
const r=await fetch('https://openrouter.ai/api/v1/key',{headers:{Authorization:'Bearer '+key},redirect:'error'});
if(!r.ok)console.log({http:r.status});
else {const {data:d}=await r.json();console.log({limit:d.limit,limitRemaining:d.limit_remaining,usage:d.usage,isFreeTier:d.is_free_tier});}
const c=await fetch('https://openrouter.ai/api/v1/credits',{headers:{Authorization:'Bearer '+key},redirect:'error'});
if(c.ok){const {data:d}=await c.json();console.log({accountBalance:d.total_credits-d.total_usage});}else console.log({creditEndpointStatus:c.status});
