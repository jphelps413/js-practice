
function sortByHeight(a) {
  const heights = a.filter(p => p > 0).sort((a,b) => a - b);
  return a.map(x => (x < 0 ? x : heights.shift()));
}

console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]));
console.log(sortByHeight([4, 2, 9, 11, 2, 16]));
