// // Déclaration de tableaux
// let colors_array = ["red", "blue", "green"];
// let numbers_array = [42, 84, 21];

// console.log(colors_array.length);
// console.log(numbers_array.length);

// // Ajout d'éléments
// let fruits_array = ["apple", "grapes", "orange"];
// console.log(fruits_array);
// fruits_array.push("kiwi"); // ajoute à la fin
// console.log(fruits_array);
// fruits_array.unshift("lemon"); // ajoute au début
// console.log(fruits_array);

// // Suppression d'éléments
// let fruits_array = ["lemon", "apple", "grapes", "orange", "kiwi"];
// console.log(fruits_array);
// console.log(fruits_array.pop()); // supprime le dernier élément
// console.log(fruits_array);
// console.log(fruits_array.shift()); // supprime le premier élément
// console.log(fruits_array);

// Itération
let fruits_array = ["lemon", "apple", "grapes", "orange", "kiwi"];

for (let i = 0; i < fruits_array.length; i++) {
    console.log(fruits_array[i]);
}

console.log("============================");

fruits_array.forEach(function(fruit) {
    console.log(fruit);
});
