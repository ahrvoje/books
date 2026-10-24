import fs from 'node:fs';
const dir='data/top500_261024',read=p=>JSON.parse(fs.readFileSync(dir+'/'+p)),c=read('toc-candidates-final.json'),t=read('targets.json'),out={};
// Explicitly reviewed matches. Image credits, acknowledgements and indexes are excluded.
const selections=[
 [1,'n40a6a75e2d','ISBN:9780691174167',2017,[[225,238,'Notes'],[239,246,'Annotated Select Bibliography']]],
 [2,'progress-0168','ISBN:026212016X',1965,[[205,208,'References']]],
 [4,'intake-0259','GoogleBooks:jBOhU4tU0wgC',2008,[[299,340,'Bibliography and subsequent reference apparatus']]],
 [5,'progress-0036','ISBN:0195171276',2004,[[259,274,'Bibliographical references']]],
 [15,'q0086','ISBN:9780520266278',2010,[[387,413,'Bibliographical references']]],
 [16,'q0173','GoogleBooks:Gj75EAAAQBAJ',2024,[[299,398,'Notes'],[399,452,'Bibliography']]],
 [25,'progress-0655','GoogleBooks:J-czEAAAQBAJ',1998,[[213,254,'Notes'],[255,256,'Bibliographic Essay']]],
 [26,'progress-0671','DOI:10.7312/neph18026',2018,[[187,198,'Notes'],[199,204,'Bibliography']]],
 [30,'progress-0326','ISBN:0852984243',1979,[[233,236,'Bibliography']]],
 [31,'g0343','ISBN:9781119613626',2020,[[301,324,'Notes']]],
 [33,'q0031','Catalog:OTS11960',2009,[[273,294,'Bibliographical references']]],
 [34,'progress-0617','Catalog:IUCAT12322397',2012,[[321,330,'Bibliographical references']]],
 [35,'bga20f469258','ISBN:9781119715665',2021,[[285,290,'Notes']]],
 [36,'bgd956830182','ISBN:9781591027225',2009,[[315,320,'Bibliographical references']]],
 [38,'progress-0599','ISBN:9780262377836',2024,[[237,258,'Notes'],[259,262,'Bibliography']]],
 [41,'n2085eda21a','ISBN:9780452296541',2010,[[411,420,'Bibliographical references']]],
 [43,'n6182111e81','ISBN:9781250805959',2022,[[261,270,'Bibliographical references']]],
 [48,'intake-0240','ISBN:9781984824004',2021,[[289,314,'Notes'],[315,318,'Bibliography']]],
 [49,'g0487','ISBN:9781635576054',2021,[[411,471,'Bibliographical references']]],
 [51,'progress-0052','GoogleBooks:TL1CEAAAQBAJ',2021,[[97,118,'Bibliography']]],
 [62,'intake-0254','OL7469003M',2001,[[274,329,'Notes'],[330,335,'Bibliography']]],
 [63,'progress-0483','GoogleBooks:jh2U379fq18C',1993,[[227,232,'Notes']]],
 [70,'bge672b47cb1','ISBN:9781847652102',2010,[[213,256,'Notes'],[257,288,'Bibliography']]]
];
for(const [i,id,edition,year,spans]of selections){
 const q=c[i],b=t.find(b=>b.id===id),url=q.record.trim().split('\n')[0].match(/\((https?:.*)\)$/)[1];
 out[id]={referenceRecord:{pages:spans.reduce((s,[start,end])=>s+end-start+1,0),ranges:spans.map(([start,end,label])=>({start,end,label,method:'reviewed-catalog-or-contents',evidence:label+' '+start+'–'+end+'; see saved catalog or numbered contents.'})),edition:{id:edition,title:b.title,author:b.author,year,language:'English'},url,source:{file:q.file,retrieved:'2026-10-24'},confidence:i===51?'low':'moderate',method:'reviewed-catalog-or-contents',sameEditionAsPG:false,limitation:'Only documented reference sections are counted. Index, image credits and acknowledgements are excluded. Search-index snapshot; contents boundaries may include a final blank page. Reference and total-page editions may differ.'+(i===51?' Google Books displays unusual ebook pagination (bibliography 97; index 119) for a 288-page listing. Retained as a low-confidence edition estimate, not a print-pagination claim.':'')}};
}
out['q0108']={referenceRecord:{pages:32,ranges:[{start:651,end:682,label:'Bibliographical references',method:'catalogued-range',evidence:'Free Library of Philadelphia: bibliographical references (pages 651-682). BnF independently reports a 32-page bibliography.'}],edition:{id:'ISBN:9780226837970',title:'Inventing the Renaissance',author:'Ada Palmer',year:2025,language:'English'},url:'https://catalog.freelibrary.org/Record/2768963',source:{file:dir+'/web-toc-verification.json',retrieved:'2026-10-24'},supportingSources:['https://catalogue.bnf.fr/ark:/12148/cb48619007d'],confidence:'moderate',method:'catalogued-range',sameEditionAsPG:false,limitation:'Documented 32-page section only; additional notes are not inferred. Edition match unconfirmed.'}};
fs.writeFileSync(dir+'/manual-11.json',JSON.stringify(out,null,2)+'\n');
