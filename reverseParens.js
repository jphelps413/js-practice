function reverseParentheses(s) {
  function revSubstr(str, begin, end) {
    const len = (end - begin) + 1;
    const sub = str.substr(begin, len);
    return str.replace(sub, [...sub].reverse().join(''));
  }

  const lparens = [];
  let work = s;
  for (let i = 0; i < s.length; i += 1) {
    switch (work[i]) {
      case '(':
        lparens.push(i);
        break;
      case ')':
        work = revSubstr(work, lparens.pop(), i);
        break;
      default:
        break;
    }
  }
  return work.replace(/[()]/g, '');
}

console.log(`  cosfighted? ${reverseParentheses('co(de(fight)s)')}`);
console.log(`abcabcabcabc? ${reverseParentheses('abc(cba)ab(bac)c')}`);
