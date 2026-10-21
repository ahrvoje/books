import fs from 'node:fs';
const dir='data/sources_261020/reddit';
const packet=JSON.parse(fs.readFileSync(`${dir}/packet.json`));
const rows=JSON.parse(fs.readFileSync(`${dir}/assessments.json`));
const at=i=>rows.find(x=>x.id===packet[i].id);
const map={MOD:'QNT',COM:'CMP'};
for(const r of rows){
  if(!r.enrichment)continue;
  const e=r.enrichment;
  e.domains=Object.fromEntries(Object.entries(e.domains||{}).map(([k,v])=>[map[k]||k,v]));
  for(const m of e.connections?.mechanisms||[]){
    m.domains=m.domains.map(k=>map[k]||k);
    m.roles=Object.fromEntries(Object.entries(m.roles||{}).map(([k,v])=>[map[k]||k,v]));
  }
}
at(287).periodEnd=null;
at(287).periodConfidence='moderate';
at(287).periodNote='Cross-period biographies extend from nineteenth-century figures through twentieth-century activists. A single central historical endpoint is not established, so H13 is zero; the former approximate 1930 endpoint is withdrawn.';
at(289).evidence=at(289).evidence.filter(s=>!s.includes('penguin.co.uk/books/309663'));
at(289).evidence.push('https://lucyfjones.com/books/');
at(311).evidence=at(311).evidence.filter(s=>!s.includes('elizabethlesser.org/cassandra-speaks'));
at(311).evidence.push('https://books.google.com/books?id=CSPBzAEACAAJ');
at(367).enrichment.research.unknownReason='The source nominates the complete five-numbered-volume history. Individual volume and 628-page abridgment records cannot establish the complete set’s extent; full-scope pages remain unknown.';
const mechanisms=[
  [271,['CMP','INS'],['Communication tools shape interruptions.','Organizations set coordination norms.'],'Unrestricted messaging creates repeated coordination interruptions that consume the attention needed for substantive work.','Office knowledge work described in the publisher account.'],
  [305,['ECO','INS'],['Hiring responds to labor-market incentives.','Organizations define job requirements and selection rules.'],'Employer expectations and hiring conventions can make credentials and individual effort poor predictors of access to work.','US hiring institutions and worker narratives.'],
  [319,['INN','QLT','INS'],['A collection kit standardizes an invention.','Evidence collection becomes more consistent.','Police and medical institutions determine adoption.'],'Standardizing evidence collection can improve reliability, but institutional adoption determines whether the technical improvement is used.','The development and adoption of the forensic evidence kit.'],
  [347,['MIL','LOG','STR'],['Anti-submarine operations protect shipping.','Atlantic shipping supplies Allied forces.','Resource allocation changes convoy survival.'],'Protection and routing decisions determine shipping losses and therefore the supply available for military operations.','The Atlantic campaign through 1945.'],
  [356,['INS','POL','LOG'],['Bureaucracies divide administrative tasks.','State coercion enables the policy.','Transport and resource coordination execute deportation.'],'Dividing persecution into ordinary administrative and transport tasks allows institutions to implement a destructive state policy at scale.','Hilberg’s account of the European Holocaust.'],
  [366,['QNT','CMP','STR'],['Mathematical methods attack ciphers.','Information processing changes feasible cryptanalysis.','Secrecy and intelligence constrain strategic choices.'],'Changes in cipher construction and analytic processing change which information adversaries can obtain and use.','Kahn’s cross-period history of cryptology.'],
  [367,['CMP','INS','MIL','STR'],['Signals and codebreaking produce information.','Assessment and distribution govern access.','Commanders apply intelligence in operations.','Decision makers choose among strategic options.'],'Collected intelligence affects operations only when institutions assess, distribute and translate it into decisions.','British intelligence and wartime operations through 1945.']
];
for(const [i,domains,roles,statement,scope] of mechanisms){
  const r=at(i),e=r.enrichment;
  if(domains.some(d=>!e.domains[d]?.value))continue;
  e.connections.mechanisms=[{id:`reddit-${i}-mechanism`,domains,roles:Object.fromEntries(domains.map((d,j)=>[d,roles[j]])),statement,scope,strength:2,confidence:'low',refs:[r.evidence[0]]}];
}
const expected=packet.filter((_,i)=>i<=116||i>=271).map(b=>b.id);
const valid=new Set('SCI QNT CMP HTC ENG ENE MAT PRD QLT LOG TRD SCL INN INS ECO FIN POL MIL STR HEU'.split(' '));
const errors=[];
for(const id of expected)if(rows.filter(r=>r.id===id).length!==1)errors.push(`Count mismatch ${id}`);
for(const r of rows){
  if(!expected.includes(r.id))errors.push(`Outside assigned scope ${r.id}`);
  if(['recommended','vetoed'].includes(r.status)){
    for(const k of ['raw','notes'])if(r[k]?.length!==10)errors.push(`${r.id} ${k}`);
    for(const k of ['eligibility','reason','yearNote','themeNote','periodNote','amazon','evidence','enrichment'])if(!r[k])errors.push(`${r.id} missing ${k}`);
    if(r.amazon?.count===0)errors.push(`${r.id} unverified zero`);
    for(const d of Object.keys(r.enrichment.domains||{}))if(!valid.has(d))errors.push(`${r.id} invalid domain ${d}`);
    if(/audio|disc|cassette/i.test(r.enrichment.edition?.format||''))errors.push(`${r.id} audio pages`);
  }else if(r.raw)errors.push(`${r.id} nonscored has raw`);
}
if(errors.length)throw new Error(errors.join('\n'));
fs.writeFileSync(`${dir}/assessments.json`,JSON.stringify(rows,null,2)+'\n');
const audit={
  reviewed:'2026-10-20',assignedIndices:'0–116 and 271–368',expected:215,saved:rows.length,
  statuses:rows.reduce((a,r)=>(a[r.status]=(a[r.status]||0)+1,a),{}),
  scored:rows.filter(r=>r.raw).length,
  editions:rows.filter(r=>r.raw&&r.enrichment?.edition).length,
  unavailableAmazon:rows.filter(r=>r.raw&&r.amazon?.count==null).length,
  unresolved:rows.filter(r=>r.status==='unresolved').map(({id,title,reason})=>({id,title,reason})),
  checks:'All assigned IDs exactly once; no transferred IDs; ten criterion notes and raw attainments; no audio pages; valid domain IDs; unknown counts remain null.',
  corrections:['Rape of Nanking central endpoint 1945 → 1938.','Wild Girls unsupported single 1930 endpoint withdrawn; cross-period account.','MOD/COM domain aliases corrected to QNT/CMP.','Two unverified guessed bibliography links replaced with retrieved author/Google Books records.'],
  coverageLimitations:['Reddit source 147 was inaccessible; no titles inferred.','Source 145 image returned 403/cache miss. Named books from its transcription comment are comment claims, not verified cover identifications.','Collapsed More Replies branches with cache misses remain incomplete; extraction audit records them.','Most new assessments use publisher descriptions, contents, samples and bibliography; confidence remains low where full critical evaluation is not available.','New Amazon counts are limited to two verified public product observations; other title-author index attempts exposed no usable aggregate and direct collection stopped at an access challenge.'],
  laterReview:['This Is for Everyone V5 is moderate-confidence because the publisher explicitly combines memoir and manifesto; the technical memoir passes H2.','Vanishing Treasures V5 is moderate-confidence because the conservation appeal is presented as a main purpose; natural-history topic alone is not the gate.','Several H2 boundaries are mixed explanatory/instructional works; each record states the primary-purpose evidence.','Series page extents remain unknown where only individual volumes or an abridgment were verified.','Some historical scope endpoints are approximate and explicitly low confidence; no publication year is used as a substitute for an unknown historical endpoint.']
};
fs.writeFileSync(`${dir}/assessment-audit.json`,JSON.stringify(audit,null,2)+'\n');
console.log(JSON.stringify(audit));
