const typingText = document.getElementById("typingText");
const hookButton = document.getElementById("hookButton");
const sectionHook = document.getElementById("sectionHook");
const sectionLetter = document.getElementById("sectionLetter");
const sectionGame = document.getElementById("sectionGame");
const sectionHappy = document.getElementById("sectionHappy");
const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");
const continueButton = document.getElementById("continueButton");
  const closeButton = document.getElementById("closeButton");
const modalBackdrop = document.getElementById("modalBackdrop");
const modalButton = document.getElementById("modalButton");
const confettiLayer = document.getElementById("confettiLayer");
const timerIds = {
  days: document.getElementById("days"),
  hours: document.getElementById("hours"),
  minutes: document.getElementById("minutes"),
  seconds: document.getElementById("seconds"),
};
let yesScale = 1;

const messageLines = [
  "hai sayang... maaf ya udah bikin kamu kesel kemarin 🥺",
  "aku cerita lewat sini supaya kamu tahu kalau aku benar-bener nyesel sayang.",
  "kamu penting banget buat aku sayaang, jangan tinggalin aku yaa sayang.",
];

const fullTyping = messageLines.join(" ");
let typingIndex = 0;

function startTyping() {
  if (typingIndex < fullTyping.length) {
    typingText.textContent += fullTyping.charAt(typingIndex);
    typingIndex += 1;
    const speed = fullTyping.charAt(typingIndex - 1) === " " ? 40 : 90;
    setTimeout(startTyping, speed);
  }
}

startTyping();

function showSection(nextSection) {
  sectionHook.classList.remove("active");
  sectionLetter.classList.remove("active");
  sectionGame.classList.remove("active");
  sectionHappy.classList.remove("active");
  nextSection.classList.add("active");
  nextSection.scrollIntoView({ behavior: "smooth" });
}

hookButton.addEventListener("click", () => {
  showSection(sectionLetter);
});

continueButton.addEventListener("click", () => {
  showSection(sectionGame);
});

// Hitung momen jadian mulai 2 Januari sampai sekarang
const startedAt = new Date("2026-01-02T00:00:00");

function updateTimer() {
  const now = new Date();
  const diff = now - startedAt;
  const seconds = Math.floor(diff / 1000);
  const days = Math.floor(seconds / 86400);
  const hours = Math.floor((seconds % 86400) / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  timerIds.days.textContent = days;
  timerIds.hours.textContent = String(hours).padStart(2, "0");
  timerIds.minutes.textContent = String(minutes).padStart(2, "0");
  timerIds.seconds.textContent = String(remainingSeconds).padStart(2, "0");
}

updateTimer();
setInterval(updateTimer, 1000);

function moveNoButton() {
  const container = noButton.parentElement;
  const rect = container.getBoundingClientRect();
  const btnRect = noButton.getBoundingClientRect();
  const maxX = rect.width - btnRect.width - 12;
  const maxY = rect.height - btnRect.height - 12;
  const x = Math.floor(Math.random() * Math.max(maxX, 1));
  const y = Math.floor(Math.random() * Math.max(maxY, 1));
  noButton.style.position = "absolute";
  noButton.style.left = `${x}px`;
  noButton.style.top = `${y}px`;

  yesScale = Math.min(1.9, yesScale + 0.12);
  yesButton.style.transform = `scale(${yesScale})`;
}

function showConfetti() {
  for (let i = 0; i < 22; i += 1) {
    const heart = document.createElement("span");
    heart.className = "confetti-heart";
    heart.textContent = "💖";
    const startX = Math.random() * window.innerWidth;
    const startY = window.innerHeight + 20;
    const rotate = Math.random() * 90 - 45;
    heart.style.left = `${startX}px`;
    heart.style.top = `${startY}px`;
    heart.style.transform = `translateY(0) rotate(${rotate}deg)`;
    heart.style.opacity = "0";
    heart.style.animationDuration = `${1.6 + Math.random() * 0.7}s`;
    confettiLayer.appendChild(heart);
  }
  setTimeout(() => {
    confettiLayer.innerHTML = "";
  }, 2200);
}

noButton.addEventListener("mouseenter", moveNoButton);
noButton.addEventListener(
  "touchstart",
  (event) => {
    event.preventDefault();
    moveNoButton();
  },
  { passive: false },
);
noButton.addEventListener("click", (event) => {
  event.preventDefault();
  moveNoButton();
});

yesButton.addEventListener("click", () => {
  showConfetti();
  showSection(sectionHappy);
  modalBackdrop.classList.add("show");
});

closeButton.addEventListener("click", () => {
  modalBackdrop.classList.remove("show");
});

modalButton.addEventListener("click", () => {
  modalBackdrop.classList.remove("show");
});

modalBackdrop.addEventListener("click", (event) => {
  if (event.target === modalBackdrop) {
    modalBackdrop.classList.remove("show");
  }
});
