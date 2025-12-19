function fn(method) {
  console.log(` hi ${this.name} ${method} method is executing`);
}
let dev = { name: "prashanth" };
fn.call(dev, "call");
fn.apply(dev, ["apply"]);
let final = fn.bind(dev, "bind");
final();

