const fs = require("fs");

const array = fs.readFileSync("data2017.txt", "utf8"); // read the file into a string

let arraySplit = array.split("\n"); // split the array into lines

let tableau = []; // create an empty array pour stocker les différences

for (let i = 0; i < arraySplit.length; i++) {
  // boucle pour parcourir les lignes
  let lineSplit = arraySplit[i].split("\t"); // split the line into numbers \t = tabulation
  console.log("lineSplit", lineSplit);
  let max = 0;
  let min = 9999; // valeur arbitraire pour min pour être sûr que la première valeur sera inférieure
  for (let j = 0; j < lineSplit.length; j++) {
    // boucle pour parcourir les nombres de chaque ligne
    if (max < parseInt(lineSplit[j])) {
      max = parseInt(lineSplit[j]); // convertir en nombre entier avec parseInt pour pouvoir comparer
    }

    if (parseInt(lineSplit[j]) < min) {
      min = parseInt(lineSplit[j]); // convertir en nombre entier avec parseInt pour pouvoir comparer
    }
  }
  let diff = max - min; // calculer la différence entre le max et le min
  tableau.push(diff); // ajouter la différence au tableau
}

console.log("tableau", tableau);

const initialValue = 0; // valeur initiale pour la somme
const sumWithInitial = tableau.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
); // calculer la somme des différences voir google "comment additionner les éléments d'un tableau en javascript"
console.log("sumWithInitial", sumWithInitial);
