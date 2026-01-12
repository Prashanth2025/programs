function outer() {
  let count = 0;
  function inner() {
    count++;
    console.log(count);
  }
  inner();
}
outer();
