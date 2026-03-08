// tailwind.config.mjs
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      // ── Brand Color Palette ─────────────────────────────────────
      // Inspired by bread crust, wheat flour and the warmth of a kiln.
      colors: {
        crust: {
          50:  '#fdf6ef',
          100: '#f9e8d3',
          200: '#f2cfa2',
          300: '#e9b06a',
          400: '#df8e3a',
          500: '#d4721f',
          600: '#bc5917',
          700: '#9c4116',
          800: '#7e3519',
          900: '#672e18',
          950: '#3c1509',
          DEFAULT: '#3c1509',  // 深焦げ茶 — primary dark
        },
        amber: {
          50:  '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
          DEFAULT: '#c17f3b',  // 琥珀 — accent
          brand: '#c17f3b',
        },
        wheat: {
          50:  '#fefdf9',
          100: '#fdf8ee',
          200: '#faf0d7',
          300: '#f5e4b8',
          400: '#efd291',
          500: '#e6bc62',
          600: '#d4a03a',
          700: '#b3822a',
          800: '#926626',
          900: '#785425',
          DEFAULT: '#f5edd8',  // 小麦生成り — light background
          cream: '#faf6ee',    // クリーム白
        },
        smoke: {
          DEFAULT: '#3a3530',  // スモークグレー — body text
          light:   '#8c8078',  // 灰 — muted text
        },
        kiln: {
          DEFAULT: '#1e1e1e',  // 窯の黒 — darkest
          800:     '#2c1a0e',  // 深みのある黒茶
        },
      },

      // ── Typography ─────────────────────────────────────────────
      fontFamily: {
        display: ['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif'],
        serif:   ['"Noto Serif JP"', 'Georgia', 'serif'],
        sans:    ['"Noto Sans JP"', '"Hiragino Kaku Gothic ProN"', 'sans-serif'],
        mono:    ['"JetBrains Mono"', 'monospace'],
      },

      // ── Fluid Font Sizes ───────────────────────────────────────
      fontSize: {
        'display-xl': ['clamp(3.5rem, 9vw, 8rem)',   { lineHeight: '0.95', letterSpacing: '-0.03em' }],
        'display-lg': ['clamp(2.5rem, 6vw, 5.5rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display-md': ['clamp(1.8rem, 4vw, 3rem)',   { lineHeight: '1.10', letterSpacing: '-0.01em' }],
        'eyebrow':    ['0.68rem', { lineHeight: '1', letterSpacing: '0.28em' }],
        'label':      ['0.72rem', { lineHeight: '1', letterSpacing: '0.2em'  }],
        'body-lg':    ['1.05rem', { lineHeight: '1.9' }],
        'body-sm':    ['0.85rem', { lineHeight: '1.8' }],
      },

      // ── Spacing ────────────────────────────────────────────────
      spacing: {
        '18':  '4.5rem',
        '22':  '5.5rem',
        '30':  '7.5rem',
        '34':  '8.5rem',
        'section':    '7.5rem',   // 120px standard section padding
        'section-sm': '5rem',     // 80px mobile section padding
      },

      maxWidth: {
        content: '1140px',
        prose:   '680px',
        narrow:  '520px',
      },

      // ── Shadows ────────────────────────────────────────────────
      boxShadow: {
        'card':       '0 4px 24px rgba(44, 26, 14, 0.10)',
        'card-hover': '0 12px 48px rgba(44, 26, 14, 0.18)',
        'nav':        '0 1px 32px rgba(0, 0, 0, 0.25)',
        'inset-top':  'inset 0 1px 0 rgba(255,255,255,0.08)',
      },

      // ── Borders ────────────────────────────────────────────────
      borderColor: {
        DEFAULT: 'rgba(193, 127, 59, 0.2)',
      },

      // ── Transitions ────────────────────────────────────────────
      transitionTimingFunction: {
        'out-expo':    'cubic-bezier(0.19, 1, 0.22, 1)',
        'in-out-circ': 'cubic-bezier(0.85, 0, 0.15, 1)',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
        '1000': '1000ms',
      },

      // ── Keyframes & Animations ─────────────────────────────────
      keyframes: {
        'fade-up': {
          '0%':   { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)'    },
        },
        'fade-in': {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'line-grow': {
          '0%':   { transform: 'scaleX(0)', transformOrigin: 'left' },
          '100%': { transform: 'scaleX(1)', transformOrigin: 'left' },
        },
        'scroll-bounce': {
          '0%, 100%': { transform: 'translateY(0)',   opacity: '0.4' },
          '50%':      { transform: 'translateY(6px)', opacity: '1'   },
        },
      },
      animation: {
        'fade-up':      'fade-up 0.9s cubic-bezier(0.19,1,0.22,1) both',
        'fade-in':      'fade-in 0.8s ease both',
        'line-grow':    'line-grow 1.2s cubic-bezier(0.19,1,0.22,1) both',
        'scroll-bounce':'scroll-bounce 1.8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
