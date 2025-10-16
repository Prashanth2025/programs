// for (let i = 1; i <= 3; i++) {
//   console.log("msg");
// }

// for (i = 26; i <= 28; ) {
//   console.log("hii");
//   i = i++;
// }

// let str = "";
// {
//   for (let i = 1; i < 5; i++) {
//     if (i <= 4) {
//       str = str + i;
//     } else {
//       str = str + i;
//     }
//     console.log(str);
//   }
// }

// let n = 3;
// for (let i = 1; i <= 10; i++) {
//   console.log(`${n} x ${i} = ${n * i}`);
// }

// var sum = 0;
// for (let counter = 10; counter <= 20; counter++) {
//   sum = sum + counter;
// }
// console.log(sum);

// for (let i = 1; i <= 10; i++) {
//   console.log("4 * " + i + " = " + 4 * i);
// }

// for (let i = 1; i <= 20; i++) {
//   if (i == 13) {
//     break;
//     continue;
//   } else {
//     console.log(i);
//   }
// }

// for (var i = 1; i <= 5; i++) {
//   console.log("helloworld");
// }

// print number from 1 to 10

// for (let i = 1; i < 11; i++) {
//   console.log(i);
// }

// print even number from 1 to 20
// for (let i = 1; i <= 20; i++) {
//   console.log(i);
// }

// for (let i = 1; i <= 20; i += 2) {
//   console.log(i);
// }

// let sum = 0;
// for (let i = 1; i <= 10; i++) {
//   sum += i;
// }
// console.log(`sum:${sum}`);

// factorial of num

// let num = 5;
// let fact = 1;

// for (let i = 1; i <= num; i++) {
//   fact *= i;
// }
// console.log(`factorial :${fact}`);

// prime number
const prompt = require("prompt-sync")();
let num = Number(prompt("Enter the number"));
let prime = true;

for (let i = 2; i <= Math.sqrt(num); i++) {
  if (num % i === 0) {
    prime = false;
    break;
  }
}
