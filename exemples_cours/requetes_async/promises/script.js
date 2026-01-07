// // Création d'une promesse "pizza"
// const pizza = new Promise((resolve, reject) => { // Déclaration de la fonction liée à la promesse
//     const dispo = true; // est-ce que la pizza peut être faite ?

//     setTimeout(() => {  // on simule le temps de cuisson avec un setTimeout
//         if (dispo) {
//             resolve("Ta pizza est prête !"); // succès
//         } else {
//             reject("Désolé, plus d'ingrédients..."); // erreur
//         }
//     }, 2000); // 2 secondes
// });

// // On utilise la promesse pizza
// pizza
//     // Chainage : On attribue autant de callbacks que nécessaire avec then
//     .then(message => {console.log("Pizzaiolo :", message, "\nEh mercé chef !");})
//     .then(() => {console.log("*Bruits de goret qui mange une pizza*");})
//     .then(() => {console.log("*Ronflements*");})
//     .catch(error => { // Avec catch : On attribue un callback d'échec (rejet)
//         console.log("Pizzaiolo :", error);
//         console.log("Jvé tout casser !");
//     });

// console.log("Je fais autre chose pendant que la pizza cuit…");





// // Exemple de fonction asynchrone retournant une promesse
// async function chargerDonnees() {
//     return "Résultat";
// }

// console.log(chargerDonnees()); // Affiche une promesse en attente




// Exemple d'utilisation d'await dans une fonction asynchrone
async function afficherDonnees() {
    try {
        // 1. Requête HTTP
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");

        // 2. Vérification du statut
        if (!response.ok) {
            throw new Error("Erreur HTTP : " + response.status);
        }

        // 3. Transformation en JSON
        const data = await response.json();

        // 4. Utilisation des données
        console.log("Nom :", data.name);
        console.log("Type :", data.types.map(t => t.type.name).join(", "));
        console.log("Image :", data.sprites.front_default);

        // 5. Exemple d’affichage dans le DOM
        const container = document.querySelector("#pokemon");
        container.innerHTML = `
            <h2>${data.name.toUpperCase()}</h2>
            <img src="${data.sprites.front_default}" alt="${data.name}">
            <p>Type : ${data.types.map(t => t.type.name).join(", ")}</p>
        `;
    } catch (error) {
        console.error("Erreur lors du chargement :", error);
    }
}

// Appel de la fonction
afficherDonnees();
console.log("Script chargé - prêt à faire des requêtes async !");