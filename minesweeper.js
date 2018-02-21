function minesweeper(matrix) {
  const mines = [];
  const offsets = [
    [-1,-1],[-1, 0],[-1, 1],  // up left, up, up right
    [ 0,-1],        [ 0, 1],  // left, right
    [ 1,-1],[ 1, 0],[ 1, 1],  // down left, down, down right
  ];
  const height = matrix.length;
  const width = matrix[0].length;

  for (let r = 0; r < height; r += 1) {
    let rowCounts = [];
    for (let c = 0; c < width; c += 1) {
      let count = 0;
      for (let o = 0; o < offsets.length; o += 1) {
        const [row, col] = [r + offsets[o][0], c + offsets[o][1]];
        if (row >= 0 && row < height &&
          col >= 0 && col < width) {
          count += (matrix[row][col] ? 1 : 0);
        }
      }
      rowCounts.push(count);
    }
    mines.push( rowCounts );
  }
  return JSON.stringify(mines);
}

const a1 = [
  [true, false, false],
  [false, true, false],
  [false, false, false],
];

console.log(`${a1} => ${minesweeper(a1)}`);

const a2 = [
  [true,false,false,true], 
  [false,false,true,false], 
  [true,true,false,true]
];

console.log(`${a2} => ${minesweeper(a2)}`);
