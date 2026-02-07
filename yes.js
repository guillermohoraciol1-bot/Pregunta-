// Vuelve a la página principal
function goBack() {
  window.location.href = "index.html";
}

function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.textContent = "💗";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 4 + Math.random() * 4 + "s";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 8000);
}

setInterval(createHeart, 700);
