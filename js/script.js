// ========================================
// SCROLL ANIMATIONS
// ========================================

/**
 * Intersection Observer for fade-in animations on scroll
 */
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observe all fade-in-up elements
document.addEventListener('DOMContentLoaded', () => {
    const fadeElements = document.querySelectorAll('.fade-in-up');
    fadeElements.forEach(element => observer.observe(element));
});

// ========================================
// NAVBAR SCROLL EFFECT
// ========================================

/**
 * Add shadow to navbar on scroll
 */
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    }
});

// ========================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ========================================

/**
 * Smooth scroll to sections
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');

        // Only prevent default if it's not just "#"
        if (href !== '#' && href.length > 1) {
            e.preventDefault();
            const target = document.querySelector(href);

            if (target) {
                const offsetTop = target.offsetTop - 70; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// ========================================
// PROGRESS BAR ANIMATION
// ========================================

/**
 * Animate progress bars when they come into view
 */
const progressBars = document.querySelectorAll('.progress-bar');
const progressObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressBar = entry.target;
            const width = progressBar.style.width;
            progressBar.style.width = '0';
            setTimeout(() => {
                progressBar.style.width = width;
            }, 100);
            progressObserver.unobserve(progressBar);
        }
    });
}, { threshold: 0.5 });

progressBars.forEach(bar => progressObserver.observe(bar));

// ========================================
// CONTACT FORM VALIDATION & SUBMISSION
// ========================================

/**
 * Form validation and submission handler
 */
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Clear previous validation states
        contactForm.classList.remove('was-validated');

        // Get form fields
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const phone = document.getElementById('phone');
        const subject = document.getElementById('subject');
        const message = document.getElementById('message');

        // Validation flags
        let isValid = true;

        // Validate name
        if (name.value.trim() === '') {
            name.classList.add('is-invalid');
            isValid = false;
        } else {
            name.classList.remove('is-invalid');
            name.classList.add('is-valid');
        }

        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value.trim())) {
            email.classList.add('is-invalid');
            isValid = false;
        } else {
            email.classList.remove('is-invalid');
            email.classList.add('is-valid');
        }

        // Validate phone (optional but if filled, should be valid)
        if (phone.value.trim() !== '') {
            const phoneRegex = /^[\d\s\+\-\(\)]+$/;
            if (!phoneRegex.test(phone.value.trim()) || phone.value.trim().length < 10) {
                phone.classList.add('is-invalid');
                isValid = false;
            } else {
                phone.classList.remove('is-invalid');
                phone.classList.add('is-valid');
            }
        } else {
            phone.classList.remove('is-invalid');
        }

        // Validate subject
        if (subject.value.trim() === '') {
            subject.classList.add('is-invalid');
            isValid = false;
        } else {
            subject.classList.remove('is-invalid');
            subject.classList.add('is-valid');
        }

        // Validate message
        if (message.value.trim() === '' || message.value.trim().length < 10) {
            message.classList.add('is-invalid');
            const feedback = message.nextElementSibling;
            if (feedback) {
                feedback.textContent = 'Please enter at least 10 characters.';
            }
            isValid = false;
        } else {
            message.classList.remove('is-invalid');
            message.classList.add('is-valid');
        }

        // If form is valid, show success message
        if (isValid) {
            showFormMessage('success', 'Thank you for your message! I will get back to you soon.');

            // Reset form after 2 seconds
            setTimeout(() => {
                contactForm.reset();
                contactForm.querySelectorAll('.is-valid').forEach(el => el.classList.remove('is-valid'));
            }, 2000);

            // In a real application, you would send the form data to a server here
            // Example: sendFormData(formData);
        } else {
            showFormMessage('danger', 'Please fill in all required fields correctly.');
        }
    });

    // Real-time validation on input
    const formFields = contactForm.querySelectorAll('input, textarea');
    formFields.forEach(field => {
        field.addEventListener('blur', function() {
            validateField(this);
        });

        field.addEventListener('input', function() {
            if (this.classList.contains('is-invalid') || this.classList.contains('is-valid')) {
                validateField(this);
            }
        });
    });
}

/**
 * Validate individual form field
 * @param {HTMLElement} field - The form field to validate
 */
function validateField(field) {
    const fieldId = field.id;
    const value = field.value.trim();

    switch(fieldId) {
        case 'name':
        case 'subject':
            if (value === '') {
                field.classList.add('is-invalid');
                field.classList.remove('is-valid');
            } else {
                field.classList.remove('is-invalid');
                field.classList.add('is-valid');
            }
            break;

        case 'email':
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                field.classList.add('is-invalid');
                field.classList.remove('is-valid');
            } else {
                field.classList.remove('is-invalid');
                field.classList.add('is-valid');
            }
            break;

        case 'phone':
            if (value !== '') {
                const phoneRegex = /^[\d\s\+\-\(\)]+$/;
                if (!phoneRegex.test(value) || value.length < 10) {
                    field.classList.add('is-invalid');
                    field.classList.remove('is-valid');
                } else {
                    field.classList.remove('is-invalid');
                    field.classList.add('is-valid');
                }
            } else {
                field.classList.remove('is-invalid');
                field.classList.remove('is-valid');
            }
            break;

        case 'message':
            if (value === '' || value.length < 10) {
                field.classList.add('is-invalid');
                field.classList.remove('is-valid');
            } else {
                field.classList.remove('is-invalid');
                field.classList.add('is-valid');
            }
            break;
    }
}

/**
 * Show form submission message
 * @param {string} type - Message type (success or danger)
 * @param {string} text - Message text
 */
function showFormMessage(type, text) {
    const messageDiv = document.getElementById('formMessage');
    const alertDiv = messageDiv.querySelector('.alert');

    alertDiv.className = `alert alert-${type}`;
    alertDiv.textContent = text;
    messageDiv.style.display = 'block';

    // Scroll to message
    messageDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

    // Hide message after 5 seconds
    setTimeout(() => {
        messageDiv.style.display = 'none';
    }, 5000);
}

// ========================================
// TYPING EFFECT (Optional Enhancement)
// ========================================

/**
 * Add typing effect to tagline (optional)
 */
function typeWriterEffect(element, text, speed = 100) {
    if (!element) return;

    let i = 0;
    element.textContent = '';

    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}

// Example usage (uncomment to use):
// const tagline = document.querySelector('.lead');
// if (tagline) {
//     const originalText = tagline.textContent;
//     typeWriterEffect(tagline, originalText, 50);
// }

// ========================================
// ACTIVE NAV LINK ON SCROLL
// ========================================

/**
 * Highlight active section in navigation
 */
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveNavLink);

// ========================================
// MOBILE MENU AUTO CLOSE
// ========================================

/**
 * Close mobile menu when a link is clicked
 */
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth < 992 && navbarCollapse.classList.contains('show')) {
                navbarToggler.click();
            }
        });
    });
});

// ========================================
// LAZY LOAD IMAGES (Performance Enhancement)
// ========================================

/**
 * Lazy load images for better performance
 */
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                imageObserver.unobserve(img);
            }
        });
    });

    const images = document.querySelectorAll('img[data-src]');
    images.forEach(img => imageObserver.observe(img));
}

// ========================================
// SCROLL TO TOP BUTTON (Optional)
// ========================================

/**
 * Show/hide scroll to top button
 */
function initScrollToTop() {
    // Create scroll to top button
    const scrollBtn = document.createElement('button');
    scrollBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollBtn.className = 'scroll-to-top';
    scrollBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: linear-gradient(135deg, #6366f1, #8b5cf6);
        color: white;
        border: none;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: 0 10px 30px rgba(99, 102, 241, 0.3);
    `;

    document.body.appendChild(scrollBtn);

    // Show/hide button on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            scrollBtn.style.opacity = '1';
            scrollBtn.style.visibility = 'visible';
        } else {
            scrollBtn.style.opacity = '0';
            scrollBtn.style.visibility = 'hidden';
        }
    });

    // Scroll to top on click
    scrollBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Hover effect
    scrollBtn.addEventListener('mouseenter', () => {
        scrollBtn.style.transform = 'translateY(-5px)';
        scrollBtn.style.boxShadow = '0 15px 40px rgba(99, 102, 241, 0.4)';
    });

    scrollBtn.addEventListener('mouseleave', () => {
        scrollBtn.style.transform = 'translateY(0)';
        scrollBtn.style.boxShadow = '0 10px 30px rgba(99, 102, 241, 0.3)';
    });
}

// Initialize scroll to top button
initScrollToTop();

// ========================================
// PRELOADER (Optional)
// ========================================

/**
 * Show preloader while page loads
 */
window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 300);
    }
});

// ========================================
// CONSOLE MESSAGE
// ========================================

/**
 * Developer message in console
 */
console.log(
    '%c👋 Hello! Welcome to Muhammad Tahir Hussain\'s Portfolio',
    'color: #6366f1; font-size: 16px; font-weight: bold;'
);
console.log(
    '%c🚀 Built with HTML, CSS, JavaScript, and Bootstrap 5',
    'color: #8b5cf6; font-size: 14px;'
);
console.log(
    '%c📧 Contact: tahir.hussain@example.com',
    'color: #10b981; font-size: 14px;'
);

// ========================================
// PERFORMANCE MONITORING (Development)
// ========================================

/**
 * Log page performance metrics (for development)
 */
if (window.performance && console.table) {
    window.addEventListener('load', () => {
        setTimeout(() => {
            const perfData = window.performance.timing;
            const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
            const connectTime = perfData.responseEnd - perfData.requestStart;
            const renderTime = perfData.domComplete - perfData.domLoading;

            console.log('%c⚡ Performance Metrics', 'color: #ec4899; font-size: 14px; font-weight: bold;');
            console.table({
                'Page Load Time': `${pageLoadTime}ms`,
                'Connection Time': `${connectTime}ms`,
                'Render Time': `${renderTime}ms`
            });
        }, 0);
    });
}
