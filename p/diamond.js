let n = 7; // half of diamond height

// Top half
for (let i = 1; i <= n; i++) {
  let str = " ".repeat(n - i) + "*".repeat(2 * i - 1);
  console.log(str);
}

// Bottom half
for (let i = n - 1; i >= 1; i--) {
  let str = " ".repeat(n - i) + "*".repeat(2 * i - 1);
  console.log(str);
}
