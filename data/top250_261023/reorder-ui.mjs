import fs from 'node:fs';
const path='site/app.js';let s=fs.readFileSync(path,'utf8');
const before='<td class="veto-meta">${esc(b.edition?.pages ?? "—")}</td><td class="veto-meta">${esc(b.referencePages.pages ?? "—")}</td><td class="veto-meta">${esc(b.amazon.count ?? "—")}</td><td class="veto-meta">${esc(b.veto)}</td><td class="veto-meta">${esc(b.confidence)}</td>';
const after='<td class="veto-meta">${esc(b.veto)}</td><td class="veto-meta">${esc(b.confidence)}</td><td class="veto-meta">${esc(b.amazon.count ?? "—")}</td><td class="veto-meta">${esc(b.edition?.pages ?? "—")}</td><td class="veto-meta">${esc(b.referencePages.pages ?? "—")}</td>';
if(!s.includes(before))throw Error('Veto table cells changed');
s=s.replace(before,after);
const mobile='Pages ${esc(b.edition?.pages ?? "—")} · Reference pages ${esc(b.referencePages.pages ?? "—")} · Amazon ratings ${esc(b.amazon.count ?? "—")} · ${esc(b.veto)} · ${esc(b.confidence)} confidence · Sources';
s=s.replace(mobile,'${esc(b.veto)} · ${esc(b.confidence)} confidence · Amazon ratings ${esc(b.amazon.count ?? "—")} · Pages ${esc(b.edition?.pages ?? "—")} · Reference pages ${esc(b.referencePages.pages ?? "—")} · Sources');
fs.writeFileSync(path,s);
