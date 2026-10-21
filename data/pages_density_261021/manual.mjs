import {state,save,log} from './collect.mjs';
// Edition facts inspected in publisher pages through web search/open, 2026-10-21.
const records=[
 ['bg8179b4dd1b',281,'ASIN:B011DPHUE4',2015,'Kindle Edition','https://openlibrary.org/books/OL32241674M/A_Gentle_Introduction_to_Unqualified_Reservations'],
 ['n39c7a74dbe',306,'9780837164656',1972,'Hardback','https://openlibrary.org/books/OL5287011M/Copey_of_Harvard'],
 ['ndfa81f98b3',624,'9780140445695',1993,'Paperback','https://penguinrandomhouselibrary.com/book/?isbn=9780140445695'],
 ['n3268355236',225,'9781506487649',2023,'Electronic book','https://books.google.com/books/about/_.html?id=nBilEAAAQBAJ'],
 ['g0069',272,'9780062132796',2014,'Paperback','https://www.chasse-aux-livres.fr/prix/0062132792/however-long-the-night-aimee-molloy-9780062132796'],
 ['n36855b3892',327,'9780511845239',2010,'Electronic book (PDF)','https://katalog.bibliothek.kit.edu/bib/1474757'],
 ['q1091',192,'9798985191301',2023,'Hardcover','https://imusic.se/books/9798985191301/john-trent-2023-second-sunrise-five-decades-of-history-at-the-western-states-endurance-run-inbunden-bok'],
 ['g0731',318,'9780578726984',2020,'Hardcover','https://en.wikipedia.org/wiki/Liberal_Privilege'],
 ['g0372',152,'9781537000459',2016,'Paperback','https://www.goodreads.com/work/editions/52540171-the-internet-of-money'],
 ['g0727',324,'9780865978430',2013,'Paperback','https://about.libertyfund.org/books/in-pursuit-of-happiness-and-good-government/'],
 ['q1063',272,'9780241256985',2017,'EBook','https://www.penguin.com.au/books/blitzed-9780241256985'],
 ['q1057',192,'9780316424271',2022,'EBook','https://www.hachettebookgroup.com/titles/seamas-oreilly/did-ye-hear-mammy-died/9780316424271/'],
 ['q1099',368,'9780593714379',2023,'Paperback','https://www.penguinrandomhouse.com/books/734461/scattered-minds-by-gabor-mate-md/9780593714379/'],
 ['n799e42b8ca',240,'9781506478258',2022,'Hardcover','https://ms.broadleafbooks.com/downloads/BL_CATALOG_Fall2022_WEB.pdf'],
 ['q1060',224,'9798888902523',2024,'Paperback','https://next.haymarketbooks.org/books/2443-abolish-rent'],
 ['g0385',288,'9780593239971',2022,'Hardcover','https://www.penguinrandomhouse.com/books/675690/virtual-society-by-herman-narula/'],
 ['g1235',208,'9781733219600',2019,'Paperback','https://www.hatchards.co.uk/book/why-buy-bitcoin/andy-edstrom/9781733219600'],
 ['q1128',320,'9780855002145',1985,'Book; binding not stated by source','https://books.google.com/books/about/The_Genius_of_the_Few.html?id=v2wSAQAAIAAJ'],
 ['n9bf0b7ae1d',419,'9783030613976',2021,'Paperback','https://ead.nb.admin.ch/web/sb-pdf/2022/sb202225.pdf'],
 ['n4983e6b803',528,'9781119891925',2023,'E-Book','https://uat.store.wiley.com/en-us/philosophy-of-computer-science-an-introduction-to-the-issues-and-the-literature-p-9781119891925'],
 ['nd274526753',304,'9780241974872',2018,'Paperback','https://openlibrary.org/books/OL29342750M/A_Field_Guide_to_Lies_and_statistics'],
 ['g0031',295,'9781910376973',2009,'Electronic book','https://books.google.com/books/about/A_Life.html?id=fkc1DwAAQBAJ'],
 ['na51f84eb14',186,'9781764110808',2025,'Paperback','https://www.goodreads.com/work/editions/253649645-stop-letting-everything-affect-you-how-to-break-free-from-overthinking'],
 ['nda56efec22',352,'9780767903868',2001,'Paperback','https://www.penguinrandomhouse.com/books/20559/in-a-sunburned-country-by-bill-bryson/9780767903868/'],
 ['n8a83f2211d',688,'9780061940811',2009,'Electronic book','https://books.google.com/books?id=530ZXvDRvXoC'],
 ['nafcf732cb2',608,'9780060921484',1992,'Paperback','https://openlibrary.org/books/OL9239216M/Fatal_Decision'],
 ['nee8c4d26d0',432,'9781788164436',2022,'Paperback','https://ingramacademic.com/products/the-disappearance-of-lydia-harvey-9781788164436'],
 ['n5a75d59531',224,'9781487010577',2022,'Trade Paperback','https://houseofanansi.com/collections/all-physical-products-collection-june/products/our-voice-of-fire'],
 ['ne41d0369e5',352,'9781250861535',2023,'Paperback','https://us.macmillan.com/books/9781250861535/thegospelofwellness/'],
 ['ne5340a7d62',278,'9780691221175',2023,'Electronic book','https://collaborate.princeton.edu/en/publications/the-little-book-of-exoplanets/'],
 ['nf548d9b87e',416,'9781787634114',2022,'Paperback','https://www.penguin.co.in/book/build/'],
 ['n3767bf9609',320,'9781250870322',2025,'Paperback','https://academic.macmillan.com/academictrade/9781250870322/theexvangelicals/'],
 ['nc56e0cbafe',328,'9780195341140',2011,'Hardcover','https://books.google.com/books/about/Rationality_and_the_Reflective_Mind.html?id=CDAmuKTE8BsC'],
 ['n6694fcb8ec',187,'9781647824716',2025,'Hardcover','https://ci.nii.ac.jp/ncid/BD14161003'],
 ['nb1edf33932',168,'9780674737600',2024,'Hardback','https://catalog.freelibrary.org/Record/2693276'],
 ['n0736033c45',240,'0330368974',2000,'Book; binding not stated by source','https://openlibrary.org/books/OL18517296M/The_mummies_of_U%CC%88ru%CC%88mchi'],
 ['g1275',320,'9782080203755',2019,'Hardcover','https://www.axel-vervoordt.com/books/portraits-of-interiors'],
 ['h0423',304,'9780593239513',2023,'Hardcover','https://www.penguinrandomhouse.com/books/672118/how-big-things-get-done-by-bent-flyvbjerg-and-dan-gardner/'],
 ['n153b42c197',288,'9780593418574',2022,'Hardcover','https://www.penguinrandomhouse.com/books/674289/unreasonable-hospitality-by-will-guidara/'],
 ['ndc43105bfc',224,'9781101974537',2023,'Paperback','https://www.penguinrandomhouse.com/books/547926/novelist-as-a-vocation-by-haruki-murakami/9781101974537/'],
 ['n22b6ad54ee',368,'9780593443927',2025,'Hardcover','https://www.penguinrandomhouse.com/books/715421/little-bosses-everywhere-by-bridget-read/9780593443927/'],
 ['n860f8712a7',336,'9780593299364',2023,'Hardcover','https://www.penguinrandomhouse.com/books/677131/shielded-by-joanna-schwartz/'],
 ['n556fec4c16',192,'9781324020875',2023,'Hardback','https://wwnorton.co.uk/books/9781324020875-wild-girls'],
 ['nc2de8e89ad',272,'9781846048548',2024,'Trade Paperback','https://www.penguin.com.au/books/briefly-perfectly-human-9781846048548'],
 ['bg77fe5a4faf',288,'9781541675797',2022,'Trade Paperback','https://www.hachettebookgroup.com/titles/jeff-hawkins/a-thousand-brains/9781541675797/']
];
for(const [id,pages,isbn,year,format,url] of records){const b=state.books[id];if(b.edition)continue;
 b.edition={pages,id:isbn.includes(':')?isbn:'ISBN:'+isbn,year,format,url,language:'English',retrieved:'2026-10-21',confidence:'moderate',title:b.title,authors:b.author,notes:'Cited edition record inspected: matching title, author, year, identifier and page count. Numbered pagination and publisher total extent can differ; the displayed count follows this source. Other editions may differ.',source:{provider:'Manually inspected bibliographic record',url}};
 b.attempts.push({kind:'publisher-manual',url,pages,isbn,year,format,retrieved:'2026-10-21',accepted:true});
}
const aliases={
 q0617:'Page count applies to the currently assumed Sarah Helm identity; the original source attribution remains marked probable.',
 q0686:'Symposium of Plato is the named Plato work in this translation. Original source-author uncertainty remains unchanged.',
 q0730:'Page count applies to the currently assumed Oscar Martinez migrant-train account; the source attribution remains qualified.',
 q0964:'Page count applies to the currently assumed Cupcake Brown memoir; source identity remains marked probable.',
 g0080:'Retailer HTML encodes the umlaut in Bündchen as an entity; title and author match.',
 g0202:'Supermaker and Super Maker are spacing variants of the Jaime Schmidt title.',
 g0405:'Volume Two and Volume 2 identify the same second volume; this is not a series total.',
 bg8007edf6c2:'Eknath Easwaran is the translator explicitly named in the catalog identity.',
 bgcfc85738ab:'The Arbinger Institute is the same corporate author; the automated personal-name test rejected its leading article.'
};
for(const [id,note] of Object.entries(aliases)){const b=state.books[id];if(b.edition)continue;const a=b.attempts.find(a=>a.kind==='amazon'&&a.status===200&&a.pages&&a.year&&a.format&&a.language&&!/Audio/i.test(a.format));if(!a)continue;
 b.edition={pages:a.pages,id:'ASIN:'+a.productId,url:a.url,retrieved:a.retrieved,language:a.language,format:a.format,year:a.year,confidence:'moderate',title:a.title,authors:a.byline,notes:note+' Exact edition details retained from the archived product response.',source:{provider:'Amazon, manually checked identity',rawFile:'data/pages_density_261021/'+a.rawFile}};
 b.attempts.push({kind:'manual-identity-review',rawFile:a.rawFile,accepted:true,reason:note});
}
save();log('Publisher and identity records applied');
