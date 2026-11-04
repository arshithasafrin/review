import { useEffect } from "react"

export const EVENTS = {
  BOOK_DEMO: "book_demo_click",
  WHATSAPP: "whatsapp_click",
  PRICING_CTA: "pricing_cta",
  FORM_SUBMIT: "form_submit",
  GET_RESTROSIGHTS: "get_restrosights_click",
  WATCH_VIDEO: "watch_video",
  PRICING_VIEW: "pricing_view",
  FAQ_OPEN: "faq_open",
  SCROLL_DEPTH: "scroll_depth",
}

export function track(event, params = {}) {
  const payload = { event, ...params, ts: Date.now() }
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push(payload)
  if (typeof window.gtag === "function") {
    window.gtag("event", event, params)
  }
  window.dispatchEvent(new CustomEvent("rs:analytics", { detail: payload }))
}

export function initScrollDepth() {
  const seen = new Set()
  const onScroll = () => {
    const doc = document.documentElement
    const max = doc.scrollHeight - window.innerHeight
    if (max <= 0) return
    const depth = (window.scrollY / max) * 100
    for (const mark of [25, 50, 75, 90]) {
      if (depth >= mark && !seen.has(mark)) {
        seen.add(mark)
        track(EVENTS.SCROLL_DEPTH, { percent: mark })
      }
    }
  }
  window.addEventListener("scroll", onScroll, { passive: true })
  onScroll()
  return () => window.removeEventListener("scroll", onScroll)
}

export function useOnceInView(ref, event, params) {
  const key = JSON.stringify(params || {})
  useEffect(() => {
    const node = ref.current
    if (!node || typeof IntersectionObserver === "undefined") return undefined
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          track(event, JSON.parse(key))
          observer.disconnect()
        }
      },
      { threshold: 0.15 },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [ref, event, key])
}
