function alternatingSums(a) {
  return a.reduce((acc, val, idx) => {
    acc[idx % 2] += val;
    return acc;
  }, [0, 0]);
}

console.log(`[180, 105] => ${alternatingSums([50, 60, 60, 45, 70])}`);
