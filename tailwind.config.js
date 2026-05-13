/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "inverse-primary": "#b81f17", "primary-container": "#ffb3a8", "surface-container-high": "#272b2c", "secondary-fixed": "#e2e2e2", "secondary-container": "#474747", "inverse-on-surface": "#2d3132", "on-background": "#e0e3e4", "tertiary-fixed": "#acedff", "on-tertiary-fixed": "#001f26", background: "#101415", "on-tertiary-fixed-variant": "#004e5c", tertiary: "#a9ecff", "surface-container": "#1c2021", "outline-variant": "#4b444f", "on-tertiary": "#003640", error: "#ffb4ab", "on-secondary-container": "#b5b5b5", "on-primary-fixed-variant": "#930004", "tertiary-container": "#4bd6f5", "surface-bright": "#363a3b", "on-tertiary-container": "#005a6a", "on-secondary-fixed": "#1b1b1b", "tertiary-fixed-dim": "#4cd7f6", "surface-variant": "#313536", "secondary-fixed-dim": "#c6c6c6", outline: "#968e99", "on-surface": "#e0e3e4", "on-primary-fixed": "#410001", "on-surface-variant": "#cdc3d0", "on-primary-container": "#a60e0b", "on-primary": "#690002", "on-error-container": "#ffdad6", "surface-tint": "#ffb4a9", "on-error": "#690005", primary: "#B20923", "on-secondary": "#303030", secondary: "#c6c6c6", "surface-dim": "#101415", "primary-fixed-dim": "#ffb4a9", "error-container": "#93000a", "surface-container-low": "#181c1d", surface: "#101415", "on-secondary-fixed-variant": "#474747", "inverse-surface": "#e0e3e4", "surface-container-lowest": "#0b0f10", "surface-container-highest": "#313536", "primary-fixed": "#ffdad5"
      },
      borderRadius: {DEFAULT: "0.25rem", lg: "0.5rem", xl: "0.75rem", full: "9999px"},
      spacing: {base: "8px", gutter: "24px", "stack-lg": "80px", "stack-md": "32px", "stack-sm": "16px", "margin-x": "64px", "container-max": "1440px"},
      fontFamily: {h3: ["Space Grotesk"], h2: ["Space Grotesk"], "body-md": ["Inter"], "body-lg": ["Inter"], "label-caps": ["Space Grotesk"], h1: ["Space Grotesk"]},
      fontSize: {h3: ["32px", {lineHeight: "1.2", fontWeight: "600"}], h2: ["clamp(48px, 5vw, 72px)", {lineHeight: "1.1", fontWeight: "700"}], "body-md": ["16px", {lineHeight: "1.6", fontWeight: "400"}], "body-lg": ["18px", {lineHeight: "1.6", fontWeight: "400"}], "label-caps": ["14px", {lineHeight: "1", letterSpacing: "0.1em", fontWeight: "600"}], h1: ["72px", {lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700"}]},
      keyframes: {
        shine: {
          '0%': { transform: 'translateX(-150%) skewX(-20deg)' },
          '50%': { transform: 'translateX(150%) skewX(-20deg)' },
          '100%': { transform: 'translateX(150%) skewX(-20deg)' },
        }
      },
      animation: {
        shine: 'shine 3s infinite',
      }
    },
  },
  plugins: [],
}
