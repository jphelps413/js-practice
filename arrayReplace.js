function arrayReplace(inputArray, replace, withThis) {
  return inputArray.map(elem => elem === replace ? withThis : elem);
}

console.log( arrayReplace([1,2,1],1,3) );
