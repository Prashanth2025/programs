console.log(hoist());
function hoist() {
  let a = 1;
  const b = 2;
  return a + b;
}
