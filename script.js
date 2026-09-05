const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});
const track = document.querySelector('.gallery-track');
track.style.animationDuration = "25s";

function toggleSkill(element) {
    element.classList.toggle('active');
    const btn = element.querySelector('.toggle-btn');
    if (element.classList.contains('active')) {
        btn.textContent = '×';
        btn.style.backgroundColor = '#ff4d4d';
    } else {
        btn.textContent = '+';
        btn.style.backgroundColor = '#39FF14';
    }
}

const observerOptions = { threshold: 0.2 };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('appear');
        else entry.target.classList.remove('appear');
    });
}, observerOptions);
document.querySelectorAll('.skill-card').forEach(card => observer.observe(card));

const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('appear');
        else entry.target.classList.remove('appear');
    });
}, { threshold: 0.1 });
document.querySelectorAll('.skill-card, .animate-on-scroll, .from-left, .from-right').forEach(el => scrollObserver.observe(el));

document.addEventListener("DOMContentLoaded", () => {
    const card = document.querySelector('.cta-card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) card.classList.add('visible');
            else card.classList.remove('visible');
        });
    }, { threshold: 0.2 });
    observer.observe(document.querySelector('.footer-container'));
});        } else {
            // Removes the class when you scroll AWAY
            // This allows it to animate again next time
            entry.target.classList.remove('appear');
        }
    });
}, observerOptions);

document.querySelectorAll('.skill-card').forEach(card => {
    observer.observe(card);
});

const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('appear');
        } else {
            entry.target.classList.remove('appear'); // Resets so it animates again
        }
    });
}, { threshold: 0.1 });

// Add the new classes to the list of things to observe
document.querySelectorAll('.skill-card, .animate-on-scroll, .from-left, .from-right').forEach(el => {
    scrollObserver.observe(el);
});

document.addEventListener("DOMContentLoaded", () => {
    const card = document.querySelector('.cta-card');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the class that triggers the CSS transition
                card.classList.add('visible');
            } else {
                card.classList.remove('visible')
            }
        });
    }, {
        threshold: 0.2 // Trigger when 20% of the footer is visible
    });

    observer.observe(document.querySelector('.footer-container'));
});
