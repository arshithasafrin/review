import silkUrl from "../assets/wedge-silk.png"

const BASE = {
  hero: "#f6f5ff",
  cta: "#ddd8ff",
  card: "#cfc8ff",
  login: "#463fa6",
}

const VEIL = {
  hero: "linear-gradient(180deg, #f6f5ff 0%, rgba(246,245,255,0.72) 42%, rgba(232,228,255,0.55) 78%, #ffffff 100%)",
  cta: "linear-gradient(180deg, rgba(246,245,255,0.9) 0%, rgba(232,228,255,0.78) 100%)",
  card: "linear-gradient(160deg, rgba(246,245,255,0.55) 0%, rgba(214,208,255,0.38) 100%)",
  login: "linear-gradient(180deg, rgba(246,245,255,0.45) 0%, rgba(220,214,255,0.2) 100%)",
}

export function SilkFill({ fade = "card", className = "", children }) {
  return (
    <div className={`silk-fill overflow-hidden ${className}`} style={{ background: BASE[fade] || BASE.card }}>
      <img
        src={silkUrl}
        alt=""
        className="silk-layer pointer-events-none absolute left-1/2 top-1/2 z-0 h-[180%] w-[180%] max-w-none -translate-x-1/2 -translate-y-1/2 object-cover opacity-70 mix-blend-soft-light"
      />
      <div className="silk-layer pointer-events-none absolute inset-0 z-0" style={{ background: VEIL[fade] || VEIL.card }} />
      {children}
    </div>
  )
}
