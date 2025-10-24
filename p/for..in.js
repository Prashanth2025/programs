// let person = ["prashanth", 20, "b'lore"];

// for (let perso of person) {
//   console.log(perso);
// }

// function namte(a) {
//   if( typeof a== "string"){
//     throw new TypeError("allah hu akbar")
//   }
//   console.log("vanten da" ,a);

// }
// //namte("k")
// namte("2");

function rev(ulta) {
  if (typeof ulta !== "string") {
    console.error("Input is not a string");
    return;
  }

  let reversed = "";
  for (let i = ulta.length - 1; i >= 0; i--) {
    reversed += ulta[i];
  }

  console.log(reversed);
}
rev("prashanth");
