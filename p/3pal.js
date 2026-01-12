function rangePal(num) {
  let original = num;
  let reversed = 0;
  while (num > 0) {
    lastdigit = num % 10;
    reversed = reversed * 10 + lastdigit;
    num = Math.trunc(num / 10);
  }
  return original === reversed;
}

let count = 0;
for (let i = 20; i <= 102; i++) {
  if (rangePal(i)) {
    console.log(i);
    count++;
  }
  if (count === 3) break;
}

rangePal();
