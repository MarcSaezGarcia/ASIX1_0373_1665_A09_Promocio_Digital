document.addEventListener("DOMContentLoaded", () => {
    const backgrounds = [
        "./img/foto1.jpg",
        "./img/foto2.jpg",
        "./img/foto3.jpg"
    ];

    let current = 0;

    // Crear dos divs de fondo
    const bgContainer = document.querySelector(".dynamic-bg");
    const div1 = document.createElement("div");
    const div2 = document.createElement("div");

    div1.className = "bg-layer";
    div2.className = "bg-layer";

    bgContainer.appendChild(div1);
    bgContainer.appendChild(div2);

    div1.style.backgroundImage = `url(${backgrounds[0]})`;
    div1.style.opacity = 1;
    div2.style.opacity = 0;

    setInterval(() => {
        const next = (current + 1) % backgrounds.length;
        const fadeIn = current % 2 === 0 ? div2 : div1;
        const fadeOut = current % 2 === 0 ? div1 : div2;

        fadeIn.style.backgroundImage = `url(${backgrounds[next]})`;
        fadeIn.style.transition = "opacity 1.5s ease-in-out";
        fadeOut.style.transition = "opacity 1.5s ease-in-out";

        fadeIn.style.opacity = 1;
        fadeOut.style.opacity = 0;

        current = next;
    }, 5000);
});
