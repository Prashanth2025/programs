function digitalRoot(num) {
  while (num > 9) {
    num = num
      .toString()
      .split("")
      .map(Number)
      .reduce((a, b) => a + b, 0);
  }
  return num;
}
console.log(digitalRoot(16));
