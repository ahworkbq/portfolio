/* ================================
MOBILE MENU
================================ */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
navLinks.classList.toggle("active");

if (navLinks.classList.contains("active")) {
    menuBtn.textContent = "✕";
    menuBtn.setAttribute("aria-label", "Close menu");
} else {
    menuBtn.textContent = "☰";
    menuBtn.setAttribute("aria-label", "Open menu");
}

});

/* Close mobile menu when a link is clicked */

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach((item) => {

item.addEventListener("click", () => {

    navLinks.classList.remove("active");

    menuBtn.textContent = "☰";

    menuBtn.setAttribute("aria-label", "Open menu");

});

});

/* ================================
DARK / LIGHT MODE
================================ */

const themeBtn = document.getElementById("themeBtn");

/* Check saved theme */

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {

document.body.classList.add("dark");

themeBtn.textContent = "☀️";

} else {

themeBtn.textContent = "🌙";

}

/* Toggle theme */

themeBtn.addEventListener("click", () => {

document.body.classList.toggle("dark");


if (document.body.classList.contains("dark")) {

    localStorage.setItem("theme", "dark");

    themeBtn.textContent = "☀️";

    themeBtn.setAttribute(
        "aria-label",
        "Switch to light mode"
    );

} else {

    localStorage.setItem("theme", "light");

    themeBtn.textContent = "🌙";

    themeBtn.setAttribute(
        "aria-label",
        "Switch to dark mode"
    );

}

});

/* ================================
CURRENT YEAR
================================ */

const yearElement = document.getElementById("year");

if (yearElement) {
yearElement.textContent = new Date().getFullYear();
}

/* ================================
SCROLL ANIMATION
================================ */

const animatedElements = document.querySelectorAll(
".skill-card, .project-card, .timeline-item, .about-card"
);

const observer = new IntersectionObserver(
(entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

            entry.target.style.opacity = "1";

            entry.target.style.transform =
                "translateY(0)";

            observer.unobserve(entry.target);

        }

    });

},
{
    threshold: 0.1
}

);

/* Prepare elements for animation */

animatedElements.forEach((element) => {

element.style.opacity = "0";

element.style.transform = "translateY(30px)";

element.style.transition =
    "opacity 0.6s ease, transform 0.6s ease";

observer.observe(element);

});

/* ================================
ACTIVE NAVIGATION
================================ */

const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {

let currentSection = "";

sections.forEach((section) => {

    const sectionTop = section.offsetTop - 120;

    const sectionHeight = section.offsetHeight;

    if (
        window.scrollY >= sectionTop &&
        window.scrollY < sectionTop + sectionHeight
    ) {
        currentSection = section.getAttribute("id");
    }

});


navItems.forEach((link) => {

    link.classList.remove("active");

    if (
        link.getAttribute("href") ===
        `#${currentSection}`
    ) {
        link.classList.add("active");
    }

});

});

/* ================================
SCROLL TO TOP
================================ */

const logo = document.querySelector(".logo");

if (logo) {

logo.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

}