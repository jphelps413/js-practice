
function allLongestStrings(inputArray) {
  let longest = [''];

  inputArray.map((str) => {
    if (str.length >= longest[0].length) {
      if (str.length > longest[0].length) longest = [];
      longest.push(str);
    }
  });

  return longest;
}

const ary1 = ['aba', 'aa', 'ad', 'vcd', 'aba'];

console.log(allLongestStrings(ary1));
