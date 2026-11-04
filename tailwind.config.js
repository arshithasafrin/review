/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#1e2a78",
        ink: "#2A3458",
        mute: "#5C657F",
        line: "#e4e6f4",
        mist: "#f4f5fb",
        good: "#067647",
        warn: "#8A5A00",
      },
      boxShadow: {
        card: "0 18px 50px -24px rgba(30, 42, 120, 0.32), 0 2px 8px rgba(30, 42, 120, 0.05)",
        float: "0 32px 70px -28px rgba(30, 42, 120, 0.32), 0 8px 24px -16px rgba(30, 42, 120, 0.14)",
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
}
