const inicio = document.getElementById("inicio");
const segunda = document.getElementById("segunda");
const entrar = document.getElementById("entrar");

const musica = document.getElementById("musica");
const botonMusica = document.getElementById("botonMusica");

const sobre = document.getElementById("sobre");
const cartaModal = document.getElementById("cartaModal");
const cerrarCarta = document.getElementById("cerrarCarta");

let musicaSonando = false;


/* =========================
   ENTRAR
========================= */

entrar.addEventListener("click", () => {

    musica.volume = 0.6;

    musica.play()
        .then(() => {
            musicaSonando = true;
            botonMusica.textContent = "🔊";
        })
        .catch(() => {
            console.log("No se pudo reproducir la música.");
        });

    inicio.classList.remove("activa");

    setTimeout(() => {
        segunda.classList.add("activa");
    }, 500);

    crearPetalos();
});


/* =========================
   MÚSICA
========================= */

botonMusica.addEventListener("click", () => {

    if (musicaSonando) {

        musica.pause();
        musicaSonando = false;
        botonMusica.textContent = "🔇";

    } else {

        musica.play();
        musicaSonando = true;
        botonMusica.textContent = "🔊";
    }
});


/* =========================
   ABRIR CARTA
========================= */

sobre.addEventListener("click", () => {

    cartaModal.classList.add("mostrar");

    crearPetalos();

});


/* =========================
   CERRAR CARTA
========================= */

cerrarCarta.addEventListener("click", () => {

    cartaModal.classList.remove("mostrar");

});


/* =========================
   CERRAR HACIENDO CLIC FUERA
========================= */

cartaModal.addEventListener("click", (e) => {

    if (e.target === cartaModal) {
        cartaModal.classList.remove("mostrar");
    }

});


/* =========================
   PÉTALOS
========================= */

function crearPetalo() {

    const petalo = document.createElement("div");

    petalo.className = "petalo";

    const tipos = ["💜", "🌸", "✿", "♥"];

    petalo.textContent =
        tipos[Math.floor(Math.random() * tipos.length)];

    petalo.style.left =
        Math.random() * 100 + "vw";

    petalo.style.fontSize =
        (12 + Math.random() * 18) + "px";

    petalo.style.animationDuration =
        (5 + Math.random() * 7) + "s";

    document.body.appendChild(petalo);

    setTimeout(() => {
        petalo.remove();
    }, 13000);
}


function crearPetalos() {

    for (let i = 0; i < 20; i++) {

        setTimeout(() => {
            crearPetalo();
        }, i * 200);

    }
}


/* PÉTALOS CONTINUOS */

setInterval(() => {

    if (
        segunda.classList.contains("activa") ||
        cartaModal.classList.contains("mostrar")
    ) {
        crearPetalo();
    }

}, 900);