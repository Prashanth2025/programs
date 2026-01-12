function rightAng(n) {
  for (let i = 1; i <= n; i++) {
    let str = "";
    for (let j = 1; j <= i; j++) {
      str += i + " ";
    }
    console.log(str);
  }
}

rightAng(5);

function rightAng2(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += i + " ";
    }
    row += "/n";
    console.log(row);
  }
}
rightAng2(5);

function rightAng3(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += i + " ";
    }
    row += "/n";
    console.log(row);
  }
}
rightAng3(5);
