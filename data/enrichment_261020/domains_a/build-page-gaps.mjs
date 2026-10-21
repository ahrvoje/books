import fs from 'node:fs';
const dir = 'data/enrichment_261020/domains_a/';
let ids = JSON.parse(fs.readFileSync('data/enrichment_261020/primary/page-gap-ids.json'));
ids = ids.slice(ids.indexOf('q0749'));
const books = JSON.parse(fs.readFileSync('data/glasp_261019/compiled.json')).currentBooks;
const facts = [
  ['q0749',368,'9781984881441',2024,'Paperback','https://www.penguinrandomhouse.com/books/635964/the-country-of-the-blind-by-andrew-leland/9781984881441/'],
  ['q0743',400,'9780812988154',2020,'Paperback','https://www.penguinrandomhouse.com/books/253133/crisis-in-the-red-zone-by-richard-preston/'],
  ['q0764',257,'9781990823336',2023,'Hardcover','https://www.kennys.ie/shop/out-there-rowe-peter-9781990823336','Published-edition bookseller extent, also reported by McLean & Eakin and Fnac. Supersedes a 230-page advance publisher catalog estimate.','English','Kennys Bookseller','moderate'],
  ['q0770',304,'9781982198886',2024,'Hardcover','https://www.simonandschuster.com/books/Black-Pill/Elle-Reeve/9781982198886'],
  ['q0805',368,'9780399590528',2022,'Paperback','https://www.penguinrandomhouse.com/books/550168/educated-by-tara-westover/9780399590528/'],
  ['q0806',336,'9780804173308',2024,'Paperback','https://www.penguinrandomhouse.com/books/241123/fatherland-by-burkhard-bilger/'],
  ['q0815',416,'9781785789540',2023,'Hardback','https://www.iconbooks.com/ib-title/uproar-3/'],
  ['q0818',528,'9780525433033',2024,'Paperback','https://www.penguinrandomhouse.com/books/552098/dinner-with-the-president-by-alex-prudhomme/'],
  ['q0840',352,'9781804991206',2023,'Paperback','https://www.penguin.co.uk/books/453960/killer-in-the-kremlin-by-sweeney-john/9781804991206'],
  ['q0864',137,'9789719430780',2020,'Paperback','https://www.philippinebooks.com/products/kulang-na-silya-by-ricky-lee','Bookseller metadata, corroborated by Avenida and ThriftBooks. The primary author page confirms work identity; library records confirm 2020 publication. Uses reported numbered extent, not an alternate retailer 140-page total.','Filipino','Philippine Books bookseller','moderate'],
  ['q0885',208,'9781922790750',2024,'Trade Paperback','https://www.textpublishing.com.au/books/the-season-9781922790750'],
  ['q0877',288,'9780345803702',2013,'Paperback','https://www.penguinrandomhouse.com/books/21120/my-last-sigh-by-luis-bunuel/'],
  ['q0893',287,'9780358458180',2023,'Hardcover','https://catalog.freelibrary.org/Record/2667062','First edition. Library physical description: xi, 287 pages, 16 unnumbered pages of plates. Numeric count is the main numbered sequence; preliminaries and plates are recorded here separately.','English','Free Library of Philadelphia catalog','high'],
  ['q0889',352,'9781035076949',2025,'Hardback','https://www.panmacmillan.com/authors/alice-loxton/eleanor/9781035076949'],
  ['q0897',320,'9781605982779',2012,'Hardcover','https://www.simonandschuster.com/books/The-Mindful-Carnivore/Tovar-Cerulli/9781605982779'],
  ['q0901',320,'9780593313008',2022,'Paperback','https://www.penguinrandomhouse.com/books/670389/beautiful-country-a-read-with-jenna-pick-by-qian-julie-wang/9780593313008/','Standard paperback edition.'],
  ['q0904',188,'9781438496009',2024,'Paperback','https://sunypress.edu/Books/J/Jazz-with-a-Beat'],
  ['q0906',278,'9798855804959',2026,'Paperback','https://www.target.com/p/-/A-95277035','January 2026 published edition. Exact ISBN extent corroborated by Oblong Books and March 2026 All About Jazz reviews. Some international retail feeds list 282; retained the US edition total with moderate confidence.','English','Target bookseller','moderate'],
  ['q0908',320,'9781368119306',2026,'Paperback','https://www.penguinrandomhouse.com/books/769651/the-book-of-murder-by-matt-murphy/'],
  ['q0910',424,'9781925591408',2018,'Paperback','https://fremantlepress.com.au/wp-content/uploads/2021/03/A-FORTUNATE-LIFE-ADULT-B-FORMAT-MR.pdf','Publisher media-release extent; separate from the 2026 edition.'],
  ['q0918',512,'9781782118930',2016,'Paperback','https://booksfromscotland.com/book/the-game-2/','Canongate edition metadata supplied on the Scottish publishing industry book portal.','English','Books from Scotland','moderate'],
  ['q0932',596,'9798987722633',2024,'Hardcover','https://www.harvard.com/book/9798987722633','Bookseller total extent; publication 22 November 2024. CiNii library catalog records 584 numbered pages for the same ISBN. The 12-page difference is retained as an extent-convention uncertainty.','English','Harvard Book Store','moderate'],
  ['q0944',432,'9781401324162',2012,'Hardcover','https://www.abebooks.com/products/isbn/9781401324162?cm_sp=bdp-_-ISBN10-_-PLP','Published Hyperion first-edition metadata; 432 pages corroborated by other bookseller records. A conflicting advance review count of 304 was not used.','English','AbeBooks edition catalog','moderate'],
  ['q0927',512,'9781451691580',2012,'Ebook','https://www.simonandschuster.com/books/Fear-and-Loathing-on-the-Campaign-Trail-72/Hunter-S-Thompson/9781451691580','Publisher-declared page extent, not audio duration or location count.'],
  ['q0950',528,'9780316477574',2019,'Ebook','https://www.hachettebookgroup.com/titles/tom-oneill/chaos/9780316477574/?lens=little-brown','Publisher-declared page extent.'],
  ['q0954',276,'9798854876858',2023,'Paperback','https://www.thriftbooks.com/w/ive-been-fired-from-every-job-ive-ever-had_molly-hardy/51195705/','Bookseller metadata corroborated by World of Books: paperback, 3 August 2023, 276 pages. No primary publisher extent was available.','English','ThriftBooks','moderate'],
  ['q0961',416,'9780593129326',2026,'Hardcover','https://www.penguinrandomhouse.com/books/609917/famesick-by-lena-dunham/9780593129326/'],
  ['q0965',168,'9798234007179',2026,'Paperback','https://www.readings.com.au/product/9798234007179/how-to-kid-for-adults--adam-davis--2026--9798234007179','Bookseller metadata gives 1 September 2026 and 168 pages, corroborated by IBS. Readings still labels this preorder; Books-A-Million lists the ISBN in stock. Final physical extent has not been inspected.','English','Readings bookseller','moderate'],
  ['q0966',272,'9781668031858',2025,'Hardcover','https://www.simonandschuster.com/books/Actress-of-a-Certain-Age/Jeff-Hiller/9781668031858'],
  ['uncertainty',512,'9780241658628',2024,'Hardback','https://www.penguin.co.uk/books/458199/the-art-of-uncertainty-by-spiegelhalter-david/9780241658628','Current publisher total; earlier advance catalog specified a different extent.'],
  ['g0099',336,'9780743476591',2006,'Trade Paperback','https://www.simonandschuster.com/books/One-of-a-Kind/Nolan-Dalla/9780743476591'],
  ['g0328',336,'9781501164781',2019,'Hardcover','https://www.simonandschuster.com/books/The-Harder-You-Work-the-Luckier-You-Get/Joe-Ricketts/9781501164781'],
  ['g0802',272,'9781982191849',2022,'Hardcover','https://www.simonandschuster.com/books/The-Rise-of-the-Rest/Steve-Case/9781982191849'],
  ['g1073',416,'9781982120252',2019,'Hardcover','https://www.simonandschuster.com/books/The-American-Story/David-M-Rubenstein/Gift-for-History-Buffs/9781982120252'],
  ['g1112',756,'9781451647587',2011,'Ebook','https://www.simonandschuster.com/books/The-Life-of-Greece/Will-Durant/The-Story-of-Civilization/9781451647587','Volume II only, matching this nominated individual work. Publisher-declared page extent.'],
];
const reasons = {
  q0760: 'Repository identity is explicitly unresolved: Leon Edel wrote a multi-volume biography and a condensed version. No single edition or volume may be silently selected.',
  q0948: 'Exact ISBN 9782493043061 was found, but extent is unresolved: publisher press release reports 340 pages (https://www.olbia-conseil.com/wp-content/uploads/2022/04/communique-1-1.pdf), Fnac reports 400 (https://www.fnac.com/a16569787/Gaetan-Alibert-Une-histoire-populaire-du-Baseball), and Sport a lire reports both 388 and 392. The current publisher page omits extent. A scan or physical copy is needed to resolve the material conflict.',
  q0952: 'Print identity 9798182244497, J. C. Maurer, English paperback, independently published 2026, was found at IBS, ZVAB and eBay, but none supplied a verified page extent. ElevenReader gives audio duration, not pages, and an inconsistent 2021 date; it cannot supply the missing print count. See https://www.ebay.com/itm/800700865600 and https://www.ibs.it/libri-inglese/autori/j-c-maurer.',
  q0964: 'Repository author and title identification are explicitly probable. A page count for Cupcake Brown would falsely resolve the source identity; retained unknown pending identity review.'
};
const out = Object.fromEntries(ids.map(id=>[id,{edition:null,reason:reasons[id] || 'Targeted publisher/library review pending.'}]));
for (const [id,pages,isbn,year,format,url,notes='',language='English',provider='Publisher',confidence='high'] of facts) {
  const b = books.find(b=>b.id===id);
  out[id] = { edition:{pages,id:'ISBN:'+isbn,url,retrieved:'2026-10-20',language,format,year,confidence,
    title:b.title,authors:b.author,isbn13:[isbn],notes:'Exact-edition metadata. '+notes,source:{provider,url}},reason:null };
}
const burton = books.find(b=>b.id==='q0794');
const burtonVolumes = [
  {isbn:'9781666769357',pages:486,url:'https://wipfandstock.com/products/personal-narrative-of-a-pilgrimage-to-al-madinah-and-meccah_-volume-1-9781666769357'},
  {isbn:'9781666769388',pages:514,url:'https://wipfandstock.com/products/personal-narrative-of-a-pilgrimage-to-al-madinah-and-meccah_-volume-2-9781666769388'}
];
out.q0794 = {edition:{
  pages:1000,id:'ISBNs:9781666769357+9781666769388',url:burtonVolumes[0].url,
  retrieved:'2026-10-20',language:'English',format:'Paperback, complete two-volume work',year:2023,confidence:'high',
  title:burton.title,authors:burton.author,isbn13:burtonVolumes.map(v=>v.isbn),
  notes:'Calculated complete-work extent: 486 + 514 = 1000 pages, summing both matching Wipf and Stock paperback facsimile volumes published 27 February 2023. This is an aggregate of two individually sold volumes, not a set ISBN and not one volume used for the whole work. The publisher samples identify the 1893 two-volume Memorial edition; volumes and source links are retained.',
  volumes:burtonVolumes,source:{provider:'Wipf and Stock publisher',url:burtonVolumes[0].url}
},reason:null};
fs.writeFileSync(dir+'page-gap-results.json',JSON.stringify(out,null,2)+'\n');
const resolved = Object.values(out).filter(r=>r.edition).length;
console.log({assigned:ids.length,resolved,unresolved:ids.length-resolved});
