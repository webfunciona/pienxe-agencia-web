# ⚡ Pienxe — Sites & Agents That Drive Results

> Premium High-Performance public web portal for **Pienxe Boutique Técnica**. Built with systems engineering rigor, technical minimalism, and extreme performance optimization.

---

## 💎 Core Philosophy: "Think before you build"

This repository houses the public homepage of Pienxe (`pienxe.com`). In line with our brand identity as a elite technical engineering studio, this portal prioritizes utility, zero latency, and responsive elegance over generic placeholders and bloat.

### 📊 Performance Floors
- **Largest Contentful Paint (LCP):** < 1.2 seconds.
- **Lighthouse Performance Score:** 100/100 on both mobile and desktop.
- **Hydration & Interactivity:** Minimally invasive, strictly scoped interactive islands.

---

## 🛠️ The Tech Stack

- **Core Framework:** [Astro v4](https://astro.build/) — Static-first rendering with Islands of Interactivity.
- **Styling Architecture:** [Tailwind CSS](https://tailwindcss.com/) + Custom Vanilla CSS for specific interactive layouts.
- **Motion & Micro-interactions:** [GSAP v3](https://greensock.com/gsap/) for smooth, high-end technical animations.
- **Multilingual System:** Dynamic, recache-free trilingual toggle support (`ES` / `DE` / `EN`) managed via routing context.
- **Structured Data:** Canonical JSON-LD Schema.org organization metadata for optimal technical SEO indexing.

---

## 📁 Repository Structure

```
pienxe-web/ (Homepage Root)
├── public/                 # Static assets (brand icons, vector visuals, founder images)
│   └── assets/brand/       # Curated brand assets and co-founder profiles
├── src/
│   ├── components/
│   │   ├── sections/       # Modular section layouts (Hero, ValueProp, AboutSection, etc.)
│   │   └── ui/             # Reusable UI tokens (Buttons, Logo wrappers)
│   ├── layouts/
│   │   └── BaseLayout.astro# Canonical layout, HTML5 skeleton, and trilingual metadata
│   ├── i18n/
│   │   ├── ui.ts           # Unified translation dictionaries for EN, ES, and DE
│   │   └── utils.ts        # Dynamic translation path routing utilities
│   ├── pages/              # Astro route controllers
│   └── styles/
│       ├── global.css      # Core Design System, font tokens, and base layers
│       └── landing.css     # Bento grids, layout masks, and specific animations
├── astro.config.mjs        # Astro configuration & base path limits
├── tailwind.config.mjs     # Custom design system color tokens & bento utility mapping
└── tsconfig.json           # Strictly typed TypeScript configuration
```

---

## 🚀 Local Development & Deployment

### Prerequisite
Ensure you have Node.js **>= 20.0.0** installed.

### 1. Boot up local development server
Runs a local preview server with instant hot-reloading:
```bash
npm run dev
```

### 2. Compile production bundle
Checks types, evaluates Astro files, and builds a fully minified, optimized static website inside `dist/`:
```bash
npm run build
```

### 3. Deploy manually to Cloudflare Pages
Deploy the freshly built `dist/` directory directly to Cloudflare Pages:
```bash
npx wrangler pages deploy dist --project-name=pienxe-agencia-web
```

---

## 📏 Operational Rules for Developers

1. **Client-Facing Tone Rule:** The name *"Astro"* must **NEVER** appear in user-facing texts (such as translation values in `ui.ts` or strategic copy). Rephrase it to high-value technical descriptions:
   - *"Código limpio de carga instantánea"* (Clean, instant-loading code)
   - *"Tecnología de carga instantánea de última generación"* (Next-gen instant-loading technology)
   - *"Ingeniería de sistemas de alto rendimiento"* (High-performance systems engineering)
2. **Typography Standards:** Always pair the technical precision of *JetBrains Mono* for mono-elements/labels with the bold elegance of *Outfit* for headings.
3. **Responsive Grid Layouts:** Utilize modular Bento Grid wrappers with subtle borders (`border-border/50`) and technical neon glows (`rgba(2, 222, 240, 0.15)`).

---
*Pienxe Boutique Técnica — Systems Engineering Studio.*
