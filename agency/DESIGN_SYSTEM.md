# DESIGN_SYSTEM.md — Sistema de diseño Pienxe

> Tokens de diseño, componentes y anti-patrones. Se proyectan a código en [`tailwind.config.mjs`](tailwind.config.mjs). Para identidad de marca y voz: ver [`BRAND.md`](BRAND.md).

---

## 1. Filosofía: Diseño Orientado a Objetivos Específicos (DOOE)

Cada componente, sección y página debe declarar antes de existir:

- **Objetivo único:** la acción exacta que queremos provocar (ej: "agendar una llamada").
- **Métrica de éxito:** cómo medimos si el componente cumple (ej: CTR > 8% en Hero).
- **Coste de atención:** cuánto le pedimos al usuario y por qué vale la pena.
- **Plan B:** qué pasa si el objetivo principal falla (ruta secundaria de conversión).

Si una sección no puede responder las cuatro preguntas, se borra.

---

## 2. Tokens de diseño

### 2.1 Paleta canónica

| Token | Hex | RGB | Uso |
|-------|-----|-----|-----|
| `--color-bg` | `#030303` | 3, 3, 3 | Fondo global. Default del sitio. |
| `--color-fg` | `#FEFEFE` | 254, 254, 254 | Texto principal, wordmark, líneas. |
| `--color-accent` | `#02DEF0` | 2, 222, 240 | Único acento. Isotipo, CTAs primarios, focos. |
| `--color-fg-muted` | `#A1A1AA` | 161, 161, 170 | Texto secundario, captions. |
| `--color-surface` | `#0A0A0B` | 10, 10, 11 | Cards, secciones elevadas. |
| `--color-border` | `#1F1F22` | 31, 31, 34 | Bordes hairline, separadores. |

**Regla de acento:** `#02DEF0` aparece **una vez** por viewport. Hover y focus pueden multiplicarlo. Superficies decorativas en cyan: prohibidas.

### 2.2 Tipografía

| Rol | Familia | Fallback | Pesos | Tracking |
|-----|---------|----------|-------|----------|
| Display / wordmark | **General Sans** o **Geist Sans** | `system-ui, -apple-system, "Segoe UI"` | 500, 600 | -0.02em |
| Body | **Inter** (variable) | `system-ui, sans-serif` | 400, 500 | -0.011em |
| Mono / código | **JetBrains Mono** | `ui-monospace, SFMono-Regular` | 400, 500 | 0 |

Webfonts auto-hospedadas en `/public/fonts`. Cero llamadas a Google Fonts en producción.

#### Escala tipográfica (ratio 1.25 — major third)

| Token | rem | px @ 16 | Uso |
|-------|-----|---------|-----|
| `text-xs` | 0.75 | 12 | Captions, labels |
| `text-sm` | 0.875 | 14 | UI auxiliar |
| `text-base` | 1 | 16 | Cuerpo |
| `text-lg` | 1.125 | 18 | Cuerpo largo |
| `text-xl` | 1.25 | 20 | Subheadings |
| `text-2xl` | 1.5 | 24 | H4 |
| `text-3xl` | 1.875 | 30 | H3 |
| `text-4xl` | 2.25 | 36 | H2 |
| `text-5xl` | 3 | 48 | H1 secundario |
| `text-6xl` | 3.75 | 60 | H1 principal |
| `text-7xl` | 4.5 | 72 | Hero display |
| `text-8xl` | 6 | 96 | Hero display XL |

### 2.3 Geometría del isotipo

El "sparkle" Pienxe es una estrella asimétrica de 4 rayos:

- Eje vertical dominante (rayos largos arriba/abajo).
- Eje horizontal compactado (rayos cortos izq/der).
- Curvas Bézier suaves, no rectas. Puntas acuminadas pero no cortantes.
- Proporción canónica: rayo vertical : rayo horizontal ≈ **1 : 0.42**.
- Centro óptico ligeramente desplazado hacia arriba.
- Color exclusivo: `#02DEF0`. Nunca rellenar de blanco salvo variantes monocromas.
- Reemplaza el punto de la "i" en el wordmark. No flota, no rota, no parpadea por defecto.

**Tamaños mínimos:** isotipo solo ≥ 24 px de altura. Wordmark completo ≥ 96 px de ancho.

### 2.4 Espaciado (escala 4 px)

`0, 1, 2, 3, 4, 6, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128`

Márgenes verticales entre secciones: mínimo `py-24` (96 px), recomendado `py-32` (128 px).

### 2.5 Radios y bordes

| Token | Valor | Uso |
|-------|-------|-----|
| `radius.sm` | 4 px | Chips, badges |
| `radius.md` | 8 px | Inputs, cards pequeñas |
| `radius.lg` | 16 px | Cards principales |
| `radius.xl` | 24 px | Modales, contenedores destacados |

Bordes: `1px solid var(--color-border)`. Nunca `2px` salvo focus state.

### 2.6 Sombras

Sobre fondo negro las sombras tradicionales no se ven. Usar:

```css
/* Focus con acento */
box-shadow: 0 0 0 1px #02DEF0, 0 0 24px -4px rgba(2, 222, 240, 0.4);

/* Hairline highlight en cards */
box-shadow: inset 0 1px 0 rgba(255,255,255,0.04);
```

### 2.7 Motion

| Variable | Valor | Uso |
|----------|-------|-----|
| Duración corta | `120ms` | Hover UI fina |
| Duración media | `200ms` | Transiciones de estado |
| Duración larga | `400ms` | Entrada de secciones |
| Easing | `cubic-bezier(0.22, 1, 0.36, 1)` | Ease-out-quart — premium sin rebote |

Respetar `prefers-reduced-motion: reduce` siempre.

---

## 3. Iconografía secundaria

Estilo: línea de **1.5 px**, esquinas redondeadas a 1 px, geometría sobre cuadrícula de 24 px. Sin relleno salvo el isotipo Pienxe.

SVG inline generado a mano siguiendo grid Heroicons-like. No importar `lucide-react` ni similares en producción.

---

## 4. Componentes base

### Botón primario

```
fondo:   #02DEF0
texto:   #030303  (negro sobre cyan — contraste AAA)
peso:    500
padding: 12px 24px
radius:  8px
hover:   brillo +8%, sin escala
focus:   outline 2px offset 2px #02DEF0
```

### Botón secundario

```
fondo:  transparent
texto:  #FEFEFE
border: 1px solid #1F1F22
hover:  border-color #FEFEFE
```

### Link inline

Color heredado del cuerpo. Subrayado con `text-decoration-thickness: 1px` y `text-underline-offset: 4px`. Hover: color `#02DEF0`.

---

## 5. Anti-patrones

- Carruseles automáticos.
- Pop-ups de exit-intent.
- Cookies wall sin opción "rechazar todo" en primer nivel.
- Stock photos con sonrisas dentadas.
- Iconos 3D infladitos.
- Gradientes morado-rosa Web3.
- Lottie animations de más de 50 KB.
- Scroll hijacking.
- Cursores custom que rompen accesibilidad.
- Superficies decorativas en `#02DEF0`.
- Light mode como variante — **el modo oscuro es el default y el único hasta spec aprobada**.

---

_Si cambia un token aquí, cambia también en `tailwind.config.mjs`. Sincronización obligatoria._
