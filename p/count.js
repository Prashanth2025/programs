let arr = ["p", "r", "a", "s", "h", "a", "n", "t", "h"];
let red = arr.reduce((acc, char) => {
  acc[char] = (acc[char] || 0) + 1;
  return acc;
}, {});
console.log(red);
