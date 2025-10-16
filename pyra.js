let n = 4;

// Upper part
for (let i = 1; i <= n; i++) {
  let str = "";
  for (let j = 1; j <= i; j++) {
    str += "* ";
  }
  console.log(str);
}

// Lower part
for (let i = n - 1; i >= 1; i--) {
  let str = "";
  for (let j = 1; j <= i; j++) {
    str += "* ";
  }
  console.log(str);
}
