function arrayChange(inputArray) {
  const work = inputArray.slice();
  let curr = work[0];
  let incr = 0;
  for (let i = 1; i < work.length; i += 1) {
    if (work[i] <= curr) {
      const delta = (curr + 1) - work[i];
      incr += delta;
      work[i] += delta;
    }
    curr = work[i];
  }
  return incr;
}

const a1 = [1, 1, 1];
console.log(`${a1} ? ${arrayChange(a1)}`);

const a2 = [2, 3, 3, 5, 5, 5, 4, 12, 12, 10, 15];
console.log(`${a2} ? ${arrayChange(a2)}`);
