const fs=require('fs'),path=require('path');
const files=fs.readdirSync(__dirname).filter(f=>/^assess_(bio_|history_).*\.cjs$/.test(f));
const rows=files.flatMap(f=>require('./'+f));
const research=fs.readdirSync(__dirname).filter(f=>/^(bio_|history_).*\.json$/.test(f)).map(f=>fs.readFileSync(path.join(__dirname,f),'utf8')).join('\n');
const old=fs.readdirSync(path.join(__dirname,'../..')).filter(f=>f.startsWith('analysis_')&&f.endsWith('.md')).map(f=>fs.readFileSync(path.join(__dirname,'../..',f),'utf8')).join('\n');
const corpus=research+old;const unmatched=[];
for(const b of rows)for(const u of b.evidence)if(!/amazon\.|openlibrary.org/.test(u)&&!corpus.includes(u))unmatched.push({id:b.id,url:u});
console.log(JSON.stringify(unmatched,null,2));
