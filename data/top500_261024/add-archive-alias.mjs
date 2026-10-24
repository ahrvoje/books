import fs from 'node:fs';
import {referenceRanges} from '../reference_pages_261022/collect.mjs';
const dir='data/top500_261024/',file=dir+'raw/archive-q0143.json';
const d=JSON.parse(fs.readFileSync(file)).response.docs.find(d=>d.identifier==='dictatorshandboo0000buen');
const notes=Array.isArray(d.description)?d.description.join('\n'):d.description,r=referenceRanges({notes});
if(r.pages!==13)throw Error('Unexpected reference range');
const out={'q0143':{referenceRecord:{pages:r.pages,ranges:r.spans,confidence:'moderate',method:'catalogued-reference-ranges',edition:{id:'ISBN:9781610390446',title:d.title,author:d.creator,year:'2011',language:'English'},url:'https://archive.org/details/'+d.identifier,source:{file,retrieved:'2026-10-24',evidence:notes},sameEditionAsPG:false,limitation:'Explicit library reference range. The compound surname Bueno de Mesquita was reconciled manually. Total-page edition may differ; unlisted notes are not counted.'}}};
fs.writeFileSync(dir+'manual-37.json',JSON.stringify(out,null,2)+'\n');
