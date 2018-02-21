function alphabeticShift(inputString) {
  const base = 'a'.charCodeAt();
  return [...inputString].reduce((acc, c) => {
    acc.push(String.fromCharCode(((c.charCodeAt() - base + 1) % 26) + base));
    return acc;
  }, []).join('');
}

const tests = [
  { val: 'abcde', ans: 'bcdef' },
  { val: 'crazy', ans: 'dsbaz' },
  { val: 'xyzab', ans: 'yzabc' },
];

for (let t = 0; t < tests.length; t += 1) {
  const passFail = ((answer, result) => (answer === result ? 'PASS' : 'FAIL'));

  const test = tests[t];
  const rslt = alphabeticShift(test.val);

  console.log(`${t}: ${passFail(test.ans, rslt)} ${test.val} => ${rslt}`);
}
