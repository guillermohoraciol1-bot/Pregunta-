let messageIndex = 0;

const messages = [
  "¿Segura? 😐",
  "Piénsalo mejor 🥺",
  "No seas así 😭",
  "Ándale di que sí 💔",
  "Última oportunidad 😳"
];

function handleNoClick() {
  const noButton = document.querySelector('.no-button');
  const yesButton = document.querySelector('.yes-button');

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

function handleYesClick() {
  alert("Sabía que dirías que sí 💖");
}
 function handleYesClick() {
  window.location.href = "yes_page.html";
}

