let vowels = ["p", "r", "a", "s", "h", "a", "n", "t", "h"];
let res = vowels.reduce((acc, char) => {
  if (
    char === "a" ||
    char === "e" ||
    char === "i" ||
    char === "o" ||
    char === "u"
  ) {
    acc[char] = (acc[char] || 0) + 1;
  } else {
    acc[char] = (acc[char] || 0) + 1;
  }
  return acc;
}, {});
console.log(acc);
