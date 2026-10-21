const fs=require('fs');
const dir='data/glasp_261019/',books=require('./inventory.json').books;
fs.mkdirSync(dir+'catalog',{recursive:true});
async function main(){
 const items=books.filter(b=>/^\d[\dX]{9}$/.test(b.appearances[0].asin||''));
 for(let i=0;i<items.length;i+=40){const group=items.slice(i,i+40),file=dir+'catalog/batch'+String(i).padStart(4,'0')+'.json';if(fs.existsSync(file))continue;
 const q='isbn:('+group.map(b=>b.appearances[0].asin).join(' OR ')+')';const url='https://openlibrary.org/search.json?'+new URLSearchParams({q,fields:'key,title,author_name,first_publish_year,isbn,edition_count',limit:'100'});
 try{const r=await fetch(url,{signal:AbortSignal.timeout(30000),headers:{'User-Agent':'BookSourceResearch/1.0'}}),text=await r.text();let data;try{data=JSON.parse(text)}catch{data={error:text.slice(0,500)}}fs.writeFileSync(file,JSON.stringify({url,retrievedAt:new Date().toISOString(),status:r.status,ids:group.map(b=>b.id),data},null,2));console.log(i,r.status,data.docs?.length);}catch(e){console.log(i,e.message)}
 await new Promise(r=>setTimeout(r,1100));
 }
}
main();
