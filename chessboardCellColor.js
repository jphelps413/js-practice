function chessBoardCellColor(cell1, cell2) {
  const cellColor = c => (c[0].charCodeAt()%2 == c[1].charCodeAt()%2 ? 'b' : 'w');

  return cellColor(cell1) === cellColor(cell2);
}

const tests = [
  { cells: ['A1', 'C3'], ans: true },
  { cells: ['A1', 'H3'], ans: false },
  { cells: ['A1', 'B2'], ans: true },
];

for (let t = 0; t < tests.length; t += 1) {
  const passFail = ((answer, result) => (answer === result ? 'PASS' : 'FAIL'));

  const test = tests[t];
  const rslt = chessBoardCellColor(...test.cells);

  console.log(`${t}: ${passFail(test.ans, rslt)} ${test.ans} => ${rslt}`);
}
