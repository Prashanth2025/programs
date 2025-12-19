function outer() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}
let counter = outer();
console.log(counter());
console.log(counter());
