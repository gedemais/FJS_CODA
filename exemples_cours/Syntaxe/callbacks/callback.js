// // Callback -> Définition

// function direBonjour(nom, callback) {
//     console.log("Bonjour " + nom);
//     callback();
// }

// function fin() {
//     console.log("Fin de la fonction");
// }

// direBonjour("Alice", fin);


// // Call back -> Exemple avec setTimeout

// console.log("Début");

// setTimeout(() => {
//     console.log("Exécuté après 2 secondes");
// }, 2000);

// console.log("Fin");


// // Call back -> Exemple avec addEventListener
button.addEventListener("click", function () {
    console.log("Bouton cliqué !");
});
