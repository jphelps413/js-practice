
function ccc(s1, s2) {
  function hashCount(str) {
    const hash = {};
    str.split('').forEach(c => hash[c] = hash[c] + 1 || 1);
    return hash;
  }

  function totalCommon(str1, str2) {
    const hash1 = hashCount(str1);
    const hash2 = hashCount(str2);

    return Object.keys(hash1).reduce((acc, val) => {
      if (hash2[val]) {
        acc += Math.min(hash1[val], hash2[val]);
      }
      return acc;
    }, 0);
  }

  return totalCommon(s1, s2);
}

console.log(`Should be 3 => ${ccc('aabcc', 'adcaa')}`);
