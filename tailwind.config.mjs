/** @type {import('tailwindcss').Config} */
// ───────────────────────────────────────────────────────────────────────────────
//  PIENXE — Tailwind config
//  Tokens derivados de logo/Logo_Pienxe.svg + AGENTS.md (sección 5).
//  Cualquier valor aquí debe poder rastrearse a AGENTS.md. Si diverge, AGENTS.md gana.
// ───────────────────────────────────────────────────────────────────────────────

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],

  // Modo oscuro = default. La clase 'light' (futura) habilitaría el modo claro.
  darkMode: ['class', '[data-theme="light"]'],

  theme: {
    // Reescribimos colores desde cero — no queremos paleta accidental de Tailwind.
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      inherit: 'inherit',

      // Marca Pienxe — fuente de verdad
      bg: '#030303',           // Fondo absoluto (deep black del logo)
      fg: '#FEFEFE',           // Texto principal (blanco del wordmark)
      accent: {
        DEFAULT: '#02DEF0',    // Cyan único del isotipo
        50:  '#E6FDFE',
        100: '#CCFBFE',
        200: '#99F7FC',
        300: '#66F2FA',
        400: '#33EEF8',
        500: '#02DEF0',        // Canónico
        600: '#02B2C0',
        700: '#018590',
        800: '#015960',
        900: '#002C30',
      },
      muted: '#A1A1AA',        // Texto secundario
      surface: '#0A0A0B',      // Cards, secciones elevadas
      border: '#1F1F22',       // Hairlines

      // Estados (mínimos, neutros — el acento NO se usa para errores/éxitos)
      danger: '#F43F5E',
      success: '#10B981',
      warning: '#F59E0B',
    },

    // Espaciado en múltiplos de 4 px estricto (AGENTS.md §5.4)
    spacing: {
      0: '0',
      px: '1px',
      0.5: '0.125rem',  // 2
      1: '0.25rem',     // 4
      2: '0.5rem',      // 8
      3: '0.75rem',     // 12
      4: '1rem',        // 16
      5: '1.25rem',     // 20
      6: '1.5rem',      // 24
      8: '2rem',        // 32
      10: '2.5rem',     // 40
      12: '3rem',       // 48
      16: '4rem',       // 64
      20: '5rem',       // 80
      24: '6rem',       // 96
      32: '8rem',       // 128
      40: '10rem',      // 160
      48: '12rem',      // 192
      64: '16rem',      // 256
    },

    // Escala tipográfica modular ratio 1.25 (AGENTS.md §5.2)
    fontSize: {
      xs:   ['0.75rem',   { lineHeight: '1.25rem',  letterSpacing: '0' }],
      sm:   ['0.875rem',  { lineHeight: '1.375rem', letterSpacing: '-0.005em' }],
      base: ['1rem',      { lineHeight: '1.625rem', letterSpacing: '-0.011em' }],
      lg:   ['1.125rem',  { lineHeight: '1.75rem',  letterSpacing: '-0.014em' }],
      xl:   ['1.25rem',   { lineHeight: '1.875rem', letterSpacing: '-0.017em' }],
      '2xl':['1.5rem',    { lineHeight: '2rem',     letterSpacing: '-0.019em' }],
      '3xl':['1.875rem',  { lineHeight: '2.25rem',  letterSpacing: '-0.021em' }],
      '4xl':['2.25rem',   { lineHeight: '2.625rem', letterSpacing: '-0.023em' }],
      '5xl':['3rem',      { lineHeight: '3.375rem', letterSpacing: '-0.025em' }],
      '6xl':['3.75rem',   { lineHeight: '4.125rem', letterSpacing: '-0.027em' }],
      '7xl':['4.5rem',    { lineHeight: '4.875rem', letterSpacing: '-0.028em' }],
      '8xl':['6rem',      { lineHeight: '6.25rem',  letterSpacing: '-0.03em' }],
      '9xl':['8rem',      { lineHeight: '8.25rem',  letterSpacing: '-0.032em' }],
    },

    fontFamily: {
      // Outfit / General Sans / Geist como display — Inter como cuerpo — JetBrains Mono para código.
      // Las webfonts se cargan localmente desde /public/fonts (AGENTS.md §2.2).
      display: ['Outfit', '"General Sans"', '"Geist Sans"', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
      sans:    ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Helvetica Neue', 'sans-serif'],
      mono:    ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
    },

    fontWeight: {
      regular: '400',
      medium: '500',
      semibold: '600',
    },

    borderRadius: {
      none: '0',
      sm: '4px',
      md: '8px',
      lg: '16px',
      xl: '24px',
      full: '9999px',
    },

    // Sombras adaptadas a fondo negro (AGENTS.md §5.6)
    boxShadow: {
      none: 'none',
      hairline: 'inset 0 1px 0 rgba(255,255,255,0.04)',
      'focus-accent':
        '0 0 0 1px #02DEF0, 0 0 24px -4px rgba(2, 222, 240, 0.4)',
      'glow-accent':
        '0 0 32px -8px rgba(2, 222, 240, 0.5)',
    },

    // Motion (AGENTS.md §5.7)
    transitionDuration: {
      DEFAULT: '200ms',
      fast: '120ms',
      slow: '400ms',
    },
    transitionTimingFunction: {
      DEFAULT: 'cubic-bezier(0.22, 1, 0.36, 1)', // ease-out-quart
    },

    // Breakpoints — mobile first
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },

    extend: {
      maxWidth: {
        prose: '68ch',
        container: '1200px',
        wide: '1440px',
      },
      // Animación sutil del isotipo (sin abusar — respeta prefers-reduced-motion)
      keyframes: {
        'sparkle-pulse': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(1.04)' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'sparkle-pulse': 'sparkle-pulse 3.2s ease-in-out infinite',
        'fade-in-up': 'fade-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
    },
  },

  plugins: [],
};
