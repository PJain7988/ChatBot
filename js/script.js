/**
 * NexusAI — Elite JavaScript
 * v3.0.0 · Author: NexusAI Team
 *
 * Modules:
 *  1. Particle Canvas (hero background)
 *  2. Typewriter Effect (hero headline)
 *  3. Counter Animations (stats)
 *  4. Navbar (scroll effect + mobile menu)
 *  5. Smooth Scroll
 *  6. Scroll-Reveal Animations
 *  7. Active Nav Highlight
 *  8. Contact Form
 *  9. Footer Year
 *  10. Accessibility
 */

'use strict';

/* ─── Boot ───────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initParticleCanvas();
  initTypewriter();
  initNavbar();
  initMobileMenu();
  initSmoothScroll();
  initRevealAnimations();
  initCounters();
  initActiveNav();
  initFooterYear();
  initAccessibility();
});

/* ═══════════════════════════════════════════════════════════
   1. Particle Canvas
═══════════════════════════════════════════════════════════ */
function initParticleCanvas() {
  const canvas = document.getElementById('heroCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  let W, H, particles;
  const COUNT  = 90;
  const COLORS = ['rgba(59,130,246,', 'rgba(139,92,246,', 'rgba(16,185,129,'];

  function resize() {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  }

  function makeParticle() {
    return {
      x:    Math.random() * (W || 1200),
      y:    Math.random() * (H || 900),
      r:    Math.random() * 1.5 + 0.3,
      dx:   (Math.random() - 0.5) * 0.4,
      dy:   (Math.random() - 0.5) * 0.4,
      a:    Math.random() * 0.5 + 0.1,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
    };
  }

  function init() {
    resize();
    particles = Array.from({ length: COUNT }, makeParticle);
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);

    // Draw connections
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx   = particles[i].x - particles[j].x;
        const dy   = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          ctx.strokeStyle = `rgba(99,160,246,${0.12 * (1 - dist / 120)})`;
          ctx.lineWidth   = 0.6;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }

    // Draw particles
    particles.forEach(p => {
      ctx.fillStyle = `${p.color}${p.a})`;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();

      p.x += p.dx;
      p.y += p.dy;
      if (p.x < 0 || p.x > W) p.dx *= -1;
      if (p.y < 0 || p.y > H) p.dy *= -1;
    });

    requestAnimationFrame(draw);
  }

  init();
  draw();

  const ro = new ResizeObserver(resize);
  ro.observe(canvas.parentElement);
}

/* ═══════════════════════════════════════════════════════════
   2. Typewriter Effect
═══════════════════════════════════════════════════════════ */
function initTypewriter() {
  const el = document.getElementById('heroTypewriter');
  if (!el) return;

  const phrases = [
    'learns, and resolves.',
    'scales without limits.',
    'never sleeps.',
    'knows your product.',
  ];

  let phraseIndex  = 0;
  let charIndex    = 0;
  let isDeleting   = false;
  let pauseCounter = 0;

  const PAUSE_AFTER_TYPE   = 55;  // frames to pause after typing complete
  const PAUSE_AFTER_DELETE = 10;  // frames to pause after deleting
  const TYPE_SPEED         = 55;  // ms per character typed
  const DELETE_SPEED       = 30;  // ms per character deleted

  function type() {
    const current = phrases[phraseIndex];

    if (isDeleting) {
      charIndex--;
    } else {
      charIndex++;
    }

    el.textContent = current.slice(0, charIndex);

    let delay = isDeleting ? DELETE_SPEED : TYPE_SPEED;

    if (!isDeleting && charIndex === current.length) {
      // Finished typing — pause before deleting
      if (pauseCounter < PAUSE_AFTER_TYPE) {
        pauseCounter++;
        delay = 60;
      } else {
        pauseCounter = 0;
        isDeleting   = true;
        delay        = 600; // pause before start of delete
      }
    } else if (isDeleting && charIndex === 0) {
      // Finished deleting — move to next phrase
      isDeleting   = false;
      phraseIndex  = (phraseIndex + 1) % phrases.length;
      delay        = 300;
    }

    setTimeout(type, delay);
  }

  // Cursor blink using CSS
  el.style.borderRight = '3px solid';
  el.style.animation   = 'cursorBlink .9s step-end infinite';

  // Inject cursor blink keyframes once
  if (!document.getElementById('cursorStyle')) {
    const s = document.createElement('style');
    s.id  = 'cursorStyle';
    s.textContent = `@keyframes cursorBlink{0%,100%{border-color:rgba(139,92,246,1)}50%{border-color:transparent}}`;
    document.head.appendChild(s);
  }

  setTimeout(type, 800);
}

/* ═══════════════════════════════════════════════════════════
   3. Counter Animations
═══════════════════════════════════════════════════════════ */
function initCounters() {
  const counters = document.querySelectorAll('.count-up');
  if (!counters.length) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      animateCounter(entry.target);
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.6 });

  counters.forEach(el => observer.observe(el));
}

function animateCounter(el) {
  const target   = parseFloat(el.dataset.target) || 0;
  const suffix   = el.dataset.suffix    || '';
  const duration = 2000; // ms
  const start    = performance.now();

  function update(now) {
    const elapsed  = now - start;
    const progress = Math.min(elapsed / duration, 1);
    // Ease-out cubic
    const eased    = 1 - Math.pow(1 - progress, 3);
    const value    = Math.round(eased * target);

    el.textContent = value + suffix;

    if (progress < 1) requestAnimationFrame(update);
  }

  requestAnimationFrame(update);
}

/* ═══════════════════════════════════════════════════════════
   4. Navbar
═══════════════════════════════════════════════════════════ */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  const onScroll = () => navbar.classList.toggle('scrolled', window.scrollY > 24);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ═══════════════════════════════════════════════════════════
   5. Mobile Menu
═══════════════════════════════════════════════════════════ */
function initMobileMenu() {
  const toggle = document.getElementById('navToggle');
  const menu   = document.getElementById('navMenu');
  if (!toggle || !menu) return;

  const close = () => {
    menu.classList.remove('open');
    toggle.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };

  toggle.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('open');
    toggle.classList.toggle('open', isOpen);
    toggle.setAttribute('aria-expanded', String(isOpen));
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  menu.querySelectorAll('.nav-link').forEach(link => link.addEventListener('click', close));
  document.addEventListener('click', e => {
    if (!toggle.contains(e.target) && !menu.contains(e.target)) close();
  });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
}

/* ═══════════════════════════════════════════════════════════
   6. Smooth Scroll
═══════════════════════════════════════════════════════════ */
function initSmoothScroll() {
  const navH = () => parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) || 70;

  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - navH() - 16, behavior: 'smooth' });
    });
  });
}

/* ═══════════════════════════════════════════════════════════
   7. Scroll-Reveal Animations
═══════════════════════════════════════════════════════════ */
function initRevealAnimations() {
  const targets = document.querySelectorAll(
    '.bento-card, .step-card, .service-card, .testi-card, .stat-card, ' +
    '.about-text, .section-header, .contact-form-card, .contact-aside, ' +
    '.cta-band-content'
  );
  if (!targets.length) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      // stagger siblings
      const siblings = [...(entry.target.parentElement?.children || [])];
      const delay    = Math.min(siblings.indexOf(entry.target) * 80, 480);

      entry.target.style.transitionDelay = `${delay}ms`;
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

  targets.forEach(el => {
    el.classList.add('reveal');
    observer.observe(el);
  });
}

/* ═══════════════════════════════════════════════════════════
   8. Active Nav Highlight on Scroll
═══════════════════════════════════════════════════════════ */
function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const links    = document.querySelectorAll('.nav-link');
  const navH     = () => parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) || 70;

  const highlight = () => {
    let current = '';
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - navH() - 80) current = sec.id;
    });
    links.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
    });
  };

  window.addEventListener('scroll', highlight, { passive: true });
  highlight();
}

/* ═══════════════════════════════════════════════════════════
   9. Contact Form
═══════════════════════════════════════════════════════════ */

/**
 * Handles contact form submission.
 * Replace the setTimeout with a real fetch() API call in production.
 * @param {SubmitEvent} event
 */
function handleSubmit(event) {
  event.preventDefault();

  const form    = event.target;
  const btn     = document.getElementById('submitBtn');
  const btnText = document.getElementById('submitText');
  const btnIcon = document.getElementById('submitIcon');

  const name    = form.querySelector('#name')?.value.trim()    || '';
  const email   = form.querySelector('#email')?.value.trim()   || '';
  const message = form.querySelector('#message')?.value.trim() || '';

  // Validation
  if (!name || !email || !message) {
    showFormMsg('Please complete all required fields before sending.', 'error');
    return;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    showFormMsg('Please enter a valid work email address.', 'error');
    return;
  }

  // Loading state
  const originalText = btnText.textContent;
  btnText.textContent = 'Sending…';
  if (btnIcon) btnIcon.style.display = 'none';
  btn.disabled = true;

  // Simulate async submission (replace with real API)
  setTimeout(() => {
    console.info('[NexusAI] Form submission:', {
      name, email,
      company: form.querySelector('#company')?.value.trim() || '',
      message,
      ts: new Date().toISOString(),
    });

    showFormMsg(`✓ Thank you, ${name}! We'll be in touch within one business day.`, 'success');
    form.reset();
    btnText.textContent = originalText;
    if (btnIcon) btnIcon.style.display = '';
    btn.disabled = false;

    setTimeout(() => {
      const el = document.getElementById('formMessage');
      if (el) el.style.display = 'none';
    }, 9000);
  }, 1400);
}

/** @param {string} text @param {'success'|'error'} type */
function showFormMsg(text, type) {
  const el = document.getElementById('formMessage');
  if (!el) return;
  el.textContent  = text;
  el.className    = `form-message ${type}`;
  el.style.display = 'block';
}

/* ═══════════════════════════════════════════════════════════
   10. Footer Year
═══════════════════════════════════════════════════════════ */
function initFooterYear() {
  const el = document.getElementById('currentYear');
  if (el) el.textContent = new Date().getFullYear();
}

/* ═══════════════════════════════════════════════════════════
   11. Accessibility
═══════════════════════════════════════════════════════════ */
function initAccessibility() {
  // Focus sections when navigated to via nav
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      const id = link.getAttribute('href')?.replace('#', '');
      const el = id ? document.getElementById(id) : null;
      if (el && !el.hasAttribute('tabindex')) {
        el.setAttribute('tabindex', '-1');
        el.focus({ preventScroll: true });
      }
    });
  });
}

/* ═══════════════════════════════════════════════════════════
   Error Handling
═══════════════════════════════════════════════════════════ */
window.addEventListener('error',             ({ message, filename, lineno }) =>
  console.error('[NexusAI] Runtime error:', { message, filename, lineno }));
window.addEventListener('unhandledrejection', ({ reason }) =>
  console.error('[NexusAI] Unhandled rejection:', reason));

/* ─── Performance log ───────────────────────────────────── */
window.addEventListener('load', () => {
  if (!window.performance?.timing) return;
  const t = window.performance.timing;
  console.info(`%c NexusAI v3.0.0 `, 'background:#3b82f6;color:#fff;font-weight:700;border-radius:4px;padding:2px 8px;');
  console.info(`⚡ Page ready in ${t.loadEventEnd - t.navigationStart}ms`);
});
