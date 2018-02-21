function makeit(statues) {
  if (!statues || statues.length === 0) return 0;

  const ordered = Object.keys(
    statues.reduce((acc, val) => {
      acc[val] = 1;
      return acc;
    }, {}),
  );
  const [first, last] = [ordered[0], ordered[ordered.length - 1]];
  return (last - first) - (ordered.length - 1);
}

console.log(`s=[6,2,3,8] => ${makeit([6, 2, 3, 8])}`);
console.log(`s=[] => ${makeit([])}`);
console.log(`s=[6,2,2,3,8] => ${makeit([6, 2, 3, 8])}`);
