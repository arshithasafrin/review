// Replace this with the real WhatsApp number before launch.
// Country code, digits only, no plus sign. Example: 9198XXXXXXXX
export const WHATSAPP_E164 = "910000000000"
export const WHATSAPP_DISPLAY = "+91 00000 00000"
export const WHATSAPP_IS_PLACEHOLDER = true

export const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "gclid",
  "fbclid",
]

const STORAGE_KEY = "restrosights-attribution"

export function captureAttribution() {
  if (typeof window === "undefined") return {}
  const params = new URLSearchParams(window.location.search)
  const stored = readAttribution()
  let changed = false
  for (const key of UTM_KEYS) {
    const value = params.get(key)
    if (value && !stored[key]) {
      stored[key] = value
      changed = true
    }
  }
  if (!stored.landing_path) {
    stored.landing_path = `${window.location.pathname}${window.location.search}`
    stored.referrer = document.referrer || ""
    changed = true
  }
  if (changed) sessionStorage.setItem(STORAGE_KEY, JSON.stringify(stored))
  return stored
}

export function readAttribution() {
  if (typeof window === "undefined") return {}
  try {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY) || "{}")
  } catch {
    return {}
  }
}

export function whatsappHref() {
  const utm = readAttribution()
  const lines = [
    "Hi Restrosights, I would like to talk about guest feedback and Google reviews for my restaurant.",
    `Source: ${utm.utm_source || "website"}`,
  ]
  if (utm.utm_medium) lines.push(`Medium: ${utm.utm_medium}`)
  if (utm.utm_campaign) lines.push(`Campaign: ${utm.utm_campaign}`)
  if (utm.utm_term) lines.push(`Term: ${utm.utm_term}`)
  if (utm.utm_content) lines.push(`Content: ${utm.utm_content}`)
  return `https://wa.me/${WHATSAPP_E164}?text=${encodeURIComponent(lines.join("\n"))}`
}
