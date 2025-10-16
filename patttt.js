let n = 4;

// Upper half
for (let i = 1; i<= n; i++) {
  let row = "";

  // Left wing
  for (let j = 1; j <= i; j++) {
    row += i+"";
  }

  // Spaces between wings
  for (let j = 1; j <= 2 * (n - i); j++) {
    row += " ";
  }

  // Right wing
  for (let j = 1; j <= i; j++) {
    row += i+"";
  }

  console.log(row);
}

// Lower half
for (let i = n; i >= 1; i--) {
  let row = "";

  // Left wing
  for (let j = 1; j <= i; j++) {
    row += i+"";
  }

  // Spaces between wings
  for (let j = 1; j <= 2 * (n - i); j++) {
    row += " ";
  }

  // Right wing
  for (let j = 1; j <= i; j++) {
    row += i+"";
  }

  console.log(row);
}
