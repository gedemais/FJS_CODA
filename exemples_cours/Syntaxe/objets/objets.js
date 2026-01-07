// // Déclaration d'un objet
// let user = {
//     name: "Alice",
//     age: 30,
//     isAdmin: false
// };

// console.log(user);
// console.log(user.name);
// console.log(user.age);
// console.log(user.isAdmin);


// Types de valeurs dans un objet
// let product = {
//     name: "Ordinateur",
//     prices: {
//         fr: 1200,
//         us: 1300,
//         uk: 1100
//     },
//     tags: ["tech", "bureau"]
// };

// console.log(product);


// // Accès aux propriétés d'un objet
// let book = {
//     title: "JavaScript pour les nuls"
// };

// console.log(book.title); // Accès avec le point
// console.log(book["title"]); // Accès avec les crochets
// book.title = "JavaScript avancé"; // Modification de title avec la notation par point
// console.log(book.title);
// book["title"] = "JavaScript expert"; // Modification de title avec la notation par crochets
// console.log(book["title"]);


// // Suppression d'une propriété
// let car = {
//     brand: "Toyota",
//     model: "Corolla",
//     year: 2020
// };

// console.log(car);
// delete car.year; // Suppression de la propriété year
// console.log(car);


// Exemple du panier
// Chaque article du panier est représenté par un objet
let article1 = {
    nom: "T-shirt",
    prix: 20,
    quantite: 2
};

let article2 = {
    nom: "Jean",
    prix: 50,
    quantite: 1
};

// Le panier est une liste (tableau) contenant des objets "article"
let panier = [article1, article2];
