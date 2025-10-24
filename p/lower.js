function hasLowerCase(str) {
  for (let i = 0; i < str.length; i++) {
    let ch = str[i];
    if (ch >= "a" && ch <= "z") {
      return true;
    }
  }
  return false;
}

console.log(hasLowerCase("Hello"));

