
function matrixElementsSum(matrix) {
  const haunted = {};
  let total = 0;
  matrix.map((row) => {
    total += row.reduce((acc, val, col) => {
      if (val === 0) haunted[col] = true;
      acc += (haunted[col] ? 0 : val);
      return acc;
    }, 0);
  });
  return total;
}

const mtx1 = [
  [0, 1, 1, 2],
  [0, 5, 0, 0],
  [2, 0, 3, 3],
];

console.log(`Rent is 9 ${matrixElementsSum(mtx1)}`);
