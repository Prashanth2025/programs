if (!Array.prototype.filte) {
  Array.prototype.filte = function (callback) {
    const res = [];
    let count = 0;
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        res[count] = this[i];
        count++;
      }
    }
    return res + " punda";
  };
}
const num = [ 33, 47, 9, 21, 19, 3];
const evn = num.filte((num) => num % 2 === 0);
console.log(evn);

if (!Array.prototype.findl) {
  Array.prototype.findl = function (callback) {
    const res = [];
  
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        return this[i];
        
      }
    }
    return " c";
  };
}

const finder = num.findl((num) => num % 2 === 0);
console.log(finder);