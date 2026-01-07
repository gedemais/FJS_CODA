// // Exemple de modèle objet en JavaScript
// const utilisateur = {
//     nom: "Alice",
//     age: 30,
//     direBonjour() {
//         console.log("Bonjour " + this.nom);
//     }
// };
// utilisateur.direBonjour(); // Appel de la méthode direBonjour de l'objet utilisateur
// console.log(utilisateur); // Affiche l'objet utilisateur

// // Exemple d'accès à une méthode intégrée
// const utilisateur = {
//     nom: "Alice",
//     age: 30,
//     direBonjour() {
//         console.log("Bonjour " + this.nom);
//     }
// };

// console.log(utilisateur.toString());

// // Exemple de création d'un objet avec une fonction constructeur
// function Personne(nom, age) {
//     this.nom = nom;
//     this.age = age;
// }

// Personne.prototype.saluer = function () {
//     console.log("Bonjour, je suis " + this.nom);
// };

// const p1 = new Personne("Bob", 25);
// p1.saluer(); // Appel de la méthode saluer de l'objet p1

// class Personne {
//     constructor(nom, age) {
//         this.nom = nom;
//         this.age = age;
//     }

//     saluer() {
//         console.log(`Bonjour, je suis ${this.nom}`);
//     }
// }

// const p1 = new Personne("Alice", 28);
// p1.saluer();
// console.log(p1);


// // Exemple d'héritage avec les classes

// class Personne {
//     constructor(nom, age) {
//         this.nom = nom;
//         this.age = age;
//     }

//     saluer() {
//         console.log(`Bonjour, je suis ${this.nom}`);
//     }
// }

// class Etudiant extends Personne {
//     constructor(nom, age, formation) {
//         super(nom, age);
//         this.formation = formation;
//     }

//     presenter() {
//         console.log(`${this.nom} suit la formation ${this.formation}`);
//     }
// }


// Exemple de méthode statique dans une classe
class Calculatrice {
    static addition(a, b) {
        console.log(`Adding ${a} and ${b}...`);
        return a + b;
    }
}

console.log(Calculatrice.addition(2, 3));
