import fs from 'node:fs';
const dir='data/books_guru_261021/';
const input=JSON.parse(fs.readFileSync(dir+'a-final-input.json','utf8'));
const dune='https://www.penguinrandomhouse.com/series/AU8/dune/';
const foundation='https://www.penguinrandomhouse.com/series/FOU/foundation/';
const rows=[
[6,'FICTION','Kerouac’s autobiographically inspired novel follows the invented Ray Smith and Japhy Ryder; real-life inspiration does not make it nonfiction.','https://www.penguinrandomhouse.com/books/579958/the-dharma-bums-by-jack-kerouac/'],
[11,'FICTION','Novel about Hazel and Augustus; its cancer setting does not change fiction status.','https://www.penguinrandomhouse.com/books/299004/the-fault-in-our-stars-by-john-green/'],
[14,'FICTION','Puzo’s Corleone-family crime novel, explicitly identified as fiction by the publisher.','https://www.penguinrandomhouse.com/books/290370/the-godfather-by-mario-puzo/9780451205766/'],
[18,'FICTION','Kerangal’s novel follows the fictional Simon Limbres and a transplant; medical detail is part of a literary narrative.','https://us.macmillan.com/books/9780374713287/theheart/'],
[22,'FICTION','Collins’s dystopian novel places Katniss in the invented Panem; the publisher explicitly calls it a novel.','https://www.scholastic.com/newsroom/all-news/press-release/the-hunger-games-by-suzanne-collins.html'],
[25,'FICTION','Clarke and Baxter’s speculative novel invents a technology that abolishes privacy; scientific themes do not override the fiction exclusion.','https://us.macmillan.com/books/9780765322876/thelightofotherdays/'],
[26,'FICTION','Towles’s novel follows fictional young travellers in1954; historical setting does not make it nonfiction.','https://www.penguinrandomhouse.com/books/549384/the-lincoln-highway-by-amor-towles/'],
[32,'FICTION','Williams explicitly labels the work a novel and his legal notice states that human, corporate and mechanical characters are fictional.','https://localroger.com/prime-intellect/mopilegl.html'],
[33,'FICTION','Robinson’s imagined international climate institution is a science-fiction novel, not a report of an existing organization.','https://www.hachettebookgroup.com/titles/kim-stanley-robinson/the-ministry-for-the-future/9780316300131/'],
[35,'FICTION','Lencioni teaches leadership motives through an invented leadership story; the author’s page explicitly calls its characters and plot a work of fiction. Practical lessons do not override that gate.','https://www.tablegroup.com/product/themotive/'],
[37,'FICTION','Powers and his publisher identify this as a novel built from interlocking invented lives; activism is not the basis of exclusion.','https://wwnorton.co.uk/books/9780393635522-the-overstory'],
[38,'FICTION','Matching ISBN identifies The Paper Menagerie and Other Stories, a collection of Ken Liu’s fantastical short fiction, not just a standalone nonfiction essay.','https://www.simonandschuster.com/books/The-Paper-Menagerie-and-Other-Stories/Ken-Liu/9781481424363'],
[43,'FICTION','Alderman’s alternate-world speculative novel imagines a biological change in power relations.','https://www.hachettebookgroup.com/titles/naomi-alderman/the-power/9780316570602/'],
[46,'FICTION','Second Young Elites fantasy novel about Adelina and supernatural abilities.','https://www.penguinrandomhouse.com/series/YGE/the-young-elites/'],
[47,'FICTION','Simsion’s romantic-comedy sequel follows the invented Don and Rosie; the publisher labels it A Novel.','https://www.simonandschuster.com/books/The-Rosie-Effect/Graeme-Simsion/9781476767321'],
[48,'FICTION','Simsion’s romantic-comedy novel about Don Tillman’s search for a partner; the publisher explicitly lists it as A Novel.','https://www.simonandschuster.com/authors/Graeme-Simsion/409909382'],
[57,'FICTION','The matching product identifies Nguyen’s The Sympathizer: A Novel (Pulitzer Prize for Fiction); this is fiction despite historical politics.','https://www.amazon.com/dp/0802123457'],
[67,'FICTION','Green’s invented young-adult characters form a novel of friendship and mental illness, explicitly identified by the publisher’s book resume.','https://assets.penguinrandomhouse.com/book-resumes/Green_Turtles%20All%20the%20Way_20250321.pdf'],
[78,'FICTION','We Are Legion (We Are Bob) is Taylor’s first Bobiverse science-fiction novel, about a fictional uploaded consciousness.','https://www.simonandschuster.com/books/We-Are-Legion-%28We-Are-Bob%29/Dennis-E-Taylor/Bobiverse/9781668221570'],
[92,'FICTION','Sixth novel in Frank Herbert’s fictional Dune sequence.',dune],
[95,'FICTION','Second novel in Frank Herbert’s fictional Dune sequence.',dune],
[96,'FICTION','Explicit nomination of Herbert’s whole Dune science-fiction sequence; no additional unnamed volumes are created.',dune],
[98,'FICTION','Asimov’s second Foundation prequel is explicitly a science-fiction novel about Hari Seldon.',foundation],
[99,'FICTION','Asimov’s Foundation sequel narrates an invented search for Earth in his Galactic Empire setting.',foundation],
[100,'FICTION','Asimov’s Foundation sequel follows invented exiles and the secret Second Foundation.',foundation],
[102,'FICTION','Fifth novel in Frank Herbert’s fictional Dune sequence.',dune],
[107,'FICTION','Brown’s Robert Langdon thriller is a novel, distinct from Jennifer Raff’s nonfiction namesake.','https://www.penguinrandomhouse.com/books/554852/origin-by-dan-brown/'],
[109,'FICTION','Asimov’s first Foundation prequel is a science-fiction novel, distinct from the previously covered original trilogy.',foundation],
[110,'FICTION','Cline’s invented Wade Watts competes in the OASIS virtual-world quest; this is a speculative adventure novel.','https://www.penguinrandomhouse.com/books/209887/ready-player-one-by-ernest-cline/'],
[111,'FICTION','Chiang’s collection includes eight speculative stories, including Story of Your Life; logical and scientific thought experiments do not override fiction.','https://www.penguinrandomhouse.com/books/538163/stories-of-your-life-and-others-by-ted-chiang/'],
[120,'FICTION','Ishiguro’s novel of the fictional butler Stevens is a literary narrative, not an actual servant’s memoir.','https://www.penguinrandomhouse.com/books/85611/the-remains-of-the-day-by-kazuo-ishiguro-introduction-by-salman-rushdie/9780679731726/'],
[122,'FICTION','Explicit named fantasy trilogy nomination; the publisher lists Marie Lu’s three invented Young Elites novels.','https://www.penguinrandomhouse.com/series/YGE/the-young-elites/'],
[0,'REFERENCE','An explicit coaching-skills method organized around seven questions, conversation practice and habit formation. The author’s opening chapters teach how to conduct interactions; anecdotes serve the training purpose.','https://pagetwo.com/book/the-coaching-habit/','https://www.mbs.works/wp-content/uploads/2021/06/CoachingHabit_PeekOpeningChapters.pdf'],
[2,'REFERENCE','Publisher explicitly calls it an intermittent-fasting manual, with a seven-day plan, recipes, fasting protocols and operational answers for doing fasts.','https://www.victorybelt.com/the-complete-guide-to-fasting'],
[13,'REFERENCE','A systematic skill-acquisition training method: deconstruct a skill, arrange practice and remove learning barriers. Its main purpose is instructions for practising new skills.','https://www.penguinrandomhouse.com/books/312040/the-first-20-hours-by-josh-kaufman/'],
[17,'REFERENCE','A guided meditation program with techniques to implement in ten minutes daily; the publisher and book details make practice instruction the central purpose.','https://us.macmillan.com/books/9781250104908/theheadspaceguidetomeditationandmindfulness/'],
[44,'REFERENCE','Author’s book page describes detailed step-by-step movement instructions and fully illustrated form/execution training, following introductory principles. Narrative framing does not change that explicit instructional purpose.','https://movnat.com/store/the-practice-of-natural-movement-book/']
];
const out=rows.map(([i,exclusion,reason,...evidence])=>{const b=input[i];const title=i===38?'The Paper Menagerie and Other Stories':i===78?'We Are Legion (We Are Bob)':b.title;return{id:b.id,title,author:i===0?'Michael Bungay Stanier':b.author,status:'excluded',exclusion,confidence:'high',eligibilityConfidence:'high',eligibility:reason,reason,gateReview:{BOOK_FORM:'Published book or explicitly nominated published book series, established by the matching primary publication record.',FICTION:exclusion==='FICTION'?reason:'Nonfiction instruction; fiction exclusion does not apply.',REFERENCE:exclusion==='REFERENCE'?reason:'Not reached after fiction exclusion.',V1:'Not assessed after the hard exclusion.',V2:'Not assessed after the hard exclusion.',V3:'Not assessed after the hard exclusion.',V4:'Not assessed after the hard exclusion.',V5:'Not assessed after the hard exclusion.'},evidence};});
fs.writeFileSync(dir+'a-gate-decisions.json',JSON.stringify(out,null,2)+'\n');console.log('Clear gate decisions',out.length);
