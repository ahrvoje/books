import fs from 'node:fs';
const d='data/intake_progress_261023';
export const clean=s=>s.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi,'').replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi,'').replace(/<[^>]+>/g,' ').replace(/&#x([\da-f]+);/gi,(_,x)=>String.fromCodePoint(parseInt(x,16))).replace(/&#(\d+);/g,(_,x)=>String.fromCodePoint(+x)).replace(/&amp;/g,'&').replace(/&(?:nbsp|ensp|emsp);/g,' ').replace(/&quot;/g,'"').replace(/&(?:apos|rsquo|lsquo);/g,"'").replace(/&(?:ldquo|rdquo);/g,'"').replace(/\s+/g,' ').trim();
let rows=[];
for(const {source:s} of JSON.parse(fs.readFileSync(d+'/inputs.json'))){let h=fs.readFileSync(d+'/raw/'+s+'.html','utf8');let text=h.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi,'').replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi,'').split(/<\/(?:p|div|li|h\d|tr|section)>/i).map(clean).filter(Boolean).join('\n');fs.writeFileSync(d+'/'+s+'.txt',text);
const add=(title,author='',url='',context='')=>rows.push({source:s,title:clean(title),author:clean(author),url,context:clean(context)});
if(s===229)for(const m of h.matchAll(/<h3 class="title">\s*<a href="([^"]+)">([\s\S]*?)<\/a>\s*<\/h3>\s*<p class="author">([\s\S]*?)<\/p>/g))add(m[2],m[3],'https://blog.rootsofprogress.org'+m[1]);
if(s===232)for(const m of h.matchAll(/<li>([\s\S]*?)<\/li>/g)){let a=m[1].match(/<a href="([^"]*amazon[^\"]+)">([\s\S]*?)<\/a>/);if(a)add(a[2],'',a[1],m[1]);}
if(s===230)for(const m of h.matchAll(/<em>([\s\S]*?)<\/em>/g))if(clean(m[1]).length>3)add(m[1]);
if(s===233||s===234)for(const m of h.matchAll(/class="s-lg-book-title"[^>]*>([\s\S]*?)<\/span>[\s\S]*?class="s-lg-book-author">([\s\S]*?)<\/span>/g))add(m[1],m[2]);
if(s>=238&&s<=243)for(const m of h.matchAll(/<h2 class="book-title[^\"]*">([\s\S]*?)<\/h2>/g)){let z=clean(m[1]).split(/\s+by\s+/);add(z[0],z.slice(1).join(' by '));}
}
fs.writeFileSync(d+'/extracted.json',JSON.stringify(rows,null,2));
console.log(Object.fromEntries([...new Set(rows.map(r=>r.source))].map(s=>[s,rows.filter(r=>r.source===s).length])));
