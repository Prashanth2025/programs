function outer() {
  let count = 0;

  function inner() {
    count++;
    console.log(count);
  }
  return inner;
}
let multi = outer();
multi();
multi();
