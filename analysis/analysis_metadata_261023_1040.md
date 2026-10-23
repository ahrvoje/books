# Metadata review — 23 October 2026

## Scope and result

Three separate lists of 200 recommended books were frozen before this review, ordered by the existing unrounded repository score. Each list contains books missing one field: print page count, Amazon total-rating count, or reference-page count. Their union contains 473 books. The lists were not replaced as newly verified counts changed scores. Link repairs also use previously verified catalog evidence outside those lists.

| Field | Filled within fixed 200 | Still unknown | Other changes |
|---|---:|---:|---|
| Print pages | 194 | 6 | 6 existing edition records corrected |
| Amazon total ratings | 190 | 10 | O15 and totals recalculated only for verified counts |
| Reference pages | 86 | 114 | 6 extra ranges found during page research |
| Amazon product links | — | — | 322 repairs |

No source was added or counted again. Recommendation, veto and exclusion membership, source sets, positive scoring criteria, thematic deductions, historical endpoints and original publication years are unchanged by this metadata pass. Prior analyses remain history. Page counts do not by themselves justify changing information-density assessments.

## Evidence and access method

Existing snapshots and catalog records were checked first. Public library edition records, publisher metadata, contents and catalogued bibliography ranges then supplied missing facts. Direct Amazon requests were serial and paced; the current interval is 60 seconds. A detected access challenge stopped the worker. The recorded cooldown retry used the same URL and marketplace; it did not solve or bypass a challenge. Each accepted Amazon count comes from the explicit “global ratings” aggregate on one matching product, with title, author, marketplace, identifier, date and a saved response. Counts from editions or marketplaces are never added. Written-review counts are not substituted.

Amazon snapshot confidence is high for the recorded aggregate, not for its future value or current stock. Publisher page counts have high confidence unless a conflict is stated. Library, retailer and bounded contents evidence generally has moderate confidence. Missing data stays unknown, not zero. The specified O15=0 fallback remains for unknown counts.

Link repairs distinguish actual observed product URLs and publisher Amazon vendor identifiers from guessed ISBN URLs. A valid ISBN alone does not establish an Amazon product identifier. Cached product evidence can establish identity but is not a fresh availability check. Publisher links were rejected when their identifier belonged to a different book. Marketplace preference is amazon.de, then amazon.com when an appropriate product is verified; an observed other-marketplace product is retained when that is the available evidence.

Print page counts are edition-specific. Catalogued Roman and Arabic pagination is added when both are explicit. Publisher total extents are retained as stated. Loose plates, removable posters, unnumbered scan images and single volumes of a nominated series are not silently added or treated as a whole work. Reference counts use the union of documented inclusive ranges. They exclude indexes and do not estimate inline citation coverage. Where only a named bibliography is bounded, the limitation is explicit. Different editions can have different page and reference totals.

Machine-readable audit: [frozen targets](../data/metadata_261023/targets.json), [changes with before/after evidence](../data/metadata_261023/changes.json), [Amazon attempts](../data/metadata_261023/amazon.json), [library identity check](../data/metadata_261023/identity-audit.json), [saved-product link check](../data/metadata_261023/link-identity-audit.json), [verification](../data/metadata_261023/verification.json).

Validation completed: metadata invariants passed; 18 model tests passed; Chromium checks passed at six viewport widths with no browser errors or network requests. The build contains 4,139 recommended books, with 3,999 print-page records, 2,066 Amazon rating counts and 1,593 reference-page counts.

## Page-count updates

| Book | Pages | Edition / format / year | Confidence | Evidence and qualification |
|---|---:|---|---|---|
| Strategic Computing | 456 | ISBN:9780262529266; Paperback; 2002 | high | [source](https://mitpress.mit.edu/9780262182263/strategic-computing/) — Publisher lists paperback ISBN and 456 pages. Supersedes conflicting library pagination estimates. |
| Sidewinder | 352 | ISBN:9781591149811; Paperback; 2013 | high | [source](https://images.abovethetreeline.com/ea/NAVB/pdfs/TCatalogFull_lowres.pdf) — Naval Institute Press Fall 2015 catalog lists the 2013 paperback, 352 pages and ISBN together. |
| Spacesuit: Fashioning Apollo | 380 | ISBN:9780262015202; Paperback (publisher current listing); 2011 | high | [source](https://mitpress.mit.edu/9780262015202/spacesuit/) — Publisher lists 380 pages. Binding label reflects the current publisher listing. |
| Creating Global Opportunities | 469 | ASIN:1107037816; Hardcover; 2014 | high | [source](https://www.amazon.com.au/dp/1107037816) — Page count, title, author and print-edition details inspected in the same archived product response. |
| The Sum of the People | 368 | ISBN:9781541619340; Hardcover; 2020 | high | [source](https://www.hachettebookgroup.com/titles/andrew-whitby/the-sum-of-the-people/9781541619340/) — Publisher product details: page count, ISBN, date and print format. |
| Across the Airless Wilds | 384 | ASIN:0062986538; Hardcover; 2021 | high | [source](https://www.amazon.com.au/dp/0062986538) — Page count, title, author and print-edition details inspected in the same archived product response. |
| Fancy Bear Goes Phishing | 432 | ISBN:9781250335678; Trade Paperback; 2024 | high | [source](https://academic.macmillan.com/academictrade/9781250335678/fancybeargoesphishing/) — Publisher product details: page count, ISBN, date and print format. |
| Out of the Crystal Maze | 728 | ISBN:9780195053296; Hardback; 1992 | moderate | [source](https://www.foyles.co.uk/book/out-of-the-crystal-maze/lillian-hoddeson/9780195053296) — Foyles edition-specific publisher metadata. A contemporary review records xxiii + 697 numbered pages; retail physical extent is 728, so the total is not the last numbered page. |
| Colossus: The Secrets of Bletchley Park's Codebreaking Computers | 480 | ASIN:0199578141; Paperback; 2010 | high | [source](https://www.amazon.com.au/dp/0199578141) — Page count, title, author and print-edition details inspected in the same archived product response. |
| When the Heavens Went on Sale | 544 | ISBN:9780753557761; Paperback; 2024 | high | [source](https://www.penguin.com.au/books/when-the-heavens-went-on-sale-9780753557761) — Publisher lists pages, format, publication date and ISBN together. |
| The Code | 512 | ISBN:9780399562204; Paperback; 2020 | high | [source](https://www.penguinrandomhouse.com/books/534709/the-code-by-margaret-omara/) — Publisher lists pages, format, publication date and ISBN together. |
| Consider the Fork | 352 | ASIN:0465056970; Paperback; 2013 | high | [source](https://www.amazon.com.au/dp/0465056970) — Page count, title, author and print-edition details inspected in the same archived product response. |
| Fatal Defect | 288 | ASIN:0679740279; Paperback; 1996 | high | [source](https://www.amazon.com.au/dp/0679740279) — Page count, title, author and print-edition details inspected in the same archived product response. |
| Minitel: Welcome to the Internet | 240 | ASIN:0262036223; Hardcover; 2017 | high | [source](https://www.amazon.com.au/dp/0262036223) — Page count, title, author and print-edition details inspected in the same archived product response. |
| Sonic Wind | 432 | ASIN:0871406772; Hardcover; 2015 | high | [source](https://www.amazon.com.au/dp/0871406772) — Page count, title, author and print-edition details inspected in the same archived product response. |
| The Founders | 448 | ISBN:9781501197246; Trade paperback; 2024 | high | [source](https://www.simonandschuster.com/books/The-Founders/Jimmy-Soni/9781501197246) — Publisher's current paperback product gives 448 pages, 2024 and this ISBN. Supersedes prepublication library estimate of 384 pages dated 2021; hardcover pagination differs. |
| A Brief History of Mathematical Thought | 336 | ASIN:0190621761; Hardcover; 2017 | high | [source](https://www.amazon.com.au/dp/0190621761) — Page count, title, author and print-edition details inspected in the same archived product response. |
| How to Make a Spaceship | 448 | ASIN:1594206724; Hardcover; 2016 | high | [source](https://www.amazon.com.au/dp/1594206724) — Page count, title, author and print-edition details inspected in the same archived product response. |
| The Evening Star | 273 | ISBN:9780374150006; Hardcover; 1993 | moderate | [source](https://www.lpi.usra.edu/publications/slidesets/venus/sugg_reading.shtml) — Lunar and Planetary Institute lists Cooper's book, Farrar Straus Giroux, 1993, 273 pages. ISBN and binding corroborated by bookseller records. |
| Invention: The Care and Feeding of Ideas | 186 | ASIN:0262731118; Paperback; 1994 | high | [source](https://www.amazon.com.au/dp/0262731118) — Page count, title, author and print-edition details inspected in the same archived product response. |
| The Digital Hand | 1647 | EditionSet:OL15585180M+OL17187010M+OL17247026M; Complete three-volume print set; 2008 | moderate | [source](https://openlibrary.org/books/OL15585180M) — Complete Cortada series: volume I xvi+494 (2004, ISBN0195165888), II xv+629 (2006, ISBN019516587X), III xv+478 (2008, ISBN0195165861), total 1647. Evidence in library.json and its three archived edition records. Link identifies volume I; total covers all three. Publication year here is set completion, not original-production year. |
| A History of Computing in the Twentieth Century | 678 | ISBN:9780124916500; Print (library record); 1980 | moderate | [source](https://catalogue.nla.gov.au/Record/2678797) — NLA and Weber catalog xix + 659 = 678, corroborated by the contemporary Historia Mathematica review. BnF lists xix + 693 for an edition with indexes under the same ISBN; retained the explicitly identified NLA extent. Edition/index variant remains a limitation. |
| Things That Make Us Smart | 290 | ASIN:0201581299; Hardcover; 1993 | high | [source](https://www.amazon.com.au/dp/0201581299) — Page count, title, author and print-edition details inspected in the same archived product response. |
| The Switch | 271 | ISBN:9781736385807; Paperback; 2021 | moderate | [source](https://www.abebooks.co.uk/9781736385807/Switch-Telegraph-Telephone-Radio-Created-1736385801/plp) — Matching Chris McDonald technology history; retailer explicitly gives English, 271 pages and print ISBN. |
| Flying Without Wings | 248 | ASIN:0947554785; Hardcover; 1999 | high | [source](https://www.amazon.com.au/dp/0947554785) — Page count, title, author and print-edition details inspected in the same archived product response. |
| Angle of Attack | 304 | ASIN:039301892X; Hardcover; 1993 | high | [source](https://www.amazon.com.au/dp/039301892X) — Page count, title, author and print-edition details inspected in the same archived product response. |
| Commodore | 1640 | EditionSet:9780994031013+9780994031020+9780994031037; Complete three-volume hardcover set; 2019 | moderate | [source](https://www.abebooks.com/9780994031013/Commodore-Company-Edge-Bagnall-Brian-0994031017/plp) — Source nominates the trilogy. A Company on the Edge (2016, ISBN 9780994031013): 548 pages; The Amiga Years (2017, ISBN 9780994031020): 548 pages, also verified in the saved Amazon response; The Final Years (2019, ISBN 9780994031037): 544 pages, corroborated by AbeBooks edition details, https://imusic.co/books/9780994031037/brian-bagnall-2019-commodore-the-final-years-hardcover-book and https://www.bol.com/nl/nl/f/commodore/34404998/. Total: 548 + 548 + 544 = 1640. One dealer advertises 520 for the last volume; the explicit edition records support 544. Link identifies volume one; extent covers all three. No individual volume rating count is used for the series. |
| Evolution: The Triumph of an Idea | 384 | /books/OL9240373M; Paperback; 2002 | moderate | [source](https://openlibrary.org/books/OL9240373M) — Catalogued pagination of this edition; may omit preliminary Roman-numbered pages. Identity checked against title and author or previously verified edition identifier. |
| Companion Encyclopedia of the History and Philosophy of the Mathematical Sciences | 1840 | ISBN:9780415862028; Paperback; 2017 | high | [source](https://www.routledge.com/Companion-Encyclopedia-of-the-History-and-Philosophy-of-the-Mathematical-Sciences/Grattan-Guinness/p/book/9780415862028) — Publisher states1840 pages for the complete work. Paperback format corroborated by the Mathematical Association of America; this reprint dated11September2017 by BooksWagon. Replaces the library-derived1806 Arabic-page extent. Separate older catalog2volumes(xiii,1806pages) is not a single-volume page count. |
| The Scientific Method: An Evolution of Thinking from Darwin to Dewey | 384 | ISBN:9780674976191; Hardcover; 2020 | moderate | [source](https://bokulich.org/wp-content/uploads/2021/07/cowlesbybocchibokulich-preprint.pdf) — Scholarly review header explicitly gives 384 pages, cloth and matching ISBN; corroborated by BJHS review and NHBS. Rejected Google 352-page estimate inconsistent with its own index pagination. |
| An Edible History of Humanity | 269 | /books/OL23164901M; Not stated by catalog; 2009 | moderate | [source](https://openlibrary.org/books/OL23164901M) — Catalogued pagination of this edition; may omit preliminary Roman-numbered pages. Identity checked against title and author or previously verified edition identifier. |
| Plutopia | 416 | ASIN:0190233109; Paperback; 2015 | high | [source](https://www.amazon.com.au/dp/0190233109) — Page count, title, author and print-edition details inspected in the same archived product response. |
| A Year in Development | 106 | Archive:year-in-dev; Print book scan; binding not established; 1987 | moderate | [source](https://archive.org/details/year-in-dev) — Archive metadata identifies the 1987 English Data General book. Complete scan pagination runs 1–106; cover/back-cover and unnumbered preliminary scans excluded. This is numbered extent, not 113 image files. OCR page 107 is the back cover and is rejected (zero pagination confidence). Final text inspected. |
| Establishing Quantum Physics in Berlin | 133 | ISBN:9783030631215; Softcover; 2021 | high | [source](https://link.springer.com/book/10.1007/978-3-030-63122-2) — Publisher print publication 28 January 2021; VI preliminary + 127 Arabic-numbered pages = 133. Copyright year is 2020; original publication assessment is unchanged. |
| Establishing Quantum Physics in Munich | 100 | ISBN:9783030620332; Softcover; 2020 | high | [source](https://link.springer.com/book/10.1007/978-3-030-62034-9) — Publisher specifies XIV preliminary + 86 Arabic-numbered pages = 100. |
| Dirac: A Scientific Biography | 400 | ASIN:0521017564; Paperback; 2008 | high | [source](https://www.amazon.com.au/dp/0521017564) — Page count, title, author and print-edition details inspected in the same archived product response. |
| The Essential Drucker | 368 | ASIN:006093574X; Paperback; 2003 | high | [source](https://www.amazon.com.au/dp/006093574X) — Page count, title, author and print-edition details inspected in the same archived product response. |
| The History of Mathematical Proof in Ancient Traditions | 611 | ISBN:9781107012219; Print (library record); 2012 | moderate | [source](https://obnb.uk/p16144707-the-history-of-mathematical-proof-in-ancient-traditions) — National bibliography specifies xv + 596 pages; total catalogued extent 611. Other retail counts can include unnumbered leaves. |
| The Beauty of Numbers in Nature | 224 | ASIN:0262534282; Paperback; 2017 | high | [source](https://www.amazon.com.au/dp/0262534282) — Page count, title, author and print-edition details inspected in the same archived product response. |
| Mathematics: A Very Short Introduction | 160 | ASIN:0192853619; Paperback; 2002 | high | [source](https://www.amazon.com.au/dp/0192853619) — Page count, title, author and print-edition details inspected in the same archived product response. |
| Perfect Software | 200 | ISBN:9780932633699; Softcover; 2008 | high | [source](https://dorsethouse.com/authors/weinberg_gerald.html) — Publisher title entry gives ISBN, 200 pages, format and copyright year together. |
| The Clock of the Long Now | 190 | /books/OL103877M; Not stated by catalog; 1999 | moderate | [source](https://openlibrary.org/books/OL103877M) — Catalogued pagination of this edition; may omit preliminary Roman-numbered pages. Identity checked against title and author or previously verified edition identifier. |
| Sophistication and Simplicity | 576 | ASIN:0986832278; Hardcover; 2013 | high | [source](https://www.amazon.com.au/dp/0986832278) — Page count, title, author and print-edition details inspected in the same archived product response. |
| Taming the Infinite | 384 | ISBN:9781847247681; Paperback; 2009 | moderate | [source](https://openlibrary.org/books/OL25177875M/Taming_the_infinite) — Catalog explicitly gives 384 pages and a 374–376 reference range. Hachette India lists a conflicting 272; retain the catalog edition extent with moderate confidence. |
| iWoz | 336 | ISBN:9780393330434; Paperback; 2007 | high | [source](https://wwnorton.co.uk/books/9780393330434-iwoz-f94ffaea-ad42-4a40-b9b4-dbd566745ff4) — Publisher paperback gives336pages,ISBN and2007. Replaces proposed library hardcover estimate288. |
| American Steel | 288 | /books/OL1862598M; Not stated by catalog; 1991 | moderate | [source](https://openlibrary.org/books/OL1862598M) — Catalogued extent x, 278 p. ;; x=10 preliminary pages plus 278 Arabic-numbered pages = 288. Plates are excluded. Matching title, author and language checked in data/metadata_261023/raw/library-2afd06f2608df5c5.json. |
| Life Is Simple | 384 | /books/OL33944705M; Not stated by catalog; 2021 | moderate | [source](https://openlibrary.org/books/OL33944705M) — Catalogued pagination of this edition; may omit preliminary Roman-numbered pages. Identity checked against title and author or previously verified edition identifier. |
| Backroom Boys | 262 | /books/OL3358062M; Not stated by catalog; 2003 | moderate | [source](https://openlibrary.org/books/OL3358062M) — Catalogued extent xii, 250 p. :; xii=12 preliminary pages plus 250 Arabic-numbered pages = 262. Plates are excluded. Matching title, author and language checked in data/metadata_261023/raw/library-2afd06f2608df5c5.json. |
| Bodies/Machines | 251 | /books/OL3554024M; Not stated by catalog; 2002 | moderate | [source](https://openlibrary.org/books/OL3554024M) — Catalogued pagination of this edition; may omit preliminary Roman-numbered pages. Identity checked against title and author or previously verified edition identifier. |
| Mathematics and the Physical World | 496 | /books/OL7635609M; Paperback; 1981 | moderate | [source](https://openlibrary.org/books/OL7635609M) — Catalogued pagination of this edition; may omit preliminary Roman-numbered pages. Identity checked against title and author or previously verified edition identifier. |
| Don't Be Evil | 368 | ISBN:9781984824004; Paperback; 2021 | high | [source](https://www.penguinrandomhouse.com/books/602099/dont-be-evil-by-rana-foroohar/) — Publisher paperback explicitly gives368pages,ISBN and February2021; avoids stale256-page prepublication estimate. |
| The Light Ages | 400 | /books/OL29494131M; Not stated by catalog; 2020 | moderate | [source](https://openlibrary.org/books/OL29494131M) — Catalogued pagination of this edition; may omit preliminary Roman-numbered pages. Identity checked against title and author or previously verified edition identifier. |
| Globalists | 400 | /books/OL29386599M; Not stated by catalog; 2018 | moderate | [source](https://openlibrary.org/books/OL29386599M) — Catalogued pagination of this edition; may omit preliminary Roman-numbered pages. Identity checked against title and author or previously verified edition identifier. |
| American Gun | 496 | ISBN:9780374103859; Hardcover; 2023 | high | [source](https://academic.macmillan.com/academictrade/9780374103859/americangun/) — Publisher product details; hardcover identity corroborated by publisher's ISBN edition. |
| The Attention Merchants | 432 | /books/OL27406142M; paperback; 2017 | moderate | [source](https://openlibrary.org/books/OL27406142M) — Catalogued pagination of this edition; may omit preliminary Roman-numbered pages. Identity checked against title and author or previously verified edition identifier. |
| The Shaping of Arithmetic after C. F. Gauss's Disquisitiones Arithmeticae | 590 | ISBN:9783642058028; Softcover; 2010 | high | [source](https://link.springer.com/book/10.1007/978-3-540-34720-0) — Publisher gives XII + 578 pages and softcover ISBN, February 2010. |
| They Made America | 692 | /books/OL9343868M; Paperback; 2006 | moderate | [source](https://openlibrary.org/books/OL9343868M) — Catalogued pagination of this edition; may omit preliminary Roman-numbered pages. Identity checked against title and author or previously verified edition identifier. |
| e: The Story of a Number | 242 | /books/OL7757433M; Paperback; 1994 | moderate | [source](https://openlibrary.org/books/OL7757433M) — Catalogued pagination of this edition; may omit preliminary Roman-numbered pages. Identity checked against title and author or previously verified edition identifier. |
| The Faber Book of Science | 555 | /books/OL805116M; Not stated by catalog; 1995 | moderate | [source](https://openlibrary.org/books/OL805116M) — Catalogued extent xxvii, 528 p. ;; xxvii=27 preliminary pages plus 528 Arabic-numbered pages = 555. Plates are excluded. Matching title, author and language checked in data/metadata_261023/raw/library-fb762916f1833a80.json. |
| Grammatical Man | 319 | /books/OL3483814M; Not stated by catalog; 1982 | moderate | [source](https://openlibrary.org/books/OL3483814M) — Catalogued pagination of this edition; may omit preliminary Roman-numbered pages. Identity checked against title and author or previously verified edition identifier. |
| Pockets | 320 | ISBN:9781643751542; Hardcover; 2023 | high | [source](https://www.hachettebookgroup.com/titles/hannah-carlson/pockets/9781643751542/) — Publisher physical extent; library records vii + 310 numbered pages. |
| Latitude | 280 | /books/OL34967063M; Not stated by catalog; 2021 | moderate | [source](https://openlibrary.org/books/OL34967063M) — Catalogued pagination of this edition; may omit preliminary Roman-numbered pages. Identity checked against title and author or previously verified edition identifier. |
| Wireless Nation | 380 | /books/OL7899593M; Paperback; 2002 | moderate | [source](https://openlibrary.org/books/OL7899593M) — Catalogued pagination of this edition; may omit preliminary Roman-numbered pages. Identity checked against title and author or previously verified edition identifier. |
| Bitch | 352 | /books/OL29545249M; Not stated by catalog; 2021 | moderate | [source](https://openlibrary.org/books/OL29545249M) — Catalogued pagination of this edition; may omit preliminary Roman-numbered pages. Identity checked against title and author or previously verified edition identifier. |
| British Intelligence in the Second World War | 3946 | EditionSet:HMSO-PriorBooks212531; Complete five-volume hardcover set in six physical books; 1990 | moderate | [source](https://www.abebooks.com/first-edition/British-Intelligence-Second-World-Complete-Vol/32461660257/bd) — Complete first-edition HMSO set, 1979–1990. Dealer physical collation: xiii+601; xvi+850; xvi+693; xvi+1038; xii+408; xii+271 =3946. Exact identified set; not the628-page abridgment. Other catalog records differ by one preliminary leaf. Set completion year does not replace original production year. |
| Directions in Physics | 104 | /books/OL4555084M; Not stated by catalog; 1978 | moderate | [source](https://openlibrary.org/books/OL4555084M) — Catalogued extent ix, 95 p. :; ix=9 preliminary pages plus 95 Arabic-numbered pages = 104. Plates are excluded. Matching title, author and language checked in data/metadata_261023/raw/library-fb762916f1833a80.json. |
| Trust | 480 | /books/OL7721372M; Paperback; 1996 | moderate | [source](https://openlibrary.org/books/OL7721372M) — Catalogued pagination of this edition; may omit preliminary Roman-numbered pages. Identity checked against title and author or previously verified edition identifier. |
| The Age of Uncertainty | 368 | ISBN:9781914484421; Hardback; 2022 | high | [source](https://scribepublications.co.uk/books/the-age-of-uncertainty) — English translation by David Shaw; publisher details. |
| The Mechanization of the World Picture | 543 | /books/OL16913945M; Not stated by catalog; 1969 | moderate | [source](https://openlibrary.org/books/OL16913945M) — Catalogued extent vi, 537 p. :; vi=6 preliminary pages plus 537 Arabic-numbered pages = 543. Plates are excluded. Matching title, author and language checked in data/metadata_261023/raw/library-c12fcb9afc04b19c.json. |
| The World of Mathematics | 2576 | /books/OL7639195M; Paperback; 2003 | moderate | [source](https://openlibrary.org/books/OL7639195M) — Catalogued pagination of this edition; may omit preliminary Roman-numbered pages. Identity checked against title and author or previously verified edition identifier. |
| The Secret Lives of Color | 320 | ISBN:9780143131144; Hardcover; 2017 | high | [source](https://www.penguinrandomhouse.com/books/552503/the-secret-lives-of-color-by-kassia-st-clair/) — Publisher details for English edition. |
| An Entirely Synthetic Fish | 257 | /books/OL23735627M; Not stated by catalog; 2010 | moderate | [source](https://openlibrary.org/books/OL23735627M) — Catalogued pagination of this edition; may omit preliminary Roman-numbered pages. Identity checked against title and author or previously verified edition identifier. |
| God's Clockmaker | 441 | /books/OL8976442M; Paperback; 2007 | moderate | [source](https://openlibrary.org/books/OL8976442M) — Catalogued pagination of this edition; may omit preliminary Roman-numbered pages. Identity checked against title and author or previously verified edition identifier. |
| Valley of Genius | 510 | /books/OL26961186M; Not stated by catalog; 2018 | moderate | [source](https://openlibrary.org/books/OL26961186M) — Catalogued extent xvi, 494 pages, 16 unnumbered pages of plates; xvi=16 preliminary pages plus 494 Arabic-numbered pages = 510. Plates are excluded. Matching title, author and language checked in data/metadata_261023/raw/library-df5a60eee8d9fb82.json. |
| Le Ton beau de Marot | 656 | /books/OL658780M; Not stated by catalog; 1997 | moderate | [source](https://openlibrary.org/books/OL658780M) — Catalogued extent xxiv, 632 p. :; xxiv=24 preliminary pages plus 632 Arabic-numbered pages = 656. Plates are excluded. Matching title, author and language checked in data/metadata_261023/raw/library-df5a60eee8d9fb82.json. |
| Out of the Shadows | 316 | ISBN:9781704267821; Paperback; 2019 | moderate | [source](https://www.harvard.com/book/9781704267821) — English edition, 316 pages, corroborated by Bookshop print record; replaces stale 262-page library estimate. |
| Revelations in Air | 320 | ISBN:9780143135999; Hardcover; 2021 | high | [source](https://www.penguin.com.au/books/revelations-in-air-9780143135999) — Publisher print-edition details give 320 pages, ISBN and 2021. |
| The CEO: Building a $400 Million Company from the Ground Up | 303 | ISBN:9780393029635; Print (library record); 1991 | moderate | [source](https://ci.nii.ac.jp/ncid/BB11416908) — CiNii: author pair, Norton 1991, 303 p., English, ISBN 0393029638; catalogued pagination. |
| Gamers at Work | 369 | ISBN:9781430233510; Softcover; 2012 | high | [source](https://link.springer.com/book/10.1007/978-1-4302-3352-7) — Publisher: XIII preliminary + 356 pages = 369; print ISBN and publication date explicit. |
| Meet Me by the Fountain | 328 | ISBN:9781639732050; Paperback; 2023 | high | [source](https://www.bloomsbury.com/us/meet-me-by-the-fountain-9781639732050/) — Publisher current paperback specifies 328 pages and December 2023; not the earlier hardcover extent. |
| Super Founders | 320 | ISBN:9781541768420; Hardcover; 2021 | high | [source](https://www.hachettebookgroup.com/titles/ali-tamaseb/super-founders/9781541768420/) — Publisher identifies hardcover, ISBN, 2021 and 320 pages together. |
| Close to the Machine | 189 | /books/OL680682M; Not stated by catalog; 1997 | moderate | [source](https://openlibrary.org/books/OL680682M) — Catalogued pagination of this edition; may omit preliminary Roman-numbered pages. Identity checked against title and author or previously verified edition identifier. |
| Looking for a Ship | 241 | /books/OL1851738M; Not stated by catalog; 1990 | moderate | [source](https://openlibrary.org/books/OL1851738M) — Catalogued pagination of this edition; may omit preliminary Roman-numbered pages. Identity checked against title and author or previously verified edition identifier. |
| Elements of the History of Mathematics | 301 | ISBN:9783540647676; Paperback; 1998 | moderate | [source](https://openlibrary.org/books/OL9062680M/Elements_of_the_History_of_Mathematics) — Explicit English print edition, not the French original or the Elements of Mathematics series. |
| The Roald Amundsen Diaries | 410 | ISBN:9788282350105; Softcover; 2010 | moderate | [source](https://www.abebooks.com/first-edition/Roald-Amundsen-Diaries-South-Pole-Expedition/30517330188/bd) — Bookseller's physical-copy description gives 410 pages, 2010, softcover and this English-edition ISBN. Not Norwegian ISBN 9788282350099. |
| Cows in the Maze | 320 | ISBN:9780199562077; Paperback; 2010 | moderate | [source](https://books.google.com/books?id=XZNxtJi4B2cC) — Publisher-supplied Google Books metadata and London Mathematical Society review agree on 320. Library catalog xi + 306 excludes unnumbered leaves; other review metadata conflicts. |
| Mathematics: The Music of Reason | 297 | ISBN:9783540533467; Print (library record); 1992 | moderate | [source](https://katalog.bibliothek.kit.edu/bib/90559) — English translation; catalog X + 287 pages = 297. Binding not separately established. |
| A Place of My Own | 332 | /books/OL996441M; Not stated by catalog; 1997 | moderate | [source](https://openlibrary.org/books/OL996441M) — Catalogued extent xii, 320 p. :; xii=12 preliminary pages plus 320 Arabic-numbered pages = 332. Plates are excluded. Matching title, author and language checked in data/metadata_261023/raw/library-68c255d0e6d250c3.json. |
| The Best Software Writing I | 328 | /books/OL8848759M; Paperback; 2005 | moderate | [source](https://openlibrary.org/books/OL8848759M) — Catalogued pagination of this edition; may omit preliminary Roman-numbered pages. Identity checked against title and author or previously verified edition identifier. |
| Time's Echo | 400 | /books/OL52629537M; Not stated by catalog; 2024 | moderate | [source](https://openlibrary.org/books/OL52629537M) — Catalogued pagination of this edition; may omit preliminary Roman-numbered pages. Identity checked against title and author or previously verified edition identifier. |
| The Rediscovery of America | 616 | ISBN:9780300276671; Paperback; 2024 | high | [source](https://yalebooks.yale.edu/book/9780300276671/the-rediscovery-of-america/) — Publisher page count and print edition; not the young-reader adaptation. |
| Empire of Ice and Stone | 432 | ISBN:9781250871633; Paperback; 2023 | moderate | [source](https://www.bookreporter.com/reviews/empire-of-ice-and-stone-the-disastrous-and-heroic-voyage-of-the-karluk) — Review publication record explicitly identifies December 2023 paperback, ISBN and 432 pages; publisher confirms title and print ISBN. |
| The Art of Profitability | 206 | /books/OL7536992M; Not stated by catalog; 2002 | moderate | [source](https://openlibrary.org/books/OL7536992M) — Catalogued pagination of this edition; may omit preliminary Roman-numbered pages. Identity checked against title and author or previously verified edition identifier. |
| In the Beginning Was the Command Line | 160 | /books/OL7435585M; Not stated by catalog; 1999 | moderate | [source](https://openlibrary.org/books/OL7435585M) — Catalogued pagination of this edition; may omit preliminary Roman-numbered pages. Identity checked against title and author or previously verified edition identifier. |
| The History of the Priority Dispute between Newton and Leibniz | 576 | ISBN:9783319725611; Hardcover; 2018 | moderate | [source](https://ead.nb.admin.ch/web/sb-pdf/2023/sb202325.pdf) — Swiss national bibliography specifies XXVII + 549 = 576; MAA review confirms hardcover ISBN and 549 numbered pages. |
| Farthest North | 960 | Library:NZ44167763; Complete two-volume print set; 1898 | moderate | [source](https://natlib.govt.nz/records/44167763) — George Newnes English set: volume 1 xv + 1 + 480; volume 2 viii + 456 = 960 numbered and specified preliminary pages. Loose plates and part-issue advertisements not added. Replaces the proposed 544-page abridged Modern Library edition. |
| The Development of Quantum Theory | 66 | /books/OL4576070M; Not stated by catalog; 1971 | moderate | [source](https://openlibrary.org/books/OL4576070M) — Catalogued pagination of this edition; may omit preliminary Roman-numbered pages. Identity checked against title and author or previously verified edition identifier. |
| What Is This Thing Called Science? | 179 | /books/OL7774395M; Paperback; 1985 | moderate | [source](https://openlibrary.org/books/OL7774395M) — Catalogued pagination of this edition; may omit preliminary Roman-numbered pages. Identity checked against title and author or previously verified edition identifier. |
| Cork Dork | 352 | ISBN:9780143128090; Paperback; 2017 | high | [source](https://www.penguinrandomhouse.com/books/318271/cork-dork-by-bianca-bosker/) — Publisher print edition details. Standard paperback chosen instead of the 571-page large-print edition. |
| Revolutionary Pasts | 294 | /books/OL29464491M; Not stated by catalog; 2020 | moderate | [source](https://openlibrary.org/books/OL29464491M) — Catalogued pagination of this edition; may omit preliminary Roman-numbered pages. Identity checked against title and author or previously verified edition identifier. |
| The Universe: From Flat Earth to Quasar | 408 | ISBN:9780140212129; Paperback; 1983 | moderate | [source](https://obnb.uk/p11182123-the-universe-from-flat-earth-to-quasar) — OBNB identifies English Penguin third edition1983, title From Flat Earth to Quasar, 408pages plus16pages of plates. Records bibliography on391; plates excluded. ISBN0140212124 also occurs on a shorter1971 edition, so count is tied to this dated edition. Replaces the proposed1980 American edition with a different subtitle. |
| The Worldly Philosophers | 365 | /books/OL7722497M; Paperback; 1999 | moderate | [source](https://openlibrary.org/books/OL7722497M) — Catalogued pagination of this edition; may omit preliminary Roman-numbered pages. Identity checked against title and author or previously verified edition identifier. |
| Worldviews | 326 | /books/OL8405318M; Paperback; 2004 | moderate | [source](https://openlibrary.org/books/OL8405318M) — Catalogued pagination of this edition; may omit preliminary Roman-numbered pages. Identity checked against title and author or previously verified edition identifier. |
| Putting It Together | 272 | /books/OL30037703M; Not stated by catalog; 2021 | moderate | [source](https://openlibrary.org/books/OL30037703M) — Catalogued pagination of this edition; may omit preliminary Roman-numbered pages. Identity checked against title and author or previously verified edition identifier. |
| If This Is a Man | 205 | /books/OL61768427M; Not stated by catalog; 1960 | moderate | [source](https://openlibrary.org/books/OL61768427M) — Catalogued pagination of this edition; may omit preliminary Roman-numbered pages. Identity checked against title and author or previously verified edition identifier. |
| From the Closed World to the Infinite Universe | 328 | ISBN:9780801803475; Paperback; 1968 | high | [source](https://www.press.jhu.edu/books/title/1632/closed-world-infinite-universe) — Publisher specifies 328 pages and this print ISBN; catalogued 313 is the last Arabic-numbered page, not total physical extent. |
| Rise of the Red Engineers | 368 | /books/OL22657856M; Not stated by catalog; 2009 | moderate | [source](https://openlibrary.org/books/OL22657856M) — Catalogued pagination of this edition; may omit preliminary Roman-numbered pages. Identity checked against title and author or previously verified edition identifier. |
| Black Earth | 428 | /books/OL26889655M; Not stated by catalog; 2015 | moderate | [source](https://openlibrary.org/books/OL26889655M) — Catalogued pagination of this edition; may omit preliminary Roman-numbered pages. Identity checked against title and author or previously verified edition identifier. |
| Many Things Under a Rock | 320 | ISBN:9781324076292; Paperback; 2024 | high | [source](https://wwnorton.co.uk/books/9781324076292-many-things-under-a-rock-46643e76-0c96-4fb4-805b-3e7441e6b1d8) — Publisher confirms English paperback18June2024, ISBN9781324076292 and320pages. Replaces a library record whose number_of_pages320 conflicts with pagination288; the selected paperback avoids that hardcover-record conflict. |
| Great Moments in Mathematics | 559 | EditionSet:OL4124131M+OL3795975M; Complete two-volume hardcover set; 1981 | moderate | [source](https://openlibrary.org/books/OL4124131M) — Before1650: xiv+270=284,1980,ISBN0883853051,OL4124131M. After1650: xii+263=275,1981,ISBN0883853078,OL3795975M. Both English first print editions; combined559. Library edition records saved in series-moments.json; MAA contemporary catalog corroborates second volume. Link identifies first volume; count includes both. |
| Mrs P's Journey | 345 | /books/OL3533021M; Not stated by catalog; 2001 | moderate | [source](https://openlibrary.org/books/OL3533021M) — Catalogued extent xi, 334 p. :; xi=11 preliminary pages plus 334 Arabic-numbered pages = 345. Plates are excluded. Matching title, author and language checked in data/metadata_261023/raw/library-d59564852b72eb96.json. |
| The Math Book | 527 | /books/OL22652981M; Not stated by catalog; 2009 | moderate | [source](https://openlibrary.org/books/OL22652981M) — Catalogued pagination of this edition; may omit preliminary Roman-numbered pages. Identity checked against title and author or previously verified edition identifier. |
| God and Golem, Inc. | 108 | /books/OL53089220M; Not stated by catalog; 1966 | moderate | [source](https://openlibrary.org/books/OL53089220M) — Catalogued extent ix, 99 pages; ix=9 preliminary pages plus 99 Arabic-numbered pages = 108. Plates are excluded. Matching title, author and language checked in data/metadata_261023/raw/library-73b42e98b75f7b09.json. |
| Egg | 240 | ISBN:9780393531503; Hardcover; 2023 | moderate | [source](https://wwnorton.co.uk/books/9780393531503-egg) — Current publisher product gives 240 pages; supersedes its Winter 2023 advance catalog estimate of 288 under the same ISBN. Conflict retained here. |
| The Mind's I | 501 | /books/OL7816433M; Paperback; 1982 | moderate | [source](https://openlibrary.org/books/OL7816433M) — Catalogued pagination of this edition; may omit preliminary Roman-numbered pages. Identity checked against title and author or previously verified edition identifier. |
| Young Men and Fire | 352 | ISBN:9780226450353; Paperback; 2017 | high | [source](https://www.chicagodistributioncenter.org/dam/jcr%3A279b16f7-1eeb-460d-8bd9-1a28f566b8c3/spring2017_UCP_InternationalEdition.pdf) — Publisher Spring 2017 catalog gives paperback ISBN and 352 pages together. |
| The Second World War | 4554 | EditionSet:Treloar147449; Complete six-volume hardcover set; 1954 | moderate | [source](https://www.treloars.com/pages/books/147449/winston-s-churchill/the-second-world-war-volume-i-the-gathering-storm-volume-ii-their-finest-hour-volume-iii-the-grand) — Dealer's physical collation: I xvi+640; II xviii+684; III xviii+818; IV xviii+917; V xviii+673; VI xviii+716 = 4554. First five volumes Australian editions, final UK edition, 1948–1954. Complete named set; loose maps excluded. Not the 615-page abridgment. |
| Get the Picture | 384 | ISBN:9780525562221; Paperback; 2025 | high | [source](https://www.penguinrandomhouse.com/books/602064/get-the-picture-by-bianca-bosker/9780525562221/) — Publisher details for print edition. |
| Mathematics and the Imagination | 394 | /books/OL2390404M; Not stated by catalog; 1989 | moderate | [source](https://openlibrary.org/books/OL2390404M) — Catalogued extent xiv, 380 p. :; xiv=14 preliminary pages plus 380 Arabic-numbered pages = 394. Plates are excluded. Matching title, author and language checked in data/metadata_261023/raw/library-14a09792ef475da8.json. |
| Doing Harm | 390 | /books/OL26952303M; Not stated by catalog; 2018 | moderate | [source](https://openlibrary.org/books/OL26952303M) — Catalogued pagination of this edition; may omit preliminary Roman-numbered pages. Identity checked against title and author or previously verified edition identifier. |
| South | 396 | /books/OL370575M; Not stated by catalog; 1998 | moderate | [source](https://openlibrary.org/books/OL370575M) — Catalogued extent xxi, 375 p. :; xxi=21 preliminary pages plus 375 Arabic-numbered pages = 396. Plates are excluded. Matching title, author and language checked in data/metadata_261023/raw/library-182e489bead08767.json. |
| The Kingdom of Prep | 368 | ISBN:9780063042650; Trade paperback; 2024 | moderate | [source](https://www.mcnallyrobinson.com/9780063042650/maggie-bullock/the-kingdom-of-prep) — Bookseller metadata identifies print edition and 368 pages. |
| Deschooling Society | 116 | /books/OL7799042M; Paperback; 1999 | moderate | [source](https://openlibrary.org/books/OL7799042M) — Catalogued pagination of this edition; may omit preliminary Roman-numbered pages. Identity checked against title and author or previously verified edition identifier. |
| Implementation | 307 | /books/OL3175595M; Not stated by catalog; 1984 | moderate | [source](https://openlibrary.org/books/OL3175595M) — Catalogued extent xxvi, 281 p. :; xxvi=26 preliminary pages plus 281 Arabic-numbered pages = 307. Plates are excluded. Matching title, author and language checked in data/metadata_261023/raw/library-182e489bead08767.json. |
| Littlewood's Miscellany | 200 | /books/OL2716488M; Not stated by catalog; 1986 | moderate | [source](https://openlibrary.org/books/OL2716488M) — Catalogued pagination of this edition; may omit preliminary Roman-numbered pages. Identity checked against title and author or previously verified edition identifier. |
| Eyewitness to History | 744 | /books/OL2526512M; Not stated by catalog; 1987 | moderate | [source](https://openlibrary.org/books/OL2526512M) — Catalogued extent xxxviii, 706 p. ;; xxxviii=38 preliminary pages plus 706 Arabic-numbered pages = 744. Plates are excluded. Matching title, author and language checked in data/metadata_261023/raw/library-cbdd8551de55bd78.json. |
| Memorial Mania | 458 | /books/OL23962330M; Not stated by catalog; 2010 | moderate | [source](https://openlibrary.org/books/OL23962330M) — Catalogued pagination of this edition; may omit preliminary Roman-numbered pages. Identity checked against title and author or previously verified edition identifier. |
| The Beckoning Silence | 315 | /books/OL3708642M; Not stated by catalog; 2003 | moderate | [source](https://openlibrary.org/books/OL3708642M) — Catalogued pagination of this edition; may omit preliminary Roman-numbered pages. Identity checked against title and author or previously verified edition identifier. |
| The Women's House of Detention | 384 | /books/OL39958598M; Not stated by catalog; 2023 | moderate | [source](https://openlibrary.org/books/OL39958598M) — Catalogued pagination of this edition; may omit preliminary Roman-numbered pages. Identity checked against title and author or previously verified edition identifier. |
| The Gathering Storm | 800 | Edition:Houghton-Mifflin-1948; Hardcover; 1948 | high | [source](https://academic.oup.com/ahr/article-abstract/54/1/102/54797) — Contemporary review records xvi + 784 pages = 800. This is volume 1 only, the work named in this collection, not the complete six-volume Second World War. |
| Yes! 50 Scientifically Proven Ways to Be Persuasive | 270 | ISBN:9781416570967; Hardcover; 2008 | moderate | [source](https://discover.knoxcountylibrary.org/Record/322762) — Library physical extent xii + 258 pages = 270. This is the 50-ways edition, not an expanded revision. |
| Gang Leader for a Day | 320 | /books/OL12433645M; Hardcover; 2008 | moderate | [source](https://openlibrary.org/books/OL12433645M) — Catalogued pagination of this edition; may omit preliminary Roman-numbered pages. Identity checked against title and author or previously verified edition identifier. |
| The Strange Story of the Quantum | 285 | /books/OL6267841M; Not stated by catalog; 1959 | moderate | [source](https://openlibrary.org/books/OL6267841M) — Catalogued pagination of this edition; may omit preliminary Roman-numbered pages. Identity checked against title and author or previously verified edition identifier. |
| A History of Chinese Mathematics | 509 | ISBN:3540547495; Print (binding not stated); 1997 | moderate | [source](https://wellcomecollection.org/works/fp9hsm4y) — Wellcome physical copy: xxiv + 485 = 509. Record identifies English translation, 1997, and ISBNs3540547495/0387547495. Other printings have differing preliminary pagination. |
| Shooting Down the Stealth Fighter | 384 | ISBN:9781526780423; Hardcover; 2022 | high | [source](https://www.casematepublishers.com/9781526780430/shooting-down-the-stealth-fighter/) — Publisher lists hardcover ISBN 9781526780423 alongside ebook 9781526780430; 384 pages. Page URL defaults to ebook but lists both formats explicitly. |
| Our Marvelous Native Tongue | 350 | /books/OL3505272M; Not stated by catalog; 1983 | moderate | [source](https://openlibrary.org/books/OL3505272M) — Catalogued extent xi, 339 p. ;; xi=11 preliminary pages plus 339 Arabic-numbered pages = 350. Plates are excluded. Matching title, author and language checked in data/metadata_261023/raw/library-b8e2d2f9618444b4.json. |
| The Value of Science | 147 | Library:FreeLibrary24692; Print (library record); 1958 | moderate | [source](https://catalog.freelibrary.org/Record/24692) — Unabridged English translation by Halsted, Dover. The 608-page Modern Library edition combines three different books and was rejected for this single-work page count. |
| Mathematics: An Illustrated History of Numbers | 144 | ISBN:9781627951968; Hardcover; 2024 | high | [source](https://www.shelterharborpress.com/mathematics/) — Publisher current revised edition gives hardcover ISBN and 144 pages; removable timeline not added. Edition year corroborated by edition listing. Avoids inconsistent 144/150/168 records under older ISBN. |
| Annapurna | 248 | /books/OL58559796M; Not stated by catalog; 1952 | moderate | [source](https://openlibrary.org/books/OL58559796M) — Catalogued pagination of this edition; may omit preliminary Roman-numbered pages. Identity checked against title and author or previously verified edition identifier. |
| Misbelief | 352 | ISBN:9781785120800; Paperback; 2024 | high | [source](https://www.bonnierbooks.co.uk/books/nine-eight-books/misbelief/) — Publisher details for this UK paperback; US edition has different pagination. |
| Infinity: Beyond the Beyond the Beyond | 359 | /books/OL12367120M; Paperback; 2008 | moderate | [source](https://openlibrary.org/books/OL12367120M) — Catalogued pagination of this edition; may omit preliminary Roman-numbered pages. Identity checked against title and author or previously verified edition identifier. |
| The Cheese and the Worms | 224 | ISBN:9781421454634; Paperback; 2026 | high | [source](https://press.jhu.edu/books/title/53948/cheese-and-worms) — Publisher fiftieth-anniversary edition, including new material; publication 28 April 2026. |
| Houdini!!! | 544 | /books/OL9239584M; Paperback; 1997 | moderate | [source](https://openlibrary.org/books/OL9239584M) — Catalogued pagination of this edition; may omit preliminary Roman-numbered pages. Identity checked against title and author or previously verified edition identifier. |
| An Officer, Not a Gentleman | 314 | ISBN:9798649297820; Paperback; 2020 | moderate | [source](https://www.abebooks.com/9798649297820/Officer-Gentleman-inspirational-journey-pioneering/plp) — Edition-specific bookseller record gives 314 pages, English, author, print ISBN and 2020. Other editions have different extents. |
| Oulipo: A Primer of Potential Literature | 221 | ISBN:9781564781871; Paperback; 2015 | moderate | [source](https://www.goodreads.com/work/editions/236891-oulipo-a-primer-of-potential-literature?expanded=true) — Matched Dalkey Archive print edition, English; count includes preliminary matter unlike some older library listings. |
| The Development of Mathematics | 648 | /books/OL1720752M; Not stated by catalog; 1992 | moderate | [source](https://openlibrary.org/books/OL1720752M) — Catalogued extent xi, 637 p. ;; xi=11 preliminary pages plus 637 Arabic-numbered pages = 648. Plates are excluded. Matching title, author and language checked in data/metadata_261023/raw/library-d0b278c40b02c2dc.json. |
| The Tyranny of Science | 180 | ISBN:9780745651903; Paperback; 2011 | moderate | [source](https://www.wiley.com/en-us/the-tyranny-of-science-p-9780745651903) — Publisher lists 180 pages. Library and reviews give xii + 153 = 165 numbered pages; retain publisher physical extent with this explicit discrepancy. |
| Ludwig Wittgenstein: The Duty of Genius | 654 | /books/OL9274771M; Paperback; 1991 | moderate | [source](https://openlibrary.org/books/OL9274771M) — Catalogued pagination of this edition; may omit preliminary Roman-numbered pages. Identity checked against title and author or previously verified edition identifier. |
| Working | 640 | /books/OL8666550M; Paperback; 1997 | moderate | [source](https://openlibrary.org/books/OL8666550M) — Catalogued pagination of this edition; may omit preliminary Roman-numbered pages. Identity checked against title and author or previously verified edition identifier. |
| Travels in Siberia | 560 | /books/OL28749709M; Not stated by catalog; 2011 | moderate | [source](https://openlibrary.org/books/OL28749709M) — Catalogued pagination of this edition; may omit preliminary Roman-numbered pages. Identity checked against title and author or previously verified edition identifier. |
| The Sugar Barons | 463 | /books/OL25028144M; Not stated by catalog; 2011 | moderate | [source](https://openlibrary.org/books/OL25028144M) — Catalogued extent xvii, 446 p. :; xvii=17 preliminary pages plus 446 Arabic-numbered pages = 463. Plates are excluded. Matching title, author and language checked in data/metadata_261023/raw/library-7b1e2db5a815c792.json. |
| A Brief History of Thought | 297 | /books/OL27133657M; Not stated by catalog; 2011 | moderate | [source](https://openlibrary.org/books/OL27133657M) — Catalogued extent xv, 282 p.; xv=15 preliminary pages plus 282 Arabic-numbered pages = 297. Plates are excluded. Matching title, author and language checked in data/metadata_261023/raw/library-7b1e2db5a815c792.json. |
| 1913: The Year Before the Storm | 268 | /books/OL27154957M; Not stated by catalog; 2013 | moderate | [source](https://openlibrary.org/books/OL27154957M) — Catalogued pagination of this edition; may omit preliminary Roman-numbered pages. Identity checked against title and author or previously verified edition identifier. |
| Slab City: Dispatches from the Last Free Place | 192 | /books/OL27372173M; hardcover; 2018 | moderate | [source](https://openlibrary.org/books/OL27372173M) — Catalogued pagination of this edition; may omit preliminary Roman-numbered pages. Identity checked against title and author or previously verified edition identifier. |
| Sailing the Wine-Dark Sea | 318 | /books/OL3686766M; Not stated by catalog; 2003 | moderate | [source](https://openlibrary.org/books/OL3686766M) — Catalogued extent xiv, 304 p., [32] p. of plates :; xiv=14 preliminary pages plus 304 Arabic-numbered pages = 318. Plates are excluded. Matching title, author and language checked in data/metadata_261023/raw/library-ec0acd9b7e96f2b3.json. |
| Dr. Posin's Giants | 348 | /books/OL5829028M; Not stated by catalog; 1961 | moderate | [source](https://openlibrary.org/books/OL5829028M) — Catalogued pagination of this edition; may omit preliminary Roman-numbered pages. Identity checked against title and author or previously verified edition identifier. |
| Steaming to Bamboola | 236 | /books/OL2726718M; Not stated by catalog; 1987 | moderate | [source](https://openlibrary.org/books/OL2726718M) — Catalogued extent xiv, 222 p. ;; xiv=14 preliminary pages plus 222 Arabic-numbered pages = 236. Plates are excluded. Matching title, author and language checked in data/metadata_261023/raw/library-ec0acd9b7e96f2b3.json. |
| Killer on the Road | 252 | /books/OL25054372M; Not stated by catalog; 2012 | moderate | [source](https://openlibrary.org/books/OL25054372M) — Catalogued pagination of this edition; may omit preliminary Roman-numbered pages. Identity checked against title and author or previously verified edition identifier. |
| Republic, Lost | 396 | /books/OL25071693M; Not stated by catalog; 2011 | moderate | [source](https://openlibrary.org/books/OL25071693M) — Catalogued extent xiii, 383 p. :; xiii=13 preliminary pages plus 383 Arabic-numbered pages = 396. Plates are excluded. Matching title, author and language checked in data/metadata_261023/raw/library-6e0f07952027207a.json. |
| Orbiting the Giant Hairball | 224 | /books/OL1023832M; Not stated by catalog; 1996 | moderate | [source](https://openlibrary.org/books/OL1023832M) — Catalogued pagination of this edition; may omit preliminary Roman-numbered pages. Identity checked against title and author or previously verified edition identifier. |
| Get Well Soon | 332 | /books/OL27239945M; Not stated by catalog; 2017 | moderate | [source](https://openlibrary.org/books/OL27239945M) — Catalogued extent xii, 320 pages; xii=12 preliminary pages plus 320 Arabic-numbered pages = 332. Plates are excluded. Matching title, author and language checked in data/metadata_261023/raw/library-63b05b382a7e90f3.json. |
| The Will to Keep Winning | 192 | ISBN:9784093884860; Print (national library record); 2016 | high | [source](https://ndlsearch.ndl.go.jp/books/R100000002-I028213130) — National Diet Library explicitly identifies English language and 192 pages; not the Japanese original. |
| Kon-Tiki | 234 | /books/OL26979031M; Not stated by catalog; 1950 | moderate | [source](https://openlibrary.org/books/OL26979031M) — Catalogued pagination of this edition; may omit preliminary Roman-numbered pages. Identity checked against title and author or previously verified edition identifier. |
| The Food of a Younger Land | 415 | /books/OL23174906M; Hardcover; 2009 | moderate | [source](https://openlibrary.org/books/OL23174906M) — Catalogued extent xviii, 397 p.; xviii=18 preliminary pages plus 397 Arabic-numbered pages = 415. Plates are excluded. Matching title, author and language checked in data/metadata_261023/raw/library-63b05b382a7e90f3.json. |
| Six Thinking Hats | 192 | ISBN:9780141037554; Paperback; 2008 | high | [source](https://www.penguin.com.au/books/six-thinking-hats-popular-penguins-9780141037554) — Publisher print metadata. |
| Don't Call Us Carnies | 288 | ISBN:9781922626851; Print (bookseller record); 2022 | moderate | [source](https://w.marymartin.com/web/selectedCatalog?catalogno=3105&year=2022) — Bookseller lists author pair, Affirm Press, year, ISBN and page count together; English library identity corroborates. |
| One Man's Wilderness | 224 | /books/OL8177285M; Paperback; 2003 | moderate | [source](https://openlibrary.org/books/OL8177285M) — Catalogued pagination of this edition; may omit preliminary Roman-numbered pages. Identity checked against title and author or previously verified edition identifier. |
| The Naked Ape | 252 | /books/OL5587183M; Hardcover; 1967 | moderate | [source](https://openlibrary.org/books/OL5587183M) — Catalogued pagination of this edition; may omit preliminary Roman-numbered pages. Identity checked against title and author or previously verified edition identifier. |
| Tamerlane: Sword of Islam | 449 | /books/OL9813239M; Paperback; 2007 | moderate | [source](https://openlibrary.org/books/OL9813239M) — Catalogued pagination of this edition; may omit preliminary Roman-numbered pages. Identity checked against title and author or previously verified edition identifier. |
| The Asylum | 432 | ISBN:9780061766282; Paperback; 2013 | moderate | [source](https://www.thriftbooks.com/w/the-asylum-the-renegades-who-hijacked-the-worlds-oil-market_robert-fass_leah-mcgrath-goodman/434327/) — Matching English William Morrow paperback, March2013:432pages at ThriftBooks, corroborated by Alibris physical listings. Library record gave conflicting number_of_pages400 and pagination432;432 is retained with the independently confirmed edition. |
| Gig: Americans Talk About Their Jobs | 559 | /books/OL16978733M; Not stated by catalog; 2000 | moderate | [source](https://openlibrary.org/books/OL16978733M) — Catalogued extent xi, 548 p. ;; xi=11 preliminary pages plus 548 Arabic-numbered pages = 559. Plates are excluded. Matching title, author and language checked in data/metadata_261023/raw/library-42de4d7d9f3af249.json. |
| You.Next() | 290 | ISBN:9781439205594; Paperback; 2008 | moderate | [source](https://www.enbook.cz/cs/kniha/you-next-move-your-software-development-career-to-the-leadership-track_17020976) — Retailer explicitly identifies both authors, English, paperback, ISBN, 2008 and 290 pages. Prior library estimate288 not retained. |
| The Boys on the Bus | 416 | /books/OL8020850M; Paperback; 2003 | moderate | [source](https://openlibrary.org/books/OL8020850M) — Catalogued pagination of this edition; may omit preliminary Roman-numbered pages. Identity checked against title and author or previously verified edition identifier. |
| Don't Tell Mum I Work on the Rigs | 224 | ISBN:9781857883770; Paperback; 2007 | moderate | [source](https://www.thenile.com.au/books/paul-carter/dont-tell-mum-i-work-on-the-rigs/9781857883770) — Bookseller gives second edition, 8 November 2007, 224 pages and exact print ISBN. |
| Buyology | 272 | ISBN:9780385523899; Paperback; 2010 | high | [source](https://www.penguinrandomhouse.com/books/101773/buyology-by-martin-lindstrom/) — Publisher structured print-edition record; title, author, ISBN, format, year, page count and Amazon vendor identifier read together. |
| The Invention of Murder | 573 | /books/OL24836899M; Not stated by catalog; 2011 | moderate | [source](https://openlibrary.org/books/OL24836899M) — Catalogued extent xvii, 556 p. :; xvii=17 preliminary pages plus 556 Arabic-numbered pages = 573. Plates are excluded. Matching title, author and language checked in data/metadata_261023/raw/library-6dd061590e0e927d.json. |
| The Art of Intelligence | 338 | /books/OL26884424M; Not stated by catalog; 2013 | moderate | [source](https://openlibrary.org/books/OL26884424M) — Catalogued pagination of this edition; may omit preliminary Roman-numbered pages. Identity checked against title and author or previously verified edition identifier. |
| The Bill Gates Problem | 496 | ISBN:9781250850102; Paperback; 2024 | high | [source](https://academic.macmillan.com/academictrade/9781250850102/thebillgatesproblem/) — Publisher print edition details. |
| An Exclusive Love | 185 | /books/OL24383874M; Not stated by catalog; 2011 | moderate | [source](https://openlibrary.org/books/OL24383874M) — Catalogued pagination of this edition; may omit preliminary Roman-numbered pages. Identity checked against title and author or previously verified edition identifier. |
| Food Rules | 160 | /books/OL24062716M; Not stated by catalog; 2009 | moderate | [source](https://openlibrary.org/books/OL24062716M) — Catalogued extent xx, 140 p. :; xx=20 preliminary pages plus 140 Arabic-numbered pages = 160. Plates are excluded. Matching title, author and language checked in data/metadata_261023/raw/library-6dd061590e0e927d.json. |
| The Secret of Selling Anything | 202 | /books/OL58683313M; Not stated by catalog; 2008 | moderate | [source](https://openlibrary.org/books/OL58683313M) — Catalogued pagination of this edition; may omit preliminary Roman-numbered pages. Identity checked against title and author or previously verified edition identifier. |
| In Plato's Cave | 328 | /books/OL372640M; Not stated by catalog; 1999 | moderate | [source](https://openlibrary.org/books/OL372640M) — Catalogued extent xix, 309 p. :; xix=19 preliminary pages plus 309 Arabic-numbered pages = 328. Plates are excluded. Matching title, author and language checked in data/metadata_261023/raw/library-6dd061590e0e927d.json. |
| How to Behave Badly in Elizabethan England | 314 | /books/OL26974404M; Not stated by catalog; 2018 | moderate | [source](https://openlibrary.org/books/OL26974404M) — Catalogued pagination of this edition; may omit preliminary Roman-numbered pages. Identity checked against title and author or previously verified edition identifier. |
| You Just Need to Lose Weight | 224 | ISBN:9780807006474; Paperback; 2023 | high | [source](https://www.penguinrandomhouse.com/books/706220/you-just-need-to-lose-weight-by-aubrey-gordon/9780807006474/) — Publisher physical extent; excludes ebook ISBN. |
| Beyond Code | 124 | ISBN:9781590791028; Hardcover; 2005 | moderate | [source](https://www.selectbooks.com/t_code.html) — Publisher gives 124 pages; author-hosted first-edition text confirms 2005 and hardcover ISBN. Later bookseller metadata says 144; retained publisher extent with discrepancy recorded. |
| Whispers: The Voices of Paranoia | 320 | /books/OL7720919M; Paperback; 1996 | moderate | [source](https://openlibrary.org/books/OL7720919M) — Catalogued pagination of this edition; may omit preliminary Roman-numbered pages. Identity checked against title and author or previously verified edition identifier. |
| Diary of a Very Bad Year | 272 | ISBN:9780061965302; Paperback; 2010 | moderate | [source](https://www.biderundtanner.ch/detail/ISBN-9780061965302/Anonymous-Hedge-Fund-Manager/Diary-of-a-Very-Bad-Year) — Bookseller print details, language English. Not Coetzee's similarly titled novel. |
| Agrarian Justice | 48 | /books/OL55238185M; Not stated by catalog; 2015 | moderate | [source](https://openlibrary.org/books/OL55238185M) — Catalogued pagination of this edition; may omit preliminary Roman-numbered pages. Identity checked against title and author or previously verified edition identifier. |
| The Secret History of the Mongol Queens | 336 | ISBN:9780307407160; Paperback; 2011 | high | [source](https://www.penguinrandomhouse.com/books/187633/the-secret-history-of-the-mongol-queens-by-jack-weatherford/) — Publisher structured print-edition record; title, author, ISBN, format, year, page count and Amazon vendor identifier read together. |
| Dust to Dust | 309 | /books/OL25247385M; Not stated by catalog; 2012 | moderate | [source](https://openlibrary.org/books/OL25247385M) — Catalogued pagination of this edition; may omit preliminary Roman-numbered pages. Identity checked against title and author or previously verified edition identifier. |
| Small Fry | 393 | /books/OL26626611M; Not stated by catalog; 2018 | moderate | [source](https://openlibrary.org/books/OL26626611M) — Catalogued extent xii, 381 pages ;; xii=12 preliminary pages plus 381 Arabic-numbered pages = 393. Plates are excluded. Matching title, author and language checked in data/metadata_261023/raw/library-776185a31aaf5a59.json. |
| Cartesian Economics | 32 | /books/OL6665000M; Not stated by catalog; 1922 | moderate | [source](https://openlibrary.org/books/OL6665000M) — Catalogued pagination of this edition; may omit preliminary Roman-numbered pages. Identity checked against title and author or previously verified edition identifier. |
| One Bullet Away | 384 | /books/OL7605752M; Not stated by catalog; 2005 | moderate | [source](https://openlibrary.org/books/OL7605752M) — Catalogued pagination of this edition; may omit preliminary Roman-numbered pages. Identity checked against title and author or previously verified edition identifier. |
| Twelve Years a Slave | 274 | /books/OL7945317M; Paperback; 1997 | moderate | [source](https://openlibrary.org/books/OL7945317M) — Catalogued pagination of this edition; may omit preliminary Roman-numbered pages. Identity checked against title and author or previously verified edition identifier. |
| Digital Apollo (corrected from 456) | 384 | ISBN:9780262516105; Paperback; 2011 | high | [source](https://mitpress.mit.edu/9780262516105/digital-apollo/) — Publisher-confirmed paperback replaces the former library-only 456-page hardcover record; publisher states 384 pages. |
| Tolbert Lanston and the Monotype (corrected from 214) | 232 | ISBN:9781597321006; Hardcover; 2012 | moderate | [source](https://utampapress.org/product/tolbert-lanston-and-the-monotype-trade-edition) — University of Tampa Press explicitly states 232 pages and hardcover ISBN 9781597321006. Oak Knoll physical-copy description corroborates 232 pages and 2012: https://www.oakknoll.com/pages/books/116377/richard-l-hopkins/tolbert-lanston-and-the-monotype-the-origin-of-digital-typesetting. Replaces the earlier 214-page library-derived record; no separate keepsake booklet is added. |
| Change and Variations: A History of Differential Equations to 1900 (corrected from 419) | 441 | ISBN:9783030705749; Softcover; 2021 | high | [source](https://link.springer.com/book/10.1007/978-3-030-70575-6) — Publisher: XXII+419=441, softcover ISBN9783030705749, June2021. Corrects prior record that accidentally assigned ISBN9783030613976 from an adjacent catalog entry for a different author's Geometry and its Applications in Arts, Nature and Technology. Existing419 represented Arabic pagination only. Book identity and original publication year retained. |
| The Seven Sisters (corrected from 320) | 414 | ISBN:9780553242379; Mass market paperback; 1991 | moderate | [source](https://books.google.com/books/about/The_Seven_Sisters.html?id=ZWAfAQAAIAAJ) — Matching scanned Bantam 1991 revised edition: title, Anthony Sampson, ISBN0553242377, 414 pages; paperback corroborated by Alibris. Prior 320-page 1974 record and Amazon product0553204491 identify Serpico by Peter Maas. A CiNii record assigns that same ISBN to Sampson, so the conflicted identifier is rejected instead of trusting it. Original work publication year is unchanged. |
| Making Software (corrected from 624) | 624 | ISBN:9780596808327; Paperback; 2010 | moderate | [source](https://www.oreilly.com/library/view/making-software/9780596808310/) — O'Reilly publisher states624 pages, English, October2010, Andy Oram and Greg Wilson. Paperback ISBN9780596808327 corroborated by CampusBooks and physical AbeBooks listings. Keeps624-page extent but replaces the ebook ISBN/unspecified print record. A catalogued xv+602 numbered extent is not substituted for the publisher's stated total. |
| What's Happening in the Mathematical Sciences (corrected from 95) | Unknown | Whole-series scope unspecified | high for the identified mismatch | The nominated series has unspecified volume scope. The previous 95-page value describes volume five (ISBN0821829041), not the series. Confirmed by the archived Amazon product and existing Open Library edition record. |

## Reference-page updates

| Book | Pages | Counted inclusive ranges | Edition | Evidence and limitation |
|---|---:|---|---|---|
| The Origins of Efficiency | 59 | bibliographical references: 307–365 | ISBN:9781953953520; matches PG edition | [source](https://discover.bklynlibrary.org/item?b=12999854) — Library MARC 504 explicitly gives pages 307–365; 2025 English print edition. Only the documented sections are counted. Inline citations and online supplements are excluded. Reference pages are not a measure of evidence quality. |
| Your Life Is Manufactured | 26 | bibliographical references: 277–302 | ISBN:9780063434653; not established as the PG edition | [source](https://catalog.losgatosca.gov/Record/574113) — US edition titled How Things Are Made; catalog explicitly identifies Your Life Is Manufactured as the uniform title. Pagination is edition-specific. Only the documented sections are counted. Inline citations and online supplements are excluded. Reference pages are not a measure of evidence quality. |
| From Airline Reservations to Sonic the Hedgehog | 11 | bibliographical references: 349–359 | /books/OL26494203M; not established as the PG edition | [source](https://openlibrary.org/books/OL26494203M) — bibliographical references (p. [349]-359 Only explicitly bounded reference sections counted; not inline citations, a citation count, or a measure of quality. Edition can differ from total-page edition. |
| Science Fictions | 84 | bibliographical references: 265–348 | ISBN:9781529110647; not established as the PG edition | [source](https://ci.nii.ac.jp/ncid/BD08637255) — English edition; explicit library range. US hardcover has different pagination. Only the documented sections are counted. Inline citations and online supplements are excluded. Reference pages are not a measure of evidence quality. |
| Bad Blood | 45 | bibliographical references: 457–501 | /books/OL26961485M; not established as the PG edition | [source](https://openlibrary.org/books/OL26961485M) — bibliographical references (pages 457-501 Only explicitly bounded reference sections counted; not inline citations, a citation count, or a measure of quality. Edition can differ from total-page edition. |
| Strategic Computing | 64 | Notes: 333–396 | ISBN:0262182262; not established as the PG edition | [source](https://books.google.com/books?vid=ISBN0262182262&hl=en) — Notes 333; Note on Sources 397 Only numbered reference sections with an explicit next-section boundary counted; contents can omit sections or include a final blank page. |
| Digital Apollo | 28 | bibliographical references: 307–334 | /books/OL18510059M; not established as the PG edition | [source](https://openlibrary.org/books/OL18510059M) — bibliographical references (p. [307]-334 Only explicitly bounded reference sections counted; not inline citations, a citation count, or a measure of quality. Edition can differ from total-page edition. |
| The Human Factor | 23 | bibliographical references: 307–329 | /books/OL20744926M; not established as the PG edition | [source](https://openlibrary.org/books/OL20744926M) — bibliographical references (p. 307-329 Only explicitly bounded reference sections counted; not inline citations, a citation count, or a measure of quality. Edition can differ from total-page edition. |
| The Pentium Chronicles | 2 | bibliographical references: 171–172 | /books/OL15597235M; not established as the PG edition | [source](https://openlibrary.org/books/OL15597235M) — bibliographical references (p. 171-172 Only explicitly bounded reference sections counted; not inline citations, a citation count, or a measure of quality. Edition can differ from total-page edition. |
| Nuts and Bolts | 32 | bibliographical references: 223–254 | Library:FreeLibrary2675018; not established as the PG edition | [source](https://catalog.freelibrary.org/Record/2675018) — English print catalog range; not the differently paginated UK edition. Only the documented sections are counted. Inline citations and online supplements are excluded. Reference pages are not a measure of evidence quality. |
| Arriving Today | 20 | bibliographical references: 291–310 | Library:Richland1903144; not established as the PG edition | [source](https://www.richlandlibrary.com/catalog/detail/1903144) — Explicit catalog range for Mims, Arriving Today. Only the documented sections are counted. Inline citations and online supplements are excluded. Reference pages are not a measure of evidence quality. |
| Working Backwards | 4 | bibliographical references: 275–278 | Library:FreeLibrary2559018; not established as the PG edition | [source](https://catalog.freelibrary.org/Record/2559018) — Explicit catalog range for Bryar and Carr, Working Backwards. Only the documented sections are counted. Inline citations and online supplements are excluded. Reference pages are not a measure of evidence quality. |
| The Art of Statistics | 12 | bibliographical references: 407–418 | Library:IUCAT17777473; not established as the PG edition | [source](https://iucat.iu.edu/catalog/17777473) — Explicit catalog range for Spiegelhalter, The Art of Statistics. Only the documented sections are counted. Inline citations and online supplements are excluded. Reference pages are not a measure of evidence quality. |
| The Dream Machine | 7 | bibliographical references: 483–489 | Library:CiNiiBA58671490; not established as the PG edition | [source](https://ci.nii.ac.jp/ncid/BA58671490) — Waldrop's Licklider book; excludes Whittle's similarly titled Osprey book. Only the documented sections are counted. Inline citations and online supplements are excluded. Reference pages are not a measure of evidence quality. |
| Creating Global Opportunities | 37 | Notes and References: 382–418 | ISBN:9781107037816; matches PG edition | [source](https://books.google.com/books?vid=ISBN9781107037816&hl=en) — Notes and References 382; Index 419 Only numbered reference sections with an explicit next-section boundary counted; contents can omit sections or include a final blank page. |
| IBM's 360 and Early 370 Systems | 113 | bibliographical references: 679–791 | /books/OL1860267M; matches PG edition | [source](https://openlibrary.org/books/OL1860267M) — bibliographical references (p. [679]-791 Only explicitly bounded reference sections counted; not inline citations, a citation count, or a measure of quality. Edition can differ from total-page edition. |
| Amazon Unbound | 47 | bibliographical references: 413–459 | Library:SacredHeart140358; not established as the PG edition | [source](https://libcatalog.sacredheart.edu/cgi-bin/koha/opac-ISBDdetail.pl?biblionumber=140358) — Explicit catalog range for Brad Stone, Amazon Unbound. Only the documented sections are counted. Inline citations and online supplements are excluded. Reference pages are not a measure of evidence quality. |
| Liquid | 1 | bibliographical references: 249–249 | Library:CiNiiBB28683104; not established as the PG edition | [source](https://ci.nii.ac.jp/ncid/BB28683104) — Catalog explicitly identifies a single reference page, corroborated by IBS library. Not an inference from absence of further pages. Only the documented sections are counted. Inline citations and online supplements are excluded. Reference pages are not a measure of evidence quality. |
| Honeybee Democracy | 25 | bibliographical references: 235–259 | /books/OL24791212M; not established as the PG edition | [source](https://openlibrary.org/books/OL24791212M) — bibliographical references  (p. 235-259 Only explicitly bounded reference sections counted; not inline citations, a citation count, or a measure of quality. Edition can differ from total-page edition. |
| Across the Airless Wilds | 46 | bibliographical references: 313–358 | Library:Richland1898754; not established as the PG edition | [source](https://www.richlandlibrary.com/catalog/detail/1898754) — Explicit catalog range for Earl Swift, Across the Airless Wilds. Only the documented sections are counted. Inline citations and online supplements are excluded. Reference pages are not a measure of evidence quality. |
| Fancy Bear Goes Phishing | 72 | bibliographical references: 331–402 | Library:NEIT303715; not established as the PG edition | [source](https://libcatalog.neit.edu/bib/303715) — Explicit catalog range for Shapiro, Fancy Bear Goes Phishing. Only the documented sections are counted. Inline citations and online supplements are excluded. Reference pages are not a measure of evidence quality. |
| Tubes | 8 | bibliographical references: 273–280 | Library:UEF998066743705966; not established as the PG edition | [source](https://www.finna.fi/Record/uef.998066743705966) — Andrew Blum, Tubes; excludes Alfred Gray's technical book with the same short title. Only the documented sections are counted. Inline citations and online supplements are excluded. Reference pages are not a measure of evidence quality. |
| More and More and More | 90 | bibliographical references: 221–310 | Library:Richland2406157; not established as the PG edition | [source](https://www.richlandlibrary.com/catalog/detail/2406157) — Explicit catalog range for Fressoz; closing page in square brackets. Only the documented sections are counted. Inline citations and online supplements are excluded. Reference pages are not a measure of evidence quality. |
| The Toyota Way | 8 | bibliographical references: 311–318 | Library:UIBE049b0168548a9f28297c76f1edb7d55b; not established as the PG edition | [source](https://opac.lib.uibe.edu.cn/opac/book/049b0168548a9f28297c76f1edb7d55b) — English Toyota Way by Jeffrey Liker; explicit catalog range. Only the documented sections are counted. Inline citations and online supplements are excluded. Reference pages are not a measure of evidence quality. |
| Superforecasting: The Art and Science of Prediction | 38 | bibliographical references: 291–328 | Library:Salk4846; not established as the PG edition | [source](https://jonas.salk.edu/cgi-bin/koha/opac-MARCdetail.pl?biblionumber=4846) — MARC 504 range; corroborated by New Haven catalog. Reject malformed Arlington transcription ending 3280. Only the documented sections are counted. Inline citations and online supplements are excluded. Reference pages are not a measure of evidence quality. |
| Insisting on the Impossible | 7 | bibliographical references: 468–474 | /books/OL397940M; not established as the PG edition | [source](https://openlibrary.org/books/OL397940M) — bibliographical references (p. [468]-474 Only explicitly bounded reference sections counted; not inline citations, a citation count, or a measure of quality. Edition can differ from total-page edition. |
| The Man Who Discovered Quality | 6 | bibliographical references: 287–292 | /books/OL2217274M; not established as the PG edition | [source](https://openlibrary.org/books/OL2217274M) — bibliographical references (p. 287-292 Only explicitly bounded reference sections counted; not inline citations, a citation count, or a measure of quality. Edition can differ from total-page edition. |
| Crypto | 2 | bibliographical references: 343–344 | /books/OL7643220M; not established as the PG edition | [source](https://openlibrary.org/books/OL7643220M) — bibliographical references (p. [343]-344 Only explicitly bounded reference sections counted; not inline citations, a citation count, or a measure of quality. Edition can differ from total-page edition. |
| A Triumph of Genius | 72 | bibliographical references: 541–612 | /books/OL27182768M; matches PG edition | [source](https://openlibrary.org/books/OL27182768M) — bibliographical references (pages 541-612 Only explicitly bounded reference sections counted; not inline citations, a citation count, or a measure of quality. Edition can differ from total-page edition. |
| Platform Revolution | 23 | bibliographical references: 301–323 | Library:NEIT68907; not established as the PG edition | [source](https://libcatalog.neit.edu/cgi-bin/koha/opac-detail.pl?biblionumber=68907) — English Platform Revolution; not the Korean translation with different pagination. Only the documented sections are counted. Inline citations and online supplements are excluded. Reference pages are not a measure of evidence quality. |
| Colossus: The Secrets of Bletchley Park's Codebreaking Computers | 33 | bibliographical references: 419–451 | Library:Weber1116721; not established as the PG edition | [source](https://libcat.weber.edu/bib/1116721) — Colossus edited by Copeland; explicit range corroborated by National Library of New Zealand. Only the documented sections are counted. Inline citations and online supplements are excluded. Reference pages are not a measure of evidence quality. |
| The Analogue Alternative | 29 | bibliographical references: 279–307 | /books/OL22490576M; not established as the PG edition | [source](https://openlibrary.org/books/OL22490576M) — bibliographical references (p. 279-307 Only explicitly bounded reference sections counted; not inline citations, a citation count, or a measure of quality. Edition can differ from total-page edition. |
| IBM's Early Computers | 87 | Bibliography:: 607–693 | /books/OL3027471M; matches PG edition | [source](https://openlibrary.org/books/OL3027471M) — Bibliography: p. [607]-693 Only explicitly bounded reference sections counted; not inline citations, a citation count, or a measure of quality. Edition can differ from total-page edition. |
| Copies in Seconds | 7 | bibliographical references: 285–291 | Library:NEIT28214; not established as the PG edition | [source](https://libcatalog.neit.edu/cgi-bin/koha/opac-MARCdetail.pl?biblionumber=28214) — MARC 504 explicit range for David Owen, Copies in Seconds. Only the documented sections are counted. Inline citations and online supplements are excluded. Reference pages are not a measure of evidence quality. |
| The Code | 10 | bibliographical references: 417–426 | Library:Ohrstrom76332; not established as the PG edition | [source](https://librarycatalog.sps.edu/cgi-bin/koha/opac-MARCdetail.pl?biblionumber=76332) — Margaret O'Mara, The Code; explicit catalog range. Only the documented sections are counted. Inline citations and online supplements are excluded. Reference pages are not a measure of evidence quality. |
| Technological Revolutions and Financial Capital | 10 | bibliographical references: 173–182 | Library:CiNiiBA67041529; not established as the PG edition | [source](https://ci.nii.ac.jp/ncid/BA67041529) — Carlota Perez, Technological Revolutions and Financial Capital; explicit English catalog range. Only the documented sections are counted. Inline citations and online supplements are excluded. Reference pages are not a measure of evidence quality. |
| Consider the Fork | 28 | bibliographical references: 283–310 | Library:VSC361222; not established as the PG edition | [source](https://catalog.libraries.vsc.edu/cgi-bin/koha/opac-detail.pl?biblionumber=361222) — Bee Wilson, Consider the Fork; edition-specific range, not the differently paginated UK edition. Only the documented sections are counted. Inline citations and online supplements are excluded. Reference pages are not a measure of evidence quality. |
| Ideas That Created the Future: Classic Papers of Computer Science | 12 | bibliographical references: 479–490 | Library:CiNiiBC00334015; not established as the PG edition | [source](https://ci.nii.ac.jp/ncid/BC00334015) — Ideas That Created the Future; explicit English catalog range. Only the documented sections are counted. Inline citations and online supplements are excluded. Reference pages are not a measure of evidence quality. |
| Dreaming in Code | 27 | bibliographical references: 362–388 | /books/OL9789411M; matches PG edition | [source](https://openlibrary.org/books/OL9789411M) — bibliographical references (p. [362]-388 Only explicitly bounded reference sections counted; not inline citations, a citation count, or a measure of quality. Edition can differ from total-page edition. |
| Fatal Defect | 26 | bibliographical references: 237–262 | /books/OL719119M; matches PG edition | [source](https://openlibrary.org/books/OL719119M) — bibliographical references (p. [237]-262 Only explicitly bounded reference sections counted; not inline citations, a citation count, or a measure of quality. Edition can differ from total-page edition. |
| Minitel: Welcome to the Internet | 48 | Notes: 163–194; Bibliography: 195–210 | ISBN:0262036223; matches PG edition | [source](https://books.google.com/books?vid=ISBN0262036223&hl=en) — Notes 163; Bibliography 195 Only numbered reference sections with an explicit next-section boundary counted; contents can omit sections or include a final blank page. |
| Sonic Wind | 7 | bibliographical references: 379–385 | /books/OL27186415M; matches PG edition | [source](https://openlibrary.org/books/OL27186415M) — bibliographical references (pages 379-385 Only explicitly bounded reference sections counted; not inline citations, a citation count, or a measure of quality. Edition can differ from total-page edition. |
| The Founders | 50 | bibliographical references: 425–474 | Library:SacredHeart157957; not established as the PG edition | [source](https://libcatalog.sacredheart.edu/cgi-bin/koha/opac-ISBDdetail.pl?biblionumber=157957) — Explicit range for Jimmy Soni's PayPal book. Only the documented sections are counted. Inline citations and online supplements are excluded. Reference pages are not a measure of evidence quality. |
| A Brief History of Mathematical Thought | 4 | Further Reading: 308–311 | ISBN:0190621761; matches PG edition | [source](https://books.google.com/books?vid=ISBN0190621761&hl=en) — Further Reading 308; Acknowledgements 312 Only numbered reference sections with an explicit next-section boundary counted; contents can omit sections or include a final blank page. |
| Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future | 6 | bibliographical references: 387–392 | Library:Knox439513; not established as the PG edition | [source](https://discover.knoxcountylibrary.org/Record/439513) — Ashlee Vance's Elon Musk book; this edition's range, not the differently paginated edition ending 402. Only the documented sections are counted. Inline citations and online supplements are excluded. Reference pages are not a measure of evidence quality. |
| Plain Talk | 1 | bibliographical references: 194–194 | /books/OL683381M; not established as the PG edition | [source](https://openlibrary.org/books/OL683381M/Plain_talk) — Ken Iverson, Plain Talk. This catalog and KsTU identify p. 194 only; KAIST gives 194–195. Retained the explicit one-page range for the identified Open Library edition; discrepancy unresolved. Only the documented sections are counted. Inline citations and online supplements are excluded. Reference pages are not a measure of evidence quality. |
| Poor Economics | 17 | bibliographical references: 277–293 | Library:CiNiiBB1324177X; not established as the PG edition | [source](https://ci.nii.ac.jp/ncid/BB1324177X) — Explicit English catalog range for Poor Economics. Only the documented sections are counted. Inline citations and online supplements are excluded. Reference pages are not a measure of evidence quality. |
| The Best of All Possible Worlds | 2 | bibliographical references: 197–198 | Library:MUST8530; not established as the PG edition | [source](https://elib.must.ac.ug/cgi-bin/koha/opac-ISBDdetail.pl?biblionumber=8530) — Explicit catalog range for Ivar Ekeland's Mathematics and Destiny book. Only the documented sections are counted. Inline citations and online supplements are excluded. Reference pages are not a measure of evidence quality. |
| Super Pumped | 23 | bibliographical references: 351–373 | Library:Wake740290; not established as the PG edition | [source](https://catalog.wake.gov/Record/740290) — Explicit catalog range for Mike Isaac, Super Pumped. Only the documented sections are counted. Inline citations and online supplements are excluded. Reference pages are not a measure of evidence quality. |
| A Man on the Moon | 5 | bibliographical references: 601–605 | /books/OL1436436M; not established as the PG edition | [source](https://openlibrary.org/books/OL1436436M) — bibliographical references (p. 601-605 Only explicitly bounded reference sections counted; not inline citations, a citation count, or a measure of quality. Edition can differ from total-page edition. |
| From Clockwork to Crapshoot | 6 | bibliographical references: 316–321 | /books/OL22743708M; not established as the PG edition | [source](https://openlibrary.org/books/OL22743708M) — bibliographical references (p. [316]-321 Only explicitly bounded reference sections counted; not inline citations, a citation count, or a measure of quality. Edition can differ from total-page edition. |
| I Contain Multitudes | 70 | bibliographical references: 269–338 | Library:NEIT71012; not established as the PG edition | [source](https://libcatalog.neit.edu/cgi-bin/koha/opac-ISBDdetail.pl?biblionumber=71012) — Ed Yong, I Contain Multitudes. NEIT documents the broad reference section; other catalogs report only 299–338. Count follows this catalog's explicit coverage without combining editions. Only the documented sections are counted. Inline citations and online supplements are excluded. Reference pages are not a measure of evidence quality. |
| After Steve | 59 | bibliographical references: 421–479 | Library:Richland1946270; not established as the PG edition | [source](https://www.richlandlibrary.com/catalog/detail/1946270) — Tripp Mickle, After Steve. Richland documents the broad reference section; other catalogs report only 477–479, so this record retains its stated section coverage without combining catalogs. Only the documented sections are counted. Inline citations and online supplements are excluded. Reference pages are not a measure of evidence quality. |
| The Birth of Plenty | 15 | bibliographical references: 387–401 | Library:FreeLibrary1026790; not established as the PG edition | [source](https://catalog.freelibrary.org/Record/1026790) — William Bernstein, The Birth of Plenty; explicit library range. Only the documented sections are counted. Inline citations and online supplements are excluded. Reference pages are not a measure of evidence quality. |
| Absolute Zero and the Conquest of Cold | 6 | bibliographical references: 244–249 | /books/OL41444M; not established as the PG edition | [source](https://openlibrary.org/books/OL41444M) — bibliographical references (p. [244]-249 Only explicitly bounded reference sections counted; not inline citations, a citation count, or a measure of quality. Edition can differ from total-page edition. |
| The Wright Brothers | 108 | bibliographical references: 475–582 | /books/OL27181120M; not established as the PG edition | [source](https://openlibrary.org/books/OL27181120M) — bibliographical references (pages 475-582 Only explicitly bounded reference sections counted; not inline citations, a citation count, or a measure of quality. Edition can differ from total-page edition. |
| Work Rules! | 20 | bibliographical references: 377–396 | Library:UOW27331; not established as the PG edition | [source](https://library.uowdubai.ac.ae/cgi-bin/koha/opac-detail.pl?biblionumber=27331) — Laszlo Bock, Work Rules; explicit library range. Only the documented sections are counted. Inline citations and online supplements are excluded. Reference pages are not a measure of evidence quality. |
| Competition Demystified | 5 | bibliographical references: 379–383 | Library:Alfaisal486224; not established as the PG edition | [source](https://libkoha.alfaisal.edu/cgi-bin/koha/opac-MARCdetail.pl?biblionumber=486224) — Competition Demystified; explicit MARC range. Only the documented sections are counted. Inline citations and online supplements are excluded. Reference pages are not a measure of evidence quality. |
| Why We Fight | 64 | notes: 307–344; bibliography: 345–370 | Library:CCLS557228; not established as the PG edition | [source](https://catalog.cclsny.org/bib/557228) — Chris Blattman, Why We Fight; catalog range 307–370 with contents distinguishing notes at 307 and bibliography at 345. Only the documented sections are counted. Inline citations and online supplements are excluded. Reference pages are not a measure of evidence quality. |
| The Social Instinct | 30 | bibliographical references: 259–288 | Library:Richland1903230; not established as the PG edition | [source](https://www.richlandlibrary.com/catalog/detail/1903230) — Nichola Raihani, The Social Instinct; explicit catalog range, index 289–296 excluded. Only the documented sections are counted. Inline citations and online supplements are excluded. Reference pages are not a measure of evidence quality. |
| The Last Man Who Knew Everything: The Life and Times of Enrico Fermi, Father of the Nuclear Age | 62 | notes: 375–418; bibliography: 419–436 | Library:Camden402926; not established as the PG edition | [source](https://catalog.camdencountylibrary.org/cgi-bin/koha/opac-detail.pl?biblionumber=402926) — David Schwartz's Enrico Fermi biography. Catalog gives total range and the two section boundaries. Only the documented sections are counted. Inline citations and online supplements are excluded. Reference pages are not a measure of evidence quality. |
| Chokepoints | 84 | bibliographical references: 437–520 | Library:Folsom.b27896055; not established as the PG edition | [source](https://librarycatalog.folsom.ca.us/Record/.b27896055) — Edward Fishman, Chokepoints; explicit catalog range. Only the documented sections are counted. Inline citations and online supplements are excluded. Reference pages are not a measure of evidence quality. |
| A History of Computing in the Twentieth Century | 31 | supplementary bibliography: 629–659 | ISBN:9780124916500; matches PG edition | [source](https://catalogue.nla.gov.au/Record/2678797) — NLA identifies B. Randell's supplementary bibliography. Chapter-end references are not bounded and are not included; this is documented section coverage only. Only the documented sections are counted. Inline citations and online supplements are excluded. Reference pages are not a measure of evidence quality. |
| Things That Make Us Smart | 8 | bibliographical references: 273–280 | /books/OL1731496M; matches PG edition | [source](https://openlibrary.org/books/OL1731496M) — bibliographical references (p. 273-280 Only explicitly bounded reference sections counted; not inline citations, a citation count, or a measure of quality. Edition can differ from total-page edition. |
| I Am Error | 28 | Sources: 391–418 | ISBN:0262028778; not established as the PG edition | [source](https://books.google.com/books?vid=ISBN0262028778&hl=en) — Sources 391; Index 419 Only numbered reference sections with an explicit next-section boundary counted; contents can omit sections or include a final blank page. |
| Crashed | 71 | bibliographical references: 617–687 | Library:NEIT72118; not established as the PG edition | [source](https://libcatalog.neit.edu/cgi-bin/koha/opac-ISBDdetail.pl?biblionumber=72118) — Adam Tooze, Crashed; explicit catalog range. Only the documented sections are counted. Inline citations and online supplements are excluded. Reference pages are not a measure of evidence quality. |
| Think Twice | 34 | bibliographical references: 145–178 | Library:CiNiiBB20891786; not established as the PG edition | [source](https://ci.nii.ac.jp/ncid/BB20891786) — Michael Mauboussin, Think Twice; explicit English catalog range. Only the documented sections are counted. Inline citations and online supplements are excluded. Reference pages are not a measure of evidence quality. |
| How the World Ran Out of Everything | 33 | bibliographical references: 359–391 | Library:FreeLibrary2701975; not established as the PG edition | [source](https://catalog.freelibrary.org/Record/2701975) — Peter Goodman, How the World Ran Out of Everything; explicit catalog range. Only the documented sections are counted. Inline citations and online supplements are excluded. Reference pages are not a measure of evidence quality. |
| The Coming Wave | 29 | bibliographical references: 289–317 | Library:Wake778732; not established as the PG edition | [source](https://catalog.wake.gov/Record/778732) — Mustafa Suleyman, The Coming Wave; explicit catalog range. Only the documented sections are counted. Inline citations and online supplements are excluded. Reference pages are not a measure of evidence quality. |
| Flying Without Wings | 2 | bibliographical references: 231–232 | /books/OL386008M; not established as the PG edition | [source](https://openlibrary.org/books/OL386008M) — bibliographical references (p. 231-232 Only explicitly bounded reference sections counted; not inline citations, a citation count, or a measure of quality. Edition can differ from total-page edition. |
| The Perfect Theory: A Century of Geniuses and the Battle over General Relativity | 12 | bibliographical references: 258–269 | Library:Folsom.b2271523x; not established as the PG edition | [source](https://librarycatalog.folsom.ca.us/Record/.b2271523x) — Pedro Ferreira, The Perfect Theory; explicit catalog range. Only the documented sections are counted. Inline citations and online supplements are excluded. Reference pages are not a measure of evidence quality. |
| The Power Law | 49 | bibliographical references: 415–463 | Library:Alfaisal602299; not established as the PG edition | [source](https://libkoha.alfaisal.edu/cgi-bin/koha/opac-ISBDdetail.pl?biblionumber=602299) — Sebastian Mallaby, The Power Law; explicit catalog range. Only the documented sections are counted. Inline citations and online supplements are excluded. Reference pages are not a measure of evidence quality. |
| How to Avoid a Climate Disaster | 10 | bibliographical references: 237–246 | Library:VSC520847; not established as the PG edition | [source](https://catalog.libraries.vsc.edu/cgi-bin/koha/opac-detail.pl?biblionumber=520847) — Bill Gates, How to Avoid a Climate Disaster; explicit catalog range. Only the documented sections are counted. Inline citations and online supplements are excluded. Reference pages are not a measure of evidence quality. |
| Angle of Attack | 3 | bibliographical references: 289–291 | /books/OL1702725M; matches PG edition | [source](https://openlibrary.org/books/OL1702725M) — bibliographical references (p. 289-291 Only explicitly bounded reference sections counted; not inline citations, a citation count, or a measure of quality. Edition can differ from total-page edition. |
| China on the Ground in Latin America: Challenges for the Chinese and Impacts on the Region (The Political Economy of East Asia) | 5 | bibliographical references: 285–289 | Library:CiNiiBB16898974; not established as the PG edition | [source](https://ci.nii.ac.jp/ncid/BB16898974) — Evan Ellis, China on the Ground in Latin America; explicit English catalog range. Only the documented sections are counted. Inline citations and online supplements are excluded. Reference pages are not a measure of evidence quality. |
| Think Like a Rocket Scientist | 48 | bibliographical references: 289–336 | Library:Prosper30973; not established as the PG edition | [source](https://catalog.prospertx.gov/Record/30973) — Ozan Varol's book, not the similarly named Seven Secrets book; explicit catalog range. Only the documented sections are counted. Inline citations and online supplements are excluded. Reference pages are not a measure of evidence quality. |
| The Particle at the End of the Universe | 10 | bibliographical references: 311–320 | Library:Folsom.b22030876; not established as the PG edition | [source](https://librarycatalog.folsom.ca.us/Record/.b22030876) — Sean Carroll, The Particle at the End of the Universe; this edition's explicit range. Only the documented sections are counted. Inline citations and online supplements are excluded. Reference pages are not a measure of evidence quality. |
| The Wisdom of Crowds | 22 | bibliographical references: 285–306 | Library:AWMLIB100020591; not established as the PG edition | [source](https://www.awm.gov.au/collection/LIB100020591) — James Surowiecki, The Wisdom of Crowds; this edition's explicit range. Only the documented sections are counted. Inline citations and online supplements are excluded. Reference pages are not a measure of evidence quality. |
| Global Capitalism | 38 | bibliographical references: 479–516 | Library:FreeLibrary1474788; not established as the PG edition | [source](https://catalog.freelibrary.org/Record/1474788) — Jeffry Frieden, Global Capitalism; original twentieth-century edition, not the expanded edition with different pagination. Only the documented sections are counted. Inline citations and online supplements are excluded. Reference pages are not a measure of evidence quality. |
| The Glass Universe | 7 | bibliographical references: 299–305 | Library:Weber1178982; not established as the PG edition | [source](https://libcat.weber.edu/bib/1178982) — Dava Sobel, The Glass Universe; explicit catalog range. Only the documented sections are counted. Inline citations and online supplements are excluded. Reference pages are not a measure of evidence quality. |
| Evolution: The Triumph of an Idea | 8 | bibliographical references: 345–352 | /books/OL23245931M; not established as the PG edition | [source](https://openlibrary.org/books/OL23245931M) — bibliographical references (p. 345-352 Only explicitly bounded reference sections counted; not inline citations, a citation count, or a measure of quality. Edition can differ from total-page edition. |
| A Brief History of Intelligence | 27 | bibliographical references: 373–399 | Library:Folsom.b27539568; not established as the PG edition | [source](https://librarycatalog.folsom.ca.us/Record/.b27539568) — Max Bennett, A Brief History of Intelligence; this catalog's explicit range, not the differently paginated edition ending 402. Only the documented sections are counted. Inline citations and online supplements are excluded. Reference pages are not a measure of evidence quality. |
| The Scientific Method: An Evolution of Thinking from Darwin to Dewey | 76 | Notes: 281–356 | ISBN:0674976193; matches PG edition | [source](https://books.google.com/books?vid=ISBN0674976193&hl=en) — Notes 281; Acknowledgments 357 Only numbered reference sections with an explicit next-section boundary counted; contents can omit sections or include a final blank page. |
| Venomous | 30 | bibliographical references: 193–222 | Library:FreeLibrary2047250; not established as the PG edition | [source](https://catalog.freelibrary.org/Record/2047250) — Christie Wilcox, Venomous; explicit catalog range. Excludes similarly titled animal reference books. Only the documented sections are counted. Inline citations and online supplements are excluded. Reference pages are not a measure of evidence quality. |
| She Has Her Mother's Laugh | 44 | bibliographical references: 599–642 | Library:Wake727950; not established as the PG edition | [source](https://catalog.wake.gov/Record/727950) — Carl Zimmer, She Has Her Mother's Laugh; explicit catalog range. Only the documented sections are counted. Inline citations and online supplements are excluded. Reference pages are not a measure of evidence quality. |
| A Brief History of Creation | 26 | bibliographical references: 261–286 | /books/OL27195402M; not established as the PG edition | [source](https://openlibrary.org/books/OL27195402M) — bibliographical references (pages 261-286 Only explicitly bounded reference sections counted; not inline citations, a citation count, or a measure of quality. Edition can differ from total-page edition. |
| Plato's Ghost (additional) | 30 | Bibliography: 473–502 | ISBN:9780691136103; not established as the PG edition | [source](https://www.abebooks.com/9780691136103/Platos-Ghost-Modernist-Transformation-Mathematics-0691136106/plp) — Publisher contents reproduced on the matching 2008 hardcover product: Bibliography starts473; Index starts503. The explicit473–502 bibliography range is corroborated by https://www.chasse-aux-livres.fr/prix/0691136106/plato-s-ghost-jeremy-gray-9780691136103. Count30; glossary and index excluded. Only the documented sections are counted. Inline citations and online supplements are excluded. Reference pages are not a measure of evidence quality. |
| Taming the Infinite (additional) | 3 | Bibliographical references: 374–376 | ISBN:9781847247681; matches PG edition | [source](https://openlibrary.org/books/OL25177875M/Taming_the_infinite) — Catalog explicitly states bibliography pages 374–376. Only the documented sections are counted. Inline citations and online supplements are excluded. Reference pages are not a measure of evidence quality. |
| Pockets (additional) | 49 | Notes: 235–283 | ISBN:9781643751542; matches PG edition | [source](https://catalog.freelibrary.org/Record/2666543) — Library records bibliographical references in Notes, pages 235–283. Index excluded. Only the documented sections are counted. Inline citations and online supplements are excluded. Reference pages are not a measure of evidence quality. |
| Mathematics: The Music of Reason (additional) | 26 | Bibliography: 255–280 | ISBN:9783540533467; matches PG edition | [source](https://bibli.cirm-math.fr/Record.htm?idlist=1&record=19201163124910293459) — CIRM library record: English edition, Bibliogr. Pp. 255–280; index separately identified. Only the documented sections are counted. Inline citations and online supplements are excluded. Reference pages are not a measure of evidence quality. |
| Oulipo: A Primer of Potential Literature (additional) | 20 | Bibliography: 163–182 | ISBN:0803230966; not established as the PG edition | [source](https://openlibrary.org/books/OL3028251M) — 1986 print edition library note: Bibliography p. 163–182; includes index. Reference edition differs from selected Dalkey paperback. Only the documented sections are counted. Inline citations and online supplements are excluded. Reference pages are not a measure of evidence quality. |
| The Universe: From Flat Earth to Quasar (additional) | 1 | Bibliography: 391–391 | ISBN:9780140212129; matches PG edition | [source](https://obnb.uk/p11182123-the-universe-from-flat-earth-to-quasar) — OBNB English Penguin third edition1983, ISBN0140212124: Bibliography p391; includes index. One explicitly bounded bibliography page, not the index or inline citations. Only the documented sections are counted. Inline citations and online supplements are excluded. Reference pages are not a measure of evidence quality. |

## Amazon aggregates and score changes

The ten positive criterion contributions below are carried forward without a new content assessment. Raw attainment is kept separate from the contribution. E, S and D use the existing quadratic profile; all other positive criteria remain linear. Only O15 changes. Density confidence and any prior audit limitations remain in force.

<a id="intake-0171"></a>
### From Airline Reservations to Sonic the Hedgehog

Martin Campbell-Kelly. Sources: 211. [Amazon amazon.com.au](https://www.amazon.com.au/dp/026253262X); product 026253262X; 14 total ratings; retrieved 2026-10-23T08:03:21.276Z. Count confidence: high. Evidence: 14 global ratings. Snapshot: [saved response](../data/metadata_261023/amazon-au-probe.html).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 19.00 / 20 | 18.05 |
| S — Systems integration | 15.00 / 17 | 13.24 |
| U — Transferable strategic utility | 12.00 / 15 | 12.00 |
| M — Mechanistic and causal depth | 11.00 / 12 | 11.00 |
| D — Information density and length justification | 8.50 / 10 | 7.22 |
| R — Durability and resistance to hype | 9.00 / 9 | 9.00 |
| F — Direct domain fit | 7.00 / 7 | 7.00 |
| A — Expert authority and intellectual standing | 5.00 / 5 | 5.00 |
| N — Narrative architecture and clarity | 2.50 / 3 | 2.50 |
| P — Authorial precision and finesse | 2.00 / 2 | 2.00 |

T11=0.00; T12=0.00; H13=-1.04; P14=-2.30; O15=-10.00.
Previous total 83.67 with unknown-count fallback. Revised total **73.67**, verdict **Recommend**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_hn22692281_261023_0229.md#intake-0171.

<a id="intake-0177"></a>
### Strategic Computing

Alex Roland; Philip Shiman. Sources: 211. [Amazon amazon.com.au](https://www.amazon.com.au/dp/0262529262); product 0262529262; 5 total ratings; retrieved 2026-10-23T08:04:26.586Z. Count confidence: high. Evidence: 5 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-intake-0177-0262529262.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 19.00 / 20 | 18.05 |
| S — Systems integration | 15.00 / 17 | 13.24 |
| U — Transferable strategic utility | 12.00 / 15 | 12.00 |
| M — Mechanistic and causal depth | 11.00 / 12 | 11.00 |
| D — Information density and length justification | 8.50 / 10 | 7.22 |
| R — Durability and resistance to hype | 9.00 / 9 | 9.00 |
| F — Direct domain fit | 7.00 / 7 | 7.00 |
| A — Expert authority and intellectual standing | 5.00 / 5 | 5.00 |
| N — Narrative architecture and clarity | 2.50 / 3 | 2.50 |
| P — Authorial precision and finesse | 1.50 / 2 | 1.50 |

T11=0.00; T12=0.00; H13=-1.32; P14=-2.40; O15=-20.00.
Previous total 82.79 with unknown-count fallback. Revised total **62.79**, verdict **Selective**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_hn22692281_261023_0229.md#intake-0177.

<a id="intake-0009"></a>
### Digital Apollo

David A. Mindell. Sources: 207. [Amazon amazon.com.au](https://www.amazon.com.au/dp/0262516101); product 0262516101; 293 total ratings; retrieved 2026-10-23T08:04:56.592Z. Count confidence: high. Evidence: 293 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-intake-0009-0262516101.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 18.00 / 20 | 16.20 |
| S — Systems integration | 15.00 / 17 | 13.24 |
| U — Transferable strategic utility | 13.00 / 15 | 13.00 |
| M — Mechanistic and causal depth | 11.00 / 12 | 11.00 |
| D — Information density and length justification | 8.50 / 10 | 7.22 |
| R — Durability and resistance to hype | 9.00 / 9 | 9.00 |
| F — Direct domain fit | 7.00 / 7 | 7.00 |
| A — Expert authority and intellectual standing | 5.00 / 5 | 5.00 |
| N — Narrative architecture and clarity | 2.50 / 3 | 2.50 |
| P — Authorial precision and finesse | 2.00 / 2 | 2.00 |

T11=0.00; T12=0.00; H13=-2.16; P14=-1.80; O15=-5.00.
Previous total 82.20 with unknown-count fallback. Revised total **77.20**, verdict **Recommend**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_hn42614722_261023_0229.md#intake-0009.

<a id="intake-0112"></a>
### The Human Factor

Kim Vicente. Sources: 208. [Amazon amazon.com.au](https://www.amazon.com.au/dp/0676974902); product 0676974902; 8 total ratings; retrieved 2026-10-23T08:05:26.606Z. Count confidence: high. Evidence: 8 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-intake-0112-0676974902.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 18.00 / 20 | 16.20 |
| S — Systems integration | 15.00 / 17 | 13.24 |
| U — Transferable strategic utility | 13.00 / 15 | 13.00 |
| M — Mechanistic and causal depth | 11.00 / 12 | 11.00 |
| D — Information density and length justification | 8.00 / 10 | 6.40 |
| R — Durability and resistance to hype | 9.00 / 9 | 9.00 |
| F — Direct domain fit | 7.00 / 7 | 7.00 |
| A — Expert authority and intellectual standing | 4.50 / 5 | 4.50 |
| N — Narrative architecture and clarity | 2.50 / 3 | 2.50 |
| P — Authorial precision and finesse | 1.50 / 2 | 1.50 |

T11=0.00; T12=0.00; H13=0.00; P14=-2.30; O15=-20.00.
Previous total 82.04 with unknown-count fallback. Revised total **62.04**, verdict **Selective**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_enguvq9h4_261023_0229.md#intake-0112.

<a id="intake-0131"></a>
### Sidewinder

Ron Westrum. Sources: 210. [Amazon amazon.com.au](https://www.amazon.com.au/dp/1591149819); product 1591149819; 64 total ratings; retrieved 2026-10-23T08:05:56.614Z. Count confidence: high. Evidence: 64 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-intake-0131-1591149819.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 18.00 / 20 | 16.20 |
| S — Systems integration | 15.00 / 17 | 13.24 |
| U — Transferable strategic utility | 13.00 / 15 | 13.00 |
| M — Mechanistic and causal depth | 11.00 / 12 | 11.00 |
| D — Information density and length justification | 8.50 / 10 | 7.22 |
| R — Durability and resistance to hype | 9.00 / 9 | 9.00 |
| F — Direct domain fit | 7.00 / 7 | 7.00 |
| A — Expert authority and intellectual standing | 4.50 / 5 | 4.50 |
| N — Narrative architecture and clarity | 2.50 / 3 | 2.50 |
| P — Authorial precision and finesse | 1.50 / 2 | 1.50 |

T11=0.00; T12=0.00; H13=-1.76; P14=-2.70; O15=-10.00.
Previous total 80.70 with unknown-count fallback. Revised total **70.70**, verdict **Recommend**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_mech1sy03cs_261023_0229.md#intake-0131.

<a id="intake-0173"></a>
### The Pentium Chronicles

Robert P. Colwell. Sources: 211. [Amazon amazon.com.au](https://www.amazon.com.au/dp/0471736171); product 0471736171; 24 total ratings; retrieved 2026-10-23T11:46:13.208Z. Count confidence: high. Evidence: 24 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-intake-0173-0471736171.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 18.00 / 20 | 16.20 |
| S — Systems integration | 14.00 / 17 | 11.53 |
| U — Transferable strategic utility | 13.00 / 15 | 13.00 |
| M — Mechanistic and causal depth | 11.00 / 12 | 11.00 |
| D — Information density and length justification | 8.50 / 10 | 7.22 |
| R — Durability and resistance to hype | 9.00 / 9 | 9.00 |
| F — Direct domain fit | 7.00 / 7 | 7.00 |
| A — Expert authority and intellectual standing | 5.00 / 5 | 5.00 |
| N — Narrative architecture and clarity | 2.50 / 3 | 2.50 |
| P — Authorial precision and finesse | 1.50 / 2 | 1.50 |

T11=0.00; T12=0.00; H13=-1.24; P14=-2.10; O15=-10.00.
Previous total 80.61 with unknown-count fallback. Revised total **70.61**, verdict **Recommend**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_hn22692281_261023_0229.md#intake-0173.

<a id="intake-0133"></a>
### The Art of Statistics

David Spiegelhalter. Sources: 210. [Amazon amazon.com.au](https://www.amazon.com.au/dp/1541675703); product 1541675703; 4,141 total ratings; retrieved 2026-10-23T08:06:56.631Z. Count confidence: high. Evidence: 4,141 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-intake-0133-1541675703.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 19.00 / 20 | 18.05 |
| S — Systems integration | 11.00 / 17 | 7.12 |
| U — Transferable strategic utility | 12.00 / 15 | 12.00 |
| M — Mechanistic and causal depth | 10.00 / 12 | 10.00 |
| D — Information density and length justification | 8.50 / 10 | 7.22 |
| R — Durability and resistance to hype | 9.00 / 9 | 9.00 |
| F — Direct domain fit | 7.00 / 7 | 7.00 |
| A — Expert authority and intellectual standing | 5.00 / 5 | 5.00 |
| N — Narrative architecture and clarity | 3.00 / 3 | 3.00 |
| P — Authorial precision and finesse | 2.00 / 2 | 2.00 |

T11=0.00; T12=0.00; H13=0.00; P14=-0.70; O15=0.00.
Previous total 79.69 with unknown-count fallback. Revised total **79.69**, verdict **Recommend**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_mech1sy03cs_261023_0229.md#intake-0133.

<a id="intake-0119"></a>
### Spacesuit: Fashioning Apollo

Nicholas de Monchaux. Sources: 208. [Amazon amazon.com.au](https://www.amazon.com.au/dp/026201520X); product 026201520X; 69 total ratings; retrieved 2026-10-23T08:07:26.641Z. Count confidence: high. Evidence: 69 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-intake-0119-026201520X.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 18.00 / 20 | 16.20 |
| S — Systems integration | 15.00 / 17 | 13.24 |
| U — Transferable strategic utility | 12.00 / 15 | 12.00 |
| M — Mechanistic and causal depth | 10.00 / 12 | 10.00 |
| D — Information density and length justification | 8.50 / 10 | 7.22 |
| R — Durability and resistance to hype | 9.00 / 9 | 9.00 |
| F — Direct domain fit | 7.00 / 7 | 7.00 |
| A — Expert authority and intellectual standing | 4.50 / 5 | 4.50 |
| N — Narrative architecture and clarity | 2.50 / 3 | 2.50 |
| P — Authorial precision and finesse | 1.50 / 2 | 1.50 |

T11=0.00; T12=0.00; H13=-2.28; P14=-1.50; O15=-10.00.
Previous total 79.38 with unknown-count fallback. Revised total **69.38**, verdict **Recommend**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_enguvq9h4_261023_0229.md#intake-0119.

<a id="intake-0090"></a>
### Creating Global Opportunities

Chris Jephson; Henning Morgen. Sources: 208. [Amazon amazon.com.au](https://www.amazon.com.au/dp/1107037816); product 1107037816; 10 total ratings; retrieved 2026-10-23T08:38:02.781Z. Count confidence: high. Evidence: 10 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-intake-0090-1107037816.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 17.00 / 20 | 14.45 |
| S — Systems integration | 15.00 / 17 | 13.24 |
| U — Transferable strategic utility | 12.00 / 15 | 12.00 |
| M — Mechanistic and causal depth | 10.00 / 12 | 10.00 |
| D — Information density and length justification | 8.00 / 10 | 6.40 |
| R — Durability and resistance to hype | 9.00 / 9 | 9.00 |
| F — Direct domain fit | 7.00 / 7 | 7.00 |
| A — Expert authority and intellectual standing | 4.00 / 5 | 4.00 |
| N — Narrative architecture and clarity | 2.50 / 3 | 2.50 |
| P — Authorial precision and finesse | 1.50 / 2 | 1.50 |

T11=0.00; T12=0.00; H13=-0.52; P14=-1.20; O15=-10.00.
Previous total 78.37 with unknown-count fallback. Revised total **68.37**, verdict **Recommend**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_enguvq9h4_261023_0229.md#intake-0090.

<a id="intake-0271"></a>
### The Sum of the People

Andrew Whitby. Sources: 212. [Amazon amazon.com.au](https://www.amazon.com.au/dp/154161934X); product 154161934X; 28 total ratings; retrieved 2026-10-23T08:39:02.787Z. Count confidence: high. Evidence: 28 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-intake-0271-154161934X.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 18.00 / 20 | 16.20 |
| S — Systems integration | 14.00 / 17 | 11.53 |
| U — Transferable strategic utility | 11.00 / 15 | 11.00 |
| M — Mechanistic and causal depth | 10.00 / 12 | 10.00 |
| D — Information density and length justification | 8.00 / 10 | 6.40 |
| R — Durability and resistance to hype | 9.00 / 9 | 9.00 |
| F — Direct domain fit | 6.00 / 7 | 6.00 |
| A — Expert authority and intellectual standing | 4.50 / 5 | 4.50 |
| N — Narrative architecture and clarity | 2.50 / 3 | 2.50 |
| P — Authorial precision and finesse | 1.50 / 2 | 1.50 |

T11=0.00; T12=0.00; H13=0.00; P14=-0.60; O15=-10.00.
Previous total 78.03 with unknown-count fallback. Revised total **68.03**, verdict **Recommend**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_smb1hg08ou_261023_0229.md#intake-0271.

<a id="intake-0345"></a>
### Making Modern Science

Peter J. Bowler; Iwan Rhys Morus. Sources: 214. [Amazon amazon.com.au](https://www.amazon.com.au/dp/0226068609); product 0226068609; 72 total ratings; retrieved 2026-10-23T08:40:02.799Z. Count confidence: high. Evidence: 72 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-intake-0345-0226068609.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 19.00 / 20 | 18.05 |
| S — Systems integration | 14.00 / 17 | 11.53 |
| U — Transferable strategic utility | 10.00 / 15 | 10.00 |
| M — Mechanistic and causal depth | 10.00 / 12 | 10.00 |
| D — Information density and length justification | 8.00 / 10 | 6.40 |
| R — Durability and resistance to hype | 9.00 / 9 | 9.00 |
| F — Direct domain fit | 6.00 / 7 | 6.00 |
| A — Expert authority and intellectual standing | 5.00 / 5 | 5.00 |
| N — Narrative architecture and clarity | 2.50 / 3 | 2.50 |
| P — Authorial precision and finesse | 1.50 / 2 | 1.50 |

T11=0.00; T12=0.00; H13=0.00; P14=-2.10; O15=-10.00.
Previous total 77.88 with unknown-count fallback. Revised total **67.88**, verdict **Recommend**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_hn30489142_261023_0229.md#intake-0345.

<a id="intake-0185"></a>
### IBM's 360 and Early 370 Systems

Emerson W. Pugh; Lyle R. Johnson; John H. Palmer. Sources: 211. [Amazon amazon.com.au](https://www.amazon.com.au/dp/0262161230); product 0262161230; 23 total ratings; retrieved 2026-10-23T08:41:02.799Z. Count confidence: high. Evidence: 23 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-intake-0185-0262161230.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 18.00 / 20 | 16.20 |
| S — Systems integration | 15.00 / 17 | 13.24 |
| U — Transferable strategic utility | 12.00 / 15 | 12.00 |
| M — Mechanistic and causal depth | 11.00 / 12 | 11.00 |
| D — Information density and length justification | 8.00 / 10 | 6.40 |
| R — Durability and resistance to hype | 9.00 / 9 | 9.00 |
| F — Direct domain fit | 7.00 / 7 | 7.00 |
| A — Expert authority and intellectual standing | 5.00 / 5 | 5.00 |
| N — Narrative architecture and clarity | 2.00 / 3 | 2.00 |
| P — Authorial precision and finesse | 1.50 / 2 | 1.50 |

T11=0.00; T12=0.00; H13=-2.04; P14=-3.50; O15=-10.00.
Previous total 77.80 with unknown-count fallback. Revised total **67.80**, verdict **Recommend**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_hn22692281_261023_0229.md#intake-0185.

<a id="intake-0120"></a>
### Honeybee Democracy

Thomas D. Seeley. Sources: 208. [Amazon amazon.com.au](https://www.amazon.com.au/dp/0691147213); product 0691147213; 961 total ratings; retrieved 2026-10-23T11:47:13.206Z. Count confidence: high. Evidence: 961 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-intake-0120-0691147213.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 19.00 / 20 | 18.05 |
| S — Systems integration | 12.00 / 17 | 8.47 |
| U — Transferable strategic utility | 11.00 / 15 | 11.00 |
| M — Mechanistic and causal depth | 11.00 / 12 | 11.00 |
| D — Information density and length justification | 8.50 / 10 | 7.22 |
| R — Durability and resistance to hype | 9.00 / 9 | 9.00 |
| F — Direct domain fit | 5.00 / 7 | 5.00 |
| A — Expert authority and intellectual standing | 5.00 / 5 | 5.00 |
| N — Narrative architecture and clarity | 2.50 / 3 | 2.50 |
| P — Authorial precision and finesse | 1.50 / 2 | 1.50 |

T11=0.00; T12=0.00; H13=0.00; P14=-1.60; O15=-5.00.
Previous total 77.15 with unknown-count fallback. Revised total **72.15**, verdict **Recommend**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_enguvq9h4_261023_0229.md#intake-0120.

<a id="intake-0046"></a>
### Across the Airless Wilds

Earl Swift. Sources: 207. [Amazon amazon.com.au](https://www.amazon.com.au/dp/0062986538); product 0062986538; 460 total ratings; retrieved 2026-10-23T08:43:02.814Z. Count confidence: high. Evidence: 460 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-intake-0046-0062986538.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 17.00 / 20 | 14.45 |
| S — Systems integration | 14.00 / 17 | 11.53 |
| U — Transferable strategic utility | 12.00 / 15 | 12.00 |
| M — Mechanistic and causal depth | 10.00 / 12 | 10.00 |
| D — Information density and length justification | 8.00 / 10 | 6.40 |
| R — Durability and resistance to hype | 9.00 / 9 | 9.00 |
| F — Direct domain fit | 7.00 / 7 | 7.00 |
| A — Expert authority and intellectual standing | 4.00 / 5 | 4.00 |
| N — Narrative architecture and clarity | 3.00 / 3 | 3.00 |
| P — Authorial precision and finesse | 1.50 / 2 | 1.50 |

T11=0.00; T12=0.00; H13=-2.16; P14=-0.50; O15=-5.00.
Previous total 76.22 with unknown-count fallback. Revised total **71.22**, verdict **Recommend**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_hn42614722_261023_0229.md#intake-0046.

<a id="intake-0040"></a>
### Fancy Bear Goes Phishing

Scott J. Shapiro. Sources: 207. [Amazon amazon.com.au](https://www.amazon.com.au/dp/1250335671); product 1250335671; 428 total ratings; retrieved 2026-10-23T08:44:02.815Z. Count confidence: high. Evidence: 428 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-intake-0040-1250335671.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 17.00 / 20 | 14.45 |
| S — Systems integration | 13.00 / 17 | 9.94 |
| U — Transferable strategic utility | 12.00 / 15 | 12.00 |
| M — Mechanistic and causal depth | 10.00 / 12 | 10.00 |
| D — Information density and length justification | 8.00 / 10 | 6.40 |
| R — Durability and resistance to hype | 8.00 / 9 | 8.00 |
| F — Direct domain fit | 7.00 / 7 | 7.00 |
| A — Expert authority and intellectual standing | 4.00 / 5 | 4.00 |
| N — Narrative architecture and clarity | 3.00 / 3 | 3.00 |
| P — Authorial precision and finesse | 1.50 / 2 | 1.50 |

T11=0.00; T12=0.00; H13=0.00; P14=-0.30; O15=-5.00.
Previous total 75.99 with unknown-count fallback. Revised total **70.99**, verdict **Recommend**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_hn42614722_261023_0229.md#intake-0040.

<a id="intake-0259"></a>
### The God Machine

James R. Chiles. Sources: 212. [Amazon amazon.com.au](https://www.amazon.com.au/dp/0553804472); product 0553804472; 34 total ratings; retrieved 2026-10-23T08:45:02.830Z. Count confidence: high. Evidence: 34 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-intake-0259-0553804472.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 17.00 / 20 | 14.45 |
| S — Systems integration | 14.00 / 17 | 11.53 |
| U — Transferable strategic utility | 11.00 / 15 | 11.00 |
| M — Mechanistic and causal depth | 10.00 / 12 | 10.00 |
| D — Information density and length justification | 8.00 / 10 | 6.40 |
| R — Durability and resistance to hype | 9.00 / 9 | 9.00 |
| F — Direct domain fit | 7.00 / 7 | 7.00 |
| A — Expert authority and intellectual standing | 4.00 / 5 | 4.00 |
| N — Narrative architecture and clarity | 3.00 / 3 | 3.00 |
| P — Authorial precision and finesse | 1.50 / 2 | 1.50 |

T11=0.00; T12=0.00; H13=0.00; P14=-1.90; O15=-10.00.
Previous total 75.98 with unknown-count fallback. Revised total **65.98**, verdict **Recommend**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_smb1hg08ou_261023_0229.md#intake-0259.

<a id="intake-0031"></a>
### Eccentric Orbits

John Bloom. Sources: 207. [Amazon amazon.com.au](https://www.amazon.com.au/dp/0802121683); product 0802121683; 432 total ratings; retrieved 2026-10-23T08:46:02.831Z. Count confidence: high. Evidence: 432 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-intake-0031-0802121683.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 16.00 / 20 | 12.80 |
| S — Systems integration | 15.00 / 17 | 13.24 |
| U — Transferable strategic utility | 12.00 / 15 | 12.00 |
| M — Mechanistic and causal depth | 10.00 / 12 | 10.00 |
| D — Information density and length justification | 8.00 / 10 | 6.40 |
| R — Durability and resistance to hype | 8.00 / 9 | 8.00 |
| F — Direct domain fit | 7.00 / 7 | 7.00 |
| A — Expert authority and intellectual standing | 4.00 / 5 | 4.00 |
| N — Narrative architecture and clarity | 3.00 / 3 | 3.00 |
| P — Authorial precision and finesse | 1.50 / 2 | 1.50 |

T11=0.00; T12=0.00; H13=-1.00; P14=-1.00; O15=-5.00.
Previous total 75.94 with unknown-count fallback. Revised total **70.94**, verdict **Recommend**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_hn42614722_261023_0229.md#intake-0031.

<a id="intake-0045"></a>
### The Rickover Effect

Theodore Rockwell. Sources: 207. [Amazon amazon.com.au](https://www.amazon.com.au/dp/0471122963); product 0471122963; 10 total ratings; retrieved 2026-10-23T08:47:02.845Z. Count confidence: high. Evidence: 10 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-intake-0045-0471122963.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 17.00 / 20 | 14.45 |
| S — Systems integration | 14.00 / 17 | 11.53 |
| U — Transferable strategic utility | 13.00 / 15 | 13.00 |
| M — Mechanistic and causal depth | 11.00 / 12 | 11.00 |
| D — Information density and length justification | 8.00 / 10 | 6.40 |
| R — Durability and resistance to hype | 9.00 / 9 | 9.00 |
| F — Direct domain fit | 7.00 / 7 | 7.00 |
| A — Expert authority and intellectual standing | 4.50 / 5 | 4.50 |
| N — Narrative architecture and clarity | 2.50 / 3 | 2.50 |
| P — Authorial precision and finesse | 1.50 / 2 | 1.50 |

T11=0.00; T12=0.00; H13=-1.60; P14=-3.40; O15=-10.00.
Previous total 75.88 with unknown-count fallback. Revised total **65.88**, verdict **Recommend**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_hn42614722_261023_0229.md#intake-0045.

<a id="nbbc2087dc6"></a>
### Show Stopper!

G. Pascal Zachary. Sources: 128, 129, 207, 211, 217. [Amazon amazon.com.au](https://www.amazon.com.au/dp/0316911135); product 0316911135; 442 total ratings; retrieved 2026-10-23T08:48:02.845Z. Count confidence: high. Evidence: 442 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-nbbc2087dc6-0316911135.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 17.00 / 20 | 14.45 |
| S — Systems integration | 14.00 / 17 | 11.53 |
| U — Transferable strategic utility | 13.00 / 15 | 13.00 |
| M — Mechanistic and causal depth | 10.00 / 12 | 10.00 |
| D — Information density and length justification | 8.00 / 10 | 6.40 |
| R — Durability and resistance to hype | 9.00 / 9 | 9.00 |
| F — Direct domain fit | 7.00 / 7 | 7.00 |
| A — Expert authority and intellectual standing | 4.00 / 5 | 4.00 |
| N — Narrative architecture and clarity | 3.00 / 3 | 3.00 |
| P — Authorial precision and finesse | 2.00 / 2 | 2.00 |

T11=0.00; T12=0.00; H13=-1.32; P14=-3.20; O15=-5.00.
Previous total 75.86 with unknown-count fallback. Revised total **70.86**, verdict **Selective**. Book-evidence confidence: moderate.
Prior content assessment: analysis/analysis_hn33792217_261020_1731.md.

<a id="intake-0010"></a>
### Sunburst and Luminary

Don Eyles. Sources: 207, 211. [Amazon amazon.com.au](https://www.amazon.com.au/dp/0986385905); product 0986385905; 285 total ratings; retrieved 2026-10-23T08:49:02.847Z. Count confidence: high. Evidence: 285 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-intake-0010-0986385905.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 17.00 / 20 | 14.45 |
| S — Systems integration | 13.00 / 17 | 9.94 |
| U — Transferable strategic utility | 12.00 / 15 | 12.00 |
| M — Mechanistic and causal depth | 11.00 / 12 | 11.00 |
| D — Information density and length justification | 8.00 / 10 | 6.40 |
| R — Durability and resistance to hype | 9.00 / 9 | 9.00 |
| F — Direct domain fit | 7.00 / 7 | 7.00 |
| A — Expert authority and intellectual standing | 4.50 / 5 | 4.50 |
| N — Narrative architecture and clarity | 2.50 / 3 | 2.50 |
| P — Authorial precision and finesse | 1.50 / 2 | 1.50 |

T11=0.00; T12=0.00; H13=-2.16; P14=-0.80; O15=-5.00.
Previous total 75.33 with unknown-count fallback. Revised total **70.33**, verdict **Recommend**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_hn42614722_261023_0229.md#intake-0010.

<a id="intake-0088"></a>
### The Toyota Way

Jeffrey K. Liker. Sources: 208, 210, 216. [Amazon amazon.com.au](https://www.amazon.com.au/dp/0071392319); product 0071392319; 2,121 total ratings; retrieved 2026-10-23T11:48:13.206Z. Count confidence: high. Evidence: 2,121 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-intake-0088-0071392319.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 16.00 / 20 | 12.80 |
| S — Systems integration | 14.00 / 17 | 11.53 |
| U — Transferable strategic utility | 13.00 / 15 | 13.00 |
| M — Mechanistic and causal depth | 10.00 / 12 | 10.00 |
| D — Information density and length justification | 8.00 / 10 | 6.40 |
| R — Durability and resistance to hype | 8.00 / 9 | 8.00 |
| F — Direct domain fit | 7.00 / 7 | 7.00 |
| A — Expert authority and intellectual standing | 4.50 / 5 | 4.50 |
| N — Narrative architecture and clarity | 2.50 / 3 | 2.50 |
| P — Authorial precision and finesse | 1.50 / 2 | 1.50 |

T11=0.00; T12=0.00; H13=0.00; P14=-2.20; O15=0.00.
Previous total 75.03 with unknown-count fallback. Revised total **75.03**, verdict **Recommend**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_enguvq9h4_261023_0229.md#intake-0088.

<a id="intake-0170"></a>
### Grace Hopper and the Invention of the Information Age

Kurt W. Beyer. Sources: 211. [Amazon amazon.com.au](https://www.amazon.com.au/dp/0262517264); product 0262517264; 115 total ratings; retrieved 2026-10-23T11:49:13.206Z. Count confidence: high. Evidence: 115 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-intake-0170-0262517264.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 18.00 / 20 | 16.20 |
| S — Systems integration | 13.00 / 17 | 9.94 |
| U — Transferable strategic utility | 11.00 / 15 | 11.00 |
| M — Mechanistic and causal depth | 10.00 / 12 | 10.00 |
| D — Information density and length justification | 8.00 / 10 | 6.40 |
| R — Durability and resistance to hype | 9.00 / 9 | 9.00 |
| F — Direct domain fit | 7.00 / 7 | 7.00 |
| A — Expert authority and intellectual standing | 4.50 / 5 | 4.50 |
| N — Narrative architecture and clarity | 2.50 / 3 | 2.50 |
| P — Authorial precision and finesse | 1.50 / 2 | 1.50 |

T11=0.00; T12=0.00; H13=-1.36; P14=-1.70; O15=-5.00.
Previous total 74.98 with unknown-count fallback. Revised total **69.98**, verdict **Recommend**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_hn22692281_261023_0229.md#intake-0170.

<a id="intake-0195"></a>
### Making Software

Andy Oram; Greg Wilson (editors). Sources: 211. [Amazon amazon.com.au](https://www.amazon.com.au/dp/0596808321); product 0596808321; 27 total ratings; retrieved 2026-10-23T11:50:13.207Z. Count confidence: high. Evidence: 27 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-intake-0195-0596808321.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 18.00 / 20 | 16.20 |
| S — Systems integration | 12.00 / 17 | 8.47 |
| U — Transferable strategic utility | 12.00 / 15 | 12.00 |
| M — Mechanistic and causal depth | 10.00 / 12 | 10.00 |
| D — Information density and length justification | 8.00 / 10 | 6.40 |
| R — Durability and resistance to hype | 8.00 / 9 | 8.00 |
| F — Direct domain fit | 7.00 / 7 | 7.00 |
| A — Expert authority and intellectual standing | 4.50 / 5 | 4.50 |
| N — Narrative architecture and clarity | 2.50 / 3 | 2.50 |
| P — Authorial precision and finesse | 1.50 / 2 | 1.50 |

T11=0.00; T12=0.00; H13=0.00; P14=-1.60; O15=-10.00.
Previous total 74.97 with unknown-count fallback. Revised total **64.97**, verdict **Selective**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_hn22692281_261023_0229.md#intake-0195.

<a id="intake-0036"></a>
### Insisting on the Impossible

Victor K. McElheny. Sources: 207. [Amazon amazon.com.au](https://www.amazon.com.au/dp/0738201901); product 0738201901; 28 total ratings; retrieved 2026-10-23T08:53:02.878Z. Count confidence: high. Evidence: 28 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-intake-0036-0738201901.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 17.00 / 20 | 14.45 |
| S — Systems integration | 14.00 / 17 | 11.53 |
| U — Transferable strategic utility | 12.00 / 15 | 12.00 |
| M — Mechanistic and causal depth | 10.00 / 12 | 10.00 |
| D — Information density and length justification | 8.00 / 10 | 6.40 |
| R — Durability and resistance to hype | 9.00 / 9 | 9.00 |
| F — Direct domain fit | 7.00 / 7 | 7.00 |
| A — Expert authority and intellectual standing | 4.50 / 5 | 4.50 |
| N — Narrative architecture and clarity | 2.50 / 3 | 2.50 |
| P — Authorial precision and finesse | 1.50 / 2 | 1.50 |

T11=0.00; T12=0.00; H13=-1.40; P14=-2.80; O15=-10.00.
Previous total 74.68 with unknown-count fallback. Revised total **64.68**, verdict **Selective**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_hn42614722_261023_0229.md#intake-0036.

<a id="intake-0274"></a>
### The Genome War

James Shreeve. Sources: 212. [Amazon amazon.com.au](https://www.amazon.com.au/dp/0345433742); product 0345433742; 86 total ratings; retrieved 2026-10-23T08:54:02.879Z. Count confidence: high. Evidence: 86 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-intake-0274-0345433742.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 17.00 / 20 | 14.45 |
| S — Systems integration | 14.00 / 17 | 11.53 |
| U — Transferable strategic utility | 11.00 / 15 | 11.00 |
| M — Mechanistic and causal depth | 10.00 / 12 | 10.00 |
| D — Information density and length justification | 8.00 / 10 | 6.40 |
| R — Durability and resistance to hype | 9.00 / 9 | 9.00 |
| F — Direct domain fit | 7.00 / 7 | 7.00 |
| A — Expert authority and intellectual standing | 4.00 / 5 | 4.00 |
| N — Narrative architecture and clarity | 3.00 / 3 | 3.00 |
| P — Authorial precision and finesse | 1.50 / 2 | 1.50 |

T11=0.00; T12=0.00; H13=-1.00; P14=-2.20; O15=-10.00.
Previous total 74.68 with unknown-count fallback. Revised total **64.68**, verdict **Selective**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_smb1hg08ou_261023_0229.md#intake-0274.

<a id="intake-0012"></a>
### The Man Who Discovered Quality

Andrea Gabor. Sources: 207. [Amazon amazon.com.au](https://www.amazon.com.au/dp/0140165282); product 0140165282; 4 total ratings; retrieved 2026-10-23T08:55:02.879Z. Count confidence: high. Evidence: 4 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-intake-0012-0140165282.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 17.00 / 20 | 14.45 |
| S — Systems integration | 14.00 / 17 | 11.53 |
| U — Transferable strategic utility | 13.00 / 15 | 13.00 |
| M — Mechanistic and causal depth | 10.00 / 12 | 10.00 |
| D — Information density and length justification | 8.00 / 10 | 6.40 |
| R — Durability and resistance to hype | 9.00 / 9 | 9.00 |
| F — Direct domain fit | 7.00 / 7 | 7.00 |
| A — Expert authority and intellectual standing | 4.00 / 5 | 4.00 |
| N — Narrative architecture and clarity | 2.50 / 3 | 2.50 |
| P — Authorial precision and finesse | 1.50 / 2 | 1.50 |

T11=0.00; T12=0.00; H13=-1.44; P14=-3.60; O15=-20.00.
Previous total 74.34 with unknown-count fallback. Revised total **54.34**, verdict **Selective**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_hn42614722_261023_0229.md#intake-0012.

<a id="intake-0174"></a>
### Crypto

Steven Levy. Sources: 211. [Amazon amazon.com.au](https://www.amazon.com.au/dp/0756777887); product 0756777887; 164 total ratings; retrieved 2026-10-23T08:56:02.879Z. Count confidence: high. Evidence: 164 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-intake-0174-0756777887.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 17.00 / 20 | 14.45 |
| S — Systems integration | 14.00 / 17 | 11.53 |
| U — Transferable strategic utility | 11.00 / 15 | 11.00 |
| M — Mechanistic and causal depth | 10.00 / 12 | 10.00 |
| D — Information density and length justification | 8.00 / 10 | 6.40 |
| R — Durability and resistance to hype | 9.00 / 9 | 9.00 |
| F — Direct domain fit | 7.00 / 7 | 7.00 |
| A — Expert authority and intellectual standing | 4.00 / 5 | 4.00 |
| N — Narrative architecture and clarity | 3.00 / 3 | 3.00 |
| P — Authorial precision and finesse | 1.50 / 2 | 1.50 |

T11=0.00; T12=0.00; H13=-1.04; P14=-2.50; O15=-5.00.
Previous total 74.34 with unknown-count fallback. Revised total **69.34**, verdict **Recommend**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_hn22692281_261023_0229.md#intake-0174.

<a id="intake-0888"></a>
### Out of the Crystal Maze

Lillian Hoddeson; Ernest Braun; Jurgen Teichmann; Spencer Weart (editors). Sources: 226. [Amazon amazon.com.au](https://www.amazon.com.au/dp/019505329X); product 019505329X; 2 total ratings; retrieved 2026-10-23T08:57:02.894Z. Count confidence: high. Evidence: 2 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-intake-0888-019505329X.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 19.00 / 20 | 18.05 |
| S — Systems integration | 14.00 / 17 | 11.53 |
| U — Transferable strategic utility | 9.00 / 15 | 9.00 |
| M — Mechanistic and causal depth | 10.00 / 12 | 10.00 |
| D — Information density and length justification | 8.50 / 10 | 7.22 |
| R — Durability and resistance to hype | 9.00 / 9 | 9.00 |
| F — Direct domain fit | 7.00 / 7 | 7.00 |
| A — Expert authority and intellectual standing | 5.00 / 5 | 5.00 |
| N — Narrative architecture and clarity | 2.00 / 3 | 2.00 |
| P — Authorial precision and finesse | 1.50 / 2 | 1.50 |

T11=0.00; T12=0.00; H13=-2.64; P14=-3.40; O15=-20.00.
Previous total 74.26 with unknown-count fallback. Revised total **54.26**, verdict **Selective**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_hsmphysics_261023_0229.md#intake-0888.

<a id="intake-0187"></a>
### The Quest for Artificial Intelligence

Nils J. Nilsson. Sources: 211. [Amazon amazon.com.au](https://www.amazon.com.au/dp/0521116392); product 0521116392; 24 total ratings; retrieved 2026-10-23T08:58:02.904Z. Count confidence: high. Evidence: 24 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-intake-0187-0521116392.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 18.00 / 20 | 16.20 |
| S — Systems integration | 13.00 / 17 | 9.94 |
| U — Transferable strategic utility | 10.00 / 15 | 10.00 |
| M — Mechanistic and causal depth | 10.00 / 12 | 10.00 |
| D — Information density and length justification | 8.00 / 10 | 6.40 |
| R — Durability and resistance to hype | 8.00 / 9 | 8.00 |
| F — Direct domain fit | 7.00 / 7 | 7.00 |
| A — Expert authority and intellectual standing | 5.00 / 5 | 5.00 |
| N — Narrative architecture and clarity | 2.50 / 3 | 2.50 |
| P — Authorial precision and finesse | 1.50 / 2 | 1.50 |

T11=0.00; T12=0.00; H13=-0.68; P14=-1.60; O15=-10.00.
Previous total 74.26 with unknown-count fallback. Revised total **64.26**, verdict **Selective**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_hn22692281_261023_0229.md#intake-0187.

<a id="intake-0055"></a>
### A Triumph of Genius

Ronald K. Fierstein. Sources: 207. [Amazon amazon.com.au](https://www.amazon.com.au/dp/1627227695); product 1627227695; 143 total ratings; retrieved 2026-10-23T08:59:02.927Z. Count confidence: high. Evidence: 143 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-intake-0055-1627227695.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 16.00 / 20 | 12.80 |
| S — Systems integration | 14.00 / 17 | 11.53 |
| U — Transferable strategic utility | 12.00 / 15 | 12.00 |
| M — Mechanistic and causal depth | 10.00 / 12 | 10.00 |
| D — Information density and length justification | 8.00 / 10 | 6.40 |
| R — Durability and resistance to hype | 9.00 / 9 | 9.00 |
| F — Direct domain fit | 7.00 / 7 | 7.00 |
| A — Expert authority and intellectual standing | 4.00 / 5 | 4.00 |
| N — Narrative architecture and clarity | 2.50 / 3 | 2.50 |
| P — Authorial precision and finesse | 1.50 / 2 | 1.50 |

T11=0.00; T12=0.00; H13=-1.40; P14=-1.10; O15=-5.00.
Previous total 74.23 with unknown-count fallback. Revised total **69.23**, verdict **Recommend**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_hn42614722_261023_0229.md#intake-0055.

<a id="intake-0092"></a>
### Project Azorian

Norman Polmar; Michael White. Sources: 208. [Amazon amazon.com.au](https://www.amazon.com.au/dp/1591146682); product 1591146682; 325 total ratings; retrieved 2026-10-23T09:00:02.928Z. Count confidence: high. Evidence: 325 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-intake-0092-1591146682.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 17.00 / 20 | 14.45 |
| S — Systems integration | 14.00 / 17 | 11.53 |
| U — Transferable strategic utility | 11.00 / 15 | 11.00 |
| M — Mechanistic and causal depth | 10.00 / 12 | 10.00 |
| D — Information density and length justification | 8.00 / 10 | 6.40 |
| R — Durability and resistance to hype | 9.00 / 9 | 9.00 |
| F — Direct domain fit | 7.00 / 7 | 7.00 |
| A — Expert authority and intellectual standing | 4.50 / 5 | 4.50 |
| N — Narrative architecture and clarity | 2.50 / 3 | 2.50 |
| P — Authorial precision and finesse | 1.50 / 2 | 1.50 |

T11=0.00; T12=0.00; H13=-2.08; P14=-1.60; O15=-5.00.
Previous total 74.20 with unknown-count fallback. Revised total **69.20**, verdict **Recommend**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_enguvq9h4_261023_0229.md#intake-0092.

<a id="intake-0151"></a>
### Colossus: The Secrets of Bletchley Park's Codebreaking Computers

B. Jack Copeland (editor). Sources: 211. [Amazon amazon.com.au](https://www.amazon.com.au/dp/0199578141); product 0199578141; 209 total ratings; retrieved 2026-10-23T09:01:02.928Z. Count confidence: high. Evidence: 209 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-intake-0151-0199578141.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 18.00 / 20 | 16.20 |
| S — Systems integration | 14.00 / 17 | 11.53 |
| U — Transferable strategic utility | 10.00 / 15 | 10.00 |
| M — Mechanistic and causal depth | 10.00 / 12 | 10.00 |
| D — Information density and length justification | 8.00 / 10 | 6.40 |
| R — Durability and resistance to hype | 9.00 / 9 | 9.00 |
| F — Direct domain fit | 7.00 / 7 | 7.00 |
| A — Expert authority and intellectual standing | 5.00 / 5 | 5.00 |
| N — Narrative architecture and clarity | 2.00 / 3 | 2.00 |
| P — Authorial precision and finesse | 1.50 / 2 | 1.50 |

T11=0.00; T12=0.00; H13=-3.24; P14=-2.00; O15=-5.00.
Previous total 73.39 with unknown-count fallback. Revised total **68.39**, verdict **Recommend**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_hn22692281_261023_0229.md#intake-0151.

<a id="intake-0202"></a>
### The Analogue Alternative

James S. Small. Sources: 211. [Amazon amazon.com.au](https://www.amazon.com.au/dp/041586299X); product 041586299X; 3 total ratings; retrieved 2026-10-23T11:51:13.221Z. Count confidence: high. Evidence: 3 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-intake-0202-041586299X.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 18.00 / 20 | 16.20 |
| S — Systems integration | 14.00 / 17 | 11.53 |
| U — Transferable strategic utility | 10.00 / 15 | 10.00 |
| M — Mechanistic and causal depth | 10.00 / 12 | 10.00 |
| D — Information density and length justification | 8.00 / 10 | 6.40 |
| R — Durability and resistance to hype | 9.00 / 9 | 9.00 |
| F — Direct domain fit | 7.00 / 7 | 7.00 |
| A — Expert authority and intellectual standing | 4.50 / 5 | 4.50 |
| N — Narrative architecture and clarity | 2.00 / 3 | 2.00 |
| P — Authorial precision and finesse | 1.50 / 2 | 1.50 |

T11=0.00; T12=0.00; H13=-2.24; P14=-2.50; O15=-20.00.
Previous total 73.39 with unknown-count fallback. Revised total **53.39**, verdict **Selective**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_hn22692281_261023_0229.md#intake-0202.

<a id="intake-0017"></a>
### When the Heavens Went on Sale

Ashlee Vance. Sources: 207. [Amazon amazon.com.au](https://www.amazon.com.au/dp/0753557762); product 0753557762; 391 total ratings; retrieved 2026-10-23T09:03:02.943Z. Count confidence: high. Evidence: 391 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-intake-0017-0753557762.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 16.00 / 20 | 12.80 |
| S — Systems integration | 14.00 / 17 | 11.53 |
| U — Transferable strategic utility | 12.00 / 15 | 12.00 |
| M — Mechanistic and causal depth | 9.00 / 12 | 9.00 |
| D — Information density and length justification | 7.50 / 10 | 5.63 |
| R — Durability and resistance to hype | 7.00 / 9 | 7.00 |
| F — Direct domain fit | 7.00 / 7 | 7.00 |
| A — Expert authority and intellectual standing | 4.00 / 5 | 4.00 |
| N — Narrative architecture and clarity | 3.00 / 3 | 3.00 |
| P — Authorial precision and finesse | 1.50 / 2 | 1.50 |

T11=0.00; T12=0.00; H13=-0.16; P14=-0.30; O15=-5.00.
Previous total 72.99 with unknown-count fallback. Revised total **67.99**, verdict **Recommend**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_hn42614722_261023_0229.md#intake-0017.

<a id="intake-0184"></a>
### IBM's Early Computers

Charles J. Bashe; Lyle R. Johnson; John H. Palmer; Emerson W. Pugh. Sources: 211. [Amazon amazon.com.au](https://www.amazon.com.au/dp/0262022257); product 0262022257; 16 total ratings; retrieved 2026-10-23T09:04:02.947Z. Count confidence: high. Evidence: 16 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-intake-0184-0262022257.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 18.00 / 20 | 16.20 |
| S — Systems integration | 14.00 / 17 | 11.53 |
| U — Transferable strategic utility | 11.00 / 15 | 11.00 |
| M — Mechanistic and causal depth | 10.00 / 12 | 10.00 |
| D — Information density and length justification | 8.00 / 10 | 6.40 |
| R — Durability and resistance to hype | 9.00 / 9 | 9.00 |
| F — Direct domain fit | 7.00 / 7 | 7.00 |
| A — Expert authority and intellectual standing | 5.00 / 5 | 5.00 |
| N — Narrative architecture and clarity | 2.00 / 3 | 2.00 |
| P — Authorial precision and finesse | 1.50 / 2 | 1.50 |

Identity check: Amazon prefixes the correct title with author surname Bashe. Byline names Bashe and the author card names coauthor Emerson W. Pugh. Matching print ISBN0262022257; English hardcover.


T11=0.00; T12=0.00; H13=-2.68; P14=-4.00; O15=-10.00.
Previous total 72.95 with unknown-count fallback. Revised total **62.95**, verdict **Selective**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_hn22692281_261023_0229.md#intake-0184.

<a id="intake-0007"></a>
### Copies in Seconds

David Owen. Sources: 207. [Amazon amazon.com.au](https://www.amazon.com.au/dp/0743251180); product 0743251180; 43 total ratings; retrieved 2026-10-23T09:05:02.961Z. Count confidence: high. Evidence: 43 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-intake-0007-0743251180.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 17.00 / 20 | 14.45 |
| S — Systems integration | 13.00 / 17 | 9.94 |
| U — Transferable strategic utility | 12.00 / 15 | 12.00 |
| M — Mechanistic and causal depth | 10.00 / 12 | 10.00 |
| D — Information density and length justification | 8.00 / 10 | 6.40 |
| R — Durability and resistance to hype | 9.00 / 9 | 9.00 |
| F — Direct domain fit | 7.00 / 7 | 7.00 |
| A — Expert authority and intellectual standing | 4.00 / 5 | 4.00 |
| N — Narrative architecture and clarity | 3.00 / 3 | 3.00 |
| P — Authorial precision and finesse | 1.50 / 2 | 1.50 |

T11=0.00; T12=0.00; H13=-2.32; P14=-2.20; O15=-10.00.
Previous total 72.77 with unknown-count fallback. Revised total **62.77**, verdict **Selective**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_hn42614722_261023_0229.md#intake-0007.

<a id="nf33271202f"></a>
### Mindware

Richard E. Nisbett. Sources: 142. [Amazon amazon.com.au](https://www.amazon.com.au/dp/0374536244); product 0374536244; 396 total ratings; retrieved 2026-10-23T11:52:13.223Z. Count confidence: high. Evidence: 396 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-nf33271202f-0374536244.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 16.00 / 20 | 12.80 |
| S — Systems integration | 12.00 / 17 | 8.47 |
| U — Transferable strategic utility | 13.00 / 15 | 13.00 |
| M — Mechanistic and causal depth | 10.00 / 12 | 10.00 |
| D — Information density | 8.00 / 10 | 6.40 |
| R — Durability | 8.00 / 9 | 8.00 |
| F — Direct domain fit | 5.00 / 7 | 5.00 |
| A — Expert authority | 5.00 / 5 | 5.00 |
| N — Narrative architecture | 3.00 / 3 | 3.00 |
| P — Authorial precision | 2.00 / 2 | 2.00 |

T11=0.00; T12=0.00; H13=0.00; P14=-1.10; O15=-5.00.
Previous total 72.57 with unknown-count fallback. Revised total **67.57**, verdict **Selective**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_ruleaudit_261020_2349.md.

<a id="intake-0091"></a>
### The Right Kind of Crazy

Adam Steltzner; William Patrick. Sources: 208. [Amazon amazon.com.au](https://www.amazon.com.au/dp/1591846927); product 1591846927; 267 total ratings; retrieved 2026-10-23T09:07:02.976Z. Count confidence: high. Evidence: 267 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-intake-0091-1591846927.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 16.00 / 20 | 12.80 |
| S — Systems integration | 13.00 / 17 | 9.94 |
| U — Transferable strategic utility | 12.00 / 15 | 12.00 |
| M — Mechanistic and causal depth | 10.00 / 12 | 10.00 |
| D — Information density and length justification | 7.50 / 10 | 5.63 |
| R — Durability and resistance to hype | 8.00 / 9 | 8.00 |
| F — Direct domain fit | 7.00 / 7 | 7.00 |
| A — Expert authority and intellectual standing | 4.00 / 5 | 4.00 |
| N — Narrative architecture and clarity | 3.00 / 3 | 3.00 |
| P — Authorial precision and finesse | 1.50 / 2 | 1.50 |

T11=0.00; T12=0.00; H13=-0.56; P14=-1.00; O15=-5.00.
Previous total 72.31 with unknown-count fallback. Revised total **67.31**, verdict **Recommend**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_enguvq9h4_261023_0229.md#intake-0091.

<a id="intake-0034"></a>
### Sweating Bullets

Robert Gaskins. Sources: 207. [Amazon amazon.com.au](https://www.amazon.com.au/dp/0985142421); product 0985142421; 28 total ratings; retrieved 2026-10-23T09:08:02.976Z. Count confidence: high. Evidence: 28 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-intake-0034-0985142421.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 16.00 / 20 | 12.80 |
| S — Systems integration | 13.00 / 17 | 9.94 |
| U — Transferable strategic utility | 12.00 / 15 | 12.00 |
| M — Mechanistic and causal depth | 10.00 / 12 | 10.00 |
| D — Information density and length justification | 8.00 / 10 | 6.40 |
| R — Durability and resistance to hype | 8.00 / 9 | 8.00 |
| F — Direct domain fit | 7.00 / 7 | 7.00 |
| A — Expert authority and intellectual standing | 4.50 / 5 | 4.50 |
| N — Narrative architecture and clarity | 2.50 / 3 | 2.50 |
| P — Authorial precision and finesse | 1.50 / 2 | 1.50 |

T11=0.00; T12=0.00; H13=-1.32; P14=-1.40; O15=-10.00.
Previous total 71.92 with unknown-count fallback. Revised total **61.92**, verdict **Selective**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_hn42614722_261023_0229.md#intake-0034.

<a id="rem-u1245"></a>
### Kicking Away the Ladder: Development Strategy in Historical Perspective

Ha-Joon Chang. Sources: 196, 197. [Amazon amazon.com.au](https://www.amazon.com.au/dp/1843310279); product 1843310279; 178 total ratings; retrieved 2026-10-23T09:09:02.977Z. Count confidence: high. Evidence: 178 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-rem-u1245-1843310279.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 16.00 / 20 | 12.80 |
| S — Systems integration | 14.00 / 17 | 11.53 |
| U — Transferable strategic utility | 12.00 / 15 | 12.00 |
| M — Mechanistic and causal depth | 9.00 / 12 | 9.00 |
| D — Information density | 8.00 / 10 | 6.40 |
| R — Durability | 8.00 / 9 | 8.00 |
| F — Direct domain fit | 6.00 / 7 | 6.00 |
| A — Expert authority | 4.50 / 5 | 4.50 |
| N — Narrative architecture | 2.50 / 3 | 2.50 |
| P — Authorial precision | 1.50 / 2 | 1.50 |

T11=0.00; T12=0.00; H13=0.00; P14=-2.40; O15=-5.00.
Previous total 71.83 with unknown-count fallback. Revised total **66.83**, verdict **Selective**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_remaining_261022_0042.md#rem-u1245.

<a id="intake-0156"></a>
### The Code

Margaret O'Mara. Sources: 211. [Amazon amazon.com.au](https://www.amazon.com.au/dp/0399562206); product 0399562206; 328 total ratings; retrieved 2026-10-23T09:10:02.992Z. Count confidence: high. Evidence: 328 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-intake-0156-0399562206.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 18.00 / 20 | 16.20 |
| S — Systems integration | 15.00 / 17 | 13.24 |
| U — Transferable strategic utility | 12.00 / 15 | 12.00 |
| M — Mechanistic and causal depth | 10.00 / 12 | 10.00 |
| D — Information density and length justification | 8.00 / 10 | 6.40 |
| R — Durability and resistance to hype | 9.00 / 9 | 9.00 |
| F — Direct domain fit | 7.00 / 7 | 7.00 |
| A — Expert authority and intellectual standing | 4.50 / 5 | 4.50 |
| N — Narrative architecture and clarity | 3.00 / 3 | 3.00 |
| P — Authorial precision and finesse | 1.50 / 2 | 1.50 |

T11=-10.00; T12=0.00; H13=-0.32; P14=-0.70; O15=-5.00.
Previous total 71.82 with unknown-count fallback. Revised total **66.82**, verdict **Recommend**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_hn22692281_261023_0229.md#intake-0156.

<a id="intake-0071"></a>
### Changing How the World Does Business

Roger Frock. Sources: 207. [Amazon amazon.com.au](https://www.amazon.com.au/dp/1576754138); product 1576754138; 131 total ratings; retrieved 2026-10-23T09:11:02.993Z. Count confidence: high. Evidence: 131 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-intake-0071-1576754138.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 16.00 / 20 | 12.80 |
| S — Systems integration | 14.00 / 17 | 11.53 |
| U — Transferable strategic utility | 12.00 / 15 | 12.00 |
| M — Mechanistic and causal depth | 10.00 / 12 | 10.00 |
| D — Information density and length justification | 7.50 / 10 | 5.63 |
| R — Durability and resistance to hype | 8.00 / 9 | 8.00 |
| F — Direct domain fit | 7.00 / 7 | 7.00 |
| A — Expert authority and intellectual standing | 4.00 / 5 | 4.00 |
| N — Narrative architecture and clarity | 2.50 / 3 | 2.50 |
| P — Authorial precision and finesse | 1.50 / 2 | 1.50 |

T11=0.00; T12=0.00; H13=-1.16; P14=-2.00; O15=-5.00.
Previous total 71.79 with unknown-count fallback. Revised total **66.79**, verdict **Recommend**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_hn42614722_261023_0229.md#intake-0071.

<a id="intake-0285"></a>
### Consider the Fork

Bee Wilson. Sources: 212. [Amazon amazon.com.au](https://www.amazon.com.au/dp/0465056970); product 0465056970; 754 total ratings; retrieved 2026-10-23T11:53:13.239Z. Count confidence: high. Evidence: 754 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-intake-0285-0465056970.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 17.00 / 20 | 14.45 |
| S — Systems integration | 13.00 / 17 | 9.94 |
| U — Transferable strategic utility | 10.00 / 15 | 10.00 |
| M — Mechanistic and causal depth | 9.00 / 12 | 9.00 |
| D — Information density and length justification | 8.50 / 10 | 7.22 |
| R — Durability and resistance to hype | 9.00 / 9 | 9.00 |
| F — Direct domain fit | 5.00 / 7 | 5.00 |
| A — Expert authority and intellectual standing | 4.00 / 5 | 4.00 |
| N — Narrative architecture and clarity | 3.00 / 3 | 3.00 |
| P — Authorial precision and finesse | 1.50 / 2 | 1.50 |

T11=0.00; T12=0.00; H13=0.00; P14=-1.40; O15=-5.00.
Previous total 71.72 with unknown-count fallback. Revised total **66.72**, verdict **Recommend**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_smb1hg08ou_261023_0229.md#intake-0285.

<a id="n9bf0b7ae1d"></a>
### Change and Variations: A History of Differential Equations to 1900

Jeremy Gray. Sources: 140. [Amazon amazon.com.au](https://www.amazon.com.au/dp/3030705749); product 3030705749; 7 total ratings; retrieved 2026-10-23T11:54:13.255Z. Count confidence: high. Evidence: 7 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-n9bf0b7ae1d-3030705749.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 18.00 / 20 | 16.20 |
| S — Systems integration | 12.00 / 17 | 8.47 |
| U — Transferable strategic utility | 10.00 / 15 | 10.00 |
| M — Mechanistic and causal depth | 11.00 / 12 | 11.00 |
| D — Information density | 8.00 / 10 | 6.40 |
| R — Durability | 9.00 / 9 | 9.00 |
| F — Direct domain fit | 7.00 / 7 | 7.00 |
| A — Expert authority | 5.00 / 5 | 5.00 |
| N — Narrative architecture | 2.00 / 3 | 2.00 |
| P — Authorial precision | 2.00 / 2 | 2.00 |

T11=0.00; T12=0.00; H13=-5.04; P14=-0.50; O15=-20.00.
Previous total 71.53 with unknown-count fallback. Revised total **51.53**, verdict **Low priority**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_ruleaudit_261020_2349.md.

<a id="intake-0013"></a>
### Dreaming in Code

Scott Rosenberg. Sources: 207, 211, 219. [Amazon amazon.com.au](https://www.amazon.com.au/dp/1400082471); product 1400082471; 169 total ratings; retrieved 2026-10-23T09:14:03.009Z. Count confidence: high. Evidence: 169 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-intake-0013-1400082471.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 17.00 / 20 | 14.45 |
| S — Systems integration | 12.00 / 17 | 8.47 |
| U — Transferable strategic utility | 12.00 / 15 | 12.00 |
| M — Mechanistic and causal depth | 10.00 / 12 | 10.00 |
| D — Information density and length justification | 7.50 / 10 | 5.63 |
| R — Durability and resistance to hype | 8.00 / 9 | 8.00 |
| F — Direct domain fit | 7.00 / 7 | 7.00 |
| A — Expert authority and intellectual standing | 4.00 / 5 | 4.00 |
| N — Narrative architecture and clarity | 3.00 / 3 | 3.00 |
| P — Authorial precision and finesse | 1.50 / 2 | 1.50 |

T11=0.00; T12=0.00; H13=-0.80; P14=-1.90; O15=-5.00.
Previous total 71.35 with unknown-count fallback. Revised total **66.35**, verdict **Recommend**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_hn42614722_261023_0229.md#intake-0013.

<a id="g0611"></a>
### Metamagical Themas

Douglas Hofstadter. Sources: 118. [Amazon amazon.com.au](https://www.amazon.com.au/dp/0553342797); product 0553342797; 107 total ratings; retrieved 2026-10-23T09:15:03.009Z. Count confidence: high. Evidence: 107 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-g0611-0553342797.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 17.00 / 20 | 14.45 |
| S — Systems integration | 12.00 / 17 | 8.47 |
| U — Transferable strategic utility | 12.00 / 15 | 12.00 |
| M — Mechanistic and causal depth | 9.00 / 12 | 9.00 |
| D — Information density | 8.00 / 10 | 6.40 |
| R — Durability | 9.00 / 9 | 9.00 |
| F — Direct domain fit | 7.00 / 7 | 7.00 |
| A — Expert authority | 5.00 / 5 | 5.00 |
| N — Narrative architecture | 2.00 / 3 | 2.00 |
| P — Authorial precision | 2.00 / 2 | 2.00 |

T11=0.00; T12=0.00; H13=0.00; P14=-4.10; O15=-5.00.
Previous total 71.22 with unknown-count fallback. Revised total **66.22**, verdict **Selective**. Book-evidence confidence: low.
Prior content assessment: analysis_glaspsci_261019_0144.md.

<a id="intake-0201"></a>
### Fatal Defect

Ivars Peterson. Sources: 211. [Amazon amazon.com.au](https://www.amazon.com.au/dp/0679740279); product 0679740279; 4 total ratings; retrieved 2026-10-23T09:16:03.024Z. Count confidence: high. Evidence: 4 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-intake-0201-0679740279.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 17.00 / 20 | 14.45 |
| S — Systems integration | 12.00 / 17 | 8.47 |
| U — Transferable strategic utility | 11.00 / 15 | 11.00 |
| M — Mechanistic and causal depth | 10.00 / 12 | 10.00 |
| D — Information density and length justification | 8.00 / 10 | 6.40 |
| R — Durability and resistance to hype | 9.00 / 9 | 9.00 |
| F — Direct domain fit | 7.00 / 7 | 7.00 |
| A — Expert authority and intellectual standing | 4.00 / 5 | 4.00 |
| N — Narrative architecture and clarity | 2.50 / 3 | 2.50 |
| P — Authorial precision and finesse | 1.50 / 2 | 1.50 |

T11=0.00; T12=0.00; H13=0.00; P14=-3.10; O15=-20.00.
Previous total 71.22 with unknown-count fallback. Revised total **51.22**, verdict **Selective**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_hn22692281_261023_0229.md#intake-0201.

<a id="n8e9a375228"></a>
### Ripples in Spacetime

Govert Schilling. Sources: 139. [Amazon amazon.com.au](https://www.amazon.com.au/dp/0674237749); product 0674237749; 116 total ratings; retrieved 2026-10-23T09:18:03.031Z. Count confidence: high. Evidence: 116 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-n8e9a375228-0674237749.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 17.00 / 20 | 14.45 |
| S — Systems integration | 13.00 / 17 | 9.94 |
| U — Transferable strategic utility | 9.00 / 15 | 9.00 |
| M — Mechanistic and causal depth | 9.00 / 12 | 9.00 |
| D — Information density and length justification | 8.00 / 10 | 6.40 |
| R — Durability and resistance to hype | 8.00 / 9 | 8.00 |
| F — Direct domain fit | 7.00 / 7 | 7.00 |
| A — Expert authority and intellectual standing | 4.00 / 5 | 4.00 |
| N — Narrative architecture and clarity | 3.00 / 3 | 3.00 |
| P — Authorial precision and finesse | 1.50 / 2 | 1.50 |

T11=0.00; T12=0.00; H13=-0.44; P14=-0.90; O15=-5.00.
Previous total 70.95 with unknown-count fallback. Revised total **65.95**, verdict **Selective**. Book-evidence confidence: moderate.
Prior content assessment: analysis/analysis_uncwbooks_261020_1731.md.

<a id="intake-0159"></a>
### Minitel: Welcome to the Internet

Julien Mailland; Kevin Driscoll. Sources: 211. [Amazon amazon.com.au](https://www.amazon.com.au/dp/0262036223); product 0262036223; 27 total ratings; retrieved 2026-10-23T09:19:03.042Z. Count confidence: high. Evidence: 27 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-intake-0159-0262036223.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 18.00 / 20 | 16.20 |
| S — Systems integration | 15.00 / 17 | 13.24 |
| U — Transferable strategic utility | 12.00 / 15 | 12.00 |
| M — Mechanistic and causal depth | 10.00 / 12 | 10.00 |
| D — Information density and length justification | 8.00 / 10 | 6.40 |
| R — Durability and resistance to hype | 9.00 / 9 | 9.00 |
| F — Direct domain fit | 7.00 / 7 | 7.00 |
| A — Expert authority and intellectual standing | 4.50 / 5 | 4.50 |
| N — Narrative architecture and clarity | 2.50 / 3 | 2.50 |
| P — Authorial precision and finesse | 1.50 / 2 | 1.50 |

T11=-10.00; T12=0.00; H13=-0.56; P14=-0.90; O15=-10.00.
Previous total 70.88 with unknown-count fallback. Revised total **60.88**, verdict **Selective**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_hn22692281_261023_0229.md#intake-0159.

<a id="intake-0095"></a>
### Sonic Wind

Craig Ryan. Sources: 208. [Amazon amazon.com.au](https://www.amazon.com.au/dp/0871406772); product 0871406772; 83 total ratings; retrieved 2026-10-23T09:20:03.057Z. Count confidence: high. Evidence: 83 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-intake-0095-0871406772.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 17.00 / 20 | 14.45 |
| S — Systems integration | 12.00 / 17 | 8.47 |
| U — Transferable strategic utility | 10.00 / 15 | 10.00 |
| M — Mechanistic and causal depth | 9.00 / 12 | 9.00 |
| D — Information density and length justification | 8.00 / 10 | 6.40 |
| R — Durability and resistance to hype | 9.00 / 9 | 9.00 |
| F — Direct domain fit | 7.00 / 7 | 7.00 |
| A — Expert authority and intellectual standing | 4.00 / 5 | 4.00 |
| N — Narrative architecture and clarity | 3.00 / 3 | 3.00 |
| P — Authorial precision and finesse | 1.50 / 2 | 1.50 |

T11=0.00; T12=0.00; H13=-1.08; P14=-1.10; O15=-10.00.
Previous total 70.64 with unknown-count fallback. Revised total **60.64**, verdict **Selective**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_enguvq9h4_261023_0229.md#intake-0095.

<a id="rem-u0922"></a>
### The Art of Strategy: A Game Theorist's Guide to Success in Business and Life

Avinash K. Dixit, Barry J. Nalebuff. Sources: 188. [Amazon amazon.com.au](https://www.amazon.com.au/dp/0393062430); product 0393062430; 1,448 total ratings; retrieved 2026-10-23T09:21:03.058Z. Count confidence: high. Evidence: 1,448 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-rem-u0922-0393062430.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 16.00 / 20 | 12.80 |
| S — Systems integration | 11.00 / 17 | 7.12 |
| U — Transferable strategic utility | 13.00 / 15 | 13.00 |
| M — Mechanistic and causal depth | 10.00 / 12 | 10.00 |
| D — Information density | 8.00 / 10 | 6.40 |
| R — Durability | 9.00 / 9 | 9.00 |
| F — Direct domain fit | 5.00 / 7 | 5.00 |
| A — Expert authority | 5.00 / 5 | 5.00 |
| N — Narrative architecture | 2.50 / 3 | 2.50 |
| P — Authorial precision | 1.50 / 2 | 1.50 |

T11=0.00; T12=0.00; H13=0.00; P14=-1.80; O15=0.00.
Previous total 70.52 with unknown-count fallback. Revised total **70.52**, verdict **Selective**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_remaining_261022_0042.md#rem-u0922.

<a id="intake-0018"></a>
### The Founders

Jimmy Soni. Sources: 207. [Amazon amazon.com.au](https://www.amazon.com.au/dp/150119724X); product 150119724X; 1,003 total ratings; retrieved 2026-10-23T11:55:13.254Z. Count confidence: high. Evidence: 1,003 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-intake-0018-150119724X.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 16.00 / 20 | 12.80 |
| S — Systems integration | 13.00 / 17 | 9.94 |
| U — Transferable strategic utility | 11.00 / 15 | 11.00 |
| M — Mechanistic and causal depth | 9.00 / 12 | 9.00 |
| D — Information density and length justification | 7.50 / 10 | 5.63 |
| R — Durability and resistance to hype | 8.00 / 9 | 8.00 |
| F — Direct domain fit | 7.00 / 7 | 7.00 |
| A — Expert authority and intellectual standing | 4.00 / 5 | 4.00 |
| N — Narrative architecture and clarity | 3.00 / 3 | 3.00 |
| P — Authorial precision and finesse | 1.50 / 2 | 1.50 |

T11=0.00; T12=0.00; H13=-0.96; P14=-0.40; O15=0.00.
Previous total 70.51 with unknown-count fallback. Revised total **70.51**, verdict **Recommend**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_hn42614722_261023_0229.md#intake-0018.

<a id="intake-0326"></a>
### A Brief History of Mathematical Thought

Luke Heaton. Sources: 214. [Amazon amazon.com.au](https://www.amazon.com.au/dp/0190621761); product 0190621761; 9 total ratings; retrieved 2026-10-23T09:23:03.071Z. Count confidence: high. Evidence: 9 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-intake-0326-0190621761.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 17.00 / 20 | 14.45 |
| S — Systems integration | 12.00 / 17 | 8.47 |
| U — Transferable strategic utility | 9.00 / 15 | 9.00 |
| M — Mechanistic and causal depth | 9.00 / 12 | 9.00 |
| D — Information density and length justification | 8.00 / 10 | 6.40 |
| R — Durability and resistance to hype | 9.00 / 9 | 9.00 |
| F — Direct domain fit | 7.00 / 7 | 7.00 |
| A — Expert authority and intellectual standing | 4.00 / 5 | 4.00 |
| N — Narrative architecture and clarity | 2.50 / 3 | 2.50 |
| P — Authorial precision and finesse | 1.50 / 2 | 1.50 |

T11=0.00; T12=0.00; H13=0.00; P14=-1.10; O15=-20.00.
Previous total 70.22 with unknown-count fallback. Revised total **50.22**, verdict **Selective**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_hn30489142_261023_0229.md#intake-0326.

<a id="n90b9134cc6"></a>
### Bayesian Rationality: The Probabilistic Approach to Human Reasoning

Mike Oaksford; Nick Chater. Sources: 142. [Amazon amazon.com.au](https://www.amazon.com.au/dp/0198524501); product 0198524501; 1 total ratings; retrieved 2026-10-23T09:24:03.073Z. Count confidence: high. Evidence: 1 global rating. Snapshot: [saved response](../data/metadata_261023/raw/amazon-n90b9134cc6-0198524501.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 17.00 / 20 | 14.45 |
| S — Systems integration | 11.00 / 17 | 7.12 |
| U — Transferable strategic utility | 11.00 / 15 | 11.00 |
| M — Mechanistic and causal depth | 11.00 / 12 | 11.00 |
| D — Information density | 8.00 / 10 | 6.40 |
| R — Durability | 8.00 / 9 | 8.00 |
| F — Direct domain fit | 5.00 / 7 | 5.00 |
| A — Expert authority | 5.00 / 5 | 5.00 |
| N — Narrative architecture | 2.00 / 3 | 2.00 |
| P — Authorial precision | 2.00 / 2 | 2.00 |

Identity check: Title and subtitle match. Amazon names both Oaksford and Chater and its author card gives M. Oaksford, consistent with Mike Oaksford. Matching hardcover ISBN0198524501; English.


T11=0.00; T12=0.00; H13=0.00; P14=-1.90; O15=-20.00.
Previous total 70.07 with unknown-count fallback. Revised total **50.07**, verdict **Low priority**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_ruleaudit_261020_2349.md.

<a id="intake-0015"></a>
### How to Make a Spaceship

Julian Guthrie. Sources: 207. [Amazon amazon.com.au](https://www.amazon.com.au/dp/1594206724); product 1594206724; 309 total ratings; retrieved 2026-10-23T09:25:03.073Z. Count confidence: high. Evidence: 309 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-intake-0015-1594206724.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 16.00 / 20 | 12.80 |
| S — Systems integration | 13.00 / 17 | 9.94 |
| U — Transferable strategic utility | 11.00 / 15 | 11.00 |
| M — Mechanistic and causal depth | 9.00 / 12 | 9.00 |
| D — Information density and length justification | 7.50 / 10 | 5.63 |
| R — Durability and resistance to hype | 8.00 / 9 | 8.00 |
| F — Direct domain fit | 7.00 / 7 | 7.00 |
| A — Expert authority and intellectual standing | 4.00 / 5 | 4.00 |
| N — Narrative architecture and clarity | 3.00 / 3 | 3.00 |
| P — Authorial precision and finesse | 1.50 / 2 | 1.50 |

T11=0.00; T12=0.00; H13=-0.88; P14=-1.00; O15=-5.00.
Previous total 69.99 with unknown-count fallback. Revised total **64.99**, verdict **Selective**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_hn42614722_261023_0229.md#intake-0015.

<a id="rem-u1733"></a>
### Fab: From Personal Computers to Personal Fabrication

Neil Gershenfeld. Sources: 193. [Amazon amazon.com.au](https://www.amazon.com.au/dp/0465027458); product 0465027458; 32 total ratings; retrieved 2026-10-23T09:26:03.084Z. Count confidence: high. Evidence: 32 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-rem-u1733-0465027458.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 16.00 / 20 | 12.80 |
| S — Systems integration | 14.00 / 17 | 11.53 |
| U — Transferable strategic utility | 11.00 / 15 | 11.00 |
| M — Mechanistic and causal depth | 8.00 / 12 | 8.00 |
| D — Information density | 7.50 / 10 | 5.63 |
| R — Durability | 7.00 / 9 | 7.00 |
| F — Direct domain fit | 7.00 / 7 | 7.00 |
| A — Expert authority | 5.00 / 5 | 5.00 |
| N — Narrative architecture | 2.50 / 3 | 2.50 |
| P — Authorial precision | 1.50 / 2 | 1.50 |

T11=0.00; T12=0.00; H13=0.00; P14=-2.10; O15=-10.00.
Previous total 69.85 with unknown-count fallback. Revised total **59.85**, verdict **Low priority**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_remaining_261022_0042.md#rem-u1733.

<a id="intake-0331"></a>
### The Best of All Possible Worlds

Ivar Ekeland. Sources: 214. [Amazon amazon.com.au](https://www.amazon.com.au/dp/0226199959); product 0226199959; 8 total ratings; retrieved 2026-10-23T09:27:03.090Z. Count confidence: high. Evidence: 8 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-intake-0331-0226199959.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 17.00 / 20 | 14.45 |
| S — Systems integration | 12.00 / 17 | 8.47 |
| U — Transferable strategic utility | 10.00 / 15 | 10.00 |
| M — Mechanistic and causal depth | 9.00 / 12 | 9.00 |
| D — Information density and length justification | 8.00 / 10 | 6.40 |
| R — Durability and resistance to hype | 9.00 / 9 | 9.00 |
| F — Direct domain fit | 6.00 / 7 | 6.00 |
| A — Expert authority and intellectual standing | 4.50 / 5 | 4.50 |
| N — Narrative architecture and clarity | 2.50 / 3 | 2.50 |
| P — Authorial precision and finesse | 1.50 / 2 | 1.50 |

T11=0.00; T12=0.00; H13=0.00; P14=-2.00; O15=-20.00.
Previous total 69.82 with unknown-count fallback. Revised total **49.82**, verdict **Low priority**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_hn30489142_261023_0229.md#intake-0331.

<a id="intake-0067"></a>
### A Man on the Moon

Andrew Chaikin. Sources: 207. [Amazon amazon.com.au](https://www.amazon.com.au/dp/0140097066); product 0140097066; 1,169 total ratings; retrieved 2026-10-23T09:28:03.091Z. Count confidence: high. Evidence: 1,169 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-intake-0067-0140097066.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 18.00 / 20 | 16.20 |
| S — Systems integration | 12.00 / 17 | 8.47 |
| U — Transferable strategic utility | 10.00 / 15 | 10.00 |
| M — Mechanistic and causal depth | 9.00 / 12 | 9.00 |
| D — Information density and length justification | 8.00 / 10 | 6.40 |
| R — Durability and resistance to hype | 9.00 / 9 | 9.00 |
| F — Direct domain fit | 7.00 / 7 | 7.00 |
| A — Expert authority and intellectual standing | 4.50 / 5 | 4.50 |
| N — Narrative architecture and clarity | 3.00 / 3 | 3.00 |
| P — Authorial precision and finesse | 1.50 / 2 | 1.50 |

T11=0.00; T12=0.00; H13=-2.16; P14=-3.20; O15=0.00.
Previous total 69.71 with unknown-count fallback. Revised total **69.71**, verdict **Recommend**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_hn42614722_261023_0229.md#intake-0067.

<a id="bgaa87d10c3d"></a>
### The General Theory of Employment, Interest, and Money

John Maynard Keynes. Sources: 150. [Amazon amazon.com.au](https://www.amazon.com.au/dp/0230004768); product 0230004768; 1,105 total ratings; retrieved 2026-10-23T09:32:12.445Z. Count confidence: high. Evidence: 1,105 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-bgaa87d10c3d-0230004768.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 17.00 / 20 | 14.45 |
| S — Systems integration | 14.00 / 17 | 11.53 |
| U — Transferable strategic utility | 13.00 / 15 | 13.00 |
| M — Mechanistic and causal depth | 11.00 / 12 | 11.00 |
| D — Information density | 8.00 / 10 | 6.40 |
| R — Durability | 9.00 / 9 | 9.00 |
| F — Direct domain fit | 5.00 / 7 | 5.00 |
| A — Expert authority | 5.00 / 5 | 5.00 |
| N — Narrative architecture | 1.80 / 3 | 1.80 |
| P — Authorial precision | 1.50 / 2 | 1.50 |

T11=0.00; T12=0.00; H13=0.00; P14=-9.00; O15=0.00.
Previous total 69.68 with unknown-count fallback. Revised total **69.68**, verdict **Selective**. Book-evidence confidence: moderate.
Prior content assessment: analysis/analysis_bgwarrenbuff_261021_0210.md.

<a id="intake-0343"></a>
### From Clockwork to Crapshoot

Roger G. Newton. Sources: 214. [Amazon amazon.com.au](https://www.amazon.com.au/dp/0674023374); product 0674023374; 2 total ratings; retrieved 2026-10-23T09:33:12.446Z. Count confidence: high. Evidence: 2 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-intake-0343-0674023374.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 18.00 / 20 | 16.20 |
| S — Systems integration | 12.00 / 17 | 8.47 |
| U — Transferable strategic utility | 8.00 / 15 | 8.00 |
| M — Mechanistic and causal depth | 9.00 / 12 | 9.00 |
| D — Information density and length justification | 8.00 / 10 | 6.40 |
| R — Durability and resistance to hype | 9.00 / 9 | 9.00 |
| F — Direct domain fit | 6.00 / 7 | 6.00 |
| A — Expert authority and intellectual standing | 4.50 / 5 | 4.50 |
| N — Narrative architecture and clarity | 2.50 / 3 | 2.50 |
| P — Authorial precision and finesse | 1.50 / 2 | 1.50 |

T11=0.00; T12=0.00; H13=0.00; P14=-1.90; O15=-20.00.
Previous total 69.67 with unknown-count fallback. Revised total **49.67**, verdict **Low priority**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_hn30489142_261023_0229.md#intake-0343.

<a id="intake-0406"></a>
### The Birth of Plenty

William J. Bernstein. Sources: 215. [Amazon amazon.com.au](https://www.amazon.com.au/dp/0071421920); product 0071421920; 193 total ratings; retrieved 2026-10-23T09:34:12.446Z. Count confidence: high. Evidence: 193 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-intake-0406-0071421920.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 16.00 / 20 | 12.80 |
| S — Systems integration | 14.00 / 17 | 11.53 |
| U — Transferable strategic utility | 10.00 / 15 | 10.00 |
| M — Mechanistic and causal depth | 9.00 / 12 | 9.00 |
| D — Information density and length justification | 8.00 / 10 | 6.40 |
| R — Durability and resistance to hype | 9.00 / 9 | 9.00 |
| F — Direct domain fit | 5.00 / 7 | 5.00 |
| A — Expert authority and intellectual standing | 4.00 / 5 | 4.00 |
| N — Narrative architecture and clarity | 2.50 / 3 | 2.50 |
| P — Authorial precision and finesse | 1.50 / 2 | 1.50 |

T11=0.00; T12=0.00; H13=0.00; P14=-2.20; O15=-5.00.
Previous total 69.53 with unknown-count fallback. Revised total **64.53**, verdict **Selective**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_hn15155833_261023_0229.md#intake-0406.

<a id="intake-0033"></a>
### Piloting Palm

Andrea Butter; David Pogue. Sources: 207. [Amazon amazon.com.au](https://www.amazon.com.au/dp/0471089656); product 0471089656; 14 total ratings; retrieved 2026-10-23T09:35:12.446Z. Count confidence: high. Evidence: 14 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-intake-0033-0471089656.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 16.00 / 20 | 12.80 |
| S — Systems integration | 13.00 / 17 | 9.94 |
| U — Transferable strategic utility | 12.00 / 15 | 12.00 |
| M — Mechanistic and causal depth | 9.00 / 12 | 9.00 |
| D — Information density and length justification | 7.50 / 10 | 5.63 |
| R — Durability and resistance to hype | 8.00 / 9 | 8.00 |
| F — Direct domain fit | 7.00 / 7 | 7.00 |
| A — Expert authority and intellectual standing | 4.00 / 5 | 4.00 |
| N — Narrative architecture and clarity | 3.00 / 3 | 3.00 |
| P — Authorial precision and finesse | 1.50 / 2 | 1.50 |

T11=0.00; T12=0.00; H13=-1.00; P14=-2.40; O15=-10.00.
Previous total 69.47 with unknown-count fallback. Revised total **59.47**, verdict **Selective**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_hn42614722_261023_0229.md#intake-0033.

<a id="intake-0027"></a>
### Absolute Zero and the Conquest of Cold

Tom Shachtman. Sources: 207. [Amazon amazon.com.au](https://www.amazon.com.au/dp/0618082395); product 0618082395; 53 total ratings; retrieved 2026-10-23T09:36:12.447Z. Count confidence: high. Evidence: 53 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-intake-0027-0618082395.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 16.00 / 20 | 12.80 |
| S — Systems integration | 13.00 / 17 | 9.94 |
| U — Transferable strategic utility | 10.00 / 15 | 10.00 |
| M — Mechanistic and causal depth | 9.00 / 12 | 9.00 |
| D — Information density and length justification | 8.00 / 10 | 6.40 |
| R — Durability and resistance to hype | 9.00 / 9 | 9.00 |
| F — Direct domain fit | 7.00 / 7 | 7.00 |
| A — Expert authority and intellectual standing | 4.00 / 5 | 4.00 |
| N — Narrative architecture and clarity | 2.50 / 3 | 2.50 |
| P — Authorial precision and finesse | 1.50 / 2 | 1.50 |

T11=0.00; T12=0.00; H13=0.00; P14=-2.70; O15=-10.00.
Previous total 69.44 with unknown-count fallback. Revised total **59.44**, verdict **Selective**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_hn42614722_261023_0229.md#intake-0027.

<a id="intake-0552"></a>
### The Seven Sisters

Anthony Sampson. Sources: 216. [Amazon amazon.com.au](https://www.amazon.com.au/dp/0553242377); product 0553242377; 66 total ratings; retrieved 2026-10-23T11:56:13.256Z. Count confidence: high. Evidence: 66 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-intake-0552-0553242377.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 17.00 / 20 | 14.45 |
| S — Systems integration | 15.00 / 17 | 13.24 |
| U — Transferable strategic utility | 10.00 / 15 | 10.00 |
| M — Mechanistic and causal depth | 9.00 / 12 | 9.00 |
| D — Information density and length justification | 8.00 / 10 | 6.40 |
| R — Durability and resistance to hype | 9.00 / 9 | 9.00 |
| F — Direct domain fit | 6.00 / 7 | 6.00 |
| A — Expert authority and intellectual standing | 4.50 / 5 | 4.50 |
| N — Narrative architecture and clarity | 2.50 / 3 | 2.50 |
| P — Authorial precision and finesse | 1.50 / 2 | 1.50 |

T11=0.00; T12=0.00; H13=-2.08; P14=-5.10; O15=-10.00.
Previous total 69.41 with unknown-count fallback. Revised total **59.41**, verdict **Selective**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_hn25317963_261023_0229.md#intake-0552.

<a id="rem-u1086"></a>
### Accelerated Expertise: Training for High Proficiency in a Complex World

Robert R. Hoffman; Paul Ward; Paul J. Feltovich; Lia DiBello; Stephen M. Fiore; Dee H. Andrews. Sources: 192. [Amazon amazon.com.au](https://www.amazon.com.au/dp/184872652X); product 184872652X; 13 total ratings; retrieved 2026-10-23T09:38:12.463Z. Count confidence: high. Evidence: 13 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-rem-u1086-184872652X.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 17.00 / 20 | 14.45 |
| S — Systems integration | 11.00 / 17 | 7.12 |
| U — Transferable strategic utility | 12.00 / 15 | 12.00 |
| M — Mechanistic and causal depth | 9.00 / 12 | 9.00 |
| D — Information density | 8.00 / 10 | 6.40 |
| R — Durability | 8.00 / 9 | 8.00 |
| F — Direct domain fit | 5.00 / 7 | 5.00 |
| A — Expert authority | 4.50 / 5 | 4.50 |
| N — Narrative architecture | 2.50 / 3 | 2.50 |
| P — Authorial precision | 1.50 / 2 | 1.50 |

T11=0.00; T12=0.00; H13=0.00; P14=-1.30; O15=-10.00.
Previous total 69.17 with unknown-count fallback. Revised total **59.17**, verdict **Low priority**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_remaining_261022_0042.md#rem-u1086.

<a id="intake-0079"></a>
### The Evening Star

Henry S. F. Cooper Jr.. Sources: 207. [Amazon amazon.com.au](https://www.amazon.com.au/dp/0374150001); product 0374150001; 1 total ratings; retrieved 2026-10-23T09:39:12.463Z. Count confidence: high. Evidence: 1 global rating. Snapshot: [saved response](../data/metadata_261023/raw/amazon-intake-0079-0374150001.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 17.00 / 20 | 14.45 |
| S — Systems integration | 13.00 / 17 | 9.94 |
| U — Transferable strategic utility | 11.00 / 15 | 11.00 |
| M — Mechanistic and causal depth | 9.00 / 12 | 9.00 |
| D — Information density and length justification | 8.00 / 10 | 6.40 |
| R — Durability and resistance to hype | 8.00 / 9 | 8.00 |
| F — Direct domain fit | 7.00 / 7 | 7.00 |
| A — Expert authority and intellectual standing | 4.00 / 5 | 4.00 |
| N — Narrative architecture and clarity | 2.50 / 3 | 2.50 |
| P — Authorial precision and finesse | 1.50 / 2 | 1.50 |

T11=0.00; T12=0.00; H13=-1.36; P14=-3.30; O15=-20.00.
Previous total 69.13 with unknown-count fallback. Revised total **49.13**, verdict **Low priority**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_hn42614722_261023_0229.md#intake-0079.

<a id="intake-0125"></a>
### Invention: The Care and Feeding of Ideas

Norbert Wiener. Sources: 208. [Amazon amazon.com.au](https://www.amazon.com.au/dp/0262731118); product 0262731118; 4 total ratings; retrieved 2026-10-23T09:40:12.463Z. Count confidence: high. Evidence: 4 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-intake-0125-0262731118.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 16.00 / 20 | 12.80 |
| S — Systems integration | 13.00 / 17 | 9.94 |
| U — Transferable strategic utility | 11.00 / 15 | 11.00 |
| M — Mechanistic and causal depth | 9.00 / 12 | 9.00 |
| D — Information density and length justification | 7.50 / 10 | 5.63 |
| R — Durability and resistance to hype | 9.00 / 9 | 9.00 |
| F — Direct domain fit | 7.00 / 7 | 7.00 |
| A — Expert authority and intellectual standing | 4.50 / 5 | 4.50 |
| N — Narrative architecture and clarity | 2.00 / 3 | 2.00 |
| P — Authorial precision and finesse | 1.50 / 2 | 1.50 |

T11=0.00; T12=0.00; H13=0.00; P14=-3.30; O15=-20.00.
Previous total 69.07 with unknown-count fallback. Revised total **49.07**, verdict **Low priority**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_enguvq9h4_261023_0229.md#intake-0125.

<a id="n503d2e0dda"></a>
### A History of Mathematics: From Mesopotamia to Modernity

Luke Hodgkin. Sources: 139. [Amazon amazon.com.au](https://www.amazon.com.au/dp/0198529376); product 0198529376; 4 total ratings; retrieved 2026-10-23T09:41:12.478Z. Count confidence: high. Evidence: 4 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-n503d2e0dda-0198529376.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 17.00 / 20 | 14.45 |
| S — Systems integration | 11.00 / 17 | 7.12 |
| U — Transferable strategic utility | 9.00 / 15 | 9.00 |
| M — Mechanistic and causal depth | 9.00 / 12 | 9.00 |
| D — Information density | 8.00 / 10 | 6.40 |
| R — Durability | 9.00 / 9 | 9.00 |
| F — Direct domain fit | 7.00 / 7 | 7.00 |
| A — Expert authority | 4.00 / 5 | 4.00 |
| N — Narrative architecture | 3.00 / 3 | 3.00 |
| P — Authorial precision | 2.00 / 2 | 2.00 |

T11=0.00; T12=0.00; H13=0.00; P14=-2.10; O15=-20.00.
Previous total 68.87 with unknown-count fallback. Revised total **48.87**, verdict **Poor fit**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_ruleaudit_261020_2349.md.

<a id="rem-u1759"></a>
### Now It Can Be Told

Leslie R. Groves. Sources: 193. [Amazon amazon.com.au](https://www.amazon.com.au/dp/0306801892); product 0306801892; 551 total ratings; retrieved 2026-10-23T09:43:12.494Z. Count confidence: high. Evidence: 551 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-rem-u1759-0306801892.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 16.00 / 20 | 12.80 |
| S — Systems integration | 15.00 / 17 | 13.24 |
| U — Transferable strategic utility | 12.00 / 15 | 12.00 |
| M — Mechanistic and causal depth | 9.00 / 12 | 9.00 |
| D — Information density | 8.00 / 10 | 6.40 |
| R — Durability | 9.00 / 9 | 9.00 |
| F — Direct domain fit | 7.00 / 7 | 7.00 |
| A — Expert authority | 5.00 / 5 | 5.00 |
| N — Narrative architecture | 2.50 / 3 | 2.50 |
| P — Authorial precision | 1.50 / 2 | 1.50 |

T11=0.00; T12=0.00; H13=-3.24; P14=-6.40; O15=-5.00.
Previous total 68.80 with unknown-count fallback. Revised total **63.80**, verdict **Low priority**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_remaining_261022_0042.md#rem-u1759.

<a id="nc4288eda89"></a>
### Computation and Human Experience

Philip E. Agre. Sources: 130. [Amazon amazon.com.au](https://www.amazon.com.au/dp/052138432X); product 052138432X; 1 total ratings; retrieved 2026-10-23T09:44:12.494Z. Count confidence: high. Evidence: 1 global rating. Snapshot: [saved response](../data/metadata_261023/raw/amazon-nc4288eda89-052138432X.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 16.00 / 20 | 12.80 |
| S — Systems integration | 13.00 / 17 | 9.94 |
| U — Transferable strategic utility | 11.00 / 15 | 11.00 |
| M — Mechanistic and causal depth | 10.00 / 12 | 10.00 |
| D — Information density | 7.00 / 10 | 4.90 |
| R — Durability | 8.00 / 9 | 8.00 |
| F — Direct domain fit | 7.00 / 7 | 7.00 |
| A — Expert authority | 4.00 / 5 | 4.00 |
| N — Narrative architecture | 2.00 / 3 | 2.00 |
| P — Authorial precision | 2.00 / 2 | 2.00 |

T11=0.00; T12=0.00; H13=0.00; P14=-2.90; O15=-20.00.
Previous total 68.74 with unknown-count fallback. Revised total **48.74**, verdict **Poor fit**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_ruleaudit_261020_2349.md.

<a id="intake-0208"></a>
### A History of Computing in the Twentieth Century

Nicholas Metropolis; Jack Howlett; Gian-Carlo Rota (editors). Sources: 211. [Amazon amazon.com.au](https://www.amazon.com.au/dp/0124916503); product 0124916503; 2 total ratings; retrieved 2026-10-23T09:46:12.495Z. Count confidence: high. Evidence: 2 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-intake-0208-0124916503.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 18.00 / 20 | 16.20 |
| S — Systems integration | 13.00 / 17 | 9.94 |
| U — Transferable strategic utility | 10.00 / 15 | 10.00 |
| M — Mechanistic and causal depth | 9.00 / 12 | 9.00 |
| D — Information density and length justification | 7.50 / 10 | 5.63 |
| R — Durability and resistance to hype | 9.00 / 9 | 9.00 |
| F — Direct domain fit | 7.00 / 7 | 7.00 |
| A — Expert authority and intellectual standing | 5.00 / 5 | 5.00 |
| N — Narrative architecture and clarity | 2.00 / 3 | 2.00 |
| P — Authorial precision and finesse | 1.50 / 2 | 1.50 |

T11=0.00; T12=0.00; H13=-2.00; P14=-4.60; O15=-20.00.
Previous total 68.67 with unknown-count fallback. Revised total **48.67**, verdict **Low priority**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_hn22692281_261023_0229.md#intake-0208.

<a id="intake-0618"></a>
### Things That Make Us Smart

Donald A. Norman. Sources: 219. [Amazon amazon.com.au](https://www.amazon.com.au/dp/0201581299); product 0201581299; 58 total ratings; retrieved 2026-10-23T09:47:12.496Z. Count confidence: high. Evidence: 58 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-intake-0618-0201581299.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 17.00 / 20 | 14.45 |
| S — Systems integration | 12.00 / 17 | 8.47 |
| U — Transferable strategic utility | 10.00 / 15 | 10.00 |
| M — Mechanistic and causal depth | 9.00 / 12 | 9.00 |
| D — Information density and length justification | 8.00 / 10 | 6.40 |
| R — Durability and resistance to hype | 9.00 / 9 | 9.00 |
| F — Direct domain fit | 6.00 / 7 | 6.00 |
| A — Expert authority and intellectual standing | 4.50 / 5 | 4.50 |
| N — Narrative architecture and clarity | 2.50 / 3 | 2.50 |
| P — Authorial precision and finesse | 1.50 / 2 | 1.50 |

T11=0.00; T12=0.00; H13=0.00; P14=-3.30; O15=-10.00.
Previous total 68.52 with unknown-count fallback. Revised total **58.52**, verdict **Selective**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_so1711_261023_0229.md#intake-0618.

<a id="intake-0350"></a>
### The Switch

Chris McDonald. Sources: 214. [Amazon amazon.com.au](https://www.amazon.com.au/dp/1736385801); product 1736385801; 35 total ratings; retrieved 2026-10-23T09:48:12.510Z. Count confidence: high. Evidence: 35 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-intake-0350-1736385801.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 16.00 / 20 | 12.80 |
| S — Systems integration | 13.00 / 17 | 9.94 |
| U — Transferable strategic utility | 10.00 / 15 | 10.00 |
| M — Mechanistic and causal depth | 9.00 / 12 | 9.00 |
| D — Information density and length justification | 8.00 / 10 | 6.40 |
| R — Durability and resistance to hype | 9.00 / 9 | 9.00 |
| F — Direct domain fit | 7.00 / 7 | 7.00 |
| A — Expert authority and intellectual standing | 3.50 / 5 | 3.50 |
| N — Narrative architecture and clarity | 2.50 / 3 | 2.50 |
| P — Authorial precision and finesse | 1.50 / 2 | 1.50 |

T11=0.00; T12=0.00; H13=-2.64; P14=-0.50; O15=-10.00.
Previous total 68.50 with unknown-count fallback. Revised total **58.50**, verdict **Selective**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_hn30489142_261023_0229.md#intake-0350.

<a id="intake-0154"></a>
### I Am Error

Nathan Altice. Sources: 211. [Amazon amazon.com.au](https://www.amazon.com.au/dp/0262028778); product 0262028778; 51 total ratings; retrieved 2026-10-23T09:49:12.525Z. Count confidence: high. Evidence: 51 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-intake-0154-0262028778.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 17.00 / 20 | 14.45 |
| S — Systems integration | 12.00 / 17 | 8.47 |
| U — Transferable strategic utility | 9.00 / 15 | 9.00 |
| M — Mechanistic and causal depth | 9.00 / 12 | 9.00 |
| D — Information density and length justification | 8.00 / 10 | 6.40 |
| R — Durability and resistance to hype | 8.00 / 9 | 8.00 |
| F — Direct domain fit | 7.00 / 7 | 7.00 |
| A — Expert authority and intellectual standing | 4.50 / 5 | 4.50 |
| N — Narrative architecture and clarity | 2.50 / 3 | 2.50 |
| P — Authorial precision and finesse | 1.50 / 2 | 1.50 |

T11=0.00; T12=0.00; H13=-1.24; P14=-1.10; O15=-10.00.
Previous total 68.48 with unknown-count fallback. Revised total **58.48**, verdict **Selective**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_hn22692281_261023_0229.md#intake-0154.

<a id="intake-0110"></a>
### Flying Without Wings

Milton O. Thompson; Curtis Peebles. Sources: 208. [Amazon amazon.com.au](https://www.amazon.com.au/dp/0947554785); product 0947554785; 9 total ratings; retrieved 2026-10-23T09:50:12.526Z. Count confidence: high. Evidence: 9 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-intake-0110-0947554785.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 17.00 / 20 | 14.45 |
| S — Systems integration | 12.00 / 17 | 8.47 |
| U — Transferable strategic utility | 10.00 / 15 | 10.00 |
| M — Mechanistic and causal depth | 9.00 / 12 | 9.00 |
| D — Information density and length justification | 8.00 / 10 | 6.40 |
| R — Durability and resistance to hype | 9.00 / 9 | 9.00 |
| F — Direct domain fit | 7.00 / 7 | 7.00 |
| A — Expert authority and intellectual standing | 4.50 / 5 | 4.50 |
| N — Narrative architecture and clarity | 2.50 / 3 | 2.50 |
| P — Authorial precision and finesse | 1.50 / 2 | 1.50 |

T11=0.00; T12=0.00; H13=-1.80; P14=-2.70; O15=-20.00.
Previous total 68.32 with unknown-count fallback. Revised total **48.32**, verdict **Low priority**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_enguvq9h4_261023_0229.md#intake-0110.

<a id="nd0102c9279"></a>
### Knocking on Heaven's Door

Lisa Randall. Sources: 139, 228. [Amazon amazon.com.au](https://www.amazon.com.au/dp/0061723738); product 0061723738; 356 total ratings; retrieved 2026-10-23T09:51:12.527Z. Count confidence: high. Evidence: 356 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-nd0102c9279-0061723738.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 17.00 / 20 | 14.45 |
| S — Systems integration | 12.00 / 17 | 8.47 |
| U — Transferable strategic utility | 8.00 / 15 | 8.00 |
| M — Mechanistic and causal depth | 9.00 / 12 | 9.00 |
| D — Information density and length justification | 7.00 / 10 | 4.90 |
| R — Durability and resistance to hype | 8.00 / 9 | 8.00 |
| F — Direct domain fit | 7.00 / 7 | 7.00 |
| A — Expert authority and intellectual standing | 5.00 / 5 | 5.00 |
| N — Narrative architecture and clarity | 3.00 / 3 | 3.00 |
| P — Authorial precision and finesse | 2.00 / 2 | 2.00 |

T11=0.00; T12=0.00; H13=0.00; P14=-1.50; O15=-5.00.
Previous total 68.32 with unknown-count fallback. Revised total **63.32**, verdict **Low priority**. Book-evidence confidence: moderate.
Prior content assessment: analysis/analysis_uncwbooks_261020_1731.md.

<a id="n3153c257ca"></a>
### The Perfect Theory: A Century of Geniuses and the Battle over General Relativity

Pedro G. Ferreira. Sources: 139. [Amazon amazon.com.au](https://www.amazon.com.au/dp/0349123675); product 0349123675; 521 total ratings; retrieved 2026-10-23T11:58:13.271Z. Count confidence: high. Evidence: 521 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-n3153c257ca-0349123675.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 17.00 / 20 | 14.45 |
| S — Systems integration | 11.00 / 17 | 7.12 |
| U — Transferable strategic utility | 7.00 / 15 | 7.00 |
| M — Mechanistic and causal depth | 9.00 / 12 | 9.00 |
| D — Information density and length justification | 8.00 / 10 | 6.40 |
| R — Durability and resistance to hype | 9.00 / 9 | 9.00 |
| F — Direct domain fit | 7.00 / 7 | 7.00 |
| A — Expert authority and intellectual standing | 5.00 / 5 | 5.00 |
| N — Narrative architecture and clarity | 3.00 / 3 | 3.00 |
| P — Authorial precision and finesse | 1.50 / 2 | 1.50 |

T11=0.00; T12=0.00; H13=0.00; P14=-1.20; O15=-5.00.
Previous total 68.27 with unknown-count fallback. Revised total **63.27**, verdict **Low priority**. Book-evidence confidence: moderate.
Prior content assessment: analysis/analysis_uncwbooks_261020_1731.md.

<a id="intake-0077"></a>
### Angle of Attack

Mike Gray. Sources: 207. [Amazon amazon.com.au](https://www.amazon.com.au/dp/039301892X); product 039301892X; 61 total ratings; retrieved 2026-10-23T09:53:12.543Z. Count confidence: high. Evidence: 61 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-intake-0077-039301892X.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 16.00 / 20 | 12.80 |
| S — Systems integration | 13.00 / 17 | 9.94 |
| U — Transferable strategic utility | 11.00 / 15 | 11.00 |
| M — Mechanistic and causal depth | 9.00 / 12 | 9.00 |
| D — Information density and length justification | 8.00 / 10 | 6.40 |
| R — Durability and resistance to hype | 9.00 / 9 | 9.00 |
| F — Direct domain fit | 7.00 / 7 | 7.00 |
| A — Expert authority and intellectual standing | 4.00 / 5 | 4.00 |
| N — Narrative architecture and clarity | 3.00 / 3 | 3.00 |
| P — Authorial precision and finesse | 1.50 / 2 | 1.50 |

T11=0.00; T12=0.00; H13=-2.16; P14=-3.40; O15=-10.00.
Previous total 68.08 with unknown-count fallback. Revised total **58.08**, verdict **Selective**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_hn42614722_261023_0229.md#intake-0077.

<a id="rem-u1237"></a>
### China on the Ground in Latin America: Challenges for the Chinese and Impacts on the Region (The Political Economy of East Asia)

R. Evan Ellis. Sources: 196, 197. [Amazon amazon.com.au](https://www.amazon.com.au/dp/1137439769); product 1137439769; 1 total ratings; retrieved 2026-10-23T09:54:12.543Z. Count confidence: high. Evidence: 1 global rating. Snapshot: [saved response](../data/metadata_261023/raw/amazon-rem-u1237-1137439769.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 17.00 / 20 | 14.45 |
| S — Systems integration | 13.00 / 17 | 9.94 |
| U — Transferable strategic utility | 10.00 / 15 | 10.00 |
| M — Mechanistic and causal depth | 8.00 / 12 | 8.00 |
| D — Information density | 8.00 / 10 | 6.40 |
| R — Durability | 7.00 / 9 | 7.00 |
| F — Direct domain fit | 6.00 / 7 | 6.00 |
| A — Expert authority | 4.50 / 5 | 4.50 |
| N — Narrative architecture | 2.00 / 3 | 2.00 |
| P — Authorial precision | 1.50 / 2 | 1.50 |

T11=0.00; T12=0.00; H13=-0.52; P14=-1.20; O15=-20.00.
Previous total 68.07 with unknown-count fallback. Revised total **48.07**, verdict **Poor fit**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_remaining_261022_0042.md#rem-u1237.

<a id="rem-u1467"></a>
### Grunt: The Curious Science of Humans at War

Mary Roach. Sources: 203. [Amazon amazon.com.au](https://www.amazon.com.au/dp/1410490696); product 1410490696; 3,871 total ratings; retrieved 2026-10-23T09:56:12.558Z. Count confidence: high. Evidence: 3,871 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-rem-u1467-1410490696.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 17.00 / 20 | 14.45 |
| S — Systems integration | 12.00 / 17 | 8.47 |
| U — Transferable strategic utility | 10.00 / 15 | 10.00 |
| M — Mechanistic and causal depth | 8.00 / 12 | 8.00 |
| D — Information density | 8.00 / 10 | 6.40 |
| R — Durability | 8.00 / 9 | 8.00 |
| F — Direct domain fit | 5.00 / 7 | 5.00 |
| A — Expert authority | 4.00 / 5 | 4.00 |
| N — Narrative architecture | 3.00 / 3 | 3.00 |
| P — Authorial precision | 1.50 / 2 | 1.50 |

T11=0.00; T12=0.00; H13=0.00; P14=-1.00; O15=0.00.
Previous total 67.82 with unknown-count fallback. Revised total **67.82**, verdict **Selective**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_remaining_261022_0042.md#rem-u1467.

<a id="intake-0766"></a>
### Computing Calamities

Robert L. Glass. Sources: 219. [Amazon amazon.com.au](https://www.amazon.com.au/dp/0130828629); product 0130828629; 1 total ratings; retrieved 2026-10-23T09:57:12.560Z. Count confidence: high. Evidence: 1 global rating. Snapshot: [saved response](../data/metadata_261023/raw/amazon-intake-0766-0130828629.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 17.00 / 20 | 14.45 |
| S — Systems integration | 11.00 / 17 | 7.12 |
| U — Transferable strategic utility | 10.00 / 15 | 10.00 |
| M — Mechanistic and causal depth | 9.00 / 12 | 9.00 |
| D — Information density and length justification | 8.00 / 10 | 6.40 |
| R — Durability and resistance to hype | 8.00 / 9 | 8.00 |
| F — Direct domain fit | 7.00 / 7 | 7.00 |
| A — Expert authority and intellectual standing | 4.50 / 5 | 4.50 |
| N — Narrative architecture and clarity | 2.50 / 3 | 2.50 |
| P — Authorial precision and finesse | 1.50 / 2 | 1.50 |

T11=0.00; T12=0.00; H13=0.00; P14=-2.80; O15=-20.00.
Previous total 67.67 with unknown-count fallback. Revised total **47.67**, verdict **Low priority**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_so1711_261023_0229.md#intake-0766.

<a id="intake-0465"></a>
### Global Capitalism

Jeffry A. Frieden. Sources: 215. [Amazon amazon.com.au](https://www.amazon.com.au/dp/0393058085); product 0393058085; 191 total ratings; retrieved 2026-10-23T09:58:12.560Z. Count confidence: high. Evidence: 191 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-intake-0465-0393058085.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 18.00 / 20 | 16.20 |
| S — Systems integration | 15.00 / 17 | 13.24 |
| U — Transferable strategic utility | 11.00 / 15 | 11.00 |
| M — Mechanistic and causal depth | 10.00 / 12 | 10.00 |
| D — Information density and length justification | 8.50 / 10 | 7.22 |
| R — Durability and resistance to hype | 9.00 / 9 | 9.00 |
| F — Direct domain fit | 5.00 / 7 | 5.00 |
| A — Expert authority and intellectual standing | 5.00 / 5 | 5.00 |
| N — Narrative architecture and clarity | 2.50 / 3 | 2.50 |
| P — Authorial precision and finesse | 1.50 / 2 | 1.50 |

T11=0.00; T12=-10.00; H13=-1.04; P14=-2.00; O15=-5.00.
Previous total 67.62 with unknown-count fallback. Revised total **62.62**, verdict **Selective**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_hn15155833_261023_0229.md#intake-0465.

<a id="n15d3ea794b"></a>
### The Glass Universe

Dava Sobel. Sources: 139, 190. [Amazon amazon.com.au](https://www.amazon.com.au/dp/0143111345); product 0143111345; 435 total ratings; retrieved 2026-10-23T11:59:13.272Z. Count confidence: high. Evidence: 435 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-n15d3ea794b-0143111345.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 17.00 / 20 | 14.45 |
| S — Systems integration | 12.00 / 17 | 8.47 |
| U — Transferable strategic utility | 9.00 / 15 | 9.00 |
| M — Mechanistic and causal depth | 8.00 / 12 | 8.00 |
| D — Information density and length justification | 8.00 / 10 | 6.40 |
| R — Durability and resistance to hype | 9.00 / 9 | 9.00 |
| F — Direct domain fit | 7.00 / 7 | 7.00 |
| A — Expert authority and intellectual standing | 4.00 / 5 | 4.00 |
| N — Narrative architecture and clarity | 3.00 / 3 | 3.00 |
| P — Authorial precision and finesse | 2.00 / 2 | 2.00 |

T11=0.00; T12=0.00; H13=-2.80; P14=-1.00; O15=-5.00.
Previous total 67.52 with unknown-count fallback. Revised total **62.52**, verdict **Low priority**. Book-evidence confidence: moderate.
Prior content assessment: analysis/analysis_uncwbooks_261020_1731.md.

<a id="intake-0337"></a>
### Evolution: The Triumph of an Idea

Carl Zimmer. Sources: 214. [Amazon amazon.com.au](https://www.amazon.com.au/dp/0060958502); product 0060958502; 269 total ratings; retrieved 2026-10-23T09:59:12.562Z. Count confidence: high. Evidence: 269 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-intake-0337-0060958502.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 18.00 / 20 | 16.20 |
| S — Systems integration | 12.00 / 17 | 8.47 |
| U — Transferable strategic utility | 8.00 / 15 | 8.00 |
| M — Mechanistic and causal depth | 9.00 / 12 | 9.00 |
| D — Information density and length justification | 8.50 / 10 | 7.22 |
| R — Durability and resistance to hype | 8.00 / 9 | 8.00 |
| F — Direct domain fit | 4.00 / 7 | 4.00 |
| A — Expert authority and intellectual standing | 4.50 / 5 | 4.50 |
| N — Narrative architecture and clarity | 3.00 / 3 | 3.00 |
| P — Authorial precision and finesse | 1.50 / 2 | 1.50 |

T11=0.00; T12=0.00; H13=0.00; P14=-2.50; O15=-5.00.
Previous total 67.40 with unknown-count fallback. Revised total **62.40**, verdict **Selective**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_hn30489142_261023_0229.md#intake-0337.

<a id="intake-0837"></a>
### Companion Encyclopedia of the History and Philosophy of the Mathematical Sciences

Ivor Grattan-Guinness (editor). Sources: 223. [Amazon amazon.com.au](https://www.amazon.com.au/dp/0415862027); product 0415862027; 3 total ratings; retrieved 2026-10-23T12:00:13.287Z. Count confidence: high. Evidence: 3 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-intake-0837-0415862027.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 18.00 / 20 | 16.20 |
| S — Systems integration | 12.00 / 17 | 8.47 |
| U — Transferable strategic utility | 7.00 / 15 | 7.00 |
| M — Mechanistic and causal depth | 8.00 / 12 | 8.00 |
| D — Information density and length justification | 8.00 / 10 | 6.40 |
| R — Durability and resistance to hype | 9.00 / 9 | 9.00 |
| F — Direct domain fit | 7.00 / 7 | 7.00 |
| A — Expert authority and intellectual standing | 5.00 / 5 | 5.00 |
| N — Narrative architecture and clarity | 2.00 / 3 | 2.00 |
| P — Authorial precision and finesse | 1.50 / 2 | 1.50 |

T11=0.00; T12=0.00; H13=0.00; P14=-3.20; O15=-20.00.
Previous total 67.37 with unknown-count fallback. Revised total **47.37**, verdict **Low priority**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_mathideas_261023_0229.md#intake-0837.

<a id="intake-0317"></a>
### The Scientific Method: An Evolution of Thinking from Darwin to Dewey

Henry M. Cowles. Sources: 214. [Amazon amazon.com.au](https://www.amazon.com.au/dp/0674976193); product 0674976193; 22 total ratings; retrieved 2026-10-23T10:01:12.575Z. Count confidence: high. Evidence: 22 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-intake-0317-0674976193.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 18.00 / 20 | 16.20 |
| S — Systems integration | 12.00 / 17 | 8.47 |
| U — Transferable strategic utility | 10.00 / 15 | 10.00 |
| M — Mechanistic and causal depth | 9.00 / 12 | 9.00 |
| D — Information density and length justification | 8.00 / 10 | 6.40 |
| R — Durability and resistance to hype | 9.00 / 9 | 9.00 |
| F — Direct domain fit | 5.00 / 7 | 5.00 |
| A — Expert authority and intellectual standing | 4.50 / 5 | 4.50 |
| N — Narrative architecture and clarity | 2.50 / 3 | 2.50 |
| P — Authorial precision and finesse | 1.50 / 2 | 1.50 |

T11=0.00; T12=0.00; H13=-4.64; P14=-0.60; O15=-10.00.
Previous total 67.33 with unknown-count fallback. Revised total **57.33**, verdict **Selective**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_hn30489142_261023_0229.md#intake-0317.

<a id="intake-0316"></a>
### A Brief History of Creation

Bill Mesler; H. James Cleaves II. Sources: 214. [Amazon amazon.com.au](https://www.amazon.com.au/dp/0393083551); product 0393083551; 81 total ratings; retrieved 2026-10-23T10:02:12.575Z. Count confidence: high. Evidence: 81 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-intake-0316-0393083551.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 17.00 / 20 | 14.45 |
| S — Systems integration | 12.00 / 17 | 8.47 |
| U — Transferable strategic utility | 9.00 / 15 | 9.00 |
| M — Mechanistic and causal depth | 9.00 / 12 | 9.00 |
| D — Information density and length justification | 8.00 / 10 | 6.40 |
| R — Durability and resistance to hype | 8.00 / 9 | 8.00 |
| F — Direct domain fit | 5.00 / 7 | 5.00 |
| A — Expert authority and intellectual standing | 4.00 / 5 | 4.00 |
| N — Narrative architecture and clarity | 2.50 / 3 | 2.50 |
| P — Authorial precision and finesse | 1.50 / 2 | 1.50 |

T11=0.00; T12=0.00; H13=0.00; P14=-1.10; O15=-10.00.
Previous total 67.22 with unknown-count fallback. Revised total **57.22**, verdict **Selective**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_hn30489142_261023_0229.md#intake-0316.

<a id="intake-0194"></a>
### Jacquard's Web

James Essinger. Sources: 211. [Amazon amazon.com.au](https://www.amazon.com.au/dp/0192805770); product 0192805770; 48 total ratings; retrieved 2026-10-23T10:03:12.590Z. Count confidence: high. Evidence: 48 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-intake-0194-0192805770.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 16.00 / 20 | 12.80 |
| S — Systems integration | 12.00 / 17 | 8.47 |
| U — Transferable strategic utility | 9.00 / 15 | 9.00 |
| M — Mechanistic and causal depth | 9.00 / 12 | 9.00 |
| D — Information density and length justification | 7.50 / 10 | 5.63 |
| R — Durability and resistance to hype | 9.00 / 9 | 9.00 |
| F — Direct domain fit | 7.00 / 7 | 7.00 |
| A — Expert authority and intellectual standing | 4.00 / 5 | 4.00 |
| N — Narrative architecture and clarity | 3.00 / 3 | 3.00 |
| P — Authorial precision and finesse | 1.50 / 2 | 1.50 |

T11=0.00; T12=0.00; H13=0.00; P14=-2.20; O15=-10.00.
Previous total 67.20 with unknown-count fallback. Revised total **57.20**, verdict **Selective**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_hn22692281_261023_0229.md#intake-0194.

<a id="intake-0242"></a>
### An Edible History of Humanity

Tom Standage. Sources: 212. [Amazon amazon.com.au](https://www.amazon.com.au/dp/0802715885); product 0802715885; 934 total ratings; retrieved 2026-10-23T10:04:12.591Z. Count confidence: high. Evidence: 934 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-intake-0242-0802715885.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 16.00 / 20 | 12.80 |
| S — Systems integration | 13.00 / 17 | 9.94 |
| U — Transferable strategic utility | 9.00 / 15 | 9.00 |
| M — Mechanistic and causal depth | 8.00 / 12 | 8.00 |
| D — Information density and length justification | 8.00 / 10 | 6.40 |
| R — Durability and resistance to hype | 9.00 / 9 | 9.00 |
| F — Direct domain fit | 5.00 / 7 | 5.00 |
| A — Expert authority and intellectual standing | 4.00 / 5 | 4.00 |
| N — Narrative architecture and clarity | 3.00 / 3 | 3.00 |
| P — Authorial precision and finesse | 1.50 / 2 | 1.50 |

T11=0.00; T12=0.00; H13=0.00; P14=-1.70; O15=-5.00.
Previous total 66.94 with unknown-count fallback. Revised total **61.94**, verdict **Selective**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_smb1hg08ou_261023_0229.md#intake-0242.

<a id="intake-0294"></a>
### Plutopia

Kate Brown. Sources: 212. [Amazon amazon.com.au](https://www.amazon.com.au/dp/0190233109); product 0190233109; 307 total ratings; retrieved 2026-10-23T10:05:12.592Z. Count confidence: high. Evidence: 307 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-intake-0294-0190233109.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 18.00 / 20 | 16.20 |
| S — Systems integration | 14.00 / 17 | 11.53 |
| U — Transferable strategic utility | 11.00 / 15 | 11.00 |
| M — Mechanistic and causal depth | 10.00 / 12 | 10.00 |
| D — Information density and length justification | 8.00 / 10 | 6.40 |
| R — Durability and resistance to hype | 9.00 / 9 | 9.00 |
| F — Direct domain fit | 7.00 / 7 | 7.00 |
| A — Expert authority and intellectual standing | 4.50 / 5 | 4.50 |
| N — Narrative architecture and clarity | 2.50 / 3 | 2.50 |
| P — Authorial precision and finesse | 1.50 / 2 | 1.50 |

T11=-10.00; T12=0.00; H13=-1.40; P14=-1.30; O15=-5.00.
Previous total 66.93 with unknown-count fallback. Revised total **61.93**, verdict **Selective**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_smb1hg08ou_261023_0229.md#intake-0294.

<a id="intake-0199"></a>
### Facts and Fallacies of Software Engineering

Robert L. Glass. Sources: 211, 219. [Amazon amazon.com.au](https://www.amazon.com.au/dp/0321117425); product 0321117425; 79 total ratings; retrieved 2026-10-23T10:06:12.594Z. Count confidence: high. Evidence: 79 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-intake-0199-0321117425.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 16.00 / 20 | 12.80 |
| S — Systems integration | 11.00 / 17 | 7.12 |
| U — Transferable strategic utility | 11.00 / 15 | 11.00 |
| M — Mechanistic and causal depth | 9.00 / 12 | 9.00 |
| D — Information density and length justification | 8.00 / 10 | 6.40 |
| R — Durability and resistance to hype | 8.00 / 9 | 8.00 |
| F — Direct domain fit | 7.00 / 7 | 7.00 |
| A — Expert authority and intellectual standing | 4.00 / 5 | 4.00 |
| N — Narrative architecture and clarity | 2.50 / 3 | 2.50 |
| P — Authorial precision and finesse | 1.50 / 2 | 1.50 |

T11=0.00; T12=0.00; H13=0.00; P14=-2.40; O15=-10.00.
Previous total 66.92 with unknown-count fallback. Revised total **56.92**, verdict **Selective**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_hn22692281_261023_0229.md#intake-0199.

<a id="intake-0178"></a>
### Masterminds of Programming

Federico Biancuzzi; Shane Warden. Sources: 211, 218, 219. [Amazon amazon.com.au](https://www.amazon.com.au/dp/0596515170); product 0596515170; 49 total ratings; retrieved 2026-10-23T10:07:12.609Z. Count confidence: high. Evidence: 49 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-intake-0178-0596515170.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 17.00 / 20 | 14.45 |
| S — Systems integration | 10.00 / 17 | 5.88 |
| U — Transferable strategic utility | 10.00 / 15 | 10.00 |
| M — Mechanistic and causal depth | 9.00 / 12 | 9.00 |
| D — Information density and length justification | 8.00 / 10 | 6.40 |
| R — Durability and resistance to hype | 8.00 / 9 | 8.00 |
| F — Direct domain fit | 7.00 / 7 | 7.00 |
| A — Expert authority and intellectual standing | 4.50 / 5 | 4.50 |
| N — Narrative architecture and clarity | 2.50 / 3 | 2.50 |
| P — Authorial precision and finesse | 1.50 / 2 | 1.50 |

T11=0.00; T12=0.00; H13=-0.68; P14=-1.70; O15=-10.00.
Previous total 66.85 with unknown-count fallback. Revised total **56.85**, verdict **Selective**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_hn22692281_261023_0229.md#intake-0178.

<a id="intake-0168"></a>
### Programmed Inequality

Mar Hicks. Sources: 211. [Amazon amazon.com.au](https://www.amazon.com.au/dp/0262535181); product 0262535181; 67 total ratings; retrieved 2026-10-23T12:01:13.288Z. Count confidence: high. Evidence: 67 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-intake-0168-0262535181.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 18.00 / 20 | 16.20 |
| S — Systems integration | 14.00 / 17 | 11.53 |
| U — Transferable strategic utility | 11.00 / 15 | 11.00 |
| M — Mechanistic and causal depth | 10.00 / 12 | 10.00 |
| D — Information density and length justification | 8.00 / 10 | 6.40 |
| R — Durability and resistance to hype | 9.00 / 9 | 9.00 |
| F — Direct domain fit | 7.00 / 7 | 7.00 |
| A — Expert authority and intellectual standing | 4.50 / 5 | 4.50 |
| N — Narrative architecture and clarity | 2.50 / 3 | 2.50 |
| P — Authorial precision and finesse | 1.50 / 2 | 1.50 |

T11=-10.00; T12=0.00; H13=-1.88; P14=-0.90; O15=-10.00.
Previous total 66.85 with unknown-count fallback. Revised total **56.85**, verdict **Selective**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_hn22692281_261023_0229.md#intake-0168.

<a id="intake-0115"></a>
### The Ghost of the Executed Engineer

Loren R. Graham. Sources: 208. [Amazon amazon.com.au](https://www.amazon.com.au/dp/0674354362); product 0674354362; 36 total ratings; retrieved 2026-10-23T10:09:12.608Z. Count confidence: high. Evidence: 36 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-intake-0115-0674354362.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 18.00 / 20 | 16.20 |
| S — Systems integration | 14.00 / 17 | 11.53 |
| U — Transferable strategic utility | 12.00 / 15 | 12.00 |
| M — Mechanistic and causal depth | 10.00 / 12 | 10.00 |
| D — Information density and length justification | 8.50 / 10 | 7.22 |
| R — Durability and resistance to hype | 9.00 / 9 | 9.00 |
| F — Direct domain fit | 7.00 / 7 | 7.00 |
| A — Expert authority and intellectual standing | 4.50 / 5 | 4.50 |
| N — Narrative architecture and clarity | 2.50 / 3 | 2.50 |
| P — Authorial precision and finesse | 1.50 / 2 | 1.50 |

T11=-10.00; T12=0.00; H13=-1.40; P14=-3.30; O15=-10.00.
Previous total 66.75 with unknown-count fallback. Revised total **56.75**, verdict **Selective**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_enguvq9h4_261023_0229.md#intake-0115.

<a id="intake-0815"></a>
### Does God Play Dice?

Ian Stewart. Sources: 222. [Amazon amazon.com.au](https://www.amazon.com.au/dp/0631168478); product 0631168478; 74 total ratings; retrieved 2026-10-23T10:10:12.623Z. Count confidence: high. Evidence: 74 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-intake-0815-0631168478.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 17.00 / 20 | 14.45 |
| S — Systems integration | 12.00 / 17 | 8.47 |
| U — Transferable strategic utility | 8.00 / 15 | 8.00 |
| M — Mechanistic and causal depth | 8.00 / 12 | 8.00 |
| D — Information density and length justification | 8.00 / 10 | 6.40 |
| R — Durability and resistance to hype | 9.00 / 9 | 9.00 |
| F — Direct domain fit | 7.00 / 7 | 7.00 |
| A — Expert authority and intellectual standing | 5.00 / 5 | 5.00 |
| N — Narrative architecture and clarity | 2.50 / 3 | 2.50 |
| P — Authorial precision and finesse | 1.50 / 2 | 1.50 |

T11=0.00; T12=0.00; H13=0.00; P14=-3.70; O15=-10.00.
Previous total 66.62 with unknown-count fallback. Revised total **56.62**, verdict **Selective**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_mathlay_261023_0229.md#intake-0815.

<a id="intake-0022"></a>
### The Big Rig

Steve Viscelli. Sources: 207. [Amazon amazon.com.au](https://www.amazon.com.au/dp/0520278119); product 0520278119; 86 total ratings; retrieved 2026-10-23T10:11:12.635Z. Count confidence: high. Evidence: 86 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-intake-0022-0520278119.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 18.00 / 20 | 16.20 |
| S — Systems integration | 13.00 / 17 | 9.94 |
| U — Transferable strategic utility | 12.00 / 15 | 12.00 |
| M — Mechanistic and causal depth | 11.00 / 12 | 11.00 |
| D — Information density and length justification | 8.00 / 10 | 6.40 |
| R — Durability and resistance to hype | 8.00 / 9 | 8.00 |
| F — Direct domain fit | 6.00 / 7 | 6.00 |
| A — Expert authority and intellectual standing | 4.50 / 5 | 4.50 |
| N — Narrative architecture and clarity | 2.50 / 3 | 2.50 |
| P — Authorial precision and finesse | 1.50 / 2 | 1.50 |

T11=-10.00; T12=0.00; H13=-0.44; P14=-1.00; O15=-10.00.
Previous total 66.60 with unknown-count fallback. Revised total **56.60**, verdict **Selective**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_hn42614722_261023_0229.md#intake-0022.

<a id="intake-0549"></a>
### Salvage: A Personal Odyssey

Ian Tew. Sources: 216. [Amazon amazon.com.au](https://www.amazon.com.au/dp/1574092561); product 1574092561; 14 total ratings; retrieved 2026-10-23T12:02:13.303Z. Count confidence: high. Evidence: 14 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-intake-0549-1574092561.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 16.00 / 20 | 12.80 |
| S — Systems integration | 13.00 / 17 | 9.94 |
| U — Transferable strategic utility | 10.00 / 15 | 10.00 |
| M — Mechanistic and causal depth | 9.00 / 12 | 9.00 |
| D — Information density and length justification | 8.00 / 10 | 6.40 |
| R — Durability and resistance to hype | 8.00 / 9 | 8.00 |
| F — Direct domain fit | 6.00 / 7 | 6.00 |
| A — Expert authority and intellectual standing | 4.00 / 5 | 4.00 |
| N — Narrative architecture and clarity | 2.50 / 3 | 2.50 |
| P — Authorial precision and finesse | 1.50 / 2 | 1.50 |

Identity check: The title uses a hyphen instead of a colon: Salvage - A Personal Odyssey. The matching English paperback names Ian Tew in the byline and author cards, ISBN9781574092561; edition identity corroborated in manual-product-ids.json.


T11=0.00; T12=0.00; H13=-1.64; P14=-1.90; O15=-10.00.
Previous total 66.60 with unknown-count fallback. Revised total **56.60**, verdict **Selective**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_hn25317963_261023_0229.md#intake-0549.

<a id="intake-0116"></a>
### Traffic

Tom Vanderbilt. Sources: 208. [Amazon amazon.com.au](https://www.amazon.com.au/dp/0141027398); product 0141027398; 422 total ratings; retrieved 2026-10-23T10:13:12.654Z. Count confidence: high. Evidence: 422 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-intake-0116-0141027398.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 16.00 / 20 | 12.80 |
| S — Systems integration | 12.00 / 17 | 8.47 |
| U — Transferable strategic utility | 10.00 / 15 | 10.00 |
| M — Mechanistic and causal depth | 9.00 / 12 | 9.00 |
| D — Information density and length justification | 7.50 / 10 | 5.63 |
| R — Durability and resistance to hype | 8.00 / 9 | 8.00 |
| F — Direct domain fit | 6.00 / 7 | 6.00 |
| A — Expert authority and intellectual standing | 4.00 / 5 | 4.00 |
| N — Narrative architecture and clarity | 3.00 / 3 | 3.00 |
| P — Authorial precision and finesse | 1.50 / 2 | 1.50 |

T11=0.00; T12=0.00; H13=0.00; P14=-1.80; O15=-5.00.
Previous total 66.60 with unknown-count fallback. Revised total **61.60**, verdict **Selective**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_enguvq9h4_261023_0229.md#intake-0116.

<a id="intake-0300"></a>
### The Frozen-Water Trade

Gavin Weightman. Sources: 212. [Amazon amazon.com.au](https://www.amazon.com.au/dp/0786254165); product 0786254165; 107 total ratings; retrieved 2026-10-23T10:14:12.655Z. Count confidence: high. Evidence: 107 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-intake-0300-0786254165.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 17.00 / 20 | 14.45 |
| S — Systems integration | 13.00 / 17 | 9.94 |
| U — Transferable strategic utility | 10.00 / 15 | 10.00 |
| M — Mechanistic and causal depth | 9.00 / 12 | 9.00 |
| D — Information density and length justification | 8.00 / 10 | 6.40 |
| R — Durability and resistance to hype | 9.00 / 9 | 9.00 |
| F — Direct domain fit | 6.00 / 7 | 6.00 |
| A — Expert authority and intellectual standing | 4.00 / 5 | 4.00 |
| N — Narrative architecture and clarity | 3.00 / 3 | 3.00 |
| P — Authorial precision and finesse | 1.50 / 2 | 1.50 |

T11=0.00; T12=0.00; H13=-4.24; P14=-2.50; O15=-5.00.
Previous total 66.55 with unknown-count fallback. Revised total **61.55**, verdict **Selective**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_smb1hg08ou_261023_0229.md#intake-0300.

<a id="intake-0779"></a>
### The Psychology of Computer Programming

Gerald M. Weinberg. Sources: 220. [Amazon amazon.com.au](https://www.amazon.com.au/dp/0442207646); product 0442207646; 123 total ratings; retrieved 2026-10-23T10:15:12.656Z. Count confidence: high. Evidence: 123 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-intake-0779-0442207646.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 17.00 / 20 | 14.45 |
| S — Systems integration | 12.00 / 17 | 8.47 |
| U — Transferable strategic utility | 10.00 / 15 | 10.00 |
| M — Mechanistic and causal depth | 8.00 / 12 | 8.00 |
| D — Information density and length justification | 8.00 / 10 | 6.40 |
| R — Durability and resistance to hype | 9.00 / 9 | 9.00 |
| F — Direct domain fit | 7.00 / 7 | 7.00 |
| A — Expert authority and intellectual standing | 4.50 / 5 | 4.50 |
| N — Narrative architecture and clarity | 2.50 / 3 | 2.50 |
| P — Authorial precision and finesse | 1.50 / 2 | 1.50 |

T11=0.00; T12=0.00; H13=0.00; P14=-5.50; O15=-5.00.
Previous total 66.32 with unknown-count fallback. Revised total **61.32**, verdict **Selective**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_senonprog_261023_0229.md#intake-0779.

<a id="intake-0102"></a>
### Exponential

Azeem Azhar. Sources: 208. [Amazon amazon.com.au](https://www.amazon.com.au/dp/184794292X); product 184794292X; 561 total ratings; retrieved 2026-10-23T12:03:13.303Z. Count confidence: high. Evidence: 561 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-intake-0102-184794292X.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 14.00 / 20 | 9.80 |
| S — Systems integration | 14.00 / 17 | 11.53 |
| U — Transferable strategic utility | 11.00 / 15 | 11.00 |
| M — Mechanistic and causal depth | 9.00 / 12 | 9.00 |
| D — Information density and length justification | 7.00 / 10 | 4.90 |
| R — Durability and resistance to hype | 6.00 / 9 | 6.00 |
| F — Direct domain fit | 7.00 / 7 | 7.00 |
| A — Expert authority and intellectual standing | 3.50 / 5 | 3.50 |
| N — Narrative architecture and clarity | 2.50 / 3 | 2.50 |
| P — Authorial precision and finesse | 1.50 / 2 | 1.50 |

T11=0.00; T12=0.00; H13=0.00; P14=-0.50; O15=-5.00.
Previous total 66.23 with unknown-count fallback. Revised total **61.23**, verdict **Selective**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_enguvq9h4_261023_0229.md#intake-0102.

<a id="ndf07684b47"></a>
### Quantum Man: Richard Feynman's Life in Science

Lawrence M. Krauss. Sources: 139. [Amazon amazon.com.au](https://www.amazon.com.au/dp/0393064719); product 0393064719; 220 total ratings; retrieved 2026-10-23T10:17:12.656Z. Count confidence: high. Evidence: 220 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-ndf07684b47-0393064719.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 17.00 / 20 | 14.45 |
| S — Systems integration | 10.00 / 17 | 5.88 |
| U — Transferable strategic utility | 8.00 / 15 | 8.00 |
| M — Mechanistic and causal depth | 9.00 / 12 | 9.00 |
| D — Information density and length justification | 8.00 / 10 | 6.40 |
| R — Durability and resistance to hype | 9.00 / 9 | 9.00 |
| F — Direct domain fit | 7.00 / 7 | 7.00 |
| A — Expert authority and intellectual standing | 5.00 / 5 | 5.00 |
| N — Narrative architecture and clarity | 3.00 / 3 | 3.00 |
| P — Authorial precision and finesse | 1.50 / 2 | 1.50 |

Identity check: Amazon misspells Quantum as Quantam and Krauss as Kruass. Exact Feynman subtitle, author card Lawrence M. Krauss, English hardcover ISBN0393064719 identify the correct book; corroborated by https://wellcomecollection.org/works/b52q9sc6.


T11=0.00; T12=0.00; H13=-1.52; P14=-1.50; O15=-5.00.
Previous total 66.21 with unknown-count fallback. Revised total **61.21**, verdict **Low priority**. Book-evidence confidence: moderate.
Prior content assessment: analysis/analysis_uncwbooks_261020_1731.md.

<a id="intake-0029"></a>
### Red Moon Rising

Matthew Brzezinski. Sources: 207. [Amazon amazon.com.au](https://www.amazon.com.au/dp/080508147X); product 080508147X; 154 total ratings; retrieved 2026-10-23T10:18:12.657Z. Count confidence: high. Evidence: 154 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-intake-0029-080508147X.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 16.00 / 20 | 12.80 |
| S — Systems integration | 13.00 / 17 | 9.94 |
| U — Transferable strategic utility | 10.00 / 15 | 10.00 |
| M — Mechanistic and causal depth | 9.00 / 12 | 9.00 |
| D — Information density and length justification | 7.50 / 10 | 5.63 |
| R — Durability and resistance to hype | 8.00 / 9 | 8.00 |
| F — Direct domain fit | 7.00 / 7 | 7.00 |
| A — Expert authority and intellectual standing | 4.00 / 5 | 4.00 |
| N — Narrative architecture and clarity | 3.00 / 3 | 3.00 |
| P — Authorial precision and finesse | 1.50 / 2 | 1.50 |

T11=0.00; T12=0.00; H13=-2.76; P14=-1.90; O15=-5.00.
Previous total 66.21 with unknown-count fallback. Revised total **61.21**, verdict **Selective**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_hn42614722_261023_0229.md#intake-0029.

<a id="rem-u1785"></a>
### Surfaces and Essences

Douglas Hofstadter; Emmanuel Sander. Sources: 193. [Amazon amazon.com.au](https://www.amazon.com.au/dp/0465018475); product 0465018475; 182 total ratings; retrieved 2026-10-23T12:04:13.304Z. Count confidence: high. Evidence: 182 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-rem-u1785-0465018475.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 16.00 / 20 | 12.80 |
| S — Systems integration | 13.00 / 17 | 9.94 |
| U — Transferable strategic utility | 10.00 / 15 | 10.00 |
| M — Mechanistic and causal depth | 8.00 / 12 | 8.00 |
| D — Information density | 7.50 / 10 | 5.63 |
| R — Durability | 8.00 / 9 | 8.00 |
| F — Direct domain fit | 4.00 / 7 | 4.00 |
| A — Expert authority | 5.00 / 5 | 5.00 |
| N — Narrative architecture | 2.50 / 3 | 2.50 |
| P — Authorial precision | 1.50 / 2 | 1.50 |

T11=0.00; T12=0.00; H13=0.00; P14=-1.30; O15=-5.00.
Previous total 66.07 with unknown-count fallback. Revised total **61.07**, verdict **Low priority**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_remaining_261022_0042.md#rem-u1785.

<a id="intake-0043"></a>
### In Search of Stupidity

Merrill R. Chapman. Sources: 207, 219. [Amazon amazon.com.au](https://www.amazon.com.au/dp/1590597214); product 1590597214; 57 total ratings; retrieved 2026-10-23T10:19:12.672Z. Count confidence: high. Evidence: 57 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-intake-0043-1590597214.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 15.00 / 20 | 11.25 |
| S — Systems integration | 12.00 / 17 | 8.47 |
| U — Transferable strategic utility | 11.00 / 15 | 11.00 |
| M — Mechanistic and causal depth | 9.00 / 12 | 9.00 |
| D — Information density and length justification | 7.50 / 10 | 5.63 |
| R — Durability and resistance to hype | 8.00 / 9 | 8.00 |
| F — Direct domain fit | 7.00 / 7 | 7.00 |
| A — Expert authority and intellectual standing | 4.00 / 5 | 4.00 |
| N — Narrative architecture and clarity | 2.50 / 3 | 2.50 |
| P — Authorial precision and finesse | 1.50 / 2 | 1.50 |

T11=0.00; T12=0.00; H13=0.00; P14=-2.30; O15=-10.00.
Previous total 66.05 with unknown-count fallback. Revised total **56.05**, verdict **Selective**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_hn42614722_261023_0229.md#intake-0043.

<a id="intake-0889"></a>
### Niels Bohr's Times

Abraham Pais. Sources: 226. [Amazon amazon.com.au](https://www.amazon.com.au/dp/0198520492); product 0198520492; 43 total ratings; retrieved 2026-10-23T10:20:12.687Z. Count confidence: high. Evidence: 43 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-intake-0889-0198520492.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 18.00 / 20 | 16.20 |
| S — Systems integration | 12.00 / 17 | 8.47 |
| U — Transferable strategic utility | 8.00 / 15 | 8.00 |
| M — Mechanistic and causal depth | 8.00 / 12 | 8.00 |
| D — Information density and length justification | 8.00 / 10 | 6.40 |
| R — Durability and resistance to hype | 9.00 / 9 | 9.00 |
| F — Direct domain fit | 7.00 / 7 | 7.00 |
| A — Expert authority and intellectual standing | 5.00 / 5 | 5.00 |
| N — Narrative architecture and clarity | 2.50 / 3 | 2.50 |
| P — Authorial precision and finesse | 1.50 / 2 | 1.50 |

T11=0.00; T12=0.00; H13=-2.56; P14=-3.50; O15=-10.00.
Previous total 66.01 with unknown-count fallback. Revised total **56.01**, verdict **Selective**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_hsmphysics_261023_0229.md#intake-0889.

<a id="intake-0898"></a>
### Establishing Quantum Physics in Munich

Michael Eckert. Sources: 227. [Amazon amazon.com.au](https://www.amazon.com.au/dp/3030620336); product 3030620336; 1 total ratings; retrieved 2026-10-23T10:22:12.688Z. Count confidence: high. Evidence: 1 global rating. Snapshot: [saved response](../data/metadata_261023/raw/amazon-intake-0898-3030620336.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 18.00 / 20 | 16.20 |
| S — Systems integration | 12.00 / 17 | 8.47 |
| U — Transferable strategic utility | 7.00 / 15 | 7.00 |
| M — Mechanistic and causal depth | 8.00 / 12 | 8.00 |
| D — Information density and length justification | 8.00 / 10 | 6.40 |
| R — Durability and resistance to hype | 9.00 / 9 | 9.00 |
| F — Direct domain fit | 7.00 / 7 | 7.00 |
| A — Expert authority and intellectual standing | 4.50 / 5 | 4.50 |
| N — Narrative architecture and clarity | 2.00 / 3 | 2.00 |
| P — Authorial precision and finesse | 1.50 / 2 | 1.50 |

T11=0.00; T12=0.00; H13=-3.64; P14=-0.60; O15=-20.00.
Previous total 65.83 with unknown-count fallback. Revised total **45.83**, verdict **Low priority**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_hsmquantum_261023_0229.md#intake-0898.

<a id="intake-0892"></a>
### Dirac: A Scientific Biography

Helge Kragh. Sources: 226. [Amazon amazon.com.au](https://www.amazon.com.au/dp/0521017564); product 0521017564; 7 total ratings; retrieved 2026-10-23T10:23:12.703Z. Count confidence: high. Evidence: 7 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-intake-0892-0521017564.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 19.00 / 20 | 18.05 |
| S — Systems integration | 11.00 / 17 | 7.12 |
| U — Transferable strategic utility | 7.00 / 15 | 7.00 |
| M — Mechanistic and causal depth | 8.00 / 12 | 8.00 |
| D — Information density and length justification | 8.00 / 10 | 6.40 |
| R — Durability and resistance to hype | 9.00 / 9 | 9.00 |
| F — Direct domain fit | 7.00 / 7 | 7.00 |
| A — Expert authority and intellectual standing | 5.00 / 5 | 5.00 |
| N — Narrative architecture and clarity | 2.00 / 3 | 2.00 |
| P — Authorial precision and finesse | 1.50 / 2 | 1.50 |

T11=0.00; T12=0.00; H13=-1.68; P14=-3.60; O15=-20.00.
Previous total 65.79 with unknown-count fallback. Revised total **45.79**, verdict **Low priority**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_hsmphysics_261023_0229.md#intake-0892.

<a id="rem-u0940"></a>
### Postwar: A History of Europe Since 1945

Tony Judt. Sources: 189, 199. [Amazon amazon.com.au](https://www.amazon.com.au/dp/0143037757); product 0143037757; 1,301 total ratings; retrieved 2026-10-23T10:24:12.704Z. Count confidence: high. Evidence: 1,301 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-rem-u0940-0143037757.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 18.00 / 20 | 16.20 |
| S — Systems integration | 15.00 / 17 | 13.24 |
| U — Transferable strategic utility | 10.00 / 15 | 10.00 |
| M — Mechanistic and causal depth | 9.00 / 12 | 9.00 |
| D — Information density | 8.50 / 10 | 7.22 |
| R — Durability | 9.00 / 9 | 9.00 |
| F — Direct domain fit | 4.00 / 7 | 4.00 |
| A — Expert authority | 5.00 / 5 | 5.00 |
| N — Narrative architecture | 3.00 / 3 | 3.00 |
| P — Authorial precision | 2.00 / 2 | 2.00 |

T11=0.00; T12=-10.00; H13=-0.84; P14=-2.10; O15=0.00.
Previous total 65.72 with unknown-count fallback. Revised total **65.72**, verdict **Selective**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_remaining_261022_0042.md#rem-u0940.

<a id="intake-0405"></a>
### The Essential Drucker

Peter F. Drucker. Sources: 215. [Amazon amazon.com.au](https://www.amazon.com.au/dp/006093574X); product 006093574X; 642 total ratings; retrieved 2026-10-23T10:25:12.705Z. Count confidence: high. Evidence: 642 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-intake-0405-006093574X.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 16.00 / 20 | 12.80 |
| S — Systems integration | 12.00 / 17 | 8.47 |
| U — Transferable strategic utility | 11.00 / 15 | 11.00 |
| M — Mechanistic and causal depth | 8.00 / 12 | 8.00 |
| D — Information density and length justification | 8.00 / 10 | 6.40 |
| R — Durability and resistance to hype | 9.00 / 9 | 9.00 |
| F — Direct domain fit | 4.00 / 7 | 4.00 |
| A — Expert authority and intellectual standing | 4.50 / 5 | 4.50 |
| N — Narrative architecture and clarity | 2.50 / 3 | 2.50 |
| P — Authorial precision and finesse | 1.50 / 2 | 1.50 |

T11=0.00; T12=0.00; H13=0.00; P14=-2.50; O15=-5.00.
Previous total 65.67 with unknown-count fallback. Revised total **60.67**, verdict **Selective**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_hn15155833_261023_0229.md#intake-0405.

<a id="rem-u0448"></a>
### The Undoing Project: A Friendship That Changed Our Minds

Michael Lewis. Sources: 182, 208. [Amazon amazon.com.au](https://www.amazon.com.au/dp/1410496457); product 1410496457; 11,703 total ratings; retrieved 2026-10-23T10:26:12.719Z. Count confidence: high. Evidence: 11,703 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-rem-u0448-1410496457.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 16.00 / 20 | 12.80 |
| S — Systems integration | 11.00 / 17 | 7.12 |
| U — Transferable strategic utility | 12.00 / 15 | 12.00 |
| M — Mechanistic and causal depth | 8.00 / 12 | 8.00 |
| D — Information density | 8.00 / 10 | 6.40 |
| R — Durability | 8.00 / 9 | 8.00 |
| F — Direct domain fit | 5.00 / 7 | 5.00 |
| A — Expert authority | 4.00 / 5 | 4.00 |
| N — Narrative architecture | 3.00 / 3 | 3.00 |
| P — Authorial precision | 1.50 / 2 | 1.50 |

T11=0.00; T12=0.00; H13=-1.20; P14=-1.00; O15=0.00.
Previous total 65.62 with unknown-count fallback. Revised total **65.62**, verdict **Selective**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_remaining_261022_0042.md#rem-u0448.

<a id="intake-0822"></a>
### The History of Mathematical Proof in Ancient Traditions

Karine Chemla (editor). Sources: 223. [Amazon amazon.com.au](https://www.amazon.com.au/dp/110701221X); product 110701221X; 3 total ratings; retrieved 2026-10-23T10:27:12.719Z. Count confidence: high. Evidence: 3 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-intake-0822-110701221X.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 18.00 / 20 | 16.20 |
| S — Systems integration | 10.00 / 17 | 5.88 |
| U — Transferable strategic utility | 7.00 / 15 | 7.00 |
| M — Mechanistic and causal depth | 8.00 / 12 | 8.00 |
| D — Information density and length justification | 8.00 / 10 | 6.40 |
| R — Durability and resistance to hype | 9.00 / 9 | 9.00 |
| F — Direct domain fit | 6.00 / 7 | 6.00 |
| A — Expert authority and intellectual standing | 5.00 / 5 | 5.00 |
| N — Narrative architecture and clarity | 2.00 / 3 | 2.00 |
| P — Authorial precision and finesse | 1.50 / 2 | 1.50 |

T11=0.00; T12=0.00; H13=0.00; P14=-1.40; O15=-20.00.
Previous total 65.58 with unknown-count fallback. Revised total **45.58**, verdict **Low priority**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_mathideas_261023_0229.md#intake-0822.

<a id="intake-0857"></a>
### The Hilbert Challenge

Jeremy Gray. Sources: 224. [Amazon amazon.com.au](https://www.amazon.com.au/dp/0198506511); product 0198506511; 5 total ratings; retrieved 2026-10-23T10:28:12.737Z. Count confidence: high. Evidence: 5 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-intake-0857-0198506511.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 18.00 / 20 | 16.20 |
| S — Systems integration | 11.00 / 17 | 7.12 |
| U — Transferable strategic utility | 7.00 / 15 | 7.00 |
| M — Mechanistic and causal depth | 8.00 / 12 | 8.00 |
| D — Information density and length justification | 8.00 / 10 | 6.40 |
| R — Durability and resistance to hype | 9.00 / 9 | 9.00 |
| F — Direct domain fit | 7.00 / 7 | 7.00 |
| A — Expert authority and intellectual standing | 5.00 / 5 | 5.00 |
| N — Narrative architecture and clarity | 2.00 / 3 | 2.00 |
| P — Authorial precision and finesse | 1.50 / 2 | 1.50 |

T11=0.00; T12=0.00; H13=-1.04; P14=-2.60; O15=-20.00.
Previous total 65.58 with unknown-count fallback. Revised total **45.58**, verdict **Low priority**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_mathadvanced_261023_0229.md#intake-0857.

<a id="intake-0169"></a>
### ENIAC

Scott McCartney. Sources: 211. [Amazon amazon.com.au](https://www.amazon.com.au/dp/0802713483); product 0802713483; 36 total ratings; retrieved 2026-10-23T10:29:12.737Z. Count confidence: high. Evidence: 36 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-intake-0169-0802713483.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 16.00 / 20 | 12.80 |
| S — Systems integration | 12.00 / 17 | 8.47 |
| U — Transferable strategic utility | 10.00 / 15 | 10.00 |
| M — Mechanistic and causal depth | 9.00 / 12 | 9.00 |
| D — Information density and length justification | 7.50 / 10 | 5.63 |
| R — Durability and resistance to hype | 9.00 / 9 | 9.00 |
| F — Direct domain fit | 7.00 / 7 | 7.00 |
| A — Expert authority and intellectual standing | 4.00 / 5 | 4.00 |
| N — Narrative architecture and clarity | 3.00 / 3 | 3.00 |
| P — Authorial precision and finesse | 1.50 / 2 | 1.50 |

T11=0.00; T12=0.00; H13=-2.12; P14=-2.70; O15=-10.00.
Previous total 65.58 with unknown-count fallback. Revised total **55.58**, verdict **Selective**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_hn22692281_261023_0229.md#intake-0169.

<a id="rem-u0270"></a>
### Change: How to Make Big Things Happen

Damon Centola. Sources: 178. [Amazon amazon.com.au](https://www.amazon.com.au/dp/0316457337); product 0316457337; 302 total ratings; retrieved 2026-10-23T10:30:12.737Z. Count confidence: high. Evidence: 302 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-rem-u0270-0316457337.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 16.00 / 20 | 12.80 |
| S — Systems integration | 11.00 / 17 | 7.12 |
| U — Transferable strategic utility | 12.00 / 15 | 12.00 |
| M — Mechanistic and causal depth | 9.00 / 12 | 9.00 |
| D — Information density | 7.50 / 10 | 5.63 |
| R — Durability | 8.00 / 9 | 8.00 |
| F — Direct domain fit | 3.00 / 7 | 3.00 |
| A — Expert authority | 4.50 / 5 | 4.50 |
| N — Narrative architecture | 2.50 / 3 | 2.50 |
| P — Authorial precision | 1.50 / 2 | 1.50 |

T11=0.00; T12=0.00; H13=0.00; P14=-0.50; O15=-5.00.
Previous total 65.54 with unknown-count fallback. Revised total **60.54**, verdict **Low priority**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_remaining_261022_0042.md#rem-u0270.

<a id="intake-0869"></a>
### The Beauty of Numbers in Nature

Ian Stewart. Sources: 224. [Amazon amazon.com.au](https://www.amazon.com.au/dp/0262534282); product 0262534282; 71 total ratings; retrieved 2026-10-23T10:31:12.753Z. Count confidence: high. Evidence: 71 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-intake-0869-0262534282.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 17.00 / 20 | 14.45 |
| S — Systems integration | 11.00 / 17 | 7.12 |
| U — Transferable strategic utility | 7.00 / 15 | 7.00 |
| M — Mechanistic and causal depth | 8.00 / 12 | 8.00 |
| D — Information density and length justification | 8.00 / 10 | 6.40 |
| R — Durability and resistance to hype | 9.00 / 9 | 9.00 |
| F — Direct domain fit | 7.00 / 7 | 7.00 |
| A — Expert authority and intellectual standing | 5.00 / 5 | 5.00 |
| N — Narrative architecture and clarity | 2.50 / 3 | 2.50 |
| P — Authorial precision and finesse | 1.50 / 2 | 1.50 |

T11=0.00; T12=0.00; H13=0.00; P14=-2.50; O15=-10.00.
Previous total 65.47 with unknown-count fallback. Revised total **55.47**, verdict **Selective**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_mathadvanced_261023_0229.md#intake-0869.

<a id="n1b642a14c6"></a>
### Trinity: The Treachery and Pursuit of the Most Dangerous Spy

Frank Close. Sources: 139. [Amazon amazon.com.au](https://www.amazon.com.au/dp/0241309832); product 0241309832; 150 total ratings; retrieved 2026-10-23T10:32:12.754Z. Count confidence: high. Evidence: 150 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-n1b642a14c6-0241309832.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 18.00 / 20 | 16.20 |
| S — Systems integration | 14.00 / 17 | 11.53 |
| U — Transferable strategic utility | 10.00 / 15 | 10.00 |
| M — Mechanistic and causal depth | 9.00 / 12 | 9.00 |
| D — Information density and length justification | 8.00 / 10 | 6.40 |
| R — Durability and resistance to hype | 9.00 / 9 | 9.00 |
| F — Direct domain fit | 7.00 / 7 | 7.00 |
| A — Expert authority and intellectual standing | 5.00 / 5 | 5.00 |
| N — Narrative architecture and clarity | 3.00 / 3 | 3.00 |
| P — Authorial precision and finesse | 2.00 / 2 | 2.00 |

T11=0.00; T12=-10.00; H13=-3.04; P14=-0.70; O15=-5.00.
Previous total 65.39 with unknown-count fallback. Revised total **60.39**, verdict **Low priority**. Book-evidence confidence: moderate.
Prior content assessment: analysis/analysis_uncwbooks_261020_1731.md.

<a id="intake-0342"></a>
### Galileo's Pendulum

Roger G. Newton. Sources: 214. [Amazon amazon.com.au](https://www.amazon.com.au/dp/0674018486); product 0674018486; 8 total ratings; retrieved 2026-10-23T10:34:12.768Z. Count confidence: high. Evidence: 8 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-intake-0342-0674018486.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 17.00 / 20 | 14.45 |
| S — Systems integration | 11.00 / 17 | 7.12 |
| U — Transferable strategic utility | 8.00 / 15 | 8.00 |
| M — Mechanistic and causal depth | 8.00 / 12 | 8.00 |
| D — Information density and length justification | 8.00 / 10 | 6.40 |
| R — Durability and resistance to hype | 9.00 / 9 | 9.00 |
| F — Direct domain fit | 6.00 / 7 | 6.00 |
| A — Expert authority and intellectual standing | 4.50 / 5 | 4.50 |
| N — Narrative architecture and clarity | 2.50 / 3 | 2.50 |
| P — Authorial precision and finesse | 1.50 / 2 | 1.50 |

T11=0.00; T12=0.00; H13=0.00; P14=-2.20; O15=-20.00.
Previous total 65.27 with unknown-count fallback. Revised total **45.27**, verdict **Low priority**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_hn30489142_261023_0229.md#intake-0342.

<a id="intake-0211"></a>
### High Stakes, No Prisoners

Charles H. Ferguson. Sources: 211. [Amazon amazon.com.au](https://www.amazon.com.au/dp/0812931432); product 0812931432; 16 total ratings; retrieved 2026-10-23T10:35:12.773Z. Count confidence: high. Evidence: 16 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-intake-0211-0812931432.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 15.00 / 20 | 11.25 |
| S — Systems integration | 13.00 / 17 | 9.94 |
| U — Transferable strategic utility | 11.00 / 15 | 11.00 |
| M — Mechanistic and causal depth | 9.00 / 12 | 9.00 |
| D — Information density and length justification | 7.00 / 10 | 4.90 |
| R — Durability and resistance to hype | 8.00 / 9 | 8.00 |
| F — Direct domain fit | 7.00 / 7 | 7.00 |
| A — Expert authority and intellectual standing | 4.00 / 5 | 4.00 |
| N — Narrative architecture and clarity | 2.50 / 3 | 2.50 |
| P — Authorial precision and finesse | 1.50 / 2 | 1.50 |

T11=0.00; T12=0.00; H13=-1.16; P14=-2.70; O15=-10.00.
Previous total 65.23 with unknown-count fallback. Revised total **55.23**, verdict **Selective**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_hn22692281_261023_0229.md#intake-0211.

<a id="intake-0295"></a>
### Holding Back the River

Tyler J. Kelley. Sources: 212. [Amazon amazon.com.au](https://www.amazon.com.au/dp/1501187066); product 1501187066; 27 total ratings; retrieved 2026-10-23T10:36:12.785Z. Count confidence: high. Evidence: 27 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-intake-0295-1501187066.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 17.00 / 20 | 14.45 |
| S — Systems integration | 14.00 / 17 | 11.53 |
| U — Transferable strategic utility | 11.00 / 15 | 11.00 |
| M — Mechanistic and causal depth | 10.00 / 12 | 10.00 |
| D — Information density and length justification | 8.00 / 10 | 6.40 |
| R — Durability and resistance to hype | 8.00 / 9 | 8.00 |
| F — Direct domain fit | 6.00 / 7 | 6.00 |
| A — Expert authority and intellectual standing | 4.00 / 5 | 4.00 |
| N — Narrative architecture and clarity | 3.00 / 3 | 3.00 |
| P — Authorial precision and finesse | 1.50 / 2 | 1.50 |

T11=-10.00; T12=0.00; H13=-0.24; P14=-0.50; O15=-10.00.
Previous total 65.14 with unknown-count fallback. Revised total **55.14**, verdict **Selective**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_smb1hg08ou_261023_0229.md#intake-0295.

<a id="intake-0042"></a>
### Riding the Runaway Horse

Charles C. Kenney. Sources: 207. [Amazon amazon.com.au](https://www.amazon.com.au/dp/0316489190); product 0316489190; 13 total ratings; retrieved 2026-10-23T10:37:12.786Z. Count confidence: high. Evidence: 13 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-intake-0042-0316489190.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 16.00 / 20 | 12.80 |
| S — Systems integration | 12.00 / 17 | 8.47 |
| U — Transferable strategic utility | 11.00 / 15 | 11.00 |
| M — Mechanistic and causal depth | 9.00 / 12 | 9.00 |
| D — Information density and length justification | 7.50 / 10 | 5.63 |
| R — Durability and resistance to hype | 8.00 / 9 | 8.00 |
| F — Direct domain fit | 7.00 / 7 | 7.00 |
| A — Expert authority and intellectual standing | 4.00 / 5 | 4.00 |
| N — Narrative architecture and clarity | 2.50 / 3 | 2.50 |
| P — Authorial precision and finesse | 1.50 / 2 | 1.50 |

T11=0.00; T12=0.00; H13=-1.36; P14=-3.40; O15=-10.00.
Previous total 65.14 with unknown-count fallback. Revised total **55.14**, verdict **Selective**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_hn42614722_261023_0229.md#intake-0042.

<a id="intake-0021"></a>
### The Secret Life of Groceries

Benjamin Lorr. Sources: 207. [Amazon amazon.com.au](https://www.amazon.com.au/dp/0553459392); product 0553459392; 1,429 total ratings; retrieved 2026-10-23T10:38:12.787Z. Count confidence: high. Evidence: 1,429 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-intake-0021-0553459392.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 17.00 / 20 | 14.45 |
| S — Systems integration | 14.00 / 17 | 11.53 |
| U — Transferable strategic utility | 11.00 / 15 | 11.00 |
| M — Mechanistic and causal depth | 10.00 / 12 | 10.00 |
| D — Information density and length justification | 8.00 / 10 | 6.40 |
| R — Durability and resistance to hype | 8.00 / 9 | 8.00 |
| F — Direct domain fit | 6.00 / 7 | 6.00 |
| A — Expert authority and intellectual standing | 4.00 / 5 | 4.00 |
| N — Narrative architecture and clarity | 3.00 / 3 | 3.00 |
| P — Authorial precision and finesse | 1.50 / 2 | 1.50 |

T11=-10.00; T12=0.00; H13=-0.24; P14=-0.60; O15=0.00.
Previous total 65.04 with unknown-count fallback. Revised total **65.04**, verdict **Recommend**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_hn42614722_261023_0229.md#intake-0021.

<a id="g0371"></a>
### Behind the Cloud

Marc Benioff; Carlye Adler. Sources: 116. [Amazon amazon.com.au](https://www.amazon.com.au/dp/0470521163); product 0470521163; 928 total ratings; retrieved 2026-10-23T10:39:12.787Z. Count confidence: high. Evidence: 928 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-g0371-0470521163.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 14.00 / 20 | 9.80 |
| S — Systems integration | 13.00 / 17 | 9.94 |
| U — Transferable strategic utility | 11.00 / 15 | 11.00 |
| M — Mechanistic and causal depth | 9.00 / 12 | 9.00 |
| D — Information density | 7.00 / 10 | 4.90 |
| R — Durability | 7.00 / 9 | 7.00 |
| F — Direct domain fit | 6.00 / 7 | 6.00 |
| A — Expert authority | 4.00 / 5 | 4.00 |
| N — Narrative architecture | 3.00 / 3 | 3.00 |
| P — Authorial precision | 2.00 / 2 | 2.00 |

T11=0.00; T12=0.00; H13=0.00; P14=-1.70; O15=-5.00.
Previous total 64.94 with unknown-count fallback. Revised total **59.94**, verdict **Low priority**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_ruleaudit_261020_2349.md.

<a id="intake-0806"></a>
### Mathematics: A Very Short Introduction

Timothy Gowers. Sources: 222. [Amazon amazon.com.au](https://www.amazon.com.au/dp/0192853619); product 0192853619; 513 total ratings; retrieved 2026-10-23T10:40:12.801Z. Count confidence: high. Evidence: 513 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-intake-0806-0192853619.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 18.00 / 20 | 16.20 |
| S — Systems integration | 9.00 / 17 | 4.76 |
| U — Transferable strategic utility | 7.00 / 15 | 7.00 |
| M — Mechanistic and causal depth | 7.00 / 12 | 7.00 |
| D — Information density and length justification | 8.50 / 10 | 7.22 |
| R — Durability and resistance to hype | 9.00 / 9 | 9.00 |
| F — Direct domain fit | 7.00 / 7 | 7.00 |
| A — Expert authority and intellectual standing | 5.00 / 5 | 5.00 |
| N — Narrative architecture and clarity | 2.50 / 3 | 2.50 |
| P — Authorial precision and finesse | 1.50 / 2 | 1.50 |

T11=0.00; T12=0.00; H13=0.00; P14=-2.40; O15=-5.00.
Previous total 64.79 with unknown-count fallback. Revised total **59.79**, verdict **Selective**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_mathlay_261023_0229.md#intake-0806.

<a id="intake-0671"></a>
### Perfect Software

Gerald M. Weinberg. Sources: 219. [Amazon amazon.com.au](https://www.amazon.com.au/dp/0932633692); product 0932633692; 81 total ratings; retrieved 2026-10-23T10:41:12.816Z. Count confidence: high. Evidence: 81 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-intake-0671-0932633692.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 16.00 / 20 | 12.80 |
| S — Systems integration | 10.00 / 17 | 5.88 |
| U — Transferable strategic utility | 10.00 / 15 | 10.00 |
| M — Mechanistic and causal depth | 8.00 / 12 | 8.00 |
| D — Information density and length justification | 8.00 / 10 | 6.40 |
| R — Durability and resistance to hype | 9.00 / 9 | 9.00 |
| F — Direct domain fit | 6.00 / 7 | 6.00 |
| A — Expert authority and intellectual standing | 4.50 / 5 | 4.50 |
| N — Narrative architecture and clarity | 2.50 / 3 | 2.50 |
| P — Authorial precision and finesse | 1.50 / 2 | 1.50 |

T11=0.00; T12=0.00; H13=0.00; P14=-1.80; O15=-10.00.
Previous total 64.78 with unknown-count fallback. Revised total **54.78**, verdict **Selective**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_so1711_261023_0229.md#intake-0671.

<a id="intake-0329"></a>
### Calculus Reordered

David M. Bressoud. Sources: 214. [Amazon amazon.com.au](https://www.amazon.com.au/dp/0691181314); product 0691181314; 82 total ratings; retrieved 2026-10-23T10:42:12.816Z. Count confidence: high. Evidence: 82 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-intake-0329-0691181314.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 18.00 / 20 | 16.20 |
| S — Systems integration | 10.00 / 17 | 5.88 |
| U — Transferable strategic utility | 8.00 / 15 | 8.00 |
| M — Mechanistic and causal depth | 9.00 / 12 | 9.00 |
| D — Information density and length justification | 8.00 / 10 | 6.40 |
| R — Durability and resistance to hype | 9.00 / 9 | 9.00 |
| F — Direct domain fit | 7.00 / 7 | 7.00 |
| A — Expert authority and intellectual standing | 5.00 / 5 | 5.00 |
| N — Narrative architecture and clarity | 2.50 / 3 | 2.50 |
| P — Authorial precision and finesse | 1.50 / 2 | 1.50 |

T11=0.00; T12=0.00; H13=-5.04; P14=-0.70; O15=-10.00.
Previous total 64.74 with unknown-count fallback. Revised total **54.74**, verdict **Selective**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_hn30489142_261023_0229.md#intake-0329.

<a id="rem-u1720"></a>
### Co-Intelligence

Ethan Mollick. Sources: 193. [Amazon amazon.com.au](https://www.amazon.com.au/dp/0753560771); product 0753560771; 4,723 total ratings; retrieved 2026-10-23T12:05:13.318Z. Count confidence: high. Evidence: 4,723 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-rem-u1720-0753560771.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 16.00 / 20 | 12.80 |
| S — Systems integration | 12.00 / 17 | 8.47 |
| U — Transferable strategic utility | 10.00 / 15 | 10.00 |
| M — Mechanistic and causal depth | 8.00 / 12 | 8.00 |
| D — Information density | 7.50 / 10 | 5.63 |
| R — Durability | 5.00 / 9 | 5.00 |
| F — Direct domain fit | 6.00 / 7 | 6.00 |
| A — Expert authority | 4.50 / 5 | 4.50 |
| N — Narrative architecture | 3.00 / 3 | 3.00 |
| P — Authorial precision | 1.50 / 2 | 1.50 |

T11=0.00; T12=0.00; H13=0.00; P14=-0.20; O15=0.00.
Previous total 64.70 with unknown-count fallback. Revised total **64.70**, verdict **Low priority**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_remaining_261022_0042.md#rem-u1720.

<a id="nb298658135"></a>
### Love and Math: The Heart of Hidden Reality

Edward Frenkel. Sources: 139, 140, 182. [Amazon amazon.com.au](https://www.amazon.com.au/dp/0465064957); product 0465064957; 830 total ratings; retrieved 2026-10-23T10:43:12.818Z. Count confidence: high. Evidence: 830 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-nb298658135-0465064957.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 17.00 / 20 | 14.45 |
| S — Systems integration | 11.00 / 17 | 7.12 |
| U — Transferable strategic utility | 7.00 / 15 | 7.00 |
| M — Mechanistic and causal depth | 8.00 / 12 | 8.00 |
| D — Information density and length justification | 7.00 / 10 | 4.90 |
| R — Durability and resistance to hype | 8.00 / 9 | 8.00 |
| F — Direct domain fit | 7.00 / 7 | 7.00 |
| A — Expert authority and intellectual standing | 5.00 / 5 | 5.00 |
| N — Narrative architecture and clarity | 3.00 / 3 | 3.00 |
| P — Authorial precision and finesse | 1.50 / 2 | 1.50 |

T11=0.00; T12=0.00; H13=0.00; P14=-1.30; O15=-5.00.
Previous total 64.67 with unknown-count fallback. Revised total **59.67**, verdict **Low priority**. Book-evidence confidence: moderate.
Prior content assessment: analysis/analysis_uncwbooks_261020_1731.md.

<a id="intake-0485"></a>
### The Clock of the Long Now

Stewart Brand. Sources: 215. [Amazon amazon.com.au](https://www.amazon.com.au/dp/046504512X); product 046504512X; 128 total ratings; retrieved 2026-10-23T10:44:12.818Z. Count confidence: high. Evidence: 128 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-intake-0485-046504512X.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 15.00 / 20 | 11.25 |
| S — Systems integration | 12.00 / 17 | 8.47 |
| U — Transferable strategic utility | 11.00 / 15 | 11.00 |
| M — Mechanistic and causal depth | 8.00 / 12 | 8.00 |
| D — Information density and length justification | 7.50 / 10 | 5.63 |
| R — Durability and resistance to hype | 9.00 / 9 | 9.00 |
| F — Direct domain fit | 6.00 / 7 | 6.00 |
| A — Expert authority and intellectual standing | 4.00 / 5 | 4.00 |
| N — Narrative architecture and clarity | 2.50 / 3 | 2.50 |
| P — Authorial precision and finesse | 1.50 / 2 | 1.50 |

T11=0.00; T12=0.00; H13=0.00; P14=-2.70; O15=-5.00.
Previous total 64.65 with unknown-count fallback. Revised total **59.65**, verdict **Selective**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_hn15155833_261023_0229.md#intake-0485.

<a id="intake-0155"></a>
### Out of Their Minds

Dennis Shasha; Cathy Lazere. Sources: 211. [Amazon amazon.com.au](https://www.amazon.com.au/dp/0387982698); product 0387982698; 14 total ratings; retrieved 2026-10-23T10:45:12.832Z. Count confidence: high. Evidence: 14 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-intake-0155-0387982698.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 17.00 / 20 | 14.45 |
| S — Systems integration | 11.00 / 17 | 7.12 |
| U — Transferable strategic utility | 9.00 / 15 | 9.00 |
| M — Mechanistic and causal depth | 8.00 / 12 | 8.00 |
| D — Information density and length justification | 8.00 / 10 | 6.40 |
| R — Durability and resistance to hype | 9.00 / 9 | 9.00 |
| F — Direct domain fit | 7.00 / 7 | 7.00 |
| A — Expert authority and intellectual standing | 4.00 / 5 | 4.00 |
| N — Narrative architecture and clarity | 2.50 / 3 | 2.50 |
| P — Authorial precision and finesse | 1.50 / 2 | 1.50 |

T11=0.00; T12=0.00; H13=-1.24; P14=-3.10; O15=-10.00.
Previous total 64.63 with unknown-count fallback. Revised total **54.63**, verdict **Selective**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_hn22692281_261023_0229.md#intake-0155.

<a id="rem-u1016"></a>
### The Day the Universe Changed: How Galileo's Telescope Changed the Truth

James Burke. Sources: 190, 207, 214, 215. [Amazon amazon.com.au](https://www.amazon.com.au/dp/0316116955); product 0316116955; 30 total ratings; retrieved 2026-10-23T10:46:12.834Z. Count confidence: high. Evidence: 30 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-rem-u1016-0316116955.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 15.00 / 20 | 11.25 |
| S — Systems integration | 14.00 / 17 | 11.53 |
| U — Transferable strategic utility | 10.00 / 15 | 10.00 |
| M — Mechanistic and causal depth | 8.00 / 12 | 8.00 |
| D — Information density | 8.00 / 10 | 6.40 |
| R — Durability | 8.00 / 9 | 8.00 |
| F — Direct domain fit | 5.00 / 7 | 5.00 |
| A — Expert authority | 4.00 / 5 | 4.00 |
| N — Narrative architecture | 3.00 / 3 | 3.00 |
| P — Authorial precision | 1.50 / 2 | 1.50 |

Identity check: Amazon omits the long Galileo subtitle. Exact main title and author James Burke match; English hardcover ISBN0316116955 is independently identified by https://vufind.juniv.edu/Record/10068/Details and https://www.abebooks.com/9780316116954/Day-Universe-Changed-Companion-PBS-0316116955/plp.


T11=0.00; T12=0.00; H13=0.00; P14=-4.10; O15=-10.00.
Previous total 64.58 with unknown-count fallback. Revised total **54.58**, verdict **Low priority**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_remaining_261022_0042.md#rem-u1016.

<a id="intake-0191"></a>
### Sophistication and Simplicity

Steven Weyhrich. Sources: 211. [Amazon amazon.com.au](https://www.amazon.com.au/dp/0986832278); product 0986832278; 49 total ratings; retrieved 2026-10-23T10:47:12.834Z. Count confidence: high. Evidence: 49 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-intake-0191-0986832278.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 17.00 / 20 | 14.45 |
| S — Systems integration | 11.00 / 17 | 7.12 |
| U — Transferable strategic utility | 9.00 / 15 | 9.00 |
| M — Mechanistic and causal depth | 8.00 / 12 | 8.00 |
| D — Information density and length justification | 7.50 / 10 | 5.63 |
| R — Durability and resistance to hype | 8.00 / 9 | 8.00 |
| F — Direct domain fit | 7.00 / 7 | 7.00 |
| A — Expert authority and intellectual standing | 4.00 / 5 | 4.00 |
| N — Narrative architecture and clarity | 2.50 / 3 | 2.50 |
| P — Authorial precision and finesse | 1.50 / 2 | 1.50 |

T11=0.00; T12=0.00; H13=-1.32; P14=-1.30; O15=-10.00.
Previous total 64.57 with unknown-count fallback. Revised total **54.57**, verdict **Selective**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_hn22692281_261023_0229.md#intake-0191.

<a id="intake-0064"></a>
### The Poincare Conjecture

Donal O'Shea. Sources: 207. [Amazon amazon.com.au](https://www.amazon.com.au/dp/0802716547); product 0802716547; 62 total ratings; retrieved 2026-10-23T10:49:12.850Z. Count confidence: high. Evidence: 62 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-intake-0064-0802716547.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 17.00 / 20 | 14.45 |
| S — Systems integration | 10.00 / 17 | 5.88 |
| U — Transferable strategic utility | 8.00 / 15 | 8.00 |
| M — Mechanistic and causal depth | 8.00 / 12 | 8.00 |
| D — Information density and length justification | 8.00 / 10 | 6.40 |
| R — Durability and resistance to hype | 9.00 / 9 | 9.00 |
| F — Direct domain fit | 7.00 / 7 | 7.00 |
| A — Expert authority and intellectual standing | 4.50 / 5 | 4.50 |
| N — Narrative architecture and clarity | 2.50 / 3 | 2.50 |
| P — Authorial precision and finesse | 1.50 / 2 | 1.50 |

T11=0.00; T12=0.00; H13=-0.80; P14=-1.90; O15=-10.00.
Previous total 64.53 with unknown-count fallback. Revised total **54.53**, verdict **Selective**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_hn42614722_261023_0229.md#intake-0064.

<a id="nbc57f59f03"></a>
### The Science of Interstellar

Kip Thorne. Sources: 139, 205. [Amazon amazon.com.au](https://www.amazon.com.au/dp/0393351378); product 0393351378; 2,442 total ratings; retrieved 2026-10-23T10:50:12.851Z. Count confidence: high. Evidence: 2,442 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-nbc57f59f03-0393351378.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 17.00 / 20 | 14.45 |
| S — Systems integration | 10.00 / 17 | 5.88 |
| U — Transferable strategic utility | 5.00 / 15 | 5.00 |
| M — Mechanistic and causal depth | 9.00 / 12 | 9.00 |
| D — Information density and length justification | 8.00 / 10 | 6.40 |
| R — Durability and resistance to hype | 8.00 / 9 | 8.00 |
| F — Direct domain fit | 7.00 / 7 | 7.00 |
| A — Expert authority and intellectual standing | 5.00 / 5 | 5.00 |
| N — Narrative architecture and clarity | 3.00 / 3 | 3.00 |
| P — Authorial precision and finesse | 2.00 / 2 | 2.00 |

T11=0.00; T12=0.00; H13=0.00; P14=-1.20; O15=0.00.
Previous total 64.53 with unknown-count fallback. Revised total **64.53**, verdict **Low priority**. Book-evidence confidence: moderate.
Prior content assessment: analysis/analysis_uncwbooks_261020_1731.md.

<a id="intake-0854"></a>
### Plato's Ghost

Jeremy Gray. Sources: 224. [Amazon amazon.com.au](https://www.amazon.com.au/dp/0691242046); product 0691242046; 6 total ratings; retrieved 2026-10-23T12:07:13.320Z. Count confidence: high. Evidence: 6 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-intake-0854-0691242046.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 18.00 / 20 | 16.20 |
| S — Systems integration | 12.00 / 17 | 8.47 |
| U — Transferable strategic utility | 7.00 / 15 | 7.00 |
| M — Mechanistic and causal depth | 8.00 / 12 | 8.00 |
| D — Information density and length justification | 8.00 / 10 | 6.40 |
| R — Durability and resistance to hype | 9.00 / 9 | 9.00 |
| F — Direct domain fit | 7.00 / 7 | 7.00 |
| A — Expert authority and intellectual standing | 5.00 / 5 | 5.00 |
| N — Narrative architecture and clarity | 2.00 / 3 | 2.00 |
| P — Authorial precision and finesse | 1.50 / 2 | 1.50 |

T11=0.00; T12=0.00; H13=-4.24; P14=-1.80; O15=-20.00.
Previous total 64.53 with unknown-count fallback. Revised total **44.53**, verdict **Low priority**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_mathadvanced_261023_0229.md#intake-0854.

<a id="rem-u1668"></a>
### Global Energy Politics

Benjamin K. Sovacool, Thijs Van de Graaf. Sources: 179. [Amazon amazon.com.au](https://www.amazon.com.au/dp/1509530487); product 1509530487; 30 total ratings; retrieved 2026-10-23T10:52:12.866Z. Count confidence: high. Evidence: 30 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-rem-u1668-1509530487.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 17.00 / 20 | 14.45 |
| S — Systems integration | 15.00 / 17 | 13.24 |
| U — Transferable strategic utility | 10.00 / 15 | 10.00 |
| M — Mechanistic and causal depth | 9.00 / 12 | 9.00 |
| D — Information density | 8.00 / 10 | 6.40 |
| R — Durability | 7.00 / 9 | 7.00 |
| F — Direct domain fit | 6.00 / 7 | 6.00 |
| A — Expert authority | 5.00 / 5 | 5.00 |
| N — Narrative architecture | 2.50 / 3 | 2.50 |
| P — Authorial precision | 1.50 / 2 | 1.50 |

T11=0.00; T12=-10.00; H13=0.00; P14=-0.60; O15=-10.00.
Previous total 64.49 with unknown-count fallback. Revised total **54.49**, verdict **Low priority**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_remaining_261022_0042.md#rem-u1668.

<a id="n135e62ec09"></a>
### Prime Obsession: Bernhard Riemann and the Greatest Unsolved Problem in Mathematics

John Derbyshire. Sources: 139, 182, 222. [Amazon amazon.com.au](https://www.amazon.com.au/dp/0452285259); product 0452285259; 444 total ratings; retrieved 2026-10-23T10:53:12.881Z. Count confidence: high. Evidence: 444 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-n135e62ec09-0452285259.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 17.00 / 20 | 14.45 |
| S — Systems integration | 10.00 / 17 | 5.88 |
| U — Transferable strategic utility | 6.00 / 15 | 6.00 |
| M — Mechanistic and causal depth | 9.00 / 12 | 9.00 |
| D — Information density and length justification | 8.00 / 10 | 6.40 |
| R — Durability and resistance to hype | 9.00 / 9 | 9.00 |
| F — Direct domain fit | 7.00 / 7 | 7.00 |
| A — Expert authority and intellectual standing | 4.00 / 5 | 4.00 |
| N — Narrative architecture and clarity | 3.00 / 3 | 3.00 |
| P — Authorial precision and finesse | 2.00 / 2 | 2.00 |

T11=0.00; T12=0.00; H13=0.00; P14=-2.30; O15=-5.00.
Previous total 64.43 with unknown-count fallback. Revised total **59.43**, verdict **Low priority**. Book-evidence confidence: moderate.
Prior content assessment: analysis/analysis_uncwbooks_261020_1731.md.

<a id="rem-u0911"></a>
### The Fifth Discipline: The Art & Practice of the Learning Organization

Peter M. Senge. Sources: 188, 192. [Amazon amazon.com.au](https://www.amazon.com.au/dp/0385260946); product 0385260946; 2,326 total ratings; retrieved 2026-10-23T10:54:12.897Z. Count confidence: high. Evidence: 2,326 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-rem-u0911-0385260946.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 14.00 / 20 | 9.80 |
| S — Systems integration | 14.00 / 17 | 11.53 |
| U — Transferable strategic utility | 12.00 / 15 | 12.00 |
| M — Mechanistic and causal depth | 9.00 / 12 | 9.00 |
| D — Information density | 7.50 / 10 | 5.63 |
| R — Durability | 8.00 / 9 | 8.00 |
| F — Direct domain fit | 4.00 / 7 | 4.00 |
| A — Expert authority | 4.00 / 5 | 4.00 |
| N — Narrative architecture | 2.50 / 3 | 2.50 |
| P — Authorial precision | 1.50 / 2 | 1.50 |

T11=0.00; T12=0.00; H13=0.00; P14=-3.60; O15=0.00.
Previous total 64.35 with unknown-count fallback. Revised total **64.35**, verdict **Low priority**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_remaining_261022_0042.md#rem-u0911.

<a id="n890641530d"></a>
### Einstein's Tutor: The Story of Emmy Noether and the Invention of Modern Physics

Lee Phillips. Sources: 139. [Amazon amazon.com.au](https://www.amazon.com.au/dp/1541702956); product 1541702956; 99 total ratings; retrieved 2026-10-23T12:08:13.334Z. Count confidence: high. Evidence: 99 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-n890641530d-1541702956.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 16.00 / 20 | 12.80 |
| S — Systems integration | 12.00 / 17 | 8.47 |
| U — Transferable strategic utility | 8.00 / 15 | 8.00 |
| M — Mechanistic and causal depth | 9.00 / 12 | 9.00 |
| D — Information density and length justification | 8.00 / 10 | 6.40 |
| R — Durability and resistance to hype | 8.00 / 9 | 8.00 |
| F — Direct domain fit | 7.00 / 7 | 7.00 |
| A — Expert authority and intellectual standing | 4.00 / 5 | 4.00 |
| N — Narrative architecture and clarity | 3.00 / 3 | 3.00 |
| P — Authorial precision and finesse | 1.50 / 2 | 1.50 |

T11=0.00; T12=0.00; H13=-3.64; P14=-0.20; O15=-10.00.
Previous total 64.33 with unknown-count fallback. Revised total **54.33**, verdict **Low priority**. Book-evidence confidence: moderate.
Prior content assessment: analysis/analysis_uncwbooks_261020_1731.md.

<a id="rem-u1236"></a>
### Balancing the Banks: Global Lessons from the Financial Crisis

Mathias Dewatripont; Jean-Charles Rochet; Jean Tirole. Sources: 196, 197. [Amazon amazon.com.au](https://www.amazon.com.au/dp/0691145237); product 0691145237; 5 total ratings; retrieved 2026-10-23T10:56:12.899Z. Count confidence: high. Evidence: 5 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-rem-u1236-0691145237.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 18.00 / 20 | 16.20 |
| S — Systems integration | 12.00 / 17 | 8.47 |
| U — Transferable strategic utility | 12.00 / 15 | 12.00 |
| M — Mechanistic and causal depth | 10.00 / 12 | 10.00 |
| D — Information density | 8.50 / 10 | 7.22 |
| R — Durability | 8.00 / 9 | 8.00 |
| F — Direct domain fit | 5.00 / 7 | 5.00 |
| A — Expert authority | 5.00 / 5 | 5.00 |
| N — Narrative architecture | 2.50 / 3 | 2.50 |
| P — Authorial precision | 1.50 / 2 | 1.50 |

T11=0.00; T12=-10.00; H13=0.00; P14=-1.60; O15=-20.00.
Previous total 64.30 with unknown-count fallback. Revised total **44.30**, verdict **Poor fit**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_remaining_261022_0042.md#rem-u1236.

<a id="nb7a9237c38"></a>
### Starborn: How the Stars Made Us

Roberto Trotta. Sources: 139. [Amazon amazon.com.au](https://www.amazon.com.au/dp/152934610X); product 152934610X; 48 total ratings; retrieved 2026-10-23T12:09:13.337Z. Count confidence: high. Evidence: 48 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-nb7a9237c38-152934610X.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 15.00 / 20 | 11.25 |
| S — Systems integration | 13.00 / 17 | 9.94 |
| U — Transferable strategic utility | 8.00 / 15 | 8.00 |
| M — Mechanistic and causal depth | 7.00 / 12 | 7.00 |
| D — Information density and length justification | 7.00 / 10 | 4.90 |
| R — Durability and resistance to hype | 8.00 / 9 | 8.00 |
| F — Direct domain fit | 7.00 / 7 | 7.00 |
| A — Expert authority and intellectual standing | 4.00 / 5 | 4.00 |
| N — Narrative architecture and clarity | 3.00 / 3 | 3.00 |
| P — Authorial precision and finesse | 1.50 / 2 | 1.50 |

T11=0.00; T12=0.00; H13=0.00; P14=-0.30; O15=-10.00.
Previous total 64.29 with unknown-count fallback. Revised total **54.29**, verdict **Low priority**. Book-evidence confidence: moderate.
Prior content assessment: analysis/analysis_uncwbooks_261020_1731.md.

<a id="rem-u1522"></a>
### The Greatest Show on Earth: The Evidence for Evolution

Richard Dawkins. Sources: 204. [Amazon amazon.com.au](https://www.amazon.com.au/dp/1416594787); product 1416594787; 2,364 total ratings; retrieved 2026-10-23T10:58:12.915Z. Count confidence: high. Evidence: 2,364 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-rem-u1522-1416594787.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 18.00 / 20 | 16.20 |
| S — Systems integration | 10.00 / 17 | 5.88 |
| U — Transferable strategic utility | 8.00 / 15 | 8.00 |
| M — Mechanistic and causal depth | 8.00 / 12 | 8.00 |
| D — Information density | 8.00 / 10 | 6.40 |
| R — Durability | 9.00 / 9 | 9.00 |
| F — Direct domain fit | 3.00 / 7 | 3.00 |
| A — Expert authority | 5.00 / 5 | 5.00 |
| N — Narrative architecture | 3.00 / 3 | 3.00 |
| P — Authorial precision | 1.50 / 2 | 1.50 |

T11=0.00; T12=0.00; H13=0.00; P14=-1.70; O15=0.00.
Previous total 64.28 with unknown-count fallback. Revised total **64.28**, verdict **Low priority**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_remaining_261022_0042.md#rem-u1522.

<a id="rem-u1611"></a>
### Why Evolution Is True

Jerry A. Coyne. Sources: 205. [Amazon amazon.com.au](https://www.amazon.com.au/dp/0199230846); product 0199230846; 1,401 total ratings; retrieved 2026-10-23T10:59:12.916Z. Count confidence: high. Evidence: 1,401 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-rem-u1611-0199230846.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 18.00 / 20 | 16.20 |
| S — Systems integration | 10.00 / 17 | 5.88 |
| U — Transferable strategic utility | 8.00 / 15 | 8.00 |
| M — Mechanistic and causal depth | 8.00 / 12 | 8.00 |
| D — Information density | 8.00 / 10 | 6.40 |
| R — Durability | 9.00 / 9 | 9.00 |
| F — Direct domain fit | 3.00 / 7 | 3.00 |
| A — Expert authority | 5.00 / 5 | 5.00 |
| N — Narrative architecture | 3.00 / 3 | 3.00 |
| P — Authorial precision | 1.50 / 2 | 1.50 |

T11=0.00; T12=0.00; H13=0.00; P14=-1.70; O15=0.00.
Previous total 64.28 with unknown-count fallback. Revised total **64.28**, verdict **Low priority**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_remaining_261022_0042.md#rem-u1611.

<a id="bg35aa63a232"></a>
### It's Your Ship

Captain D. Michael Abrashoff. Sources: 173. [Amazon amazon.com.au](https://www.amazon.com.au/dp/145552302X); product 145552302X; 4,142 total ratings; retrieved 2026-10-23T12:10:13.337Z. Count confidence: high. Evidence: 4,142 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-bg35aa63a232-145552302X.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 14.00 / 20 | 9.80 |
| S — Systems integration | 12.00 / 17 | 8.47 |
| U — Transferable strategic utility | 12.00 / 15 | 12.00 |
| M — Mechanistic and causal depth | 9.00 / 12 | 9.00 |
| D — Information density | 8.00 / 10 | 6.40 |
| R — Durability | 8.00 / 9 | 8.00 |
| F — Direct domain fit | 5.00 / 7 | 5.00 |
| A — Expert authority | 4.00 / 5 | 4.00 |
| N — Narrative architecture | 2.50 / 3 | 2.50 |
| P — Authorial precision | 1.50 / 2 | 1.50 |

T11=0.00; T12=0.00; H13=0.00; P14=-2.40; O15=0.00.
Previous total 64.27 with unknown-count fallback. Revised total **64.27**, verdict **Low priority**. Book-evidence confidence: moderate.
Prior content assessment: analysis/analysis_bgblasmoros_261021_0210.md.

<a id="nfd9df4c244"></a>
### The Cosmic Cocktail

Katherine Freese. Sources: 139. [Amazon amazon.com.au](https://www.amazon.com.au/dp/0691169187); product 0691169187; 110 total ratings; retrieved 2026-10-23T11:01:12.932Z. Count confidence: high. Evidence: 110 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-nfd9df4c244-0691169187.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 17.00 / 20 | 14.45 |
| S — Systems integration | 11.00 / 17 | 7.12 |
| U — Transferable strategic utility | 6.00 / 15 | 6.00 |
| M — Mechanistic and causal depth | 8.00 / 12 | 8.00 |
| D — Information density and length justification | 8.00 / 10 | 6.40 |
| R — Durability and resistance to hype | 7.00 / 9 | 7.00 |
| F — Direct domain fit | 7.00 / 7 | 7.00 |
| A — Expert authority and intellectual standing | 5.00 / 5 | 5.00 |
| N — Narrative architecture and clarity | 3.00 / 3 | 3.00 |
| P — Authorial precision and finesse | 1.50 / 2 | 1.50 |

T11=0.00; T12=0.00; H13=0.00; P14=-1.20; O15=-5.00.
Previous total 64.27 with unknown-count fallback. Revised total **59.27**, verdict **Low priority**. Book-evidence confidence: moderate.
Prior content assessment: analysis/analysis_uncwbooks_261020_1731.md.

<a id="intake-0032"></a>
### Made in Japan

Akio Morita; Edwin M. Reingold; Mitsuko Shimomura. Sources: 207. [Amazon amazon.com.au](https://www.amazon.com.au/dp/0525244654); product 0525244654; 87 total ratings; retrieved 2026-10-23T11:02:12.947Z. Count confidence: high. Evidence: 87 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-intake-0032-0525244654.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 15.00 / 20 | 11.25 |
| S — Systems integration | 13.00 / 17 | 9.94 |
| U — Transferable strategic utility | 11.00 / 15 | 11.00 |
| M — Mechanistic and causal depth | 9.00 / 12 | 9.00 |
| D — Information density and length justification | 7.50 / 10 | 5.63 |
| R — Durability and resistance to hype | 8.00 / 9 | 8.00 |
| F — Direct domain fit | 7.00 / 7 | 7.00 |
| A — Expert authority and intellectual standing | 4.00 / 5 | 4.00 |
| N — Narrative architecture and clarity | 2.50 / 3 | 2.50 |
| P — Authorial precision and finesse | 1.50 / 2 | 1.50 |

T11=0.00; T12=0.00; H13=-1.60; P14=-4.00; O15=-10.00.
Previous total 64.22 with unknown-count fallback. Revised total **54.22**, verdict **Selective**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_hn42614722_261023_0229.md#intake-0032.

<a id="nb7f4a67284"></a>
### Open Circuits

Windell H. Oskay; Eric Schlaepfer. Sources: 134. [Amazon amazon.com.au](https://www.amazon.com.au/dp/1718502346); product 1718502346; 1,484 total ratings; retrieved 2026-10-23T11:03:12.947Z. Count confidence: high. Evidence: 1,484 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-nb7f4a67284-1718502346.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 17.00 / 20 | 14.45 |
| S — Systems integration | 8.00 / 17 | 3.76 |
| U — Transferable strategic utility | 6.00 / 15 | 6.00 |
| M — Mechanistic and causal depth | 10.00 / 12 | 10.00 |
| D — Information density and length justification | 8.00 / 10 | 6.40 |
| R — Durability and resistance to hype | 9.00 / 9 | 9.00 |
| F — Direct domain fit | 6.00 / 7 | 6.00 |
| A — Expert authority and intellectual standing | 5.00 / 5 | 5.00 |
| N — Narrative architecture and clarity | 2.50 / 3 | 2.50 |
| P — Authorial precision and finesse | 1.50 / 2 | 1.50 |

T11=0.00; T12=0.00; H13=0.00; P14=-0.40; O15=0.00.
Previous total 64.21 with unknown-count fallback. Revised total **64.21**, verdict **Low priority**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_hn36581241_261020_1731.md.

<a id="n8473e1ab74"></a>
### Joseph Liouville 1809–1882: Master of Pure and Applied Mathematics

Jesper Lützen. Sources: 136. [Amazon amazon.com.au](https://www.amazon.com.au/dp/1461269733); product 1461269733; 1 total ratings; retrieved 2026-10-23T12:14:13.372Z. Count confidence: high. Evidence: 1 global rating. Snapshot: [saved response](../data/metadata_261023/raw/amazon-n8473e1ab74-1461269733.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 18.00 / 20 | 16.20 |
| S — Systems integration | 12.00 / 17 | 8.47 |
| U — Transferable strategic utility | 9.00 / 15 | 9.00 |
| M — Mechanistic and causal depth | 10.00 / 12 | 10.00 |
| D — Information density | 7.00 / 10 | 4.90 |
| R — Durability | 9.00 / 9 | 9.00 |
| F — Direct domain fit | 7.00 / 7 | 7.00 |
| A — Expert authority | 5.00 / 5 | 5.00 |
| N — Narrative architecture | 2.00 / 3 | 2.00 |
| P — Authorial precision | 2.00 / 2 | 2.00 |

T11=0.00; T12=0.00; H13=-5.76; P14=-3.60; O15=-20.00.
Previous total 64.21 with unknown-count fallback. Revised total **44.21**, verdict **Poor fit**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_ruleaudit_261020_2349.md.

<a id="g1025"></a>
### Clocks and Culture, 1300–1700

Carlo M. Cipolla. Sources: 122. [Amazon amazon.com.au](https://www.amazon.com.au/dp/0393324435); product 0393324435; 19 total ratings; retrieved 2026-10-23T11:04:12.946Z. Count confidence: high. Evidence: 19 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-g1025-0393324435.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 17.00 / 20 | 14.45 |
| S — Systems integration | 14.00 / 17 | 11.53 |
| U — Transferable strategic utility | 12.00 / 15 | 12.00 |
| M — Mechanistic and causal depth | 10.00 / 12 | 10.00 |
| D — Information density | 9.00 / 10 | 8.10 |
| R — Durability | 9.00 / 9 | 9.00 |
| F — Direct domain fit | 7.00 / 7 | 7.00 |
| A — Expert authority | 5.00 / 5 | 5.00 |
| N — Narrative architecture | 3.00 / 3 | 3.00 |
| P — Authorial precision | 2.00 / 2 | 2.00 |

T11=0.00; T12=0.00; H13=-12.00; P14=-5.90; O15=-10.00.
Previous total 64.18 with unknown-count fallback. Revised total **54.18**, verdict **Low priority**. Book-evidence confidence: low.
Prior content assessment: analysis_glasphist_261019_0144.md.

<a id="n4be212b763"></a>
### Shattered Sword

Jonathan Parshall; Anthony Tully. Sources: 143. [Amazon amazon.com.au](https://www.amazon.com.au/dp/1574889249); product 1574889249; 2,766 total ratings; retrieved 2026-10-23T11:05:12.949Z. Count confidence: high. Evidence: 2,766 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-n4be212b763-1574889249.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 18.00 / 20 | 16.20 |
| S — Systems integration | 14.00 / 17 | 11.53 |
| U — Transferable strategic utility | 12.00 / 15 | 12.00 |
| M — Mechanistic and causal depth | 11.00 / 12 | 11.00 |
| D — Information density and length justification | 8.00 / 10 | 6.40 |
| R — Durability and resistance to hype | 9.00 / 9 | 9.00 |
| F — Direct domain fit | 5.00 / 7 | 5.00 |
| A — Expert authority and intellectual standing | 4.50 / 5 | 4.50 |
| N — Narrative architecture and clarity | 2.50 / 3 | 2.50 |
| P — Authorial precision and finesse | 1.50 / 2 | 1.50 |

T11=0.00; T12=-10.00; H13=-3.36; P14=-2.10; O15=0.00.
Previous total 64.17 with unknown-count fallback. Revised total **64.17**, verdict **Low priority**. Book-evidence confidence: moderate.
Prior content assessment: analysis/analysis_technicalnf_261020_1731.md.

<a id="intake-0846"></a>
### Taming the Infinite

Ian Stewart. Sources: 223. [Amazon amazon.com.au](https://www.amazon.com.au/dp/1847247687); product 1847247687; 33 total ratings; retrieved 2026-10-23T11:06:12.963Z. Count confidence: high. Evidence: 33 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-intake-0846-1847247687.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 17.00 / 20 | 14.45 |
| S — Systems integration | 11.00 / 17 | 7.12 |
| U — Transferable strategic utility | 6.00 / 15 | 6.00 |
| M — Mechanistic and causal depth | 7.00 / 12 | 7.00 |
| D — Information density and length justification | 8.00 / 10 | 6.40 |
| R — Durability and resistance to hype | 9.00 / 9 | 9.00 |
| F — Direct domain fit | 7.00 / 7 | 7.00 |
| A — Expert authority and intellectual standing | 5.00 / 5 | 5.00 |
| N — Narrative architecture and clarity | 2.50 / 3 | 2.50 |
| P — Authorial precision and finesse | 1.50 / 2 | 1.50 |

T11=0.00; T12=0.00; H13=0.00; P14=-1.80; O15=-10.00.
Previous total 64.17 with unknown-count fallback. Revised total **54.17**, verdict **Selective**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_mathideas_261023_0229.md#intake-0846.

<a id="intake-0299"></a>
### Pacific Crucible

Ian W. Toll. Sources: 212. [Amazon amazon.com.au](https://www.amazon.com.au/dp/0393343413); product 0393343413; 6,874 total ratings; retrieved 2026-10-23T12:11:13.344Z. Count confidence: high. Evidence: 6,874 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-intake-0299-0393343413.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 18.00 / 20 | 16.20 |
| S — Systems integration | 14.00 / 17 | 11.53 |
| U — Transferable strategic utility | 11.00 / 15 | 11.00 |
| M — Mechanistic and causal depth | 10.00 / 12 | 10.00 |
| D — Information density and length justification | 8.50 / 10 | 7.22 |
| R — Durability and resistance to hype | 9.00 / 9 | 9.00 |
| F — Direct domain fit | 5.00 / 7 | 5.00 |
| A — Expert authority and intellectual standing | 4.50 / 5 | 4.50 |
| N — Narrative architecture and clarity | 3.00 / 3 | 3.00 |
| P — Authorial precision and finesse | 1.50 / 2 | 1.50 |

T11=0.00; T12=-10.00; H13=-3.36; P14=-1.50; O15=0.00.
Previous total 64.09 with unknown-count fallback. Revised total **64.09**, verdict **Selective**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_smb1hg08ou_261023_0229.md#intake-0299.

<a id="bg52eddf6d7c"></a>
### Global Warming

John Theodore Houghton. Sources: 148. [Amazon amazon.com.au](https://www.amazon.com.au/dp/0745924581); product 0745924581; 36 total ratings; retrieved 2026-10-23T11:08:12.979Z. Count confidence: high. Evidence: 36 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-bg52eddf6d7c-0745924581.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 18.00 / 20 | 16.20 |
| S — Systems integration | 13.00 / 17 | 9.94 |
| U — Transferable strategic utility | 10.00 / 15 | 10.00 |
| M — Mechanistic and causal depth | 11.00 / 12 | 11.00 |
| D — Information density | 9.00 / 10 | 8.10 |
| R — Durability | 8.00 / 9 | 8.00 |
| F — Direct domain fit | 5.00 / 7 | 5.00 |
| A — Expert authority | 5.00 / 5 | 5.00 |
| N — Narrative architecture | 2.00 / 3 | 2.00 |
| P — Authorial precision | 2.00 / 2 | 2.00 |

T11=-10.00; T12=0.00; H13=0.00; P14=-3.20; O15=-10.00.
Previous total 64.04 with unknown-count fallback. Revised total **54.04**, verdict **Low priority**. Book-evidence confidence: moderate.
Prior content assessment: analysis/analysis_bgbillgates_261021_0210.md.

<a id="g0574"></a>
### At Home in the Universe

Stuart Kauffman. Sources: 118. [Amazon amazon.com.au](https://www.amazon.com.au/dp/0195111303); product 0195111303; 127 total ratings; retrieved 2026-10-23T11:09:12.994Z. Count confidence: high. Evidence: 127 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-g0574-0195111303.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 14.00 / 20 | 9.80 |
| S — Systems integration | 13.00 / 17 | 9.94 |
| U — Transferable strategic utility | 11.00 / 15 | 11.00 |
| M — Mechanistic and causal depth | 9.00 / 12 | 9.00 |
| D — Information density | 7.00 / 10 | 4.90 |
| R — Durability | 8.00 / 9 | 8.00 |
| F — Direct domain fit | 6.00 / 7 | 6.00 |
| A — Expert authority | 5.00 / 5 | 5.00 |
| N — Narrative architecture | 2.00 / 3 | 2.00 |
| P — Authorial precision | 1.50 / 2 | 1.50 |

T11=0.00; T12=0.00; H13=0.00; P14=-3.10; O15=-5.00.
Previous total 64.04 with unknown-count fallback. Revised total **59.04**, verdict **Low priority**. Book-evidence confidence: low.
Prior content assessment: analysis_glaspsci_261019_0144.md.

<a id="g0995"></a>
### Guns, Sails, and Empires

Carlo M. Cipolla. Sources: 122. [Amazon amazon.com.au](https://www.amazon.com.au/dp/089745071X); product 089745071X; 6 total ratings; retrieved 2026-10-23T12:12:13.354Z. Count confidence: high. Evidence: 6 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-g0995-089745071X.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 16.00 / 20 | 12.80 |
| S — Systems integration | 15.00 / 17 | 13.24 |
| U — Transferable strategic utility | 12.00 / 15 | 12.00 |
| M — Mechanistic and causal depth | 10.00 / 12 | 10.00 |
| D — Information density | 9.00 / 10 | 8.10 |
| R — Durability | 9.00 / 9 | 9.00 |
| F — Direct domain fit | 7.00 / 7 | 7.00 |
| A — Expert authority | 5.00 / 5 | 5.00 |
| N — Narrative architecture | 3.00 / 3 | 3.00 |
| P — Authorial precision | 2.00 / 2 | 2.00 |

T11=0.00; T12=0.00; H13=-12.00; P14=-6.10; O15=-20.00.
Previous total 64.04 with unknown-count fallback. Revised total **44.04**, verdict **Poor fit**. Book-evidence confidence: low.
Prior content assessment: analysis_glasphist_261019_0144.md.

<a id="rem-u1218"></a>
### Engines That Move Markets: Technology Investing from Railroads to the Internet and Beyond

Alasdair Nairn. Sources: 196, 197, 207. [Amazon amazon.com.au](https://www.amazon.com.au/dp/0471205958); product 0471205958; 1 total ratings; retrieved 2026-10-23T11:11:12.997Z. Count confidence: high. Evidence: 1 global rating. Snapshot: [saved response](../data/metadata_261023/raw/amazon-rem-u1218-0471205958.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 16.00 / 20 | 12.80 |
| S — Systems integration | 15.00 / 17 | 13.24 |
| U — Transferable strategic utility | 12.00 / 15 | 12.00 |
| M — Mechanistic and causal depth | 9.00 / 12 | 9.00 |
| D — Information density | 8.00 / 10 | 6.40 |
| R — Durability | 8.00 / 9 | 8.00 |
| F — Direct domain fit | 7.00 / 7 | 7.00 |
| A — Expert authority | 4.00 / 5 | 4.00 |
| N — Narrative architecture | 2.50 / 3 | 2.50 |
| P — Authorial precision | 1.50 / 2 | 1.50 |

T11=0.00; T12=-10.00; H13=0.00; P14=-2.40; O15=-20.00.
Previous total 64.04 with unknown-count fallback. Revised total **44.04**, verdict **Poor fit**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_remaining_261022_0042.md#rem-u1218.

<a id="intake-0044"></a>
### iWoz

Steve Wozniak; Gina Smith. Sources: 207. [Amazon amazon.com.au](https://www.amazon.com.au/dp/0393330435); product 0393330435; 1,474 total ratings; retrieved 2026-10-23T11:12:13.001Z. Count confidence: high. Evidence: 1,474 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-intake-0044-0393330435.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 16.00 / 20 | 12.80 |
| S — Systems integration | 11.00 / 17 | 7.12 |
| U — Transferable strategic utility | 10.00 / 15 | 10.00 |
| M — Mechanistic and causal depth | 9.00 / 12 | 9.00 |
| D — Information density and length justification | 7.00 / 10 | 4.90 |
| R — Durability and resistance to hype | 8.00 / 9 | 8.00 |
| F — Direct domain fit | 7.00 / 7 | 7.00 |
| A — Expert authority and intellectual standing | 4.00 / 5 | 4.00 |
| N — Narrative architecture and clarity | 2.50 / 3 | 2.50 |
| P — Authorial precision and finesse | 1.50 / 2 | 1.50 |

T11=0.00; T12=0.00; H13=-0.80; P14=-2.00; O15=0.00.
Previous total 64.02 with unknown-count fallback. Revised total **64.02**, verdict **Selective**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_hn42614722_261023_0229.md#intake-0044.

<a id="nc175eac92a"></a>
### Kilo

Toby Muse. Sources: 132. [Amazon amazon.com.au](https://www.amazon.com.au/dp/0062905295); product 0062905295; 370 total ratings; retrieved 2026-10-23T11:13:13.002Z. Count confidence: high. Evidence: 370 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-nc175eac92a-0062905295.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 15.00 / 20 | 11.25 |
| S — Systems integration | 13.00 / 17 | 9.94 |
| U — Transferable strategic utility | 10.00 / 15 | 10.00 |
| M — Mechanistic and causal depth | 8.00 / 12 | 8.00 |
| D — Information density and length justification | 7.00 / 10 | 4.90 |
| R — Durability and resistance to hype | 8.00 / 9 | 8.00 |
| F — Direct domain fit | 4.00 / 7 | 4.00 |
| A — Expert authority and intellectual standing | 4.00 / 5 | 4.00 |
| N — Narrative architecture and clarity | 3.00 / 3 | 3.00 |
| P — Authorial precision and finesse | 1.50 / 2 | 1.50 |

T11=0.00; T12=0.00; H13=0.00; P14=-0.60; O15=-5.00.
Previous total 63.99 with unknown-count fallback. Revised total **58.99**, verdict **Low priority**. Book-evidence confidence: moderate.
Prior content assessment: analysis/analysis_hn38556188_261020_1731.md.

<a id="rem-u1484"></a>
### Climbing Mount Improbable

Richard Dawkins. Sources: 203. [Amazon amazon.com.au](https://www.amazon.com.au/dp/0393039307); product 0393039307; 311 total ratings; retrieved 2026-10-23T11:14:13.013Z. Count confidence: high. Evidence: 311 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-rem-u1484-0393039307.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 18.00 / 20 | 16.20 |
| S — Systems integration | 10.00 / 17 | 5.88 |
| U — Transferable strategic utility | 8.00 / 15 | 8.00 |
| M — Mechanistic and causal depth | 9.00 / 12 | 9.00 |
| D — Information density | 8.00 / 10 | 6.40 |
| R — Durability | 9.00 / 9 | 9.00 |
| F — Direct domain fit | 3.00 / 7 | 3.00 |
| A — Expert authority | 5.00 / 5 | 5.00 |
| N — Narrative architecture | 3.00 / 3 | 3.00 |
| P — Authorial precision | 1.50 / 2 | 1.50 |

T11=0.00; T12=0.00; H13=0.00; P14=-3.00; O15=-5.00.
Previous total 63.98 with unknown-count fallback. Revised total **58.98**, verdict **Low priority**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_remaining_261022_0042.md#rem-u1484.

<a id="rem-u1567"></a>
### Bad Pharma: How Drug Companies Mislead Doctors and Harm Patients

Ben Goldacre. Sources: 204. [Amazon amazon.com.au](https://www.amazon.com.au/dp/0865478066); product 0865478066; 1,042 total ratings; retrieved 2026-10-23T11:15:13.027Z. Count confidence: high. Evidence: 1,042 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-rem-u1567-0865478066.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 18.00 / 20 | 16.20 |
| S — Systems integration | 13.00 / 17 | 9.94 |
| U — Transferable strategic utility | 12.00 / 15 | 12.00 |
| M — Mechanistic and causal depth | 9.00 / 12 | 9.00 |
| D — Information density | 8.50 / 10 | 7.22 |
| R — Durability | 8.00 / 9 | 8.00 |
| F — Direct domain fit | 4.00 / 7 | 4.00 |
| A — Expert authority | 4.50 / 5 | 4.50 |
| N — Narrative architecture | 3.00 / 3 | 3.00 |
| P — Authorial precision | 1.50 / 2 | 1.50 |

T11=-10.00; T12=0.00; H13=0.00; P14=-1.40; O15=0.00.
Previous total 63.97 with unknown-count fallback. Revised total **63.97**, verdict **Low priority**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_remaining_261022_0042.md#rem-u1567.

<a id="rem-u1753"></a>
### Makers of Modern Strategy: From Machiavelli to the Nuclear Age

Peter Paret; Gordon A. Craig; Felix Gilbert (editors). Sources: 193. [Amazon amazon.com.au](https://www.amazon.com.au/dp/0691092354); product 0691092354; 376 total ratings; retrieved 2026-10-23T11:16:13.030Z. Count confidence: high. Evidence: 376 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-rem-u1753-0691092354.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 18.00 / 20 | 16.20 |
| S — Systems integration | 14.00 / 17 | 11.53 |
| U — Transferable strategic utility | 11.00 / 15 | 11.00 |
| M — Mechanistic and causal depth | 9.00 / 12 | 9.00 |
| D — Information density | 8.50 / 10 | 7.22 |
| R — Durability | 9.00 / 9 | 9.00 |
| F — Direct domain fit | 5.00 / 7 | 5.00 |
| A — Expert authority | 5.00 / 5 | 5.00 |
| N — Narrative architecture | 2.50 / 3 | 2.50 |
| P — Authorial precision | 1.50 / 2 | 1.50 |

T11=0.00; T12=-10.00; H13=0.00; P14=-4.00; O15=-5.00.
Previous total 63.95 with unknown-count fallback. Revised total **58.95**, verdict **Low priority**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_remaining_261022_0042.md#rem-u1753.

<a id="intake-0348"></a>
### The Grand Contraption

David Park. Sources: 214. [Amazon amazon.com.au](https://www.amazon.com.au/dp/0691130531); product 0691130531; 3 total ratings; retrieved 2026-10-23T11:17:13.045Z. Count confidence: high. Evidence: 3 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-intake-0348-0691130531.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 17.00 / 20 | 14.45 |
| S — Systems integration | 12.00 / 17 | 8.47 |
| U — Transferable strategic utility | 8.00 / 15 | 8.00 |
| M — Mechanistic and causal depth | 8.00 / 12 | 8.00 |
| D — Information density and length justification | 7.50 / 10 | 5.63 |
| R — Durability and resistance to hype | 8.00 / 9 | 8.00 |
| F — Direct domain fit | 5.00 / 7 | 5.00 |
| A — Expert authority and intellectual standing | 4.50 / 5 | 4.50 |
| N — Narrative architecture and clarity | 2.50 / 3 | 2.50 |
| P — Authorial precision and finesse | 1.50 / 2 | 1.50 |

T11=0.00; T12=0.00; H13=0.00; P14=-2.10; O15=-20.00.
Previous total 63.95 with unknown-count fallback. Revised total **43.95**, verdict **Low priority**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_hn30489142_261023_0229.md#intake-0348.

<a id="rem-u1345"></a>
### Dominion: How the Christian Revolution Remade the World

Tom Holland. Sources: 200. [Amazon amazon.com.au](https://www.amazon.com.au/dp/1408706954); product 1408706954; 2,152 total ratings; retrieved 2026-10-23T11:18:13.062Z. Count confidence: high. Evidence: 2,152 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-rem-u1345-1408706954.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 16.00 / 20 | 12.80 |
| S — Systems integration | 13.00 / 17 | 9.94 |
| U — Transferable strategic utility | 9.00 / 15 | 9.00 |
| M — Mechanistic and causal depth | 7.00 / 12 | 7.00 |
| D — Information density | 8.00 / 10 | 6.40 |
| R — Durability | 8.00 / 9 | 8.00 |
| F — Direct domain fit | 3.00 / 7 | 3.00 |
| A — Expert authority | 4.00 / 5 | 4.00 |
| N — Narrative architecture | 3.00 / 3 | 3.00 |
| P — Authorial precision | 1.50 / 2 | 1.50 |

Identity check: The UK subtitle The Making of the Western Mind and US subtitle How the Christian Revolution Remade the World identify the same 2019 Tom Holland work. English hardcover ISBN9781408706954 and both subtitle variants are listed together at https://www.goodreads.com/work/editions/68279026-dominion-how-the-christian-revolution-remade-the-world?expanded=true; also explicitly identified as UK/US titles at https://en.wikipedia.org/wiki/Dominion_(Holland_book).


T11=0.00; T12=0.00; H13=0.00; P14=-0.70; O15=0.00.
Previous total 63.94 with unknown-count fallback. Revised total **63.94**, verdict **Low priority**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_remaining_261022_0042.md#rem-u1345.

<a id="intake-0047"></a>
### The Big Roads

Earl Swift. Sources: 207. [Amazon amazon.com.au](https://www.amazon.com.au/dp/0618812415); product 0618812415; 684 total ratings; retrieved 2026-10-23T11:19:13.062Z. Count confidence: high. Evidence: 684 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-intake-0047-0618812415.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 17.00 / 20 | 14.45 |
| S — Systems integration | 14.00 / 17 | 11.53 |
| U — Transferable strategic utility | 11.00 / 15 | 11.00 |
| M — Mechanistic and causal depth | 10.00 / 12 | 10.00 |
| D — Information density and length justification | 8.00 / 10 | 6.40 |
| R — Durability and resistance to hype | 9.00 / 9 | 9.00 |
| F — Direct domain fit | 6.00 / 7 | 6.00 |
| A — Expert authority and intellectual standing | 4.00 / 5 | 4.00 |
| N — Narrative architecture and clarity | 3.00 / 3 | 3.00 |
| P — Authorial precision and finesse | 1.50 / 2 | 1.50 |

T11=-10.00; T12=0.00; H13=-1.44; P14=-1.50; O15=-5.00.
Previous total 63.94 with unknown-count fallback. Revised total **58.94**, verdict **Selective**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_hn42614722_261023_0229.md#intake-0047.

<a id="intake-0073"></a>
### American Steel

Richard Preston. Sources: 207. [Amazon amazon.com.au](https://www.amazon.com.au/dp/013029604X); product 013029604X; 37 total ratings; retrieved 2026-10-23T11:20:13.062Z. Count confidence: high. Evidence: 37 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-intake-0073-013029604X.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 17.00 / 20 | 14.45 |
| S — Systems integration | 14.00 / 17 | 11.53 |
| U — Transferable strategic utility | 12.00 / 15 | 12.00 |
| M — Mechanistic and causal depth | 10.00 / 12 | 10.00 |
| D — Information density and length justification | 8.00 / 10 | 6.40 |
| R — Durability and resistance to hype | 9.00 / 9 | 9.00 |
| F — Direct domain fit | 7.00 / 7 | 7.00 |
| A — Expert authority and intellectual standing | 4.00 / 5 | 4.00 |
| N — Narrative architecture and clarity | 3.00 / 3 | 3.00 |
| P — Authorial precision and finesse | 1.50 / 2 | 1.50 |

T11=-10.00; T12=0.00; H13=-1.44; P14=-3.50; O15=-10.00.
Previous total 63.94 with unknown-count fallback. Revised total **53.94**, verdict **Selective**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_hn42614722_261023_0229.md#intake-0073.

<a id="bga20f469258"></a>
### Why Don't Students Like School?

Daniel T. Willingham. Sources: 148. [Amazon amazon.com.au](https://www.amazon.com.au/dp/0470279303); product 0470279303; 1,073 total ratings; retrieved 2026-10-23T11:21:13.066Z. Count confidence: high. Evidence: 1,073 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-bga20f469258-0470279303.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 17.00 / 20 | 14.45 |
| S — Systems integration | 8.00 / 17 | 3.76 |
| U — Transferable strategic utility | 11.00 / 15 | 11.00 |
| M — Mechanistic and causal depth | 10.00 / 12 | 10.00 |
| D — Information density | 8.00 / 10 | 6.40 |
| R — Durability | 8.00 / 9 | 8.00 |
| F — Direct domain fit | 3.50 / 7 | 3.50 |
| A — Expert authority | 4.50 / 5 | 4.50 |
| N — Narrative architecture | 2.50 / 3 | 2.50 |
| P — Authorial precision | 1.50 / 2 | 1.50 |

T11=0.00; T12=0.00; H13=0.00; P14=-1.70; O15=0.00.
Previous total 63.91 with unknown-count fallback. Revised total **63.91**, verdict **Low priority**. Book-evidence confidence: moderate.
Prior content assessment: analysis/analysis_bgbillgates_261021_0210.md.

<a id="intake-0113"></a>
### The Laser Odyssey

Theodore H. Maiman. Sources: 208. [Amazon amazon.com.au](https://www.amazon.com.au/dp/0970292708); product 0970292708; 6 total ratings; retrieved 2026-10-23T11:22:13.068Z. Count confidence: high. Evidence: 6 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-intake-0113-0970292708.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 16.00 / 20 | 12.80 |
| S — Systems integration | 11.00 / 17 | 7.12 |
| U — Transferable strategic utility | 9.00 / 15 | 9.00 |
| M — Mechanistic and causal depth | 9.00 / 12 | 9.00 |
| D — Information density and length justification | 7.50 / 10 | 5.63 |
| R — Durability and resistance to hype | 9.00 / 9 | 9.00 |
| F — Direct domain fit | 7.00 / 7 | 7.00 |
| A — Expert authority and intellectual standing | 4.00 / 5 | 4.00 |
| N — Narrative architecture and clarity | 2.50 / 3 | 2.50 |
| P — Authorial precision and finesse | 1.50 / 2 | 1.50 |

T11=0.00; T12=0.00; H13=-1.04; P14=-2.60; O15=-20.00.
Previous total 63.90 with unknown-count fallback. Revised total **43.90**, verdict **Low priority**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_enguvq9h4_261023_0229.md#intake-0113.

<a id="g0993"></a>
### Faraday, Maxwell, and the Electromagnetic Field

Nancy Forbes; Basil Mahon. Sources: 122, 139, 164, 190. [Amazon amazon.com.au](https://www.amazon.com.au/dp/1633886077); product 1633886077; 973 total ratings; retrieved 2026-10-23T11:23:13.078Z. Count confidence: high. Evidence: 973 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-g0993-1633886077.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 17.00 / 20 | 14.45 |
| S — Systems integration | 11.00 / 17 | 7.12 |
| U — Transferable strategic utility | 10.00 / 15 | 10.00 |
| M — Mechanistic and causal depth | 8.00 / 12 | 8.00 |
| D — Information density and length justification | 8.00 / 10 | 6.40 |
| R — Durability and resistance to hype | 9.00 / 9 | 9.00 |
| F — Direct domain fit | 7.00 / 7 | 7.00 |
| A — Expert authority and intellectual standing | 4.00 / 5 | 4.00 |
| N — Narrative architecture and clarity | 3.00 / 3 | 3.00 |
| P — Authorial precision and finesse | 2.00 / 2 | 2.00 |

T11=0.00; T12=0.00; H13=-5.88; P14=-1.20; O15=-5.00.
Previous total 63.89 with unknown-count fallback. Revised total **58.89**, verdict **Low priority**. Book-evidence confidence: moderate.
Prior content assessment: analysis/analysis_uncwbooks_261020_1731.md.

<a id="g0647"></a>
### The Bias That Divides Us

Keith Stanovich. Sources: 118. [Amazon amazon.com.au](https://www.amazon.com.au/dp/0262053950); product 0262053950; 36 total ratings; retrieved 2026-10-23T11:24:13.093Z. Count confidence: high. Evidence: 36 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-g0647-0262053950.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 17.00 / 20 | 14.45 |
| S — Systems integration | 12.00 / 17 | 8.47 |
| U — Transferable strategic utility | 12.00 / 15 | 12.00 |
| M — Mechanistic and causal depth | 9.00 / 12 | 9.00 |
| D — Information density | 8.00 / 10 | 6.40 |
| R — Durability | 9.00 / 9 | 9.00 |
| F — Direct domain fit | 5.00 / 7 | 5.00 |
| A — Expert authority | 5.00 / 5 | 5.00 |
| N — Narrative architecture | 3.00 / 3 | 3.00 |
| P — Authorial precision | 2.00 / 2 | 2.00 |

T11=0.00; T12=-10.00; H13=0.00; P14=-0.50; O15=-10.00.
Previous total 63.82 with unknown-count fallback. Revised total **53.82**, verdict **Low priority**. Book-evidence confidence: low.
Prior content assessment: analysis_glaspsci_261019_0144.md.

<a id="rem-u1041"></a>
### Napoleon's Buttons: How 17 Molecules Changed History

Penny LeCouteur, Jay Burreson. Sources: 190, 203. [Amazon amazon.com.au](https://www.amazon.com.au/dp/1585423319); product 1585423319; 940 total ratings; retrieved 2026-10-23T11:25:13.094Z. Count confidence: high. Evidence: 940 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-rem-u1041-1585423319.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 15.00 / 20 | 11.25 |
| S — Systems integration | 13.00 / 17 | 9.94 |
| U — Transferable strategic utility | 9.00 / 15 | 9.00 |
| M — Mechanistic and causal depth | 8.00 / 12 | 8.00 |
| D — Information density | 8.00 / 10 | 6.40 |
| R — Durability | 8.00 / 9 | 8.00 |
| F — Direct domain fit | 5.00 / 7 | 5.00 |
| A — Expert authority | 4.00 / 5 | 4.00 |
| N — Narrative architecture | 3.00 / 3 | 3.00 |
| P — Authorial precision | 1.50 / 2 | 1.50 |

T11=0.00; T12=0.00; H13=0.00; P14=-2.30; O15=-5.00.
Previous total 63.79 with unknown-count fallback. Revised total **58.79**, verdict **Low priority**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_remaining_261022_0042.md#rem-u1041.

<a id="g0670"></a>
### The Serengeti Rules

Sean B. Carroll. Sources: 118. [Amazon amazon.com.au](https://www.amazon.com.au/dp/0691167427); product 0691167427; 586 total ratings; retrieved 2026-10-23T11:26:13.109Z. Count confidence: high. Evidence: 586 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-g0670-0691167427.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 17.00 / 20 | 14.45 |
| S — Systems integration | 13.00 / 17 | 9.94 |
| U — Transferable strategic utility | 11.00 / 15 | 11.00 |
| M — Mechanistic and causal depth | 10.00 / 12 | 10.00 |
| D — Information density | 8.00 / 10 | 6.40 |
| R — Durability | 9.00 / 9 | 9.00 |
| F — Direct domain fit | 4.00 / 7 | 4.00 |
| A — Expert authority | 5.00 / 5 | 5.00 |
| N — Narrative architecture | 3.00 / 3 | 3.00 |
| P — Authorial precision | 2.00 / 2 | 2.00 |

T11=-10.00; T12=0.00; H13=0.00; P14=-1.00; O15=-5.00.
Previous total 63.79 with unknown-count fallback. Revised total **58.79**, verdict **Low priority**. Book-evidence confidence: low.
Prior content assessment: analysis_glaspsci_261019_0144.md.

<a id="n944bb08522"></a>
### Of Bicycles, Bakelites, and Bulbs

Wiebe E. Bijker. Sources: 134. [Amazon amazon.com.au](https://www.amazon.com.au/dp/0262023768); product 0262023768; 4 total ratings; retrieved 2026-10-23T11:27:13.110Z. Count confidence: high. Evidence: 4 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-n944bb08522-0262023768.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 15.00 / 20 | 11.25 |
| S — Systems integration | 14.00 / 17 | 11.53 |
| U — Transferable strategic utility | 10.00 / 15 | 10.00 |
| M — Mechanistic and causal depth | 8.00 / 12 | 8.00 |
| D — Information density and length justification | 6.00 / 10 | 3.60 |
| R — Durability and resistance to hype | 8.00 / 9 | 8.00 |
| F — Direct domain fit | 6.00 / 7 | 6.00 |
| A — Expert authority and intellectual standing | 5.00 / 5 | 5.00 |
| N — Narrative architecture and clarity | 2.00 / 3 | 2.00 |
| P — Authorial precision and finesse | 1.50 / 2 | 1.50 |

T11=0.00; T12=0.00; H13=0.00; P14=-3.10; O15=-20.00.
Previous total 63.78 with unknown-count fallback. Revised total **43.78**, verdict **Poor fit**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_hn36581241_261020_1731.md.

<a id="rem-u0301"></a>
### Other People’s Money: Masters of the Universe or Servants to the People?

John Kay. Sources: 178. [Amazon amazon.com.au](https://www.amazon.com.au/dp/1610396030); product 1610396030; 243 total ratings; retrieved 2026-10-23T11:28:13.111Z. Count confidence: high. Evidence: 243 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-rem-u0301-1610396030.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 17.00 / 20 | 14.45 |
| S — Systems integration | 14.00 / 17 | 11.53 |
| U — Transferable strategic utility | 12.00 / 15 | 12.00 |
| M — Mechanistic and causal depth | 10.00 / 12 | 10.00 |
| D — Information density | 8.00 / 10 | 6.40 |
| R — Durability | 8.00 / 9 | 8.00 |
| F — Direct domain fit | 4.00 / 7 | 4.00 |
| A — Expert authority | 4.50 / 5 | 4.50 |
| N — Narrative architecture | 2.50 / 3 | 2.50 |
| P — Authorial precision | 1.50 / 2 | 1.50 |

Identity check: The US subtitle The Real Business of Finance and UK subtitle Masters of the Universe or Servants of the People identify the same John Kay book. The City Library record explicitly identifies the original UK title and the matching US hardcover ISBN9781610396035: https://catalog.slcpl.org/search/title.aspx?cn=547079&pos=1. English title, author and ISBN match the saved product.


T11=0.00; T12=-10.00; H13=0.00; P14=-1.10; O15=-5.00.
Previous total 63.78 with unknown-count fallback. Revised total **58.78**, verdict **Low priority**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_remaining_261022_0042.md#rem-u0301.

<a id="rem-u1351"></a>
### Ghost Wars: The Secret History of the CIA, Afghanistan, and Bin Laden from the Soviet Invasion to September 10, 2001

Steve Coll. Sources: 200. [Amazon amazon.com.au](https://www.amazon.com.au/dp/0143034669); product 0143034669; 1,987 total ratings; retrieved 2026-10-23T11:29:13.111Z. Count confidence: high. Evidence: 1,987 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-rem-u1351-0143034669.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 18.00 / 20 | 16.20 |
| S — Systems integration | 14.00 / 17 | 11.53 |
| U — Transferable strategic utility | 11.00 / 15 | 11.00 |
| M — Mechanistic and causal depth | 9.00 / 12 | 9.00 |
| D — Information density | 8.50 / 10 | 7.22 |
| R — Durability | 8.00 / 9 | 8.00 |
| F — Direct domain fit | 5.00 / 7 | 5.00 |
| A — Expert authority | 4.50 / 5 | 4.50 |
| N — Narrative architecture | 3.00 / 3 | 3.00 |
| P — Authorial precision | 1.50 / 2 | 1.50 |

T11=0.00; T12=-10.00; H13=-1.00; P14=-2.20; O15=0.00.
Previous total 63.75 with unknown-count fallback. Revised total **63.75**, verdict **Low priority**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_remaining_261022_0042.md#rem-u1351.

<a id="g0876"></a>
### The Energy World Is Flat

Daniel Lacalle; Diego Parrilla. Sources: 120. [Amazon amazon.com.au](https://www.amazon.com.au/dp/1118868005); product 1118868005; 45 total ratings; retrieved 2026-10-23T11:30:13.125Z. Count confidence: high. Evidence: 45 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-g0876-1118868005.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 12.00 / 20 | 7.20 |
| S — Systems integration | 15.00 / 17 | 13.24 |
| U — Transferable strategic utility | 11.00 / 15 | 11.00 |
| M — Mechanistic and causal depth | 9.00 / 12 | 9.00 |
| D — Information density | 7.00 / 10 | 4.90 |
| R — Durability | 5.00 / 9 | 5.00 |
| F — Direct domain fit | 7.00 / 7 | 7.00 |
| A — Expert authority | 4.00 / 5 | 4.00 |
| N — Narrative architecture | 2.50 / 3 | 2.50 |
| P — Authorial precision | 1.00 / 2 | 1.00 |

T11=0.00; T12=0.00; H13=0.00; P14=-1.10; O15=-10.00.
Previous total 63.74 with unknown-count fallback. Revised total **53.74**, verdict **Low priority**. Book-evidence confidence: low.
Prior content assessment: analysis_glaspecon_261019_0144.md.

<a id="na910366c2a"></a>
### Unknown Quantity: A Real and Imaginary History of Algebra

John Derbyshire. Sources: 139, 222. [Amazon amazon.com.au](https://www.amazon.com.au/dp/030909657X); product 030909657X; 100 total ratings; retrieved 2026-10-23T11:31:13.125Z. Count confidence: high. Evidence: 100 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-na910366c2a-030909657X.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 17.00 / 20 | 14.45 |
| S — Systems integration | 10.00 / 17 | 5.88 |
| U — Transferable strategic utility | 6.00 / 15 | 6.00 |
| M — Mechanistic and causal depth | 8.00 / 12 | 8.00 |
| D — Information density and length justification | 8.00 / 10 | 6.40 |
| R — Durability and resistance to hype | 9.00 / 9 | 9.00 |
| F — Direct domain fit | 7.00 / 7 | 7.00 |
| A — Expert authority and intellectual standing | 4.00 / 5 | 4.00 |
| N — Narrative architecture and clarity | 3.00 / 3 | 3.00 |
| P — Authorial precision and finesse | 2.00 / 2 | 2.00 |

T11=0.00; T12=0.00; H13=0.00; P14=-2.00; O15=-5.00.
Previous total 63.73 with unknown-count fallback. Revised total **58.73**, verdict **Low priority**. Book-evidence confidence: moderate.
Prior content assessment: analysis/analysis_uncwbooks_261020_1731.md.

<a id="n155f493e88"></a>
### Technics and Civilization

Lewis Mumford. Sources: 130, 134. [Amazon amazon.com.au](https://www.amazon.com.au/dp/0226550273); product 0226550273; 50 total ratings; retrieved 2026-10-23T11:32:13.126Z. Count confidence: high. Evidence: 50 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-n155f493e88-0226550273.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 15.00 / 20 | 11.25 |
| S — Systems integration | 16.00 / 17 | 15.06 |
| U — Transferable strategic utility | 12.00 / 15 | 12.00 |
| M — Mechanistic and causal depth | 9.00 / 12 | 9.00 |
| D — Information density and length justification | 6.00 / 10 | 3.60 |
| R — Durability and resistance to hype | 8.00 / 9 | 8.00 |
| F — Direct domain fit | 7.00 / 7 | 7.00 |
| A — Expert authority and intellectual standing | 4.00 / 5 | 4.00 |
| N — Narrative architecture and clarity | 2.00 / 3 | 2.00 |
| P — Authorial precision and finesse | 1.00 / 2 | 1.00 |

T11=0.00; T12=0.00; H13=0.00; P14=-9.20; O15=-10.00.
Previous total 63.71 with unknown-count fallback. Revised total **53.71**, verdict **Low priority**. Book-evidence confidence: moderate.
Prior content assessment: analysis/analysis_hn39057219_261020_1731.md.

<a id="n982128e873"></a>
### Charles Proteus Steinmetz: The Electrical Wizard of Schenectady

Robert W. Bly. Sources: 135. [Amazon amazon.com.au](https://www.amazon.com.au/dp/1610353269); product 1610353269; 32 total ratings; retrieved 2026-10-23T11:33:13.127Z. Count confidence: high. Evidence: 32 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-n982128e873-1610353269.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 15.00 / 20 | 11.25 |
| S — Systems integration | 13.00 / 17 | 9.94 |
| U — Transferable strategic utility | 9.00 / 15 | 9.00 |
| M — Mechanistic and causal depth | 8.00 / 12 | 8.00 |
| D — Information density and length justification | 8.00 / 10 | 6.40 |
| R — Durability and resistance to hype | 9.00 / 9 | 9.00 |
| F — Direct domain fit | 7.00 / 7 | 7.00 |
| A — Expert authority and intellectual standing | 3.50 / 5 | 3.50 |
| N — Narrative architecture and clarity | 3.00 / 3 | 3.00 |
| P — Authorial precision and finesse | 1.50 / 2 | 1.50 |

T11=0.00; T12=0.00; H13=-4.12; P14=-0.80; O15=-10.00.
Previous total 63.67 with unknown-count fallback. Revised total **53.67**, verdict **Low priority**. Book-evidence confidence: moderate.
Prior content assessment: analysis/analysis_hn29462663_261020_1731.md.

<a id="g0469"></a>
### The Boy Who Harnessed The Wind

William Kamkwamba; Bryan Mealer. Sources: 116, 181, 182. [Amazon amazon.com.au](https://www.amazon.com.au/dp/0061730327); product 0061730327; 4,240 total ratings; retrieved 2026-10-23T11:34:13.141Z. Count confidence: high. Evidence: 4,240 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-g0469-0061730327.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 16.00 / 20 | 12.80 |
| S — Systems integration | 10.00 / 17 | 5.88 |
| U — Transferable strategic utility | 9.00 / 15 | 9.00 |
| M — Mechanistic and causal depth | 8.00 / 12 | 8.00 |
| D — Information density | 8.00 / 10 | 6.40 |
| R — Durability | 9.00 / 9 | 9.00 |
| F — Direct domain fit | 6.00 / 7 | 6.00 |
| A — Expert authority | 4.00 / 5 | 4.00 |
| N — Narrative architecture | 3.00 / 3 | 3.00 |
| P — Authorial precision | 2.00 / 2 | 2.00 |

T11=0.00; T12=0.00; H13=-0.72; P14=-1.70; O15=0.00.
Previous total 63.66 with unknown-count fallback. Revised total **63.66**, verdict **Low priority**. Book-evidence confidence: moderate.
Prior content assessment: analysis_glasptech_261019_0144.md.

<a id="rem-u0466"></a>
### The Age of Wonder: How the Romantic Generation Discovered the Beauty and Terror of Science

Richard Holmes. Sources: 182, 190, 204, 214. [Amazon amazon.com.au](https://www.amazon.com.au/dp/0007149522); product 0007149522; 766 total ratings; retrieved 2026-10-23T11:35:13.141Z. Count confidence: high. Evidence: 766 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-rem-u0466-0007149522.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 17.00 / 20 | 14.45 |
| S — Systems integration | 13.00 / 17 | 9.94 |
| U — Transferable strategic utility | 10.00 / 15 | 10.00 |
| M — Mechanistic and causal depth | 8.00 / 12 | 8.00 |
| D — Information density | 8.00 / 10 | 6.40 |
| R — Durability | 9.00 / 9 | 9.00 |
| F — Direct domain fit | 6.00 / 7 | 6.00 |
| A — Expert authority | 4.50 / 5 | 4.50 |
| N — Narrative architecture | 3.00 / 3 | 3.00 |
| P — Authorial precision | 2.00 / 2 | 2.00 |

T11=0.00; T12=0.00; H13=-7.84; P14=-1.80; O15=-5.00.
Previous total 63.65 with unknown-count fallback. Revised total **58.65**, verdict **Low priority**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_remaining_261022_0042.md#rem-u0466.

<a id="rem-u0509"></a>
### Leonhard Euler: Mathematical Genius in the Enlightenment

Ronald S. Calinger. Sources: 182. [Amazon amazon.com.au](https://www.amazon.com.au/dp/0691119279); product 0691119279; 60 total ratings; retrieved 2026-10-23T11:36:13.142Z. Count confidence: high. Evidence: 60 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-rem-u0509-0691119279.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 18.00 / 20 | 16.20 |
| S — Systems integration | 12.00 / 17 | 8.47 |
| U — Transferable strategic utility | 9.00 / 15 | 9.00 |
| M — Mechanistic and causal depth | 8.00 / 12 | 8.00 |
| D — Information density | 8.50 / 10 | 7.22 |
| R — Durability | 9.00 / 9 | 9.00 |
| F — Direct domain fit | 7.00 / 7 | 7.00 |
| A — Expert authority | 5.00 / 5 | 5.00 |
| N — Narrative architecture | 2.50 / 3 | 2.50 |
| P — Authorial precision | 2.00 / 2 | 2.00 |

T11=0.00; T12=0.00; H13=-9.72; P14=-1.10; O15=-10.00.
Previous total 63.58 with unknown-count fallback. Revised total **53.58**, verdict **Low priority**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_remaining_261022_0042.md#rem-u0509.

<a id="g1139"></a>
### The Black Swan

Nassim Nicholas Taleb. Sources: 123, 135, 148, 149, 185, 188, 192, 205, 215. [Amazon amazon.com.au](https://www.amazon.com.au/dp/081297381X); product 081297381X; 7,935 total ratings; retrieved 2026-10-23T11:37:13.143Z. Count confidence: high. Evidence: 7,935 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-g1139-081297381X.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 16.00 / 20 | 12.80 |
| S — Systems integration | 14.00 / 17 | 11.53 |
| U — Transferable strategic utility | 14.00 / 15 | 14.00 |
| M — Mechanistic and causal depth | 10.00 / 12 | 10.00 |
| D — Information density and length justification | 6.00 / 10 | 3.60 |
| R — Durability and resistance to hype | 9.00 / 9 | 9.00 |
| F — Direct domain fit | 6.00 / 7 | 6.00 |
| A — Expert authority and intellectual standing | 4.00 / 5 | 4.00 |
| N — Narrative architecture and clarity | 3.00 / 3 | 3.00 |
| P — Authorial precision and finesse | 1.50 / 2 | 1.50 |

T11=0.00; T12=-10.00; H13=0.00; P14=-1.90; O15=0.00.
Previous total 63.53 with unknown-count fallback. Revised total **63.53**, verdict **Low priority**. Book-evidence confidence: moderate.
Prior content assessment: analysis/analysis_hn29462663_261020_1731.md.

<a id="intake-0053"></a>
### Idea Man

Paul Allen. Sources: 207. [Amazon amazon.com.au](https://www.amazon.com.au/dp/1591843820); product 1591843820; 566 total ratings; retrieved 2026-10-23T11:38:13.157Z. Count confidence: high. Evidence: 566 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-intake-0053-1591843820.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 15.00 / 20 | 11.25 |
| S — Systems integration | 12.00 / 17 | 8.47 |
| U — Transferable strategic utility | 10.00 / 15 | 10.00 |
| M — Mechanistic and causal depth | 8.00 / 12 | 8.00 |
| D — Information density and length justification | 7.00 / 10 | 4.90 |
| R — Durability and resistance to hype | 8.00 / 9 | 8.00 |
| F — Direct domain fit | 7.00 / 7 | 7.00 |
| A — Expert authority and intellectual standing | 4.00 / 5 | 4.00 |
| N — Narrative architecture and clarity | 2.50 / 3 | 2.50 |
| P — Authorial precision and finesse | 1.50 / 2 | 1.50 |

T11=0.00; T12=0.00; H13=-0.60; P14=-1.50; O15=-5.00.
Previous total 63.52 with unknown-count fallback. Revised total **58.52**, verdict **Selective**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_hn42614722_261023_0229.md#intake-0053.

<a id="n9e7cd33203"></a>
### Titan: To the Titanic and Back 13½ Times: Stories About Bad Decisions Made

Gordon Telepun. Sources: 143. [Amazon amazon.com.au](https://www.amazon.com.au/dp/B0FCJKDHZC); product B0FCJKDHZC; 59 total ratings; retrieved 2026-10-23T12:13:13.358Z. Count confidence: high. Evidence: 59 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-n9e7cd33203-B0FCJKDHZC.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 14.00 / 20 | 9.80 |
| S — Systems integration | 12.00 / 17 | 8.47 |
| U — Transferable strategic utility | 11.00 / 15 | 11.00 |
| M — Mechanistic and causal depth | 9.00 / 12 | 9.00 |
| D — Information density and length justification | 8.00 / 10 | 6.40 |
| R — Durability and resistance to hype | 7.00 / 9 | 7.00 |
| F — Direct domain fit | 7.00 / 7 | 7.00 |
| A — Expert authority and intellectual standing | 2.00 / 5 | 2.00 |
| N — Narrative architecture and clarity | 2.00 / 3 | 2.00 |
| P — Authorial precision and finesse | 1.00 / 2 | 1.00 |

T11=0.00; T12=0.00; H13=-0.08; P14=-0.10; O15=-10.00.
Previous total 63.49 with unknown-count fallback. Revised total **53.49**, verdict **Low priority**. Book-evidence confidence: moderate.
Prior content assessment: analysis/analysis_technicalnf_261020_1731.md.

<a id="intake-0072"></a>
### The Autodesk File

John Walker. Sources: 207. [Amazon amazon.com.au](https://www.amazon.com.au/dp/0934035636); product 0934035636; 1 total ratings; retrieved 2026-10-23T11:40:13.172Z. Count confidence: high. Evidence: 1 global rating. Snapshot: [saved response](../data/metadata_261023/raw/amazon-intake-0072-0934035636.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 16.00 / 20 | 12.80 |
| S — Systems integration | 12.00 / 17 | 8.47 |
| U — Transferable strategic utility | 11.00 / 15 | 11.00 |
| M — Mechanistic and causal depth | 9.00 / 12 | 9.00 |
| D — Information density and length justification | 7.00 / 10 | 4.90 |
| R — Durability and resistance to hype | 8.00 / 9 | 8.00 |
| F — Direct domain fit | 7.00 / 7 | 7.00 |
| A — Expert authority and intellectual standing | 4.00 / 5 | 4.00 |
| N — Narrative architecture and clarity | 2.00 / 3 | 2.00 |
| P — Authorial precision and finesse | 1.50 / 2 | 1.50 |

T11=0.00; T12=0.00; H13=-1.48; P14=-3.70; O15=-20.00.
Previous total 63.49 with unknown-count fallback. Revised total **43.49**, verdict **Low priority**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_hn42614722_261023_0229.md#intake-0072.

<a id="rem-u0302"></a>
### Regenesis: How Synthetic Biology Will Reinvent Nature and Ourselves

George M. Church/Ed Regis. Sources: 178. [Amazon amazon.com.au](https://www.amazon.com.au/dp/0465021751); product 0465021751; 355 total ratings; retrieved 2026-10-23T11:41:13.176Z. Count confidence: high. Evidence: 355 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-rem-u0302-0465021751.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 14.00 / 20 | 9.80 |
| S — Systems integration | 13.00 / 17 | 9.94 |
| U — Transferable strategic utility | 10.00 / 15 | 10.00 |
| M — Mechanistic and causal depth | 8.00 / 12 | 8.00 |
| D — Information density | 7.50 / 10 | 5.63 |
| R — Durability | 6.00 / 9 | 6.00 |
| F — Direct domain fit | 7.00 / 7 | 7.00 |
| A — Expert authority | 4.50 / 5 | 4.50 |
| N — Narrative architecture | 2.50 / 3 | 2.50 |
| P — Authorial precision | 1.50 / 2 | 1.50 |

T11=0.00; T12=0.00; H13=0.00; P14=-1.40; O15=-5.00.
Previous total 63.47 with unknown-count fallback. Revised total **58.47**, verdict **Low priority**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_remaining_261022_0042.md#rem-u0302.

<a id="g0564"></a>
### A Life Decoded

J. Craig Venter. Sources: 118. [Amazon amazon.com.au](https://www.amazon.com.au/dp/0670063584); product 0670063584; 130 total ratings; retrieved 2026-10-23T11:42:13.182Z. Count confidence: high. Evidence: 130 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-g0564-0670063584.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 15.00 / 20 | 11.25 |
| S — Systems integration | 12.00 / 17 | 8.47 |
| U — Transferable strategic utility | 10.00 / 15 | 10.00 |
| M — Mechanistic and causal depth | 8.00 / 12 | 8.00 |
| D — Information density | 7.00 / 10 | 4.90 |
| R — Durability | 8.00 / 9 | 8.00 |
| F — Direct domain fit | 6.00 / 7 | 6.00 |
| A — Expert authority | 5.00 / 5 | 5.00 |
| N — Narrative architecture | 3.00 / 3 | 3.00 |
| P — Authorial precision | 1.50 / 2 | 1.50 |

T11=0.00; T12=0.00; H13=-0.76; P14=-1.90; O15=-5.00.
Previous total 63.46 with unknown-count fallback. Revised total **58.46**, verdict **Low priority**. Book-evidence confidence: low.
Prior content assessment: analysis_glaspsci_261019_0144.md.

<a id="nbb441343d2"></a>
### The Computer Boys Take Over

Nathan L. Ensmenger. Sources: 134. [Amazon amazon.com.au](https://www.amazon.com.au/dp/0262050935); product 0262050935; 16 total ratings; retrieved 2026-10-23T11:43:13.189Z. Count confidence: high. Evidence: 16 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-nbb441343d2-0262050935.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 17.00 / 20 | 14.45 |
| S — Systems integration | 13.00 / 17 | 9.94 |
| U — Transferable strategic utility | 11.00 / 15 | 11.00 |
| M — Mechanistic and causal depth | 9.00 / 12 | 9.00 |
| D — Information density and length justification | 8.00 / 10 | 6.40 |
| R — Durability and resistance to hype | 9.00 / 9 | 9.00 |
| F — Direct domain fit | 7.00 / 7 | 7.00 |
| A — Expert authority and intellectual standing | 5.00 / 5 | 5.00 |
| N — Narrative architecture and clarity | 2.50 / 3 | 2.50 |
| P — Authorial precision and finesse | 2.00 / 2 | 2.00 |

T11=-10.00; T12=0.00; H13=-1.24; P14=-1.60; O15=-10.00.
Previous total 63.45 with unknown-count fallback. Revised total **53.45**, verdict **Low priority**. Book-evidence confidence: low.
Prior content assessment: analysis/analysis_hn36581241_261020_1731.md.

<a id="nfc78b44b21"></a>
### Why Beauty Is Truth

Ian Stewart. Sources: 143. [Amazon amazon.com.au](https://www.amazon.com.au/dp/0465082378); product 0465082378; 79 total ratings; retrieved 2026-10-23T11:44:13.191Z. Count confidence: high. Evidence: 79 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-nfc78b44b21-0465082378.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 16.00 / 20 | 12.80 |
| S — Systems integration | 11.00 / 17 | 7.12 |
| U — Transferable strategic utility | 8.00 / 15 | 8.00 |
| M — Mechanistic and causal depth | 9.00 / 12 | 9.00 |
| D — Information density and length justification | 8.00 / 10 | 6.40 |
| R — Durability and resistance to hype | 8.00 / 9 | 8.00 |
| F — Direct domain fit | 5.00 / 7 | 5.00 |
| A — Expert authority and intellectual standing | 4.50 / 5 | 4.50 |
| N — Narrative architecture and clarity | 3.00 / 3 | 3.00 |
| P — Authorial precision and finesse | 1.50 / 2 | 1.50 |

T11=0.00; T12=0.00; H13=0.00; P14=-1.90; O15=-10.00.
Previous total 63.42 with unknown-count fallback. Revised total **53.42**, verdict **Low priority**. Book-evidence confidence: moderate.
Prior content assessment: analysis/analysis_technicalnf_261020_1731.md.

<a id="n5ebb281344"></a>
### The Facemaker

Lindsey Fitzharris. Sources: 143, 212. [Amazon amazon.com.au](https://www.amazon.com.au/dp/0141990295); product 0141990295; 1,387 total ratings; retrieved 2026-10-23T11:45:13.191Z. Count confidence: high. Evidence: 1,387 global ratings. Snapshot: [saved response](../data/metadata_261023/raw/amazon-n5ebb281344-0141990295.html.gz).

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| E — Evidence and inferential integrity | 17.00 / 20 | 14.45 |
| S — Systems integration | 12.00 / 17 | 8.47 |
| U — Transferable strategic utility | 10.00 / 15 | 10.00 |
| M — Mechanistic and causal depth | 8.00 / 12 | 8.00 |
| D — Information density and length justification | 8.00 / 10 | 6.40 |
| R — Durability and resistance to hype | 8.00 / 9 | 8.00 |
| F — Direct domain fit | 4.00 / 7 | 4.00 |
| A — Expert authority and intellectual standing | 4.00 / 5 | 4.00 |
| N — Narrative architecture and clarity | 3.00 / 3 | 3.00 |
| P — Authorial precision and finesse | 1.50 / 2 | 1.50 |

T11=0.00; T12=0.00; H13=-4.04; P14=-0.40; O15=0.00.
Previous total 63.38 with unknown-count fallback. Revised total **63.38**, verdict **Low priority**. Book-evidence confidence: moderate.
Prior content assessment: analysis/analysis_technicalnf_261020_1731.md.

## Amazon link repairs

| Book | Previous URL | Corrected product URL | Evidence |
|---|---|---|---|
| Thinking in Systems: A Primer | [previous](https://www.amazon.de/s?k=Thinking%20in%20Systems%3A%20A%20Primer%20Donella%20Meadows) | [product](https://www.amazon.com.au/dp/1603580557) | Replaced search URL with an observed matching book product. 6,387 global ratings |
| How Big Things Get Done | [previous](https://www.amazon.de/s?k=How%20Big%20Things%20Get%20Done%20Bent%20Flyvbjerg%3B%20Dan%20Gardner%20paperback) | [product](https://www.amazon.com.au/dp/0593239512) | Replaced search URL with an observed matching book product. 2,069 global ratings |
| Sidewinder | [previous](https://www.amazon.de/s?k=Sidewinder%20Ron%20Westrum) | [product](https://www.amazon.com.au/dp/1591149819) | Replaced search URL with an observed matching book product. https://www.amazon.com.au/dp/1591149819 |
| The Pentium Chronicles | [previous](https://www.amazon.de/dp/047046903X) | [product](https://www.amazon.com.au/dp/0471736171) | Replaced an unverified product identifier after a failed lookup with an observed matching product. https://www.amazon.com.au/dp/0471736171 |
| Enriching the Earth | [previous](https://www.amazon.de/s?k=Enriching%20the%20Earth%20Vaclav%20Smil%20paperback) | [product](https://www.amazon.com.au/dp/0262693135) | Replaced search URL with an observed matching book product. 16 global ratings |
| Good Strategy Bad Strategy: The Difference and Why It Matters | [previous](https://www.amazon.de/s?k=Good%20Strategy%20Bad%20Strategy%3A%20The%20Difference%20and%20Why%20It%20Matters%20Richard%20Rumelt%20paperback) | [product](https://www.amazon.com.au/dp/1846684803) | Replaced search URL with an observed matching book product. 5,720 global ratings |
| The Art of Statistics | [previous](https://www.amazon.de/dp/0241258758) | [product](https://www.amazon.com.au/dp/1541675703) | Replaced ebook-ISBN product guess with an observed print product. https://www.amazon.com.au/dp/1541675703 |
| Spacesuit: Fashioning Apollo | [previous](https://www.amazon.de/s?k=Spacesuit%3A%20Fashioning%20Apollo%20Nicholas%20de%20Monchaux) | [product](https://www.amazon.com/dp/026201520X) | Replaced search URL with an observed matching book product. https://mitpress.mit.edu/9780262015202/spacesuit/ |
| The Everything Store | [previous](https://www.amazon.de/s?k=The%20Everything%20Store%20Brad%20Stone%20paperback) | [product](https://www.amazon.com.au/dp/0316219282) | Replaced search URL with an observed matching book product. 12,395 global ratings |
| Numbers Don’t Lie | [previous](https://www.amazon.de/s?k=Numbers%20Don%E2%80%99t%20Lie%20Vaclav%20Smil%20paperback) | [product](https://www.amazon.com.au/dp/0143136224) | Replaced search URL with an observed matching book product. 3,601 global ratings |
| How To Build A Car | [previous](https://www.amazon.de/s?k=How%20To%20Build%20A%20Car%20Adrian%20Newey%20paperback) | [product](https://www.amazon.com.au/dp/0008271100) | Replaced search URL with an observed matching book product. 8,966 global ratings |
| The Man from the Future: The Visionary Life of John von Neumann | [previous](https://www.amazon.de/s?k=The%20Man%20from%20the%20Future%3A%20The%20Visionary%20Life%20of%20John%20von%20Neumann%20Ananyo%20Bhattacharya%20paperback) | [product](https://www.amazon.com.au/dp/1324003995) | Replaced search URL with an observed matching book product. 1,501 global ratings |
| Build | [previous](https://www.amazon.de/s?k=Build%20Tony%20Fadell%20paperback) | [product](https://www.amazon.com.au/dp/0063046067) | Replaced search URL with an observed matching book product. 3,017 global ratings |
| Outside the Box: How Globalization Changed from Moving Stuff to Spreading Ideas | [previous](https://www.amazon.de/s?k=Outside%20the%20Box%3A%20How%20Globalization%20Changed%20from%20Moving%20Stuff%20to%20Spreading%20Ideas%20Marc%20Levinson%20paperback) | [product](https://www.amazon.com.au/dp/0691227098) | Replaced search URL with an observed matching book product. 111 global ratings |
| Focus: The ASML Way | [previous](https://www.amazon.de/s?k=Focus%3A%20The%20ASML%20Way%20Marc%20Hijink%20paperback) | [product](https://www.amazon.com.au/dp/946382362X) | Replaced search URL with an observed matching book product. 424 global ratings |
| A Biography of the Pixel | [previous](https://www.amazon.de/s?k=A%20Biography%20of%20the%20Pixel%20Alvy%20Ray%20Smith%20paperback) | [product](https://www.amazon.com.au/dp/0262542455) | Replaced search URL with an observed matching book product. 106 global ratings |
| Genentech: The Beginnings of Biotech | [previous](https://www.amazon.de/s?k=Genentech%3A%20The%20Beginnings%20of%20Biotech%20Sally%20Smith%20Hughes%20paperback) | [product](https://www.amazon.com.au/dp/022604551X) | Replaced search URL with an observed matching book product. 324 global ratings |
| Honeybee Democracy | [previous](https://www.amazon.de/dp/1282820990) | [product](https://www.amazon.com.au/dp/0691147213) | Replaced an unverified product identifier after a failed lookup with an observed matching product. https://www.amazon.com.au/dp/0691147213 |
| Atomic Accidents | [previous](https://www.amazon.de/s?k=Atomic%20Accidents%20James%20Mahaffey%20paperback) | [product](https://www.amazon.com.au/dp/1605986801) | Replaced search URL with an observed matching book product. 1,733 global ratings |
| Global Catastrophes and Trends | [previous](https://www.amazon.de/s?k=Global%20Catastrophes%20and%20Trends%20Vaclav%20Smil%20paperback) | [product](https://www.amazon.com.au/dp/0262518228) | Replaced search URL with an observed matching book product. 109 global ratings |
| Safeware | [previous](https://www.amazon.de/s?k=Safeware%20Nancy%20G.%20Leveson) | [product](https://www.amazon.com.au/dp/0201119722) | Replaced search URL with an observed matching book product. 15 global ratings |
| Stealth: The Secret Contest to Invent Invisible Aircraft | [previous](https://www.amazon.de/s?k=Stealth%3A%20The%20Secret%20Contest%20to%20Invent%20Invisible%20Aircraft%20Peter%20Westwick%20paperback) | [product](https://www.amazon.com.au/dp/0190677449) | Replaced search URL with an observed matching book product. ["513 global ratings"] |
| Show Stopper! | [previous](https://www.amazon.de/s?k=Show%20Stopper!%20G.%20Pascal%20Zachary%20paperback) | [product](https://www.amazon.com.au/dp/0316911135) | Replaced search URL with an observed matching book product. https://www.amazon.com.au/dp/0316911135 |
| Calling Bullshit | [previous](https://www.amazon.de/s?k=Calling%20Bullshit%20Carl%20T.%20Bergstrom%3B%20Jevin%20D.%20West%20paperback) | [product](https://www.amazon.com.au/dp/0241327237) | Replaced search URL with an observed matching book product. 1,392 global ratings |
| More and More and More | [previous](https://www.amazon.de/s?k=More%20and%20More%20and%20More%20Jean-Baptiste%20Fressoz%20paperback) | [product](https://www.amazon.com.au/dp/0241718899) | Replaced search URL with an observed matching book product. 31 global ratings |
| Fly by Wire | [previous](https://www.amazon.de/s?k=Fly%20by%20Wire%20William%20Langewiesche%20paperback) | [product](https://www.amazon.com.au/dp/031265538X) | Replaced search URL with an observed matching book product. 350 global ratings |
| The Toyota Way | [previous](https://www.amazon.de/dp/0071435638) | [product](https://www.amazon.com.au/dp/0071392319) | Replaced an unverified product identifier after a failed lookup with an observed matching product. https://www.amazon.com.au/dp/0071392319 |
| Grace Hopper and the Invention of the Information Age | [previous](https://www.amazon.de/dp/128269426X) | [product](https://www.amazon.com.au/dp/0262517264) | Replaced an unverified product identifier after a failed lookup with an observed matching product. https://www.amazon.com.au/dp/0262517264 |
| Making Software | [previous](https://www.amazon.de/dp/144939776X) | [product](https://www.amazon.com.au/dp/0596808321) | Replaced ebook-ISBN product guess with an observed print product. https://www.amazon.com.au/dp/0596808321 |
| Superforecasting: The Art and Science of Prediction | [previous](https://www.amazon.de/s?k=Superforecasting%20Philip%20Tetlock%3B%20Dan%20Gardner%20paperback) | [product](https://www.amazon.com.au/dp/0804136718) | Replaced search URL with an observed matching book product. 4,607 global ratings |
| 747: Creating the World's First Jumbo Jet and Other Adventures from a Life in Aviation | [previous](https://www.amazon.de/s?k=747%3A%20Creating%20the%20World's%20First%20Jumbo%20Jet%20and%20Other%20Adventures%20from%20a%20Life%20in%20Aviation%20Joe%20Sutter%3B%20Jay%20Spenser%20paperback) | [product](https://www.amazon.com.au/dp/0060882417) | Replaced search URL with an observed matching book product. 222 global ratings |
| A Crack in Creation: Gene Editing and the Unthinkable Power to Control Evolution | [previous](https://www.amazon.de/s?k=A%20Crack%20in%20Creation%3A%20Gene%20Editing%20and%20the%20Unthinkable%20Power%20to%20Control%20Evolution%20Jennifer%20A.%20Doudna%2C%20Samuel%20H.%20Sternberg%20paperback) | [product](https://www.amazon.com.au/dp/0544716949) | Replaced search URL with an observed matching book product. 2,055 global ratings |
| The Logic of Failure | [previous](https://www.amazon.de/s?k=The%20Logic%20of%20Failure%20Dietrich%20D%C3%B6rner%20paperback) | [product](https://www.amazon.com.au/dp/0201479486) | Replaced search URL with an observed matching book product. 223 global ratings |
| The Globalization Paradox: Democracy and the Future of the World Economy | [previous](https://www.amazon.de/s?k=The%20Globalization%20Paradox%3A%20Democracy%20and%20the%20Future%20of%20the%20World%20Economy%20Dani%20Rodrik%20paperback) | [product](https://www.amazon.com.au/dp/0393071618) | Replaced search URL with an observed matching book product. 431 global ratings |
| A Fiery Peace in a Cold War | [previous](https://www.amazon.de/s?k=A%20Fiery%20Peace%20in%20a%20Cold%20War%20Neil%20Sheehan%20paperback) | [product](https://www.amazon.com.au/dp/0679745491) | Replaced search URL with an observed matching book product. 129 global ratings |
| Colossus: The Secrets of Bletchley Park's Codebreaking Computers | [previous](https://www.amazon.de/s?k=Colossus%3A%20The%20Secrets%20of%20Bletchley%20Park's%20Codebreaking%20Computers%20B.%20Jack%20Copeland%20(editor) | [product](https://www.amazon.com.au/dp/0199578141) | Replaced search URL with an observed matching book product. https://www.amazon.com.au/dp/0199578141 |
| The Analogue Alternative | [previous](https://www.amazon.de/dp/1134699166) | [product](https://www.amazon.com.au/dp/041586299X) | Replaced an unverified product identifier after a failed lookup with an observed matching product. https://www.amazon.com.au/dp/041586299X |
| Atoms and Ashes | [previous](https://www.amazon.de/s?k=Atoms%20and%20Ashes%20Serhii%20Plokhy%20paperback) | [product](https://www.amazon.com.au/dp/1324021047) | Replaced search URL with an observed matching book product. 257 global ratings |
| The Sciences of the Artificial | [previous](https://www.amazon.de/s?k=The%20Sciences%20of%20the%20Artificial%20Herbert%20A.%20Simon%20paperback) | [product](https://www.amazon.com.au/dp/0262537532) | Replaced search URL with an observed matching book product. 104 global ratings |
| The Scout Mindset | [previous](https://www.amazon.de/s?k=The%20Scout%20Mindset%20Julia%20Galef) | [product](https://www.amazon.com.au/dp/0735217556) | Replaced search URL with an observed matching book product. 1,805 global ratings |
| Humble Pi: A Comedy of Maths Errors | [previous](https://www.amazon.de/s?k=Humble%20Pi%3A%20A%20Comedy%20of%20Maths%20Errors%20Matt%20Parker%20paperback) | [product](https://www.amazon.com.au/dp/0141989149) | Replaced search URL with an observed matching book product. 4,855 global ratings |
| Making Sense of Chaos | [previous](https://www.amazon.de/s?k=Making%20Sense%20of%20Chaos%20J.%20Doyne%20Farmer%20paperback) | [product](https://www.amazon.com.au/dp/0300273770) | Replaced search URL with an observed matching book product. 184 global ratings |
| The Symmetries of Things | [previous](https://www.amazon.de/s?k=The%20Symmetries%20of%20Things%20John%20H.%20Conway%3B%20Heidi%20Burgiel%3B%20Chaim%20Goodman-Strauss) | [product](https://www.amazon.com.au/dp/1568812205) | Replaced search URL with an observed matching book product. 47 global ratings |
| Thinking Strategically | [previous](https://www.amazon.de/s?k=Thinking%20Strategically%20Avinash%20K.%20Dixit%3B%20Barry%20J.%20Nalebuff) | [product](https://www.amazon.com.au/dp/0393310353) | Replaced search URL with an observed matching book product. 703 global ratings |
| Inventing Accuracy | [previous](https://www.amazon.de/s?k=Inventing%20Accuracy%20Donald%20MacKenzie%20paperback) | [product](https://www.amazon.it/dp/0262631474) | Replaced search URL with an observed matching book product. https://www.amazon.it/dp/0262631474 |
| The Secret Horsepower Race | [previous](https://www.amazon.de/s?k=The%20Secret%20Horsepower%20Race%20Calum%20E.%20Douglas%20paperback) | [product](https://www.amazon.com.au/dp/1911658506) | Replaced search URL with an observed matching book product. 457 global ratings |
| To Rule the Waves | [previous](https://www.amazon.de/s?k=To%20Rule%20the%20Waves%20Bruce%20Jones%20paperback) | [product](https://www.amazon.com/dp/1982127260) | Replaced search URL with an observed matching book product. https://www.amazon.com/dp/1982127260 |
| Mindware | [previous](https://www.amazon.de/s?k=Mindware%20Richard%20E.%20Nisbett%20paperback) | [product](https://www.amazon.com.au/dp/0374536244) | Replaced search URL with an observed matching book product. https://www.amazon.com.au/dp/0374536244 |
| An Introduction to General Systems Thinking | [previous](https://www.amazon.de/s?k=An%20Introduction%20to%20General%20Systems%20Thinking%20Gerald%20M.%20Weinberg%20paperback) | [product](https://www.amazon.com.au/dp/0471925632) | Replaced search URL with an observed matching book product. 149 global ratings |
| UNIX: A History and a Memoir | [previous](https://www.amazon.de/s?k=UNIX%3A%20A%20History%20and%20a%20Memoir%20Brian%20W.%20Kernighan%20paperback) | [product](https://www.amazon.com.au/dp/1695978552) | Replaced search URL with an observed matching book product. 761 global ratings |
| The Billion Dollar Molecule | [previous](https://www.amazon.de/s?k=The%20Billion%20Dollar%20Molecule%20Barry%20Werth%20paperback) | [product](https://www.amazon.com.au/dp/0671510576) | Replaced search URL with an observed matching book product. 263 global ratings |
| Ninety Percent of Everything: Inside Shipping, the Invisible Industry That Puts Clothes on Your Back, Gas in Your Car, and Food on Your Plate | [previous](https://www.amazon.de/s?k=Ninety%20Percent%20of%20Everything%3A%20Inside%20Shipping%2C%20the%20Invisible%20Industry%20That%20Puts%20Clothes%20on%20Your%20Back%2C%20Gas%20in%20Your%20Car%2C%20and%20Food%20on%20Your%20Plate%20Rose%20George%20paperback) | [product](https://www.amazon.com.au/dp/0805092633) | Replaced search URL with an observed matching book product. 927 global ratings |
| The Imagineers of War | [previous](https://www.amazon.de/s?k=The%20Imagineers%20of%20War%20Sharon%20Weinberger%20paperback) | [product](https://www.amazon.com.au/dp/0804169721) | Replaced search URL with an observed matching book product. 213 global ratings |
| The Sporty Game | [previous](https://www.amazon.de/s?k=The%20Sporty%20Game%20John%20Newhouse%20paperback) | [product](https://www.amazon.com/dp/0394514475) | Replaced search URL with an observed matching book product. https://www.amazon.com/dp/0394514475 |
| Sources of Power: How People Make Decisions | [previous](https://www.amazon.de/s?k=Sources%20of%20Power%3A%20How%20People%20Make%20Decisions%20Gary%20Klein%20paperback) | [product](https://www.amazon.com.au/dp/0262611465) | Replaced search URL with an observed matching book product. 357 global ratings |
| Truth, Lies, and O-Rings: Inside the Space Shuttle Challenger Disaster | [previous](https://www.amazon.de/s?k=Truth%2C%20Lies%2C%20and%20O-Rings%20Allan%20McDonald%20paperback) | [product](https://www.amazon.com.au/dp/0813033268) | Replaced search URL with an observed matching book product. 564 global ratings |
| Kicking Away the Ladder: Development Strategy in Historical Perspective | [previous](https://www.amazon.de/s?k=Kicking%20Away%20the%20Ladder%3A%20Development%20Strategy%20in%20Historical%20Perspective%20Ha-Joon%20Chang%20paperback) | [product](https://www.amazon.com.au/dp/1843310279) | Replaced search URL with an observed matching book product. https://www.amazon.com.au/dp/1843310279 |
| The Code | [previous](https://www.amazon.de/s?k=The%20Code%20Margaret%20O'Mara) | [product](https://www.amazon.com/dp/0399562206) | Replaced search URL with an observed matching book product. Publisher structured edition record explicitly maps the matching print edition to this Amazon vendor identifier. |
| The Pentagon's Brain: An Uncensored History of DARPA, America's Top-Secret Military Research Agency | [previous](https://www.amazon.de/s?k=The%20Pentagon's%20Brain%3A%20An%20Uncensored%20History%20of%20DARPA%2C%20America's%20Top-Secret%20Military%20Research%20Agency%20Annie%20Jacobsen%20paperback) | [product](https://www.amazon.com.au/dp/0316371769) | Replaced search URL with an observed matching book product. 2,269 global ratings |
| The Vital Question | [previous](https://www.amazon.de/s?k=The%20Vital%20Question%20Nick%20Lane%20paperback) | [product](https://www.amazon.com.au/dp/1781250367) | Replaced search URL with an observed matching book product. 306 global ratings |
| Frostbite | [previous](https://www.amazon.de/s?k=Frostbite%20Nicola%20Twilley%20paperback) | [product](https://www.amazon.com.au/dp/0735223289) | Replaced search URL with an observed matching book product. 423 global ratings |
| The Technology Trap | [previous](https://www.amazon.de/s?k=The%20Technology%20Trap%20Carl%20Benedikt%20Frey%20paperback) | [product](https://www.amazon.com.au/dp/0691210799) | Replaced search URL with an observed matching book product. 239 global ratings |
| Apollo 13 (originally Lost Moon: The Perilous Voyage of Apollo 13) | [previous](https://www.amazon.de/s?k=Apollo%2013%20%2F%20Lost%20Moon%20Jim%20Lovell%20paperback) | [product](https://www.amazon.com.au/dp/0618619585) | Replaced search URL with an observed matching book product. ["2,141 global ratings"] |
| Volt Rush | [previous](https://www.amazon.de/s?k=Volt%20Rush%20Henry%20Sanderson%20paperback) | [product](https://www.amazon.com.au/dp/0861543750) | Replaced search URL with an observed matching book product. 378 global ratings |
| Quantum Computing Since Democritus | [previous](https://www.amazon.de/s?k=Quantum%20Computing%20Since%20Democritus%20%20paperback) | [product](https://www.amazon.com.au/dp/0521199565) | Replaced search URL with an observed matching book product. 269 global ratings |
| Change and Variations: A History of Differential Equations to 1900 | [previous](https://www.amazon.de/s?k=Change%20and%20Variations%3A%20A%20History%20of%20Differential%20Equations%20to%201900%20Jeremy%20Gray%20paperback) | [product](https://www.amazon.com.au/dp/3030705749) | Replaced the identifier of a different book with an observed matching product. https://www.amazon.com.au/dp/3030705749 |
| Ideas That Created the Future: Classic Papers of Computer Science | [previous](https://www.amazon.de/s?k=Ideas%20That%20Created%20the%20Future%3A%20Classic%20Papers%20of%20Computer%20Science%20Harry%20R.%20Lewis%20(editor) | [product](https://www.amazon.com.au/dp/0262045303) | Replaced search URL with an observed matching book product. 58 global ratings |
| The Codebreakers | [previous](https://www.amazon.de/s?k=The%20Codebreakers%20David%20Kahn%20paperback) | [product](https://www.amazon.com.au/dp/0684831309) | Replaced search URL with an observed matching book product. 224 global ratings |
| A New History of Modern Computing | [previous](https://www.amazon.de/s?k=A%20New%20History%20of%20Modern%20Computing%20Thomas%20Haigh%3B%20Paul%20E.%20Ceruzzi%20paperback) | [product](https://www.amazon.com.au/dp/0262542900) | Replaced search URL with an observed matching book product. 33 global ratings |
| Ripples in Spacetime | [previous](https://www.amazon.de/s?k=Ripples%20in%20Spacetime%20Govert%20Schilling%20%26%20Martin%20Rees%20paperback) | [product](https://www.amazon.com.au/dp/0674237749) | Replaced search URL with an observed matching book product. https://www.amazon.com.au/dp/0674237749 |
| Minitel: Welcome to the Internet | [previous](https://www.amazon.de/s?k=Minitel%3A%20Welcome%20to%20the%20Internet%20Julien%20Mailland%3B%20Kevin%20Driscoll) | [product](https://www.amazon.com.au/dp/0262036223) | Replaced search URL with an observed matching book product. https://www.amazon.com.au/dp/0262036223 |
| Underground Empire | [previous](https://www.amazon.de/s?k=Underground%20Empire%20Henry%20Farrell%3B%20Abraham%20Newman%20paperback) | [product](https://www.amazon.com.au/dp/1250840546) | Replaced search URL with an observed matching book product. 453 global ratings |
| The Art of Strategy: A Game Theorist's Guide to Success in Business and Life | [previous](https://www.amazon.de/s?k=The%20Art%20of%20Strategy%3A%20A%20Game%20Theorist's%20Guide%20to%20Success%20in%20Business%20and%20Life%20Avinash%20K.%20Dixit%2C%20Barry%20J.%20Nalebuff%20paperback) | [product](https://www.amazon.com.au/dp/0393062430) | Replaced search URL with an observed matching book product. https://www.amazon.com.au/dp/0393062430 |
| The Founders | [previous](https://www.amazon.de/s?k=The%20Founders%20Jimmy%20Soni) | [product](https://www.amazon.com.au/dp/150119724X) | Replaced search URL with an observed matching book product. https://www.amazon.com.au/dp/150119724X |
| Doing the Impossible: George E. Mueller & the Management of NASA’s Human Spaceflight Program | [previous](https://www.amazon.de/s?k=Doing%20the%20Impossible%3A%20George%20E.%20Mueller%20%26%20the%20Management%20of%20NASA%E2%80%99s%20Human%20Spaceflight%20Program%20Arthur%20L.%20Slotkin%20paperback) | [product](https://www.amazon.com.au/dp/1461437008) | Replaced search URL with an observed matching book product. 18 global ratings |
| A Brief History of Mathematical Thought | [previous](https://www.amazon.de/s?k=A%20Brief%20History%20of%20Mathematical%20Thought%20Luke%20Heaton) | [product](https://www.amazon.com.au/dp/0190621761) | Replaced search URL with an observed matching book product. https://www.amazon.com.au/dp/0190621761 |
| Rationality | [previous](https://www.amazon.de/s?k=Rationality%20Steven%20Pinker) | [product](https://www.amazon.com.au/dp/052556201X) | Replaced search URL with an observed matching book product. 2,022 global ratings |
| Why Machines Learn | [previous](https://www.amazon.de/s?k=Why%20Machines%20Learn%20Anil%20Ananthaswamy%20paperback) | [product](https://www.amazon.com.au/dp/0593185749) | Replaced search URL with an observed matching book product. 917 global ratings |
| In Pursuit of Unicorns: A Journey Through 50 Years of Biotechnology | [previous](https://www.amazon.de/s?k=In%20Pursuit%20of%20Unicorns%3A%20A%20Journey%20Through%2050%20Years%20of%20Biotechnology%20Tim%20Harris%20paperback) | [product](https://www.amazon.com.au/dp/1621825612) | Replaced search URL with an observed matching book product. https://www.amazon.com.au/dp/1621825612 |
| Bayesian Rationality: The Probabilistic Approach to Human Reasoning | [previous](https://www.amazon.de/s?k=Bayesian%20Rationality%3A%20The%20Probabilistic%20Approach%20to%20Human%20Reasoning%20Mike%20Oaksford%3B%20Nick%20Chater%20paperback) | [product](https://www.amazon.com.au/dp/0198524498) | Replaced search URL with an observed matching book product. https://www.amazon.com.au/dp/0198524498 |
| The Code Breaker | [previous](https://www.amazon.de/s?k=The%20Code%20Breaker%20Walter%20Isaacson%20paperback) | [product](https://www.amazon.com.au/dp/1982115866) | Replaced search URL with an observed matching book product. 13,416 global ratings |
| Into the Deep | [previous](https://www.amazon.de/s?k=Into%20the%20Deep%20Robert%20D.%20Ballard%3B%20Christopher%20Drew%20paperback) | [product](https://www.amazon.it/dp/1426220995) | Replaced search URL with an observed matching book product. ["<span id=\"acrCustomerReviewText\" aria-label=\"490 Recensioni\" class=\"a-size-small\">(490)</span>"] |
| Fab: From Personal Computers to Personal Fabrication | [previous](https://www.amazon.de/s?k=Fab%3A%20From%20Personal%20Computers%20to%20Personal%20Fabrication%20Neil%20Gershenfeld%20paperback) | [product](https://www.amazon.com.au/dp/0465027458) | Replaced search URL with an observed matching book product. https://www.amazon.com.au/dp/0465027458 |
| The General Theory of Employment, Interest, and Money | [previous](https://www.amazon.de/s?k=The%20General%20Theory%20of%20Employment%2C%20Interest%2C%20and%20Money%20John%20Maynard%20Keynes%20paperback) | [product](https://www.amazon.com.au/dp/0230004768) | Replaced search URL with an observed matching book product. https://www.amazon.com.au/dp/0230004768 |
| Chasing the Rabbit | [previous](https://www.amazon.de/s?k=Chasing%20the%20Rabbit%20Steven%20J.%20Spear%20paperback) | [product](https://www.amazon.com.au/dp/0071499881) | Replaced search URL with an observed matching book product. 36 global ratings |
| The Seven Sisters | [previous](https://www.amazon.de/dp/0553204491) | [product](https://www.amazon.com.au/dp/0553242377) | Replaced the identifier of a different book with an observed matching product. https://www.amazon.com.au/dp/0553242377 |
| Crude Capitalism | [previous](https://www.amazon.de/s?k=Crude%20Capitalism%20Adam%20Hanieh%20paperback) | [product](https://www.amazon.com.au/dp/1839763426) | Replaced search URL with an observed matching book product. 25 global ratings |
| Accelerated Expertise: Training for High Proficiency in a Complex World | [previous](https://www.amazon.de/s?k=Accelerated%20Expertise%3A%20Training%20for%20High%20Proficiency%20in%20a%20Complex%20World%20Robert%20R.%20Hoffman%3B%20Paul%20Ward%3B%20Paul%20J.%20Feltovich%3B%20Lia%20DiBello%3B%20Stephen%20M.%20Fiore%3B%20Dee%20H.%20Andrews%20paperback) | [product](https://www.amazon.com.au/dp/184872652X) | Replaced search URL with an observed matching book product. https://www.amazon.com.au/dp/184872652X |
| HBR's 10 Must Reads on Strategy (including featured article “What Is Strategy?” by Michael E. Porter) | [previous](https://www.amazon.de/s?k=HBR's%2010%20Must%20Reads%20on%20Strategy%20(including%20featured%20article%20%E2%80%9CWhat%20Is%20Strategy%3F%E2%80%9D%20by%20Michael%20E.%20Porter) | [product](https://www.amazon.com.au/dp/1422157989) | Replaced search URL with an observed matching book product. 1,312 global ratings |
| The Evening Star | [previous](https://www.amazon.de/s?k=The%20Evening%20Star%20Henry%20S.%20F.%20Cooper%20Jr.) | [product](https://www.amazon.com.au/dp/0374150001) | Replaced search URL with an observed matching book product. https://www.amazon.com.au/dp/0374150001 |
| Engineering: A Very Short Introduction | [previous](https://www.amazon.de/s?k=Engineering%3A%20A%20Very%20Short%20Introduction%20David%20Blockley%20paperback) | [product](https://www.amazon.com.au/dp/0199578699) | Replaced search URL with an observed matching book product. ["168 global ratings"] |
| This Is for Everyone | [previous](https://www.amazon.de/s?k=This%20Is%20for%20Everyone%20Tim%20Berners-Lee%20paperback) | [product](https://www.amazon.com/dp/1035023679) | Replaced search URL with an observed matching book product. https://www.amazon.com/dp/1035023679 |
| Invention: The Care and Feeding of Ideas | [previous](https://www.amazon.de/s?k=Invention%3A%20The%20Care%20and%20Feeding%20of%20Ideas%20Norbert%20Wiener) | [product](https://www.amazon.com.au/dp/0262731118) | Replaced search URL with an observed matching book product. https://www.amazon.com.au/dp/0262731118 |
| The Highest Exam | [previous](https://www.amazon.de/s?k=The%20Highest%20Exam%20Ruixue%20Jia%3B%20Hongbin%20Li%3B%20Claire%20Cousineau%20paperback) | [product](https://www.amazon.com.au/dp/0674295390) | Replaced search URL with an observed matching book product. https://www.amazon.com.au/dp/0674295390 |
| Chamber Divers | [previous](https://www.amazon.de/s?k=Chamber%20Divers%20Rachel%20Lance%20paperback) | [product](https://www.amazon.com.au/dp/0593184947) | Replaced search URL with an observed matching book product. 125 global ratings |
| A History of Mathematics: From Mesopotamia to Modernity | [previous](https://www.amazon.de/s?k=A%20History%20of%20Mathematics%3A%20From%20Mesopotamia%20to%20Modernity%20Luke%20Hodgkin%20paperback) | [product](https://www.amazon.com.au/dp/0198529376) | Replaced search URL with an observed matching book product. https://www.amazon.com.au/dp/0198529376 |
| Now It Can Be Told | [previous](https://www.amazon.de/s?k=Now%20It%20Can%20Be%20Told%20Leslie%20R.%20Groves%20paperback) | [product](https://www.amazon.com.au/dp/0306801892) | Replaced search URL with an observed matching book product. https://www.amazon.com.au/dp/0306801892 |
| Trading and Exchanges | [previous](https://www.amazon.de/s?k=Trading%20and%20Exchanges%20Larry%20Harris) | [product](https://www.amazon.com.au/dp/0195144708) | Replaced search URL with an observed matching book product. ["100 global ratings"] |
| Computation and Human Experience | [previous](https://www.amazon.de/s?k=Computation%20and%20Human%20Experience%20Philip%20E.%20Agre%20paperback) | [product](https://www.amazon.com.au/dp/052138432X) | Replaced search URL with an observed matching book product. https://www.amazon.com.au/dp/052138432X |
| A History of Computing in the Twentieth Century | [previous](https://www.amazon.de/s?k=A%20History%20of%20Computing%20in%20the%20Twentieth%20Century%20Nicholas%20Metropolis%3B%20Jack%20Howlett%3B%20Gian-Carlo%20Rota%20(editors) | [product](https://www.amazon.com.au/dp/0124916503) | Replaced search URL with an observed matching book product. https://www.amazon.com.au/dp/0124916503 |
| Empires of the Sky | [previous](https://www.amazon.de/s?k=Empires%20of%20the%20Sky%20Alexander%20Rose%20paperback) | [product](https://www.amazon.com.au/dp/081298997X) | Replaced search URL with an observed matching book product. 369 global ratings |
| Turing’s Cathedral | [previous](https://www.amazon.de/s?k=Turing%E2%80%99s%20Cathedral%20George%20Dyson%20paperback) | [product](https://www.amazon.com.au/dp/0713997508) | Replaced search URL with an observed matching book product. 389 global ratings |
| The Worlds I See | [previous](https://www.amazon.de/s?k=The%20Worlds%20I%20See%20Fei-Fei%20Li%20paperback) | [product](https://www.amazon.com.au/dp/1250897939) | Replaced search URL with an observed matching book product. ["1,469 global ratings"] |
| Storm in a Teacup: The Physics of Everyday Life | [previous](https://www.amazon.de/s?k=Storm%20in%20a%20Teacup%3A%20The%20Physics%20of%20Everyday%20Life%20Helen%20Czerski%20paperback) | [product](https://www.amazon.com.au/dp/0393248968) | Replaced search URL with an observed matching book product. 1,789 global ratings |
| The Switch | [previous](https://www.amazon.de/s?k=The%20Switch%20Chris%20McDonald) | [product](https://www.amazon.com.au/dp/1736385801) | Replaced search URL with an observed matching book product. https://www.amazon.com.au/dp/1736385801 |
| The Effective Executive | [previous](https://www.amazon.de/s?k=The%20Effective%20Executive%20Peter%20F.%20Drucker) | [product](https://www.amazon.com.au/dp/0330025074) | Replaced search URL with an observed matching book product. 3,613 global ratings |
| The Coming Wave | [previous](https://www.amazon.de/s?k=The%20Coming%20Wave%20Mustafa%20Suleyman%3B%20Michael%20Bhaskar%20paperback) | [product](https://www.amazon.com.au/dp/0593593979) | Replaced search URL with an observed matching book product. 5,293 global ratings |
| Flying Without Wings | [previous](https://www.amazon.de/s?k=Flying%20Without%20Wings%20Milton%20O.%20Thompson%3B%20Curtis%20Peebles) | [product](https://www.amazon.com.au/dp/0947554785) | Replaced search URL with an observed matching book product. https://www.amazon.com.au/dp/0947554785 |
| The Perfect Theory: A Century of Geniuses and the Battle over General Relativity | [previous](https://www.amazon.de/dp/0748124152) | [product](https://www.amazon.com.au/dp/0349123675) | Replaced an unverified product identifier after a failed lookup with an observed matching product. https://www.amazon.com.au/dp/0349123675 |
| Are We Smart Enough to Know How Smart Animals Are? | [previous](https://www.amazon.de/s?k=Are%20We%20Smart%20Enough%20to%20Know%20How%20Smart%20Animals%20Are%3F%20Frans%20de%20Waal%20paperback) | [product](https://www.amazon.com.au/dp/1783783060) | Replaced search URL with an observed matching book product. 1,855 global ratings |
| How to Avoid a Climate Disaster | [previous](https://www.amazon.de/s?k=How%20to%20Avoid%20a%20Climate%20Disaster%20Bill%20Gates%20paperback) | [product](https://www.amazon.com.au/dp/0593081854) | Replaced search URL with an observed matching book product. 11,006 global ratings |
| How To: Absurd Scientific Advice for Common Real-World Problems | [previous](https://www.amazon.de/s?k=How%20To%3A%20Absurd%20Scientific%20Advice%20for%20Common%20Real-World%20Problems%20Randall%20Munroe%20paperback) | [product](https://www.amazon.com.au/dp/1473680328) | Replaced search URL with an observed matching book product. 7,465 global ratings |
| China on the Ground in Latin America: Challenges for the Chinese and Impacts on the Region (The Political Economy of East Asia) | [previous](https://www.amazon.de/s?k=China%20on%20the%20Ground%20in%20Latin%20America%3A%20Challenges%20for%20the%20Chinese%20and%20Impacts%20on%20the%20Region%20(The%20Political%20Economy%20of%20East%20Asia) | [product](https://www.amazon.com.au/dp/1137439769) | Replaced search URL with an observed matching book product. https://www.amazon.com.au/dp/1137439769 |
| Grunt: The Curious Science of Humans at War | [previous](https://www.amazon.de/s?k=Grunt%3A%20The%20Curious%20Science%20of%20Humans%20at%20War%20Mary%20Roach%20paperback) | [product](https://www.amazon.com.au/dp/1410490696) | Replaced search URL with an observed matching book product. https://www.amazon.com.au/dp/1410490696 |
| The Glass Universe | [previous](https://www.amazon.de/s?k=The%20Glass%20Universe%20Dava%20Sobel%20paperback) | [product](https://www.amazon.com.au/dp/0143111345) | Replaced search URL with an observed matching book product. https://www.amazon.com.au/dp/0143111345 |
| Titan II | [previous](https://www.amazon.de/s?k=Titan%20II%20David%20K.%20Stumpf%20paperback) | [product](https://www.amazon.com.au/dp/1557286019) | Replaced search URL with an observed matching book product. 60 global ratings |
| Evolution: The Triumph of an Idea | [previous](https://www.amazon.de/s?k=Evolution%3A%20The%20Triumph%20of%20an%20Idea%20Carl%20Zimmer) | [product](https://www.amazon.com.au/dp/0060958502) | Replaced search URL with an observed matching book product. https://www.amazon.com.au/dp/0060958502 |
| Global Inequality: A New Approach for the Age of Globalization | [previous](https://www.amazon.de/s?k=Global%20Inequality%3A%20A%20New%20Approach%20for%20the%20Age%20of%20Globalization%20Branko%20Milanovic%20paperback) | [product](https://www.amazon.com.au/dp/067473713X) | Replaced search URL with an observed matching book product. 312 global ratings |
| Companion Encyclopedia of the History and Philosophy of the Mathematical Sciences | [previous](https://www.amazon.de/s?k=Companion%20Encyclopedia%20of%20the%20History%20and%20Philosophy%20of%20the%20Mathematical%20Sciences%20Ivor%20Grattan-Guinness%20(editor) | [product](https://www.amazon.com.au/dp/0415862027) | Replaced search URL with an observed matching book product. https://www.amazon.com.au/dp/0415862027 |
| A Brief History of Intelligence | [previous](https://www.amazon.de/s?k=A%20Brief%20History%20of%20Intelligence%20Max%20Bennett%20paperback) | [product](https://www.amazon.com.au/dp/0008560099) | Replaced search URL with an observed matching book product. 1,307 global ratings |
| The Scientific Method: An Evolution of Thinking from Darwin to Dewey | [previous](https://www.amazon.de/s?k=The%20Scientific%20Method%3A%20An%20Evolution%20of%20Thinking%20from%20Darwin%20to%20Dewey%20Henry%20M.%20Cowles) | [product](https://www.amazon.com.au/dp/0674976193) | Replaced search URL with an observed matching book product. https://www.amazon.com.au/dp/0674976193 |
| Fumbling the Future | [previous](https://www.amazon.de/s?k=Fumbling%20the%20Future%20Douglas%20K.%20Smith%3B%20Robert%20C.%20Alexander%20paperback) | [product](https://www.amazon.com.au/dp/0688069592) | Replaced search URL with an observed matching book product. ["149 global ratings"] |
| A World Without Email | [previous](https://www.amazon.de/s?k=A%20World%20Without%20Email%20Cal%20Newport%20paperback) | [product](https://www.amazon.com.au/dp/0525536558) | Replaced search URL with an observed matching book product. 1,838 global ratings |
| Supremacy: AI, ChatGPT, and the Race that Will Change the World | [previous](https://www.amazon.de/s?k=Supremacy%3A%20AI%2C%20ChatGPT%2C%20and%20the%20Race%20that%20Will%20Change%20the%20World%20Parmy%20Olson%20paperback) | [product](https://www.amazon.com.au/dp/1035038242) | Replaced search URL with an observed matching book product. 1,860 global ratings |
| The Never-Ending Challenge of Engineering | [previous](https://www.amazon.de/s?k=The%20Never-Ending%20Challenge%20of%20Engineering%20Hyman%20G.%20Rickover%20paperback) | [product](https://www.amazon.com.au/dp/0894485776) | Replaced search URL with an observed matching book product. 57 global ratings |
| Programmed Inequality | [previous](https://www.amazon.de/dp/0262342936) | [product](https://www.amazon.com.au/dp/0262535181) | Replaced an unverified product identifier after a failed lookup with an observed matching product. https://www.amazon.com.au/dp/0262535181 |
| The Rise and Reign of the Mammals: A New History, from the Shadow of the Dinosaurs to Us | [previous](https://www.amazon.de/s?k=The%20Rise%20and%20Reign%20of%20the%20Mammals%3A%20A%20New%20History%2C%20from%20the%20Shadow%20of%20the%20Dinosaurs%20to%20Us%20Steve%20Brusatte%20paperback) | [product](https://www.amazon.com.au/dp/152903423X) | Replaced search URL with an observed matching book product. 2,186 global ratings |
| Flight 232 | [previous](https://www.amazon.de/s?k=Flight%20232%20Laurence%20Gonzales%20paperback) | [product](https://www.amazon.com.au/dp/0393351262) | Replaced search URL with an observed matching book product. 1,170 global ratings |
| Salvage: A Personal Odyssey | [previous](https://www.amazon.de/dp/1574093584) | [product](https://www.amazon.com.au/dp/1574092561) | Replaced an unverified product identifier after a failed lookup with an observed matching product. ["14 global ratings"] |
| Noise: A Flaw in Human Judgment | [previous](https://www.amazon.de/s?k=Noise%20Daniel%20Kahneman%3B%20Olivier%20Sibony%3B%20Cass%20R.%20Sunstein%20paperback) | [product](https://www.amazon.com.au/dp/0316451398) | Replaced search URL with an observed matching book product. 4,734 global ratings |
| Make It Stick | [previous](https://www.amazon.de/s?k=Make%20It%20Stick%20Peter%20C.%20Brown%20paperback) | [product](https://www.amazon.com/dp/0674729013) | Replaced search URL with an observed matching book product. https://www.amazon.com/dp/0674729013 |
| Exponential | [previous](https://www.amazon.de/dp/1635769086) | [product](https://www.amazon.com.au/dp/184794292X) | Replaced an unverified product identifier after a failed lookup with an observed matching product. https://www.amazon.com.au/dp/184794292X |
| Civilization: The West and the Rest | [previous](https://www.amazon.de/s?k=Civilization%3A%20The%20West%20and%20the%20Rest%20Niall%20Ferguson%20paperback) | [product](https://www.amazon.com.au/dp/1846144566) | Replaced search URL with an observed matching book product. 1,250 global ratings |
| Surfaces and Essences | [previous](https://www.amazon.de/s?k=Surfaces%20and%20Essences%20Douglas%20Hofstadter%3B%20Emmanuel%20Sander%20paperback) | [product](https://www.amazon.com.au/dp/0465018475) | Replaced search URL with an observed matching book product. https://www.amazon.com.au/dp/0465018475 |
| Smart Choices | [previous](https://www.amazon.de/s?k=Smart%20Choices%20John%20S.%20Hammond%3B%20Ralph%20L.%20Keeney%3B%20Howard%20Raiffa) | [product](https://www.amazon.com.au/dp/0875848575) | Replaced search URL with an observed matching book product. 486 global ratings |
| Every Tool’s a Hammer | [previous](https://www.amazon.de/s?k=Every%20Tool%E2%80%99s%20a%20Hammer%20Adam%20Savage%20paperback) | [product](https://www.amazon.com.au/dp/1471185117) | Replaced search URL with an observed matching book product. 2,809 global ratings |
| Dirac: A Scientific Biography | [previous](https://www.amazon.de/s?k=Dirac%3A%20A%20Scientific%20Biography%20Helge%20Kragh) | [product](https://www.amazon.com.au/dp/0521017564) | Replaced search URL with an observed matching book product. https://www.amazon.com.au/dp/0521017564 |
| The White Man's Burden: Why the West's Efforts to Aid the Rest Have Done So Much Ill and So Little Good | [previous](https://www.amazon.de/s?k=The%20White%20Man's%20Burden%3A%20Why%20the%20West's%20Efforts%20to%20Aid%20the%20Rest%20Have%20Done%20So%20Much%20Ill%20and%20So%20Little%20Good%20William%20Easterly%20paperback) | [product](https://www.amazon.com.au/dp/0199210829) | Replaced search URL with an observed matching book product. 330 global ratings |
| Postwar: A History of Europe Since 1945 | [previous](https://www.amazon.de/s?k=Postwar%3A%20A%20History%20of%20Europe%20Since%201945%20Tony%20Judt%20paperback) | [product](https://www.amazon.com.au/dp/0143037757) | Replaced search URL with an observed matching book product. https://www.amazon.com.au/dp/0143037757 |
| The Essential Drucker | [previous](https://www.amazon.de/dp/0060010541) | [product](https://www.amazon.com/dp/0061345016) | Replaced ebook-ISBN product guess with an observed print product. Defense Management Institute's title-and-author record explicitly links this Amazon product. Paperback ISBN9780061345012 independently corroborated by edition records. Replaces an ebook ISBN misused as an Amazon identifier. |
| The Undoing Project: A Friendship That Changed Our Minds | [previous](https://www.amazon.de/s?k=The%20Undoing%20Project%3A%20A%20Friendship%20That%20Changed%20Our%20Minds%20Michael%20Lewis%20paperback) | [product](https://www.amazon.com.au/dp/1410496457) | Replaced search URL with an observed matching book product. https://www.amazon.com.au/dp/1410496457 |
| The History of Mathematical Proof in Ancient Traditions | [previous](https://www.amazon.de/s?k=The%20History%20of%20Mathematical%20Proof%20in%20Ancient%20Traditions%20Karine%20Chemla%20(editor) | [product](https://www.amazon.com.au/dp/110701221X) | Replaced search URL with an observed matching book product. https://www.amazon.com.au/dp/110701221X |
| Change: How to Make Big Things Happen | [previous](https://www.amazon.de/s?k=Change%3A%20How%20to%20Make%20Big%20Things%20Happen%20Damon%20Centola%20paperback) | [product](https://www.amazon.com.au/dp/0316457337) | Replaced search URL with an observed matching book product. https://www.amazon.com.au/dp/0316457337 |
| 1177 B.C.: The Year Civilization Collapsed | [previous](https://www.amazon.de/s?k=1177%20B.C.%3A%20The%20Year%20Civilization%20Collapsed%20Eric%20H.%20Cline%20paperback) | [product](https://www.amazon.com.au/dp/0691208018) | Replaced search URL with an observed matching book product. 3,072 global ratings |
| A History of Modern Computing | [previous](https://www.amazon.de/s?k=A%20History%20of%20Modern%20Computing%20Paul%20E.%20Ceruzzi%20paperback) | [product](https://www.amazon.com.au/dp/0262532034) | Replaced search URL with an observed matching book product. 32 global ratings |
| Rationality in Economics: Constructivist and Ecological Forms | [previous](https://www.amazon.de/s?k=Rationality%20in%20Economics%3A%20Constructivist%20and%20Ecological%20Forms%20Vernon%20L.%20Smith%20paperback) | [product](https://www.amazon.com.au/dp/0521871352) | Replaced search URL with an observed matching book product. 14 global ratings |
| The Human Use of Human Beings | [previous](https://www.amazon.de/s?k=The%20Human%20Use%20of%20Human%20Beings%20Norbert%20Wiener%20paperback) | [product](https://www.amazon.com.au/dp/0306803208) | Replaced search URL with an observed matching book product. 283 global ratings |
| Arctic Labyrinth | [previous](https://www.amazon.de/s?k=Arctic%20Labyrinth%20Glyn%20Williams%20paperback) | [product](https://www.amazon.it/dp/0520269950) | Replaced search URL with an observed matching book product. https://www.amazon.it/dp/0520269950 |
| Making PCR | [previous](https://www.amazon.de/s?k=Making%20PCR%20Paul%20Rabinow%20paperback) | [product](https://www.amazon.com.au/dp/0226701468) | Replaced search URL with an observed matching book product. 12 global ratings |
| Rationality and the Reflective Mind | [previous](https://www.amazon.de/s?k=Rationality%20and%20the%20Reflective%20Mind%20Keith%20E.%20Stanovich) | [product](https://www.amazon.com.au/dp/0195341147) | Replaced search URL with an observed matching book product. ["16 global ratings"] |
| The Infinity Machine: Demis Hassabis, DeepMind, and the Quest for Superintelligence | [previous](https://www.amazon.de/s?k=The%20Infinity%20Machine%3A%20Demis%20Hassabis%2C%20DeepMind%2C%20and%20the%20Quest%20for%20Superintelligence%20Sebastian%20Mallaby%20paperback) | [product](https://www.amazon.com.au/dp/0241703557) | Replaced search URL with an observed matching book product. 1,430 global ratings |
| Mathematics: A Very Short Introduction | [previous](https://www.amazon.de/s?k=Mathematics%3A%20A%20Very%20Short%20Introduction%20Timothy%20Gowers) | [product](https://www.amazon.com.au/dp/0192853619) | Replaced search URL with an observed matching book product. https://www.amazon.com.au/dp/0192853619 |
| Perfect Software | [previous](https://www.amazon.de/s?k=Perfect%20Software%20Gerald%20M.%20Weinberg) | [product](https://www.amazon.com.au/dp/0932633692) | Replaced search URL with an observed matching book product. https://www.amazon.com.au/dp/0932633692 |
| Co-Intelligence | [previous](https://www.amazon.de/s?k=Co-Intelligence%20Ethan%20Mollick%20paperback) | [product](https://www.amazon.com.au/dp/0753560771) | Replaced search URL with an observed matching book product. https://www.amazon.com.au/dp/0753560771 |
| Connections | [previous](https://www.amazon.de/s?k=Connections%20James%20Burke%20paperback) | [product](https://www.amazon.com.au/dp/0316116726) | Replaced search URL with an observed matching book product. 529 global ratings |
| The Day the Universe Changed: How Galileo's Telescope Changed the Truth | [previous](https://www.amazon.de/s?k=The%20Day%20the%20Universe%20Changed%3A%20How%20Galileo's%20Telescope%20Changed%20the%20Truth%20James%20Burke%20paperback) | [product](https://www.amazon.com.au/dp/0316116955) | Replaced search URL with an observed matching book product. ["30 global ratings"] |
| Plato's Ghost | [previous](https://www.amazon.de/dp/1400829046) | [product](https://www.amazon.com.au/dp/0691242046) | Replaced an unverified product identifier after a failed lookup with an observed matching product. https://www.amazon.com.au/dp/0691242046 |
| Global Energy Politics | [previous](https://www.amazon.de/s?k=Global%20Energy%20Politics%20Benjamin%20K.%20Sovacool%2C%20Thijs%20Van%20de%20Graaf%20paperback) | [product](https://www.amazon.com.au/dp/1509530487) | Replaced search URL with an observed matching book product. https://www.amazon.com.au/dp/1509530487 |
| The Fifth Discipline: The Art & Practice of the Learning Organization | [previous](https://www.amazon.de/s?k=The%20Fifth%20Discipline%3A%20The%20Art%20%26%20Practice%20of%20the%20Learning%20Organization%20Peter%20M.%20Senge%20paperback) | [product](https://www.amazon.com.au/dp/0385260946) | Replaced search URL with an observed matching book product. https://www.amazon.com.au/dp/0385260946 |
| Einstein's Tutor: The Story of Emmy Noether and the Invention of Modern Physics | [previous](https://www.amazon.de/dp/1541702972) | [product](https://www.amazon.com.au/dp/1541702956) | Replaced an unverified product identifier after a failed lookup with an observed matching product. https://www.amazon.com.au/dp/1541702956 |
| Balancing the Banks: Global Lessons from the Financial Crisis | [previous](https://www.amazon.de/s?k=Balancing%20the%20Banks%3A%20Global%20Lessons%20from%20the%20Financial%20Crisis%20Mathias%20Dewatripont%3B%20Jean-Charles%20Rochet%3B%20Jean%20Tirole%20paperback) | [product](https://www.amazon.com.au/dp/0691145237) | Replaced search URL with an observed matching book product. https://www.amazon.com.au/dp/0691145237 |
| Starborn: How the Stars Made Us | [previous](https://www.amazon.de/dp/1541674782) | [product](https://www.amazon.com.au/dp/152934610X) | Replaced an unverified product identifier after a failed lookup with an observed matching product. https://www.amazon.com.au/dp/152934610X |
| The Greatest Show on Earth: The Evidence for Evolution | [previous](https://www.amazon.de/s?k=The%20Greatest%20Show%20on%20Earth%3A%20The%20Evidence%20for%20Evolution%20Richard%20Dawkins%20paperback) | [product](https://www.amazon.com.au/dp/1416594787) | Replaced search URL with an observed matching book product. https://www.amazon.com.au/dp/1416594787 |
| Why Evolution Is True | [previous](https://www.amazon.de/s?k=Why%20Evolution%20Is%20True%20Jerry%20A.%20Coyne%20paperback) | [product](https://www.amazon.com.au/dp/0199230846) | Replaced search URL with an observed matching book product. https://www.amazon.com.au/dp/0199230846 |
| The Challenger Launch Decision | [previous](https://www.amazon.de/s?k=The%20Challenger%20Launch%20Decision%20Diane%20Vaughan%20paperback) | [product](https://www.amazon.com.au/dp/022634682X) | Replaced search URL with an observed matching book product. 160 global ratings |
| Open Circuits | [previous](https://www.amazon.de/s?k=Open%20Circuits%20Windell%20H.%20Oskay%3B%20Eric%20Schlaepfer%20paperback) | [product](https://www.amazon.com.au/dp/1718502346) | Replaced search URL with an observed matching book product. https://www.amazon.com.au/dp/1718502346 |
| Joseph Liouville 1809–1882: Master of Pure and Applied Mathematics | [previous](https://www.amazon.de/s?k=Joseph%20Liouville%201809%E2%80%931882%3A%20Master%20of%20Pure%20and%20Applied%20Mathematics%20Jesper%20L%C3%BCtzen%20paperback) | [product](https://www.amazon.com.au/dp/1461269733) | Replaced search URL with an observed matching book product. https://www.amazon.com.au/dp/1461269733 |
| Shattered Sword | [previous](https://www.amazon.de/s?k=Shattered%20Sword%20Jonathan%20Parshall%3B%20Anthony%20Tully%20paperback) | [product](https://www.amazon.com.au/dp/1574889249) | Replaced search URL with an observed matching book product. https://www.amazon.com.au/dp/1574889249 |
| Taming the Infinite | [previous](https://www.amazon.de/s?k=Taming%20the%20Infinite%20Ian%20Stewart) | [product](https://www.amazon.com.au/dp/1847247687) | Replaced search URL with an observed matching book product. https://www.amazon.com.au/dp/1847247687 |
| The World Is Your Office | [previous](https://www.amazon.de/s?k=The%20World%20Is%20Your%20Office%20Prithwiraj%20Choudhury) | [product](https://www.amazon.com.au/dp/1647824710) | Replaced search URL with an observed matching book product. 11 global ratings |
| Pacific Crucible | [previous](https://www.amazon.de/dp/0393083179) | [product](https://www.amazon.com.au/dp/0393343413) | Replaced an unverified product identifier after a failed lookup with an observed matching product. https://www.amazon.com.au/dp/0393343413 |
| Engines That Move Markets: Technology Investing from Railroads to the Internet and Beyond | [previous](https://www.amazon.de/s?k=Engines%20That%20Move%20Markets%3A%20Technology%20Investing%20from%20Railroads%20to%20the%20Internet%20and%20Beyond%20Alasdair%20Nairn%20paperback) | [product](https://www.amazon.com.au/dp/0471205958) | Replaced search URL with an observed matching book product. https://www.amazon.com.au/dp/0471205958 |
| Guns, Sails, and Empires | [previous](https://www.amazon.de/dp/0308600142) | [product](https://www.amazon.com.au/dp/089745071X) | Replaced an unverified product identifier after a failed lookup with an observed matching product. https://www.amazon.com.au/dp/089745071X |
| Climbing Mount Improbable | [previous](https://www.amazon.de/s?k=Climbing%20Mount%20Improbable%20Richard%20Dawkins%20paperback) | [product](https://www.amazon.com.au/dp/0393039307) | Replaced search URL with an observed matching book product. https://www.amazon.com.au/dp/0393039307 |
| Bad Pharma: How Drug Companies Mislead Doctors and Harm Patients | [previous](https://www.amazon.de/s?k=Bad%20Pharma%3A%20How%20Drug%20Companies%20Mislead%20Doctors%20and%20Harm%20Patients%20Ben%20Goldacre%20paperback) | [product](https://www.amazon.com.au/dp/0865478066) | Replaced search URL with an observed matching book product. https://www.amazon.com.au/dp/0865478066 |
| Makers of Modern Strategy: From Machiavelli to the Nuclear Age | [previous](https://www.amazon.de/s?k=Makers%20of%20Modern%20Strategy%3A%20From%20Machiavelli%20to%20the%20Nuclear%20Age%20Peter%20Paret%3B%20Gordon%20A.%20Craig%3B%20Felix%20Gilbert%20(editors) | [product](https://www.amazon.com.au/dp/0691092354) | Replaced search URL with an observed matching book product. https://www.amazon.com.au/dp/0691092354 |
| Dominion: How the Christian Revolution Remade the World | [previous](https://www.amazon.de/s?k=Dominion%3A%20How%20the%20Christian%20Revolution%20Remade%20the%20World%20Tom%20Holland%20paperback) | [product](https://www.amazon.com.au/dp/1408706954) | Replaced search URL with an observed matching book product. ["2,152 global ratings"] |
| American Steel | [previous](https://www.amazon.de/s?k=American%20Steel%20Richard%20Preston) | [product](https://www.amazon.com.au/dp/013029604X) | Replaced search URL with an observed matching book product. https://www.amazon.com.au/dp/013029604X |
| Engineering and the Mind's Eye | [previous](https://www.amazon.de/s?k=Engineering%20and%20the%20Mind's%20Eye%20Eugene%20S.%20Ferguson%20paperback) | [product](https://www.amazon.com.au/dp/026256078X) | Replaced search URL with an observed matching book product. 57 global ratings |
| Pieces of the Action | [previous](https://www.amazon.de/s?k=Pieces%20of%20the%20Action%20Vannevar%20Bush%20paperback) | [product](https://www.amazon.com.au/dp/1953953204) | Replaced search URL with an observed matching book product. 51 global ratings |
| Napoleon's Buttons: How 17 Molecules Changed History | [previous](https://www.amazon.de/s?k=Napoleon's%20Buttons%3A%20How%2017%20Molecules%20Changed%20History%20Penny%20LeCouteur%2C%20Jay%20Burreson%20paperback) | [product](https://www.amazon.com.au/dp/1585423319) | Replaced search URL with an observed matching book product. https://www.amazon.com.au/dp/1585423319 |
| Of Bicycles, Bakelites, and Bulbs | [previous](https://www.amazon.de/s?k=Of%20Bicycles%2C%20Bakelites%2C%20and%20Bulbs%20Wiebe%20E.%20Bijker%20paperback) | [product](https://www.amazon.com.au/dp/0262023768) | Replaced search URL with an observed matching book product. https://www.amazon.com.au/dp/0262023768 |
| Other People’s Money: Masters of the Universe or Servants to the People? | [previous](https://www.amazon.de/s?k=Other%20People%E2%80%99s%20Money%3A%20Masters%20of%20the%20Universe%20or%20Servants%20to%20the%20People%3F%20John%20Kay%20paperback) | [product](https://www.amazon.com.au/dp/1610396030) | Replaced search URL with an observed matching book product. ["243 global ratings"] |
| Ghost Wars: The Secret History of the CIA, Afghanistan, and Bin Laden from the Soviet Invasion to September 10, 2001 | [previous](https://www.amazon.de/s?k=Ghost%20Wars%3A%20The%20Secret%20History%20of%20the%20CIA%2C%20Afghanistan%2C%20and%20Bin%20Laden%20from%20the%20Soviet%20Invasion%20to%20September%2010%2C%202001%20Steve%20Coll%20paperback) | [product](https://www.amazon.com.au/dp/0143034669) | Replaced search URL with an observed matching book product. https://www.amazon.com.au/dp/0143034669 |
| Technics and Civilization | [previous](https://www.amazon.de/s?k=Technics%20and%20Civilization%20Lewis%20Mumford%20paperback) | [product](https://www.amazon.com.au/dp/0226550273) | Replaced search URL with an observed matching book product. https://www.amazon.com.au/dp/0226550273 |
| The Age of Wonder: How the Romantic Generation Discovered the Beauty and Terror of Science | [previous](https://www.amazon.de/s?k=The%20Age%20of%20Wonder%3A%20How%20the%20Romantic%20Generation%20Discovered%20the%20Beauty%20and%20Terror%20of%20Science%20Richard%20Holmes%20paperback) | [product](https://www.amazon.com.au/dp/0007149522) | Replaced search URL with an observed matching book product. https://www.amazon.com.au/dp/0007149522 |
| Tools and Weapons | [previous](https://www.amazon.de/s?k=Tools%20and%20Weapons%20Brad%20Smith%3B%20Carol%20Ann%20Browne%20paperback) | [product](https://www.amazon.com.au/dp/1984877739) | Replaced search URL with an observed matching book product. 713 global ratings |
| Leonhard Euler: Mathematical Genius in the Enlightenment | [previous](https://www.amazon.de/s?k=Leonhard%20Euler%3A%20Mathematical%20Genius%20in%20the%20Enlightenment%20Ronald%20S.%20Calinger%20paperback) | [product](https://www.amazon.com.au/dp/0691119279) | Replaced search URL with an observed matching book product. https://www.amazon.com.au/dp/0691119279 |
| The Extended Phenotype: The Long Reach of the Gene | [previous](https://www.amazon.de/s?k=The%20Extended%20Phenotype%3A%20The%20Long%20Reach%20of%20the%20Gene%20Richard%20Dawkins%20paperback) | [product](https://www.amazon.com.au/dp/0198788916) | Replaced search URL with an observed matching book product. ["449 global ratings"] |
| Regenesis: How Synthetic Biology Will Reinvent Nature and Ourselves | [previous](https://www.amazon.de/s?k=Regenesis%3A%20How%20Synthetic%20Biology%20Will%20Reinvent%20Nature%20and%20Ourselves%20George%20M.%20Church%2FEd%20Regis%20paperback) | [product](https://www.amazon.com.au/dp/0465021751) | Replaced search URL with an observed matching book product. https://www.amazon.com.au/dp/0465021751 |
| The Computer Boys Take Over | [previous](https://www.amazon.de/s?k=The%20Computer%20Boys%20Take%20Over%20Nathan%20L.%20Ensmenger%20paperback) | [product](https://www.amazon.com.au/dp/0262050935) | Replaced search URL with an observed matching book product. https://www.amazon.com.au/dp/0262050935 |
| Thinking 101 | [previous](https://www.amazon.de/s?k=Thinking%20101%20Woo-kyoung%20Ahn) | [product](https://www.amazon.com.au/dp/1250805953) | Replaced search URL with an observed matching book product. 223 global ratings |
| Why Beauty Is Truth | [previous](https://www.amazon.de/s?k=Why%20Beauty%20Is%20Truth%20Ian%20Stewart%20paperback) | [product](https://www.amazon.com.au/dp/0465082378) | Replaced search URL with an observed matching book product. https://www.amazon.com.au/dp/0465082378 |
| The Facemaker | [previous](https://www.amazon.de/s?k=The%20Facemaker%20Lindsey%20Fitzharris%20paperback) | [product](https://www.amazon.com.au/dp/0141990295) | Replaced search URL with an observed matching book product. https://www.amazon.com.au/dp/0141990295 |
| Powerful | [previous](https://www.amazon.de/dp/0226726347) | [product](https://www.amazon.com.au/dp/1939714095) | Replaced the identifier of a different book with an observed matching product. ["<span id=\"acrCustomerReviewText\" aria-label=\"1,768 reviews\" class=\"a-size-small\">(1,768)</span>","<span data-hook=\"total-review-count\" class=\"a-size-base a-color-secondary\">1,768 global ratings</span>"] |
| Stuffed and Starved | [previous](https://www.amazon.de/s?k=Stuffed%20and%20Starved%20Raj%20Patel%20paperback) | [product](https://www.amazon.it/dp/1846270111) | Replaced search URL with an observed matching book product. https://www.amazon.it/dp/1846270111 |
| Periodic Tales: The Curious Lives of the Elements | [previous](https://www.amazon.de/s?k=Periodic%20Tales%3A%20The%20Curious%20Lives%20of%20the%20Elements%20Hugh%20Aldersey-Williams%20paperback) | [product](https://www.amazon.com.au/dp/0670918113) | Replaced search URL with an observed matching book product. https://www.amazon.com.au/dp/0670918113 |
| Reckoning with Risk: Learning to Live with Uncertainty | [previous](https://www.amazon.de/s?k=Reckoning%20with%20Risk%3A%20Learning%20to%20Live%20with%20Uncertainty%20Gerd%20Gigerenzer%20paperback) | [product](https://www.amazon.com.au/dp/0140297863) | Replaced search URL with an observed matching book product. 74 global ratings |
| China's Economy: What Everyone Needs to Know | [previous](https://www.amazon.de/s?k=China's%20Economy%3A%20What%20Everyone%20Needs%20to%20Know%20Arthur%20R.%20Kroeber%20paperback) | [product](https://www.amazon.com.au/dp/0190946466) | Replaced search URL with an observed matching book product. 615 global ratings |
| High-Speed Dreams: NASA and the Technopolitics of Supersonic Transportation, 1945–1999 | [previous](https://www.amazon.de/s?k=High-Speed%20Dreams%3A%20NASA%20and%20the%20Technopolitics%20of%20Supersonic%20Transportation%2C%201945%E2%80%931999%20Erik%20M.%20Conway%20paperback) | [product](https://www.amazon.com.au/dp/080188067X) | Replaced search URL with an observed matching book product. 7 global ratings |
| The Pentagon Wars | [previous](https://www.amazon.de/s?k=The%20Pentagon%20Wars%20James%20G.%20Burton%20paperback) | [product](https://www.amazon.com.au/dp/1557500819) | Replaced search URL with an observed matching book product. 161 global ratings |
| Talent | [previous](https://www.amazon.com/dp/022648694X) | [product](https://www.amazon.com.au/dp/1250275814) | Replaced the identifier of a different book with an observed matching product. 255 global ratings |
| The Reflective Practitioner | [previous](https://www.amazon.de/s?k=The%20Reflective%20Practitioner%20Donald%20A.%20Sch%C3%B6n%20paperback) | [product](https://www.amazon.com.au/dp/1857423194) | Replaced search URL with an observed matching book product. ["308 global ratings"] |
| The Ascent of Man | [previous](https://www.amazon.de/s?k=The%20Ascent%20of%20Man%20Jacob%20Bronowski%20paperback) | [product](https://www.amazon.com.au/dp/0563209003) | Replaced search URL with an observed matching book product. 669 global ratings |
| The Strategy of Conflict | [previous](https://www.amazon.de/s?k=The%20Strategy%20of%20Conflict%20Thomas%20C.%20Schelling%20paperback) | [product](https://www.amazon.com.au/dp/0674840313) | Replaced search URL with an observed matching book product. 144 global ratings |
| The Code of Capital: How the Law Creates Wealth and Inequality | [previous](https://www.amazon.de/s?k=The%20Code%20of%20Capital%3A%20How%20the%20Law%20Creates%20Wealth%20and%20Inequality%20Katharina%20Pistor%20paperback) | [product](https://www.amazon.com.au/dp/0691208603) | Replaced search URL with an observed matching book product. 259 global ratings |
| The Secret in Building 26 | [previous](https://www.amazon.de/s?k=The%20Secret%20in%20Building%2026%20%20paperback) | [product](https://www.amazon.com.au/dp/0375508074) | Replaced search URL with an observed matching book product. 33 global ratings |
| Almost Perfect | [previous](https://www.amazon.de/s?k=Almost%20Perfect%20W.%20E.%20Pete%20Peterson%20paperback) | [product](https://www.amazon.com.au/dp/1559584777) | Replaced search URL with an observed matching book product. https://www.amazon.com.au/dp/1559584777 |
| The Eurasian Century: Hot Wars, Cold Wars, and the Making of the Modern World | [previous](https://www.amazon.de/s?k=The%20Eurasian%20Century%3A%20Hot%20Wars%2C%20Cold%20Wars%2C%20and%20the%20Making%20of%20the%20Modern%20World%20Hal%20Brands%20paperback) | [product](https://www.amazon.com.au/dp/132403694X) | Replaced search URL with an observed matching book product. 132 global ratings |
| The Nature of the Beast | [previous](https://www.amazon.de/s?k=The%20Nature%20of%20the%20Beast%20David%20J.%20Anderson%20paperback) | [product](https://www.amazon.com.au/dp/1541674634) | Replaced search URL with an observed matching book product. 44 global ratings |
| How We Got Here: A Slightly Irreverent History of Technology and Markets | [previous](https://www.amazon.de/s?k=How%20We%20Got%20Here%3A%20A%20Slightly%20Irreverent%20History%20of%20Technology%20and%20Markets%20Andy%20Kessler%20paperback) | [product](https://www.amazon.com.au/dp/0060840978) | Replaced search URL with an observed matching book product. 71 global ratings |
| Technology Matters | [previous](https://www.amazon.de/s?k=Technology%20Matters%20David%20E.%20Nye%20paperback) | [product](https://www.amazon.com.au/dp/0262640678) | Replaced search URL with an observed matching book product. 52 global ratings |
| The Effective Engineer | [previous](https://www.amazon.de/s?k=The%20Effective%20Engineer%20Edmond%20Lau) | [product](https://www.amazon.com.au/dp/0996128107) | Replaced search URL with an observed matching book product. 140 global ratings |
| The Lost Empire of Emanuel Nobel | [previous](https://www.amazon.de/s?k=The%20Lost%20Empire%20of%20Emanuel%20Nobel%20%20paperback) | [product](https://www.amazon.com.au/dp/1668074745) | Replaced search URL with an observed matching book product. 246 global ratings |
| Breath from Salt | [previous](https://www.amazon.de/s?k=Breath%20from%20Salt%20Bijal%20P.%20Trivedi%20paperback) | [product](https://www.amazon.com.au/dp/1948836378) | Replaced search URL with an observed matching book product. 371 global ratings |
| Potato: A History of the Propitious Esculent | [previous](https://www.amazon.de/s?k=Potato%20John%20Reader%20paperback) | [product](https://www.amazon.com.au/dp/0300171455) | Replaced search URL with an observed matching book product. 114 global ratings |
| A History of Mathematics | [previous](https://www.amazon.de/s?k=A%20History%20of%20Mathematics%20Carl%20B.%20Boyer%20paperback) | [product](https://www.amazon.com.au/dp/0471543977) | Replaced search URL with an observed matching book product. 58 global ratings |
| They Made America | [previous](https://www.amazon.de/dp/0316070343) | [product](https://www.amazon.com/dp/0316013854) | Replaced ebook-ISBN product guess with an observed print product. https://www.hachettebookgroup.com/titles/harold-evans/they-made-america/9780316013857/ |
| The Universal Computer | [previous](https://www.amazon.de/s?k=The%20Universal%20Computer%20Martin%20Davis%20paperback) | [product](https://www.amazon.com.au/dp/0393047857) | Replaced search URL with an observed matching book product. 24 global ratings |
| Egyptian Made | [previous](https://www.amazon.de/s?k=Egyptian%20Made%20Leslie%20T.%20Chang%20paperback) | [product](https://www.amazon.it/dp/0525509216) | Replaced search URL with an observed matching book product. https://www.amazon.it/dp/0525509216 |
| Cybernetic Revolutionaries | [previous](https://www.amazon.de/s?k=Cybernetic%20Revolutionaries%20Eden%20Medina%20paperback) | [product](https://www.amazon.com.au/dp/0262016494) | Replaced search URL with an observed matching book product. 78 global ratings |
| The Maverick and His Machine | [previous](https://www.amazon.de/s?k=The%20Maverick%20and%20His%20Machine%20Kevin%20Maney%20paperback) | [product](https://www.amazon.com.au/dp/0471414638) | Replaced search URL with an observed matching book product. 46 global ratings |
| A Field Guide to Lies and Statistics | [previous](https://www.amazon.de/s?k=A%20Field%20Guide%20to%20Lies%20and%20Statistics%20Daniel%20Levitin%20paperback) | [product](https://www.amazon.com.au/dp/0241974879) | Replaced search URL with an observed matching book product. 378 global ratings |
| The End of Alchemy: Money, Banking, and the Future of the Global Economy | [previous](https://www.amazon.de/s?k=The%20End%20of%20Alchemy%3A%20Money%2C%20Banking%2C%20and%20the%20Future%20of%20the%20Global%20Economy%20Mervyn%20King%20paperback) | [product](https://www.amazon.com.au/dp/1408706105) | Replaced search URL with an observed matching book product. 727 global ratings |
| Workplace Management | [previous](https://www.amazon.de/s?k=Workplace%20Management%20Taiichi%20Ohno) | [product](https://www.amazon.com.au/dp/0915299194) | Replaced search URL with an observed matching book product. 6 global ratings |
| Economics Evolving: A History of Economic Thought | [previous](https://www.amazon.de/s?k=Economics%20Evolving%3A%20A%20History%20of%20Economic%20Thought%20Agnar%20Sandmo%20paperback) | [product](https://www.amazon.com.au/dp/0691148422) | Replaced search URL with an observed matching book product. 43 global ratings |
| The Secret Lives of Color | [previous](https://www.amazon.de/s?k=The%20Secret%20Lives%20of%20Color%20Kassia%20St.%20Clair) | [product](https://www.amazon.com/dp/0143131141) | Replaced search URL with an observed matching book product. Publisher structured edition record explicitly maps the matching print edition to this Amazon vendor identifier. |
| Conversations on Quantum Gravity | [previous](https://www.amazon.de/s?k=Conversations%20on%20Quantum%20Gravity%20J%C3%A1come%20Armas%20(editor) | [product](https://www.amazon.com.au/dp/1107168872) | Replaced search URL with an observed matching book product. 17 global ratings |
| Open Borders | [previous](https://www.amazon.de/s?k=Open%20Borders%20Bryan%20Caplan%3B%20Zach%20Weinersmith%20paperback) | [product](https://www.amazon.it/dp/1250316979) | Replaced search URL with an observed matching book product. https://www.amazon.it/dp/1250316979 |
| Switch | [previous](https://www.amazon.de/dp/0805081240) | [product](https://www.amazon.com.au/dp/0385528752) | Replaced the identifier of a different book with an observed matching product. 5,743 global ratings |
| The Blank Slate | [previous](https://www.amazon.de/s?k=The%20Blank%20Slate%20Steven%20Pinker%20paperback) | [product](https://www.amazon.com/dp/0142003344) | Replaced search URL with an observed matching book product. https://www.amazon.com/dp/0142003344 |
| Energy and Geopolitics | [previous](https://www.amazon.de/s?k=Energy%20and%20Geopolitics%20Per%20H%C3%B6gselius%20paperback) | [product](https://www.amazon.com.au/dp/1138038385) | Replaced search URL with an observed matching book product. ["8 global ratings"] |
| Risk & Reward | [previous](https://www.amazon.de/s?k=Risk%20%26%20Reward%20Stephen%20Catlin%20paperback) | [product](https://www.amazon.it/dp/0957559550) | Replaced search URL with an observed matching book product. https://www.amazon.it/dp/0957559550 |
| Revelations in Air | [previous](https://www.amazon.de/s?k=Revelations%20in%20Air%20Jude%20Stewart) | [product](https://www.amazon.com.au/dp/0143135996) | Replaced search URL with an observed matching book product. https://www.penguin.com.au/books/revelations-in-air-9780143135999 |
| When | [previous](https://www.amazon.com/dp/0679776311) | [product](https://www.amazon.com.au/dp/0735210632) | Replaced the identifier of a different book with an observed matching product. 3,964 global ratings |
| The 5 Elements of Effective Thinking | [previous](https://www.amazon.de/s?k=The%205%20Elements%20of%20Effective%20Thinking%20Edward%20B.%20Burger%20paperback) | [product](https://www.amazon.it/dp/0691156662) | Replaced search URL with an observed matching book product. https://www.amazon.it/dp/0691156662 |
| 50 Years of Text Games | [previous](https://www.amazon.de/s?k=9798985966145) | [product](https://www.amazon.com/dp/B0CLDY72WT) | Replaced search URL with an observed matching book product. https://www.amazon.com/dp/B0CLDY72WT |
| Computing in the Middle Ages | [previous](https://www.amazon.de/s?k=Computing%20in%20the%20Middle%20Ages%20Severo%20M.%20Ornstein%20paperback) | [product](https://www.amazon.com.au/dp/1403315175) | Replaced search URL with an observed matching book product. 16 global ratings |
| Winning | [previous](https://www.amazon.com/dp/0393324818) | [product](https://www.amazon.com.au/dp/0061240176) | Replaced the identifier of a different book with an observed matching product. Matching English print product inspected: Winning; Format: Mass Market Paperback; Author card: Suzy Welch; Jack Welch |
| Run to Failure | [previous](https://www.amazon.de/s?k=Run%20to%20Failure%20Abrahm%20Lustgarten%20paperback) | [product](https://www.amazon.com.au/dp/0393081621) | Replaced search URL with an observed matching book product. https://www.amazon.com.au/dp/0393081621 |
| Aramis, or the Love of Technology | [previous](https://www.amazon.de/s?k=Aramis%2C%20or%20the%20Love%20of%20Technology%20Bruno%20Latour%20paperback) | [product](https://www.amazon.com.au/dp/0674043235) | Replaced search URL with an observed matching book product. 13 global ratings |
| A Quarter Century of UNIX | [previous](https://www.amazon.de/s?k=A%20Quarter%20Century%20of%20UNIX%20Peter%20H.%20Salus%20paperback) | [product](https://www.amazon.com.au/dp/0201547775) | Replaced search URL with an observed matching book product. 11 global ratings |
| Computer: A History of the Information Machine | [previous](https://www.amazon.de/s?k=Computer%3A%20A%20History%20of%20the%20Information%20Machine%20Martin%20Campbell-Kelly%3B%20William%20Aspray%20paperback) | [product](https://www.amazon.com.au/dp/1032203471) | Replaced search URL with an observed matching book product. 2 global ratings |
| Andrew Carnegie | [previous](https://www.amazon.de/s?k=Andrew%20Carnegie%20Joseph%20Frazier%20Wall%20paperback) | [product](https://www.amazon.com.au/dp/0195012828) | Replaced search URL with an observed matching book product. ["12 global ratings"] |
| Adaptive Thinking: Rationality in the Real World | [previous](https://www.amazon.de/s?k=Adaptive%20Thinking%3A%20Rationality%20in%20the%20Real%20World%20Gerd%20Gigerenzer%20paperback) | [product](https://www.amazon.com.au/dp/0195153723) | Replaced search URL with an observed matching book product. 4 global ratings |
| The Scramble for Africa | [previous](https://www.amazon.de/s?k=The%20Scramble%20for%20Africa%20Thomas%20Pakenham%20paperback) | [product](https://www.amazon.it/dp/0297811304) | Replaced search URL with an observed matching book product. https://www.amazon.it/dp/0297811304 |
| Debt: The First 5,000 Years | [previous](https://www.amazon.de/s?k=Debt%3A%20The%20First%205%2C000%20Years%20David%20Graeber%20paperback) | [product](https://www.amazon.com/dp/1612191290) | Replaced search URL with an observed matching book product. https://www.amazon.com/dp/1612191290 |
| Trailblazer | [previous](https://www.amazon.de/dp/0241544114) | [product](https://www.amazon.com.au/dp/1984825194) | Replaced the identifier of a different book with an observed matching product. 1,199 global ratings |
| Mechanics from Aristotle to Einstein | [previous](https://www.amazon.de/s?k=Mechanics%20from%20Aristotle%20to%20Einstein%20Michael%20J.%20Crowe%20paperback) | [product](https://www.amazon.com.au/dp/1888009322) | Replaced search URL with an observed matching book product. 9 global ratings |
| A Life on Our Planet | [previous](https://www.amazon.de/s?k=A%20Life%20on%20Our%20Planet%20David%20Attenborough%3B%20Jonnie%20Hughes%20paperback) | [product](https://www.amazon.pl/dp/1529108292) | Replaced search URL with an observed matching book product. https://www.amazon.pl/dp/1529108292 |
| Unlocking Energy Innovation | [previous](https://www.amazon.de/s?k=Unlocking%20Energy%20Innovation%20Richard%20K.%20Lester%3B%20David%20M.%20Hart%20paperback) | [product](https://www.amazon.com.au/dp/0262525143) | Replaced search URL with an observed matching book product. 4 global ratings |
| Imperial Germany and War, 1871–1918 | [previous](https://www.amazon.de/s?k=Imperial%20Germany%20and%20War%2C%201871%E2%80%931918%20Daniel%20J.%20Hughes%3B%20Richard%20L.%20DiNardo%20paperback) | [product](https://www.amazon.it/dp/070062600X) | Replaced search URL with an observed matching book product. https://www.amazon.it/dp/070062600X |
| Eli Hurvitz and the Creation of Teva Pharmaceuticals: An Israeli Biography | [previous](https://www.amazon.de/s?k=Eli%20Hurvitz%20and%20the%20Creation%20of%20Teva%20Pharmaceuticals%3A%20An%20Israeli%20Biography%20Yossi%20Goldstein%20paperback) | [product](https://www.amazon.com.au/dp/1976778425) | Replaced search URL with an observed matching book product. 2 global ratings |
| There Are No Accidents | [previous](https://www.amazon.de/s?k=There%20Are%20No%20Accidents%20Jessie%20Singer%20paperback) | [product](https://www.amazon.com.au/dp/1982129662) | Replaced search URL with an observed matching book product. https://www.amazon.com.au/dp/1982129662 |
| The Divide | [previous](https://www.amazon.de/s?k=The%20Divide%20Jason%20Hickel%20paperback) | [product](https://www.amazon.it/dp/1786090031) | Replaced search URL with an observed matching book product. https://www.amazon.it/dp/1786090031 |
| Political Emotions | [previous](https://www.amazon.de/s?k=Political%20Emotions%20Martha%20C.%20Nussbaum%20paperback) | [product](https://www.amazon.it/dp/0674724658) | Replaced search URL with an observed matching book product. https://www.amazon.it/dp/0674724658 |
| Our Man in Tokyo | [previous](https://www.amazon.de/s?k=Our%20Man%20in%20Tokyo%20Steve%20Kemper%20paperback) | [product](https://www.amazon.com/dp/0358064740) | Replaced search URL with an observed matching book product. https://www.amazon.com/dp/0358064740 |
| Poverty, by America | [previous](https://www.amazon.de/s?k=Poverty%2C%20by%20America%20Matthew%20Desmond%20paperback) | [product](https://www.amazon.co.uk/dp/0593239938) | Replaced search URL with an observed matching book product. https://www.amazon.co.uk/dp/0593239938 |
| The Open Society and Its Enemies | [previous](https://www.amazon.de/s?k=The%20Open%20Society%20and%20Its%20Enemies%20Karl%20R.%20Popper%20paperback) | [product](https://www.amazon.it/dp/1138126802) | Replaced search URL with an observed matching book product. https://www.amazon.it/dp/1138126802 |
| The Power of Habit | [previous](https://www.amazon.de/s?k=The%20Power%20of%20Habit%20Charles%20Duhigg%20paperback) | [product](https://www.amazon.com.au/dp/1400069289) | Replaced search URL with an observed matching book product. 38,816 global ratings |
| The Cauldron | [previous](https://www.amazon.com/s?k=The%20Cauldron%20Simon%20Sebag%20Montefiore%20paperback) | [product](https://www.amazon.it/dp/1399634895) | Replaced search URL with an observed matching book product. https://www.amazon.it/dp/1399634895 |
| In Defense of Civilization | [previous](https://www.amazon.de/s?k=In%20Defense%20of%20Civilization%20Michael%20R.%20J.%20Bonner%20paperback) | [product](https://www.amazon.it/dp/1997701650) | Replaced search URL with an observed matching book product. https://www.amazon.it/dp/1997701650 |
| The Third Reich trilogy | [previous](https://www.amazon.com/s?k=The%20Third%20Reich%20trilogy%20Richard%20J.%20Evans%20paperback) | [product](https://www.amazon.com/dp/0140911677) | Replaced search URL with an observed matching book product. https://www.amazon.com/dp/0140911677 |
| The Tale of the Dueling Neurosurgeons: The History of the Human Brain as Revealed by True Stories of Trauma, Madness, and Recovery | [previous](https://www.amazon.de/s?k=The%20Tale%20of%20the%20Dueling%20Neurosurgeons%3A%20The%20History%20of%20the%20Human%20Brain%20as%20Revealed%20by%20True%20Stories%20of%20Trauma%2C%20Madness%2C%20and%20Recovery%20Sam%20Kean%20paperback) | [product](https://www.amazon.com.au/dp/0316182346) | Replaced search URL with an observed matching book product. https://www.amazon.com.au/dp/0316182346 |
| Under the Nuclear Shadow | [previous](https://www.amazon.de/s?k=Under%20the%20Nuclear%20Shadow%20Fiona%20S.%20Cunningham%20paperback) | [product](https://www.amazon.com.au/dp/0691261032) | Replaced search URL with an observed matching book product. 6 global ratings |
| The Geography of Nowhere | [previous](https://www.amazon.de/s?k=The%20Geography%20of%20Nowhere%20James%20Howard%20Kunstler%20paperback) | [product](https://www.amazon.it/dp/0671707744) | Replaced search URL with an observed matching book product. https://www.amazon.it/dp/0671707744 |
| Aviation Logistics: The Dynamic Partnership of Air Freight and Supply Chain | [previous](https://www.amazon.de/s?k=Aviation%20Logistics%3A%20The%20Dynamic%20Partnership%20of%20Air%20Freight%20and%20Supply%20Chain%20Michael%20Sales%20paperback) | [product](https://www.amazon.com.au/dp/0749472715) | Replaced search URL with an observed matching book product. ["7 global ratings"] |
| Animal Liberation | [previous](https://www.amazon.de/s?k=Animal%20Liberation%20Peter%20Singer%20paperback) | [product](https://www.amazon.pl/dp/1847923844) | Replaced search URL with an observed matching book product. https://www.amazon.pl/dp/1847923844 |
| Normal at Any Cost | [previous](https://www.amazon.de/s?k=Normal%20at%20Any%20Cost%20Susan%20Cohen%3B%20Christine%20Cosgrove%20paperback) | [product](https://www.amazon.com/dp/1585426830) | Replaced search URL with an observed matching book product. https://www.amazon.com/dp/1585426830 |
| Crisis in the Red Zone | [previous](https://www.amazon.de/s?k=Crisis%20in%20the%20Red%20Zone%20Richard%20Preston%20paperback) | [product](https://www.amazon.it/dp/0812988159) | Replaced search URL with an observed matching book product. https://www.amazon.it/dp/0812988159 |
| Pioneer Programmer | [previous](https://www.amazon.de/s?k=Pioneer%20Programmer%20Jean%20Jennings%20Bartik%20paperback) | [product](https://www.amazon.com/dp/1612480861) | Replaced search URL with an observed matching book product. https://www.amazon.com/dp/1612480861 |
| Eating Animals | [previous](https://www.amazon.de/s?k=Eating%20Animals%20Jonathan%20Safran%20Foer%20paperback) | [product](https://www.amazon.it/dp/0316069906) | Replaced search URL with an observed matching book product. https://www.amazon.it/dp/0316069906 |
| Killing Hope | [previous](https://www.amazon.de/s?k=Killing%20Hope%20William%20Blum%20paperback) | [product](https://www.amazon.it/dp/1350348198) | Replaced search URL with an observed matching book product. https://www.amazon.it/dp/1350348198 |
| Currency Wars | [previous](https://www.amazon.de/s?k=Currency%20Wars%20James%20Rickards%20paperback) | [product](https://www.amazon.it/dp/1591844495) | Replaced search URL with an observed matching book product. https://www.amazon.it/dp/1591844495 |
| Bullshit Jobs | [previous](https://www.amazon.de/s?k=Bullshit%20Jobs%20David%20Graeber%20paperback) | [product](https://www.amazon.it/dp/150114331X) | Replaced search URL with an observed matching book product. https://www.amazon.it/dp/150114331X |
| Winners Take All | [previous](https://www.amazon.de/s?k=Winners%20Take%20All%20Anand%20Giridharadas%20paperback) | [product](https://www.amazon.it/dp/110197267X) | Replaced search URL with an observed matching book product. https://www.amazon.it/dp/110197267X |
| Chasing the Scream | [previous](https://www.amazon.de/s?k=Chasing%20the%20Scream%20Johann%20Hari%20paperback) | [product](https://www.amazon.com.au/dp/1408857847) | Replaced search URL with an observed matching book product. https://www.amazon.com.au/dp/1408857847 |
| Three Guineas | [previous](https://www.amazon.com/dp/1804470341>) | [product](https://www.amazon.com/dp/1804470341) | Removed stray angle bracket from product URL. See saved identity evidence in changes.json. |
| Empire by Default | [previous](https://www.amazon.de/s?k=Empire%20by%20Default%20Ivan%20Musicant%20paperback) | [product](https://www.amazon.com/dp/0805035001) | Replaced search URL with an observed matching book product. https://www.amazon.com/dp/0805035001 |
| Peak | [previous](https://www.amazon.de/dp/006266140X) | [product](https://www.amazon.com.au/dp/1119434920) | Replaced the identifier of a different book with an observed matching product. 85 global ratings |
| America's Deadliest Export: Democracy | [previous](https://www.amazon.de/s?k=America's%20Deadliest%20Export%3A%20Democracy%20William%20Blum%20paperback) | [product](https://www.amazon.it/dp/1780324464) | Replaced search URL with an observed matching book product. https://www.amazon.it/dp/1780324464 |
| Less Is More | [previous](https://www.amazon.de/s?k=Less%20Is%20More%20Jason%20Hickel%20paperback) | [product](https://www.amazon.it/dp/1785152491) | Replaced search URL with an observed matching book product. https://www.amazon.it/dp/1785152491 |
| The Lassa Ward | [previous](https://www.amazon.de/s?k=The%20Lassa%20Ward%20Ross%20I.%20Donaldson%20paperback) | [product](https://www.amazon.it/dp/0593063287) | Replaced search URL with an observed matching book product. https://www.amazon.it/dp/0593063287 |
| An Indigenous Peoples' History of the United States | [previous](https://www.amazon.de/s?k=An%20Indigenous%20Peoples'%20History%20of%20the%20United%20States%20Roxanne%20Dunbar-Ortiz%20paperback) | [product](https://www.amazon.it/dp/0807057835) | Replaced search URL with an observed matching book product. https://www.amazon.it/dp/0807057835 |
| The Case for God | [previous](https://www.amazon.de/s?k=The%20Case%20for%20God%20Karen%20Armstrong%20paperback) | [product](https://www.amazon.it/dp/0307397432) | Replaced search URL with an observed matching book product. https://www.amazon.it/dp/0307397432 |
| Progress | [previous](https://www.amazon.de/s?k=Progress%20Samuel%20Miller%20McDonald%20paperback) | [product](https://www.amazon.it/dp/0008462518) | Replaced search URL with an observed matching book product. https://www.amazon.it/dp/0008462518 |
| Coming Up Short: A Memoir of My America | [previous](https://www.amazon.de/s?k=Coming%20Up%20Short%3A%20A%20Memoir%20of%20My%20America%20Robert%20B.%20Reich%20paperback) | [product](https://www.amazon.it/dp/0593689143) | Replaced search URL with an observed matching book product. https://www.amazon.it/dp/0593689143 |
| Don't Tell Mum I Work on the Rigs | [previous](https://www.amazon.de/dp/1741153816) | [product](https://www.amazon.com.au/dp/1857883772) | Replaced ebook-ISBN product guess with an observed print product. Matching English print product inspected: Don't Tell Mum I Work on the Rigs: (She Thinks I'm a Piano Player in a Whorehouse); by Paul Carter (Author) Format: Paperback; Author card: Paul Carter |
| Whitewalling | [previous](https://www.amazon.de/s?k=Whitewalling%20Aruna%20D'Souza%20paperback) | [product](https://www.amazon.it/dp/1943263140) | Replaced search URL with an observed matching book product. https://www.amazon.it/dp/1943263140 |
| Buyology | [previous](https://www.amazon.de/dp/0385528299) | [product](https://www.amazon.com/dp/0385523890) | Replaced ebook-ISBN product guess with an observed print product. Publisher structured edition record explicitly maps the matching print edition to this Amazon vendor identifier. |
| Dead Man Walking | [previous](https://www.amazon.de/s?k=Dead%20Man%20Walking%20Helen%20Prejean%20paperback) | [product](https://www.amazon.it/dp/0679751319) | Replaced search URL with an observed matching book product. https://www.amazon.it/dp/0679751319 |
| Awareness | [previous](https://www.amazon.de/s?k=Awareness%20Anthony%20de%20Mello%20paperback) | [product](https://www.amazon.it/dp/0385249373) | Replaced search URL with an observed matching book product. https://www.amazon.it/dp/0385249373 |
| The 1619 Project: A New Origin Story | [previous](https://www.amazon.de/s?k=The%201619%20Project%3A%20A%20New%20Origin%20Story%20Nikole%20Hannah-Jones%3B%20Caitlin%20Roper%3B%20Ilena%20Silverman%3B%20Jake%20Silverstein%20(eds.) | [product](https://www.amazon.it/dp/0593230590) | Replaced search URL with an observed matching book product. https://www.amazon.it/dp/0593230590 |
| My Bondage and My Freedom | [previous](https://www.amazon.com/dp/0812970314>) | [product](https://www.amazon.com/dp/0812970314) | Removed stray angle bracket from product URL. See saved identity evidence in changes.json. |
| Black Feminist Thought | [previous](https://www.amazon.de/s?k=Black%20Feminist%20Thought%20Patricia%20Hill%20Collins%20paperback) | [product](https://www.amazon.it/dp/0044451377) | Replaced search URL with an observed matching book product. https://www.amazon.it/dp/0044451377 |
| Stolen Revolution | [previous](https://www.amazon.de/s?k=Stolen%20Revolution%20Yeganeh%20Torbati%3B%20Bozorgmehr%20Sharafedin%20paperback) | [product](https://www.amazon.com.au/dp/0241744016) | Replaced search URL with an observed matching book product. 73 global ratings |
| On the Road to Babadag | [previous](https://www.amazon.de/s?k=On%20the%20Road%20to%20Babadag%20Andrzej%20Stasiuk%20paperback) | [product](https://www.amazon.com.au/dp/0099507145) | Replaced search URL with an observed matching book product. 37 global ratings |
| Tyranny, Inc. | [previous](https://www.amazon.de/s?k=Tyranny%2C%20Inc.%20Sohrab%20Ahmari%20paperback) | [product](https://www.amazon.it/dp/0593443462) | Replaced search URL with an observed matching book product. https://www.amazon.it/dp/0593443462 |
| Ways of Being | [previous](https://www.amazon.de/s?k=Ways%20of%20Being%20James%20Bridle%20paperback) | [product](https://www.amazon.it/dp/0141994266) | Replaced search URL with an observed matching book product. https://www.amazon.it/dp/0141994266 |
| The Secret History of the Mongol Queens | [previous](https://www.amazon.de/dp/0307589366) | [product](https://www.amazon.com/dp/0307407160) | Replaced ebook-ISBN product guess with an observed print product. Publisher structured edition record explicitly maps the matching print edition to this Amazon vendor identifier. |
| Discourse on Colonialism | [previous](https://www.amazon.com/dp/1583670254>) | [product](https://www.amazon.com/dp/1583670254) | Removed stray angle bracket from product URL. See saved identity evidence in changes.json. |
| Allow Me to Retort | [previous](https://www.amazon.de/s?k=Allow%20Me%20to%20Retort%20Elie%20Mystal%20paperback) | [product](https://www.amazon.co.uk/dp/162097763X) | Replaced search URL with an observed matching book product. https://www.amazon.co.uk/dp/162097763X |
| The Vital Center | [previous](https://www.amazon.de/s?k=The%20Vital%20Center%20Arthur%20M.%20Schlesinger%20Jr.%20paperback) | [product](https://www.amazon.it/dp/0306803232) | Replaced search URL with an observed matching book product. https://www.amazon.it/dp/0306803232 |
| The Story of Art Without Men | [previous](https://www.amazon.de/s?k=The%20Story%20of%20Art%20Without%20Men%20Katy%20Hessel%20paperback) | [product](https://www.amazon.it/dp/0241738369) | Replaced search URL with an observed matching book product. https://www.amazon.it/dp/0241738369 |
| Capital Is Dead | [previous](https://www.amazon.de/s?k=Capital%20Is%20Dead%20McKenzie%20Wark%20paperback) | [product](https://www.amazon.it/dp/1788735331) | Replaced search URL with an observed matching book product. https://www.amazon.it/dp/1788735331 |
| Out There | [previous](https://www.amazon.de/s?k=Out%20There%20Peter%20Rowe%20paperback) | [product](https://www.amazon.com.au/dp/1990823335) | Replaced search URL with an observed matching book product. 8 global ratings |
| Virtue Hoarders | [previous](https://www.amazon.com/dp/1517912253>) | [product](https://www.amazon.com/dp/1517912253) | Removed stray angle bracket from product URL. See saved identity evidence in changes.json. |
| In the Spirit of Crazy Horse | [previous](https://www.amazon.de/s?k=In%20the%20Spirit%20of%20Crazy%20Horse%20Peter%20Matthiessen%20paperback) | [product](https://www.amazon.it/dp/0140144560) | Replaced search URL with an observed matching book product. https://www.amazon.it/dp/0140144560 |
| Crowds and Power | [previous](https://www.amazon.de/s?k=Crowds%20and%20Power%20Elias%20Canetti%20paperback) | [product](https://www.amazon.com.au/dp/0140036164) | Replaced search URL with an observed matching book product. ["160 global ratings"] |
| The Subtle Art of Not Giving a F*ck | [previous](https://www.amazon.de/s?k=The%20Subtle%20Art%20of%20Not%20Giving%20a%20F*ck%20Mark%20Manson%20paperback) | [product](https://www.amazon.com/dp/0062457713) | Replaced search URL with an observed matching book product. ["<span id=\"acrCustomerReviewText\" aria-label=\"162,135 Reviews\" class=\"a-size-small\">(162,135)</span>"] |
| The End of America | [previous](https://www.amazon.com/dp/1933392797>) | [product](https://www.amazon.com/dp/1933392797) | Removed stray angle bracket from product URL. See saved identity evidence in changes.json. |
| Being Ecological | [previous](https://www.amazon.com/dp/0262551756>) | [product](https://www.amazon.com/dp/0262551756) | Removed stray angle bracket from product URL. See saved identity evidence in changes.json. |
| Sacred Economics | [previous](https://www.amazon.de/s?k=Sacred%20Economics%20Charles%20Eisenstein%20paperback) | [product](https://www.amazon.it/dp/1583943978) | Replaced search URL with an observed matching book product. https://www.amazon.it/dp/1583943978 |
| Koba the Dread | [previous](https://www.amazon.de/s?k=Koba%20the%20Dread%20Martin%20Amis%20paperback) | [product](https://www.amazon.pl/dp/1250414903) | Replaced search URL with an observed matching book product. https://www.amazon.pl/dp/1250414903 |
| Columbus and Other Cannibals | [previous](https://www.amazon.de/s?k=Columbus%20and%20Other%20Cannibals%20Jack%20D.%20Forbes%20paperback) | [product](https://www.amazon.it/dp/1583227814) | Replaced search URL with an observed matching book product. https://www.amazon.it/dp/1583227814 |
| Assata | [previous](https://www.amazon.de/s?k=Assata%20Assata%20Shakur%20paperback) | [product](https://www.amazon.it/dp/1556520743) | Replaced search URL with an observed matching book product. https://www.amazon.it/dp/1556520743 |
| And I Alone Survived | [previous](https://www.amazon.de/s?k=And%20I%20Alone%20Survived%20Lauren%20Elder%3B%20Shirley%20Streshinsky%20paperback) | [product](https://www.amazon.it/dp/0002167816) | Replaced search URL with an observed matching book product. https://www.amazon.it/dp/0002167816 |
| Cosmographia / A Description of Africa | [previous](https://www.amazon.de/s?k=Cosmographia%20%2F%20A%20Description%20of%20Africa%20Leo%20Africanus%20paperback) | [product](https://www.amazon.com.au/dp/0241543932) | Replaced search URL with an observed matching book product. ["12 global ratings"] |
| Heroes: Mass Murder and Suicide | [previous](https://www.amazon.de/s?k=Heroes%3A%20Mass%20Murder%20and%20Suicide%20Franco%20Berardi%20paperback) | [product](https://www.amazon.it/dp/1781685789) | Replaced search URL with an observed matching book product. https://www.amazon.it/dp/1781685789 |
| This One Wild and Precious Life | [previous](https://www.amazon.de/s?k=This%20One%20Wild%20and%20Precious%20Life%20Sarah%20Wilson%20paperback) | [product](https://www.amazon.it/dp/1785633848) | Replaced search URL with an observed matching book product. https://www.amazon.it/dp/1785633848 |
| Soul on Ice | [previous](https://www.amazon.de/s?k=Soul%20on%20Ice%20Eldridge%20Cleaver%20paperback) | [product](https://www.amazon.it/dp/0224615513) | Replaced search URL with an observed matching book product. https://www.amazon.it/dp/0224615513 |
| Listening to Prestige | [previous](https://www.amazon.com/s?k=9798855804959) | [product](https://www.amazon.it/dp/1519285973) | Replaced search URL with an observed matching book product. ["<span id=\"acrCustomerReviewText\" aria-label=\"1 Recensione\" class=\"a-size-small\">(1)</span>"] |

## Remaining unknown fields

Each list below is the remainder of its original 200-book target set. No unknown count was converted to zero.

### pages

| Book | Reason |
|---|---|
| What Are Numbers? | Whole-work or edition identity unresolved; a partial volume, excerpt or unverified translation cannot supply this value. |
| History of Programming Languages | Whole-work or edition identity unresolved; a partial volume, excerpt or unverified translation cannot supply this value. |
| Platform Studies (series) | Whole-work or edition identity unresolved; a partial volume, excerpt or unverified translation cannot supply this value. |
| Computer Connections | Whole-work or edition identity unresolved; a partial volume, excerpt or unverified translation cannot supply this value. |
| Henry James biography (version unresolved) | Whole-work or edition identity unresolved; a partial volume, excerpt or unverified translation cannot supply this value. |
| It Was Never About You | No matching print edition with a verified page count established. |

### ratings

| Book | Reason |
|---|---|
| A Singular Mathematical Promenade | No matching English/Croatian product metadata returned. |
| What Are Numbers? | Whole-work or edition identity unresolved; a partial volume, excerpt or unverified translation cannot supply this value. |
| The Digital Hand | Whole-work or edition identity unresolved; a partial volume, excerpt or unverified translation cannot supply this value. |
| The University: A History in Stone, Silk, and Blood | Matched product but no explicit total-rating aggregate. |
| Commodore | Whole-work or edition identity unresolved; a partial volume, excerpt or unverified translation cannot supply this value. |
| A Year in Development | No matched product identifier available. |
| Establishing Quantum Physics in Berlin | Matched product but no explicit total-rating aggregate. |
| What's Happening in the Mathematical Sciences | Whole-work or edition identity unresolved; a partial volume, excerpt or unverified translation cannot supply this value. |
| History of Programming Languages | Whole-work or edition identity unresolved; a partial volume, excerpt or unverified translation cannot supply this value. |
| Tolbert Lanston and the Monotype | No matching English/Croatian product metadata returned. |

### references

| Book | Reason |
|---|---|
| Liftoff | No complete reference range established in cached records, library editions, Google contents or targeted catalog search. |
| The Thinking Machine | No complete reference range established in cached records, library editions, Google contents or targeted catalog search. |
| Reentry | No complete reference range established in cached records, library editions, Google contents or targeted catalog search. |
| How Music Got Free | No complete reference range established in cached records, library editions, Google contents or targeted catalog search. |
| Working in Public | No complete reference range established in cached records, library editions, Google contents or targeted catalog search. |
| Ignition! | No complete reference range established in cached records, library editions, Google contents or targeted catalog search. |
| Countdown to Zero Day | No complete reference range established in cached records, library editions, Google contents or targeted catalog search. |
| Sidewinder | No complete reference range established in cached records, library editions, Google contents or targeted catalog search. |
| Spacesuit: Fashioning Apollo | No complete reference range established in cached records, library editions, Google contents or targeted catalog search. |
| Numbers Don’t Lie | No complete reference range established in cached records, library editions, Google contents or targeted catalog search. |
| How To Build A Car | No complete reference range established in cached records, library editions, Google contents or targeted catalog search. |
| Uncommon Carriers | No complete reference range established in cached records, library editions, Google contents or targeted catalog search. |
| The Sum of the People | No complete reference range established in cached records, library editions, Google contents or targeted catalog search. |
| Making Modern Science | No complete reference range established in cached records, library editions, Google contents or targeted catalog search. |
| Focus: The ASML Way | No complete reference range established in cached records, library editions, Google contents or targeted catalog search. |
| Out of the Crisis | No complete reference range established in cached records, library editions, Google contents or targeted catalog search. |
| The Soul of A New Machine | No complete reference range established in cached records, library editions, Google contents or targeted catalog search. |
| Skunk Works | No complete reference range established in cached records, library editions, Google contents or targeted catalog search. |
| Creativity, Inc. | No complete reference range established in cached records, library editions, Google contents or targeted catalog search. |
| The God Machine | No complete reference range established in cached records, library editions, Google contents or targeted catalog search. |
| Eccentric Orbits | No complete reference range established in cached records, library editions, Google contents or targeted catalog search. |
| The Rickover Effect | No complete reference range established in cached records, library editions, Google contents or targeted catalog search. |
| Show Stopper! | No complete reference range established in cached records, library editions, Google contents or targeted catalog search. |
| Energy: A Beginner’s Guide | No complete reference range established in cached records, library editions, Google contents or targeted catalog search. |
| Sunburst and Luminary | No complete reference range established in cached records, library editions, Google contents or targeted catalog search. |
| Fly by Wire | No complete reference range established in cached records, library editions, Google contents or targeted catalog search. |
| Grace Hopper and the Invention of the Information Age | No complete reference range established in cached records, library editions, Google contents or targeted catalog search. |
| Making Software | No complete reference range established in cached records, library editions, Google contents or targeted catalog search. |
| The Art of Doing Science and Engineering | No complete reference range established in cached records, library editions, Google contents or targeted catalog search. |
| Working | No complete reference range established in cached records, library editions, Google contents or targeted catalog search. |
| The Genome War | No complete reference range established in cached records, library editions, Google contents or targeted catalog search. |
| Out of the Crystal Maze | No complete reference range established in cached records, library editions, Google contents or targeted catalog search. |
| The Quest for Artificial Intelligence | No complete reference range established in cached records, library editions, Google contents or targeted catalog search. |
| Project Azorian | No complete reference range established in cached records, library editions, Google contents or targeted catalog search. |
| Carrying the Fire | No complete reference range established in cached records, library editions, Google contents or targeted catalog search. |
| 747: Creating the World's First Jumbo Jet and Other Adventures from a Life in Aviation | No complete reference range established in cached records, library editions, Google contents or targeted catalog search. |
| Blood, Sweat, and Pixels | No complete reference range established in cached records, library editions, Google contents or targeted catalog search. |
| The Innovator’s Dilemma | No complete reference range established in cached records, library editions, Google contents or targeted catalog search. |
| The Sciences of the Artificial | No complete reference range established in cached records, library editions, Google contents or targeted catalog search. |
| Visual Explanations | No complete reference range established in cached records, library editions, Google contents or targeted catalog search. |
| A Short Bright Flash | No complete reference range established in cached records, library editions, Google contents or targeted catalog search. |
| When the Heavens Went on Sale | No complete reference range established in cached records, library editions, Google contents or targeted catalog search. |
| Humble Pi: A Comedy of Maths Errors | No complete reference range established in cached records, library editions, Google contents or targeted catalog search. |
| Exploding the Phone | No complete reference range established in cached records, library editions, Google contents or targeted catalog search. |
| Inventing Accuracy | No complete reference range established in cached records, library editions, Google contents or targeted catalog search. |
| The Secret Horsepower Race | No complete reference range established in cached records, library editions, Google contents or targeted catalog search. |
| Code | No complete reference range established in cached records, library editions, Google contents or targeted catalog search. |
| Engineering in Plain Sight | No complete reference range established in cached records, library editions, Google contents or targeted catalog search. |
| Failure Is Not an Option: Mission Control from Mercury to Apollo 13 and Beyond | No complete reference range established in cached records, library editions, Google contents or targeted catalog search. |
| UNIX: A History and a Memoir | No complete reference range established in cached records, library editions, Google contents or targeted catalog search. |
| The Right Kind of Crazy | No complete reference range established in cached records, library editions, Google contents or targeted catalog search. |
| The Sporty Game | No complete reference range established in cached records, library editions, Google contents or targeted catalog search. |
| Sweating Bullets | No complete reference range established in cached records, library editions, Google contents or targeted catalog search. |
| Changing How the World Does Business | No complete reference range established in cached records, library editions, Google contents or targeted catalog search. |
| Frostbite | No complete reference range established in cached records, library editions, Google contents or targeted catalog search. |
| Apollo 13 (originally Lost Moon: The Perilous Voyage of Apollo 13) | No complete reference range established in cached records, library editions, Google contents or targeted catalog search. |
| Volt Rush | No complete reference range established in cached records, library editions, Google contents or targeted catalog search. |
| Quantum Computing Since Democritus | No complete reference range established in cached records, library editions, Google contents or targeted catalog search. |
| Zero to One | No complete reference range established in cached records, library editions, Google contents or targeted catalog search. |
| A Singular Mathematical Promenade | No complete reference range established in cached records, library editions, Google contents or targeted catalog search. |
| Crossing the Chasm | No complete reference range established in cached records, library editions, Google contents or targeted catalog search. |
| The Innovator's Solution | No complete reference range established in cached records, library editions, Google contents or targeted catalog search. |
| What Are Numbers? | Whole-work or edition identity unresolved; a partial volume, excerpt or unverified translation cannot supply this value. |
| ASML's Architects | No complete reference range established in cached records, library editions, Google contents or targeted catalog search. |
| The Smartest Guys in the Room | No complete reference range established in cached records, library editions, Google contents or targeted catalog search. |
| Dreamland: The Secret History of Area 51 | No complete reference range established in cached records, library editions, Google contents or targeted catalog search. |
| An Astronaut's Guide to Life on Earth | No complete reference range established in cached records, library editions, Google contents or targeted catalog search. |
| Play Nice But Win | No complete reference range established in cached records, library editions, Google contents or targeted catalog search. |
| Ship of Gold in the Deep Blue Sea | No complete reference range established in cached records, library editions, Google contents or targeted catalog search. |
| In Pursuit of Unicorns: A Journey Through 50 Years of Biotechnology | No complete reference range established in cached records, library editions, Google contents or targeted catalog search. |
| The Great Mental Models | No complete reference range established in cached records, library editions, Google contents or targeted catalog search. |
| How to Make a Spaceship | No complete reference range established in cached records, library editions, Google contents or targeted catalog search. |
| Into the Deep | No complete reference range established in cached records, library editions, Google contents or targeted catalog search. |
| Complexity and the Economy | No complete reference range established in cached records, library editions, Google contents or targeted catalog search. |
| Fab: From Personal Computers to Personal Fabrication | No complete reference range established in cached records, library editions, Google contents or targeted catalog search. |
| The General Theory of Employment, Interest, and Money | No complete reference range established in cached records, library editions, Google contents or targeted catalog search. |
| Chasing the Rabbit | No complete reference range established in cached records, library editions, Google contents or targeted catalog search. |
| What Do You Care What Other People Think? | No complete reference range established in cached records, library editions, Google contents or targeted catalog search. |
| Piloting Palm | No complete reference range established in cached records, library editions, Google contents or targeted catalog search. |
| The Seven Sisters | No complete reference range established in cached records, library editions, Google contents or targeted catalog search. |
| Crude Capitalism | No complete reference range established in cached records, library editions, Google contents or targeted catalog search. |
| HBR's 10 Must Reads on Strategy (including featured article “What Is Strategy?” by Michael E. Porter) | No complete reference range established in cached records, library editions, Google contents or targeted catalog search. |
| American Kingpin | No complete reference range established in cached records, library editions, Google contents or targeted catalog search. |
| The Evening Star | No complete reference range established in cached records, library editions, Google contents or targeted catalog search. |
| Mathematics: Its Content, Methods and Meaning | No complete reference range established in cached records, library editions, Google contents or targeted catalog search. |
| This Is for Everyone | No complete reference range established in cached records, library editions, Google contents or targeted catalog search. |
| Invention: The Care and Feeding of Ideas | No complete reference range established in cached records, library editions, Google contents or targeted catalog search. |
| The Power Of Productivity | No complete reference range established in cached records, library editions, Google contents or targeted catalog search. |
| Railroader | No complete reference range established in cached records, library editions, Google contents or targeted catalog search. |
| How Africa Works | No complete reference range established in cached records, library editions, Google contents or targeted catalog search. |
| The Digital Hand | No complete reference range established for the whole nominated multivolume work; a partial volume cannot supply this value. |
| Who Says Elephants Can't Dance? | No complete reference range established in cached records, library editions, Google contents or targeted catalog search. |
| Now It Can Be Told | No complete reference range established in cached records, library editions, Google contents or targeted catalog search. |
| X, Y & Z | No complete reference range established in cached records, library editions, Google contents or targeted catalog search. |
| The Pope of Physics: Enrico Fermi and the Birth of the Atomic Age | No complete reference range established in cached records, library editions, Google contents or targeted catalog search. |
| Turing’s Cathedral | No complete reference range established in cached records, library editions, Google contents or targeted catalog search. |
| Breaking Through: My Life in Science | No complete reference range established in cached records, library editions, Google contents or targeted catalog search. |
| The Worlds I See | No complete reference range established in cached records, library editions, Google contents or targeted catalog search. |
| The Nature and Art of Workmanship | No complete reference range established in cached records, library editions, Google contents or targeted catalog search. |
| The Switch | No complete reference range established in cached records, library editions, Google contents or targeted catalog search. |
| Between Silk and Cyanide | No complete reference range established in cached records, library editions, Google contents or targeted catalog search. |
| Revolution in The Valley | No complete reference range established in cached records, library editions, Google contents or targeted catalog search. |
| The Effective Executive | No complete reference range established in cached records, library editions, Google contents or targeted catalog search. |
| The Hard Thing About Hard Things | No complete reference range established in cached records, library editions, Google contents or targeted catalog search. |
| The Big Short | No complete reference range established in cached records, library editions, Google contents or targeted catalog search. |
| Commodore | No complete reference range established for the whole nominated multivolume work; a partial volume cannot supply this value. |
| Confessions of a Pricing Man | No complete reference range established in cached records, library editions, Google contents or targeted catalog search. |
| Invent and Wander | No complete reference range established in cached records, library editions, Google contents or targeted catalog search. |
| Computing Calamities | No complete reference range established in cached records, library editions, Google contents or targeted catalog search. |
| My Years with General Motors | No complete reference range established in cached records, library editions, Google contents or targeted catalog search. |
| Kelly: More Than My Share of It All | No complete reference range established in cached records, library editions, Google contents or targeted catalog search. |
| Companion Encyclopedia of the History and Philosophy of the Mathematical Sciences | No complete reference range established for the whole nominated multivolume work; a partial volume cannot supply this value. |
| One Billion Hungry | No complete reference range established in cached records, library editions, Google contents or targeted catalog search. |
| A History of Civilizations | No complete reference range established in cached records, library editions, Google contents or targeted catalog search. |

## Issues retained for later review

- The nominated versions of *Henry James* and several series need a precise volume or edition identity. A single volume is not used as the count of an open series.
- *What Are Numbers?* and *Computer Connections* need a separate publication/eligibility check. This metadata update does not change their current classification.
- Conflicting prepublication page estimates were replaced only when a matching edition had stronger evidence. Examples include *The Founders*, *iWoz*, *Don’t Be Evil*, *Egg*, and *The Scientific Method*. Conflicts and selected editions are recorded above.
- *Change and Variations* had an ISBN belonging to a different book. Springer confirms ISBN 9783030705749 and XXII + 419 pages for the selected paperback. The corrected extent is 441 pages. *Digital Apollo* also had a wrong existing page count; the matching MIT Press paperback has 384 pages.
- *The Seven Sisters* had a product link and edition record for *Serpico*. A separate matching Sampson edition supplies the corrected page count. *Making Software* retains its publisher-stated 624 pages, with a verified paperback ISBN replacing the ebook edition identifier.
- Remaining Amazon counts need a later successful product snapshot when the record is unavailable or the returned product does not match. No rating total is inferred from popularity, other stores, sales rank or a review count.
