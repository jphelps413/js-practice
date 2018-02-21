function variableName(name) {
  return /^[a-z_]\w*$/i.test(name);
}

console.log(`var_1__Int = ${variableName('var_1__Int')}`)
console.log(`2w2 = ${variableName('2w2')}`)
console.log(`qq-q = ${variableName('qq-q')}`)
console.log(` variable = ${variableName(' variable')}`)
