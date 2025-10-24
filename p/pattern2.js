let n = 5;

for (let i = 1; i <= n; i++) {
  let str = "";
  for (let j = 1; j <= n; j++) {
    if (i === 1) str += j + " ";
    else if (i === n) str += n - j + 1 + " ";
    else if (j === 1) str += i + " ";
    else if (j === n) str += n - i + 1 + " ";
    else str += "  ";
  }
  console.log(str);
}
