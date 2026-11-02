import fs from 'node:fs';
import assert from 'node:assert/strict';
const d='data/refs100_261102/',read=p=>JSON.parse(fs.readFileSync(p)),s=read(d+'selected.json');
assert.equal(s.length,100);assert.equal(new Set(s.map(x=>x.id)).size,100);
const approved=s.map(x=>{const raw=read(x.file),a=raw.choices[0].message.annotations.map(z=>z.url_citation).find(z=>z.url===x.url&&z.content===x.sourceText);assert(a);assert(a.content.includes(x.evidence));const union=new Set();for(const r of x.ranges){assert(a.content.includes(r.evidence));for(let n=r.start;n<=r.end;n++)union.add(n);}assert.equal(union.size,x.count);return {...x,observed:x.evidence,item:{count:x.count,ranges:x.ranges},source:a};});
fs.writeFileSync(d+'approved.json',JSON.stringify(approved,null,2));console.log({approved:approved.length});
