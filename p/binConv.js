function binConv(num) {
  let binary = "";

  while (num > 0) {
    binary = (num % 2) + binary;
    num = Math.trunc(num / 2);
  }
  console.log(binary);
}
binConv(0);
