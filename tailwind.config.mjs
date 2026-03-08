/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}'],
  theme: {
    extend: {
      // ── Color Palette ──────────────────────────────────────────────
      colors: {
        kura: {
          crust:    '#2C1A0E', // 深焦げ茶
          brown:    '#6B3A2A', // 窯茶
          amber:    '#C17F3B', // 琥珀
          wheat:    '#F5EDD8', // 小麦生成り
          cream:    '#FAF6EE', // クリーム白
          charcoal: '#1E1E1E', // 窯の黒
          smoke:    '#3A3530', // スモーク
          ash:      '#8C8078', // 灰
        },
      },

      // ── Typography ─────────────────────────────────────────────────
      fontFamily: {
        'serif-en': ['"Playfair Display"', 'Georgia', 'serif'],
        'serif-jp': ['"Noto Serif JP"', 'serif'],
        'sans-jp':  ['"Noto Sans JP"', 'sans-serif'],
      },

      // ── Font Sizes (fluid clamp values) ────────────────────────────
      fontSize: {
        'display':  ['clamp(3rem, 8vw, 7rem)',   { lineHeight: '1.0',  letterSpacing: '-0.02em' }],
        'heading':  ['clamp(2rem, 4vw, 3.2rem)', { lineHeight: '1.15' }],
        'subhead':  ['clamp(1.1rem, 2vw, 1.4rem)', { lineHeight: '1.5' }],
        'label':    ['0.70rem',  { letterSpacing: '0.25em' }],
        'eyebrow':  ['0.72rem',  { letterSpacing: '0.3em'  }],
        'caption':  ['0.75rem',  { letterSpacing: '0.15em' }],
        'body-sm':  ['0.82rem',  { lineHeight: '1.9' }],
        'price':    ['1.1rem',   { fontWeight: '700' }],
      },

      // ── Spacing ────────────────────────────────────────────────────
      spacing: {
        section:    '120px',
        'section-sm': '80px',
      },

      // ── Max Widths ─────────────────────────────────────────────────
      maxWidth: {
        content: '1100px',
        prose:   '640px',
        narrow:  '480px',
      },

      // ── Box Shadow ─────────────────────────────────────────────────
      boxShadow: {
        'card-hover': '0 20px 60px rgba(44, 26, 14, 0.18)',
        'nav':        '0 2px 24px rgba(0, 0, 0, 0.3)',
      },

      // ── Backdrop Blur ──────────────────────────────────────────────
      backdropBlur: {
        nav: '8px',
      },

      // ── Transition Timing ──────────────────────────────────────────
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },

      // ── Animation ─────────────────────────────────────────────────
      keyframes: {
        scrollPulse: {
          '0%, 100%': { opacity: '0.3', transform: 'scaleY(1)'   },
          '50%':      { opacity: '1',   transform: 'scaleY(1.2)' },
        },
      },
      animation: {
        'scroll-pulse': 'scrollPulse 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
