const fs = require("fs");

function lireFichierEtDiviser(filename) {
  const data = fs.readFileSync(filename, "utf8");
  let dataSplit = data.split("\n");
  let transformedData;
  let tabfinal = [];
  for (let i = 0; i < dataSplit.length; i++) {
    let dataSplit2 = dataSplit[i].split(":");
    let dataSplit3 = [dataSplit2[0]] + [dataSplit2[1].split(";")];
    console.log(dataSplit3);
    transformedData = dataSplit3.map((entry) => [entry]);
    for (let i = 0; i < transformedData.length; i++) {
      tabfinal.push(transformedData[i]);
    }
  }

  let blabla = [];
  for (let i = 0; i < tabfinal.length; i++) {
    let dataSplit4 = tabfinal[i].join(",").trim();
    blabla.push(dataSplit4);
  }
  return blabla;
}

function mapTab(data) {
  let tabfinal = [];
  for (let i = 0; i < data.length; i++) {
    let pairs = data[i].split(",").map(function (pair) {
      return pair.trim();
    });
    tabfinal.push(pairs);
  }
  return tabfinal;
}

function createDic(data) {
  var countObj = {};
  let tabTemp = [];
  for (let i = 0; i < data.length; i++) {
    data[i].forEach(function (pair) {
      let parts = "";
      let color = "";
      let quantity = 0;
      parts = pair.split(" ");
      quantity = parseInt(parts[0]);
      color = parts[1];
      countObj[color] = (countObj[color] || 0) + quantity;
    });
    tabTemp.push(countObj);
    countObj = {};
  }
  return tabTemp;
}

function onCompart(data) {
  const tableauComparaison = { red: 12, green: 13, blue: 14 };
  const resultatComparaison = data.map((objet) => {
    const comparaison = {};
    for (const couleur in tableauComparaison) {
      comparaison[couleur] =
        (objet[couleur] || 0) <= tableauComparaison[couleur];
    }
    return comparaison;
  });
  console.log(resultatComparaison);
}

function main() {
  const dataSplit = lireFichierEtDiviser("data.txt");
  const maptabconst = mapTab(dataSplit);
  console.log(maptabconst);
  const createDis = createDic(maptabconst);
  console.log(createDis);
  const final = onCompart(createDis);
  console.log(final);
}

main();
