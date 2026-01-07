// Exemples de sélection d'éléments du DOM avec les anciennes méthodes
// const titre = document.getElementById("titre");
// const items = document.getElementsByClassName("item");
// const paragraphs = document.getElementsByTagName("p");

// console.log(titre);
// console.log(items);
// console.log(paragraphs);


// // Exemples de sélection d'éléments du DOM avec les méthodes modernes
// const titre = document.querySelector("#titre");
// const premierItem = document.querySelector(".item");
// const tousLesItems = document.querySelectorAll(".item");

// console.log(titre);
// console.log(premierItem);
// console.log(tousLesItems);


// // Exemples de modification d'éléments du DOM
// const titre = document.querySelector("#titre");
// const premierItem = document.querySelector(".item");
// const tousLesItems = document.querySelectorAll(".item");

// titre.textContent = "Coucou les loulous !";
// premierItem.innerHTML = "<strong>Texte en gras</strong>";


// // Exemple de lecture et de modification d'attributs de balises
// const titre = document.querySelector("#titre");
// const premierItem = document.querySelector(".item");

// // Assigner un nouvel attribut
// titre.setAttribute("title", "Info");
// // Lire un attribut existant
// const lien = titre.getAttribute("title");
// console.log("Attribut title :", lien);
// // Supprimer un attribut
// premierItem.removeAttribute("disabled");

// // Lister les attributs d'un élément
// for (let attr of titre.attributes) {
//     console.log(`Attribut : ${attr.name} = ${attr.value}`);
// }



// // Exemple d'utilisation des outils console
// const titre = document.querySelector("#titre");
// // Afficher sous forme d'arborescence
// console.dir(titre);
// // Afficher le prototype de l'objet
// console.log(Object.getPrototypeOf(titre));


// // Exemple de modification des styles CSS via le DOM
// const element = document.querySelector("li"); // sélectionne le premier <li>
// // Directement accéder aux styles CSS (déconseillé)
// element.style.color = "red";
// element.style.backgroundColor = "yellow";



// // Exemple d'utilisation de la propriété classList pour gérer les classes CSS
// const element = document.querySelector("li"); // sélectionne le premier <li>
// // Ajouter une classe
// element.classList.add("open");
// // Supprimer une classe
// element.classList.remove("active");
// // Vérifier si une classe est présente
// console.log(element.classList.contains("hidden")); // true ou false



// // Exemple de création d'un élément
// const li = document.createElement("li");
// li.textContent = "Nouvel élément";



// // Exemple d'insertion d'un élément dans le DOM
// // Sélectionner la liste avec son id
// const liste = document.querySelector("#menu");
// // Appel à appendChild pour ajouter l'élément créé à la fin de la liste
// liste.appendChild(li);
// // Appel à prepend pour ajouter l'élément créé au début de la liste
// liste.prepend(li);
// // Appel à insertBefore pour insérer l'élément avant la liste
// liste.insertBefore(li, reference);
// // Appel à insertAfter pour insérer l'élément après la liste
// liste.insertAfter(li, reference);



// Exemples de suppression d'un élément du DOM
// Sélection de la liste avec son id
const liste = document.querySelector("#menu");
// Appel à querySelector pour sélectionner via liste pour sélectionner son premier <li>
const li = liste.querySelector("li");
// Appel à removeChild via liste pour supprimer l'élément sélectionné
liste.removeChild(li);
// Equivalent
li.remove(); // Suppression directe de l'élément sélectionné
