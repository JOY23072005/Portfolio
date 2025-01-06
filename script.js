document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active"); // Toggles the `active` class
    });
});

document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll("nav a");
    navLinks.classList.toggle("active");
    if (navLinks.length > 0) {
        navLinks.forEach(link => {
            link.addEventListener("click", (event) => {
                event.preventDefault();
                const targetId = link.getAttribute("href").substring(1);
                const targetSection = document.getElementById(targetId);

                if (targetSection) {
                    window.scrollTo({
                        top: targetSection.offsetTop,
                        behavior: "smooth"
                    });
                }
            });
        });
    }

    // Toggle navigation menu for mobile
    const navToggle = document.querySelector(".nav-toggle");
    const navMenu = document.querySelector("nav ul");

    if (navToggle && navMenu) {
        navToggle.addEventListener("click", () => {
            navMenu.classList.toggle("open");
        });
    }

    // Dynamic typing effect in the hero section
    const typedText = document.querySelector(".typed-text");
    if (typedText) {
        const textArray = ["Web Developer", "AI Enthusiast", "Competitive Programmer"];
        let textIndex = 0;
        let charIndex = 0;

        function typeText() {
            if (charIndex < textArray[textIndex].length) {
                typedText.textContent += textArray[textIndex].charAt(charIndex);
                charIndex++;
                setTimeout(typeText, 150);
            } else {
                setTimeout(eraseText, 1000);
            }
        }

        function eraseText() {
            if (charIndex > 0) {
                typedText.textContent = textArray[textIndex].substring(0, charIndex - 1);
                charIndex--;
                setTimeout(eraseText, 100);
            } else {
                textIndex = (textIndex + 1) % textArray.length;
                setTimeout(typeText, 500);
            }
        }

        typeText();
    }
});
