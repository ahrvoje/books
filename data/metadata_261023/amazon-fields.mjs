import {amazonFields,clean,authorMatches as priorAuthorMatches,norm} from '../pages_density_261021/collect.mjs';
export function authorMatches(expected,observed){
 const text=' '+norm(observed)+' ';
 return priorAuthorMatches(expected,observed)||expected.split(/;| and | & /).some(name=>{
  const full=norm(name.replace(/\([^)]*\)/g,''));return full.split(' ').length>1&&text.includes(' '+full+' ');
 });
}
export function fields(html){
 const f=amazonFields(html);
 f.authorCards=[...html.matchAll(/<div[^>]+class="[^"]*follow-the-author-card_style_authorNameColumn[^"]*">([\s\S]*?)<\/a>/g)].map(m=>clean(m[1])).filter(Boolean);
 if(f.authorCards.length)f.byline+='; Author card: '+[...new Set(f.authorCards)].join('; ');
 return f;
}
