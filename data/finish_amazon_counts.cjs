const fs=require('fs'),{retrieve}=require('./collect_amazon.cjs');
const state=require('./amazon_verified_261018.json'),search=require('./amazon_edition_search_261018.json'),base=require('./deductions_baseline_261018.json');
const file='data/amazon_verified_261018.json',save=()=>fs.writeFileSync(file,JSON.stringify(state,null,2)+'\n');
const b=state.books.find(b=>b.id==='q0255'),r=require('./amazon_make_it_stick_261018.json');
if(b.count===null)Object.assign(b,r,{marketplace:'www.amazon.com',asin:'0674729013',verifiedAt:r.retrievedAt,confidence:'high',status:'verified matching Amazon product aggregate'});
const ballard=state.books.find(b=>b.id==='q0138'),a=ballard.attempts.find(a=>a.topCount===490);
if(ballard.count===null&&a)Object.assign(ballard,{count:490,url:a.url,productTitle:a.title,evidence:a.evidence,verifiedAt:a.retrievedAt,sourceSnapshot:'Direct public product page',marketplace:'www.amazon.it',asin:'1426220995',confidence:'high',status:'verified matching Amazon product aggregate',identityNote:'Amazon byline is n/a. Exact title and ISBN identify Ballard via publisher https://books.disney.com/book/into-the-deep/'});
const sMap=new Map(search.map(b=>[b.id,b])),baseMap=new Map(base.books.map(b=>[b.id,b]));
const missing=state.books.filter(b=>b.count===null),host=process.argv[2]||'www.amazon.it';let cursor=0,done=0;
async function main(){await Promise.all(Array.from({length:3},async()=>{while(cursor<missing.length){const b=missing[cursor++],original=baseMap.get(b.id).titleCell.match(/\/dp\/([A-Z0-9]{10})/i)?.[1];const candidates=[...new Set([original,...(sMap.get(b.id)?.candidates||[])].filter(x=>x&&/^\d{9}[\dX]$/.test(x)))].slice(0,4);for(const asin of candidates){const url='https://'+host+'/dp/'+asin;if(b.attempts.some(a=>a.url===url))continue;if(await retrieve(b,url))break;}done++;save();if(done%30===0||done===missing.length)console.log(JSON.stringify({done,of:missing.length,observed:state.books.filter(b=>b.count!==null).length}));}}));save();}
main().catch(e=>{console.error(e);process.exitCode=1;});
