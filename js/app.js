// ===== SHARED NAVIGATION & UTILITIES =====

document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    initScrollReveal();
    initParticles();
});


function initNavbar() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navbar = document.querySelector('.navbar');

  
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('open');
            document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
        });

       
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('open');
                document.body.style.overflow = '';
            });
        });
    }


    if (navbar) {
        window.addEventListener('scroll', () => {
            navbar.classList.toggle('scrolled', window.scrollY > 50);
        });
    }

  
    highlightActiveNav();
}

function highlightActiveNav() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        } else if (currentPage === 'story.html' && href === 'stories.html') {
            link.classList.add('active');
        }
    });
}

function initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal, .reveal-children');

    if (!reveals.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    reveals.forEach(el => observer.observe(el));
}

function initParticles() {
    const container = document.querySelector('.particles');
    if (!container) return;

    const count = 30;

    for (let i = 0; i < count; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 8 + 's';
        particle.style.animationDuration = (6 + Math.random() * 6) + 's';
        particle.style.width = particle.style.height = (1 + Math.random() * 2) + 'px';
        container.appendChild(particle);
    }
}
