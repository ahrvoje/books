import fs from 'node:fs';
for(const i of process.argv.slice(2)){
 const file=`data/sources_261020/hn/raw/product-${i}.html`;
 if(!fs.existsSync(file))continue;
 const s=fs.readFileSync(file,'utf8');
 const at=s.indexOf('id="detailBullets_feature_div"');
 const text=s.slice(at,at+18000).replace(/<script[\s\S]*?<\/script>/g,'').replace(/<[^>]+>/g,' ').replace(/\s+/g,' ');
 console.log(`${i} ${text.slice(0,1800)}`);
}
