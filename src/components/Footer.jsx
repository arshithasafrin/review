import { WHATSAPP_DISPLAY, WHATSAPP_IS_PLACEHOLDER } from "../lib/config"
import { Logo } from "./Logo"
import { WhatsAppLink } from "./WhatsAppLink"

export function Footer() {
  return (
    <footer className="bg-white pb-28 md:pb-8">
      <div className="wrap flex flex-col gap-8 py-12 md:flex-row md:items-start md:justify-between">
        <div>
          <Logo size={32} />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-mute">
            A restaurant reputation and guest experience system. Genuine reviews, earlier feedback, and a monthly read of what diners are telling you.
          </p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-navy">
          <a className="inline-flex min-h-11 items-center" href="#how-it-works">How it works</a>
          <a className="inline-flex min-h-11 items-center" href="#lost-revenue">Calculator</a>
          <a className="inline-flex min-h-11 items-center" href="#pricing">Pricing</a>
          <a className="inline-flex min-h-11 items-center" href="#faq">FAQ</a>
          <a className="inline-flex min-h-11 items-center" href="#book">Book a demo</a>
        </div>
      </div>
      <div className="wrap flex flex-col gap-4 border-t border-line py-6 text-sm text-mute md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Restrosights.</p>
        <div>
          <p>{WHATSAPP_DISPLAY}</p>
          {WHATSAPP_IS_PLACEHOLDER ? <p className="text-xs">Placeholder number. Replace it in src/lib/config.js before launch.</p> : null}
          <WhatsAppLink source="footer" className="btn btn-line mt-2">WhatsApp Us</WhatsAppLink>
        </div>
      </div>
      <div className="wrap pb-6 text-xs leading-relaxed text-mute">
        Restrosights does not block or hide reviews. It does not guarantee rankings, removal of legitimate reviews, or reinstatement of a suspended Google Business Profile. Guests decide what they publish.
      </div>
    </footer>
  )
}
