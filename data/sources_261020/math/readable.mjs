import fs from 'node:fs';
const dir='data/sources_261020/math/';
const entities={amp:'&',lt:'<',gt:'>',quot:'"',apos:"'",nbsp:' ',ndash:'–',mdash:'—',rsquo:'’',lsquo:'‘',ldquo:'“',rdquo:'”',hellip:'…',eacute:'é',ouml:'ö'};
export function clean(s){
 return s.replace(/<(script|style)[\s\S]*?<\/\1>/gi,'').replace(/<a\b[^>]*href=["']([^"']+)["'][^>]*>/gi,' [LINK $1] ').replace(/<img\b[^>]*>/gi,x=>' [IMAGE '+x.replace(/[<>]/g,'')+'] ').replace(/<\/?(p|div|li|h[1-6]|br|tr)\b[^>]*>/gi,'\n').replace(/<[^>]*>/g,'').replace(/&#(x[0-9a-f]+|\d+);/gi,(_,n)=>String.fromCodePoint(n[0]==='x'?parseInt(n.slice(1),16):Number(n))).replace(/&([a-z]+);/gi,(s,n)=>entities[n]??s).split('\n').map(l=>l.replace(/\s+/g,' ').trim()).filter(Boolean).join('\n');
}
for(const id of [136,139])fs.writeFileSync(dir+id+'-readable.txt',clean(fs.readFileSync(dir+'raw/'+id+'-page.html','utf8')));
for(const id of [137,138]){
 const lines=new Map();
 for(const name of fs.readdirSync(dir+'raw').filter(n=>n.startsWith(id+'-web-'))){
  const raw=JSON.parse(fs.readFileSync(dir+'raw/'+name,'utf8'));
  for(const m of raw.matchAll(/L(\d+):\s*([\s\S]*?)(?=L\d+:|$)/g))lines.set(Number(m[1]),m[2].trim());
 }
 fs.writeFileSync(dir+id+'-readable.txt',[...lines].sort(([a],[b])=>a-b).map(([n,s])=>`L${n}: ${s}`).join('\n'));
 console.log(id,'lines',lines.size,'min',Math.min(...lines.keys()),'max',Math.max(...lines.keys()));
}
const out=[];
for(const kind of ['question','answers','comments','answer-comments']){
 const path=dir+`raw/140-${kind}-api.json`;
 if(!fs.existsSync(path))continue;
 const j=JSON.parse(fs.readFileSync(path,'utf8'));
 for(const item of j.items){
  const locator=item.answer_id||item.comment_id||item.question_id;
  out.push(`\n## ${kind} ${locator} ${item.title||''}\n${clean(item.body)}`);
  if(item.post_id)out.push('Parent post '+item.post_id);
 }
}
fs.writeFileSync(dir+'140-readable.txt',out.join('\n'));
