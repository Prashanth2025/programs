// Array.prototype.slice = function (start = 0, end = this.length) {

//   const length = end - start;
//   return Array.from({ length }, ( __,i) => {
//     const value = this[start + i];

//     return value;
//   });
// };

// const arr = [10, 20, 30, 40, 50];
// console.log("Result:", arr.slice(1, 4));

Number.prototype.length = function () {
  if (this === 0) return 1;

  const num = Math.abs(this);
  return Math.floor(Math.log10(num)) + 1;
};
const num = 1234567;
console.log("Result:", num.length());
