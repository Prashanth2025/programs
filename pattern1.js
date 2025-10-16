// let hallow = function (n) {
//   for (let i = 1; i <= n; i++) {
//     let str = "";
//     for (let j = 1; j <= n; j++) {
//       if (i === 1 || i === n || j === 1 || j === n) {
//         str += i + " ";
//       } else {
//         str += "  ";
//       }
//     }
//     console.log(str);
//   }
// };
// hallow(5);

let patterns = function (n) {
  for (let i = 1; i <= n; i++) {
    let str = "";
    for (let j = 1; j <= n; j++) {
      if ((i + j) % 2 === 0) {
        if (i % 2 === 0) {
          str += n - j + 1 + " ";
        } else {
          str += j + " ";
        }
      } else {
        // star
        str += "* ";
      }
    }
    console.log(str);
  }
};
patterns(5);
