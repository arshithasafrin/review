/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#333333",
        ink: "#4A4A4A",
        mute: "#5C657F",
        line: "#eee8dc",
        mist: "#faf6ee",
        good: "#067647",
        warn: "#8A5A00",
      },
      boxShadow: {
        card: "0 18px 50px -24px rgba(51, 51, 51, 0.32), 0 2px 8px rgba(51, 51, 51, 0.05)",
        float: "0 32px 70px -28px rgba(51, 51, 51, 0.28), 0 8px 24px -16px rgba(51, 51, 51, 0.12)",
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
}
