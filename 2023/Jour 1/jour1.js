const fs = require("fs");

function lireFichierEtDiviser(filename) {
  const data = fs.readFileSync(filename, "utf8");
  let dataSplit = data.split("\n");
  return dataSplit;
}

const split = (a) => {
  let splitData;
  let tab = [];
  for (let i = 0; i < a.length; i++) {
    splitData = a[i].split("");
    tab.push(splitData);
  }
  console.log(tab);
  return tab;
};

const parse = (a) => {
  let tabNumber = [];
  let tabFinal = [];
  for (let i = 0; i < a.length; i++) {
    a[i].forEach((element) => {
      if (!isNaN(parseInt(element))) {
        tabNumber.push(element);
      }
    });
    tabFinal.push(tabNumber);
    tabNumber = [];
  }
  return tabFinal;
};

function spliceEnd(a) {
  let tabNumber = [];
  let tabFinal = [];
  let test = [];
  a.forEach((element) => {
    let numberFirst = element[0];
    tabNumber.push(parseInt(numberFirst));
    let splitEnd = element[element.length - 1];
    tabNumber.push(parseInt(splitEnd));
    test = tabNumber.join("");
    tabFinal.push(parseInt(test));
    tabNumber = [];
  });
  return tabFinal;
}

function addition(array) {
  let sommetotal = 0;
  for (let i = 0; i < array.length; i++) {
    sommetotal += array[i];
  }
  return sommetotal;
}

function main() {
  const filename = "data1.txt";
  const lines = lireFichierEtDiviser(filename);
  const tableauDeCaratere = split(lines);

  const tableauDeChiffre = parse(tableauDeCaratere);

  const tableauDeSplice = spliceEnd(tableauDeChiffre);
  const resultat = addition(tableauDeSplice);
  console.log(resultat);
}

main();
// console.log(addition(spliceEnd(parse(split(dataSplit)))));
