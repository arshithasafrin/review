import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// Relative base so the same build works at the domain root,
// on GitHub Pages (/review/), or any static folder.
export default defineConfig({
  base: "./",
  plugins: [react()],
})
