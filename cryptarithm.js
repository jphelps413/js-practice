function isCryptSolution(crypt, solution) {
  const solutionMap = {};
  for (let i = 0; i < solution.length; i += 1) {
    solutionMap[solution[i][0]] = solution[i][1];
  }

  const decr = crypt.map(str => str
    .split('')
    .map(c => solutionMap[c])
    .join(''));

  if (decr.find(str => str.match(/^0/) && str.length > 1)) return false;

  return +decr[0] + +decr[1] === +decr[2];
}

console.log(`1.true? ${isCryptSolution(['SEND', 'MORE', 'MONEY'], [
  ['O', '0'],
  ['M', '1'],
  ['Y', '2'],
  ['E', '5'],
  ['N', '6'],
  ['D', '7'],
  ['R', '8'],
  ['S', '9'],
])}`);

console.log(`2.false? ${isCryptSolution(['TEN', 'TWO', 'ONE'], [
  ['O', '1'],
  ['T', '0'],
  ['W', '9'],
  ['E', '5'],
  ['N', '4'],
])}`);

console.log(`3.true? ${isCryptSolution(['A', 'A', 'A'], [['A', '0']])}`);

console.log(`4.false? ${isCryptSolution(['AA', 'AA', 'AA'], [['A', '0']])}`);
