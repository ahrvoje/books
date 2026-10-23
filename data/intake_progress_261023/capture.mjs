import fs from 'node:fs';
const dir='data/intake_progress_261023';
fs.mkdirSync(dir+'/raw',{recursive:true});
const urls=[
'https://blog.rootsofprogress.org/bibliography',
'https://edconway.substack.com/p/further-reading',
'https://www.edmundconway.com/material-world-bibliography/',
'https://patrickcollison.com/bookshelf',
'https://guides.loc.gov/engineering-in-history/general-history',
'https://guides.loc.gov/engineering-in-history/mechanical-engineering',
'https://www.construction-physics.com/p/reading-list-122824',
'https://cip2.gmu.edu/2013/04/12/some-recommended-books-on-scientists-inventors-and-innovators/',
'https://threadreaderapp.com/thread/1476223664332976135.html',
'https://fivebooks.com/best-books/george-dyson-on-the-origins-of-computing/',
'https://fivebooks.com/best-books/the-history-of-physics-mark-wolverton/',
'https://fivebooks.com/best-books/history-mathematics-robin-wilson/',
'https://fivebooks.com/best-books/industrial-revolution-sheilagh-ogilvie/',
'https://fivebooks.com/best-books/engineering-ante-shoda/',
'https://fivebooks.com/best-books/history-science-matthew-cobb/',
'https://news.ycombinator.com/item?id=17204467',
'https://www.reddit.com/r/engineering/comments/bs2rtp/any_good_reads_on_the_history_of_engineering/',
'https://www.reddit.com/r/AskEngineers/comments/1ay7rjs/any_books_covering_an_invention_its_process_of/',
'https://www.reddit.com/r/AskHistorians/comments/1e939kj/whatre_some_books_to_start_studying_through/',
'https://www.reddit.com/r/suggestmeabook/comments/17gvgkq/im_looking_for_nonfiction_books_about_the_history/',
'https://www.reddit.com/r/Semiconductors/comments/1bhca39/good_books_about_semiconductors/',
'https://www.reddit.com/r/nonfictionbooks/comments/1vutaba/books_like_chip_war/'
];
const norm=u=>{let x=new URL(u);for(const k of [...x.searchParams.keys()])if(k.startsWith('utm_'))x.searchParams.delete(k);return x.href.replace(/\/$/,'');};
const ledger=fs.readFileSync('SOURCES.md','utf8');
const prior=[...ledger.matchAll(/^\| (\d+) \|.*?\]\((https?:\/\/[^)]+)\)/gm)].map(m=>({source:+m[1],url:m[2]}));
let next=Math.max(...prior.map(x=>x.source))+1;
const inputs=urls.map(url=>({source:prior.find(p=>norm(p.url)===norm(url))?.source??next++,url,existing:prior.some(p=>norm(p.url)===norm(url))}));
fs.writeFileSync(dir+'/inputs.json',JSON.stringify(inputs,null,2));
async function get(url,file){try{let r=await fetch(url,{signal:AbortSignal.timeout(35000)});let t=await r.text();fs.writeFileSync(dir+'/raw/'+file,t);return {url,status:r.status,file,bytes:t.length};}catch(e){return {url,error:String(e)}}}
const results=await Promise.all(inputs.map(async s=>{let captures=[await get(s.url,s.source+'.html')];if(s.url.includes('reddit.com'))captures.push(await get(s.url+'.json?limit=500&raw_json=1',s.source+'.json'));if(s.source===244)captures.push(await get('https://hn.algolia.com/api/v1/items/17204467',s.source+'.json'));return {...s,captures};}));
fs.writeFileSync(dir+'/capture.json',JSON.stringify(results,null,2));
console.log(results);
