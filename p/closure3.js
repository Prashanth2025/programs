function outer() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}
let fn = outer();
console.log(fn());
