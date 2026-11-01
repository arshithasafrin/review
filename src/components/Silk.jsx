import grainUrl from "../assets/grain.png"

export function Silk() {
  return (
    <div className="silk" aria-hidden="true">
      <div className="silk-base" />
      <div className="fold f1" />
      <div className="fold f2" />
      <div className="fold f3" />
      <div className="fold f4" />
      <div className="fold f5" />
      <div className="fold f6" />
      <div className="silk-grain" style={{ backgroundImage: `url(${grainUrl})` }} />
    </div>
  )
}
