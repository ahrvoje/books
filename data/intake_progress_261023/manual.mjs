import fs from 'node:fs';
const rows=[];const add=(source,text)=>text.trim().split('\n').forEach(l=>{let [title,author='']=l.split('|');rows.push({source,title,author});});
add(235,`The Sporty Game|John Newhouse
The Abandoned Ocean|Andrew Gibson; Arthur Donovan
High-Speed Dreams|Erik M. Conway
Concorde: New Shape in the Sky|Kenneth Owen
When the Machine Stopped|Max Holland`);
add(236,`They Made America|Harold Evans
A Thread Across the Ocean|John Steele Gordon
The Demon Under the Microscope|Thomas Hager
The Disappearing Spoon|Sam Kean
The Great Bridge|David McCullough
American Steel|Richard Preston
First Light|Richard Preston
The Chip|T. R. Reid
The Most Powerful Idea in the World|William Rosen
Noble Obsession|Charles Slack
Longitude|Dava Sobel
Galileo's Daughter|Dava Sobel
Meet You in Hell|Les Standiford
The Billion-Dollar Molecule|Barry Werth`);
add(237,`Makers of the Microchip|Christophe Lécuyer; David C. Brock
The Intel Trinity|Michael S. Malone
Engineering the World: Stories from the First 75 Years|Caleb Pirtle
Tiger Technology|John A. Mathews; Dong-Sung Cho
Fabless|Daniel Nenni; Paul McLellan
Information for Everyone: The Applied Materials Story
Sensors in Automotive|Junko Yoshida
Computer Architecture: A Quantitative Approach|John L. Hennessy; David A. Patterson
Semiconductor Packaging: Materials Interaction and Reliability
Fundamental Principles of Optical Lithography: The Science of Microfabrication|Chris Mack
Handbook of Silicon Semiconductor Metrology|Alain C. Diebold
Technological Revolutions and Financial Capital|Carlota Perez
The Big Score|Michael S. Malone`);
add(245,`A Short History of Nearly Everything|Bill Bryson
Nothing Like It in the World|Stephen Ambrose
A History of Aerodynamics|John D. Anderson
Wedding of the Waters|Peter Bernstein
Prometheans in the Lab|Sharon Bertsch McGrayne
Brunel: The Man Who Built the World|Steven Brindle
The Invention That Changed the World|Robert Buderi
Building Construction Before Mechanization|John Fitchen
Historical Building Construction|Donald Friedman
Structures|J. E. Gordon
A Thread Across the Ocean|John Steele Gordon
Empires of Light|Jill Jonnes
Aerodynamics: Selected Theories in Light of Their Historical Development|Theodore von Karman
Brunelleschi's Dome|Ross King
The Devil in the White City|Erik Larson
Cathedral|David Macaulay
A Nation of Steel|Thomas Misa
The Evolution of Useful Things|Henry Petroski
In the Wake of Tacoma|Richard Scott
A Museum of Early American Tools|Eric Sloane
History of Strength of Materials|Stephen Timoshenko
Lives of the Architects|Giorgio Vasari
De Architectura|Vitruvius
What Engineers Know and How They Know It|Walter Vincenti
The Perfectionists|Simon Winchester
The Master Switch|Tim Wu
The Bible
The Quran`);
add(246,`The Soul of a New Machine|Tracy Kidder
Porsche: Excellence Was Expected|Karl Ludvigsen
The Design and Engineering of Curiosity|Emily Lakdawalla
Skunk Works|Ben Rich; Leo Janos
Kelly: More Than My Share of It All|Clarence L. Johnson
Code Name Ginger|Steve Kemper
The Lunar Men|Jenny Uglow
Ignition!|John D. Clark
Hacking the Xbox|Andrew Huang`);
add(247,`The Universal History of Computing|Georges Ifrah
The Ashtadhyayi|Panini
The Book of Ingenious Devices|Banu Musa
Kitab al-Muamma|Al-Khalil ibn Ahmad
The Book of Knowledge of Ingenious Mechanical Devices|Al-Jazari
The Roots of Civilization|Alexander Marshack
Science and Civilisation in China: Volume 4, Part 2, Mechanical Engineering|Joseph Needham
Geniuses at War|David A. Price
IBM: The Rise and Fall and Reinvention of a Global Icon|James W. Cortada
A People's History of Computing in the United States|Joy Lisi Rankin
The Intel Trinity|Michael S. Malone
What the Dormouse Said|John Markoff
Hackers|Steven Levy
The Innovators|Walter Isaacson
Fire in the Valley|Paul Freiberger; Michael Swaine`);
add(248,`The Making of the Atomic Bomb|Richard Rhodes
Dark Sun|Richard Rhodes
ICBM|G. Harry Stine
Skunk Works|Ben Rich; Leo Janos
Sapiens|Yuval Noah Harari
The Perfectionists|Simon Winchester
The Scientists|John Gribbin
Cosmos|Carl Sagan
The Discoverers|Daniel Boorstin
The Ancient Engineers|L. Sprague de Camp
The New Science of Strong Materials|J. E. Gordon
Structures|J. E. Gordon
The Ghost Map|Steven Johnson
Your Inner Fish|Neil Shubin
Dark Banquet|Bill Schutt
Plagues and Poxes|Alfred J. Bollet
The Innovators|Walter Isaacson
Steve Jobs|Walter Isaacson
Elon Musk|Walter Isaacson
A History of Modern Computing|Paul Ceruzzi
Computing: A Concise History|Paul Ceruzzi
Funding a Revolution: Government Support for Computing Research|National Research Council
Transforming Computer Technology: Information Processing for the Pentagon|Arthur L. Norberg; Judy E. O'Neill
IBM's Early Computers|Charles J. Bashe; Lyle R. Johnson; John H. Palmer; Emerson W. Pugh
Extra Life|Steven Johnson
The Song of the Cell|Siddhartha Mukherjee
Guns, Germs, and Steel|Jared Diamond
Energy and Civilization|Vaclav Smil
How We Got to Now|Steven Johnson
Ignition!|John D. Clark
The Gangs of Chicago|Herbert Asbury`);
add(249,`Chip War|Chris Miller
Understanding Semiconductors|Corey Richard
The Pattern on the Stone|W. Daniel Hillis
History of Semiconductor Engineering|Bo Lojek
Chips and Change|Clair Brown; Greg Linden
Crystal Fire|Michael Riordan; Lillian Hoddeson`);
add(250,`Chip War|Chris Miller
Breakneck|Dan Wang
Cobalt Red|Siddharth Kara
Material World|Ed Conway
The Idea Factory|Jon Gertner
The Kill Chain|Christian Brose
The Chip|T. R. Reid
The World for Sale|Javier Blas; Jack Farchy
Stuff Matters|Mark Miodownik
The War Below|Ernest Scheyder`);
add(244,`iWoz|Steve Wozniak
Just for Fun|Linus Torvalds
Dealers of Lightning|Michael Hiltzik
Founders at Work|Jessica Livingston
Coders at Work|Peter Seibel
Programmers at Work|Susan Lammers
Hatching Twitter|Nick Bilton
The Dream Machine|M. Mitchell Waldrop
Masters of Doom|David Kushner
The Soul of a New Machine|Tracy Kidder
Spinoff|Charles E. Sporck
Commodore: A Company on the Edge|Brian Bagnall
Only the Paranoid Survive|Andrew Grove
Gates|Stephen Manes; Paul Andrews
Microsoft Secrets|Michael Cusumano; Richard Selby
The Innovators|Walter Isaacson
Apollo: The Race to the Moon|Charles Murray; Catherine Bly Cox
The Making of the Atomic Bomb|Richard Rhodes
Lawrence and Oppenheimer|Nuel Pharr Davis
The Open Organization|Jim Whitehurst
The Supermen|Charles J. Murray
The Idea Factory|Jon Gertner
I Sing the Body Electronic|Fred Moody
Hackers|Steven Levy
Showstopper!|G. Pascal Zachary
DEC Is Dead, Long Live DEC|Edgar H. Schein
Skunk Works|Ben Rich; Leo Janos
Moneyball|Michael Lewis
The Smartest Guys in the Room|Bethany McLean; Peter Elkind
Billion Dollar Lessons|Paul B. Carroll; Chunka Mui
When Genius Failed|Roger Lowenstein
Free as in Freedom|Sam Williams
The PayPal Wars|Eric M. Jackson
Chaos Monkeys|Antonio Garcia Martinez
Weaving the Web|Tim Berners-Lee
Dreaming in Code|Scott Rosenberg
Everyone Else Must Fail|Karen Southwick
Winners, Losers & Microsoft|Stan J. Liebowitz; Stephen E. Margolis
Business at the Speed of Thought|Bill Gates
The Road Ahead|Bill Gates
Almost Perfect|W. E. Peterson
The Pixar Touch|David A. Price
Creativity, Inc.|Ed Catmull
Surveillance Valley|Yasha Levine
Bad Blood|John Carreyrou
The Silent Deep|Peter Hennessy; James Jinks
The Cuckoo's Egg|Clifford Stoll
Revolution in the Valley|Andy Hertzfeld
Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future|Ashlee Vance
The Space Barons|Christian Davenport
Bienvenue dans le nouveau monde|Mathilde Ramadier
Microserfs|Douglas Coupland
JPod|Douglas Coupland
The Secret History of Mac Gaming|Richard Moss
Andy Grove|Richard S. Tedlow
The Intel Trinity|Michael S. Malone
Netscape Time|Jim Clark
Valley Boy|Tom Perkins
Kelly: More Than My Share of It All|Clarence L. Johnson
The Mythical Man-Month|Frederick Brooks
Flight: My Life in Mission Control|Chris Kraft
Bill & Dave|Michael S. Malone
The HP Way|David Packard
Barbarians Led by Bill Gates|Jennifer Edstrom; Marlin Eller
Crypto|Steven Levy
A Truck Full of Money|Tracy Kidder
The New New Thing|Michael Lewis
Fearless Genius|Doug Menuez
Fire in the Valley|Paul Freiberger; Michael Swaine
Accidental Empires|Robert X. Cringely
Start-up Nation|Dan Senor; Saul Singer
Disrupted|Dan Lyons
Masterminds of Programming|Federico Biancuzzi; Shane Warden
What the Dormouse Said|John Markoff
Crystal Fire|Michael Riordan; Lillian Hoddeson
American Steel|Richard Preston
Project X: Nissin Cup Noodle
Steve Jobs|Walter Isaacson
Blood, Sweat, and Pixels|Jason Schreier
The Making of Karateka|Jordan Mechner
The Making of Prince of Persia|Jordan Mechner`);
fs.writeFileSync('data/intake_progress_261023/manual.json',JSON.stringify(rows,null,2));
