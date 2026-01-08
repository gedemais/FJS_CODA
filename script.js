let tableau = [2, 8, 7, 4, 11, 13, 0, 32];

let minimum = tableau[0];
let maximum = tableau[0];

for (let i = 0; i < tableau.length; i++) {
    if (tableau[i] < minimum) {
        minimum = tableau[i];
    }
    if (tableau[i] > maximum) {
        maximum = tableau[i];
    }
}