import { createContext, useContext, useEffect, useId, useRef, useState } from "react"
import { EVENTS, track } from "../lib/analytics"
import { UTM_KEYS, readAttribution } from "../lib/config"
import { Button } from "./ui"

const LeadContext = createContext(null)

export function useLead() {
  return useContext(LeadContext)
}

export function LeadProvider({ children }) {
  const [dialog, setDialog] = useState({ open: false, plan: "", source: "" })
  const lastTrigger = useRef(null)

  const openDemo = (source, plan = "") => {
    lastTrigger.current = document.activeElement
    if (String(source).startsWith("pricing")) {
      track(EVENTS.PRICING_CTA, { source, plan })
    } else {
      track(EVENTS.BOOK_DEMO, { source, plan })
    }
    setDialog({ open: true, plan, source })
  }

  const closeDemo = () => {
    setDialog((current) => ({ ...current, open: false }))
    const node = lastTrigger.current
    if (node && typeof node.focus === "function") node.focus()
  }

  return (
    <LeadContext.Provider value={{ openDemo, closeDemo, dialogOpen: dialog.open, plan: dialog.plan, source: dialog.source }}>
      {children}
      <LeadDialog open={dialog.open} plan={dialog.plan} source={dialog.source} onClose={closeDemo} />
    </LeadContext.Provider>
  )
}

const OUTLETS = ["1", "2–5", "6–15", "16+"]

export function LeadForm({ idPrefix = "lead", plan = "", source = "inline", heading = true }) {
  const [status, setStatus] = useState("idle")
  const [error, setError] = useState("")
  const [name, setName] = useState("")
  const attribution = readAttribution()

  async function onSubmit(event) {
    event.preventDefault()
    const form = event.currentTarget
    const data = Object.fromEntries(new FormData(form).entries())
    const phoneDigits = String(data.phone || "").replace(/\D/g, "")
    if (!data.name || !data.restaurant || !data.city || !data.outlets || phoneDigits.length < 8) {
      setError("Add your name, restaurant, city, a reachable phone number, and how many outlets you run.")
      setStatus("error")
      return
    }
    const payload = {
      ...data,
      plan: plan || data.plan || "",
      source,
      submittedAt: new Date().toISOString(),
    }
    setStatus("sending")
    setError("")
    try {
      const endpoint = import.meta.env.VITE_LEAD_ENDPOINT
      if (endpoint) {
        const response = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        })
        if (!response.ok) throw new Error("Request failed")
      } else {
        const key = "restrosights-leads"
        const previous = JSON.parse(localStorage.getItem(key) || "[]")
        previous.push(payload)
        localStorage.setItem(key, JSON.stringify(previous))
      }
      track(EVENTS.FORM_SUBMIT, { source, plan: payload.plan, outlets: payload.outlets })
      setName(String(data.name))
      setStatus("sent")
      form.reset()
    } catch {
      setStatus("error")
      setError("We could not send that just now. Please try again, or use WhatsApp.")
    }
  }

  if (status === "sent") {
    const localOnly = !import.meta.env.VITE_LEAD_ENDPOINT
    return (
      <div role="status" className="rounded-3xl bg-white p-6 text-navy shadow-card">
        <p className="text-lg font-extrabold">Thanks, {name.split(" ")[0] || "there"}.</p>
        <p className="mt-2 text-sm leading-relaxed text-ink">
          {localOnly
            ? "This preview keeps your details in this browser so the form can be wired to the team later. Nothing has been sent to a server."
            : "Your details are on their way to the Restrosights team."}
        </p>
      </div>
    )
  }

  return (
    <form id={idPrefix} onSubmit={onSubmit} noValidate className="rounded-[28px] bg-white p-5 shadow-float sm:p-7">
      {heading ? (
        <div className="mb-5">
          <h3 className="text-xl font-extrabold tracking-tight text-navy sm:text-2xl">See How Restrosights Would Work For Your Restaurant.</h3>
          <p className="mt-2 text-sm leading-relaxed text-ink">Name, restaurant, city, phone and how many outlets. That is the whole form.</p>
        </div>
      ) : null}
      {plan ? <p className="mb-4 rounded-2xl bg-[#f7f2ff] px-3 py-2 text-sm font-semibold text-[#3a3496]">About the {plan} plan</p> : null}
      <div className="grid gap-3 sm:grid-cols-2">
        <Field id={`${idPrefix}-name`} name="name" label="Your name" autoComplete="name" />
        <Field id={`${idPrefix}-restaurant`} name="restaurant" label="Restaurant name" autoComplete="organization" />
        <Field id={`${idPrefix}-city`} name="city" label="City / location" autoComplete="address-level2" />
        <Field id={`${idPrefix}-phone`} name="phone" label="Phone / WhatsApp" type="tel" autoComplete="tel" inputMode="tel" />
        <label className="block sm:col-span-2" htmlFor={`${idPrefix}-outlets`}>
          <span className="mb-1.5 block text-sm font-semibold text-navy">Outlet count</span>
          <select id={`${idPrefix}-outlets`} name="outlets" className="field" defaultValue="">
            <option value="" disabled>
              How many outlets?
            </option>
            {OUTLETS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
      </div>
      <input type="hidden" name="plan" value={plan} />
      {UTM_KEYS.map((key) => (
        <input key={key} type="hidden" name={key} value={attribution[key] || ""} />
      ))}
      <input type="hidden" name="landing_path" value={attribution.landing_path || ""} />
      <input type="hidden" name="referrer" value={attribution.referrer || ""} />
      {attribution.utm_source ? (
        <p className="mt-3 text-xs font-semibold text-[#4843b3]">Campaign source kept with this request: {attribution.utm_source}</p>
      ) : null}
      {error ? (
        <p role="alert" className="mt-3 text-sm font-semibold text-warn">
          {error}
        </p>
      ) : null}
      <Button type="submit" className="mt-4 w-full sm:w-auto" arrow={status !== "sending"}>
        {status === "sending" ? "Sending…" : "Book a Demo"}
      </Button>
    </form>
  )
}

function Field({ id, label, ...props }) {
  return (
    <label className="block" htmlFor={id}>
      <span className="mb-1.5 block text-sm font-semibold text-navy">{label}</span>
      <input id={id} className="field" required {...props} />
    </label>
  )
}

function LeadDialog({ open, plan, source, onClose }) {
  const ref = useRef(null)
  const titleId = useId()

  useEffect(() => {
    if (!open) return undefined
    const root = ref.current
    const focusable = () =>
      [...root.querySelectorAll("a,button,input,select,textarea")].filter((node) => !node.disabled)
    const first = focusable()[0]
    first?.focus()
    const onKey = (event) => {
      if (event.key === "Escape") {
        onClose()
        return
      }
      if (event.key !== "Tab") return
      const items = focusable()
      if (!items.length) return
      const firstItem = items[0]
      const lastItem = items[items.length - 1]
      if (event.shiftKey && document.activeElement === firstItem) {
        event.preventDefault()
        lastItem.focus()
      } else if (!event.shiftKey && document.activeElement === lastItem) {
        event.preventDefault()
        firstItem.focus()
      }
    }
    document.addEventListener("keydown", onKey)
    const previous = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = previous
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 grid place-items-end overflow-y-auto bg-[#0a1542]/45 p-3 sm:place-items-center sm:p-6" onMouseDown={onClose}>
      <div
        ref={ref}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="max-h-[92vh] w-full max-w-xl overflow-y-auto"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="mb-2 flex justify-end">
          <button type="button" className="btn btn-secondary min-w-11" onClick={onClose} aria-label="Close demo form">
            Close
          </button>
        </div>
        <p id={titleId} className="sr-only">
          See How Restrosights Would Work For Your Restaurant.
        </p>
        <LeadForm idPrefix="dialog-lead" plan={plan} source={source || "dialog"} />
      </div>
    </div>
  )
}
