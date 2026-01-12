let count = 0;
for (let num = 2; num <= 50; num++) {
  let prime = true;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      prime = false;
      break;
    }
  }
  if (prime) {
    count++;
    if (count % 2 === 0) {
      console.log(num);
    }
  }
}
