const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    "shadow": {
      0: '0 0 0 0 rgba(0, 0, 0, 0)',
      1: [
        '0px 1px 3px rgba(0, 0, 0, 0.08)',
        '0px 2px 1px rgba(0, 0, 0, 0.07)',
        '0px 1px 1px rgba(0, 0, 0, 0.12)',
      ],
      2: [
        '0px 1px 5px rgba(0, 0, 0, 0.02)',
        '0px 3px 1px rgba(0, 0, 0, 0.07)',
        '0px 2px 2px rgba(0, 0, 0, 0.12)',
      ],
      3: [
        '0px 1px 8px rgba(0, 0, 0, 0.04)',
        '0px 3px 3px rgba(0, 0, 0, 0.07)',
        '0px 3px 4px rgba(0, 0, 0, 0.08)',
      ],
      4: [
        '0px 2px 4px rgba(0, 0, 0, 0.06)',
        '0px 1px 10px rgba(0, 0, 0, 0.07)',
        '0px 4px 5px rgba(0, 0, 0, 0.10)',
      ],
      5: [
        '0px 3px 5px rgba(0, 0, 0, 0.06)',
        '0px 1px 18px rgba(0, 0, 0, 0.07)',
        '0px 6px 10px rgba(0, 0, 0, 0.10)',
      ],
      6: [
        '0px 3px 5px rgba(0, 0, 0, 0.06)',
        '0px 1px 18px rgba(0, 0, 0, 0.07)',
        '0px 6px 10px rgba(0, 0, 0, 0.10)',
      ],
      7: [
        '0px 4px 5px rgba(0, 0, 0, 0.06)',
        '0px 1px 22px rgba(0, 0, 0, 0.07)',
        '0px 7px 8px rgba(0, 0, 0, 0.10)',
      ],
      8: [
        '0px 5px 5px rgba(0, 0, 0, 0.06)',
        '0px 1px 25px rgba(0, 0, 0, 0.07)',
        '0px 8px 10px rgba(0, 0, 0, 0.10)',
      ],
      12: [
        '0px 7px 8px rgba(0, 0, 0, 0.06)',
        '0px 5px 22px rgba(0, 0, 0, 0.07)',
        '0px 12px 17px rgba(0, 0, 0, 0.10)',
      ],
      16: [
        '0px 8px 10px rgba(0, 0, 0, 0.10)',
        '0px 6px 30px rgba(0, 0, 0, 0.07)',
        '0px 16px 24px rgba(0, 0, 0, 0.10)',
      ],
      24: [
        '0px 11px 15px rgba(0, 0, 0, 0.10)',
        '0px 9px 46px rgba(0, 0, 0, 0.07)',
        '0px 24px 38px rgba(0, 0, 0, 0.10)',
      ]
    },
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'blue',
        'white': '#ffffff',
        'blue': {
          DEFAULT: "var(--blue-500)",
          50: "var(--blue-50)",
          100: "var(--blue-100)",
          200: "var(--blue-200)",
          300: "var(--blue-300)",
          400: "var(--blue-400)",
          500: 'var(--blue-500)',
          600: 'var(--blue-600)',
          700: 'var(--blue-700)',
          800: "var(--blue-800)",
          900: "var(--blue-900)",
          950: "var(--blue-950)",
        },
        "space-blue": {
          DEFAULT: "var(--space-blue-900)",
          900: "var(--space-blue-900)",
          50: "var(--space-blue-50)",
        },
        primary: "var(--primary-color)",
        background: "rgb(var(--background-color) / <alpha-value>)",
        stroke: "var(--stroke-color)",
        "stroke-muted": "var(--stroke-muted-color)",
        "switch-off": "var(--switch-off-color)",
        "switch-on": "var(--switch-on-color)",
        "btn-primary": "var(--btn-primary-color)",
        "btn-primary-hover": "var(--btn-primary-color-hover)",
        "btn-primary-active": "var(--btn-primary-color-active)",
        "on-primary": "var(--on-primary)",
        "on-surface": {
          DEFAULT: "var(--on-surface-high)",
          high: "var(--on-surface-high)",
          medium: "var(--on-surface-medium)",
          low: "var(--on-surface-low)",
          disabled: "var(--on-surface-disabled)",
        },
        "material": {
          "metal": {
            DEFAULT: "var(--material-metal-4dp)",
            1: "var(--material-metal-1dp)",
            2: "var(--material-metal-2dp)",
            3: "var(--material-metal-3dp)",
            4: "var(--material-metal-4dp)",
            6: "var(--material-metal-6dp)",
            8: "var(--material-metal-8dp)",
            12: "var(--material-metal-12dp)",
            16: "var(--material-metal-16dp)",
            24: "var(--material-metal-24dp)",
          }
        },
        "utility": {
          "success": {
              DEFAULT: "var(--utility-success-50)",
              50: "var(--utility-success-50)",
              100: "var(--utility-success-100)",
              200: "var(--utility-success-200)",
              300: "var(--utility-success-300)",
              400: "var(--utility-success-400)",
              500: "var(--utility-success-500)",
              600: "var(--utility-success-600)",
              700: "var(--utility-success-700)",
              800: "var(--utility-success-800)",
              900: "var(--utility-success-900)",
              950: "var(--utility-success-950)",
          },
          "error": {
              DEFAULT: "var(--utility-error-50)",
              50: "var(--utility-error-50)",
              100: "var(--utility-error-100)",
              200: "var(--utility-error-200)",
              300: "var(--utility-error-300)",
              400: "var(--utility-error-400)",
              500: "var(--utility-error-500)",
              600: "var(--utility-error-600)",
              700: "var(--utility-error-700)",
              800: "var(--utility-error-800)",
              900: "var(--utility-error-900)",
              950: "var(--utility-error-950)",
        
          },
        },
      },
    },
  },
  plugins: [],
}

