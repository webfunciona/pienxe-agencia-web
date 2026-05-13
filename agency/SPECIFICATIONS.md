# SPECIFICATIONS.md — Specs de la landing Pienxe

> Este archivo es **la única fuente de verdad funcional**. Ningún componente de UI nuevo se construye sin una spec aprobada aquí. Ver `CLAUDE.md` §3 para el flujo SDD.

---

## Estado

✅ **Landing Page Foundation completada** — todos los componentes core están operativos.

---

## SPEC-001 — Hero principal

- **Estado:** ✅ Implementada (GSAP animations)
- **Objetivo único (DOOE):** Que el visitante cualificado (CTO / founder / CMO) haga clic en el CTA primario para agendar una llamada o ver los casos de estudio.
- **Métrica de éxito:** CTR del CTA primario > 8% desktop, > 5% mobile.
- **Coste de atención:** H1 (4 palabras) + H2 (1 frase) + 1 clic. Máximo 5 segundos de lectura.
- **Plan B:** Si no hay clic en CTA, scroll natural hacia la sección de servicios.
- **Inputs:**
  - Ningún dato externo — contenido estático.
- **Outputs / comportamiento:**
  - `<section>` full-viewport (`min-height: 100dvh`) con contenido centrado vertical y horizontalmente.
  - H1 en `text-7xl` desktop / `text-5xl` mobile: *"Piensa antes de construir."*
  - H2 en `text-xl` desktop / `text-base` mobile: *"Pienxe construye web premium y orquestación de IA para empresas que valoran el resultado, no el ruido."*
  - Promesa pública en `text-sm text-muted`: *"Lo que entregamos opera el lunes. O no lo entregamos."*
  - CTA primario `<Button variant="primary">` — texto: "Hablemos" (enlaza a `#contacto`).
  - CTA secundario `<Button variant="secondary">` — texto: "Ver casos" (enlaza a `#casos`).
  - Sin foto — énfasis tipográfico puro sobre `#030303`.
  - Sin mención de Rosana — voz institucional Pienxe.
- **Edge cases:**
  - Sin JS: funciona completamente (cero islands, sin animaciones).
  - Reduced motion: sin animaciones de entrada.
  - Mobile < 360 px: H1 en `text-4xl`, H2 en `text-sm`.
  - i18n: textos hardcodeados en español (es) por ahora. Preparar extracción a i18n en SPEC posterior.
- **Accesibilidad:** H1 único en la página. CTA con texto descriptivo. Contraste AAA en todos los textos sobre `#030303`.
- **Performance budget:** 0 KB JS core (excluyendo GSAP runtime). Peso 0 adicional al budget de fuentes.
- **Dependencias:**
  - `Button.astro` ✅
  - `BaseLayout.astro` ✅
  - `gsap` (Animation engine) ✅
  - Webfonts en `/public/fonts` — pendiente (fallback de sistema funciona mientras tanto).
- **Notas de diseño:**
  - Acento `#02DEF0` máximo una vez: candidato en el CTA primario (`bg-accent`).
  - GSAP: Reveal de H1 con y: 40 y opacity: 0. Stagger sutil para el resto de elementos.
  - Whitespace vertical generoso: mínimo `py-32` arriba y abajo del bloque de texto.
  - H1 en `font-display` weight 600 con tracking `-0.02em`.
  - La promesa pública va en `text-muted` para mantener jerarquía visual.
  - Layout en stack vertical centrado: H1 → H2 → promesa → grupo de CTAs.

---

## SPEC-002 — Propuesta de Valor (Fases de Servicio)

- **Estado:** ✅ Implementada (GSAP ScrollTrigger)
- **Objetivo único (DOOE):** Demostrar la profundidad técnica y el rigor de Pienxe, transformando "servicios" en un "plano de obra" por fases.
- **Métrica de éxito:** Tiempo de permanencia en la sección > 15 segundos (lectura de las fases).
- **Coste de atención:** 4 bloques de contenido. Scroll vertical.
- **Plan B:** Si no lee el detalle, las imágenes brutas y los títulos deben transmitir "premium/tech" por sí solos.
- **Inputs:**
  - Assets en `/public/services/fase-[1-4].png`.
  - Copy extraído de `BRAND.md` (Fases 1-4).
- **Outputs / comportamiento:**
  - Grid de 2x2 en desktop, stack de 1 en mobile.
  - Cada bloque contiene: Número de fase, Título, Imagen técnica, Descripción y Promesa firma.
  - **Animaciones GSAP:** ScrollTrigger para revelar cada card cuando entra en el viewport con un ligero `y: 30` y `opacity: 1`.
- **Edge cases:**
  - Sin JS: Grid estático visible.
  - Mobile < 360 px: Ajustar padding lateral.
- **Accesibilidad:** Uso de `<h3>` para títulos de fase. Alt text descriptivo para imágenes técnicas.
- **Performance budget:** Imágenes optimizadas en formato `.webp` o `.avif` (convertir desde `.png` si es posible).
- **Dependencias:**
  - `fase-1.png`, `fase-2.png`, `fase-3.png`, `fase-4.png` ✅
- **Notas de diseño:**
  - Estética: "Lucidez con calor".
  - Borders sutiles (`border-border/50`) y fondos ligeramente elevados (`bg-surface/50`).
  - El acento Cyan (`#02DEF0`) se usa solo en el número de fase o detalles mínimos de la imagen.

---

## SPEC-003 — Casos de Estudio (Portfolio)

- **Estado:** ✅ Implementada (GSAP ScrollTrigger + Parallax)
- **Objetivo único (DOOE):** Validar la capacidad de entrega de Pienxe mediante ejemplos reales de alta complejidad técnica.
- **Métrica de éxito:** Clic en "Ver detalles" o scroll hasta el final de la sección.
- **Coste de atención:** 2-3 grandes bloques visuales.
- **Plan B:** Si no hay clics, la calidad de las capturas/visualizaciones debe hablar por sí sola.
- **Inputs:**
  - `mariachi-express.png`, `andre-riedel.png`.
  - Copy de `BRAND.md` §1.5.
- **Outputs / comportamiento:**
  - Lista vertical de proyectos con alternancia de layout (Imagen izquierda / Texto derecha y viceversa).
  - Título del proyecto, tag de territorio (ej. "Automatización operativa"), descripción del "sistema" entregado y resultado clave.
  - **Animaciones GSAP:** ScrollTrigger para parallax suave en las imágenes y revelado de texto.
- **Edge cases:**
  - Sin JS: Lista estática.
- **Accesibilidad:** Títulos descriptivos, contraste adecuado.
- **Performance budget:** Lazy loading agresivo para las imágenes.
- **Dependencias:**
  - Assets en `/public/cases/` ✅
- **Notas de diseño:**
  - Estética: "Mastery silenciosa".
  - Imágenes con ratio `16:9` o similar, ocupando gran parte del ancho en desktop.
  - Tipografía limpia, mucho aire entre proyectos.

---

## SPEC-004 — Cómo trabajamos (Proceso)

- **Estado:** ✅ Implementada (GSAP Timeline + Reveal)
- **Objetivo único (DOOE):** Eliminar el miedo al "humo" en IA mediante la exposición de un proceso de ingeniería riguroso y transparente.
- **Métrica de éxito:** Scroll completo hasta el final de la sección.
- **Coste de atención:** 3 bloques secuenciales. Lectura de ~15 segundos.
- **Plan B:** Si el usuario salta la sección, los encabezados deben transmitir "orden y rigor".
- **Inputs:**
  - Manifiesto en `BRAND.md` §3.3.
- **Outputs / comportamiento:**
  - Layout de "Pasos" numerados o línea de tiempo vertical.
  - Pasos: 
    1. **Especifiación**: No empezamos sin un plano.
    2. **Arquitectura**: Construimos el cerebro antes que la interfaz.
    3. **Operación**: Entrega lista para el lunes.
  - **Animaciones GSAP:** Efecto de "dibujado" de línea conectora entre pasos o revelado secuencial.
- **Edge cases:**
  - Sin JS: Lista estática simple.
- **Accesibilidad:** Marcado semántico claro.
- **Performance budget:** 0 assets externos pesados (uso de SVGs o iconos CSS).
- **Notas de diseño:**
  - Estética: "Cimentación, no decoración".
  - Uso de tipografía mono para detalles técnicos.
  - Fondo `#030303` con acentos en `border-accent`.

---

## SPEC-005 — Stack y Manifiesto Técnico

- **Estado:** ✅ Implementada (GSAP Staggered Reveal)
- **Objetivo único (DOOE):** Establecer autoridad técnica y filtrar clientes por afinidad de valores y stack.
- **Métrica de éxito:** Scroll hasta el manifiesto completo.
- **Coste de atención:** Lista de logos/tecnologías + 7 puntos de manifiesto.
- **Plan B:** Si no lee los 7 puntos, el listado de tecnologías debe gritar "Modernidad y Robustez".
- **Inputs:**
  - Manifiesto en `BRAND.md` §3.3.
  - Stack: Astro, GSAP, Tailwind, OpenAI, Supabase, Cloudflare.
- **Outputs / comportamiento:**
  - Sección dividida en dos bloques: "Nuestro Engine" (Stack) y "Nuestros Principios" (Manifiesto).
  - Stack: Logos en escala de grises con hover a color/accent.
  - Manifiesto: Lista numerada con tipografía de alto contraste.
  - **Animaciones GSAP:** Revelado en cascada de los logos y entrada suave de los puntos del manifiesto.
- **Edge cases:**
  - Sin JS: Visible y legible.
- **Accesibilidad:** Uso de listas semánticas.
- **Performance budget:** Uso de SVGs ligeros para logos.
- **Notas de diseño:**
  - El manifiesto debe sentirse como un "documento oficial" o "estatuto".
  - Tipografía `font-display` para los puntos del manifiesto.

## SPEC-006 — Modelos de Colaboración (Pricing)

- **Estado:** ✅ Implementada (Slide-in Cards)
- **Objetivo único (DOOE):** Clarificar las dos vías de trabajo con Pienxe (Finito vs Continuo) para que el prospecto se auto-segmente antes de la llamada.
- **Métrica de éxito:** Scroll hasta el final de la sección y visualización de ambos modelos.
- **Coste de atención:** Lectura de 2 bloques comparativos. ~15 segundos.
- **Plan B:** Si no se entiende la diferencia, el botón "Hablemos" sigue siendo el cierre universal.
- **Inputs:**
  - Copy basado en el posicionamiento boutique (Proyecto vs Retainer).
- **Outputs / comportamiento:**
  - Dos columnas (desktop) / Stack (mobile).
  - **Modelo A: Project-Based (Cimentación y Estructura)**. Enfoque en entregables cerrados: Identidad, Web High-Performance, Auditoría IA.
  - **Modelo B: Strategic Retainer (Inteligencia y Escalabilidad)**. Enfoque en capacidad mensual: Orquestación de agentes, automatización de procesos, consultoría continua.
  - Cada bloque con lista de beneficios y un CTA secundario "Consultar disponibilidad".
  - **Animaciones GSAP:** Revelado lateral (Slide in) para cada modelo.
- **Edge cases:**
  - Sin JS: Visible.
- **Accesibilidad:** Uso de `<h3>` para cada modelo. Contraste AAA.
- **Performance budget:** 0 assets pesados.
- **Notas de diseño:**
  - No usar tablas de precios estilo SaaS (Basic/Pro/Enterprise).
  - Usar un lenguaje de "Inversión" en lugar de "Costo".
  - El modelo de Retainer debe destacar visualmente como la opción de mayor valor a largo plazo.

---

## SPEC-007 — Footer + CTA Final

- **Estado:** ✅ Implementada (GSAP Reveal + Final CTA)
- **Objetivo único (DOOE):** Convertir el interés residual en una acción de contacto directa y proporcionar navegación legal/social.
- **Métrica de éxito:** Clic en el CTA final "Agenda tu plano de obra".
- **Coste de atención:** Visualización rápida.
- **Plan B:** Si no convierte, el Footer ofrece el enlace a LinkedIn de la fundadora para "Social Proof".
- **Inputs:**
  - Enlaces legales: Aviso Legal, Privacidad, Cookies.
  - Social: LinkedIn.
- **Outputs / comportamiento:**
  - Bloque final de CTA con H2 impactante: "¿Listo para construir con criterio?"
  - Botón primario de gran tamaño.
  - Footer minimalista con:
    - Wordmark "PIENXE"
    - Copyright & Créditos.
    - Selector de idioma (placeholder i18n).
    - Enlaces legales.
  - **Animaciones GSAP:** Fade-in suave al llegar al final de la página.
- **Edge cases:**
  - Sin JS: Visible.
- **Accesibilidad:** Enlaces claros, roles de navegación.
- **Performance budget:** 0 assets pesados.
- **Notas de diseño:**
  - Fondo negro absoluto `#000000` para separar del `bg-surface`.
  - Tipografía pequeña y elegante para el footer (`text-xs`).
  - Separación visual mediante línea de 1px.

---

---

## SPEC-008 — Página de Contacto (Formulario)

- **Estado:** 🏗️ En planificación
- **Objetivo único (DOOE):** Recolectar leads cualificados mediante un formulario minimalista que respete la estética premium y capture la información necesaria para el primer "Plano de Obra".
- **Métrica de éxito:** Tasa de envío de formulario (Conversion Rate) > 10% de los visitantes a la página de contacto.
- **Coste de atención:** Formulario de 5-6 campos máximo. Tiempo estimado de completado < 45 segundos.
- **Plan B:** Si el formulario falla o el usuario prefiere contacto directo, mostrar el email de contacto en el pie de página o tras un error.
- **Inputs:**
  - `i18n` labels para cada campo (Nombre, Email, Empresa, Mensaje, Presupuesto).
- **Outputs / comportamiento:**
  - Página dedicada `/contact`.
  - Layout: `Navbar` + `ContactForm` + `Footer`.
  - **Campos del formulario:**
    1.  **Nombre completo** (Input text)
    2.  **Email profesional** (Input email)
    3.  **Empresa / Proyecto** (Input text)
    4.  **Presupuesto estimado** (Select: <5k, 5k-15k, 15k-50k, >50k) - Ayuda a cualificar.
    5.  **¿Cómo podemos orquestar tu solución?** (Textarea)
  - **Validación:** Browser-native + Feedback visual en focus/error (Electric Cyan outline).
  - **Envío:** Placeholder de envío (por ahora solo log o preventDefault) o integración con servicio de formularios si existe (ej. Netlify, Formspree).
  - **Animaciones GSAP:** Revelado escalonado de los campos del formulario (`stagger`).
- **Edge cases:**
  - Sin JS: Formulario funcional (HTML nativo).
  - Mobile: Campos en stack vertical (100% ancho).
  - i18n: Rutas `/es/contacto` y `/de/kontakt`.
- **Accesibilidad:** Labels asociados a inputs, ARIA-required, estados de focus claros.
- **Performance budget:** 0 assets externos. CSS puro + micro-JS para el envío.
- **Notas de diseño:**
  - Fondo `#030303`.
  - Inputs con fondo oscuro y borde sutil, que se ilumina en `Electric Cyan` al hacer focus.
  - El botón de envío debe ser prominente (Variant primary).
  - Título minimalista: "Hablemos" o "Inicia tu proyecto".
