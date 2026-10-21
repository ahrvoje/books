import fs from 'node:fs';
import crypto from 'node:crypto';
const dir='data/books_guru_261021/';
const slugs=['bill-gates','jeff-bezos','warren-buffett','elon-musk','larry-ellison','steve-jobs','nassim-nicholas-taleb','ray-dalio','steven-pinker','andy-frisella','justin-kan','mukesh-ambani','vitalik-buterin','carl-icahn','marc-andreessen','steven-bartlett','charlie-munger','julie-zhuo','kevin-simler','balaji-srinivasan','bill-gurley','alex-hormozi','andrej-karpathy','ken-griffin','david-friedberg','blas-moros'];
const entities={amp:'&',quot:'"',apos:"'",lt:'<',gt:'>',nbsp:' ',rsquo:'’',lsquo:'‘',ldquo:'“',rdquo:'”',ndash:'–',mdash:'—',hellip:'…',eacute:'é',aacute:'á',uuml:'ü',ouml:'ö',iacute:'í',times:'×'};
const unknownEntities=new Set();
function decode(s){return s.replace(/&(#x[0-9a-f]+|#[0-9]+|[a-z]+);/gi,(m,k)=>k[0]==='#'?String.fromCodePoint(parseInt(k.slice(k[1]?.toLowerCase()==='x'?2:1),k[1]?.toLowerCase()==='x'?16:10)):entities[k]??(unknownEntities.add(k),m));}
const norm=s=>String(s||'').normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/&/g,' and ').replace(/[^a-z0-9]+/g,' ').trim().replace(/^(the|a|an) /,'');
function parse(html){const root={tag:'root',attrs:{},children:[]};const stack=[root];for(const m of html.matchAll(/<!--[\s\S]*?-->|<![^>]*>|<\/?[a-z][^>]*>|[^<]+/gi)){const t=m[0];if(t.startsWith('<!'))continue;if(t.startsWith('</')){const tag=t.slice(2).match(/^\w+/)?.[0].toLowerCase();let i=stack.length-1;while(i>0&&stack[i].tag!==tag)i--;if(i>0)stack.length=i;continue;}if(t[0]==='<'){const tag=t.slice(1).match(/^[\w-]+/)[0].toLowerCase(),attrs={};for(const a of t.slice(tag.length+1).matchAll(/([\w:-]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+)))?/g))attrs[a[1]]=decode(a[2]??a[3]??a[4]??'');const node={tag,attrs,children:[]};stack.at(-1).children.push(node);if(!/^(area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr)$/.test(tag)&&!t.endsWith('/>'))stack.push(node);}else stack.at(-1).children.push(decode(t));}return root;}
function all(n,p,out=[]){if(typeof n==='string')return out;if(p(n))out.push(n);for(const c of n.children)all(c,p,out);return out;}
const text=n=>typeof n==='string'?n:n?.children.map(text).join(' ')??'';
const clean=n=>text(n).replace(/\s+/g,' ').trim();
const cls=(n,c)=>(n.attrs.class||'').split(/\s+/).includes(c);
const byClass=(n,c)=>all(n,v=>cls(v,c))[0];
const abs=s=>s?new URL(s,'https://books-guru.com').href:null;
const sources=[],appearances=[];
for(let i=0;i<slugs.length;i++){
  const slug=slugs[i],id=i+148,url='https://books-guru.com/experts/'+slug;
  const pages=[slug,...(slug==='bill-gates'?['bill-gates-page1']:[])];let local=[];let advertisedCount=null;let lastNext=[];
  for(const page of pages){const captureFile=dir+'raw/'+page+'.html',html=fs.readFileSync(captureFile,'utf8'),dom=parse(html),meta=JSON.parse(fs.readFileSync(dir+'raw/'+page+'.meta.json','utf8'));
    advertisedCount=Number(clean(byClass(dom,'books-count')).match(/\d+/)?.[0]);
    const cards=all(dom,n=>n.tag==='article'&&cls(n,'node--view-mode-expert-recommended-book'));
    lastNext=all(dom,n=>n.tag==='a'&&n.attrs.rel==='next').map(n=>abs(n.attrs.href));
    for(let j=0;j<cards.length;j++){
      const card=cards[j],img=all(card,n=>n.tag==='img')[0];
      const title=clean(byClass(card,'field--name-title')),author=clean(byClass(card,'field--name-field-book-author'));
      const productURL=all(card,n=>n.tag==='a'&&/View on Amazon/i.test(clean(n)))[0]?.attrs.href??null;
      const quotes=all(card,n=>n.tag==='blockquote').map(q=>({author:clean(byClass(q,'quote-author')),text:clean(byClass(q,'field--name-field-recommendation-text')),originalSourceURLs:all(q,n=>n.tag==='a').map(a=>abs(a.attrs.href)).filter(Boolean)}));
      const ratingField=byClass(card,'field--name-field-amazon-ratings-votes');
      const cardOccurrence={sourceId:id,sourceURL:url,capturedPageURL:meta.url,captureFile,position:local.length+1,cardIndex:j+1,title,author,imageTitle:img?.attrs.title??null,imageAlt:img?.attrs.alt??null,productURL,bookPageURLs:all(card,n=>n.tag==='a'&&n.attrs.href?.includes('#book-experts-recommendations')).map(n=>abs(n.attrs.href)),quotes,originalRecommendationURLs:[...new Set(quotes.flatMap(q=>q.originalSourceURLs))],description:clean(byClass(card,'field--name-field-preview-text')),sourceReportedRating:{value:Number(clean(byClass(card,'field--name-field-amazon-rating')))||null,count:Number(ratingField?.attrs.content)||null,label:clean(ratingField),claimedProvider:'Amazon',status:'unverified_third_party_snapshot',retrievedAt:meta.retrievedAt,note:'Copied from Books Guru; neither its date of Amazon retrieval nor the matching edition aggregate has been verified. Not usable as an audited Amazon count.'},metadataStatus:'unverified_third_party_source; source descriptions may be mismatched'};
      local.push(cardOccurrence);appearances.push(cardOccurrence);
    }
  }
  sources.push({id,slug,url,label:slug.split('-').map(s=>s[0].toUpperCase()+s.slice(1)).join(' ')+' — Books Guru recommendations',advertisedCount,capturedCount:local.length,captureFile:dir+'raw/'+slug+'.html',captureFiles:pages.map(s=>dir+'raw/'+s+'.html'),lastPageHasNext:lastNext.length>0,complete:advertisedCount===local.length&&!lastNext.length,completenessBasis:'All book article cards in each captured server-rendered HTML page; followed the observed rel=next pagination link until absent. No additional card count inferred from visible browser limits.'});
}
const groups=new Map();for(const a of appearances){const key=norm(a.title)+'|'+norm(a.author);if(!groups.has(key))groups.set(key,{id:'bg'+crypto.createHash('sha256').update(key).digest('hex').slice(0,10),title:a.title,author:a.author,sources:[],occurrences:[],priorId:null,priorStatus:null,priorRefs:[]});const b=groups.get(key);b.occurrences.push(a);if(!b.sources.includes(a.sourceId))b.sources.push(a.sourceId);}
const books=[...groups.values()].sort((a,b)=>a.title.localeCompare(b.title));
fs.writeFileSync(dir+'sources.json',JSON.stringify(sources,null,2)+'\n');
fs.writeFileSync(dir+'inventory.json',JSON.stringify({collectedAt:new Date().toISOString(),sourceCount:sources.length,appearanceCount:appearances.length,uniqueCardBooks:books.length,books,limitations:['Expert recommendations and descriptions are third-party claims. Original recommendation links are recorded but not all independently verified.','Quoted auxiliary book mentions are to be inspected separately; no external link is expanded into a new candidate source.'],unknownEntities:[...unknownEntities]},null,2)+'\n');
fs.writeFileSync(dir+'quotes.json',JSON.stringify(appearances.filter(a=>a.quotes.length).map(a=>({sourceId:a.sourceId,title:a.title,author:a.author,quotes:a.quotes})),null,2)+'\n');
console.log(JSON.stringify({sources:sources.map(s=>[s.id,s.advertisedCount,s.capturedCount,s.complete]),appearances:appearances.length,unique:books.length,unknownEntities:[...unknownEntities]},null,2));
