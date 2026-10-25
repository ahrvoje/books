import fs from 'node:fs';
for(const slug of ['hitler','economics','inequality','egyptian-book-of-the-dead']){
 const s=fs.readFileSync('data/intake_complete_261025/identity-'+slug+'.html','utf8');
 const t=s.replace(/<script[\s\S]*?<\/script>/gi,'').replace(/<style[\s\S]*?<\/style>/gi,'').replace(/<[^>]+>/g,' ').replace(/\s+/g,' ');
 console.log(slug,t.slice(0,6000));
}
