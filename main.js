/* --- LOGICA DE TABS (Ficha Técnica / Prompts) --- */
function openTab(evt, tabName) {
    const projectContainer = evt.currentTarget.closest('.project-details');
    
    // Ocultar contenidos de ese proyecto
    const contents = projectContainer.querySelectorAll('.tab-content');
    contents.forEach(content => content.classList.remove('active-tab'));

    // Desactivar botones de ese proyecto
    const links = projectContainer.querySelectorAll('.tab-link');
    links.forEach(link => link.classList.remove('active'));

    // Activar el seleccionado
    document.getElementById(tabName).classList.add('active-tab');
    evt.currentTarget.classList.add('active');
}

/* --- ANIMACIÓN REVEAL AL HACER SCROLL --- */
const observerOptions = {
    threshold: 0.15
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active-scroll');
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

/* --- FORMULARIO DE CONTACTO --- */
const form = document.querySelector('.contact-form');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    const btn = this.querySelector('button');
    const originalText = btn.innerText;
    
    btn.innerText = "Enviant...";
    btn.classList.add('btn-success');

    setTimeout(() => {
        btn.innerText = "Missatge Enviat! ✅";
        this.reset();
        
        setTimeout(() => {
            btn.innerText = originalText;
            btn.classList.remove('btn-success');
        }, 3000);
    }, 1500);
});