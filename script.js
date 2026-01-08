
/* =========================
   INTRO → FOTOBOOK
========================= */

function empezar() {
    const intro = document.getElementById("intro");
    const fotobook = document.getElementById("fotobook");
    const musica = document.getElementById("musica");
    const muteBtn = document.getElementById("muteBtn");

    intro.classList.add("fade-out");

    musica.volume = 0.4;
    musica.play();

    setTimeout(() => {
        intro.style.display = "none";

        fotobook.style.display = "block";
        fotobook.classList.add("fade-in");

        // mostrar botón SOLO acá
        muteBtn.style.display = "flex";
        muteBtn.textContent = "🔊";
    }, 800);
}

/* =========================
   CARTA FINAL
========================= */

function abrirCartaFinal() {
    const modal = document.getElementById("modal");
    const media = document.getElementById("mediaCarta");
    const texto = document.getElementById("textoCarta");
    const contenido = modal.querySelector(".contenido");

    media.innerHTML = "";
    contenido.classList.add("final");

    texto.innerText =
        "💖 THE END 💖\n\n" +
        "Bueno nahue, mi amor, mi vida, desde hace mucho q venimos hablando de tener todas nuestras fotitos en un solo lugar y desde que estamos a la distancia senti que tenerlas en un formato digital seria lo mejor y ahi pense en hacer esta pagina." +
        " Cada recuerdo, cada risa y cada momento juntos esta en estas fotos, desde el principio hasta el final. De verdad que ver todas estas fotos me llena de emocion, saber la cantidad de recuerdos hermosos que vivimos y los que nos quedan por vivir. " +
        "Conocerte ha cambiado mi vida, me has hecho la persona mas feliz de la tierra, y todos los dias agradezco conocerte." +
        " La idea es que esto fuera tu regalo de cumpleaños asi que Feliz cum mi amor ❤️\n" +
        "Te amo de aca hasta el fin de la galaxia.\n";

    modal.style.display = "flex";
    
    lanzarCorazones();
}



/* =========================
   MÚSICA
========================= */

function toggleMusic() {
    const musica = document.getElementById("musica");
    const muteBtn = document.getElementById("muteBtn");

    musica.muted = !musica.muted;
    muteBtn.textContent = musica.muted ? "🔇" : "🔊";
}

document.querySelectorAll(".galeria img").forEach(img => {
    img.addEventListener("click", () => {
        const modal = document.getElementById("modal");
        const media = document.getElementById("mediaCarta");
        const texto = document.getElementById("textoCarta");

        media.innerHTML = ""; // limpiar antes
        texto.textContent = img.dataset.texto || "";

        // 👉 ES VIDEO
        if (img.classList.contains("video")) {
            const video = document.createElement("video");
            video.src = img.dataset.video;
            video.poster = img.src;
            video.controls = true;
            video.autoplay = true;

            media.appendChild(video);
        } 
        // 👉 ES FOTO
        else {
            const imagen = document.createElement("img");
            imagen.src = img.src;

            media.appendChild(imagen);
        }

        modal.style.display = "flex";
    });
});

function cerrarCarta() {
    const modal = document.getElementById("modal");
    const video = document.getElementById("videoCarta");
    const contenido = modal.querySelector(".contenido");
    const media = document.getElementById("mediaCarta");

    // detener video si hay
    if (video) {
        video.pause();
        video.src = "";
        video.style.display = "none";
    }

    // limpiar contenido
    media.innerHTML = "";
    contenido.classList.remove("final");

    // cerrar modal
    modal.style.display = "none";
}

function lanzarCorazones() {
    const corazones = ["💖", "💗", "💘", "💝", "💕"];

    const intervalo = setInterval(() => {
        const heart = document.createElement("div");
        heart.className = "heart";
        heart.textContent = corazones[Math.floor(Math.random() * corazones.length)];

        heart.style.left = Math.random() * 100 + "vw";
        heart.style.fontSize = 16 + Math.random() * 20 + "px";
        heart.style.animationDuration = 3 + Math.random() * 2 + "s";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }, 300);

    // se detienen solos
    setTimeout(() => clearInterval(intervalo), 5000);
}

