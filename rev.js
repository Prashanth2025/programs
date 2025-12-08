let str = "i am front-end developer";
let words = str.split(" ");
let result = "";

for (let i = 0; i < words.length; i++) {
  let word = words[i];
  let rev = "";

  for (let j = word.length - 1; j >= 0; j--) {
    if (word[j]) {
      rev += word[j];
    }
  }

  result += rev + " ";
}

console.log(result.trim());
