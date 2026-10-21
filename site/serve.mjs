import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { OUTPUT_DIR } from './build.mjs';
const port = Number(process.env.BOOKS_PORT || 4173);
const types = { '.html': 'text/html; charset=utf-8', '.md': 'text/plain; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript', '.json': 'application/json', '.mjs': 'text/javascript' };
const server = http.createServer((req, res) => {
  let relative;
  try { relative = decodeURIComponent(new URL(req.url, 'http://localhost').pathname).replace(/^\/+/, '') || 'index.html'; }
  catch { res.writeHead(400).end(); return; }
  const file = path.resolve(OUTPUT_DIR, relative);
  if (!file.startsWith(OUTPUT_DIR + path.sep) || relative.split(/[\\/]/).some(p => p.startsWith('.')) || !fs.existsSync(file) || !fs.statSync(file).isFile()) {
    res.writeHead(404).end('Not found'); return;
  }
  res.writeHead(200, { 'Content-Type': types[path.extname(file)] || 'application/octet-stream', 'Cache-Control': 'no-store' });
  fs.createReadStream(file).pipe(res);
});
server.listen(port, '127.0.0.1', () => console.log(`Local: http://127.0.0.1:${port}`));
