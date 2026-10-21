import fs from 'node:fs';
const dir='data/enrichment_261020/domains_b/';
const pack=JSON.parse(fs.readFileSync(dir+'evidence.json','utf8'));
const domains='SCI QNT CMP HTC ENG ENE MAT PRD QLT LOG TRD SCL INN INS ECO FIN POL MIL STR HEU'.split(' ');
const assessments={};
const reviewedThrough=Number(process.argv[2]??-1);
const judgments=new Map(fs.readFileSync(dir+'judgments.txt','utf8').trim().split(/\r?\n/).filter(Boolean).map(l=>{const [i,codes,...why]=l.split('|');return [+i,{codes:codes.split(' '),why:why.join('|')}];}));
const mechanisms=fs.existsSync(dir+'mechanisms.json')?JSON.parse(fs.readFileSync(dir+'mechanisms.json','utf8')):{};
for(let i=0;i<=reviewedThrough;i++){
 const b=pack[i],j=judgments.get(i),graded={};
 if(j)for(const c of j.codes){const id=c.slice(0,-1),value=+c.slice(-1);if(!domains.includes(id)||value<0||value>4)throw Error(c);graded[id]={value,confidence:'low',rationale:j.why+' Depth is a cautious assessment from the cited prior review, not a full-text measurement.',refs:b.refs};}
 const useful=b.material.filter(s=>!(/^\||^Amazon and readers|^Evidence:|^Purchase locator:|^Reader display:/.test(s)));
 const absent=domains.filter(d=>!(d in graded));
 assessments[b.id]={domains:graded,connections:{status:'partial',mechanisms:mechanisms[b.id]||[],joins:[],inspectedMaterial:b.refs,limitations:'Prior book-specific assessment excerpts were inspected. A full contents/sample review and a complete inventory of mechanisms and joins are not established; absence of a recorded mechanism is not an assessed zero.'},researchAudit:{reviewDate:'2026-10-20',reviewStatus:'prior-evidence-reviewed',confidence:'low',inspectedMaterial:b.refs,evidenceExcerpt:useful.join('\n\n').slice(0,12000),knownDomains:Object.keys(graded),unknownDomains:absent,unknownReason:j?'The cited evidence supports the coded threads but does not establish the depth or absence of the other domains.':'The inspected material does not establish a sufficiently specific explanatory treatment to assign domain-depth grades. Numeric quality assessments and title words alone were not converted into grades.',assessmentMethod:'Manual semantic review of book-specific repository assessment excerpts. No title/keyword-to-grade rule. Known grades are conservative estimates and require later contents/sample verification.'}};
}
fs.writeFileSync(dir+'assessments.json',JSON.stringify(assessments,null,2)+'\n');
const summary={assigned:pack.length,reviewed:Object.keys(assessments).length,booksWithKnownDomains:Object.values(assessments).filter(b=>Object.keys(b.domains).length).length,knownDomainValues:Object.values(assessments).reduce((n,b)=>n+Object.keys(b.domains).length,0),unknownDomainValues:Object.values(assessments).reduce((n,b)=>n+b.researchAudit.unknownDomains.length,0),mechanisms:Object.values(assessments).reduce((n,b)=>n+b.connections.mechanisms.length,0),completeConnectionReviews:0,limitations:'Prior evidence only; full text not reviewed. Unknown values and partial connections are intentionally retained.'};
fs.writeFileSync(dir+'audit.json',JSON.stringify(summary,null,2)+'\n');console.log(JSON.stringify(summary));
