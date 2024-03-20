const fs = require("fs");

function lireFichierEtDiviser(filename) {
  const data = fs.readFileSync(filename, "utf8");
  let dataSplit = data.split("\n");
  console.log(dataSplit);
  for (lines of dataSplit) {
    let lineColor = lines
      .split(":")[1]
      .split(";")
      .map((set) => set.split(","));
    console.log(lineColor);
  }
}

function main() {
  const data = lireFichierEtDiviser("data1.txt");
  //   console.log(data);
}

main();
