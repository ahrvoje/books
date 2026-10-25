import fs from 'node:fs';
const read=p=>JSON.parse(fs.readFileSync(p,'utf8')),c=read(read('data/catalog.json').compiled),ed=read('site/editions.json');
const rules={H7:/\b(art|arts|artist|artists|painting|painter|poetry|poems|poet|sculpture|cinema|film|music|musical|literary|literature|novelists|shakespeare|aesthetic|photograph|photography|architecture|design|fashion|marketing|advertising|selling|sales|negotiat\w*|communicat\w*|relationship\w*|hiring|recruit\w*|human resources|public relations|persuasi\w*|copywriting|storytelling|friends|friendship)\b/i,H3:/\b(textbook|handbook|manual|reference|programming|proofs|problems and|problem solving|guide to|introduction to|principles of|calculus|equations|algorithms|cookbook|how to|course in|tutorial|workbook)\b/i,V7:/\b(meditat\w*|spiritual\w*|happiness|happy|self.help|parenting|diet|nutrition|health|healing|wellness|mindful\w*|gratitude|motivation|therapy|therapeutic|habit\w*|anxiety|relationships|discipline|fitness|cooking|recipes|optimism)\b/i,V58:/\b(god|gods|jesus|christ|christian|bible|biblical|buddha|buddhis\w*|theology|atheis\w*|religion|religious|quran|koran|islam|faith|soul|sacred|scripture)\b/i,H25:/\b(novel|fiction|stories|tales|children|young readers|kids|middle school|high school|grades)\b/i};
const out=[];
for(const b of c.currentBooks.filter(b=>b.status==='recommended')){
 const text=[b.title,b.subtitle].filter(Boolean).join(' '),flags=Object.entries(rules).filter(([k,r])=>r.test(text)).map(([k])=>k);
 if(ed[b.id]?.language&&!/english|croatian/i.test(ed[b.id].language))flags.push('H4');
 if(flags.length)out.push({id:b.id,title:b.title,author:b.author,flags,language:ed[b.id]?.language,review:b.scoreReview||b.reviewAnchor});
}
fs.mkdirSync('data/rules_audit_261025',{recursive:true});fs.writeFileSync('data/rules_audit_261025/screen.json',JSON.stringify(out,null,2));
console.log('Recommended screened:',c.currentBooks.filter(b=>b.status==='recommended').length,'Flagged:',out.length);
for(const k of ['H7','H4','H3','V7','V58','H25'])console.log('\n'+k+'\n'+out.filter(x=>x.flags.includes(k)).map(x=>x.id+' | '+x.title+' — '+x.author).join('\n'));
