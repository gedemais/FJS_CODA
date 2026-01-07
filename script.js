/* ============================================================
   PARTIE 1 – genererEleves
   ============================================================ */

function genererEleves() {
    let tailleMin = 7;
    let tailleMax = 10;
    let taille = Math.floor(Math.random() * (tailleMax - tailleMin + 1)) + tailleMin;

    let prenoms = ["Alice", "Bob", "Charlie", "David", "Emma", "Fiona", "Hugo", "Isabelle", "Julien", "Lucas"];
    let eleves = [];

    for (let i = 0; i < taille; i++) {
        let indexPrenom = Math.floor(Math.random() * prenoms.length);

        let eleve = {
            prenom: prenoms[indexPrenom],
            noteFrancais: Math.floor(Math.random() * 21),
            noteMaths: Math.floor(Math.random() * 21),
            noteHistoire: Math.floor(Math.random() * 21)
        };

        eleve.moyenne = (eleve.noteFrancais + eleve.noteMaths + eleve.noteHistoire) / 3;
        eleves.push(eleve);
    }

    return eleves;
}

/* ============================================================
   PARTIE 2 – afficherEleves
   ============================================================ */

function afficherEleves(tableau) {
    for (let i = 0; i < tableau.length; i++) {
        console.log(tableau[i].prenom + " : " + tableau[i].moyenne.toFixed(1));
    }
}

/* ============================================================
   PARTIE 3 – trouverMoyenneMin
   ============================================================ */

function trouverMoyenneMin(tableau, indexDepart) {
    let indiceMin = indexDepart;

    for (let i = indexDepart + 1; i < tableau.length; i++) {
        if (tableau[i].moyenne < tableau[indiceMin].moyenne) {
            indiceMin = i;
        }
    }

    return indiceMin;
}

/* ============================================================
   PARTIE 4 – afficherDonnees
   ============================================================ */

function afficherDonnees(tableau) {
    console.log("Nombre d'élèves :", tableau.length);

    let min = tableau[trouverMoyenneMin(tableau, 0)].moyenne;
    let max = tableau[0].moyenne;

    for (let i = 1; i < tableau.length; i++) {
        if (tableau[i].moyenne > max) max = tableau[i].moyenne;
    }

    console.log("Moyenne la plus basse :", min.toFixed(1));
    console.log("Moyenne la plus haute :", max.toFixed(1));
}

/* ============================================================
   PARTIE 5 – swap
   ============================================================ */

function swap(tableau, indexA, indexB) {
    let temp = tableau[indexA];
    tableau[indexA] = tableau[indexB];
    tableau[indexB] = temp;
}

/* ============================================================
   PARTIE 6 – triParSelection
   ============================================================ */

function triParSelection(tableau) {
    let comparaisons = 0;
    let echanges = 0;

    for (let i = 0; i < tableau.length - 1; i++) {
        let indiceMin = trouverMoyenneMin(tableau, i);

        comparaisons += tableau.length - i - 1;

        if (indiceMin !== i) {
            swap(tableau, i, indiceMin);
            echanges++;
        }
    }

    console.log("Nombre de comparaisons :", comparaisons);
    console.log("Nombre d'échanges :", echanges);
}

/* ============================================================
   PARTIE 7 – APPEL DES FONCTIONS
   ============================================================ */

console.log("===== GÉNÉRATION DES ÉLÈVES =====");
let eleves = genererEleves();
afficherEleves(eleves);

console.log("===== DONNÉES GLOBALES =====");
afficherDonnees(eleves);

console.log("===== TRI PAR SÉLECTION =====");

// Copie du tableau avant tri
let elevesAvantTri = [];
for (let i = 0; i < eleves.length; i++) {
    elevesAvantTri.push(eleves[i]);
}

triParSelection(eleves);

console.log("Tableau avant tri :");
afficherEleves(elevesAvantTri);

console.log("Tableau après tri :");
afficherEleves(eleves);
