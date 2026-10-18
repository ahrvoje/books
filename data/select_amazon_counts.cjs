const fs=require('fs'),state=require('./amazon_verified_261018.json');
let changes=0;
for(const b of state.books){
 const candidates=b.attempts.filter(a=>a.verified&&!/Edizione (?!Inglese)|Wydanie: (?!Angielski)|NOT in English/.test((a.byline||'')+' '+(a.title||''))&&a.topCount!=null).sort((a,b)=>b.topCount-a.topCount);
 const a=candidates[0];if(!a||b.count!==null&&a.topCount<=b.count)continue;
 b.previousCountObservation={count:b.count,url:b.url};
 Object.assign(b,{count:a.globalCount??a.topCount,url:a.url,productTitle:a.title,byline:a.byline,evidence:a.evidence,verifiedAt:a.retrievedAt,sourceSnapshot:'Direct public product page',asin:a.url.match(/\/dp\/([A-Z0-9]{10})/i)?.[1],marketplace:new URL(a.url).hostname,confidence:'high',status:'verified matching Amazon product aggregate',identityNote:'Title and author match. Select the largest verified observed English-edition aggregate; never add counts across products or markets.'});changes++;
}
state.method='Verify the work, author, edition and language. Read Amazon’s aggregate rating control and require agreement with the global-rating summary when both exist. Use the largest verified observed English-edition aggregate when listings are fragmented, never a sum. Record the selected URL, ASIN, marketplace and snapshot. Missing counts remain unknown and receive the specified rule-15 fallback.';
state.editionSelection='Largest verified observed aggregate for the matching work in English; never sum. A series requires its own matching set listing. Translations, companion books, different volumes and summaries are rejected.';
for(const b of state.books)if(b.count!==null){b.marketplace=new URL(b.url).hostname;b.asin=b.url.match(/\/dp\/([A-Z0-9]{10})/i)?.[1];b.retrievedAt=b.verifiedAt||b.attemptedAt;}
fs.writeFileSync('data/amazon_verified_261018.json',JSON.stringify(state,null,2)+'\n');console.log(JSON.stringify({changes,observed:state.books.filter(b=>b.count!==null).length}));
