function scrollToIntro() {
  document.getElementById("intro").scrollIntoView({
    behavior: "smooth"
  });
}

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

  /* Scroll reveal */
  document.querySelectorAll(".reveal").forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight * 0.9) {
      el.classList.add("visible");
    }
  });

  /* Sao băng */
  const featureTop = featureSection.getBoundingClientRect().top;

  if (featureTop < window.innerHeight) {
    if (!meteorInterval) {
      meteorInterval = setInterval(createMeteor, 500);
    }
  } else {
    if (meteorInterval) {
      clearInterval(meteorInterval);
      meteorInterval = null;
    }
  }
});
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("visible");
    }
  });
});