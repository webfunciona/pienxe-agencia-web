# CLAUDE.md — Reglas operativas Pienxe

> Dev workflow para Claude Code. Marca, voz y diseño: ver archivos de referencia abajo.

**Archivos de referencia:**
- [`AGENTS.md`](AGENTS.md) — brief unificado (brand + diseño, model-agnostic)
- [`BRAND.md`](BRAND.md) — identidad, voz, léxico, manifiesto
- [`DESIGN_SYSTEM.md`](DESIGN_SYSTEM.md) — tokens, componentes, anti-patrones
- [`SPECIFICATIONS.md`](SPECIFICATIONS.md) — specs de cada feature antes de codificar

---

## Stack

| Capa | Decisión |
|------|----------|
| Framework | **Astro 4.x** — Zero-JS por defecto, islands cuando hace falta |
| Estilos | **Tailwind CSS 3.x** — tokens en `tailwind.config.mjs`, no CSS-in-JS |
| Lenguaje | **TypeScript estricto** — `strict: true`, `noUncheckedIndexedAccess: true`, cero `any` |
| Contenido | **Content Collections** — todo Markdown/MDX validado por Zod |
| Iconografía | **SVG inline** en componentes `.astro` — no `lucide` ni librerías externas |
| Tipografía | Auto-hospedada en `/public/fonts` — cero Google Fonts en producción |
| Analítica | A definir en SPECIFICATIONS — nunca GA4 sin consentimiento (RGPD) |

**Prohibido sin justificación en PR:** React/Vue/Svelte hidratado en páginas estáticas, jQuery, Bootstrap, GSAP (salvo ROI demostrado), CSS frameworks alternativos.

---

## SDD — Regla de oro

> No se escribe una sola línea de UI sin spec aprobada en `SPECIFICATIONS.md`.

1. Escribir spec (objetivo, métrica de éxito, inputs, outputs, edge cases).
2. Validar con Rosana o Euclides.
3. Implementar citando el ID: `feat(hero): implementa SPEC-001`.
4. Cerrar con `✅ Implementada + hash`.

Si Claude va a escribir UI sin spec: **detenerse y pedir la spec.**

---

## Performance — no negociable

| Métrica | Objetivo |
|---------|---------|
| Lighthouse Mobile | 100 / 100 / 100 / 100 |
| LCP | < 1.2 s en 4G simulada |
| CLS | < 0.05 |
| TBT | < 100 ms |
| JS shipped | < 30 KB gzip por página |

PR a `main` sin Lighthouse 100: no se mergea.

---

## Estructura de carpetas

```
src/
├── components/
│   ├── ui/        → Átomos y moléculas (Button, Badge, Logo…)
│   └── sections/  → Organismos (Hero, Pricing, FAQ…)
├── content/       → Content Collections (blog, casos, servicios)
├── layouts/       → BaseLayout y variantes
├── pages/         → Rutas file-based
└── styles/        → global.css
```

- Un componente = un archivo. Más de 200 líneas: refactorizar.
- `PascalCase.astro` para componentes. `kebab-case.md` para contenido.
- Sin barrel files. Imports explícitos siempre.

---

## Reglas

- **Lee primero, escribe después.** Leer el archivo completo antes de modificarlo.
- **No inventes dependencias.** Justificar librería nueva en el PR contra el stack.
- **Comentarios en español**, código en inglés.
- **Cero emojis** en producción salvo spec explícita.
- **Brand tokens:** leer `DESIGN_SYSTEM.md` → `tailwind.config.mjs`. No hardcodear valores.
- **Copy:** leer `BRAND.md` sección 3 antes de escribir texto visible al usuario.
- **A11y:** `aria-hidden="true"` en SVG decorativo. `<title>` en SVG informativo. Contraste AAA en cuerpo.
- **SEO:** cada página define `title`, `description`, `og:image` y `canonical` en `BaseLayout`.

---

_v3 — 2026-05-07_
