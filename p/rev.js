function rev(num) {
  let reversed = 0;
  while (num > 0) {
    lastdigit = num % 10;
    reversed = reversed * 10 + lastdigit;
    num = Math.trunc(num / 10);
  }
  return reversed;
}
console.log(rev(12325));
