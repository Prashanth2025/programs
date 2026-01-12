function isPrime() {
  for (let num = 1; num <= 20; num++) {
    while (num > 0) {
      if (num % 2 === 0) {
        console.log(num);
      }
    }
  }
}
isPrime();
