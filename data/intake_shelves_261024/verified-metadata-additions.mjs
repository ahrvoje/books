import {dir,read,write} from './capture.mjs';
const m=read(dir+'/metadata-overrides.json');
const items=[
['A Penguin History of New Zealand','0143018671',2003,563,519,523,'https://natlib.govt.nz/records/21295314','paperback'],
['Birth of the Leviathan','0521484278',1997,363,325,350,'https://obnb.uk/p9410275-birth-of-the-leviathan-building-states-and-regimes-in-medieval-and-early-modern-europe','paperback'],
['Lifted: A Cultural History of the Elevator','0814787169',2014,309,295,305,'https://openlibrary.org/works/OL19981858W/Lifted','hardcover'],
['Brilliant Blunders','1439192375',2013,341,303,323,'https://library.iitgoa.ac.in/cgi-bin/koha/opac-detail.pl?biblionumber=1627','paperback'],
['Fault Lines','0691146837',2010,260,231,246,'https://obnb.uk/p15494251-fault-lines-how-hidden-fractures-still-threaten-the-world-economy','hardcover']
];
for(const[t,isbn,year,pages,start,end,url,format]of items)m[t]={purchaseUrl:'https://www.amazon.de/dp/'+isbn,evidence:[url],edition:{id:'ISBN:'+isbn,url,pages,year,language:'English',format,retrieved:'2026-10-24',confidence:'moderate',notes:'Numbered page extent from library catalog; introductory Roman-numbered pages are recorded separately by the catalog.'},referencePages:{pages:end-start+1,confidence:'moderate',ranges:[{start,end,label:'bibliographical references'}],edition:{id:'ISBN:'+isbn},url,sameEditionAsPG:true,limitation:'Catalog page ranges; no physical-page inspection. Publisher extents can include additional front matter.'}};
m['Brilliant Blunders'].edition.notes+=' The catalog identifies an Indian 2013 issue under the ISBN used for the later US paperback; edition mapping is not fully confirmed.';
m['Brilliant Blunders'].referencePages.limitation+=' The catalog counts agree internally, but mapping this ISBN to the purchase edition is uncertain.';
m['Lifted: A Cultural History of the Elevator'].periodEndConfidence='low';
m['The Periodic Table: A Very Short Introduction']={purchaseUrl:'https://www.amazon.de/dp/0199582491',evidence:['https://academic.oup.com/book/715'],edition:{id:'ISBN:9780199582495',url:'https://academic.oup.com/book/715',pages:147,year:2011,language:'English',format:'paperback',retrieved:'2026-10-24',confidence:'moderate',notes:'Numbered extent 147 in Google Books; some publisher totals include front matter.'}};
write(dir+'/metadata-overrides.json',m);
const rows=read(dir+'/rows.json'),a=read(dir+'/triaged.json');for(const b of a.filter(b=>b.title==='1984'&&b.author==='Orwell'))for(const r of rows.filter(r=>r.newId===b.id)){r.id='h0593';r.status='excluded';delete r.newId;}write(dir+'/rows.json',rows);
