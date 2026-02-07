/* ===== TEXTO TIPO MÁQUINA ===== */
const text = "¿Te gustaría salir conmigo? 💖";
let index = 0;
const speed = 70;

function typeWriter() {
  if (index < text.length) {
    document.getElementById("typewriter").textContent += text.charAt(index);
    index++;
    setTimeout(typeWriter, speed);
  }
}

window.onload = typeWriter;

/* ===== BOTÓN NO ===== */
let messageIndex = 0;

const messages = [
  "¿Segura? 🥺",
  "Piénsalo bien 😅",
  "Prometo que será divertido 💫",
  "Ok… última oportunidad 😳"
];

function handleNoClick() {
  const noButton = document.querySelector(".no-button");
  const yesButton = document.querySelector(".yes-button");

  // Cambia el texto del botón NO
  noButton.textContent = messages[messageIndex];
  messageIndex = (messageIndex + 1) % messages.length;

  // Hace crecer el botón SÍ
  const currentSize = parseFloat(
    window.getComputedStyle(yesButton).fontSize
  );

  yesButton.style.fontSize = `${currentSize * 1.3}px`;
  yesButton.style.transform = "scale(1.15)";

  setTimeout(() => {
    yesButton.style.transform = "scale(1)";
  }, 200);
}

/* ===== PARTÍCULAS DE FONDO ===== */
function createParticle() {
  const particle = document.createElement("div");
  particle.classList.add("particle");
  particle.textContent = "✨";

  particle.style.left = Math.random() * window.innerWidth + "px";
  particle.style.bottom = "0px";
  particle.style.animationDuration = 4 + Math.random() * 4 + "s";

  document.body.appendChild(particle);

  setTimeout(() => particle.remove(), 8000);
}

setInterval(createParticle, 500);

/* ===== BOTÓN SÍ (CLÍMAX) ===== */
function handleYesClick() {
  for (let i = 0; i < 25; i++) {
    const heart = document.createElement("div");
    heart.textContent = "💖";
    heart.style.position = "fixed";
    heart.style.left = "50%";
    heart.style.top = "50%";
    heart.style.fontSize = "24px";
    heart.style.transform = "translate(-50%, -50%)";
    heart.style.animation = "burst 1s ease forwards";

    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 1000);
  }

  // Redirección final
  setTimeout(() => {
    window.location.href = "yes_page.html";
  }, 800);
}
