function scrollToIntro() {
    document.getElementById("intro").scrollIntoView({
        behavior: "smooth"
    });
}
/* Scroll reveal */
window.addEventListener("scroll", () => {
  document.querySelectorAll(".reveal").forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight * 0.9) {
      el.classList.add("visible");
    }
  });
});

/* ===== SAO BĂNG ===== */

const meteorLayer = document.getElementById("meteor-layer");
const featureSection = document.getElementById("features");
let meteorInterval = null;

function createMeteor() {
  const meteor = document.createElement("div");
  meteor.className = "meteor";

  meteor.style.left = Math.random() * window.innerWidth + "px";
  meteor.style.animationDuration = 1.5 + Math.random() * 1.5 + "s";

  meteorLayer.appendChild(meteor);

  setTimeout(() => meteor.remove(), 3000);
}

window.addEventListener("scroll", () => {
  const featureTop = featureSection.getBoundingClientRect().top;

  if (featureTop < window.innerHeight && !meteorInterval) {
    meteorInterval = setInterval(createMeteor, 500);
  }
});