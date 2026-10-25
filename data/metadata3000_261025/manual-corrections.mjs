import fs from 'node:fs';
const dir='data/metadata3000_261025',m=JSON.parse(fs.readFileSync(dir+'/manual.json'));
const source={file:dir+'/raw/link-correction-evidence.json',retrieved:'2026-10-25'};
const url='https://academic.macmillan.com/academictrade/9781250151193/nineteenwaysoflookingatconsciousness/';
m['shelf-4d7576102855']={
 correctEdition:{id:'ISBN:1250151198',title:'Nineteen Ways of Looking at Consciousness',authors:'Patrick House',pages:272,year:2024,publisher:"St. Martin’s Griffin",format:'Trade Paperback',language:'English',isbn10:['1250151198'],isbn13:['9781250151193'],url,source:{...source,url,evidence:'Publisher: Patrick House; trade paperback; 272 pages; ISBN 9781250151193; 5 March 2024.'},retrieved:'2026-10-25',confidence:'high',notes:'Corrects the previous 164-page 1980 record, which belongs to Party politics and foreign policy by I. A. Gambari. The old Amazon identifier was a truncated ISBN-13. Publisher-confirmed page count and paperback identity.'},
 product:{id:'1250151198',format:'Trade Paperback',url,source:source.file,replaceExisting:true,reason:'Old product identifier 9781250151 identifies an unrelated work; corrected using the publisher’s ISBN-13.'}
};
m['shelf-0dd5c66845f5']={product:{id:'0393347796',format:'Paperback',url:'https://www.thalia.de/shop/home/artikeldetails/A1032424001',source:source.file,replaceExisting:true,reason:'The previous identifier 9876702076 is the Spanish translation. The replacement identifies the English paperback, ISBN 9780393347791.'}};
m['shelf-0ad768ed00fb']={searchCorrection:{url:'https://www.amazon.de/s?k=Delphi+Complete+Works+of+William+James',evidenceUrl:'https://www.delphiclassics.com/shop/william-james/',source:source.file,reason:'The previous identifier 185733874X belongs to UAE - Culture Smart! by John Walsh. Delphi confirms the William James collection, but no matching Amazon product identifier was verified. Use an accurately named search instead of the wrong product.'}};
fs.writeFileSync(dir+'/manual.json',JSON.stringify(m,null,2));
