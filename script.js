// --- Hamburger menu ---
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });
}

// --- Gallery scroll speed ---
const track = document.querySelector('.gallery-track');
if (track) {
    track.style.animationDuration = "25s";
}

// --- Skill card expand/collapse ---
function toggleSkill(element) {
    element.classList.toggle('active');

    const btn = element.querySelector('.toggle-btn');
    if (!btn) return;

    if (element.classList.contains('active')) {
        btn.textContent = '×';
        btn.style.backgroundColor = '#ff4d4d';
    } else {
        btn.textContent = '+';
        btn.style.backgroundColor = '#39FF14';
    }
}

// --- Reveal skill cards on scroll ---
const observerOptions = { threshold: 0.2 };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('appear');
        } else {
            entry.target.classList.remove('appear');
        }
    });
}, observerOptions);

document.querySelectorAll('.skill-card').forEach(card => observer.observe(card));

// --- Reveal general scroll-animated elements ---
const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('appear');
        } else {
            entry.target.classList.remove('appear');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.skill-card, .animate-on-scroll, .from-left, .from-right')
    .forEach(el => scrollObserver.observe(el));

// --- Reveal footer CTA card ---
document.addEventListener("DOMContentLoaded", () => {
    const card = document.querySelector('.cta-card');
    const footerContainer = document.querySelector('.footer-container');

    if (card && footerContainer) {
        const ctaObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    card.classList.add('visible');
                } else {
                    card.classList.remove('visible');
                }
            });
        }, { threshold: 0.2 });

        ctaObserver.observe(footerContainer);
    }
});
    
