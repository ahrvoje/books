import fs from 'node:fs';
const dir='data/new_rules_261024/', read=p=>JSON.parse(fs.readFileSync(p,'utf8'));
const decisions=read(dir+'decisions.json'), old=read(read(dir+'baseline.json').previousPath);
const extra={
 'q1114':'Spiritual lessons and personal resilience are central to this memoir. Apply V7 to the spiritual guidance despite the creative autobiography component.',
 'n1dbbfe87fa':'Reported family experience and identity are central, rather than a parenting manual. Under the explicit instruction to include borderline cases, treat its sustained account of parenting children with different identities as V7. The reporting remains valuable; this is a scope decision.',
 'rem-u0273':'The argument about childhood mental health culminates in prescriptions for parents concerning phones, social media and independent play. Apply V7 to this borderline combination of social explanation, health and parenting advice.',
 'shelf-3ed18118ad63':'Personal life and success lessons addressed to the author’s children constitute life guidance under V7, despite the investment experience behind them.',
 'shelf-235d6870bf31':'Reporting on character, educational interventions and child development also concerns how adults help children succeed. Apply V7 at the parenting boundary as requested; this is not a claim that all education research is parenting advice.'
};
for(const [id,reason] of Object.entries(extra)) if(!decisions.some(d=>d.id===id)) {
 const b=old.currentBooks.find(b=>b.id===id);
 decisions.push({id,title:b.title,author:b.author,previousStatus:b.status,status:'vetoed',rule:'V7',borderline:true,confidence:'low',sources:b.sources,priorRefs:[b.reviewAnchor,b.scoreReview].filter(Boolean).map(r=>r.startsWith('analysis_')?'analysis/'+r:r),priorContent:[b.reason,b.note,...(b.criteria||[]).map(c=>c.assessment)].filter(Boolean),reason,evidence:[]});
}
const special={
 q0447:'Optimal experience and the organization of attention are presented as a route to a better life. Apply V7 at the boundary between research psychology and life guidance.',
 'rem-u1637':'Uses reward-system explanations and clinical stories to advise readers how to manage compulsive consumption and restore balance. Health and life advice are central enough for V7; neuroscience content does not override the gate.',
 'shelf-6e92880a0577':'Four weeks of daily reflections help readers accept limitations and change how they live. This is central life support under V7.',
 'shelf-e336020a7bd4':'Sustained argument about emptiness, dependent origination and intrinsic nature develops the philosophical foundations of Madhyamaka Buddhism. V8 expressly covers this purpose even when the method is analytical rather than devotional.',
 'shelf-44021a0a35b2':'Assesses Buddhist claims about mind, suffering and meditation through psychology and evolutionary arguments. Religious and spiritual truth assessment is central under V8; analytical treatment is not an exception.',
 'g0973':'Sacred experience and its philosophical basis are central. Apply V8 at the spiritual-foundation boundary as requested; this does not claim that Scruton offers a proof of God.',
 'g0673':'Arguments about religious experience and a nonmaterial account of mind place the work at the spiritual-foundation boundary of V8. Apply the borderline instruction without inferring that the reported experiments establish God.',
 ndcff489c85:'Jewish religious and cultural principles provide the framework for business advice. Apply V8 at the doctrine/application boundary as requested; this is not a finding that every business claim is theological.',
 g0931:'Spiritual teaching is conveyed through an autobiographical frame. Apply V8 to the spiritual philosophy despite the memoir component.',
 'shelf-b9e25764bcbd':'Listening exercises and reflections serve self-discovery and personal transformation. Apply V7 to that central life-guidance purpose.',
 q0610:'Advice about finitude, attention and how to spend one’s life is central, rather than a study of industrial time management. Apply V7.',
 'rem-u0167':'Child-development explanation supports an argument about how parents should raise children. The explicit parenting branch of V7 applies.',
 'rem-u1895':'The Tao and its implications for conduct are central spiritual and philosophical content. Apply V8; merge this title variant with the existing Tao Te Ching record.',
};
const links={
 'rem-u0387':'https://www.penguinrandomhouse.com/books/223077/1001-inventions-and-awesome-facts-from-muslim-civilization-by-national-geographic/',
 'rem-u0401':'https://us.macmillan.com/books/9781596434875/bomb/',
 'rem-u0486':'https://nomadpress.net/nomadpress-books/computer-decoder/',
 'rem-u0464':'https://nomadpress.net/nomadpress-books/human-computer/',
 n7d85eacac3:'https://www.kidscanpress.com/wp-content/uploads/2024/10/2024-Frankfurt-Rights-Catalogue.pdf',
 'rem-u0501':'https://books.google.com/books?id=l98vDwAAQJ',
 'rem-u0379':'https://books.google.com/books?id=p6T8DQAAQBAJ',
 'shelf-58ebbf0a7470':'https://catalog.freelibrary.org/Record/161041',
 'rem-u0362':'https://catalog.freelibrary.org/Record/979500',
 'shelf-ed9f2b5f8587':'https://www.simonandschuster.net/books/Before-Columbus/Charles-C-Mann/9781416949008',
 'rem-u1637':'https://www.annalembke.com/',
 'shelf-6e92880a0577':'https://www.oliverburkeman.com/meditationsformortals',
 'shelf-b9e25764bcbd':'https://www.shambhala.com/the-listening-book-925.html',
};
links['rem-u0501']='https://books.google.com/books?id=l98vDwAAQBAJ';
const health=/health|diet|food|gut|alcohol|drink\?|sleep|calories|breath|outlive|lifespan|dopamine|lost connections|come as you are|aging well|narcissist|codependent|nervous planet|play it away|reasons to stay alive/i;
const parent=/parent|child|baby|mother|father|sons|daughters|hold on to your kids|me, me, me/i;
const spiritual=/mindfulness|meditat|awakening|spirit|enlightenment|surrender|superior man|as a man thinketh/i;
for(const d of decisions){
 d.reason ||= special[d.id] || (d.rule==='H5'?'The recorded work is written or packaged for children or a precollege audience. H5 applies before scoring, including when scientific or engineering content is central.':d.rule==='H6'?'Routine institutional reporting or policy-roadmap activity is a substantial part of the work’s purpose. It also contains explanatory material, so the narrow H6 fit is uncertain. Exclude under the user’s explicit instruction to apply the new rules even to borderline cases.':d.rule==='V8'?'Religious or spiritual ideas and their philosophical basis are a central subject, rather than incidental context. V8 covers their explanation or truth assessment even without devotional intent.':d.rule==='V7'?(parent.test(d.title)?'Advice or sustained guidance about raising children and family relationships is central. Apply V7’s parenting branch.':health.test(d.title)?'Health, nutrition or personal well-being guidance is a central purpose alongside its explanatory content. Apply V7.':spiritual.test(d.title)?'Spiritual practice, inner transformation or meditation provides central guidance for living. Apply V7.':'Personal conduct, coping, fulfillment, relationships or self-development is a central practical purpose. Apply V7’s life-support branch, even when philosophy, psychology or professional experience supplies the framework.'):'');
 if(d.rule==='V6'){
  if(/Blackout/.test(d.title)){d.reason='Explicitly urges Black Americans to leave the Democratic Party and adopt a conservative political allegiance. Recruitment is central under V6.';d.evidence=['https://www.simonandschuster.biz/books/Blackout/Candace-Owens/9781982133283'];d.confidence='high';}
  else if(/Nothing to Lose/.test(d.title)){d.reason='Presents the author’s alliance with Trump as a political conversion and urges Black support for that movement. The mobilizing purpose meets V6.';d.evidence=['https://play.google.com/store/books/details/Pastor_Darrell_Scott_Nothing_to_Lose?id=5xnxDwAAQBAJ'];}
  else {d.reason='The attack on Obama serves an electoral purpose: the author’s stated aim includes avoiding the election of people like Obama. Apply V6 to this campaign-attack purpose, not merely to criticism of a president.';d.evidence=['https://www.conservativetruth.org/article.php?id=3066'];}
 }
 if(links[d.id])d.evidence=[links[d.id]];
 if(d.rule==='H6')d.evidence=[/World Energy/.test(d.title)?'https://www.iea.org/reports/world-energy-outlook-2025':/Net Zero/.test(d.title)?'https://www.iea.org/reports/net-zero-by-2050':/Sand/.test(d.title)?'https://wedocs.unep.org/items/9ec225c4-5a9f-44d0-a560-46e0c8264003':'https://www.oecd.org/en/publications/material-resources-productivity-and-the-environment_9789264190504-en.html'];
 if(d.borderline&&!d.reason.includes('borderline'))d.reason+=' Borderline classification applied on the user’s explicit instruction; explanatory content supports a narrower alternative reading.';
 d.evidenceBasis='Prior repository assessments and recorded identity/purpose evidence; linked external checks where supplied. No new full-book reading.';
}
fs.writeFileSync(dir+'decisions.json',JSON.stringify(decisions,null,2)+'\n');
console.log(decisions.length);
