// Script principal pour Mini-Airbnb

// Initialisation de la carte Leaflet (bonus)
function initMap() {
    if (typeof window.logementData !== 'undefined' && document.getElementById('map')) {
        const { lat, lng, title, ville } = window.logementData;
        
        // Créer la carte
        const map = L.map('map').setView([lat, lng], 13);
        
        // Ajouter les tuiles OpenStreetMap
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
        }).addTo(map);
        
        // Créer un marqueur personnalisé
        const customIcon = L.divIcon({
            html: '<div style="background-color: #ff385c; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; border: 3px solid white; box-shadow: 0 2px 10px rgba(0,0,0,0.3);"><i class="fas fa-home" style="font-size: 12px;"></i></div>',
            className: 'custom-marker',
            iconSize: [30, 30],
            iconAnchor: [15, 15]
        });
        
        // Ajouter le marqueur
        L.marker([lat, lng], { icon: customIcon })
            .addTo(map)
            .bindPopup(`<strong>${title}</strong><br>${ville}`)
            .openPopup();
    }
}

// Fonction de réservation
function reserverLogement() {
    const checkin = document.getElementById('checkin')?.value;
    const checkout = document.getElementById('checkout')?.value;
    const guests = document.getElementById('guests')?.value;
    
    if (!checkin || !checkout) {
        alert('Veuillez sélectionner les dates d\'arrivée et de départ.');
        return;
    }
    
    const checkinDate = new Date(checkin);
    const checkoutDate = new Date(checkout);
    const today = new Date();
    
    if (checkinDate < today) {
        alert('La date d\'arrivée ne peut pas être dans le passé.');
        return;
    }
    
    if (checkoutDate <= checkinDate) {
        alert('La date de départ doit être après la date d\'arrivée.');
        return;
    }
    
    const nights = Math.ceil((checkoutDate - checkinDate) / (1000 * 60 * 60 * 24));
    const pricePerNight = parseInt(document.querySelector('.booking-price .price-amount').textContent);
    const totalPrice = nights * pricePerNight;
    
    const message = `Récapitulatif de votre réservation :
    
📅 Arrivée : ${formatDate(checkinDate)}
📅 Départ : ${formatDate(checkoutDate)}
👥 Voyageurs : ${guests}
🌙 Nombre de nuits : ${nights}
💰 Prix total : ${totalPrice}€

Merci pour votre réservation ! Un email de confirmation vous sera envoyé.`;
    
    alert(message);
}

// Fonction pour formater les dates
function formatDate(date) {
    return date.toLocaleDateString('fr-FR', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

// Fonction pour définir la date minimum à aujourd'hui
function setMinDate() {
    const today = new Date().toISOString().split('T')[0];
    const checkinInput = document.getElementById('checkin');
    const checkoutInput = document.getElementById('checkout');
    
    if (checkinInput) {
        checkinInput.min = today;
        checkinInput.addEventListener('change', function() {
            if (checkoutInput) {
                checkoutInput.min = this.value;
                if (checkoutInput.value <= this.value) {
                    checkoutInput.value = '';
                }
            }
        });
    }
}

// Animation d'apparition des cartes
function animateCards() {
    const cards = document.querySelectorAll('.logement-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
            }
        });
    }, {
        threshold: 0.1
    });
    
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

// Fonction pour gérer le scroll smooth
function smoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Fonction pour gérer le header sticky
function stickyHeader() {
    const header = document.querySelector('.header');
    const hero = document.querySelector('.hero-section');
    
    if (header && hero) {
        window.addEventListener('scroll', () => {
            const heroHeight = hero.offsetHeight;
            if (window.scrollY > heroHeight - 100) {
                header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.15)';
            } else {
                header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
            }
        });
    }
}

// Fonction pour gérer le lazy loading des images
function lazyLoadImages() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.classList.add('fade-in');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
}

// Fonction pour ajouter des interactions aux cartes
function addCardInteractions() {
    const cards = document.querySelectorAll('.logement-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(-5px)';
        });
    });
}

// Fonction pour gérer la recherche (bonus pour extension future)
function initSearch() {
    const searchInput = document.querySelector('#search-input');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const cards = document.querySelectorAll('.logement-card');
            
            cards.forEach(card => {
                const title = card.querySelector('.card-title').textContent.toLowerCase();
                const location = card.querySelector('.card-location span').textContent.toLowerCase();
                
                if (title.includes(searchTerm) || location.includes(searchTerm)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }
}

// Fonction d'initialisation générale
function init() {
    // Initialiser la carte si on est sur la page de détail
    if (document.getElementById('map')) {
        // Attendre que Leaflet soit chargé
        if (typeof L !== 'undefined') {
            initMap();
        } else {
            // Réessayer après un court délai si Leaflet n'est pas encore chargé
            setTimeout(initMap, 500);
        }
    }
    
    // Définir la date minimum pour les inputs de date
    setMinDate();
    
    // Animer les cartes
    animateCards();
    
    // Activer le scroll smooth
    smoothScroll();
    
    // Gérer le header sticky
    stickyHeader();
    
    // Lazy loading des images
    lazyLoadImages();
    
    // Ajouter les interactions aux cartes
    addCardInteractions();
    
    // Initialiser la recherche
    initSearch();
}

// Attendre que le DOM soit chargé
document.addEventListener('DOMContentLoaded', init);

// Gérer le redimensionnement de la fenêtre
window.addEventListener('resize', function() {
    // Réajuster la carte si elle existe
    if (typeof map !== 'undefined') {
        setTimeout(() => {
            map.invalidateSize();
        }, 100);
    }
});

// Gestion des erreurs globales
window.addEventListener('error', function(e) {
    console.error('Erreur détectée:', e.error);
});

// Export des fonctions pour usage global
window.reserverLogement = reserverLogement;