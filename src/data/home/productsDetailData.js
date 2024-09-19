const personalities = [
  { desc: '먹보', tags: 'ぼんやり, Lazy', color: '#A1B972' },
  { desc: '운동광', tags: 'ハキハキ, Jock', color: '#B56D6B' },
  { desc: '무뚝뚝', tags: 'コワイ, Cranky', color: '#A1A1A1' },
  { desc: '느끼함', tags: 'キザ, Smug', color: '#D0D300' },
  { desc: '친절함', tags: 'ふつう, Normal', color: '#A3B3FF' },
  { desc: '아이돌', tags: 'げんき, Peppy', color: '#E0A078' },
  { desc: '성숙함', tags: 'オトナ, Snooty', color: '#E0859A' },
  { desc: '단순활발', tags: 'アネキ, Big Sister', color: '#A37BCE' },
];

const names = [
  'Mitchell',
  'Yobi',
  'Junny',
  'Jackson',
  'Siberia',
  'Spica',
  'Miae',
  'Apple',
  'Poyami',
  'Cider',
  'Patch',
  'Peter',
  'Bianca',
  'Natalie',
  'Sion',
  'Rika',
  'Jechun',
  'Giga',
  'Booster',
  'Machi',
  'Pengu',
  'Champagne',
  'Feather',
  'Pirroco',
  'Petunia',
  'Dezane',
  'Somyeon',
  'Marty',
  'Francois',
  'Glumin',
  'Christine',
  'Bingti',
  'Bouquet',
  'Leader',
  'Etoile',
  'Guiomi',
  'Chadul',
  'Charles',
  'Meichel',
  'Chelsea',
  'Solmi',
  'Lobo',
  'Pica',
  'Toby',
  'Cocoa',
  'Lily',
  'Richard',
  'Jessica',
  '1ho',
];

const trade_amounts = [
  '4,598',
  '6,046',
  '20.4만',
  '2.9만',
  '7,384',
  '3.5만',
  '1.9만',
  '9,876',
  '4.1만',
  '2.8만',
  '15.2만',
  '8.7만',
  '12,354',
  '19.5만',
  '25.7만',
  '3,214',
  '18,493',
  '10.1만',
  '13.3만',
  '5,789',
];
const prices = ['155,000원', '305,000원', '120,000원', '250,000원', '200,000원', '220,000원', '195,000원', '210,000원'];
const price_desc = ['즉시구매가', '구매가'];

const image_sources = Array.from({ length: 113 }, (_, i) => `/animal/img${i + 1}.webp`);

const getRandomElement = arr => arr[Math.floor(Math.random() * arr.length)];

const generateProductsDetailData = (start = 0, limit = 10) => {
  return Array.from({ length: limit }, () => {
    const name = getRandomElement(names);
    const personality = getRandomElement(personalities);
    const tradeAmount = getRandomElement(trade_amounts);
    const price = getRandomElement(prices);
    const priceDesc = getRandomElement(price_desc);
    const imgSrc = getRandomElement(image_sources);

    return {
      name,
      desc: personality.desc,
      tags: personality.tags,
      color: personality.color,
      trade_amount: tradeAmount,
      price,
      price_desc: priceDesc,
      img_src: imgSrc,
    };
  });
};
export default generateProductsDetailData;
