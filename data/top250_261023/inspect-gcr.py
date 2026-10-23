from pathlib import Path
from pypdf import PdfReader
import re,json,sys
sys.stdout.reconfigure(encoding='utf-8',errors='replace')
root=Path('data/top250_261023')
cache=root/'raw/gcr-pages.json'
if cache.exists(): pages=json.loads(cache.read_text(encoding='utf8'))
else:
    pages=[p.extract_text() or '' for p in PdfReader(root/'raw/gcr.pdf').pages]
    cache.write_text(json.dumps(pages,ensure_ascii=False),encoding='utf8')
print('PDF pages',len(pages))
for i,t in enumerate(pages):
    if any(re.sub(r'[^a-z]','',line.lower()) in ['references','bibliography','furtherreading','suggestionsforfurtherreading'] for line in t.splitlines()):
        print('REF PDF',i+1,'HEAD',repr(t[:110]),'TAIL',repr(t[-80:]))
        for j in range(i+1,min(i+5,len(pages))):print('NEXT PDF',j+1,repr(pages[j][:155]))
