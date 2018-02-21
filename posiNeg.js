
function posiNegPairs(ary) {
  const pairs = [];
  const coll = {};

  for (let i = 0; i < ary.length; i += 1) {
    const [key, val] = [Math.abs(ary[i]), ary[i]];
    if (!coll[key]) {
      coll[key] = [val];
    } else if (coll[key].length === 1 && coll[key][0] + val === 0) {
      coll[key].push(val);
      pairs.push([...coll[key]]);
    }
  }
  // [].concat.apply([],pairs);
  return pairs;
}

const tests = [
  { exp: 2, ary: [-1, 7, 0, 2, 5, 4, 3, 6, 7, 8, 4, -5, 1, 2, 7] },
  { exp: 0, ary: [] },
  { exp: 0, ary: [1, 1, 1, 1, 1, 1, 1] },
  { exp: 2, ary: [-2, -1, 0, 1, 2] },
  { exp: 1, ary: [-3, -3, 3, 3, 0] },
];

function passFail(ans, exp) {
  return ans === exp ? 'PASS' : 'FAIL';
}

for (let t = 0; t < tests.length; t += 1) {
  const ans = posiNegPairs(tests[t].ary);
  //console.log(`${ans.length} => ${JSON.stringify(ans)}`);
  console.log(`${t} : ${passFail(ans.length, tests[t].exp)} [${ans}] => ${tests[t].ary}`);
}
