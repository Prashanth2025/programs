const a = {
  name: "prashanth",
  age: 20,
  dob: 2005,
};
a.age = 22;

const b = a;
console.log(a, b);

b.age = 20;

console.log(a, b);
