function palindromeRearranging(inputString) {
  return [...inputString]
    .sort()
    .join('')
    .replace(/(.)\1{1,2}?/g, '')
    .length <= 1;
}

console.log(`racecar true? ${palindromeRearranging('acerrac')}`);
console.log(`aacb   false? ${palindromeRearranging('aacb')}`);
