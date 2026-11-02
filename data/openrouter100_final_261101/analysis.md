# Verified metadata collection with OpenRouter — 2026-11-01

**Completed: 100 distinct previously missing numeric values**, measured against the original pre-task catalog: **56 total-page counts, 32 Amazon rating aggregates and 12 reference-page counts**. The final pass adds 96 values and retains four valid values from the partial pass. One erroneous first-volume page count from the partial pass is removed; it does not count toward the 100. 45 scores change in this final pass.

## Method and confidence

The primary assistant selected targets, checked evidence and made the final decisions. External research workers used google/gemini-2.5-flash-lite through OpenRouter with Exa or Parallel web search. A separate google/gemini-2.5-flash worker checked all 96 selected new values against the saved source text. All 507 successful research calls and 8 audit calls are saved in [the research folder](../data/openrouter100_261101/raw/). Successful-call costs reported by OpenRouter total **$3.535862**; this is API-reported usage, not an invoice. Earlier HTTP 402 responses were real; the resumed requests succeeded, and no further balance inference was used to decide completion.

Numeric evidence comes from the retrieved source annotations, not model memory. Confidence is generally **moderate**; Arming the Union has **low** page-metadata confidence because an unidentified edition record conflicts with the selected ISBN-specific record. Amazon counts are indexed product snapshots with an unknown original snapshot date, retrieved on the date recorded per item. They are not guaranteed live counts. Each uses one matched product's explicit rating aggregate, never a written-review total or a sum of editions. No verified zero was found.

Reference counts use inclusive catalogued ranges, with arithmetic checked. A range can describe only the bibliography and omit notes elsewhere. Missing counts remain unknown. Ratios across different or unconfirmed editions are labelled estimates with low confidence. Content attainment, thematic deductions, publication age, source memberships and eligibility decisions are unchanged. No purchase links were changed. No source IDs were added.

The [partial report](../analysis/analysis_or100_261101_2220.md) is preserved as history. Its statement that no Amazon result passed was too broad: closer review found explicit global-rating totals in some saved source text, now included here. The 782-page HOPL value was a single-volume substitution for a series; it has been removed.

The second model flagged nine identity questions, mainly missing subtitles or abbreviated contributor credits. The primary assistant resolved each against the cited source; [the nine written resolutions](../data/openrouter100_261101/audit-resolutions.json) are retained with the raw audit outputs. Model agreement was not used as a substitute for source evidence.

## Retained values from the partial pass

| Book | Total pages | Edition evidence |
|---|---:|---|
| Prefabrication and the Re-Evolution of Construction — Marty Corrado | 228 | [ISBN:9798532126534](https://www.amazon.com/Prefabrication-Re-Evolution-Construction-Boots-Ground/dp/B09B63LFFZ) |
| This is Amancio Ortega: The Man Who Created Zara — Covadonga O'Shea | 272 | [ISBN:9781912555826](https://www.amazon.co.uk/Man-Zara-Revised-Genius-Inditex/dp/1912555824) |
| Incerto (Series) — Nassim Nicholas Taleb | 1872 | [ISBN:9780593243657](https://www.penguinrandomhouseretail.com/book/?isbn=9780593243657) |
| The Sources of Social Power Volume 2 — Michael Mann | 844 | [ISBN:9781107670648](https://www.cambridge.org/us/universitypress/subjects/sociology/social-theory/sources-social-power-volume-2-2nd-edition) |

## Newly accepted values

| Book | Field | Count | Source | Confidence |
|---|---|---:|---|---|
| Igniting the Light Elements — Anne C. Fitzpatrick | pages | 342 | [evidence](https://www.booktopia.com.au/igniting-the-light-elements-office-of-scientific-and-technical-in-/book/9781025157252.html) | moderate |
| Computer Connections — Gary Kildall | pages | 78 | [evidence](https://www.goodreads.com/book/show/31352895-computer-connections) | moderate |
| Surface Science — The First Thirty Years — Duke, C.B., ed. | pages | 332 | [evidence](https://www.isbnlab.com/book/9780444818270/surface-science-the-first-thirty-years) | moderate |
| The Barnstormer and The Lady: Aviation Legends Walter and Olive Ann Beech — Dennis Farney | pages | 240 | [evidence](https://www.amazon.com/dp/1935362690) | moderate |
| Prospects in Nanotechnology—Toward Molecular Manufacturing — Krummenacker, M. and J. Lewis, eds. | pages | 297 | [evidence](https://www.amazon.com/dp/0471309141) | moderate |
| The Paris Review Interviews, IV — The Paris Review; Philip Gourevitch (editor) | pages | 496 | [evidence](https://academic.macmillan.com/academictrade/9780312427443/theparisreviewinterviewsiv/) | moderate |
| Advice on Upskilling — Justin Skycak | pages | 238 | [evidence](https://www.amazon.com.be/dp/B0F74N18YF) | moderate |
| A Small Difference — Raymond Plank | pages | 352 | [evidence](https://www.amazon.com/dp/0533165261) | moderate |
| Japan As Number One Lessons for America — Ezra F. Vogel | pages | 272 | [evidence](https://openlibrary.org/books/OL9238765M/Japan_As_Number_One) | moderate |
| The Ageless Gergel — Max G. Gergel | pages | 218 | [evidence](https://www.goodreads.com/book/show/24821522-the-ageless-gergel) | moderate |
| Influenza — Dr. Jeremy Brown | pages | 272 | [evidence](https://www.libroworld.com/9781501181252/) | moderate |
| A History of Life-Extensionism in the Twentieth Century — Ilia Stambler | pages | 542 | [evidence](https://www.libroworld.com/9781500818579/) | moderate |
| Birdstories: A History of the Birds of New Zealand — Geoff Norman | pages | 372 | [evidence](https://www.worldofbooks.com/en-gb/products/birdstories-a-history-of-the-birds-of-new-zealand-book-geoff-norman-9780947503925) | moderate |
| Atomic Days: The Untold Story of the Most Toxic Place in America — Joshua Frank | pages | 258 | [evidence](https://www.haymarketbooks.org/books/1940-atomic-days) | moderate |
| Atomic Shield — Richard G. Hewlett and Francis Duncan | pages | 736 | [evidence](https://www.amazon.com/dp/0520071875) | moderate |
| Cable Cowboys — Mark Robichaux | pages | 338 | [evidence](https://www.amazon.com/dp/047170637X) | moderate |
| Imperial Tragedy — Michael Kulikowski | pages | 448 | [evidence](https://www.hive.co.uk/product/professor-michael-kulikowski/imperial-tragedy--from-constantines-empire-to-the-destruction-of-roman-italy-ad-363-568/25840184) | moderate |
| Voters as Mad Scientists — Bryan Caplan | pages | 226 | [evidence](https://www.amazon.com/dp/B0C2SD1K8B) | moderate |
| China’s World View — David Daokui Li | pages | 288 | [evidence](https://wwnorton.com/books/9780393292398) | moderate |
| Without Honour — Rob Tripp | pages | 368 | [evidence](https://www.amazon.com/dp/1443410624) | moderate |
| 1587: A Year of No Significance — Ray Huang | pages | 310 | [evidence](https://yalebooks.yale.edu/book/9780300028843/1587-a-year-of-no-significance/) | moderate |
| Adventures of a Reckless Amateur — Sverre Aarseth | pages | 261 | [evidence](https://www.readings.com.au/product/9781291991673/adventures-of-a-reckless-amateur--sverre-aarseth--2014--9781291991673) | moderate |
| The Antarctic Book of Cooking and Cleaning — Wendy Trusler | pages | 272 | [evidence](https://www.amazon.com/dp/0062395033) | moderate |
| Nietzsche: a complete introduction — Roy Jackson | pages | 256 | [evidence](https://biblio.co.uk/9781444790573) | moderate |
| The Shadow of Consciousness — Peter Hankins | pages | 186 | [evidence](https://www.google.com/books/edition/The_Shadow_of_Consciousness/4Go5rgEACAAJ?hl=en) | moderate |
| Kinds Of Minds: Toward An Understanding Of Consciousness (Science Masters Series) — Daniel C. Dennett | pages | 184 | [evidence](https://www.goodreads.com/work/editions/266790-kinds-of-minds-towards-an-understanding-of-consciousness) | moderate |
| Estée Lauder: A Success Story — Estée Lauder | pages | 222 | [evidence](https://www.goodreads.com/book/show/1748531.Est_e) | moderate |
| Brexit: What the Hell Happens Now? — Ian Dunt | pages | 192 | [evidence](https://www.waterstones.com/book/9780995497856) | moderate |
| Wittgenstein: A Very Short Introduction — A. C. Grayling | pages | 160 | [evidence](https://www.waterstones.com/book/wittgenstein/a-c-grayling/9780192854117) | moderate |
| The Gulag Archipelago: (Abridged edition) — Aleksandr Solzhenitsyn | pages | 576 | [evidence](https://www.amazon.co.uk/dp/1784871516) | moderate |
| The Call of Character — Mari Ruti | pages | 224 | [evidence](https://cup.columbia.edu/book/the-call-of-character/9780231164085/) | moderate |
| The Mental Floss History of the World: An Irreverent Romp Through Civilization’s Best Bits — Erik Sass, Steve Wiegand, Editors of Mental Floss | pages | 432 | [evidence](https://www.amazon.com/dp/0061842672) | moderate |
| Equal Power: A Handbook for Men and Women — Jo Swinson | pages | 400 | [evidence](https://retailho.circlepos.com/p/equal-power-a-handbook-for-men-and-women) | moderate |
| Don’t Be a Feminist — Bryan Caplan | pages | 248 | [evidence](https://www.amazon.com/dp/B0BD3DFMMH) | moderate |
| Burn This Book: PEN Writers Speak Out on the Power of the Word — Toni Morrison (editor) | pages | 128 | [evidence](https://bookscouter.com/author/morrison-toni) | moderate |
| Vermont’s Gunsmiths & Gunmakers to 1900 — Harry Phillips; Terry Tyler | pages | 306 | [evidence](https://www.amazon.com/dp/B0006RL4SO) | moderate |
| Out of the Blue Too — David Martin Jones; Chris Long; Ian Stonor (editors) | pages | 368 | [evidence](https://biblio.co.uk/book/out-blue-too-more-scary-often/d/1673312824) | moderate |
| Excelsior! The Amazing Life of Stan Lee — Stan Lee and George Mair | pages | 256 | [evidence](https://www.amazon.nl/dp/0684873052) | moderate |
| Black Inventors: Crafting Over 200 Years of Success — Keith C. Holmes, Roslyn Morrison, et al. | pages | 179 | [evidence](https://www.globalblackinventor.com/the-book/) | moderate |
| The Glasgow Effect: A Tale of Class, Capitalism & Carbon Footprint — Ellie Harrison | pages | 400 | [evidence](https://discovery.dundee.ac.uk/en/publications/the-glasgow-effect-a-tale-of-class-capitalism-amp-carbon-footprin-2/) | moderate |
| Gifted Hands: The Ben Carson Story — Ben Carson M.D. | pages | 240 | [evidence](https://www.waterstones.com/book/gifted-hands/ben-carson-m-d/cecil-murphey/9780310546511) | moderate |
| Reckoning with Race — Gene Dattel | pages | 352 | [evidence](https://www.encounterbooks.com/books/reckoning-with-race/) | moderate |
| The World of Natural Wine — Aaron Ayscough | pages | 440 | [evidence](https://www.waterstones.com/book/the-world-of-natural-wine/aaron-ayscough/9781579659394) | moderate |
| I, Steve: Steve Jobs In His Own Words — George Beahm | pages | 160 | [evidence](https://www.abebooks.com/9781932841664/Steve-Jobs-Own-Words-1932841660/plp) | moderate |
| Call the Nurse: True Stories of a Country Nurse on a Scottish Isle (The Country Nurse Series, Book One) — Mary J. MacLeod, Claire Macdonald | pages | 320 | [evidence](https://www.skyhorsepublishing.com/9781628725124/call-the-nurse/) | moderate |
| Last Words: A Memoir — George Carlin; Tony Hendra | pages | 320 | [evidence](https://www.abebooks.co.uk/9781439191101/Last-Words-Memoir-Carlin-George-1439191107/plp) | moderate |
| Chronicles of Wasted Time: An Autobiography — Malcolm Muggeridge | pages | 576 | [evidence](https://books.crossmap.com/book/chronicles-of-wasted-time-an-autobiography/) | moderate |
| The Complete Persepolis (Persepolis, #1-4) — Marjane Satrapi | pages | 341 | [evidence](https://www.amazon.com/dp/0375714839) | moderate |
| The History of Cuba in 50 Events — Henry Freeman | pages | 60 | [evidence](https://www.amazon.com/dp/1530376203) | moderate |
| What Are The Odds? From Crack Addict To CEO — Mike Lindell | pages | 325 | [evidence](https://www.goodreads.com/work/editions/75536945-what-are-the-odds-from-crack-addict-to-ceo) | moderate |
| Alex’s Adventures in Numberland / Here’s Looking at Euclid — Alex Bellos | pages | 319 | [evidence](https://aspen.greenvillelibrary.org/Record/133524) | moderate |
| Arming the Union: Gunmakers in Windsor, Vermont — Carrie Brown | pages | 48 | [evidence](https://www.amazon.com/dp/B093MZB9KJ) | low |
| Addiction by Design — Natasha Dow Schüll | amazon | 347 | [evidence](https://www.amazon.com/dp/0691127557) | moderate |
| README — W. Patrick McCray | amazon | 5 | [evidence](https://www.amazon.es/dp/0262553481) | moderate |
| MP3, The Meaning of a Format — Jonathan Sterne | amazon | 14 | [evidence](https://www.amazon.com/dp/B00E285R0E) | moderate |
| User Friendly — Cliff Kuang; Robert Fabricant | amazon | 744 | [evidence](https://www.amazon.com/dp/0374279756) | moderate |
| Electronic Value Exchange — David L. Stearns | amazon | 18 | [evidence](https://www.amazon.com/dp/1849961387) | moderate |
| Fifty Inventions That Shaped the Modern Economy — Tim Harford | amazon | 326 | [evidence](https://www.amazon.com/dp/0735216134) | moderate |
| Human Transit — Jarrett Walker | amazon | 32 | [evidence](https://www.amazon.com/dp/1642833053) | moderate |
| Simple Heuristics that Make Us Smart — Gerd Gigerenzer, Peter M. Todd and the ABC Research Group | amazon | 30 | [evidence](https://www.amazon.com/dp/0195143817) | moderate |
| What to Expect When You're Expecting Robots: The Future of Human-Robot Collaboration — Laura Major; Julie Shah | amazon | 28 | [evidence](https://www.amazon.com/dp/1541699114) | moderate |
| The Tools of Empire: Technology and European Imperialism in the Nineteenth Century — Daniel R. Headrick | amazon | 42 | [evidence](https://www.amazon.com/dp/0195028325) | moderate |
| Editing Humanity — Kevin Davies | amazon | 180 | [evidence](https://www.amazon.com/dp/164313308X) | moderate |
| Out of Control — Kevin Kelly | amazon | 195 | [evidence](https://www.amazon.com/dp/0201483408) | moderate |
| An Engine, Not a Camera — Donald MacKenzie | amazon | 28 | [evidence](https://www.amazon.com/dp/0262633671) | moderate |
| Wetware: A Computer in Every Living Cell — Dennis Bray | amazon | 94 | [evidence](https://www.amazon.com/dp/0300167849) | moderate |
| From the American System to Mass Production, 1800–1932: The Development of Manufacturing Technology in the United States — David A. Hounshell | amazon | 41 | [evidence](https://www.amazon.com/dp/0801829755) | moderate |
| Your Face Belongs to Us — Kashmir Hill | amazon | 206 | [evidence](https://www.amazon.com/dp/0593448561) | moderate |
| Never Lost Again — Bill Kilday | amazon | 134 | [evidence](https://www.amazon.com/dp/0062673041) | moderate |
| The Economic History of China — Richard von Glahn | amazon | 45 | [evidence](https://www.amazon.com/dp/1107615704) | moderate |
| The Collapse of Complex Societies — Joseph A. Tainter | amazon | 321 | [evidence](https://www.amazon.com/dp/052138673X) | moderate |
| After Tamerlane — John Darwin | amazon | 332 | [evidence](https://www.amazon.com/dp/1596913932) | moderate |
| Steve Jobs in Exile: The Untold Story of NeXT and the Remaking of an American Visionary — Geoffrey Cain | amazon | 39 | [evidence](https://www.amazon.com/dp/0593716698) | moderate |
| Engines of Creation — K. Eric Drexler | amazon | 131 | [evidence](https://www.amazon.com/dp/0385199732) | moderate |
| Left Behind: A New Economics for Neglected Places — Paul Collier | amazon | 90 | [evidence](https://www.amazon.com/dp/154170309X) | moderate |
| Tools for Thought: The History and Future of Mind-Expanding Technology — Howard Rheingold | amazon | 12 | [evidence](https://www.amazon.com/dp/0262681153) | moderate |
| The Seven Sins of Memory: How the Mind Forgets and Remembers — Daniel L. Schacter | amazon | 337 | [evidence](https://www.amazon.com/dp/0618219196) | moderate |
| Hidden Order — John H. Holland | amazon | 66 | [evidence](https://www.amazon.com/dp/0201407930) | moderate |
| Behind Deep Blue: Building the Computer that Defeated the World Chess Champion — Feng-hsiung Hsu | amazon | 41 | [evidence](https://www.amazon.com/dp/0691118183) | moderate |
| The Relentless Revolution: A History of Capitalism — Joyce Appleby | amazon | 60 | [evidence](https://www.amazon.com/dp/0393068943) | moderate |
| Code — Charles Petzold | reference | 1 | [evidence](https://apps.lib.byu.edu/marcrecord/bib/2678127) | moderate |
| Rolls-Royce: The Magic of a Name: The First Forty Years of Britain s Most Prestigious Company — Peter Pugh | reference | 5 | [evidence](https://archive.org/details/magicofnamerolls0000pugh) | moderate |
| Supremacy: AI, ChatGPT, and the Race that Will Change the World — Parmy Olson | reference | 14 | [evidence](https://search.sl.nsw.gov.au/primo-explore/fulldisplay?adaptor=Local%20Search%20Engine&context=L&docid=SLNSW_ALMA21297807570002626&lang=en_US&query=any%2Ccontains%2C991024674768502626&search_scope=E&tab=default_tab&vid=SLNSW) | moderate |
| Crick: A Mind in Motion – from DNA to the Brain — Matthew Cobb | reference | 82 | [evidence](https://content.www.wellcomecollection.org/works/vay2jjzh) | moderate |
| The Ocean of Life — Callum Roberts | reference | 31 | [evidence](https://catalog.ocls.org/Record/.b18126923) | moderate |
| A History of America in 100 Maps — Susan Schulten | reference | 4 | [evidence](https://broomfieldkids.flatironslibrary.org/Record/.b29272865) | moderate |
| The Inheritance of Rome — Chris Wickham | reference | 58 | [evidence](https://www.nypl.org/research/research-catalog/bib/b20026348) | moderate |
| Self Comes to Mind — Antonio Damasio | reference | 24 | [evidence](https://catalog.ocls.org/Record/.b17528161) | moderate |
| Creation: How Science is Reinventing Life Itself — Adam Rutherford | reference | 14 | [evidence](https://metro-prod.groveforlibraries.com/Record/CARL0000135290) | moderate |
| 2030 — Mauro F. Guillén | reference | 23 | [evidence](https://broomfieldkids.flatironslibrary.org/Record/.b29636383) | moderate |
| Alex’s Adventures in Numberland / Here’s Looking at Euclid — Alex Bellos | reference | 2 | [evidence](https://aspen.greenvillelibrary.org/Record/133524) | moderate |
| The House of Rothschild, Volume I: Money’s Prophets, 1798–1848 — Niall Ferguson | reference | 28 | [evidence](https://archive.org/details/houseofrothschil00ferg) | moderate |
| Donald Michie — Donald Michie; edited by Ashwin Srinivasan | amazon | 2 | [evidence](https://www.amazon.co.uk/dp/0199573042) | moderate |
| The Equation That Couldn't Be Solved — Mario Livio | amazon | 122 | [evidence](https://www.amazon.co.uk/dp/0743258215) | moderate |
| Happy Accidents — Morton A. Meyers | amazon | 175 | [evidence](https://www.amazon.co.uk/dp/1611451620) | moderate |
| Jony Ive — Leander Kahney | amazon | 1227 | [evidence](https://www.amazon.co.uk/dp/0670923249) | moderate |

## Rejected and unresolved candidates

The candidate set is not the accepted set. [Explicit selections](../data/openrouter100_261101/approved.json) define the accepted values. Wrong-book recommendations, camera products returned for a Polaroid book, audio or Kindle page lengths, unspecified-volume counts, unsupported zeroes, incomplete reference ranges and ambiguous review counts were rejected. Foreign-language and child-edition candidates were not used. The children’s-edition candidates for An Inconvenient Truth, Swisstory and The World’s Poorest President Speaks Out are flagged for a separate catalog identity/eligibility review; no metadata from those candidates was accepted. Previously unresolved edition conflicts for Perils and Prospects of a United Ireland remain unresolved.

<a id="intake-0172"></a>

## History of Programming Languages — Richard L. Wexelblat; Thomas J. Bergin; Richard G. Gibson; subsequent editors

Sources: 211, 221, 291. Prior review: analysis/analysis_or100_261101_2220.md#intake-0172. Removed the 782-page first-volume count. The catalog names Wexelblat, Bergin, Gibson and subsequent editors and covers the series; the first-volume record does not establish its total extent. Restored unknown with zero R&D fallback. This correction is not counted as a new value.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 17.00 | 14.45 |
| Systems integration | 11.00 | 7.12 |
| Transferable strategic utility | 9.00 | 9.00 |
| Mechanistic and causal depth | 9.00 | 9.00 |
| Information density | 7.50 | 5.63 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 7.00 | 7.00 |
| Expert authority | 5.00 | 5.00 |
| Narrative architecture | 2.00 | 2.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -4.50; O15 0.00; REL 2.83; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages unknown (edition unknown). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **68.02 → 68.02**; Selective. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="shelf-7bda5fe89037"></a>

## Igniting the Light Elements — Anne C. Fitzpatrick

Sources: 258. Prior review: analysis/analysis_gallagher_261024_1455.md#shelf-7bda5fe89037. 

Added pages: **342**. [Source](https://www.booktopia.com.au/igniting-the-light-elements-office-of-scientific-and-technical-in-/book/9781025157252.html); [saved evidence](../data/openrouter100_261101/raw/pages-0013-google_gemini-2.5-flash-lite-v2.json). Documented count for the cited print edition. Indexed source; live stock and physical pagination were not inspected. Edition year is unknown when not supported by the cited text.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 13.60 | 10.88 |
| Transferable strategic utility | 11.25 | 11.25 |
| Mechanistic and causal depth | 9.60 | 9.60 |
| Information density | 7.50 | 5.63 |
| Durability | 8.10 | 8.10 |
| Direct domain fit | 6.65 | 6.65 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 1.95 | 1.95 |
| Authorial precision | 1.50 | 1.50 |

T11 -10.00; T12 0.00; H13 -2.96; P14 -2.80; O15 0.00; REL 0.00; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 342 (ISBN:9781025157252). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **56.60 → 56.60**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="n42dad48542"></a>

## Computer Connections — Gary Kildall

Sources: 133. Prior review: analysis/analysis_scorebonus_261024_0106.md#n42dad48542. 

Added pages: **78**. [Source](https://www.goodreads.com/book/show/31352895-computer-connections); [saved evidence](../data/openrouter100_261101/raw/pages-0016-google_gemini-2.5-flash-lite-v2.json). Documented count for the cited print edition. Indexed source; live stock and physical pagination were not inspected. Edition year is unknown when not supported by the cited text.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 14.00 | 9.80 |
| Systems integration | 10.00 | 5.88 |
| Transferable strategic utility | 9.00 | 9.00 |
| Mechanistic and causal depth | 7.00 | 7.00 |
| Information density | 7.00 | 4.90 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 7.00 | 7.00 |
| Expert authority | 5.00 | 5.00 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 -1.84; P14 -3.30; O15 0.00; REL 0.00; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 78 (Source:https://www.goodreads.com/book/show/31352895-computer-connections). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **55.44 → 55.44**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="complete-922-385"></a>

## Surface Science — The First Thirty Years — Duke, C.B., ed.

Sources: 285. Prior review: analysis/analysis_aspe_261025_1223.md#complete-922-385. 

Added pages: **332**. [Source](https://www.isbnlab.com/book/9780444818270/surface-science-the-first-thirty-years); [saved evidence](../data/openrouter100_261101/raw/pages-0017-google_gemini-2.5-flash-lite-v2.json). Documented count for the cited print edition. Indexed source; live stock and physical pagination were not inspected. Edition year is unknown when not supported by the cited text.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 15.00 | 11.25 |
| Systems integration | 11.00 | 7.12 |
| Transferable strategic utility | 6.00 | 6.00 |
| Mechanistic and causal depth | 7.00 | 7.00 |
| Information density | 7.00 | 4.90 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 5.00 | 5.00 |
| Expert authority | 5.00 | 5.00 |
| Narrative architecture | 2.00 | 2.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 -1.32; P14 -3.20; O15 0.00; REL 0.00; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 332 (ISBN:9780444818270). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **53.25 → 53.25**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="shelf-f76de50a8fd2"></a>

## The Barnstormer and The Lady: Aviation Legends Walter and Olive Ann Beech — Dennis Farney

Sources: 261. Prior review: analysis/analysis_founders_261024_1455.md#shelf-f76de50a8fd2. 

Added pages: **240**. [Source](https://www.amazon.com/dp/1935362690); [saved evidence](../data/openrouter100_261101/raw/pages-0021-google_gemini-2.5-flash-lite-v2.json). Documented count for the cited print edition. Indexed source; live stock and physical pagination were not inspected. Edition year is unknown when not supported by the cited text.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 15.00 | 11.25 |
| Systems integration | 12.75 | 9.56 |
| Transferable strategic utility | 11.25 | 11.25 |
| Mechanistic and causal depth | 8.40 | 8.40 |
| Information density | 7.00 | 4.90 |
| Durability | 7.20 | 7.20 |
| Direct domain fit | 5.95 | 5.95 |
| Expert authority | 3.75 | 3.75 |
| Narrative architecture | 2.25 | 2.25 |
| Authorial precision | 1.40 | 1.40 |

T11 -10.00; T12 0.00; H13 -1.76; P14 -1.60; O15 0.00; REL 0.00; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 240 (ISBN:1935362690). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **52.55 → 52.55**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="complete-927-386"></a>

## Prospects in Nanotechnology—Toward Molecular Manufacturing — Krummenacker, M. and J. Lewis, eds.

Sources: 285. Prior review: analysis/analysis_aspe_261025_1223.md#complete-927-386. 

Added pages: **297**. [Source](https://www.amazon.com/dp/0471309141); [saved evidence](../data/openrouter100_261101/raw/pages-0023-google_gemini-2.5-flash-lite-v2.json). Documented count for the cited print edition. Indexed source; live stock and physical pagination were not inspected. Edition year is unknown when not supported by the cited text.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 11.00 | 6.05 |
| Systems integration | 13.00 | 9.94 |
| Transferable strategic utility | 7.00 | 7.00 |
| Mechanistic and causal depth | 6.00 | 6.00 |
| Information density | 7.00 | 4.90 |
| Durability | 6.00 | 6.00 |
| Direct domain fit | 6.00 | 6.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 2.00 | 2.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -3.10; O15 0.00; REL 0.00; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 297 (ISBN:0471309141). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **50.29 → 50.29**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="progress-0212"></a>

## The Paris Review Interviews, IV — The Paris Review; Philip Gourevitch (editor)

Sources: 232. Prior review: analysis/analysis_scorebonus_261024_0106.md#progress-0212. 

Added pages: **496**. [Source](https://academic.macmillan.com/academictrade/9780312427443/theparisreviewinterviewsiv/); [saved evidence](../data/openrouter100_261101/raw/pages-0025-google_gemini-2.5-flash-lite-v2.json). Documented count for the cited print edition. Indexed source; live stock and physical pagination were not inspected. Edition year is unknown when not supported by the cited text.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 7.00 | 2.88 |
| Transferable strategic utility | 7.00 | 7.00 |
| Mechanistic and causal depth | 5.00 | 5.00 |
| Information density | 7.50 | 5.63 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 1.00 | 1.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -1.70; O15 0.00; REL 0.00; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 496 (ISBN:9780312427443). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **48.61 → 48.61**; Poor fit. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="shelf-7b1ba4841bbe"></a>

## Advice on Upskilling — Justin Skycak

Sources: 251. Prior review: analysis/analysis_sivers_261024_1455.md#shelf-7b1ba4841bbe. 

Added pages: **238**. [Source](https://www.amazon.com.be/dp/B0F74N18YF); [saved evidence](../data/openrouter100_261101/raw/pages-0026-google_gemini-2.5-flash-lite-v2.json). Documented count for the cited print edition. Indexed source; live stock and physical pagination were not inspected. Edition year is unknown when not supported by the cited text.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 12.00 | 7.20 |
| Systems integration | 8.50 | 4.25 |
| Transferable strategic utility | 10.50 | 10.50 |
| Mechanistic and causal depth | 6.00 | 6.00 |
| Information density | 7.00 | 4.90 |
| Durability | 6.30 | 6.30 |
| Direct domain fit | 2.80 | 2.80 |
| Expert authority | 3.00 | 3.00 |
| Narrative architecture | 2.10 | 2.10 |
| Authorial precision | 1.20 | 1.20 |

T11 0.00; T12 0.00; H13 0.00; P14 -0.10; O15 0.00; REL 0.00; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 238 (ASIN:B0F74N18YF). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **48.15 → 48.15**; Poor fit. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="shelf-73c061452938"></a>

## A Small Difference — Raymond Plank

Sources: 261. Prior review: analysis/analysis_founders_261024_1455.md#shelf-73c061452938. 

Added pages: **352**. [Source](https://www.amazon.com/dp/0533165261); [saved evidence](../data/openrouter100_261101/raw/pages-0027-google_gemini-2.5-flash-lite-v2.json). Documented count for the cited print edition. Indexed source; live stock and physical pagination were not inspected. Edition year is unknown when not supported by the cited text.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 13.00 | 8.45 |
| Systems integration | 11.90 | 8.33 |
| Transferable strategic utility | 10.50 | 10.50 |
| Mechanistic and causal depth | 7.80 | 7.80 |
| Information density | 6.50 | 4.23 |
| Durability | 7.20 | 7.20 |
| Direct domain fit | 5.25 | 5.25 |
| Expert authority | 3.75 | 3.75 |
| Narrative architecture | 2.25 | 2.25 |
| Authorial precision | 1.40 | 1.40 |

T11 -10.00; T12 0.00; H13 -0.68; P14 -1.40; O15 0.00; REL 0.00; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 352 (ISBN:0533165261). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **47.08 → 47.08**; Poor fit. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="shelf-46b8979de11e"></a>

## Japan As Number One Lessons for America — Ezra F. Vogel

Sources: 259. Prior review: analysis/analysis_gwern_261024_1455.md#shelf-46b8979de11e. 

Added pages: **272**. [Source](https://openlibrary.org/books/OL9238765M/Japan_As_Number_One); [saved evidence](../data/openrouter100_261101/raw/pages-0029-google_gemini-2.5-flash-lite-v2.json). Documented count for the cited print edition. Indexed source; live stock and physical pagination were not inspected. Edition year is unknown when not supported by the cited text.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 13.00 | 8.45 |
| Systems integration | 13.60 | 10.88 |
| Transferable strategic utility | 10.50 | 10.50 |
| Mechanistic and causal depth | 7.80 | 7.80 |
| Information density | 7.00 | 4.90 |
| Durability | 6.30 | 6.30 |
| Direct domain fit | 4.90 | 4.90 |
| Expert authority | 4.25 | 4.25 |
| Narrative architecture | 2.25 | 2.25 |
| Authorial precision | 1.40 | 1.40 |

T11 -10.00; T12 0.00; H13 0.00; P14 -4.70; O15 0.00; REL 0.00; RD 0.51.

R&D inputs: reference pages 7 (ISBN:0674472152:1979); total pages 272 (Source:https://openlibrary.org/books/OL9238765M/Japan_As_Number_One). 7 / 272 = 2.57%; R&D 0.51. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **46.93 → 47.44**; Poor fit. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="shelf-6643b5d2ae39"></a>

## The Ageless Gergel — Max G. Gergel

Sources: 259. Prior review: analysis/analysis_gwern_261024_1455.md#shelf-6643b5d2ae39. 

Added pages: **218**. [Source](https://www.goodreads.com/book/show/24821522-the-ageless-gergel); [saved evidence](../data/openrouter100_261101/raw/pages-0032-google_gemini-2.5-flash-lite-v2.json). Documented count for the cited print edition. Indexed source; live stock and physical pagination were not inspected. Edition year is unknown when not supported by the cited text.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 14.00 | 9.80 |
| Systems integration | 11.90 | 8.33 |
| Transferable strategic utility | 10.50 | 10.50 |
| Mechanistic and causal depth | 9.00 | 9.00 |
| Information density | 6.00 | 3.60 |
| Durability | 7.20 | 7.20 |
| Direct domain fit | 5.95 | 5.95 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 2.10 | 2.10 |
| Authorial precision | 1.30 | 1.30 |

T11 -10.00; T12 0.00; H13 -1.72; P14 -4.30; O15 0.00; REL 0.00; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 218 (Source:https://www.goodreads.com/book/show/24821522-the-ageless-gergel). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **45.76 → 45.76**; Poor fit. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="complete-273-261"></a>

## Influenza — Dr. Jeremy Brown

Sources: 276. Prior review: analysis/analysis_misiti_261025_1223.md#complete-273-261. 

Added pages: **272**. [Source](https://www.libroworld.com/9781501181252/); [saved evidence](../data/openrouter100_261101/raw/pages-0033-google_gemini-2.5-flash-lite-v2.json). Documented count for the cited print edition. Indexed source; live stock and physical pagination were not inspected. Edition year is unknown when not supported by the cited text.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 15.00 | 11.25 |
| Systems integration | 11.00 | 7.12 |
| Transferable strategic utility | 6.00 | 6.00 |
| Mechanistic and causal depth | 7.00 | 7.00 |
| Information density | 7.50 | 5.63 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 3.00 | 3.00 |
| Expert authority | 4.50 | 4.50 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.50 | 1.50 |

T11 -10.00; T12 0.00; H13 0.00; P14 -0.80; O15 0.00; REL 0.00; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 272 (ISBN:9781501181252). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **45.69 → 45.69**; Poor fit. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="shelf-b1b2a5dae88c"></a>

## A History of Life-Extensionism in the Twentieth Century — Ilia Stambler

Sources: 259. Prior review: analysis/analysis_gwern_261024_1455.md#shelf-b1b2a5dae88c. 

Added pages: **542**. [Source](https://www.libroworld.com/9781500818579/); [saved evidence](../data/openrouter100_261101/raw/pages-0035-google_gemini-2.5-flash-lite-v2.json). Documented count for the cited print edition. Indexed source; live stock and physical pagination were not inspected. Edition year is unknown when not supported by the cited text.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 14.00 | 9.80 |
| Systems integration | 11.90 | 8.33 |
| Transferable strategic utility | 9.00 | 9.00 |
| Mechanistic and causal depth | 7.20 | 7.20 |
| Information density | 7.00 | 4.90 |
| Durability | 7.20 | 7.20 |
| Direct domain fit | 4.20 | 4.20 |
| Expert authority | 3.50 | 3.50 |
| Narrative architecture | 1.80 | 1.80 |
| Authorial precision | 1.40 | 1.40 |

T11 -10.00; T12 0.00; H13 -1.04; P14 -1.20; O15 0.00; REL 0.00; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 542 (ISBN:9781500818579). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **45.09 → 45.09**; Poor fit. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="shelf-be35b10290ff"></a>

## Birdstories: A History of the Birds of New Zealand — Geoff Norman

Sources: 263. Prior review: analysis/analysis_mchale_261024_1455.md#shelf-be35b10290ff. 

Added pages: **372**. [Source](https://www.worldofbooks.com/en-gb/products/birdstories-a-history-of-the-birds-of-new-zealand-book-geoff-norman-9780947503925); [saved evidence](../data/openrouter100_261101/raw/pages-0038-google_gemini-2.5-flash-lite-v2.json). Documented count for the cited print edition. Indexed source; live stock and physical pagination were not inspected. Edition year is unknown when not supported by the cited text.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 10.20 | 6.12 |
| Transferable strategic utility | 6.00 | 6.00 |
| Mechanistic and causal depth | 6.60 | 6.60 |
| Information density | 7.50 | 5.63 |
| Durability | 7.65 | 7.65 |
| Direct domain fit | 1.75 | 1.75 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 2.40 | 2.40 |
| Authorial precision | 1.50 | 1.50 |

T11 -10.00; T12 0.00; H13 0.00; P14 -0.80; O15 0.00; REL 0.00; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 372 (ISBN:9780947503925). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **43.65 → 43.65**; Poor fit. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="complete-418-312"></a>

## Atomic Days: The Untold Story of the Most Toxic Place in America — Joshua Frank

Sources: 278. Prior review: analysis/analysis_sinclarius_261025_1223.md#complete-418-312. 

Added pages: **258**. [Source](https://www.haymarketbooks.org/books/1940-atomic-days); [saved evidence](../data/openrouter100_261101/raw/pages-0040-google_gemini-2.5-flash-lite-v2.json). Documented count for the cited print edition. Indexed source; live stock and physical pagination were not inspected. Edition year is unknown when not supported by the cited text.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 12.00 | 7.20 |
| Systems integration | 12.00 | 8.47 |
| Transferable strategic utility | 7.00 | 7.00 |
| Mechanistic and causal depth | 6.00 | 6.00 |
| Information density | 7.00 | 4.90 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 5.00 | 5.00 |
| Expert authority | 3.50 | 3.50 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.00 | 1.00 |

T11 -10.00; T12 0.00; H13 0.00; P14 -0.40; O15 0.00; REL 0.00; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 258 (Source:https://www.haymarketbooks.org/books/1940-atomic-days). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **43.17 → 43.17**; Poor fit. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="shelf-5e5e5764014e"></a>

## Atomic Shield — Richard G. Hewlett and Francis Duncan

Sources: 258. Prior review: analysis/analysis_gallagher_261024_1455.md#shelf-5e5e5764014e. 

Added pages: **736**. [Source](https://www.amazon.com/dp/0520071875); [saved evidence](../data/openrouter100_261101/raw/pages-0042-google_gemini-2.5-flash-lite-v2.json). Documented count for the cited print edition. Indexed source; live stock and physical pagination were not inspected. Edition year is unknown when not supported by the cited text.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 17.00 | 14.45 |
| Systems integration | 13.60 | 10.88 |
| Transferable strategic utility | 10.50 | 10.50 |
| Mechanistic and causal depth | 9.00 | 9.00 |
| Information density | 6.50 | 4.23 |
| Durability | 8.10 | 8.10 |
| Direct domain fit | 6.30 | 6.30 |
| Expert authority | 4.50 | 4.50 |
| Narrative architecture | 1.95 | 1.95 |
| Authorial precision | 1.50 | 1.50 |

T11 -10.00; T12 -10.00; H13 -2.96; P14 -5.70; O15 0.00; REL 0.00; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 736 (ISBN:0520071875). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **42.75 → 42.75**; Poor fit. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="shelf-1b756a39dcf4"></a>

## Cable Cowboys — Mark Robichaux

Sources: 258. Prior review: analysis/analysis_gallagher_261024_1455.md#shelf-1b756a39dcf4. 

Added pages: **338**. [Source](https://www.amazon.com/dp/047170637X); [saved evidence](../data/openrouter100_261101/raw/pages-0044-google_gemini-2.5-flash-lite-v2.json). Documented count for the cited print edition. Indexed source; live stock and physical pagination were not inspected. Edition year is unknown when not supported by the cited text.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 14.00 | 9.80 |
| Systems integration | 13.60 | 10.88 |
| Transferable strategic utility | 11.25 | 11.25 |
| Mechanistic and causal depth | 9.00 | 9.00 |
| Information density | 7.00 | 4.90 |
| Durability | 7.20 | 7.20 |
| Direct domain fit | 4.90 | 4.90 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 2.40 | 2.40 |
| Authorial precision | 1.50 | 1.50 |

T11 -10.00; T12 -10.00; H13 -0.96; P14 -2.40; O15 0.00; REL 0.00; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 338 (ISBN:047170637X). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **42.47 → 42.47**; Poor fit. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="shelf-5b494e8a5e4f"></a>

## Imperial Tragedy — Michael Kulikowski

Sources: 265. Prior review: analysis/analysis_civilcourse_261024_1455.md#shelf-5b494e8a5e4f. 

Added pages: **448**. [Source](https://www.hive.co.uk/product/professor-michael-kulikowski/imperial-tragedy--from-constantines-empire-to-the-destruction-of-roman-italy-ad-363-568/25840184); [saved evidence](../data/openrouter100_261101/raw/pages-0045-google_gemini-2.5-flash-lite-v2.json). Documented count for the cited print edition. Indexed source; live stock and physical pagination were not inspected. Edition year is unknown when not supported by the cited text.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 18.00 | 16.20 |
| Systems integration | 13.60 | 10.88 |
| Transferable strategic utility | 10.50 | 10.50 |
| Mechanistic and causal depth | 9.60 | 9.60 |
| Information density | 8.00 | 6.40 |
| Durability | 8.10 | 8.10 |
| Direct domain fit | 4.90 | 4.90 |
| Expert authority | 4.50 | 4.50 |
| Narrative architecture | 2.40 | 2.40 |
| Authorial precision | 1.60 | 1.60 |

T11 -10.00; T12 -10.00; H13 -12.00; P14 -0.70; O15 0.00; REL 0.00; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 448 (Source:https://www.hive.co.uk/product/professor-michael-kulikowski/imperial-tragedy--from-constantines-empire-to-the-destruction-of-roman-italy-ad-363-568/25840184). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **42.38 → 42.38**; Poor fit. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="shelf-a6eb41751272"></a>

## Voters as Mad Scientists — Bryan Caplan

Sources: 251. Prior review: analysis/analysis_sivers_261024_1455.md#shelf-a6eb41751272. 

Added pages: **226**. [Source](https://www.amazon.com/dp/B0C2SD1K8B); [saved evidence](../data/openrouter100_261101/raw/pages-0046-google_gemini-2.5-flash-lite-v2.json). Documented count for the cited print edition. Indexed source; live stock and physical pagination were not inspected. Edition year is unknown when not supported by the cited text.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 12.00 | 7.20 |
| Systems integration | 10.20 | 6.12 |
| Transferable strategic utility | 9.00 | 9.00 |
| Mechanistic and causal depth | 7.20 | 7.20 |
| Information density | 7.00 | 4.90 |
| Durability | 6.30 | 6.30 |
| Direct domain fit | 2.80 | 2.80 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 2.40 | 2.40 |
| Authorial precision | 1.40 | 1.40 |

T11 0.00; T12 -10.00; H13 0.00; P14 -0.30; O15 0.00; REL 0.00; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 226 (ASIN:B0C2SD1K8B). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **41.02 → 41.02**; Poor fit. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="shelf-d40d1b9998bf"></a>

## China’s World View — David Daokui Li

Sources: 251. Prior review: analysis/analysis_sivers_261024_1455.md#shelf-d40d1b9998bf. 

Added pages: **288**. [Source](https://wwnorton.com/books/9780393292398); [saved evidence](../data/openrouter100_261101/raw/pages-0048-google_gemini-2.5-flash-lite-v2.json). Documented count for the cited print edition. Indexed source; live stock and physical pagination were not inspected. Edition year is unknown when not supported by the cited text.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 12.00 | 7.20 |
| Systems integration | 13.60 | 10.88 |
| Transferable strategic utility | 10.50 | 10.50 |
| Mechanistic and causal depth | 8.40 | 8.40 |
| Information density | 7.00 | 4.90 |
| Durability | 6.30 | 6.30 |
| Direct domain fit | 4.90 | 4.90 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 2.40 | 2.40 |
| Authorial precision | 1.40 | 1.40 |

T11 -10.00; T12 -10.00; H13 0.00; P14 -0.20; O15 0.00; REL 0.00; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 288 (ISBN:9780393292398). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **40.68 → 40.68**; Poor fit. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="complete-832-369"></a>

## Without Honour — Rob Tripp

Sources: 283. Prior review: analysis/analysis_ashod_261025_1223.md#complete-832-369. 

Added pages: **368**. [Source](https://www.amazon.com/dp/1443410624); [saved evidence](../data/openrouter100_261101/raw/pages-0051-google_gemini-2.5-flash-lite-v2.json). Documented count for the cited print edition. Indexed source; live stock and physical pagination were not inspected. Edition year is unknown when not supported by the cited text.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 14.00 | 9.80 |
| Systems integration | 8.00 | 3.76 |
| Transferable strategic utility | 4.00 | 4.00 |
| Mechanistic and causal depth | 4.00 | 4.00 |
| Information density | 6.50 | 4.23 |
| Durability | 7.00 | 7.00 |
| Direct domain fit | 1.00 | 1.00 |
| Expert authority | 3.50 | 3.50 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 -0.56; P14 -1.30; O15 0.00; REL 0.00; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 368 (ISBN:1443410624). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **39.43 → 39.43**; Poor fit. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="shelf-a2900b9ae77f"></a>

## 1587: A Year of No Significance — Ray Huang

Sources: 265. Prior review: analysis/analysis_civilcourse_261024_1455.md#shelf-a2900b9ae77f. 

Added pages: **310**. [Source](https://yalebooks.yale.edu/book/9780300028843/1587-a-year-of-no-significance/); [saved evidence](../data/openrouter100_261101/raw/pages-0056-google_gemini-2.5-flash-lite-v2.json). Documented count for the cited print edition. Indexed source; live stock and physical pagination were not inspected. Edition year is unknown when not supported by the cited text.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 18.00 | 16.20 |
| Systems integration | 13.60 | 10.88 |
| Transferable strategic utility | 10.50 | 10.50 |
| Mechanistic and causal depth | 9.60 | 9.60 |
| Information density | 8.00 | 6.40 |
| Durability | 8.10 | 8.10 |
| Direct domain fit | 4.20 | 4.20 |
| Expert authority | 4.50 | 4.50 |
| Narrative architecture | 2.40 | 2.40 |
| Authorial precision | 1.80 | 1.80 |

T11 -10.00; T12 -10.00; H13 -12.00; P14 -4.50; O15 0.00; REL 0.00; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 310 (ISBN:9780300028843). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **38.08 → 38.08**; Poor fit. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="shelf-5a1d50a81947"></a>

## Adventures of a Reckless Amateur — Sverre Aarseth

Sources: 253. Prior review: analysis/analysis_jermyn_261024_1455.md#shelf-5a1d50a81947. 

Added pages: **261**. [Source](https://www.readings.com.au/product/9781291991673/adventures-of-a-reckless-amateur--sverre-aarseth--2014--9781291991673); [saved evidence](../data/openrouter100_261101/raw/pages-0057-google_gemini-2.5-flash-lite-v2.json). Documented count for the cited print edition. Indexed source; live stock and physical pagination were not inspected. Edition year is unknown when not supported by the cited text.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 14.00 | 9.80 |
| Systems integration | 5.10 | 1.53 |
| Transferable strategic utility | 6.00 | 6.00 |
| Mechanistic and causal depth | 3.60 | 3.60 |
| Information density | 6.00 | 3.60 |
| Durability | 6.30 | 6.30 |
| Direct domain fit | 1.40 | 1.40 |
| Expert authority | 3.50 | 3.50 |
| Narrative architecture | 2.10 | 2.10 |
| Authorial precision | 1.40 | 1.40 |

T11 0.00; T12 0.00; H13 0.00; P14 -1.20; O15 0.00; REL 0.00; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 261 (ISBN:9781291991673). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **38.03 → 38.03**; Poor fit. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="progress-0175"></a>

## The Antarctic Book of Cooking and Cleaning — Wendy Trusler

Sources: 232. Prior review: analysis/analysis_scorebonus_261024_0106.md#progress-0175. 

Added pages: **272**. [Source](https://www.amazon.com/dp/0062395033); [saved evidence](../data/openrouter100_261101/raw/pages-0058-google_gemini-2.5-flash-lite-v2.json). Documented count for the cited print edition. Indexed source; live stock and physical pagination were not inspected. Edition year is unknown when not supported by the cited text.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 15.00 | 11.25 |
| Systems integration | 9.00 | 4.76 |
| Transferable strategic utility | 7.00 | 7.00 |
| Mechanistic and causal depth | 6.00 | 6.00 |
| Information density | 7.00 | 4.90 |
| Durability | 7.00 | 7.00 |
| Direct domain fit | 2.00 | 2.00 |
| Expert authority | 3.00 | 3.00 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.50 | 1.50 |

T11 -10.00; T12 0.00; H13 -1.20; P14 -1.10; O15 0.00; REL 0.00; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 272 (ISBN:0062395033). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **37.61 → 37.61**; Poor fit. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="shelf-2563228152e5"></a>

## Nietzsche: a complete introduction — Roy Jackson

Sources: 251. Prior review: analysis/analysis_sivers_261024_1455.md#shelf-2563228152e5. 

Added pages: **256**. [Source](https://biblio.co.uk/9781444790573); [saved evidence](../data/openrouter100_261101/raw/pages-0063-google_gemini-2.5-flash-lite-v2.json). Documented count for the cited print edition. Indexed source; live stock and physical pagination were not inspected. Edition year is unknown when not supported by the cited text.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 14.00 | 9.80 |
| Systems integration | 6.80 | 2.72 |
| Transferable strategic utility | 7.50 | 7.50 |
| Mechanistic and causal depth | 6.00 | 6.00 |
| Information density | 7.00 | 4.90 |
| Durability | 8.10 | 8.10 |
| Direct domain fit | 0.70 | 0.70 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 2.40 | 2.40 |
| Authorial precision | 1.40 | 1.40 |

T11 0.00; T12 -10.00; H13 0.00; P14 -2.40; O15 0.00; REL 0.00; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 256 (ISBN:9781444790573). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **35.12 → 35.12**; Poor fit. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="shelf-1fdc0bf811e6"></a>

## The Shadow of Consciousness — Peter Hankins

Sources: 254. Prior review: analysis/analysis_carroll2015_261024_1455.md#shelf-1fdc0bf811e6. 

Added pages: **186**. [Source](https://www.google.com/books/edition/The_Shadow_of_Consciousness/4Go5rgEACAAJ?hl=en); [saved evidence](../data/openrouter100_261101/raw/pages-0064-google_gemini-2.5-flash-lite-v2.json). Documented count for the cited print edition. Indexed source; live stock and physical pagination were not inspected. Edition year is unknown when not supported by the cited text.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 12.00 | 7.20 |
| Systems integration | 8.50 | 4.25 |
| Transferable strategic utility | 7.50 | 7.50 |
| Mechanistic and causal depth | 7.20 | 7.20 |
| Information density | 7.00 | 4.90 |
| Durability | 6.30 | 6.30 |
| Direct domain fit | 2.10 | 2.10 |
| Expert authority | 3.00 | 3.00 |
| Narrative architecture | 2.10 | 2.10 |
| Authorial precision | 1.40 | 1.40 |

T11 0.00; T12 -10.00; H13 0.00; P14 -1.10; O15 0.00; REL 0.00; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 186 (Source:https://www.google.com/books/edition/The_Shadow_of_Consciousness/4Go5rgEACAAJ?hl=en). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **34.85 → 34.85**; Poor fit. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="complete-566-99"></a>

## Kinds Of Minds: Toward An Understanding Of Consciousness (Science Masters Series) — Daniel C. Dennett

Sources: 283. Prior review: analysis/analysis_ashod_261025_1223.md#complete-566-99. 

Added pages: **184**. [Source](https://www.goodreads.com/work/editions/266790-kinds-of-minds-towards-an-understanding-of-consciousness); [saved evidence](../data/openrouter100_261101/raw/pages-0068-google_gemini-2.5-flash-lite-v2.json). Documented count for the cited print edition. Indexed source; live stock and physical pagination were not inspected. Edition year is unknown when not supported by the cited text.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 12.00 | 7.20 |
| Systems integration | 9.00 | 4.76 |
| Transferable strategic utility | 6.00 | 6.00 |
| Mechanistic and causal depth | 6.00 | 6.00 |
| Information density | 6.00 | 3.60 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 3.00 | 3.00 |
| Expert authority | 4.50 | 4.50 |
| Narrative architecture | 2.00 | 2.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 -10.00; H13 0.00; P14 -3.00; O15 0.00; REL 0.00; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 184 (Source:https://www.goodreads.com/work/editions/266790-kinds-of-minds-towards-an-understanding-of-consciousness). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **33.56 → 33.56**; Poor fit. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="shelf-2c49b8112d78"></a>

## Estée Lauder: A Success Story — Estée Lauder

Sources: 261. Prior review: analysis/analysis_founders_261024_1455.md#shelf-2c49b8112d78. 

Added pages: **222**. [Source](https://www.goodreads.com/book/show/1748531.Est_e); [saved evidence](../data/openrouter100_261101/raw/pages-0069-google_gemini-2.5-flash-lite-v2.json). Documented count for the cited print edition. Indexed source; live stock and physical pagination were not inspected. Edition year is unknown when not supported by the cited text.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 13.00 | 8.45 |
| Systems integration | 9.35 | 5.14 |
| Transferable strategic utility | 9.00 | 9.00 |
| Mechanistic and causal depth | 6.00 | 6.00 |
| Information density | 6.00 | 3.60 |
| Durability | 6.75 | 6.75 |
| Direct domain fit | 3.15 | 3.15 |
| Expert authority | 3.50 | 3.50 |
| Narrative architecture | 2.25 | 2.25 |
| Authorial precision | 1.30 | 1.30 |

T11 -10.00; T12 0.00; H13 -1.68; P14 -4.10; O15 0.00; REL 0.00; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 222 (Source:https://www.goodreads.com/book/show/1748531.Est_e). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **33.36 → 33.36**; Poor fit. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="shelf-09532bc21e15"></a>

## Brexit: What the Hell Happens Now? — Ian Dunt

Sources: 263. Prior review: analysis/analysis_mchale_261024_1455.md#shelf-09532bc21e15. 

Added pages: **192**. [Source](https://www.waterstones.com/book/9780995497856); [saved evidence](../data/openrouter100_261101/raw/pages-0071-google_gemini-2.5-flash-lite-v2.json). Documented count for the cited print edition. Indexed source; live stock and physical pagination were not inspected. Edition year is unknown when not supported by the cited text.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 14.00 | 9.80 |
| Systems integration | 11.05 | 7.18 |
| Transferable strategic utility | 8.25 | 8.25 |
| Mechanistic and causal depth | 7.20 | 7.20 |
| Information density | 7.00 | 4.90 |
| Durability | 4.95 | 4.95 |
| Direct domain fit | 3.85 | 3.85 |
| Expert authority | 3.50 | 3.50 |
| Narrative architecture | 2.40 | 2.40 |
| Authorial precision | 1.40 | 1.40 |

T11 -10.00; T12 -10.00; H13 -0.40; P14 -1.00; O15 0.00; REL 0.00; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 192 (ISBN:9780995497856). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **32.03 → 32.03**; Poor fit. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="complete-771-55"></a>

## Wittgenstein: A Very Short Introduction — A. C. Grayling

Sources: 283. Prior review: analysis/analysis_metadata2_261025_1921.md#complete-771-55. 

Added pages: **160**. [Source](https://www.waterstones.com/book/wittgenstein/a-c-grayling/9780192854117); [saved evidence](../data/openrouter100_261101/raw/pages-0073-google_gemini-2.5-flash-lite-v2.json). Documented count for the cited print edition. Indexed source; live stock and physical pagination were not inspected. Edition year is unknown when not supported by the cited text.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 15.00 | 11.25 |
| Systems integration | 7.00 | 2.88 |
| Transferable strategic utility | 5.00 | 5.00 |
| Mechanistic and causal depth | 5.00 | 5.00 |
| Information density | 7.50 | 5.63 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 1.00 | 1.00 |
| Expert authority | 4.50 | 4.50 |
| Narrative architecture | 2.00 | 2.00 |
| Authorial precision | 2.00 | 2.00 |

T11 0.00; T12 -10.00; H13 -3.00; P14 -3.80; O15 0.00; REL 0.00; RD 0.50.

R&D inputs: reference pages 4 (OL3963601M); total pages 160 (ISBN:9780192854117). 4 / 160 = 2.50%; R&D 0.50. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **31.46 → 31.96**; Poor fit. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="rem-u0973"></a>

## The Gulag Archipelago: (Abridged edition) — Aleksandr Solzhenitsyn

Sources: 189, 207, 276, 294, 300. Prior review: analysis/analysis_karpathy_261025_2011.md#rem-u0973. 

Added pages: **576**. [Source](https://www.amazon.co.uk/dp/1784871516); [saved evidence](../data/openrouter100_261101/raw/pages-0074-google_gemini-2.5-flash-lite-v2.json). Documented count for the cited print edition. Indexed source; live stock and physical pagination were not inspected. Edition year is unknown when not supported by the cited text.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 15.00 | 11.25 |
| Systems integration | 10.00 | 5.88 |
| Transferable strategic utility | 6.00 | 6.00 |
| Mechanistic and causal depth | 6.00 | 6.00 |
| Information density | 7.00 | 4.90 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 2.00 | 2.00 |
| Expert authority | 4.50 | 4.50 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 -10.00; T12 -10.00; H13 -2.80; P14 -5.30; O15 0.00; REL 4.00; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 576 (ISBN:1784871516). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **29.93 → 29.93**; Poor fit. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="shelf-6157e356e87f"></a>

## The Call of Character — Mari Ruti

Sources: 254. Prior review: analysis/analysis_carroll2015_261024_1455.md#shelf-6157e356e87f. 

Added pages: **224**. [Source](https://cup.columbia.edu/book/the-call-of-character/9780231164085/); [saved evidence](../data/openrouter100_261101/raw/pages-0075-google_gemini-2.5-flash-lite-v2.json). Documented count for the cited print edition. Indexed source; live stock and physical pagination were not inspected. Edition year is unknown when not supported by the cited text.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 12.00 | 7.20 |
| Systems integration | 6.80 | 2.72 |
| Transferable strategic utility | 7.50 | 7.50 |
| Mechanistic and causal depth | 6.00 | 6.00 |
| Information density | 6.00 | 3.60 |
| Durability | 6.30 | 6.30 |
| Direct domain fit | 0.70 | 0.70 |
| Expert authority | 3.50 | 3.50 |
| Narrative architecture | 2.10 | 2.10 |
| Authorial precision | 1.40 | 1.40 |

T11 0.00; T12 -10.00; H13 0.00; P14 -1.30; O15 0.00; REL 0.00; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 224 (ISBN:9780231164085). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **29.72 → 29.72**; Poor fit. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="complete-789-219"></a>

## The Mental Floss History of the World: An Irreverent Romp Through Civilization’s Best Bits — Erik Sass, Steve Wiegand, Editors of Mental Floss

Sources: 283. Prior review: analysis/analysis_ashod_261025_1223.md#complete-789-219. 

Added pages: **432**. [Source](https://www.amazon.com/dp/0061842672); [saved evidence](../data/openrouter100_261101/raw/pages-0077-google_gemini-2.5-flash-lite-v2.json). Documented count for the cited print edition. Indexed source; live stock and physical pagination were not inspected. Edition year is unknown when not supported by the cited text.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 10.00 | 5.00 |
| Systems integration | 7.00 | 2.88 |
| Transferable strategic utility | 3.00 | 3.00 |
| Mechanistic and causal depth | 3.00 | 3.00 |
| Information density | 5.50 | 3.03 |
| Durability | 7.00 | 7.00 |
| Direct domain fit | 1.00 | 1.00 |
| Expert authority | 2.50 | 2.50 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -1.80; O15 0.00; REL 0.00; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 432 (ISBN:0061842672). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **29.61 → 29.61**; Poor fit. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="shelf-a3cf23867cd8"></a>

## Equal Power: A Handbook for Men and Women — Jo Swinson

Sources: 263. Prior review: analysis/analysis_mchale_261024_1455.md#shelf-a3cf23867cd8. 

Added pages: **400**. [Source](https://retailho.circlepos.com/p/equal-power-a-handbook-for-men-and-women); [saved evidence](../data/openrouter100_261101/raw/pages-0078-google_gemini-2.5-flash-lite-v2.json). Documented count for the cited print edition. Indexed source; live stock and physical pagination were not inspected. Edition year is unknown when not supported by the cited text.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 14.00 | 9.80 |
| Systems integration | 10.20 | 6.12 |
| Transferable strategic utility | 7.50 | 7.50 |
| Mechanistic and causal depth | 6.00 | 6.00 |
| Information density | 6.50 | 4.23 |
| Durability | 6.75 | 6.75 |
| Direct domain fit | 2.45 | 2.45 |
| Expert authority | 3.75 | 3.75 |
| Narrative architecture | 2.40 | 2.40 |
| Authorial precision | 1.40 | 1.40 |

T11 -10.00; T12 -10.00; H13 0.00; P14 -0.80; O15 0.00; REL 0.00; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 400 (Source:https://retailho.circlepos.com/p/equal-power-a-handbook-for-men-and-women). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **29.60 → 29.60**; Poor fit. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="shelf-70ebf5c62a22"></a>

## Don’t Be a Feminist — Bryan Caplan

Sources: 251. Prior review: analysis/analysis_sivers_261024_1455.md#shelf-70ebf5c62a22. 

Added pages: **248**. [Source](https://www.amazon.com/dp/B0BD3DFMMH); [saved evidence](../data/openrouter100_261101/raw/pages-0079-google_gemini-2.5-flash-lite-v2.json). Documented count for the cited print edition. Indexed source; live stock and physical pagination were not inspected. Edition year is unknown when not supported by the cited text.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 12.00 | 7.20 |
| Systems integration | 10.20 | 6.12 |
| Transferable strategic utility | 9.00 | 9.00 |
| Mechanistic and causal depth | 6.00 | 6.00 |
| Information density | 7.00 | 4.90 |
| Durability | 6.30 | 6.30 |
| Direct domain fit | 2.10 | 2.10 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 2.40 | 2.40 |
| Authorial precision | 1.40 | 1.40 |

T11 -10.00; T12 -10.00; H13 0.00; P14 -0.40; O15 0.00; REL 0.00; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 248 (ASIN:B0BD3DFMMH). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **29.02 → 29.02**; Poor fit. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="complete-759-160"></a>

## Burn This Book: PEN Writers Speak Out on the Power of the Word — Toni Morrison (editor)

Sources: 283. Prior review: analysis/analysis_ashod_261025_1223.md#complete-759-160. 

Added pages: **128**. [Source](https://bookscouter.com/author/morrison-toni); [saved evidence](../data/openrouter100_261101/raw/pages-0084-google_gemini-2.5-flash-lite-v2.json). Documented count for the cited print edition. Indexed source; live stock and physical pagination were not inspected. Edition year is unknown when not supported by the cited text.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 12.00 | 7.20 |
| Systems integration | 7.00 | 2.88 |
| Transferable strategic utility | 4.00 | 4.00 |
| Mechanistic and causal depth | 4.00 | 4.00 |
| Information density | 6.00 | 3.60 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 1.00 | 1.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 2.00 | 2.00 |

T11 0.00; T12 -10.00; H13 0.00; P14 -1.70; O15 0.00; REL 0.00; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 128 (Source:https://bookscouter.com/author/morrison-toni). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **27.48 → 27.48**; Poor fit. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="complete-951-388"></a>

## Vermont’s Gunsmiths & Gunmakers to 1900 — Harry Phillips; Terry Tyler

Sources: 284. Prior review: analysis/analysis_precision_261025_1223.md#complete-951-388. 

Added pages: **306**. [Source](https://www.amazon.com/dp/B0006RL4SO); [saved evidence](../data/openrouter100_261101/raw/pages-0087-google_gemini-2.5-flash-lite-v2.json). Documented count for the cited print edition. Indexed source; live stock and physical pagination were not inspected. Edition year is unknown when not supported by the cited text.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 13.00 | 8.45 |
| Systems integration | 9.00 | 4.76 |
| Transferable strategic utility | 4.00 | 4.00 |
| Mechanistic and causal depth | 4.00 | 4.00 |
| Information density | 6.50 | 4.23 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 4.00 | 4.00 |
| Expert authority | 3.50 | 3.50 |
| Narrative architecture | 2.00 | 2.00 |
| Authorial precision | 1.50 | 1.50 |

T11 -10.00; T12 0.00; H13 -5.04; P14 -2.60; O15 0.00; REL 0.00; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 306 (ASIN:B0006RL4SO). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **26.80 → 26.80**; Poor fit. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="progress-0484"></a>

## Out of the Blue Too — David Martin Jones; Chris Long; Ian Stonor (editors)

Sources: 232. Prior review: analysis/analysis_scorebonus_261024_0106.md#progress-0484. 

Added pages: **368**. [Source](https://biblio.co.uk/book/out-blue-too-more-scary-often/d/1673312824); [saved evidence](../data/openrouter100_261101/raw/pages-0088-google_gemini-2.5-flash-lite-v2.json). Documented count for the cited print edition. Indexed source; live stock and physical pagination were not inspected. Edition year is unknown when not supported by the cited text.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 15.00 | 11.25 |
| Systems integration | 8.00 | 3.76 |
| Transferable strategic utility | 6.00 | 6.00 |
| Mechanistic and causal depth | 5.00 | 5.00 |
| Information density | 6.50 | 4.23 |
| Durability | 7.00 | 7.00 |
| Direct domain fit | 3.00 | 3.00 |
| Expert authority | 3.50 | 3.50 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.50 | 1.50 |

T11 -10.00; T12 -10.00; H13 0.00; P14 -1.20; O15 0.00; REL 0.00; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 368 (Source:https://biblio.co.uk/book/out-blue-too-more-scary-often/d/1673312824). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **26.54 → 26.54**; Poor fit. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="shelf-37ce0a400d89"></a>

## Excelsior! The Amazing Life of Stan Lee — Stan Lee and George Mair

Sources: 261. Prior review: analysis/analysis_founders_261024_1455.md#shelf-37ce0a400d89. 

Added pages: **256**. [Source](https://www.amazon.nl/dp/0684873052); [saved evidence](../data/openrouter100_261101/raw/pages-0091-google_gemini-2.5-flash-lite-v2.json). Documented count for the cited print edition. Indexed source; live stock and physical pagination were not inspected. Edition year is unknown when not supported by the cited text.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 13.00 | 8.45 |
| Systems integration | 9.35 | 5.14 |
| Transferable strategic utility | 8.25 | 8.25 |
| Mechanistic and causal depth | 6.00 | 6.00 |
| Information density | 6.00 | 3.60 |
| Durability | 7.20 | 7.20 |
| Direct domain fit | 2.45 | 2.45 |
| Expert authority | 3.50 | 3.50 |
| Narrative architecture | 2.40 | 2.40 |
| Authorial precision | 1.30 | 1.30 |

T11 -10.00; T12 -10.00; H13 -0.96; P14 -2.40; O15 0.00; REL 0.00; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 256 (ISBN:0684873052). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **24.93 → 24.93**; Poor fit. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="rem-u0416"></a>

## Black Inventors: Crafting Over 200 Years of Success — Keith C. Holmes, Roslyn Morrison, et al.

Sources: 181. Prior review: analysis/analysis_scorebonus_261024_0106.md#rem-u0416. 

Added pages: **179**. [Source](https://www.globalblackinventor.com/the-book/); [saved evidence](../data/openrouter100_261101/raw/pages-0092-google_gemini-2.5-flash-lite-v2.json). Documented count for the cited print edition. Indexed source; live stock and physical pagination were not inspected. Edition year is unknown when not supported by the cited text.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 12.00 | 7.20 |
| Systems integration | 5.00 | 1.47 |
| Transferable strategic utility | 3.00 | 3.00 |
| Mechanistic and causal depth | 3.00 | 3.00 |
| Information density | 6.00 | 3.60 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 3.00 | 3.00 |
| Expert authority | 2.50 | 2.50 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.00 | 1.00 |

T11 -10.00; T12 0.00; H13 0.00; P14 -1.80; O15 0.00; REL 0.00; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 179 (Source:https://www.globalblackinventor.com/the-book/). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **23.47 → 23.47**; Poor fit. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="shelf-5527a4ea3f6c"></a>

## The Glasgow Effect: A Tale of Class, Capitalism & Carbon Footprint — Ellie Harrison

Sources: 263. Prior review: analysis/analysis_mchale_261024_1455.md#shelf-5527a4ea3f6c. 

Added pages: **400**. [Source](https://discovery.dundee.ac.uk/en/publications/the-glasgow-effect-a-tale-of-class-capitalism-amp-carbon-footprin-2/); [saved evidence](../data/openrouter100_261101/raw/pages-0093-google_gemini-2.5-flash-lite-v2.json). Documented count for the cited print edition. Indexed source; live stock and physical pagination were not inspected. Edition year is unknown when not supported by the cited text.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 13.00 | 8.45 |
| Systems integration | 10.20 | 6.12 |
| Transferable strategic utility | 6.75 | 6.75 |
| Mechanistic and causal depth | 5.40 | 5.40 |
| Information density | 5.50 | 3.03 |
| Durability | 5.85 | 5.85 |
| Direct domain fit | 2.10 | 2.10 |
| Expert authority | 3.25 | 3.25 |
| Narrative architecture | 2.10 | 2.10 |
| Authorial precision | 1.30 | 1.30 |

T11 -10.00; T12 -10.00; H13 -0.40; P14 -0.70; O15 0.00; REL 0.00; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 400 (Source:https://discovery.dundee.ac.uk/en/publications/the-glasgow-effect-a-tale-of-class-capitalism-amp-carbon-footprin-2/). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **23.25 → 23.25**; Poor fit. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="rem-u0494"></a>

## Gifted Hands: The Ben Carson Story — Ben Carson M.D.

Sources: 182. Prior review: analysis/analysis_scorebonus_261024_0106.md#rem-u0494. 

Added pages: **240**. [Source](https://www.waterstones.com/book/gifted-hands/ben-carson-m-d/cecil-murphey/9780310546511); [saved evidence](../data/openrouter100_261101/raw/pages-0094-google_gemini-2.5-flash-lite-v2.json). Documented count for the cited print edition. Indexed source; live stock and physical pagination were not inspected. Edition year is unknown when not supported by the cited text.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 12.00 | 7.20 |
| Systems integration | 6.00 | 2.12 |
| Transferable strategic utility | 4.00 | 4.00 |
| Mechanistic and causal depth | 4.00 | 4.00 |
| Information density | 6.50 | 4.23 |
| Durability | 7.00 | 7.00 |
| Direct domain fit | 2.00 | 2.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.00 | 1.00 |

T11 -10.00; T12 0.00; H13 -1.56; P14 -3.60; O15 0.00; REL 0.00; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 240 (ISBN:9780310546511). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **22.88 → 22.88**; Poor fit. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="complete-284-244"></a>

## Reckoning with Race — Gene Dattel

Sources: 276. Prior review: analysis/analysis_misiti_261025_1223.md#complete-284-244. 

Added pages: **352**. [Source](https://www.encounterbooks.com/books/reckoning-with-race/); [saved evidence](../data/openrouter100_261101/raw/pages-0095-google_gemini-2.5-flash-lite-v2.json). Documented count for the cited print edition. Indexed source; live stock and physical pagination were not inspected. Edition year is unknown when not supported by the cited text.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 12.00 | 7.20 |
| Systems integration | 10.00 | 5.88 |
| Transferable strategic utility | 5.00 | 5.00 |
| Mechanistic and causal depth | 5.00 | 5.00 |
| Information density | 7.00 | 4.90 |
| Durability | 7.00 | 7.00 |
| Direct domain fit | 1.00 | 1.00 |
| Expert authority | 3.50 | 3.50 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.50 | 1.50 |

T11 -10.00; T12 -10.00; H13 0.00; P14 -0.90; O15 0.00; REL 0.00; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 352 (Source:https://www.encounterbooks.com/books/reckoning-with-race/). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **22.58 → 22.58**; Poor fit. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="complete-249-157"></a>

## The World of Natural Wine — Aaron Ayscough

Sources: 276. Prior review: analysis/analysis_misiti_261025_1223.md#complete-249-157. 

Added pages: **440**. [Source](https://www.waterstones.com/book/the-world-of-natural-wine/aaron-ayscough/9781579659394); [saved evidence](../data/openrouter100_261101/raw/pages-0097-google_gemini-2.5-flash-lite-v2.json). Documented count for the cited print edition. Indexed source; live stock and physical pagination were not inspected. Edition year is unknown when not supported by the cited text.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 10.00 | 5.00 |
| Systems integration | 7.00 | 2.88 |
| Transferable strategic utility | 3.00 | 3.00 |
| Mechanistic and causal depth | 4.00 | 4.00 |
| Information density | 5.50 | 3.03 |
| Durability | 6.00 | 6.00 |
| Direct domain fit | 1.00 | 1.00 |
| Expert authority | 3.00 | 3.00 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.50 | 1.50 |

T11 -10.00; T12 0.00; H13 0.00; P14 -0.40; O15 0.00; REL 0.00; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 440 (ISBN:9781579659394). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **21.51 → 21.51**; Poor fit. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="shelf-37abf5e1b744"></a>

## I, Steve: Steve Jobs In His Own Words — George Beahm

Sources: 261. Prior review: analysis/analysis_founders_261024_1455.md#shelf-37abf5e1b744. 

Added pages: **160**. [Source](https://www.abebooks.com/9781932841664/Steve-Jobs-Own-Words-1932841660/plp); [saved evidence](../data/openrouter100_261101/raw/pages-0098-google_gemini-2.5-flash-lite-v2.json). Documented count for the cited print edition. Indexed source; live stock and physical pagination were not inspected. Edition year is unknown when not supported by the cited text.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 13.00 | 8.45 |
| Systems integration | 6.80 | 2.72 |
| Transferable strategic utility | 7.50 | 7.50 |
| Mechanistic and causal depth | 3.60 | 3.60 |
| Information density | 5.50 | 3.03 |
| Durability | 6.75 | 6.75 |
| Direct domain fit | 4.55 | 4.55 |
| Expert authority | 3.00 | 3.00 |
| Narrative architecture | 2.10 | 2.10 |
| Authorial precision | 1.20 | 1.20 |

T11 -10.00; T12 -10.00; H13 0.00; P14 -1.50; O15 0.00; REL 0.00; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 160 (ISBN:9781932841664). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **21.40 → 21.40**; Poor fit. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="rem-u0871"></a>

## Call the Nurse: True Stories of a Country Nurse on a Scottish Isle (The Country Nurse Series, Book One) — Mary J. MacLeod, Claire Macdonald

Sources: 187. Prior review: analysis/analysis_scorebonus_261024_0106.md#rem-u0871. 

Added pages: **320**. [Source](https://www.skyhorsepublishing.com/9781628725124/call-the-nurse/); [saved evidence](../data/openrouter100_261101/raw/pages-0101-google_gemini-2.5-flash-lite-v2.json). Documented count for the cited print edition. Indexed source; live stock and physical pagination were not inspected. Edition year is unknown when not supported by the cited text.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 13.00 | 8.45 |
| Systems integration | 4.00 | 0.94 |
| Transferable strategic utility | 3.00 | 3.00 |
| Mechanistic and causal depth | 3.00 | 3.00 |
| Information density | 6.00 | 3.60 |
| Durability | 7.00 | 7.00 |
| Direct domain fit | 0.00 | 0.00 |
| Expert authority | 3.00 | 3.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 -10.00; T12 0.00; H13 -2.24; P14 -1.40; O15 0.00; REL 0.00; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 320 (ISBN:9781628725124). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **19.85 → 19.85**; Poor fit. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="complete-556-342"></a>

## Last Words: A Memoir — George Carlin; Tony Hendra

Sources: 283. Prior review: analysis/analysis_ashod_261025_1223.md#complete-556-342. 

Added pages: **320**. [Source](https://www.abebooks.co.uk/9781439191101/Last-Words-Memoir-Carlin-George-1439191107/plp); [saved evidence](../data/openrouter100_261101/raw/pages-0103-google_gemini-2.5-flash-lite-v2.json). Documented count for the cited print edition. Indexed source; live stock and physical pagination were not inspected. Edition year is unknown when not supported by the cited text.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 12.00 | 7.20 |
| Systems integration | 9.00 | 4.76 |
| Transferable strategic utility | 5.00 | 5.00 |
| Mechanistic and causal depth | 4.00 | 4.00 |
| Information density | 6.50 | 4.23 |
| Durability | 7.00 | 7.00 |
| Direct domain fit | 1.00 | 1.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 -10.00; T12 -10.00; H13 -0.72; P14 -1.70; O15 0.00; REL 0.00; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 320 (ISBN:9781439191101). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **19.27 → 19.27**; Poor fit. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="progress-0125"></a>

## Chronicles of Wasted Time: An Autobiography — Malcolm Muggeridge

Sources: 232. Prior review: analysis/analysis_scorebonus_261024_0106.md#progress-0125. 

Added pages: **576**. [Source](https://books.crossmap.com/book/chronicles-of-wasted-time-an-autobiography/); [saved evidence](../data/openrouter100_261101/raw/pages-0104-google_gemini-2.5-flash-lite-v2.json). Documented count for the cited print edition. Indexed source; live stock and physical pagination were not inspected. Edition year is unknown when not supported by the cited text.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 15.00 | 11.25 |
| Systems integration | 8.00 | 3.76 |
| Transferable strategic utility | 6.00 | 6.00 |
| Mechanistic and causal depth | 5.00 | 5.00 |
| Information density | 6.50 | 4.23 |
| Durability | 7.00 | 7.00 |
| Direct domain fit | 2.00 | 2.00 |
| Expert authority | 3.50 | 3.50 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.50 | 1.50 |

T11 -10.00; T12 -10.00; H13 -2.16; P14 -5.40; O15 0.00; REL 0.00; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 576 (Source:https://books.crossmap.com/book/chronicles-of-wasted-time-an-autobiography/). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **19.18 → 19.18**; Poor fit. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="rem-u0965"></a>

## The Complete Persepolis (Persepolis, #1-4) — Marjane Satrapi

Sources: 189, 293. Prior review: analysis/analysis_mcateer_261025_2011.md#rem-u0965. 

Added pages: **341**. [Source](https://www.amazon.com/dp/0375714839); [saved evidence](../data/openrouter100_261101/raw/pages-0107-google_gemini-2.5-flash-lite-v2.json). Documented count for the cited print edition. Indexed source; live stock and physical pagination were not inspected. Edition year is unknown when not supported by the cited text.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 15.00 | 11.25 |
| Systems integration | 6.00 | 2.12 |
| Transferable strategic utility | 3.00 | 3.00 |
| Mechanistic and causal depth | 3.00 | 3.00 |
| Information density | 6.50 | 4.23 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 0.00 | 0.00 |
| Expert authority | 3.50 | 3.50 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 -10.00; T12 -10.00; H13 -1.28; P14 -2.60; O15 0.00; REL 2.00; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 341 (ISBN:0375714839). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **17.71 → 17.71**; Poor fit. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="shelf-502dfd9be2bb"></a>

## The History of Cuba in 50 Events — Henry Freeman

Sources: 261. Prior review: analysis/analysis_founders_261024_1455.md#shelf-502dfd9be2bb. 

Added pages: **60**. [Source](https://www.amazon.com/dp/1530376203); [saved evidence](../data/openrouter100_261101/raw/pages-0109-google_gemini-2.5-flash-lite-v2.json). Documented count for the cited print edition. Indexed source; live stock and physical pagination were not inspected. Edition year is unknown when not supported by the cited text.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 11.00 | 6.05 |
| Systems integration | 7.65 | 3.44 |
| Transferable strategic utility | 6.00 | 6.00 |
| Mechanistic and causal depth | 4.80 | 4.80 |
| Information density | 5.00 | 2.50 |
| Durability | 6.30 | 6.30 |
| Direct domain fit | 2.45 | 2.45 |
| Expert authority | 2.25 | 2.25 |
| Narrative architecture | 1.95 | 1.95 |
| Authorial precision | 1.10 | 1.10 |

T11 -10.00; T12 -10.00; H13 -0.44; P14 -1.00; O15 0.00; REL 0.00; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 60 (ISBN:1530376203). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **15.40 → 15.40**; Poor fit. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="rem-u0391"></a>

## What Are The Odds? From Crack Addict To CEO — Mike Lindell

Sources: 181. Prior review: analysis/analysis_scorebonus_261024_0106.md#rem-u0391. 

Added pages: **325**. [Source](https://www.goodreads.com/work/editions/75536945-what-are-the-odds-from-crack-addict-to-ceo); [saved evidence](../data/openrouter100_261101/raw/pages-0112-google_gemini-2.5-flash-lite-v2.json). Documented count for the cited print edition. Indexed source; live stock and physical pagination were not inspected. Edition year is unknown when not supported by the cited text.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 8.00 | 3.20 |
| Systems integration | 4.00 | 0.94 |
| Transferable strategic utility | 3.00 | 3.00 |
| Mechanistic and causal depth | 3.00 | 3.00 |
| Information density | 5.00 | 2.50 |
| Durability | 5.00 | 5.00 |
| Direct domain fit | 1.00 | 1.00 |
| Expert authority | 2.50 | 2.50 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.00 | 1.00 |

T11 -10.00; T12 0.00; H13 0.00; P14 -0.70; O15 0.00; REL 0.00; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 325 (Source:https://www.goodreads.com/work/editions/75536945-what-are-the-odds-from-crack-addict-to-ceo). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **13.94 → 13.94**; Poor fit. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="rest-80-71"></a>

## Alex’s Adventures in Numberland / Here’s Looking at Euclid — Alex Bellos

Sources: 270. Prior review: analysis/analysis_fabioxie_261025_0116.md#rest-80-71. 

Added pages: **319**. [Source](https://aspen.greenvillelibrary.org/Record/133524); [saved evidence](../data/openrouter100_261101/raw/reference-0552-google_gemini-2.5-flash-lite-v2.json). Documented count for the cited print edition. Indexed source; live stock and physical pagination were not inspected. Edition year is unknown when not supported by the cited text.

Added reference: **2**. [Source](https://aspen.greenvillelibrary.org/Record/133524); [saved evidence](../data/openrouter100_261101/raw/reference-0552-google_gemini-2.5-flash-lite-v2.json). Counts the expressly catalogued reference section only; may omit separate notes. Does not count the index. This is metadata evidence, not full-text inspection. No reference-page count is inferred from total length.

Ranges: bibliographical references: 293–294.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 17.00 | 14.45 |
| Systems integration | 8.00 | 3.76 |
| Transferable strategic utility | 6.00 | 6.00 |
| Mechanistic and causal depth | 7.00 | 7.00 |
| Information density | 8.00 | 6.40 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 3.00 | 3.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -1.60; O15 0.00; REL 0.00; RD 0.13.

R&D inputs: reference pages 2 (Source:https://aspen.greenvillelibrary.org/Record/133524); total pages 319 (Source:https://aspen.greenvillelibrary.org/Record/133524). 2 / 319 = 0.63%; R&D 0.13. Both counts come from the same catalog record. Ratio confidence: moderate.

Score **56.51 → 56.64**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="rest-950-124"></a>

## Arming the Union: Gunmakers in Windsor, Vermont — Carrie Brown

Sources: 284. Prior review: analysis/analysis_precision_261025_0116.md#rest-950-124. 

Added pages: **48**. [Source](https://www.amazon.com/dp/B093MZB9KJ); [saved evidence](../data/openrouter100_261101/raw/reference-0554-google_gemini-2.5-flash-lite-v2.json). Documented count for the cited print edition. Indexed source; live stock and physical pagination were not inspected. Edition year is unknown when not supported by the cited text. An Enbook record gives 50 pages without an ISBN; selected Amazon record explicitly identifies ISBN 9798736975952 and 48 pages. The two records cannot be confirmed as the same edition. Metadata confidence is low due to the unresolved discrepancy.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 17.00 | 14.45 |
| Systems integration | 13.00 | 9.94 |
| Transferable strategic utility | 11.00 | 11.00 |
| Mechanistic and causal depth | 8.00 | 8.00 |
| Information density | 8.00 | 6.40 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 7.00 | 7.00 |
| Expert authority | 4.50 | 4.50 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.50 | 1.50 |

T11 -10.00; T12 0.00; H13 -6.44; P14 -1.40; O15 0.00; REL 0.00; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 48 (ASIN:B093MZB9KJ). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **56.45 → 56.45**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="shelf-3e0ba22f6961"></a>

## Addiction by Design — Natasha Dow Schüll

Sources: 258, 269, 290, 300. Prior review: analysis/analysis_subcritical_261025_2011.md#shelf-3e0ba22f6961. 

Added amazon: **347**. [Source](https://www.amazon.com/dp/0691127557); [saved evidence](../data/openrouter100_261101/raw/amazon-0003-google_gemini-2.5-flash-lite-v3.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 18.00 | 16.20 |
| Systems integration | 15.30 | 13.77 |
| Transferable strategic utility | 12.00 | 12.00 |
| Mechanistic and causal depth | 10.80 | 10.80 |
| Information density | 8.00 | 6.40 |
| Durability | 8.10 | 8.10 |
| Direct domain fit | 4.90 | 4.90 |
| Expert authority | 4.50 | 4.50 |
| Narrative architecture | 2.40 | 2.40 |
| Authorial precision | 1.60 | 1.60 |

T11 0.00; T12 0.00; H13 0.00; P14 -1.40; O15 -5.00; REL 3.46; RD 5.16.

R&D inputs: reference pages 114 (GoogleBooks:ZoZSEQAAQBAJ); total pages 442 (OL25214727M). 114 / 442 = 25.79%; R&D 5.16. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **87.89 → 82.89**; Consider. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="shelf-c9af9ec40745"></a>

## README — W. Patrick McCray

Sources: 264. Prior review: analysis/analysis_metadata2_261025_1921.md#shelf-c9af9ec40745. 

Added amazon: **5**. [Source](https://www.amazon.es/dp/0262553481); [saved evidence](../data/openrouter100_261101/raw/amazon-0006-google_gemini-2.5-flash-lite.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 18.00 | 16.20 |
| Systems integration | 15.30 | 13.77 |
| Transferable strategic utility | 12.00 | 12.00 |
| Mechanistic and causal depth | 9.60 | 9.60 |
| Information density | 8.00 | 6.40 |
| Durability | 8.10 | 8.10 |
| Direct domain fit | 7.00 | 7.00 |
| Expert authority | 4.50 | 4.50 |
| Narrative architecture | 2.40 | 2.40 |
| Authorial precision | 1.60 | 1.60 |

T11 0.00; T12 0.00; H13 0.00; P14 -0.10; O15 -20.00; REL 0.00; RD 3.25.

R&D inputs: reference pages 62 (GoogleBooks:oG5REQAAQBAJ); total pages 382 (ISBN:9780262553483). 62 / 382 = 16.23%; R&D 3.25. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **84.72 → 64.72**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="shelf-8b77c5584d4c"></a>

## MP3, The Meaning of a Format — Jonathan Sterne

Sources: 258, 299. Prior review: analysis/analysis_leinweber_261025_2011.md#shelf-8b77c5584d4c. 

Added amazon: **14**. [Source](https://www.amazon.com/dp/B00E285R0E); [saved evidence](../data/openrouter100_261101/raw/amazon-0010-google_gemini-2.5-flash-lite.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 17.00 | 14.45 |
| Systems integration | 14.45 | 12.28 |
| Transferable strategic utility | 12.00 | 12.00 |
| Mechanistic and causal depth | 10.20 | 10.20 |
| Information density | 8.00 | 6.40 |
| Durability | 7.65 | 7.65 |
| Direct domain fit | 6.30 | 6.30 |
| Expert authority | 4.50 | 4.50 |
| Narrative architecture | 2.25 | 2.25 |
| Authorial precision | 1.60 | 1.60 |

T11 0.00; T12 0.00; H13 -0.60; P14 -1.40; O15 -10.00; REL 2.00; RD 4.69.

R&D inputs: reference pages 80 (ISBN:9780822352877); total pages 341 (ISBN:9780822352877). 80 / 341 = 23.46%; R&D 4.69. Both counts come from the same catalog record. Ratio confidence: moderate.

Score **82.32 → 72.32**; Selective. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="large-486"></a>

## User Friendly — Cliff Kuang; Robert Fabricant

Sources: 278, 301. Prior review: analysis/analysis_czarandy_261025_2011.md#large-486. 

Added amazon: **744**. [Source](https://www.amazon.com/dp/0374279756); [saved evidence](../data/openrouter100_261101/raw/amazon-0013-google_gemini-2.5-flash-lite-v2.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 17.00 | 14.45 |
| Systems integration | 14.00 | 11.53 |
| Transferable strategic utility | 13.00 | 13.00 |
| Mechanistic and causal depth | 10.00 | 10.00 |
| Information density | 8.00 | 6.40 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 6.00 | 6.00 |
| Expert authority | 4.50 | 4.50 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -0.70; O15 -5.00; REL 2.00; RD 0.63.

R&D inputs: reference pages 13 (CiNii:BB29237931); total pages 416 (ISBN:1250758203). 13 / 416 = 3.13%; R&D 0.63. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **81.30 → 76.30**; Consider. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="shelf-e2b828f7560f"></a>

## Electronic Value Exchange — David L. Stearns

Sources: 258. Prior review: analysis/analysis_metadata1000_261025_1546.md#shelf-e2b828f7560f. 

Added amazon: **18**. [Source](https://www.amazon.com/dp/1849961387); [saved evidence](../data/openrouter100_261101/raw/amazon-0014-google_gemini-2.5-flash-lite-v2.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 18.00 | 16.20 |
| Systems integration | 15.30 | 13.77 |
| Transferable strategic utility | 13.50 | 13.50 |
| Mechanistic and causal depth | 10.80 | 10.80 |
| Information density | 8.00 | 6.40 |
| Durability | 8.10 | 8.10 |
| Direct domain fit | 6.30 | 6.30 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 2.40 | 2.40 |
| Authorial precision | 1.80 | 1.80 |

T11 0.00; T12 0.00; H13 -1.68; P14 -1.50; O15 -10.00; REL 0.00; RD 1.08.

R&D inputs: reference pages 13 (ISBN:9781849961387); total pages 240 (ISBN:9781849961387). 13 / 240 = 5.42%; R&D 1.08. Both counts come from the same catalog record. Ratio confidence: moderate.

Score **81.17 → 71.17**; Selective. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="shelf-8977291d1d3e"></a>

## Fifty Inventions That Shaped the Modern Economy — Tim Harford

Sources: 263, 292, 301. Prior review: analysis/analysis_metadata3000_261025_2354.md#shelf-8977291d1d3e. 

Added amazon: **326**. [Source](https://www.amazon.com/dp/0735216134); [saved evidence](../data/openrouter100_261101/raw/amazon-0015-google_gemini-2.5-flash-lite-v2.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 17.00 | 14.45 |
| Systems integration | 14.45 | 12.28 |
| Transferable strategic utility | 12.00 | 12.00 |
| Mechanistic and causal depth | 9.00 | 9.00 |
| Information density | 8.50 | 7.23 |
| Durability | 8.10 | 8.10 |
| Direct domain fit | 6.30 | 6.30 |
| Expert authority | 4.25 | 4.25 |
| Narrative architecture | 2.55 | 2.55 |
| Authorial precision | 1.60 | 1.60 |

T11 0.00; T12 0.00; H13 0.00; P14 -0.90; O15 -5.00; REL 2.83; RD 1.43.

R&D inputs: reference pages 24 (GoogleBooks:_T2nDQAAQBAJ); total pages 336 (ISBN:9780735216143). 24 / 336 = 7.14%; R&D 1.43. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **81.11 → 76.11**; Consider. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="shelf-4f03d7d2f660"></a>

## Human Transit — Jarrett Walker

Sources: 258. Prior review: analysis/analysis_metadata2_261025_1921.md#shelf-4f03d7d2f660. 

Added amazon: **32**. [Source](https://www.amazon.com/dp/1642833053); [saved evidence](../data/openrouter100_261101/raw/amazon-0026-google_gemini-2.5-flash-lite-v2.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 15.30 | 13.77 |
| Transferable strategic utility | 13.50 | 13.50 |
| Mechanistic and causal depth | 10.80 | 10.80 |
| Information density | 8.00 | 6.40 |
| Durability | 8.10 | 8.10 |
| Direct domain fit | 5.60 | 5.60 |
| Expert authority | 4.50 | 4.50 |
| Narrative architecture | 2.70 | 2.70 |
| Authorial precision | 1.60 | 1.60 |

T11 0.00; T12 0.00; H13 0.00; P14 -1.50; O15 -10.00; REL 0.00; RD 0.66.

R&D inputs: reference pages 8 (CiNii:BB11223121); total pages 244 (OL24886350M). 8 / 244 = 3.28%; R&D 0.66. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **78.93 → 68.93**; Selective. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="shelf-5e4bbf79308d"></a>

## Simple Heuristics that Make Us Smart — Gerd Gigerenzer, Peter M. Todd and the ABC Research Group

Sources: 258. Prior review: analysis/analysis_gallagher_261024_1455.md#shelf-5e4bbf79308d. 

Added amazon: **30**. [Source](https://www.amazon.com/dp/0195143817); [saved evidence](../data/openrouter100_261101/raw/amazon-0034-google_gemini-2.5-flash-lite-v3.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 17.00 | 14.45 |
| Systems integration | 13.60 | 10.88 |
| Transferable strategic utility | 13.50 | 13.50 |
| Mechanistic and causal depth | 10.80 | 10.80 |
| Information density | 8.00 | 6.40 |
| Durability | 8.10 | 8.10 |
| Direct domain fit | 6.30 | 6.30 |
| Expert authority | 4.50 | 4.50 |
| Narrative architecture | 2.10 | 2.10 |
| Authorial precision | 1.60 | 1.60 |

T11 0.00; T12 0.00; H13 0.00; P14 -2.70; O15 -10.00; REL 0.00; RD 1.44.

R&D inputs: reference pages 30 (OL27087635M); total pages 416 (OL27087635M). 30 / 416 = 7.21%; R&D 1.44. Both counts come from the same catalog record. Ratio confidence: moderate.

Score **77.37 → 67.37**; Selective. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="resume-207-27"></a>

## What to Expect When You're Expecting Robots: The Future of Human-Robot Collaboration — Laura Major; Julie Shah

Sources: 272. Prior review: analysis/analysis_metadata2_261025_1921.md#resume-207-27. 

Added amazon: **28**. [Source](https://www.amazon.com/dp/1541699114); [saved evidence](../data/openrouter100_261101/raw/amazon-0036-google_gemini-2.5-flash-lite-v3.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 14.00 | 11.53 |
| Transferable strategic utility | 12.00 | 12.00 |
| Mechanistic and causal depth | 10.00 | 10.00 |
| Information density | 8.00 | 6.40 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 7.00 | 7.00 |
| Expert authority | 4.50 | 4.50 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -0.60; O15 -10.00; REL 0.00; RD 1.38.

R&D inputs: reference pages 21 (CiNii:BC06315614); total pages 304 (ISBN:1541699114). 21 / 304 = 6.91%; R&D 1.38. Both counts come from the same catalog record. Ratio confidence: moderate.

Score **77.01 → 67.01**; Selective. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="shelf-57c171ccb030"></a>

## The Tools of Empire: Technology and European Imperialism in the Nineteenth Century — Daniel R. Headrick

Sources: 265. Prior review: analysis/analysis_metadata1000_261025_1546.md#shelf-57c171ccb030. 

Added amazon: **42**. [Source](https://www.amazon.com/dp/0195028325); [saved evidence](../data/openrouter100_261101/raw/amazon-0037-google_gemini-2.5-flash-lite-v3.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 18.00 | 16.20 |
| Systems integration | 15.30 | 13.77 |
| Transferable strategic utility | 13.50 | 13.50 |
| Mechanistic and causal depth | 10.80 | 10.80 |
| Information density | 9.00 | 8.10 |
| Durability | 8.10 | 8.10 |
| Direct domain fit | 7.00 | 7.00 |
| Expert authority | 4.50 | 4.50 |
| Narrative architecture | 2.40 | 2.40 |
| Authorial precision | 1.60 | 1.60 |

T11 0.00; T12 0.00; H13 -5.04; P14 -4.50; O15 -10.00; REL 0.00; RD 0.27.

R&D inputs: reference pages 3 (OL4103520M); total pages 221 (OL4103520M). 3 / 221 = 1.36%; R&D 0.27. Both counts come from the same catalog record. Ratio confidence: moderate.

Score **76.70 → 66.70**; Selective. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="shelf-c6b92b6be68b"></a>

## Editing Humanity — Kevin Davies

Sources: 251, 258, 292. Prior review: analysis/analysis_kamdar_261025_2011.md#shelf-c6b92b6be68b. 

Added amazon: **180**. [Source](https://www.amazon.com/dp/164313308X); [saved evidence](../data/openrouter100_261101/raw/amazon-0042-google_gemini-2.5-flash-lite-v3.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 13.60 | 10.88 |
| Transferable strategic utility | 10.50 | 10.50 |
| Mechanistic and causal depth | 9.60 | 9.60 |
| Information density | 8.00 | 6.40 |
| Durability | 7.20 | 7.20 |
| Direct domain fit | 5.60 | 5.60 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 2.40 | 2.40 |
| Authorial precision | 1.60 | 1.60 |

T11 0.00; T12 0.00; H13 0.00; P14 -0.60; O15 -5.00; REL 2.83; RD 2.68.

R&D inputs: reference pages 45 (Harvard:99153849398503941); total pages 336 (OL29820446M). 45 / 336 = 13.39%; R&D 2.68. Both counts come from the same catalog record. Ratio confidence: moderate.

Score **75.89 → 70.89**; Selective. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="shelf-c05aca179ada"></a>

## Out of Control — Kevin Kelly

Sources: 259, 264, 290, 291, 303. Prior review: analysis/analysis_subcritical_261025_2011.md#shelf-c05aca179ada. 

Added amazon: **195**. [Source](https://www.amazon.com/dp/0201483408); [saved evidence](../data/openrouter100_261101/raw/amazon-0048-google_gemini-2.5-flash-lite-v3.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 14.00 | 9.80 |
| Systems integration | 15.30 | 13.77 |
| Transferable strategic utility | 12.00 | 12.00 |
| Mechanistic and causal depth | 9.60 | 9.60 |
| Information density | 8.00 | 6.40 |
| Durability | 7.20 | 7.20 |
| Direct domain fit | 6.30 | 6.30 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 2.40 | 2.40 |
| Authorial precision | 1.40 | 1.40 |

T11 0.00; T12 0.00; H13 0.00; P14 -3.20; O15 -5.00; REL 4.00; RD 1.00.

R&D inputs: reference pages 26 (ISBN:0201483408); total pages 521 (ISBN:1857020197). 26 / 521 = 4.99%; R&D 1.00. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **74.67 → 69.67**; Selective. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="rest-141-127"></a>

## An Engine, Not a Camera — Donald MacKenzie

Sources: 272. Prior review: analysis/analysis_metadata2_261025_1921.md#rest-141-127. 

Added amazon: **28**. [Source](https://www.amazon.com/dp/0262633671); [saved evidence](../data/openrouter100_261101/raw/amazon-0053-google_gemini-2.5-flash-lite-v3.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 18.00 | 16.20 |
| Systems integration | 15.00 | 13.24 |
| Transferable strategic utility | 13.00 | 13.00 |
| Mechanistic and causal depth | 10.00 | 10.00 |
| Information density | 8.50 | 7.23 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 6.00 | 6.00 |
| Expert authority | 5.00 | 5.00 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 -10.00; H13 -0.88; P14 -2.00; O15 -10.00; REL 0.00; RD 3.27.

R&D inputs: reference pages 64 (GoogleBooks:2U7uqsMwb6oC); total pages 392 (ISBN:0262633671). 64 / 392 = 16.33%; R&D 3.27. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **74.05 → 64.05**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="shelves-wetware-bray"></a>

## Wetware: A Computer in Every Living Cell — Dennis Bray

Sources: 289, 294. Prior review: analysis/analysis_nikomc_261025_2011.md#shelves-wetware-bray. 

Added amazon: **94**. [Source](https://www.amazon.com/dp/0300167849); [saved evidence](../data/openrouter100_261101/raw/amazon-0061-google_gemini-2.5-flash-lite-v3.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 17.00 | 14.45 |
| Systems integration | 12.00 | 8.47 |
| Transferable strategic utility | 11.00 | 11.00 |
| Mechanistic and causal depth | 10.00 | 10.00 |
| Information density | 7.50 | 5.63 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 7.00 | 7.00 |
| Expert authority | 4.50 | 4.50 |
| Narrative architecture | 2.00 | 2.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -1.70; O15 -10.00; REL 2.00; RD 0.57.

R&D inputs: reference pages 8 (Strathmore:289687; 2009 e-book); total pages 279 (Strathmore:289687; xii + 267 pages, 2009 e-book). 8 / 279 = 2.87%; R&D 0.57. Both counts come from the same catalog record. Ratio confidence: moderate.

Score **73.42 → 63.42**; Low priority. Content confidence retained: moderate. Content assessments were not rerated in this metadata update.

<a id="continue-hounshell"></a>

## From the American System to Mass Production, 1800–1932: The Development of Manufacturing Technology in the United States — David A. Hounshell

Sources: 284. Prior review: analysis/analysis_metadata1000_261025_1546.md#continue-hounshell. 

Added amazon: **41**. [Source](https://www.amazon.com/dp/0801829755); [saved evidence](../data/openrouter100_261101/raw/amazon-0068-google_gemini-2.5-flash-lite-v3.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 19.00 | 18.05 |
| Systems integration | 16.00 | 15.06 |
| Transferable strategic utility | 14.00 | 14.00 |
| Mechanistic and causal depth | 11.00 | 11.00 |
| Information density | 8.50 | 7.23 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 7.00 | 7.00 |
| Expert authority | 5.00 | 5.00 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.50 | 1.50 |

T11 -10.00; T12 0.00; H13 -3.76; P14 -4.20; O15 -10.00; REL 0.00; RD 0.64.

R&D inputs: reference pages 14 (ISBN:0801829755); total pages 440 (ISBN:080183158X). 14 / 440 = 3.18%; R&D 0.64. Both counts come from the same catalog record. Ratio confidence: moderate.

Score **73.01 → 63.01**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="large-210"></a>

## Your Face Belongs to Us — Kashmir Hill

Sources: 272, 278. Prior review: analysis/analysis_metadata2_261025_1921.md#large-210. 

Added amazon: **206**. [Source](https://www.amazon.com/dp/0593448561); [saved evidence](../data/openrouter100_261101/raw/amazon-0070-google_gemini-2.5-flash-lite-v3.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 17.00 | 14.45 |
| Systems integration | 14.00 | 11.53 |
| Transferable strategic utility | 12.00 | 12.00 |
| Mechanistic and causal depth | 10.00 | 10.00 |
| Information density | 8.00 | 6.40 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 7.00 | 7.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 -10.00; T12 0.00; H13 0.00; P14 -0.30; O15 -5.00; REL 2.00; RD 3.39.

R&D inputs: reference pages 57 (CiNii:BD06856269); total pages 336 (GoogleBooks:MA-lEAAAQBAJ). 57 / 336 = 16.96%; R&D 3.39. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **72.97 → 67.97**; Selective. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="shelf-206692dc9ced"></a>

## Never Lost Again — Bill Kilday

Sources: 258. Prior review: analysis/analysis_gallagher_261024_1455.md#shelf-206692dc9ced. 

Added amazon: **134**. [Source](https://www.amazon.com/dp/0062673041); [saved evidence](../data/openrouter100_261101/raw/amazon-0074-google_gemini-2.5-flash-lite-v3.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 14.00 | 9.80 |
| Systems integration | 15.30 | 13.77 |
| Transferable strategic utility | 12.00 | 12.00 |
| Mechanistic and causal depth | 9.60 | 9.60 |
| Information density | 8.00 | 6.40 |
| Durability | 7.20 | 7.20 |
| Direct domain fit | 6.30 | 6.30 |
| Expert authority | 4.50 | 4.50 |
| Narrative architecture | 2.70 | 2.70 |
| Authorial precision | 1.60 | 1.60 |

T11 0.00; T12 0.00; H13 -0.40; P14 -0.80; O15 -5.00; REL 0.00; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 347 (OL26958395M). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **72.67 → 67.67**; Selective. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="rest-36-30"></a>

## The Economic History of China — Richard von Glahn

Sources: 269, 290. Prior review: analysis/analysis_subcritical_261025_2011.md#rest-36-30. 

Added amazon: **45**. [Source](https://www.amazon.com/dp/1107615704); [saved evidence](../data/openrouter100_261101/raw/amazon-0077-google_gemini-2.5-flash-lite-v3.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 18.00 | 16.20 |
| Systems integration | 16.00 | 15.06 |
| Transferable strategic utility | 12.00 | 12.00 |
| Mechanistic and causal depth | 10.00 | 10.00 |
| Information density | 8.50 | 7.23 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 6.00 | 6.00 |
| Expert authority | 5.00 | 5.00 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.50 | 1.50 |

T11 -10.00; T12 0.00; H13 -5.04; P14 -1.00; O15 -10.00; REL 2.00; RD 2.00.

R&D inputs: reference pages 48 (CiNii:BC15465232); total pages 480 (The Economic History of China; edition date unverified). 48 / 480 = 10.00%; R&D 2.00. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **72.44 → 62.44**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="shelf-b83405b6ac94"></a>

## The Collapse of Complex Societies — Joseph A. Tainter

Sources: 259, 263, 265, 279, 290, 297. Prior review: analysis/analysis_subcritical_261025_2011.md#shelf-b83405b6ac94. 

Added amazon: **321**. [Source](https://www.amazon.com/dp/052138673X); [saved evidence](../data/openrouter100_261101/raw/amazon-0082-google_gemini-2.5-flash-lite-v3.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 15.30 | 13.77 |
| Transferable strategic utility | 13.50 | 13.50 |
| Mechanistic and causal depth | 10.80 | 10.80 |
| Information density | 8.00 | 6.40 |
| Durability | 8.10 | 8.10 |
| Direct domain fit | 5.60 | 5.60 |
| Expert authority | 4.50 | 4.50 |
| Narrative architecture | 2.40 | 2.40 |
| Authorial precision | 1.60 | 1.60 |

T11 0.00; T12 -10.00; H13 0.00; P14 -3.80; O15 -5.00; REL 4.47; RD 2.08.

R&D inputs: reference pages 26 (OL14421573M); total pages 250 (OL14421573M). 26 / 250 = 10.40%; R&D 2.08. Both counts come from the same catalog record. Ratio confidence: moderate.

Score **72.22 → 67.22**; Selective. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="shelf-db726f467f62"></a>

## After Tamerlane — John Darwin

Sources: 265, 269. Prior review: analysis/analysis_metadata1000_261025_1546.md#shelf-db726f467f62. 

Added amazon: **332**. [Source](https://www.amazon.com/dp/1596913932); [saved evidence](../data/openrouter100_261101/raw/amazon-0089-google_gemini-2.5-flash-lite-v3.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 18.00 | 16.20 |
| Systems integration | 15.30 | 13.77 |
| Transferable strategic utility | 12.00 | 12.00 |
| Mechanistic and causal depth | 9.60 | 9.60 |
| Information density | 8.00 | 6.40 |
| Durability | 8.10 | 8.10 |
| Direct domain fit | 5.60 | 5.60 |
| Expert authority | 4.50 | 4.50 |
| Narrative architecture | 2.70 | 2.70 |
| Authorial precision | 1.60 | 1.60 |

T11 0.00; T12 -10.00; H13 -1.04; P14 -1.90; O15 -5.00; REL 2.00; RD 2.06.

R&D inputs: reference pages 61 (ISBN:9781596913936); total pages 592 (OL9665775M). 61 / 592 = 10.30%; R&D 2.06. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **71.59 → 66.59**; Selective. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="shelf-05deea314954"></a>

## Steve Jobs in Exile: The Untold Story of NeXT and the Remaking of an American Visionary — Geoffrey Cain

Sources: 261. Prior review: analysis/analysis_metadata1000_261025_1546.md#shelf-05deea314954. 

Added amazon: **39**. [Source](https://www.amazon.com/dp/0593716698); [saved evidence](../data/openrouter100_261101/raw/amazon-0094-google_gemini-2.5-flash-lite-v3.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 13.60 | 10.88 |
| Transferable strategic utility | 12.00 | 12.00 |
| Mechanistic and causal depth | 9.60 | 9.60 |
| Information density | 7.00 | 4.90 |
| Durability | 7.20 | 7.20 |
| Direct domain fit | 7.00 | 7.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 2.40 | 2.40 |
| Authorial precision | 1.60 | 1.60 |

T11 0.00; T12 0.00; H13 -1.16; P14 0.00; O15 -10.00; REL 0.00; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 320 (GoogleBooks:2V8V0gEACAAJ). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **71.22 → 61.22**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="shelf-b01f9cb0e82b"></a>

## Engines of Creation — K. Eric Drexler

Sources: 264, 291. Prior review: analysis/analysis_bretvictor_261025_2011.md#shelf-b01f9cb0e82b. 

Added amazon: **131**. [Source](https://www.amazon.com/dp/0385199732); [saved evidence](../data/openrouter100_261101/raw/amazon-0099-google_gemini-2.5-flash-lite-v3.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 12.00 | 7.20 |
| Systems integration | 15.30 | 13.77 |
| Transferable strategic utility | 12.00 | 12.00 |
| Mechanistic and causal depth | 9.60 | 9.60 |
| Information density | 7.00 | 4.90 |
| Durability | 7.20 | 7.20 |
| Direct domain fit | 7.00 | 7.00 |
| Expert authority | 4.50 | 4.50 |
| Narrative architecture | 2.40 | 2.40 |
| Authorial precision | 1.60 | 1.60 |

T11 0.00; T12 0.00; H13 0.00; P14 -4.00; O15 -5.00; REL 2.00; RD 2.75.

R&D inputs: reference pages 41 (ISBN:0385199724); total pages 298 (ISBN:0385199724). 41 / 298 = 13.76%; R&D 2.75. Both counts come from the same catalog record. Ratio confidence: moderate.

Score **70.92 → 65.92**; Selective. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="shelf-7470fbd2e0cf"></a>

## Left Behind: A New Economics for Neglected Places — Paul Collier

Sources: 263. Prior review: analysis/analysis_mchale_261024_1455.md#shelf-7470fbd2e0cf. 

Added amazon: **90**. [Source](https://www.amazon.com/dp/154170309X); [saved evidence](../data/openrouter100_261101/raw/amazon-0107-google_gemini-2.5-flash-lite-v3.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 13.60 | 10.88 |
| Transferable strategic utility | 12.00 | 12.00 |
| Mechanistic and causal depth | 9.60 | 9.60 |
| Information density | 7.00 | 4.90 |
| Durability | 7.20 | 7.20 |
| Direct domain fit | 4.90 | 4.90 |
| Expert authority | 4.50 | 4.50 |
| Narrative architecture | 2.40 | 2.40 |
| Authorial precision | 1.60 | 1.60 |

T11 0.00; T12 0.00; H13 0.00; P14 -0.20; O15 -10.00; REL 0.00; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 304 (OL57735684M). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **70.58 → 60.58**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="shelves-toolsthought"></a>

## Tools for Thought: The History and Future of Mind-Expanding Technology — Howard Rheingold

Sources: 291. Prior review: analysis/analysis_bretvictor_261025_2011.md#shelves-toolsthought. 

Added amazon: **12**. [Source](https://www.amazon.com/dp/0262681153); [saved evidence](../data/openrouter100_261101/raw/amazon-0111-google_gemini-2.5-flash-lite-v3.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 14.00 | 11.53 |
| Transferable strategic utility | 12.00 | 12.00 |
| Mechanistic and causal depth | 9.00 | 9.00 |
| Information density | 8.00 | 6.40 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 7.00 | 7.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 -1.08; P14 -4.10; O15 -10.00; REL 0.00; RD 0.33.

R&D inputs: reference pages 6 (ISBN:9780262681155); total pages 359 (ISBN:9780262681155). 6 / 359 = 1.67%; R&D 0.33. Both counts come from the same catalog record. Ratio confidence: moderate.

Score **70.38 → 60.38**; Low priority. Content confidence retained: moderate. Content assessments were not rerated in this metadata update.

<a id="shelves-sevensinsmemory"></a>

## The Seven Sins of Memory: How the Mind Forgets and Remembers — Daniel L. Schacter

Sources: 303. Prior review: analysis/analysis_elitescience_261025_2011.md#shelves-sevensinsmemory. 

Added amazon: **337**. [Source](https://www.amazon.com/dp/0618219196); [saved evidence](../data/openrouter100_261101/raw/amazon-0120-google_gemini-2.5-flash-lite-v3.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 17.00 | 14.45 |
| Systems integration | 11.00 | 7.12 |
| Transferable strategic utility | 11.00 | 11.00 |
| Mechanistic and causal depth | 10.00 | 10.00 |
| Information density | 8.00 | 6.40 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 4.00 | 4.00 |
| Expert authority | 5.00 | 5.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -2.50; O15 -5.00; REL 0.00; RD 1.99.

R&D inputs: reference pages 28 (ISBN:0618040196); total pages 282 (ISBN:0618040196; 2001 hardcover, x + 272 pages). 28 / 282 = 9.93%; R&D 1.99. Both counts come from the same catalog record. Ratio confidence: moderate.

Score **69.95 → 64.95**; Low priority. Content confidence retained: moderate. Content assessments were not rerated in this metadata update.

<a id="shelf-12916c6d0eb3"></a>

## Hidden Order — John H. Holland

Sources: 258. Prior review: analysis/analysis_gallagher_261024_1455.md#shelf-12916c6d0eb3. 

Added amazon: **66**. [Source](https://www.amazon.com/dp/0201407930); [saved evidence](../data/openrouter100_261101/raw/amazon-0127-google_gemini-2.5-flash-lite-v3.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 15.00 | 11.25 |
| Systems integration | 13.60 | 10.88 |
| Transferable strategic utility | 12.75 | 12.75 |
| Mechanistic and causal depth | 9.60 | 9.60 |
| Information density | 7.50 | 5.63 |
| Durability | 7.65 | 7.65 |
| Direct domain fit | 6.30 | 6.30 |
| Expert authority | 4.75 | 4.75 |
| Narrative architecture | 1.95 | 1.95 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -3.10; O15 -10.00; REL 0.00; RD 0.32.

R&D inputs: reference pages 3 (ISBN:0201407930); total pages 185 (ISBN:0201407930). 3 / 185 = 1.62%; R&D 0.32. Both counts come from the same catalog record. Ratio confidence: moderate.

Score **69.48 → 59.48**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="large-521"></a>

## Behind Deep Blue: Building the Computer that Defeated the World Chess Champion — Feng-hsiung Hsu

Sources: 283. Prior review: analysis/analysis_metadata1000_261025_1546.md#large-521. 

Added amazon: **41**. [Source](https://www.amazon.com/dp/0691118183); [saved evidence](../data/openrouter100_261101/raw/amazon-0128-google_gemini-2.5-flash-lite-v3.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 18.00 | 16.20 |
| Systems integration | 14.00 | 11.53 |
| Transferable strategic utility | 12.00 | 12.00 |
| Mechanistic and causal depth | 11.00 | 11.00 |
| Information density | 8.50 | 7.23 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 7.00 | 7.00 |
| Expert authority | 5.00 | 5.00 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.50 | 1.50 |

T11 -10.00; T12 0.00; H13 -1.16; P14 -2.40; O15 -10.00; REL 0.00; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 298 (GoogleBooks:-__aEe64MCUC). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **69.39 → 59.39**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="shelf-117ae8f1ba4d"></a>

## The Relentless Revolution: A History of Capitalism — Joyce Appleby

Sources: 258. Prior review: analysis/analysis_metadata1000_261025_1546.md#shelf-117ae8f1ba4d. 

Added amazon: **60**. [Source](https://www.amazon.com/dp/0393068943); [saved evidence](../data/openrouter100_261101/raw/amazon-0132-google_gemini-2.5-flash-lite-v3.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 13.60 | 10.88 |
| Transferable strategic utility | 10.50 | 10.50 |
| Mechanistic and causal depth | 8.40 | 8.40 |
| Information density | 8.00 | 6.40 |
| Durability | 8.10 | 8.10 |
| Direct domain fit | 4.20 | 4.20 |
| Expert authority | 4.50 | 4.50 |
| Narrative architecture | 2.40 | 2.40 |
| Authorial precision | 1.60 | 1.60 |

T11 0.00; T12 0.00; H13 0.00; P14 -1.60; O15 -10.00; REL 0.00; RD 0.94.

R&D inputs: reference pages 24 (GoogleBooks:-s2k-xUJEEYC); total pages 512 (OL29570439M). 24 / 512 = 4.69%; R&D 0.94. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **69.12 → 59.12**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="g0423"></a>

## Code — Charles Petzold

Sources: 116, 175, 190, 191, 211, 218, 219, 232, 251, 292, 294, 298, 299, 303. Prior review: analysis/analysis_kamdar_261025_2011.md#g0423. 

Added reference: **1**. [Source](https://apps.lib.byu.edu/marcrecord/bib/2678127); [saved evidence](../data/openrouter100_261101/raw/reference-0018-google_gemini-2.5-flash-lite-v2.json). Counts the expressly catalogued reference section only; may omit separate notes. Does not count the index. This is metadata evidence, not full-text inspection. No reference-page count is inferred from total length.

Ranges: bibliographical references: 383–383.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 19.00 | 18.05 |
| Systems integration | 10.00 | 5.88 |
| Transferable strategic utility | 8.00 | 8.00 |
| Mechanistic and causal depth | 11.00 | 11.00 |
| Information density | 8.00 | 6.40 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 7.00 | 7.00 |
| Expert authority | 5.00 | 5.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 2.00 | 2.00 |

T11 0.00; T12 0.00; H13 0.00; P14 -2.70; O15 0.00; REL 7.21; RD 0.05.

R&D inputs: reference pages 1 (Source:https://apps.lib.byu.edu/marcrecord/bib/2678127); total pages 393 (OL17703091M). 1 / 393 = 0.25%; R&D 0.05. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **79.84 → 79.89**; Consider. Content confidence retained: moderate. Content assessments were not rerated in this metadata update.

<a id="shelf-8d715a5bb73d"></a>

## Rolls-Royce: The Magic of a Name: The First Forty Years of Britain s Most Prestigious Company — Peter Pugh

Sources: 261. Prior review: analysis/analysis_metadata1000_261025_1546.md#shelf-8d715a5bb73d. 

Added reference: **5**. [Source](https://archive.org/details/magicofnamerolls0000pugh); [saved evidence](../data/openrouter100_261101/raw/reference-0101-google_gemini-2.5-flash-lite-v3.json). Counts the expressly catalogued reference section only; may omit separate notes. Does not count the index. This is metadata evidence, not full-text inspection. No reference-page count is inferred from total length.

Ranges: bibliographical references: 325–329.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 14.45 | 12.28 |
| Transferable strategic utility | 12.00 | 12.00 |
| Mechanistic and causal depth | 9.60 | 9.60 |
| Information density | 8.00 | 6.40 |
| Durability | 8.10 | 8.10 |
| Direct domain fit | 7.00 | 7.00 |
| Expert authority | 4.25 | 4.25 |
| Narrative architecture | 2.25 | 2.25 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 -3.24; P14 -2.60; O15 0.00; REL 0.00; RD 0.31.

R&D inputs: reference pages 5 (Source:https://archive.org/details/magicofnamerolls0000pugh); total pages 320 (OL28572374M). 5 / 320 = 1.56%; R&D 0.31. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **70.34 → 70.66**; Selective. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="rem-u1784"></a>

## Supremacy: AI, ChatGPT, and the Race that Will Change the World — Parmy Olson

Sources: 193, 299. Prior review: analysis/analysis_leinweber_261025_2011.md#rem-u1784. 

Added reference: **14**. [Source](https://search.sl.nsw.gov.au/primo-explore/fulldisplay?adaptor=Local%20Search%20Engine&context=L&docid=SLNSW_ALMA21297807570002626&lang=en_US&query=any%2Ccontains%2C991024674768502626&search_scope=E&tab=default_tab&vid=SLNSW); [saved evidence](../data/openrouter100_261101/raw/reference-0122-google_gemini-2.5-flash-lite-v3.json). Counts the expressly catalogued reference section only; may omit separate notes. Does not count the index. This is metadata evidence, not full-text inspection. No reference-page count is inferred from total length.

Ranges: bibliographical references: 295–308.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 17.00 | 14.45 |
| Systems integration | 13.00 | 9.94 |
| Transferable strategic utility | 9.00 | 9.00 |
| Mechanistic and causal depth | 7.00 | 7.00 |
| Information density | 8.00 | 6.40 |
| Durability | 6.00 | 6.00 |
| Direct domain fit | 6.00 | 6.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 -0.12; P14 -0.20; O15 0.00; REL 2.00; RD 0.92.

R&D inputs: reference pages 14 (Source:https://search.sl.nsw.gov.au/primo-explore/fulldisplay?adaptor=Local%20Search%20Engine&context=L&docid=SLNSW_ALMA21297807570002626&lang=en_US&query=any%2Ccontains%2C991024674768502626&search_scope=E&tab=default_tab&vid=SLNSW); total pages 304 (/books/OL57544870M). 14 / 304 = 4.61%; R&D 0.92. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **68.97 → 69.89**; Selective. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="progress-0624"></a>

## Crick: A Mind in Motion – from DNA to the Brain — Matthew Cobb

Sources: 243, 289. Prior review: analysis/analysis_nikomc_261025_2011.md#progress-0624. 

Added reference: **82**. [Source](https://content.www.wellcomecollection.org/works/vay2jjzh); [saved evidence](../data/openrouter100_261101/raw/reference-0159-google_gemini-2.5-flash-lite-v3.json). Counts the expressly catalogued reference section only; may omit separate notes. Does not count the index. This is metadata evidence, not full-text inspection. No reference-page count is inferred from total length.

Ranges: Bibliographical references: 492–573.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 18.00 | 16.20 |
| Systems integration | 13.00 | 9.94 |
| Transferable strategic utility | 11.00 | 11.00 |
| Mechanistic and causal depth | 10.00 | 10.00 |
| Information density | 8.00 | 6.40 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 5.00 | 5.00 |
| Expert authority | 5.00 | 5.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 -0.88; P14 -0.10; O15 -10.00; REL 2.00; RD 2.70.

R&D inputs: reference pages 82 (Source:https://content.www.wellcomecollection.org/works/vay2jjzh); total pages 608 (/books/OL60900892M). 82 / 608 = 13.49%; R&D 2.70. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **67.06 → 69.76**; Selective. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="progress-0399"></a>

## The Ocean of Life — Callum Roberts

Sources: 232, 290. Prior review: analysis/analysis_subcritical_261025_2011.md#progress-0399. 

Added reference: **31**. [Source](https://catalog.ocls.org/Record/.b18126923); [saved evidence](../data/openrouter100_261101/raw/reference-0504-google_gemini-2.5-flash-lite-v2.json). Counts the expressly catalogued reference section only; may omit separate notes. Does not count the index. This is metadata evidence, not full-text inspection. No reference-page count is inferred from total length.

Ranges: Bibliography: 361–391.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 18.00 | 16.20 |
| Systems integration | 12.00 | 8.47 |
| Transferable strategic utility | 8.00 | 8.00 |
| Mechanistic and causal depth | 9.00 | 9.00 |
| Information density | 8.00 | 6.40 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 2.00 | 2.00 |
| Expert authority | 4.50 | 4.50 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 -10.00; T12 0.00; H13 0.00; P14 -1.40; O15 0.00; REL 2.00; RD 1.53.

R&D inputs: reference pages 31 (Source:https://catalog.ocls.org/Record/.b18126923); total pages 405 (OL25173574M). 31 / 405 = 7.65%; R&D 1.53. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **57.67 → 59.20**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="shelf-5b8a45540be0"></a>

## A History of America in 100 Maps — Susan Schulten

Sources: 258. Prior review: analysis/analysis_metadata1000_261025_1546.md#shelf-5b8a45540be0. 

Added reference: **4**. [Source](https://broomfieldkids.flatironslibrary.org/Record/.b29272865); [saved evidence](../data/openrouter100_261101/raw/reference-0517-google_gemini-2.5-flash-lite-v2.json). Counts the expressly catalogued reference section only; may omit separate notes. Does not count the index. This is metadata evidence, not full-text inspection. No reference-page count is inferred from total length.

Ranges: bibliographical references: 260–263.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 17.00 | 14.45 |
| Systems integration | 12.75 | 9.56 |
| Transferable strategic utility | 9.75 | 9.75 |
| Mechanistic and causal depth | 7.80 | 7.80 |
| Information density | 7.50 | 5.63 |
| Durability | 8.10 | 8.10 |
| Direct domain fit | 4.55 | 4.55 |
| Expert authority | 4.25 | 4.25 |
| Narrative architecture | 2.40 | 2.40 |
| Authorial precision | 1.60 | 1.60 |

T11 -10.00; T12 0.00; H13 0.00; P14 -0.80; O15 0.00; REL 0.00; RD 0.31.

R&D inputs: reference pages 4 (Source:https://broomfieldkids.flatironslibrary.org/Record/.b29272865); total pages 256 (GoogleBooks:2g1uDwAAQBAJ). 4 / 256 = 1.56%; R&D 0.31. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **57.29 → 57.60**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="q0081"></a>

## The Inheritance of Rome — Chris Wickham

Sources: 7, 300. Prior review: analysis/analysis_hendricks_261025_2011.md#q0081. 

Added reference: **58**. [Source](https://www.nypl.org/research/research-catalog/bib/b20026348); [saved evidence](../data/openrouter100_261101/raw/reference-0529-google_gemini-2.5-flash-lite-v2.json). Counts the expressly catalogued reference section only; may omit separate notes. Does not count the index. This is metadata evidence, not full-text inspection. No reference-page count is inferred from total length.

Ranges: Bibliography: 565–622.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 18.00 | 16.20 |
| Systems integration | 17.00 | 17.00 |
| Transferable strategic utility | 12.00 | 12.00 |
| Mechanistic and causal depth | 9.88 | 9.88 |
| Information density | 6.00 | 3.60 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 6.00 | 6.00 |
| Expert authority | 5.00 | 5.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 2.00 | 2.00 |

T11 0.00; T12 -10.00; H13 -12.00; P14 -1.70; O15 -5.00; REL 2.00; RD 1.69.

R&D inputs: reference pages 58 (Source:https://www.nypl.org/research/research-catalog/bib/b20026348); total pages 688 (ASIN:0143117424). 58 / 688 = 8.43%; R&D 1.69. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **56.98 → 58.67**; Low priority. Content confidence retained: moderate. Content assessments were not rerated in this metadata update.

<a id="shelf-0292ed0d982e"></a>

## Self Comes to Mind — Antonio Damasio

Sources: 254. Prior review: analysis/analysis_metadata1000_261025_1546.md#shelf-0292ed0d982e. 

Added reference: **24**. [Source](https://catalog.ocls.org/Record/.b17528161); [saved evidence](../data/openrouter100_261101/raw/reference-0540-google_gemini-2.5-flash-lite-v2.json). Counts the expressly catalogued reference section only; may omit separate notes. Does not count the index. This is metadata evidence, not full-text inspection. No reference-page count is inferred from total length.

Ranges: Bibliography: 319–342.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 14.00 | 9.80 |
| Systems integration | 10.20 | 6.12 |
| Transferable strategic utility | 9.00 | 9.00 |
| Mechanistic and causal depth | 9.60 | 9.60 |
| Information density | 7.00 | 4.90 |
| Durability | 7.20 | 7.20 |
| Direct domain fit | 3.50 | 3.50 |
| Expert authority | 4.50 | 4.50 |
| Narrative architecture | 2.10 | 2.10 |
| Authorial precision | 1.60 | 1.60 |

T11 0.00; T12 0.00; H13 0.00; P14 -1.60; O15 0.00; REL 0.00; RD 1.31.

R&D inputs: reference pages 24 (Source:https://catalog.ocls.org/Record/.b17528161); total pages 367 (ISBN:9780307378750). 24 / 367 = 6.54%; R&D 1.31. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **56.72 → 58.03**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="shelf-76654163a153"></a>

## Creation: How Science is Reinventing Life Itself — Adam Rutherford

Sources: 254, 258. Prior review: analysis/analysis_metadata1000_261025_1546.md#shelf-76654163a153. 

Added reference: **14**. [Source](https://metro-prod.groveforlibraries.com/Record/CARL0000135290); [saved evidence](../data/openrouter100_261101/raw/reference-0541-google_gemini-2.5-flash-lite-v2.json). Counts the expressly catalogued reference section only; may omit separate notes. Does not count the index. This is metadata evidence, not full-text inspection. No reference-page count is inferred from total length.

Ranges: Bibliographical references: 255–268.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 14.00 | 9.80 |
| Systems integration | 10.20 | 6.12 |
| Transferable strategic utility | 9.00 | 9.00 |
| Mechanistic and causal depth | 8.40 | 8.40 |
| Information density | 7.00 | 4.90 |
| Durability | 6.30 | 6.30 |
| Direct domain fit | 4.20 | 4.20 |
| Expert authority | 3.50 | 3.50 |
| Narrative architecture | 2.40 | 2.40 |
| Authorial precision | 1.40 | 1.40 |

T11 0.00; T12 0.00; H13 0.00; P14 -1.30; O15 0.00; REL 2.00; RD 1.01.

R&D inputs: reference pages 14 (Source:https://metro-prod.groveforlibraries.com/Record/CARL0000135290); total pages 278 (ISBN:1617230111). 14 / 278 = 5.04%; R&D 1.01. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **56.72 → 57.73**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="bg324c28a727"></a>

## 2030 — Mauro F. Guillén

Sources: 159. Prior review: analysis/analysis_scorebonus_261024_0106.md#bg324c28a727. 

Added reference: **23**. [Source](https://broomfieldkids.flatironslibrary.org/Record/.b29636383); [saved evidence](../data/openrouter100_261101/raw/reference-0543-google_gemini-2.5-flash-lite-v2.json). Counts the expressly catalogued reference section only; may omit separate notes. Does not count the index. This is metadata evidence, not full-text inspection. No reference-page count is inferred from total length.

Ranges: Bibliographical references: 245–267.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 13.00 | 8.45 |
| Systems integration | 13.00 | 9.94 |
| Transferable strategic utility | 10.00 | 10.00 |
| Mechanistic and causal depth | 7.00 | 7.00 |
| Information density | 7.00 | 4.90 |
| Durability | 5.00 | 5.00 |
| Direct domain fit | 4.00 | 4.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -0.60; O15 0.00; REL 0.00; RD 1.60.

R&D inputs: reference pages 23 (Source:https://broomfieldkids.flatironslibrary.org/Record/.b29636383); total pages 288 (9781250268174). 23 / 288 = 7.99%; R&D 1.60. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **56.69 → 58.29**; Low priority. Content confidence retained: moderate. Content assessments were not rerated in this metadata update.

<a id="g1092"></a>

## The House of Rothschild, Volume I: Money’s Prophets, 1798–1848 — Niall Ferguson

Sources: 122, 261. Prior review: analysis/analysis_founders_261024_1455.md#g1092. 

Added reference: **28**. [Source](https://archive.org/details/houseofrothschil00ferg); [saved evidence](../data/openrouter100_261101/raw/reference-0563-google_gemini-2.5-flash-lite-v2.json). Counts the expressly catalogued reference section only; may omit separate notes. Does not count the index. This is metadata evidence, not full-text inspection. No reference-page count is inferred from total length.

Ranges: bibliographical references: 599–626.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 17.00 | 14.45 |
| Systems integration | 15.00 | 13.24 |
| Transferable strategic utility | 11.00 | 11.00 |
| Mechanistic and causal depth | 9.00 | 9.00 |
| Information density | 5.00 | 2.50 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 5.00 | 5.00 |
| Expert authority | 5.00 | 5.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 2.00 | 2.00 |

T11 0.00; T12 -10.00; H13 -7.12; P14 -2.80; O15 0.00; REL 2.00; RD 0.86.

R&D inputs: reference pages 28 (Source:https://archive.org/details/houseofrothschil00ferg); total pages 648 (ISBN:0670857688). 28 / 648 = 4.32%; R&D 0.86. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **56.27 → 57.13**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="shelf-a80c21fa3460"></a>

## Donald Michie — Donald Michie; edited by Ashwin Srinivasan

Sources: 259. Prior review: analysis/analysis_metadata1000_261025_1546.md#shelf-a80c21fa3460. 

Added amazon: **2**. [Source](https://www.amazon.co.uk/dp/0199573042); [saved evidence](../data/openrouter100_261101/raw/amazon-0180-google_gemini-2.5-flash-lite-v4.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 13.60 | 10.88 |
| Transferable strategic utility | 11.25 | 11.25 |
| Mechanistic and causal depth | 8.40 | 8.40 |
| Information density | 6.50 | 4.23 |
| Durability | 7.65 | 7.65 |
| Direct domain fit | 6.30 | 6.30 |
| Expert authority | 4.50 | 4.50 |
| Narrative architecture | 1.95 | 1.95 |
| Authorial precision | 1.40 | 1.40 |

T11 0.00; T12 0.00; H13 -0.76; P14 -1.70; O15 -20.00; REL 0.00; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 321 (GoogleBooks:G3M-AQAAIAAJ). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **66.90 → 46.90**; Poor fit. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="n29877c1adf"></a>

## The Equation That Couldn't Be Solved — Mario Livio

Sources: 139, 275, 291. Prior review: analysis/analysis_bretvictor_261025_2011.md#n29877c1adf. 

Added amazon: **122**. [Source](https://www.amazon.co.uk/dp/0743258215); [saved evidence](../data/openrouter100_261101/raw/amazon-0199-google_gemini-2.5-flash-lite-v4.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 11.00 | 7.12 |
| Transferable strategic utility | 6.00 | 6.00 |
| Mechanistic and causal depth | 8.00 | 8.00 |
| Information density | 7.00 | 4.90 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 7.00 | 7.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -2.10; O15 -5.00; REL 2.83; RD 2.39.

R&D inputs: reference pages 44 (GoogleBooks:_Ol31GmIAZgC); total pages 368 (ISBN:9780743274623). 44 / 368 = 11.96%; R&D 2.39. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **66.44 → 61.44**; Low priority. Content confidence retained: moderate. Content assessments were not rerated in this metadata update.

<a id="g0598"></a>

## Happy Accidents — Morton A. Meyers

Sources: 118, 258, 290, 292, 303. Prior review: analysis/analysis_subcritical_261025_2011.md#g0598. 

Added amazon: **175**. [Source](https://www.amazon.co.uk/dp/1611451620); [saved evidence](../data/openrouter100_261101/raw/amazon-0209-google_gemini-2.5-flash-lite-v4.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 13.00 | 9.94 |
| Transferable strategic utility | 12.00 | 12.00 |
| Mechanistic and causal depth | 9.00 | 9.00 |
| Information density | 8.00 | 6.40 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 5.00 | 5.00 |
| Expert authority | 5.00 | 5.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 -10.00; T12 0.00; H13 0.00; P14 -1.90; O15 -5.00; REL 4.00; RD 0.29.

R&D inputs: reference pages 6 (GoogleBooks:_zRyD6IRQnkC); total pages 408 (OL8612226M). 6 / 408 = 1.47%; R&D 0.29. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **66.04 → 61.04**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="progress-0420"></a>

## Jony Ive — Leander Kahney

Sources: 232, 261. Prior review: analysis/analysis_founders_261024_1455.md#progress-0420. 

Added amazon: **1227**. [Source](https://www.amazon.co.uk/dp/0670923249); [saved evidence](../data/openrouter100_261101/raw/amazon-0212-google_gemini-2.5-flash-lite-v4.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 11.00 | 7.12 |
| Transferable strategic utility | 9.00 | 9.00 |
| Mechanistic and causal depth | 8.00 | 8.00 |
| Information density | 7.50 | 5.63 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 6.00 | 6.00 |
| Expert authority | 3.50 | 3.50 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 -0.52; P14 -1.30; O15 0.00; REL 2.00; RD 1.19.

R&D inputs: reference pages 20 (ISBN:9781591846178); total pages 336 (ISBN:9781591847069). 20 / 336 = 5.95%; R&D 1.19. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **65.91 → 65.91**; Selective. Content confidence retained: low. Content assessments were not rerated in this metadata update.

