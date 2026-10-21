import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
const here = fileURLToPath(new URL('.', import.meta.url));
const ids = JSON.parse(fs.readFileSync(here+'page-gap-ids.json'));
const books = JSON.parse(fs.readFileSync(new URL('../../glasp_261019/compiled.json',import.meta.url))).currentBooks;
// Manually transcribed publisher facts. ISBN, pages and edition year belong
// to one format on the cited page; they do not replace original publication age.
const facts = [
  ['q0209',400,'9781101904183',2017,'Paperback','https://www.penguinrandomhouse.com/books/253398/rogue-heroes-by-ben-macintyre/','US title Rogue Heroes; same SAS account by Ben Macintyre.'],
  ['q0254',400,'9780375702617',1999,'Paperback','https://www.penguinrandomhouse.com/books/54785/life-by-richard-fortey/','US edition of the Richard Fortey account.'],
  ['q0392',480,'9780593319758',2025,'Hardcover','https://www.penguinrandomhouse.com/books/672469/38-londres-street-by-philippe-sands/9780593319758/',''],
  ['q0379',624,'9781643139494',2022,'Trade Paperback','https://www.simonandschuster.com/books/The-Border/Erika-Fatland/9781643139494','Kari Dickson English translation.'],
  ['q0380',528,'9780593805053',2026,'Hardcover','https://www.penguinrandomhouse.com/books/803078/the-cauldron-by-simon-sebag-montefiore/','Publisher scheduled date 2026-09-29; retrieved page still uses preorder wording.'],
  ['q0377',352,'9780593492697',2026,'Paperback','https://www.penguinrandomhouse.com/books/710959/the-big-con-by-mariana-mazzucato-and-rosie-collington/',''],
  ['q0524',1195,'9781451647617',2011,'Ebook','https://www.simonandschuster.com/books/The-Age-of-Faith/Will-Durant/The-Story-of-Civilization/9781451647617','Publisher-declared page extent, not ebook location count. Volume IV only.'],
  ['q0515',192,'9781836742166',2026,'Hardcover','https://www.penguinrandomhouse.com/books/804700/how-to-see-like-a-machine-by-trevor-paglen/',''],
  ['q0506',368,'9780593315071',2025,'Paperback','https://www.penguinrandomhouse.com/books/678831/the-rigor-of-angels-by-william-egginton/9780593315071/',''],
  ['q0510',416,'9781419760198',2024,'Paperback','https://www.abramsbooks.com/product/rome-of-ones-own_9781419760198/',''],
  ['q0529',352,'9781541774391',2024,'Trade Paperback','https://www.hachettebookgroup.com/titles/bruce-bueno-de-mesquita/the-invention-of-power/9781541774391/',''],
  ['q0618',320,'9781984801456',2024,'Paperback','https://www.penguinrandomhouse.com/books/594500/rough-sleepers-by-tracy-kidder/9781984801456/',''],
  ['q0607',352,'9780593298893',2023,'Ebook','https://www.penguinrandomhouse.com/books/673192/what-an-owl-knows-by-jennifer-ackerman/9780593298893/','Publisher-declared page extent.'],
  ['q0594',400,'9781668007594',2024,'Hardcover','https://www.simonandschuster.co.uk/books/The-Birds-That-Audubon-Missed/Kenn-Kaufman/9781668007594','Publisher total extent; reviews differ when reporting numbered text only.'],
  ['q0614',378,'9781538783177',2026,'Trade Paperback (Large Print)','https://www.hachettebookgroup.com/titles/kevin-hazzard/no-one%E2%80%99s-coming/9781538783177/','Large-print edition; compare page lengths with this format difference in mind.'],
  ['q0636',496,'9780241744017',2026,'Hardback','https://www.penguin.co.uk/books/457807/stolen-revolution-by-torbati-bozorgmehr-sharafedin-and-yeganeh/9780241744017',''],
  ['q0674',384,'9780316382151',2026,'Ebook','https://www.hachettebookgroup.com/titles/chris-jennings/end-of-days/9780316382151/','Publisher-declared page extent.'],
  ['q0628',352,'9781982185770',2024,'Trade Paperback','https://www.simonandschuster.com/books/A-Billion-Years/Mike-Rinder/9781982185770',''],
  ['q0733',368,'9780385551038',2026,'Hardcover','https://www.penguinrandomhouse.com/books/762418/the-vanishing-family-by-robert-kolker/9780385551038/','Publisher scheduled date 2026-09-29; retrieved page retains preorder wording.'],
  ['q0725',560,'9781982181628',2025,'Trade Paperback','https://www.simonandschuster.com/books/Generations/Jean-M-Twenge/9781982181628',''],
  ['q0717',448,'9780593237168',2026,'Paperback','https://penguinrandomhousehighereducation.com/book/?isbn=9780593237168',''],
  ['q0742',1040,'9780593733554',2026,'Paperback','https://www.penguinrandomhouse.com/books/176399/buckley-by-sam-tanenhaus/',''],
  ['q0668',320,'9780735211292',2018,'Hardcover','https://www.penguinrandomhouse.com/books/543993/atomic-habits-by-james-clear/9780735211292/',''],
  ['q0729',288,'9781250861511',2024,'Trade Paperback','https://academic.macmillan.com/academictrade/9781250861511/starrymessenger/',''],
  ['q0527',320,'9781600789618',2013,'Trade Paper','https://www.triumphbooks.com/the-game--30th-anniversary-edition-products-9781600789618.php','30th anniversary edition.'],
  ['q0700',400,'9781250391230',2025,'Not stated by source','https://us.macmillan.com/books/9781250391230/carelesspeople/','Exact print product; the retrieved format selector did not state its binding.'],
  ['q0643',400,'9781324050834',2023,'Not stated by source','https://wwnorton.co.uk/books/9781324050834-the-good-virus','Norton publisher metadata, 8 September 2023, 163 x 239 mm; binding not stated in retrieved text.'],
];
const results = Object.fromEntries(ids.map(id=>[id,{edition:null,reason:'Publisher gap review pending.'}]));
for (const [id,pages,isbn,year,format,url,notes] of facts) {
  const b=books.find(b=>b.id===id);
  results[id]={edition:{pages,id:'ISBN:'+isbn,url,retrieved:'2026-10-20',language:'English',format,year,confidence:'high',
    title:b.title,authors:b.author,isbn13:[isbn],notes:'Publisher edition metadata. '+notes,
    source:{provider:'Publisher',url}},reason:null};
}
const supplemental = [
  ['q0313',416,'9781399601085',2025,'Paperback','https://www.bol.com/be/fr/p/agent-zo/9300000222859147/','Retailer metadata, same ISBN and date as Hachette publisher page https://www.hachette.co.uk/titles/clare-mulley/agent-zo/9781399601085/.'],
  ['q0573',304,'9780062852687',2019,'Not stated by source','https://mitpressbookstore.mit.edu/book/9780062852687','MIT Press Bookstore metadata for Harper Business edition. Retrieved page does not state binding.'],
  ['q0627',704,'9780061253713',2007,'Not stated by source','https://openlibrary.org/books/OL7289557M/The_Gulag_Archipelago_Volume_1','Volume 1 only; not the complete trilogy. English edition; pagination corroborated by Google Books https://books.google.com/books/about/The_Gulag_Archipelago_Volume_1.html?id=7Q7-CDK0G24C.'],
  ['q0688',337,'9781615237692',2009,'Not stated by source','https://openlibrary.org/books/OL32107891M/The_indifferent_stars_above','Catalog numbered-text extent; excludes xiv front matter and 8 unnumbered plate pages.'],
  ['q0695',400,'9781788160452',2021,'Paperback','https://www.hatchards.co.uk/book/victory-in-the-kitchen/annie-gray/9781788160452','Retailer page count. Edition year and paperback binding confirmed by publisher https://profilebooks.com/work/victory-in-the-kitchen/.'],
  ['q0551',258,'9780367594398',2020,'Paperback','https://www.routledge.com/Standardizing-Minority-Languages-Competing-Ideologies-of-Authority-and-Authenticity-in-the-Global-Periphery/Lane-Costa-DeKorne/p/book/9780367594398','Publisher total extent 258; retailer lists 250 for same ISBN. Paperback edition year 2020 from https://politics-prose.com/book/9780367594398; source copyright 2018 is not this edition year. Pagination conflict retained.'],
  ['q0574',624,'9781324092872',2023,'Paperback','https://www.rockbook.net/wp-content/uploads/2022/09/WWNcat_W23_final.pdf','Norton Winter 2023 publisher catalog, March paperback section; publisher catalog hosted by distributor.'],
  ['q0652',368,'9781911107576',2024,'Paperback','https://business.walmart.com/ip/Belly-Woman-Birth-Blood-Ebola-The-Untold-Story-Paperback-9781911107576/2735277023','368 pages corroborated by the author-hosted scholarly review https://www.benjamin-black.com/wp-content/uploads/2024/08/Belly-Woman-Birth-Blood-Ebola-The-Untold-Story.pdf. Original Neem Tree 2024 edition; successor publisher lists same ISBN with a 2025 date.'],
];
for (const [id,pages,isbn,year,format,url,notes] of supplemental) {
  const b=books.find(b=>b.id===id);
  results[id]={edition:{pages,id:'ISBN:'+isbn,url,retrieved:'2026-10-20',language:'English',format,year,confidence:'moderate',
    title:b.title,authors:b.author,isbn13:[isbn],notes,source:{provider:'Library, bookseller or publisher catalog; see notes',url}},reason:null};
}
const reasons = {
  q0617: 'Source identity remains probable. A matching candidate Sarah Helm paperback has 784 pages (ISBN 9780307278715, 2016, https://www.penguinrandomhouse.com/books/78292/ravensbruck-by-sarah-helm/), but a page count cannot resolve which source work was meant.',
  q0686: 'Source author is only probable. Plato paperback candidate has 144 pages (ISBN 9780140449273, 2003, https://www.penguinrandomhouseretail.com/book/?isbn=9780140449273); not applied until the source identity is resolved.',
  q0730: 'Source title identifies only a likely migrant-train account. Searches found Oscar Martinez candidates, but did not establish the original source identity. No guessed edition assigned.',
  q0702: 'Full-work extent remains unresolved. Search results include partial extracts, a German study with only parts 4–5, and individually paginated Hakluyt volumes. None is accepted as the complete source work: https://books.google.com/books/about/Cosmographia_geographia_de_Affrica.html?id=yViw5I7mBC4C and https://www.jstor.org/stable/jj.19724091.9.',
};
const ownIds=ids.slice(0,ids.indexOf('q0749'));
const output=Object.fromEntries(ownIds.map(id=>[id, results[id].edition ? results[id] : {edition:null,reason:reasons[id]}]));
for (const [id,r] of Object.entries(output)) if(!r.edition&&!r.reason) throw Error('Unreviewed '+id);
fs.writeFileSync(here+'page-gap-results.json',JSON.stringify(output,null,2)+'\n');
console.log({assigned:ownIds.length,resolved:Object.values(output).filter(r=>r.edition).length});
