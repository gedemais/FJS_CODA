
const canvas = document.querySelector("#monCanvasDeLaMortQuiTue");

console.log(canvas);
const ctx = canvas.getContext("2d");

console.log(ctx);


// Exemple de dessin de rectangles
// ctx.fillRect(50, 50, 100, 80);      // rectangle plein
// ctx.strokeRect(200, 50, 100, 80);  // contour
// ctx.clearRect(60, 60, 80, 60);     // effacement

// Exemple de dessin de lignes
// ctx.beginPath();
// ctx.moveTo(50, 200);
// ctx.lineTo(350, 300);
// ctx.stroke();

// // Exemple de dessins d'arcs de cercles
// ctx.beginPath();
// ctx.arc(150, 300, 40, 0, Math.PI * 2);
// ctx.fill();

// // Exemples de "chemins"
// ctx.beginPath();
// ctx.moveTo(300, 50);
// ctx.lineTo(350, 150);
// ctx.lineTo(250, 150);
// ctx.closePath();
// ctx.stroke();

// // Exemple de coloration
// ctx.fillStyle = "blue";
// ctx.strokeStyle = "#ff0000";
// ctx.lineWidth = 4;


// // Exemple de dégradé
// const gradient = ctx.createLinearGradient(0, 0, 200, 0);
// gradient.addColorStop(0, "red");
// gradient.addColorStop(0.5, "yellow");
// gradient.addColorStop(1, "blue");

// ctx.fillStyle = gradient;
// ctx.fillRect(50, 50, 200, 100);


// // Exemple d'affichage d'image
// const img = new Image();
// img.src = "image.jpg";

// img.onload = () => {
//     ctx.drawImage(img, 100, 100, 300, 168);
// };


// // Exemple d'affichage de texte
// ctx.font = "20px Arial";
// ctx.fillStyle = "black";
// ctx.fillText("Hello Canvas", 50, 30);
// ctx.clearRect(0, 0, canvas.width, canvas.height);
// ctx.fillText("Salut poto", 50, 30);

// Exemple d'animation
// function draw() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);

//     // Dessin ici

//     requestAnimationFrame(draw);
// }

// draw();


// // Exemple d'interaction utilisateur avec la souris
// canvas.addEventListener("mousemove", (event) => {
//     const rect = canvas.getBoundingClientRect();

//     const x = event.clientX - rect.left;
//     const y = event.clientY - rect.top;

//     console.log(x, y);
// });
