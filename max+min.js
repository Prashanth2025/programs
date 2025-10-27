let sentence = "The sun shines bright and the sun feels warm on the skin";

let words = sentence.split(" ");

let counts = words.reduce((acc, word) => {
  acc[word] = (acc[word] || 0) + 1;
  return acc;
}, {});

let maxWord = Object.keys(counts).reduce((a, b) =>
  counts[a] > counts[b] ? a : b
);
let minWord = Object.keys(counts).reduce((a, b) =>
  counts[a] < counts[b] ? a : b
);
console.log(`maxWord = ${maxWord} , minword = ${minWord}`);
