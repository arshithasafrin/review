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
        card: "0 1px 1px rgba(16, 18, 40, 0.04), 0 14px 36px -18px rgba(16, 18, 40, 0.16)",
        float: "0 1px 2px rgba(16, 18, 40, 0.04), 0 24px 50px -24px rgba(16, 18, 40, 0.2)",
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
}
