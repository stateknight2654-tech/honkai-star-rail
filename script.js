function scrollToIntro() {
    const intro = document.getElementById("intro");
    if (intro) {
        intro.scrollIntoView({ behavior: "smooth" });
    }
}

// ===== SAO BĂNG INTRO =====
const meteorLayer = document.getElementById("meteor-layer");
const introSection = document.getElementById("intro");
let meteorInterval = null;

function createMeteor() {
    if (!meteorLayer) return;

    const meteor = document.createElement("div");
    meteor.className = "meteor";

    const width = meteorLayer.clientWidth || window.innerWidth;
    meteor.style.left = Math.random() * width + "px";
    meteor.style.animationDuration = (1.5 + Math.random() * 1.5) + "s";

    meteorLayer.appendChild(meteor);

    setTimeout(() => {
        meteor.remove();
    }, 3000);
}

window.addEventListener("scroll", () => {
    if (!introSection) return;

    const rect = introSection.getBoundingClientRect();
    const isInView =
        rect.top < window.innerHeight &&
        rect.bottom > 0;

    if (isInView) {
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

function optimizeImages() {
    const cards = document.querySelectorAll(".character-grid a");
    cards.forEach(card => {
        const img = card.querySelector("img");
        const nameEl = card.querySelector("span");
        if (img) {
            img.loading = "lazy";
            img.alt = nameEl ? nameEl.textContent : "Nhân vật";
            img.onerror = function () {
                if (this.src.indexOf("default.webp") === -1) {
                    this.src = "anh/characters/default.webp";
                }
            };
        }
    });
    const worldImgs = document.querySelectorAll(".world-grid img");
    worldImgs.forEach(img => {
        img.loading = "lazy";
        img.alt = "Bản đồ";
    });
}

document.addEventListener("DOMContentLoaded", optimizeImages);
