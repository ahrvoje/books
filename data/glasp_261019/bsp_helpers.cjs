const fs=require('fs'),inv=require('./inventory.json'),prior=require('./prior.json');
const catalog=fs.readdirSync(__dirname+'/catalog').flatMap(f=>JSON.parse(fs.readFileSync(__dirname+'/catalog/'+f)).data?.docs||[]);
function evidence(id){const b=inv.books.find(b=>b.id===id),a=JSON.parse(fs.readFileSync(__dirname+'/amazon/'+id+'.json')).selected,c=catalog.find(x=>x.isbn?.includes(b.appearances[0].asin));return [a?.url||(c?'https://openlibrary.org'+c.key:'https://www.amazon.com/dp/'+b.appearances[0].asin)]}
function rec(id,year,raw,T11,T12,periodEnd,reason,rationale,extra={}){return {id,status:'recommended',year,raw,T11,T12,periodEnd,periodConfidence:periodEnd===null?'high':'low',confidence:'low',reason,rationale,evidence:evidence(id),...extra}}
function old(id){const p=prior.find(x=>x.id===id);return p.raw||Object.values(p.linearPoints)}
module.exports={rec,old,evidence};
