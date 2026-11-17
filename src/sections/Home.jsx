import { useRef, useState } from "react"
import { EVENTS, track, useOnceInView } from "../lib/analytics"
import {
  AlertCard,
  DashboardPanel,
  FakeReviewCard,
  GbpCard,
  GoogleSharePhone,
  GrowthChart,
  GuestPhone,
  HeroStage,
  InstagramCard,
  OutletCompare,
  PainVisual,
  ReportCard,
  ReviewStand,
} from "../components/Mockups"
import { LeadForm, useLead } from "../components/LeadForm"
import { Button, Icon, Reveal, SectionHeading } from "../components/ui"
import { WhatsAppLink } from "../components/WhatsAppLink"

const PAIN = [
  ["forget", "Happy diners forget", "They leave satisfied, but never post the Google review they intended to."],
  ["public", "Complaints become public", "Management may discover a service issue only after a low-star review appears online."],
  ["intel", "No clear guest intelligence", "A Google star rating does not tell the owner what went wrong with food, service, waiting time or ambience."],
  ["outlets", "Multi-outlet blind spots", "One outlet can quietly underperform while the brand sees only the overall picture."],
  ["fake", "Fake reviews hurt trust", "Suspicious reviews can damage perception and require the correct policy-based response."],
  ["profile", "Profile problems hurt discovery", "Google Business Profile issues can affect a restaurant’s ability to be found and trusted."],
]

const STEPS = [
  ["01", "Scan", "Guest scans the Restrosights stand at the table, billing counter, reception or takeaway area."],
  ["02", "Rate", "Guest gives a quick 1–5 star experience rating."],
  ["03", "Share", "Guest tells the restaurant what they loved or what needs attention."],
  ["04", "Grow", "Satisfied guests can continue their genuine Google review journey."],
  ["05", "Learn", "Owner sees guest feedback, sentiment and recurring issues inside Restrosights."],
]

const FLOW = ["Review Stand", "Guest", "Feedback", "Google review journey", "Owner dashboard", "Monthly insights"]

const SEO_STEPS = [
  "A real dining experience",
  "A genuine descriptive review",
  "Mentions of cuisine, dishes, service, ambience or location",
  "Richer context for Google and for the next diner",
  "Stronger trust and local relevance over time",
]

const CATEGORIES = [
  ["Food quality", "Taste, temperature, consistency, portion."],
  ["Service", "Speed, attention, staff behaviour."],
  ["Waiting time", "Queue, table delay, order delay."],
  ["Order accuracy", "Wrong item, missing item, takeaway issue."],
  ["Ambience", "Noise, seating, comfort, cleanliness."],
  ["Value perception", "Price, portion, expectations."],
]

const LOGIC = [
  "A low-rated experience is identified",
  "The guest shares what went wrong",
  "The restaurant sees it in Restrosights",
  "Management investigates and follows up",
  "Recurring problems become visible earlier",
]

const FRAGMENTED = [
  "A review management tool",
  "A Google Business Profile consultant",
  "A social and profile consultant",
  "A video creator",
  "A feedback and reporting tool",
]

const INCLUDED = [
  "Review growth system",
  "Guest feedback dashboard",
  "Reputation support",
  "Instagram bio optimisation",
  "Two restaurant videos",
  "Monthly guest intelligence",
]

const PLANS = [
  {
    id: "starter",
    name: "Starter",
    price: "₹2,499",
    cadence: "/ month",
    who: "For smaller restaurants wanting a professional feedback and review system.",
    cta: "Get Started",
    featured: false,
    variant: "primary",
    features: [
      "App / PWA",
      "1 location",
      "Guest feedback collection",
      "Google review journey",
      "QR review system",
      "Review Stand",
      "Customer sentiment",
      "Monthly guest report",
    ],
  },
  {
    id: "growth",
    name: "Growth",
    price: "₹4,999",
    cadence: "/ month",
    who: "For restaurants serious about reputation and brand growth.",
    cta: "Grow My Restaurant",
    featured: true,
    variant: "gold",
    note: "Priced as one reputation system — feedback, reviews, profile support, brand and a monthly read of your guests — not another software line item.",
    features: [
      "Everything in Starter",
      "Instagram bio optimisation",
      "Google Business Profile support",
      "Fake and spam review assistance",
      "Brand Story video",
      "Location Highlight video",
      "Advanced monthly insights",
      "Priority support",
    ],
  },
  {
    id: "group",
    name: "Restaurant Group",
    price: "Custom",
    cadence: "pricing",
    who: "For chains, franchises and multi-outlet groups.",
    cta: "Talk To Our Team",
    featured: false,
    variant: "dark",
    features: [
      "Multiple outlets",
      "Individual QR and review flows",
      "Outlet-level reporting",
      "Central dashboard",
      "Location comparison",
      "Group customer-experience report",
      "Dedicated support",
    ],
  },
]

const PROOF = [
  "[Insert verified restaurant testimonial]",
  "[Insert verified restaurant testimonial]",
  "[Insert dashboard screenshot]",
  "[Insert Review Stand image]",
  "[Insert verified result]",
  "[Insert report screenshot]",
  "[Insert video thumbnail]",
  "[Insert verified response count]",
]

const FAQS = [
  ["Is Restrosights an app?", "A Progressive Web App owners can install on supported phones and use like an app."],
  ["Do guests need to install anything?", "No. Guests scan the QR and use the browser."],
  ["Does Restrosights guarantee more Google rankings?", "No. Genuine review growth can support local relevance, trust and Maps visibility, but rankings cannot be guaranteed."],
  ["Does Restrosights block bad reviews?", "No. It helps capture lower-rated feedback earlier so the restaurant can understand and address problems. Guests still control what they publish."],
  ["Can you remove negative reviews?", "Legitimate reviews cannot simply be removed. The team can assist when a review appears fake, spammy or potentially violates Google policies."],
  ["Can you guarantee a suspended profile will be restored?", "No legitimate provider should guarantee reinstatement. Restrosights provides professional guidance and support."],
  ["Does it support multiple outlets?", "Yes. Each outlet has its own QR and review flow and its own feedback, with a central view."],
  ["What do I receive every month?", "Customer experience reporting with ratings, sentiment, recurring praise, recurring concerns and recommended management actions."],
]

function Check({ children, light = false }) {
  return (
    <li className="flex items-start gap-3 text-sm leading-relaxed">
      <span className={`mt-0.5 grid h-5 w-5 flex-none place-items-center rounded-full ${light ? "bg-white/20 text-white" : "bg-[#E7F3FE] text-glow"}`}>
        <Icon name="check" className="h-3.5 w-3.5" />
      </span>
      <span className={light ? "text-white/95" : "text-navy"}>{children}</span>
    </li>
  )
}

export function Hero() {
  const { openDemo } = useLead()
  return (
    <section id="top" className="bg-mist pb-16 pt-8 sm:pb-20 lg:pb-24 lg:pt-12">
      <div className="wrap grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
        <Reveal>
          <div className="flex flex-wrap items-center justify-center gap-2 lg:justify-start">
            {["Built for restaurants", "QR-based", "Installable app", "Multi-location ready"].map((item) => (
              <span key={item} className="rounded-full bg-white px-3 py-1.5 text-xs font-medium text-navy shadow-card">{item}</span>
            ))}
          </div>
          <h1 className="display mx-auto mt-6 max-w-xl text-center text-[2.15rem] text-navy sm:text-5xl lg:mx-0 lg:text-left lg:text-[3.15rem]">
            Turn Every Dining Experience Into <span className="text-glow">Better Reviews</span>, Better Insights &amp; A Stronger Restaurant Reputation.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-center text-base leading-relaxed text-mute sm:text-[17px] lg:mx-0 lg:text-left">
            Collect guest feedback, grow genuine Google reviews, catch unhappy experiences earlier and understand exactly what diners think — with one reputation system built for restaurants.
          </p>
          <div className="mt-7 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center lg:justify-start">
            <Button onClick={() => { track(EVENTS.GET_RESTROSIGHTS, { source: "hero" }); document.getElementById("pricing")?.scrollIntoView() }}>
              Get Restrosights
            </Button>
            <Button variant="secondary" onClick={() => openDemo("hero")}>Book a Demo</Button>
          </div>
        </Reveal>
        <HeroStage />
      </div>
    </section>
  )
}

export function Pain() {
  return (
    <section id="pain" className="bg-white py-20 sm:py-28">
      <div className="wrap">
        <div className="grid items-end gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <h2 className="display text-[2rem] text-navy sm:text-5xl">
              Great Food Does Not Automatically <span className="text-glow">Create Great Reviews.</span>
            </h2>
          </Reveal>
          <p className="text-base leading-relaxed text-mute sm:text-[17px]">
            A full dining room can still leave you with a thin Google profile, a surprise 1-star review, and no clear picture of why.
          </p>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {PAIN.map(([name, title, copy], index) => (
            <Reveal key={title} delay={index * 60}>
              <article className="soft-card h-full p-4 sm:p-5">
                <PainVisual name={name} />
                <h3 className="mt-4 text-lg font-medium tracking-[-0.02em] text-navy">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mute">{copy}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <p className="mx-auto mt-10 max-w-3xl text-center text-lg font-medium leading-relaxed text-navy">
          Restrosights gives restaurants a system instead of leaving reputation to chance.
        </p>
      </div>
    </section>
  )
}

export function How() {
  return (
    <section id="how-it-works" className="scroll-mt-24 bg-white pb-20 sm:pb-28">
      <div className="wrap grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <div className="float-b mx-auto max-w-[320px]">
            <GuestPhone />
          </div>
        </Reveal>
        <Reveal delay={80}>
          <p className="text-[15px] font-medium text-glowink">How it works</p>
          <h2 className="display mt-2 text-[2rem] text-navy sm:text-5xl">
            From the table to a <span className="text-glow">clearer picture</span> of your guests.
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-mute">Five quiet steps. Guests stay in the browser. You see what they meant.</p>
          <ol className="mt-8 space-y-4">
            {STEPS.map(([num, title, copy]) => (
              <li key={num} className="flex gap-4">
                <span className="grid h-9 w-9 flex-none place-items-center rounded-full bg-[#E7F3FE] text-sm font-medium text-glowink">{num}</span>
                <div>
                  <h3 className="font-medium text-navy">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-mute">{copy}</p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
      <div className="wrap mt-12">
        <div className="soft-card px-4 py-6 sm:px-8">
          <ol className="flex flex-wrap items-center justify-center gap-2">
            {FLOW.map((item, index) => (
              <li key={item} className="flex items-center gap-2">
                <span className="rounded-full bg-white px-3 py-2 text-sm font-medium text-navy shadow-card">{item}</span>
                {index < FLOW.length - 1 ? <span className="text-glow" aria-hidden="true">→</span> : null}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

export function Stand() {
  return (
    <section id="review-stand" className="scroll-mt-24 bg-white py-8 sm:py-12">
      <div className="wrap">
        <div className="blue-band grid items-center gap-10 px-6 py-10 sm:px-10 sm:py-14 lg:grid-cols-2 lg:px-14">
          <Reveal>
            <p className="text-sm font-medium text-white/80">Review Stand</p>
            <h2 className="display mt-3 text-[2rem] text-white sm:text-5xl">A prompt where guests already pause.</h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/90">
              The physical QR stand sits on the table, at the billing counter, at reception or with takeaway. Guests scan it and stay in the browser. Nothing to install.
            </p>
            <ul className="mt-6 space-y-3">
              {["On the table", "Billing counter", "Reception", "Takeaway"].map((place) => (
                <Check key={place} light>{place}</Check>
              ))}
            </ul>
          </Reveal>
          <div className="float-a">
            <ReviewStand />
          </div>
        </div>
      </div>
    </section>
  )
}

export function DashboardSection() {
  return (
    <section id="dashboard" className="scroll-mt-24 bg-white py-16 sm:py-24">
      <div className="wrap">
        <div className="soft-card grid items-center gap-10 p-5 sm:p-8 lg:grid-cols-2 lg:p-12">
          <Reveal>
            <DashboardPanel />
          </Reveal>
          <Reveal delay={80}>
            <p className="text-[15px] font-medium text-glowink">The app</p>
            <h2 className="display mt-2 text-[2rem] text-navy sm:text-5xl">Your restaurant reputation in your pocket.</h2>
            <p className="mt-4 text-[17px] leading-relaxed text-mute">
              The Restrosights app is a progressive web app. Owners install it on supported phones and use it like an app: feedback, ratings, sentiment, outlet switching and notifications in one place.
            </p>
            <ul className="mt-6 space-y-3">
              {["Overall rating and positive share", "Recent feedback, in the guest’s words", "Switch outlets without a second login"].map((item) => (
                <Check key={item}>{item}</Check>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export function Seo() {
  return (
    <section id="reviews-seo" className="bg-white py-16 sm:py-24">
      <div className="wrap grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <p className="text-[15px] font-medium text-glowink">Reviews and local SEO</p>
          <h2 className="display mt-2 text-[2rem] text-navy sm:text-5xl">
            Reviews That Build Trust — And <span className="text-glow">Support Local SEO.</span>
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-mute">
            Build a steady flow of genuine customer reviews that can strengthen your restaurant’s Google presence, local relevance and customer trust over time.
          </p>
          <p className="mt-4 text-sm font-medium text-glowink">Build genuine reviews that support local trust and visibility.</p>
          <ol className="mt-6 space-y-3">
            {SEO_STEPS.map((step, index) => (
              <li key={step} className="flex items-center gap-3 text-sm font-medium text-navy">
                <span className="grid h-8 w-8 flex-none place-items-center rounded-full bg-[#E7F3FE] text-xs text-glowink">{index + 1}</span>
                {step}
              </li>
            ))}
          </ol>
        </Reveal>
        <div className="float-b">
          <GoogleSharePhone />
        </div>
      </div>
      <div className="wrap mt-10 grid gap-4 md:grid-cols-2">
        <article className="soft-card p-5">
          <p className="text-xs font-medium text-mute">Thin review</p>
          <p className="mt-3 text-2xl font-medium text-navy">“Good food.”</p>
          <p className="mt-3 text-sm text-mute">Little for the next diner, and little local context.</p>
        </article>
        <article className="rounded-3xl bg-[#F3FBF7] p-5">
          <p className="text-xs font-medium text-good">Descriptive genuine review</p>
          <p className="mt-3 text-lg font-medium leading-relaxed text-navy">“Loved the biryani and service. A great family restaurant in Whitefield with a nice ambience.”</p>
          <p className="mt-3 text-sm text-mute">An example of the kind of review a real visit can produce. Not a result we are claiming.</p>
        </article>
      </div>
      <div className="wrap mt-6 grid items-center gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <GrowthChart />
        <p className="text-sm leading-relaxed text-mute">
          Genuine descriptive reviews can support local relevance, trust and Maps visibility over time. Restrosights does not promise a number-one ranking, a guaranteed SEO boost, or a script of forced keywords. The chart is an illustration, not a measured result.
        </p>
      </div>
    </section>
  )
}

export function Filtration() {
  return (
    <section id="filtration" className="bg-white py-16 sm:py-24">
      <div className="wrap">
        <div className="grid items-start gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <SectionHeading eyebrow="Negative feedback filtration" title={<><span>Don&apos;t Discover Customer Problems From A </span><span className="text-glow">1-Star Review.</span></>}>
            Restrosights helps restaurants capture lower-rated guest feedback privately, so management can understand and address the issue earlier.
          </SectionHeading>
          <AlertCard className="float-c" />
        </div>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-mute">
          Call it what it is: negative feedback filtration, private feedback capture, early complaint detection, guest experience recovery. It is not a way to block, hide or filter who is allowed to review. Guests still decide what they publish.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map(([title, copy]) => (
            <article key={title} className="soft-card p-5">
              <h3 className="text-lg font-medium text-navy">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-mute">{copy}</p>
            </article>
          ))}
        </div>
        <ol className="mt-6 grid gap-3 md:grid-cols-5">
          {LOGIC.map((step, index) => (
            <li key={step} className="soft-card p-4 text-sm font-medium leading-relaxed text-navy">
              <span className="mb-2 block text-xs text-glowink">0{index + 1}</span>
              {step}
            </li>
          ))}
        </ol>
        <p className="mt-8 text-lg font-medium tracking-[-0.02em] text-navy">Good experiences help grow your reputation. Bad experiences help you improve it.</p>
      </div>
    </section>
  )
}

export function Insights() {
  return (
    <section id="insights" className="bg-white py-16 sm:py-24">
      <div className="wrap">
        <SectionHeading center eyebrow="Monthly intelligence" title={<><span>Don&apos;t Just Collect Reviews. </span><span className="text-glow">Understand Your Diners.</span></>}>
          See what diners love — and what needs attention. A premium monthly read, with the figures below marked as sample data.
        </SectionHeading>
        <div className="soft-card mx-auto mt-10 max-w-4xl p-3 sm:p-5">
          <div className="mb-4 grid gap-3 sm:grid-cols-3">
            {[
              ["427", "Guest responses in a sample month"],
              ["4.6", "Average guest experience"],
              ["89%", "Positive experiences"],
            ].map(([value, label]) => (
              <div key={label} className="rounded-2xl bg-white px-4 py-4 shadow-card">
                <p className="text-3xl font-medium tracking-tight text-navy">{value}</p>
                <p className="mt-1 text-sm text-mute">{label}</p>
              </div>
            ))}
          </div>
          <ReportCard />
        </div>
      </div>
    </section>
  )
}

export function Reputation() {
  return (
    <section id="reputation" className="bg-white py-16 sm:py-24">
      <div className="wrap">
        <SectionHeading eyebrow="Reputation support" title="Help when a profile or a review needs a careful response.">
          Google Business Profile issues and reviews that look fake or spammy are part of the system. So is a clear line about what nobody honest can promise.
        </SectionHeading>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <GbpCard />
          <FakeReviewCard />
        </div>
        <div className="mt-4 rounded-3xl bg-[#FFF8EC] p-6">
          <h3 className="text-base font-medium text-warn">What we will not claim</h3>
          <ul className="mt-3 space-y-2 text-sm leading-relaxed text-navy">
            <li>Legitimate reviews cannot simply be removed.</li>
            <li>No legitimate provider should guarantee that a suspended profile will be restored.</li>
            <li>Restrosights does not block bad reviews, and it does not decide which guests may speak.</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export function Brand() {
  const [film, setFilm] = useState(null)
  function openFilm(name) {
    track(EVENTS.WATCH_VIDEO, { film: name })
    setFilm(name)
  }
  return (
    <section id="brand" className="bg-white py-16 sm:py-24">
      <div className="wrap">
        <SectionHeading eyebrow="Brand services" title="An Instagram bio that is easy to trust. Two films about the restaurant.">
          Growth includes Instagram bio optimisation, a Brand Story video and a Location Highlight video. The frames below show the shape of the work. They are not client results.
        </SectionHeading>
        <div className="mt-10 grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
          <InstagramCard />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {[
              ["Brand Story", "Who you are, told without a hard sell."],
              ["Location Highlight", "The room, the neighbourhood, the reason to visit."],
            ].map(([title, copy]) => (
              <article key={title} className="soft-card flex flex-col p-5">
                <button type="button" className="grid h-14 w-14 place-items-center rounded-full bg-white text-glow shadow-card" onClick={() => openFilm(title)} aria-label={`About the ${title} video`}>
                  ▶
                </button>
                <h3 className="mt-4 text-lg font-medium text-navy">{title}</h3>
                <p className="mt-1 text-sm text-mute">{copy}</p>
                <p className="mt-2 text-xs text-mute">Deliverable preview. Not a client film. No autoplay.</p>
              </article>
            ))}
          </div>
        </div>
        {film ? (
          <div className="fixed inset-0 z-50 grid place-items-center bg-[#102329]/45 p-4" onMouseDown={() => setFilm(null)}>
            <div role="dialog" aria-modal="true" aria-labelledby="film-title" className="w-full max-w-md rounded-3xl bg-white p-6 shadow-float" onMouseDown={(event) => event.stopPropagation()}>
              <h3 id="film-title" className="text-xl font-medium text-navy">{film}</h3>
              <p className="mt-3 text-sm leading-relaxed text-mute">These films are produced for your restaurant after you join. This preview does not play a sample client video, and it does not play sound.</p>
              <Button className="mt-5" onClick={() => setFilm(null)} arrow={false}>Close</Button>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  )
}

export function Multi() {
  return (
    <section id="multi-location" className="bg-white py-16 sm:py-24">
      <div className="wrap grid items-center gap-10 lg:grid-cols-2">
        <SectionHeading eyebrow="Multi-location" title={<>Know which restaurant location <span className="text-glow">needs attention.</span></>}>
          Each outlet has its own QR and review flow. You still get one central view: outlet-level feedback, a comparison, and a group read of the guest experience.
        </SectionHeading>
        <OutletCompare />
      </div>
    </section>
  )
}

export function Value() {
  return (
    <section id="value" className="bg-white py-16 sm:py-24">
      <div className="wrap">
        <SectionHeading eyebrow="The offer" title={<>One Restaurant Reputation System <span className="text-glow">Instead Of Five</span> Different Services.</>}>
          Most restaurants assemble this from separate vendors. Restrosights packages the work as one system.
        </SectionHeading>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <article className="rounded-3xl border border-line bg-white p-6">
            <h3 className="text-lg font-medium text-navy">Fragmented</h3>
            <ul className="mt-4 space-y-3">
              {FRAGMENTED.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-mute">
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-[#F8F7F7] text-mute">–</span>
                  {item}
                </li>
              ))}
            </ul>
          </article>
          <article className="soft-card p-6">
            <h3 className="text-lg font-medium text-navy">Restrosights</h3>
            <ul className="mt-4 space-y-3">
              {INCLUDED.map((item) => (
                <Check key={item}>{item}</Check>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  )
}

function PlanCalculator() {
  const { openDemo } = useLead()
  const [outlets, setOutlets] = useState("1")
  const count = Math.min(50, Math.max(1, Number.parseInt(outlets, 10) || 1))
  const group = count > 1
  return (
    <form
      className="soft-card mx-auto mt-10 max-w-xl p-6 text-left"
      onSubmit={(event) => {
        event.preventDefault()
        openDemo("plan_calculator", group ? "Restaurant Group" : "Growth")
      }}
    >
      <p className="text-[15px] font-medium text-glowink">Plan calculator</p>
      <h3 className="mt-2 text-xl font-medium tracking-[-0.02em] text-navy">Which published plan fits?</h3>
      <label className="mt-4 block text-sm font-medium text-navy" htmlFor="outlet-count">Outlets</label>
      <input id="outlet-count" className="field mt-1.5 max-w-[8rem]" type="number" min={1} max={50} inputMode="numeric" value={outlets} onChange={(event) => setOutlets(event.target.value)} />
      {group ? (
        <p className="mt-4 text-sm leading-relaxed text-mute">
          {count} outlets are Restaurant Group. That price is quoted. Starter is one location at ₹2,499 a month. Growth is ₹4,999 a month for one restaurant.
        </p>
      ) : (
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <div className="rounded-2xl bg-white p-4 shadow-card">
            <p className="text-sm font-medium text-navy">Starter</p>
            <p className="mt-1 text-2xl font-medium tracking-tight text-navy">₹2,499 <span className="text-sm text-mute">/ month</span></p>
          </div>
          <div className="rounded-2xl bg-white p-4 shadow-card">
            <p className="text-sm font-medium text-navy">Growth</p>
            <p className="mt-1 text-2xl font-medium tracking-tight text-navy">₹4,999 <span className="text-sm text-mute">/ month</span></p>
          </div>
        </div>
      )}
      <Button className="mt-4" type="submit">{group ? "Talk To Our Team" : "Book a Demo"}</Button>
    </form>
  )
}

export function Pricing() {
  const { openDemo } = useLead()
  const ref = useRef(null)
  useOnceInView(ref, EVENTS.PRICING_VIEW, { section: "pricing" })
  return (
    <section id="pricing" ref={ref} className="scroll-mt-24 bg-white py-16 sm:py-24">
      <div className="wrap">
        <div className="grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="text-[15px] font-medium text-glowink">Pricing</p>
            <h2 className="display mt-2 text-[2rem] text-navy sm:text-5xl">
              Choose a plan that fits <span className="text-glow">your restaurant.</span>
            </h2>
            <p className="mt-4 max-w-xl text-[17px] leading-relaxed text-mute">
              ₹4,999 is the cost of the reputation system for a restaurant that wants the full monthly practice. It is not a software seat stacked on top of a consultant, an editor and a reporting tool.
            </p>
          </div>
          <div className="float-c mx-auto hidden w-full max-w-[280px] rotate-6 lg:block">
            <ReviewStand />
          </div>
        </div>
        <PlanCalculator />
        <div className="mt-12 grid items-stretch gap-4 lg:grid-cols-3">
          {PLANS.map((plan) => (
            <article key={plan.id} className={`relative flex flex-col rounded-3xl bg-[#F8F7F7] p-6 ${plan.featured ? "lg:-mt-3 lg:mb-3" : ""}`}>
              {plan.featured ? (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#C2A463] px-3 py-1 text-[11px] font-medium text-navy">Popular</span>
              ) : null}
              <h3 className="text-lg font-medium text-navy">{plan.name}</h3>
              <p className="mt-1 text-sm text-mute">{plan.who}</p>
              <p className="mt-5 text-4xl font-medium tracking-tight text-navy">
                {plan.price} <span className="text-base font-normal text-mute">{plan.cadence}</span>
              </p>
              <Button className="mt-5 w-full" variant={plan.variant} onClick={() => openDemo(`pricing_${plan.id}`, plan.name)}>
                {plan.cta}
              </Button>
              {plan.note ? <p className="mt-4 text-sm font-medium leading-relaxed text-navy">{plan.note}</p> : null}
              <ul className="mt-5 space-y-2.5">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-navy">
                    <Icon name="check" className="mt-0.5 h-4 w-4 flex-none text-glow" />
                    {feature}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-mute">Prices in INR, billed monthly. Verified results from restaurants stay in the next section — we do not invent them here.</p>
      </div>
    </section>
  )
}

export function Proof() {
  return (
    <section id="proof" className="bg-white pb-8 sm:pb-12">
      <div className="wrap text-center">
        <p className="text-sm text-mute">Shown when a restaurant has agreed to share it</p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          {["[Restaurant logo]", "[Restaurant logo]", "[Restaurant logo]", "[Restaurant logo]"].map((slot, index) => (
            <div key={`${slot}-${index}`} className="grid h-14 min-w-36 place-items-center rounded-2xl border border-dashed border-line px-4 text-xs text-mute">
              {slot}
            </div>
          ))}
        </div>
      </div>
      <div className="wrap mt-16 max-w-3xl text-center">
        <p className="text-5xl font-medium text-glow" aria-hidden="true">“</p>
        <p className="mt-2 text-2xl font-medium leading-snug tracking-[-0.03em] text-navy sm:text-[1.7rem]">
          [Insert verified restaurant testimonial]
        </p>
        <p className="mt-4 text-sm text-mute">We will not invent testimonials, logos, review counts or before-and-after results.</p>
      </div>
      <div className="wrap mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {PROOF.map((slot, index) => (
          <div key={`${slot}-${index}`} className="flex min-h-36 flex-col justify-between rounded-3xl border border-dashed border-line bg-[#F8F7F7] p-5 text-left">
            <p className="text-[11px] font-medium text-glowink">Placeholder</p>
            <p className="text-sm font-medium leading-relaxed text-navy">{slot}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export function Faq() {
  const [open, setOpen] = useState(0)
  const { openDemo } = useLead()
  function toggle(index) {
    setOpen((current) => (current === index ? -1 : index))
    if (open !== index) track(EVENTS.FAQ_OPEN, { question: FAQS[index][0] })
  }
  return (
    <section id="faq" className="scroll-mt-24 bg-white py-16 sm:py-24">
      <div className="wrap grid items-start gap-10 lg:grid-cols-[0.82fr_1.18fr]">
        <div>
          <p className="text-[15px] font-medium text-glowink">FAQs</p>
          <h2 className="display mt-2 text-[2rem] text-navy sm:text-5xl">
            Frequently asked <span className="text-glow">questions.</span>
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-mute">
            Straight answers on the app, rankings, reviews and what Restrosights will not promise.
          </p>
          <div className="soft-card dot-grid mt-8 p-6 text-center">
            <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-white text-2xl text-glow shadow-card">?</div>
            <p className="mt-4 text-lg font-medium text-navy">Still deciding?</p>
            <p className="mt-2 text-sm leading-relaxed text-mute">The team can walk through the system for your restaurant.</p>
            <div className="mt-4 flex flex-col gap-2">
              <Button onClick={() => openDemo("faq_support")}>Book a Demo</Button>
              <WhatsAppLink source="faq" className="btn btn-secondary">WhatsApp Us</WhatsAppLink>
            </div>
          </div>
        </div>
        <div className="space-y-3">
          {FAQS.map(([question, answer], index) => {
            const expanded = open === index
            const panelId = `faq-panel-${index}`
            return (
              <div key={question} className="rounded-2xl bg-[#F8F7F7]">
                <button
                  type="button"
                  className="flex min-h-14 w-full items-center gap-4 px-4 py-4 text-left"
                  aria-expanded={expanded}
                  aria-controls={panelId}
                  onClick={() => toggle(index)}
                >
                  <span className="w-8 flex-none text-sm font-medium text-mute">{String(index + 1).padStart(2, "0")}</span>
                  <span className="flex-1 text-[15px] font-medium text-navy">{question}</span>
                  <span className="text-xl text-navy" aria-hidden="true">{expanded ? "–" : "+"}</span>
                </button>
                {expanded ? (
                  <div id={panelId} className="px-4 pb-4 pl-16 text-sm leading-relaxed text-mute">{answer}</div>
                ) : null}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export function FinalCta() {
  const { openDemo } = useLead()
  return (
    <section id="book" className="bg-white py-8 pb-20 sm:py-12 sm:pb-28">
      <div className="wrap">
        <div className="blue-band px-6 py-12 sm:px-12 sm:py-16">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-white/80">Get Restrosights</p>
            <h2 className="display mt-3 text-[2rem] text-white sm:text-5xl">
              Your Restaurant Serves Hundreds Of Customers. Restrosights Helps You Learn From Every One Of Them.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/90 sm:text-lg">
              More genuine reviews. Faster feedback. Better restaurant experiences. Stronger online reputation.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button variant="secondary" onClick={() => { track(EVENTS.GET_RESTROSIGHTS, { source: "final" }); document.getElementById("demo-form")?.scrollIntoView(); document.getElementById("demo-form-name")?.focus() }}>
                Get Restrosights
              </Button>
              <button type="button" className="btn border border-white/40 bg-white/15 text-white" onClick={() => openDemo("final")}>
                Book a Demo
              </button>
              <WhatsAppLink source="final" className="btn border border-white/40 bg-transparent text-white">
                WhatsApp Us
              </WhatsAppLink>
            </div>
            <p className="mt-4 text-sm text-white/85">No complicated setup · Built for restaurants · Our team helps you get started.</p>
          </div>
        </div>
        <div className="mx-auto -mt-8 max-w-2xl">
          <LeadForm idPrefix="demo-form" source="final_inline" />
        </div>
      </div>
    </section>
  )
}
