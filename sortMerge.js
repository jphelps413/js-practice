
function divide(ary) {
  const half = Math.floor(ary.length / 2);
  return [ary.slice(0, half), ary.slice(half, ary.length)];
}

function merger(a, b) {
  const m = [];
  while (a.length > 0 && b.length > 0) {
    m.push(a[0] < b[0] ? a.shift() : b.shift());
  }
  return [...m, ...a, ...b];
}

function mergeSort(a) {
  if (a.length <= 1) return a;
  let [l,r] = divide(a);
  return merger( mergeSort(l), mergeSort(r) );
}

const tests = [
  [9, 1, 4, 7],
  [3, 4, 9, 12, 87, 34, 99, 13],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [13, 12, 11, 10, 9],
];

for (let t = 0; t < tests.length; t += 1) {
  console.log(mergeSort(tests[t]));
}
