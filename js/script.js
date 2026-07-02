/**
 * NexusAI — Main JavaScript
 * Version: 2.0.0
 * Author: NexusAI Team
 */

'use strict';

/* ============================================================
   1. DOM Ready
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    initMobileMenu();
    initSmoothScroll();
    initScrollAnimations();
    initActiveNavHighlight();
    initFooterYear();
    initAccessibility();
});

/* ============================================================
   2. Navbar — Scroll Effect
   ============================================================ */

function initNavbar() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;

    const onScroll = () => {
        navbar.classList.toggle('scrolled', window.scrollY > 20);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // run once on load
}

/* ============================================================
   3. Mobile Menu Toggle
   ============================================================ */

function initMobileMenu() {
    const toggle  = document.getElementById('navToggle');
    const menu    = document.getElementById('navMenu');
    if (!toggle || !menu) return;

    const close = () => {
        menu.classList.remove('open');
        toggle.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
    };

    toggle.addEventListener('click', () => {
        const isOpen = menu.classList.toggle('open');
        toggle.classList.toggle('open', isOpen);
        toggle.setAttribute('aria-expanded', String(isOpen));
    });

    // Close on nav link click
    menu.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', close);
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
        if (!toggle.contains(e.target) && !menu.contains(e.target)) {
            close();
        }
    });

    // Close on Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') close();
    });
}

/* ============================================================
   4. Smooth Scroll
   ============================================================ */

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            const target = document.querySelector(anchor.getAttribute('href'));
            if (!target) return;

            e.preventDefault();

            const navHeight  = parseInt(getComputedStyle(document.documentElement)
                .getPropertyValue('--nav-height')) || 72;
            const targetTop  = target.getBoundingClientRect().top + window.scrollY - navHeight - 16;

            window.scrollTo({ top: targetTop, behavior: 'smooth' });
        });
    });
}

/* ============================================================
   5. Scroll Animations (Intersection Observer)
   ============================================================ */

function initScrollAnimations() {
    const targets = document.querySelectorAll(
        '.feature-card, .service-card, .stat, .info-item, .about-text, .contact-form-wrap, .contact-info'
    );

    if (!targets.length) return;

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry, i) => {
                if (entry.isIntersecting) {
                    // Stagger delay for sibling cards
                    const siblings = [...entry.target.parentElement.children];
                    const index    = siblings.indexOf(entry.target);
                    const delay    = Math.min(index * 80, 400);

                    entry.target.style.transitionDelay = `${delay}ms`;
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );

    targets.forEach(el => {
        el.classList.add('animate-on-scroll');
        observer.observe(el);
    });
}

/* ============================================================
   6. Active Nav Highlight on Scroll
   ============================================================ */

function initActiveNavHighlight() {
    const sections  = document.querySelectorAll('section[id]');
    const navLinks  = document.querySelectorAll('.nav-link');
    const navHeight = parseInt(getComputedStyle(document.documentElement)
        .getPropertyValue('--nav-height')) || 72;

    const highlight = () => {
        let current = '';
        sections.forEach(section => {
            if (window.scrollY >= section.offsetTop - navHeight - 80) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.toggle(
                'active',
                link.getAttribute('href') === `#${current}`
            );
        });
    };

    window.addEventListener('scroll', highlight, { passive: true });
    highlight();
}

/* ============================================================
   7. Contact Form
   ============================================================ */

/**
 * Handles contact form submission.
 * In production, replace the simulated delay with a real API call.
 * @param {Event} event
 */
function handleSubmit(event) {
    event.preventDefault();

    const form    = event.target;
    const btn     = form.querySelector('[type="submit"]');
    const name    = form.querySelector('#name')?.value.trim()    || '';
    const email   = form.querySelector('#email')?.value.trim()   || '';
    const subject = form.querySelector('#subject')?.value.trim() || '';
    const message = form.querySelector('#message')?.value.trim() || '';

    // Client-side validation
    if (!name || !email || !subject || !message) {
        showFormMessage('Please complete all fields before sending.', 'error');
        return;
    }

    if (!isValidEmail(email)) {
        showFormMessage('Please enter a valid email address.', 'error');
        return;
    }

    // Disable button during submission
    const originalHTML = btn.innerHTML;
    btn.innerHTML = `<span>Sending…</span>`;
    btn.disabled  = true;

    // Simulate async submission (replace with fetch() in production)
    setTimeout(() => {
        console.info('[NexusAI] Contact form submission:', {
            name, email, subject, message,
            timestamp: new Date().toISOString(),
        });

        showFormMessage(
            `✓ Thanks, ${name}! We've received your message and will be in touch within 24 hours.`,
            'success'
        );

        form.reset();
        btn.innerHTML = originalHTML;
        btn.disabled  = false;

        // Auto-dismiss success after 8 seconds
        setTimeout(() => {
            const msgEl = document.getElementById('formMessage');
            if (msgEl) msgEl.style.display = 'none';
        }, 8000);
    }, 1200);
}

/**
 * Validates an email address format.
 * @param {string} email
 * @returns {boolean}
 */
function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/**
 * Displays a status message below the contact form.
 * @param {string} text
 * @param {'success'|'error'} type
 */
function showFormMessage(text, type) {
    const el = document.getElementById('formMessage');
    if (!el) return;
    el.textContent  = text;
    el.className    = `form-message ${type}`;
    el.style.display = 'block';
}

/* ============================================================
   8. Dynamic Footer Year
   ============================================================ */

function initFooterYear() {
    const el = document.getElementById('currentYear');
    if (el) el.textContent = new Date().getFullYear();
}

/* ============================================================
   9. Accessibility Enhancements
   ============================================================ */

function initAccessibility() {
    // Announce page section changes to screen readers on nav click
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            const targetId  = link.getAttribute('href')?.replace('#', '');
            const targetEl  = targetId ? document.getElementById(targetId) : null;
            if (targetEl && !targetEl.hasAttribute('tabindex')) {
                targetEl.setAttribute('tabindex', '-1');
                targetEl.focus({ preventScroll: true });
            }
        });
    });
}

/* ============================================================
   10. Performance Monitoring (Dev Only)
   ============================================================ */

window.addEventListener('load', () => {
    if (!window.performance || !window.performance.timing) return;
    const t = window.performance.timing;
    console.info(`[NexusAI] Page ready: ${t.loadEventEnd - t.navigationStart}ms`);
});

/* ============================================================
   11. Global Error Handling
   ============================================================ */

window.addEventListener('error', ({ error, message, filename, lineno }) => {
    console.error('[NexusAI] Runtime error:', { message, filename, lineno, error });
});

window.addEventListener('unhandledrejection', ({ reason }) => {
    console.error('[NexusAI] Unhandled rejection:', reason);
});

/* ============================================================
   Init Log
   ============================================================ */

console.info('%c NexusAI v2.0.0 ', 'background:#2563eb;color:#fff;font-weight:700;border-radius:4px;padding:2px 8px;');
