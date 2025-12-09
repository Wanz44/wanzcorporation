// Menu mobile
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuBtn.innerHTML = navLinks.classList.contains('active')
        ? '<i class="fas fa-times"></i>'
        : '<i class="fas fa-bars"></i>';
});

// Fermer le menu en cliquant sur un lien
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

// Filtrage des services
const categoryBtns = document.querySelectorAll('.category-btn');
const serviceCards = document.querySelectorAll('.service-card');

categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Retirer la classe active de tous les boutons
        categoryBtns.forEach(b => b.classList.remove('active'));
        // Ajouter la classe active au bouton cliqué
        btn.classList.add('active');

        const category = btn.getAttribute('data-category');

        // Filtrer les services
        serviceCards.forEach(card => {
            if (category === 'all' || card.getAttribute('data-category') === category) {
                card.style.display = 'flex';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 10);
            } else {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    });
});

// Animation au défilement
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observer les éléments
document.querySelectorAll('.service-card, .offer-card, .template-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Simulation d'envoi de formulaire
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Récupération des données
    const name = document.getElementById('name').value;
    const service = document.getElementById('service').value;

    // Message de confirmation
    const serviceNames = {
        'website': 'Création de site web',
        'mobile': 'Application mobile',
        'desktop': 'Logiciel desktop',
        'system': 'Système de gestion',
        'design': 'Web Design / UI/UX',
        'template': 'Achat de template',
        'hosting': 'Hébergement & domaine',
        'other': 'Autre projet'
    };

    const serviceName = serviceNames[service] || 'Votre projet';

    alert(`Merci ${name} ! Votre demande pour "${serviceName}" a été envoyée. Nous vous contacterons dans les 24 heures.`);
    contactForm.reset();
});

// Smooth scroll pour les ancres
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 100,
                behavior: 'smooth'
            });
        }
    });
});

// Effet de particules flottantes
function createFloatingElements() {
    const heroSection = document.querySelector('.hero-bg-elements');
    for (let i = 0; i < 8; i++) {
        const element = document.createElement('div');
        element.classList.add('floating-element');
        element.style.width = `${Math.random() * 15 + 5}px`;
        element.style.height = element.style.width;
        element.style.left = `${Math.random() * 100}%`;
        element.style.top = `${Math.random() * 100}%`;
        element.style.background = Math.random() > 0.5 ? 'var(--accent-blue)' : 'var(--accent-purple)';
        element.style.opacity = `${Math.random() * 0.5 + 0.2}`;
        element.style.animationDuration = `${Math.random() * 20 + 10}s`;
        element.style.animationDelay = `${Math.random() * 5}s`;
        heroSection.appendChild(element);
    }
}

createFloatingElements();