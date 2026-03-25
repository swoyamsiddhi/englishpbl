// ===== SHARED NAVIGATION & UTILITIES =====

document.addEventListener('DOMContentLoaded', () => {
    initPageTransitions();
    initNavbar();
    initScrollReveal();
    initParticles();
    initBackToTop();
    initSectionElevations();
    initFeaturedStory();
});

function initFeaturedStory() {
    if (!window.STORIES || !STORIES.length) return;

    const featuredCard = document.querySelector('.featured-story-card');
    if (!featuredCard) return;

    const storageKey = 'featuredStoryIndex';
    let index = Number(localStorage.getItem(storageKey));

    if (Number.isNaN(index) || index < 0 || index >= STORIES.length) {
        index = Math.floor(Math.random() * STORIES.length);
    }

    const story = STORIES[index];
    const nextIndex = (index + 1) % STORIES.length;
    localStorage.setItem(storageKey, String(nextIndex));

    const titleNode = featuredCard.querySelector('h3');
    const descNode = featuredCard.querySelector('.featured-story-card p');
    const button = featuredCard.querySelector('a.btn-primary');

    if (titleNode) {
        titleNode.textContent = `"${story.title}" — ${story.summary.split('. ')[0]}`;
    }
    if (descNode) {
        descNode.textContent = story.summary;
    }
    if (button) {
        button.href = `story.html?id=${story.id}`;
        button.textContent = 'Read Featured Story';
    }
}


function initPageTransitions() {
    document.body.classList.add('page-transition');
    requestAnimationFrame(() => {
        document.body.classList.add('page-transition-visible');
    });

    document.querySelectorAll('a[href]').forEach(anchor => {
        const href = anchor.getAttribute('href');
        if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('javascript:')) return;
        if (anchor.target === '_blank' || anchor.hasAttribute('download')) return;

        anchor.addEventListener('click', (e) => {
            const isExternal = /^(https?:\/\/|\/\/)/.test(href) && !href.includes(window.location.host);
            if (isExternal) return;
            e.preventDefault();
            document.body.classList.remove('page-transition-visible');
            window.setTimeout(() => {
                window.location.href = href;
            }, 220);
        });
    });
}


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

function initBackToTop() {
    const btn = document.createElement('button');
    btn.className = 'back-to-top';
    btn.type = 'button';
    btn.ariaLabel = 'Back to top';
    btn.innerHTML = '↑';
    document.body.appendChild(btn);

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('scroll', () => {
        btn.classList.toggle('visible', window.scrollY > 350);
    });
}

function initSectionElevations() {
    const sections = document.querySelectorAll('.section-header, .story-card');
    sections.forEach((section, idx) => {
        section.style.transition = 'transform 0.35s ease, box-shadow 0.35s ease';
        section.addEventListener('mouseenter', () => {
            section.style.transform = 'translateY(-3px)';
            section.style.boxShadow = '0 16px 35px rgba(0,0,0,0.28)';
        });
        section.addEventListener('mouseleave', () => {
            section.style.transform = 'translateY(0)';
            section.style.boxShadow = '';
        });
    });
}
