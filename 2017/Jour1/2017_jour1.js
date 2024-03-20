const fs = require("fs");

function lireFichierEtDiviser(filename) {
  const data = fs.readFileSync(filename, "utf8");
  let dataSplit = data.split("\n");
  return dataSplit;
}

function calculdistance(dataSplit) {
  for (let i = 0; i < dataSplit.length; i++) {
    console.log(dataSplit[i] + "test");
  }
}

function main() {
  const filename = "data.txt";
  const lines = lireFichierEtDiviser(filename);
  calculdistance(lines);
}

main();
// console.log(addition(spliceEnd(parse(split(dataSplit)))));
