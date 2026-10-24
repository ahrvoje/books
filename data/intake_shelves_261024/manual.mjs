import fs from 'node:fs';import {dir,read,write} from './capture.mjs';
let rows=[];function add(source,s){for(const line of s.trim().split('\n')){let[title,author='']=line.split('|');rows.push({source,title,author,context:'Explicit title in source main text or comments; see captured text.'});}}
add(252,`The End of Enlightenment|Richard Whatmore
The New Roman Empire|Anthony Kaldellis
How Life Works|Philip Ball
Revolusi|David van Reybrouck
Nuclear War: A Scenario|Annie Jacobsen
A History of the Muslim World|Michael Cook
Native Nations|Kathleen DuVal
Molly|Blake Butler
The Crisis of Culture|Olivier Roy
The Eastern Front|Nick Lloyd
Carlo Scarpa: The Complete Buildings|Guido Beltramini and Italo Zannier
Self-Help Is Like a Vaccine|Bryan Caplan
Rural Hours|Harriet Baker
Hidden Victims|Cormac Ó Gráda
Why Machines Learn|Anil Ananthaswamy
Madrid: A New Biography|Luke Stegemann
The Art of Ukraine|Alisa Lozhkina
Perils and Prospects of a United Ireland|Padraig O'Malley
A Voyage Around the Queen|Craig Brown
The Impossible Man|Patchen Barss
Destiny Disrupted|Tamim Ansary
Challenger|Adam Higginbotham
The Message|Ta-Nehisi Coates`);
add(254,`From Clockwork to Crapshoot|Roger G. Newton
Introduction to High Energy Physics|Donald Perkins
The Ideas of Particle Physics|G. D. Coughlan
The Comprehensible Cosmos|Victor Stenger
The Fallacy of Fine-Tuning|Victor Stenger
Dialogues Concerning Natural Religion|David Hume
The Better Angels of Our Nature|Steven Pinker
Introduction to Thermodynamics and Statistical Mechanics|Keith Stowe
Every Thing Must Go|James Ladyman and Don Ross
Incomplete Nature|Terrence Deacon
Faith Versus Fact|Jerry Coyne
On What Matters|Derek Parfit
The Evolution of Physics|Albert Einstein and Leopold Infeld
The Trouble with Physics|Lee Smolin
Not Even Wrong|Peter Woit`);
add(256,`Think of a Number|Malcolm E. Lines
Cosmos|Carl Sagan
A Brief History of Time|Stephen Hawking
The Road to Reality|Roger Penrose
The Elegant Universe|Brian Greene
Longitude|Dava Sobel
The Radium Girls|Kate Moore
Quantum: A Guide for the Perplexed|Jim Al-Khalili
Introduction to Quantum Mechanics|David Griffiths
13 Things That Don't Make Sense|Michael Brooks
Goldilocks and the Water Bears|Louisa Preston
The Feynman Lectures on Physics|Richard Feynman
When Einstein Walked with Gödel|Jim Holt
Why Does the World Exist?|Jim Holt
Other Minds|Peter Godfrey-Smith
Mūlamadhyamakakārikā|Nagarjuna
The Emperor's New Mind|Roger Penrose
What Is Real?|Adam Becker
A Madman Dreams of Turing Machines|Janna Levin
Alice in Quantumland|Robert Gilmore
Scrooge's Cryptic Carol|Robert Gilmore
Alice's Adventures in Wonderland|Lewis Carroll
A Christmas Carol|Charles Dickens
How Behavior Spreads|Damon Centola
The Tipping Point|Malcolm Gladwell
The Second Creation|Robert P. Crease and Charles C. Mann
Quantum Mechanics|Albert Messiah
Lectures on Quantum Mechanics|Gordon Baym
Principles of Quantum Mechanics|Ramamurti Shankar
Quantum Mechanics|Claude Cohen-Tannoudji
Quantum Theory, Groups and Representations|Peter Woit
The Seventh Function of Language|Laurent Binet
Beyond Weird|Philip Ball
Enjoy Our Universe|Alvaro De Rújula
The Age of Wonder|Richard Holmes
Seven Brief Lessons on Physics|Carlo Rovelli
The Order of Time|Carlo Rovelli
The Immortalists|David M. Friedman
number9dream|David Mitchell
Trespassing on Einstein's Lawn|Amanda Gefter
Physics for Future Presidents|Richard Muller
Totally Random|Tanya Bub and Jeffrey Bub
Origins|Jim Baggott
Dreams of a Final Theory|Steven Weinberg
Making Sense of Science|Cornelia Dean
The Better Angels of Our Nature|Steven Pinker
Coming of Age in the Milky Way|Timothy Ferris
Lost in Math|Sabine Hossenfelder
The Black Hole War|Leonard Susskind
Only the Longest Threads|Tasneem Zehra Husain
Through Two Doors at Once|Anil Ananthaswamy
The Edge of Physics|Anil Ananthaswamy
The Emperor of All Maladies|Siddhartha Mukherjee
The First Three Minutes|Steven Weinberg
Wider Than the Sky|Gerald Edelman
Inferior|Angela Saini
Mother Nature|Sarah Blaffer Hrdy`);
add(257,`Just Six Numbers|Martin Rees
The First Three Minutes|Steven Weinberg
The Elegant Universe|Brian Greene
Warped Passages|Lisa Randall
Neutrino Hunters|Ray Jayawardhana
Chaos|James Gleick
The Self-Made Tapestry|Philip Ball
Linked|Albert-László Barabási
The Edge of Physics|Anil Ananthaswamy
The Quest for Consciousness|Christof Koch
Beyond Measure|Jim Baggott
Surely You're Joking, Mr. Feynman!|Richard Feynman
Sustainable Energy – Without the Hot Air|David MacKay
The Character of Physical Law|Richard Feynman
Mad Science: Experiments You Can Do at Home—But Probably Shouldn't|Theodore Gray`);
add(264,`The Nature of Technology|W. Brian Arthur
Out of Control|Kevin Kelly
Uncanny Valley|Anna Wiener
A Fire Upon the Deep|Vernor Vinge
Stranger in a Strange Land|Robert Heinlein
Engines of Creation|K. Eric Drexler
The Soul of a New Machine|Tracy Kidder
Chaos|James Gleick
The Closing of the American Mind|Allan Bloom
A People's History of the United States|Howard Zinn
The Rise of Theodore Roosevelt|Edmund Morris
American Nerd: The Story of My People|Benjamin Nugent
The PayPal Wars|Eric M. Jackson
The Structure of Scientific Revolutions|Thomas Kuhn
README|W. Patrick McCray`);
add(265,`The Fate of Rome|Kyle Harper
Imperial Tragedy|Michael Kulikowski
Imperial Triumph|Michael Kulikowski
The Pursuit of Power|William H. McNeill
The Precarious Balance|Ludwig Dehio
The History of the Decline and Fall of the Roman Empire|Edward Gibbon
The Landmark Thucydides|Thucydides
The Rise of the West|William H. McNeill
Secular Cycles|Peter Turchin and Sergey Nefedov
Escape from Rome|Walter Scheidel
Moral Origins|Christopher Boehm
Society Against the State|Pierre Clastres
The Creation of Inequality|Kent Flannery and Joyce Marcus
1931: Debt, Crisis, and the Rise of Hitler|Tobias Straumann
The Great Wave|David Hackett Fischer
The Shield of Achilles|Philip Bobbitt
The Evolution of Civilizations|Carroll Quigley
A Study of History|Arnold Toynbee
States and Social Revolutions|Theda Skocpol
Rulers, Religion, and Riches|Jared Rubin`);
add(256,`Dark Matter and the Dinosaurs|Lisa Randall
Built|Roma Agrawal
The Music Instinct|Philip Ball
Curiosity|Philip Ball
Testosterone Rex|Cordelia Fine
Consciousness Explained|Daniel Dennett
The Age of Entanglement|Louisa Gilder
Command and Control|Eric Schlosser
The Double Helix|James Watson
A Short History of Nearly Everything|Bill Bryson
QED|Richard Feynman
Trinity|Frank Close
An Officer and a Spy|Robert Harris
Maker of Patterns|Freeman Dyson`);
add(266,`The Erwin Tomash Library on the History of Computing: An Annotated and Illustrated Catalog|Erwin Tomash and Michael R. Williams
The Geometry of Compasses|Oliver Byrne`);
write(dir+'/manual.json',rows);
