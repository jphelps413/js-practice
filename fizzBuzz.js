/*
 * Write a function that will receive a positive integer and return:
 *   "Fizz Buzz" if the number is divisible by 3 and by 5;
 *   "Fizz" if the number is divisible by 3;
 *   "Buzz" if the number is divisible by 5;
 *   The number as a string for other cases.
*/

"use strict";

function fizzBuzz(data) {
  return `${data%3===0?'Fizz':''} ${data%5===0?'Buzz':''}`.trim() || `${data}`
}

/* TESTS */
var assert = require('assert');

if (!global.is_checking) {
  assert.equal(fizzBuzz(15), "Fizz Buzz", "15 is divisible by 3 and 5");
  assert.equal(fizzBuzz(6), "Fizz", "6 is divisible by 3");
  assert.equal(fizzBuzz(5), "Buzz", "5 is divisible by 5");
  assert.equal(fizzBuzz(7), "7", "7 is not divisible by 3 or 5");
  console.log("TESTS PASSED");
}
