import { useEffect, useState } from "react"
import { Link, NavLink, Outlet, useLocation } from "react-router-dom"
import { Logo } from "../components/Logo"
import { Button } from "../components/ui"
import { useLead } from "../components/LeadForm"
import { WhatsAppLink } from "../components/WhatsAppLink"
import { WHATSAPP_DISPLAY, WHATSAPP_IS_PLACEHOLDER } from "../lib/config"
import { FAQS, NAV } from "./content"

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
    <div className="page-wash min-h-screen text-[#17192d]">
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
    <header className="sticky top-0 z-40 border-b border-[#eceaf4] bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-[72px] w-[min(1160px,calc(100%-2rem))] items-center gap-6">
        <Link to="/" aria-label="Restrosights home" className="shrink-0">
          <Logo size={34} />
        </Link>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-[15px] font-medium ${isActive ? "text-[#5346d4]" : "text-[#17192d] hover:text-[#5346d4]"}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="ml-auto hidden items-center gap-5 lg:flex">
          <Link to="/login" className="text-[15px] font-medium text-[#17192d]">
            Log in
          </Link>
          <Button className="min-h-11 px-4 text-[15px]" onClick={() => openDemo("nav")}>
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
    <footer className="border-t border-[#e6e3f1] bg-white">
      <div className="mx-auto grid w-[min(1160px,calc(100%-2rem))] gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo size={32} />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#5c6478]">
            Guest feedback, genuine Google reviews, and a monthly read on what diners actually think. Built for restaurants.
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
            <WhatsAppLink source="footer" className="text-sm font-medium text-[#17192d] hover:text-[#5346d4]">
              WhatsApp {WHATSAPP_IS_PLACEHOLDER ? "(number pending)" : WHATSAPP_DISPLAY}
            </WhatsAppLink>
          </li>
          <li>
            <a className="text-sm font-medium text-[#17192d] hover:text-[#5346d4]" href="mailto:hello@restrosights.com">
              hello@restrosights.com
            </a>
          </li>
        </FooterCol>
      </div>
      <div className="border-t border-[#f0eef6]">
        <p className="mx-auto w-[min(1160px,calc(100%-2rem))] py-5 text-xs text-[#7b8194]">
          Restrosights does not delete Google reviews, pay guests for reviews, or promise a rating or ranking.
        </p>
      </div>
    </footer>
  )
}

function FooterCol({ title, children }) {
  return (
    <div>
      <p className="text-sm font-semibold">{title}</p>
      <ul className="mt-4 grid gap-3">{children}</ul>
    </div>
  )
}

function FooterLink({ to, children }) {
  return (
    <li>
      <Link to={to} className="text-sm font-medium text-[#17192d] hover:text-[#5346d4]">
        {children}
      </Link>
    </li>
  )
}

export function PageIntro({ title, children }) {
  return (
    <header className="mx-auto w-[min(760px,calc(100%-2rem))] px-2 pb-6 pt-20 text-center sm:pt-28">
      <h1 className="text-[2.6rem] font-semibold leading-[1.05] tracking-[-0.045em] text-[#17192d] sm:text-6xl">{title}</h1>
      <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-[#5c6478] sm:text-lg">{children}</p>
    </header>
  )
}

export function TrustRow() {
  return (
    <section className="mx-auto w-[min(1160px,calc(100%-2rem))] py-16 text-center" aria-labelledby="trust-heading">
      <h2 id="trust-heading" className="text-sm font-medium text-[#8b90a3]">
        Restaurant logos appear here once we have permission to show them
      </h2>
      <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
        {["Your restaurant", "Second outlet", "City group", "Hotel dining"].map((name) => (
          <li key={name} className="text-sm font-semibold uppercase tracking-[0.18em] text-[#c5c3d4]">
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
    <section className="mx-auto grid w-[min(1160px,calc(100%-2rem))] gap-10 py-20 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16" aria-labelledby="faq-heading">
      <div>
        <h2 id="faq-heading" className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
          Frequently asked questions
        </h2>
        <p className="mt-4 max-w-sm text-[#5c6478]">
          Have questions? We’ve got answers. For everything else email{" "}
          <a className="font-medium text-[#5346d4]" href="mailto:hello@restrosights.com">
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
                  className="flex w-full items-center justify-between gap-4 py-5 text-left text-base font-semibold"
                  aria-expanded={expanded}
                  onClick={() => setOpen(expanded ? -1 : index)}
                >
                  {item.q}
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[#f3f1f8] text-lg leading-none text-[#5346d4]" aria-hidden="true">
                    {expanded ? "–" : "+"}
                  </span>
                </button>
              </h3>
              {expanded ? <p className="pb-5 pr-10 text-sm leading-relaxed text-[#5c6478]">{item.a}</p> : null}
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
    <section className="mx-auto w-[min(1160px,calc(100%-2rem))] py-20 text-center">
      <p className="text-sm font-medium text-[#8b90a3]">Ready to get started?</p>
      <h2 className="mx-auto mt-3 max-w-xl text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
        Take the first step with your restaurant
      </h2>
      <p className="mx-auto mt-4 max-w-md text-[#5c6478]">
        Tell us the restaurant, the city, and how many outlets you run. We’ll show you how Restrosights would work there.
      </p>
      <Button className="mt-8" onClick={() => openDemo("footer-cta")}>
        Book a Demo
      </Button>
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
    <section className="mx-auto w-[min(1160px,calc(100%-2rem))] py-8" aria-labelledby="built-heading">
      <h2 id="built-heading" className="text-center text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
        {title}
      </h2>
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {cards.map((card, index) => (
          <article key={card.title} className="wedge-card p-6">
            <div className="mb-5 grid h-36 place-items-center rounded-2xl bg-[#f6f4ff] px-6">
              {index === 0 ? (
                <div className="flex gap-1 text-2xl text-[#5346d4]" aria-hidden="true">★★★★★</div>
              ) : null}
              {index === 1 ? (
                <div className="w-full rounded-2xl bg-white px-4 py-3 text-left text-sm text-[#5c6478] shadow-sm">
                  Private note to the team
                </div>
              ) : null}
              {index === 2 ? (
                <div className="w-full space-y-2">
                  <div className="h-2 rounded-full bg-[#d9d3ff]" />
                  <div className="h-2 w-4/5 rounded-full bg-[#c3b8ff]" />
                  <div className="h-2 w-2/3 rounded-full bg-[#5346d4]" />
                </div>
              ) : null}
            </div>
            <h3 className="text-xl font-semibold tracking-tight">{card.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#5c6478]">{card.body}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
