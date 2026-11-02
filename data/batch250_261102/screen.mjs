import fs from 'node:fs';
const d='data/batch250_261102/',p=JSON.parse(fs.readFileSync(d+'pending.json')),norm=s=>s.toLowerCase().normalize('NFKD').replace(/[^a-z0-9]/g,''),seen=new Set();
for(const [i,x]of p.entries()){
 const main=norm(x.title.split(':')[0].replace(/\([^)]*\)/g,'')),label=norm(x.sourceTitle.replace(/^Amazon.com:\s*/i,'')),byline=x.author.split(/[;,]| and /)[0].trim().split(/\s+/).at(-1);
 if(x.kind!=='amazon'||seen.has(x.id)||main.length<6||!label.startsWith(main)||!norm(x.sourceTitle+' '+x.sourceText.slice(0,600)).includes(norm(byline)))continue;
 seen.add(x.id);const j=x.sourceText.indexOf(x.evidence);console.log(JSON.stringify({i,title:x.title,author:x.author,source:x.sourceTitle,evidence:x.sourceText.slice(Math.max(0,j-75),j+55)}));
}
