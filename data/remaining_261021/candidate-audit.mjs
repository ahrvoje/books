import fs from 'node:fs';
const d='data/remaining_261021/',c=JSON.parse(fs.readFileSync(d+'compiled.json')),old=JSON.parse(fs.readFileSync('data/source_review_261021/compiled.json'));
const labels=c.currentBooks.filter(b=>b.titleCell&&b.titleCell.match(/^\[([^\]]+)/)?.[1]!==b.title);console.log('Legacy display-label differences',labels.map(b=>[b.id,b.title,b.titleCell]).slice(0,10),labels.length);
console.log('New top 100',c.currentBooks.filter(b=>b.status==='recommended').sort((a,b)=>b.total-a.total).slice(0,100).filter(b=>b.id.startsWith('rem-')).map(b=>[b.id,b.title,b.total,b.amazon.count]));
console.log('Changes',c.currentBooks.filter(b=>{const p=old.currentBooks.find(p=>p.id===b.id);return p&&Math.abs(p.total-b.total)>1e-8;}).map(b=>[b.id,b.title,b.total]));
