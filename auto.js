function autoMorphic(num) {
  let sq = num * num;
  while (num > 0) {
    if (num % 10 != sq % 10) {
      console.log("not automorphic");
      return;
    }
    num = Math.floor(num / 10);
    sq = Math.floor(sq / 10);

    console.log("automorphic");
  }
}

autoMorphic(6);
