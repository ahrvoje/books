import fs from 'node:fs';
import zlib from 'node:zlib';
import {amazonFields} from '../pages_density_261021/collect.mjs';
const captures=JSON.parse(fs.readFileSync('data/source_review_261021/ratings.json'));
const out=captures.map(r=>{const a=r.accepted,h=zlib.gunzipSync(fs.readFileSync(a.rawFile)).toString(),f=amazonFields(h),rating=h.match(/id="acrPopover"[\s\S]{0,800}?title="([^"]+)/)?.[1]?.match(/([0-5]\.[0-9]) out of 5/)?.[1];return {id:r.id,...f,rating:rating?Number(rating):null};});
fs.writeFileSync('data/source_review_261021/edition-fields.json',JSON.stringify(out,null,2)+'\n');
console.log(out.map(({id,title,format,pages,year,language,rating})=>({id,title,format,pages,year,language,rating})));
