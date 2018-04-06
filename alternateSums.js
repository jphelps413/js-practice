/*
 * Write a function that accepts an array of integers and returns a two
 * element array which represents the sum of the values at the even indexes
 * in element 0, and the sum of odds in element 1.
 *
 *    [0, 1, 2, 3, 4, 5] => [0+2+4, 1+3+5] => [6, 9]
 *    [[50, 60, 60, 45, 70] => [180, 105]
 */
function alternatingSums(a) {
  return a.reduce((acc, val, idx) => {
    acc[idx % 2] += val;
    return acc;
  }, [0, 0]);
}

/* TESTS */
var assert = require('assert');

if (!global.is_checking) {
  assert.deepEqual(alternatingSums([0,1,2,3,4,5]), [6,9], "1st Example");
  assert.deepEqual(alternatingSums([50,60,60,45,70]), [180,105], "2nd Example");
  console.log("TESTS PASSED");
}
