const fs=require('fs'),path=require('path'),assert=require('assert/strict');
const edits=[
 ['assess_economics_tail_new1.cjs','g0883',s=>s.replace("['https://www.beacon.org/The-Great-Transformation-P46.aspx']","['https://www.beacon.org/The-Great-Transformation-P46.aspx','https://octopus-press.cz/en/Octopus-Press/Velka-Transformace']")],
 ['assess_economics_tail_new2.cjs','g0895',s=>s.replace('with moderate lineage confidence','with high lineage confidence').replace("'https://www.kodansha.co.jp/book/products/0000188405',","'https://www.kodansha.co.jp/book/products/0000188405','https://ci.nii.ac.jp/ncid/BB17701612',").replace('listYear:2013','listYear:2013,yearConfidence:\'high\'')],
 ['assess_economics_tail_new2.cjs','g0899',s=>s.replace("['https://www.penguinrandomhouse.com/books/566369/the-third-pillar-by-raghuram-rajan/',","['https://www.chicagobooth.edu/review/why-we-need-strengthen-communities','https://www.penguinrandomhouse.com/books/566369/the-third-pillar-by-raghuram-rajan/',")],
 ['assess_economics_tail_new2.cjs','g0908',s=>s.replace("['https://paultucker.me/unelected-power/',","['https://www.degruyterbrill.com/document/doi/10.1515/9780691196985/html','https://paultucker.me/unelected-power/',")]
];
for(const [file,id,edit] of edits){const p=path.join(__dirname,file),lines=fs.readFileSync(p,'utf8').split('\n'),i=lines.findIndex(s=>s.startsWith(`row('${id}'`));assert(i>=0,id);const next=edit(lines[i]);assert(next!==lines[i],id+' already edited or match failed');lines[i]=next;fs.writeFileSync(p,lines.join('\n'));}
console.log('Applied four final review evidence and date corrections.');
