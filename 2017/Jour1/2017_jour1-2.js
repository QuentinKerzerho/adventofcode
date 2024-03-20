const fs = require("fs");

// Lire le fichier

function lireFichierEtDiviser(filename) {
  const data = fs.readFileSync(filename, "utf8");
  let dataString = data.toString(); // On le transforme en string
  return dataString;
}

let tabSplit = lireFichierEtDiviser("data.txt"); // On récupère le contenu du fichier

let tabSplit1 = tabSplit.slice(0, tabSplit.length / 2); // On separe le tableau en deux et on créee un nouveau tableau 1
let tabSplit2 = tabSplit.slice(tabSplit.length / 2, tabSplit.length); // On separe le tableau en deux et on créee un nouveau tableau 2

let quantity = [];
let somme = 0;
const initialValue = 0;
for (let i = 0; i < tabSplit1.length; i++) {
  // On parcours les deux tableaux (tabSplit1 et tabSplit2) (qui sont de même taille)
  if (tabSplit1[i] == tabSplit2[i]) {
    somme = parseInt(tabSplit1[i]) + parseInt(tabSplit2[i]); // On stocke la somme des deux valeurs dans une variable somme
    quantity.push(somme); // On ajoute la somme dans le tableau quantity
  } else if (tabSplit1[i] == tabSplit2[i]) {
    quantity.push(0);
  }
}

let result = quantity.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
); // Methode reduce pour additionner les valeurs du tableau quantity
console.log(result);
