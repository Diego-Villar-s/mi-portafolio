// script.js

// datos de proyectos
const proyectos = [{
        titulo: "Sistema de Inventario",
        tech: "HTML, CSS, JS",
        desc: "CRUD basico con LocalStorage",
        img: "assets/proyecto-1.png",
    },
    {
        titulo: "Clon de Calculadora",
        tech: "JavaScript puro",
        desc: "Operaciones matematicas con eval seguro",
        img: "assets/proyecto-2.png",
    },
    {
        titulo: "Dashboard de Clima",
        tech: "Fetch API + OpenWeather",
        desc: "Consume API REST publica",
        img: "assets/proyecto-3.png",
    },
];

// renderiza los proyectos en el DOM
function renderizarProyectos() {
    const contenedor = document.querySelector(".grid-proyectos");
    proyectos.forEach((proyecto) => {
        const card = document.createElement("article");
        card.className = "card-proyecto";
        card.innerHTML = `<img src="${proyecto.img}" alt="${proyecto.titulo}"><h3>${proyecto.titulo}</h3><span class="tech">${proyecto.tech}</span><p>${proyecto.desc}</p>`;
        contenedor.appendChild(card);
    });
}

// scroll suave al hacer click en el menu
document.querySelectorAll(".nav__link").forEach((enlace) => {
    enlace.addEventListener("click", (e) => {
        e.preventDefault();
        const destino = document.querySelector(enlace.getAttribute("href"));
        destino.scrollIntoView({ behavior: "smooth" });
    });
});

document.addEventListener("DOMContentLoaded", renderizarProyectos);