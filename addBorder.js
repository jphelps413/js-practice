function addBorder(picture) {
  const frame = '*'.repeat(picture[0].length + 2);
  return [frame, ...picture.map(p => `*${p}*`), frame];
}

const pic1 = [
  'abcde',
  'fghij',
  'klmno',
  'pqrst',
  'uvwxy',
];

console.log(`added border => ${addBorder(pic1)}`);
