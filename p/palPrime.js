function palPrime(num) {
  for (num = 1; num <= 20; num++) {
    let og = num;
    let temp = num;

    let rev = 0;
    while (temp > 0) {
      let lastdigit = temp % 10;
      rev = rev * 10 + lastdigit;
      temp = Math.trunc(temp / 10);
    }
    let prime = true;
    if (og <= 1) prime = false;

    for (let i = 2; i <= Math.trunc(og / 2); i++) {
      if (og % i === 0) {
        prime = false;
        break;
      }
    }
    if (rev === og && prime) {
      console.log(og);
    }
  }
}
palPrime();
