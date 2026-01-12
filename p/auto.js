function auto(n) {
  let sq = n * n;
  while (n > 0) {
    if (n % 10 !== sq % 10) {
      console.log("not");
      return;
    }
    n = Math.trunc(n / 10);
    sq = Math.trunc(sq / 10);
  }
  console.log("yes");
}
auto(5)