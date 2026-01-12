let arr = [1, 2, 3, 4];

let updated = arr.slice(0, 3);
console.log(updated);
console.log(arr);


let unchanged = arr.splice(3, 2, 5);
console.log(unchanged);
console.log(arr);
