const fs = require("fs");

function lireFichierEtDiviser(filename) {
  const data = fs.readFileSync(filename, "utf8");
  let dataSplit = data.split("\n");
  console.log(dataSplit[0]);
  let dataSplitx;
  for (let i = 0; i < dataSplit.length; i++) {
    dataSplitx = dataSplit[i].split("x");
  }
  console.log(dataSplitx);
}
lireFichierEtDiviser("data1.txt");
