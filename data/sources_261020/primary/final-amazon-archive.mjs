import fs from 'node:fs';
import zlib from 'node:zlib';
const packet=JSON.parse(fs.readFileSync('data/sources_261020/math/transfer-root-final.json','utf8'));
for(const b of packet.filter(b=>b.priorEnrichment?.edition?.source?.rawFile?.endsWith('.html.gz'))){
 const file=b.priorEnrichment.edition.source.rawFile,s=zlib.gunzipSync(fs.readFileSync(file)).toString('utf8');
 console.log(JSON.stringify({id:b.id,file,title:s.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1],
 byline:s.match(/id="bylineInfo"[\s\S]{0,3000}/)?.[0]?.replace(/<[^>]+>/g,' ').replace(/\s+/g,' ').slice(0,500),
 counts:[...s.matchAll(/data-hook="total-review-count"[\s\S]{0,600}/g)].map(m=>m[0].replace(/<[^>]+>/g,' ').replace(/\s+/g,' ').slice(0,250))}));
}
