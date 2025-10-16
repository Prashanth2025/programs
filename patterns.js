// let patterns = function (n) {
//   for (let i = 1; i <= n; i++) {
//     let str = "";
//     for (let j = 1; j <= n; j++) {
//       str += j + " ";
//     }
//     console.log(str);
//   }
// };
// patterns(5);

// let outline = function (n) {
//   for (let i = 1; i <= n; i++) {
//     let str = "";
//     for (let j = 1; j <= n; j++) {
//       if (i === 1 || i === n || j === 1 || j === n) {
//         str += "* ";
//       } else {
//         str += "  ";
//       }
//     }
//     console.log(str);
//   }
// };
// outline(5);

// let hallow =function(n){
// for (let i=1;i<=n;i++){
// let str=""
// for (let j=1;j<=n;j++){
// if(i===1||i===n||j===1||j===n)
// str+=j+" ";
// }
//     else{
//     str+=" ";
//     }
// }
// console.log(str)
// }
// hallow(5)

// let hallow = function (n) {
//   for (let i = 1; i <= n; i++) {
//     let str = "";
//     for (let j = 1; j <= i; j++) {
//       if (i === 1 || j === 1) str += j + " ";
//       else str = str + "_ ";
//     }
//     console.log(str);
//   }
// };
// hallow(5);

// let hallow = function (n) {
//   for (let i = 1; i <= n; i++) {
//     let str = "";
//     for (let j = 1; j <= n; j++) {
//       if (i === 1) {
//         str += 1 + " ";
//       } else if (i === 5) {
//         str +=  + " ";
//       }
//       if (j === 1) {
//         str += i + " ";
//       } else {
//         str += " ";
//       }
//       if (j === 5) {
//         str += i + " ";
//       } else {
//         str += " ";
//       }
//     }
//     console.log(str);
//   }
// };
// hallow(5);

// let hollow = function (n) {
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

// hollow(5);

// let patterns = function(n) {
//   for (let i = 1; i <= n; i++) {
//     let str = "";
//     for (let j = 1; j <= n; j++) {
//       if (i % 2 === 0) {
//         str += (n - j + 1) + " "; // reverse for even rows
//       } else {
//         str += j + " ";           // normal for odd rows
//       }
//     }
//     console.log(str);
//   }
// };

// patterns(5);

// let n = 5;

// for (let i = 1; i <= n; i++) {
//   let str = "";
//   for (let j = 1; j <= n; j++) {
//     if (j <= n - i) {
//       str += "  ";
//     } else {
//       str += i + " ";
//     }
//   }
//   console.log(str);
// }

// let n = 5;
// let str = "";
// let sp = n - 1;

// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= sp; j++) {
//     str += "_ ";
//   }
//   for (let j = 1; j <= i; j++) {
//     str += "X ";
//   }
//   str += "\n";
//   sp--;
// }
// console.log(str);

// let n = 5;
// let str = "";

// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n + i; j++) {
//     str += "";
//   }

//   for (let j = i; j >= 1; j--) {
//     str += j + " ";
//   }
//   str += "\n";
// }
// console.log(str);

let n = 5;

for (let i = 1; i <= n; i++) {
  let str = "";
  for (let j = 1; j >= i; j++) {
    if (j <= n - i) {
      str += "  ";
    } else {
      str += j + " ";
    }
  }
  console.log(str);
}
