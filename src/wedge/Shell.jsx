import { useEffect, useState } from "react"
import { Link, NavLink, Outlet, useLocation } from "react-router-dom"
import { Logo } from "../components/Logo"
import { Button } from "../components/ui"
import { useLead } from "../components/LeadForm"
import { WhatsAppLink } from "../components/WhatsAppLink"
import { WHATSAPP_DISPLAY, WHATSAPP_IS_PLACEHOLDER } from "../lib/config"
import { FAQS, NAV } from "./content"
import { SilkFill } from "./SilkFill"

export function useTitle(title) {
  useEffect(() => {
    document.title = title
  }, [title])
}

export function Shell() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="min-h-screen bg-white text-[#0f172a]">
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

function Nav() {
  const { openDemo } = useLead()
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <header className="sticky top-0 z-40 bg-white">
      <div className="mx-auto flex h-[72px] w-[min(1280px,calc(100%-2rem))] items-center gap-8 px-2 lg:w-[min(1280px,calc(100%-160px))] lg:px-0">
        <Link to="/" aria-label="Restrosights home" className="shrink-0">
          <Logo size={32} />
        </Link>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `font-display text-[16px] font-medium tracking-[0.01em] ${isActive ? "text-[#463fa6]" : "text-[#0f172a]"}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="ml-auto hidden items-center gap-5 lg:flex">
          <Link to="/login" className="font-display text-[16px] font-medium tracking-[0.01em] text-[#0f172a]">
            Log in
          </Link>
          <Button className="btn-sm" onClick={() => openDemo("nav")}>
            Get started
          </Button>
        </div>
        <button
          type="button"
          className="ml-auto grid h-11 w-11 place-items-center rounded-full bg-[#eceaf3] lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span className="block h-0.5 w-4 bg-[#17192d] shadow-[0_6px_0_#17192d,0_-6px_0_#17192d]" />
        </button>
      </div>
      {open ? (
        <div id="mobile-nav" className="border-t border-[#eceaf4] bg-white px-4 py-4 lg:hidden">
          <div className="grid gap-1">
            {NAV.map((item) => (
              <NavLink key={item.to} to={item.to} className="rounded-xl px-3 py-3 text-base font-medium">
                {item.label}
              </NavLink>
            ))}
            <Link to="/login" className="rounded-xl px-3 py-3 text-base font-medium">
              Log in
            </Link>
            <Button className="mt-2 w-full" onClick={() => openDemo("nav-mobile")}>
              Get started
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  )
}

export function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto grid w-[min(1280px,calc(100%-2rem))] gap-10 px-2 py-20 sm:grid-cols-2 lg:w-[min(1280px,calc(100%-160px))] lg:grid-cols-4 lg:px-0">
        <div>
          <Logo size={32} />
          <p className="mt-4 max-w-xs text-base leading-6 tracking-[-0.01em] text-[#455366]">
            Guest feedback, genuine Google reviews, and a monthly read on what diners actually think.
          </p>
        </div>
        <FooterCol title="Product">
          <FooterLink to="/features">Features</FooterLink>
          <FooterLink to="/pricing">Pricing</FooterLink>
          <FooterLink to="/blog">Blog</FooterLink>
        </FooterCol>
        <FooterCol title="Company">
          <FooterLink to="/about">About</FooterLink>
          <FooterLink to="/contact">Contact</FooterLink>
          <FooterLink to="/login">Log in</FooterLink>
        </FooterCol>
        <FooterCol title="Talk to us">
          <li>
            <WhatsAppLink source="footer" className="text-base text-[#455366] hover:text-[#0f172a]">
              WhatsApp {WHATSAPP_IS_PLACEHOLDER ? "(number pending)" : WHATSAPP_DISPLAY}
            </WhatsAppLink>
          </li>
          <li>
            <a className="text-base text-[#455366] hover:text-[#0f172a]" href="mailto:hello@restrosights.com">
              hello@restrosights.com
            </a>
          </li>
        </FooterCol>
      </div>
      <div className="border-t border-[#f0f0f0]">
        <p className="mx-auto w-[min(1280px,calc(100%-2rem))] py-6 text-sm text-[#64748b]">
          Restrosights does not delete Google reviews, pay guests for reviews, or promise a rating or ranking.
        </p>
      </div>
    </footer>
  )
}

function FooterCol({ title, children }) {
  return (
    <div>
      <p className="font-display text-base font-medium text-[#0f172a]">{title}</p>
      <ul className="mt-4 grid gap-3">{children}</ul>
    </div>
  )
}

function FooterLink({ to, children }) {
  return (
    <li>
      <Link to={to} className="text-base text-[#455366] hover:text-[#0f172a]">
        {children}
      </Link>
    </li>
  )
}

export function PageIntro({ title, children }) {
  return (
    <header className="bg-[#f6f5ff] px-6 pb-16 pt-24 text-center sm:pt-32">
      <h1 className="display mx-auto max-w-[620px] text-[2.5rem] leading-[1.05] sm:text-[56px] sm:leading-[1] lg:text-[72px] lg:leading-[72px]">{title}</h1>
      <p className="mx-auto mt-6 max-w-[620px] text-lg leading-[30px] tracking-[-0.01em] text-[#455366] sm:text-[20px]">{children}</p>
    </header>
  )
}

export function TrustRow() {
  return (
    <section className="bg-white px-6 py-24 text-center" aria-labelledby="trust-heading">
      <h2 id="trust-heading" className="display text-[24px] leading-[1.2]">
        Restaurant logos appear here once we have permission to show them
      </h2>
      <ul className="mx-auto mt-10 flex max-w-[1280px] flex-wrap items-center justify-center gap-x-14 gap-y-4">
        {["Your restaurant", "Second outlet", "City group", "Hotel dining"].map((name) => (
          <li key={name} className="font-display text-lg font-medium tracking-[0.08em] text-[#d5d8e0]">
            {name}
          </li>
        ))}
      </ul>
    </section>
  )
}

export function FaqBlock() {
  const [open, setOpen] = useState(0)
  return (
    <section className="mx-auto grid w-[min(1280px,calc(100%-2rem))] gap-12 bg-white px-2 py-32 lg:grid-cols-[540px_1fr] lg:gap-20" aria-labelledby="faq-heading">
      <div>
        <h2 id="faq-heading" className="display text-[40px] leading-[1.1] lg:text-[52px] lg:leading-[57px]">
          Frequently asked questions
        </h2>
        <p className="mt-4 max-w-sm text-base leading-6 tracking-[-0.01em] text-[#455366]">
          Have questions? We’ve got answers. For everything else email{" "}
          <a className="text-[#463fa6]" href="mailto:hello@restrosights.com">
            hello@restrosights.com
          </a>
          .
        </p>
      </div>
      <div>
        {FAQS.map((item, index) => {
          const expanded = open === index
          return (
            <div key={item.q} className="faq-item">
              <h3>
                <button
                  type="button"
                  className="font-display flex w-full items-center justify-between gap-4 py-5 text-left text-[20px] font-medium leading-[1.2] text-[#0f172a] lg:text-[24px]"
                  aria-expanded={expanded}
                  onClick={() => setOpen(expanded ? -1 : index)}
                >
                  {item.q}
                  <span className="text-2xl font-normal leading-none text-[#0f172a]" aria-hidden="true">
                    {expanded ? "–" : "+"}
                  </span>
                </button>
              </h3>
              {expanded ? <p className="pb-5 pr-10 text-base leading-6 tracking-[-0.01em] text-[#455366]">{item.a}</p> : null}
            </div>
          )
        })}
      </div>
    </section>
  )
}

export function CtaBand() {
  const { openDemo } = useLead()
  return (
    <section className="bg-white px-6 py-16 lg:px-20 lg:py-32">
      <SilkFill fade="cta" className="mx-auto flex min-h-[280px] w-full max-w-[1280px] flex-col items-start justify-center gap-8 rounded-[20px] px-8 py-14 sm:px-16 lg:min-h-[336px] lg:flex-row lg:items-center lg:justify-between lg:px-28">
        <div className="max-w-[720px]">
          <h2 className="display text-[40px] leading-[1.1] lg:text-[52px] lg:leading-[57px]">Ready to get started?</h2>
          <p className="mt-3 text-[22px] leading-[1.4] tracking-[-0.01em] text-[#0f172a] sm:text-[28px] sm:leading-[39px]">
            Take the first step with your restaurant
          </p>
        </div>
        <Button className="shrink-0" onClick={() => openDemo("footer-cta")}>
          Get started
        </Button>
      </SilkFill>
    </section>
  )
}

export function FeatureTrio({ title = "Restrosights is built for restaurants" }) {
  const cards = [
    {
      title: "Grow genuine reviews",
      body: "Happy guests get a clear path to a genuine Google review. Nobody is paid or rewarded for posting.",
    },
    {
      title: "Catch problems early",
      body: "An unhappy guest can tell the team privately, while there is still time to make the visit right.",
    },
    {
      title: "Read the month clearly",
      body: "A short report on praise, complaints, and what to fix. No promise of a ranking or a rating.",
    },
  ]
  return (
    <section className="bg-white px-6 py-24 lg:px-20 lg:py-32" aria-labelledby="built-heading">
      <h2 id="built-heading" className="display text-center text-[40px] leading-[1.1] lg:text-[52px] lg:leading-[57px]">
        {title}
      </h2>
      <div className="mx-auto mt-16 grid max-w-[1280px] items-start gap-6 md:grid-cols-3">
        {cards.map((card, index) => (
          <article key={card.title} className={`rounded-[20px] bg-[#f7f7f7] p-10 ${index === 1 ? "lg:mt-8" : ""} ${index === 2 ? "lg:mt-14" : ""}`}>
            <TrioIcon index={index} />
            <h3 className="display mt-10 text-[24px] leading-[1.2]">{card.title}</h3>
            <p className="mt-3 text-base leading-6 tracking-[-0.01em] text-[#455366]">{card.body}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function TrioIcon({ index }) {
  const common = { viewBox: "0 0 24 24", className: "h-7 w-7 text-[#463fa6]", fill: "none", stroke: "currentColor", strokeWidth: "1.6" }
  if (index === 1) {
    return (
      <svg {...common} aria-hidden="true">
        <rect x="4" y="4" width="6" height="6" rx="1" />
        <rect x="14" y="4" width="6" height="6" rx="1" />
        <rect x="4" y="14" width="6" height="6" rx="1" />
        <rect x="14" y="14" width="6" height="6" rx="1" />
      </svg>
    )
  }
  if (index === 2) {
    return (
      <svg {...common} aria-hidden="true">
        <path d="M12 3.5 14.2 9l5.8.4-4.5 3.6 1.4 5.5L12 15.8 7.1 18.5 8.5 13 4 9.4 9.8 9 12 3.5Z" />
      </svg>
    )
  }
  return (
    <svg {...common} aria-hidden="true">
      <path d="M13 3 6 13h6l-1 8 8-11h-6l0-7Z" strokeLinejoin="round" />
    </svg>
  )
}
