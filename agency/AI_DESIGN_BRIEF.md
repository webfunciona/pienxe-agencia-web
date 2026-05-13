# AI_DESIGN_BRIEF.md — Brief operativo para herramientas de design AI

> **Propósito:** Documento único, copy-paste-able, que cualquier herramienta de design AI (Stitch, Galileo, Uizard, Figma AI, v0, Lovable, Cursor) o diseñador humano puede usar para generar/regenerar el diseño de Pienxe.
>
> **Cómo usarlo:**
> - **Stitch / herramientas de pantalla única:** Copiar la sección de la pantalla específica + § 1-4 como contexto base.
> - **Herramientas multi-screen:** Pegar el documento completo.
> - **Iteración:** Después de la primera generación, refinar con las "Notas de calidad" (§ 12).

---

## 0. Resumen ejecutivo (TL;DR)

Diseñá la landing page de **Pienxe** — agencia boutique premium tecnológica con sede en Hamburgo. Audiencia: founders, CTOs y CMOs de empresas medianas. Estética: **editorial premium oscuro**, referencia visual a Linear × Pentagram × Apple Newsroom. **Modo oscuro único** (sin toggle a claro). Single-page con 7 secciones más navbar fija y footer. Tipografía dominante, isotipo (estrella de 4 rayos cyan) como elemento gráfico recurrente, motion sutil y deliberado.

**Lema de diseño:** *"Piensa antes de construir."* — claridad antes que decoración. Whitespace abundante, cero ruido, acento cyan máximo una vez por viewport.

---

## 1. Identidad de marca

| Atributo | Valor |
|----------|-------|
| **Nombre** | Pienxe |
| **Sede** | Hamburgo, Alemania |
| **Tipo** | Agencia boutique premium B2B |
| **Servicios** | Brand Engineering, Web Development premium, Applied AI, Strategic Automation |
| **Arquetipo** | El Sabio (primario) + El Creador (secundario) + El Soberano (terciario) |
| **Tono** | Maestra cubana con disciplina alemana — cálido, opinado, técnico |
| **Promesa pública** | *"Lo que entregamos opera el lunes. O no lo entregamos."* |
| **Hero H1** | *"Piensa antes de construir."* |
| **Posicionamiento** | 4ta categoría — no consultora grande, no agencia tradicional, no freelancer |

**Voz visual:** Lucidez con calor (B) — referencia Linear / Notion / Stripe + destellos de Mastery silenciosa (C) — referencia Apple / Pentagram.

---

## 2. Tokens visuales

### 2.1 Paleta (exacta — usar siempre HEX, jamás nombres)

```
Background base:    #030303   (negro absoluto del logo — NUNCA #000000 puro)
Foreground:         #FEFEFE   (blanco principal)
Accent (único):     #02DEF0   (cyan eléctrico — máx 1 uso por viewport)
Muted text:         #A1A1AA   (texto secundario)
Surface elevated:   #0A0A0B   (cards, secciones elevadas)
Border hairline:    #1F1F22   (líneas finas)
Danger:             #F43F5E   (errores únicamente)
Success:            #10B981   (estados positivos)
Warning:            #F59E0B   (advertencias)
```

**Regla de oro del acento:** El cyan `#02DEF0` se usa **máximo una vez por sección visible**. Nunca en gradientes decorativos. Nunca como background masivo. Solo en: 1 CTA primario, indicador de status, isotipo, línea de progreso, número de fase, o detalle puntual.

### 2.2 Tipografía

```
Display (titulares):  Outfit — fallback "General Sans", "Geist Sans", system-ui
Body (cuerpo):        Inter — fallback system-ui, Helvetica Neue
Mono (técnica):       JetBrains Mono — fallback ui-monospace, Menlo
```

**Escala modular (ratio 1.25):**

| Token | Tamaño | Line-height | Tracking | Uso |
|-------|--------|-------------|----------|-----|
| `9xl` | 128px  | 132px       | -0.032em | (no usar) |
| `8xl` | 96px   | 100px       | -0.030em | Hero H1 desktop XL |
| `7xl` | 72px   | 78px        | -0.028em | Hero H1 desktop |
| `6xl` | 60px   | 66px        | -0.027em | Section titles XL |
| `5xl` | 48px   | 54px        | -0.025em | Section titles |
| `4xl` | 36px   | 42px        | -0.023em | Subsections |
| `3xl` | 30px   | 36px        | -0.021em | Card titles |
| `2xl` | 24px   | 32px        | -0.019em | Card subtitles |
| `xl`  | 20px   | 30px        | -0.017em | Lead paragraphs |
| `lg`  | 18px   | 28px        | -0.014em | Large body |
| `base`| 16px   | 26px        | -0.011em | Body default |
| `sm`  | 14px   | 22px        | -0.005em | Captions, labels |
| `xs`  | 12px   | 20px        | 0        | Tags, mono details |

**Pesos:** Regular 400, Medium 500, Semibold 600. **Nunca usar Bold 700+** (queda barato).

**Tracking en display:** siempre negativo (`-0.02em` a `-0.03em`). Letras "abrazándose" — estética editorial.

### 2.3 Espaciado (grid de 4px estricto)

```
0   →  0px
1   →  4px
2   →  8px
3   →  12px
4   →  16px      (espaciado base)
6   →  24px
8   →  32px      (espaciado de párrafos)
12  →  48px      (espaciado entre bloques)
16  →  64px      (espaciado entre secciones pequeñas)
24  →  96px      (espaciado entre secciones grandes)
32  →  128px     (padding vertical de sección)
```

**Section vertical padding:** `py-32` (128px arriba y abajo) en desktop, `py-20` en mobile.
**Container max-width:** 1200px (1440px para layouts wide). Centrado con `mx-auto`, padding lateral `px-6`.

### 2.4 Radios

```
none: 0
sm:   4px      (chips, tags)
md:   8px      (buttons, inputs)
lg:   16px     (cards)
xl:   24px     (modals, hero containers)
full: 9999px   (avatars, círculos)
```

### 2.5 Sombras (adaptadas a fondo oscuro)

```
hairline:       inset 0 1px 0 rgba(255,255,255,0.04)
focus-accent:   0 0 0 1px #02DEF0, 0 0 24px -4px rgba(2,222,240,0.4)
glow-accent:    0 0 32px -8px rgba(2,222,240,0.5)
```

**Nada de sombras "drop" tipo material design.** Solo glows sutiles + inner hairlines.

### 2.6 Motion

```
Easing default:  cubic-bezier(0.22, 1, 0.36, 1)   /* ease-out-quart */
Duración rápida:  120ms   (micro-interacciones, hover)
Duración default: 200ms   (transiciones de estado)
Duración lenta:   400ms   (entradas, reveals)
```

**Animaciones de entrada:** `y: 30px → 0, opacity: 0 → 1`, stagger 80ms entre elementos.
**Respetar `prefers-reduced-motion`:** todas las animaciones se vuelven instantáneas o desaparecen.

### 2.7 Breakpoints

```
sm:  640px
md:  768px
lg:  1024px
xl:  1280px
2xl: 1536px
```

Mobile-first siempre. Grid: 4 cols mobile / 12 cols desktop.

---

## 3. Isotipo (estrella de 4 rayos)

**Geometría exacta:** Estrella de 4 rayos asimétrica, con ratio diagonal 1:0.42 (rayo vertical = 1, rayo horizontal = 0.42). Color: `#02DEF0`. SVG vectorial, viewbox 100x100.

**Usos válidos:**
- Junto al wordmark "PIENXE" (Logo completo)
- Solo, como sello en esquina
- Como elemento orbital animado (Hero)
- Como cursor follower (lag 200ms, escala 0.5x)
- Como divider entre secciones (escalado al ancho del container, opacity 5%)
- Como "punctuation" antes de un metric importante

**Usos prohibidos:**
- ❌ Como background tile/repetido (decoración barata)
- ❌ En cualquier color que no sea `#02DEF0` o `#FEFEFE` (sólo en footer)
- ❌ Combinado con otros símbolos (no co-branding)
- ❌ Como ícono UI (no es Lucide, es marca)

---

## 4. Anti-patrones (PROHIBIDO)

❌ **Modo claro.** El sitio es oscuro único. Sin toggle, sin variante light.
❌ **Carruseles / sliders.** Todo contenido visible o por scroll vertical.
❌ **Popups exit-intent.** Insultan al visitante.
❌ **Stock photography.** Sólo fotografía propia o asset vectorial.
❌ **Gradientes Web3** (purple-pink-cyan rainbow). El acento NO se usa en gradientes decorativos.
❌ **Emojis** en producción. Sólo SVG icons custom.
❌ **Sombras drop tipo Material.** Sólo glows sutiles.
❌ **Texto justified.** Siempre alineado a izquierda (LTR).
❌ **Bordes con `border-radius: 50%` sobre texto** (botones tipo "pill" cliché).
❌ **Texto en mayúsculas SOLO PARA ENFASIS.** Mayúsculas únicamente en labels técnicos mono.
❌ **Negro puro `#000`.** Siempre `#030303` mínimo — el negro absoluto se ve plano.
❌ **El acento `#02DEF0` repetido más de 1 vez por viewport.** Pierde valor narrativo.

---

## 5. Navegación global

**Navbar fija en top:**

```
┌────────────────────────────────────────────────────────────────────┐
│  ✦ PIENXE        Servicios  Casos  Proceso  Colaboración  │ ES │  [Hablemos →] │
└────────────────────────────────────────────────────────────────────┘
```

- **Altura:** 72px (md), 56px (mobile)
- **Background:** `#030303` con `backdrop-blur-md` y opacidad 80%
- **Border-bottom:** 1px `#1F1F22`
- **Logo izquierda:** Isotipo + wordmark, height 32px
- **Links centro:** font-sans 14px medium, color muted `#A1A1AA`, hover → `#FEFEFE`, transición 120ms
- **Language picker:** ES / EN / DE — 3 botones de 24px, el activo en `#FEFEFE`, los otros en muted. Separadores: 1px hairline.
- **CTA derecha:** Button primary (variant cyan), texto "Hablemos" (o equivalente i18n), tamaño sm
- **Mobile (< 768px):** Logo izquierda + hamburguesa derecha (3 líneas). Menú overlay full-screen al abrir.

**Skip-to-content:** anchor invisible (`sr-only`) que aparece al focus con Tab. Texto: "Saltar al contenido".

---

## 6. Pantalla principal (Single-page) — Estructura

```
┌─────────────────────────────────┐
│  NAVBAR (sticky)                │
├─────────────────────────────────┤
│  § 1. HERO                      │  ← 100dvh
├─────────────────────────────────┤
│  § 2. SERVICIOS (4 fases)       │
├─────────────────────────────────┤
│  § 3. CASOS DE ESTUDIO          │
├─────────────────────────────────┤
│  § 4. PROCESO (cómo trabajamos) │
├─────────────────────────────────┤
│  § 5. STACK + MANIFIESTO        │
├─────────────────────────────────┤
│  § 6. PRICING (2 modelos)       │
├─────────────────────────────────┤
│  § 7. FOOTER (CTA + links)      │
└─────────────────────────────────┘
```

---

## 7. § 1. HERO

**Layout:** Editorial asimétrico, full-viewport (`min-height: 100dvh`).

**Estructura visual:**

```
┌──────────────────────────────────────────────────────────────┐
│  ● Status: Active_Systems                  LAT: 53.5511° N   │
│                                            LON: 9.9937° E   │
│                                            V2.4 // BOUTIQUE │
│                                                              │
│   ┌─────────────────────────────────┐  ┌──────────────────┐ │
│   │                                 │  │ Laboratory_Output│ │
│   │   PIENSA                        │  │                  │ │
│   │   ANTES DE                      │  │  99.9%           │ │
│   │   CONSTRUIR.                    │  │  ▔▔▔▔▔▔▔▔▔▔▔▔▔   │ │
│   │                                 │  │  Uptime          │ │
│   │   ── Pienxe construye web      │  │                  │ │
│   │      premium y orquestación    │  │  0—1             │ │
│   │      de IA para empresas que   │  │  ▔▔▔▔▔▔▔▔▔▔▔▔▔   │ │
│   │      valoran el resultado.     │  │  Engineering_Cyc │ │
│   │                                 │  │                  │ │
│   │   [Hablemos →]  [Ver casos]   │  │  ∞               │ │
│   │                                 │  │  ▔▔▔▔▔▔▔▔▔▔▔▔▔   │ │
│   │   Lo que entregamos opera el   │  │  Boutique_Scale  │ │
│   │   lunes. O no lo entregamos.   │  │                  │ │
│   │                                 │  │  ▓▓▓▓▓▓▓▓░░░░    │ │
│   └─────────────────────────────────┘  └──────────────────┘ │
│                                                              │
│   01 / 07  ▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔                    ✦ scroll ↓ │
└──────────────────────────────────────────────────────────────┘
```

**Grid:** 12 columnas. Izquierda = `col-span-8` (vision/copy). Derecha = `col-span-4` (laboratory/stats).

**Detalles visuales:**

- **Metadata header (top):** flex space-between. Izquierda: status indicator (●cyan parpadeando) + texto mono `text-xs uppercase tracking-widest` muted. Derecha: coordenadas Hamburg en mono, 2-3 líneas.
- **H1 "Piensa antes de construir.":**
  - Font display 600
  - Tamaño: `clamp(4rem, 8vw, 10rem)` (desktop), `text-5xl` (mobile)
  - Leading `0.9`, tracking `-0.02em`
  - Color `#FEFEFE`
  - El punto final puede acentuarse: punto en `#02DEF0` (único uso del cyan en este viewport)
- **H2 subtítulo:** debajo del H1, separado por línea hairline horizontal de 48px de ancho cyan a 50% opacity. Font sans 18-20px, max-width 480px, color muted.
- **CTAs:** flex gap-4. Primario: `bg-accent text-bg`, texto "Hablemos", icono flecha. Secundario: `bg-transparent text-fg border border-border`, texto "Ver casos".
- **Promesa pública:** debajo de los CTAs, separación generosa (32px). Font sans 14px italic, color muted.
- **Tile derecho (Laboratory):**
  - Background: `bg-surface/30` con `backdrop-blur-3xl`
  - Border-left: 1px hairline cyan a 10%
  - Padding: 32px
  - Label superior: mono 10px uppercase tracking-[0.3em] cyan/50
  - 3 métricas verticales con separación de 48px:
    - Valor: display 4xl bold blanco
    - Label: mono 10px uppercase muted
  - Barra de progreso al fondo: 1px height, gris/10 width 100%, dentro un fill cyan al 66%
- **Footer del hero:** counter "01 / 07" en mono + línea progresiva + indicador scroll con isotipo
- **Background del hero:**
  - Capa 1: dot grid SVG patrón, opacity 4%
  - Capa 2: 12 columnas con borders verticales hairline (1px white/5%)
  - Capa 3: 2 blobs de cyan blureados (800px y 600px, blur 120px), uno top-right opacity 15%, otro bottom-left azul oscuro opacity 20%
  - Capa 4: Grain/noise overlay SVG, opacity 4%

**Animaciones de entrada (GSAP):**

1. **Metadata header:** fade-in y: 0 → 0, opacity 0 → 1, duración 1s, delay 0.5s
2. **Tiles del hero:** stagger 80ms cada uno, opacity 0 → 1, duración 1.2s
3. **H1 palabra por palabra:** cada palabra en `<span class="inline-block overflow-hidden">`, animación `y: 110% → 0%, rotate: 2 → 0, opacity: 0 → 1`, duración 1.5s, stagger 50ms, ease `expo.out`
4. **Progress bar:** width 0% → 66%, duración 2s, ease `power4.inOut`
5. **Isotipo top-right (sello pequeño 40px):** entrada con escala 0 → 1, rotación -180° → 0, ease `elastic.out(1, 0.6)`, duración 1.2s

**Interactividad:**

- **Mouse parallax:** los 2 blobs siguen el cursor con lag (movimiento sutil, max 20px de desplazamiento, ease power3.out)
- **Hover en H1:** las palabras flotan +2px hacia arriba con sombra cyan glow
- **Click en tile derecho:** scroll suave a § 3 (casos)

---

## 8. § 2. SERVICIOS (4 Fases)

**Layout:** Grid 2×2 desktop, stack vertical mobile. Cada fase es una "card" con border hairline.

**Estructura visual de la sección:**

```
┌──────────────────────────────────────────────────────────────┐
│                                                              │
│   Nuestro plano de obra.                                    │
│                                                              │
│   No vendemos servicios aislados. Construimos la            │
│   cimentación, la estructura y la inteligencia.             │
│                                                              │
│   ┌─────────────────────┐  ┌─────────────────────┐         │
│   │  01                 │  │  02                 │         │
│   │                     │  │                     │         │
│   │  Cimentación        │  │  Estructura         │         │
│   │                     │  │                     │         │
│   │  Naming técnico,    │  │  Lighthouse 100/100 │         │
│   │  identidad visual,  │  │  no es aspiración,  │         │
│   │  design systems     │  │  es piso.           │         │
│   │  que no se rompen.  │  │                     │         │
│   │                     │  │                     │         │
│   │  ✦ Cimentación,     │  │  ✦ Tu sitio web es  │         │
│   │    no decoración.   │  │    infraestructura. │         │
│   └─────────────────────┘  └─────────────────────┘         │
│   ┌─────────────────────┐  ┌─────────────────────┐         │
│   │  03 Inteligencia    │  │  04 Escalabilidad   │         │
│   │  ...                │  │  ...                │         │
│   └─────────────────────┘  └─────────────────────┘         │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

**Detalles visuales:**

- **Title:** display 5xl semibold tracking-tighter
- **Subtitle:** text-lg muted, max-width 600px, margin-top 16px
- **Grid:** `grid-cols-1 md:grid-cols-2 gap-8`, margin-top 64px
- **Card individual:**
  - Padding: 48px (desktop), 32px (mobile)
  - Background: transparente
  - Border: 1px hairline `#1F1F22`
  - Border-radius: 16px
  - Estructura interna:
    - **Número de fase** (top): mono 4xl color cyan (`#02DEF0`) — único uso del acento por card
    - **Título:** display 3xl semibold, margin-top 32px
    - **Descripción:** text-base muted, margin-top 16px, max-width 90%
    - **Promesa firma** (bottom): text-sm italic con isotipo (estrella) 16px como bullet, color blanco a 80%
  - **Hover state:**
    - Border-color → `#FEFEFE` con transición 200ms
    - Background → `#0A0A0B` (surface)
    - Sombra: glow-accent
    - El número de fase se expande sutilmente (scale 1.05)

**Animaciones:** Cada card entra con ScrollTrigger (y: 30 → 0, opacity 0 → 1, stagger 100ms cuando la sección entra al viewport).

---

## 9. § 3. CASOS DE ESTUDIO (Portfolio)

**Layout:** Zig-zag vertical — imagen alterna izq/der, texto al lado contrario.

**Estructura visual:**

```
┌──────────────────────────────────────────────────────────────┐
│                                                              │
│   Prueba de Obra.                                           │
│                                                              │
│   No creemos en promesas, creemos en infraestructura que    │
│   genera resultados.                                        │
│                                                              │
│   ┌──────────────────┐    AUTOMATIZACIÓN OPERATIVA          │
│   │                  │                                       │
│   │  [Visual         │    Mariachi Express                  │
│   │   Mariachi]      │                                       │
│   │                  │    Orquestador de Agentes:           │
│   │  16:9            │    CRM + Sitio Web + Herramientas    │
│   │                  │    en un solo sistema integrado.     │
│   │                  │                                       │
│   └──────────────────┘    → Sincronización total en        │
│                              tiempo real.                    │
│                                                              │
│                              Explorar arquitectura →         │
│                                                              │
│                                                              │
│   CONSOLIDACIÓN DE DECISIÓN    ┌──────────────────┐         │
│                                 │                  │         │
│   Andre Riedel Immobilien      │  [Visual         │         │
│                                 │   Andre Riedel]  │         │
│   Dashboard privado unificado  │                  │         │
│   con integración a medida...  │  16:9            │         │
│                                 │                  │         │
│   → Vista única de KPIs.       └──────────────────┘         │
│                                                              │
│   Explorar arquitectura →                                   │
└──────────────────────────────────────────────────────────────┘
```

**Detalles visuales:**

- **Title:** igual a § 2 (display 5xl semibold)
- **Subtitle:** text-lg muted, max-width 600px
- **Cada caso:**
  - Grid 12 cols, gap 64px
  - Imagen `col-span-7`, texto `col-span-5` (alternando lados)
  - Imagen: ratio 16:9, border 1px hairline, border-radius 16px, overflow hidden
  - Hover en imagen: scale 1.02, sombra glow-accent
- **Texto del caso:**
  - **Territory tag:** mono 12px uppercase tracking-widest color muted (ej: "AUTOMATIZACIÓN OPERATIVA")
  - **Nombre del proyecto:** display 3xl semibold, margin-top 16px
  - **Descripción:** text-base muted, margin-top 24px, max-width 90%
  - **Resultado:** text-base con flecha → cyan al inicio, margin-top 24px
  - **CTA link:** text-sm uppercase tracking-wider, color blanco, hover → cyan, con icono flecha derecha que se desplaza +4px en hover

**Animaciones:**
- Imagen: parallax sutil en scroll (movimiento de 20% del scroll de la sección)
- Texto: ScrollTrigger fade-in left/right según lado

**Imágenes placeholder (cuando estén disponibles):**
- `mariachi-express`: dashboard de orquestación, visualización de flujo CRM→Web→Tools, cyan dominante en líneas conectivas, fondo negro deep
- `andre-riedel`: dashboard inmobiliario premium, listing de propiedades en glass cards, mapas con KPIs, paleta negro+cyan+blanco

---

## 10. § 4. PROCESO (Cómo trabajamos)

**Layout:** Timeline vertical con 3 pasos. Línea cyan conectora animada.

**Estructura visual:**

```
┌──────────────────────────────────────────────────────────────┐
│                                                              │
│   Ingeniería con propósito.                                 │
│                                                              │
│   Menos ruido, más resultado.                               │
│                                                              │
│   ●  01                                                     │
│   │   Especificación                                        │
│   │   "Pensar antes de construir"                           │
│   │                                                          │
│   │   No empezamos sin un plano de obra. Definimos qué    │
│   │   se construye, qué herramientas se orquestan...       │
│   │                                                          │
│   │   [Análisis] [KPIs] [Plano de obra]                    │
│   │                                                          │
│   ●  02                                                     │
│   │   Arquitectura                                          │
│   │   "Cimentación, no decoración"                          │
│   │   ...                                                   │
│   │                                                          │
│   ●  03                                                     │
│       Operación                                              │
│       "El lunes opera"                                      │
│       ...                                                   │
└──────────────────────────────────────────────────────────────┘
```

**Detalles visuales:**

- **Title/subtitle:** mismo patrón
- **Timeline:**
  - Línea vertical cyan de 1px ancho posicionada a 24px del borde izquierdo
  - Cada paso tiene un círculo de 16px de diámetro, fill cyan, en el inicio del paso
  - Última línea termina con un fade-out
- **Cada paso:**
  - Padding-left: 64px (espacio para la línea)
  - **Número:** mono 5xl bold color cyan
  - **Título:** display 3xl semibold, margin-top 16px
  - **Tagline:** text-base italic color muted, margin-top 8px
  - **Descripción:** text-base color blanco/90, max-width 600px, margin-top 24px
  - **Detail chips (3 tags):** flex gap-2, margin-top 32px. Cada chip: text-xs uppercase tracking-widest mono, padding 8px 16px, border hairline, border-radius 24px
- **Espacio entre pasos:** 96px vertical

**Animaciones:**
- Línea cyan: dibujo top-to-bottom con `strokeDasharray`, activada por ScrollTrigger
- Círculos: pop con escala 0 → 1 elastic cuando entran al viewport
- Texto: fade-in y: 30 → 0 con stagger

---

## 11. § 5. STACK & MANIFIESTO

**Layout:** 2 columnas desktop, stacked mobile.

**Estructura visual:**

```
┌──────────────────────────────────────────────────────────────┐
│                                                              │
│   ┌────────────────────────────┬────────────────────────────┐│
│   │                            │                            ││
│   │  Nuestro Engine.           │  Manifiesto 2026           ││
│   │                            │                            ││
│   │  Construimos sobre stacks  │  01  Pensamos antes de    ││
│   │  modernos, rápidos y       │      construir.            ││
│   │  escalables.               │      La IA sin plano es    ││
│   │                            │      humo...               ││
│   │  [Logo Astro]              │                            ││
│   │  [Logo Tailwind]           │  02  El sistema vale más   ││
│   │  [Logo TypeScript]         │      que la herramienta.   ││
│   │  [Logo OpenAI]             │      ...                   ││
│   │  [Logo Supabase]           │                            ││
│   │  [Logo Cloudflare]         │  03  El lunes a la mañana ││
│   │                            │      es la métrica real.   ││
│   │                            │      ...                   ││
│   │                            │                            ││
│   │                            │  04-07 ...                 ││
│   └────────────────────────────┴────────────────────────────┘│
└──────────────────────────────────────────────────────────────┘
```

**Detalles visuales:**

- **Grid:** 12 cols, gap 96px. Izquierda `col-span-5`, derecha `col-span-7`
- **Divider:** línea vertical 1px hairline entre columnas
- **Columna izquierda (Engine):**
  - **Title:** display 4xl semibold
  - **Description:** text-base muted, margin-top 16px
  - **Grid de logos:** 3 cols × 2 rows, gap 32px, margin-top 64px
  - Cada logo: altura 32px, color blanco con opacity 60%, hover → opacity 100% + sutil glow cyan
  - Stack: Astro, Tailwind, TypeScript, OpenAI, Supabase, Cloudflare
- **Columna derecha (Manifiesto):**
  - **Badge superior:** mono text-xs uppercase tracking-widest color cyan, texto "Manifiesto 2026"
  - **Title:** display 4xl semibold, margin-top 16px
  - **Lista de 7 puntos:**
    - Cada punto: padding-y 24px, border-bottom hairline (excepto el último)
    - Número (mono 2xl bold cyan) + Título (display lg semibold) + Body (text-sm muted)
    - Layout: número a la izquierda, texto a la derecha, gap 24px

**Animaciones:**
- Logos: stagger reveal con scale 0.95 → 1 y opacity, duración 800ms
- Puntos del manifiesto: ScrollTrigger fade-in y: 20 → 0 con stagger 100ms

---

## 12. § 6. PRICING / COLABORACIÓN

**Layout:** 2 cards side-by-side desktop (gap generoso), stacked mobile.

**Estructura visual:**

```
┌──────────────────────────────────────────────────────────────┐
│                                                              │
│   Modelos de colaboración.                                  │
│                                                              │
│   Elige la vía que mejor se adapte a tu fase actual.        │
│                                                              │
│   ┌──────────────────────┐    ┌──────────────────────┐     │
│   │  Fase 1 & 2          │    │  Fase 3 & 4          │     │
│   │                      │    │      ✦ Recomendado   │     │
│   │  Proyecto Único      │    │  Socio Estratégico   │     │
│   │                      │    │                      │     │
│   │  Cimentación y       │    │  Capacidad técnica   │     │
│   │  estructura técnica  │    │  mensual para        │     │
│   │  para empresas que   │    │  orquestar agentes,  │     │
│   │  necesitan una base  │    │  automatizar flujos  │     │
│   │  sólida.             │    │  y evolucionar.      │     │
│   │                      │    │                      │     │
│   │  ✓ Brand Eng+Design  │    │  ✓ Orquestación IA   │     │
│   │  ✓ Web HighPerf      │    │  ✓ Workflows         │     │
│   │  ✓ Plan de obra IA   │    │  ✓ Mantenim. evol.   │     │
│   │  ✓ Infra Cloud+SEO   │    │  ✓ Consultoría mens. │     │
│   │  ✓ Lighthouse 100    │    │  ✓ Soporte 24/7      │     │
│   │                      │    │                      │     │
│   │  [Consultar →]       │    │  [Hablemos →]        │     │
│   └──────────────────────┘    └──────────────────────┘     │
└──────────────────────────────────────────────────────────────┘
```

**Detalles visuales:**

- **Title:** display 5xl semibold
- **Subtitle:** text-lg muted, max-width 600px
- **Grid:** `grid-cols-1 md:grid-cols-2 gap-12`, margin-top 64px
- **Card individual:**
  - Padding 48px
  - Background `#0A0A0B` (surface)
  - Border 1px hairline
  - Border-radius 24px
  - Estructura:
    - **Badge superior:** mono text-xs uppercase tracking-widest, color muted
    - **Title:** display 3xl semibold, margin-top 24px
    - **Description:** text-base muted, margin-top 16px, max-width 90%
    - **Lista de 5 items:** margin-top 32px, gap 16px entre items
    - Cada item: flex con checkmark icon (16px, color cyan en card recomendada, blanco/40 en card base) + text-base
    - **CTA:** Button (primary o secondary), full-width, margin-top 48px
  - **Card recomendada (derecha — Modelo B):**
    - Border color: cyan al 40%
    - Glow sutil: `0 0 64px -16px rgba(2, 222, 240, 0.3)`
    - Tag flotante esquina superior derecha: "✦ Recomendado para escalabilidad" en mono text-xs cyan
    - Botón CTA en variant primary (cyan)
  - **Card base (izquierda — Modelo A):**
    - Border color hairline normal
    - Botón CTA en variant secondary (outline)

**Animaciones:**
- Cards entran con ScrollTrigger, fade-in y: 40 → 0, stagger 150ms

---

## 13. § 7. FOOTER

**Layout:** 3 zonas verticales con dividers hairline.

**Estructura visual:**

```
┌──────────────────────────────────────────────────────────────┐
│                                                              │
│   ¿Listo para construir con criterio?                       │
│                                                              │
│   [Agenda tu plano de obra →]   [Ver casos de éxito]        │
│                                                              │
│   ✦ Cupos limitados. Solo aceptamos 2 proyectos por trim.   │
│                                                              │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│   ✦ PIENXE        Servicios        Pienxe         Legal     │
│                                                              │
│   Agencia        Cimentación      Casos          Aviso      │
│   boutique       Estructura       Cómo trab.     Privacidad │
│   premium...     Inteligencia     Colaboración   Cookies    │
│                  Escalabilidad    Sobre nosotros            │
│                                                              │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│   ● Estado: Operativo   © 2026 Pienxe. Built in Hamburg.   │
└──────────────────────────────────────────────────────────────┘
```

**Detalles visuales:**

- **Zona 1 — CTA final:**
  - Padding 96px vertical
  - **Heading:** display 5xl semibold, max-width 800px
  - **Botones:** flex gap-4, margin-top 48px
  - **Escasez:** flex con isotipo cyan + text-sm muted, margin-top 48px
- **Zona 2 — Links 4 columnas:**
  - Padding 64px vertical
  - Border-top hairline
  - Grid: `grid-cols-1 md:grid-cols-4 gap-12`
  - Columna 1: Logo + descripción text-sm muted, max-width 280px
  - Columnas 2-4: Title (text-sm uppercase tracking-widest color muted) + lista de links (text-sm white, hover cyan)
- **Zona 3 — Bottom bar:**
  - Padding 32px vertical
  - Border-top hairline
  - Flex space-between
  - Izquierda: status indicator (●cyan parpadeando) + text-xs mono
  - Derecha: text-xs mono color muted, "© 2026 Pienxe. Built in Hamburg."

---

## 14. Notas técnicas para implementación

### 14.1 Stack confirmado

- **Framework:** Astro 4.x (Zero-JS por defecto)
- **Estilos:** Tailwind CSS 3.x (tokens en `tailwind.config.mjs`)
- **Lenguaje:** TypeScript estricto
- **Animaciones:** GSAP (mínimo, sólo donde aporta valor)
- **i18n:** Route-based (es/en/de)
- **Iconografía:** SVG inline custom (NO Lucide ni librerías externas)
- **Tipografía:** Auto-hospedada en `/public/fonts/` (Outfit, Inter, JetBrains Mono variable)

### 14.2 Performance budgets (NO negociables)

| Métrica | Target |
|---------|--------|
| Lighthouse Mobile | 100 / 100 / 100 / 100 |
| LCP | < 1.2s en 4G simulada |
| CLS | < 0.05 |
| TBT | < 100ms |
| JS shipped | < 30KB gzip por página |

### 14.3 Accesibilidad

- Contraste AAA en body text
- H1 único por página
- Focus visible con outline cyan 2px
- `aria-hidden="true"` en SVG decorativo, `<title>` en informativo
- Skip-to-content visible al focus
- Respetar `prefers-reduced-motion`

### 14.4 Componentes ya existentes (no rediseñar)

- `src/components/ui/Button.astro` — Variants primary/secondary, sizes sm/md/lg
- `src/components/ui/Logo.astro` — SVG inline con prop `animate`
- `src/components/ui/LanguagePicker.astro` — ES/EN/DE switcher
- `src/layouts/BaseLayout.astro` — SEO + i18n
- `src/i18n/ui.ts` — Strings 326 keys × 3 idiomas

---

## 15. Notas de calidad para iteración

Después de la primera generación, validar/refinar:

1. **¿El acento cyan aparece más de 1 vez por sección visible?** Si sí, reducir.
2. **¿Hay gradientes decorativos?** Si sí, eliminar (sólo glows sutiles permitidos).
3. **¿Las sombras son tipo "drop material"?** Si sí, reemplazar por glow/hairline.
4. **¿La tipografía display tiene tracking positivo (letras espaciadas)?** Si sí, corregir a negativo.
5. **¿Algún CTA tiene `border-radius: 50%` (pill barato)?** Si sí, usar `rounded-md` (8px) o `rounded-lg` (16px).
6. **¿Hay emojis decorativos?** Reemplazar por SVG icons custom.
7. **¿El fondo es `#000000`?** Cambiar a `#030303`.
8. **¿El isotipo aparece tileado en background?** Eliminar.
9. **¿Hay texto en mayúsculas no-mono?** Sólo permitir mayúsculas en labels mono técnicas.
10. **¿La promesa pública aparece en el hero?** Debe aparecer (text-sm italic muted, debajo de CTAs).

---

## 16. Para Stitch específicamente

**Prompt corto para iniciar (si la herramienta requiere un input conciso):**

> Premium boutique tech agency landing page for "Pienxe" (Hamburg-based). Dark mode only (#030303 bg, #FEFEFE text, #02DEF0 cyan accent used max 1× per viewport). Editorial-premium aesthetic: Linear × Pentagram × Apple Newsroom. Display font Outfit (negative tracking -0.02em). 7 sections: Hero (asymmetric bento, large H1 "Piensa antes de construir." + laboratory stats panel + lat/lon Hamburg metadata), 4-Phase Services Grid (2×2 cards with hairline borders), Case Studies (zig-zag with 16:9 visuals), Process Timeline (3 vertical steps with cyan connecting line), Stack + Manifesto (2-column with hairline divider), Pricing (2 cards with one recommended), Footer (3 zones: CTA + 4-col links + status bar). Use 4pt spacing grid, modular type ratio 1.25, glow-accent shadows only (no drop shadows), 4-pointed asymmetric cyan star as recurring brand element. Mobile-first responsive at 640/768/1024/1280/1536 breakpoints. NO carousels, NO stock photos, NO emojis, NO web3 gradients, NO light mode.

---

_Documento agnóstico al modelo. Última revisión: 2026-05-11._
