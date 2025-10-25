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

  let keys = Object.keys(count);
  let maxChar = keys[0];
  let maxCount = count[maxChar];
  let minChar = keys[0];
  let minCount = count[minChar];

  for (let i = 1; i < keys.length; i++) {
    let char = keys[i];
    if (count[char] > maxCount) {
      maxCount = count[char];
      maxChar = char;
    }
    if (count[char] < minCount) {
      minCount = count[char];
      minChar = char;
    }
  }

  console.log(count);
  // console.log(`Max occurring character: '${maxChar}' (${maxCount} times)`);
  // console.log(`Min occurring character: '${minChar}' (${minCount} times)`);
}

stringDissection("example");
