const anniversaryDate = "2026-04-15";

function updateCounter() {
    const start = new Date(anniversaryDate + "T00:00:00");
    const now = new Date();

    const ids = ["months", "days", "hours", "minutes", "seconds"];

    if (Number.isNaN(start.getTime()) || start > now) {
        ids.forEach(id => {
            document.getElementById(id).textContent = "0";
        });
        return;
    }

    let months =
        (now.getFullYear() - start.getFullYear()) * 12 +
        now.getMonth() - start.getMonth();

    const monthAnniversary = new Date(start);
    monthAnniversary.setMonth(start.getMonth() + months);

    if (monthAnniversary > now) {
        months--;
    }

    const elapsed = now.getTime() - start.getTime();
    const totalSeconds = Math.floor(elapsed / 1000);
    const totalDays = Math.floor(totalSeconds / 86400);

    document.getElementById("months").textContent = months;
    document.getElementById("days").textContent = totalDays;
    document.getElementById("hours").textContent =
        Math.floor(totalSeconds / 3600) % 24;
    document.getElementById("minutes").textContent =
        Math.floor(totalSeconds / 60) % 60;
    document.getElementById("seconds").textContent =
        totalSeconds % 60;
}

updateCounter();
setInterval(updateCounter, 1000);

const letterBtn = document.getElementById("letterBtn");
const loveLetter = document.getElementById("loveLetter");

letterBtn.addEventListener("click", function () {
    loveLetter.classList.toggle("hidden");

    if (loveLetter.classList.contains("hidden")) {
        letterBtn.textContent = "Open My Letter 💌";
    } else {
        letterBtn.textContent = "Close My Letter 💗";

        loveLetter.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

        createHearts(8);
    }
});

const surpriseBtn = document.getElementById("surpriseBtn");
const surpriseMessage = document.getElementById("surpriseMessage");

surpriseBtn.addEventListener("click", function () {
    surpriseMessage.classList.toggle("hidden");

    if (surpriseMessage.classList.contains("hidden")) {
        surpriseBtn.textContent = "Click Me, Baby! 🎁";
    } else {
        surpriseBtn.textContent = "I Love You, Baby! ❤️";

        surpriseMessage.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

        createHearts(25);
    }
});

function createHearts(amount = 1) {
    const container = document.getElementById("hearts");

    for (let i = 0; i < amount; i++) {
        const heart = document.createElement("span");

        heart.className = "heart";
        heart.textContent = Math.random() > 0.5 ? "♥" : "♡";

        heart.style.left = Math.random() * 100 + "%";
        heart.style.fontSize = (14 + Math.random() * 22) + "px";
        heart.style.animationDuration = (3 + Math.random() * 3) + "s";

        container.appendChild(heart);

        heart.addEventListener("animationend", function () {
            heart.remove();
        });
    }
}

setInterval(function () {
    createHearts(1);
}, 1800);
