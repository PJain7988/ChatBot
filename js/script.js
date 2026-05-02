// ======================================
// AI Support Hub - JavaScript
// ======================================

// Smooth scroll to chatbot
function scrollToChat() {
    const chatSection = document.getElementById('chatbot');
    if (chatSection) {
        chatSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// Handle contact form submission
function handleSubmit(event) {
    event.preventDefault();

    // Get form values
    const form = document.getElementById('contactForm');
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validation
    if (!name || !email || !subject || !message) {
        showMessage('Please fill in all fields', 'error');
        return;
    }

    // Email validation
    if (!isValidEmail(email)) {
        showMessage('Please enter a valid email address', 'error');
        return;
    }

    // Simulate form submission
    // In a real application, this would send data to a server
    console.log('Form submitted:', {
        name: name,
        email: email,
        subject: subject,
        message: message,
        timestamp: new Date().toISOString()
    });

    // Show success message
    showMessage('Thank you! We have received your message. We will respond shortly.', 'success');

    // Reset form
    form.reset();

    // Hide message after 5 seconds
    setTimeout(() => {
        document.getElementById('formMessage').style.display = 'none';
    }, 5000);
}

// Validate email format
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Show form message
function showMessage(text, type) {
    const messageDiv = document.getElementById('formMessage');
    messageDiv.textContent = text;
    messageDiv.className = `form-message ${type}`;
    messageDiv.style.display = 'block';
}

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Set up smooth scrolling for all nav links
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');

            // Check if it's an internal link (starts with #)
            if (href.startsWith('#')) {
                e.preventDefault();

                const targetId = href.substring(1);
                const targetSection = document.getElementById(targetId);

                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Add animation to elements on scroll
    observeElements();

    // Initialize chatbot
    initializeChatbot();
});

// Intersection Observer for scroll animations
function observeElements() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe cards
    const cards = document.querySelectorAll('.feature-card, .service-card, .stat');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(card);
    });
}

// Initialize chatbot functionality
function initializeChatbot() {
    // This function can be expanded to handle chatbot initialization
    // For now, it serves as a placeholder

    console.log('Chatbot initialized');

    // Example: Log when user opens chatbot
    // This would integrate with your actual chatbot platform
}

// Add scroll event listener for navbar styling
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');

    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// Add active state to navigation links based on scroll position
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href').substring(1);

        if (href === current) {
            link.style.color = 'var(--primary-color)';
            link.style.borderBottomColor = 'var(--primary-color)';
        } else {
            link.style.color = 'var(--text-color)';
            link.style.borderBottomColor = 'transparent';
        }
    });
}

// Call active nav update on scroll
window.addEventListener('scroll', updateActiveNavLink);

// Mobile menu functionality (if needed)
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');

    if (navMenu) {
        navMenu.classList.toggle('active');
    }
}

// Analytics tracking (optional)
function trackEvent(eventName, eventData) {
    console.log(`Event: ${eventName}`, eventData);

    // This is where you would integrate with Google Analytics or similar
    // Example:
    // if (window.gtag) {
    //     gtag('event', eventName, eventData);
    // }
}

// Track chatbot interactions
function trackChatbotInteraction(message) {
    trackEvent('chatbot_message', {
        message: message,
        timestamp: new Date().toISOString()
    });
}

// Track form submissions
function trackFormSubmission() {
    trackEvent('contact_form_submitted', {
        timestamp: new Date().toISOString()
    });
}

// Accessibility features
function improveAccessibility() {
    // Set up keyboard navigation
    const links = document.querySelectorAll('a');
    const buttons = document.querySelectorAll('button');

    const focusableElements = [...links, ...buttons];

    focusableElements.forEach(element => {
        element.addEventListener('focus', function() {
            this.style.outline = '3px solid var(--primary-color)';
            this.style.outlineOffset = '2px';
        });

        element.addEventListener('blur', function() {
            this.style.outline = 'none';
        });
    });
}

// Initialize accessibility features
document.addEventListener('DOMContentLoaded', improveAccessibility);

// Performance monitoring
function logPerformanceMetrics() {
    if (window.performance) {
        window.addEventListener('load', function() {
            const perfData = window.performance.timing;
            const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;

            console.log('Page Load Time:', pageLoadTime + 'ms');

            // Log other useful metrics
            console.log('DOM Content Loaded:', perfData.domContentLoadedEventEnd - perfData.navigationStart + 'ms');
            console.log('Resources Loaded:', perfData.loadEventEnd - perfData.resourcesStart + 'ms');
        });
    }
}

// Initialize performance logging
logPerformanceMetrics();

// Error handling
window.addEventListener('error', function(event) {
    console.error('JavaScript Error:', event.error);
    // In production, you might want to send this to an error tracking service
});

// Unhandled promise rejection handling
window.addEventListener('unhandledrejection', function(event) {
    console.error('Unhandled Promise Rejection:', event.reason);
    // Handle or log the error
});

// Service Worker registration (optional - for PWA features)
function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js').catch(function(error) {
            console.log('Service Worker registration failed:', error);
        });
    }
}

// You can call this function to enable PWA features
// registerServiceWorker();

// Print stylesheet functionality
function printPage() {
    window.print();
}

// Export analytics
function exportAnalytics() {
    const analytics = {
        pageTitle: document.title,
        url: window.location.href,
        userAgent: navigator.userAgent,
        timestamp: new Date().toISOString(),
        viewport: {
            width: window.innerWidth,
            height: window.innerHeight
        }
    };

    console.log('Analytics Data:', analytics);
    return analytics;
}

// ======================================
// Initialization
// ======================================

console.log('AI Support Hub - JavaScript loaded successfully');
console.log('Version: 1.0.0');
console.log('Build Date: 2024');


