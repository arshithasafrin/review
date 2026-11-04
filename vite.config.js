import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// Root-absolute assets so nested routes such as /blog/:slug
// load the bundle on Vercel and local preview.
export default defineConfig({
  base: "/",
  plugins: [react()],
})
