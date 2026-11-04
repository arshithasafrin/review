import { useEffect } from "react"
import { Footer } from "./components/Footer"
import { LeadProvider } from "./components/LeadForm"
import { Nav } from "./components/Nav"
import { Silk } from "./components/Silk"
import { StickyCta } from "./components/StickyCta"
import { initScrollDepth } from "./lib/analytics"
import {
  Brand,
  DashboardSection,
  Faq,
  Filtration,
  FinalCta,
  Hero,
  How,
  Insights,
  Multi,
  Pain,
  Pricing,
  Proof,
  Reputation,
  Seo,
  Stand,
  Value,
} from "./sections/Home"

export default function App() {
  useEffect(() => initScrollDepth(), [])
  return (
    <LeadProvider>
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-white focus:px-4 focus:py-3 focus:font-bold focus:text-navy">
        Skip to content
      </a>
      <div className="relative">
        <Nav />
        <main id="main">
          <Hero />
          <Pain />
          <How />
          <div className="relative">
            <Silk edges="long" />
            <Stand />
            <DashboardSection />
          </div>
          <Seo />
          <Filtration />
          <Insights />
          <Reputation />
          <Brand />
          <Multi />
          <Value />
          <Pricing />
          <Proof />
          <Faq />
          <FinalCta />
        </main>
        <Footer />
        <StickyCta />
      </div>
    </LeadProvider>
  )
}
