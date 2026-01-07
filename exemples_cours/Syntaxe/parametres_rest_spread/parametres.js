// // Exemple de paramètre par défaut
// function afficher_nom(nom = "Invité") {
//     console.log(nom);
// }

// afficher_nom("Alice"); // Appel avec argument
// afficher_nom();


// // Exemple de paramètre rest
// function print_sum(...numbers) {
//     let total = 0;
//     console.log(numbers);
//     for (let i = 0; i < numbers.length; i++) {
//         total += numbers[i];
//     }
//     console.log("Somme:", total);
// }

// print_sum(1, 2, 3);
// print_sum(4, 5);


// // Exemple de déstructuration classique
// const coords = [10, 20];
// const [x, y] = coords;
// console.log("x:", x);
// console.log("y:", y);


// // Exemple de déstructuration avec rest
// const nombres = [1, 2, 3, 4];
// const [premier, ...reste] = nombres;
// console.log("Premier:", premier);
// console.log("Reste:", reste);

// const [first, second, ...others] = nombres;
// console.log("First:", first);
// console.log("Second:", second);
// console.log("Others:", others);


// Exemple de l'opérateur spread
function additionner(a, b, c) {
    return a + b + c;
}

const tableau1 = [1, 2, 3];
// Utilisation de l'opérateur spread pour passer les éléments du tableau comme arguments
console.log(additionner(...tableau1));

// Utilisation de l'opérateur spread pour créer un nouveau tableau en intégrant les éléments d'un autre tableau
const b = [...tableau1, 4, 5];
console.log(b);
