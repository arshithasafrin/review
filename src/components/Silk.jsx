import grainUrl from "../assets/grain.png"

export function FluidGlow({ variant = "hero" }) {
  return (
    <div className={`glow glow-${variant}`} aria-hidden="true">
      <span className="blob blob-a" />
      <span className="blob blob-b" />
      <span className="blob blob-c" />
      <span className="glow-grain" style={{ backgroundImage: `url(${grainUrl})` }} />
    </div>
  )
}
