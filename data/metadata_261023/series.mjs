import fs from 'node:fs';
const dir='data/metadata_261023/';
for(const [name,title,author]of [['british','British intelligence in the Second World War','Hinsley'],['moments','Great moments in mathematics','Eves']]){
 const file=dir+'series-'+name+'.json';if(fs.existsSync(file))continue;
 const url='https://openlibrary.org/search.json?title='+encodeURIComponent(title)+'&author='+author+'&fields=key,title,edition_key&limit=20';
 const response=await fetch(url,{signal:AbortSignal.timeout(25000)}),search=await response.json();
 await new Promise(r=>setTimeout(r,3000));
 const keys=[...new Set(search.docs.flatMap(d=>d.edition_key||[]))].slice(0,100),books={};
 for(let i=0;i<keys.length;i+=30){const endpoint='https://openlibrary.org/api/books?bibkeys='+keys.slice(i,i+30).map(k=>'OLID:'+k).join(',')+'&jscmd=details&format=json';const r=await fetch(endpoint,{signal:AbortSignal.timeout(25000)});Object.assign(books,await r.json());await new Promise(r=>setTimeout(r,3000));}
 fs.writeFileSync(file,JSON.stringify({url,retrieved:new Date().toISOString(),search,books},null,2)+'\n');
 console.log(name,keys.length);for(const [id,b]of Object.entries(books)){const d=b.details;console.log(id,d.title,d.publish_date,JSON.stringify(d.pagination),d.number_of_pages,d.isbn_10,d.languages);}
}
