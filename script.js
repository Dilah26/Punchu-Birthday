const btn = document.getElementById("celebrateBtn");
const celebration = document.getElementById("celebration");

btn.addEventListener("click", () => {
  celebration.classList.remove("hidden");
  btn.style.display = "none";

  // Confetti effect
  for (let i = 0; i < 100; i++) {
    createConfetti();
  }
});

function createConfetti() {
  const confetti = document.createElement("div");
  confetti.className = "confetti";
  confetti.style.left = Math.random() * window.innerWidth + "px";
  confetti.style.animationDuration = (Math.random() * 3 + 2) + "s";
  document.body.appendChild(confetti);

  setTimeout(() => confetti.remove(), 5000);
}
