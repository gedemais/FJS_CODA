// Get portal formular element to retrieve name & server URL
const form = document.getElementById("portalForm");
// Get error element to fill it with an error message if the connexion fails
const error = document.getElementById("error");
// Get skins container element to fill it with previews & checkboxes
const skinsContainer = document.querySelector(".skins");


// Generate spritesheets paths array
let spritesheets_paths = [];
// Generate as many paths as there are spritesheets in the folder
for (let i = 1; i < 30; i++) {
    spritesheets_paths.push(`assets/${i}.png`);
}

// Create cropped preview for each spritesheet
spritesheets_paths.forEach((file) => {
    // Create a new label element for the skin
    const label = document.createElement("label");
    // Create a new checkbox used to select the skin
    const radio = document.createElement("input");

    radio.type = "radio";
    radio.name = "skin";
    radio.value = file; // Spritesheet file path
    radio.required = true;

    // Create a new canvas element to display the cropped preview
    // We are using a canvas here to make the cropping fast and easy at loading
    const canvas = document.createElement("canvas");
    // Set canvas dimensions to the future preview's dimensions
    canvas.width = 64;
    canvas.height = 64;

    const ctx = canvas.getContext("2d");

    // Generate preview image
    const img = new Image();
    img.src = file;

    // Once the image is loaded, execute the callback
    img.onload = () => {
        // Draw a part of the spritesheet corresponding to a proper preview
        ctx.drawImage(img, 0, 128, 64, 64, 0, 0, 64, 64);
    };

    // Add radio + canvas elements as children of the label
    label.appendChild(radio);
    label.appendChild(canvas);
    // Add the label as a child of the skins container
    skinsContainer.appendChild(label);
});


// When the submit event happens in the form, execute the callback
form.addEventListener("submit", (e) => {
    // e is the event
    e.preventDefault();

    // Select pseudo field and get its value trimed and stored
    const pseudo = document.querySelector("#pseudo").value.trim();
    // Select serverUrl field and get its value trimed and stored
    const serverUrl = document.querySelector("#server").value.trim();
    // Select pseudo field and get its value trimed and stored
    const skinInput = document.querySelector("input[name='skin']:checked");

    // Handle missing field(s) error
    if (!pseudo || !serverUrl || !skinInput) {
        error.textContent = "Tous les champs sont obligatoires";
        return;
    }

    // Retrieve skin path and store it
    const skin = skinInput.value;

    // Store selections in local storage to keep it for the next page (lobby)
    localStorage.setItem("pseudo", pseudo);
    localStorage.setItem("serverUrl", serverUrl);
    localStorage.setItem("skinPath", skin);

    // Redirect towards lobby page
    window.location.href = "game.html";

});
