
function maxPrd(ary) {
  let ans;
  for( let i = 0; i < ary.length-1; i++ ){
    const prd = ary[i]*ary[i+1];
    ans = !ans ? prd : Math.max(ans,prd);
  }
  return ans;
}
