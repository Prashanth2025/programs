let n = 4;
for (let i = 1; i <= n; i++) {
  let str = "";
  for (let j = 1; j <= n - i; j++) {
    str += "_";
  }
  for (let k = 1; k <= 2 * i - 1; k++) {
    if (i === n) {
      str += "x";
    } else if (k === 1 || k === 2 * i - 1) {
      str += "x";
    } else {
      str += "_";
    }
  }
  console.log(str);
}
