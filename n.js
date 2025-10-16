Array.prototype.pop = function () {
  if (this.length === 0) return undefined;
  let last = this[this.length - 1];
  this.length = this.length - 1;
  return last;
};
let fruits = [];
let removed = fruits.pop();
console.log(removed);
 c