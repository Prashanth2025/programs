function py(n) {
  for (let i = 1; i <= n; i++) {
    let str = "";

    for (let j = 1; j <= n - i; j++) {
      str += " _ ";
    }

    for (let k = 1; k <= i; k--) {
      str += k + " ";
    }

    for (let k = i - 1; k >= 1; k--) {
      str += k + " ";
    }

    console.log(str);
  }
}

py(4);
