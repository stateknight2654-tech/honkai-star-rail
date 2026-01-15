function scrollToIntro() {
  document.getElementById("intro").scrollIntoView({
    behavior: "smooth"
  });
}

const meteorLayer = document.getElementById("meteor-layer");
const introSection = document.getElementById("intro");

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

  /* Reveal */
  document.querySelectorAll(".reveal").forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight * 0.9) {
      el.classList.add("visible");
    }
  });

  /* Sao băng chỉ ở INTRO */
  const rect = introSection.getBoundingClientRect();
  const introVisible = rect.top < window.innerHeight && rect.bottom > 0;

  if (introVisible) {
    if (!meteorInterval) {
      meteorInterval = setInterval(createMeteor, 600);
    }
  } else {
    if (meteorInterval) {
      clearInterval(meteorInterval);
      meteorInterval = null;
    }
  }
});