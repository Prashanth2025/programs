function stringDissection(str) {
  let count = {};

  if (str.length === 0) {
    console.log("Empty String");
    return;
  }

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    count[char] = (count[char] || 0) + 1;
  }

  let maxChar = "";
  let maxCount = 0;

  for (let char in count) {
    if (count[char] > maxCount) {
      maxCount = count[char];
      maxChar = char;
    }
  }

  console.log("Character counts:", count);
  console.log(`Max occurring character: '${maxChar}' (${maxCount} times)`);
}

stringDissection("omagasiyaoyilaya");
