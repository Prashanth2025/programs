function outer() {
  let count = 0;
  return function inner() {
    count++;
    return count;
  };
}
let fn = outer();
console.log(fn());
console.log(fn());
