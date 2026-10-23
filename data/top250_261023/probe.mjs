import fs from 'node:fs';
import {amazonFields,clean} from '../pages_density_261021/collect.mjs';
const host=process.argv[2]||'www.amazon.com.au',url='https://'+host+'/dp/0691217025';
const r=await fetch(url,{signal:AbortSignal.timeout(25000)}),text=await r.text();
const out={url,status:r.status,retrieved:new Date().toISOString(),text};
fs.writeFileSync('data/top250_261023/'+host+'.json',JSON.stringify(out));
console.log({status:r.status,bytes:text.length,...amazonFields(text),count:clean(text.match(/<span[^>]*data-hook="total-review-count"[^>]*>[\s\S]*?<\/span>/)?.[0]),blocked:/captcha|validateCaptcha|robot check/i.test(text)});
