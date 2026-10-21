import { retrieve } from './collect.mjs';
const urls = [
  'https://mitpress.mit.edu/9780262536165/energy-and-civilization/',
  'https://winstonchurchill.hillsdale.edu/official-biography-concordance/',
  'https://www.penguinrandomhouse.com/books/550409/robert-a-caros-the-years-of-lyndon-johnson-set-by-robert-a-caro/',
  'https://www.amazon.com.au/dp/038535147X',
  'https://www.amazon.com.au/dp/0140911677',
  'https://penguinrandomhousehighereducation.com/book/?isbn=9780394499734',
  'https://penguinrandomhousehighereducation.com/book/?isbn=9780394528359',
  'https://penguinrandomhousehighereducation.com/book/?isbn=9780394528366',
  'https://penguinrandomhousehighereducation.com/book/?isbn=9780679405078',
  'https://penguinrandomhousesecondaryeducation.com/book/?isbn=9780143034698',
  'https://penguinrandomhouselibrary.com/book/?isbn=9780143037903',
  'https://penguinrandomhousehighereducation.com/book/?isbn=9780143116714',
  'https://www.penguinrandomhouse.com/books/20549/a-short-history-of-nearly-everything-by-bill-bryson/',
  'https://academic.macmillan.com/academictrade/9781250076229/beingmortal/',
  'https://www.simonandschuster.com/books/The-Future-of-Geography/Tim-Marshall/Politics-of-Place/9781668031643',
  'https://www.penguinrandomhouse.com/books/567075/god-human-animal-machine-by-meghan-ogieblyn/9780525562719/',
  'https://www.abramsbooks.com/product/doom-guy_9781419770173/',
  'https://www.indigo.ca/en-ca/atlantic-great-sea-battles-heroic-discoveries-titanic-storms-and-a-vast-ocean-of-a-million-stories/9780061702624.html'
];
for (let i = 0; i < urls.length; i++) {
  const r = await retrieve(urls[i], `manual-${i}`, 'html');
  console.log(JSON.stringify({ url: r.url, status: r.status, file: r.rawFile }));
}
