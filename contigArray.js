
function isContiguous(ary) {
  const mapped = ary.reduce((acc, val) => {
    acc[val] = true;
    return acc;
  }, {});

  const keys = Object.keys(mapped).sort((a,b) => +a < +b);

  return keys.length === (keys[0] - (keys[keys.length - 1]) + 1);
}

const tests = [
  { exp: true, ary: [1, 7, 0, 2, 5, 4, 3, 6, 7, 8, 4, 5, 1, 2, 7] },
  { exp: false, ary: [99, 23, 65, 87, 31, 44] },
  { exp: false, ary: [] },
  { exp: true, ary: [0, 0, 0, 0, 0, 0, 0] },
  { exp: true, ary: [1, 1, 1, 1, 1, 1, 1] },
  { exp: true, ary: [-2, -1, 0, 1, 2] },
];

function passFail(ans,exp) {
  return ans === exp ? 'PASS' : 'FAIL';
}

for (let t = 0; t < tests.length; t += 1) {
  const ans = isContiguous(tests[t].ary);
  console.log(`${t} : ${passFail(ans,tests[t].exp)} ${ans} => ${tests[t].ary}`);
}
