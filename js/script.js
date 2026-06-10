// ===============================
// LOADING SCREEN
// ===============================

const progressFill = document.getElementById("progress-fill");
const loadingScreen = document.getElementById("loading-screen");
const mainContent = document.getElementById("main-content");
const loadingText = document.getElementById("loading-text");

const loadingMessages = [
    "Preparing birthday magic...",
    "Loading unlimited love...",
    "Installing Ella v22.0...",
    "Unlocking Birthday Queen Mode...",
    "Finalizing surprises..."
];

let messageIndex = 0;

const loadingInterval = setInterval(() => {
    if (messageIndex < loadingMessages.length) {
        loadingText.textContent = loadingMessages[messageIndex];
        messageIndex++;
    }
}, 600);

setTimeout(() => {
    progressFill.style.width = "100%";
}, 200);

setTimeout(() => {
    clearInterval(loadingInterval);

    loadingScreen.style.display = "none";
    mainContent.classList.remove("hidden");

    launchWelcomeConfetti();
}, 3500);

// ===============================
// CONFETTI
// ===============================

function launchWelcomeConfetti() {

    if (typeof confetti !== "function") return;

    confetti({
        particleCount: 150,
        spread: 100,
        origin: { y: 0.6 }
    });

    setTimeout(() => {
        confetti({
            particleCount: 120,
            spread: 120,
            origin: { x: 0.2, y: 0.5 }
        });
    }, 300);

    setTimeout(() => {
        confetti({
            particleCount: 120,
            spread: 120,
            origin: { x: 0.8, y: 0.5 }
        });
    }, 600);
}

// Launch Birthday Mode Button
const launchBtn = document.getElementById("launch-btn");

if (launchBtn) {
    launchBtn.addEventListener("click", () => {

        confetti({
            particleCount: 250,
            spread: 160,
            origin: { y: 0.5 }
        });

        window.scrollTo({
            top: document.body.scrollHeight * 0.2,
            behavior: "smooth"
        });

    });
}

// ===============================
// FALLING HEARTS
// ===============================

const heartsContainer = document.getElementById("hearts-container");

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    const hearts = ["❤️", "💖", "💕", "💗"];

    heart.innerHTML =
        hearts[Math.floor(Math.random() * hearts.length)];

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.fontSize =
        (16 + Math.random() * 20) + "px";

    heart.style.animationDuration =
        (5 + Math.random() * 6) + "s";

    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 12000);
}

setInterval(createHeart, 500);

// ===============================
// SECRET MESSAGE MODAL
// ===============================

const modal = document.getElementById("secret-modal");
const secretBtn = document.getElementById("secret-btn");
const closeBtn = document.getElementById("close-modal");

if (secretBtn) {

    secretBtn.addEventListener("click", () => {

        modal.style.display = "block";

        confetti({
            particleCount: 180,
            spread: 140,
            origin: { y: 0.5 }
        });

    });

}

if (closeBtn) {

    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

}

window.addEventListener("click", (event) => {

    if (event.target === modal) {
        modal.style.display = "none";
    }

});

// ===============================
// FLIP CARDS TOUCH SUPPORT
// ===============================

const cards = document.querySelectorAll(".reason-card");

cards.forEach(card => {

    card.addEventListener("click", () => {

        const inner = card.querySelector(".card-inner");

        if (inner.style.transform === "rotateY(180deg)") {
            inner.style.transform = "rotateY(0deg)";
        } else {
            inner.style.transform = "rotateY(180deg)";
        }

    });

});

// ===============================
// EXTRA SURPRISE CONFETTI
// ===============================

setTimeout(() => {

    if (typeof confetti !== "function") return;

    confetti({
        particleCount: 100,
        spread: 90,
        origin: { y: 0.8 }
    });

}, 7000);

// ===============================
// CONSOLE EASTER EGG
// ===============================

console.log(`
❤️ Happy Birthday Ella ❤️

You found the developer console.

Kenneth wanted you to know:

"Out of everyone in the world,
I'd still choose you."

- Joe
`);