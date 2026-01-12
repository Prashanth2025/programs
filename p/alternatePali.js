function alternatePali(num) {
  let og = num;
  let reversed = 0;
  while (num > 0) {
    let lastdigit = num % 10;
    reversed = reversed * 10 + lastdigit;
    num = Math.trunc(num / 10);
  }
  return og === reversed;
}
let count = 0;
for (let i = 20; i >= 1; i--) {
  if (alternatePali(i)) {
    if (count % 2 === 0) {
      console.log(i);
    }
    count++;
  }
}
alternatePali();
