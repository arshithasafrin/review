import { Link } from "react-router-dom"
import { useTitle } from "../wedge/Shell"

export default function NotFound() {
  useTitle("Page not found · Restrosights")
  return (
    <section className="mx-auto w-[min(640px,calc(100%-2rem))] py-28 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#5346d4]">404</p>
      <h1 className="mt-3 text-5xl font-semibold tracking-[-0.045em]">This page is not on the menu</h1>
      <p className="mt-4 text-[#5c6478]">The link does not match a page on this site.</p>
      <Link to="/" className="btn btn-primary mt-8">
        Back home <span aria-hidden="true">→</span>
      </Link>
    </section>
  )
}
