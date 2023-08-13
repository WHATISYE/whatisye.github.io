// AnimeJS h1 animation script
const heading = document.querySelector("h1");

const text = heading.textContent;

function splitTextIntoLetters() {
    const letters = text.split("").map((letter) => {
        const span = document.createElement("span");
        span.textContent = letter;
        return span;
    });

    heading.textContent = "";
    letters.forEach((letter) => heading.appendChild(letter));
}

function animateLetters() {
    anime({
        targets: "h1 span",
        top: [200, 0],
        easing: "easeOutExpo",
        duration: 1500,
        delay: anime.stagger(50, { start: 6100 })
    });
}

splitTextIntoLetters();
animateLetters();

// loader script
function animateNumbers(steps, duration) {
    const target = 100;
    const increment = target / (duration / steps);

    let current = 0;
    let step = 0;
    let started = false;

    function updateCounter() {
        if (current >= target) {
            document.querySelector('.counter span').innerText = target;
        } else {
            if (!started) {
                started = true;
                document.querySelector('.counter span').innerText = 0;
                setTimeout(updateCounter, steps * 7);
            } else {
                current += increment;
                if (current >= step) {
                    step = getStepValue(step);
                    document.querySelector('.counter span').innerText = Math.min(target, step);
                }
                setTimeout(updateCounter, steps);
            }
        }
    }

    function getStepValue(currentStep) {
        if (currentStep < 7) return 7;
        if (currentStep < 10) return 10;
        if (currentStep < 18) return 18;
        if (currentStep < 25) return 25;
        if (currentStep < 37) return 37;
        if (currentStep < 50) return 50;
        if (currentStep < 64) return 64;
        if (currentStep < 75) return 75;
        if (currentStep < 82) return 82;
        if (currentStep < 90) return 90;
        if (currentStep < 91) return 91;
        if (currentStep < 95) return 95;
        if (currentStep < 97) return 97;
        if (currentStep < 98) return 98;
        if (currentStep < 99) return 99;
        return 100;
    }
    updateCounter();
}

animateNumbers(100, 4000);