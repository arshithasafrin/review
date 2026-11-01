import { useRef, useState } from "react"
import { EVENTS, track, useOnceInView } from "../lib/analytics"
import { DashboardMock, FeedbackList, MiniStats, PhoneMock, ReportMock, ReviewStand } from "../components/Mockups"
import { LeadForm, useLead } from "../components/LeadForm"
import { FluidGlow } from "../components/Silk"
import { Button, IconTile, SampleBadge, SectionHeading } from "../components/ui"
import { WhatsAppLink } from "../components/WhatsAppLink"

const PAIN = [
  ["clock", "Happy diners forget", "They leave satisfied and never post the review."],
  ["megaphone", "Complaints become public", "Management discovers the issue only after a low-star review."],
  ["eye", "No clear guest intelligence", "A star rating does not say what went wrong: food, service, waiting or ambience."],
  ["pin", "Multi-outlet blind spots", "One outlet quietly underperforms while the others look fine."],
  ["shield", "Fake reviews hurt trust", "You need a correct, policy-based response — not a guessing game."],
  ["store", "Profile problems hurt discovery", "Google Business Profile issues affect whether you are found."],
]

const STEPS = [
  ["01", "qr", "Scan", "Guest scans the stand at the table, billing counter, reception or takeaway."],
  ["02", "star", "Rate", "A quick 1–5 star rating."],
  ["03", "pen", "Share", "What they loved, or what needs attention."],
  ["04", "chart", "Grow", "Satisfied guests can continue their genuine Google review journey."],
  ["05", "eye", "Learn", "The owner sees feedback, sentiment and recurring issues."],
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
  ["utensils", "Food quality", "Taste, temperature, consistency, portion."],
  ["users", "Service", "Speed, attention, staff behaviour."],
  ["hourglass", "Waiting time", "Queue, table delay, order delay."],
  ["bag", "Order accuracy", "Wrong item, missing item, takeaway issue."],
  ["sofa", "Ambience", "Noise, seating, comfort, cleanliness."],
  ["tag", "Value perception", "Price, portion, expectations."],
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

function Glow({ children, className = "" }) {
  return <div className={className}>{children}</div>
}

export function Hero() {
  const { openDemo } = useLead()
  return (
    <section id="top" className="relative -mt-[4.5rem] pb-20 pt-[5.75rem] sm:pb-28 sm:pt-[6.5rem]">
      <FluidGlow />
      <div className="wrap relative z-10">
        <Glow className="mx-auto max-w-4xl text-center">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#6d7388]">Restaurant reputation system</p>
          <h1 className="mt-4 text-[1.9rem] font-extrabold leading-[1.08] tracking-[-0.034em] text-navy sm:text-5xl lg:text-[3.35rem] lg:leading-[1.05]">
            Turn Every Dining Experience Into Better Reviews, Better Insights &amp; A Stronger Restaurant Reputation.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-[1.7] text-[#4a5168] sm:text-lg">
            Collect guest feedback, grow genuine Google reviews, catch unhappy experiences earlier and understand exactly what diners think — with one reputation system built for restaurants.
          </p>
          <div className="mt-7 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <Button onClick={() => { track(EVENTS.GET_RESTROSIGHTS, { source: "hero" }); document.getElementById("pricing")?.scrollIntoView() }}>
              Get Restrosights
            </Button>
            <Button variant="secondary" onClick={() => openDemo("hero")}>
              Book a Demo
            </Button>
          </div>
          <ul className="mt-6 flex flex-wrap items-center justify-center gap-2 text-sm font-semibold text-navy">
            {["Built for restaurants", "QR-based", "Installable app", "Multi-location ready"].map((item) => (
              <li key={item} className="rounded-full border border-[rgba(11,22,64,0.08)] bg-white/80 px-3 py-2 text-[0.82rem] font-medium text-[#2a3458]">{item}</li>
            ))}
          </ul>
        </Glow>

        <div className="relative z-10 mx-auto mt-12 grid max-w-5xl items-center gap-4 lg:mt-16 lg:grid-cols-[260px_300px_280px] lg:justify-center lg:gap-5">
          <div className="order-2 grid gap-4 lg:order-1">
            <div className="rise">
              <ReviewStand />
            </div>
            <div className="card rise p-4">
              <SampleBadge />
              <p className="mt-3 text-4xl font-extrabold tracking-tight text-good">89%</p>
              <p className="text-sm font-semibold text-navy">Positive guest sentiment</p>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <PhoneMock />
          </div>
          <div className="order-3 grid gap-4">
            <div className="card p-4">
              <div className="flex items-center justify-between gap-2">
                <p className="text-sm font-extrabold text-navy">Whitefield</p>
                <SampleBadge />
              </div>
              <p className="mt-2 text-xs font-semibold text-mute">Outlet selector</p>
              <div className="mt-3">
                <MiniStats />
              </div>
            </div>
            <div className="card p-4">
              <p className="mb-3 text-sm font-extrabold text-navy">Recent feedback</p>
              <FeedbackList compact />
            </div>
          </div>
        </div>
        <p className="relative z-10 mt-4 text-center text-xs font-semibold text-ink">Illustrative sample data on every card. Not a customer result.</p>
      </div>
    </section>
  )
}

export function Pain() {
  return (
    <section id="pain" className="py-24 sm:py-32">
      <div className="wrap">
        <SectionHeading eyebrow="The gap" title="Great Food Does Not Automatically Create Great Reviews.">
          A full dining room can still leave you with a thin Google profile, a surprise 1-star review, and no clear picture of why.
        </SectionHeading>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PAIN.map(([icon, title, copy]) => (
            <article key={title} className="card p-6">
              <IconTile name={icon} />
              <h3 className="mt-4 text-lg font-extrabold tracking-tight text-navy">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink">{copy}</p>
            </article>
          ))}
        </div>
        <p className="mx-auto mt-10 max-w-3xl text-center text-lg font-semibold leading-relaxed text-navy">
          Restrosights gives restaurants a system instead of leaving reputation to chance.
        </p>
      </div>
    </section>
  )
}

export function How() {
  return (
    <section id="how-it-works" className="scroll-mt-24 pb-24 sm:pb-32">
      <div className="wrap">
        <SectionHeading eyebrow="How it works" title="From the table to a clearer picture of your guests.">
          Five quiet steps. Guests stay in the browser. You see what they meant.
        </SectionHeading>
        <ol className="mt-12 grid gap-4 md:grid-cols-5">
          {STEPS.map(([num, icon, title, copy]) => (
            <li key={num} className="card p-5">
              <div className="flex items-center justify-between">
                <IconTile name={icon} />
                <span className="text-sm font-extrabold text-[#5346c8]">{num}</span>
              </div>
              <h3 className="mt-4 text-lg font-extrabold text-navy">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink">{copy}</p>
            </li>
          ))}
        </ol>
        <ol className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {FLOW.map((item, index) => (
            <li key={item} className="flex items-center gap-2">
              <span className="rounded-full border border-[rgba(11,22,64,0.08)] bg-white px-3 py-2 text-sm font-medium text-navy">{item}</span>
              {index < FLOW.length - 1 ? <span className="text-[#98a0b3]" aria-hidden="true">→</span> : null}
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export function Stand() {
  return (
    <section id="review-stand" className="scroll-mt-24 py-24 sm:py-32">
      <div className="wrap grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <SectionHeading eyebrow="Review Stand" title="A prompt where guests already pause.">
            The physical QR stand sits on the table, at the billing counter, at reception or with takeaway. Guests scan it and stay in the browser. Nothing to install.
          </SectionHeading>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {["On the table", "Billing counter", "Reception", "Takeaway"].map((place) => (
              <li key={place} className="rounded-2xl border border-[rgba(11,22,64,0.08)] bg-white px-4 py-3 text-sm font-medium text-navy">{place}</li>
            ))}
          </ul>
        </div>
        <ReviewStand />
      </div>
    </section>
  )
}

export function DashboardSection() {
  return (
    <section id="dashboard" className="scroll-mt-24 py-24 sm:py-32">
      <div className="wrap">
        <Glow>
          <SectionHeading eyebrow="The app" title="Your restaurant reputation in your pocket.">
            The Restrosights app is a progressive web app. Owners install it on supported phones and use it like an app: feedback, ratings, sentiment, outlet switching and notifications in one place.
          </SectionHeading>
        </Glow>
        <div className="mx-auto mt-10 max-w-3xl">
          <DashboardMock />
        </div>
      </div>
    </section>
  )
}

export function Seo() {
  return (
    <section id="reviews-seo" className="py-24 sm:py-32">
      <div className="wrap">
        <SectionHeading eyebrow="Reviews and local SEO" title="Reviews That Build Trust — And Support Local SEO.">
          Build a steady flow of genuine customer reviews that can strengthen your restaurant&apos;s Google presence, local relevance and customer trust over time.
        </SectionHeading>
        <p className="mt-4 max-w-3xl text-base font-medium text-navy">Build genuine reviews that support local trust and visibility.</p>
        <ol className="mt-10 grid gap-3">
          {SEO_STEPS.map((step, index) => (
            <li key={step} className="card flex items-start gap-4 px-4 py-4">
              <span className="icon-tile h-11 w-11 rounded-xl text-sm font-extrabold">{index + 1}</span>
              <p className="pt-2 text-base font-semibold text-navy">{step}</p>
            </li>
          ))}
        </ol>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <article className="card p-6">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-mute">Thin review</p>
            <p className="mt-3 text-2xl font-extrabold text-navy">“Good food.”</p>
            <p className="mt-3 text-sm text-ink">Little for the next diner, and little local context.</p>
          </article>
          <article className="card border-[#d7eee4] bg-[#f7fbf8] p-6">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-good">Descriptive genuine review</p>
            <p className="mt-3 text-lg font-bold leading-relaxed text-navy">“Loved the biryani and service. A great family restaurant in Whitefield with a nice ambience.”</p>
            <p className="mt-3 text-sm text-ink">An example of the kind of review a real visit can produce. Not a result we are claiming.</p>
          </article>
        </div>
        <p className="mt-6 max-w-3xl text-sm leading-relaxed text-ink">
          Genuine descriptive reviews can support local relevance, trust and Maps visibility over time. Restrosights does not promise a number-one ranking, a guaranteed SEO boost, or a script of forced keywords.
        </p>
      </div>
    </section>
  )
}

export function Filtration() {
  return (
    <section id="filtration" className="py-24 sm:py-32">
      <div className="wrap">
        <SectionHeading eyebrow="Negative feedback filtration" title="Don't Discover Customer Problems From A 1-Star Review.">
          Restrosights helps restaurants capture lower-rated guest feedback privately, so management can understand and address the issue earlier. Catch lower-rated guest feedback earlier.
        </SectionHeading>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-ink">
          Call it what it is: negative feedback filtration, private feedback capture, early complaint detection, guest experience recovery. It is not a way to block, hide or filter who is allowed to review. Guests still decide what they publish.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map(([icon, title, copy]) => (
            <article key={title} className="card p-6">
              <IconTile name={icon} />
              <h3 className="mt-4 text-lg font-extrabold text-navy">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink">{copy}</p>
            </article>
          ))}
        </div>
        <ol className="mt-8 grid gap-3 md:grid-cols-5">
          {LOGIC.map((step, index) => (
            <li key={step} className="card p-4 text-sm font-medium leading-relaxed text-navy">
              <span className="mb-2 block text-xs font-extrabold text-[#5346c8]">0{index + 1}</span>
              {step}
            </li>
          ))}
        </ol>
        <p className="mt-8 text-lg font-extrabold tracking-tight text-navy">Good experiences help grow your reputation. Bad experiences help you improve it.</p>
      </div>
    </section>
  )
}

export function Insights() {
  return (
    <section id="insights" className="py-24 sm:py-32">
      <div className="wrap">
        <Glow>
          <SectionHeading eyebrow="Monthly intelligence" title="Don't Just Collect Reviews. Understand Your Diners.">
            See what diners love — and what needs attention. A premium monthly read, with the figures below marked as sample data.
          </SectionHeading>
        </Glow>
        <div className="mx-auto mt-10 max-w-4xl">
          <ReportMock />
        </div>
      </div>
    </section>
  )
}

export function Reputation() {
  return (
    <section id="reputation" className="py-24 sm:py-32">
      <div className="wrap">
        <SectionHeading eyebrow="Reputation support" title="Help when a profile or a review needs a careful response.">
          Google Business Profile issues and reviews that look fake or spammy are part of the system. So is a clear line about what nobody honest can promise.
        </SectionHeading>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <article className="card p-6">
            <IconTile name="store" />
            <h3 className="mt-4 text-xl font-extrabold text-navy">Google Business Profile support</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink">Guidance on suspension, reinstatement and verification. The work is professional support, not a switch that turns a profile back on.</p>
          </article>
          <article className="card p-6">
            <IconTile name="shield" />
            <h3 className="mt-4 text-xl font-extrabold text-navy">Fake review assistance</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink">When a review appears fake, spammy or potentially in violation of Google&apos;s policies, the team can help you report it the right way.</p>
          </article>
        </div>
        <div className="card mt-4 border-[#f0e2c4] bg-[#fffdf8] p-6">
          <h3 className="text-base font-extrabold text-warn">What we will not claim</h3>
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
    <section id="brand" className="py-24 sm:py-32">
      <div className="wrap">
        <SectionHeading eyebrow="Brand services" title="An Instagram bio that is easy to trust. Two films about the restaurant.">
          Growth includes Instagram bio optimisation, a Brand Story video and a Location Highlight video. The frames below show the shape of the work. They are not client results.
        </SectionHeading>
        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          <article className="card p-6">
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-lg font-extrabold text-navy">Instagram bio</h3>
              <span className="rounded-full bg-[#f4f1ff] px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-[#4e43b5]">Example, not a client</span>
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl bg-[#f6f5f8] p-4">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-mute">Before</p>
                <p className="mt-2 text-sm leading-relaxed text-navy">Best restaurant in town!!! DM for offers. Link in bio maybe.</p>
              </div>
              <div className="rounded-2xl bg-[#f4fbf7] p-4">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-good">After</p>
                <p className="mt-2 text-sm leading-relaxed text-navy">Family dining in Whitefield. Biryani, weekday lunch, weekend dinner. Hours and the map, one link.</p>
              </div>
            </div>
          </article>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["Brand Story", "Who you are, told without a hard sell."],
              ["Location Highlight", "The room, the neighbourhood, the reason to visit."],
            ].map(([title, copy]) => (
              <article key={title} className="card flex flex-col p-6">
                <div className="grid h-36 place-items-center rounded-2xl border border-[rgba(11,22,64,0.06)] bg-[#f3f3f5]">
                  <button type="button" className="grid h-14 w-14 place-items-center rounded-full bg-white text-lg text-navy shadow-card transition hover:-translate-y-0.5" onClick={() => openFilm(title)} aria-label={`About the ${title} video`}>
                    ▶
                  </button>
                </div>
                <h3 className="mt-4 text-lg font-extrabold text-navy">{title}</h3>
                <p className="mt-1 text-sm text-ink">{copy}</p>
                <p className="mt-2 text-xs font-semibold text-mute">Deliverable preview. Not a client film. No autoplay.</p>
              </article>
            ))}
          </div>
        </div>
        {film ? (
          <div className="fixed inset-0 z-50 grid place-items-center bg-[#0b1640]/45 p-4" onMouseDown={() => setFilm(null)}>
            <div role="dialog" aria-modal="true" aria-labelledby="film-title" className="w-full max-w-md rounded-[28px] bg-white p-6 shadow-float" onMouseDown={(event) => event.stopPropagation()}>
              <h3 id="film-title" className="text-xl font-extrabold text-navy">{film}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink">These films are produced for your restaurant after you join. This preview does not play a sample client video, and it does not play sound.</p>
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
    <section id="multi-location" className="py-24 sm:py-32">
      <div className="wrap grid items-center gap-10 lg:grid-cols-2">
        <SectionHeading eyebrow="Multi-location" title="Know which restaurant location needs attention.">
          Each outlet has its own QR and review flow. You still get one central view: outlet-level feedback, a comparison, and a group read of the guest experience.
        </SectionHeading>
        <div className="card p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-extrabold text-navy">Central view</h3>
            <SampleBadge />
          </div>
          <ul className="mt-4 space-y-3">
            {[
              ["Whitefield", "4.7", "Steady"],
              ["Indiranagar", "4.6", "Steady"],
              ["Koramangala", "4.2", "Waiting time"],
            ].map(([name, score, note]) => (
              <li key={name} className="flex items-center justify-between rounded-2xl bg-[#f7f6fb] px-4 py-3">
                <div>
                  <p className="font-extrabold text-navy">{name}</p>
                  <p className={`text-xs font-semibold ${note === "Steady" ? "text-good" : "text-warn"}`}>{note}</p>
                </div>
                <p className={`text-2xl font-extrabold ${note === "Steady" ? "text-good" : "text-warn"}`}>{score}</p>
              </li>
            ))}
          </ul>
          <p className="mt-3 text-xs text-mute">Illustrative sample data, not a customer result.</p>
        </div>
      </div>
    </section>
  )
}

export function Value() {
  return (
    <section id="value" className="py-24 sm:py-32">
      <div className="wrap">
        <SectionHeading eyebrow="The offer" title="One Restaurant Reputation System Instead Of Five Different Services.">
          Most restaurants assemble this from separate vendors. Restrosights packages the work as one system.
        </SectionHeading>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <article className="card p-6">
            <h3 className="text-lg font-extrabold text-navy">Fragmented</h3>
            <ul className="mt-4 space-y-3">
              {FRAGMENTED.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm font-semibold text-ink">
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-[#f4f2f8] text-mute">–</span>
                  {item}
                </li>
              ))}
            </ul>
          </article>
          <article className="card p-6">
            <h3 className="text-lg font-extrabold text-navy">Restrosights</h3>
            <ul className="mt-4 space-y-3">
              {INCLUDED.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm font-medium text-navy">
                  <span className="icon-tile" style={{ width: "1.5rem", height: "1.5rem", borderRadius: "0.45rem" }}>
                    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true"><path d="m5 12.5 4.2 4.2L19 7.5" strokeLinecap="round" /></svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  )
}

export function Pricing() {
  const { openDemo } = useLead()
  const ref = useRef(null)
  useOnceInView(ref, EVENTS.PRICING_VIEW, { section: "pricing" })
  return (
    <section id="pricing" ref={ref} className="scroll-mt-24 py-24 sm:py-32">
      <div className="wrap">
        <SectionHeading center eyebrow="Pricing" title="Three ways to start. One system, not five invoices.">
          ₹4,999 is the cost of the reputation system for a restaurant that wants the full monthly practice. It is not a software seat stacked on top of a consultant, an editor and a reporting tool.
        </SectionHeading>
        <div className="mt-12 grid items-stretch gap-4 lg:grid-cols-3">
          {PLANS.map((plan) => (
            <article key={plan.id} className={`card flex flex-col p-6 ${plan.featured ? "shadow-float ring-1 ring-[#5b53cc]/20 lg:-mt-4 lg:mb-4" : ""}`}>
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-lg font-extrabold text-navy">{plan.name}</h3>
                {plan.featured ? <span className="rounded-full bg-navy px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-white">Most popular</span> : null}
              </div>
              <p className="mt-4 text-4xl font-extrabold tracking-tight text-navy">
                {plan.price} <span className="text-base font-semibold text-mute">{plan.cadence}</span>
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink">{plan.who}</p>
              {plan.note ? <p className="mt-3 text-sm font-semibold leading-relaxed text-navy">{plan.note}</p> : null}
              <ul className="mt-5 flex-1 space-y-2.5">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm font-semibold text-navy">
                    <span className="mt-0.5 text-[#5346c8]" aria-hidden="true">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button className="mt-6 w-full" onClick={() => openDemo(`pricing_${plan.id}`, plan.name)}>
                {plan.cta}
              </Button>
            </article>
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-mute">Prices in INR, billed monthly. Verified results from restaurants are in the next section — we do not invent them here.</p>
      </div>
    </section>
  )
}

export function Proof() {
  return (
    <section id="proof" className="pb-24 sm:pb-32">
      <div className="wrap">
        <SectionHeading eyebrow="Proof" title="Shown when a restaurant has agreed to share it.">
          We will not invent testimonials, logos, review counts or before-and-after results. These spaces stay empty until the material is real.
        </SectionHeading>
        <div className="mt-8 flex flex-wrap gap-3">
          {["[Restaurant logo]", "[Restaurant logo]", "[Restaurant logo]", "[Restaurant logo]"].map((slot, index) => (
            <div key={`${slot}-${index}`} className="grid h-16 min-w-36 place-items-center rounded-2xl border border-dashed border-[#d5d0e6] px-4 text-xs font-semibold text-mute">
              {slot}
            </div>
          ))}
        </div>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PROOF.map((slot, index) => (
            <div key={`${slot}-${index}`} className="flex min-h-40 flex-col justify-between rounded-[24px] border border-dashed border-[#d5d0e6] bg-[#fbfaff] p-5">
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#5346c8]">Placeholder</p>
              <p className="text-sm font-semibold leading-relaxed text-navy">{slot}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Faq() {
  const [open, setOpen] = useState(() => new Set([0]))
  function toggle(index) {
    setOpen((current) => {
      const next = new Set(current)
      if (next.has(index)) next.delete(index)
      else {
        next.add(index)
        track(EVENTS.FAQ_OPEN, { question: FAQS[index][0] })
      }
      return next
    })
  }
  return (
    <section id="faq" className="scroll-mt-24 py-24 sm:py-32">
      <div className="wrap max-w-3xl">
        <SectionHeading eyebrow="FAQ" title="Frequently asked questions">
          Straight answers on the app, rankings, reviews and what Restrosights will not promise.
        </SectionHeading>
        <div className="mt-8 divide-y divide-line rounded-[28px] border border-line">
          {FAQS.map(([question, answer], index) => {
            const expanded = open.has(index)
            const panelId = `faq-panel-${index}`
            return (
              <div key={question}>
                <button
                  type="button"
                  className="flex min-h-14 w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  aria-expanded={expanded}
                  aria-controls={panelId}
                  onClick={() => toggle(index)}
                >
                  <span className="text-base font-extrabold text-navy">{question}</span>
                  <span className="grid h-8 w-8 flex-none place-items-center rounded-full bg-[#f4f1ff] text-lg text-[#3d348f]" aria-hidden="true">{expanded ? "–" : "+"}</span>
                </button>
                {expanded ? (
                  <div id={panelId} className="px-5 pb-5 text-sm leading-relaxed text-ink">
                    {answer}
                  </div>
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
    <section id="book" className="relative py-24 sm:py-32">
      <FluidGlow variant="cta" />
      <div className="wrap relative z-10">
        <Glow className="mx-auto max-w-3xl text-center">
          <h2 className="text-[1.85rem] font-extrabold leading-[1.15] tracking-[-0.035em] text-navy sm:text-4xl lg:text-5xl">
            Your Restaurant Serves Hundreds Of Customers. Restrosights Helps You Learn From Every One Of Them.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink sm:text-lg">
            More genuine reviews. Faster feedback. Better restaurant experiences. Stronger online reputation.
          </p>
          <div className="mt-7 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap">
            <Button onClick={() => { track(EVENTS.GET_RESTROSIGHTS, { source: "final" }); document.getElementById("demo-form")?.scrollIntoView(); document.getElementById("demo-form-name")?.focus() }}>
              Get Restrosights
            </Button>
            <Button variant="secondary" onClick={() => openDemo("final")}>
              Book a Demo
            </Button>
            <WhatsAppLink source="final" className="btn btn-secondary">
              WhatsApp Us
            </WhatsAppLink>
          </div>
          <p className="mt-4 text-sm font-semibold text-navy">No complicated setup · Built for restaurants · Our team helps you get started.</p>
        </Glow>
        <div className="mx-auto mt-10 max-w-2xl">
          <LeadForm idPrefix="demo-form" source="final_inline" />
        </div>
      </div>
    </section>
  )
}
