// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    // Carousel functionality
    const carousel = document.querySelector('.carousel');
    if (carousel) {
        const slides = carousel.querySelectorAll('.carousel-slide');
        const indicators = carousel.querySelectorAll('.carousel-indicator');
        const prevBtn = carousel.querySelector('.carousel-control.prev');
        const nextBtn = carousel.querySelector('.carousel-control.next');
        let currentSlide = 0;
        let slideInterval;
        
        // Function to show a specific slide
        function showSlide(index) {
            // Remove active class from all slides and indicators
            slides.forEach(slide => {
                slide.classList.remove('active', 'prev');
            });
            indicators.forEach(indicator => {
                indicator.classList.remove('active');
            });
            
            // Add prev class to the previous slide for animation
            const prevIndex = (index - 1 + slides.length) % slides.length;
            slides[prevIndex].classList.add('prev');
            
            // Add active class to current slide and indicator
            slides[index].classList.add('active');
            indicators[index].classList.add('active');
            
            // Update current slide index
            currentSlide = index;
        }
        
        // Function to go to the next slide
        function nextSlide() {
            const newIndex = (currentSlide + 1) % slides.length;
            showSlide(newIndex);
        }
        
        // Function to go to the previous slide
        function prevSlide() {
            const newIndex = (currentSlide - 1 + slides.length) % slides.length;
            showSlide(newIndex);
        }
        
        // Start automatic slideshow
        function startSlideshow() {
            slideInterval = setInterval(nextSlide, 3500);
        }
        
        // Stop automatic slideshow
        function stopSlideshow() {
            clearInterval(slideInterval);
        }
        
        // Event listeners for controls
        prevBtn.addEventListener('click', function() {
            prevSlide();
            stopSlideshow();
            startSlideshow();
        });
        
        nextBtn.addEventListener('click', function() {
            nextSlide();
            stopSlideshow();
            startSlideshow();
        });
        
        // Event listeners for indicators
        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', function() {
                showSlide(index);
                stopSlideshow();
                startSlideshow();
            });
        });
        
        // Pause slideshow when hovering over carousel
        carousel.addEventListener('mouseenter', stopSlideshow);
        carousel.addEventListener('mouseleave', startSlideshow);
        
        // Start the slideshow
        startSlideshow();
    }
    
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
                if (entry.target.classList.contains('plan-card')) {
                    // Add animated class with a delay based on index for staggered effect
                    const planCards = document.querySelectorAll('.plan-card');
                    const index = Array.from(planCards).indexOf(entry.target);
                    setTimeout(() => {
                        entry.target.classList.add('animated');
                    }, index * 150); // Reduced delay for faster animation
                } else if (entry.target.classList.contains('animate-fade-up') || 
                           entry.target.classList.contains('animate-fade-left') || 
                           entry.target.classList.contains('animate-fade-right') || 
                           entry.target.classList.contains('animate-scale')) {
                    // These elements already have animation classes, just add a class to trigger them
                    entry.target.classList.add('animate-start');
                } else {
                    // Fallback for elements without specific animation classes
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const advantageCards = document.querySelectorAll('.advantage-card, .value-card');
    advantageCards.forEach((el, index) => {
        el.classList.add('animate-scale');
        el.classList.add(`delay-${(index % 3 + 1) * 100}`);
        observer.observe(el);
    });
    // Observe plan cards separately (they have CSS animations)
    const planCards = document.querySelectorAll('.plan-card');
    planCards.forEach(el => {
        observer.observe(el);
    });
    
    // Add animations to section titles and text
    const sectionTitles = document.querySelectorAll('.section-title');
    sectionTitles.forEach(el => {
        el.classList.add('animate-fade-up');
        observer.observe(el);
    });
    
    // Add animations to business and entertainment text
    const businessText = document.querySelector('.business-text');
    if (businessText) {
        const subtitle = businessText.querySelector('.business-subtitle');
        const title = businessText.querySelector('.section-title');
        if (subtitle) {
            subtitle.classList.add('animate-fade-left');
            observer.observe(subtitle);
        }
        if (title) {
            title.classList.add('animate-fade-up');
            title.classList.add('delay-100');
            observer.observe(title);
        }
    }
    
    const entertainmentText = document.querySelector('.entertainment-text');
    if (entertainmentText) {
        const title = entertainmentText.querySelector('.section-title');
        if (title) {
            title.classList.add('animate-fade-right');
            observer.observe(title);
        }
    }

    // WhatsApp button is now a direct link in the social-links section

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
    const heroTitles = document.querySelectorAll('.hero-title');
    heroTitles.forEach(heroTitle => {
        const originalText = heroTitle.textContent;
        typeWriter(heroTitle, originalText, 40);
    });
});