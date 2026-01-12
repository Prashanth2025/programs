function pattern() {
  let n = 4;
  let str = "";

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      str += j + "\t";
    }
    str += "\n";
  }
  console.log(str);
}
pattern();
