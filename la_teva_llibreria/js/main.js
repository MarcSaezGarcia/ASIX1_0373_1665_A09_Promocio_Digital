const backgrounds = [
    "../img/foto1.jpg",
    "../img/foto2.jpg",
    "../img/foto3.jpg"
];

let index = 0;
const body = document.querySelector(".dynamic-bg");

function changeBackground() {
    body.style.backgroundImage = `url(${backgrounds[index]})`;
    index = (index + 1) % backgrounds.length;
}

changeBackground();
setInterval(changeBackground, 5000);

function showText(id) {
    // Oculta todos los elementos dentro de options
    const optionsContainers = document.querySelectorAll(".options");
    optionsContainers.forEach(container => {
        const children = container.querySelectorAll(".video-info, p");
        children.forEach(child => child.style.display = "none");
    });

    // Muestra el que corresponde
    const element = document.getElementById(id);
    if (element) element.style.display = "block";
}

// Selecciona todos los botones
const buttons = document.querySelectorAll(".show-btn");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        // Encuentra el contenedor .options donde está el botón
        const optionsContainer = button.closest(".options");

        // Oculta todos los textos dentro de este contenedor
        const texts = optionsContainer.querySelectorAll(".video-info");
        texts.forEach(t => t.classList.add("hidden"));

        // Muestra solo el texto correspondiente
        const targetClass = button.dataset.target;
        const target = optionsContainer.querySelector("." + targetClass);
        if (target) target.classList.remove("hidden");
    });
});
