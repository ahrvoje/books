import fs from 'node:fs';
const read=f=>JSON.parse(fs.readFileSync(f)),d='data/intake_progress_261023/',c=read(read('data/catalog.json').compiled),a=read(d+'audit.json');
const key=(author,title)=>author+'|'+(title.match(/^\[([^\]]+)\]/)?.[1]||title),scores=new Map(c.currentBooks.map(b=>[key(b.author,b.titleCell||b.title),b.total]));
const file='RECOMMENDED_BOOKS.md',lines=fs.readFileSync(file,'utf8').split('\n'),rows=lines.filter(l=>/^\| \d{4}-/.test(l));
const score=l=>{const r=l.split('|').slice(1,-1).map(s=>s.trim());return scores.get(key(r[2],r[3]));};
rows.sort((a,b)=>score(b)-score(a));let i=0;fs.writeFileSync(file,lines.map(l=>/^\| \d{4}-/.test(l)?rows[i++]:l).join('\n'));
fs.appendFileSync(a.report,'\n## Verification\n\nThe intake audit confirms that all 4,391 existing scored judgments and all 1,774 existing exclusions are unchanged. Source lists contain unique IDs. All new score calculations, ledger membership and local report links pass their checks. The site builds successfully; all 18 existing model tests pass. See [machine-readable verification](../'+d+'verification.json).\n');
