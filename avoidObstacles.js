function avoidObstacles(inputArray) {
  // rewrite using every
  const hurdles = inputArray.reduce((acc,o) => (acc[o] = o,acc),[]);
  const last = hurdles.length - 1;

  for (let i = 2; i < last; i += 1) {
    let blocked;
    for (let j = i; j <= last && !blocked; j += i) {
      blocked = hurdles[j];
    }
    if (!blocked) return i;
  }
  return last + 1;
}

const a1 = [5, 3, 11, 6, 7, 9];
console.log(`Jump is ${avoidObstacles(a1)} for ${a1}`);

const a2 = [1, 4, 10, 6, 2];
console.log(`Jump is ${avoidObstacles(a2)} for ${a2}`);
