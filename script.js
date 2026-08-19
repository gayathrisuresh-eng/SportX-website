// SPORTX JavaScript

document.addEventListener("DOMContentLoaded", () => {

    console.log("SPORTX loaded successfully!");

});

const stats = document.querySelectorAll(".stat-number");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const number = entry.target;
            const target = Number(number.dataset.target);

            // Reset to 0 every time it comes into view
            number.textContent = "0";

            let current = 0;

            const update = () => {

                current += Math.ceil(target / 60);

                if (current >= target) {
                    current = target;
                }

                number.textContent = current;

                if (current < target) {
                    requestAnimationFrame(update);
                }
            };

            update();

        }

    });

}, {
    threshold: 0.5
});

stats.forEach(stat => observer.observe(stat));
stats.forEach(stat => observer.observe(stat));

/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements = document.querySelectorAll(
    ".sports-section, .live-matches, .featured-events, .latest-news, .stats-section, .sportx-cta, .sportx-footer"
);

revealElements.forEach(element => {
    element.classList.add("reveal");
});

const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

            } else {

                // Remove when leaving viewport
                entry.target.classList.remove("active");

            }

        });

    },
    {
        threshold: 0.15
    }
);

revealElements.forEach(element => {
    revealObserver.observe(element);
});