import fs from 'node:fs';
import {packet} from './reddit-save.mjs';
const ids={0:'9780060959470',1:'9780593655078',2:'9781541758643',3:'9781501189562',4:'9780593716625',5:'9780553418835',6:'9780316453684',7:'9781668072240',8:'9780807014271',9:'9780593469309',11:'9781501130793',13:'9780593594988',15:'9780452295544',16:'9780593716328',17:'9781620978580',18:'9780525576716',19:'9780743456081'};
const jobs=Object.entries(ids).map(([i,isbn])=>{
 const s=isbn.slice(3,12),k=(11-[...s].reduce((v,c,j)=>v+Number(c)*(10-j),0)%11)%11;
 return {index:1000+Number(i),asin:s+(k===10?'X':k),title:packet[i].title,author:Number(i)===16?'Isabelle Boemeke':Number(i)===7?'Robin Wall Kimmerer':packet[i].author};
});
fs.writeFileSync('data/sources_261020/hn/reddit-product-jobs.json',JSON.stringify(jobs,null,2));
