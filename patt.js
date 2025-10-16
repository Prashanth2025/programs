// // ...existing code...
// function nz(n) {
//   n = Math.max(1, Math.floor(Number(n)) || 5);
//   let out = "";
//   for (let i = 1; i <= n; i++) {
//     let line = " _ ".repeat(n - i);
//     for (let k = 1; k <= i; k++) line += k + "  ";
//     for (let k = i - 1; k >= 1; k--) line += k + "  ";
//     out += line.trimEnd() + "\n";
//   }
//   for (let i = n - 1; i >= 1; i--) {
//     let line = " _ ".repeat(n - i);
//     for (let k = 1; k <= i; k++) line += k + "  ";
//     for (let k = i - 1; k >= 1; k--) line += k + "  ";
//     out += line.trimEnd() + "\n";
//   }
//   console.log(out);
// }
// nz(5);
// // ...existing code...
let n = 7;

// Upper part
for (let i = 1; i <= n; i++) {
  let str = "";

  // Left spaces
  for (let j = 1; j <= n - i; j++) {
    str += " _ ";
  }

  // Stars with spaces between
  for (let j = 1; j <= 2 * i - 1; j++) {
    if (j === 1 || j === 2 * i - 1) {str += " * ";}
    else {str += "_ ";}
  }

  console.log(str);
}

// Lower part
for (let i = n - 1; i >= 1; i--) {
  let str = "";

  // Left spaces
  for (let j = 1; j <= n - i; j++) {
    str += "_ ";
  }

  // Stars with spaces between
  for (let j = 1; j <= 2 * i - 1; j++) {
    if (j === 1 || j === 2 * i - 1) {str += " * ";}
    else {str += "_ ";}
  }

  console.log(str);
}
