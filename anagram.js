function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  let frequency = {};

  for (let i = 0; i < str1.length; i++) {
    let char = str1[i];
    frequency[char] = frequency[char] ? frequency[char] + 1 : 1;
  } // for string 1

  for (let i = 0; i < str2.length; i++) {
    let char = str2[i];
    if (!frequency[char]) return false;
    frequency[char]--;
  } // for string2

  return true;
}

console.log(isAnagram("listen", "silent"));
console.log(isAnagram("hello", "world"));
