function characters(str) {
  let map = {
    P: "S",
    R: "A",
    A: "R",
    S: "P",
  };
  if (!map) {
    console.log("enter correct character");
  } else {
    str
      .split("")
      .map((ch) => map[ch] || ch)
      .join("");
  }
}

console.log(characters("T"));
