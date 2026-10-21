import fs from 'node:fs';
import assert from 'node:assert/strict';
const dir='data/sources_261020/primary/',read=f=>JSON.parse(fs.readFileSync(dir+f,'utf8'));
const packet=read('math-packet.json'),results=read('math-assessments.json'),byIndex=new Map(packet.map(b=>[b.packetIndex,results.find(a=>a.id===b.id)]));
const candidates=read('math-edition-candidates.json'),research=[];
for(const file of fs.readdirSync(dir).filter(f=>/^math-research-\d+\.json$/.test(f))){
 const d=read(file);d.books.forEach((b,j)=>{
  for(const raw of String(d.results[j].value||'').split(/-{10,}/)){
   const text=raw.trim(),url=text.match(/^[^\n]{0,650} \((https?:\/\/[^\n]+)\)\n/)?.[1];
   if(url)research.push({i:b.index,url,text,file:dir+file});
  }
 });
}
function edition(i,pages,year,id,token,format='Format not specified in catalog',note=''){
 const a=byIndex.get(i);assert(a.raw,i+' unscored');
 const r=research.find(r=>r.i===i&&(r.url.includes(token)||r.text.includes(token)));assert(r,i+' evidence '+token);
 a.enrichment??={};a.enrichment.domains??={};
 a.enrichment.edition={pages,year,id,url:r.url,retrieved:'2026-10-20',language:'English',format,confidence:'moderate',
  notes:'One identified edition; page extent is not a work-level average. '+note,source:{capture:r.file}};
 a.evidence.push(r.url);
 if(id.startsWith('ISBN:')){
  const isbn=id.slice(5).replace(/-/g,'');let asin=isbn;
  if(isbn.length===13&&isbn.startsWith('978')){
   const s=isbn.slice(3,12),v=(11-[...s].reduce((n,c,j)=>n+Number(c)*(10-j),0)%11)%11;asin=s+(v===10?'X':v);
  }
  if(asin.length===10){
   a.purchaseUrl='https://www.amazon.de/dp/'+asin;
   a.purchaseFormat=format+'; ISBN-based Amazon.de locator. Availability and the product-page binding were not verified.';
  }
 }
}
// Each ISBN below was checked against the candidate title. Unrelated same-author
// results (notably Peebles, Waldrop, Hawking, Kline and Trinity) are not selected.
const selected={
 99:'9780374176815',101:'9780300273731',102:'9780300237139',103:'9780060935580',
 109:'9781568582320',110:'9780465096831',114:'9780593467008',115:'9781982103552',
 120:'9780691169187',121:'9780307276605',122:'9780547577579',127:'9780691232287',
 128:'9780393330168',130:'9781541674783',133:'9780465024377',134:'9780007152513',
 137:'9780553385465',145:'9780307948489',147:'9780748124152',150:'9780300223392',
 151:'9780008390648',158:'9780691139685',159:'9780465093120',160:'9781627790062',
 162:'9780393080544',163:'9780465097586',166:'9780879422387',167:'9780151012787',
 169:'9781621573388',173:'9781559723299',174:'9780099116417',175:'9781541702974',
 178:'9780395321317',180:'9780195014969',182:'9780786863624',183:'9780465069958',
 184:'9780767908153',185:'9780452285255',188:'9780547517667',189:'9780008601119',
 192:'9781525305863',194:'9780743274623',195:'9780374707149',196:'9780385523110',
 197:'9780099289920',198:'9780375412882',199:'9780525432173',200:'9780307275172',
 202:'9781400033720',203:'9780713996999',204:'9780393867305',205:'9780307400710',
 208:'9780393066272',212:'9781605984728',214:'9780393051650',217:'9780470486214'
};
for(const [idx,isbn] of Object.entries(selected)){
 const i=+idx,c=candidates.find(c=>c.index===i&&c.isbn.includes(isbn));assert(c,i+' ISBN');
 const year=Number(c.publisher.match(/\b(1[89]\d\d|20\d\d)\b/)?.[1]);assert(year&&year<=2026,i+' edition year');
 edition(i,c.pages,year,'ISBN:'+isbn,c.url);
}
edition(90,448,2008,'GoogleBooks:Bos_AQAAIAAJ','Bos_AQAAIAAJ');
edition(91,384,2018,'ISBN:9780465096060','9780465096060','ebook','The selected publisher product is the ebook; the linked paperback is a separate product.');
edition(92,305,2010,'ISBN:9780374239664','https://iucat.iu.edu/iub/9277560','hardcover','Library pagination for the English edition; original German production is 2005.');
edition(93,464,2009,'ISBN:9781400095261','the-age-of-entanglement-by-louisa-gilder','paperback','Publisher paperback extent; the ebook is listed as 352 pages.');
edition(98,256,2000,'GoogleBooks:0xNvJqQEEvMC','0xNvJqQEEvMC');
edition(100,320,2023,'ISBN:9780241544112','Penguin-General-Autumn-2023-catalogue.pdf','hardcover');
edition(108,272,2008,'ISBN:9781400079964','uncertainty-by-david-lindley','paperback');
edition(111,352,2014,'GoogleBooks:gxN0AwAAQBAJ','gxN0AwAAQBAJ');
edition(112,256,2022,'ISBN:9780593328897','helgoland-by-carlo-rovelli','paperback');
edition(116,400,2021,'ISBN:9780385545655','how-to-make-an-apple-pie-from-scratch-by-harry-cliff','hardcover');
edition(117,256,2023,'ISBN:9780262547239','bright-galaxies-dark-matter-and-beyond-by-ashley-jean-yeager','paperback');
edition(118,352,2017,'GoogleBooks:AeY3DwAAQBAJ','AeY3DwAAQBAJ');
edition(119,288,2000,'ISBN:9780471329695','9780471329695');
edition(124,304,2012,'ISBN:9780307278463','cycles-of-time-by-roger-penrose','paperback');
edition(152,304,2022,'ISBN:9781541620803','9781541620803','hardcover');
edition(153,400,2013,'ISBN:9780142180303','the-particle-at-the-end-of-the-universe-by-sean-carroll','paperback');
edition(154,466,2011,'ISBN:9780062096890','9780062096890','ebook','This digital catalog extent differs from the 464-page hardcover.');
edition(155,304,2012,'ISBN:9780307591821','present-at-the-creation-by-amir-d-aczel','paperback','Updated edition includes Higgs discovery; original production 2010.');
edition(164,310,2012,'ISBN:9780230340602','A-85UZe4J5MC','Format not specified in catalog','Selected 2012 account ends in 2011; the longer 2017 revision is not substituted.');
edition(168,880,2014,'ISBN:9780385722049','robert-oppenheimer-by-ray-monk','paperback');
edition(170,400,2015,'ISBN:9780465069989','https://www.hachettebookgroup.com/titles/frank-close/half-life/9780465069989/','hardcover');
edition(171,528,2020,'ISBN:9780241309896','https://www.penguin.co.uk/books/305810/trinity-by-close-frank/9780241309896','paperback');
edition(186,400,2007,'ISBN:9780452288539','unknown-quantity-by-john-derbyshire','paperback');
edition(193,128,2018,'ISBN:9781851244881','spring2018_UChicagoPress_opt.pdf','hardcover','Publisher total extent 128; Google’s 114 is a different pagination convention for the same ISBN.');
edition(201,184,2017,'ISBN:9780262533416','https://mitpress.mit.edu/9780262533416/the-character-of-physical-law/','paperback');
edition(206,336,2011,'ISBN:9780802715135','https://www.margaretwertheim.com/physics-from-the-fringe-book','hardcover');
edition(209,352,2014,'ISBN:9780142181041','the-universe-in-the-rearview-mirror-by-dave-goldberg','paperback');
edition(213,584,2011,'ISBN:9781605981970','https://www.simonandschuster.com/books/The-First-War-of-Physics/Jim-Baggott/9781605981970','paperback');
edition(218,592,2012,'ISBN:9780316202305','https://www.hachettebookgroup.com/titles/annie-jacobsen/area-51/9780316202305/','paperback');
edition(113,175,2007,'ISBN:9781840468502','eojcGAAACAAJ');
edition(123,464,2010,'ISBN:9780452296541','from-eternity-to-here-by-sean-carroll','paperback');
edition(125,208,2012,'ISBN:9780553384666','the-grand-design-by-stephen-hawking','paperback');
edition(126,464,2011,'ISBN:9780307278128','the-hidden-reality-by-brian-greene','paperback');
edition(138,440,2020,'ISBN:9780691196022','UPG_A20_Physics.pdf','hardcover','Publisher distributor gives 440 total pages; Google’s 403 is numbered-text pagination, not the printed extent.');
edition(142,350,2020,'ISBN:9781108819053','https://www.cambridge.org/highereducation/books/gravitys-fatal-attraction','paperback','Publisher product specifies 350 pages and November 2020 release; front matter carries the 2021 imprint. Retail listings of 322 pages conflict and are not selected.');
edition(143,163,2023,'ISBN:9783030982164','10.1007/978-3-030-98214-0','paperback','Publisher extent XI + 152 pages is represented as 163 total pages; original ebook/hardcover production is 2022.');
edition(144,368,2019,'GoogleBooks:1i3TEQAAQBAJ','1i3TEQAAQBAJ');
edition(146,336,2014,'ISBN:9780393351378','wwnorton.co.uk/books/9780393351378','paperback');
edition(148,256,2016,'ISBN:9780300219661','yalebooks.yale.edu/book/9780300219661','paperback');
edition(149,480,2009,'ISBN:9780316016414','hbgacademic.com/titles/leonard-susskind','paperback');
edition(165,480,2014,'ISBN:9781846883668','almabooks.com/product/travelling-to-infinity-2','paperback','Retitled revision of the 1999 memoir; the film tie-in does not reset original production age.');
edition(179,376,1982,'ISBN:0195030850','old.maa.org/node/105708','paperback','MAA gives 376-page printed extent; catalog records of 366 refer to numbered text.');
edition(211,592,2014,'ISBN:9780316221054','9780316221054');
edition(215,480,2012,'ISBN:9780307473332','physics-of-the-future-by-michio-kaku','paperback');
for(const a of results)a.evidence=[...new Set(a.evidence)];
fs.writeFileSync(dir+'math-assessments.json',JSON.stringify(results,null,2)+'\n');
console.log(JSON.stringify({scored:results.filter(a=>a.raw).length,pages:results.filter(a=>a.raw&&a.enrichment?.edition?.pages).length,missing:packet.filter(b=>{const a=byIndex.get(b.packetIndex);return a.raw&&!a.enrichment?.edition?.pages;}).map(b=>({i:b.packetIndex,title:b.title}))}));
