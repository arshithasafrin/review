import { WHATSAPP_DISPLAY, WHATSAPP_IS_PLACEHOLDER } from "../lib/config"
import { Logo } from "./Logo"
import { WhatsAppLink } from "./WhatsAppLink"

export function Footer() {
  return (
    <footer className="relative pb-28 md:pb-12">
      <div className="wrap grid gap-8 py-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Logo size={36} />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink">
            A restaurant reputation and guest experience system. Genuine reviews, earlier feedback, and a monthly read of what diners are telling you.
          </p>
        </div>
        <div>
          <p className="text-sm font-extrabold text-navy">On this page</p>
          <ul className="mt-3 space-y-2 text-sm font-semibold text-ink">
            <li><a className="inline-flex min-h-11 items-center" href="#how-it-works">How it works</a></li>
            <li><a className="inline-flex min-h-11 items-center" href="#pricing">Pricing</a></li>
            <li><a className="inline-flex min-h-11 items-center" href="#faq">FAQ</a></li>
            <li><a className="inline-flex min-h-11 items-center" href="#demo-form">Book a demo</a></li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-extrabold text-navy">WhatsApp</p>
          <p className="mt-3 text-sm text-ink">{WHATSAPP_DISPLAY}</p>
          {WHATSAPP_IS_PLACEHOLDER ? (
            <p className="mt-1 text-xs leading-relaxed text-mute">Placeholder number. Replace it in src/lib/config.js before launch.</p>
          ) : null}
          <WhatsAppLink source="footer" className="btn btn-line mt-3">
            WhatsApp Us
          </WhatsAppLink>
        </div>
      </div>
      <div className="wrap border-t border-line py-6 text-xs leading-relaxed text-mute">
        <p>
          Restrosights does not block or hide reviews. It does not guarantee rankings, removal of legitimate reviews, or reinstatement of a suspended Google Business Profile. Guests decide what they publish.
        </p>
        <p className="mt-2">© {new Date().getFullYear()} Restrosights.</p>
      </div>
    </footer>
  )
}
