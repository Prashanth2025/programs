function outer() {
  let message = "helo from outer";
  function inner() {
    console.log(message);
  }
  return inner;
}
let fn = outer();
fn();
