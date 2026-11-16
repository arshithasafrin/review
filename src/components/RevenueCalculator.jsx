import { useEffect, useId, useRef, useState } from "react"
import { computeLoss, DEFAULTS, formatInr, RESPONSE_STAR_GAIN } from "../lib/revenueLoss"
import { useLead } from "./LeadForm"
import { Button, SectionHeading } from "./ui"

const TABS = [
  { id: "combined", label: "All three" },
  { id: "fake", label: "Fake reviews" },
  { id: "unanswered", label: "Unanswered 1-star" },
  { id: "naked", label: "No written review" },
]

const HELP = {
  fake: "Restrosights flags reviews that look fake or spammy, and helps you raise the ones that may break Google’s rules. Removal is Google’s decision, not a promise.",
  unanswered: "Guests who had a poor meal can tell you in private before a 1-star review goes up, while the kitchen can still put it right.",
  naked: "The guest flow asks what happened in their own words, so a rating is more likely to arrive with a real comment a new diner can trust.",
}

function useCountUp(target) {
  const [display, setDisplay] = useState(target)
  const displayRef = useRef(target)
  const frame = useRef(0)

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    cancelAnimationFrame(frame.current)
    if (reduce) {
      displayRef.current = target
      setDisplay(target)
      return undefined
    }
    const from = displayRef.current
    const start = performance.now()
    const step = (now) => {
      const t = Math.min(1, (now - start) / 420)
      if (t >= 1) {
        displayRef.current = target
        setDisplay(target)
        return
      }
      const eased = 1 - (1 - t) ** 3
      const next = from + (target - from) * eased
      displayRef.current = next
      setDisplay(next)
      frame.current = requestAnimationFrame(step)
    }
    frame.current = requestAnimationFrame(step)
    return () => cancelAnimationFrame(frame.current)
  }, [target])

  return display
}

function SliderField({ id, label, hint, min, max, step, value, onChange, prefix = "", suffix = "" }) {
  const rangeId = `${id}-range`
  const span = max - min || 1
  const fill = `${((value - min) / span) * 100}%`
  function set(next) {
    const number = Number(next)
    if (Number.isNaN(number)) return
    onChange(Math.min(max, Math.max(min, number)))
  }
  return (
    <div>
      <div className="flex items-center justify-between gap-3">
        <label htmlFor={id} className="text-sm font-semibold text-navy">{label}</label>
        <span className="flex items-center gap-1">
          {prefix ? <span className="text-sm font-semibold text-mute">{prefix}</span> : null}
          <input
            id={id}
            className="field w-24 text-right tabular-nums"
            type="number"
            inputMode="decimal"
            min={min}
            max={max}
            step={step}
            value={value}
            onChange={(event) => set(event.target.value)}
          />
          {suffix ? <span className="text-sm font-semibold text-mute">{suffix}</span> : null}
        </span>
      </div>
      <input
        id={rangeId}
        className="range-light mt-2 w-full cursor-pointer"
        style={{ "--fill": fill }}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        aria-label={label}
        onChange={(event) => set(event.target.value)}
      />
      {hint ? <p className="text-xs leading-relaxed text-mute">{hint}</p> : null}
    </div>
  )
}

export function RevenueCalculator() {
  const { openDemo, dialogOpen } = useLead()
  const sectionRef = useRef(null)
  const [summaryVisible, setSummaryVisible] = useState(false)
  const [inputs, setInputs] = useState(DEFAULTS)
  const [tab, setTab] = useState("combined")
  const baseId = useId()
  const result = computeLoss(inputs)
  const active = result.scenarios[tab]
  const shown = useCountUp(active)
  const yearly = Math.round(shown) * 12

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return undefined
    const observer = new IntersectionObserver(
      ([entry]) => setSummaryVisible(entry.isIntersecting),
      { threshold: 0.2 },
    )
    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  function patch(key, value) {
    setInputs((current) => ({ ...current, [key]: value }))
  }

  function onTabsKeyDown(event) {
    const index = TABS.findIndex((item) => item.id === tab)
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return
    event.preventDefault()
    const next = event.key === "ArrowRight" ? (index + 1) % TABS.length : (index - 1 + TABS.length) % TABS.length
    const id = TABS[next].id
    setTab(id)
    document.getElementById(`${baseId}-tab-${id}`)?.focus()
  }

  const lines = [
    ["Fake reviews", result.scenarios.fake, `${result.fakeGap.toFixed(2)} stars of drag`],
    ["Unanswered 1-star", result.scenarios.unanswered, `${result.responseGap.toFixed(2)} stars if replies started`],
    ["No written review", result.scenarios.naked, `${result.nakedGap.toFixed(2)} stars of missing detail`],
  ]

  return (
    <section ref={sectionRef} id="lost-revenue" className="relative scroll-mt-24 py-20 sm:py-28" aria-labelledby="lost-revenue-title">
      <div className="wrap">
        <SectionHeading center id="lost-revenue-title" eyebrow="The cost" title="What are those reviews costing the restaurant?">
          Move the sliders. The figure is an estimate from your own numbers and two published studies, not a forecast and not a promise of what Restrosights will recover.
        </SectionHeading>

        <div className="mt-10 grid items-start gap-6 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]">
          <form className="order-2 rounded-[28px] border border-line bg-white p-5 shadow-card sm:p-6 lg:order-1" onSubmit={(event) => event.preventDefault()}>
            <div className="grid gap-5">
              <SliderField id="covers" label="Covers or orders a month" min={200} max={8000} step={50} value={inputs.covers} onChange={(value) => patch("covers", value)} />
              <SliderField id="bill" label="Average bill" prefix="₹" min={200} max={4000} step={50} value={inputs.bill} onChange={(value) => patch("bill", value)} />
              <SliderField id="rating" label="Current Google rating" min={1} max={5} step={0.1} value={inputs.rating} onChange={(value) => patch("rating", Math.round(value * 10) / 10)} />
              <SliderField id="fake-share" label="Share of reviews you think are fake" suffix="%" hint="Your estimate. Yelp filtered about 16% of Boston restaurant reviews through 2012, and those reviews were more extreme. That is not your restaurant’s rate." min={0} max={40} step={1} value={inputs.fakePct} onChange={(value) => patch("fakePct", value)} />
              <SliderField id="fake-stars" label="Stars those fake reviews average" hint="Malicious fakes are treated as 1-star. Filtered Yelp reviews tend to be extreme, in either direction. Change this if you mean something else." min={1} max={5} step={0.5} value={inputs.fakeStars} onChange={(value) => patch("fakeStars", value)} />
              <SliderField id="unanswered" label="Share of 1-star reviews still unanswered" suffix="%" hint="Your estimate of how many low reviews nobody has replied to." min={0} max={100} step={5} value={inputs.unansweredPct} onChange={(value) => patch("unansweredPct", value)} />
              <SliderField id="naked" label="Share of reviews with no written comment" suffix="%" hint="A starting guess. There is no published rate for star-only restaurant reviews, so change this to match your profile." min={0} max={80} step={5} value={inputs.nakedPct} onChange={(value) => patch("nakedPct", value)} />
              <SliderField id="info-gap" label="Stars of influence a blank review misses" hint="An assumption, not a published number. 0.10 is the default. Luca did not measure empty reviews." min={0} max={0.25} step={0.01} value={inputs.infoGap} onChange={(value) => patch("infoGap", Math.round(value * 100) / 100)} />
              <SliderField id="per-star" label="Revenue change per star" suffix="%" hint="Luca’s range for independent restaurants on Yelp: 5% to 9% per star. The default is the middle, 7%." min={5} max={9} step={0.5} value={inputs.perStarPct} onChange={(value) => patch("perStarPct", value)} />
            </div>
          </form>

          <div className="flat-card order-1 self-start rounded-[28px] p-5 sm:p-6 lg:sticky lg:top-24 lg:z-10 lg:order-2">
            <div role="tablist" aria-label="Which loss to show" className="grid grid-cols-2 gap-2 sm:grid-cols-4" onKeyDown={onTabsKeyDown}>
              {TABS.map((item) => {
                const selected = tab === item.id
                return (
                  <button
                    key={item.id}
                    id={`${baseId}-tab-${item.id}`}
                    type="button"
                    role="tab"
                    aria-selected={selected}
                    aria-controls={`${baseId}-panel`}
                    tabIndex={selected ? 0 : -1}
                    className={`min-h-12 rounded-2xl px-2 text-center text-xs font-semibold leading-tight ${selected ? "bg-sky text-navy" : "border border-lavender bg-star text-navy"}`}
                    onClick={() => setTab(item.id)}
                  >
                    {item.label}
                  </button>
                )
              })}
            </div>

            <div id={`${baseId}-panel`} role="tabpanel" aria-labelledby={`${baseId}-tab-${tab}`} className="mt-6">
              <p className="text-[0.78rem] font-bold uppercase tracking-[0.16em] text-navy">Estimated revenue lost</p>
              <p className="mt-2 min-h-[3.25rem] text-4xl font-extrabold tabular-nums tracking-tight text-navy sm:text-5xl" aria-live="polite">
                {formatInr(shown)}
                <span className="ml-2 text-base font-semibold text-mute">/ month</span>
              </p>
              <p className="mt-1 min-h-6 text-sm font-semibold tabular-nums text-ink">{formatInr(yearly)} a year</p>

              {tab === "combined" ? (
                <ul className="mt-5 space-y-2">
                  {lines.map(([label, amount, note]) => (
                    <li key={label} className="flex items-center justify-between gap-3 rounded-2xl bg-star px-3 py-3">
                      <span>
                        <span className="block text-sm font-semibold text-navy">{label}</span>
                        <span className="block text-xs text-mute">{note}</span>
                      </span>
                      <span className="text-sm font-extrabold tabular-nums text-navy">{formatInr(amount)}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-4 text-sm leading-relaxed text-ink">{HELP[tab]}</p>
              )}

              <p className="mt-4 text-xs leading-relaxed text-mute">
                {tab === "combined"
                  ? "The three lines can overlap. One fake, unanswered, textless 1-star can sit in more than one of them. The total is an illustration, not a sum of separate bills."
                  : `This is ${formatInr(result.scenarios.combined)} a month if you add all three, with the same overlap.`}
              </p>

              <div className="mt-5 flex flex-col gap-2 sm:flex-row">
                <Button className="w-full sm:w-auto" onClick={() => openDemo("lost_revenue")}>Book a Demo</Button>
                <Button variant="line" className="w-full sm:w-auto" onClick={() => document.getElementById("pricing")?.scrollIntoView()}>
                  See pricing
                </Button>
              </div>
            </div>
          </div>
        </div>

        <details className="mt-6 rounded-[28px] border border-line bg-white px-5 py-4 sm:px-6">
          <summary className="cursor-pointer text-sm font-extrabold text-navy">How we calculate this</summary>
          <div className="mt-4 space-y-4 text-sm leading-relaxed text-ink">
            <p>
              Monthly revenue is covers × average bill. A year is that figure × 12. Each scenario turns a star gap into money with the same rate: revenue × star gap × the percent you set per star.
            </p>
            <p>
              <strong className="font-semibold text-navy">Per star.</strong> Michael Luca, Harvard Business School Working Paper 12-016 (revised 2016), found a one-star increase on Yelp led to a 5–9% revenue increase for independent restaurants in Seattle, using Washington State tax receipts and the way Yelp rounds ratings. Chain restaurants showed little of that effect. This is Yelp in one US city, not Google in India. The slider stays inside that 5–9% range.{" "}
              <a className="font-semibold text-royal underline" href="https://www.hbs.edu/faculty/Pages/item.aspx?num=41233" target="_blank" rel="noreferrer">Working paper page</a>.
            </p>
            <p>
              <strong className="font-semibold text-navy">Fake reviews.</strong> If a share of the rating is fake, the rating without them is (current rating − share × fake stars) ÷ (1 − share). Only a drop counts. Luca and Zervas, Management Science (2016), found Yelp filtered about 16% of restaurant reviews in Boston through 2012, and filtered reviews were more extreme than the rest. The filter is not a perfect fake detector, so 16% is not used as your rate.{" "}
              <a className="font-semibold text-royal underline" href="https://people.bu.edu/zg/publications/fakereviews.pdf" target="_blank" rel="noreferrer">Paper PDF</a>.
            </p>
            <p>
              <strong className="font-semibold text-navy">Unanswered 1-star reviews.</strong> Proserpio and Zervas, Marketing Science (2017), found Texas hotels that started replying on TripAdvisor gained about 0.12 stars, and about 12% more reviews. We apply 0.12 × the share you say is still unanswered. That scaling is our assumption. The study is hotels, not restaurants, and it is TripAdvisor, not Google.{" "}
              <a className="font-semibold text-royal underline" href="https://pubsonline.informs.org/doi/10.1287/mksc.2017.1043" target="_blank" rel="noreferrer">Marketing Science</a>.
            </p>
            <p>
              <strong className="font-semibold text-navy">Reviews with no text.</strong> No published study we could verify gives a revenue percent for a star rating with an empty comment. Luca did find diners respond more when a rating contains more information, and that elite reviews had about twice the impact of other reviews. That is about how many reviews there are and who wrote them, not about blank text. The “stars a blank review misses” control is an assumption you can set. It defaults to 0.10.
            </p>
            <p>
              Results are estimates for an independent restaurant. They are not a prediction, a valuation, or a guarantee of rankings, review removal, or revenue.
            </p>
            <p className="text-xs text-mute">Response gain used in the unanswered line: {RESPONSE_STAR_GAIN} stars, from the hotel study, before your share is applied.</p>
          </div>
        </details>
      </div>
      {summaryVisible && !dialogOpen ? (
        <div
          className="fixed inset-x-0 z-30 border-t border-lavender bg-star/95 px-4 py-2 backdrop-blur-xl lg:hidden"
          style={{ bottom: "calc(4.75rem + env(safe-area-inset-bottom))" }}
        >
          <p className="flex items-baseline justify-between gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.12em] text-mute">Lost / month</span>
            <span className="text-lg font-extrabold tabular-nums text-navy">{formatInr(result.scenarios.combined)}</span>
          </p>
        </div>
      ) : null}
    </section>
  )
}
