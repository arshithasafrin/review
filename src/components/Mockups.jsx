import { useState } from "react"
import { LogoMark } from "./Logo"
import { SampleBadge } from "./ui"

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
        cells.push(<rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" rx="0.15" />)
      }
    }
  }
  return (
    <svg viewBox="0 0 21 21" className={className} aria-hidden="true">
      <rect width="21" height="21" fill="#fff" />
      <g fill="#0B1640">{cells}</g>
    </svg>
  )
}

export function ReviewStand({ className = "" }) {
  return (
    <figure className={`mx-auto w-full max-w-[260px] ${className}`}>
      <div className="rounded-[28px] border border-white/70 bg-white/85 p-5 shadow-float backdrop-blur-sm">
        <div className="flex items-center justify-between">
          <LogoMark size={34} title="" />
          <SampleBadge />
        </div>
        <p className="mt-4 text-center text-[1.05rem] font-extrabold tracking-tight text-navy">How was your meal?</p>
        <p className="mt-1 text-center text-sm text-mute">A few seconds. Nothing to install.</p>
        <div className="mx-auto mt-4 w-fit rounded-2xl bg-white p-2.5 shadow-card">
          <QrMark className="h-[132px] w-[132px]" />
        </div>
        <p className="mt-3 text-center text-xs font-semibold uppercase tracking-[0.14em] text-[#5346c8]">Scan to share</p>
      </div>
      <div className="mx-auto mt-3 h-2.5 w-36 rounded-full bg-[#e7e1d6]" />
      <div className="mx-auto mt-2 h-3 w-44 rounded-full bg-[#0b1640]/10 blur-md" />
      <figcaption className="mt-3 text-center text-xs text-mute">Review Stand mock. The QR mark is decorative.</figcaption>
    </figure>
  )
}

const STAR_PATH = "M12 3.2 14.7 8.8l6.1.5-4.6 4 1.4 5.9L12 16.4 6.4 19.2 7.8 13.3 3.2 9.3l6.1-.5L12 3.2Z"

function Stars({ value, onChange, size = 28 }) {
  return (
    <div className="flex justify-center gap-1.5" role={onChange ? "radiogroup" : "img"} aria-label={`${value} of 5 stars`}>
      {[1, 2, 3, 4, 5].map((n) => {
        const filled = n <= value
        const node = (
          <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
            <path d={STAR_PATH} fill={filled ? "#5b4fd0" : "#e6e2f3"} />
          </svg>
        )
        if (!onChange) return <span key={n}>{node}</span>
        return (
          <button
            key={n}
            type="button"
            role="radio"
            aria-checked={n === value}
            aria-label={`${n} star${n === 1 ? "" : "s"}`}
            className="grid min-h-11 min-w-11 place-items-center rounded-full"
            onClick={() => onChange(n)}
          >
            {node}
          </button>
        )
      })}
    </div>
  )
}

export function PhoneMock() {
  const [rating, setRating] = useState(4)
  return (
    <div className="mx-auto w-full max-w-[300px]">
      <div className="rounded-[2.2rem] bg-[#161433] p-2.5 shadow-float">
        <div className="overflow-hidden rounded-[1.7rem] bg-[#fbfaff]">
          <div className="flex items-center justify-between px-5 pb-1 pt-3 text-[11px] font-semibold text-navy">
            <span>9:41</span>
            <span className="h-4 w-16 rounded-full bg-[#161433]" />
            <span>5G</span>
          </div>
          <div className="px-5 pb-5 pt-2">
            <div className="flex items-center justify-between">
              <LogoMark size={28} title="" />
              <SampleBadge />
            </div>
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-mute">Sample Bistro · Whitefield</p>
            <h3 className="mt-1 text-[1.35rem] font-extrabold leading-tight tracking-tight text-navy">How was your visit?</h3>
            <div className="mt-4">
              <Stars value={rating} onChange={setRating} />
            </div>
            <p className="mt-4 text-sm font-semibold text-navy">What should the team know?</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {["Food", "Service", "Ambience"].map((chip) => (
                <span key={chip} className="rounded-full bg-[#efeaff] px-3 py-1.5 text-xs font-semibold text-[#3d348f]">
                  {chip}
                </span>
              ))}
            </div>
            <div className="mt-3 rounded-2xl bg-white px-3 py-3 text-sm text-mute shadow-card">The biryani and the calm service.</div>
            <div className="btn btn-primary mt-4 w-full">Continue</div>
            <p className="mt-3 text-center text-[11px] leading-snug text-mute">Preview only. Guests do this in the browser. Nothing here is sent.</p>
          </div>
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
    <ul className="space-y-3">
      {rows.map((row) => (
        <li key={row.text} className="rounded-2xl bg-[#f7f6fb] px-3 py-3">
          <div className="flex items-center justify-between gap-2">
            <Stars value={row.stars} size={14} />
            <span className={`text-xs font-bold ${row.tone === "warn" ? "text-warn" : "text-good"}`}>{row.tag}</span>
          </div>
          <p className="mt-1.5 text-sm leading-snug text-navy">{row.text}</p>
        </li>
      ))}
    </ul>
  )
}

export function MiniStats() {
  return (
    <div className="grid grid-cols-3 gap-2">
      <div className="rounded-2xl bg-[#f7f6fb] px-2 py-3 text-center">
        <p className="text-xl font-extrabold tracking-tight text-navy">4.6</p>
        <p className="text-[11px] font-semibold text-mute">Average</p>
      </div>
      <div className="rounded-2xl bg-[#e8f6ef] px-2 py-3 text-center">
        <p className="text-xl font-extrabold tracking-tight text-good">89%</p>
        <p className="text-[11px] font-semibold text-good">Positive</p>
      </div>
      <div className="rounded-2xl bg-[#fff6e6] px-2 py-3 text-center">
        <p className="text-xl font-extrabold tracking-tight text-warn">7%</p>
        <p className="text-[11px] font-semibold text-warn">Attention</p>
      </div>
    </div>
  )
}

export function DashboardMock() {
  return (
    <div className="rounded-[28px] bg-white p-4 shadow-float sm:p-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <LogoMark size={32} title="" />
          <span className="text-sm font-extrabold tracking-tight text-navy">Owner dashboard</span>
        </div>
        <div className="flex items-center gap-2">
          <SampleBadge />
          <span className="relative grid h-10 w-10 place-items-center rounded-full bg-[#f4f1ff] text-[#3d348f]">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <path d="M6 16V11a6 6 0 1 1 12 0v5l1.5 2H4.5L6 16Z" strokeLinecap="round" />
            </svg>
            <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-[#5b4fd0]" />
          </span>
        </div>
      </div>
      <label className="mt-4 block text-xs font-bold uppercase tracking-[0.14em] text-mute" htmlFor="outlet-sample">
        Outlet
      </label>
      <div className="relative mt-1.5">
        <select id="outlet-sample" className="field appearance-none pr-10 font-semibold" defaultValue="Whitefield">
          <option>Whitefield</option>
          <option>Indiranagar</option>
          <option>Koramangala</option>
        </select>
        <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xs text-mute">▾</span>
      </div>
      <div className="mt-4">
        <MiniStats />
      </div>
      <div className="mt-5 flex items-end justify-between">
        <h3 className="text-base font-extrabold text-navy">Recent feedback</h3>
        <p className="text-xs text-mute">See what diners love — and what needs attention.</p>
      </div>
      <div className="mt-3">
        <FeedbackList />
      </div>
    </div>
  )
}

const LOVE = ["Food", "Staff", "Ambience", "Authenticity", "Portions"]
const ATTENTION = ["Waiting time", "Parking", "Weekend service", "Order delay", "Value perception"]

export function ReportMock() {
  return (
    <article className="card card-still overflow-hidden">
      <div className="p-5 sm:p-8">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#6d7388]">Monthly guest report</p>
            <h3 className="mt-1 text-2xl font-extrabold tracking-tight text-navy">March · Sample Bistro</h3>
          </div>
          <SampleBadge />
        </div>
        <dl className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            ["427", "Guest responses", "navy"],
            ["4.6", "Average rating", "navy"],
            ["89%", "Positive", "good"],
            ["7%", "Needs attention", "warn"],
          ].map(([value, label, tone]) => (
            <div key={label} className="rounded-2xl bg-[#f7f6fb] px-3 py-4">
              <dt className="text-xs font-semibold text-mute">{label}</dt>
              <dd className={`mt-1 text-3xl font-extrabold tracking-tight ${tone === "good" ? "text-good" : tone === "warn" ? "text-warn" : "text-navy"}`}>{value}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-[#d9f3e6] bg-[#f3fbf7] p-4">
            <h4 className="text-sm font-extrabold text-good">What guests love</h4>
            <ul className="mt-3 space-y-2">
              {LOVE.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm font-semibold text-navy">
                  <span className="grid h-5 w-5 place-items-center rounded-full bg-good text-[11px] text-white">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-[#f3e2bf] bg-[#fff8ec] p-4">
            <h4 className="text-sm font-extrabold text-warn">What needs attention</h4>
            <ul className="mt-3 space-y-2">
              {ATTENTION.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm font-semibold text-navy">
                  <span className="h-2 w-2 rounded-full bg-warn" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl bg-[#f7f6fb] p-4">
            <h4 className="text-sm font-extrabold text-navy">Outlet comparison</h4>
            <ul className="mt-3 space-y-3">
              {[
                ["Whitefield", "4.7", 94, false],
                ["Indiranagar", "4.6", 90, false],
                ["Koramangala", "4.2", 72, true],
              ].map(([name, score, width, attention]) => (
                <li key={name}>
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-semibold text-navy">{name}</span>
                    <span className={attention ? "font-bold text-warn" : "font-bold text-good"}>{score}</span>
                  </div>
                  <div className="mt-1 h-2 rounded-full bg-white">
                    <div className={`h-2 rounded-full ${attention ? "bg-[#e0b15a]" : "bg-[#3dba86]"}`} style={{ width: `${width}%` }} />
                  </div>
                  {attention ? <p className="mt-1 text-xs font-semibold text-warn">Waiting time needs attention</p> : null}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-[#f7f6fb] p-4">
            <h4 className="text-sm font-extrabold text-navy">Top recurring themes</h4>
            <p className="mt-2 text-sm leading-relaxed text-ink">Biryani and staff warmth come up all month. Waiting time clusters on Friday and Saturday dinner.</p>
            <p className="mt-4 text-xs font-bold uppercase tracking-[0.14em] text-mute">Trend</p>
            <p className="mt-1 text-sm font-semibold text-good">Overall sentiment is steady and strong.</p>
            <svg viewBox="0 0 220 56" className="mt-2 h-14 w-full" aria-hidden="true">
              <path d="M4 40 C 30 38, 40 22, 70 24 S 110 36, 140 20 190 18, 216 12" fill="none" stroke="#067647" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <blockquote className="mt-4 rounded-2xl border border-[#efeaff] bg-[#fbfaff] p-4 text-sm leading-relaxed text-navy">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#5346c8]">Recommended action</p>
          <p className="mt-2">
            Guest sentiment is strong overall, but waiting-time complaints increased during Friday and Saturday dinner service. Review staffing and order flow during peak hours.
          </p>
        </blockquote>
      </div>
    </article>
  )
}
