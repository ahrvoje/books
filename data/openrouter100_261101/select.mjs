import fs from 'node:fs';
const dir='data/openrouter100_261101',q=JSON.parse(fs.readFileSync(dir+'/queue.json'));
const selections=[];
function add(kind,indices,mode='v2'){for(const i of indices){const key=`${kind}-${String(i).padStart(4,'0')}-google_gemini-2.5-flash-lite${mode?'-'+mode:''}:${kind}`,x=q.find(x=>x.key===key);if(!x)throw Error('Missing reviewed candidate '+key);selections.push(key);}}
// Explicit primary-assistant selections after inspecting the source annotations.
add('pages',[13,16,17,21,23,25,26,27,29,32,33,35,38,40,42,44,45,46,48,51,56,57,58,63,64,68,69,71,73,74,75,77,78,79,84,87,88,91,92,93,94,95,97,98,101,103,104,107,109,112]);
selections.push('reference-0552-google_gemini-2.5-flash-lite-v2:pages','reference-0554-google_gemini-2.5-flash-lite-v2:pages');
add('amazon',[3],'v3');
add('amazon',[6,10],'');
add('amazon',[13,14,15,26],'v2');
add('amazon',[34,36,37,42,48,53,61,68,70,74,77,82,89,94,99,107,111,120,127,128,132],'v3');
add('reference',[18],'v2');
add('reference',[101,122],'v3');
add('reference',[159],'v3');
add('reference',[504,517,529,540,541,543,552,563],'v2');
add('amazon',[180,199,209,212],'v4');
const existing=fs.existsSync(dir+'/extra-selections.json')?JSON.parse(fs.readFileSync(dir+'/extra-selections.json')):[];
selections.push(...existing);
const approved=selections.map(k=>q.find(x=>x.key===k));
if(approved.some(x=>!x))throw Error('Selection missing from queue');
if(new Set(approved.map(x=>x.id+':'+x.kind)).size!==approved.length)throw Error('Duplicate field');
fs.writeFileSync(dir+'/approved.json',JSON.stringify(approved,null,2)+'\n');
console.log({approved:approved.length,previousRetained:4,total:approved.length+4,byKind:Object.fromEntries(['amazon','pages','reference'].map(k=>[k,approved.filter(x=>x.kind===k).length]))});
