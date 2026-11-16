/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // #4860E4 is sampled from the icon and passes AA as small text on Star White.
        royal: "#4860E4",
        // #8EA2F8 is the icon's light sky blue. Dark text on it passes AA; white text does not.
        sky: "#8EA2F8",
        band: "#6378F0",
        lavender: "#D2D8FD",
        star: "#F7F7FE",
        // Dark neutral for reading text. Not used as a fill.
        navy: "#243044",
        eye: "#243044",
        beige: "#E2C79A",
        ink: "#243044",
        mute: "#5C6578",
        line: "#D2D8FD",
        mist: "#F7F7FE",
        good: "#067647",
        warn: "#8A5A00",
      },
      boxShadow: {
        card: "0 18px 50px -24px rgba(72, 96, 228, 0.16), 0 2px 8px rgba(36, 48, 68, 0.05)",
        float: "0 32px 70px -28px rgba(99, 120, 240, 0.28), 0 8px 24px -16px rgba(72, 96, 228, 0.16)",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ['"Plus Jakarta Sans"', "Inter", "ui-sans-serif", "sans-serif"],
        mono: ['"DM Mono"', "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
}
