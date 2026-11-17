import { useState } from "react"
import { LogoMark } from "./Logo"
import { SampleBadge } from "./ui"

const STAR_PATH = "M12 3.2 14.7 8.8l6.1.5-4.6 4 1.4 5.9L12 16.4 6.4 19.2 7.8 13.3 3.2 9.3l6.1-.5L12 3.2Z"

export function Stars({ value = 5, size = 22, color = "#0085EE" }) {
  return (
    <div className="flex gap-0.5" role="img" aria-label={`${value} of 5 stars`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <svg key={n} width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
          <path d={STAR_PATH} fill={n <= value ? color : "#E6E4E4"} />
        </svg>
      ))}
    </div>
  )
}

function Island() {
  return <span className="pointer-events-none absolute left-1/2 top-2 h-4 w-[4.5rem] -translate-x-1/2 rounded-full bg-black" />
}

export function PhoneFrame({ children, className = "" }) {
  return (
    <div className={`relative mx-auto w-full max-w-[300px] rounded-[2.5rem] bg-[#121416] p-[10px] shadow-float ${className}`}>
      <div className="relative overflow-hidden rounded-[2rem] bg-white">{children}</div>
    </div>
  )
}

export function GuestPhone() {
  const [rating, setRating] = useState(4)
  return (
    <PhoneFrame>
      <div className="relative bg-[linear-gradient(180deg,#0085EE_0%,rgba(0,134,237,0.78)_100%)] px-5 pb-8 pt-3 text-white">
        <Island />
        <div className="flex items-center justify-between text-[11px] font-medium">
          <span>9:41</span>
          <span>5G</span>
        </div>
        <div className="mt-5 flex items-center justify-between">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-white">
            <LogoMark size={22} title="" />
          </span>
          <SampleBadge />
        </div>
        <p className="mt-4 text-[13px] font-medium text-white/80">Sample Bistro · Whitefield</p>
        <h3 className="mt-1 text-[1.45rem] font-medium leading-tight tracking-[-0.03em]">How was your visit?</h3>
      </div>
      <div className="relative -mt-4 rounded-t-[1.4rem] bg-white px-4 pb-4 pt-4">
        <div className="flex justify-center gap-1">
          {[1, 2, 3, 4, 5].map((n) => (
            <button
              key={n}
              type="button"
              className="grid h-11 w-11 place-items-center rounded-full"
              aria-label={`${n} star${n === 1 ? "" : "s"}`}
              aria-pressed={n === rating}
              onClick={() => setRating(n)}
            >
              <svg width="26" height="26" viewBox="0 0 24 24" aria-hidden="true">
                <path d={STAR_PATH} fill={n <= rating ? "#0085EE" : "#E6E4E4"} />
              </svg>
            </button>
          ))}
        </div>
        <p className="mt-2 text-center text-xs font-medium text-mute">What should the team know?</p>
        <div className="mt-3 flex flex-wrap justify-center gap-1.5">
          {["Food", "Service", "Ambience"].map((chip) => (
            <span key={chip} className="rounded-full bg-[#F8F7F7] px-2.5 py-1 text-[11px] font-medium text-navy">
              {chip}
            </span>
          ))}
        </div>
        <div className="mt-3 rounded-2xl bg-[#F8F7F7] px-3 py-3 text-[13px] text-navy">The biryani and the calm service.</div>
        <div className="mt-3 grid h-11 place-items-center rounded-xl bg-glow text-sm font-medium text-white">Continue</div>
        <p className="mt-2 text-center text-[10px] leading-snug text-mute">Preview only. Guests stay in the browser. Nothing here is sent.</p>
      </div>
    </PhoneFrame>
  )
}

export function GoogleSharePhone() {
  return (
    <PhoneFrame>
      <div className="relative bg-[linear-gradient(180deg,#0085EE_0%,rgba(0,134,237,0.78)_100%)] px-5 pb-8 pt-3 text-white">
        <Island />
        <div className="flex items-center justify-between text-[11px] font-medium">
          <span>9:41</span>
          <span>5G</span>
        </div>
        <p className="mt-6 text-[13px] text-white/80">Step 04 · Grow</p>
        <h3 className="mt-1 text-[1.4rem] font-medium leading-tight tracking-[-0.03em]">Share a genuine review</h3>
      </div>
      <div className="-mt-4 rounded-t-[1.4rem] bg-white px-4 pb-5 pt-4">
        <div className="flex justify-center">
          <Stars value={5} />
        </div>
        <p className="mt-3 text-center text-sm leading-relaxed text-navy">Loved the biryani and service. A great family restaurant in Whitefield.</p>
        <div className="mt-4 grid h-11 place-items-center rounded-xl bg-glow text-sm font-medium text-white">Continue to Google</div>
        <p className="mt-3 text-center text-[11px] leading-snug text-mute">Guests decide what they publish. Restrosights does not post a review for them.</p>
      </div>
    </PhoneFrame>
  )
}

export function ReviewStand({ className = "" }) {
  return (
    <figure className={`mx-auto w-full max-w-[280px] ${className}`}>
      <div className="white-card p-5">
        <div className="flex items-center justify-between">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-[#F8F7F7]">
            <LogoMark size={24} title="" />
          </span>
          <SampleBadge />
        </div>
        <p className="mt-4 text-center text-lg font-medium tracking-[-0.03em] text-navy">How was your meal?</p>
        <p className="mt-1 text-center text-sm text-mute">A few seconds. Nothing to install.</p>
        <div className="mx-auto mt-4 w-fit rounded-2xl bg-white p-2 shadow-card">
          <QrMark className="h-[128px] w-[128px]" />
        </div>
        <p className="mt-3 text-center text-xs font-medium text-glowink">Scan to share</p>
      </div>
      <div className="mx-auto h-3 w-24 rounded-b-2xl bg-[#C2A463]" />
      <figcaption className="mt-3 text-center text-xs opacity-75">Review Stand mock. The QR mark is decorative.</figcaption>
    </figure>
  )
}

function finderOn(x, y) {
  const inBox = (ox, oy) => x >= ox && x <= ox + 6 && y >= oy && y <= oy + 6
  const boxes = [[0, 0], [14, 0], [0, 14]]
  for (const [ox, oy] of boxes) {
    if (!inBox(ox, oy)) continue
    const lx = x - ox
    const ly = y - oy
    const edge = lx === 0 || ly === 0 || lx === 6 || ly === 6
    const core = lx >= 2 && lx <= 4 && ly >= 2 && ly <= 4
    return edge || core
  }
  return false
}

export function QrMark({ className = "h-24 w-24" }) {
  const cells = []
  let seed = 19
  for (let y = 0; y < 21; y += 1) {
    for (let x = 0; x < 21; x += 1) {
      seed = (seed * 13 + x * 7 + y * 3) % 97
      const on = finderOn(x, y) || (!finderOn(x, y) && x > 7 && seed % 3 !== 0 && !(x > 12 && y > 12 && seed % 5 === 0))
      const inFinderZone = (x < 8 && y < 8) || (x > 12 && y < 8) || (x < 8 && y > 12)
      if (inFinderZone ? finderOn(x, y) : on) {
        cells.push(<rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" rx="0.12" />)
      }
    }
  }
  return (
    <svg viewBox="0 0 21 21" className={className} aria-hidden="true">
      <rect width="21" height="21" fill="#fff" />
      <g fill="#102329">{cells}</g>
    </svg>
  )
}

export function AlertCard({ className = "" }) {
  return (
    <article className={`white-card p-4 ${className}`}>
      <div className="flex items-center justify-between gap-3">
        <p className="text-xs font-medium text-warn">Low rating · just now</p>
        <SampleBadge />
      </div>
      <p className="mt-2 text-sm font-medium text-navy">Koramangala · 2 stars</p>
      <p className="mt-1 text-sm leading-snug text-mute">Waited a long time after ordering.</p>
      <p className="mt-3 inline-flex rounded-full bg-[#FFF6E6] px-2.5 py-1 text-[11px] font-medium text-warn">Waiting time</p>
    </article>
  )
}

export function ReviewSnippet({ className = "" }) {
  return (
    <article className={`white-card p-4 ${className}`}>
      <div className="flex items-center justify-between">
        <Stars value={5} size={16} />
        <SampleBadge />
      </div>
      <p className="mt-3 text-sm leading-relaxed text-navy">Loved the biryani and the calm service.</p>
      <p className="mt-2 text-xs font-medium text-good">Food · Positive</p>
    </article>
  )
}

export function HeroStage() {
  return (
    <div className="relative mx-auto w-full max-w-[560px] lg:h-[640px]">
      <div className="relative z-10 lg:absolute lg:right-0 lg:top-0 lg:w-[300px]">
        <div className="float-a">
          <GuestPhone />
        </div>
      </div>
      <div className="relative z-20 mx-auto mt-4 w-full max-w-[260px] lg:absolute lg:left-0 lg:top-[19rem] lg:mx-0 lg:mt-0">
        <div className="float-b">
          <AlertCard />
        </div>
      </div>
      <div className="relative z-20 mx-auto mt-4 w-full max-w-[300px] lg:absolute lg:bottom-2 lg:left-10 lg:mx-0 lg:mt-0">
        <div className="float-c">
          <ReviewSnippet />
        </div>
      </div>
    </div>
  )
}

const FEEDBACK = [
  { stars: 5, text: "Loved the biryani and the calm service.", tag: "Food", tone: "good" },
  { stars: 2, text: "Waited a long time after ordering.", tag: "Waiting time", tone: "warn" },
  { stars: 4, text: "Nice ambience for a family dinner.", tag: "Ambience", tone: "good" },
]

export function FeedbackList({ compact = false }) {
  const rows = compact ? FEEDBACK.slice(0, 2) : FEEDBACK
  return (
    <ul className="space-y-2.5">
      {rows.map((row) => (
        <li key={row.text} className="rounded-2xl bg-[#F8F7F7] px-3 py-3">
          <div className="flex items-center justify-between gap-2">
            <Stars value={row.stars} size={14} color={row.tone === "warn" ? "#C2A463" : "#0085EE"} />
            <span className={`text-xs font-medium ${row.tone === "warn" ? "text-warn" : "text-good"}`}>{row.tag}</span>
          </div>
          <p className="mt-1.5 text-sm leading-snug text-navy">{row.text}</p>
        </li>
      ))}
    </ul>
  )
}

export function DashboardPanel() {
  return (
    <div className="white-card p-4 sm:p-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-[#F8F7F7]">
            <LogoMark size={22} title="" />
          </span>
          <div>
            <p className="text-sm font-medium text-navy">Owner dashboard</p>
            <p className="text-xs text-mute">Installable on supported phones</p>
          </div>
        </div>
        <SampleBadge />
      </div>
      <label className="mt-5 block text-xs font-medium text-mute" htmlFor="outlet-sample">
        Outlet
      </label>
      <select id="outlet-sample" className="field mt-1.5 font-medium" defaultValue="Whitefield">
        <option>Whitefield</option>
        <option>Indiranagar</option>
        <option>Koramangala</option>
      </select>
      <div className="mt-4 grid grid-cols-3 gap-2">
        {[
          ["4.6", "Average", "text-navy"],
          ["89%", "Positive", "text-good"],
          ["7%", "Attention", "text-warn"],
        ].map(([value, label, tone]) => (
          <div key={label} className="rounded-2xl bg-[#F8F7F7] px-2 py-3 text-center">
            <p className={`text-xl font-medium tracking-tight ${tone}`}>{value}</p>
            <p className="text-[11px] text-mute">{label}</p>
          </div>
        ))}
      </div>
      <p className="mb-2 mt-5 text-sm font-medium text-navy">Recent feedback</p>
      <FeedbackList />
      <p className="mt-3 text-[11px] text-mute">Illustrative sample data. Not a customer result.</p>
    </div>
  )
}

export function OutletCompare({ className = "" }) {
  const rows = [
    ["Whitefield", "4.7", 94, false],
    ["Indiranagar", "4.6", 90, false],
    ["Koramangala", "4.2", 72, true],
  ]
  return (
    <article className={`white-card p-5 ${className}`}>
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-base font-medium text-navy">Which location needs attention</h3>
        <SampleBadge />
      </div>
      <ul className="mt-4 space-y-3">
        {rows.map(([name, score, width, attention]) => (
          <li key={name}>
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium text-navy">{name}</span>
              <span className={attention ? "font-medium text-warn" : "font-medium text-good"}>{score}</span>
            </div>
            <div className="mt-1.5 h-2 rounded-full bg-[#F8F7F7]">
              <div className={`h-2 rounded-full ${attention ? "bg-[#C2A463]" : "bg-glow"}`} style={{ width: `${width}%` }} />
            </div>
            {attention ? <p className="mt-1 text-xs font-medium text-warn">Waiting time needs attention</p> : null}
          </li>
        ))}
      </ul>
      <p className="mt-3 text-[11px] text-mute">Illustrative sample data. Not a customer result.</p>
    </article>
  )
}

const LOVE = ["Food", "Staff", "Ambience", "Authenticity", "Portions"]
const ATTENTION = ["Waiting time", "Parking", "Weekend service", "Order delay", "Value perception"]

export function ReportCard() {
  return (
    <article className="white-card overflow-hidden">
      <div className="h-1.5 bg-glow" />
      <div className="p-5 sm:p-7">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="text-sm font-medium text-glowink">Monthly guest report</p>
            <h3 className="mt-1 text-2xl font-medium tracking-[-0.03em] text-navy">March · Sample Bistro</h3>
          </div>
          <SampleBadge />
        </div>
        <dl className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            ["427", "Guest responses"],
            ["4.6", "Average rating"],
            ["89%", "Positive"],
            ["7%", "Needs attention"],
          ].map(([value, label]) => (
            <div key={label} className="rounded-2xl bg-[#F8F7F7] px-3 py-4">
              <dt className="text-xs text-mute">{label}</dt>
              <dd className="mt-1 text-3xl font-medium tracking-tight text-navy">{value}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-5 grid gap-3 md:grid-cols-2">
          <div className="rounded-2xl bg-[#F3FBF7] p-4">
            <h4 className="text-sm font-medium text-good">What guests love</h4>
            <ul className="mt-3 space-y-2">
              {LOVE.map((item) => (
                <li key={item} className="text-sm text-navy">{item}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-[#FFF8EC] p-4">
            <h4 className="text-sm font-medium text-warn">What needs attention</h4>
            <ul className="mt-3 space-y-2">
              {ATTENTION.map((item) => (
                <li key={item} className="text-sm text-navy">{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-3 grid gap-3 md:grid-cols-2">
          <div className="rounded-2xl bg-[#F8F7F7] p-4">
            <h4 className="text-sm font-medium text-navy">Trend</h4>
            <p className="mt-2 text-sm text-good">Overall sentiment is steady and strong.</p>
            <GrowthChart className="mt-3" />
          </div>
          <blockquote className="rounded-2xl bg-[#F8F7F7] p-4 text-sm leading-relaxed text-navy">
            <p className="text-xs font-medium text-glowink">Recommended action</p>
            <p className="mt-2">Guest sentiment is strong overall, but waiting-time complaints increased during Friday and Saturday dinner service. Review staffing and order flow during peak hours.</p>
          </blockquote>
        </div>
        <p className="mt-4 text-[11px] text-mute">Sample report figures. Not a customer result.</p>
      </div>
    </article>
  )
}

export function GrowthChart({ className = "" }) {
  return (
    <div className={className}>
      <svg viewBox="0 0 280 88" className="h-20 w-full" role="img" aria-label="Illustrative review trend, not a measured result">
        <path d="M8 68 C 40 66, 52 40, 90 42 S 140 58, 176 30 230 24, 272 16" fill="none" stroke="#0085EE" strokeWidth="3" strokeLinecap="round" />
        <path d="M8 68 C 40 66, 52 40, 90 42 S 140 58, 176 30 230 24, 272 16 V 80 H 8 Z" fill="rgba(0,133,238,0.12)" />
      </svg>
      <p className="text-[11px] text-mute">Illustrative shape. Not a measured result.</p>
    </div>
  )
}

export function GbpCard() {
  return (
    <article className="white-card p-5">
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm font-medium text-glowink">Google Business Profile</p>
        <SampleBadge />
      </div>
      <h3 className="mt-3 text-xl font-medium tracking-[-0.03em] text-navy">Support, not a switch</h3>
      <ul className="mt-4 space-y-2 text-sm text-navy">
        <li className="flex items-center justify-between rounded-xl bg-[#F8F7F7] px-3 py-2">
          <span>Suspension guidance</span>
          <span className="text-xs font-medium text-mute">In review</span>
        </li>
        <li className="flex items-center justify-between rounded-xl bg-[#F8F7F7] px-3 py-2">
          <span>Verification help</span>
          <span className="text-xs font-medium text-mute">Ready</span>
        </li>
      </ul>
      <p className="mt-3 text-xs leading-relaxed text-mute">No legitimate provider should guarantee that a suspended profile will be restored.</p>
    </article>
  )
}

export function FakeReviewCard() {
  return (
    <article className="white-card p-5">
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm font-medium text-glowink">Suspicious review</p>
        <SampleBadge />
      </div>
      <h3 className="mt-3 text-xl font-medium tracking-[-0.03em] text-navy">Policy report prepared</h3>
      <div className="mt-4 rounded-2xl bg-[#F8F7F7] p-3">
        <p className="text-sm text-navy">“Never visited. Worst place.”</p>
        <p className="mt-2 text-xs font-medium text-warn">Looks unrelated to a real visit</p>
      </div>
      <div className="mt-3 grid h-11 place-items-center rounded-xl bg-glow text-sm font-medium text-white">Assist with a policy report</div>
      <p className="mt-3 text-xs leading-relaxed text-mute">Google decides what stays. Legitimate reviews cannot simply be removed.</p>
    </article>
  )
}

export function InstagramCard() {
  return (
    <article className="white-card p-5">
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-base font-medium text-navy">Instagram bio</h3>
        <span className="rounded-full bg-[#E7F3FE] px-2.5 py-1 text-[11px] font-medium text-glowink">Example, not a client</span>
      </div>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <div className="rounded-2xl bg-[#F8F7F7] p-4">
          <p className="text-xs font-medium text-mute">Before</p>
          <p className="mt-2 text-sm leading-relaxed text-navy">Best restaurant in town!!! DM for offers. Link in bio maybe.</p>
        </div>
        <div className="rounded-2xl bg-[#F3FBF7] p-4">
          <p className="text-xs font-medium text-good">After</p>
          <p className="mt-2 text-sm leading-relaxed text-navy">Family dining in Whitefield. Biryani, weekday lunch, weekend dinner. Hours and the map, one link.</p>
        </div>
      </div>
    </article>
  )
}

export function PainVisual({ name }) {
  if (name === "forget") {
    return (
      <div className="rounded-2xl bg-white p-3 shadow-card">
        <div className="flex items-center justify-between text-xs">
          <span className="font-medium text-navy">Happy diner</span>
          <span className="text-mute">Left satisfied</span>
        </div>
        <div className="mt-3 flex items-center justify-between rounded-xl bg-[#F8F7F7] px-3 py-2 text-xs">
          <span>Google review</span>
          <span className="font-medium text-warn">Not posted</span>
        </div>
      </div>
    )
  }
  if (name === "public") return <AlertCard />
  if (name === "intel") {
    return (
      <div className="rounded-2xl bg-white p-3 shadow-card">
        <div className="flex items-center justify-between">
          <p className="text-2xl font-medium text-navy">4.2</p>
          <Stars value={4} size={14} />
        </div>
        <p className="mt-2 text-xs text-mute">The stars do not say whether it was food, service, waiting or ambience.</p>
      </div>
    )
  }
  if (name === "outlets") {
    return (
      <div className="space-y-2 rounded-2xl bg-white p-3 shadow-card">
        {[
          ["Whitefield", "4.7", false],
          ["Indiranagar", "4.6", false],
          ["Koramangala", "4.2", true],
        ].map(([name, score, attention]) => (
          <div key={name} className="flex items-center justify-between text-xs">
            <span className="font-medium text-navy">{name}</span>
            <span className={attention ? "font-medium text-warn" : "text-good"}>{score}</span>
          </div>
        ))}
      </div>
    )
  }
  if (name === "fake") {
    return (
      <div className="rounded-2xl bg-white p-3 shadow-card">
        <p className="text-xs font-medium text-warn">Suspicious review</p>
        <p className="mt-2 text-sm text-navy">“Never visited.”</p>
        <p className="mt-2 text-[11px] text-mute">Policy report, not a removal promise.</p>
      </div>
    )
  }
  return (
    <div className="rounded-2xl bg-white p-3 shadow-card">
      <p className="text-xs font-medium text-glowink">Google Business Profile</p>
      <p className="mt-2 text-sm font-medium text-navy">Harder to find</p>
      <p className="mt-1 text-[11px] text-mute">Profile issues can affect discovery. Reinstatement is not guaranteed.</p>
    </div>
  )
}

export function MiniStats() {
  return null
}

export function PhoneMock() {
  return <GuestPhone />
}

export function DashboardMock() {
  return <DashboardPanel />
}

export function ReportMock() {
  return <ReportCard />
}
