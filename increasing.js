
function almostIncr(sequence) {

  function isIncreasing(ignore = -1) {
    const seq = sequence.slice();
    if (ignore >= 0) seq.splice(ignore, 1);

    for (let i = 0; i < seq.length - 1; i += 1) {
      if (seq[i] >= seq[i + 1]) {
        return i;
      }
    }
    return -1;
  }
  const firstTry = isIncreasing();
  console.log(firstTry);
  if (firstTry === -1) return true;
  if (isIncreasing(firstTry) === -1) return true;
  if (isIncreasing(firstTry+1) === -1) return true;

  return false;
}

console.log(`          [1,3,2] true  => ${almostIncr([1, 3, 2])}`);
console.log(`        [1,3,2,1] false => ${almostIncr([1, 3, 2, 1])}`);
console.log(`        [1,2,1,2] false => ${almostIncr([1, 2, 1, 2])}`);
console.log(`      [1,2,5,3,5] true  => ${almostIncr([1, 2, 5, 3, 5])}`);
console.log(`[1,2,3,4,5,3,5,6] false => ${almostIncr([0, 1, 2, 3, 4, 5, 3, 5, 6])}`);
console.log(`   [10,1,2,3,4,5] true  => ${almostIncr([10, 1, 2, 3, 4, 5])}`);
console.log(`    [1,2,3,4,3,6] true  => ${almostIncr([1, 2, 3, 4, 3, 6])}`);
