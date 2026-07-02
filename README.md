# NexusAI — Intelligent Customer Support Platform

<div align="center">

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-3b82f6?style=for-the-badge&logo=vercel&logoColor=white)](https://your-project.vercel.app)
[![GitHub](https://img.shields.io/badge/Source-GitHub-181717?style=for-the-badge&logo=github)](https://github.com/PJain7988/ChatBot)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?style=for-the-badge&logo=vercel)](https://vercel.com)
[![Made with HTML CSS JS](https://img.shields.io/badge/Built%20with-HTML%20·%20CSS%20·%20JS-f97316?style=for-the-badge)](https://github.com/PJain7988/ChatBot)

**Resolve 70% of support tickets instantly. Deploy in 30 minutes. Zero code required.**

[Live Demo](https://your-project.vercel.app) · [Report Bug](https://github.com/PJain7988/ChatBot/issues) · [Request Feature](https://github.com/PJain7988/ChatBot/issues)

</div>

---

## Overview

**NexusAI** is a production-ready, AI-powered customer support platform that combines a premium multi-section website with a fully integrated [Chatbase](https://chatbase.co) conversational AI chatbot. The entire stack is built with vanilla HTML, CSS, and JavaScript — zero frameworks, zero build tools, instant deployment.

### What makes this project stand out

| Aspect | Implementation |
|---|---|
| **Visual design** | Bento-grid feature layout, glassmorphism hero, animated particle canvas, scroll-reveal animations |
| **Interactivity** | Typewriter headline, animated counters, mobile hamburger nav, smooth-scroll |
| **AI Integration** | Chatbase floating widget — trained, branded, and always-on |
| **Code quality** | Modular JS with JSDoc, CSS design-token system, semantic HTML5 + ARIA |
| **Performance** | No JS framework overhead · Intersection Observer animations · lazy particle canvas |

---

## Live Demo

🌐 **[https://your-project.vercel.app](https://your-project.vercel.app)**

> Replace with your Vercel deployment URL after first push.

---

## Screenshots

> _Add screenshots or a GIF recording of the live site here after deployment._

---

## Features

### Website
- **Particle Canvas Hero** — Animated WebGL-like particle network using Canvas 2D API
- **Typewriter Headline** — Rotating phrases with character-by-character typing animation
- **Animated Counters** — Stats count up with ease-out cubic when scrolled into view
- **Bento Grid Features** — Modern asymmetric card layout with inline chat demo
- **3-Step How It Works** — Process flow with gradient step icons and connector arrows
- **Testimonials Section** — Social proof cards with featured highlight style
- **Stats Panel** — Dark-mode about section with animated stat cards
- **CTA Band** — Full-width gradient call-to-action section
- **Contact Form** — Validated, async-ready form with loading state
- **Mobile-First** — Hamburger nav, body scroll lock, fully responsive down to 320px
- **Scroll Animations** — Staggered IntersectionObserver reveal on all cards

### AI Chatbot (Chatbase)
- Conversational AI widget embedded via one script tag
- Trained on custom knowledge base
- Floating chat button always accessible
- Smart escalation to human agents
- 24/7 availability, <1s response time

---

## Tech Stack

| Layer | Technology | Purpose |
|---|---|---|
| **Structure** | HTML5 (Semantic) | Accessible, SEO-ready page markup |
| **Design** | Vanilla CSS (Custom Properties · Grid · Flexbox) | Full design-token system, premium UI |
| **Logic** | Vanilla JavaScript (ES2020+ · Canvas API) | Particles, typewriter, counters, animations |
| **AI Chatbot** | [Chatbase](https://chatbase.co) | Embedded conversational AI |
| **Fonts** | Google Fonts — Inter + Syne | Body & display typography |
| **Hosting** | [Vercel](https://vercel.com) | Edge CDN, HTTPS, zero-config deployment |
| **Version Control** | [GitHub](https://github.com/PJain7988/ChatBot) | Source management |

---

## Project Structure

```
ChatBot/
├── index.html          # Single-page application (all sections)
├── css/
│   └── styles.css      # Design system — tokens, components, responsive
├── js/
│   └── script.js       # Particle canvas, typewriter, counters, form, nav
├── package-lock.json
└── README.md
```

---

## Getting Started

### Prerequisites

- Modern web browser (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+)
- [Node.js](https://nodejs.org) *(optional, for local dev server)*

### 1. Clone

```bash
git clone https://github.com/PJain7988/ChatBot.git
cd ChatBot
```

### 2. Run Locally

```bash
# Simplest — open directly in browser
start index.html

# Or use a local server (recommended)
npx serve .
# → Open http://localhost:3000
```

### 3. Configure the Chatbot

The Chatbase widget is pre-embedded. To use your own:

1. Create an account at [chatbase.co](https://chatbase.co)
2. Train your chatbot on your knowledge base (upload docs, URLs, or PDFs)
3. Copy the embed `<script>` block from your chatbot's **Settings → Embed**
4. Replace the existing `<script>` block in `index.html` (search for `tJtWI-xpCBYBYMZO9DoUo`)

### 4. Deploy to Vercel

**Via Vercel Dashboard (recommended):**

1. Push your code to GitHub *(already done!)*
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import `PJain7988/ChatBot`
4. Click **Deploy** — no build config needed

**Via Vercel CLI:**

```bash
npm i -g vercel
vercel --prod
```

---

## Architecture

```
Browser
  │
  ├── index.html          ← Page structure (7 sections)
  │     ├── <canvas>      ← Particle animation (Canvas 2D)
  │     ├── Hero          ← Typewriter + counter stats
  │     ├── Features      ← Bento grid with chat demo
  │     ├── How It Works  ← 3-step process flow
  │     ├── Services      ← Card grid (featured variant)
  │     ├── Testimonials  ← Social proof cards
  │     ├── About/Stats   ← Dark section + animated counters
  │     ├── CTA Band      ← Full-width conversion section
  │     └── Contact       ← Form + aside info
  │
  ├── css/styles.css      ← Design system (1400+ lines)
  │     ├── :root tokens  ← Colors, spacing, radii, shadows
  │     ├── Components    ← Buttons, cards, nav, form fields
  │     └── Responsive    ← Mobile-first media queries
  │
  └── js/script.js        ← Modular JavaScript (11 modules)
        ├── Particle canvas
        ├── Typewriter
        ├── Counter animation
        ├── Navbar + mobile menu
        ├── Smooth scroll
        ├── Reveal animations (IntersectionObserver)
        └── Form + accessibility

         │
         ▼ HTTPS (Vercel Edge CDN)
  Chatbase AI ←── Embedded widget (one script tag)
```

---

## Key Design Decisions

| Decision | Rationale |
|---|---|
| **No frameworks** | Zero build overhead, instant Vercel deploy, fully portable |
| **CSS Custom Properties** | Design tokens make theming and maintenance trivially easy |
| **Canvas particles** | Brings the hero section to life without any external library |
| **Intersection Observer** | GPU-friendly, non-janky scroll animations — no scroll event polling |
| **Chatbase SaaS** | Handles ML infra, model updates, and training — letting this project focus on UX |
| **Syne + Inter fonts** | Syne for high-impact display headings, Inter for body legibility |
| **Bento grid layout** | Modern, editorial feel — signals design maturity at a glance |

---

## Accessibility

- Semantic HTML5 (`<nav>`, `<section>`, `<article>`, `<aside>`, `<footer>`)
- ARIA roles, labels, and `aria-live` regions throughout
- `:focus-visible` keyboard navigation styles
- Screen-reader friendly `aria-hidden` on decorative elements
- Colour contrast ratios exceed WCAG AA standards

---

## Performance

- **0 KB** of external JavaScript libraries
- **Google Fonts** loaded with `font-display: swap` via preconnect
- **IntersectionObserver** for all animation triggers (no scroll handler overhead)
- **Canvas** animation uses `requestAnimationFrame` with `clearRect` — no memory leaks
- **No build step** required for deployment

---

## Contributing

Contributions, issues, and feature requests are welcome!

```bash
git checkout -b feat/your-feature
git commit -m "feat: add your feature"
git push origin feat/your-feature
# Open a Pull Request
```

Follow [Conventional Commits](https://www.conventionalcommits.org) for commit messages.

---

## License

Distributed under the **MIT License**.

---

## Acknowledgements

- [Chatbase](https://chatbase.co) — Conversational AI platform
- [Vercel](https://vercel.com) — Hosting and edge deployment
- [Google Fonts](https://fonts.google.com) — Inter & Syne typefaces

---

<div align="center">

**Built with ❤️ · Powered by AI · Deployed on Vercel**

⭐ Star this repo if you found it helpful!

</div>
