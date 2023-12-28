// Dark Mode Toggle
let darkmode = document.querySelector('#darkmode');
darkmode.onclick = () => {
    if (darkmode.classList.contains("bx-moon")) {
        darkmode.classList.replace("bx-moon", "bx-sun");
        document.body.classList.add("color");
    } else {
        darkmode.classList.replace("bx-sun", "bx-moon");
        document.body.classList.remove("color");
    }
};

// Mobile Menu Toggle
let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

// Close Menu on Scroll
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
};

// ScrollReveal Animation
const sr = ScrollReveal({
    distance: '70px',
    duration: 2700,
    reset: true
});

sr.reveal('.hero-text', { delay: 200, origin: 'bottom' });
// ScrollReveal Animation for About Section
sr.reveal('.about-section', { delay: 200, origin: 'bottom' });

// ScrollReveal Animation for Smartphone Section
sr.reveal('.smartphone-section', { delay: 200, origin: 'bottom' });

// ScrollReveal Animation for Store Section
sr.reveal('.store-section', { delay: 200, origin: 'bottom' });

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        const headerHeight = document.querySelector('header').offsetHeight; // Get header height

        window.scrollTo({
            top: target.offsetTop - headerHeight, // Consider header height while scrolling
            behavior: 'smooth'
        });
    });
});

