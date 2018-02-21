function substrstr(haystack, needle) {
  if (haystack && needle) {
    for (let i = 0; i < haystack.length; i += 1) {
      if (haystack.substr(i, needle.length) === needle) {
        return i;
      }
    }
  }
}

function strstr(haystack, needle) {
  if (haystack && needle) {
    for (let h = 0; h < haystack.length; h += 1) {
      let nope = false;
      for (let n = 0; n < needle.length && !nope; n += 1) {
        nope = (haystack[h+n] !== needle[n])
      }
      if (!nope) return h;
    }
  }
}

const tests = [
  { h: 'nothing', n: 'not', l: 0 },
  { h: 'rummage', n: 'age', l: 4 },
  { h: 'failure', n: 'nope',l: undefined },
  { h: '',        n: 'fail',l: undefined },
  { h: 'failure', n: '',    l: undefined },

  { h: 'undefined', n: undefined, l: undefined },
  { h: 'abcdefghijklmnopqrstuvwxyz', n: 'j', l: 9 },
];

for (let t = 0; t < tests.length; t += 1) {
  const ans = strstr(tests[t].h, tests[t].n);
  console.log(`${t}: ${tests[t].l === ans ? 'PASS':'FAIL'} => "${tests[t].n}" in "${tests[t].h}" @ ${ans}`);
}

