function ev() {
  this.name = "prashanth";
  this.greet = function () {
    console.log("greetings " + this.name);
  };
}
let e = new ev();
e.greet();
