import { Button } from "../components/ui"
import { useLead } from "../components/LeadForm"
import { FaqBlock, PageIntro, useTitle } from "../wedge/Shell"

const VALUES = [
  ["Genuine reviews only", "No discounts, gifts, or payments for a Google review."],
  ["Private feedback first", "An unhappy guest can reach the team before posting in public."],
  ["One system", "The stand, the owner view, and the monthly report live together."],
  ["Clear for the floor", "Staff are not asked to chase reviews at the table."],
  ["Help when Google is messy", "The team can assist with a profile. Google still decides."],
  ["Honest limits", "No guaranteed rating, ranking, or reinstated profile."],
]

export default function About() {
  useTitle("About · Restrosights")
  const { openDemo } = useLead()

  return (
    <>
      <PageIntro title="Built for the way a restaurant actually runs">
        Restrosights exists so a restaurant can hear guests, invite genuine Google reviews, and read the month without five separate tools.
      </PageIntro>
      <section className="mx-auto grid w-[min(1000px,calc(100%-2rem))] gap-4 py-6 sm:grid-cols-2">
        <div className="h-56 rounded-[28px] bg-gradient-to-br from-[#f7f2ff] via-[#d5ccff] to-[#8d82f3]" />
        <div className="h-56 rounded-[28px] bg-gradient-to-br from-[#efeaff] via-[#c4b8ff] to-[#5148c0]" />
      </section>
      <section className="mx-auto w-[min(1100px,calc(100%-2rem))] py-16" aria-labelledby="values-heading">
        <h2 id="values-heading" className="text-center text-4xl font-semibold tracking-[-0.04em]">
          Our values guide us
        </h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {VALUES.map(([title, body]) => (
            <article key={title} className="wedge-card p-6">
              <div className="mb-4 grid h-11 w-11 place-items-center rounded-2xl bg-[#f3f0ff] text-[#5346d4]">✦</div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#5c6478]">{body}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="mx-auto w-[min(800px,calc(100%-2rem))] py-8 text-center">
        <h2 className="text-4xl font-semibold tracking-[-0.04em]">The floor and the office, on the same loop</h2>
        <p className="mt-4 text-[#5c6478]">
          The person at the counter should not need a new login. The owner should not need a spreadsheet to see what guests said last week. That split is the whole product.
        </p>
      </section>
      <section className="mx-auto w-[min(1000px,calc(100%-2rem))] py-12" aria-labelledby="numbers-heading">
        <h2 id="numbers-heading" className="text-center text-3xl font-semibold tracking-[-0.04em]">
          Restrosights in numbers
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-center text-sm text-[#5c6478]">
          Counts are published only when they can be verified. Nothing below is a customer total.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {[
            ["Restaurants", "Shown when verified"],
            ["Cities", "Shown when verified"],
            ["Outlets on one account", "From a single room to a group"],
          ].map(([label, value]) => (
            <div key={label} className="wedge-card p-6 text-center">
              <p className="text-2xl font-semibold tracking-tight">{value}</p>
              <p className="mt-2 text-sm text-[#8b90a3]">{label}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="mx-auto w-[min(760px,calc(100%-2rem))] py-16 text-center">
        <h2 className="text-4xl font-semibold tracking-[-0.04em]">Talk with the team</h2>
        <p className="mt-4 text-[#5c6478]">
          There is no public careers board on this site. If you run a restaurant, the useful next step is a short demo.
        </p>
        <Button className="mt-8" onClick={() => openDemo("about")}>
          Book a Demo
        </Button>
      </section>
      <FaqBlock />
    </>
  )
}
