import fs from 'node:fs';
import {fresh,unknownAmazon,enrichment,edition} from './assessment-utils.mjs';
export function tail(r){
  const {i,ref,extra=[],ed,domains=[],notes,...rest}=r;
  const files=fs.readdirSync('data/sources_261020/reddit/raw').filter(f=>/^tail-amazon-\d+\.json$/.test(f));
  const file=files.find(f=>JSON.parse(fs.readFileSync(`data/sources_261020/reddit/raw/${f}`)).queries.some(q=>q.i===i));
  if(!file)throw new Error(`Missing Amazon search ${i}`);
  return fresh(i,{
    confidence:'low',
    yearConfidence:'moderate',
    yearNote:`Original year ${r.year} follows the cited publication record; translated or revised editions do not reset it.`,
    periodEnd:null,periodConfidence:'moderate',
    periodNote:'Contemporary explanation or cross-period argument rather than a defined historical interval.',
    ...rest,notes:notes.split('|'),
    amazon:unknownAmazon(i,file),
    evidence:[ref,...extra],
    enrichment:enrichment(ref,domains,ed?edition(...ed):null,[],ed?'Edition identified; bounded description review leaves other domains and connections unknown.':'Purpose and identity checked; a format-specific complete page extent was not established. Other domains and connections remain unknown.')
  });
}
