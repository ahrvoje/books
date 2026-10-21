const fs=require('fs'),assert=require('assert/strict');
const file=__dirname+'/inventory.json',inv=JSON.parse(fs.readFileSync(file));
const sets={
 g1005:['The Age of Napoleon','Rousseau and Revolution','The Age of Louis XIV','The Age of Reason Begins','The Age of Voltaire'],
 g1112:['The Life of Greece','Caesar and Christ','Our Oriental Heritage','The Age of Faith','The Reformation','The Renaissance']
};
const changes=[];
for(const [id,titles] of Object.entries(sets)){
 const at=inv.books.findIndex(b=>b.id===id),old=inv.books[at];
 if(old.appearances.length===1)continue;
 assert.equal(old.appearances.length,titles.length);
 const split=titles.map((title,i)=>({...old,id:i?id+String.fromCharCode(97+i):id,title,appearances:[old.appearances[i]],identityNote:'Distinct volume identified by the source detail URL and edition identifier; category used the series title.'}));
 inv.books.splice(at,1,...split);changes.push(...split.map(b=>({id:b.id,title:b.title,asin:b.appearances[0].asin})));
}
fs.writeFileSync(file,JSON.stringify(inv,null,2));
fs.writeFileSync(__dirname+'/identity_splits.json',JSON.stringify(changes,null,2));
console.log(JSON.stringify({books:inv.books.length,changes},null,2));
