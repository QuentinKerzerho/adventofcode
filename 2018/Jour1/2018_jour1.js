const fs = require("fs");

fs.writeFileSync("test.txt", "Hello World", "utf8");

// function lireFichierEtDiviser(filename) {
//   const data = fs.readFileSync(filename, "utf8");
//   let dataSplit = data.split("\n");
//   return dataSplit;
// }

console.log("test")