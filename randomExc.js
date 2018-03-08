
const getRandomInt = max => Math.floor(Math.random() * (max + 1));

const getRandomExc = (max, exc) => {
  if (!exc || (exc[0] === 0 && exc[max] === max)) return undefined;

  const rnd = getRandomInt(max);
  if (exc.includes(rnd)) {
    return getRandomExc(max, exc);
  }

  return rnd;
};

console.log(getRandomExc(10, [0, 2, 4, 6, 8, 10])); // odd number
console.log(getRandomExc(3, [0, 1, 2, 3, 4])); // undefined
