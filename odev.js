// function prime(n) {
//   for (let i = 2; i < n; i++) {
//     if (n % i == 0) {
//       return false;
//     } else {
//       return true;
//     }
//   }
// }
// console.log(prime(8));

// perfect number

// Define the range function
// let range = (num1, num2, action) => {
//   for (let n = num1; n <= num2; n++) {
//     action(n);
//   }
// };

// // Use it to print perfect numbers
// range(1, 1000, (n) => {
//   let sum = 0;
//   for (let i = 1; i < n; i++) {
//     if (n % i === 0) sum += i;
//   }
//   if (sum === n) console.log(n);
// });

// Generic range function
let range = (s, e, operation) => {
  for (let n = s; n <= e; n++) {
    operation(n);
  }
};

// Print perfect numbers
console.log("Perfect Numbers:");
range(1, 1000, (n) => {
  let sum = 0;
  for (let i = 1; i < n; i++) {
    if (n % i === 0) sum += i;
  }
  if (sum === n) console.log(n);
});

// Print prime numbers
console.log("Prime Numbers:");
range(1, 1000, (n) => {
  if (n <= 1) return;
  let isPrime = true;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) console.log(n);
});
