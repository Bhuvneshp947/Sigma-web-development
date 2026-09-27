const revealItems = document.querySelectorAll('.card');

const appearOnScroll = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.15
});

revealItems.forEach((item) => appearOnScroll.observe(item));

const parallaxLayers = document.querySelectorAll('.parallax-layer');
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    parallaxLayers.forEach((layer, index) => {
        const speed = (index + 1) * 0.16;
        layer.style.transform = `translateY(${scrollY * speed}px)`;
    });
});

const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const isDark = document.body.classList.contains('dark');
    themeToggle.textContent = isDark ? '🌙' : '☀️';
});

const scrollButton = document.getElementById('scroll-button');
scrollButton.addEventListener('click', () => {
    document.getElementById('learn').scrollIntoView({ behavior: 'smooth' });
});
