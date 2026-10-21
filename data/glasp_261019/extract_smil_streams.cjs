const fs=require('fs'),zlib=require('zlib');
const pdf=fs.readFileSync(__dirname+'/research_smil_sample.pdf');
const text=pdf.toString('latin1'),parts=[];
for(const m of text.matchAll(/stream\r?\n/g)){
 const start=m.index+m[0].length,end=text.indexOf('endstream',start);
 try {const s=zlib.inflateSync(pdf.subarray(start,end)).toString('latin1');if(s.includes(' BT')||s.includes('\nBT')||s.includes('beginbfchar'))parts.push(s)}catch{}
}
fs.writeFileSync(__dirname+'/research_smil_streams.txt',parts.join('\n'));
console.log(parts.length,parts.map(s=>s.length));
for(const s of parts)if(s.includes('withdrawals'))console.log(s.slice(Math.max(0,s.indexOf('withdrawals')-1800),s.indexOf('withdrawals')+1800));
