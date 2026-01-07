// Exemples d'attachement d'écouteurs d'événements à un élément du DOM
// Sélectionner le bouton avec son id
const bouton = document.querySelector("#toggle");
// Attacher un écouteur d'événement avec addEventListener
bouton.addEventListener("click", function() { // Event de type 'click'
    console.log("Bouton cliqué - événement géré !");
});

console.log("Script chargé - prêt à gérer les événements !");


// // Exemple de détachement d'un écouteur d'événement
// function handleClick() {
//     console.log("Clique !");
// }
// // Attacher l'écouteur
// button.addEventListener("click", handleClick);
// // Le détacher
// button.removeEventListener("click", handleClick);

