const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});
const track = document.querySelector('.gallery-track');

// Optional: Change speed based on user preference or screen size
track.style.animationDuration = "25s";

function toggleSkill(element) {
    // Toggle the 'active' class for styling/expansion
    element.classList.toggle('active');
    
    const btn = element.querySelector('.toggle-btn');
    
    // Check if currently expanded
    if (element.classList.contains('active')) {
        btn.textContent = '×';
        btn.style.backgroundColor = '#ff4d4d'; // Reddish color for X
    } else {
        btn.textContent = '+';
        btn.style.backgroundColor = '#39FF14'; // Back to green
    }
}

const observerOptions = {
    threshold: 0.2 // Triggers when 10% of the box is visible
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Adds the class when you scroll TO it
            entry.target.classList.add('appear');
        } else {
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
