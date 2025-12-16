// Mobile Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
}

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });

            // Close mobile menu if open
            navLinks.classList.remove('active');
            navToggle.classList.remove('active');
        }
    });
});

// Header Background Change on Scroll
const header = document.querySelector('.header');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Add background when scrolled
    if (scrollTop > 100) {
        header.style.background = 'rgba(102, 126, 234, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
        header.style.backdropFilter = 'none';
    }

    lastScrollTop = scrollTop;
});

// Intersection Observer for Animation
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

// Observe all sections for animation
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
});

// Company Card Hover Effects
document.querySelectorAll('.company-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) scale(1.02)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// Company Filtering and Search Functionality
function initCompanyFiltering() {
    const filterTabs = document.querySelectorAll('.filter-tab');
    const searchInput = document.getElementById('companySearch');
    const companyCards = document.querySelectorAll('.company-card');
    const visibleCount = document.getElementById('visibleCompanies');
    const totalCount = document.getElementById('totalCompanies');

    let currentFilter = 'all';
    let currentSearchTerm = '';

    // Update company count display
    function updateCompanyCount() {
        const visibleCards = Array.from(companyCards).filter(card =>
            card.style.display !== 'none'
        );
        if (visibleCount) visibleCount.textContent = visibleCards.length;
        if (totalCount) totalCount.textContent = companyCards.length;
    }

    // Filter companies by category
    function filterCompanies() {
        companyCards.forEach(card => {
            const categories = card.dataset.categories ? card.dataset.categories.split(',') : [];
            const companyName = card.querySelector('h3').textContent.toLowerCase();
            const description = card.querySelector('.company-description').textContent.toLowerCase();
            const specialties = Array.from(card.querySelectorAll('.specialty')).map(s => s.textContent.toLowerCase());

            // Check category filter
            const categoryMatch = currentFilter === 'all' || categories.includes(currentFilter);

            // Check search filter
            const searchMatch = currentSearchTerm === '' ||
                               companyName.includes(currentSearchTerm) ||
                               description.includes(currentSearchTerm) ||
                               specialties.some(specialty => specialty.includes(currentSearchTerm));

            if (categoryMatch && searchMatch) {
                card.style.display = 'block';
                card.style.animation = 'fadeInUp 0.3s ease forwards';
            } else {
                card.style.display = 'none';
            }
        });

        updateCompanyCount();
    }

    // Handle filter tab clicks
    filterTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs
            filterTabs.forEach(t => t.classList.remove('active'));

            // Add active class to clicked tab
            tab.classList.add('active');

            // Update current filter
            currentFilter = tab.dataset.category;

            // Apply filters
            filterCompanies();
        });
    });

    // Handle search input
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            currentSearchTerm = e.target.value.toLowerCase();
            filterCompanies();
        });
    }

    // Initialize count
    updateCompanyCount();
}

// Initialize filtering functionality
document.addEventListener('DOMContentLoaded', initCompanyFiltering);

// Lazy Loading for Images (if added later)
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');

    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// Performance: Debounced Resize Handler
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

const handleResize = debounce(() => {
    // Handle any resize-specific logic here
    console.log('Window resized');
}, 250);

window.addEventListener('resize', handleResize);

// Add loading animation
document.addEventListener('DOMContentLoaded', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.3s ease';

    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Error handling for missing elements
function safelyAddEventListener(selector, event, handler) {
    const element = document.querySelector(selector);
    if (element) {
        element.addEventListener(event, handler);
    }
}

// Keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        navLinks.classList.remove('active');
        navToggle.classList.remove('active');
    }
});

// Focus management for accessibility
function trapFocus(element) {
    const focusableElements = element.querySelectorAll(
        'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
    );

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    element.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            if (e.shiftKey && document.activeElement === firstElement) {
                e.preventDefault();
                lastElement.focus();
            } else if (!e.shiftKey && document.activeElement === lastElement) {
                e.preventDefault();
                firstElement.focus();
            }
        }
    });
}

// Initialize focus trapping for mobile menu
if (navLinks) {
    trapFocus(navLinks);
}