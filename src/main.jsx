import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "@fontsource/inter/400.css"
import "@fontsource/inter/500.css"
import "@fontsource/inter/600.css"
import "@fontsource/plus-jakarta-sans/600.css"
import "@fontsource/plus-jakarta-sans/700.css"
import "@fontsource/plus-jakarta-sans/800.css"
import "@fontsource/dm-mono/500.css"
import { captureAttribution } from "./lib/config"
import "./index.css"
import App from "./App"

captureAttribution()

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
