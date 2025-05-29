let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-header');
let logoSpan = document.querySelectorAll('.logo');

window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        logoSpan.forEach((span, idx) => {
            setTimeout(() => {
                span.classList.add('active');
            }, (idx + 1) * 400);
        });
    });

    setTimeout(() => {
        logoSpan.forEach((span, idx) => {
            setTimeout(() => {
                span.classList.remove('active');
                span.classList.add('fade');
                console.log(`Added fade to span ${idx}`); // Debugging
            }, (idx + 1) * 100);
        });
    }, 2500); // Adjusted timing
    setTimeout(() => {
        intro.style.top = '-100vh';
    }, 2300); // Adjusted timing
});

document.addEventListener("DOMContentLoaded", () => {
    const theme = localStorage.getItem("theme");

    if (theme === "dark") {
        document.body.classList.add("dark-theme");
    } else {
        document.body.classList.add("light-theme");
    }
});

console.log("Start waiting...");