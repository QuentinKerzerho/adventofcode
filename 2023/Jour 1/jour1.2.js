const fs = require("fs");

// lecture des données et on split par ligne //
function lireFichierEtDiviser(filename) {
  const data = fs.readFileSync(filename, "utf8");
  let dataSplit = data.split("\n");
  return dataSplit;
}

// Je remplace les mots par les chiffres correspondants//

const parse = (a) => {
  let remplacement = {
    one: "o1e",
    two: "t2o",
    three: "t3e",
    four: "f4r",
    five: "f5e",
    six: "s6x",
    seven: "se7en",
    eight: "ei8ht",
    nine: "n9e",
  };
  let tabFinal = [];
  for (let i = 0; i < a.length; i++) {
    let regex = new RegExp(Object.keys(remplacement).join("|"), "gi");
    let nouvelleChaine = a[i].replace(regex, function (matched) {
      return remplacement[matched];
    });
    tabFinal.push(nouvelleChaine);
  }
  return tabFinal;
};

// Je remplace les mots par les chiffres correspondants ( je le fais deux fois pour 'oneight')//

const parse2 = (a) => {
  let remplacement = {
    one: "o1e",
    two: "t2o",
    three: "t3e",
    four: "f4r",
    five: "f5e",
    six: "s6x",
    seven: "se7en",
    eight: "ei8ht",
    nine: "n9e",
  };
  let tabFinal = [];
  for (let i = 0; i < a.length; i++) {
    let regex = new RegExp(Object.keys(remplacement).join("|"), "gi");
    let nouvelleChaine = a[i].replace(regex, function (matched) {
      return remplacement[matched];
    });
    let test = nouvelleChaine.split("");
    tabFinal.push(test);
  }
  return tabFinal;
};

const returnNumberOnly = (a) => {
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

const spliceEnd = (a) => {
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
};

function addition(array) {
  let sommetotal = 0;
  for (let i = 0; i < array.length; i++) {
    sommetotal += array[i];
  }
  return sommetotal;
}

function main() {
  const filename = "data.txt";
  const lines = lireFichierEtDiviser(filename);
  console.log(lines);
  const tableauDeChiffre = parse(lines);
  console.log(tableauDeChiffre);
  const tableauDeChiffre2 = parse2(tableauDeChiffre);
  const blabla = returnNumberOnly(tableauDeChiffre2);
  const tableauDeSplice = spliceEnd(blabla);
  console.log(tableauDeSplice);
  const resultat = addition(tableauDeSplice);
  console.log(resultat);
}

main();
