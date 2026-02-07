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

  noButton.textContent = messages[messageIndex];
  messageIndex = (messageIndex + 1) % messages.length;

  const currentSize = parseFloat(
    window.getComputedStyle(yesButton).fontSize
  );

  yesButton.style.fontSize = `${currentSize * 1.3}px`;
  yesButton.style.transform = "scale(1.15)";

  setTimeout(() => {
    yesButton.style.transform = "scale(1)";
  }, 200);
}

/* Corazones al pasar el mouse */
const yesButton = document.querySelector(".yes-button");

yesButton.addEventListener("mouseenter", () => {
  const heart = document.createElement("div");
  heart.textContent = "💖";
  heart.style.position = "absolute";
  heart.style.fontSize = "24px";
  heart.style.left = yesButton.offsetLeft + Math.random() * 60 + "px";
  heart.style.top = yesButton.offsetTop - 10 + "px";
  heart.style.animation = "floatUp 1.5s ease forwards";

  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 1500);
});

function handleYesClick() {
  window.location.href = "yes_page.html";
}
