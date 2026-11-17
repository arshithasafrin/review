import iconUrl from "../assets/restrosights-icon.png"

// Lockup proportions measured from the brand-book horizontal lockup:
// gap = 0.2125 × icon height, wordmark width ≈ 4.25 × icon height.
// Plus Jakarta Sans ExtraBold at −0.03em tracks to that width at 0.723 × icon height.
const GAP_SCALE = 0.2125
const WORDMARK_SCALE = 0.723

export function LogoMark({ size = 32, className = "", title = "Restrosights" }) {
  const decorative = !title
  return (
    <img
      src={iconUrl}
      width={size}
      height={size}
      alt={decorative ? "" : title}
      aria-hidden={decorative || undefined}
      draggable="false"
      className={`shrink-0 ${className}`}
      style={{ width: size, height: size }}
    />
  )
}

export function Logo({ size = 36, wordmark = true, tone = "light", className = "" }) {
  const color = tone === "dark" ? "#F8F7F7" : "#102329"
  return (
    <span className={`inline-flex items-center ${className}`} style={{ gap: size * GAP_SCALE }}>
      <LogoMark size={size} title={wordmark ? "" : "Restrosights"} />
      {wordmark ? (
        <span
          className="whitespace-nowrap font-extrabold leading-none"
          style={{
            fontFamily: '"Plus Jakarta Sans", sans-serif',
            fontWeight: 800,
            letterSpacing: "-0.03em",
            color,
            fontSize: size * WORDMARK_SCALE,
          }}
        >
          Restrosights
        </span>
      ) : null}
    </span>
  )
}
