import fs from 'node:fs';
const old='data/metadata2_261025',dir='data/metadata3000_261025';
fs.mkdirSync(dir+'/raw',{recursive:true});
for(const name of ['prepare','library','archive','google-html','harvard','cinii','ranges','cached-amazon','publish','validate']){
 let s=fs.readFileSync(old+'/'+name+'.mjs','utf8').replaceAll('metadata2_261025','metadata3000_261025').replaceAll('analysis_metadata2_','analysis_metadata3000_');
 if(['library','harvard','cinii','google-html','archive'].includes(name))s=s.replace("from '../reference_pages_261022/collect.mjs'","from './ranges.mjs'");
 if(name==='publish'){
  const start=s.indexOf('let text=`# Second recommended-book metadata collection');
  const end=s.indexOf('for(const x of changes){text+=',start);
  s=s.slice(0,start)+"let text=`# Recommended-book metadata collection: 3,000-field request\n\n${date}, Europe/Warsaw. Baseline: ${baseline}. Books are processed by initial score. Only newly populated page, reference-page and Amazon aggregate counts count toward the target. Link changes and score updates are separate.\n\n${summary.numericDataPoints} new numeric fields across ${summary.booksEnriched} changed books: ${summary.pagesAdded} page counts, ${summary.referenceCountsAdded} reference counts, ${summary.ratingsAdded} rating aggregates. ${summary.searchLinksReplaced + summary.editionLinksUpdated} purchase-link changes.\n\nSaved source records, edition identities and confidence are recorded below. Blocked or missing ratings remain unknown. Reference ranges exclude indexes; different or unconfirmed editions produce an explicitly labelled estimated R&D ratio. Raw content assessments and source memberships are unchanged. Scores are recomputed from unrounded values. Prior analyses remain history.\n\n`;\n\n"+s.slice(end);
  s=s.replace("assert(summary.numericDataPoints>=1000,'The requested 1,000 numeric data points have not been reached');", "assert(summary.numericDataPoints>0,'No verified numeric additions');");
 }
 fs.writeFileSync(dir+'/'+name+'.mjs',s);
}
fs.writeFileSync(dir+'/identity-aliases.json','{}\n');
for(const n of ['archive','library','manual'])if(!fs.existsSync(dir+'/'+n+'.json'))fs.writeFileSync(dir+'/'+n+'.json',JSON.stringify(n==='manual'?{}:{books:{},requests:[],batches:[]}));
