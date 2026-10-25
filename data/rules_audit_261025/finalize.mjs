import fs from 'node:fs';
const dir='data/rules_audit_261025',id='shelf-2a6e09ea7d5b';
const read=p=>JSON.parse(fs.readFileSync(p,'utf8'));
const write=(p,x)=>fs.writeFileSync(p,JSON.stringify(x,null,2)+'\n');
const reason='Art and cultural production are the central subject, including how commercial markets support artistic work. H7 applies to this analytical treatment of art; it is not classified as a marketing manual.';
const changes=read(dir+'/changes.json'),change=changes.find(x=>x.id===id),old=change.reason;
change.reason=reason;write(dir+'/changes.json',changes);
const c=read(dir+'/compiled.json');c.exclusions.find(x=>x.id===id).reason=reason;write(dir+'/compiled.json',c);
const report='analysis/analysis_rulesaudit_261025_0135.md';
let text=fs.readFileSync(report,'utf8');
const start=text.indexOf('<a id="'+id+'"></a>'),end=text.indexOf('<a id=',start+1);
text=text.slice(0,start)+text.slice(start,end).replace(old,reason)+text.slice(end);
fs.writeFileSync(report,text);
const categories=read('site/exclusion-categories.json');categories[id]='Misc. Non-fiction';write('site/exclusion-categories.json',categories);
const enrichment=read('site/enrichment.json'),archived={};
for(const x of changes)if(enrichment.books[x.id]){archived[x.id]=enrichment.books[x.id];delete enrichment.books[x.id];}
write(dir+'/archived-enrichment.json',archived);write('site/enrichment.json',enrichment);
const veto='VETOED_BOOKS.md';
fs.writeFileSync(veto,fs.readFileSync(veto,'utf8').replace('Updated **2026-10-24, Europe/Warsaw**. 670 unique works.','Updated **2026-10-25, Europe/Warsaw**. 675 unique works. [Current-rule audit and five new counterfactual breakdowns]('+report+') apply the current gates.'));
