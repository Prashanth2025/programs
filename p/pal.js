function isPalindrome(num) {
  let original = num;
  let reversed = 0;
  while (num > 0) {
    lastdigit = num % 10;
    reversed = reversed * 10 + lastdigit;
    num = Math.trunc(num / 10);
  }
  if (original === reversed) {
    console.log("yes");
  } else {
    console.log("no");
  }
}
isPalindrome(121);
