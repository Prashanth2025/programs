//using loop
// let arr = [10, 7, 8, 15, 5, 4, 20, 19];
// let max = arr[0];

const { object } = require("zod");

// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] > max) max = arr[i];
// }
// console.log(`largest of [${arr}] is :${max}`);

// using reduce()

// let arr = [5, 3, 7, 4, 1];
// let max = arr.reduce((acc, num) => {
//   return num < acc ? num : acc;
// }, arr[0]);
// console.log(`largest of [${arr}] is :${max}`);

//check if obj is present or not

function isPresent(obj) {
  if (obj && Object.keys(obj)) {
    console.log(true);
  } else {
    console.log(false);
  }
}
isPresent({});
