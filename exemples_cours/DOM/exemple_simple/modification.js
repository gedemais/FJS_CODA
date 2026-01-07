console.log("On commence avec une page normale.");

setTimeout(() => {
    // Modification du titre de la page
    document.title = "Je raconte ma vie";

    // Récupération du premier élément h1 de la page
    const titre = document.querySelector("h1");
    // Modification du texte de l'élément h1 récupéré par sélection
    titre.textContent = "Je pars faire du poney";

    const texte = document.querySelector("p");
    texte.textContent = "Toi-même tu sais";
    texte.style.color = "green";
    console.log("TADAAA !");
}, 2000);

console.log("Et on attend bien sagement.");
