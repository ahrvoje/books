const fs=require('fs'),inv=require('./inventory.json'),prior=require('./prior.json');
const keys=['E','S','U','M','D','R','F','A','N','P'];
const catalogs=fs.readdirSync(__dirname+'/catalog').flatMap(f=>require('./catalog/'+f).data?.docs||[]);
function evidence(id){const af=__dirname+'/amazon/'+id+'.json';const a=fs.existsSync(af)?require(af):{};const b=inv.books.find(b=>b.id===id);const works=catalogs.filter(c=>c.isbn?.includes(b.appearances[0].asin)).filter(c=>fs.existsSync(__dirname+c.key+'.json')).map(c=>'https://openlibrary.org'+c.key);return [...new Set([a.selected?.url||b.appearances[0].url,...works])];}
function row(id,year,raw,T11,T12,periodEnd,reason,rationale,extra={}){return {id,status:'recommended',year,raw,T11,T12,periodEnd,periodConfidence:periodEnd===null?'high':'low',yearConfidence:'moderate',confidence:'low',reason,rationale,evidence:evidence(id),...extra};}
function retain(id,priorId,reason,rationale,extra={}){const b=prior.find(b=>b.id===priorId);return row(id,b.originalYear??b.production?.year,b.raw||keys.map(k=>b.linearPoints[k]),b.deductions.T11,b.deductions.T12,b.periodEnd??b.assessment?.periodEnd??null,reason,rationale,{priorId,status:b.status,veto:b.veto,vetoConfidence:b.vetoConfidence,confidence:b.scoreConfidence||'moderate',...extra});}
function exclude(id,exclusion,reason,extra={}){return{id,status:'excluded',exclusion,confidence:'high',reason,evidence:evidence(id),...extra};}
module.exports={row,retain,exclude,evidence};
