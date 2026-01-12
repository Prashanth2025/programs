function isPrime(num) {
  for (num = 2; num <= 20; num++) {
    let prime = true;
    let twin = num + 2;
    for (let i = 2; i <= num; i++) {
      if (num % i === 0) {
        prime = false;
        break;
      }
    }
    if (twin === prime) {
      console.log(twin);
    }
  }
}
isPrime();
