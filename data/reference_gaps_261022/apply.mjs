import fs from 'node:fs';
import assert from 'node:assert/strict';
const dir='data/reference_gaps_261022';
const read=p=>JSON.parse(fs.readFileSync(p,'utf8'));
const write=(p,x)=>fs.writeFileSync(p,JSON.stringify(x,null,2)+'\n');
const targets=read(`${dir}/targets.json`), candidates=read(`${dir}/candidates.json`), accepted={};
const add=(id,editionId,year,url,ranges,evidence,file)=>{
 assert(targets.some(b=>b.id===id));assert(!accepted[id]);
 assert(fs.existsSync(file),file);
 accepted[id]={editionId,year,url,ranges:ranges.map(([label,start,end])=>({label,start,end})),evidence:`${evidence} Snapshot: ${file}.`};
};
for(const [id,key,isbn,year] of [
 ['origins','BC0254518X','9781784705435',2020],
 ['s53','jstor','9780674062757',2012],
 ['internet','betterworldbooks','9781631493072',2018],
 ['rem-u0512','arlington','9780544716940',2017],
 ['g0641','ccsdetroit','9780954452933',2009],
 ['n3a9e9bafc5','richland','9781324021049',2022],
 ['n2555287184','BC17106208','9780735217553',2021],
 ['bg6d2c27ffc8','betterworldbooks','9780393352979',2016],
 ['rem-u0922','betterworldbooks','9780393337174',2009]
]){
 const c=candidates.find(c=>c.id===id&&c.url.includes(key)&&c.pages!==null);assert(c);
 const ranges=[...new Map(c.ranges.map(r=>[`${r.start}-${r.end}`,r])).values()];
 add(id,`ISBN:${isbn}`,year,c.url,ranges.map(r=>[r.label,r.start,r.end]),ranges.map(r=>r.evidence).join('; '),c.file);
}
for(const [id,key] of [['g0365','OL27876905M'],['n9f3d18f195','OL2188152M']]){
 const c=read(`${dir}/library.json`).find(b=>b.id===id).candidates.find(c=>c.edition.key.endsWith(key));assert(c);
 add(id,`ISBN:${(c.edition.isbn_13||c.edition.isbn_10)[0]}`,+c.edition.publish_date,`https://openlibrary.org/books/${key}`,c.ranges.map(r=>[r.label,r.start,r.end]),c.ranges.map(r=>r.evidence).join('; '),c.file);
}
const web=(f)=>`${dir}/web/${f}.json`;
add('stuff','ISBN:9780544236042',2014,'https://ci.nii.ac.jp/ncid/BB16927711',[['Bibliography',233,233]],'Catalog explicitly identifies the bibliography as page 233; scope is this named section.',web('batch4'));
add('g0153','ISBN:9780998116303',2016,'https://ci.nii.ac.jp/ncid/BC13742207',[['Bibliography',187,187]],'Catalog explicitly identifies bibliography page 187.',web('batch16'));
add('sr-u0025','ISBN:9781942788331',2018,'https://nicolefv.com/s/accelerate-book-excerpt.pdf',[['Bibliography',237,242]],'Author-hosted publisher sample: bibliography 237, index 243.',web('pdf01'));
add('rem-u1859','ISBN:9780226359205',2011,'https://www.degruyterbrill.com/document/doi/10.7208/chicago/9780226359205-010/html',[['Notes',171,194],['Bibliography',195,202],['Oral History Bibliography',203,206]],'Publisher contents: notes 171, bibliography 195, oral history bibliography 203, index 207.',web('ranges28'));
add('na85677af3e','ISBN:9780190677442',2020,'https://api.pageplace.de/preview/DT0400.9780190677459_A39086803/preview-9780190677459_A39086803.pdf',[['Notes',203,236]],'Publisher sample identifies the hardcover ISBN on copyright page; contents: notes 203, index 237.',web('pdfextra'));
add('g0401','ISBN:9780062969743',2021,'https://andrewchen.com/wp-content/uploads/2022/01/ColdStartProb_9780062969743_AS0928_cc20_Final.pdf',[['Notes',379,386]],'Author-hosted typeset text: notes 379 through 386; About the Author starts 387.',web('confirm02'));
add('rem-u1850','ISBN:9780241586488',2024,'https://cdn.penguin.co.uk/dam-assets/books/9780241586488/9780241586488-sample.pdf',[['Notes',435,454]],'Publisher sample contents: notes 435, index 455.',web('pdf01'));
add('rem-u1670','ISBN:9781802062076',2024,'https://cdn.penguin.co.uk/dam-assets/books/9781802062076/9781802062076-sample.pdf',[['Notes',215,264]],'Publisher sample contents: notes 215, acknowledgements 265.',web('confirm01'));
add('q0219','ISBN:9780141976211',2021,'https://cdn.penguin.co.uk/dam-assets/books/9780141976211/9780141976211-sample.pdf',[['Notes',507,584],['Bibliography',585,656]],'Publisher paperback sample contents: notes 507, bibliography 585, index 657. Copyright page identifies the 2021 Penguin edition.',web('pdfextra'));
add('rem-u1754','ISBN:9780300273779',2024,'https://books.google.co.uk/books?id=Rs4REQAAQBAJ',[['Bibliography',283,308],['Notes',309,340]],'Google Books publisher contents: bibliography 283, notes 309, index 341.',web('ranges60'));
add('n39859b1b54','ISBN:9780691196022',2020,'https://www.gbv.de/dms/tib-ub-hannover/1698700350.pdf',[['References',355,398]],'Library contents scan: references 355, index 399.',web('focus4'));
add('rem-u1810','YES24:109806524',null,'https://m.yes24.com/goods/detail/109806524',[['Select Bibliography',285,288],['Notes',289,327]],'Retailer contents for Ananyo Bhattacharya: bibliography 285, notes 289, image credits 328. Image credits excluded. Edition year and ISBN not confirmed; retailer record identifies this pagination.',web('ranges20'));
add('g0532','ISBN:9781422160596',2012,'https://www.betterworldbooks.com/product/detail/understanding-michael-porter-the-essential-guide-to-competition-and-strategy-9781422160596/new',[['Chapter Notes and Sources',223,228]],'Retailer contents: chapter notes and sources 223, index 229. Catalog copyright year 2012; retail release December 2011.',web('ranges44'));
add('g0387','ISBN:9781633697621',2020,'https://www.ctoforum.org/wp-content/uploads/2025/07/Competing-in-the-Age-of-AI-TMS.pdf',[['Notes',231,242]],'Publisher text distributed by CTO Forum: notes 231, index 243.',web('ranges64'));
add('g0495','GoogleBooks:a-INj4-rzpYC',2011,'https://books.google.com/books/about/Adapt.html?hl=en&id=a-INj4-rzpYC&output=html_text',[['Notes',267,298]],'Google Books contents: notes 267, index 299. Google volume identifies the edition; do not assume it matches the existing total-page edition.',web('ranges76'));
add('g0228','ISBN:9780062435613',2016,'https://discover.knoxcountylibrary.org/Record/457191',[['Bibliographical references',233,233]],'Catalog explicitly identifies references on page 233. This is the catalogued section scope, not a claim that the book has no other citations.',web('ranges92'));
add('n9bf0b7ae1d','ISBN:9783030705756',2021,'https://books.google.com/books?id=oKkxEAAAQBAJ',[['Appendix References',405,415]],'Publisher Google Books contents: Appendix References 405, index 416.',web('extra01'));
const beforePath=`${dir}/before-reference-pages.json`;
if(!fs.existsSync(beforePath))write(beforePath,read('site/reference-pages.json'));
const before=read(beforePath),manual=read('data/reference_pages_261022/manual.json');
for(const [id,r] of Object.entries(accepted)){assert.equal(before[id].pages,null);manual[id]=r;}
write(`${dir}/accepted.json`,accepted);
write('data/reference_pages_261022/manual.json',manual);
console.log(`Accepted ${Object.keys(accepted).length} of ${targets.length} targets.`);
