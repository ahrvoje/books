import {dir,read,write} from './capture.mjs';
const rows=read(dir+'/rows.json');
const aliases={'shelf-74c6f4f51c43':'n9f4e426334','shelf-11620f9422a7':'progress-0078'};
for(const [id,target]of Object.entries(aliases))for(const r of rows.filter(r=>r.newId===id)){r.id=target;r.status='recommended';r.identityEvidence=id==='shelf-74c6f4f51c43'?'https://openlibrary.org/works/OL14872150W/The_scientists':'Diane Coyle: GDP: A Brief but Affectionate History; source reverses title and subtitle.';delete r.newId;}
write(dir+'/rows.json',rows);
