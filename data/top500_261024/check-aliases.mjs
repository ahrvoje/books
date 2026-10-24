import fs from 'node:fs';
import zlib from 'node:zlib';
const d='data/top500_261024/',s=JSON.parse(fs.readFileSync(d+'amazon.json')),b=JSON.parse(fs.readFileSync(d+'targets.json'));
const pending=process.argv.includes('--pending'),manual={};
const rejected=new Set();for(const f of fs.readdirSync(d).filter(f=>/^manual(?:-\d+)?\.json$/.test(f)))for(const [id,m]of Object.entries(JSON.parse(fs.readFileSync(d+f))))if(m.rejectedAggregate)rejected.add(id+'/'+m.rejectedAggregate.asin);
for(const f of fs.readdirSync(d).filter(f=>/^manual(?:-\d+)?\.json$/.test(f)))for(const [id,m]of Object.entries(JSON.parse(fs.readFileSync(d+f))))if(m.amazon)manual[id]=m.amazon;
const series=new Set(['intake-0190','intake-0203','progress-0677','progress-0817','intake-0172','n88837eb597']);
for(const x of b)for(const a of s.books[x.id]?.attempts||[])if(a.status===200&&(!a.titleMatch||!a.authorMatch)){
 const h=zlib.gunzipSync(fs.readFileSync(a.rawFile)).toString(),m=h.match(/data-hook="total-review-count"[^>]*>([\s\S]*?)<\/span>/);
 const count=Number(m?.[1].match(/([\d,]+) global ratings?/)?.[1].replaceAll(',',''));
 if(pending&&(!count||series.has(x.id)||rejected.has(x.id+'/'+a.url.split('/').at(-1))||count<=Math.max(s.books[x.id]?.amazon?.count||0,manual[x.id]?.count||0,x.amazon?.count||0)))continue;
 console.log(JSON.stringify({id:x.id,title:x.title,author:x.author,...a,rating:m?.[1]}));
}
