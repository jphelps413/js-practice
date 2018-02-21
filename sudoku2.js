function sudoku2(grid) {
  // returns false if any digits from 1-9 are repeated
  function isInvalid(ary) {
    return ary.slice().sort().join('').match(/([1-9])\1+/g);
  }

  // slices out a 3x3 array from the grid at the given row and column and
  // concats and spreads the results into a 1D array.
  function flattenBox(row, col) {
    return [].concat(...[
      grid[row+0].slice(col,col+3),
      grid[row+1].slice(col,col+3),
      grid[row+2].slice(col,col+3) ]);
    }

  for (let i = 0; i < grid.length; i += 1) {
    // check row
    if (isInvalid(grid[i])) return false;

    // check column after mapping from the rows
    if (isInvalid( grid.map( row => row[i] ) )) return false;

    // calculate the coords of the top left cell of the box, flatten it
    // into a 1D array and check it for validity.
    const box = flattenBox(Math.floor(i/3)*3, (i%3)*3);
    if (isInvalid(box)) return false;
  }

  return true;
}

const g1 = [
  ['.', '.', '.', '1', '4', '.', '.', '2', '.'], // 0:[0][0]  1:[0][3]  2:[0][6]
  ['.', '.', '6', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '1', '.', '.', '.', '.', '.', '.'], // 3:[3][0]  4:[3][3]  5:[3][6]
  ['.', '6', '7', '.', '.', '.', '.', '.', '9'],
  ['.', '.', '.', '.', '.', '.', '8', '1', '.'],
  ['.', '3', '.', '.', '.', '.', '.', '.', '6'], // 6:[6][0]  7:[6][3]  8:[6][6]
  ['.', '.', '.', '.', '.', '7', '.', '.', '.'],
  ['.', '.', '.', '5', '.', '.', '.', '7', '.'],
];

const g2 = [
  ['.', '.', '.', '.', '2', '.', '.', '9', '.'],
  ['.', '.', '.', '.', '6', '.', '.', '.', '.'],
  ['7', '1', '.', '.', '7', '5', '.', '.', '.'],
  ['.', '7', '.', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '8', '3', '.', '.', '.'],
  ['.', '.', '8', '.', '.', '7', '.', '6', '.'],
  ['.', '.', '.', '.', '.', '2', '.', '.', '.'],
  ['.', '1', '.', '2', '.', '.', '.', '.', '.'],
  ['.', '2', '.', '.', '3', '.', '.', '.', '.'],
];

console.log(`G1 = ${sudoku2(g1)}`);
console.log(`G2 = ${sudoku2(g2)}`);
