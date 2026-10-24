from pathlib import Path
from pypdf import PdfReader
import json

for path in Path('data/top500_261024/raw').glob('*.pdf'):
    if path.with_suffix('.pages.json').exists():
        continue
    reader = PdfReader(path)
    pages = [page.extract_text() or '' for page in reader.pages]
    path.with_suffix('.pages.json').write_text(json.dumps(pages, ensure_ascii=False), encoding='utf-8')
    path.with_suffix('.txt').write_text('\f'.join(pages), encoding='utf-8')
    print(path.name, len(pages))
