/* Coffee Shop Website JavaScript */
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            const isExpanded = navToggle.getAttribute('aria-expanded') === 'true' || false;
            navToggle.setAttribute('aria-expanded', !isExpanded);
            navMenu.classList.toggle('active');
            
            // Update screen reader text
            const srText = navToggle.querySelector('.sr-only');
            if (srText) {
                srText.textContent = isExpanded ? 'Open menu' : 'Close menu';
            }
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navMenu.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
                const srText = navToggle.querySelector('.sr-only');
                if (srText) {
                    srText.textContent = 'Open menu';
                }
            }
        });
        
        // Close menu when clicking a link
        navMenu.addEventListener('click', function(e) {
            if (e.target.classList.contains('nav-link')) {
                navMenu.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
                const srText = navToggle.querySelector('.sr-only');
                if (srText) {
                    srText.textContent = 'Open menu';
                }
            }
        });
    }
    
    // Current Year in Footer
    const currentYearEl = document.getElementById('currentYear');
    if (currentYearEl) {
        currentYearEl.textContent = new Date().getFullYear();
    }
    
    // Contact Form Validation and Submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Reset previous errors
            const formErrors = contactForm.querySelectorAll('.form-error');
            formErrors.forEach(error => error.textContent = '');
            
            const formGroups = contactForm.querySelectorAll('.form-group');
            formGroups.forEach(group => group.classList.remove('error'));
            
            // Get form values
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');
            const formSuccess = document.getElementById('formSuccess');
            
            let isValid = true;
            
            // Validate name
            if (!nameInput.value.trim()) {
                document.getElementById('nameError').textContent = 'Please enter your name';
                nameInput.classList.add('error');
                isValid = false;
            }
            
            // Validate email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailInput.value.trim()) {
                document.getElementById('emailError').textContent = 'Please enter your email';
                emailInput.classList.add('error');
                isValid = false;
            } else if (!emailRegex.test(emailInput.value.trim())) {
                document.getElementById('emailError').textContent = 'Please enter a valid email address';
                emailInput.classList.add('error');
                isValid = false;
            }
            
            // Validate message
            if (!messageInput.value.trim()) {
                document.getElementById('messageError').textContent = 'Please enter your message';
                messageInput.classList.add('error');
                isValid = false;
            } else if (messageInput.value.trim().length < 10) {
                document.getElementById('messageError').textContent = 'Message must be at least 10 characters';
                messageInput.classList.add('error');
                isValid = false;
            }
            
            if (isValid) {
                // Simulate form submission (in real app, this would send to a backend)
                formSuccess.textContent = 'Thank you for your message! We\'ll get back to you soon.';
                formSuccess.style.display = 'block';
                contactForm.reset();
                
                // Hide success message after 5 seconds
                setTimeout(() => {
                    formSuccess.style.display = 'none';
                }, 5000);
                
                // Scroll to success message
                formSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
            } else {
                // Focus on first invalid field
                const firstInvalid = contactForm.querySelector('.form-input.error');
                if (firstInvalid) {
                    firstInvalid.focus();
                }
            }
        });
        
        // Real-time validation
        const inputs = contactForm.querySelectorAll('.form-input');
        inputs.forEach(input => {
            input.addEventListener('input', function() {
                if (this.value.trim()) {
                    this.classList.remove('error');
                    const errorId = this.id + 'Error';
                    const errorEl = document.getElementById(errorId);
                    if (errorEl) {
                        errorEl.textContent = '';
                    }
                }
            });
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Close mobile menu if open
                if (navMenu && navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    if (navToggle) {
                        navToggle.setAttribute('aria-expanded', 'false');
                        const srText = navToggle.querySelector('.sr-only');
                        if (srText) {
                            srText.textContent = 'Open menu';
                        }
                    }
                }
            }
        });
    });
    
    // Add lazy loading to images
    const images = document.querySelectorAll('img[loading="lazy"]');
    if ('loading' in HTMLImageElement.prototype) {
        images.forEach(img => {
            img.loading = 'lazy';
        });
    } else {
        // Fallback for browsers that don't support native lazy loading
        // In a real app, you might use a library like lazysizes
    }
    
    // Add focus outline styles for keyboard users
    const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            document.body.classList.add('user-is-tabbing');
        }
    });
    
    document.addEventListener('mousedown', function() {
        document.body.classList.remove('user-is-tabbing');
    });
    
    // Intersection Observer for fade-in animations (optional enhancement)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe sections for fade-in
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
    
    // Add visible class when sections enter viewport
    const animatedObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    sections.forEach(section => {
        animatedObserver.observe(section);
    });
});

// Schema.org LocalBusiness JSON-LD
window.addEventListener('load', function() {
    const schemaJson = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://brew-haven-coffee.vercel.app/",
        "name": "Brew Haven Coffee Co.",
        "image": [
            "https://brew-haven-coffee.vercel.app/assets/images/hero.jpg"
        ],
        "@type": "LocalBusiness",
        "name": "Brew Haven Coffee Co.",
        "url": "https://brew-haven-coffee.vercel.app/",
        "telephone": "(555) 123-4567",
        "priceRange": "$",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "123 Coffee Street",
            "addressLocality": "Downtown District",
            "postalCode": "10001",
            "addressCountry": "US"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "40.7505",
            "longitude": "-73.9893"
        },
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday"
                ],
                "opens": "07:00",
                "closes": "19:00"
            },
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                    "Saturday",
                    "Sunday"
                ],
                "opens": "08:00",
                "closes": "18:00"
            }
        ],
        "menu": "https://brew-haven-coffee.vercel.app/#menu",
        "servesCuisine": [
            "Coffee",
            "Espresso",
            "Latte",
            "Pastries"
        ],
        "hasMenu": "https://brew-haven-coffee.vercel.app/#menu"
    };
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(schemaJson, null, 2);
    document.head.appendChild(script);
});