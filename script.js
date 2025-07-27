// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const menuIcon = mobileMenuBtn.querySelector('i');

    mobileMenuBtn.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
        
        // Toggle icon
        if (mobileMenu.classList.contains('active')) {
            menuIcon.className = 'fas fa-times';
        } else {
            menuIcon.className = 'fas fa-bars';
        }
    });

    // Close mobile menu when clicking on a link
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
            menuIcon.className = 'fas fa-bars';
        });
    });

    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add scroll effect to header
    window.addEventListener('scroll', function() {
        const nav = document.querySelector('.nav');
        if (window.scrollY > 100) {
            nav.style.background = 'rgba(37, 99, 235, 0.95)';
            nav.style.backdropFilter = 'blur(10px)';
        } else {
            nav.style.background = 'transparent';
            nav.style.backdropFilter = 'none';
        }
    });

    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.advantage-card, .plan-card, .value-card');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // WhatsApp button click
    const whatsappBtn = document.querySelector('.whatsapp-btn');
    whatsappBtn.addEventListener('click', function() {
        // Replace with your WhatsApp number
        const phoneNumber = '5511969013333';
        const message = 'Olá! Gostaria de saber mais sobre os planos de internet.';
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    });

    // Plan buttons are now direct links to WhatsApp with pre-filled messages

    // Add loading animation to buttons (excluding plan buttons which are now direct links)
    const buttons = document.querySelectorAll('.btn:not(.btn-plan)');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const originalText = this.innerHTML;
            this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Carregando...';
            this.disabled = true;
            
            setTimeout(() => {
                this.innerHTML = originalText;
                this.disabled = false;
            }, 2000);
        });
    });

    // Add parallax effect to hero background
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const headerBg = document.querySelector('.header-bg');
        if (headerBg) {
            headerBg.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });

    // Add counter animation for plan speeds
    function animateCounter(element, target, duration = 2000) {
        let start = 0;
        const increment = target / (duration / 16);
        
        function updateCounter() {
            start += increment;
            if (start < target) {
                element.textContent = Math.floor(start);
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target;
            }
        }
        
        updateCounter();
    }

    // Trigger counter animation when plans section is visible
    const plansSection = document.querySelector('.plans');
    const planSpeedElements = document.querySelectorAll('.plan-speed');
    
    const plansObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                planSpeedElements.forEach(el => {
                    const target = parseInt(el.textContent);
                    animateCounter(el, target);
                });
                plansObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    if (plansSection) {
        plansObserver.observe(plansSection);
    }
});

// Add typing effect to hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect when page loads
window.addEventListener('load', function() {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        typeWriter(heroTitle, originalText, 150);
    }
});