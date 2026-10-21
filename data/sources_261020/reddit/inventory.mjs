import fs from 'node:fs';
const dir = 'data/sources_261020/reddit';
const definitions = JSON.parse(fs.readFileSync(`${dir}/sources.json`));
const locators = new Map();
for (const file of fs.readdirSync(`${dir}/raw`).filter(f => /^comment-locators-\d+\.json$/.test(f))) {
  const raw = JSON.parse(fs.readFileSync(`${dir}/raw/${file}`));
  for (const m of raw.matchAll(/Source: click\(\{"ref_id":"([^"]+)","id":(\d+)\}\)[\s\S]*?Failed to fetch (https:\/\/www\.reddit\.com\/r\/[^/]+\/comments\/[^/]+\/comment\/([^/?]+)\/)/g)) {
    locators.set(`${m[1]}:${m[2]}`, {url:m[3], id:m[4]});
  }
}
const extras = fs.existsSync(`${dir}/extras.json`) ? JSON.parse(fs.readFileSync(`${dir}/extras.json`)) : {};
const result = { version: 1, generated: new Date().toISOString(), status: 'Captured source extraction complete; coverage partial', sources: [] };
for (const definition of definitions) {
  const {source} = definition;
  const raw = JSON.parse(fs.readFileSync(`${dir}/raw/${source}-web.json`));
  const parts = [raw];
  if (fs.existsSync(`${dir}/raw/${source}-tail.json`)) parts.push(JSON.parse(fs.readFileSync(`${dir}/raw/${source}-tail.json`)));
  const lines = new Map();
  for (const part of parts) for (const m of part.matchAll(/L(\d+): ([\s\S]*?)(?=\sL\d+: |\nL\d+: |$)/g)) lines.set(+m[1], m[2].trim());
  const cutoff = [...lines].find(([,body])=>/^(?:# More posts you may like|\* cite)/.test(body))?.[0] ?? Infinity;
  const ordered = [...lines].filter(([line])=>line<cutoff).sort((a,b)=>a[0]-b[0]);
  const clean = text => text.replace(/cite\d+†([^]+)/g,'$1').replace(/\s+/g,' ').trim();
  const ref=raw.match(/turn\d+view\d+/)?.[0];
  const timestamp = /cite(\d+)†\d+(?:h|d|mo|y) ago/g;
  const anchors = ordered.flatMap(([line, text])=>[...text.matchAll(timestamp)].map(m=>({line, link:+m[1]})));
  const claimsFile = `${dir}/claims-${source}.tsv`;
  const records = fs.existsSync(claimsFile) ? fs.readFileSync(claimsFile,'utf8').trim().split(/\r?\n/).filter(Boolean) : [];
  const books = records.map(row=>{
    const [lineText,title,author='',identityNotes='']=row.split('\t');
    const line=+lineText;
    const anchor=anchors.filter(a=>a.line<=line).at(-1);
    const locator=anchor?{webRef:ref,webLink:anchor.link,line}: {postId:definition.id,line};
    const quote=clean(lines.get(line)||'');
    const at=quote.toLowerCase().indexOf(title.toLowerCase());
    const comment=anchor?locators.get(`${ref}:${anchor.link}`):null;
    return {title, ...(author?{author}:{}),commentIds:comment?[comment.id]:[],sourceQuotes:[quote.slice(Math.max(0,at-50),Math.max(0,at-50)+550)],sourceUrls:[comment?.url||definition.url],identityNotes,sourceLocator:locator};
  });
  const more=[...raw.matchAll(/cite(\d+)†[Mm]ore replies/g)].map(m=>+m[1]);
  result.sources.push({
    source,url:definition.url,title:clean(raw.split('\n')[0]).replace(/ : r\/.*$/,''),
    retrieved:new Date(fs.statSync(`${dir}/raw/${source}-web.json`).mtimeMs).toISOString(),
    coverage:{status:source===147?'unavailable':'partial',capturedVisibleComments:anchors.length,expectedCommentCount:null,unexpandedReplyLinks:[...new Set(more)],reason:source===147?'Web reader cache miss; no browser surface available. The initial public JSON request for source 127 returned 403, so this JSON endpoint was not retried.':'Visible web-reader comments captured. '+(more.length?'Linked reply expansions returned cache misses. ':'No reply-expansion link was exposed in the captured view. ')+'The initial public JSON request for source 127 returned 403; collection stopped without further JSON requests. Total and hidden/deleted comments cannot be verified.',images:source===145?'OP image identified but image CDN returned 403 and web reader cache miss; covers not inspected. Titles in the AI-transcription comment are comment claims only.':source===147?'OP image unavailable.':'No book image identified in captured OP.'},
    extractionComplete:fs.existsSync(claimsFile),books,nonBooks:extras[source]?.nonBooks||[],unresolvedMentions:extras[source]?.unresolvedMentions||[],rawFiles:[`${dir}/raw/${source}-web.json`,...(parts.length>1?[`${dir}/raw/${source}-tail.json`]:[])],readableFile:`${dir}/readable/${source}.txt`
  });
}
result.counts={sources:result.sources.length,completedInventories:result.sources.filter(s=>s.extractionComplete).length,bookOccurrences:result.sources.reduce((n,s)=>n+s.books.length,0)};
fs.writeFileSync(`${dir}/inventory.json`,JSON.stringify(result,null,2)+'\n');
console.log(JSON.stringify(result.counts));
