function maxAdjacentDiff(ary) {
  let max = 0;
  for( let i = 0; i < ary.length - 1; i += 1) {
    max = Math.max(max, ary[i] - ary[i + 1]);
  }
  return max;
}

console.log(` 3? ${maxAdjacentDiff([2, 4, 1, 0])}`);
