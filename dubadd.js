
function doubler(ary) {
  return ary.map(e => e*2);
};

console.log(`dbl=${doubler([1,2,3,4,5])}`);

function adder(ary) {
  return ary.reduce((acc,v) => acc+=v,0);
};

console.log(`add=${adder([1,2,3,4,5])}`);
