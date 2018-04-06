/*
 * Given a positive integer in the form of 123321456654, programmatically
 * convert the value into a more human readable format by inserting commas.
 * For example: 123 => 123
 *              12345 => 12,345
 *              123321456654 => 123,321,456,654.
 */

"use strict";

function toHuman(n) {
  return [...[...n+""] // convert int to string and spread the digits
    .reverse()
    .join('')
    .match(/[\d]{1,3}/g)
    .join(',')].reverse().join('')
}

/* TESTS */
var assert = require('assert');

if (!global.is_checking) {
  [123, 1234, 1234567, 123321456654].map(n => {
    assert.equal(toHuman(n), (n).toLocaleString('en'), n)
  });
  console.log("TESTS PASSED");
}
