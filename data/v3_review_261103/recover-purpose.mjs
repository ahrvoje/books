import fs from 'node:fs';
const dir='data/v3_review_261103',read=p=>JSON.parse(fs.readFileSync(p,'utf8'));
const inputs=read(dir+'/inputs.json'),cache=new Map(),records=[];
const plain=s=>s.replace(/\*\*/g,'').replace(/\[([^\]]+)\]\([^)]+\)/g,'$1').replace(/\s+/g,' ').trim();
for(const b of inputs.filter(b=>!b.character)){
 let found=null;
 for(let ref of b.refs.filter(r=>typeof r==='string')){
  if(ref.startsWith('analysis_'))ref='analysis/'+ref;
  const [file,anchor]=ref.split('#');if(!file.startsWith('analysis/')||!fs.existsSync(file))continue;
  if(!cache.has(file))cache.set(file,fs.readFileSync(file,'utf8'));
  const text=cache.get(file),needle='<a id="'+anchor+'"';let start=anchor?text.indexOf(needle):-1;
  if(start<0){const heading=[...text.matchAll(/^###? .+$/gm)].find(m=>m[0].normalize('NFKC').toLowerCase().endsWith(b.title.normalize('NFKC').toLowerCase()));if(heading)start=heading.index;}
  if(start<0)continue;
  const nextAnchor=text.indexOf('<a id=',start+needle.length);
  const tail=text.slice(start),headings=[...tail.matchAll(/^(#{1,6}) .+$/gm)];
  const firstHeading=headings[0],nextHeading=firstHeading&&headings.slice(1).find(h=>h[1].length<=firstHeading[1].length);
  const ends=[text.length,nextAnchor<0?text.length:nextAnchor,nextHeading?start+nextHeading.index:text.length];
  const section=text.slice(start,Math.min(...ends));
  // Save the original evidence; never synthesize a purpose from a title alone.
  const paragraphs=section.split(/\r?\n\s*\r?\n/).filter(s=>!/^\s*(?:<|#|\||Observed|Linked edition|\*\*(?:Prior comparison|Source evidence)|\[)/.test(s));
  const substantive=paragraphs.map(plain).filter(s=>s.length>75&&!/^(?:[A-Z]\d+\s*\/|Status:|Initial rank|Reference pages|Retained linear|Contributions|Deductions|R&D|Sources:|Contributing sources|Entry |Amazon |Positive |Original |Score |Updated |Counterfactual|Prior |Publication |Historical |First |Distinct sources|Total |Observed )/.test(s)&&!s.includes('Score confidence:')&&!s.includes('score confidence')&&!/\bREL\b.*→/.test(s));
  if(substantive.length){found={id:b.id,title:b.title,author:b.author,ref,section,paragraphs:substantive,confidence:b.confidence};break;}
 }
 if(found)records.push(found);
}
fs.writeFileSync(dir+'/recovered-purpose.json',JSON.stringify(records,null,2)+'\n');
console.log({missing:inputs.filter(b=>!b.character).length,recovered:records.length,unresolved:inputs.filter(b=>!b.character).length-records.length});
for(const r of records.slice(0,70))console.log(r.id+'|'+r.title+'|'+r.paragraphs.join(' ').slice(0,280));
