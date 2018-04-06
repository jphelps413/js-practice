/*
 * The Hamming distance between two binary integers is the number of bit
 * positions that differ between the two. For example:
 *
 *   33 = 1 0 0 0 0 1
 *   21 = 0 1 0 1 0 1
 *  Ham = 1+1+0+1+0+0 === 3
 *
 * Given two positive numbers (N, M) in decimal form, calculate the Hamming
 * distance between these two numbers in binary form.
 */

"use strict";

function hammingDistance(n, m){
  return n===m ? 0 : (n^m).toString(2).match(/1/g).length
}

/* TESTS */
var assert = require('assert');

if (!global.is_checking) {
  assert.equal(hammingDistance(33, 21), 3, "First example");
  assert.equal(hammingDistance(1, 2), 2, "Second example");
  assert.equal(hammingDistance(133, 2321), 5, "Third example");
  console.log("TESTS PASSED");
}
