/* // let colors = ["yellow", "green", "pink"];
// let [a, b, c] = colors;

// console.log(b);


let arr =[1,2,3]
let sum=0
for(let i=0;i<arr.length;i++){
    sum=sum+arr[i]
}
console.log(sum) */

const input = [
  { C: "India", S: "KA" },
  { C: "USA", S: "CL" },
  { C: "Pak", S: "LA" },
  { C: "India", S: "OD" },
  { C: "USA", S: "WA" },
  { C: "Pak", S: "KARACHI" },
  { C: "India", S: "TN" },
];

const output = Object.values(
  input.reduce((acc, item) => {
    if (!acc[item.C]) {
      acc[item.C] = { C: item.C, S: [] };
    }
    acc[item.C].S.push(item.S);
    return acc;
  }, {})
);

console.log(output);
