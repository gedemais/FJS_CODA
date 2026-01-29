// // Exemple addEventListener
// const button = document.querySelector("#child");
// button.addEventListener("click", (event) => {
//     console.log(event.type);
//     console.log(event.target);
// });


// Exemple de bubbling
// const parent = document.querySelector("#parent");
// const child = document.querySelector("#child");
// parent.addEventListener("click", () => console.log("parent"));
// child.addEventListener("click", () => console.log("child"));

// Exemple de délégation
// parent.addEventListener("click", (event) => {
//     console.log(event.target); // élément réellement cliqué
//     console.log(event.currentTarget); // élément qui écoute (le parent)
// });

// Exemple d'events clavier
document.addEventListener("keydown", (event) => {
    console.log(event.key); // Affiche la touche pressée
});
document.addEventListener("keyup", (event) => {
    console.log(event.key); // Affiche la touche relâchée
});
