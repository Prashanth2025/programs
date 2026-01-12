function hollowSquare(n) {
  let result = "";
  for (let i = 1; i <= n; i++) {
    let str = "";
    for (let j = 1; j <= n; j++) {
      let val;
      if (i === 1) {
        val = j;
      } else if (i === n) {
        val = n - j + 1;
      } else if (j === 1) {
        val = i;
      } else if (j === n) {
        val = n - i + 1;
      } else {
        val = "";
      }
      str += String(val).padEnd(2 + " ") + " ";
    }
    result += str + "\n";
  }
  return result;
}
console.log(hollowSquare(25));
