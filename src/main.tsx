import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import App from "./App"
import faviconUrl from "./assets/logo.png"
import "./index.css"

const favicon =
  document.querySelector<HTMLLinkElement>("link[rel='icon']") ??
  document.createElement("link")
favicon.rel = "icon"
favicon.type = "image/png"
favicon.href = faviconUrl
if (!favicon.parentNode) document.head.appendChild(favicon)

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
