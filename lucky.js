
function isLucky(n) {
  const digits = (`${n}`).split('');
  const midpt = digits.length / 2;
  return digits.slice(0, midpt).reduce((acc, val) => acc + +val, 0) ===
         digits.slice(midpt).reduce((acc, val) => acc + +val, 0);
}

console.log(`lucky   1230 ? ${isLucky(1230)}`);
console.log(`lucky 239017 ? ${isLucky(239017)}`);
