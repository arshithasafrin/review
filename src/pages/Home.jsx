import { Link } from "react-router-dom"
import { Button, SampleBadge } from "../components/ui"
import { useLead } from "../components/LeadForm"
import { CtaBand, FaqBlock, FeatureTrio, TrustRow, useTitle } from "../wedge/Shell"
import { SilkFill } from "../wedge/SilkFill"

export default function Home() {
  useTitle("Restrosights for Restaurants | Google Review Growth & Guest Feedback System")
  const { openDemo } = useLead()

  return (
    <>
      <header className="relative bg-[#f6f5ff]">
        <div className="mx-auto w-[min(620px,calc(100%-2rem))] px-2 pb-8 pt-24 text-center sm:pt-32">
          <h1 className="display text-[2.6rem] leading-[1.05] sm:text-[56px] lg:text-[72px] lg:leading-[72px]">
            Grow genuine reviews. Hear the guest first.
          </h1>
          <p className="mt-8 text-[18px] leading-[30px] tracking-[-0.01em] text-[#455366] sm:text-[20px]">
            Restrosights helps restaurants collect guest feedback, grow genuine Google reviews, support local SEO, and understand what diners really think — before it shows up in public.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button onClick={() => openDemo("hero")}>Get started</Button>
            <Link to="/features" className="btn btn-secondary">
              Learn more <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
        <div className="relative mt-6 h-[520px] sm:h-[560px]">
          <SilkFill fade="hero" className="absolute inset-x-0 bottom-0 h-full" />
          <HeroCards />
          <div className="relative mx-auto w-[min(420px,calc(100%-2rem))] px-2 pt-8 lg:hidden">
            <div className="float-card p-4">
              <SampleBadge />
              <div className="mt-3">
                <MiniRows />
              </div>
            </div>
          </div>
        </div>
      </header>
      <TrustRow />
      <FeatureTrio />
      <Split
        kicker="The review stand"
        title="A prompt where guests already pause"
        body="The stand sits at the counter or the billing point. A guest rates the visit. A good rating continues to a genuine Google review. A poor rating opens a private note to the team."
        visual={<TaskCard />}
      />
      <Split
        flip
        kicker="More than one outlet"
        title="See which location needs attention"
        body="Each restaurant can have its own stand, link, and monthly read. A group is not forced to treat every outlet as the same room."
        visual={<OutletCard />}
      />
      <Split
        kicker="One place for the team"
        title="Reputation, in one view"
        body="Feedback and the themes guests keep mentioning live in one owner view. Names and figures in this preview are samples, not a live restaurant."
        visual={<TeamCard />}
      />
      <Quotes />
      <FaqBlock />
      <CtaBand />
    </>
  )
}

function HeroCards() {
  return (
    <div className="relative mx-auto hidden h-full w-[min(1180px,calc(100%-4rem))] lg:block">
      <div className="float-card absolute left-[2%] top-[8%] w-[230px] p-4">
        <div className="flex -space-x-2">
          {["A", "R", "M", "S"].map((letter) => (
            <span key={letter} className="grid h-10 w-10 place-items-center rounded-full border-2 border-white bg-[#ece9ff] font-display text-sm font-medium text-[#463fa6]">
              {letter}
            </span>
          ))}
        </div>
        <p className="mt-3 text-xs text-[#64748b]">Sample guests</p>
      </div>
      <div className="float-card absolute left-[4%] top-[42%] w-[168px] px-4 py-3">
        <p className="text-xs text-[#64748b]">Sample</p>
        <p className="display text-[32px] leading-none">Outlets</p>
      </div>
      <div className="float-card absolute left-1/2 top-[4%] w-[340px] -translate-x-1/2 p-4">
        <div className="mb-2 flex justify-end">
          <SampleBadge />
        </div>
        <MiniRows />
      </div>
      <div className="float-card absolute right-[3%] top-[10%] w-[250px] p-4">
        <p className="display text-sm">What guests mention</p>
        <ul className="mt-3 space-y-2 text-sm text-[#455366]">
          {["Food", "Staff", "Waiting time"].map((item) => (
            <li key={item} className="flex items-center justify-between rounded-xl bg-[#f7f7f7] px-3 py-2">
              <span>{item}</span>
              <span className="text-xs font-medium text-[#463fa6]">Sample</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function MiniRows() {
  const rows = [
    ["Loved the biryani and the calm service.", "Food", "92%"],
    ["Waited a long time after ordering.", "Wait", "28%"],
  ]
  return (
    <ul className="space-y-3">
      {rows.map(([text, tag, pct]) => (
        <li key={tag}>
          <div className="flex items-center justify-between text-xs font-medium">
            <span className="text-[#0f172a]">{tag}</span>
            <span className="text-[#64748b]">{pct}</span>
          </div>
          <div className="mt-1 h-1.5 rounded-full bg-[#f0f0f0]">
            <div className="h-1.5 rounded-full bg-[#463fa6]" style={{ width: pct }} />
          </div>
          <p className="mt-1 text-sm text-[#455366]">{text}</p>
        </li>
      ))}
    </ul>
  )
}

function Split({ kicker, title, body, visual, flip = false }) {
  return (
    <section className="bg-white">
      <div className={`mx-auto grid w-[min(1280px,calc(100%-2rem))] items-center gap-12 px-2 py-16 lg:grid-cols-2 lg:gap-20 lg:py-24 ${flip ? "" : ""}`}>
        <div className={flip ? "lg:order-2" : ""}>
          <p className="font-display text-[16px] font-medium tracking-[0.01em] text-[#463fa6]">{kicker}</p>
          <h2 className="display mt-4 text-[36px] leading-[1.1] lg:text-[52px] lg:leading-[57px]">{title}</h2>
          <p className="mt-5 max-w-[451px] text-base leading-6 tracking-[-0.01em] text-[#455366]">{body}</p>
        </div>
        <div className={flip ? "lg:order-1" : ""}>{visual}</div>
      </div>
    </section>
  )
}

function TaskCard() {
  const rows = [
    ["Food", "92%"],
    ["Service", "84%"],
    ["Waiting time", "28%"],
    ["Ambience", "70%"],
  ]
  return (
    <SilkFill fade="card" className="grid min-h-[420px] place-items-center rounded-[28px] p-8">
      <div className="w-full max-w-[360px] rounded-[20px] bg-white p-5 shadow-[0_18px_40px_rgba(70,63,166,0.12)]">
        <div className="flex items-center justify-between">
          <p className="display text-lg">Recent feedback</p>
          <SampleBadge />
        </div>
        <ul className="mt-4 space-y-3">
          {rows.map(([label, pct]) => (
            <li key={label}>
              <div className="flex justify-between text-sm text-[#0f172a]">
                <span>{label}</span>
                <span className="text-[#64748b]">{pct}</span>
              </div>
              <div className="mt-1 h-1.5 rounded-full bg-[#f0f0f0]">
                <div className="h-1.5 rounded-full bg-[#463fa6]" style={{ width: pct }} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </SilkFill>
  )
}

function OutletCard() {
  return (
    <SilkFill fade="card" className="grid min-h-[420px] place-items-center rounded-[28px] p-8">
      <div className="w-full max-w-[340px] rounded-[20px] bg-white p-6 text-center shadow-[0_18px_40px_rgba(70,63,166,0.12)]">
        <SampleBadge />
        <p className="mt-4 text-sm text-[#64748b]">Outlets on this account</p>
        <p className="display mt-2 text-5xl">Shown live</p>
        <p className="mt-3 text-sm leading-6 text-[#455366]">A count goes here only after the restaurants are on Restrosights.</p>
      </div>
    </SilkFill>
  )
}

function TeamCard() {
  const people = [
    ["Floor", "Counter"],
    ["Owner", "All outlets"],
    ["Manager", "Service"],
  ]
  return (
    <SilkFill fade="card" className="grid min-h-[420px] place-items-center rounded-[28px] p-8">
      <div className="w-full max-w-[360px] rounded-[20px] bg-white p-5 shadow-[0_18px_40px_rgba(70,63,166,0.12)]">
        <p className="display text-lg">Who sees what</p>
        <ul className="mt-4 divide-y divide-[#f0f0f0]">
          {people.map(([name, role]) => (
            <li key={name} className="flex items-center justify-between py-3">
              <span className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-[#f6f5ff] font-display text-sm text-[#463fa6]">{name[0]}</span>
                <span className="text-sm font-medium text-[#0f172a]">{name}</span>
              </span>
              <span className="text-sm text-[#64748b]">{role}</span>
            </li>
          ))}
        </ul>
      </div>
    </SilkFill>
  )
}

function Quotes() {
  return (
    <section className="bg-white px-6 py-32" aria-labelledby="quotes-heading">
      <h2 id="quotes-heading" className="display text-center text-[40px] leading-[1.1] lg:text-[52px] lg:leading-[57px]">
        What restaurants say
      </h2>
      <p className="mx-auto mt-4 max-w-xl text-center text-base leading-6 text-[#455366]">
        These cards are placeholders. A quote goes here only after a restaurant has agreed to be named.
      </p>
      <div className="mx-auto mt-14 grid max-w-[1280px] items-start gap-6 md:grid-cols-3">
        {[0, 1, 2].map((n) => (
          <figure key={n} className={`rounded-[20px] bg-[#f7f7f7] p-8 ${n === 1 ? "lg:mt-10" : ""}`}>
            <SampleBadge />
            <blockquote className="mt-5 text-base leading-6 text-[#455366]">
              [Insert verified restaurant testimonial. No quote is published until the restaurant has approved the wording.]
            </blockquote>
            <figcaption className="mt-6 text-sm font-medium text-[#0f172a]">
              [Restaurant name]
              <span className="mt-1 block font-normal text-[#64748b]">[City]</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
