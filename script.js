document.addEventListener("DOMContentLoaded", () => {

  function scrollToIntro() {
    const intro = document.getElementById("intro");
    if (intro) {
      intro.scrollIntoView({ behavior: "smooth" });
    }
  }

  const meteorLayer = document.getElementById("meteor-layer");
  const introSection = document.getElementById("intro");

  let meteorInterval = null;

  function createMeteor() {
    if (!meteorLayer) return;

    const meteor = document.createElement("div");
    meteor.className = "meteor";

    meteor.style.left = Math.random() * window.innerWidth + "px";
    meteor.style.animationDuration =
      (1.5 + Math.random() * 1.5) + "s";

    meteorLayer.appendChild(meteor);

    setTimeout(() => meteor.remove(), 3000);
  }

  window.addEventListener("scroll", () => {

    document.querySelectorAll(".reveal").forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.9) {
        el.classList.add("visible");
      }
    });

    // TRANG NHÂN VẬT (không có intro)
    if (!introSection) {
      if (!meteorInterval) {
        meteorInterval = setInterval(createMeteor, 600);
      }
      return;
    }

    // TRANG CHỦ
    const rect = introSection.getBoundingClientRect();
    const introVisible =
      rect.top < window.innerHeight &&
      rect.bottom > 0;

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

  // kích hoạt ngay khi load
  window.dispatchEvent(new Event("scroll"));
});