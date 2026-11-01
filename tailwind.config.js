/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#0B1640",
        ink: "#2A3458",
        mute: "#5C657F",
        line: "#E6E3F1",
        mist: "#F6F5FB",
        good: "#067647",
        warn: "#8A5A00",
      },
      boxShadow: {
        card: "0 18px 50px -24px rgba(62, 48, 140, 0.32), 0 2px 8px rgba(62, 48, 140, 0.05)",
        float: "0 32px 70px -28px rgba(55, 40, 130, 0.42), 0 8px 24px -16px rgba(55, 40, 130, 0.2)",
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
}
