function depositProfit(deposit, rate, threshold) {
  let year = 0;
  let curr = deposit;
  while (curr < threshold) {
    year += 1;
    curr *= 1 + (rate / 100);
  }
  return year;
}

console.log(depositProfit(100, 20, 170));

