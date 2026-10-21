import fs from 'node:fs';
const dir = 'data/sources_261020/reddit';
const sources = JSON.parse(fs.readFileSync(`${dir}/sources.json`));
fs.mkdirSync(`${dir}/readable`, { recursive: true });
for (const { source } of sources) {
  const raw = JSON.parse(fs.readFileSync(`${dir}/raw/${source}-web.json`));
  const parts = [raw];
  if (fs.existsSync(`${dir}/raw/${source}-tail.json`)) parts.push(JSON.parse(fs.readFileSync(`${dir}/raw/${source}-tail.json`)));
  const lines = new Map();
  for (const part of parts) for (const m of part.matchAll(/L(\d+): ([\s\S]*?)(?=\sL\d+: |\nL\d+: |$)/g)) lines.set(+m[1], m[2].trim());
  const cutoff = [...lines].find(([, body]) => /^(?:# More posts you may like|\* cite)/.test(body))?.[0] ?? Infinity;
  const body = (lines.size ? [...lines].filter(([line]) => line < cutoff).sort((a, b) => a[0] - b[0]).map(([line, text]) => `L${line}: ${text}`).join('\n') : raw).replace(/cite(\d+)†([^]+)/g, '[$2](web-link:$1)');
  fs.writeFileSync(`${dir}/readable/${source}.txt`, body + '\n');
  console.log(`${source}: ${body.length} characters`);
}
