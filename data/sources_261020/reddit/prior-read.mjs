import fs from 'node:fs';
const packet=JSON.parse(fs.readFileSync('data/sources_261020/reddit/packet.json'));
const start=Number(process.argv[2]||0),end=Number(process.argv[3]||packet.length);
for(let i=start;i<end;i++){
  const b=packet[i];
  if(!b?.prior)continue;
  const [review,anchorId]=b.prior.reviewAnchor.split('#');
  const file=`analysis/${review}`;
  const text=fs.readFileSync(file,'utf8');
  const anchor=anchorId?`<a id="${anchorId}"></a>`:b.title;
  let at=text.indexOf(anchor);
  if(!anchorId){const heading=text.split('\n').find(l=>/^#{2,4} /.test(l)&&l.toLowerCase().includes(b.title.toLowerCase()));if(heading)at=text.indexOf(heading);}
  if(at<0)at=text.toLowerCase().indexOf(b.title.toLowerCase());
  const next=anchorId?text.indexOf('<a id="',at+anchor.length):text.indexOf('\n### ',at+1);
  const section=at>=0?text.slice(at,next<0?at+3500:Math.min(next,at+6500)):'TITLE NOT FOUND';
  const current=fs.readFileSync(`analysis/${b.prior.currentReview}`,'utf8').split('\n').filter(l=>l.toLowerCase().includes(b.title.toLowerCase()));
  console.log(JSON.stringify({i,id:b.id,title:b.title,file,section,current,reason:b.prior.reason,rationale:b.prior.rationale,raw:b.prior.raw,T11:b.prior.T11,T12:b.prior.T12,periodEnd:b.prior.periodEnd,year:b.prior.year}));
}
