import fs from 'node:fs';
const dir='data/sources_261020/reddit';
const raw=JSON.parse(fs.readFileSync(`${dir}/raw/145-web.json`));
const lines=new Map([...raw.matchAll(/L(\d+): ([\s\S]*?)(?=\sL\d+: |\nL\d+: |$)/g)].map(m=>[+m[1],m[2].trim()]));
const path=`${dir}/claims-145.tsv`;
const base=fs.readFileSync(path,'utf8').trim().split(/\r?\n/).filter(line=>!line.includes('AI transcription'));
const norm=s=>s.toLowerCase().replace(/[^a-z0-9]/g,'').replace(/^the/,'');
const existing=new Set(base.map(line=>norm(line.split('\t')[1])));
let added=0;
for(const line of [484,487,489,490,492,494,498,502]){
  const text=lines.get(line)+(line===494?' '+lines.get(495):'');
  for(const item of text.split('•').slice(1)){
    const [title,author]=item.trim().split(/\s+—\s+/);
    if(!title||!author||existing.has(norm(title)))continue;
    const sourceLine=line===494&&lines.get(495).includes(title)?495:line;
    base.push([sourceLine,title,author,'Mention in commenter burchb AI transcription, explicitly caveated by commenter. Cover image not inspected. Title and author may be wrong and require identity verification.'].join('\t'));
    existing.add(norm(title));added++;
  }
}
fs.writeFileSync(path,base.join('\n')+'\n');
console.log(`Added ${added} AI-transcription comment mentions for identity review.`);
