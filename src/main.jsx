import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "@fontsource/inter/400.css"
import "@fontsource/inter/500.css"
import "@fontsource/inter/600.css"
import "@fontsource/inter-tight/500.css"
import "@fontsource/inter-tight/600.css"
import "@fontsource/inter-tight/700.css"
import { captureAttribution } from "./lib/config"
import "./index.css"
import App from "./App"

captureAttribution()

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
