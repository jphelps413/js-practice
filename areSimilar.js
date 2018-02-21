function areSimilar(a, b) {
  const diffs = a.reduce((acc, _, idx) => {
    if (a[idx] !== b[idx]) acc.push(idx);
    return acc;
  }, []);

  if (diffs.length === 0) return true;
  if (diffs.length > 2) return false;

  return a[diffs[0]] === b[diffs[1]] &&
         a[diffs[1]] === b[diffs[0]];
}

const a1 = [1, 2, 3];
const b1 = [2, 1, 3];
console.log(`[${a1}] & [${b1}] true ? ${areSimilar(a1, b1)}`);

const a2 = [1, 2, 3];
const b2 = [1, 2, 3];
console.log(`[${a2}] & [${b2}] true ? ${areSimilar(a2, b2)}`);

const a3 = [1, 2, 4];
const b3 = [1, 2, 3];
console.log(`[${a3}] & [${b3}] false ? ${areSimilar(a3, b3)}`);
