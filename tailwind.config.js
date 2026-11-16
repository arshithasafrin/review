/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        royal: "#2843EA",
        band: "#6378F0",
        lavender: "#D2D8FD",
        star: "#F7F7FE",
        navy: "#0B1542",
        eye: "#1A2550",
        beige: "#E2C79A",
        ink: "#1A2550",
        // Eye Navy #1A2550 at 68% over Star White. No muted grey in the palette.
        mute: "#616888",
        line: "#D2D8FD",
        mist: "#F7F7FE",
        good: "#067647",
        warn: "#8A5A00",
      },
      boxShadow: {
        card: "0 18px 50px -24px rgba(11, 21, 66, 0.18), 0 2px 8px rgba(11, 21, 66, 0.05)",
        float: "0 32px 70px -28px rgba(11, 21, 66, 0.28), 0 8px 24px -16px rgba(11, 21, 66, 0.16)",
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
