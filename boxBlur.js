function boxBlur(image) {
  const blur = [];
  const rows = image.length - 2;
  const cols = image[0].length - 2;

  for (let r = 0; r < rows; r += 1) {
    const blurRow = [];
    for (let c = 0; c < cols; c += 1) {
      console.log(r,c,cols)
      blurRow.push(Math.floor([
        ...image[r + 0].slice(c, c + 3),
        ...image[r + 1].slice(c, c + 3),
        ...image[r + 2].slice(c, c + 3),
      ].reduce((acc, v) => acc + v, 0) / 9));
    }
    blur.push(blurRow);
  }
  return blur;
}

const a1 = [
  [1, 1, 1],
  [1, 7, 1],
  [1, 1, 1],
];

console.log(`blurred ${boxBlur(a1)}`);

const a2 = [
  [7, 4, 0, 1],
  [5, 6, 2, 2],
  [6,10, 7, 8],
  [1, 4, 2, 0],
];
console.log(`blurred ${boxBlur(a2)}`);

const a3 = [
  [36,0,18,9], 
  [27,54,9,0], 
  [81,63,72,45]
];
console.log(`blurred ${boxBlur(a3)}`);
