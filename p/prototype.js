function person() {
  this.name = "prashanth";
}
person.prototype.SayHi = function () {
  console.log("hi" + this.name);
};
let p1 = new person();
p1.SayHi();
