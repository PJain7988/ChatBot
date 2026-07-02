# NexusAI — Intelligent Customer Support Platform

> A production-ready AI-powered customer support web application featuring a conversational chatbot, modern UI, and seamless cloud deployment.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-2563eb?style=for-the-badge&logo=vercel)](https://your-project.vercel.app)
[![GitHub](https://img.shields.io/badge/Source-GitHub-181717?style=for-the-badge&logo=github)](https://github.com/PJain7988/ChatBot)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?style=for-the-badge&logo=vercel)](https://vercel.com)

---

## Overview

**NexusAI** is a fully functional, AI-integrated customer support platform built with vanilla HTML, CSS, and JavaScript. It embeds a [Chatbase](https://chatbase.co) conversational AI widget that provides instant, intelligent responses to user queries — 24 hours a day, 7 days a week.

The application demonstrates real-world integration of AI tooling into a professional web product: from responsive multi-section layout and smooth scroll animations, to a live chatbot and a functional contact form.

---

## Live Demo

🌐 **[https://your-project.vercel.app](https://your-project.vercel.app)**

> Replace with your actual Vercel deployment URL after first deployment.

---

## Features

### Website
| Feature | Description |
|---|---|
| **Responsive Design** | Fluid layouts that adapt perfectly from 320px mobile to 4K displays |
| **Animated UI** | Scroll-triggered entrance animations and micro-interactions on every element |
| **Active Navigation** | Nav links dynamically highlight as the user scrolls between sections |
| **Contact Form** | Client-validated form with user feedback and simulated async submission |
| **Glassmorphism Hero** | Premium visual effects using backdrop-filter and layered gradients |
| **Accessible Markup** | Semantic HTML5, ARIA roles/labels, keyboard navigation, focus management |
| **SEO Ready** | Descriptive title, meta description, Open Graph tags, and semantic structure |

### AI Chatbot (Chatbase)
| Feature | Description |
|---|---|
| **24/7 Availability** | Always-on support, no downtime |
| **Natural Language** | Understands intent and context, not just keywords |
| **Floating Widget** | Non-intrusive chat button always available on page |
| **Knowledge-Base Trained** | Responds with accurate, business-specific information |
| **Smart Escalation** | Routes complex queries to human agents when needed |

---

## Tech Stack

| Layer | Technology | Purpose |
|---|---|---|
| **Structure** | HTML5 | Semantic, accessible page markup |
| **Styling** | Vanilla CSS (Custom Properties, Grid, Flexbox) | Premium responsive design system |
| **Logic** | Vanilla JavaScript (ES2020+) | Interactivity, animations, form handling |
| **AI Chatbot** | [Chatbase](https://chatbase.co) | Conversational AI widget |
| **Hosting** | [Vercel](https://vercel.com) | CI/CD, edge deployment, HTTPS |
| **Version Control** | [GitHub](https://github.com/PJain7988/ChatBot) | Source management and collaboration |
| **Fonts** | Google Fonts — Inter + Syne | Modern, readable typography |

---

## Project Structure

```
ChatBot/
├── index.html          # Single-page application entry point
├── css/
│   └── styles.css      # Full design system (tokens, components, responsive)
├── js/
│   └── script.js       # Modular JS — navbar, animations, form, scroll
├── package-lock.json
└── README.md
```

---

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- [Node.js](https://nodejs.org) *(optional — only needed for a local dev server)*
- A [Vercel](https://vercel.com) account for deployment
- A [Chatbase](https://chatbase.co) account for the chatbot

### 1. Clone the Repository

```bash
git clone https://github.com/PJain7988/ChatBot.git
cd ChatBot
```

### 2. Run Locally

Open `index.html` directly in your browser, **or** use a local dev server for best results:

```bash
# Using npx serve (no install required)
npx serve .

# Or using Python
python -m http.server 8000
```

Then open **http://localhost:3000** (or `:8000`).

### 3. Configure the Chatbot

The Chatbase widget is already embedded in `index.html`. To use your own bot:

1. Sign in to [chatbase.co](https://chatbase.co) and create a chatbot
2. Train it on your knowledge base / FAQ documents
3. Copy your chatbot's embed script from the Chatbase dashboard
4. Replace the existing `<script>` block in `index.html` (around line 155)

### 4. Deploy to Vercel

**Option A — Vercel CLI:**

```bash
npm install -g vercel
vercel --prod
```

**Option B — Vercel Dashboard (recommended):**

1. Push your code to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your `PJain7988/ChatBot` repository
4. Click **Deploy** — no build configuration needed

---

## Deployment

This project is optimized for static hosting. No build step is required.

- **Platform:** Vercel (recommended) · Netlify · GitHub Pages
- **Build Command:** *(none)*
- **Output Directory:** `/` (project root)
- **Environment Variables:** None required

---

## Architecture

```
┌─────────────────────────────────────┐
│           Browser (Client)           │
│                                     │
│  ┌─────────┐   ┌────────────────┐   │
│  │ index   │   │  Chatbase      │   │
│  │ .html   │──▶│  Widget (CDN)  │   │
│  └────┬────┘   └────────────────┘   │
│       │                             │
│  ┌────▼────┐   ┌────────────────┐   │
│  │styles   │   │  script.js     │   │
│  │ .css    │   │  (Interactivity│   │
│  └─────────┘   └────────────────┘   │
└───────────────────┬─────────────────┘
                    │ HTTPS
          ┌─────────▼─────────┐
          │   Vercel Edge      │
          │   (CDN + Hosting)  │
          └────────────────────┘
```

---

## Key Design Decisions

- **No frameworks or dependencies** — Zero build toolchain means instant deployment and maximum portability. The project runs as-is on any static host.
- **CSS Custom Properties** — A full design token system (`--clr-primary`, `--shadow-md`, etc.) enables consistent theming and easy future customization.
- **Intersection Observer API** — Performant scroll animations without janky `scroll` event listeners. Cards animate in as they enter the viewport.
- **Chatbase over self-hosted** — Chatbase handles model training, hosting, and updates, letting the project focus on UI/UX rather than ML infrastructure.
- **Vanilla JS** — Keeps the bundle size at 0 KB of external library code. All features (smooth scroll, active nav, mobile menu, form validation) are implemented in ~250 lines of clean, documented JavaScript.

---

## Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create a feature branch: `git checkout -b feat/your-feature`
3. Commit your changes: `git commit -m "feat: add your feature"`
4. Push to the branch: `git push origin feat/your-feature`
5. Open a Pull Request

Please follow [Conventional Commits](https://www.conventionalcommits.org) for commit messages.

---

## License

Distributed under the **MIT License**. See [`LICENSE`](LICENSE) for details.

---

## Acknowledgements

- [Chatbase](https://chatbase.co) — Conversational AI platform
- [Vercel](https://vercel.com) — Deployment infrastructure
- [Google Fonts](https://fonts.google.com) — Inter & Syne typefaces
- [Heroicons](https://heroicons.com) — SVG icon system

---

<div align="center">

**Built with ❤️ · Powered by AI · Deployed on Vercel**

[Live Demo](https://your-project.vercel.app) · [Report Bug](https://github.com/PJain7988/ChatBot/issues) · [Request Feature](https://github.com/PJain7988/ChatBot/issues)

</div>
