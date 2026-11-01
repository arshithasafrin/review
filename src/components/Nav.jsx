import { useEffect, useState } from "react"
import { EVENTS, track } from "../lib/analytics"
import { Logo } from "./Logo"
import { useLead } from "./LeadForm"
import { Button } from "./ui"

const LINKS = [
  ["How it works", "#how-it-works"],
  ["The system", "#dashboard"],
  ["Pricing", "#pricing"],
  ["FAQ", "#faq"],
]

export function Nav() {
  const { openDemo } = useLead()
  const [scrolled, setScrolled] = useState(false)
  const [menu, setMenu] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  function goToPricing(source) {
    track(EVENTS.GET_RESTROSIGHTS, { source })
    setMenu(false)
    document.getElementById("pricing")?.scrollIntoView()
  }

  return (
    <header className={`sticky top-0 z-30 transition-colors ${scrolled || menu ? "border-b border-[rgba(11,22,64,0.06)] bg-white/80 shadow-sm backdrop-blur-xl" : "bg-transparent"}`}>
      <div className="wrap flex h-[4.5rem] items-center justify-between gap-3">
        <a href="#top" className="rounded-xl" aria-label="Restrosights home">
          <Logo size={34} />
        </a>
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {LINKS.map(([label, href]) => (
            <a key={href} href={href} className="inline-flex min-h-11 items-center rounded-full px-3 text-sm font-medium text-[#4a5168] transition-colors hover:text-navy">
              {label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-2 md:flex">
          <Button variant="secondary" onClick={() => openDemo("nav")}>
            Book a Demo
          </Button>
          <Button onClick={() => goToPricing("nav")}>Get Restrosights</Button>
        </div>
        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-full border border-[#e4dff3] bg-white md:hidden"
          aria-expanded={menu}
          aria-controls="mobile-menu"
          onClick={() => setMenu((value) => !value)}
        >
          <span className="sr-only">{menu ? "Close menu" : "Open menu"}</span>
          <span className="flex w-5 flex-col gap-1.5" aria-hidden="true">
            <span className="h-0.5 w-5 bg-navy" />
            <span className="h-0.5 w-5 bg-navy" />
            <span className="h-0.5 w-5 bg-navy" />
          </span>
        </button>
      </div>
      {menu ? (
        <div id="mobile-menu" className="border-t border-line bg-white px-5 py-4 md:hidden">
          <nav className="grid" aria-label="Mobile">
            {LINKS.map(([label, href]) => (
              <a key={href} href={href} className="flex min-h-12 items-center text-base font-semibold text-navy" onClick={() => setMenu(false)}>
                {label}
              </a>
            ))}
          </nav>
          <div className="mt-3 grid gap-2">
            <Button onClick={() => { setMenu(false); openDemo("nav_mobile") }}>Book a Demo</Button>
            <Button variant="line" onClick={() => goToPricing("nav_mobile")}>
              Get Restrosights
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  )
}
