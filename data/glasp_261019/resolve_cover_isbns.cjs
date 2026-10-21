const fs=require('fs'),assert=require('assert/strict'),file=__dirname+'/inventory.json',inv=JSON.parse(fs.readFileSync(file));
const changes=[];
for(const b of inv.books)for(const a of b.appearances){
 if(a.asin)continue;const digits=decodeURIComponent(a.imageUrl||'').match(/bookCovers\/(\d{9})\.webp/)?.[1];if(!digits)continue;
 const isbn='0'+digits;assert.equal([...isbn].reduce((sum,d,i)=>sum+(+d)*(10-i),0)%11,0,'ISBN checksum '+b.id);
 a.asin=isbn;a.asinResolution='Leading zero restored to nine-digit cover identifier; ISBN-10 check digit verified.';changes.push({id:b.id,title:b.title,asin:isbn});
}
fs.writeFileSync(file,JSON.stringify(inv,null,2));fs.writeFileSync(__dirname+'/cover_isbn_resolutions.json',JSON.stringify(changes,null,2));console.log(changes);
