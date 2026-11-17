/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        glow: "#0085EE",
        royal: "#0085EE",
        sky: "#0085EE",
        band: "#0085EE",
        glowink: "#0077D6",
        lavender: "#F8F7F7",
        star: "#FFFFFF",
        navy: "#102329",
        ink: "#102329",
        eye: "#102329",
        beige: "#C2A463",
        mute: "#4E5D63",
        line: "#E6E4E4",
        mist: "#F6F5F5",
        good: "#067647",
        warn: "#8A5A00",
      },
      boxShadow: {
        card: "0 1px 4px rgba(12, 12, 13, 0.05), 0 1px 4px rgba(12, 12, 13, 0.1)",
        float: "0 28px 60px -28px rgba(16, 35, 41, 0.38), 0 10px 24px -16px rgba(16, 35, 41, 0.18)",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ['"DM Mono"', "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
}
