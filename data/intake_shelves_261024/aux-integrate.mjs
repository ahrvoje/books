import fs from'node:fs';import crypto from'node:crypto';import assert from'node:assert/strict';import{dir,read,write}from'./capture.mjs';
const a=read(dir+'/auxiliary-audit.json'),rows=read(dir+'/rows.json').filter(r=>r.auxiliaryIndex===undefined),fresh=read(dir+'/triaged.json'),c=read(dir+'/compiled.json'),all=[...c.currentBooks,...c.exclusions],over=read(dir+'/metadata-overrides.json');
for(const r of rows)if(r.newId==='shelf-ab58477ee9b6'){r.id='bg6f639c228c';delete r.newId;r.status='recommended';}
const map={0:'bg6f639c228c',10:'shelf-9a62ccb82960',11:'q0748',17:'n_last_lion_series',24:'g0987',31:'g0987',47:'g0433',50:'shelf-81dc74bef3ae',69:'g1116',72:'shelf-2c49b8112d78',74:'intake-0291',75:'shelf-a6aa5838c542',80:'h0961',84:'q0605',91:'shelf-86165f9c5a2f',94:'bg0cdd5d067e',134:'bg198c521a8a',135:'shelf-86165f9c5a2f',136:'shelf-a6aa5838c542',141:'bg6f639c228c',142:'bgf077c854c9',144:'bg12abbc11fa',158:'shelf-8b638923d2fc',162:'shelf-2c49b8112d78',185:'nfd3d086946',189:'shelf-a9f899cd78a4',203:'bg0cdd5d067e',211:'g0987',217:'shelf-31e9d1c2e1e1',224:'g0987',226:'g1092',242:'bg6a496022d3',248:'shelf-ad4baf0155d4',255:'bgf077c854c9',258:'shelf-a5b1c6c44e26',261:'shelf-31e9d1c2e1e1',262:'shelf-81dc74bef3ae',282:'bg6a496022d3',295:'q0162',304:'shelf-a17891d75aac',334:'shelf-22d40b0fdf92',347:'shelf-30ae9091a37f',351:'bg6a496022d3',349:'shelf-7fe01a2a2155',359:'shelf-f838c4f482ce'};
// The four already-nominated Caro volumes cover the linked box set; author-store links are not works.
const skip=new Set([314,329,342]);
const specs=[
[38,'Tested Advertising Methods','John Caples','H3: professional copywriting curriculum, with headline formulas, paragraph construction, layout and response-testing procedures. Contents inspected: https://books.google.com/books/about/Tested_Advertising_Methods.html?id=kB7ZAAAAMAAJ'],
[40,'How to Advertise','Kenneth Roman; Jane Maas; Martin Nisenholtz','H3: professional advertising instruction, including execution and campaign procedures. Publisher describes a practical guide: https://us.macmillan.com/books/9780312340216/howtoadvertise/'],
[41,'Reality in Advertising','Rosser Reeves','H3: advertising practice manual on campaign construction, copy changes and product claims. Review explicitly identifies the manual purpose: https://www.kirkusreviews.com/book-reviews/a/rosser-reeves/reality-in-advertising/'],
[42,'The Art of Writing Advertising','Denis Higgins'],
[43,'The 100 Greatest Advertisements: Who Wrote Them and What They Did','Julian Lewis Watkins'],
[56,'Napoleon','Paul Johnson'],
[70,'No More Champagne: Churchill and His Money','David Lough'],
[176,'The History of Cuba in 50 Events','Henry Freeman'],
[181,'Hit Men: Power Brokers and Fast Money Inside the Music Business','Fredric Dannen'],
[208,"You Don’t Know Jack… or Jerry: From Small Town Roots to Financial Software Giant",'Robert O. Babcock'],
[209,"One Man’s Medicine: An Autobiography of Professor Archie Cochrane",'Archie Cochrane; Max Blythe'],
[210,'Effectiveness and Efficiency: Random Reflections on Health Services','A. L. Cochrane'],
[236,'Mad, Bad and Dangerous to Know','Ranulph Fiennes'],
[237,'Shackleton: The Biography','Ranulph Fiennes'],
[241,'Bound for Glory','Woody Guthrie'],
[247,"How Brands Grow: What Marketers Don’t Know",'Byron Sharp'],
[267,'Experimental Researches in Electricity','Michael Faraday','H3: collected specialist experimental reports, apparatus, measurements and technical results; reconstructing historical electrical research methods is central. Historical importance does not override the reference exclusion. https://openlibrary.org/works/OL2008499W'],
[269,'The Toilers of the Sea','Victor Hugo','H2: novel. The source purchase link names Hugo; maritime engineering content does not override fiction.'],
[283,'The Essential Writings of Vannevar Bush','Vannevar Bush; edited by G. Pascal Zachary'],
[286,'Jackie Robinson: My Own Story','Jackie Robinson; Wendell Smith'],
[290,'Russell Rules: 11 Lessons on Leadership from the Twentieth Century’s Greatest Winner','Bill Russell; David Falkner'],
[332,'Duveen: A Life in Art','Meryle Secrest'],
[333,'Secrets of an Art Dealer','James Henry Duveen'],
[335,'The Artful Partners: The Secret Association of Bernard Berenson and Joseph Duveen','Colin Simpson'],
[336,"Front Row: Anna Wintour: The Cool Life and Hot Times of Vogue’s Editor in Chief",'Jerry Oppenheimer'],
[337,'As It Happened: A Memoir','William S. Paley'],
[340,'The Story of Civilization','Will Durant; Ariel Durant'],
[343,'An American Saga: Juan Trippe and His Pan Am Empire','Robert Daley'],
[345,'Rolex Jubilee: Vade Mecum','Hans Wilsdorf; Alfred Chapuis; Eugène Jaquet'],
[356,'Beat the Dealer: A Winning Strategy for the Game of Twenty-One','Edward O. Thorp','H3: specialist blackjack strategy training, including card counting and betting procedures; mathematical interest does not override its training purpose. Source-linked product ISBN0394703103.']
];
const newMap=new Map();for(const[i,title,author,note]of specs){assert(a[i],i);let id='shelf-'+crypto.createHash('sha256').update(title+'|'+author).digest('hex').slice(0,12);newMap.set(i,id);let b={id,title,author,sources:[261],mentions:[a[i]],...(note?{status:'excluded',note,confidence:'high'}:{})};let f=dir+'/aux-research/'+i+'.json';if(fs.existsSync(f)){let r=read(f),doc=r.catalog?.docs?.find(d=>d.author_name?.some(n=>author.includes(n)||n.includes(author.split(';')[0])));if(doc)b.metadata={key:doc.key,isbn:doc.isbn||[]};let asin=r.resolved?.match(/\/(?:dp|product)\/([A-Z0-9]{10})/)?.[1];if(asin)over[title]={...over[title],purchaseUrl:'https://www.amazon.com/dp/'+asin,evidence:['https://www.founderspodcast.com/episodes/'+a[i].episode]};}if(!fresh.some(x=>x.id===id))fresh.push(b);else if(note)Object.assign(fresh.find(x=>x.id===id),b);}
newMap.set(289,newMap.get(286));
// Catalog query short titles can select another author: explicitly override these verified works.
for(const[i,key]of [[42,'OL1812211W'],[209,'OL7223118W'],[236,'OL8051786W'],[332,'OL1858538W'],[345,'OL7428141W']])fresh.find(b=>b.id===newMap.get(i)).metadata={key:'/works/'+key};
let unresolved=[];for(let i=0;i<a.length;i++){let x=a[i];if(skip.has(i))continue;let id=map[i]||newMap.get(i)||(x.hits.length===1?x.hits[0].id:null);if(!id){unresolved.push({i,...x});continue;}if(rows.some(r=>r.auxiliaryIndex===i))continue;let b=all.find(b=>b.id===id)||fresh.find(b=>b.id===id);assert(b,'Missing '+id);rows.push({source:261,title:x.title,author:b.author,url:x.url,context:'Additional book link in '+x.episode,auxiliaryIndex:i,...(id.startsWith('shelf-')?{newId:id}:{id,status:b.status||'excluded'})});}
write(dir+'/triaged.json',fresh);write(dir+'/rows.json',rows);write(dir+'/metadata-overrides.json',over);write(dir+'/aux-unresolved.json',unresolved);console.log({new:specs.length,unresolved:unresolved.map(x=>[x.i,x.title])});
