
let phase1 = [];
let phase2 = [];
let phase3 = [];


function pushNumber(num) {
  if (phase1.length <= phase2.length && phase1.length <= phase3.length) {
    phase1.push(num);
  } else if (phase2.length <= phase3.length) {
    phase2.push(num);
  } else {
    phase3.push(num);
  }
}

// Step 3: Merge all phases and sort
function getSortedResult() {
  let allNumbers = phase1.concat(phase2).concat(phase3);
  return allNumbers.sort((a, b) => a - b);
}


pushNumber(7777777);
pushNumber(77777);
pushNumber(7777);
pushNumber(777);
pushNumber(77);
pushNumber(7);

console.log("Sorted result:", getSortedResult());