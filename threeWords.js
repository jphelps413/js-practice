/*
 * Given a string with words and numbers separated by whitespaces (one
 * space). A word will only contain letters, and no numbers.  Check if the
 * string contains three words in succession.
 *
 * Ex: TRUE : "one two three"
 *     FALSE: "one 2 three four"
 *     FALSE: "on3 tw0 thr33 f0ur"
 *     TRUE : "one 2 three four five 6"
 */
"use strict";

function threeWords(data) {
    return data.match(/(?:[A-Za-z]+\s+){2}[A-Za-z]+/) !== null
}

/* TESTS */
var assert = require('assert');

if (!global.is_checking) {
    assert.equal(threeWords("one two three"), true, "1st example");
    assert.equal(threeWords("one 2 three four"), false, "2nd example");
    assert.equal(threeWords("on3 tw0 thr33 f0ur"), false, "3rd example");
    assert.equal(threeWords("one 2 three four five 6"), true, "4th example");
    assert.equal(threeWords("Hi"), false, "Letters");
    console.log("TESTS PASSED");
}
