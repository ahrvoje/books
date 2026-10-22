import test from 'node:test';
import assert from 'node:assert/strict';
import {referenceRanges,matches} from './collect.mjs';
test('ranges are inclusive, abbreviated endpoints expand, and overlaps are not counted twice',()=>{
  assert.equal(referenceRanges({notes:'Includes bibliographical references (p. [208]-210) and index.'}).pages,3);
  assert.equal(referenceRanges({notes:'Bibliography: p. 391-405. Notes: p. 390-95.'}).pages,16);
  assert.equal(referenceRanges({notes:'Includes bibliographical references and index.'}).pages,null);
  assert.equal(referenceRanges({notes:'Index: p. 208-210.'}).pages,null);
});
test('contents use next section boundaries; no count is inferred from an unbounded last section',()=>{
  const toc=[{title:'Notes',pagenum:'200'},{title:'Bibliography',pagenum:'210'},{title:'Acknowledgments',pagenum:'220'},{title:'Index',pagenum:'224'}];
  assert.equal(referenceRanges({table_of_contents:toc}).pages,20);
  assert.equal(referenceRanges({table_of_contents:[toc[0]]}).pages,null);
});
test('same title by another author does not pass identity matching',()=>{
  const b={title:'How the World Really Works',author:'Vaclav Smil'};
  assert.equal(matches(b,{title:b.title,authors:[{name:'Alan B. Jones'}]}),false);
  assert.equal(matches(b,{title:b.title,authors:[{name:'Vaclav Smil'}]}),true);
  assert.equal(matches({title:'Complexity',author:'Melanie Mitchell'},{title:'Complexity',authors:[{name:'M. Mitchell Waldrop'}]}),false);
  assert.equal(matches({title:'A City on Mars',author:'Kelly Weinersmith; Zach Weinersmith'},{title:'A City on Mars',by_statement:'Kelly Weinersmith, Zach Weinersmith'}),true);
});
