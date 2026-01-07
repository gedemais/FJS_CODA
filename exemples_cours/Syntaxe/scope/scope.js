// Exemple de scope global
// let variable_globale = 0; // Variable globale

// function helloworld() {
//     variable_globale++; // Accès dans une fonction
//     console.log(variable_globale);
//     if (1 > 0) {
//         variable_globale++; // Accès dans un bloc, dans une fonction
//         console.log(variable_globale);
//     }
// };

// variable_globale++; // Accès dans le contexte global
// console.log(variable_globale);

// helloworld(); // Appel de la fonction

// if (0 > 1) {
//     variable_globale++; // Accès dans un bloc, dans le contexte global
//     console.log(variable_globale);
// }

// console.log(variable_globale);


// // Exemple de scope local
// function compter(n) {
//     let compteur = 0; // Variable locale à la fonction
//     while (compteur < n) {
//         console.log(compteur);
//         compteur++;
//     }
// };

// compter(5); // Appel de la fonction

// console.log(compteur); // Accès en dehors de la fonction


// // Exemple de scope de bloc
// function testBloc() {
//     if (true) {
//         let variable_bloc = 10; // Variable limitée au bloc
//         const constante_bloc = 20; // Aussi limitée au bloc
//         console.log("Dans le bloc :", variable_bloc, constante_bloc);
//     }

//     console.log(variable_bloc);
//     console.log(constante_bloc);
// }

// testBloc();
