import fs from 'node:fs';
const dir='data/source_batch_261021/';
const first=JSON.parse(fs.readFileSync(dir+'web-fallback.txt','utf8')),tail=JSON.parse(fs.readFileSync(dir+'web-maxx-tail.txt','utf8'));
const clean=s=>s.replace(/cite\d+†([^]+)/g,'$1').replace(/^L\d+:\s*/,'').trim();
const firstLines=first.split('\n'),geo=firstLines.slice(0,firstLines.findIndex(l=>l.startsWith('List of Books'))),entries=[];
for(let i=0;i<geo.length;i++){const x=geo[i].match(/^L(\d+): cite\d+†([^]+)/);if(!x||+x[1]<204||+x[1]>531)continue;let author='';for(let k=i+1;k<Math.min(i+4,geo.length);k++){const s=clean(geo[k]);if(s&&!/^Paperback|Hardback|L\d+/.test(s)){author=s;break;}}entries.push({title:x[2],author,source:179,sourceURL:'https://uk.bookshop.org/lists/geopolitics-strategicreads',context:'Bookshop listing; author and edition identified in the saved search-service snapshot.'});}
const maxx=[...firstLines.slice(firstLines.findIndex(l=>l.startsWith('List of Books'))),...tail.split('\n')],seen=new Set();
for(const l of maxx){const n=l.match(/^L(\d+):/);if(!n)continue;const line=+n[1];if(seen.has(line))continue;seen.add(line);let s=clean(l),title='';if(/^\d+\. /.test(s))title=s.replace(/^\d+\. /,'');else if(s.includes(' | ')&&!s.startsWith('Title')&&!s.startsWith('---'))title=s.split(' | ')[0];if(title)entries.push({title,author:'',source:193,sourceURL:'https://brain.maxxyung.com/lists/books',context:'Source reading tracker: '+s});}
fs.writeFileSync(dir+'fallback-extracted.json',JSON.stringify(entries,null,2));console.log(entries.reduce((a,b)=>(a[b.source]=(a[b.source]||0)+1,a),{}));
