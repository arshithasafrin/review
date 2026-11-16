import { WHATSAPP_DISPLAY, WHATSAPP_IS_PLACEHOLDER } from "../lib/config"
import { Logo } from "./Logo"
import { WhatsAppLink } from "./WhatsAppLink"

export function Footer() {
  return (
    <footer className="relative bg-navy pb-28 text-star md:pb-12">
      <div className="wrap grid gap-8 py-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Logo size={36} tone="dark" />
          <p className="mt-[18px] max-w-sm text-sm leading-relaxed text-star/80">
            A restaurant reputation and guest experience system. Genuine reviews, earlier feedback, and a monthly read of what diners are telling you.
          </p>
        </div>
        <div>
          <p className="text-sm font-extrabold text-star">On this page</p>
          <ul className="mt-3 space-y-2 text-sm font-semibold text-star/80">
            <li><a className="inline-flex min-h-11 items-center" href="#how-it-works">How it works</a></li>
            <li><a className="inline-flex min-h-11 items-center" href="#lost-revenue">Lost revenue</a></li>
            <li><a className="inline-flex min-h-11 items-center" href="#pricing">Pricing</a></li>
            <li><a className="inline-flex min-h-11 items-center" href="#faq">FAQ</a></li>
            <li><a className="inline-flex min-h-11 items-center" href="#demo-form">Book a demo</a></li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-extrabold text-star">WhatsApp</p>
          <p className="mt-3 text-sm text-star/80">{WHATSAPP_DISPLAY}</p>
          {WHATSAPP_IS_PLACEHOLDER ? (
            <p className="mt-1 text-xs leading-relaxed text-lavender">Placeholder number. Replace it in src/lib/config.js before launch.</p>
          ) : null}
          <WhatsAppLink source="footer" className="btn btn-line mt-3">
            WhatsApp Us
          </WhatsAppLink>
        </div>
      </div>
      <div className="wrap border-t border-eye py-6 text-xs leading-relaxed text-star/70">
        <p>
          Restrosights does not block or hide reviews. It does not guarantee rankings, removal of legitimate reviews, or reinstatement of a suspended Google Business Profile. Guests decide what they publish.
        </p>
        <p className="mt-2">© {new Date().getFullYear()} Restrosights.</p>
      </div>
    </footer>
  )
}
